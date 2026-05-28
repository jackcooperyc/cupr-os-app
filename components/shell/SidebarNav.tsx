'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/nav-items';
import { cn } from '@/lib/utils';

interface SidebarNavProps {
  onNavigate?: () => void;
  className?: string;
}

export function SidebarNav({ onNavigate, className }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <>
      <nav className={cn('flex-1 overflow-y-auto py-5 px-3 space-y-0.5', className)}>
        <div className="mb-3 px-3 text-[10px] font-semibold tracking-wider text-cupros-text-muted uppercase opacity-70">
          Modules
        </div>
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                'flex items-center space-x-3 px-3 py-1.5 rounded-md text-[13px] font-medium transition-all group',
                isActive
                  ? 'bg-cupros-teal-bg text-cupros-teal-light border border-cupros-teal-light/20'
                  : 'text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover/80 border border-transparent',
              )}
            >
              <item.icon
                className={cn(
                  'w-[14px] h-[14px]',
                  isActive
                    ? 'text-cupros-teal-light'
                    : 'text-cupros-text-muted group-hover:text-cupros-text transition-colors',
                )}
              />
              <span className="flex-1 tracking-tight">{item.label}</span>
              {item.alert && (
                <span className="w-1.5 h-1.5 rounded-full bg-cupros-orange shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-cupros-border/50 shrink-0">
        <div className="flex flex-col space-y-1 bg-cupros-surface border border-cupros-border/50 rounded-md p-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold tracking-wider text-cupros-text-muted uppercase">
              Mode
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cupros-green shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          </div>
          <span className="text-[12px] font-medium text-cupros-text tracking-tight">Regulated</span>
        </div>
      </div>
    </>
  );
}
