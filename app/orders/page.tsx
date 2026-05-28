"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { TablePageSkeleton } from "@/components/shared/Skeleton";
import { EmptyState } from "@/components/shared/EmptyState";
import { useCuprosMock } from "@/hooks/useCuprosMock";
import type { OrdersPayload, Order, OrderStatusType } from "@/lib/mockApi";
import { 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal, 
  Store, 
  ShoppingBag, 
  Clock3, 
  CheckCircle2, 
  AlertOctagon,
  ArrowUpDown,
  ShoppingCart
} from "lucide-react";

export default function OrdersPage() {
  const { data, loading, error } = useCuprosMock<OrdersPayload>("orders");

  if (loading) {
    return <TablePageSkeleton />;
  }

  if (error || !data) {
    return (
      <div className="max-w-7xl mx-auto pb-10 mt-6">
        <EmptyState
          icon={ShoppingCart}
          title="Orders unavailable"
          description={error ?? "Could not load orders data."}
          action={
            <button type="button" className="secondary-button" onClick={() => window.location.reload()}>
              Retry
            </button>
          }
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-52px)]">
      <PageHeader
        className="mt-6"
        title={data.header.title}
        description={data.header.description}
        badges={
          <div className="flex space-x-2">
            {data.syncBadges.map((badge) => (
              <Badge
                key={badge.label}
                variant="outline"
                className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center"
              >
                {badge.variant === 'live' ? (
                  <div className="w-1.5 h-1.5 rounded-full bg-cupros-teal-light mr-1.5 animate-pulse" />
                ) : (
                  <CheckCircle2 className="w-3 h-3 text-cupros-teal-light mr-1" />
                )}
                {badge.label}
              </Badge>
            ))}
          </div>
        }
        actions={
          <button type="button" className="secondary-button flex items-center">
            <Download className="w-3.5 h-3.5 mr-1.5" /> Export CSV
          </button>
        }
      />

      <div className="flex flex-col flex-1 min-h-0 bg-cupros-surface border border-cupros-border-subtle rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.5),_0_1px_2px_rgba(0,0,0,0.3)]">
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
              <button type="button" className="secondary-button !px-2 flex items-center justify-center shrink-0">
                 <Filter className="w-3.5 h-3.5" />
              </button>
           </div>
           
           <div className="flex items-center space-x-3 text-[13px]">
              <div className="flex border border-cupros-border rounded overflow-hidden shadow-sm">
                <button type="button" className="px-3 py-1.5 bg-cupros-surface-hover font-medium border-r border-cupros-border">All Status</button>
                <button type="button" className="px-3 py-1.5 bg-cupros-surface hover:bg-cupros-surface-hover text-cupros-text-muted transition-colors">
                  Pending <Badge variant="destructive" className="ml-1 px-1 bg-rose-500 text-white font-bold tracking-tight text-[10px] uppercase">{data.filterCounts.pending}</Badge>
                </button>
                <button type="button" className="px-3 py-1.5 bg-cupros-surface hover:bg-cupros-surface-hover text-cupros-text-muted transition-colors">Completed</button>
                <button type="button" className="px-3 py-1.5 bg-cupros-surface hover:bg-cupros-surface-hover text-cupros-text-muted transition-colors">Exceptions</button>
              </div>
           </div>
        </div>

        <div className="overflow-auto flex-1 bg-cupros-bg/50">
          <table className="w-full text-left border-collapse">
            <thead className="bg-cupros-surface/80 text-cupros-text-muted uppercase text-[10px] tracking-wider font-semibold sticky top-0 z-10 backdrop-blur-sm border-b border-cupros-border/50">
              <tr>
                <th className="px-5 py-2.5 w-12">
                   <input type="checkbox" className="rounded border-cupros-border bg-cupros-bg accent-cupros-teal-light" aria-label="Select all orders" />
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
               {data.orders.length === 0 ? (
                 <tr>
                   <td colSpan={9}>
                     <EmptyState
                       icon={ShoppingCart}
                       title="No orders yet"
                       description="Orders from all channels will appear here once they sync."
                       compact
                     />
                   </td>
                 </tr>
               ) : (
                 data.orders.map((order) => (
                   <OrderRow key={order.id} {...order} />
                 ))
               )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function OrderRow({ id, time, customer, email, type, source, deliveryPartner, store, total, status, statusType }: Order) {
  return (
    <tr className="hover:bg-cupros-surface-hover/50 transition-colors group cursor-pointer text-[13px]">
      <td className="px-5 py-3 w-12">
        <input type="checkbox" className="rounded border-cupros-border bg-cupros-bg accent-cupros-teal-light opacity-0 group-hover:opacity-100 transition-opacity" aria-label={`Select order ${id}`} />
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
         <Badge variant={statusType} className="whitespace-nowrap uppercase tracking-wider text-[9px] px-1.5 hover:bg-cupros-surface">
            {statusType === 'success' && <CheckCircle2 className="w-3 h-3 mr-1" />}
            {statusType === 'destructive' && <AlertOctagon className="w-3 h-3 mr-1" />}
            {status}
         </Badge>
      </td>
      <td className="px-5 py-3 text-right">
        <button type="button" className="p-1.5 rounded hover:bg-cupros-border text-cupros-text-muted hover:text-cupros-text opacity-0 group-hover:opacity-100 transition-all">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}
