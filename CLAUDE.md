# Berto Portfolio — CLAUDE.md

## Commands

```bash
pnpm dev        # Dev server (localhost:3000)
pnpm build      # Production build
pnpm start      # Serve production build
pnpm lint       # ESLint
```

Package manager: **pnpm**. Do not use npm or yarn.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS v3** — all styling via utility classes + CSS custom properties
- **shadcn/ui** — component library at `components/ui/` (Radix UI primitives + CVA)
- **Three.js / @react-three/fiber** — 3D scene in `components/Scene.tsx` + `components/Planet.tsx`
- **Spline** (`@splinetool/react-spline`) — 3D asset runtime
- **Vercel Analytics** — passive, no config needed
- **Geist / Geist Mono** — fonts via `next/font/google`

## Directory Layout

```
app/
  layout.tsx          # Root layout — metadata, fonts, Analytics
  page.tsx            # Single-page app entry ("use client"), all sections composed here
  globals.css         # CSS custom properties, Tailwind base, all custom component classes

components/
  ui/                 # shadcn/ui primitives — don't edit directly
  Scene.tsx           # R3F Canvas scene (3D background)
  Planet.tsx          # 3D planet mesh
  Header.tsx          # Fixed header (hides on scroll)
  Footer.tsx
  LoadingScreen.tsx
  ScrollArrow.tsx
  ScrollPrompt.tsx
  QuoteBox.tsx
  AboutSection.tsx
  VenturesSection.tsx
  ContactSection.tsx
  theme-provider.tsx

lib/
  utils.ts            # cn() helper (clsx + tailwind-merge)

hooks/
  use-mobile.ts
  use-toast.ts
```

## Architecture Notes

- **Single page** — all sections live in `app/page.tsx`, composed top-to-bottom. No routing needed.
- The 3D Canvas is `position: fixed; z-index: 0`. Content layers sit above it (`z-10`+).
- Nebula overlays are pure CSS divs (`.nebula-*` classes) in `globals.css` — animated via CSS keyframes.
- Scroll-driven effects (scale, header hide/show) are handled via `useEffect` + `window.scroll` listener in `page.tsx`.
- Reveal animations use `data-reveal` attributes + an `IntersectionObserver` in `page.tsx` that adds `is-visible` class.

## Design Tokens

Defined in `globals.css` `:root` — use these, don't hardcode colors:

| Token | Value | Use |
|---|---|---|
| `--cyan` | `#00D4FF` | Primary accent |
| `--gold` | `#C9A84C` | Secondary accent |
| `--deep-bg` | `#060A14` | Page background |

Tailwind colors map through `hsl(var(--*))` tokens in `tailwind.config.ts`.

## Conventions

- **All page-level code is `"use client"`** — this is a visual/interactive site with no SSR data needs.
- Custom CSS classes go in `globals.css` under `@layer components`. Don't use inline `style` for design — use CSS vars or Tailwind.
- `cn()` from `lib/utils.ts` for conditional classNames — always use it, never string concatenation.
- shadcn components are in `components/ui/` — add new ones with `npx shadcn@latest add <component>`.
- `next.config.mjs` has `typescript.ignoreBuildErrors: true` — TypeScript errors won't block builds but should still be fixed.

## Gotchas

- The 3D canvas (`@react-three/fiber`) must stay inside a `<Suspense>` boundary — missing this causes hydration errors.
- `images.unoptimized: true` in next.config — Next Image optimization is off. Fine for a portfolio, just be aware.
- No test suite configured. Lint is the only automated check.
- The `node_modules` uses pnpm's virtual store (`.pnpm/`). Don't commit the lockfile changes unless intentional.
