"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { List, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

export default function ListingsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-2xl font-bold tracking-tight text-cupros-text">Listings</h2>
             <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
                 <RefreshCw className="w-3 h-3 mr-1" />
                 Synced: 15m ago
             </Badge>
          </div>
          <p className="text-cupros-text-muted text-sm mt-1">Unified digital presence across Weedmaps, Google, Yelp, and more.</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-cupros-border bg-cupros-surface text-sm rounded shadow-sm hover:bg-cupros-surface-hover flex items-center transition-colors">
            <RefreshCw className="w-4 h-4 mr-2" /> Sync All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-sm">Overall Health</CardTitle></CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-semibold text-cupros-text">92%</div>
            <p className="text-xs text-cupros-text-muted mt-1">2 locations need attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-sm">Active Channels</CardTitle></CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-semibold text-cupros-text">6</div>
            <p className="text-xs text-cupros-text-muted mt-1">Supported platforms connected</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-sm">Data Mismatches</CardTitle></CardHeader>
          <CardContent className="pt-0">
            <div className="text-3xl font-semibold text-rose-400">4</div>
            <p className="text-xs text-cupros-text-muted mt-1">Hours/info conflicts found</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex-1 min-h-0 flex flex-col bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden shadow-sm">
        <div className="overflow-y-auto flex-1 bg-cupros-bg">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-xs sticky top-0 z-10 shadow-sm">
              <tr>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">Platform</th>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">Connected Locations</th>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">Data Source</th>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">Health</th>
                <th className="px-6 py-3 font-medium border-b border-cupros-border text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cupros-border">
              <tr className="hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="font-medium text-cupros-text">Google Business Profile</div>
                  <div className="text-xs text-cupros-text-muted mt-1">Last updated from source 14m ago</div>
                </td>
                <td className="px-6 py-4">12 / 12</td>
                <td className="px-6 py-4">
                  <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted">
                     Hours synced from Meadow
                  </Badge>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <Badge variant="warning"><AlertCircle className="w-3 h-3 mr-1 inline" /> 3 Issues</Badge>
                  <a href="/integrations" className="inline-block"><Badge variant="destructive" className="bg-rose-500/10 text-rose-500 border-rose-500/20 hover:bg-rose-500/20 transition-colors cursor-pointer">Conflict</Badge></a>
                </td>
                <td className="px-6 py-4 text-right"><span className="text-cupros-teal-light hover:underline">Manage</span></td>
              </tr>
              <tr className="hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="font-medium text-cupros-text">Weedmaps</div>
                  <div className="text-xs text-cupros-text-muted mt-1">Last updated from source 1h ago</div>
                </td>
                <td className="px-6 py-4">12 / 12</td>
                <td className="px-6 py-4">
                   <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted">
                      Full sync via Meadow
                   </Badge>
                </td>
                <td className="px-6 py-4"><Badge variant="success"><CheckCircle2 className="w-3 h-3 mr-1 inline" /> Healthy</Badge></td>
                <td className="px-6 py-4 text-right"><span className="text-cupros-teal-light hover:underline">Manage</span></td>
              </tr>
              <tr className="hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="font-medium text-cupros-text">Leafly</div>
                  <div className="text-xs text-cupros-text-muted mt-1">Last updated from source 3h ago</div>
                </td>
                <td className="px-6 py-4">8 / 12</td>
                <td className="px-6 py-4">
                   <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted">
                      Inventory via Flowhub
                   </Badge>
                </td>
                <td className="px-6 py-4"><Badge variant="success"><CheckCircle2 className="w-3 h-3 mr-1 inline" /> Healthy</Badge></td>
                <td className="px-6 py-4 text-right"><span className="text-cupros-teal-light hover:underline">Manage</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
