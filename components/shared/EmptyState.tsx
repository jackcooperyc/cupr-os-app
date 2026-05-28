import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  compact?: boolean;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
  compact = false,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center text-cupros-text-muted',
        compact ? 'py-10 px-4' : 'py-16 px-6 min-h-[240px]',
        className,
      )}
    >
      <Icon
        className={cn('text-cupros-text-muted/30 mb-3', compact ? 'w-8 h-8' : 'w-10 h-10')}
        strokeWidth={1.5}
        aria-hidden
      />
      <h3 className="text-sm font-medium text-cupros-text">{title}</h3>
      {description && (
        <p className="text-xs text-cupros-text-muted mt-1 max-w-sm leading-relaxed">{description}</p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
