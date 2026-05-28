"use client";

import React from "react";
import { Search, Bell, ChevronDown, Plus, Activity, Server, RefreshCw } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-[52px] border-b border-cupros-border/60 bg-cupros-bg/80 backdrop-blur-md flex items-center justify-between px-5 shrink-0 transition-all supports-[backdrop-filter]:bg-cupros-bg/60 z-30 relative">
      <div className="flex items-center space-x-3">
        {/* Context Switcher */}
        <button className="flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-cupros-surface-hover/80 transition-colors">
          <div className="w-[18px] h-[18px] rounded border border-[rgba(255,255,255,0.1)] bg-gradient-to-b from-indigo-500 to-indigo-600 flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
            GC
          </div>
          <span className="text-[13px] font-medium tracking-tight">Green Coast</span>
          <ChevronDown className="w-3.5 h-3.5 text-cupros-text-muted" />
        </button>
        
        {/* Location Switcher */}
        <div className="h-4 w-px bg-cupros-border/50 hidden sm:block"></div>
        <button className="flex items-center space-x-1.5 px-2 py-1 rounded-md hover:bg-cupros-surface-hover/80 text-[13px] text-cupros-text-muted transition-colors font-medium">
          <span className="flex items-center"><Activity className="w-3.5 h-3.5 mr-1.5 text-emerald-500" /> All Locations</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex items-center justify-end space-x-3 md:space-x-4 flex-1">
        {/* Global Search */}
        <div className="relative hidden md:block w-full max-w-[280px] mr-2">
          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
            <Search className="h-3.5 w-3.5 text-cupros-text-muted" />
          </div>
          <input
            type="text"
            className="block w-full pl-8 pr-10 py-1 border border-cupros-border rounded-md leading-5 bg-cupros-surface/50 text-cupros-text placeholder-cupros-text-muted/70 focus:outline-none focus:bg-cupros-surface focus:border-cupros-text-muted focus:ring-0 text-[13px] transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"
            placeholder="Search stores, orders..."
          />
           <div className="absolute inset-y-0 right-0 pr-1.5 flex items-center pointer-events-none">
             <span className="text-[10px] bg-cupros-bg border border-cupros-border/50 text-cupros-text-muted px-1.5 py-0.5 rounded font-mono shadow-sm">⌘K</span>
           </div>
        </div>

        <div className="hidden lg:flex items-center space-x-1.5 text-[11px] text-cupros-text-muted mr-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="font-medium">Operational</span>
        </div>

        {/* Create Button */}
        <button className="hero-button flex items-center space-x-1">
          <Plus className="w-3.5 h-3.5" />
          <span>New</span>
        </button>

        {/* Alerts */}
        <button className="relative p-1.5 text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover rounded-md transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 block w-1.5 h-1.5 rounded-full bg-rose-500 ring-2 ring-cupros-bg"></span>
        </button>
        
        <div className="h-5 w-px bg-cupros-border/50 hidden sm:block"></div>

        {/* User Menu */}
        <button className="flex items-center justify-center w-7 h-7 rounded-full bg-cupros-border text-xs font-semibold overflow-hidden ring-1 ring-cupros-border hover:ring-cupros-text-muted transition-all">
          <img src="https://picsum.photos/seed/cupros/100/100" alt="User" className="w-full h-full object-cover" />
        </button>
      </div>
    </header>
  );
}
