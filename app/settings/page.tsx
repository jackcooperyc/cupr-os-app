"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, ShieldCheck } from "lucide-react";
import { ThemePreference } from "@/components/ThemePreference/ThemePreference";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-2xl font-bold tracking-tight text-cupros-text">Settings</h2>
          </div>
          <p className="text-cupros-text-muted text-sm mt-1">Organization, billing, and roles management.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
        <div className="w-full lg:w-48 shrink-0">
           <nav className="flex flex-col space-y-1">
              <span className="px-3 py-2 bg-cupros-surface-hover text-cupros-text rounded text-sm font-medium">Organization</span>
              <span className="px-3 py-2 text-cupros-text-muted rounded text-sm">Billing</span>
              <span className="px-3 py-2 text-cupros-text-muted rounded text-sm">Roles & Users</span>
              <span className="px-3 py-2 text-cupros-text-muted rounded text-sm">Security</span>
           </nav>
        </div>

        <div className="flex-1 min-h-0 space-y-6">
           <Card>
             <CardHeader className="border-b border-cupros-border">
               <CardTitle className="text-base flex items-center"><Building className="w-4 h-4 mr-2" /> Organization Profile</CardTitle>
             </CardHeader>
             <CardContent className="pt-6 space-y-6">
                <div>
                   <label className="block text-sm font-medium text-cupros-text-muted mb-1">Organization Name</label>
                   <input type="text" className="w-full max-w-md bg-cupros-bg border border-cupros-border rounded p-2 text-sm text-cupros-text focus:outline-none focus:border-cupros-teal-light" defaultValue="Green Coast Collectives" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-cupros-text-muted mb-1">Primary Domain</label>
                   <input type="text" className="w-full max-w-md bg-cupros-bg border border-cupros-border rounded p-2 text-sm text-cupros-text focus:outline-none focus:border-cupros-teal-light" defaultValue="greencoast.com" disabled />
                   <p className="text-xs text-cupros-text-muted mt-1">Contact support to change your primary domain.</p>
                </div>
                <div className="pt-4 border-t border-cupros-border">
                   <button type="button" className="px-4 py-2 bg-cupros-teal-light text-white rounded text-sm font-medium hover:opacity-90 transition-opacity">Save Changes</button>
                </div>
             </CardContent>
           </Card>

           <Card>
             <CardHeader className="border-b border-cupros-border">
               <CardTitle className="text-base flex items-center"><ShieldCheck className="w-4 h-4 mr-2" /> Preferences</CardTitle>
             </CardHeader>
             <CardContent className="pt-6 space-y-4">
               <ThemePreference />
               <p className="text-xs text-cupros-text-muted pt-2 border-t border-cupros-border">
                 Product overview: <a href="/cupros_pitchdeck.html" className="text-cupros-teal-light hover:underline">CŪPR.OS pitch deck</a>
               </p>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
