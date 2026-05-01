# Tech Stack

## Frontend
- **Framework:** Astro 5 (static site generator)
- **Interactive Components:** React 19 via `@astrojs/react` (used for ContactForm as a client island)
- **Styling:** Tailwind CSS 4 via `@tailwindcss/vite`
- **Typography:** Space Grotesk (display) + Inter (body) via Google Fonts
- **Motion:** CSS transitions + Intersection Observer for scroll reveal animations
- **Content:** Astro content collections (Markdown files with Zod schema validation)
- **Sitemap:** Auto-generated via `@astrojs/sitemap` with git-based `<lastmod>` timestamps and file-set scoping

## Backend
- **Contact Form API:** Cloudflare Pages Function (`functions/api/contact.ts`)
- **Email:** Postmark API (transactional email to zach@captivepath.com)
- **Database:** Cloudflare D1 (serverless SQLite) — `captive-path-contacts`

## Infrastructure
- **Hosting:** Cloudflare Pages (static site + Functions)
- **CI/CD:** GitHub Actions → Cloudflare Pages deploy (push to main + PR preview deploys)
- **Production Domain:** captivepath.com (CNAME → captive-path-website.pages.dev)
- **Preview Domain:** captive-path-website.pages.dev
- **DNS:** Cloudflare (zone managed)

## Environment Variables
| Variable | Purpose |
|---|---|
| `CF_API_TOKEN` | Cloudflare API token for Pages deployment + DNS |
| `CF_ACCOUNT_ID` | Cloudflare account ID |
| `POSTMARK_API_TOKEN` | Postmark API token for contact form email |

## Design Tokens
Defined in `src/styles/global.css` via Tailwind @theme:
- Color palette: warm stone neutrals (FAF8F5 bg), deep graphite (1E1E1E text), dark teal accent (#145250 / #1A6B68)
- Typography scale: display (Space Grotesk), body (Inter)
- Spacing: 4px grid system
- Border radius, shadows, transitions

## Key Files
| File | Purpose |
|---|---|
| `astro.config.mjs` | Astro configuration with React + Tailwind + Sitemap integrations; sitemap `<lastmod>` via `execFileSync` |
| `src/layouts/Layout.astro` | Master layout (head meta, nav, footer, global scripts, JSON-LD injection) |
| `src/pages/*.astro` | File-based routing (8 pages + 404) |
| `src/pages/404.astro` | Custom 404 page with `noindex` and internal links |
| `src/components/*.astro` | Static Astro components |
| `src/components/RelatedReading.astro` | Operator-curated related articles (3-link map per article) |
| `src/components/HowItWorks.astro` | Process phases with optional `expanded` prop for richer descriptions |
| `src/components/ContactForm.tsx` | React island (interactive form with `client:load`) |
| `src/content.config.ts` | Content collections schema for Journal articles |
| `src/content/journal/*.md` | Markdown articles (9 published) with inline cross-links |
| `src/styles/global.css` | Design system tokens and animation CSS |
| `public/_headers` | Security headers: HSTS, X-Frame-Options, CSP-Report-Only |
| `public/_redirects` | URL redirects: `/sitemap.xml` 301 to `/sitemap-index.xml` |
| `functions/api/contact.ts` | Cloudflare Pages Function (Postmark + D1) |
| `wrangler.toml` | Cloudflare D1 binding and env config |
