/** Public media base (Cloudflare R2). Not secret. */
export const MEDIA_BASE =
  import.meta.env.PUBLIC_MEDIA_BASE?.replace(/\/$/, '') ||
  'https://pub-b734554a82b94110b9cbcf66b2882939.r2.dev';

/** Image URL — keys are stored as `{id}.jpg` on R2. */
export function img(id: string, ext = 'jpg') {
  return `${MEDIA_BASE}/${id}.${ext}`;
}

/** Video URL — keys are stored as `{id}.mp4` on R2. */
export function vid(id: string, ext = 'mp4') {
  return `${MEDIA_BASE}/${id}.${ext}`;
}

/** Cover helper (same as img; CSS handles 16:9 crop). */
export function cover(id: string, ext = 'jpg') {
  return img(id, ext);
}
