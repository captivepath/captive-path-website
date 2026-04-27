# Captive Path Website — Project Status

## Project
**Captive Path Website** — Premium marketing site for Captive Path, an independent venture platform for what's worth building.

## Current State
**Post-S2 — Performance optimization and content expansion complete**

### Last Session (2026-04-27 — Session 8)
- **Self-hosted fonts**: Replaced Google Fonts CDN with self-hosted variable woff2 files, eliminating ~750ms render-blocking external request chain
- **Font preloading**: `<link rel="preload">` for Space Grotesk and Inter latin subsets
- **Deferred hydration**: ContactForm changed from `client:load` to `client:visible`
- **Astro prefetch**: Hover-based page prefetching enabled
- **Image optimizations**: `fetchpriority="high"` on nav logo, `decoding="async"` on lazy images

### Previous Sessions
- Session 8: Performance optimization — self-hosted fonts, preloading, deferred hydration, prefetch (PR #22)
- Session 7: 6 new journal articles, OG images, pagination, founder section updates, filter fixes (PRs #17–#21)
- Session 6: Complete SEO/AEO pass, file uploads, Turnstile, 3 articles published (PR #16)
- Session 5: Astro migration, domain setup (captivepath.com), black logo swap, white favicon, spacing fixes
- Session 4: Highlight CSS, stat boxes, borders, copy cleanup, founder section redesign
- Session 3: Teal highlights, credibility cards, contact form API, photo crop, logo/favicon
- Session 2: Typography to Space Grotesk + Inter, design enhancements, multi-page architecture, founder photo, journal page
- Session 1: Repository created, design system, full homepage, CI/CD pipeline, Cloudflare Pages deployment

### Site Stats
- **Pages:** 7 (Home, About, Process, Journal, Contact, Privacy, Terms)
- **Journal articles:** 9 published
- **Fonts:** Space Grotesk (display) + Inter (body) — self-hosted variable woff2

### Upcoming
- Additional journal articles per editorial system
- Ongoing Web Vitals monitoring and optimization
- www.captivepath.com → captivepath.com 301 redirect rule (manual Cloudflare dashboard step)

### Deployment
- **Production:** https://captivepath.com (custom domain, SSL active)
- **CI/CD:** GitHub Actions → Cloudflare Pages (on push to main + PR preview deploys)

### Last Updated
2026-04-27

### Sprint Documents
- [Sprint S2 — SEO/AEO & Contact Form Enhancements](sprints/sprint-s2-seo-aeo-complete-pass.md)
- [Sprint S0 — Design System & Homepage Build](sprints/sprint-s0-design-system.md)
