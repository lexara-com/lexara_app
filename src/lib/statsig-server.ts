import type { APIContext } from 'astro';

// NOTE: The `statsig-node` SDK is a Node-only package that cannot run in the
// Cloudflare Workers (workerd) runtime this site deploys to. Server-side
// Statsig evaluation therefore always fell back to defaults, so the dependency
// has been removed and these helpers return those defaults directly.
//
// Real Statsig analytics runs client-side via the CDN script in Layout.astro
// using `@statsig/js-client`. If server-side evaluation is needed in the
// future, use the Statsig HTTP API (fetch-based) instead of the Node SDK.

export async function initStatsig(): Promise<void> {
  // No-op: no server-side Statsig SDK in the Workers runtime.
}

export async function getStatsigUser(context: APIContext) {
  const userId = context.cookies.get('userId')?.value || `anon-${crypto.randomUUID()}`;

  if (!context.cookies.has('userId')) {
    context.cookies.set('userId', userId, {
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return {
    userID: userId,
    customIDs: {
      stableID: userId,
    },
  };
}

export async function checkGate(_gateName: string, _context: APIContext): Promise<boolean> {
  return false;
}

export async function getExperiment(_experimentName: string, _context: APIContext) {
  return {
    get: (_key: string, defaultValue: any) => defaultValue,
    getID: () => 'default',
    getGroupName: () => 'control',
  };
}

export async function getConfig(_configName: string, _context: APIContext) {
  return {
    get: (_key: string, defaultValue: any) => defaultValue,
    getID: () => 'default',
  };
}

export async function getClientInitializeValues(_context: APIContext): Promise<Record<string, any>> {
  return {};
}

export async function logServerEvent(
  eventName: string,
  user: any,
  value?: string | number,
  metadata?: Record<string, any>
): Promise<void> {
  console.log('Event:', eventName, { user, value, metadata });
}

export async function logPageView(context: APIContext, pageName: string): Promise<void> {
  const user = await getStatsigUser(context);
  await logServerEvent('page_view_server', user, pageName, {
    url: context.url.href,
    path: context.url.pathname,
    userAgent: context.request.headers.get('user-agent'),
    referer: context.request.headers.get('referer'),
    timestamp: new Date().toISOString(),
  });
}
