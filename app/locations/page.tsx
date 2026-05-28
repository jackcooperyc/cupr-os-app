"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, CheckCircle2, AlertCircle, Phone, Globe, Edit3, MoreHorizontal, Filter, RefreshCw, ArrowUpDown } from "lucide-react";

export default function LocationsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-2xl font-bold tracking-tight text-cupros-text">Locations Manager</h2>
             <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
                 <RefreshCw className="w-3 h-3 mr-1" />
                 Last network sync: 1hr ago
             </Badge>
          </div>
          <p className="text-cupros-text-muted text-sm mt-1">Manage physical retail stores, hours, and cross-channel sync status.</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-cupros-teal-light text-white text-sm rounded hover:bg-cupros-teal transition-colors shadow-sm">
            Add Location
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        
        {/* Map Placeholder Panel - Progressive Disclosure: hidden on small screens */}
        <div className="hidden lg:flex flex-col w-1/3 min-h-0 bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden relative shadow-sm">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(https://picsum.photos/800/800?grayscale)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="absolute inset-0 z-0 bg-cupros-surface/80 backdrop-blur-sm pointer-events-none"></div>
          
          <div className="relative z-10 p-4 border-b border-cupros-border bg-cupros-surface/90 flex justify-between items-center">
             <h3 className="font-semibold text-sm text-cupros-text">Network Map</h3>
             <Badge variant="outline" className="text-xs font-mono">12 Active</Badge>
          </div>

          <div className="relative z-10 flex-1 flex items-center justify-center">
            {/* Map Pin Mock */}
            <div className="w-10 h-10 rounded-full bg-cupros-teal-light flex items-center justify-center text-white shadow-lg shadow-cupros-teal-light/20 cursor-pointer animate-pulse relative">
              <MapPin className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full ring-2 ring-cupros-surface"></div>
            </div>
          </div>
          
          <div className="relative z-10 p-4 border-t border-cupros-border bg-cupros-surface/90">
             <div className="text-xs text-cupros-text-muted">Currently viewing California Region</div>
          </div>
        </div>

        {/* Table Area */}
        <div className="flex-1 w-full lg:w-2/3 min-h-0 flex flex-col bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden shadow-sm">
           
           {/* Sticky Toolbar */}
           <div className="p-3 border-b border-cupros-border bg-cupros-bg sticky top-0 z-20 flex gap-3 items-center justify-between shadow-sm">
              <div className="relative w-full max-w-sm">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-cupros-text-muted" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-1.5 border border-cupros-border rounded-md text-sm bg-cupros-surface focus:outline-none focus:border-cupros-teal-light transition-colors"
                  placeholder="Search by name, city, or ID..."
                />
              </div>
              <div className="flex items-center space-x-2">
                 <button className="px-3 py-1.5 border border-cupros-border bg-cupros-surface rounded text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover flex items-center text-sm transition-colors">
                    <Filter className="w-4 h-4 mr-2" />
                    Status: All
                 </button>
              </div>
           </div>

           <div className="overflow-y-auto flex-1 bg-cupros-bg">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-xs sticky top-0 z-10 shadow-sm">
                <tr>
                  <th className="px-6 py-3 font-medium border-b border-cupros-border">
                    <div className="flex items-center cursor-pointer hover:text-cupros-text">Store Info <ArrowUpDown className="w-3 h-3 ml-1" /></div>
                  </th>
                  <th className="px-6 py-3 font-medium border-b border-cupros-border">Global Status</th>
                  <th className="px-6 py-3 font-medium border-b border-cupros-border">Synced Channels</th>
                  <th className="px-6 py-3 font-medium border-b border-cupros-border text-right hover:text-cupros-text cursor-pointer">
                     <div className="flex items-center justify-end">Actions</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cupros-border">
                <LocationRow 
                  name="Hollywood Flagship" 
                  address="1234 Sunset Blvd, Los Angeles, CA" 
                  status="Live" 
                  channels={["POS", "Weedmaps", "Google", "Website"]}
                />
                <LocationRow 
                  name="Downtown LA" 
                  address="890 Spring St, Los Angeles, CA" 
                  status="Action Required" 
                  channels={["Google", "Website"]}
                  warning
                />
                <LocationRow 
                  name="Venice Beach" 
                  address="401 Boardwalk, Venice, CA" 
                  status="Live" 
                  channels={["POS", "Weedmaps", "Google", "Website", "Leafly"]}
                />
                <LocationRow 
                  name="Santa Monica" 
                  address="14th St & Ocean Ave, Santa Monica, CA" 
                  status="Live" 
                  channels={["POS", "Google", "Website"]}
                />
                 <LocationRow 
                  name="Pasadena" 
                  address="Colorado Blvd, Pasadena, CA" 
                  status="Draft" 
                  channels={["Website"]}
                  draft
                />
                 <LocationRow 
                  name="Silver Lake" 
                  address="Sunset Blvd, Silver Lake, CA" 
                  status="Live" 
                  channels={["POS", "Weedmaps", "Google", "Website"]}
                />
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

function LocationRow({ name, address, status, channels, warning, draft }: any) {
  return (
    <tr className="hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer relative">
      <td className="px-6 py-4">
        <div className="font-medium text-cupros-text group-hover:text-cupros-teal-light transition-colors">{name}</div>
        <div className="text-xs text-cupros-text-muted mt-1 flex items-center">
          <MapPin className="w-3 h-3 mr-1" />
          {address}
        </div>
      </td>
      <td className="px-6 py-4">
        {warning && <span className="inline-flex items-center text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-1 rounded"><AlertCircle className="w-3.5 h-3.5 mr-1" /> {status}</span>}
        {draft && <span className="inline-flex items-center text-xs font-medium text-cupros-text-muted bg-cupros-surface border border-cupros-border px-2 py-1 rounded">{status}</span>}
        {!warning && !draft && <span className="inline-flex items-center text-xs font-medium text-cupros-green bg-cupros-green/10 px-2 py-1 rounded"><CheckCircle2 className="w-3.5 h-3.5 mr-1" /> {status}</span>}
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1">
          {channels.map((c: string) => (
             <span key={c} className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cupros-surface border border-cupros-border text-cupros-text-muted group-hover:border-cupros-text-muted transition-colors">{c}</span>
          ))}
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end space-x-2">
          <button className="p-1.5 rounded-md hover:bg-cupros-border text-cupros-text-muted hover:text-cupros-text transition-all bg-cupros-surface border border-cupros-border shadow-sm">
            <Edit3 className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded-md hover:bg-cupros-border text-cupros-text-muted hover:text-cupros-text transition-all bg-cupros-surface border border-cupros-border shadow-sm">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
