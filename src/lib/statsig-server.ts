import type { APIContext } from 'astro';

let Statsig: any = null;
let initialized = false;

// Dynamic import to avoid build issues in CloudFlare Workers
async function getStatsig() {
  if (!Statsig && typeof process !== 'undefined') {
    try {
      const module = await import('statsig-node');
      Statsig = module.default;
    } catch (e) {
      console.warn('Statsig not available in this environment');
    }
  }
  return Statsig;
}

export async function initStatsig() {
  // Skip initialization in CloudFlare Workers environment
  if (typeof process === 'undefined') {
    return;
  }
  
  const StatsigLib = await getStatsig();
  if (!initialized && StatsigLib && import.meta.env.STATSIG_SERVER_SECRET) {
    await StatsigLib.initialize(
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
  try {
    const StatsigLib = await getStatsig();
    if (!StatsigLib) return false;
    
    await initStatsig();
    const user = await getStatsigUser(context);
    return StatsigLib.checkGate(user, gateName);
  } catch (error) {
    console.warn('Statsig checkGate error:', error);
    return false;
  }
}

export async function getExperiment(experimentName: string, context: APIContext) {
  const StatsigLib = await getStatsig();
  if (!StatsigLib) {
    return {
      get: (key: string, defaultValue: any) => defaultValue,
      getID: () => 'default',
      getGroupName: () => 'control'
    };
  }
  
  await initStatsig();
  const user = await getStatsigUser(context);
  return StatsigLib.getExperiment(user, experimentName);
}

export async function getConfig(configName: string, context: APIContext) {
  const StatsigLib = await getStatsig();
  if (!StatsigLib) {
    return {
      get: (key: string, defaultValue: any) => defaultValue,
      getID: () => 'default'
    };
  }
  
  await initStatsig();
  const user = await getStatsigUser(context);
  return StatsigLib.getConfig(user, configName);
}

export async function getClientInitializeValues(context: APIContext) {
  try {
    const StatsigLib = await getStatsig();
    if (!StatsigLib) return {};
    
    await initStatsig();
    const user = await getStatsigUser(context);
    return await StatsigLib.getClientInitializeResponse(user);
  } catch (error) {
    console.warn('Statsig getClientInitializeValues error:', error);
    return {};
  }
}

export async function logServerEvent(eventName: string, user: any, value?: string | number, metadata?: Record<string, any>) {
  const StatsigLib = await getStatsig();
  if (!StatsigLib) {
    console.log('Event:', eventName, { user, value, metadata });
    return;
  }
  
  await initStatsig();
  StatsigLib.logEvent(user, eventName, value, metadata);
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