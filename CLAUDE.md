# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Before building anything

Ask questions until you are 95% confident you know exactly what to build. Don't start on a plausible guess.

- Ask **before** implementing, not after. Batch questions into one round.
- Only ask what the repo can't answer. If it's in `data.js`, `App.jsx`, or git history, go read it.
- Design and content need the most questioning — layout, wording, colours, and which module an entry belongs to are rarely inferable.

## While building

Don't move to the next item until you're 95% confident the current one is complete and correct.

- **"Complete" means wired end to end.** Two registries fail silently: an entry missing from `categories[].entryIds` never appears under its filter, an illustration missing from its registry renders nothing. Both compile fine.
- **Run `npm run build` before calling something done.** No tests, so a green build is the floor, not proof.
- **Verify, don't assume.** For layout changes, reason through the actual breakpoints rather than checking one window size.
- **If you land below 95%, say so** and name the doubt.

## Commands

```bash
npm run dev       # Vite dev server (localhost:5173) — required for the Binance proxy
npm run build     # Production build → dist/
npm run preview   # Serve the production build locally
./setup.sh        # One-time: point core.hooksPath at .githooks (Discord webhooks)
```

No tests, no linter. Push to `main` triggers `.github/workflows/deploy.yml` → GitHub Pages.
Editing `tailwind.config.js` requires restarting the dev server.

Commit, push, and starting a Claude Code session each POST to a Discord webhook — the first two via `.githooks/`, the third via a `SessionStart` hook in `.claude/settings.json`. Harmless, but it means someone sees the notification.

## Architecture

**Insights** is a French-language personal knowledge-hub PWA: five independent domain modules sharing one shell. React 18 + Vite + Tailwind, deployed to GitHub Pages under base path `/insights/`.

### Navigation

All routing is state-based in `App.jsx` — no router, no context, no state library. Four `useState` values:

```
section === null           → HomePage (module picker)
section, no filterId       → module landing (Dashboard, or Grid if the module has a Sidebar)
section + filterId         → Grid (filtered card list)
section + activeId         → DetailView
```

`App.jsx` is **routing only** (~260 lines) and must stay that way. It renders no module-specific markup.

### One folder per module — hard rule

Everything for a module lives in `src/<module>/`, and **no module may import from another module's folder**. The only shared code is `src/hooks/`, plus `App.jsx` importing each module's entry points. When adding a module, touch `App.jsx` in exactly two places: imports and the routing branch. If you're writing markup there, it belongs in the module.

This has been violated twice (module detail views accumulating in `App.jsx` until it hit 960 lines; `boissons/` deriving its data and illustrations from `cuisine/`) and both cost real cleanup.

### The five modules

| Module | Dir | Landing | Files beyond `data.js` + `DetailView.jsx` + `Backdrop.jsx` | Accent |
|---|---|---|---|---|
| Cuisine | `src/cuisine/` | Grid + Sidebar | `Grid`, `Sidebar`, `RecipePage`, `TipPage`, `LeftColumn`, `illustrations/` | Gold `#f5c872` |
| Boissons | `src/boissons/` | Grid + Sidebar | `Grid`, `Sidebar`, `Page`, `illustrations.jsx` (+ orphaned `Dashboard`) | Teal `#00d4b8` |
| Fromages | `src/fromages/` | `Dashboard` | `Grid`, `Page`, `Dashboard` | Dark gold `#d4a44c` |
| Trading | `src/trading/` | `Dashboard` | `Grid`, `Page`, `Dashboard`, `illustrations.jsx` | Neon cyan `#00d4aa` |
| Musculation | `src/musculation/` | Grid + Sidebar | `Grid`, `Sidebar`, `ExercisePage` | Grey-blue `#c0c8d4` |

Only `data.js`, `DetailView.jsx` and `Backdrop.jsx` are universal. Cuisine splits its detail page by entry `type` (`RecipePage` vs `TipPage`); the others have one `Page.jsx`. Inside a module folder, components are named plainly — `DetailView`, `DecorativePanel` — with no module prefix.

Two things the file listing won't tell you:

- **`boissons/Dashboard.jsx` is dead code** — 265 lines, imported by nothing. Boissons lands on Grid + Sidebar. Don't wire it up on the assumption it was meant to be the landing; ask first.
- **`trading/Dashboard.jsx` is 1350 lines**, ~15% of `src/`. It is the live-data dashboard *and* its own chart/table/calendar rendering. Everything else in the repo sits between 70 and 400 lines.

### Data

Each `data.js` exports an entries array, a categories array, and a `get*FilteredEntries(filterId)` helper, under module-prefixed names since `App.jsx` imports them into one scope — **except cuisine**, the oldest module, which exports the unprefixed `entries` / `categories` / `getFilteredEntries` and gets aliased at the import site in `App.jsx`. A new module should prefix.

Trading's helper takes a second argument, `getTradingFilteredEntries(filterId, subcategoryId)`, since its categories carry a `subcategories` array; the other four take `filterId` alone.

**Entry shapes are per-module.** Only `id` and `title` are universal. Cuisine/Boissons use `type` + `category` + `ingredients`/`steps`/`variants`; Trading uses `categoryId` + `market` + `stats` + `sections`.

