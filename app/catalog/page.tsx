"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MenuSquare, Filter, RefreshCw, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CatalogPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-52px)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0 mt-6">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-xl font-semibold tracking-tight text-cupros-text">Catalog & Menu</h2>
             <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
                 <RefreshCw className="w-3 h-3 mr-1" />
                 POS Sync: Connected
             </Badge>
          </div>
          <p className="text-cupros-text-muted text-[13px] mt-1">Manage retail inventory visibility, categorization, and cross-channel sync.</p>
        </div>
        <div className="flex space-x-2">
          <button className="secondary-button">
            Export Catalog
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col bg-cupros-surface rounded-lg border border-cupros-border-subtle overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.5),_0_1px_2px_rgba(0,0,0,0.3)]">
        <div className="p-3 border-b border-cupros-border/50 bg-cupros-surface/50 flex gap-3 items-center justify-between">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-3.5 w-3.5 text-cupros-text-muted" />
            </div>
            <input
              type="text"
              className="block w-full pl-9 pr-3 py-1.5 border border-cupros-border rounded-md text-[13px] bg-cupros-bg/50 focus:outline-none focus:border-cupros-text-muted transition-colors placeholder-cupros-text-muted/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"
              placeholder="Search products by SKU or name..."
            />
          </div>
          <button className="secondary-button flex items-center">
            <Filter className="w-3.5 h-3.5 mr-1.5" />
            Filter
          </button>
        </div>

        <div className="overflow-y-auto flex-1 bg-cupros-bg/50">
          <table className="w-full text-left border-collapse">
            <thead className="bg-cupros-surface/80 text-cupros-text-muted uppercase text-[10px] tracking-wider font-semibold sticky top-0 z-10 backdrop-blur-sm border-b border-cupros-border/50">
              <tr>
                <th className="px-5 py-2.5 w-12"></th>
                <th className="px-5 py-2.5">Product Name</th>
                <th className="px-5 py-2.5">Source</th>
                <th className="px-5 py-2.5">Category</th>
                <th className="px-5 py-2.5">Inventory</th>
                <th className="px-5 py-2.5">Visibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cupros-border/50 text-[13px]">
              <ProductRow 
                name="Alien Labs - Biskante (3.5g)"
                sku="AL-BSK-35"
                source="Meadow"
                category="Flower"
                inventory={<>42 Units <Badge variant="outline" className="ml-2 text-[9px] text-cupros-teal-light border-cupros-teal-light/30 bg-cupros-teal-light/10 uppercase tracking-wider">POS-synced</Badge></>}
                visibility={<Badge variant="success">All Channels</Badge>}
                provenance={{
                  "Pricing": { src: "Meadow", time: "2m ago" },
                  "Brand Data": { src: "Canix", time: "1h ago" },
                  "Inventory": { src: "Meadow", time: "2m ago" }
                }}
              />
              <ProductRow 
                name="Camino - Midnight Blueberry Gummies"
                sku="KIVA-MB-100"
                source="Nabis"
                category="Edibles"
                inventory={<><span className="text-rose-400">0 Units</span> <Badge variant="outline" className="ml-2 text-[10px] text-blue-400 border-blue-400/30 bg-blue-400/10">Wholesale-available</Badge></>}
                visibility={<Badge variant="outline" className="text-cupros-text-muted">Hidden (OOS)</Badge>}
                provenance={{
                  "Pricing": { src: "Nabis", time: "4h ago" },
                  "Brand Data": { src: "Nabis", time: "1d ago" },
                  "Inventory": { src: "Manual", time: "Just now" }
                }}
              />
              <ProductRow 
                name="Raw Garden - Refined Live Resin (1g)"
                sku="RG-RLR-1G"
                source="Manual"
                category="Extracts"
                inventory={<>15 Units <Badge variant="outline" className="ml-2 text-[10px] text-amber-500 border-amber-500/30 bg-amber-500/10">Manual Override</Badge></>}
                visibility={<Badge variant="success">All Channels</Badge>}
                provenance={{
                  "Pricing": { src: "Manual", time: "2d ago" },
                  "Brand Data": { src: "Canix", time: "1h ago", badge: "ERP-enriched", badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10" },
                  "Inventory": { src: "Manual", time: "2d ago" }
                }}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ProductRow({ name, sku, source, category, inventory, visibility, provenance }: any) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <tr 
        className={cn("hover:bg-cupros-surface-hover/80 transition-colors group cursor-pointer", expanded && "bg-cupros-surface")}
        onClick={() => setExpanded(!expanded)}
      >
        <td className="px-6 py-4 w-12 text-center text-cupros-text-muted">
           <div className={`transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}>›</div>
        </td>
        <td className="px-6 py-4">
          <div className="font-medium text-cupros-text">{name}</div>
          <div className="text-xs text-cupros-text-muted mt-1 font-mono">SKU: {sku}</div>
        </td>
        <td className="px-6 py-4">
           {source === 'Meadow' && <Badge variant="outline" className="bg-cupros-bg">🌱 Meadow</Badge>}
           {source === 'Nabis' && <Badge variant="outline" className="bg-cupros-bg">📦 Nabis</Badge>}
           {source === 'Manual' && <Badge variant="outline" className="bg-cupros-bg text-cupros-text-muted">✍️ Manual</Badge>}
        </td>
        <td className="px-6 py-4">{category}</td>
        <td className="px-6 py-4 tabular-nums flex items-center">
          {inventory}
        </td>
        <td className="px-6 py-4">{visibility}</td>
      </tr>
      {expanded && (
        <tr className="bg-cupros-surface border-b border-cupros-border">
          <td colSpan={6} className="px-6 py-4 p-0">
             <div className="p-4 pl-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-top-2 fade-in duration-200">
               <div className="col-span-full">
                  <h4 className="text-xs font-semibold text-cupros-text uppercase tracking-wider mb-3 flex items-center">
                    Data Provenance
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-cupros-bg border border-cupros-border text-cupros-text-muted text-[10px] font-normal normal-case tracking-normal">Tracking field-level sources</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(provenance).map(([field, data]: any) => (
                      <div key={field} className="bg-cupros-bg border border-cupros-border rounded p-3 text-sm">
                        <div className="text-cupros-text-muted text-xs mb-1">{field}</div>
                        <div className="flex items-center justify-between">
                           <div className="font-medium text-cupros-text flex items-center">
                             {data.src} 
                             {data.badge && <Badge variant="outline" className={`ml-2 text-[10px] ${data.badgeColor}`}>{data.badge}</Badge>}
                           </div>
                           <div className="text-xs text-cupros-text-muted font-mono">{data.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
             </div>
          </td>
        </tr>
      )}
    </>
  );
}
