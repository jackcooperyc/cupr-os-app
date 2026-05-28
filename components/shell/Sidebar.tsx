"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  MapPin, 
  Globe, 
  List, 
  MenuSquare, 
  ShoppingCart, 
  Users, 
  Target, 
  Sparkles, 
  Megaphone, 
  Printer, 
  Star, 
  BarChart3, 
  ShieldCheck, 
  Blocks, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Building2 },
  { label: "Locations", href: "/locations", icon: MapPin },
  { label: "Website", href: "/website", icon: Globe },
  { label: "Listings", href: "/listings", icon: List },
  { label: "Menu / Catalog", href: "/catalog", icon: MenuSquare },
  { label: "Orders", href: "/orders", icon: ShoppingCart },
  { label: "Customers", href: "/customers", icon: Users },
  { label: "Campaigns", href: "/campaigns", icon: Target },
  { label: "AI Studio", href: "/ai-studio", icon: Sparkles },
  { label: "Ads", href: "/ads", icon: Megaphone },
  { label: "Print", href: "/print", icon: Printer },
  { label: "Reviews", href: "/reviews", icon: Star },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Compliance", href: "/compliance", icon: ShieldCheck, alert: true },
  { label: "Integrations", href: "/integrations", icon: Blocks },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r border-cupros-border/50 bg-cupros-surface/50 hidden md:flex flex-col h-full shrink-0">
      <div className="py-6 flex items-center px-5 border-b border-cupros-border/50 min-h-[4rem]">
        {/* User can upload their logo to /public/Cupros.png via the file explorer */}
        <div className="relative h-20 w-full flex items-center">
          <img 
            src="/Cupros.png" 
            alt="CŪPROS" 
            className="max-h-full max-w-[120px] object-contain opacity-90 hover:opacity-100 transition-opacity"
            onError={(e) => {
              // Fallback to text if Cupros.png is not found
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
              }
            }}
          />
          <h1 className="font-semibold text-[15px] tracking-tight hidden">CŪPROS</h1>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-0.5">
        <div className="mb-3 px-3 text-[10px] font-semibold tracking-wider text-cupros-text-muted uppercase opacity-70">Modules</div>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-1.5 rounded-md text-[13px] font-medium transition-all group",
                isActive 
                  ? "bg-cupros-teal-bg text-cupros-teal-light" 
                  : "text-cupros-text-muted hover:text-cupros-text hover:bg-cupros-surface-hover/80"
              )}
            >
              <item.icon className={cn("w-[14px] h-[14px]", isActive ? "text-cupros-teal-light" : "text-cupros-text-muted group-hover:text-cupros-text transition-colors")} />
              <span className="flex-1 tracking-tight">{item.label}</span>
              {item.alert && (
                <span className="w-1.5 h-1.5 rounded-full bg-cupros-rose shadow-[0_0_8px_rgba(225,29,72,0.6)]"></span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-cupros-border/50">
        <div className="flex flex-col space-y-1 bg-cupros-surface border border-cupros-border/50 rounded-md p-2">
           <div className="flex items-center justify-between">
             <span className="text-[10px] font-semibold tracking-wider text-cupros-text-muted uppercase">Mode</span>
             <span className="w-1.5 h-1.5 rounded-full bg-cupros-green shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
           </div>
           <span className="text-[12px] font-medium text-cupros-text tracking-tight">Regulated</span>
        </div>
      </div>
    </aside>
  );
}
