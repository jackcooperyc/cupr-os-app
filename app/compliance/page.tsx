"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { CompliancePageSkeleton } from "@/components/shared/Skeleton";
import { EmptyState } from "@/components/shared/EmptyState";
import { useCuprosMock } from "@/hooks/useCuprosMock";
import type { CompliancePayload } from "@/lib/mockApi";
import { Search, Filter, ShieldCheck, AlertOctagon, History, FileText, CheckCircle2 } from "lucide-react";

export default function CompliancePage() {
  const { data, loading, error } = useCuprosMock<CompliancePayload>("compliance");

  if (loading) {
    return <CompliancePageSkeleton />;
  }

  if (error || !data) {
    return (
      <div className="max-w-7xl mx-auto pb-10">
        <EmptyState
          icon={ShieldCheck}
          title="Compliance data unavailable"
          description={error ?? "Could not load compliance center data."}
          action={
            <button type="button" className="secondary-button" onClick={() => window.location.reload()}>
              Retry
            </button>
          }
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <PageHeader
        size="large"
        title={data.header.title}
        description={data.header.description}
        icon={<ShieldCheck className="w-6 h-6 text-cupros-teal-light" />}
        actions={
          <>
            <div className="relative w-64">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-cupros-text-muted" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-cupros-border rounded-md text-sm bg-cupros-surface focus:outline-none focus:border-cupros-teal-light"
                placeholder="Search policies or assets..."
              />
            </div>
            <button type="button" className="px-4 py-2 bg-cupros-surface border border-cupros-border text-sm rounded hover:bg-cupros-surface-hover flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3 border-b border-cupros-border">
              <CardTitle className="text-sm">Active Jurisdictions</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <div className="divide-y divide-cupros-border text-sm">
                {data.jurisdictions.map((j) => (
                  <div
                    key={j.id}
                    className={
                      j.status === 'active'
                        ? 'p-4 bg-cupros-teal-bg/30 border-l-2 border-cupros-teal-light font-medium flex justify-between'
                        : 'p-4 hover:bg-cupros-surface-hover cursor-pointer flex justify-between text-cupros-text-muted'
                    }
                  >
                    <span>{j.label}</span>
                    <Badge variant={j.status === 'active' ? 'success' : 'outline'}>
                      {j.status === 'active' ? 'Active' : 'Verified'}
                    </Badge>
                  </div>
                ))}
               </div>
            </CardContent>
          </Card>

          <Card>
             <CardHeader className="pb-3">
              <CardTitle className="text-sm">Preflight Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.preflight.map((check) => (
                  <div key={check.id} className="flex justify-between items-center text-sm">
                    <span className={`flex items-center ${check.ok ? 'text-cupros-text-muted' : 'text-rose-400'}`}>
                      {check.ok ? (
                        <CheckCircle2 className="w-4 h-4 mr-2 text-cupros-teal-light" />
                      ) : (
                        <AlertOctagon className="w-4 h-4 mr-2" />
                      )}
                      {check.label}
                    </span>
                    <span className={check.ok ? '' : 'text-rose-400'}>
                      {check.percent !== undefined ? `${check.percent}%` : `${check.flags} Flags`}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between border-b border-cupros-border pb-4">
              <div>
                <CardTitle>Asset Review Queue</CardTitle>
                <p className="text-xs text-cupros-text-muted mt-1">Pending AI-generated and user-uploaded marketing assets requiring approval.</p>
              </div>
            </CardHeader>
            {data.assets.length === 0 ? (
              <EmptyState
                icon={ShieldCheck}
                title="No pending assets"
                description="All marketing materials pass standard preflight."
              />
            ) : (
            <DataTable
              columns={[
                { key: 'assetId', label: 'Asset ID' },
                { key: 'type', label: 'Type' },
                { key: 'risk', label: 'Violation Risk' },
                { key: 'details', label: 'Details' },
                { key: 'action', label: 'Action', align: 'right', className: 'flex justify-end' },
              ]}
            >
              {data.assets.map((asset) => (
                <tr key={asset.assetId} className="hover:bg-cupros-surface-hover">
                  <td className="px-6 py-4 font-mono text-xs">{asset.assetId}</td>
                  <td className="px-6 py-4">{asset.type}</td>
                  <td className="px-6 py-4">
                    <Badge variant={asset.violationVariant}>{asset.violationRisk}</Badge>
                  </td>
                  <td className="px-6 py-4 text-cupros-text-muted text-xs">{asset.details}</td>
                  <td className="px-6 py-4 text-right">
                    <button type="button" className="text-cupros-teal-light hover:underline font-medium">Review</button>
                  </td>
                </tr>
              ))}
            </DataTable>
            )}
          </Card>

          <Card>
            <CardHeader className="border-b border-cupros-border">
               <CardTitle className="text-base flex items-center">
                 <History className="w-4 h-4 mr-2" />
                 Recent Audit Log
               </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <div className="divide-y divide-cupros-border text-sm">
                  {data.auditLog.map((entry) => (
                    <div key={entry.title + entry.timestamp} className="p-4 flex items-start space-x-4">
                      <div className="mt-0.5 p-1.5 bg-cupros-bg rounded-md border border-cupros-border">
                        {entry.icon === 'file' ? (
                          <FileText className="w-4 h-4 text-cupros-text-muted" />
                        ) : (
                          <AlertOctagon className="w-4 h-4 text-cupros-text-muted" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-cupros-text">
                          {entry.title}{' '}
                          <span className="text-cupros-text-muted font-normal text-xs ml-2">{entry.timestamp}</span>
                        </p>
                        <p className="text-xs text-cupros-text-muted mt-1">{entry.description}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
