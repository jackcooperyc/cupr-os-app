"use client";

import React from "react";
import { Sparkles, Image as ImageIcon, FileText, Send, ThumbsUp, ThumbsDown, RotateCcw, CheckCircle2, AlertTriangle, FileCheck, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AIStudioPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center mb-1 space-x-3">
             <h2 className="text-2xl font-bold tracking-tight text-cupros-text">
               AI Studio
             </h2>
             <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
                 <ShieldCheck className="w-3 h-3 mr-1 text-cupros-teal-light" />
                 DCC Preflight Required
             </Badge>
          </div>
          <p className="text-cupros-text-muted text-sm mt-1">Generate compliant marketing copy, product descriptions, and web assets.</p>
        </div>
        <div className="flex space-x-2">
           <button className="px-4 py-2 border border-cupros-border bg-cupros-surface text-sm rounded shadow-sm hover:bg-cupros-surface-hover flex items-center transition-colors">
              <FileCheck className="w-4 h-4 mr-2" /> Compliance Center
           </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        
        {/* Left Col: Prompts & Controls */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-4 shrink-0 overflow-y-auto pr-2">
          <Card className="flex-shrink-0">
            <CardHeader className="pb-3 border-b border-cupros-border">
              <CardTitle className="text-sm flex justify-between items-center text-cupros-text">
                Context & Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div>
                <label className="text-xs font-medium text-cupros-text-muted uppercase">Channel Context</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-sm border border-cupros-border bg-cupros-bg rounded-md focus:outline-none focus:ring-1 focus:ring-cupros-teal-light text-cupros-text">
                  <option>Website Category Page</option>
                  <option>Email Campaign</option>
                  <option>Weedmaps Profile Details</option>
                  <option>Instagram Caption</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-cupros-text-muted uppercase">Brand Tone</label>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <Badge variant="outline" className="justify-center py-1.5 cursor-pointer hover:bg-cupros-surface-hover">Educational</Badge>
                  <Badge variant="default" className="justify-center py-1.5 cursor-pointer bg-cupros-teal-bg text-cupros-teal-light border-cupros-teal-light">Premium</Badge>
                  <Badge variant="outline" className="justify-center py-1.5 cursor-pointer hover:bg-cupros-surface-hover">Clinical</Badge>
                  <Badge variant="outline" className="justify-center py-1.5 cursor-pointer hover:bg-cupros-surface-hover">Lifestyle</Badge>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-cupros-text-muted uppercase">Jurisdiction Rules (CA)</label>
                <div className="mt-1 p-3 rounded-md bg-cupros-bg border border-cupros-border space-y-2 text-sm">
                   <div className="flex items-center text-cupros-text-muted">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-cupros-teal-light" />
                      Exclude all medical claims
                   </div>
                   <div className="flex items-center text-cupros-text-muted">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-cupros-teal-light" />
                      Append Prop 64 warning
                   </div>
                   <div className="flex items-center text-cupros-text-muted">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-cupros-teal-light" />
                      No cartoon/child-appealing themes
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 flex flex-col min-h-[150px]">
             <div className="p-4 flex-1 flex flex-col">
               <textarea 
                  className="w-full flex-1 bg-transparent border-none resize-none focus:outline-none text-sm placeholder:text-cupros-text-muted/50 text-cupros-text" 
                  placeholder="Describe what you want to generate... e.g. 'Write a product description for White Widow focusing on its premium lineage and uplifting effects.'"
               />
             </div>
             <div className="p-3 border-t border-cupros-border flex justify-between items-center bg-cupros-surface rounded-b-xl">
                <div className="flex space-x-2">
                  <button className="p-2 rounded hover:bg-cupros-bg text-cupros-text-muted hover:text-cupros-text transition-colors"><ImageIcon className="w-4 h-4" /></button>
                  <button className="p-2 rounded hover:bg-cupros-bg text-cupros-text-muted hover:text-cupros-text transition-colors"><FileText className="w-4 h-4" /></button>
                </div>
                <button className="px-4 py-2 bg-cupros-teal-light text-white rounded text-sm font-medium flex items-center hover:bg-cupros-teal transition-colors shadow-sm">
                  Generate <Sparkles className="w-3 h-3 ml-2" />
                </button>
             </div>
          </Card>
        </div>

        {/* Right Col: Output Canvas */}
        <div className="flex-1 flex flex-col min-h-0 bg-cupros-surface border border-cupros-border rounded-xl">
           <div className="p-4 border-b border-cupros-border flex justify-between items-center bg-transparent">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-cupros-text">Output: Website Category Page (Premium)</span>
                <Badge variant="success" className="bg-cupros-green/10 text-cupros-green border-none flex pr-3">
                   <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                   Compliance Passed
                </Badge>
              </div>
              <div className="text-xs text-cupros-text-muted font-mono tracking-wider">v1.0.4</div>
           </div>

           <div className="flex-1 p-8 md:p-12 overflow-y-auto font-serif text-lg leading-relaxed text-cupros-text/90 relative bg-cupros-bg m-4 rounded-xl border border-cupros-border/50">
              <div className="max-w-2xl mx-auto space-y-6">
                <h1 className="text-3xl font-sans font-bold tracking-tight text-white mb-6">Elevate Your Senses: The Premium Flower Collection</h1>
                <p>Discover a curated selection of the finest cannabis flower, cultivated by master growers who prioritize terpene profiles, trichome density, and immaculate curing processes. Our flower collection represents the pinnacle of modern cannabis horticulture.</p>
                
                <p>Whether you seek the cerebral uplift of carefully preserved sativas or the deep, restorative qualities of legacy indicas, every strain in our vault has been rigorously tested for purity and potency. We believe the difference is in the details—from seed to shelf.</p>
                
                <div className="my-8 p-6 bg-cupros-surface border-l-4 border-cupros-teal-light rounded-r-lg font-sans text-sm relative">
                   <Badge variant="outline" className="uppercase text-[10px] tracking-wider absolute -top-2 left-4 bg-cupros-surface font-mono">Auto-Appended</Badge>
                   <p className="font-semibold text-cupros-text mb-1 flex items-center">
                     <AlertTriangle className="w-4 h-4 mr-2 text-cupros-amber" />
                     Government Warning
                   </p>
                   <p className="text-cupros-text-muted text-xs leading-relaxed">THIS PACKAGE CONTAINS CANNABIS, A SCHEDULE I CONTROLLED SUBSTANCE. KEEP OUT OF REACH OF CHILDREN AND ANIMALS. CANNABIS MAY ONLY BE POSSESSED OR CONSUMED BY PERSONS 21 YEARS OF AGE OR OLDER UNLESS THE PERSON IS A QUALIFIED PATIENT.</p>
                </div>
              </div>
           </div>

           <div className="p-4 border-t border-cupros-border bg-cupros-surface rounded-b-xl flex justify-between items-center">
              <div className="flex space-x-2">
                 <button className="flex items-center space-x-1 px-3 py-1.5 rounded text-sm font-medium text-cupros-text-muted hover:bg-cupros-border hover:text-white transition-colors">
                   <ThumbsUp className="w-4 h-4" /> <span>Helpful</span>
                 </button>
                 <button className="flex items-center space-x-1 px-3 py-1.5 rounded text-sm font-medium text-cupros-text-muted hover:bg-cupros-border hover:text-white transition-colors">
                   <ThumbsDown className="w-4 h-4" /> 
                 </button>
              </div>
              <div className="flex space-x-3">
                 <button className="flex items-center space-x-1 px-4 py-2 rounded-md border border-cupros-border bg-cupros-surface text-sm font-medium hover:bg-cupros-border transition-colors">
                   <RotateCcw className="w-4 h-4 mr-2" /> Revise
                 </button>
                 <button className="px-4 py-2 rounded-md bg-cupros-text text-cupros-bg text-sm font-medium hover:bg-white transition-colors flex items-center">
                   <CheckCircle2 className="w-4 h-4 mr-2" /> Approve & Push
                 </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
