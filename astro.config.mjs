// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://tianjin2026.ottv.ch',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [mdx()],
});
