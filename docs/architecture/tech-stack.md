# Tech Stack

## Frontend
- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Typography:** Instrument Serif (display) + Satoshi/General Sans (body) via Google Fonts / Fontsource
- **Motion:** CSS transitions + Intersection Observer for scroll reveals

## Infrastructure
- **Hosting:** Cloudflare Pages (static site)
- **CI/CD:** GitHub Actions → Cloudflare Pages deploy
- **Domain:** captive-path-website.pages.dev (Cloudflare subdomain)

## Environment Variables
| Variable | Purpose |
|---|---|
| `CF_API_TOKEN` | Cloudflare API token for Pages deployment |
| `CF_ACCOUNT_ID` | Cloudflare account ID |

## Design Tokens
Defined in Tailwind config:
- Color palette: warm stone neutrals, deep graphite, dark teal accent
- Typography scale: display (Instrument Serif), body (Satoshi)
- Spacing: 4px grid system
- Border radius, shadows, transitions
