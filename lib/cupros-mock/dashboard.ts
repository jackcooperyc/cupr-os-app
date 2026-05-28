import { getIntegrationsPayload } from './integrations';
import { buildComplianceActions, getPreflightChecks } from './preflight';
import type { DashboardPayload } from './types';

export function getDashboardPayload(): DashboardPayload {
  const preflight = getPreflightChecks();
  const integrations = getIntegrationsPayload();

  return {
    header: {
      title: 'UIN Network Overview',
      description:
        'Unified Inventory Network orchestration across 12 active locations — menu, orders, listings, and compliance in one control plane.',
      locationCount: 12,
      uinTagline: 'Compliance-native multi-channel control plane',
    },
    kpis: [
      {
        title: 'Attributed Revenue',
        value: '$141,500',
        trend: '+12.5%',
        trendUp: true,
        subtitle: 'vs last 7 days',
      },
      {
        title: 'Total Orders',
        value: '1,842',
        trend: '+4.2%',
        trendUp: true,
        subtitle: 'Pickup & Delivery',
      },
      {
        title: 'Listing Health',
        value: '94%',
        trend: '-1.2%',
        trendUp: false,
        subtitle: '2 locations need review',
        warning: true,
      },
      {
        title: 'Compliance Score',
        value: '100/100',
        trend: 'Perfect',
        trendUp: true,
        subtitle: 'All assets verified',
        success: true,
      },
    ],
    revenue: [
      { name: 'Mon', total: 12400, online: 4200 },
      { name: 'Tue', total: 14200, online: 4800 },
      { name: 'Wed', total: 13500, online: 4100 },
      { name: 'Thu', total: 16800, online: 5800 },
      { name: 'Fri', total: 24500, online: 8900 },
      { name: 'Sat', total: 31200, online: 12400 },
      { name: 'Sun', total: 28900, online: 11200 },
    ],
    preflight,
    complianceActions: buildComplianceActions(preflight),
    growthActions: [
      {
        id: 'weekly-specials',
        category: 'growth',
        title: 'Generate Weekly Specials',
        desc: 'AI Studio ready to draft emails based on surplus inventory.',
      },
      {
        id: 'gbp-parity',
        category: 'growth',
        title: 'Google GBP Parity',
        desc: 'Review suggested updates to store hours for Holidays.',
        successBadge: 'Ready',
      },
    ],
    integrationHealth: {
      connected: integrations.summary.connected,
      needsAttention: integrations.summary.needsAttention,
      lastSync: '2m ago',
    },
    locations: [
      { name: 'Green Coast - Hollywood', sync: 'Live', health: '98%', orders: '124' },
      { name: 'Green Coast - Downtown', sync: 'Error', health: '85%', orders: '89', warning: true },
      { name: 'Green Coast - Venice', sync: 'Live', health: '100%', orders: '211' },
      { name: 'Green Coast - Santa Monica', sync: 'Live', health: '92%', orders: '156' },
    ],
  };
}
