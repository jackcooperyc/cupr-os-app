"use client";

import React from "react";
import Link from "next/link";
import { Search, Bell, ChevronDown, Plus, Activity, Menu } from "lucide-react";
import { Logo } from "@/components/Logo/Logo";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { NetworkStatusIndicator } from "@/components/shell/NetworkStatusIndicator";
import { useMobileNav } from "@/context/MobileNavContext";

export function Topbar() {
  const { open, openNav } = useMobileNav();

  return (
    <header className="h-[52px] border-b border-cupros-border/60 glass-header flex items-center justify-between px-4 md:px-5 shrink-0 transition-all z-30 relative">
      <div className="flex items-center space-x-2 md:space-x-3 min-w-0">
        <button
          type="button"
          onClick={openNav}
          className="md:hidden p-2 -ml-1 rounded-md text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover transition-colors shrink-0"
          aria-label="Open navigation menu"
          aria-controls="mobile-nav-drawer"
          aria-expanded={open}
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link href="/" className="md:hidden shrink-0 hover:opacity-90 transition-opacity">
          <Logo size={24} />
        </Link>

        <button type="button" className="hidden md:flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-cupros-surface-hover/80 transition-colors">
          <div className="w-[18px] h-[18px] rounded border border-white/10 bg-gradient-to-br from-cupros-orange to-cupros-teal-light flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
            GC
          </div>
          <span className="text-[13px] font-medium tracking-tight">Green Coast</span>
          <ChevronDown className="w-3.5 h-3.5 text-cupros-text-muted" />
        </button>
        
        <div className="h-4 w-px bg-cupros-border/50 hidden sm:block"></div>
        <button type="button" className="hidden sm:flex items-center space-x-1.5 px-2 py-1 rounded-md hover:bg-cupros-surface-hover/80 text-[13px] text-cupros-text-muted transition-colors font-medium">
          <span className="flex items-center"><Activity className="w-3.5 h-3.5 mr-1.5 text-cupros-green" /> All Locations</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex items-center justify-end space-x-2 md:space-x-4 flex-1 min-w-0">
        <div className="relative hidden md:block w-full max-w-[280px] mr-2">
          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
            <Search className="h-3.5 w-3.5 text-cupros-text-muted" />
          </div>
          <input
            type="text"
            className="block w-full pl-8 pr-10 py-1 border border-cupros-border rounded-md leading-5 bg-cupros-surface/50 text-cupros-text placeholder-cupros-text-muted/70 focus:outline-none focus:bg-cupros-surface focus:border-cupros-text-muted focus:ring-0 text-[13px] transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)]"
            placeholder="Search stores, orders..."
          />
           <div className="absolute inset-y-0 right-0 pr-1.5 flex items-center pointer-events-none">
             <span className="text-[10px] bg-cupros-bg border border-cupros-border/50 text-cupros-text-muted px-1.5 py-0.5 rounded font-mono shadow-sm">⌘K</span>
           </div>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover transition-colors"
          aria-label="Search"
        >
          <Search className="w-4 h-4" />
        </button>

        <NetworkStatusIndicator />

        <button type="button" className="hero-button flex items-center space-x-1 !px-2.5 md:!px-3">
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">New</span>
        </button>

        <ThemeToggle />

        <button type="button" className="relative p-1.5 text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover rounded-md transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 block w-1.5 h-1.5 rounded-full bg-cupros-orange ring-2 ring-cupros-bg"></span>
        </button>
        
        <div className="h-5 w-px bg-cupros-border/50 hidden sm:block"></div>

        <button type="button" className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-cupros-orange to-cupros-teal-light text-[10px] font-bold text-white ring-1 ring-cupros-border hover:ring-cupros-text-muted transition-all shrink-0" aria-label="User menu">
          JR
        </button>
      </div>
    </header>
  );
}
