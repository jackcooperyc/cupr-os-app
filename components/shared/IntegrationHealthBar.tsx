import React from 'react';
import Link from 'next/link';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { IntegrationHealthSummary } from '@/lib/mockApi';

interface IntegrationHealthBarProps {
  health: IntegrationHealthSummary;
  className?: string;
}

export function IntegrationHealthBar({ health, className }: IntegrationHealthBarProps) {
  return (
    <Link
      href="/integrations"
      className={cn(
        'flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border border-cupros-border/60 bg-cupros-surface/60 px-4 py-2.5 text-[12px] hover:border-cupros-teal-light/30 hover:bg-cupros-surface-hover/50 transition-colors',
        className,
      )}
    >
      <span className="font-medium text-cupros-text-muted uppercase tracking-wider text-[10px]">
        Integration health
      </span>
      <span className="flex items-center text-cupros-text">
        <span className="w-1.5 h-1.5 rounded-full bg-cupros-green mr-1.5" />
        {health.connected} connected
      </span>
      {health.needsAttention > 0 && (
        <span className="flex items-center text-amber-500">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5" />
          {health.needsAttention} needs attention
        </span>
      )}
      <span className="flex items-center text-cupros-text-muted ml-auto">
        <RefreshCw className="w-3 h-3 mr-1" />
        Last sync {health.lastSync}
      </span>
    </Link>
  );
}
