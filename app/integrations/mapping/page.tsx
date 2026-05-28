"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Settings2,
  Building2,
  Database,
  Link2,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const PARTNERS = ["Meadow", "Nabis", "Weedmaps", "Metrc"];

export default function DataMappingPage() {
  const [activePartner, setActivePartner] = useState("Meadow");

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-2xl font-bold tracking-tight text-cupros-text">Data Mapping</h2>
             <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
                 <Building2 className="w-3 h-3 mr-1" />
                 Org Level
             </Badge>
          </div>
          <p className="text-cupros-text-muted text-sm mt-1">Review interface for all active field and object mappings across integrations.</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-cupros-teal-light hover:bg-cupros-teal text-white text-sm rounded shadow-sm flex items-center transition-colors font-medium">
            <Settings2 className="w-4 h-4 mr-2" />
            Edit Mappings
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden shadow-sm">
        {/* Integration selector tabs */}
        <div className="border-b border-cupros-border bg-cupros-bg px-2 pt-2 flex space-x-1 shrink-0 overflow-x-auto scrollbar-none">
           {PARTNERS.map(partner => (
               <button 
                  key={partner}
                  onClick={() => setActivePartner(partner)}
                  className={cn(
                      "px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors flex items-center whitespace-nowrap",
                      activePartner === partner 
                          ? "bg-cupros-surface border-t border-l border-r border-cupros-border text-cupros-text" 
                          : "text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover/50"
                  )}
               >
                   <Link2 className={cn("w-4 h-4 mr-2", activePartner === partner ? "text-cupros-teal-light" : "opacity-50")} />
                   {partner}
               </button>
           ))}
        </div>

        {/* Mapping Table */}
        <div className="overflow-y-auto flex-1 bg-cupros-bg">
          <table className="w-full text-sm text-left border-collapse z-0">
            <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-[10px] tracking-wider sticky top-0 z-10 shadow-sm shadow-black/10">
              <tr>
                <th className="px-6 py-4 font-medium border-b border-cupros-border w-[40%]">Partner Object/Field</th>
                <th className="px-4 py-4 font-medium border-b border-cupros-border text-center w-[10%]">Direction</th>
                <th className="px-6 py-4 font-medium border-b border-cupros-border w-[35%]">CŪPR Object/Field</th>
                <th className="px-6 py-4 font-medium border-b border-cupros-border text-right w-[15%]">Last Mapped</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cupros-border text-sm">
              <MappingRow 
                  partnerField="product.title"
                  type="string"
                  cuprField="Catalog.Name"
                  sourceOfTruth="Partner"
                  lastMapped="10d ago"
              />
              <MappingRow 
                  partnerField="inventory.quantity_available"
                  type="int"
                  cuprField="Inventory.Quantity"
                  sourceOfTruth="CŪPR"
                  lastMapped="10d ago"
              />
              <MappingRow 
                  partnerField="price.sale_price"
                  type="float"
                  cuprField="Pricing.SalePrice"
                  sourceOfTruth="Partner"
                  lastMapped="10d ago"
                  conflict={true}
              />
              <MappingRow 
                  partnerField="category.name"
                  type="string"
                  cuprField="Catalog.Category"
                  sourceOfTruth="Partner"
                  lastMapped="10d ago"
              />
              <MappingRow 
                  partnerField="product.thc_mg"
                  type="float"
                  cuprField="Potency.THC"
                  sourceOfTruth="Partner"
                  lastMapped="10d ago"
              />
              <MappingRow 
                  partnerField="product.cbd_mg"
                  type="float"
                  cuprField="Potency.CBD"
                  sourceOfTruth="Partner"
                  lastMapped="10d ago"
              />
              <MappingRow 
                  partnerField="product.brand"
                  type="string"
                  cuprField="Catalog.Brand"
                  sourceOfTruth="CŪPR"
                  lastMapped="10d ago"
                  unmapped={true}
              />
              <MappingRow 
                  partnerField="product.image_url"
                  type="string"
                  cuprField="Catalog.ImageURL"
                  sourceOfTruth="CŪPR"
                  lastMapped="10d ago"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MappingRow({ partnerField, type, cuprField, sourceOfTruth, lastMapped, conflict, unmapped }: any) {
  return (
     <tr className={cn(
         "hover:bg-cupros-surface/50 transition-colors group",
         conflict ? "bg-rose-500/5 hover:bg-rose-500/10" : "",
         unmapped ? "bg-amber-500/5 hover:bg-amber-500/10" : ""
     )}>
        <td className="px-6 py-4">
           <div className="flex items-center">
              <Database className="w-3.5 h-3.5 text-cupros-text-muted mr-2" />
              <span className={cn("font-medium font-mono text-xs", conflict ? "text-rose-500" : unmapped ? "text-amber-500" : "text-cupros-text")}>
                 {partnerField}
              </span>
              <span className="ml-3 text-[10px] text-cupros-text-muted font-mono bg-cupros-surface px-1.5 py-0.5 rounded border border-cupros-border leading-none">
                 {type}
              </span>
           </div>
           {conflict && (
              <div className="text-xs text-rose-500 mt-1.5 flex items-center">
                 <AlertCircle className="w-3 h-3 mr-1 inline" /> Conflict detected with Canix mapping
              </div>
           )}
           {unmapped && (
              <div className="text-xs text-amber-500 mt-1.5 flex items-center">
                 <AlertCircle className="w-3 h-3 mr-1 inline" /> Pending field mapping
              </div>
           )}
        </td>
        <td className="px-4 py-4 text-center">
           <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-cupros-surface border border-cupros-border">
               <ArrowRight className={cn("w-4 h-4", sourceOfTruth === 'Partner' ? "text-cupros-teal-light" : "text-cupros-text-muted rotate-180")} />
           </div>
        </td>
        <td className="px-6 py-4">
           <div className="flex items-center justify-between">
               <div className="flex items-center">
                  <Database className="w-3.5 h-3.5 text-cupros-text-muted mr-2" />
                  <span className={cn(
                      "font-medium font-mono text-xs",
                      unmapped ? "text-cupros-text-muted italic opacity-50" : "text-cupros-text"
                  )}>
                     {unmapped ? "Unmapped" : cuprField}
                  </span>
               </div>
               
               {!unmapped && (
                   <Badge variant="outline" className={cn(
                      "text-[9px] uppercase tracking-wider ml-4 border-none font-medium text-cupros-text",
                      sourceOfTruth === 'Partner' ? "bg-cupros-bg" : "bg-cupros-surface border-cupros-border"
                   )}>
                      Truth: {sourceOfTruth}
                   </Badge>
               )}
           </div>
        </td>
        <td className="px-6 py-4 text-right">
           {conflict ? (
              <button className="px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold rounded shadow-sm transition-colors">
                 Resolve
              </button>
           ) : unmapped ? (
              <button className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded shadow-sm transition-colors">
                 Map Now
              </button>
           ) : (
              <span className="text-xs text-cupros-text-muted tabular-nums">{lastMapped}</span>
           )}
        </td>
     </tr>
  )
}
