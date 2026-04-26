interface Env {
  DB: D1Database;
  POSTMARK_API_TOKEN: string;
  CONTACT_EMAIL: string;
}

interface UploadedFile {
  name: string;
  key: string;
  url: string;
  size: number;
}

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  files?: UploadedFile[];
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = (await context.request.json()) as ContactPayload;

    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    if (!isValidEmail(body.email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const ip = context.request.headers.get('CF-Connecting-IP') || 'unknown';
    const userAgent = context.request.headers.get('User-Agent') || 'unknown';

    const validFiles = (body.files || []).filter(
      (f) => f.url && f.url.startsWith('/api/files/contact-uploads/') && !f.url.includes('@')
    );
    const fileUrls = validFiles.length > 0 ? JSON.stringify(validFiles) : null;

    // Save to D1
    await context.env.DB.prepare(
      'INSERT INTO contacts (name, email, message, ip_address, user_agent, file_urls) VALUES (?, ?, ?, ?, ?, ?)'
    ).bind(body.name, body.email, body.message, ip, userAgent, fileUrls).run();

    // Build file links HTML for email
    const siteUrl = 'https://captivepath.com';
    let filesHtml = '';
    if (validFiles.length > 0) {
      const fileListItems = validFiles.map(
        (f) => `<li><a href="${siteUrl}${escapeHtml(f.url)}" style="color: #145250;">${escapeHtml(f.name)}</a> (${formatFileSize(f.size)})</li>`
      ).join('');
      filesHtml = `
        <p><strong>Attached Files:</strong></p>
        <ul style="margin: 8px 0; padding-left: 20px;">${fileListItems}</ul>
      `;
    }

    // Send email via Postmark
    const contactEmail = context.env.CONTACT_EMAIL || 'zach@captivepath.com';

    if (context.env.POSTMARK_API_TOKEN) {
      try {
        const emailRes = await fetch('https://api.postmarkapp.com/email', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Postmark-Server-Token': context.env.POSTMARK_API_TOKEN,
          },
          body: JSON.stringify({
            From: `Captive Path <contact@captivepath.com>`,
            To: contactEmail,
            ReplyTo: body.email,
            Subject: `Captive Path inquiry from ${body.name}`,
            HtmlBody: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px;">
                <h2 style="color: #1E1E1E; margin-bottom: 20px;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
                <p><strong>Email:</strong> <a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></p>
                <p><strong>Message:</strong></p>
                <div style="background: #F5F0EB; padding: 16px; border-radius: 4px; white-space: pre-wrap;">${escapeHtml(body.message)}</div>
                ${filesHtml}
                <hr style="border: none; border-top: 1px solid #E8E0D8; margin: 24px 0;" />
                <p style="color: #6B6B6B; font-size: 12px;">
                  Submitted at ${new Date().toISOString()} from IP ${escapeHtml(ip)}
                </p>
              </div>
            `,
            MessageStream: 'outbound',
          }),
        });

        if (!emailRes.ok) {
          const errorBody = await emailRes.text();
          console.error(`Postmark email failed (${emailRes.status}): ${errorBody}`);
        }
      } catch (emailErr) {
        console.error('Postmark email error:', emailErr);
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Thank you. Your message has been sent.' }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
