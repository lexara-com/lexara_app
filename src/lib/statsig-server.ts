import Statsig from 'statsig-node';
import type { APIContext } from 'astro';

let initialized = false;

export async function initStatsig() {
  if (!initialized && import.meta.env.STATSIG_SERVER_SECRET) {
    await Statsig.initialize(
      import.meta.env.STATSIG_SERVER_SECRET,
      {
        environment: { tier: import.meta.env.MODE }
      }
    );
    initialized = true;
  }
}

export async function getStatsigUser(context: APIContext) {
  const userId = context.cookies.get('userId')?.value || `anon-${crypto.randomUUID()}`;
  
  if (!context.cookies.has('userId')) {
    context.cookies.set('userId', userId, {
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365
    });
  }

  return {
    userID: userId,
    customIDs: {
      stableID: userId
    }
  };
}

export async function checkGate(gateName: string, context: APIContext) {
  await initStatsig();
  const user = await getStatsigUser(context);
  return Statsig.checkGate(user, gateName);
}

export async function getExperiment(experimentName: string, context: APIContext) {
  await initStatsig();
  const user = await getStatsigUser(context);
  return Statsig.getExperiment(user, experimentName);
}

export async function getConfig(configName: string, context: APIContext) {
  await initStatsig();
  const user = await getStatsigUser(context);
  return Statsig.getConfig(user, configName);
}

export async function getClientInitializeValues(context: APIContext) {
  await initStatsig();
  const user = await getStatsigUser(context);
  return await Statsig.getClientInitializeResponse(user);
}

export async function logServerEvent(eventName: string, user: any, value?: string | number, metadata?: Record<string, any>) {
  await initStatsig();
  Statsig.logEvent(user, eventName, value, metadata);
}

export async function logPageView(context: APIContext, pageName: string) {
  const user = await getStatsigUser(context);
  const metadata = {
    url: context.url.href,
    path: context.url.pathname,
    userAgent: context.request.headers.get('user-agent'),
    referer: context.request.headers.get('referer'),
    timestamp: new Date().toISOString(),
  };
  await logServerEvent('page_view_server', user, pageName, metadata);
}