import { defineMiddleware } from 'astro:middleware';
import { italicizeProductNames } from './lib/brand-italics';

// House style: "Lexara Engage" / "Lexara Access" always show the product name in
// italics. Applied to visible page text only (see lib/brand-italics.ts).
export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  if (!response.headers.get('content-type')?.includes('text/html')) return response;
  const html = await response.text();
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  return new Response(italicizeProductNames(html), { status: response.status, statusText: response.statusText, headers });
});
