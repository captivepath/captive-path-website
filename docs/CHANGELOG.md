# Changelog

## 2026-04-26 (Session 6 — Complete SEO/AEO Pass & Contact Form Enhancements)

### Added
- **robots.txt**: Standard allow-all with sitemap reference
- **Canonical tags**: Self-referencing on every page (dynamic via Layout)
- **Meta tags**: Unique `<title>` and `meta description` for all 10 pages
- **Open Graph**: Per-page 1200x630 PNG images, titles, descriptions, URLs
- **Twitter Cards**: `summary_large_image` with per-page images
- **JSON-LD structured data**: Organization, WebSite, FAQPage (home + process), AboutPage, Person, Service, ContactPage, Article (x3)
- **FAQ sections**: 5-item FAQ on homepage, 4-item FAQ on process page
- **Entity clarifier block**: Homepage positioning statement
- **Expanded founder bio**: Stats, quote, and internal links on about page
- **3 journal articles published**: evaluating-venture-ideas, incubation-model, systems-over-hustle
- **Article prose styling**: `@tailwindcss/typography` with custom overrides for headings, lists, blockquotes
- **llms.txt**: AI crawler reference file
- **Contact form file uploads**: Drag-and-drop zone, R2 storage (`captive-path-uploads`), 500 MB limit, multi-file, visual status indicators
- **File serving endpoint**: `GET /api/files/[[path]]` with Content-Type whitelist and security headers
- **Upload endpoint**: `POST /api/upload` with UUID-based keys
- **D1 migration**: `0002_add_file_urls.sql` adding file_urls column to contacts
- **Cloudflare Turnstile**: Managed-mode human verification on contact form (frontend + server-side validation)
- **Layout head slot**: For page-specific script injection
- **Journal editorial system doc**: `docs/captivepath-journal-editorial-system.md`
- **Sprint S2 documentation**: Sprint notes, updated LATEST.md and CHANGELOG.md

### Changed
- Sitemap: Now includes 3 journal article URLs (8 URLs total); privacy/terms excluded
- `og:type` correctly set to `article` for journal pages
- Contact form completely rewritten with file upload + Turnstile integration
- Contact API: accepts file metadata, validates URLs, includes file links in email
- Layout.astro: added `ogType` prop, `noindex` prop, head slot
- Footer and Nav: enhanced internal linking
- Zach Warshawsky photo converted to WebP
- Logo preload added, width/height on all images

### Security
- Content-Disposition: `attachment` (prevents XSS via HTML uploads)
- `X-Content-Type-Options: nosniff` on file responses
- Content-Type whitelist (safe types only, SVG excluded)
- File path restricted to `contact-uploads/` prefix
- Filename escaping: control characters, backslashes, double quotes
- UUID in R2 keys prevents key collisions
- Server-side URL validation prevents phishing via fabricated file links
- Turnstile token validation on contact form submission

## 2026-04-25 (Session 5 — Astro Migration & Production Launch)

### Added
- **Astro 5 migration**: Full site migrated from React/Vite SPA to Astro static site generator
- Astro content collections for Journal (Markdown-based articles with Zod schema validation)
- `@astrojs/react` integration for interactive components (ContactForm as React island with `client:load`)
- `@astrojs/sitemap` integration for auto-generated sitemap
- File-based routing replacing React Router (7 pages: Home, About, Process, Journal, Contact, Privacy, Terms)
- Global IntersectionObserver script in Layout.astro replacing React `useReveal` hook
- **Production domain**: captivepath.com pointed to Cloudflare Pages via CNAME DNS records
- SSL active on captivepath.com
- New solid black outline logo (`cp-logo-black.webp`)
- White favicon (circular icon cropped from logo) in 32px, 192px, and 180px apple-touch-icon sizes
- Postmark email integration replacing Resend for contact form
- Full CCPA/CPRA compliance in Privacy Policy
- D1 database (`captive-path-contacts`) bound to Cloudflare Pages for contact form storage

### Changed
- All static components converted from `.tsx` to `.astro` (Nav, Footer, Hero, CredibilityStrip, WhatWeDo, WhoItsFor, HowItWorks, FocusAreas, ClosingCTA, WhyZach)
- Layout wrapper moved from React App.tsx to Astro Layout.astro
- Contact form backend switched from Resend to Postmark API
- Email removed from Privacy Policy and Terms pages, replaced with contact page links
- Contact page and Journal page: added spacing below hero sections

