"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo/Logo";
import { SidebarNav } from "@/components/shell/SidebarNav";

export function Sidebar() {
  return (
    <aside className="w-56 border-r border-cupros-border/50 hidden md:flex flex-col h-full shrink-0 bg-cupros-shell-sidebar">
      <div className="py-5 flex items-center px-4 border-b border-cupros-border/50 min-h-[4rem] shrink-0">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo showWordmark size={28} />
        </Link>
      </div>
      <SidebarNav />
    </aside>
  );
}
