# Architecture

## Overview
Captive Path Website is a static marketing site built with **Astro 5** + **Tailwind CSS 4** and deployed to **Cloudflare Pages**. Interactive components (contact form) use React 19 as Astro islands.

## Structure
- **File-based routing**: Pages defined in `src/pages/` (Home, About, Process, Journal, Contact, Privacy, Terms)
- **Component architecture**: Static `.astro` components for layout sections, React `.tsx` for interactive islands (`client:visible` for deferred hydration)
- **Content collections**: Journal articles authored as Markdown in `src/content/journal/` with Zod schema validation
- **Design tokens**: Defined in `src/styles/global.css` via Tailwind `@theme`
- **Backend**: Cloudflare Pages Functions for contact form API (`functions/api/contact.ts`)
- **Database**: Cloudflare D1 for contact form submission storage
- **Font delivery**: Self-hosted variable woff2 fonts (Space Grotesk + Inter) in `public/fonts/`, preloaded in the HTML head, with unicode-range subsetting
- **Prefetch**: Astro hover-based prefetching for faster page-to-page navigation
- **CI/CD**: GitHub Actions deploying to Cloudflare Pages

## Pages
| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.astro` | Homepage — hero, credibility strip, condensed sections, CTA |
| `/about` | `src/pages/about.astro` | Full company info, founder section with photo and stats |
| `/process` | `src/pages/process.astro` | How it works, focus areas, engagement model |
| `/journal` | `src/pages/journal/index.astro` | Article listing with category filters |
| `/journal/[id]` | `src/pages/journal/[id].astro` | Individual article pages |
| `/contact` | `src/pages/contact.astro` | Contact form (React island) + sidebar info |
| `/privacy` | `src/pages/privacy.astro` | Privacy Policy (CCPA/CPRA compliant) |
| `/terms` | `src/pages/terms.astro` | Terms of Service |

## Key Decisions
See `/docs/architecture/adr/` for architectural decision records.