### Fixed
- Nav active link highlighting: strip trailing slash for proper comparison in Astro 5
- About page section order restored (Hero → WhatWeDo → WhoItsFor → Founder → FocusAreas → CTA)
- `reveal-stagger` class restored on 7 components for cascading entrance animations

### Decided
- ADR: Astro 5 chosen over continued React SPA for better SEO (static HTML), faster loads (zero JS for static pages), and Markdown-based blog authoring

## 2026-04-25 (Session 4)

### Changed
- Highlight CSS: switched from text-decoration underline to background-image gradient (18% opacity, 0.18em line at 88% position)
- WhatWeDo grid: thicker inner dividers (gap-0.5), lighter hover overlay (30% opacity), added numbered items (01-04)
- CredibilityStrip: removed numbers, kept titles + subtitles only
- Founder section: replaced bio paragraph with 3 stat boxes (20+, Multi-domain, Operator-led) + blockquote quote
- Founder photo: re-cropped to square for tighter head-and-shoulders framing
- Footer description expanded to full positioning statement
- HowItWorks: reduced top padding to tighten spacing after WhatWeDo section
- Replaced all em dashes with ellipses site-wide
- Removed all Oxford commas site-wide

## 2026-04-25 (Session 3)

### Added
- Teal word highlight + underline pattern across all page headlines as a consistent branding device
- Cloudflare Pages Function for contact form API (`/api/contact`)
- D1 database migration for contact submissions storage
- Wrangler configuration for D1 binding

### Changed
- Credibility strip redesigned from single block into 3 numbered card sections (01, 02, 03) with supporting text
- Contact form upgraded from mailto to server-side API (D1 storage + email)
- Email removed from footer, replaced with Contact link
- Founder photo re-cropped to better center Zach with less background
- Logo added to header nav and footer (replacing text)
- Favicon updated to provided PNG
- Hero content raised higher for better visibility on smaller devices

### Fixed
- Nav.tsx lint error: setState called directly in useEffect (now guarded by ref comparison)

## 2026-04-25 (Session 2)

### Added
- Multi-page architecture: Home, About, Process, Journal, Contact (React Router)
- Journal page with article listing, category filter buttons, placeholder articles
- Contact page with form (name, email, message) and sidebar info cards
- About page with expanded founder bio and full-width photo section
- Process page with engagement model section (selective intake, structured involvement, aligned incentives)
- Founder photo (Zach Warshawsky) integrated into Why Zach and About sections
- Hero gradient background with subtle topographic contour pattern
- Section depth transitions (gradient fades between sections)
- Card hover lift micro-interactions with shadow effects
- Brand-line decorative device (teal gradient accent line)
- Photo editorial treatment with subtle overlay
- Mobile hamburger menu for responsive navigation
- SPA routing support via Cloudflare Pages `_redirects`
- Footer with navigation columns and connect section

### Changed
- Typography switched from Instrument Serif to Space Grotesk (display font) per founder direction
- Homepage restructured: condensed What We Do and How It Works sections with "learn more" links to full pages
- CTA buttons now route to /contact page instead of mailto links
- Nav updated from single "Start a conversation" link to full page navigation

## 2026-04-25 (Session 1)

### Added
- Project initialized with repository and docs structure
- Design system: Instrument Serif (display) + Inter (body), warm mineral/stone neutrals, deep graphite text, dark teal accent
- Complete homepage with 8 sections: Hero, Credibility Strip, What We Do, Who It's For, How It Works, Why Zach, Focus Areas, Closing CTA
- Scroll reveal animations with staggered entrance effects
- Responsive layout (desktop + mobile)
- Minimal fixed navigation with scroll-aware background
- GitHub Actions CI/CD pipeline (typecheck → build → deploy to Cloudflare Pages)
- Cloudflare Pages project (`captive-path-website.pages.dev`)

### Decided
- ADR-001: React + Vite + Tailwind CSS 4 for frontend (static site, fast build, modern CSS)
- ADR-002: Cloudflare Pages for hosting (aligns with existing infrastructure, preview deploys on PRs)
- ADR-003: Space Grotesk + Inter font pairing (distinctive geometric display with clean modern body)
