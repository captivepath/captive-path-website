# Changelog

## 2026-04-25

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
- ADR-003: Instrument Serif + Inter font pairing (distinctive display with clean modern body)
