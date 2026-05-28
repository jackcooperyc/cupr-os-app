'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useCuprosMock } from '@/hooks/useCuprosMock';
import type { NetworkStatusLevel, NetworkStatusPayload } from '@/lib/mockApi';

const LEVEL_STYLES: Record<
  NetworkStatusLevel,
  { dot: string; text: string }
> = {
  operational: {
    dot: 'bg-cupros-green shadow-[0_0_8px_rgba(16,185,129,0.5)]',
    text: 'text-cupros-text-muted',
  },
  attention: {
    dot: 'bg-cupros-orange shadow-[0_0_8px_rgba(249,115,22,0.5)]',
    text: 'text-cupros-orange',
  },
  degraded: {
    dot: 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]',
    text: 'text-rose-400',
  },
};

export function NetworkStatusIndicator({ className }: { className?: string }) {
  const { data } = useCuprosMock<NetworkStatusPayload>('status');
  const level = data?.level ?? 'operational';
  const label = data?.label ?? 'Operational';
  const styles = LEVEL_STYLES[level];

  return (
    <div
      className={cn(
        'hidden lg:flex items-center space-x-1.5 text-[11px] mr-1',
        styles.text,
        className,
      )}
      title={data?.detail}
    >
      <div className={cn('w-1.5 h-1.5 rounded-full', styles.dot)} />
      <span className="font-medium">{label}</span>
    </div>
  );
}
