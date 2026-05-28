"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  AlertTriangle, 
  Store, 
  Globe, 
  ShoppingBag, 
  ShieldAlert,
  ArrowRight,
  RefreshCw,
  Edit2,
  Sparkles
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const revenueData = [
  { name: 'Mon', total: 12400, online: 4200 },
  { name: 'Tue', total: 14200, online: 4800 },
  { name: 'Wed', total: 13500, online: 4100 },
  { name: 'Thu', total: 16800, online: 5800 },
  { name: 'Fri', total: 24500, online: 8900 },
  { name: 'Sat', total: 31200, online: 12400 },
  { name: 'Sun', total: 28900, online: 11200 },
];

export default function HomeDashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-cupros-text">Network Overview</h2>
          <p className="text-cupros-text-muted text-[13px] mt-1">Multi-channel performance across 12 active locations.</p>
        </div>
        <div className="flex space-x-2">
          <button className="secondary-button">
            Export Report
          </button>
          <button className="hero-button">
            Launch Campaign
          </button>
        </div>
      </div>

      {/* KPI Row 1: The Big Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard 
          title="Attributed Revenue" 
          value="$141,500" 
          trend="+12.5%" 
          trendUp={true} 
          subtitle="vs last 7 days" 
        />
        <KpiCard 
          title="Total Orders" 
          value="1,842" 
          trend="+4.2%" 
          trendUp={true} 
          subtitle="Pickup & Delivery" 
        />
        <KpiCard 
          title="Listing Health" 
          value="94%" 
          trend="-1.2%" 
          trendUp={false} 
          subtitle="2 locations need review" 
          warning
        />
        <KpiCard 
          title="Compliance Score" 
          value="100/100" 
          trend="Perfect" 
          trendUp={true} 
          subtitle="All assets verified" 
          success
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart Area */}
        <Card className="col-span-1 lg:col-span-2 flex flex-col h-[400px]">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Omnichannel Revenue</CardTitle>
              <p className="text-sm text-cupros-text-muted mt-1">In-store vs Online Attribution</p>
            </div>
            <div className="flex space-x-2">
              <Badge variant="outline" className="px-2 py-1 cursor-pointer hover:bg-cupros-surface-hover">7D</Badge>
              <Badge variant="outline" className="px-2 py-1 cursor-pointer bg-cupros-surface-hover">30D</Badge>
              <Badge variant="outline" className="px-2 py-1 cursor-pointer hover:bg-cupros-surface-hover">YTD</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1 min-h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#167a73" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#167a73" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorOnline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f4f4f5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f4f4f5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#131316', borderColor: '#27272a', borderRadius: '8px' }}
                  itemStyle={{ color: '#f4f4f5' }}
                />
                <Area type="monotone" dataKey="total" stroke="#167a73" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal)" />
                <Area type="monotone" dataKey="online" stroke="#f4f4f5" strokeWidth={2} fillOpacity={1} fill="url(#colorOnline)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Next Best Actions & Alerts */}
        <div className="space-y-6">
          
          <Card>
            <CardHeader className="pb-3 border-b border-cupros-border">
              <CardTitle className="flex items-center text-rose-500">
                <ShieldAlert className="w-4 h-4 mr-2" />
                Compliance Preflight
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-cupros-border">
                <ActionRow 
                  title="Missing CA Age Disclaimer" 
                  desc="Campaign 'Summer Blaze' requires standard age-gate text."
                  urgent
                />
                <ActionRow 
                  title="Menu Sync Failure" 
                  desc="Downtown LA location disconnected from POS."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3 border-b border-cupros-border">
              <CardTitle className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-cupros-teal-light" />
                Growth Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-cupros-border">
                 <ActionRow 
                  title="Generate Weekly Specials" 
                  desc="AI Studio ready to draft emails based on surplus inventory."
                  actionIcon={<Edit2 className="w-4 h-4" />}
                />
                <ActionRow 
                  title="Google GBP Parity" 
                  desc="Review suggested updates to store hours for Holidays."
                  actionIcon={<RefreshCw className="w-4 h-4" />}
                  successBadge="Ready"
                />
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

       {/* Detailed Operational Table preview */}
       <Card>
        <CardHeader className="flex flex-row items-center justify-between py-4 border-b border-cupros-border/50">
          <CardTitle>Location Status</CardTitle>
          <button className="text-[13px] font-medium text-cupros-text-muted hover:text-cupros-text transition-colors flex items-center">
            View All Locations <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="text-[10px] font-semibold text-cupros-text-muted uppercase tracking-wider bg-cupros-bg/50">
              <tr>
                <th className="px-5 py-2.5">Location</th>
                <th className="px-5 py-2.5">Sync Status</th>
                <th className="px-5 py-2.5">Listings Health</th>
                <th className="px-5 py-2.5 text-right">Today&apos;s Orders</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cupros-border/50 text-[13px]">
              <TableRow name="Green Coast - Hollywood" sync="Live" health="98%" orders="124" />
              <TableRow name="Green Coast - Downtown" sync="Error" health="85%" orders="89" warning />
              <TableRow name="Green Coast - Venice" sync="Live" health="100%" orders="211" />
              <TableRow name="Green Coast - Santa Monica" sync="Live" health="92%" orders="156" />
            </tbody>
          </table>
        </div>
      </Card>

    </div>
  );
}

