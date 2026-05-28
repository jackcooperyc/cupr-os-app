import type { DashboardAction, PreflightCheck } from './types';

/** Single source of truth for regulatory preflight checks. */
export const PREFLIGHT_CHECKS: PreflightCheck[] = [
  { id: 'age-disclaimers', label: 'Age Disclaimers', percent: 100, ok: true },
  { id: 'health-warnings', label: 'Health Warnings', percent: 100, ok: true },
  { id: 'image-guidelines', label: 'Image Guidelines', flags: 2, ok: false },
];

export function getPreflightChecks(): PreflightCheck[] {
  return PREFLIGHT_CHECKS;
}

export function buildComplianceActions(checks: PreflightCheck[]): DashboardAction[] {
  const actions: DashboardAction[] = [];

  const imageCheck = checks.find((c) => c.id === 'image-guidelines');
  if (imageCheck && !imageCheck.ok) {
    actions.push({
      id: 'image-guidelines',
      category: 'compliance',
      title: `${imageCheck.flags ?? 0} Image Guideline Flags`,
      desc: 'Weedmaps banner and SMS draft require compliance review before publish.',
      urgent: true,
    });
  }

  actions.push({
    id: 'ca-age-disclaimer',
    category: 'compliance',
    title: 'Missing CA Age Disclaimer',
    desc: "Campaign 'Summer Blaze' requires standard age-gate text.",
    urgent: true,
  });

  actions.push({
    id: 'menu-sync-downtown',
    category: 'compliance',
    title: 'Menu Sync Failure',
    desc: 'Downtown LA location disconnected from POS.',
  });

  return actions;
}

export function countPreflightFlags(checks: PreflightCheck[]): number {
  return checks.reduce((sum, check) => sum + (check.flags ?? (check.ok ? 0 : 1)), 0);
}
