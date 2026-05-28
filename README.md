# CŪPR.OS App

Compliance-native digital operating system for dispensaries and smoke shops. Standalone Next.js operator console extracted from the JCS / CŪPR ecosystem.

This repository contains the **CŪPROS** SaaS UI — multi-location dashboard, catalog, orders, campaigns, AI Studio, ads, print, reviews, analytics, compliance, and integrations.

## Development

```bash
npm ci
npm run dev
```

Open [http://localhost:3011](http://localhost:3011).

Port **3011** is pinned in `npm run dev` so CŪPR.OS does not collide with BudBook (**3010**), BudBeat (**3002**), or other local tools on **3000**.

**Theme:** Sun/moon toggle in the top bar, or **Settings → Preferences → Appearance** for Light / Dark / System.

## Mock API (Phase 2)

Typed demo payloads live in `lib/cupros-mock/` and are served at:

| Route | Payload |
|-------|---------|
| `GET /api/internal/cupros-mock/dashboard` | KPIs, revenue chart, actions, locations |
| `GET /api/internal/cupros-mock/orders` | Orders hub table + sync badges |
| `GET /api/internal/cupros-mock/compliance` | Jurisdictions, preflight, asset queue, audit log |
| `GET /api/internal/cupros-mock/integrations` | Integration catalog + health summary |
| `GET /api/internal/cupros-mock/status` | Network status for top bar (operational / attention / degraded) |

Disabled in production unless `CUPROS_MOCK_ENABLED=1`. Shared UI: `components/shared/PageHeader`, `DataTable`, `EmptyState`, `Skeleton`, `PreflightWidget`, `IntegrationHealthBar`; client hook: `hooks/useCuprosMock.ts`.

## Mobile & UX (Phase 3)

- **Mobile nav:** hamburger menu in the top bar opens a slide-in drawer (`components/shell/MobileNav.tsx`) on viewports below `md`; desktop keeps the fixed sidebar.
- **Loading states:** shared skeletons in `components/shared/Skeleton.tsx` for dashboard, table, and compliance pages.
- **Empty states:** `components/shared/EmptyState.tsx` on print, ads, orders (no rows), and compliance asset queue.

## Intelligence & orchestration (Phase 4)

- **UIN narrative:** dashboard titled "UIN Network Overview" with unified preflight + integration health bar.
- **Unified preflight:** `lib/cupros-mock/preflight.ts` feeds dashboard widget and `/compliance`.
- **AI Studio:** `POST /api/ai-studio/generate` — uses `GEMINI_API_KEY` when set, otherwise demo output.
- **Network status:** top bar indicator derived from location sync, integration health, and preflight flags.

**Brand:** Archivo Black + DM Sans, orange/teal accent spine aligned with the [pitch deck](/cupros_pitchdeck.html).


### Environment

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|----------|---------|
| `GEMINI_API_KEY` | Gemini API for AI Studio features (optional in demo UI) |
| `APP_URL` | Public origin for OAuth callbacks and self-referential links |

## Production

Build output uses Next.js `standalone` mode (see `next.config.ts`) for container deployment (e.g. Google Cloud Run).

```bash
npm run build
npm run start
```

## App modules

| Route | Purpose |
|-------|---------|
| `/` | Network overview dashboard |
| `/locations` | Store locations |
| `/website` | Website builder |
| `/listings` | Listing management |
| `/catalog` | Menu / catalog |
| `/orders` | Orders |
| `/customers` | Customers |
| `/campaigns` | Campaigns |
| `/ai-studio` | AI content studio |
| `/ads` | Digital ads |
| `/print` | Print collateral |
| `/reviews` | Reviews |
| `/analytics` | Analytics |
| `/compliance` | Compliance monitoring |
| `/integrations` | POS / platform integrations |
| `/settings` | Settings |

## Structure

| Path | Purpose |
|------|---------|
| `app/` | Next.js App Router pages |
| `components/shell/` | App shell (sidebar, topbar) |
| `components/ui/` | Shared UI primitives |
| `public/Cupros.png` | Brand logo |
| `metadata.json` | Product metadata (from AI Studio export) |

## Related

- Marketing shell: [cupr_app](https://github.com/jackcooperyc/jcs-consumer-app) (CŪPR ecosystem monorepo)
- BudBook: [budbook-app](https://github.com/jackcooperyc/budbook-app)
- BudBeat: [budbeat-app](https://github.com/jackcooperyc/budbeat-app)
- JCS technical docs: [jcs-technical-app](https://github.com/jackcooperyc/jcs-technical-app)

## Source

Seeded from the Google AI Studio **CŪPROS** export and prepared as a standalone repository for `jackcooperyc/cupr-os-app`.
