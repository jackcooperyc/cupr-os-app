import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { 
    X, CheckCircle2, ChevronRight, Key, Globe2, Loader2, Database, Network, Check
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
    { id: 1, label: "Scope & Connect" },
    { id: 2, label: "Data Access" },
    { id: 3, label: "Source of Truth" },
    { id: 4, label: "Deploy & Sync" }
];

export function IntegrationConnectStepper({ integration, onClose }: { integration: any, onClose: () => void }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isTestSyncing, setIsTestSyncing] = useState(false);
    const [testSyncSuccess, setTestSyncSuccess] = useState(false);

    if (!integration) return null;
    const getInitials = (name: string) => name.substring(0, 2).toUpperCase();

    const handleNext = () => {
        if (currentStep === 4) {
             onClose();
        } else if (currentStep === 3) {
             setCurrentStep(4);
             setIsTestSyncing(true);
             setTimeout(() => {
                 setIsTestSyncing(false);
                 setTestSyncSuccess(true);
             }, 2500);
        } else {
             setCurrentStep(currentStep + 1);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
                            <h3 className="text-lg font-semibold text-cupros-text mb-1">Set Scope</h3>
                            <p className="text-sm text-cupros-text-muted mb-4">Choose where this integration will be active.</p>
                            
                            <div className="grid gap-3">
                                <label className="flex items-start space-x-3 bg-cupros-bg border-cupros-teal-light border rounded-lg p-4 cursor-pointer relative overflow-hidden">
                                    <div className="absolute inset-0 bg-cupros-teal-light/5 pointer-events-none"></div>
                                    <input type="radio" name="scope" className="mt-1 accent-cupros-teal-light" defaultChecked />
                                    <div>
                                        <div className="text-sm font-medium text-cupros-text">Organization-Level</div>
                                        <div className="text-xs text-cupros-text-muted mt-1">Applies to all current and future locations seamlessly.</div>
                                    </div>
                                </label>
                                <label className="flex items-start space-x-3 bg-cupros-surface border-cupros-border border rounded-lg p-4 cursor-pointer hover:bg-cupros-surface-hover/50 transition-colors">
                                    <input type="radio" name="scope" className="mt-1 accent-cupros-teal-light" />
                                    <div>
                                        <div className="text-sm font-medium text-cupros-text">Location-Level</div>
                                        <div className="text-xs text-cupros-text-muted mt-1">Apply differently per physical location. Requires manual setup per store.</div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-cupros-text mb-1">Authenticate</h3>
                            <p className="text-sm text-cupros-text-muted mb-4">Provide your {integration.name} API credentials.</p>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-cupros-text-muted mb-1 flex items-center">
                                       <Key className="w-3 h-3 mr-1" /> API Key
                                    </label>
                                    <input type="password" placeholder={`Enter ${integration.name} API Key`} className="w-full bg-cupros-bg border border-cupros-border rounded p-2 text-sm text-cupros-text focus:outline-none focus:border-cupros-teal-light transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
                            <h3 className="text-lg font-semibold text-cupros-text mb-1">Confirm Data Access</h3>
                            <p className="text-sm text-cupros-text-muted mb-4">Select which objects CŪPROS will sync with {integration.name}.</p>
                            
                            <div className="bg-cupros-bg border border-cupros-border rounded-lg divide-y divide-cupros-border">
                                {[
                                    { name: "Products & Catalog", desc: "Sync inventory, variants, categories and brand data.", icon: Database },
                                    { name: "Orders & Fulfillment", desc: "Push/pull real-time orders and fulfillment statuses.", icon: Network },
                                    { name: "Customers", desc: "Read and write customer profiles and loyalty points.", icon: Globe2 }
                                ].map((item, i) => (
                                    <label key={i} className="flex items-start space-x-3 p-4 cursor-pointer hover:bg-cupros-surface/50 transition-colors group">
                                        <input type="checkbox" defaultChecked className="mt-1 accent-cupros-teal-light" />
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-medium text-cupros-text flex items-center group-hover:text-cupros-teal-light transition-colors">
                                                <item.icon className="w-4 h-4 mr-2" /> {item.name}
                                            </div>
                                            <div className="text-xs text-cupros-text-muted mt-1">{item.desc}</div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="bg-cupros-teal-light/5 border border-cupros-teal-light/20 p-4 rounded-lg">
                             <h4 className="text-sm font-medium text-cupros-text mb-2">Sync Impact Preview</h4>
                             <ul className="text-xs text-cupros-text-muted space-y-2">
                                 <li className="flex justify-between items-center"><span className="text-cupros-text">Products Affected:</span> <span className="font-semibold text-cupros-teal-light">~420 records</span></li>
                                 <li className="flex justify-between items-center"><span className="text-cupros-text">Historical Orders:</span> <span>Skipped (only future sync)</span></li>
                                 <li className="flex justify-between items-center"><span className="text-cupros-text">Webhooks Registered:</span> <span className="font-semibold text-cupros-teal-light">4 events</span></li>
                             </ul>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
                            <h3 className="text-lg font-semibold text-cupros-text mb-1">Set Source of Truth</h3>
                            <p className="text-sm text-cupros-text-muted mb-4">You can change these rules later in the integration settings.</p>

                            <div className="bg-cupros-bg border border-cupros-border rounded-lg overflow-hidden">
                                <table className="w-full text-sm text-left border-collapse">
                                    <thead className="bg-cupros-surface text-cupros-text-muted uppercase text-[10px] tracking-wider">
                                        <tr>
                                            <th className="px-4 py-3 font-medium border-b border-cupros-border">Data Domain</th>
                                            <th className="px-4 py-3 font-medium border-b border-cupros-border text-center">Ownership Control</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-cupros-border text-sm">
                                        {["Inventory", "Pricing", "Customer Profiles"].map((domain, i) => (
                                             <tr key={i} className="hover:bg-cupros-surface/50 transition-colors">
                                                 <td className="px-4 py-3 font-medium text-cupros-text">{domain}</td>
                                                 <td className="px-4 py-3">
                                                     <div className="flex bg-cupros-surface border border-cupros-border rounded p-0.5 text-xs w-max mx-auto">
                                                         <button className={cn("px-3 py-1 rounded shadow-sm font-medium transition-colors", i===0 ? "bg-cupros-bg text-cupros-text" : "text-cupros-text-muted hover:text-cupros-text")}>Partner</button>
                                                         <button className={cn("px-3 py-1 rounded shadow-sm font-medium transition-colors", i===1 ? "bg-cupros-bg text-cupros-text" : "text-cupros-text-muted hover:text-cupros-text")}>CŪPR</button>
                                                         <button className={cn("px-3 py-1 rounded shadow-sm font-medium transition-colors", i===2 ? "bg-cupros-bg text-cupros-text" : "text-cupros-text-muted hover:text-cupros-text")}>Manual</button>
                                                     </div>
                                                 </td>
                                             </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 h-full flex flex-col justify-center items-center py-10">
                        {isTestSyncing ? (
                            <div className="text-center space-y-4">
                                <Loader2 className="w-12 h-12 text-cupros-teal-light animate-spin mx-auto" />
                                <h3 className="text-lg font-semibold text-cupros-text">Running Initial Sync...</h3>
                                <p className="text-sm text-cupros-text-muted">Establishing connection to {integration.name} and validating schemas.</p>
                            </div>
                        ) : testSyncSuccess ? (
                            <div className="text-center space-y-4 animate-in zoom-in-95 duration-300">
                                <div className="w-16 h-16 bg-cupros-green/10 text-cupros-green rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-cupros-text">Integration Active</h3>
                                <p className="text-sm text-cupros-text-muted max-w-sm mx-auto">
                                    The connection to {integration.name} is established. Initial sync pulled 420 products and configured 4 webhooks.
                                </p>
                                <div className="pt-4">
                                   <Badge variant="success" className="bg-cupros-green/10 text-cupros-green border-none">Connected</Badge>
                                </div>
                            </div>
                        ) : null}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 z-60 flex justify-center bg-black/60 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-200">
            <div className="bg-cupros-surface border border-cupros-border rounded-xl shadow-2xl w-full max-w-3xl h-full max-h-[800px] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="flex-shrink-0 border-b border-cupros-border bg-cupros-bg p-6 flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-cupros-teal-light/10 border border-cupros-teal-light/20 flex items-center justify-center shrink-0">
                            <span className="text-sm font-bold text-cupros-teal-light tracking-wider">
                                {getInitials(integration.name)}
                            </span>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-cupros-text truncate">Connect to {integration.name}</h2>
                            <p className="text-sm text-cupros-text-muted mt-1 tracking-wide uppercase text-[10px]">Integration Onboarding</p>
                        </div>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="p-2 rounded hover:bg-cupros-surface-hover text-cupros-text-muted hover:text-cupros-text transition-colors"
                        disabled={isTestSyncing}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="bg-cupros-surface border-b border-cupros-border p-4 px-6 flex justify-between items-center relative overflow-hidden">
                     {/* Progress Line */}
                     <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-cupros-border -translate-y-1/2 z-0 hidden sm:block"></div>
                     <div className="absolute top-1/2 left-8 h-0.5 bg-cupros-teal-light -translate-y-1/2 z-0 hidden sm:block transition-all duration-500 ease-in-out" style={{ width: `calc(${((currentStep - 1) / 3) * 100}% - 4rem)` }}></div>

                     {STEPS.map((step) => {
                         const isActive = step.id === currentStep;
                         const isCompleted = step.id < currentStep;
                         return (
                             <div key={step.id} className="relative z-10 flex flex-col items-center">
                                 <div className={cn(
                                     "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-colors duration-300",
                                     isActive ? "bg-cupros-surface border-cupros-teal-light text-cupros-teal-light shadow-[0_0_10px_rgba(45,212,191,0.2)]" :
                                     isCompleted ? "bg-cupros-teal-light border-cupros-teal-light text-white" :
                                     "bg-cupros-bg border-cupros-border text-cupros-text-muted"
                                 )}>
                                     {isCompleted ? <Check className="w-4 h-4" /> : step.id}
                                 </div>
                                 <span className={cn(
                                     "text-[10px] font-medium mt-2 hidden sm:block uppercase tracking-wider transition-colors duration-300",
                                     isActive || isCompleted ? "text-cupros-text" : "text-cupros-text-muted"
                                 )}>{step.label}</span>
                             </div>
                         );
                     })}
                </div>

                {/* Body Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-cupros-bg">
                    {renderStepContent()}
                </div>

                {/* Footer Controls */}
                <div className="border-t border-cupros-border bg-cupros-surface p-4 px-6 flex justify-between items-center">
                    {currentStep > 1 && !isTestSyncing && !testSyncSuccess ? (
                        <button 
                            onClick={() => setCurrentStep(prev => prev - 1)}
                            className="px-4 py-2 border border-cupros-border bg-cupros-bg rounded text-sm font-medium text-cupros-text hover:bg-cupros-surface-hover transition-colors"
                        >
                            Back
                        </button>
                    ) : (
                        <div></div>
                    )}

                    {!isTestSyncing && (
                        <button 
                            onClick={handleNext}
                            className={cn(
                                "px-4 py-2 bg-cupros-teal-light text-white rounded text-sm font-medium flex items-center shadow-sm transition-colors",
                                testSyncSuccess ? "bg-cupros-green hover:bg-cupros-green/90" : "hover:bg-cupros-teal"
                            )}
                        >
                            {testSyncSuccess ? "Finish & Go to Dashboard" : currentStep === 3 ? "Run Test Sync" : "Continue"}
                            {!testSyncSuccess && <ChevronRight className="w-4 h-4 ml-2" />}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
