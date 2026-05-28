import { getPreflightChecks } from './preflight';
import type { CompliancePayload } from './types';

export function getCompliancePayload(): CompliancePayload {
  return {
    header: {
      title: 'Compliance Center',
      description: 'Regulatory preflight, policy checks, and jurisdiction overrides.',
    },
    jurisdictions: [
      { id: 'ca-dcc', label: 'California (DCC)', status: 'active' },
      { id: 'mi-cra', label: 'Michigan (CRA)', status: 'verified' },
      { id: 'ny-ocm', label: 'New York (OCM)', status: 'verified' },
    ],
    preflight: getPreflightChecks(),
    assets: [
      {
        assetId: 'AST-2094',
        type: 'Weedmaps Banner Image',
        violationRisk: 'High: Imagery',
        violationVariant: 'destructive',
        details: 'Contains model under apparent age of 21.',
      },
      {
        assetId: 'AST-2091',
        type: 'SMS Campaign Draft',
        violationRisk: 'Medium: Missing Text',
        violationVariant: 'warning',
        details: 'Missing mandatory opt-out instructions (Reply STOP).',
      },
    ],
    auditLog: [
      {
        title: 'Email Template Approved',
        timestamp: '2 hrs ago',
        description:
          '"Holiday Promo V2" approved by Compliance Officer (j.doe@cupros.com).',
        icon: 'file',
      },
      {
        title: 'System Rule Update Applied',
        timestamp: 'Yesterday',
        description: 'DCC updated labeling requirements. Preflight engine re-seeded.',
        icon: 'alert',
      },
    ],
  };
}
