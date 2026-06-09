// Runtime environment configuration
// This module provides access to environment-specific URLs that are set at runtime
import { env } from 'cloudflare:workers';

export function getConsoleUrl(_locals?: any): string {
  // Try to get from the CloudFlare Worker runtime env first.
  // As of @astrojs/cloudflare v13, bindings/vars are accessed via the
  // `cloudflare:workers` module rather than `Astro.locals.runtime.env`.
  try {
    if (env.PUBLIC_CONSOLE_URL) {
      return env.PUBLIC_CONSOLE_URL;
    }
  } catch {
    // `env` is unavailable outside the worker runtime (e.g. during prerender)
  }

  // Fallback to build-time env var
  return import.meta.env.PUBLIC_CONSOLE_URL || 'https://console.lexara.app';
}
