# Sprint S0 — Design System & Homepage Build

## Goal
Establish the visual design system, build the complete homepage with all 8 required sections, set up CI/CD, and deploy to Cloudflare Pages.

## Status: In Progress

## Deliverables

### Core Design System
- [x] Design system established (typography, color palette, spacing, components)
- [x] Typography: Space Grotesk (display) + Inter (body)
- [x] Color palette: warm mineral neutrals, deep graphite text, dark teal accent
- [x] Design enhancements: hero gradient, section transitions, card lifts, brand-line device

### Homepage Sections
- [x] Hero section — left-aligned, approved headline, primary + secondary CTA, gradient bg + topo pattern
- [x] Credibility strip section — brand-line accent
- [x] What Captive Path Does section — 4 capability pillars (condensed on home, full on About)
- [x] Who It's For section — 3 audience cards with hover lift
- [x] How It Works section — 4-step process (condensed on home, full on Process)
- [x] Why Zach section — founder credibility with photo and editorial treatment
- [x] Focus Areas section — 5 focus items with arrow icons
- [x] Closing CTA section

### Multi-Page Architecture
- [x] React Router setup with SPA routing
- [x] Home page (curated gateway)
- [x] About page (full capabilities, audience, founder bio with photo)
- [x] Process page (full process + engagement model)
- [x] Journal page (article listing, category filters, placeholder content)
- [x] Contact page (form + sidebar info cards)

### Infrastructure
- [x] Responsive design (desktop + mobile)
- [x] Refined motion (fade/slide reveals, hover states, card lifts)
- [x] GitHub Actions CI/CD pipeline to Cloudflare Pages
- [x] Live deployment at captive-path-website.pages.dev
- [x] Accessibility: semantic HTML, contrast compliance, readable typography
- [x] SPA routing via _redirects for Cloudflare Pages
- [x] Founder photo processed and integrated

## Design Direction
Modern editorial systems design with restrained character.
- Adtriox clarity + Atomle structure + Captive Path brand restraint
- Space Grotesk (display) + Inter (body)
- Warm mineral/stone neutrals (#FAF8F5), deep graphite text (#2A2A2A), dark teal accent (#145250)
- Left-aligned hero with gradient and topographic pattern
- Modular panel structure, editorial dividers, brand-line accent
- Card hover lift micro-interactions
- No neon, no orbs, no centered-everything, no generic SaaS patterns

## Tech Stack
- React 19 + Vite
- React Router DOM (SPA routing)
- Tailwind CSS 4
- Cloudflare Pages (static deployment)
- GitHub Actions for CI/CD
