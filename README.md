# Mylo's Creamery & Cafe — Website

Marketing site for **Mylo's**: boba teas, artisan ice cream, locations, and brand story. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, menu previews, social CTA |
| `/boba` | Full boba menu with customization |
| `/ice-cream` | Full ice cream menu and flavors |
| `/about` | Brand story |
| `/find-us` | Store locations and directions |
| `/privacy` | Privacy policy |
| `/terms` | Terms of use |

## Quick start

1. Copy environment defaults:

   ```bash
   cp .env.example .env
   ```

2. Install dependencies (see **Standalone setup** if this folder was exported from Replit).

3. Run the dev server:

   ```bash
   npm run dev
   ```

   Opens at `http://localhost:5173` by default (`PORT` and `BASE_PATH` in `.env` are optional).

4. Production build:

   ```bash
   npm run build
   npm run serve
   ```

## Before launch — checklist

Update these in **`src/lib/site-config.ts`**:

- [ ] **Locations** — real addresses, hours, phones, Google Maps URLs (currently sample “Metropolis” data)
- [ ] **Images** — replace Unsplash URLs in `images` with your photos in `public/images/`, or point `images.*` to those files
- [ ] **Logo** — replace `public/logo.svg` with your brand asset (or add `mylos_logo_nobg.png` and update `Logo.tsx`)

Optional in **`.env`**:

- [ ] `VITE_INSTAGRAM_URL` — Instagram profile URL (buttons hidden until set)
- [ ] `VITE_X_URL` — X / Twitter profile URL

Menu pricing and items live in **`src/lib/menu-data.ts`** — edit once; Home and menu pages stay in sync.

## Project structure

```
src/
  lib/
    site-config.ts   # Business info, locations, image URLs, social
    menu-data.ts     # Shared menu / pricing data
  components/
    brand/Logo.tsx
    layout/          # Navbar, Footer, SocialLinks, LegalPage
  pages/             # Route components
public/
  logo.svg           # Wordmark (replace with brand file)
  og-image.svg       # Social preview image
  favicon.svg
```

## Standalone setup

This repo may have been copied from a **Replit monorepo**. If `npm install` fails on `catalog:` or `workspace:*` dependencies, either:

- Open the full monorepo and run from the workspace root, or
- Replace `package.json` devDependencies with pinned npm versions (React 19, Vite 6, Tailwind 4, etc.) and remove `@workspace/*` / `catalog:` entries.

Required runtime packages include: `react`, `react-dom`, `wouter`, `framer-motion`, `lucide-react`, `react-icons`, and the Radix UI packages referenced under `src/components/ui/` (only a subset may be needed if you prune unused UI components).

## What was tied up

| Issue | Resolution |
|-------|------------|
| Missing `@assets` / `attached_assets` images | Central `images` in `site-config.ts` + working placeholders |
| Footer Privacy/Terms 404 | Added `/privacy` and `/terms` routes |
| Social links `href="#"` | `SocialLinks` + env-based URLs |
| Duplicate menu data across pages | Single `menu-data.ts` |
| Generic 404 page | Branded 404 with nav and footer |
| Replit placeholder meta tags | Updated `index.html` SEO / OG tags |
| `PORT` / `BASE_PATH` required to run | Sensible defaults in `vite.config.ts` |
| Unused React Query boilerplate | Removed from `App.tsx` |
| Sample location data | Documented; editable in `site-config.ts` |

## Scripts

- `npm run dev` — development server
- `npm run build` — production build to `dist/`
- `npm run serve` — preview production build
- `npm run typecheck` — TypeScript check
