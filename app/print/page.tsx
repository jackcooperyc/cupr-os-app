"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Printer, LayoutTemplate, Clock3 } from "lucide-react";

export default function PrintPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-2xl font-bold tracking-tight text-cupros-text">Print Media</h2>
          </div>
          <p className="text-cupros-text-muted text-sm mt-1">Convert digital campaigns to physical collateral seamlessly.</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden shadow-sm">
        <div className="p-4 border-b border-cupros-border bg-cupros-bg">
          <h3 className="font-medium text-sm text-cupros-text flex items-center"><Clock3 className="w-4 h-4 mr-2 text-cupros-text-muted" /> Print Queue</h3>
        </div>
        <div className="overflow-y-auto flex-1 bg-cupros-bg p-4">
           {/* Empty State */}
           <div className="h-full flex flex-col items-center justify-center text-center text-cupros-text-muted">
               <Printer className="w-10 h-10 mb-3 opacity-20" />
               <p className="text-sm">Print queue is empty.</p>
               <button className="mt-4 px-4 py-2 border border-cupros-border bg-cupros-surface text-sm rounded hover:bg-cupros-surface-hover text-cupros-text transition-colors flex items-center">
                   <LayoutTemplate className="w-4 h-4 mr-2" /> Browse Templates
               </button>
           </div>
        </div>
      </div>
    </div>
  );
}
