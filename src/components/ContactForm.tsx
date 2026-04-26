import { useState, useRef, useCallback, useEffect } from 'react';

interface UploadedFile {
  name: string;
  key: string;
  url: string;
  size: number;
}

interface PendingFile {
  file: File;
  status: 'pending' | 'uploading' | 'done' | 'error';
  progress: number;
  result?: UploadedFile;
  error?: string;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500 MB

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export default function ContactForm({ siteKey }: { siteKey?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [files, setFiles] = useState<PendingFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const dragCounterRef = useRef(0);

  useEffect(() => {
    if (!siteKey || !turnstileRef.current || status !== 'idle') return;

    turnstileWidgetId.current = null;

    function renderWidget() {
      if (!window.turnstile || !turnstileRef.current) return;
      if (turnstileWidgetId.current !== null) return;
      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: siteKey,
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        theme: 'light',
      });
    }

    if (window.turnstile) {
      renderWidget();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          renderWidget();
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [siteKey, status]);

  const addFiles = useCallback((newFiles: FileList | File[]) => {
    const toAdd: PendingFile[] = [];
    for (const file of Array.from(newFiles)) {
      if (file.size > MAX_FILE_SIZE) {
        setErrorMessage(`"${file.name}" exceeds the 500 MB limit.`);
        continue;
      }
      toAdd.push({ file, status: 'pending', progress: 0 });
    }
    if (toAdd.length > 0) {
      setFiles((prev) => [...prev, ...toAdd]);
      uploadFiles(toAdd);
    }
  }, []);

  async function uploadFiles(pendingFiles: PendingFile[]) {
    for (const pf of pendingFiles) {
      setFiles((prev) =>
        prev.map((f) => (f.file === pf.file ? { ...f, status: 'uploading' } : f))
      );

      try {
        const formData = new FormData();
        formData.append('files', pf.file);

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();

        if (!res.ok) {
          setFiles((prev) =>
            prev.map((f) =>
              f.file === pf.file ? { ...f, status: 'error', error: data.error || 'Upload failed' } : f
            )
          );
          continue;
        }

        const uploadedFile = data.files[0] as UploadedFile;
        setFiles((prev) =>
          prev.map((f) =>
            f.file === pf.file ? { ...f, status: 'done', progress: 100, result: uploadedFile } : f
          )
        );
      } catch {
        setFiles((prev) =>
          prev.map((f) =>
            f.file === pf.file ? { ...f, status: 'error', error: 'Upload failed' } : f
          )
        );
      }
    }
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function handleDragEnter(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current++;
    if (dragCounterRef.current === 1) {
      setIsDragging(true);
    }
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current--;
    if (dragCounterRef.current === 0) {
      setIsDragging(false);
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current = 0;
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const uploadedFiles = files
      .filter((f) => f.status === 'done' && f.result)
      .map((f) => f.result!);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, files: uploadedFiles, turnstileToken: turnstileToken || undefined }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setTurnstileToken('');
        if (turnstileWidgetId.current !== null && window.turnstile) {
          window.turnstile.reset(turnstileWidgetId.current);
        }
        return;
      }

      setStatus('sent');
      setFiles([]);
      setTurnstileToken('');
      if (turnstileWidgetId.current !== null && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Unable to send your message. Please try again later.');
      setTurnstileToken('');
      if (turnstileWidgetId.current !== null && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
    }
  }

  const hasUploading = files.some((f) => f.status === 'uploading');

  if (status === 'sent') {
    return (
      <div className="bg-stone-100 border border-stone-200 rounded-sm p-10 md:p-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-teal-600 rounded-full" />
          <h3 className="font-display font-semibold text-graphite-900 text-xl">
            Message sent
          </h3>
        </div>
        <p className="text-graphite-600 text-base leading-relaxed mb-6">
          Thank you for reaching out. Expect a response within 1–2 business days.
          Every serious inquiry gets direct attention.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-medium text-teal-800 hover:text-teal-700 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-graphite-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={status === 'sending'}
          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-graphite-800 text-base placeholder:text-graphite-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors disabled:opacity-60"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-graphite-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={status === 'sending'}
          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-graphite-800 text-base placeholder:text-graphite-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors disabled:opacity-60"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-graphite-700 mb-2">
          What are you working on?
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          disabled={status === 'sending'}
          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-graphite-800 text-base placeholder:text-graphite-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors resize-y disabled:opacity-60"
          placeholder="Briefly describe the opportunity or idea you'd like to explore."
        />
      </div>

      {/* File Upload Drop Zone */}
      <div>
        <label className="block text-sm font-medium text-graphite-700 mb-2">
          Attachments <span className="text-graphite-400 font-normal">(optional)</span>
        </label>
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-sm p-8 text-center transition-colors cursor-pointer ${
            isDragging
              ? 'border-teal-700 bg-teal-800/5'
              : 'border-stone-200 bg-stone-50 hover:border-stone-300'
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => { if (e.target.files) { addFiles(e.target.files); e.target.value = ''; } }}
          />
          <div className="flex flex-col items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={isDragging ? 'text-teal-700' : 'text-graphite-400'}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <p className={`text-sm ${isDragging ? 'text-teal-800 font-medium' : 'text-graphite-500'}`}>
              {isDragging ? 'Drop files here' : 'Drop files here or click to browse'}
            </p>
            <p className="text-xs text-graphite-400">
              Any file type up to 500 MB
            </p>
          </div>
        </div>

        {/* File list */}
        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((pf, idx) => (
              <li
                key={`${pf.file.name}-${idx}`}
                className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-sm px-4 py-2.5 text-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {pf.status === 'uploading' && (
                    <div className="w-4 h-4 border-2 border-teal-700 border-t-transparent rounded-full animate-spin shrink-0" />
                  )}
                  {pf.status === 'done' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#145250" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {pf.status === 'error' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                  )}
                  {pf.status === 'pending' && (
                    <div className="w-4 h-4 bg-stone-300 rounded-full shrink-0" />
                  )}
                  <span className="text-graphite-700 truncate">{pf.file.name}</span>
                  <span className="text-graphite-400 shrink-0">{formatFileSize(pf.file.size)}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                  className="ml-3 text-graphite-400 hover:text-graphite-700 transition-colors shrink-0"
                  aria-label={`Remove ${pf.file.name}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Turnstile widget */}
      {siteKey && <div ref={turnstileRef} className="mb-2" />}

      {status === 'error' && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
          {errorMessage}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'sending' || hasUploading || (!!siteKey && !turnstileToken)}
          className="inline-flex items-center justify-center px-8 py-4 bg-teal-800 text-stone-50 text-sm font-medium tracking-wide rounded hover:bg-teal-700 transition-all duration-200 hover:shadow-lg hover:shadow-teal-900/20 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending...' : hasUploading ? 'Uploading files...' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
