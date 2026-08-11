#!/usr/bin/env node
/**
 * Download Cloudinary assets → upload to Cloudflare R2.
 * Usage: node --env-file=.env scripts/migrate-to-r2.mjs
 */
import { createReadStream, createWriteStream, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';

const CLOUD = 'hnl3cmgj';
const STAGE = '/tmp/r2-migrate/files';
const CONCURRENCY = 4;
const SKIP_EXISTING = process.env.R2_SKIP_EXISTING !== '0';

const accountId = process.env.R2_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const bucket = process.env.R2_BUCKET;
const publicBase = (process.env.R2_PUBLIC_BASE || '').replace(/\/$/, '');

if (!accountId || accountId.startsWith('your-') || !accessKeyId || !secretAccessKey || !bucket) {
  console.error('Missing R2 credentials in env');
  process.exit(1);
}

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId, secretAccessKey },
});

function loadIds(file, kind) {
  return readFileSync(file, 'utf8')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((id) => ({ id, kind }));
}

const jobs = [
  ...loadIds('/tmp/r2-migrate/image-ids.txt', 'image'),
  ...loadIds('/tmp/r2-migrate/video-ids.txt', 'video'),
];

mkdirSync(STAGE, { recursive: true });

function cloudUrl(kind, id) {
  if (kind === 'video') {
    return `https://res.cloudinary.com/${CLOUD}/video/upload/${id}`;
  }
  // web-sized JPEG to keep storage under R2 free tier
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_jpg,q_auto:good,w_2000/${id}`;
}

function extFor(contentType, kind) {
  if (contentType?.includes('png')) return '.png';
  if (contentType?.includes('webp')) return '.webp';
  if (contentType?.includes('gif')) return '.gif';
  if (contentType?.includes('mp4')) return '.mp4';
  if (contentType?.includes('webm')) return '.webm';
  if (contentType?.includes('quicktime')) return '.mov';
  return kind === 'video' ? '.mp4' : '.jpg';
}

async function download(job) {
  const url = cloudUrl(job.kind, job.id);
  const tmpBase = join(STAGE, job.id);
  mkdirSync(dirname(tmpBase), { recursive: true });

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`download ${res.status} ${url}`);
  }
  const contentType = res.headers.get('content-type') || '';
  const ext = extFor(contentType, job.kind);
  const path = tmpBase + ext;
  if (existsSync(path) && statSync(path).size > 0) {
    return { ...job, path, contentType: contentType.split(';')[0] || (job.kind === 'video' ? 'video/mp4' : 'image/jpeg'), ext, skippedDl: true };
  }
  await pipeline(res.body, createWriteStream(path));
  return {
    ...job,
    path,
    contentType: contentType.split(';')[0] || (job.kind === 'video' ? 'video/mp4' : 'image/jpeg'),
    ext,
  };
}

async function alreadyOnR2(key) {
  try {
    await client.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
    return true;
  } catch {
    return false;
  }
}

async function upload(file) {
  // Keep Cloudinary public_id as key + extension for Content-Type clarity
  const key = file.id + file.ext;
  if (SKIP_EXISTING && (await alreadyOnR2(key))) {
    return { key, skipped: true };
  }
  const body = createReadStream(file.path);
  const size = statSync(file.path).size;
  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: file.contentType,
      ContentLength: size,
    }),
  );
  return { key, skipped: false, size };
}

async function mapPool(items, limit, fn) {
  const results = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

const manifest = [];
let ok = 0;
let fail = 0;

console.log(`Migrating ${jobs.length} assets → r2://${bucket} (concurrency ${CONCURRENCY})`);

await mapPool(jobs, CONCURRENCY, async (job, idx) => {
  const label = `[${idx + 1}/${jobs.length}] ${job.kind} ${job.id}`;
  try {
    const file = await download(job);
    const up = await upload(file);
    ok++;
    const status = up.skipped ? 'skip-r2' : file.skippedDl ? 'dl-cached+up' : 'ok';
    console.log(`${label} → ${up.key} (${status}${up.size ? `, ${Math.round(up.size / 1024)}k` : ''})`);
    manifest.push({ id: job.id, kind: job.kind, key: up.key, publicUrl: `${publicBase}/${up.key}` });
  } catch (e) {
    fail++;
    console.error(`${label} FAIL: ${e.message}`);
    manifest.push({ id: job.id, kind: job.kind, error: e.message });
  }
});

writeFileSync('/tmp/r2-migrate/manifest.json', JSON.stringify(manifest, null, 2));
console.log(`\nDone: ${ok} ok, ${fail} fail`);
console.log('Manifest: /tmp/r2-migrate/manifest.json');
if (fail) process.exit(1);
