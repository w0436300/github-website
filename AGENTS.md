# AGENTS.md

## Cursor Cloud specific instructions

This repository is a personal portfolio site. The active application is the **Vite + React app in `react/`** (title "Claire"). The root-level files (`test.js`, root `package.json` with `owl.carousel`/`typed.js`) are legacy static-site assets and are not the app that gets built/deployed — the GitHub Pages workflow (`.github/workflows/deploy-pages.yml`) builds only `react/`.

### Working directory
All app commands run from `react/` (not the repo root). Node 22 works; the CI workflow pins Node 20.

### Commands (defined in `react/package.json`)
- Dev server: `npm run dev` (Vite, serves on `http://localhost:5173/`). Use `npm run dev -- --host` to expose on the network.
- Build: `npm run build`.
- Preview built output: `npm run preview`.
- `npm run build:pages` builds with `BASE_PATH=/personal-website/` for GitHub Pages; use plain `npm run build`/`npm run dev` for local work.

### Lint / typecheck / tests
- No ESLint config and no test framework are set up in this repo. There is no `lint` or `test` script.
- Static checking is available via TypeScript: `npx tsc --noEmit` (config in `react/tsconfig.json`). Note most source is `.jsx` (not typechecked); `tsc` mainly covers the few `.ts` files.

### Non-obvious notes
- Some project case studies are gated by a soft, client-side password (see `react/src/data/projectPasswords.js`). Passwords are checked only in the browser (not real security). Current shared password for the protected projects (`ai-knowledge-base-engineering`, `project-request-collaboration`) is `claire2026`. Useful for testing the unlock flow at e.g. `/project/ai-knowledge-base-engineering`.
- Routing is SPA client-side (`react-router-dom`); `index.html` contains a GitHub Pages 404 redirect shim, and the deploy workflow copies `dist/index.html` to `dist/404.html` for SPA fallback.
