'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Logo } from '@/components/Logo/Logo';
import { SidebarNav } from '@/components/shell/SidebarNav';
import { useMobileNav } from '@/context/MobileNavContext';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const { open, closeNav } = useMobileNav();

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-200',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={closeNav}
        aria-hidden={!open}
      />

      <aside
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-[min(18rem,85vw)] flex flex-col border-r border-cupros-border/50 bg-cupros-shell-sidebar md:hidden transition-transform duration-200 ease-out',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="py-4 flex items-center justify-between px-4 border-b border-cupros-border/50 min-h-[3.25rem] shrink-0">
          <Link href="/" onClick={closeNav} className="hover:opacity-90 transition-opacity">
            <Logo showWordmark size={26} />
          </Link>
          <button
            type="button"
            onClick={closeNav}
            className="p-2 rounded-md text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <SidebarNav onNavigate={closeNav} />
      </aside>
    </>
  );
}
