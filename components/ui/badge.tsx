import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "destructive" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-cupros-surface border border-cupros-border text-cupros-text-muted hover:text-cupros-text",
    success: "bg-cupros-green-bg text-cupros-green border border-cupros-green-bg",
    warning: "bg-cupros-amber-bg text-cupros-amber border border-cupros-amber-bg",
    destructive: "bg-cupros-rose-bg text-cupros-rose border border-cupros-rose-bg",
    outline: "border border-cupros-border text-cupros-text-muted hover:text-cupros-text",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded pl-2 pr-2 py-0.5 text-[11px] font-medium transition-colors tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
