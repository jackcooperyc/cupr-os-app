import { getDashboardPayload } from './dashboard';
import { getIntegrationsPayload } from './integrations';
import { countPreflightFlags, getPreflightChecks } from './preflight';
import type { NetworkStatusLevel, NetworkStatusPayload } from './types';

function resolveLevel(input: {
  locationErrors: number;
  needsAttention: number;
  preflightFlags: number;
}): NetworkStatusLevel {
  if (input.locationErrors > 0) return 'degraded';
  if (input.needsAttention > 0 || input.preflightFlags > 0) return 'attention';
  return 'operational';
}

const STATUS_LABELS: Record<NetworkStatusLevel, string> = {
  operational: 'Operational',
  attention: 'Attention Required',
  degraded: 'Degraded',
};

export function getNetworkStatusPayload(): NetworkStatusPayload {
  const dashboard = getDashboardPayload();
  const integrations = getIntegrationsPayload();
  const preflight = getPreflightChecks();

  const locationErrors = dashboard.locations.filter((l) => l.sync === 'Error').length;
  const needsAttention = integrations.summary.needsAttention;
  const preflightFlags = countPreflightFlags(preflight);

  const level = resolveLevel({ locationErrors, needsAttention, preflightFlags });

  const details: string[] = [];
  if (locationErrors > 0) details.push(`${locationErrors} location sync error`);
  if (needsAttention > 0) details.push(`${needsAttention} integration needs attention`);
  if (preflightFlags > 0) details.push(`${preflightFlags} preflight flag${preflightFlags === 1 ? '' : 's'}`);

  return {
    level,
    label: STATUS_LABELS[level],
    detail: details.length ? details.join(' · ') : 'All systems nominal',
    connectedIntegrations: integrations.summary.connected,
    needsAttentionIntegrations: needsAttention,
    locationErrors,
    preflightFlags,
    lastSync: '2m ago',
  };
}
