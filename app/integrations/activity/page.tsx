"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Download, 
  RefreshCw, 
  Filter, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Clock, 
  ChevronDown, 
  ChevronRight,
  Database,
  Building2
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SyncActivityPage() {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleRow = (id: string) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-52px)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0 mt-6">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-xl font-semibold tracking-tight text-cupros-text">Sync Activity</h2>
             <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
                 <Building2 className="w-3 h-3 mr-1" />
                 Org Level
             </Badge>
             <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
                 <RefreshCw className="w-3 h-3 mr-1" />
                 Refreshed: Just now
             </Badge>
          </div>
          <p className="text-cupros-text-muted text-[13px] mt-1">Full-page sync job history across all connected partners.</p>
        </div>
        <div className="flex space-x-2">
          <button className="secondary-button flex items-center">
            <Download className="w-3.5 h-3.5 mr-1.5" />
            Export Log
          </button>
        </div>
      </div>

      {/* KPI Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 shrink-0">
         <Card>
            <CardHeader className="pb-2 pt-4 px-4"><CardTitle className="text-xs text-cupros-text-muted font-medium uppercase tracking-wider">Total Jobs Today</CardTitle></CardHeader>
            <CardContent className="px-4 pb-4">
               <div className="text-2xl font-semibold text-cupros-text tabular-nums">1,248</div>
            </CardContent>
         </Card>
         <Card>
            <CardHeader className="pb-2 pt-4 px-4"><CardTitle className="text-xs text-cupros-text-muted font-medium uppercase tracking-wider">Success Rate</CardTitle></CardHeader>
            <CardContent className="px-4 pb-4">
               <div className="text-2xl font-semibold text-cupros-green tabular-nums">99.8%</div>
            </CardContent>
         </Card>
         <Card>
            <CardHeader className="pb-2 pt-4 px-4"><CardTitle className="text-xs text-cupros-text-muted font-medium uppercase tracking-wider">Active Errors</CardTitle></CardHeader>
            <CardContent className="px-4 pb-4">
               <div className="text-2xl font-semibold text-rose-500 tabular-nums">3</div>
            </CardContent>
         </Card>
         <Card>
            <CardHeader className="pb-2 pt-4 px-4"><CardTitle className="text-xs text-cupros-text-muted font-medium uppercase tracking-wider">Avg Sync Duration</CardTitle></CardHeader>
            <CardContent className="px-4 pb-4">
               <div className="text-2xl font-semibold text-cupros-text tabular-nums">1.2s</div>
            </CardContent>
         </Card>
      </div>

      <div className="flex-1 min-h-0 flex flex-col bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden shadow-sm">
        {/* Sticky filter bar */}
        <div className="p-3 border-b border-cupros-border bg-cupros-bg flex flex-wrap gap-3 items-center justify-between sticky top-0 z-20">
          <div className="flex flex-wrap items-center gap-2">
            <button className="px-3 py-1.5 border border-cupros-border bg-cupros-surface rounded text-cupros-text hover:bg-cupros-surface-hover flex items-center text-sm transition-colors font-medium">
              <Filter className="w-4 h-4 mr-2 text-cupros-text-muted" />
              Partner: All
            </button>
            <div className="h-4 w-px bg-cupros-border mx-1"></div>
            <button className="px-3 py-1.5 rounded-full bg-cupros-text text-cupros-bg text-xs font-medium">All</button>
            <button className="px-3 py-1.5 rounded-full border border-cupros-border bg-cupros-surface text-cupros-text-muted text-xs font-medium hover:text-cupros-text hover:bg-cupros-surface-hover flex items-center">
               <CheckCircle2 className="w-3 h-3 mr-1" /> Success
            </button>
            <button className="px-3 py-1.5 rounded-full border border-cupros-border bg-cupros-surface text-cupros-text-muted text-xs font-medium hover:text-cupros-text hover:bg-cupros-surface-hover flex items-center">
               <AlertCircle className="w-3 h-3 mr-1" /> Warning
            </button>
            <button className="px-3 py-1.5 rounded-full border border-cupros-border bg-cupros-surface text-cupros-text-muted text-xs font-medium hover:text-cupros-text hover:bg-cupros-surface-hover flex items-center">
               <XCircle className="w-3 h-3 mr-1" /> Error
            </button>
            <button className="px-3 py-1.5 rounded-full border border-cupros-border bg-cupros-surface text-cupros-text-muted text-xs font-medium hover:text-cupros-text hover:bg-cupros-surface-hover flex items-center">
               <RefreshCw className="w-3 h-3 mr-1" /> Retrying
            </button>
          </div>
          <button className="px-3 py-1.5 border border-cupros-border bg-cupros-surface rounded text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover flex items-center text-sm transition-colors">
            <Calendar className="w-4 h-4 mr-2" />
            Last 24 Hours
          </button>
        </div>

        {/* Dense table */}
        <div className="overflow-y-auto flex-1 bg-cupros-bg">
          <table className="w-full text-sm text-left border-collapse z-0">
            <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-[10px] tracking-wider sticky top-0 z-10 shadow-sm shadow-black/10">
              <tr>
                <th className="px-4 py-3 font-medium border-b border-cupros-border w-10"></th>
                <th className="px-4 py-3 font-medium border-b border-cupros-border">Timestamp</th>
                <th className="px-4 py-3 font-medium border-b border-cupros-border">Partner</th>
                <th className="px-4 py-3 font-medium border-b border-cupros-border">Job Type</th>
                <th className="px-4 py-3 font-medium border-b border-cupros-border">Module Affected</th>
                <th className="px-4 py-3 font-medium border-b border-cupros-border text-right">Records Synced</th>
                <th className="px-4 py-3 font-medium border-b border-cupros-border text-right">Duration</th>
                <th className="px-4 py-3 font-medium border-b border-cupros-border">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cupros-border text-xs">
              <ActivityRow 
                id="job-1"
                timestamp="Today, 8:42:15 AM"
                partner="Meadow"
                jobType="Delta Sync"
                module="Inventory"
                records="42"
                duration="0.8s"
                status="Success"
                expanded={expandedRows["job-1"]}
                onToggle={() => toggleRow("job-1")}
              />
              <ActivityRow 
                id="job-2"
                timestamp="Today, 8:40:02 AM"
                partner="Nabis"
                jobType="Full Sync"
                module="Catalog"
                records="0"
                duration="4.2s"
                status="Error"
                expanded={expandedRows["job-2"]}
                onToggle={() => toggleRow("job-2")}
                errorMsg="API Rate limit exceeded. Expected backoff 5m."
                recordIds="N/A"
              />
              <ActivityRow 
                id="job-3"
                timestamp="Today, 8:38:22 AM"
                partner="Weedmaps"
                jobType="Webhook Trigger"
                module="Menu"
                records="1"
                duration="1.5s"
                status="Warning"
                expanded={expandedRows["job-3"]}
                onToggle={() => toggleRow("job-3")}
                errorMsg="Product category mapping not found for 'Topicals'. Defaulted to 'Other'."
                recordIds="PRD-88219"
              />
              <ActivityRow 
                id="job-4"
                timestamp="Today, 8:37:15 AM"
                partner="Meadow"
                jobType="Delta Sync"
                module="Inventory"
                records="15"
                duration="0.4s"
                status="Success"
                expanded={expandedRows["job-4"]}
                onToggle={() => toggleRow("job-4")}
              />
              <ActivityRow 
                id="job-5"
                timestamp="Today, 8:32:15 AM"
                partner="Meadow"
                jobType="Delta Sync"
                module="Inventory"
                records="112"
                duration="1.1s"
                status="Success"
                expanded={expandedRows["job-5"]}
                onToggle={() => toggleRow("job-5")}
              />
              <ActivityRow 
                id="job-6"
                timestamp="Today, 8:30:00 AM"
                partner="Metrc"
                jobType="Scheduled Push"
                module="Compliance"
                records="4"
                duration="3.5s"
                status="Retrying"
                expanded={expandedRows["job-6"]}
                onToggle={() => toggleRow("job-6")}
                errorMsg="State system timeout (503 Service Unavailable). Retry 1 of 3."
                recordIds="MANIFEST-921, MANIFEST-922"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ActivityRow({ id, timestamp, partner, jobType, module, records, duration, status, expanded, onToggle, errorMsg, recordIds }: any) {
  const getStatusDisplay = (s: string) => {
     switch(s) {
       case "Success": return <div className="flex items-center text-cupros-green"><CheckCircle2 className="w-3.5 h-3.5 mr-1.5" /> Success</div>;
       case "Error": return <div className="flex items-center text-rose-500"><XCircle className="w-3.5 h-3.5 mr-1.5" /> Error</div>;
       case "Warning": return <div className="flex items-center text-amber-500"><AlertCircle className="w-3.5 h-3.5 mr-1.5" /> Warning</div>;
       case "Retrying": return <div className="flex items-center text-blue-400"><RefreshCw className="w-3.5 h-3.5 mr-1.5 animate-spin" style={{ animationDuration: '3s' }} /> Retrying</div>;
       default: return s;
     }
  };

  const hasDetails = status === "Error" || status === "Warning" || status === "Retrying";

  return (
    <>
      <tr 
        className={cn("hover:bg-cupros-surface-hover/50 transition-colors group", hasDetails ? "cursor-pointer" : "")}
        onClick={() => hasDetails && onToggle()}
      >
        <td className="px-4 py-2.5 w-10 text-center text-cupros-text-muted">
           {hasDetails && (
             <div className={cn("transition-transform duration-200 inline-block", expanded ? 'rotate-90' : '')}>
               <ChevronRight className="w-4 h-4" />
             </div>
           )}
        </td>
        <td className="px-4 py-2.5 text-cupros-text-muted whitespace-nowrap">{timestamp}</td>
        <td className="px-4 py-2.5 font-medium text-cupros-text">{partner}</td>
        <td className="px-4 py-2.5 text-cupros-text-muted">{jobType}</td>
        <td className="px-4 py-2.5 text-cupros-text-muted flex items-center">
            <Database className="w-3 h-3 mr-1 opacity-50" /> {module}
        </td>
        <td className="px-4 py-2.5 text-cupros-text tabular-nums text-right">{records}</td>
        <td className="px-4 py-2.5 text-cupros-text-muted tabular-nums text-right font-mono">{duration}</td>
        <td className="px-4 py-2.5">
            <div className="flex items-center justify-between">
                {getStatusDisplay(status)}
                {hasDetails && !expanded && <span className="text-[10px] font-medium text-cupros-teal-light opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>}
            </div>
        </td>
      </tr>
      {expanded && hasDetails && (
        <tr className="bg-cupros-surface border-b border-cupros-border">
          <td colSpan={8} className="p-0">
             <div className="p-4 pl-14 flex items-start justify-between animate-in slide-in-from-top-1 fade-in duration-200 shadow-[inset_0_4px_6px_-6px_rgba(0,0,0,0.5)]">
               <div className="space-y-3">
                  <div>
                     <span className="text-[10px] font-semibold text-cupros-text-muted uppercase tracking-wider block mb-1">Message</span>
                     <p className={cn("text-sm", status === "Error" ? "text-rose-500" : status === "Warning" ? "text-amber-500" : "text-blue-400")}>
                        {errorMsg}
                     </p>
                  </div>
                  {recordIds && (
                      <div>
                         <span className="text-[10px] font-semibold text-cupros-text-muted uppercase tracking-wider block mb-1">Affected Record IDs</span>
                         <p className="text-xs text-cupros-text font-mono truncate max-w-2xl">{recordIds}</p>
                      </div>
                  )}
               </div>
               <div className="shrink-0 pl-4">
                  <button className="px-3 py-1.5 border border-cupros-border bg-cupros-bg rounded shadow-sm text-xs font-medium text-cupros-text hover:bg-cupros-surface-hover flex items-center transition-colors">
                     <RefreshCw className="w-3 h-3 mr-1.5" /> Force Retry Now
                  </button>
               </div>
             </div>
          </td>
        </tr>
      )}
    </>
  );
}
