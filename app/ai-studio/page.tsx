"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Image as ImageIcon, FileText, ThumbsUp, ThumbsDown, RotateCcw, CheckCircle2, AlertTriangle, FileCheck, ShieldCheck, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";

const CHANNELS = [
  "Website Category Page",
  "Email Campaign",
  "Weedmaps Profile Details",
  "Instagram Caption",
];

const TONES = ["Educational", "Premium", "Clinical", "Lifestyle"];

const DEMO_OUTPUT = `Elevate Your Senses: The Premium Flower Collection

Discover a curated selection of the finest cannabis flower, cultivated by master growers who prioritize terpene profiles, trichome density, and immaculate curing processes.

---

GOVERNMENT WARNING: THIS PACKAGE CONTAINS CANNABIS, A SCHEDULE I CONTROLLED SUBSTANCE. KEEP OUT OF REACH OF CHILDREN AND ANIMALS. CANNABIS MAY ONLY BE POSSESSED OR CONSUMED BY PERSONS 21 YEARS OF AGE OR OLDER UNLESS THE PERSON IS A QUALIFIED PATIENT.`;

export default function AIStudioPage() {
  const [channel, setChannel] = useState(CHANNELS[0]);
  const [tone, setTone] = useState("Premium");
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState(DEMO_OUTPUT);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<"demo" | "gemini">("demo");

  async function handleGenerate() {
    if (!prompt.trim()) {
      setError("Enter a prompt to generate copy.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai-studio/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, channel, tone }),
      });

      const json = (await res.json()) as {
        text?: string;
        source?: "demo" | "gemini";
        message?: string;
      };

      if (!res.ok) {
        throw new Error(json.message ?? "Generation failed.");
      }

      setOutput(json.text ?? DEMO_OUTPUT);
      setSource(json.source === "gemini" ? "gemini" : "demo");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 flex flex-col h-[calc(100vh-6rem)]">
      <PageHeader
        size="large"
        title="AI Studio"
        description="Generate compliant marketing copy, product descriptions, and web assets."
        badges={
          <Badge variant="outline" className="text-[10px] bg-cupros-surface border-cupros-border text-cupros-text-muted tracking-wide flex items-center">
            <ShieldCheck className="w-3 h-3 mr-1 text-cupros-teal-light" />
            DCC Preflight Required
          </Badge>
        }
        actions={
          <Link href="/compliance" className="secondary-button flex items-center">
            <FileCheck className="w-4 h-4 mr-2" /> Compliance Center
          </Link>
        }
      />

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        <div className="w-full lg:w-1/3 flex flex-col space-y-4 shrink-0 overflow-y-auto pr-2">
          <Card className="flex-shrink-0">
            <CardHeader className="pb-3 border-b border-cupros-border">
              <CardTitle className="text-sm flex justify-between items-center text-cupros-text">
                Context & Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div>
                <label htmlFor="channel" className="text-xs font-medium text-cupros-text-muted uppercase">Channel Context</label>
                <select
                  id="channel"
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-sm border border-cupros-border bg-cupros-bg rounded-md focus:outline-none focus:ring-1 focus:ring-cupros-teal-light text-cupros-text"
                >
                  {CHANNELS.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <span className="text-xs font-medium text-cupros-text-muted uppercase">Brand Tone</span>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  {TONES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTone(t)}
                      className={
                        tone === t
                          ? "justify-center py-1.5 rounded-md text-xs font-medium bg-cupros-teal-bg text-cupros-teal-light border border-cupros-teal-light"
                          : "justify-center py-1.5 rounded-md text-xs font-medium border border-cupros-border text-cupros-text-muted hover:bg-cupros-surface-hover"
                      }
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-medium text-cupros-text-muted uppercase">Jurisdiction Rules (CA)</span>
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
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full flex-1 bg-transparent border-none resize-none focus:outline-none text-sm placeholder:text-cupros-text-muted/50 text-cupros-text min-h-[120px]"
                  placeholder="Describe what you want to generate... e.g. 'Write a product description for White Widow focusing on its premium lineage and uplifting effects.'"
               />
               {error && <p className="text-xs text-rose-400 mt-2">{error}</p>}
             </div>
             <div className="p-3 border-t border-cupros-border flex justify-between items-center bg-cupros-surface rounded-b-xl">
                <div className="flex space-x-2">
                  <button type="button" className="p-2 rounded hover:bg-cupros-bg text-cupros-text-muted hover:text-cupros-text transition-colors"><ImageIcon className="w-4 h-4" /></button>
                  <button type="button" className="p-2 rounded hover:bg-cupros-bg text-cupros-text-muted hover:text-cupros-text transition-colors"><FileText className="w-4 h-4" /></button>
                </div>
                <button
                  type="button"
                  onClick={() => void handleGenerate()}
                  disabled={loading}
                  className="px-4 py-2 bg-cupros-teal-light text-white rounded text-sm font-medium flex items-center hover:bg-cupros-teal transition-colors shadow-sm disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-3 h-3 mr-2 animate-spin" /> Generating
                    </>
                  ) : (
                    <>
                      Generate <Sparkles className="w-3 h-3 ml-2" />
                    </>
                  )}
                </button>
             </div>
          </Card>
        </div>

        <div className="flex-1 flex flex-col min-h-0 bg-cupros-surface border border-cupros-border rounded-xl">
           <div className="p-4 border-b border-cupros-border flex justify-between items-center bg-transparent flex-wrap gap-2">
              <div className="flex items-center space-x-3 flex-wrap">
                <span className="text-sm font-semibold text-cupros-text">Output: {channel} ({tone})</span>
                <Badge variant="success" className="bg-cupros-green/10 text-cupros-green border-none flex pr-3">
                   <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                   Compliance Passed
                </Badge>
                {source === "demo" && (
                  <Badge variant="outline" className="text-[10px]">Demo mode</Badge>
                )}
              </div>
              <div className="text-xs text-cupros-text-muted font-mono tracking-wider">v1.0.4</div>
           </div>

           <div className="flex-1 p-8 md:p-12 overflow-y-auto font-serif text-lg leading-relaxed text-cupros-text/90 relative bg-cupros-bg m-4 rounded-xl border border-cupros-border/50">
              <div className="max-w-2xl mx-auto space-y-6 whitespace-pre-wrap">
                {output.split("\n\n").map((block, i) => {
                  if (block.startsWith("GOVERNMENT WARNING")) {
                    return (
                      <div key={i} className="my-8 p-6 bg-cupros-surface border-l-4 border-cupros-teal-light rounded-r-lg font-sans text-sm relative">
                        <Badge variant="outline" className="uppercase text-[10px] tracking-wider absolute -top-2 left-4 bg-cupros-surface font-mono">Auto-Appended</Badge>
                        <p className="font-semibold text-cupros-text mb-1 flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2 text-cupros-amber" />
                          Government Warning
                        </p>
                        <p className="text-cupros-text-muted text-xs leading-relaxed">{block}</p>
                      </div>
                    );
                  }
                  if (block.includes(":") && block.length < 80 && i === 0) {
                    return <h1 key={i} className="text-3xl font-sans font-bold tracking-tight text-cupros-text mb-6">{block}</h1>;
                  }
                  return <p key={i}>{block}</p>;
                })}
              </div>
           </div>

           <div className="p-4 border-t border-cupros-border bg-cupros-surface rounded-b-xl flex justify-between items-center flex-wrap gap-3">
              <div className="flex space-x-2">
                 <button type="button" className="flex items-center space-x-1 px-3 py-1.5 rounded text-sm font-medium text-cupros-text-muted hover:bg-cupros-border hover:text-cupros-text transition-colors">
                   <ThumbsUp className="w-4 h-4" /> <span>Helpful</span>
                 </button>
                 <button type="button" className="flex items-center space-x-1 px-3 py-1.5 rounded text-sm font-medium text-cupros-text-muted hover:bg-cupros-border hover:text-cupros-text transition-colors">
                   <ThumbsDown className="w-4 h-4" />
                 </button>
              </div>
              <div className="flex space-x-3">
                 <button type="button" className="flex items-center space-x-1 px-4 py-2 rounded-md border border-cupros-border bg-cupros-surface text-sm font-medium hover:bg-cupros-border transition-colors">
                   <RotateCcw className="w-4 h-4 mr-2" /> Revise
                 </button>
                 <button type="button" className="px-4 py-2 rounded-md bg-cupros-text text-cupros-bg text-sm font-medium hover:opacity-90 transition-opacity flex items-center">
                   <CheckCircle2 className="w-4 h-4 mr-2" /> Approve & Push
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
