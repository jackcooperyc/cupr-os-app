"use client";

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, toggleResolved } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      className={cn(
        'p-1.5 text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover rounded-md transition-colors',
        className,
      )}
      onClick={toggleResolved}
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
