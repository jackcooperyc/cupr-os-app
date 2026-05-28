"use client";

import React from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { MobileNav } from "./MobileNav";
import { MobileNavProvider } from "@/context/MobileNavContext";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <MobileNavProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <Sidebar />
        <MobileNav />
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <Topbar />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-cupros-bg">
            {children}
          </main>
        </div>
      </div>
    </MobileNavProvider>
  );
}
