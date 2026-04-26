interface Env {
  UPLOADS: R2Bucket;
}

const SAFE_CONTENT_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'audio/mpeg',
  'audio/wav',
  'audio/ogg',
  'video/mp4',
  'video/webm',
  'video/quicktime',
  'text/plain',
  'application/zip',
  'application/x-zip-compressed',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/msword',
  'application/vnd.ms-excel',
  'application/vnd.ms-powerpoint',
]);

const INLINE_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'video/mp4',
  'video/webm',
]);

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const path = (context.params.path as string[]).join('/');

  if (!path.startsWith('contact-uploads/')) {
    return new Response('Not found', { status: 404 });
  }

  const object = await context.env.UPLOADS.get(path);

  if (!object) {
    return new Response('File not found', { status: 404 });
  }

  const storedType = object.httpMetadata?.contentType || 'application/octet-stream';
  const contentType = SAFE_CONTENT_TYPES.has(storedType) ? storedType : 'application/octet-stream';

  const headers = new Headers();
  headers.set('Content-Type', contentType);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');

  const originalName = object.customMetadata?.originalName;
  const safeName = originalName ? originalName.replace(/[\x00-\x1f\x7f]/g, '_').replace(/\\/g, '\\\\').replace(/"/g, '\\"') : 'download';
  const disposition = INLINE_TYPES.has(contentType) ? 'inline' : 'attachment';
  headers.set('Content-Disposition', `${disposition}; filename="${safeName}"`);

  return new Response(object.body, { headers });
};
