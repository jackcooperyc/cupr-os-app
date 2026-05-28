"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShieldCheck, AlertOctagon, History, FileText, CheckCircle2 } from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center">
            <ShieldCheck className="w-6 h-6 mr-2 text-cupros-teal-light" />
            Compliance Center
          </h2>
          <p className="text-cupros-text-muted text-sm mt-1">Regulatory preflight, policy checks, and jurisdiction overrides.</p>
        </div>
        <div className="flex space-x-2">
          <div className="relative w-64">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-cupros-text-muted" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-cupros-border rounded-md text-sm bg-cupros-surface focus:outline-none focus:border-cupros-teal-light"
              placeholder="Search policies or assets..."
            />
          </div>
          <button className="px-4 py-2 bg-cupros-surface border border-cupros-border text-sm rounded hover:bg-cupros-surface-hover flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Col: Jurisdictions & Context */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3 border-b border-cupros-border">
              <CardTitle className="text-sm">Active Jurisdictions</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <div className="divide-y divide-cupros-border text-sm">
                <div className="p-4 bg-cupros-teal-bg/30 border-l-2 border-cupros-teal-light font-medium flex justify-between">
                  <span>California (DCC)</span>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="p-4 hover:bg-cupros-surface-hover cursor-pointer flex justify-between text-cupros-text-muted">
                  <span>Michigan (CRA)</span>
                  <Badge variant="outline">Verified</Badge>
                </div>
                <div className="p-4 hover:bg-cupros-surface-hover cursor-pointer flex justify-between text-cupros-text-muted">
                  <span>New York (OCM)</span>
                  <Badge variant="outline">Verified</Badge>
                </div>
               </div>
            </CardContent>
          </Card>

          <Card>
             <CardHeader className="pb-3">
              <CardTitle className="text-sm">Preflight Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center text-cupros-text-muted"><CheckCircle2 className="w-4 h-4 mr-2 text-cupros-teal-light"/> Age Disclaimers</span>
                  <span>100%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center text-cupros-text-muted"><CheckCircle2 className="w-4 h-4 mr-2 text-cupros-teal-light"/> Health Warnings</span>
                  <span>100%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center text-rose-400"><AlertOctagon className="w-4 h-4 mr-2"/> Image Guidelines</span>
                  <span className="text-rose-400">2 Flags</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Col: Flagged Assets & Audit */}
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between border-b border-cupros-border pb-4">
              <div>
                <CardTitle>Asset Review Queue</CardTitle>
                <p className="text-xs text-cupros-text-muted mt-1">Pending AI-generated and user-uploaded marketing assets requiring approval.</p>
              </div>
            </CardHeader>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-xs">
                  <tr>
                    <th className="px-6 py-4 font-medium">Asset ID</th>
                    <th className="px-6 py-4 font-medium">Type</th>
                    <th className="px-6 py-4 font-medium">Violation Risk</th>
                    <th className="px-6 py-4 font-medium">Details</th>
                    <th className="px-6 py-4 font-medium flex justify-end">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cupros-border">
                  <tr className="hover:bg-cupros-surface-hover">
                    <td className="px-6 py-4 font-mono text-xs">AST-2094</td>
                    <td className="px-6 py-4">Weedmaps Banner Image</td>
                    <td className="px-6 py-4"><Badge variant="destructive">High: Imagery</Badge></td>
                    <td className="px-6 py-4 text-cupros-text-muted text-xs">Contains model under apparent age of 21.</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-cupros-teal-light hover:underline font-medium">Review</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-cupros-surface-hover">
                    <td className="px-6 py-4 font-mono text-xs">AST-2091</td>
                    <td className="px-6 py-4">SMS Campaign Draft</td>
                    <td className="px-6 py-4"><Badge variant="warning">Medium: Missing Text</Badge></td>
                    <td className="px-6 py-4 text-cupros-text-muted text-xs">Missing mandatory opt-out instructions (Reply STOP).</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-cupros-teal-light hover:underline font-medium">Review</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Empty State example */}
            {/* <div className="p-12 text-center flex flex-col items-center justify-center text-cupros-text-muted">
              <ShieldCheck className="w-12 h-12 mb-4 opacity-50" />
              <p className="text-sm font-medium">No pending assets</p>
              <p className="text-xs mt-1">All marketing materials pass standard preflight.</p>
            </div> */}
          </Card>

          <Card>
            <CardHeader className="border-b border-cupros-border">
               <CardTitle className="text-base flex items-center">
                 <History className="w-4 h-4 mr-2" />
                 Recent Audit Log
               </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <div className="divide-y divide-cupros-border text-sm">
                  <div className="p-4 flex items-start space-x-4">
                    <div className="mt-0.5 p-1.5 bg-cupros-bg rounded-md border border-cupros-border">
                      <FileText className="w-4 h-4 text-cupros-text-muted" />
                    </div>
                    <div>
                      <p className="font-medium text-cupros-text">Email Template Approved <span className="text-cupros-text-muted font-normal text-xs ml-2">2 hrs ago</span></p>
                      <p className="text-xs text-cupros-text-muted mt-1">&ldquo;Holiday Promo V2&rdquo; approved by Compliance Officer (j.doe@cupros.com).</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-start space-x-4">
                    <div className="mt-0.5 p-1.5 bg-cupros-bg rounded-md border border-cupros-border">
                      <AlertOctagon className="w-4 h-4 text-cupros-text-muted" />
                    </div>
                    <div>
                      <p className="font-medium text-cupros-text">System Rule Update Applied <span className="text-cupros-text-muted font-normal text-xs ml-2">Yesterday</span></p>
                      <p className="text-xs text-cupros-text-muted mt-1">DCC updated labeling requirements. Preflight engine re-seeded.</p>
                    </div>
                  </div>
               </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
