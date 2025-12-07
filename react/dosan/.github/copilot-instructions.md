# AI Agent Instructions — dosan (Doosan Robotics sample)

Purpose

- Help AI agents quickly make productive UI/content edits and add features (slider, assets) to this Vite + React + TypeScript app in `react/dosan`.

Quick start (local)

- cd `react/dosan`
- npm install
- npm run dev
- npm run build (production)

Architecture / Big picture

- Single-page app: `index.html` (importmap) → `index.tsx` → `App.tsx`.
- Components under `components/` are small, mostly presentational React functional components.
- `types.ts` contains shared TypeScript types.
- Tailwind is loaded from CDN in `index.html`; there is no local Tailwind build pipeline. Use Tailwind classes inline.

Project-specific conventions

- External images (Unsplash) are widely used. Use `/public/images/` when switching to local assets.
- Static lists (use cases, products, posts) are usually in the component file as arrays; extract to `/data` and `types.ts` if shared between components.
- Keep components small and props-driven; prefer `types.ts` types for shared shapes (e.g., `UseCase`, `SocialPost`).

Hero slider guidance

- Replace or add `components/HeroSlider.tsx` and import it from `App.tsx` (we use `HeroSlider` in this repo).
- For left-to-right or right-to-left direction, adjust the transform calculation or reverse the slides array:
  - Default approach: wrapper width = `slides.length * 100%`, each slide width = `100 / slides.length%`, transform `translateX(-index * (100 / slides.length)%)` for standard sliding behavior.
  - To invert direction visually, reverse the slides array or use a positive translate with corresponding layout math.
- Auto-advance pattern: `useState` for current index, `useEffect` + `setTimeout` for auto-advance, clear on hover and on unmount.

Where to edit (examples)

- `components/HeroSlider.tsx` (new slider)
- `App.tsx` — swap `Hero` for `HeroSlider` if replacing hero
- `components/*` — for other UI sections
- `public/` — add local image assets
- `types.ts` — add types for new data shapes

Debugging / Build notes

- `vite.config.ts` exposes `process.env.GEMINI_API_KEY` from `.env.local`. Keep secrets local (do not commit `.env.local`).
- `index.html` uses importmap and CDN React; if adding build-time plugin or polyfills, update `index.html` and `vite.config.ts`.
- If React doesn’t mount: ensure `index.tsx` finds `#root`.
- Vite dev server: check console for missing imports or 404s (assets under `public/`).

PR Guidance

- Make minimal, focused changes; test via `npm run dev` and include before/after screenshots for UI changes.
- Keep changes scoped to `/react/dosan` and small enough for quick review.

If you’re unsure what to change, ask:

- Should the slider animation go left-to-right or right-to-left?
- Are slide assets local (`/public/images`) or external URLs?

Thanks — request specific changes and I’ll implement them.

# AI Agent Instructions — dosan (Doosan Robotics sample)

Purpose

- Help AI agents make small, focused UI and content edits to this Vite + React + TypeScript app located at `react/dosan`.

Quick start (local)

- cd `react/dosan`
- npm install
- npm run dev — run the Vite dev server (hot reload)
- npm run build — production build

Big picture

- Single page app: `index.html` (importmap) -> `index.tsx` -> `App.tsx`.
- UI components in `components/` — small, stateless/presentational React function components (e.g. `Hero.tsx`, `UseCases.tsx`, `SocialMedia.tsx`).
- Types in `types.ts`
- Tailwind is used via CDN (see `index.html`), not a local Tailwind pipeline. Modify utility classes in JSX; avoid adding custom Tailwind config unless you add a build step.

Key patterns & files to edit

- Replace or extend `components/Hero.tsx` for a hero slider; if you add new files, import them in `App.tsx`.
- Data is usually static arrays inside components — if sharing, extract to a `data/` module and add types to `types.ts`.
- Static images currently use external URLs (Unsplash). To add local images, place them under `public/` and reference them by `/images/name.jpg`.

Env and build notes

- `vite.config.ts` reads `GEMINI_API_KEY` from `.env.local` and exposes it via define as `process.env.GEMINI_API_KEY`. Keep `.env.local` out of commits and set secrets locally.
- `index.html` has an importmap that points to CDN React & lucide-react — keep that if you rely on the CDN imports.

Debugging tips

- If React doesn't mount, confirm `index.tsx` mounts to `#root`.
- 404s for images mean `public/` path is wrong; test during dev with `npm run dev`.
- If adding new packages, update `package.json` and `npm install` inside `react/dosan`.

Hero slider specifics (example)

- Suggested strategy: add `components/HeroSlider.tsx`, keep the interface `Hero` export the same if you're swapping files to avoid changing `App.tsx` in other branches.
- Use `useState` for current index + `useEffect` for auto-advance, and CSS transform/translate (Tailwind classes + `style` prop) for left-to-right animation.
- Keep images accessible: either external URLs or `public/images/`. Prefer relative `/images/...` for bundled assets.

PR and testing guidance

