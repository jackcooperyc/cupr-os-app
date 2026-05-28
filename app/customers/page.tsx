"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Search, Download, Filter } from "lucide-react";

export default function CustomersPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-2xl font-bold tracking-tight text-cupros-text">Customers</h2>
          </div>
          <p className="text-cupros-text-muted text-sm mt-1">Customer intelligence, segments, and loyalty insights.</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-cupros-border bg-cupros-surface text-sm rounded shadow-sm hover:bg-cupros-surface-hover flex items-center transition-colors">
            <Download className="w-4 h-4 mr-2" /> Export Cohort
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden shadow-sm">
        <div className="p-3 border-b border-cupros-border bg-cupros-bg flex gap-3 items-center justify-between">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-cupros-text-muted" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-1.5 border border-cupros-border rounded-md text-sm bg-cupros-surface focus:outline-none focus:border-cupros-teal-light transition-colors"
              placeholder="Search customers by name or phone..."
            />
          </div>
          <button className="px-3 py-1.5 border border-cupros-border bg-cupros-surface rounded text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover flex items-center text-sm transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            Segment: Retail
          </button>
        </div>

        <div className="overflow-y-auto flex-1 bg-cupros-bg">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-xs sticky top-0 z-10 shadow-sm">
              <tr>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">Customer</th>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">Segment</th>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">LTV</th>
                <th className="px-6 py-3 font-medium border-b border-cupros-border">Last Order</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cupros-border">
              <tr className="hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="font-medium text-cupros-text">Marcus Cole</div>
                  <div className="text-xs text-cupros-text-muted mt-1">+1 (310) 555-0192</div>
                </td>
                <td className="px-6 py-4"><Badge variant="success">VIP</Badge></td>
                <td className="px-6 py-4 tabular-nums">$3,420.50</td>
                <td className="px-6 py-4 text-cupros-text-muted">2 days ago</td>
              </tr>
              <tr className="hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="font-medium text-cupros-text">Sarah Jenkins</div>
                  <div className="text-xs text-cupros-text-muted mt-1">+1 (415) 555-0105</div>
                </td>
                <td className="px-6 py-4"><Badge variant="outline" className="text-cupros-text-muted">Retail</Badge></td>
                <td className="px-6 py-4 tabular-nums">$145.00</td>
                <td className="px-6 py-4 text-cupros-text-muted">Today</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
