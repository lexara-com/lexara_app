import type { APIRoute } from 'astro';

// Public pages people can reach from the site's menus, plus the bar partner pages.
// Add a path here when a new public page goes live.
const PAGES = [
  '/',
  '/pricing',
  '/features',
  '/integrations',
  '/demo',
  '/contact',
  '/help',
  '/sbmi',
  '/wysb',
  '/privacy',
  '/terms',
  '/cookies',
];

export const prerender = false;

export const GET: APIRoute = () => {
  const urls = PAGES.map((path) => `  <url><loc>https://lexara.app${path}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } },
  );
};
