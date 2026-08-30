# Architecture Context

This site is a **content-driven Next.js App Router app** with no server database.

Public routes: `/`, `/work`, `/work/[slug]`, `/writing`, `/about`, plus footer archives `/testimonials` and `/achievements` (`0.11`). Paper/ink visual system (`0.8`). V1 tutorial chrome retired (`0.9`).

## Stack

| Layer        | Technology                                      | Role                                              |
| ------------ | ----------------------------------------------- | ------------------------------------------------- |
| Framework    | Next.js 16 (App Router) + React 19 + TypeScript | Pages, layouts, static generation                 |
| Styling      | Tailwind CSS 3 + `src/app/globals.css`          | Layout, theme tokens                              |
| Motion       | Framer Motion                                   | Mobile nav collapse only                          |
| Icons        | `react-icons`                                   | Hamburger / close in nav                          |
| Images       | `next/image` + `sharp`                          | Work article screenshots                          |
| SEO          | `next` Metadata API + `SchemaOrg.tsx`           | Titles, OG, JSON-LD                               |
| Fonts        | Google Fonts **IBM Plex Sans / Serif / Mono** via `next/font` | Body, H1, home kicker (`0.8`) |
| Deploy       | Assumed Vercel-style Node host                  | `next build` / `next start`; no custom server     |

There is **no auth, no ORM, no CMS, and no app-owned API**. Contact is mailto, GitHub, and LinkedIn.

## System Boundaries

- `src/app/` — Routes only. Compose data + components. Do not put large datasets here.
- `src/components/` — Presentational / interactive UI (`Work/`, chrome).
- `src/lib/` — **Source of truth for content and derived helpers.**
- `src/types/` — Shared TypeScript interfaces (`Experience`, `Project`, `Testimonial`). Case study / portfolio view-model types live next to the data in `src/lib/portfolio.ts`.
- `public/` — Static assets: `/images/portfolios/`, `/images/achievements/` (binaries only), OG image, icons, robots, sitemap, manifest.
- `context/` — AI/project knowledge. Not imported by the app.
- `specs/` — Feature specs. Not imported by the app.

## Routes

| Path                    | File                                         | Notes                                                                 |
| ----------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| `/`                     | `src/app/page.tsx`                           | Document home: kicker, dual CTAs, `HOME_EVIDENCE`                     |
| `/work`                 | `src/app/work/page.tsx`                      | Selected list via `getSelectedWorkEntries()`                          |
| `/work/[slug]`          | `src/app/work/[slug]/page.tsx`               | Slim article via `getWorkArticle()`                                   |
| `/writing`              | `src/app/writing/page.tsx`                   | IEEE paper only (`src/lib/writing.ts`)                                |
| `/about`                | `src/app/about/page.tsx`                     | Facts page (`src/lib/about.ts`, `experiences`)                        |
| `/testimonials`         | `src/app/testimonials/page.tsx`              | Footer archive. Existing quotes. Off nav.                             |
| `/achievements`         | `src/app/achievements/page.tsx`              | Footer archive. Awards/certs. Off nav. IEEE paper stays on `/writing`. |
| `/case-studies`         | `next.config.ts` redirect                    | **308 → `/work`**                                                     |
| `/case-studies/[slug]`  | `next.config.ts` redirect                    | **308 → `/work/[slug]`**                                              |
| `/projects`             | `next.config.ts` redirect                    | **308 → `/work`**                                                     |
| `/projects/[slug]`      | `next.config.ts` redirect                    | **308 → `/work/[slug]`**                                              |
| `/showcase`             | `next.config.ts` redirect                    | **308 → `/work`**                                                     |
| `/showcase/[slug]`      | `next.config.ts` redirect                    | **308 → `/work/[slug]`**                                              |

Root layout (`src/app/layout.tsx`) wraps every page with `MainNavigation` (Work · Writing · About · CV). Pages that need a footer import `Footer` themselves.

## Data model (static modules)

All mutable “product” content is TypeScript, not Markdown.

