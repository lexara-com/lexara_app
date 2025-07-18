import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
    functionPerRoute: false,
  }),
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['node:zlib', 'zlib', 'statsig-node'],
    },
  },
});