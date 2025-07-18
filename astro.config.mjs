import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'advanced',
    functionPerRoute: false,
  }),
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['node:zlib', 'zlib', 'statsig-node'],
    },
    build: {
      // Inline all assets to avoid 404 errors
      assetsInlineLimit: 100000, // 100KB limit for inlining
    },
  },
  build: {
    inlineStylesheets: 'always', // Inline all CSS
  },
});