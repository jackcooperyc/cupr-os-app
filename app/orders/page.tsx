"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  ChevronDown, 
  MoreHorizontal, 
  Store, 
  ShoppingBag, 
  Globe, 
  Clock, 
  Clock3, 
  CheckCircle2, 
  AlertOctagon,
  ArrowUpDown
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function OrdersPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-52px)]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0 mt-6">
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <h2 className="text-xl font-semibold tracking-tight text-cupros-text">Orders Hub</h2>
            <div className="flex space-x-2">
              <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
                 <div className="w-1.5 h-1.5 rounded-full bg-cupros-teal-light mr-1.5 animate-pulse" />
                 Meadow sync: Live
              </Badge>
              <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
                 <CheckCircle2 className="w-3 h-3 text-cupros-teal-light mr-1" />
                 Flower Co.: Connected
              </Badge>
            </div>
          </div>
          <p className="text-cupros-text-muted text-[13px] mt-1">Manage pickup, delivery, and shipped orders across all channels.</p>
        </div>
        <div className="flex space-x-2">
          <button className="secondary-button flex items-center">
             <Download className="w-3.5 h-3.5 mr-1.5" /> Export CSV
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-h-0 bg-cupros-surface border border-cupros-border-subtle rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.5),_0_1px_2px_rgba(0,0,0,0.3)]">
        
        {/* Sticky Filters Toolbar */}
        <div className="p-3 border-b border-cupros-border/50 bg-cupros-surface/50 sticky top-0 z-20 flex flex-wrap gap-3 items-center justify-between">
           <div className="flex items-center space-x-3 flex-1 min-w-[300px]">
              <div className="relative w-full max-w-sm">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-3.5 w-3.5 text-cupros-text-muted" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-9 pr-3 py-1.5 border border-cupros-border rounded-md text-[13px] bg-cupros-bg/50 focus:outline-none focus:border-cupros-text-muted transition-colors placeholder-cupros-text-muted/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"
                  placeholder="Order ID, customer, or phone..."
                />
              </div>
              <button className="secondary-button !px-2 flex items-center justify-center shrink-0">
                 <Filter className="w-3.5 h-3.5" />
              </button>
           </div>
           
           <div className="flex items-center space-x-3 text-[13px]">
              <div className="flex border border-cupros-border rounded overflow-hidden shadow-sm">
                <button className="px-3 py-1.5 bg-cupros-surface-hover font-medium border-r border-cupros-border">All Status</button>
                <button className="px-3 py-1.5 bg-cupros-surface hover:bg-cupros-surface-hover text-cupros-text-muted transition-colors">Pending <Badge variant="destructive" className="ml-1 px-1 bg-rose-500 text-white font-bold tracking-tight text-[10px] uppercase">4</Badge></button>
                <button className="px-3 py-1.5 bg-cupros-surface hover:bg-cupros-surface-hover text-cupros-text-muted transition-colors">Completed</button>
                <button className="px-3 py-1.5 bg-cupros-surface hover:bg-cupros-surface-hover text-cupros-text-muted transition-colors">Exceptions</button>
              </div>
           </div>
        </div>

        {/* Action Bar (shows when rows selected) - hidden in this static view */}
        
        {/* Table Area */}
        <div className="overflow-auto flex-1 bg-cupros-bg/50">
          <table className="w-full text-left border-collapse">
            <thead className="bg-cupros-surface/80 text-cupros-text-muted uppercase text-[10px] tracking-wider font-semibold sticky top-0 z-10 backdrop-blur-sm border-b border-cupros-border/50">
              <tr>
                <th className="px-5 py-2.5 w-12">
                   <input type="checkbox" className="rounded border-cupros-border bg-cupros-bg accent-cupros-teal-light" />
                </th>
                <th className="px-5 py-2.5 whitespace-nowrap cursor-pointer hover:text-cupros-text transition-colors">
                  <div className="flex items-center">Order ID <ArrowUpDown className="w-3 h-3 ml-1" /></div>
                </th>
                <th className="px-5 py-2.5">Customer</th>
                <th className="px-5 py-2.5">Type</th>
                <th className="px-5 py-2.5">Source</th>
                <th className="px-5 py-2.5">Store</th>
                <th className="px-5 py-2.5 whitespace-nowrap cursor-pointer hover:text-cupros-text transition-colors">
                  <div className="flex items-center">Total <ArrowUpDown className="w-3 h-3 ml-1" /></div>
                </th>
                <th className="px-5 py-2.5">Status</th>
                <th className="px-5 py-2.5 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cupros-border/50 text-[13px]">
               <OrderRow 
                 id="ORD-0091" time="2m ago" customer="Sarah Jenkins" email="sarah.j@email.com" 
                 type="Pickup" source="Meadow POS" store="Hollywood" total="$145.00" 
                 status="Pending" statusType="warning" 
               />
               <OrderRow 
                 id="ORD-0090" time="15m ago" customer="Marcus Cole" email="mcole42@email.com" 
                 type="Delivery" source="Flower Co. Partner" deliveryPartner="Flower Co. — Channel Partner" store="Downtown" total="$89.50" 
                 status="In Transit" statusType="default" 
               />
               <OrderRow 
                 id="ORD-0089" time="1h ago" customer="Elena Rodriguez" email="elena.r@email.com" 
                 type="Pickup" source="Meadow POS" store="Venice" total="$210.00" 
                 status="Completed" statusType="success" 
               />
               <OrderRow 
                 id="ORD-0088" time="1h 12m ago" customer="David Kim" email="dkim99@email.com" 
                 type="Delivery" source="CŪPR Direct" store="Hollywood" total="$315.00" 
                 status="Failed: ID Verification" statusType="destructive" 
               />
               <OrderRow 
                 id="ORD-0087" time="2h ago" customer="Guest User" email="--" 
                 type="Pickup" source="Google Business" store="Santa Monica" total="$65.00" 
                 status="Completed" statusType="success" 
               />
               <OrderRow 
                 id="ORD-0086" time="2h 30m ago" customer="Jordan Lee" email="jordanlee12@email.com" 
                 type="Pickup" source="CŪPR Direct" store="Hollywood" total="$180.00" 
                 status="Pending" statusType="warning" 
               />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function OrderRow({ id, time, customer, email, type, source, deliveryPartner, store, total, status, statusType }: any) {
  return (
    <tr className="hover:bg-cupros-surface-hover/50 transition-colors group cursor-pointer text-[13px]">
      <td className="px-5 py-3 w-12">
        <input type="checkbox" className="rounded border-cupros-border bg-cupros-bg accent-cupros-teal-light opacity-0 group-hover:opacity-100 transition-opacity" />
      </td>
      <td className="px-5 py-3">
        <div className="font-mono text-[12px] font-medium text-cupros-text group-hover:text-cupros-teal-light transition-colors tracking-tight">{id}</div>
        <div className="text-[11px] text-cupros-text-muted mt-1 flex items-center tracking-wide">
           <Clock3 className="w-3 h-3 mr-1" /> {time}
        </div>
      </td>
      <td className="px-5 py-3">
        <div className="font-medium text-[13px] text-cupros-text">{customer}</div>
        <div className="text-[11px] text-cupros-text-muted mt-0.5">{email}</div>
      </td>
      <td className="px-5 py-3">
        <div className="flex items-center text-[12px] text-cupros-text-muted">
           {type === 'Pickup' ? <ShoppingBag className="w-3.5 h-3.5 mr-1.5 opacity-70" /> : <Store className="w-3.5 h-3.5 mr-1.5 opacity-70" />}
           {type}
        </div>
      </td>
      <td className="px-5 py-3">
        <div className="flex flex-col space-y-1 items-start">
          <span className="text-cupros-text-muted">{source}</span>
          {deliveryPartner && (
            <Badge variant="outline" className="text-[9px] bg-indigo-500/10 text-indigo-400 border-indigo-500/20 px-1 py-0 shadow-none uppercase tracking-wider">
              {deliveryPartner}
            </Badge>
          )}
        </div>
      </td>
      <td className="px-5 py-3 text-cupros-text-muted">
        {store}
      </td>
      <td className="px-5 py-3 font-mono font-medium text-cupros-text tabular-nums text-[13px] tracking-tight">
        {total}
      </td>
      <td className="px-5 py-3">
         <Badge variant={statusType as any} className="whitespace-nowrap uppercase tracking-wider text-[9px] px-1.5 hover:bg-cupros-surface">
            {statusType === 'success' && <CheckCircle2 className="w-3 h-3 mr-1" />}
            {statusType === 'destructive' && <AlertOctagon className="w-3 h-3 mr-1" />}
            {status}
         </Badge>
      </td>
      <td className="px-5 py-3 text-right">
        <button className="p-1.5 rounded hover:bg-cupros-border text-cupros-text-muted hover:text-cupros-text opacity-0 group-hover:opacity-100 transition-all">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}
