# Architecture

## Overview
Captive Path Website is a static marketing site built with **Astro 5** + **Tailwind CSS 4** and deployed to **Cloudflare Pages**. Interactive components (contact form) use React 19 as Astro islands.

## Structure
- **File-based routing**: Pages defined in `src/pages/` (Home, About, Process, Journal, Contact, Privacy, Terms, 404)
- **Component architecture**: Static `.astro` components for layout sections, React `.tsx` for interactive islands
- **Content collections**: Journal articles authored as Markdown in `src/content/journal/` with Zod schema validation
- **Cross-linking**: `RelatedReading.astro` component renders operator-curated related articles on every journal page; pillar interlinking between framework and supporting articles via inline markdown links
- **Design tokens**: Defined in `src/styles/global.css` via Tailwind `@theme`
- **Sitemap**: Auto-generated via `@astrojs/sitemap` with git-based `<lastmod>` timestamps (`execFileSync` in `astro.config.mjs`); 17 URLs including `/privacy/` and `/terms/`
- **Security headers**: HSTS, X-Frame-Options, CSP-Report-Only defined in `public/_headers`
- **Redirects**: `/sitemap.xml` 301 to `/sitemap-index.xml` via `public/_redirects`
- **Backend**: Cloudflare Pages Functions for contact form API (`functions/api/contact.ts`)
- **Database**: Cloudflare D1 for contact form submission storage
- **CI/CD**: GitHub Actions deploying to Cloudflare Pages

## Pages
| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.astro` | Homepage — hero, credibility strip, condensed sections, CTA |
| `/about/` | `src/pages/about.astro` | Full company info, founder section with photo and stats |
| `/process/` | `src/pages/process.astro` | How it works (expanded), evaluation sections, engagement model, FAQ |
| `/journal/` | `src/pages/journal/[...page].astro` | Article listing with category filters, Blog JSON-LD (page 1) |
| `/journal/2/` | `src/pages/journal/[...page].astro` | Paginated journal listing with unique description, `rel=prev` |
| `/journal/[id]/` | `src/pages/journal/[id].astro` | Individual article pages with RelatedReading component |
| `/contact/` | `src/pages/contact.astro` | Contact form (React island) + sidebar info |
| `/privacy/` | `src/pages/privacy.astro` | Privacy Policy (CCPA/CPRA compliant) |
| `/terms/` | `src/pages/terms.astro` | Terms of Service |
| (404) | `src/pages/404.astro` | Custom 404 page with `noindex`, links to `/` and `/journal/` |

## Key Decisions
See `/docs/architecture/adr/` for architectural decision records.
