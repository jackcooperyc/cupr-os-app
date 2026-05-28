'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface MobileNavContextValue {
  open: boolean;
  openNav: () => void;
  closeNav: () => void;
  toggleNav: () => void;
}

const MobileNavContext = createContext<MobileNavContextValue | null>(null);

export function MobileNavProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openNav = useCallback(() => setOpen(true), []);
  const closeNav = useCallback(() => setOpen(false), []);
  const toggleNav = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeNav();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, closeNav]);

  const value = useMemo(
    () => ({ open, openNav, closeNav, toggleNav }),
    [open, openNav, closeNav, toggleNav],
  );

  return <MobileNavContext.Provider value={value}>{children}</MobileNavContext.Provider>;
}

export function useMobileNav() {
  const ctx = useContext(MobileNavContext);
  if (!ctx) {
    throw new Error('useMobileNav must be used within MobileNavProvider');
  }
  return ctx;
}
