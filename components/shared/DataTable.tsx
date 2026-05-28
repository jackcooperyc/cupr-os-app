import React from 'react';
import { cn } from '@/lib/utils';

export interface DataTableColumn {
  key: string;
  label: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  className?: string;
}

interface DataTableProps {
  columns: DataTableColumn[];
  children: React.ReactNode;
  stickyHeader?: boolean;
  compact?: boolean;
  className?: string;
  theadClassName?: string;
  tbodyClassName?: string;
}

const alignClass = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};

export function DataTable({
  columns,
  children,
  stickyHeader = false,
  compact = false,
  className,
  theadClassName,
  tbodyClassName,
}: DataTableProps) {
  const cellPad = compact ? 'px-5 py-2.5' : 'px-6 py-4';
  const headText = compact
    ? 'text-[10px] font-semibold uppercase tracking-wider'
    : 'text-xs font-medium uppercase';

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full text-sm text-left border-collapse">
        <thead
          className={cn(
            'text-cupros-text-muted bg-cupros-bg/50',
            stickyHeader && 'sticky top-0 z-10 backdrop-blur-sm border-b border-cupros-border/50',
            theadClassName,
          )}
        >
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  cellPad,
                  headText,
                  alignClass[col.align ?? 'left'],
                  col.className,
                )}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={cn('divide-y divide-cupros-border/50 text-[13px]', tbodyClassName)}>
          {children}
        </tbody>
      </table>
    </div>
  );
}
