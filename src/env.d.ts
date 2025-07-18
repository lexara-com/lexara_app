/// <reference types="astro/client" />
/// <reference types="@astrojs/cloudflare" />

interface ImportMetaEnv {
  readonly STATSIG_SERVER_SECRET: string;
  readonly PUBLIC_STATSIG_CLIENT_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}