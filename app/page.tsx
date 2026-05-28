"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { DashboardPageSkeleton } from "@/components/shared/Skeleton";
import { EmptyState } from "@/components/shared/EmptyState";
import { PreflightWidget } from "@/components/shared/PreflightWidget";
import { IntegrationHealthBar } from "@/components/shared/IntegrationHealthBar";
import { useCuprosMock } from "@/hooks/useCuprosMock";
import type { DashboardPayload, DashboardKpi, DashboardAction, LocationStatus } from "@/lib/mockApi";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Store, 
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

export default function HomeDashboard() {
  const { data, loading, error } = useCuprosMock<DashboardPayload>("dashboard");

  if (loading) {
    return <DashboardPageSkeleton />;
  }

  if (error || !data) {
    return (
      <div className="max-w-7xl mx-auto pb-10">
        <EmptyState
          icon={ShieldAlert}
          title="Dashboard unavailable"
          description={error ?? "Could not load network overview data."}
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
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <PageHeader
        title={data.header.title}
        description={data.header.description}
        actions={
          <>
            <button type="button" className="secondary-button">Export Report</button>
            <button type="button" className="hero-button">Launch Campaign</button>
          </>
        }
      />

      {data.header.uinTagline && (
        <p className="text-[12px] text-cupros-teal-light font-medium -mt-2">{data.header.uinTagline}</p>
      )}

      <IntegrationHealthBar health={data.integrationHealth} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.kpis.map((kpi) => (
          <KpiCard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
              <AreaChart data={data.revenue} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorOnline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#131316', borderColor: '#27272a', borderRadius: '8px' }}
                  itemStyle={{ color: '#f4f4f5' }}
                />
                <Area type="monotone" dataKey="total" stroke="#14b8a6" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal)" />
                <Area type="monotone" dataKey="online" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorOnline)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3 border-b border-cupros-border">
              <CardTitle className="flex items-center text-rose-500">
                <ShieldAlert className="w-4 h-4 mr-2" />
                Compliance Preflight
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-4 border-b border-cupros-border/50">
                <PreflightWidget checks={data.preflight} />
              </div>
              <div className="divide-y divide-cupros-border">
                {data.complianceActions.map((action) => (
                  <ActionRow key={action.id} {...action} />
                ))}
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
                {data.growthActions.map((action) => (
                  <ActionRow
                    key={action.id}
                    {...action}
                    actionIcon={
                      action.id === 'weekly-specials'
                        ? <Edit2 className="w-4 h-4" />
                        : <RefreshCw className="w-4 h-4" />
                    }
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

       <Card>
        <CardHeader className="flex flex-row items-center justify-between py-4 border-b border-cupros-border/50">
          <CardTitle>Location Status</CardTitle>
          <button type="button" className="text-[13px] font-medium text-cupros-text-muted hover:text-cupros-text transition-colors flex items-center">
            View All Locations <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </CardHeader>
        <DataTable
          compact
          columns={[
            { key: 'location', label: 'Location' },
            { key: 'sync', label: 'Sync Status' },
            { key: 'health', label: 'Listings Health' },
            { key: 'orders', label: "Today's Orders", align: 'right' },
          ]}
        >
          {data.locations.map((loc) => (
            <LocationRow key={loc.name} {...loc} />
          ))}
        </DataTable>
      </Card>
    </div>
  );
}


function KpiCard({ title, value, trend, trendUp, subtitle, warning, success }: DashboardKpi) {
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

function ActionRow({ title, desc, urgent, actionIcon = <ArrowRight className="w-3.5 h-3.5" />, successBadge }: DashboardAction & { actionIcon?: React.ReactNode }) {
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

function LocationRow({ name, sync, health, orders, warning }: LocationStatus) {
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
