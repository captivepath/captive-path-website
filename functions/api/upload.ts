interface Env {
  UPLOADS: R2Bucket;
}

const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500 MB
const MAX_FILES_PER_REQUEST = 10;

const ALLOWED_ORIGINS = [
  'https://captivepath.com',
  'https://www.captivepath.com',
];

function getCorsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get('Origin') || '';
  const isPreview = origin.endsWith('.captive-path-website.pages.dev');
  const allowed = ALLOWED_ORIGINS.includes(origin) || isPreview;
  return {
    'Access-Control-Allow-Origin': allowed ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = getCorsHeaders(context.request);

  try {
    const contentType = context.request.headers.get('Content-Type') || '';

    if (!contentType.includes('multipart/form-data')) {
      return new Response(
        JSON.stringify({ error: 'Expected multipart/form-data' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const formData = await context.request.formData();
    const files = formData.getAll('files');

    if (!files.length) {
      return new Response(
        JSON.stringify({ error: 'No files provided.' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    if (files.length > MAX_FILES_PER_REQUEST) {
      return new Response(
        JSON.stringify({ error: `Maximum ${MAX_FILES_PER_REQUEST} files per upload.` }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const uploaded: { name: string; key: string; url: string; size: number }[] = [];

    for (const file of files) {
      if (!(file instanceof File)) continue;

      if (file.size > MAX_FILE_SIZE) {
        return new Response(
          JSON.stringify({ error: `File "${file.name}" exceeds the 500 MB limit.` }),
          { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
      }

      const timestamp = Date.now();
      const uniqueId = crypto.randomUUID().slice(0, 8);
      const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const key = `contact-uploads/${timestamp}-${uniqueId}-${sanitizedName}`;

      await context.env.UPLOADS.put(key, file.stream(), {
        httpMetadata: { contentType: file.type },
        customMetadata: { originalName: file.name },
      });

      uploaded.push({
        name: file.name,
        key,
        url: `/api/files/${key}`,
        size: file.size,
      });
    }

    return new Response(
      JSON.stringify({ success: true, files: uploaded }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  } catch (err) {
    console.error('Upload error:', err);
    return new Response(
      JSON.stringify({ error: 'Upload failed. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
};

export const onRequestOptions: PagesFunction = async (context) => {
  return new Response(null, { status: 204, headers: getCorsHeaders(context.request) });
};
