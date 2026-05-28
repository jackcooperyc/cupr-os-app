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
