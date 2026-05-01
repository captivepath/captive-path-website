# Sprint S3 — SEO Audit Implementation

## Overview
Implementation of a comprehensive SEO audit across captivepath.com, covering 15 tasks (T-101 through T-209) organized in two phases. The audit addressed HTTP semantics, sitemap improvements, internal link canonicalization, cross-linking, structured data enhancements, content expansion and security headers.

## Status: Complete (PRs #25, #26, #27 merged)

**Implementation PR:** https://github.com/captivepath/captive-path-website/pull/25 (`devin/1777666452-seo-audit-implementation`)
**Documentation PR:** https://github.com/captivepath/captive-path-website/pull/26 (`devin/1777667565-post-seo-docs`)
**Follow-Up Fixes PR:** https://github.com/captivepath/captive-path-website/pull/27 (`devin/1777669540-seo-followup-fixes`)

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

## Follow-Up Fixes (PR #27)

Five issues identified during post-deployment verification of PR #25:

1. **Sitemap lastmod (T-102)**: CI used `fetch-depth: 1` (shallow clone) causing all `<lastmod>` values to be the build timestamp. Fixed by adding `fetch-depth: 0` to `.github/workflows/deploy.yml` checkout step.
2. **`/journal/` rel=next trailing slash (T-207)**: `<link rel="next">` href was missing trailing slash (`/journal/2` instead of `/journal/2/`), causing a 308 redirect on crawler follow. Fixed in `src/pages/journal/[...page].astro`.
3. **`/journal/2/` title em-dash (T-207)**: Page title contained `Captive Path Journal — Page 2`. Replaced em-dash with colon. Also fixed `og:image:alt` on journal listing.
4. **`/process/` H2 sections verbatim (T-208)**: Body paragraphs in "What evaluation actually looks like" and "Where this process tends to break" were paraphrased. Replaced with exact verbatim text from the implementation brief.
5. **Sitewide em-dash sweep**: Removed all visible em-dashes (U+2014) from body copy, JSON-LD text fields, `og:image:alt` attributes, and HTML comments across 17 files. Replacements used ellipses or periods. JSON-LD text updated to match visible body text. Zero em-dashes in any rendered HTML after build.

### Files Modified (PR #27)
- `.github/workflows/deploy.yml` — `fetch-depth: 0`
- `src/layouts/Layout.astro` — HTML comment em-dash
- `src/pages/index.astro` — FAQ JSON-LD + visible FAQ answers + `ogImageAlt`
- `src/pages/contact.astro` — hero paragraph + `ogImageAlt`
- `src/pages/process.astro` — verbatim H2 sections + FAQ JSON-LD + visible FAQ + `ogImageAlt`
- `src/pages/about.astro` — `ogImageAlt`
- `src/pages/journal/[...page].astro` — rel=next trailing slash + title colon + `ogImageAlt`
- `src/pages/journal/[id].astro` — fallback `ogImageAlt` template
- All 9 `src/content/journal/*.md` — `og_image_alt` frontmatter + body em-dashes (3 articles)

---

## Voice and Copy Rules Applied
- No em dashes anywhere on the site (ellipses or periods used where pause needed); enforced sitewide in PR #27
- No comma after the word "and"
- "Captive Path" used by name, not first-person plural
- Operator copy is final: do not draft, paraphrase, or substitute (enforced for `/process/` H2 sections in PR #27)

## Remaining Follow-Up Items
- Promote CSP from report-only to enforced after monitoring period with zero violations
- Monitor `rel=prev`/`rel=next` signals in Search Console
- Validate all JSON-LD via Schema Markup Validator after production deploy
- Monitor sitemap `<lastmod>` diversity as individual pages are updated in future sessions
