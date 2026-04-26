# Sprint S2 — Complete SEO/AEO Implementation & Contact Form Enhancements

## Overview
Full SEO, AEO, and content overhaul across the entire captivepath.com website, plus contact form enhancements including file upload and Cloudflare Turnstile human verification.

## Status: In Review (PR #16)

**Branch:** `devin/1777212883-seo-aeo-complete-pass`
**PR:** https://github.com/captivepath/captive-path-website/pull/16
**Preview:** https://devin-1777212883-seo-aeo-com.captive-path-website.pages.dev

---

## Deliverables

### SEO Technical Infrastructure
- `robots.txt` created with standard allow-all and sitemap reference
- Self-referencing canonical tags on every page (dynamic via Layout)
- `noindex, follow` on `/privacy/` and `/terms/`; both excluded from sitemap
- Sitemap updated to include all 3 published journal article URLs (8 URLs total)

### Metadata (Titles, Descriptions, OG, Twitter)
- Unique `<title>` and `meta description` for all 7 pages + 3 articles
- Full Open Graph tags with per-page 1200x630 PNG images at `/og/`
- `og:type` correctly set to `article` for journal pages, `website` for all others
- Twitter card metadata: `summary_large_image` with per-page image

### Structured Data (JSON-LD)
- **Homepage**: Organization + WebSite + FAQPage
- **About**: AboutPage + Person (Zach Warshawsky)
- **Process**: Service (with OfferCatalog) + FAQPage
- **Contact**: ContactPage
- **Articles**: Article schema on each of the 3 journal posts

### Content Additions
- **Homepage**: Entity clarifier block + 5-item FAQ section
- **About**: Expanded founder entity block with bio, stats, quote, internal links
- **Process**: 4-item FAQ section after engagement model
- **Contact**: Enhanced "What to include" section with structured guidance

### Journal Articles Published
- 3 articles published with full metadata and thumbnail cards on index
- Article pages include author line, back-to-journal link, internal links
- `@tailwindcss/typography` installed for proper prose rendering (headings, lists, blockquotes)

### Performance & AEO
- Logo preload, `width`/`height` on all `<img>` tags
- Zach Warshawsky photo converted to WebP
- `llms.txt` created for AI crawlers
- Contextual internal links across all pages

### Contact Form — File Upload Feature
- Drag-and-drop file upload zone below message field (optional)
- Multi-file support, any file type, 500 MB per file limit
- Files upload to R2 (`captive-path-uploads` bucket) immediately with visual status
- File links stored in D1 alongside contact submission data (`file_urls` column)
- File links included in Postmark notification email
- Security hardening: attachment-only download, Content-Type whitelist, `nosniff` header, path prefix restriction, filename escaping (control chars, backslashes, quotes)
- UUID-based R2 keys to prevent collisions
- Server-side file URL validation to prevent phishing via fabricated links

### Contact Form — Cloudflare Turnstile
- Managed mode (lightweight, auto-verifies most users)
- Frontend: Turnstile widget renders in form, token required before submit
- Backend: Server-side token validation via Turnstile siteverify API
- Graceful degradation: if `TURNSTILE_SECRET_KEY` env var is not set, verification is skipped

### Infrastructure Changes
- R2 bucket `captive-path-uploads` created and bound (`UPLOADS`)
- D1 migration `0002_add_file_urls.sql` executed
- New API endpoints: `POST /api/upload`, `GET /api/files/[[path]]`
- New env vars needed: `PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`

### Documentation
- `docs/captivepath-journal-editorial-system.md` — Journal editorial operating system reference

---

## Files Changed
- `astro.config.mjs` — sitemap exclusions
- `functions/api/contact.ts` — file handling, Turnstile validation
- `functions/api/upload.ts` — new R2 upload endpoint
- `functions/api/files/[[path]].ts` — new file serving endpoint
- `migrations/0002_add_file_urls.sql` — file_urls column
- `package.json` / `package-lock.json` — typography plugin
- `public/llms.txt` — AI crawler reference
- `public/robots.txt` — search engine directives
- `public/og/` — OG images for all pages and articles
- `src/components/ContactForm.tsx` — file upload + Turnstile
- `src/components/Footer.astro` — internal links
- `src/components/Nav.astro` — navigation updates
- `src/components/WhyZach.astro` — expanded founder bio
- `src/content.config.ts` — schema updates
- `src/content/journal/*.md` — 3 articles published
- `src/layouts/Layout.astro` — OG type prop, head slot
- `src/pages/*.astro` — metadata, structured data, content blocks
- `src/pages/journal/[id].astro` — article template
- `src/pages/journal/index.astro` — thumbnail cards
- `src/styles/global.css` — typography plugin + prose overrides
- `wrangler.toml` — R2 bucket binding
- `docs/captivepath-journal-editorial-system.md` — editorial reference
