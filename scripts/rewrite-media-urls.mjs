#!/usr/bin/env node
/**
 * Rewrite Cloudinary URLs → R2 using /tmp/r2-migrate/manifest.json
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const MEDIA_BASE = 'https://pub-b734554a82b94110b9cbcf66b2882939.r2.dev';
const manifest = JSON.parse(readFileSync('/tmp/r2-migrate/manifest.json', 'utf8'));
const byId = new Map(manifest.filter((m) => m.key).map((m) => [m.id, m]));

function r2Url(id) {
  const m = byId.get(id);
  if (!m) throw new Error(`No manifest entry for ${id}`);
  return `${MEDIA_BASE}/${m.key}`;
}

const importLine = `import { img, vid } from '../../lib/media';`;
const importImgOnly = `import { img } from '../../lib/media';`;

function stripLocalHelpers(text) {
  return text
    .replace(/\nexport function img\(id\) \{\n  return `https:\/\/res\.cloudinary\.com\/hnl3cmgj\/image\/upload\/[^`]+`;\n\}\n/g, '\n')
    .replace(/\nexport function vid\(id\) \{\n  return `https:\/\/res\.cloudinary\.com\/hnl3cmgj\/video\/upload\/[^`]+`;\n\}\n/g, '\n');
}

function rewriteCovers(text) {
  return text.replace(
    /https:\/\/res\.cloudinary\.com\/hnl3cmgj\/(?:image|video)\/upload\/[^"\s]+\/(tianjin2026\/[^"\s]+)/g,
    (_all, id) => r2Url(id),
  );
}

function ensureImport(text, hasVid) {
  if (text.includes("from '../../lib/media'") || text.includes('from "../../lib/media"')) {
    return text;
  }
  // insert after frontmatter
  const m = text.match(/^---\n[\s\S]*?\n---\n/);
  if (!m) return text;
  const line = hasVid ? importLine : importImgOnly;
  return text.slice(0, m[0].length) + '\n' + line + '\n' + text.slice(m[0].length);
}

const blogDir = 'src/content/blog';
const files = readdirSync(blogDir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

let changed = 0;
for (const file of files) {
  const path = join(blogDir, file);
  let text = readFileSync(path, 'utf8');
  const before = text;
  const hasVid = /vid\(/.test(text) || /export function vid/.test(text);
  const hasImg = /img\(/.test(text) || /export function img/.test(text);

  text = rewriteCovers(text);

  if (file.endsWith('.mdx') && (hasImg || hasVid)) {
    text = stripLocalHelpers(text);
    text = ensureImport(text, hasVid);
  }

  if (text !== before) {
    writeFileSync(path, text);
    changed++;
    console.log('updated', path);
  }
}

// index.astro
{
  const path = 'src/pages/index.astro';
  let text = readFileSync(path, 'utf8');
  const before = text;
  text = rewriteCovers(text);
  // if still cloudinary river image as full URL — rewriteCovers handles it
  if (text !== before) {
    writeFileSync(path, text);
    changed++;
    console.log('updated', path);
  }
}

console.log(`Rewrote ${changed} files`);
