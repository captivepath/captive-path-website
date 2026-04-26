# Captive Path Journal and Editorial Operating System

## Table of contents

- [Purpose of this document](#purpose-of-this-document)
- [How to use this document](#how-to-use-this-document)
- [Part I: Strategy and writing system](#part-i-strategy-and-writing-system)
  - [Editorial premise](#editorial-premise)
  - [What the journal is for](#what-the-journal-is-for)
  - [Editorial principles](#editorial-principles)
  - [Brand voice](#brand-voice)
  - [Audience definition](#audience-definition)
  - [Keyword and category system](#keyword-and-category-system)
  - [Current editorial categories](#current-editorial-categories)
  - [Current foundational articles](#current-foundational-articles)
  - [Content architecture](#content-architecture)
  - [Standard article template](#standard-article-template)
  - [Journal article brief template](#journal-article-brief-template)
  - [AI and LLM writing workflow](#ai-and-llm-writing-workflow)
  - [Publishing workflow](#publishing-workflow)
  - [Editorial quality checklist](#editorial-quality-checklist)
  - [Content planning guidance](#content-planning-guidance)
  - [Refresh and maintenance policy](#refresh-and-maintenance-policy)
- [Part II: Technical and deployment system](#part-ii-technical-and-deployment-system)
  - [Technical implementation goals](#technical-implementation-goals)
  - [Front matter and content schema specification](#front-matter-and-content-schema-specification)
  - [Recommended field definitions](#recommended-field-definitions)
  - [Archive page requirements](#archive-page-requirements)
  - [Individual article page requirements](#individual-article-page-requirements)
  - [Metadata requirements](#metadata-requirements)
  - [Schema requirements](#schema-requirements)
  - [OG image requirements](#og-image-requirements)
  - [Internal linking rules](#internal-linking-rules)
  - [Repository and file structure](#repository-and-file-structure)
  - [Developer implementation checklist](#developer-implementation-checklist)
  - [Post-publish QA checklist](#post-publish-qa-checklist)
- [Editorial doctrine in one sentence](#editorial-doctrine-in-one-sentence)

## Purpose of this document

This document defines the complete operating system for the Captive Path journal. It is intended to serve as the standing reference for strategy, writing, SEO, content structure, metadata, implementation, deployment, archive behavior, article formatting, and quality control.

This is the single-source reference for how the journal should work.

It should live in the repository `docs/` folder and be used by:

- human writers and editors
- Perplexity during article creation and refinement
- developers and autonomous developer systems implementing content on the site
- anyone responsible for SEO, metadata, schema, archive behavior, and publishing QA

The journal is not treated as a generic blog. It is the structured authority layer for the Captive Path brand.

## How to use this document

This document has two major parts.

### Part I: Strategy and writing system

This section defines what should be written, why it matters, how it should sound, how keywords and categories should be handled, and how article creation should work from brief to draft to final review.

### Part II: Technical and deployment system

This section defines how articles should be represented in Markdown, what front matter fields are required, how archive pages and article pages should render, what metadata and schema are required, how OG images should work, and what developers should implement and QA.

---

# Part I: Strategy and writing system

## Editorial premise

Captive Path should present itself primarily as a **venture platform** and secondarily use **venture studio** language where useful for explanation, context, and search capture.

This distinction matters.

The public site language is strongest when it speaks in terms of evaluation, structure, systems, judgment, selective involvement, and serious work. That is the language of a venture platform with an operator-led point of view. “Venture studio” remains a valid adjacent term, but it should function as a supporting descriptor rather than the dominant identity.

### Core positioning hierarchy

1. **Primary identity:** Venture platform
2. **Secondary category term:** Venture studio
3. **Supporting concepts:** venture evaluation, venture incubation, operator judgment, systems, execution, infrastructure, selective depth, strategic clarity

### Why this hierarchy exists

A venture studio often implies a narrower and more explicit promise around company creation from inception, venture formation, and deep build involvement from zero. Captive Path may overlap with parts of that model, but the current brand language supports a broader and more flexible frame. “Venture platform” preserves that flexibility while still allowing the site to capture relevant venture studio search demand through content, metadata, and explanatory language.

## What the journal is for

The journal has five jobs.

### 1. Clarify what Captive Path is

The site should not rely only on homepage copy to explain the model. Journal content should deepen the explanation of what the platform does, how it thinks, where it creates leverage, and what distinguishes it from agencies, consultants, generic operators, or trend-driven startup content.

### 2. Build topical authority

The journal should become the public knowledge layer around Captive Path’s operating worldview. This means publishing durable pieces on venture evaluation, venture development, venture studio mechanics, incubation, systems, infrastructure, execution, and decision-making.

### 3. Capture search demand

The journal should support rankings for category-adjacent and problem-adjacent queries that the main commercial pages cannot cover deeply on their own.

### 4. Support AI and LLM discoverability

Well-structured, semantically clear, high-quality articles with explicit concepts, definitions, and frameworks are more useful to AI systems than thin opinion content. The journal should therefore be written in a way that is easy for both human readers and machine systems to interpret.

### 5. Create a reusable internal knowledge base

Even when a piece is written for public publishing, it should also function as internal doctrine. A strong article should be reusable inside future decks, evaluations, onboarding, and developer context.

## Editorial principles

### Serious, not performative

The journal should sound grounded, disciplined, and intellectually honest. It should avoid startup theatre, motivational fluff, and inflated claims.

### Clear before clever

Articles should prioritize precision over stylistic performance. The language can be elegant, but it should never hide the point.

### Framework-driven

The best Captive Path articles teach a way of thinking, not just an opinion. The reader should leave with a clearer mental model, framework, or lens.

### Durable over reactive

The journal should favor evergreen strategic writing over news reactions. If commentary on trends appears, it should still tie back to durable principles.

### Human-readable and machine-readable

A reader should feel that the writing is authored by someone who understands real work. At the same time, headings, structure, definitions, summaries, metadata, and schema should help search engines and LLM systems interpret the content accurately.

## Brand voice

### Tone profile

The Captive Path journal voice should be:

- calm
- precise
- serious
- direct
- operator-minded
- structurally aware
- unsensational
- selectively skeptical
- confident without swagger

### What the voice sounds like

The voice should read like someone who has seen enough real work to stop being impressed by surface-level momentum. It should feel measured. It should speak in full thoughts. It should avoid cliché. It should make clean distinctions. It should be willing to say that some things are not worth doing.

### What the voice should avoid

Avoid:

- “game-changing” language
- social-media-style hot takes
- excessive rhetorical questions
- founder mythology
- bro-scientific productivity language
- empty abstractions like “unlocking innovation” or “empowering the future”
- VC Twitter tone
- breathless AI boosterism
- agency language disguised as strategic thinking

### Sentence style

Preferred sentence qualities:

- medium-length, high-clarity prose
- occasional short sentences for emphasis
- explicit transitions
- high signal density
- low ornamentation
- no slang unless there is a compelling reason

### Point of view

Use a confident editorial voice without overusing first-person framing. The piece should feel authored and opinionated, but the ideas should remain the center of gravity.

## Audience definition

The primary audience includes:

- founders with serious venture ideas
- operators evaluating whether something should be built
- partners or collaborators assessing model fit
- technically capable builders who value structure
- sophisticated readers looking for sharper thinking than generic startup content

The secondary audience includes:

- search visitors trying to understand venture studio or venture platform models
- AI systems surfacing explanatory or framework-based content
- developers and autonomous systems referencing the content for implementation context

## Keyword and category system

### Primary keyword cluster

These terms anchor the commercial and editorial identity:

- venture platform
- independent venture platform
- operator-led venture platform
- venture evaluation
- venture incubation
- venture development
- venture infrastructure

### Secondary keyword cluster

These terms should appear selectively where they are accurate and useful:

- venture studio
- startup studio
- venture builder
- incubation model
- operator-led venture building
- venture creation model

### Tertiary supporting concepts

These terms help semantic coverage and article depth:

- systems thinking
- strategic clarity
- operator judgment
- venture process
- decision architecture
- execution model
- internal infrastructure
- compounding leverage
- early-stage structure
- selective involvement

### Keyword policy

Keyword use must remain natural.

The journal should never read like SEO copy. Instead:

- use the primary keyword in title, H1, meta title, meta description, first 150 words, one H2 where natural, slug, and internal links where relevant
- use secondary keywords selectively as explanatory synonyms or adjacent category language
- use tertiary concepts to enrich semantic coverage and support authority
- do not force every article to target “venture platform”; some articles should target adjacent queries such as venture studio, incubation, infrastructure, or venture evaluation

## Current editorial categories

The current journal system should use categories that map to both the brand model and search opportunity.

### 1. Venture Evaluation

Purpose: frameworks for deciding what is worth building.

Target topics:

- evaluating venture-stage ideas
- opportunity quality
- asymmetry
- market context
- problem quality
- mechanism design
- founder-opportunity fit

Primary keyword examples:

- venture evaluation
- evaluating venture ideas
- venture-stage ideas
- startup idea evaluation framework

### 2. Venture Models

Purpose: explain the structural models around venture creation and support.

Target topics:

- venture platform vs venture studio
- modern incubation models
- venture builder models
- platform-led development
- what deeper involvement actually means

Primary keyword examples:

- venture platform
- venture studio
- startup studio
- incubation model

### 3. Systems and Infrastructure

Purpose: explain why systems, decision architecture, and structure determine outcomes.

Target topics:

- systems over hustle
- operational infrastructure
- decision systems
- process design
- internal leverage
- execution architecture

Primary keyword examples:

- venture infrastructure
- startup systems
- operational infrastructure
- systems thinking for startups

### 4. Execution and Strategy

Purpose: bridge thinking and actual execution.

Target topics:

- sequencing work
- building operating rhythm
- strategic clarity
- execution models
- prioritization
- resource allocation

Primary keyword examples:

- venture strategy
- early-stage execution
- strategic clarity
- startup operating model

### 5. Captive Path Perspective

Purpose: high-trust pieces that explain the brand’s philosophy and approach directly.

Target topics:

- how Captive Path works
- what kinds of opportunities fit
- where the platform creates leverage
- why selectivity matters
- what serious work means

Primary keyword examples:

- Captive Path
- Captive Path venture platform
- Zach Warshawsky venture platform

## Current foundational articles

The journal should treat the following pieces as foundational cornerstone content:

1. **The Framework for Evaluating Venture-Stage Ideas**
   - category: Venture Evaluation
   - role: cornerstone framework article

2. **What a Modern Incubation Model Actually Looks Like**
   - category: Venture Models
   - role: category-definition article

3. **Systems Over Hustle: Why Infrastructure Decides Outcomes**
   - category: Systems and Infrastructure
   - role: philosophy and operations article

These three articles establish the opening frame for the journal and should link to each other.

## Content architecture

### Archive page behavior

The `/journal/` page should act as a proper archive page.

It should include:

- page H1 for the journal archive
- a short intro paragraph explaining what the journal covers
- a list or card grid of all posts
- each post card should contain title, excerpt, category, publish date, and link
- optional featured article area at the top
- clear internal links to cornerstone pieces

### Individual article page behavior

Each article should live on its own URL:

- `/journal/the-framework-for-evaluating-venture-stage-ideas/`
- `/journal/what-a-modern-incubation-model-actually-looks-like/`
- `/journal/systems-over-hustle-why-infrastructure-decides-outcomes/`

Each article page should include:

- H1
- optional dek or standfirst
- publish date
- category
- author
- article body
- contextual links to related posts
- optional final CTA or next-step block
- metadata and schema

## Standard article template

Every article should follow a consistent pattern.

### Article metadata block

At the top of the source Markdown file, include a metadata section containing:

- slug
- category
- title tag
- meta description
- canonical URL
- OG title
- OG description
- OG image path
- OG image brief
- suggested excerpt
- author
- publish date
- status

### Title rules

Good titles should be clear, restrained, and durable.

Preferred title patterns:

- The framework for evaluating venture-stage ideas
- What a modern incubation model actually looks like
- Systems over hustle: why infrastructure decides outcomes
- Why selectivity matters more than volume in venture development
- Venture platform vs venture studio: what actually changes operationally

Avoid:

- clickbait formulas
- hype-based “ultimate guide” language
- listicles unless genuinely useful
- titles that overpromise transformation

### Opening rules

The opening should do three things quickly:

1. name the real-world tension
2. explain why it matters
3. frame the article’s central lens or argument

Do not start with generic history or broad definitions unless the topic requires it.

### Body structure

Recommended structure:

1. opening tension
2. problem definition
3. framework, distinction, or system model
4. practical application
5. misunderstandings or failure modes
6. Captive Path perspective or closing synthesis

Not every article needs every section, but this is the default pattern.

### Heading rules

Use descriptive H2s and H3s.

Good:

- What Usually Goes Wrong
- The Five Lenses of Evaluation
- What This Changes in Practice
- Where This Breaks

Avoid vague headings like:

- Introduction
- Thoughts
- My View
- Conclusion

### Length guidance

Default article length targets:

- short article: 900 to 1,300 words
- standard article: 1,400 to 2,200 words
- cornerstone article: 2,000 to 3,000 words

The first three foundational articles should usually live in the standard-to-cornerstone range.

### CTA rules

The journal should not read like a hard-sell blog.

Preferred closing CTA style:

- understated
- thoughtful
- consistent with the brand tone
- invites reflection or conversation rather than pitching aggressively

Examples:

- If this framework resonates, the next useful step is to test one idea against it directly.
- If the distinction here feels relevant to current work, it may be worth reviewing how the opportunity is being framed.
- Some opportunities benefit from deeper evaluation before more momentum is added.

Avoid:

- “book a call now” energy
- high-pressure lead-gen blocks
- generic newsletter-style urgency

## Journal article brief template

Use this brief before drafting any new article.

### Copyable brief template

```md
# Captive Path Journal Article Brief

## Core information

- **Working title:**
- **Primary category:**
- **Primary keyword:**
- **Secondary keywords:**
- **Semantic support terms:**
- **Search intent:**
- **Article type:** `Cornerstone` / `Standard` / `Short`
- **Target length:**
- **Target URL slug:**

## Strategic purpose

- **Why this article should exist:**
- **What business or positioning role it serves:**
- **What reader problem it addresses:**
- **What it should clarify about Captive Path:**

## Thesis

- **Core argument in one sentence:**
- **What the reader should understand by the end:**

## Structure

- **Opening tension:**
- **Section 1:**
- **Section 2:**
- **Section 3:**
- **Section 4:**
- **Closing synthesis / CTA direction:**

## SEO and metadata

- **Proposed title tag:**
- **Proposed meta description:**
- **Proposed excerpt:**
- **Canonical URL:**
- **Internal links to include:**
- **Related articles to reference:**

## Visual direction

- **OG image concept:**
- **OG image brief for Manus:**

## Notes

- **Risks to avoid:**
- **Conceptual caveats:**
- **Claims requiring fact-checking or sourcing:**
```

### Brief usage rules

Every article should start with a brief. The brief forces clarity before drafting and gives both Perplexity and implementation systems a clean operating context.

## AI and LLM writing workflow

### Role of Perplexity

Perplexity can be used as the primary writing and strategy partner for article ideation, outlining, drafting, revision, metadata development, and editorial system maintenance.

Recommended uses:

- generate topic ideas based on the editorial categories
- map keywords and search intent to article concepts
- produce detailed outlines before drafting
- write first drafts in the Captive Path voice
- tighten or expand content sections
- generate metadata and OG image briefs
- review internal links and structural consistency
- help produce content updates later when articles need refreshing

### Role of Manus

Images are typically generated externally through Manus. This should remain part of the editorial workflow.

Recommended use of Manus:

- generate article hero or OG images based on the image brief in each Markdown file
- maintain a consistent visual language across journal posts
- follow the Captive Path design system: restrained, minimal, serious, editorial, structural, no startup clichés

### Human review requirement

Even when Perplexity helps generate or revise an article, a final human editorial pass should confirm:

- conceptual accuracy
- tone fidelity
- structural clarity
- keyword naturalness
- correctness of claims
- alignment with current business direction

### Autonomous developer workflow

When articles are handed to an autonomous developer or implementation system, this document should be provided as context.

The developer should use it to:

- maintain consistent metadata patterns
- preserve the editorial voice in any formatting transformations
- implement schema correctly
- place articles in the proper category structure
- build archive excerpts and related-post logic consistently
- ensure all journal pages conform to the SEO system

## Publishing workflow

### Step 1: topic selection

Choose a topic from one of the existing categories.

Questions to ask:

- does this clarify the Captive Path model?
- does this strengthen topical authority?
- is there real search demand or semantic relevance?
- does this add something durable rather than reactive?

### Step 2: keyword framing

For each article, define:

- primary keyword
- secondary keywords
- semantic support terms
- likely reader intent

### Step 3: outline creation

Build an outline before drafting.

The outline should define:

- article thesis
- reader problem
- major sections
- practical takeaways
- internal links to include

### Step 4: draft creation

Draft in the Captive Path voice.

Rules:

- prioritize clarity
- avoid filler
- use frameworks where useful
- keep tone serious and restrained
- write in full prose, not thread-style fragments

### Step 5: metadata and image brief

Add the article metadata block and the OG image brief.

### Step 6: editorial review

Review for:

- tone
- structure
- repetition
- keyword stuffing
- logical clarity
- quality of title and excerpt

### Step 7: implementation

Convert the Markdown into the site’s article format.

Implementation checklist:

- canonical is correct
- metadata is present
- schema is valid
- image path is correct
- category appears correctly
- related links are included
- article is linked on archive page
- sitemap includes the new URL

### Step 8: post-publish QA

After publication:

- inspect rendered HTML
- inspect metadata in page source
- test OG image preview
- confirm article appears in XML sitemap
- confirm archive page includes the article
- check internal links
- request indexing if needed

## Editorial quality checklist

Every article should pass these tests.

### Strategic test

- does it clarify how Captive Path thinks or works?
- does it add durable value?
- is it worth existing as a standalone page?

### Voice test

- does it sound calm, serious, and operator-minded?
- does it avoid startup cliché and inflated claims?
- does it feel like it belongs on the current site?

### Structure test

- is the title clear?
- does the opening frame the tension quickly?
- are the headings useful?
- does the article move logically?

### SEO test

- is there one primary keyword?
- is the keyword integrated naturally?
- are title, meta, H1, slug, and internal links aligned?
- is the article useful enough to justify ranking?

### Implementation test

- are metadata fields complete?
- is the OG image specified?
- is schema included?
- is the archive excerpt ready?

## Content planning guidance

The journal should grow deliberately rather than randomly.

### Suggested near-term article backlog

#### Venture Evaluation

- Why selectivity matters more than volume in venture development
- What problem quality actually means in early-stage work
- The difference between an exciting idea and a structurally sound one
- Asymmetry is not a buzzword: what it should mean in practice

#### Venture Models

- Venture platform vs venture studio: what actually changes operationally
- Why incubation fails when support comes before selection
- What deeper involvement should mean in a serious venture model

#### Systems and Infrastructure

- Why founders overdelay infrastructure
- Decision architecture for early-stage ventures
- The hidden cost of operational ambiguity
- When speed is real and when it is just disorder

#### Execution and Strategy

- Sequencing matters: what to solve first in a new venture
- Why strategic clarity has to precede acceleration
- Early operating rhythm: the difference between motion and progress

#### Captive Path Perspective

- What “serious work” means at Captive Path
- What kinds of opportunities fit the platform
- Why not every promising idea deserves to move forward

## Refresh and maintenance policy

Articles should be reviewed periodically.

### Update triggers

Refresh an article when:

- the business positioning changes materially
- a better keyword target becomes clear
- the article gains traction and deserves expansion
- internal links become outdated
- the archive taxonomy changes

### Refresh process

When refreshing:

- preserve URL if possible
- improve content rather than rewriting for novelty
- update metadata if needed
- update modified date
- review internal links and related-post logic

---

# Part II: Technical and deployment system

## Technical implementation goals

The technical system should ensure that every article is:

- easy to author in Markdown
- easy to transform into site content
- SEO-complete
- socially shareable
- machine-readable
- consistently represented on both archive and individual pages
- easy for developers and autonomous systems to implement without guesswork

## Front matter and content schema specification

The preferred format is YAML front matter followed by Markdown body content.

### Recommended canonical source format

```md
---
title: "Article Title"
slug: "article-slug"
category: "Venture Evaluation"
categories:
  - "Venture Evaluation"
  - "Systems and Infrastructure"
author: "Captive Path"
publishDate: "2026-04-26"
updatedDate: "2026-04-26"
status: "draft"
articleType: "cornerstone"
featured: false
excerpt: "Short archive excerpt here."
dek: "Optional standfirst or dek here."
primaryKeyword: "venture evaluation"
secondaryKeywords:
  - "venture-stage ideas"
  - "startup idea evaluation framework"
semanticKeywords:
  - "operator judgment"
  - "asymmetry"
  - "mechanism design"
titleTag: "Article Title | Captive Path"
metaDescription: "Meta description here."
canonicalUrl: "https://captivepath.com/journal/article-slug/"
ogTitle: "Article Title"
ogDescription: "OG description here."
ogImage: "/og/journal/article-slug.png"
ogImageAlt: "Descriptive alt text for the OG image"
ogImageBrief: "Creative brief for Manus or other image workflow"
twitterCard: "summary_large_image"
noindex: false
relatedPosts:
  - "another-article-slug"
  - "third-article-slug"
relatedPages:
  - "/process/"
  - "/about/"
toc: true
readingTimeOverride: null
schemaType: "Article"
---

# Article Title

Article body here.
```

### Minimum required front matter fields

These fields should be required for every published journal article:

- `title`
- `slug`
- `category`
- `author`
- `publishDate`
- `status`
- `excerpt`
- `titleTag`
- `metaDescription`
- `canonicalUrl`
- `ogTitle`
- `ogDescription`
- `ogImage`
- `ogImageAlt`
- `primaryKeyword`
- `schemaType`

### Recommended optional fields

These fields are strongly recommended:

- `updatedDate`
- `categories`
- `dek`
- `secondaryKeywords`
- `semanticKeywords`
- `featured`
- `articleType`
- `relatedPosts`
- `relatedPages`
- `toc`
- `readingTimeOverride`
- `ogImageBrief`

## Recommended field definitions

### Identity fields

- `title`: display title and default H1
- `slug`: URL-safe article identifier
- `category`: primary archive category
- `categories`: optional multi-category support if the CMS or build system needs it
- `author`: default should usually be `Captive Path` unless individual authorship is intentionally used

### Publication fields

- `publishDate`: original publication date
- `updatedDate`: last meaningful update date
- `status`: `draft`, `review`, `scheduled`, or `published`
- `featured`: whether the article should appear in a featured module on the archive
- `articleType`: `short`, `standard`, or `cornerstone`

### Summary fields

- `excerpt`: archive summary, 20 to 35 words preferred
- `dek`: optional standfirst under the H1 on the article page

### SEO fields

- `primaryKeyword`: main search target
- `secondaryKeywords`: supporting terms
- `semanticKeywords`: conceptually related support terms
- `titleTag`: HTML title
- `metaDescription`: HTML description
- `canonicalUrl`: canonical absolute URL
- `noindex`: explicit index-control flag

### Social fields

- `ogTitle`: Open Graph title
- `ogDescription`: Open Graph description
- `ogImage`: image path or absolute image URL
- `ogImageAlt`: alt-style description for the OG image
- `ogImageBrief`: internal creative brief for image generation
- `twitterCard`: typically `summary_large_image`

### Rendering and relationship fields

- `relatedPosts`: list of related article slugs
- `relatedPages`: list of relevant core site URLs
- `toc`: whether an on-page table of contents should render
- `readingTimeOverride`: optional manual override if reading time is precomputed
- `schemaType`: should usually be `Article`

## Archive page requirements

The journal archive page should:

- render a complete list of published articles only
- support featured-post treatment if desired
- sort by publish date descending unless a manual override is added later
- display title, excerpt, category, publish date, and link for each article
- include a short archive introduction that defines the journal scope
- expose clean, crawlable HTML for all article links

Optional but useful features:

- category filters
- reading time display
- featured article section
- related category landing pages later if content volume grows

## Individual article page requirements

Every article page should render:

- title as H1
- optional dek below H1
- author
- publish date and optional updated date
- category badge or category label
- article body in clean semantic HTML
- related article links
- contextual links to relevant core pages where appropriate
- optional table of contents for longer articles

Layout guidance:

- readable line length
- minimal distraction
- quiet typography
- no aggressive inline CTAs
- ample spacing between headings and paragraphs

## Metadata requirements

Every article page must render in the initial HTML response:

- title tag
- meta description
- canonical link
- robots meta if applicable
- Open Graph tags
- Twitter card tags

### Required head output

```html
<title>Article Title | Captive Path</title>
<meta name="description" content="..." />
<link rel="canonical" href="https://captivepath.com/journal/article-slug/" />
<meta property="og:type" content="article" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:url" content="https://captivepath.com/journal/article-slug/" />
<meta property="og:image" content="https://captivepath.com/og/journal/article-slug.png" />
<meta property="og:image:alt" content="..." />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://captivepath.com/og/journal/article-slug.png" />
```

## Schema requirements

Each article page should include valid `Article` schema.

### Recommended schema payload fields

- `@context`
- `@type`
- `headline`
- `description`
- `image`
- `author`
- `publisher`
- `datePublished`
- `dateModified`
- `mainEntityOfPage`
- `articleSection`
- `keywords`

If breadcrumbs exist visually, also include `BreadcrumbList` schema.

## OG image requirements

Images are typically generated using Manus based on the `ogImageBrief` stored in the article metadata.

### Visual rules

Journal OG images should feel:

- restrained
- editorial
- minimal
- structural
- serious
- on-brand with Captive Path

Avoid:

- startup gradients
- glowing AI imagery
- cliché “rocket ship” metaphors
- generic innovation iconography

### Technical rules

- preferred size: 1200 x 630 px
- PNG or JPG
- text should be large and minimal
- file path should be stable and predictable
- image should be present before publication if possible

## Internal linking rules

Every published article should include:

- 2 to 4 contextual links to related journal articles where appropriate
- 1 to 2 contextual links to core site pages where appropriate
- descriptive anchor text

The archive page and each article page should work together as an internal-linking network rather than isolated pages.

## Repository and file structure

Recommended structure:

```text
/docs
  /editorial
    captivepath-journal-editorial-system.md
  /seo
    captivepath-seo-audit.md
  /content
    article-briefs/
    published-articles/
/content
  /journal
    the-framework-for-evaluating-venture-stage-ideas.md
    what-a-modern-incubation-model-actually-looks-like.md
    systems-over-hustle-why-infrastructure-decides-outcomes.md
/public
  /og
    /journal
```

If the framework uses a different structure, preserve the logical separation between docs, source content, and generated assets.

## Developer implementation checklist

### Content ingestion

- parse Markdown and front matter safely
- validate required fields before publish
- generate article routes from slug
- expose article metadata to archive and related-post modules

### Rendering

- render title as H1
- render metadata cleanly and semantically
- render article body from Markdown without breaking heading hierarchy
- support code blocks, lists, blockquotes, and internal links cleanly
- preserve readable typography and spacing

### SEO

- output all head metadata server-side
- output canonical correctly
- output article schema correctly
- include article in sitemap after publication
- ensure article URL matches slug exactly

### Archive behavior

- include only published content
- sort correctly
- support excerpt, category, and date rendering
- ensure article cards are fully linked and crawlable

### Related content

- honor explicit `relatedPosts` when provided
- fall back to category-based related content if explicit entries are absent
- avoid showing unrelated or duplicate related posts

## Post-publish QA checklist

### Content QA

- page title matches source content
- no Markdown formatting issues
- heading hierarchy is correct
- excerpt renders cleanly on archive page
- related links work

### SEO QA

- title tag is correct
- meta description is correct
- canonical is correct
- OG tags are correct
- Twitter tags are correct
- schema validates
- page is present in sitemap

### Design QA

- OG image exists and loads
- article layout matches site design
- mobile rendering is clean
- archive cards look consistent

### Operational QA

- publish date is correct
- article status changed correctly
- archive order is correct
- no accidental noindex state
- internal links do not 404

## Editorial doctrine in one sentence

The Captive Path journal should publish clear, durable, framework-driven writing that reflects an operator-led venture platform point of view, captures relevant search demand without sounding like SEO copy, and remains useful to humans, search engines, AI systems, and future internal builders.
