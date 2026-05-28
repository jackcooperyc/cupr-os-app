"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Download, 
  Calendar, 
  Store, 
  Globe, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Filter,
  MousePointerClick,
  ShoppingBag,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';

const channelData = [
  { name: 'Website', revenue: 45000, traffic: 120000, source: 'CŪPR Direct' },
  { name: 'Weedmaps', revenue: 32000, traffic: 80000, source: 'Meadow' },
  { name: 'Google', revenue: 18000, traffic: 45000, source: 'Meadow' },
  { name: 'Leafly', revenue: 12000, traffic: 25000, source: 'Nabis' },
  { name: 'Direct/POS', revenue: 85000, traffic: 15000, source: 'Meadow' },
];

const trafficData = [
  { name: 'W1', web: 4000, listings: 2400 },
  { name: 'W2', web: 3000, listings: 1398 },
  { name: 'W3', web: 2000, listings: 9800 },
  { name: 'W4', web: 2780, listings: 3908 },
  { name: 'W5', web: 1890, listings: 4800 },
  { name: 'W6', web: 2390, listings: 3800 },
  { name: 'W7', web: 3490, listings: 4300 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <h2 className="text-2xl font-bold tracking-tight text-cupros-text">Analytics & Attribution</h2>
          </div>
          <p className="text-cupros-text-muted text-sm mt-1">Cross-channel funnel, ROI, and customer insights.</p>
        </div>
        <div className="flex space-x-2">
           <button className="px-4 py-2 border border-cupros-border bg-cupros-surface text-sm rounded hover:bg-cupros-surface-hover transition-colors flex items-center shadow-sm">
             <Download className="w-4 h-4 mr-2" /> Export
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-h-0 bg-transparent rounded-xl">
        
        {/* Sticky Filters Toolbar */}
        <div className="p-3 border border-cupros-border bg-cupros-surface/80 backdrop-blur-md rounded-lg sticky top-0 z-20 flex flex-wrap gap-3 items-center justify-between shadow-sm mb-6">
           <div className="flex items-center space-x-2 text-sm text-cupros-text-muted">
              <Filter className="w-4 h-4 ml-1" />
              <span className="font-medium text-cupros-text mr-2">Filters:</span>
              
              <button className="flex items-center px-3 py-1.5 border border-cupros-border rounded-md bg-cupros-bg hover:bg-cupros-surface-hover transition-colors">
                <Store className="w-3.5 h-3.5 mr-2" /> All Locations
              </button>
              <button className="flex items-center px-3 py-1.5 border border-cupros-border rounded-md bg-cupros-bg hover:bg-cupros-surface-hover transition-colors">
                <Globe className="w-3.5 h-3.5 mr-2" /> All Channels
              </button>
              <div className="relative">
                 <select className="flex items-center pl-3 pr-8 py-1.5 border border-cupros-border rounded-md bg-cupros-bg hover:bg-cupros-surface-hover transition-colors text-sm text-cupros-text focus:outline-none appearance-none font-medium cursor-pointer">
                    <option>All Sources</option>
                    <option>Meadow (Retail)</option>
                    <option>Nabis (Wholesale)</option>
                    <option>Canix (Production)</option>
                    <option>CŪPR Direct</option>
                 </select>
                 <ArrowDownRight className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-cupros-text-muted" />
              </div>
           </div>
           
           <div className="flex items-center">
              <button className="flex items-center px-3 py-1.5 border border-cupros-border rounded-md bg-cupros-surface hover:bg-cupros-surface-hover transition-colors text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2 text-cupros-teal-light" /> Last 30 Days
              </button>
           </div>
        </div>

        <div className="overflow-y-auto pr-2 pb-10 space-y-6">
            
            {/* KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard title="Total Attributed Revenue" value="$192K" trend="+8.4%" icon={<TrendingUp />} />
              <MetricCard title="Total Impressions" value="1.2M" trend="+12%" icon={<Globe />} />
              <MetricCard title="Click-Through Rate" value="4.8%" trend="-0.5%" icon={<MousePointerClick />} negative />
              <MetricCard title="New Customers" value="842" trend="+15%" icon={<Users />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               <Card className="flex flex-col h-[400px]">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-cupros-text-muted">Revenue by Channel</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={channelData}
                          layout="vertical"
                          margin={{ top: 0, right: 30, left: 20, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#27272a" />
                          <XAxis type="number" stroke="#a1a1aa" fontSize={12} tickFormatter={(value) => `$${value/1000}k`} />
                          <YAxis dataKey="name" type="category" stroke="#a1a1aa" fontSize={12} width={80} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#131316', borderColor: '#27272a', borderRadius: '8px' }}
                            itemStyle={{ color: '#f4f4f5' }}
                            formatter={(value: any, name: any, props: any) => [
                               `$${value.toLocaleString()}`, 
                               props.payload.source ? `${name} (via ${props.payload.source})` : name
                            ]}
                          />
                          <Bar dataKey="revenue" fill="#167a73" radius={[0, 4, 4, 0]} />
                        </BarChart>
                     </ResponsiveContainer>
                  </CardContent>
               </Card>

               <Card className="flex flex-col h-[400px]">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-cupros-text-muted">Traffic Sources Trend</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={trafficData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                          <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                          <YAxis stroke="#a1a1aa" fontSize={12} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#131316', borderColor: '#27272a', borderRadius: '8px' }}
                            itemStyle={{ color: '#f4f4f5' }}
                          />
                          <Legend wrapperStyle={{ fontSize: '12px' }}/>
                          <Line type="monotone" dataKey="web" name="Website" stroke="#167a73" strokeWidth={2} dot={false} />
                          <Line type="monotone" dataKey="listings" name="Platform Listings" stroke="#a1a1aa" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                  </CardContent>
               </Card>
            </div>

            {/* Drilldown Table Placeholder */}
            <Card>
               <CardHeader className="border-b border-cupros-border pb-4">
                  <div className="flex items-center justify-between">
                     <CardTitle className="text-base">Campaign Performance Breakdown</CardTitle>
                     <button className="text-xs text-cupros-teal-light hover:underline font-medium">View All Campaigns</button>
                  </div>
               </CardHeader>
               <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left border-collapse">
                   <thead className="bg-cupros-surface text-cupros-text-muted text-xs uppercase border-b border-cupros-border">
                     <tr>
                       <th className="px-6 py-3 font-medium">Campaign</th>
                       <th className="px-6 py-3 font-medium text-right">Spend</th>
                       <th className="px-6 py-3 font-medium text-right">Impressions</th>
                       <th className="px-6 py-3 font-medium text-right">Clicks</th>
                       <th className="px-6 py-3 font-medium text-right">Conv. Rate</th>
                       <th className="px-6 py-3 font-medium text-right">Revenue</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-cupros-border">
                     <tr className="hover:bg-cupros-surface-hover">
                       <td className="px-6 py-4 font-medium text-cupros-text">Summer Blaze Local SEO</td>
                       <td className="px-6 py-4 text-right tabular-nums">$450.00</td>
                       <td className="px-6 py-4 text-right tabular-nums">12,400</td>
                       <td className="px-6 py-4 text-right tabular-nums">480</td>
                       <td className="px-6 py-4 text-right tabular-nums text-cupros-green">3.8%</td>
                       <td className="px-6 py-4 text-right tabular-nums font-medium">$4,200</td>
                     </tr>
                     <tr className="hover:bg-cupros-surface-hover">
                       <td className="px-6 py-4 font-medium text-cupros-text">Holiday Flower Promo (Email)</td>
                       <td className="px-6 py-4 text-right tabular-nums">$120.00</td>
                       <td className="px-6 py-4 text-right tabular-nums">8,500</td>
                       <td className="px-6 py-4 text-right tabular-nums">1,200</td>
                       <td className="px-6 py-4 text-right tabular-nums text-cupros-green">14.1%</td>
                       <td className="px-6 py-4 text-right tabular-nums font-medium">$12,800</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
            </Card>

        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend, icon, negative }: any) {
  return (
    <Card className="hover:bg-cupros-surface-hover transition-colors group cursor-pointer border-transparent shadow-sm ring-1 ring-cupros-border">
      <CardContent className="p-5 flex flex-col justify-between h-full relative overflow-hidden">
        <div className="absolute top-5 right-5 text-cupros-text-muted/30 group-hover:text-cupros-teal-light/20 transition-colors w-12 h-12 flex items-center justify-center pointer-events-none">
           {React.cloneElement(icon, { className: "w-full h-full" })}
        </div>
        
        <div>
          <p className="text-sm font-medium text-cupros-text-muted mb-1 relative z-10">{title}</p>
          <div className="flex items-baseline space-x-2 relative z-10">
            <h3 className="text-3xl font-semibold tabular-nums text-cupros-text">{value}</h3>
          </div>
        </div>
        
        <div className="mt-4 flex items-center relative z-10">
          <span className={cn(
             "text-xs font-medium flex items-center px-1.5 py-0.5 rounded", 
             negative ? "bg-rose-500/10 text-rose-400" : "bg-cupros-teal-light/10 text-cupros-teal-light"
          )}>
            {negative ? <ArrowDownRight className="w-3 h-3 mr-0.5" /> : <ArrowUpRight className="w-3 h-3 mr-0.5" />}
            {trend}
          </span>
          <span className="text-xs text-cupros-text-muted ml-2">vs previous period</span>
        </div>
      </CardContent>
    </Card>
  );
}
