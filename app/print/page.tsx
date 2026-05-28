"use client";

import React from "react";
import { Printer, LayoutTemplate } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";

export default function PrintPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      <PageHeader
        size="large"
        title="Print Media"
        description="Convert digital campaigns to physical collateral seamlessly."
      />

      <div className="flex-1 min-h-0 flex flex-col bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden shadow-sm">
        <div className="p-4 border-b border-cupros-border bg-cupros-bg">
          <h3 className="font-medium text-sm text-cupros-text">Print Queue</h3>
        </div>
        <div className="overflow-y-auto flex-1 bg-cupros-bg">
          <EmptyState
            icon={Printer}
            title="Print queue is empty"
            description="Send approved campaigns to print or start from a template."
            action={
              <button type="button" className="secondary-button flex items-center mx-auto">
                <LayoutTemplate className="w-4 h-4 mr-2" /> Browse Templates
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
}
