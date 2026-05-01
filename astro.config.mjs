// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { statSync } from 'node:fs';

/**
 * Resolve the lastmod date for a sitemap URL from git history.
 *
 * File-set scoping: each route maps to its primary source file(s).
 * Shared chrome (Layout, Nav, Footer) is excluded so that footer-only
 * edits do not inflate every page's lastmod. Only files whose change
 * materially affects the route's rendered content are included.
 *
 * Fallback: if git history is unavailable (fresh clone), uses the
 * source file's filesystem mtime. Logs a warning. Never uses the
 * build timestamp.
 */
function getLastmod(url) {
  const pathname = new URL(url).pathname;

  // Map URL pathname to source file(s) that affect the route's content.
  const routeFileMap = {
    '/': ['src/pages/index.astro', 'src/components/Hero.astro', 'src/components/CredibilityStrip.astro', 'src/components/WhatWeDo.astro', 'src/components/HowItWorks.astro', 'src/components/WhyZach.astro', 'src/components/ClosingCTA.astro'],
    '/about/': ['src/pages/about.astro', 'src/components/WhatWeDo.astro', 'src/components/WhoItsFor.astro', 'src/components/FocusAreas.astro'],
    '/process/': ['src/pages/process.astro', 'src/components/HowItWorks.astro', 'src/components/FocusAreas.astro'],
    '/contact/': ['src/pages/contact.astro', 'src/components/ContactForm.tsx'],
    '/journal/': ['src/pages/journal/[...page].astro'],
    '/journal/2/': ['src/pages/journal/[...page].astro'],
    '/privacy/': ['src/pages/privacy.astro'],
    '/terms/': ['src/pages/terms.astro'],
  };

  // Journal articles: map to their markdown source
  const journalMatch = pathname.match(/^\/journal\/([^/]+)\/$/);
  let files;
  if (journalMatch) {
    const slug = journalMatch[1];
    // Check if it's a page number (e.g., /journal/2/) — already handled above
    if (/^\d+$/.test(slug)) {
      files = routeFileMap[pathname] || ['src/pages/journal/[...page].astro'];
    } else {
      files = [`src/content/journal/${slug}.md`];
    }
  } else {
    files = routeFileMap[pathname];
  }

  if (!files) {
    // Unknown route; skip lastmod
    return undefined;
  }

  try {
    // Get the most recent commit timestamp across all files for this route.
    const fileArgs = files.join(' ');
    const result = execSync(`git log -1 --format=%cI -- ${fileArgs}`, {
      encoding: 'utf8',
      timeout: 10000,
    }).trim();

    if (result) {
      return new Date(result);
    }
  } catch {
    // Git not available or no history; fall back to filesystem mtime.
    console.warn(`[sitemap] git history unavailable for ${pathname}, using filesystem mtime`);
  }

  // Filesystem mtime fallback: use the most recent mtime across source files.
  let latest = 0;
  for (const f of files) {
    try {
      const stat = statSync(f);
      if (stat.mtimeMs > latest) latest = stat.mtimeMs;
    } catch { /* file may not exist */ }
  }
  if (latest > 0) {
    return new Date(latest);
  }

  return undefined;
}

export default defineConfig({
  site: 'https://captivepath.com',
  prefetch: {
    defaultStrategy: 'hover',
  },
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const lastmod = getLastmod(item.url);
        if (lastmod) {
          item.lastmod = lastmod.toISOString();
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
