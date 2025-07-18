import { getStatsigClient } from './statsig-client';

export function logEvent(eventName: string, value?: string | number, metadata?: Record<string, any>) {
  const client = getStatsigClient();
  if (client) {
    client.logEvent(eventName, value, metadata);
  }
}

export function logPageView(pageName: string, metadata?: Record<string, any>) {
  const client = getStatsigClient();
  if (client) {
    const enrichedMetadata = {
      ...metadata,
      url: window.location.href,
      path: window.location.pathname,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
    };
    client.logEvent('page_view', pageName, enrichedMetadata);
  }
}

export function logClick(elementName: string, metadata?: Record<string, any>) {
  const client = getStatsigClient();
  if (client) {
    client.logEvent('click', elementName, metadata);
  }
}

export function logConversion(conversionType: string, value?: number, metadata?: Record<string, any>) {
  const client = getStatsigClient();
  if (client) {
    client.logEvent('conversion', conversionType, {
      ...metadata,
      value,
    });
  }
}