"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, CheckCircle2, AlertCircle, RefreshCw, XCircle, Sparkles, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { IntegrationDrawer } from "./IntegrationDrawer";
import { IntegrationConnectStepper } from "./IntegrationConnectStepper";

const CATEGORIES = [
  "All",
  "Retail Operations",
  "Wholesale & Supply",
  "ERP & Manufacturing",
  "Delivery & Fulfillment",
  "Listings & Discovery",
  "Marketing & Messaging",
  "Compliance & Reporting"
];

const INTEGRATIONS = [
  {
    name: "Meadow",
    category: "Retail Operations",
    value: "Core Retail Sync",
    status: "Connected",
    lastSync: "2m ago",
    powers: "Menu, Orders, Compliance, Analytics"
  },
  {
    name: "Nabis",
    category: "Wholesale & Supply",
    value: "Wholesale Supply Network",
    status: "Connected",
    lastSync: "15m ago",
    powers: "Catalog, Reordering, Analytics"
  },
  {
    name: "Canix",
    category: "ERP & Manufacturing",
    value: "Production & ERP Data",
    status: "Available",
    powers: "Catalog, Compliance, Analytics"
  },
  {
    name: "Flower Co.",
    category: "Delivery & Fulfillment",
    value: "Delivery Channel Partner",
    status: "Available",
    powers: "Orders, Delivery, Analytics"
  },
  {
    name: "Weedmaps",
    category: "Listings & Discovery",
    value: "Menu & Discovery Sync",
    status: "Connected",
    lastSync: "5m ago",
    powers: "Listings, Menu, Reviews"
  },
  {
    name: "Leafly",
    category: "Listings & Discovery",
    value: "Cannabis Discovery Network",
    status: "Needs Attention",
    powers: "Listings, Menu"
  },
  {
    name: "Metrc",
    category: "Compliance & Reporting",
    value: "State Track & Trace",
    status: "Connected",
    lastSync: "1m ago",
    powers: "Compliance, Orders"
  },
  {
    name: "Klaviyo",
    category: "Marketing & Messaging",
    value: "Email & SMS Automation",
    status: "Available",
    powers: "Campaigns, Customers"
  }
];

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIntegration, setSelectedIntegration] = useState<any | null>(null);
  const [selectedConnectIntegration, setSelectedConnectIntegration] = useState<any | null>(null);

  const filteredIntegrations = INTEGRATIONS.filter(
    (integration) => activeCategory === "All" || integration.category === activeCategory
  );

  const handleActionClick = (integration: any) => {
    if (integration.status === "Available") {
      setSelectedConnectIntegration(integration);
    } else {
      setSelectedIntegration(integration);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)] relative">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-2xl font-bold tracking-tight text-cupros-text">Integrations</h2>
             <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
                 <Building2 className="w-3 h-3 mr-1" />
                 Green Coast Collectives
             </Badge>
          </div>
          <div className="flex items-center mt-2 space-x-4">
             <div className="flex items-center space-x-2">
                 <Badge variant="outline" className="bg-cupros-surface border-cupros-border text-cupros-text-muted">
                    <span className="w-2 h-2 rounded-full bg-cupros-green mr-1.5"></span>
                    4 Connected
                 </Badge>
                 <Badge variant="outline" className="bg-cupros-surface border-cupros-border text-cupros-text-muted">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span>
                    1 Needs Attention
                 </Badge>
             </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-cupros-border bg-cupros-surface text-sm rounded shadow-sm hover:bg-cupros-surface-hover flex items-center transition-colors font-medium">
            Browse All Integrations
          </button>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="shrink-0 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-colors border",
                activeCategory === category
                  ? "bg-cupros-text text-cupros-bg border-transparent"
                  : "bg-cupros-surface border-cupros-border text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
          {filteredIntegrations.map((integration, index) => (
            <IntegrationCard key={index} data={integration} onAction={() => handleActionClick(integration)} />
          ))}
        </div>
      </div>

      <IntegrationDrawer 
        integration={selectedIntegration} 
        onClose={() => setSelectedIntegration(null)} 
      />

      <IntegrationConnectStepper
        integration={selectedConnectIntegration}
        onClose={() => setSelectedConnectIntegration(null)}
      />
    </div>
  );
}

