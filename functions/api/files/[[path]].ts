interface Env {
  UPLOADS: R2Bucket;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const path = (context.params.path as string[]).join('/');

  const object = await context.env.UPLOADS.get(path);

  if (!object) {
    return new Response('File not found', { status: 404 });
  }

  const headers = new Headers();
  headers.set('Content-Type', object.httpMetadata?.contentType || 'application/octet-stream');
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');

  const originalName = object.customMetadata?.originalName;
  if (originalName) {
    headers.set('Content-Disposition', `inline; filename="${originalName}"`);
  }

  return new Response(object.body, { headers });
};