**Cuisine is food, Boissons is drinks, Fromages is cheese — they share nothing.** Each owns its entries and illustrations. Don't reintroduce a drinks category in cuisine or a cheese category outside `fromages/`.

Cuisine/Boissons ingredients are either `{ label }` or scalable `{ label, base, unit }`. **`base` is the per-*person* amount, not the recipe total** — `LeftColumn` starts its counter at 1 pers. and renders `base * people`, so a recipe written "for 4" must be divided down. Scalable entries should omit `servings`, which would render a redundant badge.

Illustrations are keyed by a string on the entry (`illustration: 'mai-tai'`) and resolved through a per-module registry. A new SVG must be registered there or it silently renders nothing.

### The home page

`HomePage.jsx` is a full-bleed picker: five module backdrops stacked and cross-faded, only the active one visible. It escapes the body's centred flex layout with `position: fixed; inset: 0`, like every module shell.

Each module owns `Backdrop.jsx`, exporting a default `Backdrop({ active })` (full-bleed SVG, `viewBox="0 0 1440 900"`, `preserveAspectRatio="xMidYMid slice"`) and a named `theme` (`id`, `label`, `description`, `accent`, `glow`, `fg`, `dim`, `scrim`). `HomePage` spreads each theme and hardcodes nothing.

- **Two worlds are light** (Cuisine, Boissons), three near-black — hence `fg` and `scrim` per theme.
- **Keep art out of the left ~55%**, which is the text column. Also note `slice` means mobile only ever shows viewBox x≈512–928, so subjects placed right of ~880 are desktop-only.
- **Pointing differs by input**: cursor hover on desktop, scroll position against a focal line at 34% viewport height on touch. The `58vh` mobile spacer exists so the list actually scrolls — without it the backdrop freezes.
- **Descriptions stay open on mobile**; collapsing them reflows the list under the scroll handler and makes the active item oscillate.
- Motion primitives (`hp-*`) live in `index.css`, transform/opacity only, with a `prefers-reduced-motion` override. Each backdrop pauses its own animations via `animationPlayState` when inactive.

**Performance, learned the hard way.** The animations are cheap; the cross-fade is not. Measured at 6× CPU throttle: idle is ~7ms/frame with zero drops, switching worlds is ~25ms with occasional 100ms+ spikes.

- **Never leave `will-change` on permanently** — five full-viewport layers pinned ~104MB of GPU memory and was the original cause of the jank. It's applied transiently, only to the two layers mid-fade.
- **Don't unmount backdrops on switch.** Building a ~124-node SVG mid-hover cost 160–300ms frames. They mount once, warmed on idle, and stay.
- **Large full-viewport animations belong on CSS `<div>` layers, not animated SVG `<g>`** — Trading's grid and Musculation's light shafts were moved for this reason. A looping tile animation must travel *exactly* one tile or the loop visibly jumps.

### Live data (Trading dashboard only)

`trading/Dashboard.jsx` is the only component that fetches:

- **Binance** (BTC/ETH + klines) — `/proxy/binance` in dev (the only proxy in `vite.config.js`), direct in prod, switched on `import.meta.env.DEV`. **Does not work in `npm run preview`** — no proxy on that path.
- **TwelveData** (EUR/USD, GBP/USD, USD/JPY, QQQ) — direct, free-tier key hardcoded in the file. Rate-limited; failures are swallowed.
- **alternative.me** — Fear & Greed index.
- **Forex Factory calendar** — read from a **GitHub Gist**, not upstream. `.github/workflows/update-calendar.yml` refetches hourly on weekdays and PATCHes the gist (needs `GIST_TOKEN`).

All fetches use a local `fetchWithTimeout` + `Promise.allSettled`; every failure degrades to a placeholder.

### Styling

Two coexisting styles, split by module age: **inline `style` objects** (cuisine, musculation, fromages, boissons, most of `App.jsx`) and **Tailwind** (trading). Follow whichever the surrounding file uses rather than converting.

Custom tokens in `tailwind.config.js`: base palette (`parchment`, `sidebar`, `appbg`, `accent`, `gold`, `textdark`), trading palette (`neon-*`, `tr-*`), fonts (`serif` Playfair, `body` Lora, `sans` DM Sans, `jakarta`, `spacemono`). Some modules use families not in the config (Barlow, Space Grotesk) via raw `fontFamily`.

Each module sets its own full-bleed background in `App.jsx`: `#0d1117` trading, `#110e08` fromages, `#1c1e22` musculation, `#f7f2e8`/`#f7f0e3` boissons/cuisine.

### Responsive

`useIsMobile(breakpoint = 768)` in `src/hooks/useIsMobile.js`. Call it once **per element** with the breakpoint that element needs — `useIsMobile()` for the sidebar switch and `useIsMobile(1100)` for hiding the decorative panel are used together in the same component. Don't collapse them into one global flag.

### PWA

`vite-plugin-pwa` with `registerType: 'autoUpdate'`; manifest scope and `start_url` are both `/insights/`, matching Vite's `base`. Icons live in `public/`. Any absolute asset path must include the `/insights/` prefix.
