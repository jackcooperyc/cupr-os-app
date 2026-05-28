<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# CŪPR.OS app conventions

- Next.js 15 App Router with Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- Dev server runs on port **3011**
- Shell layout lives in `components/shell/`; pages under `app/`
- Brand tokens use `cupros-*` Tailwind color names — extend via `@theme`, not ad-hoc hex in components
- Match existing dense enterprise UI patterns (13px base, zinc/teal palette)
