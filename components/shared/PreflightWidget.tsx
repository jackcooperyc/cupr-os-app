import React from 'react';
import Link from 'next/link';
import { AlertOctagon, CheckCircle2, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PreflightCheck } from '@/lib/mockApi';

interface PreflightWidgetProps {
  checks: PreflightCheck[];
  className?: string;
}

export function PreflightWidget({ checks, className }: PreflightWidgetProps) {
  const failing = checks.filter((c) => !c.ok).length;

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-cupros-text-muted">
          Preflight checks
        </span>
        <Link
          href="/compliance"
          className="text-[11px] font-medium text-cupros-teal-light hover:underline"
        >
          Open center
        </Link>
      </div>
      <div className="space-y-2.5">
        {checks.map((check) => (
          <div key={check.id} className="flex items-center justify-between gap-3 text-sm">
            <span
              className={cn(
                'flex items-center min-w-0',
                check.ok ? 'text-cupros-text-muted' : 'text-rose-400',
              )}
            >
              {check.ok ? (
                <CheckCircle2 className="w-3.5 h-3.5 mr-2 shrink-0 text-cupros-teal-light" />
              ) : (
                <AlertOctagon className="w-3.5 h-3.5 mr-2 shrink-0" />
              )}
              <span className="truncate">{check.label}</span>
            </span>
            <span className={cn('text-xs tabular-nums shrink-0', !check.ok && 'text-rose-400')}>
              {check.percent !== undefined ? `${check.percent}%` : `${check.flags} flags`}
            </span>
          </div>
        ))}
      </div>
      {failing > 0 && (
        <p className="text-[11px] text-cupros-text-muted flex items-center pt-1 border-t border-cupros-border/50">
          <ShieldAlert className="w-3 h-3 mr-1.5 text-cupros-orange" />
          {failing} check{failing === 1 ? '' : 's'} need review before publish
        </p>
      )}
    </div>
  );
}