function KpiCard({ title, value, trend, trendUp, subtitle, warning, success }: any) {
  return (
    <Card className="hover:border-cupros-border transition-colors group cursor-default">
      <CardContent className="p-4">
        <p className="text-[12px] font-medium text-cupros-text-muted mb-1.5 uppercase tracking-wider">{title}</p>
        <div className="flex items-baseline space-x-2">
          <h3 className="text-2xl font-semibold tabular-nums tracking-tight">{value}</h3>
          {!warning && !success && (
            <span className={cn("text-[11px] font-medium flex items-center", trendUp ? "text-cupros-green" : "text-rose-500")}>
              {trendUp ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
              {trend}
            </span>
          )}
        </div>
        <p className="text-[11px] text-cupros-text-muted mt-2">{subtitle}</p>
        {warning && <div className="mt-2.5"><Badge variant="warning">Action Required</Badge></div>}
        {success && <div className="mt-2.5"><Badge variant="success">Verified</Badge></div>}
      </CardContent>
    </Card>
  );
}

function ActionRow({ title, desc, urgent, actionIcon = <ArrowRight className="w-3.5 h-3.5" />, successBadge }: any) {
  return (
    <div className="flex items-start justify-between p-4 hover:bg-cupros-surface-hover transition-colors cursor-pointer group">
      <div>
        <h4 className="text-[13px] font-medium flex items-center text-cupros-text">
          {title}
          {successBadge && <Badge variant="success" className="ml-2 px-1 text-[10px] uppercase">{successBadge}</Badge>}
        </h4>
        <p className="text-[12px] text-cupros-text-muted mt-1 leading-relaxed">{desc}</p>
      </div>
      <div className={cn(
        "p-1 rounded text-cupros-text-muted group-hover:text-cupros-text group-hover:bg-cupros-border/50 transition-colors",
        urgent ? "bg-cupros-rose-bg text-rose-500 group-hover:text-rose-400 group-hover:bg-cupros-rose-bg" : "bg-transparent"
      )}>
        {actionIcon}
      </div>
    </div>
  );
}

function TableRow({ name, sync, health, orders, warning }: any) {
  return (
    <tr className="hover:bg-cupros-surface-hover/80 transition-colors group">
      <td className="px-5 py-3 font-medium flex items-center text-cupros-text group-hover:text-cupros-teal-light transition-colors">
        <Store className="w-3.5 h-3.5 mr-2 opacity-50" />
        {name}
      </td>
      <td className="px-5 py-3">
        <Badge variant={warning ? "destructive" : "success"}>{sync}</Badge>
      </td>
      <td className="px-5 py-3">
        <div className="flex items-center">
          <div className="w-full bg-cupros-border/50 rounded-full h-1 mr-3 max-w-[80px] overflow-hidden">
            <div className={cn("h-1 rounded-full", warning ? "bg-cupros-amber" : "bg-cupros-green")} style={{ width: health }}></div>
          </div>
          <span className="text-[12px] tabular-nums font-medium text-cupros-text-muted">{health}</span>
        </div>
      </td>
      <td className="px-5 py-3 text-right tabular-nums text-cupros-text font-medium">{orders}</td>
    </tr>
  );
}