| Dataset            | File                         | Consumed by                                      |
| ------------------ | ---------------------------- | ------------------------------------------------ |
| Experience roles   | `src/lib/data.ts`            | `/about` list                                    |
| Career date math   | `src/lib/experience.ts`      | Metadata, footer, `/about` intro, home           |
| Case studies       | `src/lib/portfolio.ts`       | `/work/[slug]`                                   |
| Summary projects   | `src/lib/portfolio.ts`       | Selected work helpers                            |
| Project details    | `src/lib/portfolio.ts`       | `/work/[slug]`, writing extra links              |
| Unified view-model | `src/lib/portfolio.ts`       | `getAllPortfolioEntries()`                       |
| Site chrome        | `src/lib/site.ts`            | Identity, CV URLs, footer copyright, build date  |
| Selected work      | `src/lib/selected-work.ts`   | `/work` shortlist + `HOME_EVIDENCE`              |
| Work article map   | `src/lib/work-article.ts`    | Problem / role / constraints / outcome view-model |
| Writing            | `src/lib/writing.ts`         | `/writing` IEEE item                             |
| About copy         | `src/lib/about.ts`           | `/about` intro, stack sentence, location line    |
| Testimonials       | `src/lib/testimonials.ts`    | `/testimonials` (footer)                         |
| Certificates       | `src/lib/certificates.ts`    | `/achievements` (footer); skip IEEE paper row    |

### Portfolio content rules

`src/lib/portfolio.ts` holds three layers on purpose:

1. **`caseStudies`** — deep-dive records (`id` is the URL slug).
2. **`projects`** — short cards. Do not add a project that already exists as a case study.
3. **`projectDetails`** — optional long-form pages keyed by `slug`.

`getAllPortfolioEntries()` concatenates case studies + projects into `PortfolioEntryViewModel`. Case study `href` is `/work/{id}`. Project `href` prefers a matching case study, then project detail (`/work/{slug}`), then live URL.

`Project` in `src/types/index.ts` is the **card** shape (`name`, `description`, `tags`, `image`, optional links / `featured`).

## Storage Model

- **In-repo TypeScript modules**: structured content and copy helpers.
- **Git-tracked files in `public/`**: images, remaining achievement binaries, OG image, PWA manifest.
- **External URLs**: CV PDF, live project sites, GitHub, LinkedIn, IEEE Xplore.
- **Env (optional)**: `NEXT_PUBLIC_BUILD_TIME` — if set at build, footer shows “Site updated: …”.

No database. No blob store. No runtime writes.

## Auth and Access Model

None. The entire site is public. Do not add auth, sessions, or gated pages unless a spec explicitly requires it.

## Rendering model

- Default: **React Server Components** for pages that only read static data.
- `"use client"` only when the browser is required (nav open state, Framer Motion).
- Dynamic routes use `generateStaticParams` + `notFound()`.

## SEO architecture

- Canonical site origin: `https://portfolio.rajondey.com` (`SITE_ORIGIN` in `src/lib/site.ts`, `metadataBase` in layout).
- Root and per-route metadata via `getPageShareMetadata()` (title, description, canonical, OG, Twitter). JSON-LD Person + ScholarlyArticle in `SchemaOrg.tsx`.
- Sitemap lists v2 routes and the six selected work URLs. Manifest identity matches `0.1`; shortcuts are Work / Writing / About.

## Config

- Path alias: `@/*` → `./src/*` (`tsconfig.json`).
- `next.config.ts` uses `module.exports`, `images.domains` (`portfolio.rajondey.com`), and 308 redirects for retired URLs.
- Tailwind content globs: `src/app`, `src/components`.
- Scripts: `dev` (Turbopack), `build`, `start`, `lint`, `typecheck`.

## Invariants

1. **Content is data, not JSX.** New projects / case studies are added in `src/lib/portfolio.ts`, then referenced by UI.
2. **Do not duplicate a case study as a `projects[]` card.** The unified list already includes case studies.
3. **Years of experience and “current role” dates come from `src/lib/experience.ts`.** Do not hardcode year counts in new UI copy.
4. **No long-running server work in route handlers.** There are no `src/app/api` routes today.
5. **Do not introduce a database, auth provider, or CMS** without an explicit spec and an architecture update.
6. **Keep Server Components as the default.** Add `"use client"` only at the leaf that needs the browser.
7. **Achievement binaries in `public/images/achievements/` stay on disk.** `/achievements` is a footer text list, not a trophy gallery. Do not delete the binaries unless a spec says so.
