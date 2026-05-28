"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Plus, Play, Pause } from "lucide-react";

export default function CampaignsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-2xl font-bold tracking-tight text-cupros-text">Campaigns</h2>
          </div>
          <p className="text-cupros-text-muted text-sm mt-1">Central orchestration for multi-channel marketing efforts.</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-cupros-teal-light text-white text-sm rounded shadow-sm hover:bg-cupros-teal transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" /> New Campaign
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden shadow-sm">
        <div className="overflow-y-auto flex-1 bg-cupros-bg">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-xs sticky top-0 z-10 shadow-sm">
              <tr>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">Campaign Name</th>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">Channels</th>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">Status</th>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">Attributed Rev</th>
                <th className="px-6 py-3 font-medium border-b border-cupros-border text-right">Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cupros-border">
              <tr className="hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer">
                <td className="px-6 py-4 font-medium text-cupros-text">Summer Blaze Local SEO</td>
                <td className="px-6 py-4 text-xs text-cupros-text-muted">Google, Weedmaps</td>
                <td className="px-6 py-4"><Badge variant="success" className="bg-cupros-green/10 text-cupros-green"><Play className="w-3 h-3 mr-1" /> Active</Badge></td>
                <td className="px-6 py-4 tabular-nums">$4,200</td>
                <td className="px-6 py-4 text-right text-cupros-text-muted text-xs">J. Doe</td>
              </tr>
              <tr className="hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer">
                <td className="px-6 py-4 font-medium text-cupros-text">Holiday Flower Promo</td>
                <td className="px-6 py-4 text-xs text-cupros-text-muted">Email, SMS</td>
                <td className="px-6 py-4"><Badge variant="outline" className="text-cupros-text-muted"><Pause className="w-3 h-3 mr-1" /> Draft</Badge></td>
                <td className="px-6 py-4 tabular-nums">--</td>
                <td className="px-6 py-4 text-right text-cupros-text-muted text-xs">A. Smith</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
