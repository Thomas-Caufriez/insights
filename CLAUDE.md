# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
./setup.sh        # Configure git hooks (run once after cloning)
```

No test or lint commands exist. Deployment is automated via GitHub Actions on push to `main`.

## Architecture

**Insights** is a French-language personal knowledge hub PWA with 5 independent domain modules. Built with React 18 + Vite + Tailwind CSS, deployed to GitHub Pages at `/insights/`.

### Navigation model

All routing is state-based in `App.jsx` — no React Router:

```
null (section)          → HomePage (module picker)
section set             → Module Dashboard (category picker)
section + filterId set  → Module Grid (searchable list)
section + activeId set  → Module detail Page
```

Four state variables in `App.jsx`: `section`, `filterId`, `activeId`, `sidebarOpen`. No context, no external state library.

### Module structure

Each module follows an identical pattern:

```
src/<module>/
  data.js            # All entries as an array + filter helpers
  Dashboard.jsx      # Category overview / landing
  Grid.jsx           # Searchable card grid
  Page.jsx           # Detail view (header + body split)
  Sidebar.jsx        # Category filter panel (not all modules)
  illustrations.jsx  # Custom SVG components
```

The five modules and their accent colors:

| Module | Dir | Accent |
|---|---|---|
| Cuisine | `src/cuisine/` | Gold `#f5c872` |
| Musculation | `src/musculation/` | Grey-blue `#c0c8d4` |
| Trading | `src/trading/` | Neon cyan `#00d4aa` |
| Fromages | `src/fromages/` | Dark gold `#d4a44c` |
| Boissons | `src/boissons/` | Teal `#00d4b8` |

`src/components/` and `src/data/` contain **legacy files** that are no longer used.

### Styling conventions

- Global theme: dark parchment (`appbg: #1a1208`, `sidebar: #2a1f0e`)
- Tailwind utility classes for layout; inline `style` objects for per-module theme colors
- Custom Tailwind tokens: `parchment`, `sidebar`, `appbg`, `accent`, `gold`, `textdark`
- Custom fonts loaded via Google Fonts in `index.html`: Playfair Display, Lora, DM Sans, and others

### Data entries

Each entry object has at minimum: `id`, `type`, `category`, `title`. Rich entries add `ingredients`, `steps`, `notes`, `illustration`, `video`. The `data.js` in each module exports the array and a filtered getter used by Grid and Sidebar components.

### External APIs (Trading module)

Proxied through Vite dev server to avoid CORS:
- `/proxy/coingecko` → CoinGecko
- `/proxy/binance` → Binance
- `/proxy/er` → open.er-api.com (exchange rates)
- `/proxy/yahoo` → Yahoo Finance

### Responsive

Single hook `src/hooks/useIsMobile.js` (breakpoint: 768px) used throughout for mobile layout switching.
