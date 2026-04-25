interface Env {
  DB: D1Database;
  RESEND_API_KEY: string;
  CONTACT_EMAIL: string;
}

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

    // Save to D1
    await context.env.DB.prepare(
      'INSERT INTO contacts (name, email, message, ip_address, user_agent) VALUES (?, ?, ?, ?, ?)'
    ).bind(body.name, body.email, body.message, ip, userAgent).run();

    // Send email via Resend
    const contactEmail = context.env.CONTACT_EMAIL || 'zach@captivepath.com';

    if (context.env.RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Captive Path <contact@captivepath.com>',
          to: [contactEmail],
          reply_to: body.email,
          subject: `Captive Path inquiry from ${body.name}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px;">
              <h2 style="color: #1E1E1E; margin-bottom: 20px;">New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
              <p><strong>Email:</strong> <a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></p>
              <p><strong>Message:</strong></p>
              <div style="background: #F5F0EB; padding: 16px; border-radius: 4px; white-space: pre-wrap;">${escapeHtml(body.message)}</div>
              <hr style="border: none; border-top: 1px solid #E8E0D8; margin: 24px 0;" />
              <p style="color: #6B6B6B; font-size: 12px;">
                Submitted at ${new Date().toISOString()} from IP ${escapeHtml(ip)}
              </p>
            </div>
          `,
        }),
      });
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
