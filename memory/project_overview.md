---
name: Insights project overview
description: Architecture, modules, and design system of the Insights React PWA
type: project
---

React + Vite + Tailwind PWA deployed at /insights/. No TypeScript. All state centralized in App.jsx.

Modules: Cuisine (warm brown/gold), Musculation (dark grey), Trading (dark neon teal), Fromages (dark gold), Boissons (dark ocean teal).

**Why:** Personal knowledge hub with one module per domain.
**How to apply:** Each new module follows the same file pattern: data.js → Dashboard.jsx → Grid.jsx → Page.jsx → illustrations.jsx. Routing and detail views live in App.jsx.

Boissons module was extracted from Cuisine's "Boissons" category. Data is live-filtered from cuisine/data.js (not duplicated). Design: beach bar / tiki theme — BG #061420, ACCENT #00d4b8 (teal), CORAL #ff7043, GOLD #f4c542.
