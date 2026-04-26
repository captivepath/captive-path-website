import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Unable to send your message. Please try again later.');
    }
  }

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

      {status === 'error' && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
          {errorMessage}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center px-8 py-4 bg-teal-800 text-stone-50 text-sm font-medium tracking-wide rounded hover:bg-teal-700 transition-all duration-200 hover:shadow-lg hover:shadow-teal-900/20 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