function IntegrationCard({ data, onAction }: { data: any, onAction?: () => void }) {
  const getBadge = (status: string) => {
    switch (status) {
      case "Connected":
        return <Badge variant="success" className="bg-cupros-green/10 text-cupros-green border-none whitespace-nowrap"><CheckCircle2 className="w-3 h-3 mr-1" /> Connected</Badge>;
      case "Needs Attention":
        return <Badge variant="warning" className="bg-amber-500/10 text-amber-500 border-none whitespace-nowrap"><AlertCircle className="w-3 h-3 mr-1" /> Needs Attention</Badge>;
      case "Available":
        return <Badge variant="outline" className="text-cupros-text-muted bg-cupros-surface border-cupros-border whitespace-nowrap">Available</Badge>;
      case "Error":
        return <Badge variant="destructive" className="bg-rose-500/10 text-rose-500 border-none whitespace-nowrap"><XCircle className="w-3 h-3 mr-1" /> Error</Badge>;
      case "Beta":
         return <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 whitespace-nowrap"><Sparkles className="w-3 h-3 mr-1" /> Beta</Badge>;
      default:
        return null;
    }
  };

  const getInitials = (name: string) => name.substring(0, 2).toUpperCase();

  return (
    <Card className="flex flex-col hover:border-cupros-teal-light/50 transition-colors group cursor-pointer bg-cupros-surface border-cupros-border shadow-sm h-full overflow-hidden">
      <CardHeader className="flex flex-row flex-nowrap items-start justify-between pb-4 gap-4">
        <div className="flex items-start space-x-3 shrink min-w-0">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 rounded-md bg-cupros-teal-light/10 border border-cupros-teal-light/20 flex items-center justify-center shrink-0">
            <span className="text-sm font-bold text-cupros-teal-light tracking-wider">
              {getInitials(data.name)}
            </span>
          </div>
          <div className="min-w-0">
             <CardTitle className="text-base font-semibold text-cupros-text truncate group-hover:text-cupros-teal-light transition-colors">
               {data.name}
             </CardTitle>
             <p className="text-xs text-cupros-text-muted truncate mt-0.5">{data.category}</p>
          </div>
        </div>
        <div className="shrink-0">{getBadge(data.status)}</div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col min-h-0 pb-4">
        <div className="space-y-4 flex-1">
            <p className="text-sm text-cupros-text line-clamp-2">
              {data.value}
            </p>
            
            <div className="bg-cupros-bg rounded p-3 border border-cupros-border/50">
               <p className="text-xs text-cupros-text-muted mb-1">Powers</p>
               <p className="text-sm font-medium text-cupros-text">{data.powers}</p>
            </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-5 flex items-center justify-between border-t border-cupros-border/50 bg-cupros-surface/50 px-6 py-4 mt-auto">
        <div className="flex-1 min-w-0">
            {data.status === "Connected" && data.lastSync ? (
                <div className="text-[10px] text-cupros-text-muted flex items-center truncate">
                    <RefreshCw className="w-3 h-3 mr-1 shrink-0" />
                    <span className="truncate">Last sync: {data.lastSync}</span>
                </div>
            ) : (
                <div className="h-4"></div> /* spacer */
            )}
        </div>
        <div className="shrink-0 ml-4">
            {data.status === "Available" ? (
                <button 
                  onClick={(e) => { e.stopPropagation(); onAction?.(); }}
                  className="px-3 py-1.5 border border-cupros-border text-cupros-text-muted hover:text-cupros-text hover:border-cupros-text rounded text-xs font-medium transition-colors bg-transparent"
                >
                  Connect
                </button>
            ) : (
                <button 
                  onClick={(e) => { e.stopPropagation(); onAction?.(); }}
                  className="px-3 py-1.5 bg-cupros-teal-light text-white rounded text-xs font-medium hover:bg-cupros-teal transition-colors shadow-sm"
                >
                  Manage
                </button>
            )}
        </div>
      </CardFooter>
    </Card>
  );
}
