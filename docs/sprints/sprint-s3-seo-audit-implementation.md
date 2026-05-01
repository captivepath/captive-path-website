# Sprint S3 — SEO Audit Implementation

## Overview
Implementation of a comprehensive SEO audit across captivepath.com, covering 15 tasks (T-101 through T-209) organized in two phases. The audit addressed HTTP semantics, sitemap improvements, internal link canonicalization, cross-linking, structured data enhancements, content expansion and security headers.

## Status: Deployed to Production (PR #25 merged)

**Branch:** `devin/1777666452-seo-audit-implementation`
**PR:** https://github.com/captivepath/captive-path-website/pull/25

---

## Deliverables

### Phase 1 — Critical SEO Corrections

#### T-101: Custom 404 Page
- Created `src/pages/404.astro` with `noindex` meta, links to `/` and `/journal/`
- Declarative copy: "The page you are looking for does not exist."

#### T-102: Sitemap Lastmod from Git History
- Added `getLastmod()` function in `astro.config.mjs` using `execFileSync` to resolve git commit timestamps
- File-set scoping: each route maps to its primary source files (shared chrome excluded)
- Filesystem mtime fallback when git history is unavailable
- Never uses build timestamp

#### T-103: Sitemap Alias
- Added `public/_redirects` with `/sitemap.xml /sitemap-index.xml 301`

#### T-104: Privacy and Terms in Sitemap
- Removed `noindex` from `/privacy/` and `/terms/` pages
- Both pages now included in sitemap (17 URLs total)

#### T-105: Trailing-Slash Canonicalization
- Updated all internal links across Nav, Footer, Hero, ClosingCTA, WhatWeDo, HowItWorks, article cards, pagination, and inline links to use trailing-slash form
- Updated `currentPath` computation in `Layout.astro` to preserve trailing slash for nav active state matching

### Phase 2 — Structural & Template Improvements

#### T-201: Related Reading Component
- Created `src/components/RelatedReading.astro` with operator-curated 3-link mapping
- Rendered on all 9 article pages after article content, before closing CTA

#### T-202: Pillar Interlinking
- Framework article: added inline links to 4 supporting articles (asymmetry, problem-quality, sequencing, systems)
- Each supporting article: added one inline link back to framework article

#### T-203: Conversion Links on Comparison Article
- Added inline link to `/process/` in article body
- Added inline link to `/contact/` near article end

#### T-204: Blog Schema on Journal
- Added Blog JSON-LD on `/journal/` page 1 only
- Includes blogPost array referencing all published articles by `@id`

#### T-205: AboutPage Schema Enhancement
- Added `mainEntity` reference to Person `@id` in existing AboutPage JSON-LD

#### T-206: FAQPage on Comparison Article
- Added visible FAQ section with 4 operator-approved Q/A pairs (verbatim text)
- Added FAQPage JSON-LD with matching Question/Answer schema

#### T-207: Journal Page 2 Differentiation
- Set unique meta description for `/journal/2/`
- Added `rel="prev"` on `/journal/2/` pointing to `/journal/`
- Added `rel="next"` on `/journal/` pointing to `/journal/2/`

#### T-208: Process Page Content Expansion
- Added `expanded` prop to `HowItWorks` component for richer phase descriptions on `/process/`
- Inserted two new H2 sections: "What evaluation actually looks like" and "Where this process tends to break"
- 5 inline article links in new content
- Homepage HowItWorks unchanged

#### T-209: Security Headers
- Created `public/_headers` with:
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Frame-Options: SAMEORIGIN`
  - `Content-Security-Policy-Report-Only` with inventoried third-party origins
- CSP intentionally in report-only mode (not enforced)

---

## Third-Party Origin Inventory

| Origin | Purpose | CSP Directive |
|--------|---------|---------------|
| `https://challenges.cloudflare.com` | Turnstile CAPTCHA | script-src, frame-src, connect-src |
| `https://static.cloudflareinsights.com` | Cloudflare Web Analytics | script-src |
| `https://cloudflareinsights.com` | Cloudflare Analytics beacon | connect-src |
| `https://fonts.googleapis.com` | Google Fonts stylesheets | style-src |
| `https://fonts.gstatic.com` | Google Fonts files | font-src |

---

## Files Changed

### New Files
- `src/pages/404.astro` — custom 404 page
- `src/components/RelatedReading.astro` — related reading cross-link component
- `public/_headers` — security headers (HSTS, X-Frame-Options, CSP-Report-Only)
- `public/_redirects` — sitemap.xml 301 redirect

### Modified Files
- `astro.config.mjs` — sitemap lastmod via `execFileSync`, privacy/terms filter removed
- `src/layouts/Layout.astro` — trailing-slash-preserving `currentPath`
- `src/components/HowItWorks.astro` — `expanded` prop for richer phase descriptions
- `src/components/Nav.astro` — trailing-slash hrefs
- `src/components/Footer.astro` — trailing-slash hrefs
- `src/components/Hero.astro` — trailing-slash hrefs
- `src/components/ClosingCTA.astro` — trailing-slash hrefs
- `src/components/WhatWeDo.astro` — trailing-slash hrefs
- `src/pages/process.astro` — two new H2 sections, expanded phase descriptions
- `src/pages/about.astro` — AboutPage schema mainEntity, trailing-slash links
- `src/pages/journal/[...page].astro` — Blog schema, unique page 2 description, rel next/prev
- `src/pages/journal/[id].astro` — RelatedReading, FAQPage schema for comparison article
- `src/pages/index.astro` — trailing-slash links
- `src/pages/privacy.astro` — noindex removed, trailing-slash links
- `src/pages/terms.astro` — noindex removed, trailing-slash links
- `src/content/journal/the-framework-for-evaluating-venture-stage-ideas.md` — 4 inline links to supporting articles
- `src/content/journal/asymmetry-is-not-a-buzzword-what-it-should-mean-in-practice.md` — back-link to framework
- `src/content/journal/problem-quality-the-difference-between-an-annoyance-and-a-venture-grade-opportunity.md` — back-link to framework
- `src/content/journal/sequencing-work-what-to-solve-first-in-a-new-venture.md` — back-link to framework
- `src/content/journal/systems-over-hustle-why-infrastructure-decides-outcomes.md` — back-link to framework
- `src/content/journal/venture-platform-vs-venture-studio-what-actually-changes-operationally.md` — conversion links, visible FAQ

---

## Voice and Copy Rules Applied
- No em dashes in new copy (ellipses used where pause needed)
- No comma after the word "and"
- "Captive Path" used by name, not first-person plural
- Existing copy outside explicit scope preserved unchanged

## Follow-Up Items
- Promote CSP from report-only to enforced after monitoring period with zero violations
- Monitor `rel=prev`/`rel=next` signals in Search Console
- Validate all JSON-LD via Schema Markup Validator after production deploy
