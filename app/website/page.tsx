"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Plus, CheckCircle2, RefreshCw } from "lucide-react";

export default function WebsitePage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-2xl font-bold tracking-tight text-cupros-text">Website CMS</h2>
             <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
                 <RefreshCw className="w-3 h-3 mr-1" />
                 Last publish: 2hrs ago
             </Badge>
          </div>
          <p className="text-cupros-text-muted text-sm mt-1">Manage AI-generated website content, pages, and SEO metadata.</p>
        </div>
        
        <div className="flex flex-col items-end space-y-3">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-cupros-teal-light text-white text-sm rounded hover:bg-cupros-teal transition-colors shadow-sm flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Publish Changes
            </button>
          </div>
          <div className="flex items-center space-x-2 text-xs text-cupros-text-muted border border-cupros-border bg-cupros-surface rounded p-1.5 shadow-sm">
             <span className="px-2 font-medium">Sync Sources:</span>
             <Badge variant="outline" className="text-[10px] bg-cupros-bg border-cupros-border">Meadow: Live</Badge>
             <Badge variant="outline" className="text-[10px] bg-cupros-bg border-cupros-border">Nabis: Pending</Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        <div className="w-full lg:w-1/4 flex flex-col gap-4 shrink-0">
          <Card>
            <CardHeader className="pb-3 border-b border-cupros-border">
              <CardTitle className="text-sm">Site Status</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-cupros-text-muted">Environment</span>
                <Badge variant="success">Production</Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-cupros-text-muted">Theme</span>
                <span className="font-medium text-cupros-text">Modern Dispensary</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-cupros-text-muted">Pages</span>
                <span className="font-medium text-cupros-text">12</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 min-h-0 flex flex-col bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden shadow-sm">
          <div className="p-4 border-b border-cupros-border bg-cupros-bg flex justify-between items-center">
            <h3 className="font-medium text-sm text-cupros-text">Pages</h3>
            <button className="text-xs bg-cupros-surface border border-cupros-border px-2 py-1 rounded text-cupros-text flex items-center hover:bg-cupros-surface-hover">
              <Plus className="w-3 h-3 mr-1" /> Add Page
            </button>
          </div>
          <div className="overflow-y-auto flex-1 bg-cupros-bg">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-xs sticky top-0 z-10 shadow-sm">
                <tr>
                  <th className="px-6 py-3 font-medium border-b border-cupros-border">Page Name</th>
                  <th className="px-6 py-3 font-medium border-b border-cupros-border">Data Integrations</th>
                  <th className="px-6 py-3 font-medium border-b border-cupros-border">Status</th>
                  <th className="px-6 py-3 font-medium border-b border-cupros-border text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cupros-border">
                <tr className="hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 font-medium text-cupros-text">Home
                    <div className="text-xs text-cupros-text-muted mt-1 font-mono">/</div>
                  </td>
                  <td className="px-6 py-4">
                     <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted font-normal">Business hours synced from Meadow</Badge>
                  </td>
                  <td className="px-6 py-4"><Badge variant="success"><CheckCircle2 className="w-3 h-3 mr-1 inline" /> Published</Badge></td>
                  <td className="px-6 py-4 text-right"><span className="text-cupros-teal-light hover:underline">Edit</span></td>
                </tr>
                <tr className="hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 font-medium text-cupros-text">Menu
                    <div className="text-xs text-cupros-text-muted mt-1 font-mono">/menu</div>
                  </td>
                  <td className="px-6 py-4 space-y-1">
                     <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted font-normal block w-max">Product feed powered by Nabis</Badge>
                  </td>
                  <td className="px-6 py-4"><Badge variant="warning">Draft Changes</Badge></td>
                  <td className="px-6 py-4 text-right"><span className="text-cupros-teal-light hover:underline">Edit</span></td>
                </tr>
                <tr className="hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 font-medium text-cupros-text">About Us
                    <div className="text-xs text-cupros-text-muted mt-1 font-mono">/about</div>
                  </td>
                  <td className="px-6 py-4">
                     <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted font-normal block w-max">Brand data enriched from Canix</Badge>
                  </td>
                  <td className="px-6 py-4"><Badge variant="success"><CheckCircle2 className="w-3 h-3 mr-1 inline" /> Published</Badge></td>
                  <td className="px-6 py-4 text-right"><span className="text-cupros-teal-light hover:underline">Edit</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
