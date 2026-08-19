---
name: Insights project overview
description: Architecture, modules, and design system of the Insights React PWA
type: project
---

React 18 + Vite + Tailwind PWA, French-language, no TypeScript. Deployed to GitHub Pages under base path `/insights/`. Five independent domain modules sharing one shell: Cuisine, Boissons, Fromages, Trading, Musculation.

**`CLAUDE.md` at the repo root is the source of truth for architecture.** It is kept current and goes far deeper than this file — read it rather than relying on this summary.

**Why:** Personal knowledge hub, one module per domain.

**How to apply:** Everything for a module lives in `src/<module>/`, and no module imports from another module's folder. `App.jsx` is routing only (~260 lines, four `useState` values) — detail views, grids, and dashboards all live in their own module folder. Adding a module touches `App.jsx` in exactly two places: imports and the routing branch.

The file set varies by module; there is no fixed template. Only `data.js`, `DetailView.jsx` and `Backdrop.jsx` are universal. Some modules land on a Dashboard (Trading, Fromages), others on Grid + Sidebar (Cuisine, Boissons, Musculation); only three have illustrations.

Two of the five worlds are light — Cuisine (`#f7f0e3`) and Boissons (`#f7f2e8`); Trading (`#0d1117`), Fromages (`#110e08`) and Musculation (`#1c1e22`) are near-black. Each module sets its own background in `App.jsx` and its own home-page theme in `Backdrop.jsx`.

Boissons was originally extracted from a Cuisine category, but it now **owns its own entries and illustrations** — nothing is derived or live-filtered from `cuisine/data.js` any more, and reintroducing that coupling has already been cleaned up once. Its live palette is teal `#00d4b8`, coral `#ff7043`, gold `#f4c542` on the light page background. The dark tiki background `#061420` survives only in `boissons/Dashboard.jsx`, which is orphaned — nothing imports it.
