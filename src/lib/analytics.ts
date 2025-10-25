// Analytics utilities for environment detection and tracking

export function getEnvironment(hostname: string): string {
  if (hostname.includes('test.lexara.app') || hostname.includes('lexara-app-test')) {
    return 'test';
  } else if (hostname.includes('dev.lexara.app') || hostname.includes('lexara-app-dev')) {
    return 'development';
  } else if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    return 'local';
  } else if (hostname.includes('lexara.app')) {
    return 'production';
  }
  return 'unknown';
}

export function getGAMeasurementId(): string {
  return 'G-RQ7HHFQ4LE';
}
