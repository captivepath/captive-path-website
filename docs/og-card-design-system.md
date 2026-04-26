# Captive Path — OG Card Design System
**Reusable HTML Template & Style Reference**

This document preserves the exact design system used to generate the approved OG/social share images for captivepath.com. Use this to regenerate or create new cards (e.g., for blog posts) without needing to reverse-engineer from an image.

---

## Design Specifications

| Property | Value |
| :--- | :--- |
| **Canvas size** | 1200 × 630 px |
| **Background** | `#f5f0eb` (stone-100 warm cream) |
| **Font** | Space Grotesk (loaded locally from `/fonts/`) |
| **Headline size** | `109px` |
| **Headline weight** | `700` |
| **Headline color** | `#1c1917` (near-black) |
| **Headline letter-spacing** | `-0.035em` |
| **Headline line-height** | `1.0` |
| **Subtext size** | `30px` |
| **Subtext weight** | `400` |
| **Subtext color** | `#57534e` (stone-600) |
| **Subtext white-space** | `nowrap` (runs full width, no wrap) |
| **Left accent bar** | `5px` wide, gradient `#145250` → `#3bb0ac` |
| **Dot grid** | `radial-gradient` dots at `rgba(168,158,146,0.28)`, `36px` spacing |

---

## Teal Highlight Style

This is the exact `.text-highlight` class from the live site, reproduced faithfully.

```css
.highlight {
  color: #145250;                          /* teal-800 */
  font-weight: 700;
  background-image: linear-gradient(
    rgba(20, 82, 80, 0.18),
    rgba(20, 82, 80, 0.18)
  );
  background-position: 0 88%;             /* underline sits at 88% from top */
  background-repeat: no-repeat;
  background-size: 100% 0.18em;           /* underline height = 0.18em */
  padding: 0 0.04em;
}
```

**Usage:** Wrap any word or phrase in `<span class="highlight">word</span>` to apply the teal text + underline treatment.

---

## Decorative Circles (Top Right)

Three concentric circles positioned off the top-right corner. The headline intentionally overlaps them.

```css
.deco-outer {
  position: absolute;
  top: -130px; right: -130px;
  width: 580px; height: 580px;
  border-radius: 50%;
  border: 2px solid rgba(20, 82, 80, 0.28);
}
.deco-mid {
  position: absolute;
  top: -40px; right: -40px;
  width: 390px; height: 390px;
  border-radius: 50%;
  border: 2px solid rgba(20, 82, 80, 0.20);
}
.deco-inner {
  position: absolute;
  top: 60px; right: 60px;
  width: 210px; height: 210px;
  border-radius: 50%;
  border: 1.5px solid rgba(20, 82, 80, 0.13);
}
```

---

## Full Blank Template (Copy & Customize)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @font-face {
    font-family: 'Space Grotesk';
    src: url('fonts/SpaceGrotesk-400.ttf') format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Space Grotesk';
    src: url('fonts/SpaceGrotesk-500.ttf') format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Space Grotesk';
    src: url('fonts/SpaceGrotesk-700.ttf') format('truetype');
    font-weight: 700;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: 1200px; height: 630px;
    background-color: #f5f0eb;
    font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
    overflow: hidden; position: relative;
  }
  .dot-grid {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(168,158,146,0.28) 1.2px, transparent 1.2px);
    background-size: 36px 36px;
    background-position: 24px 24px;
  }
  .accent-bar {
    position: absolute; left: 0; top: 0; width: 5px; height: 100%;
    background: linear-gradient(180deg, #145250 0%, #3bb0ac 100%);
  }
  .deco-outer {
    position: absolute; top: -130px; right: -130px;
    width: 580px; height: 580px; border-radius: 50%;
    border: 2px solid rgba(20, 82, 80, 0.28);
  }
  .deco-mid {
    position: absolute; top: -40px; right: -40px;
    width: 390px; height: 390px; border-radius: 50%;
    border: 2px solid rgba(20, 82, 80, 0.20);
  }
  .deco-inner {
    position: absolute; top: 60px; right: 60px;
    width: 210px; height: 210px; border-radius: 50%;
    border: 1.5px solid rgba(20, 82, 80, 0.13);
  }
  .layout {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    justify-content: center; padding: 0 80px;
  }
  .headline {
    font-size: 109px; font-weight: 700;
    line-height: 1.0; color: #1c1917;
    letter-spacing: -0.035em;
    max-width: 1100px; margin-bottom: 32px;
  }
  .highlight {
    color: #145250; font-weight: 700;
    background-image: linear-gradient(rgba(20, 82, 80, 0.18), rgba(20, 82, 80, 0.18));
    background-position: 0 88%; background-repeat: no-repeat;
    background-size: 100% 0.18em; padding: 0 0.04em;
  }
  .subtext {
    font-size: 30px; font-weight: 400;
    color: #57534e; line-height: 1.4;
    white-space: nowrap; letter-spacing: -0.015em;
  }
</style>
</head>
<body>
  <div class="dot-grid"></div>
  <div class="accent-bar"></div>
  <div class="deco-outer"></div>
  <div class="deco-mid"></div>
  <div class="deco-inner"></div>
  <div class="layout">
    <div class="headline">
      Your headline goes<br>
      here with a <span class="highlight">highlighted</span><br>
      word or phrase.
    </div>
    <div class="subtext">Your one-line subtext goes here — keep it short and punchy.</div>
  </div>
</body>
</html>
```

---

## Rendering Instructions (for Devin)

To render any `.html` card to a `1200×630` PNG, use the included `render-og.js` Node script:

```bash
node render-og.js og-card-[page].html og-images/og-[page].png
```

**Requirements:**
- Node.js with `puppeteer-core` installed (`pnpm add puppeteer-core`)
- Chromium available at `/usr/bin/chromium`
- Font files in `./fonts/` directory (SpaceGrotesk-400.ttf, SpaceGrotesk-500.ttf, SpaceGrotesk-700.ttf)

---

## Color Reference

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `stone-100` | `#f5f0eb` | Card background |
| `stone-900` | `#1c1917` | Headline text |
| `stone-600` | `#57534e` | Subtext |
| `stone-400` | `#a89e92` | Muted labels |
| `teal-800` | `#145250` | Highlight text, accent bar top |
| `teal-400` | `#3bb0ac` | Accent bar bottom, circle strokes |
