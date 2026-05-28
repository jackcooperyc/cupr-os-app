import React from 'react';
import { cn } from '@/lib/utils';

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-cupros-surface border border-cupros-border/40', className)}
      aria-hidden
    />
  );
}

export function PageHeaderSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      <Skeleton className="h-7 w-48" />
      <Skeleton className="h-4 w-72 max-w-full" />
    </div>
  );
}

export function DashboardPageSkeleton() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 animate-pulse" aria-busy aria-label="Loading dashboard">
      <PageHeaderSkeleton />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-28" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Skeleton className="col-span-1 lg:col-span-2 h-[400px]" />
        <div className="space-y-6">
          <Skeleton className="h-48" />
          <Skeleton className="h-48" />
        </div>
      </div>
      <Skeleton className="h-56" />
    </div>
  );
}

export function TablePageSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 animate-pulse" aria-busy aria-label="Loading">
      <PageHeaderSkeleton className="mt-6" />
      <div className="flex flex-col flex-1 min-h-[50vh] bg-cupros-surface border border-cupros-border-subtle rounded-lg overflow-hidden">
        <Skeleton className="h-14 rounded-none border-x-0 border-t-0" />
        <div className="flex-1 p-4 space-y-3">
          {Array.from({ length: rows }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CompliancePageSkeleton() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 animate-pulse" aria-busy aria-label="Loading compliance">
      <PageHeaderSkeleton />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Skeleton className="h-64" />
        <Skeleton className="lg:col-span-3 h-64" />
      </div>
    </div>
  );
}
