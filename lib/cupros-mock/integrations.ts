import type { IntegrationItem, IntegrationsPayload } from './types';

export const INTEGRATION_CATEGORIES = [
  'All',
  'Retail Operations',
  'Wholesale & Supply',
  'ERP & Manufacturing',
  'Delivery & Fulfillment',
  'Listings & Discovery',
  'Marketing & Messaging',
  'Compliance & Reporting',
] as const;

const INTEGRATIONS: IntegrationItem[] = [
  {
    name: 'Meadow',
    category: 'Retail Operations',
    value: 'Core Retail Sync',
    status: 'Connected',
    lastSync: '2m ago',
    powers: 'Menu, Orders, Compliance, Analytics',
  },
  {
    name: 'Nabis',
    category: 'Wholesale & Supply',
    value: 'Wholesale Supply Network',
    status: 'Connected',
    lastSync: '15m ago',
    powers: 'Catalog, Reordering, Analytics',
  },
  {
    name: 'Canix',
    category: 'ERP & Manufacturing',
    value: 'Production & ERP Data',
    status: 'Available',
    powers: 'Catalog, Compliance, Analytics',
  },
  {
    name: 'Flower Co.',
    category: 'Delivery & Fulfillment',
    value: 'Delivery Channel Partner',
    status: 'Available',
    powers: 'Orders, Delivery, Analytics',
  },
  {
    name: 'Weedmaps',
    category: 'Listings & Discovery',
    value: 'Menu & Discovery Sync',
    status: 'Connected',
    lastSync: '5m ago',
    powers: 'Listings, Menu, Reviews',
  },
  {
    name: 'Leafly',
    category: 'Listings & Discovery',
    value: 'Cannabis Discovery Network',
    status: 'Needs Attention',
    powers: 'Listings, Menu',
  },
  {
    name: 'Metrc',
    category: 'Compliance & Reporting',
    value: 'State Track & Trace',
    status: 'Connected',
    lastSync: '1m ago',
    powers: 'Compliance, Orders',
  },
  {
    name: 'Klaviyo',
    category: 'Marketing & Messaging',
    value: 'Email & SMS Automation',
    status: 'Available',
    powers: 'Campaigns, Customers',
  },
];

export function getIntegrationsPayload(): IntegrationsPayload {
  const connected = INTEGRATIONS.filter((i) => i.status === 'Connected').length;
  const needsAttention = INTEGRATIONS.filter((i) => i.status === 'Needs Attention').length;

  return {
    header: {
      title: 'Integrations',
      description: 'Connect retail, wholesale, listings, and compliance systems.',
      orgName: 'Green Coast Collectives',
    },
    categories: [...INTEGRATION_CATEGORIES],
    summary: { connected, needsAttention },
    integrations: INTEGRATIONS,
  };
}

export function getIntegrationsList(): IntegrationItem[] {
  return INTEGRATIONS;
}
