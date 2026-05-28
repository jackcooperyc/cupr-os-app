import type { LucideIcon } from 'lucide-react';
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
  Settings,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  alert?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: Building2 },
  { label: 'Locations', href: '/locations', icon: MapPin },
  { label: 'Website', href: '/website', icon: Globe },
  { label: 'Listings', href: '/listings', icon: List },
  { label: 'Menu / Catalog', href: '/catalog', icon: MenuSquare },
  { label: 'Orders', href: '/orders', icon: ShoppingCart },
  { label: 'Customers', href: '/customers', icon: Users },
  { label: 'Campaigns', href: '/campaigns', icon: Target },
  { label: 'AI Studio', href: '/ai-studio', icon: Sparkles },
  { label: 'Ads', href: '/ads', icon: Megaphone },
  { label: 'Print', href: '/print', icon: Printer },
  { label: 'Reviews', href: '/reviews', icon: Star },
  { label: 'Analytics', href: '/analytics', icon: BarChart3 },
  { label: 'Compliance', href: '/compliance', icon: ShieldCheck, alert: true },
  { label: 'Integrations', href: '/integrations', icon: Blocks },
  { label: 'Settings', href: '/settings', icon: Settings },
];
