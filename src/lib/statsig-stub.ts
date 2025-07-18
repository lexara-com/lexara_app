// Temporary stub for Statsig until we get the correct package names

export async function checkGate(gateName: string, context: any): Promise<boolean> {
  console.log(`[Statsig Stub] checkGate called for: ${gateName}`);
  return false;
}

export async function getClientInitializeValues(context: any): Promise<any> {
  console.log('[Statsig Stub] getClientInitializeValues called');
  return {};
}

export async function getStatsigUser(context: any): Promise<any> {
  console.log('[Statsig Stub] getStatsigUser called');
  return {
    userID: 'stub-user',
    customIDs: {
      stableID: 'stub-user'
    }
  };
}