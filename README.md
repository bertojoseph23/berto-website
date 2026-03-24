# berto-website

Personal portfolio site for Berto Joseph — cloud & DevSecOps engineer, AI founder.

**Live repo:** [github.com/bertojoseph23/berto-website](https://github.com/bertojoseph23/berto-website)

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 |
| 3D | React Three Fiber + Three.js |
| Styling | Tailwind CSS 3 + shadcn/ui |
| Analytics | Vercel Analytics |
| Language | TypeScript |

---

## Design Direction

Elegant sci-fi aesthetic. Deep navy-black background, electric cyan (`#00D4FF`) as primary accent, warm gold (`#C9A84C`) for secondary highlights. 3D planet scene with orbital rings. Clean typography, generous whitespace, restrained glow effects.

---

## Site Sections

| Section | Content |
|---|---|
| **Hero** | Name, title (Cloud Engineer + AI Founder), tagline, 3D planet background |
| **About** | Real bio, technical skills, certifications, education, recognition |
| **Ventures** | OutaHere (travel AI), Levelon (career automation), Vaultis (blockchain treasury) — each with status, description, tech stack |
| **Contact** | Email + GitHub as clickable cards |

---

## Current State

- **Branch:** `revamp/elegant-scifi`
- **Status:** Core revamp complete — real content, new color palette, updated 3D scene
- **Builds:** Clean (`pnpm build` passes)

### Done

- [x] Initialized repo and pushed to GitHub
- [x] Removed unused mobile packages (expo, react-native)
- [x] Upgraded Next.js 15.2.6 → 16.2.1 (security fix)
- [x] Fixed CSS parsing error for Turbopack compatibility
- [x] Replaced all placeholder content with real info from BossmanHq
- [x] New color palette: dark red → cyan + gold
- [x] Updated 3D planet scene to match new palette
- [x] Replaced fake contact form with real contact cards
- [x] Fixed metadata (title, description)

### Next

- [ ] Visual polish pass (run dev, review in browser)
- [ ] Mobile responsiveness check
- [ ] Deploy to Vercel
- [ ] Custom domain setup
- [ ] Open Graph / social preview tags

---

## Running Locally

```bash
pnpm install
pnpm dev
```

Opens at [localhost:3000](http://localhost:3000).
