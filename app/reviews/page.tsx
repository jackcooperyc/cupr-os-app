"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MessageSquare } from "lucide-react";

export default function ReviewsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center space-x-3 mb-1">
             <h2 className="text-2xl font-bold tracking-tight text-cupros-text">Reviews</h2>
          </div>
          <p className="text-cupros-text-muted text-sm mt-1">Aggregated reviews feed and reputation management.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        <div className="w-full lg:w-1/4 flex flex-col gap-4 shrink-0">
          <Card>
            <CardHeader className="pb-3 border-b border-cupros-border">
              <CardTitle className="text-sm">Network Sentiment</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex items-center space-x-2">
                 <Star className="w-8 h-8 fill-current text-cupros-teal-light border-none stroke-none" />
                 <span className="text-3xl font-semibold text-cupros-text">4.8</span>
              </div>
              <p className="text-xs text-cupros-text-muted">Average across 1,204 reviews</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 min-h-0 flex flex-col bg-cupros-surface rounded-xl border border-cupros-border overflow-hidden shadow-sm">
          <div className="overflow-y-auto flex-1 bg-cupros-bg">
            <div className="divide-y divide-cupros-border">
               <div className="p-6 hover:bg-cupros-surface-hover/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                     <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-[10px] uppercase">Google</Badge>
                        <span className="font-medium text-sm text-cupros-text">Hollywood Flagship</span>
                     </div>
                     <span className="text-xs text-cupros-text-muted">2 days ago</span>
                  </div>
                  <div className="flex text-amber-400 mb-2">
                     <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                  </div>
                  <p className="text-sm text-cupros-text-muted">&ldquo;Great selection and fast pickup process. Budtenders were very helpful.&rdquo;</p>
                  <div className="mt-4">
                     <button className="text-xs font-medium text-cupros-teal-light flex items-center hover:underline"><MessageSquare className="w-3 h-3 mr-1" /> Respond</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
