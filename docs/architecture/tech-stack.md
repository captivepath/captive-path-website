# Tech Stack

## Frontend
- **Framework:** Astro 5 (static site generator)
- **Interactive Components:** React 19 via `@astrojs/react` (used for ContactForm as a client island)
- **Styling:** Tailwind CSS 4 via `@tailwindcss/vite`
- **Typography:** Space Grotesk (display) + Inter (body) — self-hosted variable woff2 with `font-display: swap` and unicode-range subsetting (latin + latin-ext)
- **Motion:** CSS transitions + Intersection Observer for scroll reveal animations
- **Content:** Astro content collections (Markdown files with Zod schema validation)
- **Sitemap:** Auto-generated via `@astrojs/sitemap`
- **Prefetch:** Astro built-in prefetch with hover strategy for faster page navigation

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
| `astro.config.mjs` | Astro configuration with React + Tailwind + Sitemap integrations |
| `src/layouts/Layout.astro` | Master layout (head meta, nav, footer, global scripts) |
| `src/pages/*.astro` | File-based routing (7 pages) |
| `src/components/*.astro` | Static Astro components |
| `src/components/ContactForm.tsx` | React island (interactive form with `client:visible`) |
| `src/content.config.ts` | Content collections schema for Journal articles |
| `src/content/journal/*.md` | Markdown articles |
| `public/fonts/` | Self-hosted variable woff2 font files (Space Grotesk + Inter) |
| `src/styles/global.css` | Design system tokens, `@font-face` declarations, and animation CSS |
| `functions/api/contact.ts` | Cloudflare Pages Function (Postmark + D1) |
| `wrangler.toml` | Cloudflare D1 binding and env config |
