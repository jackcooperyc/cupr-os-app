"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";

export default function AdsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      <PageHeader
        size="large"
        title="Digital Ads"
        description="Paid media orchestration and budget controls."
        badges={
          <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
            <ShieldCheck className="w-3 h-3 mr-1 text-cupros-teal-light" />
            Compliance Certified
          </Badge>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 shrink-0">
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-sm">Total Ad Spend (MTD)</CardTitle></CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-semibold text-cupros-text tabular-nums">$2,450.00</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-sm">Return on Ad Spend (ROAS)</CardTitle></CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-semibold text-cupros-green tabular-nums">3.4x</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex-1 min-h-0 flex flex-col bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden shadow-sm">
        <div className="p-4 border-b border-cupros-border bg-cupros-bg">
          <h3 className="font-medium text-sm text-cupros-text">Active Ad Sets</h3>
        </div>
        <div className="overflow-y-auto flex-1 bg-cupros-bg">
          <EmptyState
            icon={Megaphone}
            title="No active ad sets"
            description="Launch a compliant campaign to start tracking spend and ROAS."
            action={
              <button type="button" className="secondary-button">Setup New Ad</button>
            }
          />
        </div>
      </div>
    </div>
  );
}
