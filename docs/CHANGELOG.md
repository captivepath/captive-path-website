# Changelog

## 2026-04-25 (Session 3)

### Added
- Teal word highlight + underline pattern across all page headlines as a consistent branding device
- Cloudflare Pages Function for contact form API (`/api/contact`)
- D1 database migration for contact submissions storage
- Resend email integration for contact form notifications
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
