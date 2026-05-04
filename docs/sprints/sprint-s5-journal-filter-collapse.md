# Sprint S5 — Journal Filter Collapse

## Overview
Collapsed the journal page category filter buttons into a single toggle dropdown to reduce visual clutter and let readers reach article content faster. The filter tags are now hidden by default behind a compact "Filter" button and expand on click with a smooth CSS animation.

## Status: Complete (PR #31)

**Implementation PR:** https://github.com/captive-path/captivepath.com/pull/31 (`devin/1777920220-journal-collapsible-filters`)

---

## Deliverables

### Collapsible Filter Toggle
- Replaced the always-visible `flex-wrap` row of 8 category buttons with a single "Filter" toggle button
- Toggle uses a chevron SVG icon that rotates 180° on expand/collapse
- Proper `aria-expanded` and `aria-controls` attributes for accessibility
- Button label updates to show the active category name when a filter is selected (reverts to "Filter" when "All" is active)

### Expand/Collapse Animation
- Filter panel uses CSS `grid-template-rows: 0fr → 1fr` transition for smooth height animation
- 300ms ease-in-out timing with no layout shift or content reflow
- Inner container uses `overflow: hidden` to clip content during transition
- No JavaScript height calculation or `requestAnimationFrame` hacks required

### Preserved Functionality
- All existing category filter logic unchanged: clicking a tag highlights it and filters article cards
- Active filter state visually indicated with `bg-graphite-900 text-stone-50` styling
- Cards show/hide based on `data-category` matching, identical to previous behavior

---

## Files Changed

| File | Change |
|------|--------|
| `src/pages/journal/[...page].astro` | Wrapped category buttons in collapsible toggle panel; added toggle button with chevron SVG; updated `initFilters()` script to handle expand/collapse state and label updates |

---

## Technical Notes
- The `grid-template-rows` animation technique is supported in all modern browsers (Chrome 57+, Firefox 52+, Safari 10.1+, Edge 16+)
- No new dependencies or components added
- Filter panel starts collapsed (`grid-template-rows: 0fr`) so page loads show only the toggle button, reducing above-the-fold visual noise
