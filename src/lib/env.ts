// Runtime environment configuration
// This module provides access to environment-specific URLs that are set at runtime

export function getConsoleUrl(locals?: any): string {
  // Try to get from CloudFlare Worker runtime env first
  if (locals?.runtime?.env?.PUBLIC_CONSOLE_URL) {
    return locals.runtime.env.PUBLIC_CONSOLE_URL;
  }

  // Fallback to build-time env var
  return import.meta.env.PUBLIC_CONSOLE_URL || 'https://console.lexara.app';
}
