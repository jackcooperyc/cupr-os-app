import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
    X, CheckCircle2, AlertCircle, RefreshCw, XCircle, Sparkles, Building2, 
    ArrowRightLeft, Link2, Check, ArrowDown, ArrowUp, Activity, Settings2, FileText, Database, ShieldAlert
} from "lucide-react";
import { cn } from "@/lib/utils";

export function IntegrationDrawer({ integration, onClose }: { integration: any, onClose: () => void }) {
    const [activeTab, setActiveTab] = useState("Overview");
    const [showConfirmDisconnect, setShowConfirmDisconnect] = useState(false);

    if (!integration) return null;

    const getBadge = (status: string) => {
        switch (status) {
            case "Connected":
                return <Badge variant="success" className="bg-cupros-green/10 text-cupros-green border-none"><CheckCircle2 className="w-3 h-3 mr-1" /> Connected</Badge>;
            case "Needs Attention":
                return <Badge variant="warning" className="bg-amber-500/10 text-amber-500 border-none"><AlertCircle className="w-3 h-3 mr-1" /> Needs Attention</Badge>;
            case "Available":
                return <Badge variant="outline" className="text-cupros-text-muted bg-cupros-surface border-cupros-border">Available</Badge>;
            case "Error":
                return <Badge variant="destructive" className="bg-rose-500/10 text-rose-500 border-none"><XCircle className="w-3 h-3 mr-1" /> Error</Badge>;
            case "Beta":
                return <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10"><Sparkles className="w-3 h-3 mr-1" /> Beta</Badge>;
            default:
                return null;
        }
    };

    const getInitials = (name: string) => name.substring(0, 2).toUpperCase();

    const renderTabContent = () => {
        switch (activeTab) {
            case "Overview":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div>
                            <h3 className="text-sm font-medium text-cupros-text mb-2">About this integration</h3>
                            <p className="text-sm text-cupros-text-muted leading-relaxed">
                                Meadow provides a complete compliance and POS solution for dispensaries. 
                                By connecting Meadow with CŪPROS, you can synchronize your menu, orders, and 
                                state compliance reporting automatically, avoiding manual double-entry.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-cupros-text mb-3">Connected Modules</h3>
                            <div className="flex flex-wrap gap-2">
                                {integration.powers.split(",").map((power: string, i: number) => (
                                    <Badge key={i} variant="outline" className="bg-cupros-bg border-cupros-border text-cupros-text text-sm py-1 px-3">
                                        {power.trim()}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case "Status":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-cupros-bg p-4 rounded-lg border border-cupros-border space-y-2">
                                <div className="text-xs text-cupros-text-muted uppercase tracking-wider font-medium">Auth Health</div>
                                <div className="flex items-center text-sm font-medium text-cupros-green">
                                    <CheckCircle2 className="w-4 h-4 mr-2" /> Authenticated
                                </div>
                            </div>
                            <div className="bg-cupros-bg p-4 rounded-lg border border-cupros-border space-y-2">
                                <div className="text-xs text-cupros-text-muted uppercase tracking-wider font-medium">Recent Errors</div>
                                <div className="flex items-center text-sm font-medium text-cupros-text">
                                    <ShieldAlert className="w-4 h-4 mr-2 text-cupros-text-muted" /> 0 failures (24h)
                                </div>
                            </div>
                        </div>

                        <div className="bg-cupros-bg rounded-lg border border-cupros-border overflow-hidden">
                            <div className="p-4 border-b border-cupros-border">
                                <h3 className="text-sm font-medium text-cupros-text">Sync Health</h3>
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-cupros-text-muted">Last Sync</span>
                                    <span className="font-medium text-cupros-text">{integration.lastSync || "N/A"}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-cupros-text-muted">Next Sync</span>
                                    <span className="font-medium text-cupros-text">in 3 minutes</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-cupros-text-muted">Frequency</span>
                                    <span className="font-medium text-cupros-text">Every 5 minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "Data Flows":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="grid grid-cols-2 gap-6 relative">
                            {/* Connector line behind */}
                            <div className="absolute inset-y-0 left-1/2 w-px bg-cupros-border -translate-x-1/2 z-0 hidden md:block" />

                            <div className="space-y-3 relative z-10">
                                <h3 className="text-sm font-medium text-cupros-text flex items-center mb-4">
                                    <ArrowDown className="w-4 h-4 mr-2 text-cupros-teal-light" /> Incoming Data
                                </h3>
                                <div className="bg-cupros-bg p-3 rounded-lg border border-cupros-border flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Database className="w-4 h-4 text-cupros-text-muted" />
                                        <span className="text-sm font-medium text-cupros-text">Inventory</span>
                                    </div>
                                    <span className="text-xs text-cupros-text-muted bg-cupros-surface px-2 py-1 rounded">Every 5 min</span>
                                </div>
                                <div className="bg-cupros-bg p-3 rounded-lg border border-cupros-border flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Database className="w-4 h-4 text-cupros-text-muted" />
                                        <span className="text-sm font-medium text-cupros-text">Pricing</span>
                                    </div>
                                    <span className="text-xs text-cupros-text-muted bg-cupros-surface px-2 py-1 rounded">On Change</span>
                                </div>
                            </div>

                            <div className="space-y-3 relative z-10">
                                <h3 className="text-sm font-medium text-cupros-text flex items-center mb-4">
                                    <ArrowUp className="w-4 h-4 mr-2 text-amber-500" /> Outgoing Data
                                </h3>
                                <div className="bg-cupros-bg p-3 rounded-lg border border-cupros-border flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Database className="w-4 h-4 text-cupros-text-muted" />
                                        <span className="text-sm font-medium text-cupros-text">Purchase Limits</span>
                                    </div>
                                    <span className="text-xs text-cupros-text-muted bg-cupros-surface px-2 py-1 rounded">On Change</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "Source of Truth":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {/* Conflict Resolution Banner */}
                        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 p-4 rounded-lg flex items-start space-x-3">
                            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold mb-1">Data Conflict Detected</h4>
                                <p className="text-xs text-rose-500/80 mb-2">Two sources are attempting to update <strong>Pricing</strong> simultaneously. Please resolve to avoid downstream menu drift.</p>
                                <button className="text-xs font-semibold px-3 py-1.5 bg-rose-500 text-white rounded hover:bg-rose-600 transition-colors shadow-sm">Resolve Conflict</button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-base font-semibold text-cupros-text mb-1">Data Governance &mdash; Who owns each field?</h3>
                            <p className="text-sm text-cupros-text-muted mb-4">Define which system owns each domain. Fields will inherit these rules unless overridden.</p>
                            
                            <div className="bg-cupros-bg border border-cupros-border rounded-lg overflow-hidden">
                                <table className="w-full text-sm text-left border-collapse">
                                    <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-[10px] tracking-wider">
                                        <tr>
                                            <th className="px-4 py-3 font-medium border-b border-cupros-border">Data Domain</th>
                                            <th className="px-4 py-3 font-medium border-b border-cupros-border">Status</th>
                                            <th className="px-4 py-3 font-medium border-b border-cupros-border text-center">Ownership Control</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-cupros-border text-sm">
                                        <tr className="hover:bg-cupros-surface/50 transition-colors">
                                            <td className="px-4 py-3 font-medium text-cupros-text">Inventory</td>
                                            <td className="px-4 py-3">
                                                <Badge variant="success" className="bg-cupros-teal-light/10 text-cupros-teal-light border-none font-medium text-[10px]">Synced</Badge>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex bg-cupros-surface border border-cupros-border rounded p-0.5 text-xs w-max mx-auto">
                                                    <button className="px-3 py-1 rounded bg-cupros-bg shadow-sm font-medium text-cupros-text">Partner</button>
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">CŪPR</button>
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Manual</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-cupros-surface/50 transition-colors bg-rose-500/5">
                                            <td className="px-4 py-3 font-medium text-cupros-text">Pricing</td>
                                            <td className="px-4 py-3">
                                                <Badge variant="destructive" className="bg-rose-500/10 text-rose-500 border-none font-medium text-[10px]">Conflict</Badge>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex bg-cupros-surface border border-cupros-border rounded p-0.5 text-xs w-max mx-auto">
                                                    <button className="px-3 py-1 rounded bg-cupros-bg shadow-sm font-medium text-cupros-text text-rose-500">Partner</button>
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors text-rose-500">CŪPR</button>
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Manual</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-cupros-surface/50 transition-colors">
                                            <td className="px-4 py-3 font-medium text-cupros-text">Product Copy</td>
                                            <td className="px-4 py-3">
                                                <Badge variant="outline" className="text-cupros-text-muted font-medium text-[10px]">Inherited</Badge>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex bg-cupros-surface border border-cupros-border rounded p-0.5 text-xs w-max mx-auto">
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Partner</button>
                                                    <button className="px-3 py-1 rounded bg-cupros-bg shadow-sm font-medium text-cupros-text">CŪPR</button>
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Manual</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-cupros-surface/50 transition-colors">
                                            <td className="px-4 py-3 font-medium text-cupros-text">Compliance Labels</td>
                                            <td className="px-4 py-3">
                                                <Badge variant="success" className="bg-cupros-teal-light/10 text-cupros-teal-light border-none font-medium text-[10px]">Synced</Badge>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex bg-cupros-surface border border-cupros-border rounded p-0.5 text-xs w-max mx-auto">
                                                    <button className="px-3 py-1 rounded bg-cupros-bg shadow-sm font-medium text-cupros-text">Partner</button>
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">CŪPR</button>
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Manual</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-cupros-surface/50 transition-colors">
                                            <td className="px-4 py-3 font-medium text-cupros-text">Delivery Coverage</td>
                                            <td className="px-4 py-3">
                                                <Badge variant="warning" className="bg-amber-500/10 text-amber-500 border-none font-medium text-[10px]">Manual Override</Badge>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex bg-cupros-surface border border-cupros-border rounded p-0.5 text-xs w-max mx-auto">
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Partner</button>
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">CŪPR</button>
                                                    <button className="px-3 py-1 rounded bg-cupros-bg shadow-sm font-medium text-cupros-text">Manual</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-cupros-surface/50 transition-colors">
                                            <td className="px-4 py-3 font-medium text-cupros-text">Menu Content</td>
                                            <td className="px-4 py-3">
                                                <Badge variant="outline" className="text-cupros-text-muted font-medium text-[10px]">Inherited</Badge>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex bg-cupros-surface border border-cupros-border rounded p-0.5 text-xs w-max mx-auto">
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Partner</button>
                                                    <button className="px-3 py-1 rounded bg-cupros-bg shadow-sm font-medium text-cupros-text">CŪPR</button>
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Manual</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-cupros-surface/50 transition-colors">
                                            <td className="px-4 py-3 font-medium text-cupros-text">Customer Records</td>
                                            <td className="px-4 py-3">
                                                <Badge variant="success" className="bg-cupros-teal-light/10 text-cupros-teal-light border-none font-medium text-[10px]">Synced</Badge>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex bg-cupros-surface border border-cupros-border rounded p-0.5 text-xs w-max mx-auto">
                                                    <button className="px-3 py-1 rounded bg-cupros-bg shadow-sm font-medium text-cupros-text">Partner</button>
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">CŪPR</button>
                                                    <button className="px-3 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Manual</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            case "Mapping":
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-sm font-medium text-cupros-text">Field Mapping Rules</h3>
                                <p className="text-xs text-cupros-text-muted mt-1">Showing 3 of 42 mapped fields. Navigate to data mapping to view all.</p>
                            </div>
                            <button 
                                onClick={() => window.location.href = '/integrations/mapping'}
                                className="px-3 py-1.5 bg-cupros-surface border border-cupros-border text-cupros-text text-xs rounded hover:bg-cupros-surface-hover font-medium flex items-center transition-colors shadow-sm"
                            >
                                <Settings2 className="w-3.5 h-3.5 mr-1" /> Full Mapping View
                            </button>
                        </div>
                        <div className="bg-cupros-bg border border-cupros-border rounded-lg overflow-hidden">
                            <table className="w-full text-sm text-left border-collapse">
                                <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-[10px] tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3 font-medium border-b border-cupros-border">Partner Field</th>
                                        <th className="px-4 py-3 font-medium border-b border-cupros-border text-center">Data Type</th>
                                        <th className="px-4 py-3 font-medium border-b border-cupros-border">CŪPROS Field</th>
                                        <th className="px-4 py-3 font-medium border-b border-cupros-border">Source of Truth</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-cupros-border text-sm">
                                    <tr className="hover:bg-cupros-surface/50 transition-colors">
                                        <td className="px-4 py-3 font-medium text-cupros-text">product_name</td>
                                        <td className="px-4 py-3 text-center text-xs text-cupros-text-muted font-mono">string</td>
                                        <td className="px-4 py-3 text-cupros-text">Catalog.Name</td>
                                        <td className="px-4 py-3">
                                            <div className="flex bg-cupros-surface border border-cupros-border rounded p-0.5 text-xs w-max">
                                                <button className="px-2 py-1 rounded bg-cupros-bg shadow-sm font-medium text-cupros-text">Partner</button>
                                                <button className="px-2 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">CŪPR</button>
                                                <button className="px-2 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Manual</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-cupros-surface/50 transition-colors">
                                        <td className="px-4 py-3 font-medium text-cupros-text">thc_mg</td>
                                        <td className="px-4 py-3 text-center text-xs text-cupros-text-muted font-mono">float</td>
                                        <td className="px-4 py-3 text-cupros-text">Potency.THC</td>
                                        <td className="px-4 py-3">
                                            <div className="flex bg-cupros-surface border border-cupros-border rounded p-0.5 text-xs w-max">
                                                <button className="px-2 py-1 rounded bg-cupros-bg shadow-sm font-medium text-cupros-text">Partner</button>
                                                <button className="px-2 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">CŪPR</button>
                                                <button className="px-2 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Manual</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-cupros-surface/50 transition-colors">
                                        <td className="px-4 py-3 font-medium text-cupros-text">stock_qty</td>
                                        <td className="px-4 py-3 text-center text-xs text-cupros-text-muted font-mono">int</td>
                                        <td className="px-4 py-3 text-cupros-text">Inventory.Quantity</td>
                                        <td className="px-4 py-3">
                                            <div className="flex bg-cupros-surface border border-cupros-border rounded p-0.5 text-xs w-max">
                                                <button className="px-2 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Partner</button>
                                                <button className="px-2 py-1 rounded bg-cupros-bg shadow-sm font-medium text-cupros-text">CŪPR</button>
                                                <button className="px-2 py-1 rounded text-cupros-text-muted hover:text-cupros-text transition-colors">Manual</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case "Activity Log":
                return (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex space-x-2">
                            <button className="px-3 py-1.5 rounded-full bg-cupros-text text-cupros-bg text-xs font-medium">All</button>
                            <button className="px-3 py-1.5 rounded-full border border-cupros-border bg-cupros-surface text-cupros-text-muted text-xs font-medium hover:text-cupros-text hover:bg-cupros-surface-hover">Errors</button>
                            <button className="px-3 py-1.5 rounded-full border border-cupros-border bg-cupros-surface text-cupros-text-muted text-xs font-medium hover:text-cupros-text hover:bg-cupros-surface-hover">Warnings</button>
                            <button className="px-3 py-1.5 rounded-full border border-cupros-border bg-cupros-surface text-cupros-text-muted text-xs font-medium hover:text-cupros-text hover:bg-cupros-surface-hover">Successful</button>
                        </div>
                        <div className="bg-cupros-bg border border-cupros-border rounded-lg overflow-hidden">
                            <table className="w-full text-sm text-left border-collapse">
                                <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-[10px] tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3 font-medium border-b border-cupros-border">Timestamp</th>
                                        <th className="px-4 py-3 font-medium border-b border-cupros-border">Job Type</th>
                                        <th className="px-4 py-3 font-medium border-b border-cupros-border">Status</th>
                                        <th className="px-4 py-3 font-medium border-b border-cupros-border">Synced</th>
                                        <th className="px-4 py-3 font-medium border-b border-cupros-border">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-cupros-border text-xs">
                                    <tr className="hover:bg-cupros-surface/50 transition-colors">
                                        <td className="px-4 py-3 text-cupros-text-muted whitespace-nowrap">Today 8:05 AM</td>
                                        <td className="px-4 py-3 font-medium text-cupros-text">Inventory Sync</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-cupros-green"><CheckCircle2 className="w-3 h-3 mr-1" /> Success</div>
                                        </td>
                                        <td className="px-4 py-3 text-cupros-text tabular-nums">422</td>
                                        <td className="px-4 py-3 text-cupros-text-muted">Batch completed normally.</td>
                                    </tr>
                                    <tr className="hover:bg-cupros-surface/50 transition-colors">
                                        <td className="px-4 py-3 text-cupros-text-muted whitespace-nowrap">Today 8:00 AM</td>
                                        <td className="px-4 py-3 font-medium text-cupros-text">Inventory Sync</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-cupros-green"><CheckCircle2 className="w-3 h-3 mr-1" /> Success</div>
                                        </td>
                                        <td className="px-4 py-3 text-cupros-text tabular-nums">422</td>
                                        <td className="px-4 py-3 text-cupros-text-muted">Batch completed normally.</td>
                                    </tr>
                                    <tr className="hover:bg-cupros-surface/50 transition-colors">
                                        <td className="px-4 py-3 text-cupros-text-muted whitespace-nowrap">Today 7:45 AM</td>
                                        <td className="px-4 py-3 font-medium text-cupros-text">Menu Sync</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-rose-500"><XCircle className="w-3 h-3 mr-1" /> Failed</div>
                                        </td>
                                        <td className="px-4 py-3 text-cupros-text tabular-nums">0</td>
                                        <td className="px-4 py-3 text-rose-500 max-w-[200px] truncate">API Rate limit exceeded on partner endpoint.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="p-3 border-t border-cupros-border text-center bg-cupros-surface flex items-center justify-center">
                                <a href="/integrations/activity" className="text-xs font-medium text-cupros-teal-light hover:underline flex items-center">
                                     <Activity className="w-3 h-3 mr-1" /> View Full Activity Log
                                </a>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="relative w-full max-w-2xl bg-cupros-surface border-l border-cupros-border h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
                {/* Header Section */}
                <div className="flex-shrink-0 border-b border-cupros-border bg-cupros-bg p-6">
                    <button 
                        onClick={onClose} 
                        className="absolute top-4 right-4 p-2 rounded hover:bg-cupros-surface-hover text-cupros-text-muted hover:text-cupros-text transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    
                    <div className="flex items-start space-x-4 mb-6 pr-8">
                        <div className="w-16 h-16 rounded-lg bg-cupros-teal-light/10 border border-cupros-teal-light/20 flex items-center justify-center shrink-0">
                            <span className="text-xl font-bold text-cupros-teal-light tracking-wider">
                                {getInitials(integration.name)}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-1">
                                <h2 className="text-2xl font-bold text-cupros-text tracking-tight">{integration.name}</h2>
                                {getBadge(integration.status)}
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-cupros-text-muted">
                                <Badge variant="outline" className="text-[10px] font-normal uppercase tracking-wider">{integration.category}</Badge>
                                {integration.status === "Connected" && integration.lastSync && (
                                    <>
                                        <span>•</span>
                                        <span className="flex items-center">
                                            <RefreshCw className="w-3 h-3 mr-1" /> Last sync: {integration.lastSync}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button className="px-4 py-2 bg-cupros-surface border border-cupros-border rounded text-sm font-medium hover:bg-cupros-surface-hover transition-colors text-cupros-text">
                            Test Sync
                        </button>
                        <button className="px-4 py-2 bg-cupros-surface border border-cupros-border rounded text-sm font-medium hover:bg-cupros-surface-hover transition-colors text-cupros-text">
                            Pause Sync
                        </button>
                        <button className="px-4 py-2 bg-cupros-surface border border-cupros-border rounded text-sm font-medium hover:bg-cupros-surface-hover transition-colors text-cupros-text">
                            Reconnect
                        </button>
                        <button 
                            onClick={() => setShowConfirmDisconnect(true)}
                            className="px-4 py-2 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded text-sm font-medium hover:bg-rose-500/20 transition-colors ml-auto"
                        >
                            Disconnect
                        </button>
                    </div>
                </div>

                {/* Tabs Hub */}
                <div className="border-b border-cupros-border bg-cupros-surface px-6 flex space-x-6 overflow-x-auto scrollbar-none flex-shrink-0">
                    {["Overview", "Status", "Data Flows", "Source of Truth", "Mapping", "Activity Log"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors",
                                activeTab === tab 
                                    ? "border-cupros-teal-light text-cupros-teal-light" 
                                    : "border-transparent text-cupros-text-muted hover:text-cupros-text"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Body Content */}
                <div className="flex-1 overflow-y-auto p-6 bg-cupros-bg">
                    {renderTabContent()}
                </div>

                {/* Disconnect Modal */}
                {showConfirmDisconnect && (
                    <div className="absolute inset-0 z-60 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-cupros-surface border border-cupros-border rounded-lg shadow-2xl p-6 max-w-sm w-full mx-4 space-y-4 animate-in zoom-in-95 duration-200">
                            <div className="flex items-center space-x-3 text-rose-500 mb-2">
                                <ShieldAlert className="w-6 h-6" />
                                <h3 className="text-lg font-bold">Disconnect Integration?</h3>
                            </div>
                            <p className="text-sm text-cupros-text-muted">
                                Are you sure you want to disconnect {integration.name}? This will instantly halt all active data syncs and clear any cached module settings. This action cannot be undone.
                            </p>
                            <div className="flex justify-end space-x-3 pt-4">
                                <button 
                                    onClick={() => setShowConfirmDisconnect(false)}
                                    className="px-4 py-2 bg-cupros-bg border border-cupros-border rounded text-sm font-medium text-cupros-text hover:bg-cupros-surface-hover transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={() => {
                                        // In real app: handle disconnect logic
                                        setShowConfirmDisconnect(false);
                                        onClose();
                                    }}
                                    className="px-4 py-2 bg-rose-500 text-white rounded text-sm font-medium hover:bg-rose-600 transition-colors shadow-sm"
                                >
                                    Confirm Disconnect
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
