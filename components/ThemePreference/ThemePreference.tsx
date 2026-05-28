"use client";

import React from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import type { ThemePreference } from '@/lib/theme';
import { cn } from '@/lib/utils';

const OPTIONS: {
  value: ThemePreference;
  label: string;
  icon: React.ReactNode;
}[] = [
  { value: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
  { value: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
  { value: 'system', label: 'System', icon: <Monitor className="w-4 h-4" /> },
];

export function ThemePreference() {
  const { preference, resolvedTheme, setPreference } = useTheme();

  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm font-medium text-cupros-text">Appearance</p>
        <p className="text-xs text-cupros-text-muted mt-0.5">
          Currently {resolvedTheme === 'dark' ? 'dark' : 'light'}
          {preference === 'system' ? ' (system)' : ''}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Theme preference">
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={preference === option.value}
            className={cn(
              'flex flex-col items-center gap-1.5 p-3 rounded-md border text-xs font-medium transition-colors',
              preference === option.value
                ? 'bg-cupros-teal-bg border-cupros-teal-light text-cupros-teal-light'
                : 'border-cupros-border bg-cupros-bg text-cupros-text-muted hover:text-cupros-text hover:border-cupros-border',
            )}
            onClick={() => setPreference(option.value)}
          >
            {option.icon}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