- Keep changes small and isolated to `react/dosan/components` and `react/dosan/public` (if adding images).
- For UI change PRs, attach before/after screenshots and describe user impact.

Where to look next (examples)

- `index.html` — Tailwind CDN and importmap
- `index.tsx` — app mount
- `App.tsx` — layout and sections
- `components/*` — UI components to change
- `types.ts` — types for component props and data
- `vite.config.ts` — env handling

If you need clarification, ask for the specific component to modify and whether images should be local or remote.

# Copilot / AI Agent Instructions - Doosan Robotics (dosan)

This short guide helps AI agents make productive changes in the `dosan` sample app (Vite + React + TypeScript) inside `react/dosan`.

Overview

- This project is a single-page Vite React TypeScript app using CDN Tailwind and icon library `lucide-react`.
- Entry point: `index.html` -> `index.tsx` -> `App.tsx`.
- Components live under `components/`. Typical components: `Hero.tsx`, `UseCases.tsx`, `Clients.tsx`, `ProductLineup.tsx`, `SocialMedia.tsx`, `Navbar.tsx`, `Footer.tsx`.
- Type definitions are in `types.ts` (use them for shapes like `Product`, `UseCase`, `SocialPost`).
- Images are typically external (Unsplash). Keep changes minimal if converting to local assets (add to `/public` and reference as relative paths).

Run / Test / Build

- Develop locally inside the app folder:
  - cd `react/dosan`
  - npm install
  - npm run dev (Runs Vite dev server; hot reload)
- Build for production: `npm run build` (Vite)
- Serve preview: `npm run preview`

Important Patterns / Conventions

- Styling: Tailwind is loaded by CDN in `index.html` (no Tailwind config present). Use Tailwind utility classes in JSX.
  - Global CSS may be in `/index.css` if added; index.html currently references `/index.css` but file may be absent. Add it if needed and update `index.html`.
- Component structure: components are small and self-contained and usually export a default functional component.
  - Example: `components/Hero.tsx` is the hero section; update or replace it with a slider component as needed.
- Data: Many components include static arrays inside the component module. To share data, extract to `types.ts` and separate data files like `data/useCases.ts`.
- Images: URLs are mostly external (Unsplash). If adding a slider with local images, place them under `/public` and reference them as `/images/xyz.jpg`.
- Icons: `lucide-react` is used (already included as dependency).
- Accessibility: Buttons and interactive elements should be keyboard focusable; add aria labels where necessary.

Where to change for a hero slider

- Replace or extend `components/Hero.tsx` with a new `HeroSlider.tsx` in the `components` folder and import it from `App.tsx`.
- Approach: Implement left-to-right sliding with React state and CSS transitions.
  - Use `useState` for slide index, `useEffect` to auto-advance, and `transform: translateX(-N * width)` or use CSS `translateX`/`left` via a wrapper container.
  - Use Tailwind utility classes for sizing and add a transform style via inline `style` prop if dynamic.
  - Keep images referenced by URL or `/public` path.
- Example files to touch: `components/Hero.tsx`, `App.tsx` (to swap in the new hero), and optionally a new CSS file under `components/`.

Debugging / Common issues

- If React mount fails, check `index.tsx` for `document.getElementById('root')`.
- Missing `lucide-react` or React must match versions - use `package.json` in `react/dosan`.
- Tailwind via CDN has limited customizability compared to local build - prefer static Tailwind classes.
- Vite dev server errors: check console for missing import / path issues or `404` on assets (public path).

Testing / Linting

- No tests or linting setup present by default. If adding behavior with nontrivial logic, add unit tests with vitest or jest and commit tests with code changes.

PR / Commit guidance

- Keep changes isolated to the affected components under `react/dosan/components`.
- For UI changes, provide before/after screenshots (for maintainers).
- Keep changes small and test locally with `npm run dev`.

Common Quick Edits to Ask For

- Add Hero slider: Edit `components/Hero.tsx` or add `components/HeroSlider.tsx`, import into `App.tsx`, test with `npm run dev`.
- Switch images to local files: add under `public/images`, reference `/images/...` in JSX.
- Introduce state logic or data fetching: add TypeScript types to `types.ts` and extract static arrays into a `data/` module.

Files of interest (examples)

- `index.html` — CDN Tailwind, importmap and app entry.
- `index.tsx` — Mounts the app.
- `App.tsx` — Composes main sections.
- `components/*` — All UI sections; small and presentational.
- `types.ts` — Common types used across components.
- `package.json` — Scripts (`dev`, `build`, `preview`) and dependencies.
- `README.md` — Notes and dev instructions (may reference AI Studio key - not used in the current client-only app).

If unsure, follow these steps

1. Find the component to edit: `grep -R "Hero" -n` or open `App.tsx`.
2. Make minimal changes in `components/` and test via `npm run dev`.
3. If adding assets, place them in `/public` and reference from JSX.

If you find missing or inconsistent build steps / scripts, propose and add them for consistency.

Thanks — ask for clarification when the task affects multiple components or the build process.
