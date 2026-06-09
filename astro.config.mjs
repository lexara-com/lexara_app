import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['node:zlib', 'zlib'],
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
