import { StatsigClient } from '@statsig/js-client';

let statsigClient: StatsigClient | null = null;

export async function initStatsigClient(user: any, initializeValues: any) {
  if (!statsigClient && import.meta.env.PUBLIC_STATSIG_CLIENT_KEY) {
    statsigClient = new StatsigClient(
      import.meta.env.PUBLIC_STATSIG_CLIENT_KEY,
      user,
      {
        initializeValues,
        environment: { tier: import.meta.env.MODE }
      }
    );
    await statsigClient.initializeAsync();
  }
  return statsigClient;
}

export function getStatsigClient() {
  return statsigClient;
}

export function checkGate(gateName: string) {
  if (!statsigClient) {
    console.warn('Statsig client not initialized');
    return false;
  }
  return statsigClient.checkGate(gateName);
}

export function getExperiment(experimentName: string) {
  if (!statsigClient) {
    console.warn('Statsig client not initialized');
    return {};
  }
  return statsigClient.getExperiment(experimentName);
}

export function getConfig(configName: string) {
  if (!statsigClient) {
    console.warn('Statsig client not initialized');
    return {};
  }
  return statsigClient.getConfig(configName);
}