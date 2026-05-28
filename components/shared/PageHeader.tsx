import React from 'react';
import { cn } from '@/lib/utils';

type PageHeaderSize = 'default' | 'compact' | 'large';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  badges?: React.ReactNode;
  actions?: React.ReactNode;
  size?: PageHeaderSize;
  className?: string;
}

const titleSizes: Record<PageHeaderSize, string> = {
  compact: 'text-xl font-semibold tracking-tight',
  default: 'text-xl font-semibold tracking-tight',
  large: 'text-2xl font-bold tracking-tight',
};

export function PageHeader({
  title,
  description,
  icon,
  badges,
  actions,
  size = 'default',
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0',
        className,
      )}
    >
      <div>
        <div className={cn('flex items-center space-x-3 mb-1', !badges && 'mb-0')}>
          <h2 className={cn(titleSizes[size], 'text-cupros-text flex items-center')}>
            {icon && <span className="mr-2">{icon}</span>}
            {title}
          </h2>
          {badges}
        </div>
        {description && (
          <p className="text-cupros-text-muted text-[13px] mt-1">{description}</p>
        )}
      </div>
      {actions && <div className="flex space-x-2">{actions}</div>}
    </div>
  );
}
