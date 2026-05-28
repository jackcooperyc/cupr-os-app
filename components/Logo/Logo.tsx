import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ size = 32, showWordmark = true, className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="36" height="36" rx="9" fill="url(#cupros-logo-grad)" />
        <path
          d="M8 24V12h4l6 8 6-8h4v12h-3.5V16.5l-5.5 7h-2l-5.5-7V24H8z"
          fill="#fff"
          fillOpacity="0.95"
        />
        <defs>
          <linearGradient id="cupros-logo-grad" x1="4" y1="4" x2="32" y2="32">
            <stop stopColor="#f97316" />
            <stop offset="1" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>
      {showWordmark && (
        <span className="font-display text-[15px] tracking-tight gradient-text-cupros">
          CŪPR.OS
        </span>
      )}
    </span>
  );
}
