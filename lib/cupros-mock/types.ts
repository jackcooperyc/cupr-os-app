export type OrderStatusType = 'warning' | 'default' | 'success' | 'destructive';

export type OrderType = 'Pickup' | 'Delivery';

export interface RevenuePoint {
  name: string;
  total: number;
  online: number;
}

export interface DashboardKpi {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  subtitle: string;
  warning?: boolean;
  success?: boolean;
}

export interface DashboardAction {
  id: string;
  title: string;
  desc: string;
  urgent?: boolean;
  successBadge?: string;
  category: 'compliance' | 'growth';
}

export interface LocationStatus {
  name: string;
  sync: 'Live' | 'Error';
  health: string;
  orders: string;
  warning?: boolean;
}

export interface DashboardPayload {
  header: {
    title: string;
    description: string;
    locationCount: number;
    uinTagline?: string;
  };
  kpis: DashboardKpi[];
  revenue: RevenuePoint[];
  preflight: PreflightCheck[];
  complianceActions: DashboardAction[];
  growthActions: DashboardAction[];
  integrationHealth: IntegrationHealthSummary;
  locations: LocationStatus[];
}

export type IntegrationStatus =
  | 'Connected'
  | 'Needs Attention'
  | 'Available'
  | 'Error'
  | 'Beta';

export interface IntegrationItem {
  name: string;
  category: string;
  value: string;
  status: IntegrationStatus;
  lastSync?: string;
  powers: string;
}

export interface IntegrationsPayload {
  header: {
    title: string;
    description: string;
    orgName: string;
  };
  categories: string[];
  summary: { connected: number; needsAttention: number };
  integrations: IntegrationItem[];
}

export type NetworkStatusLevel = 'operational' | 'attention' | 'degraded';

export interface NetworkStatusPayload {
  level: NetworkStatusLevel;
  label: string;
  detail: string;
  connectedIntegrations: number;
  needsAttentionIntegrations: number;
  locationErrors: number;
  preflightFlags: number;
  lastSync: string;
}

export interface IntegrationHealthSummary {
  connected: number;
  needsAttention: number;
  lastSync: string;
}

export interface Order {
  id: string;
  time: string;
  customer: string;
  email: string;
  type: OrderType;
  source: string;
  deliveryPartner?: string;
  store: string;
  total: string;
  status: string;
  statusType: OrderStatusType;
}

export interface OrdersSyncBadge {
  label: string;
  variant: 'live' | 'connected';
}

export interface OrdersPayload {
  header: {
    title: string;
    description: string;
  };
  syncBadges: OrdersSyncBadge[];
  filterCounts: { pending: number };
  orders: Order[];
}

export type JurisdictionStatus = 'active' | 'verified';

export interface Jurisdiction {
  id: string;
  label: string;
  status: JurisdictionStatus;
}

export interface PreflightCheck {
  id: string;
  label: string;
  percent?: number;
  flags?: number;
  ok: boolean;
}

export interface ComplianceAsset {
  assetId: string;
  type: string;
  violationRisk: string;
  violationVariant: 'destructive' | 'warning';
  details: string;
}

export type AuditLogIcon = 'file' | 'alert';

export interface AuditLogEntry {
  title: string;
  timestamp: string;
  description: string;
  icon: AuditLogIcon;
}

export interface CompliancePayload {
  header: {
    title: string;
    description: string;
  };
  jurisdictions: Jurisdiction[];
  preflight: PreflightCheck[];
  assets: ComplianceAsset[];
  auditLog: AuditLogEntry[];
}
