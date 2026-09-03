# Architecture Context

This site is a **content-driven Next.js App Router app** with no server database.

Public routes: `/`, `/work`, `/work/[slug]`, `/writing`, `/about`, plus footer archives `/testimonials` and `/achievements` (`0.11`). Private `/desk` opens when `DESK_PASSWORD` is set (`2.1`, hosted in `2.7`). Paper/ink visual system (`0.8`). V1 tutorial chrome retired (`0.9`).

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
| Desk PDFs    | `@react-pdf/renderer`                           | Compiled CV + letter on `/desk/pack` (`2.3`). Helvetica, not IBM Plex. |
| Deploy       | Assumed Vercel-style Node host                  | `next build` / `next start`; no custom server     |

The **public site** has **no auth, no ORM, no CMS, and no app-owned API**. Contact is mailto, GitHub, and LinkedIn.

**Private desk (`2.1`–`2.22`):** `/desk` and `src/lib/desk/` for the owner’s job-search desk. Not in nav, sitemap, or footer. Overlay: `context/job-search-profile.md` (not imported by the app). Weekly loop is in that overlay (`2.11`). Apply file is the matching Google Doc (`2.12`); desk PDF is an ATS draft whose experience bullets come from `src/lib/data.ts` (`2.13`). Auto-apply is out. `/desk` opens wherever `DESK_PASSWORD` is set (local or Vercel). Packs are streamed PDFs, never written to `public/`. Leftover `.desk-out` pack PDFs are deleted on Applied and on each weekly run (`2.10`). Discovery is on-demand from Arbeitnow, Remotive, HN Who is Hiring, and owner-named ATS boards (`2.4`/`2.21`/`2.22`). Netherlands Arbeitnow hits must match the IND recognised-sponsor register (`2.14`). Canada Job Bank, LinkedIn, Indeed, Wellfound, Relocate.me, and SuperCoder are paste-only (`2.18`). Find jobs and Monday mail may add up to two Singapore/Bangladesh Apply hits (`2.16`). Interview rows can open a prep brief from locked facts (`2.15`). Usage notes (`2.17`) use gist `feedback.json` or `.desk-out/feedback.json`. Weekly email (`2.5`/`2.9`) is a reminder shortlist (no PDF attachments); dry-run writes `.desk-out/` HTML. Tracker (`2.6`/`2.7`) is `.desk-out/tracker.json` locally, or a secret gist when `DESK_GIST_ID` + `DESK_GIST_TOKEN` are set.

## System Boundaries

- `src/app/` — Routes only. Compose data + components. Do not put large datasets here. Private: `src/app/desk/` (`2.1`).
- `src/components/` — Presentational / interactive UI (`Work/`, chrome).
- `src/lib/` — **Source of truth for content and derived helpers.** Desk helpers: `src/lib/desk/` (`2.1` access, `2.2`/`2.18`/`2.19` fit, `2.3` pack, `2.4`/`2.14` discover, `2.5`/`2.9` weekly email, `2.6` tracker, `2.7` gist store, `2.15` interview prep, `2.17` usage notes, `2.20` search queries).
- `src/types/` — Shared TypeScript interfaces (`Experience`, `Project`, `Testimonial`). Case study / portfolio view-model types live next to the data in `src/lib/portfolio.ts`.
- `public/` — Static assets: `/images/portfolios/`, `/images/achievements/` (binaries only), OG snapshot, icons, robots, sitemap, manifest.
- `context/` — AI/project knowledge. Not imported by the app. Job-search overlay: `context/job-search-profile.md`.
- `specs/` — Feature specs. Not imported by the app.

## Routes

| Path                    | File                                         | Notes                                                                 |
| ----------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| `/`                     | `src/app/page.tsx`                           | Document home: kicker, dual CTAs, `HOME_EVIDENCE`                     |
| `/work`                 | `src/app/work/page.tsx`                      | Selected list via `getSelectedWorkEntries()`                          |
| `/work/[slug]`          | `src/app/work/[slug]/page.tsx`               | Slim article via `getWorkArticle()`                                   |
| `/writing`              | `src/app/writing/page.tsx`                   | IEEE lead + under-review survey (`src/lib/writing.ts`)                |
| `/about`                | `src/app/about/page.tsx`                     | Facts page (`src/lib/about.ts`, `experiences`)                        |
| `/testimonials`         | `src/app/testimonials/page.tsx`              | Footer archive. Existing quotes. Off nav.                             |
| `/achievements`         | `src/app/achievements/page.tsx`              | Footer archive. Awards/certs. Off nav. IEEE paper stays on `/writing`. |
| `/desk`                 | `src/app/desk/page.tsx`                      | Private desk. Opens when `DESK_PASSWORD` is set (local or Vercel). Off nav. |
| `/desk/session`         | `src/app/desk/session/route.ts`              | POST sets/clears session cookie. GET 404.                                       |
| `/desk/fit`             | `src/app/desk/fit/route.ts`                  | POST scores a pasted JD. Session required. GET 404.                             |
| `/desk/pack`            | `src/app/desk/pack/route.ts`                 | POST streams CV or letter PDF. Apply only. Session required. GET 404.           |
| `/desk/discover`        | `src/app/desk/discover/route.ts`             | POST scans Arbeitnow, Remotive, HN Who is Hiring, and owner-named ATS boards; IND filter on NL Arbeitnow (`2.14`/`2.21`/`2.22`). Session required. GET 404. |
| `/desk/track`           | `src/app/desk/track/route.ts`                | GET lists tracked jobs. POST upserts or `status=clear`. Session required. Else 404. |
| `/desk/prep`            | `src/app/desk/prep/route.ts`                 | POST interview prep brief for a tracked URL. Session required. GET 404. |
| `/desk/notes`           | `src/app/desk/notes/route.ts`                | GET lists usage notes. POST adds or `status=clear`. Session required. Else 404. |
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
| Experience roles   | `src/lib/data.ts`            | `/about` list; desk interview prep (`2.15`)      |
| Career date math   | `src/lib/experience.ts`      | Metadata, footer, `/about` intro, home           |
| Case studies       | `src/lib/portfolio.ts`       | `/work/[slug]`                                   |
| Summary projects   | `src/lib/portfolio.ts`       | Selected work helpers                            |
| Project details    | `src/lib/portfolio.ts`       | `/work/[slug]`                                   |
| Unified view-model | `src/lib/portfolio.ts`       | `getAllPortfolioEntries()`                       |
| Site chrome        | `src/lib/site.ts`            | Identity, CV URLs, footer copyright, build date  |
| Selected work      | `src/lib/selected-work.ts`   | `/work` shortlist + `HOME_EVIDENCE`              |
| Work article map   | `src/lib/work-article.ts`    | Problem / role / constraints / outcome view-model |
| Writing            | `src/lib/writing.ts`         | `/writing` IEEE lead, under-review survey, Developer Data index link |
| About copy         | `src/lib/about.ts`           | `/about` intro, stack sentence, location line    |
| Desk ATS boards    | `src/lib/desk/sources.ts`    | `/desk` discovery (`2.4`/`2.14`/`2.22`)          |
| Desk Remotive / HN | `src/lib/desk/remotive.ts`, `src/lib/desk/hn-hiring.ts` | Find jobs extra feeds (`2.21`) |
| Desk search queries| `src/lib/desk/queries.ts`    | Locked title queries for discovery (`2.20`)      |
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
- **Git-tracked files in `public/`**: images, remaining achievement binaries, OG snapshot, PWA manifest.
- **External URLs**: CV PDF, live project sites, GitHub, LinkedIn, IEEE Xplore.
- **Env (optional):** `NEXT_PUBLIC_BUILD_TIME` — if set at build, footer shows “Site updated: …”.
- **Env (local / hosted desk):** `DESK_PASSWORD` in `.env.local` and in Vercel (Production). Required to open `/desk`. Never commit it. Without it, `/desk` is 404.
- **Env (weekly email, `2.5`/`2.9`):** `RESEND_API_KEY`, `DESK_MAIL_FROM` (required to send). Optional `DESK_MAIL_TO` (defaults to `CONTACT_EMAIL`). Dry-run does not send. Mail is HTML only: no CV or letter attachments. Never commit these.
- **Desk tracker (`2.6`/`2.7`):** `.desk-out/tracker.json` when gist env is unset (local). Secret gist file `tracker.json` when `DESK_GIST_ID` and `DESK_GIST_TOKEN` are set (Vercel + GitHub Action). Never `public/`. Never a database.
- **Desk usage notes (`2.17`):** `.desk-out/feedback.json` locally, or gist file `feedback.json` when the same gist env is set. Same gist as the tracker, different file. Never a database.
- **Desk packs (`2.3`/`2.10`):** streamed from `/desk/pack` only. Not written to `.desk-out/`, gist, or `public/`. Marking Applied, and each weekly run, deletes leftover `*.pdf` under `.desk-out/` (pre-`2.9` dry-run files). Tracker JSON stays.

No database. No blob store. No runtime writes on public routes.

## Auth and Access Model

Public hiring document: none. Do not add auth, sessions, or gated pages on public routes.

Private desk (`2.1`/`2.7`): one-user password (`DESK_PASSWORD`) on `/desk` when that env is set (local or Vercel). Unauthenticated with no password, or a bad password, 404s. With the password set, GET `/desk` shows the password form (`noindex`, not in nav). Cookie `desk_session` is httpOnly HMAC, `secure` in production. Not Clerk, OAuth, or user tables.

## Rendering model

- Default: **React Server Components** for pages that only read static data.
- `"use client"` only when the browser is required (nav open state, Framer Motion).
- Dynamic routes use `generateStaticParams` + `notFound()`.

## SEO architecture

- Canonical site origin: `https://portfolio.rajondey.com` (`SITE_ORIGIN` in `src/lib/site.ts`, `metadataBase` in layout).
- Root and per-route metadata via `getPageShareMetadata()` (title, description, canonical, OG, Twitter). Share images come from `src/app/opengraph-image.tsx` and `twitter-image.tsx` (`next/og`, IBM Plex in `src/app/og-fonts/`). `public/og-image.png` is a 1200×630 snapshot of the same card. JSON-LD Person + ScholarlyArticle in `SchemaOrg.tsx`.
- Sitemap lists v2 routes and the six selected work URLs. Manifest identity matches `0.1`; shortcuts are Work / Writing / About. `/desk` is not in the sitemap. `robots.txt` disallows `/desk`. Desk layout is `noindex`.

## Config

- Path alias: `@/*` → `./src/*` (`tsconfig.json`).
- `next.config.ts` uses `module.exports`, `images.domains` (`portfolio.rajondey.com`), `serverExternalPackages` for `@react-pdf/renderer`, and 308 redirects for retired URLs.
- Tailwind content globs: `src/app`, `src/components`.
- Scripts: `dev` (Turbopack), `build`, `start`, `lint`, `typecheck`, `desk:weekly` (`esbuild` bundle, `2.5`/`2.9`).

## Invariants

1. **Content is data, not JSX.** New projects / case studies are added in `src/lib/portfolio.ts`, then referenced by UI.
2. **Do not duplicate a case study as a `projects[]` card.** The unified list already includes case studies.
3. **Years of experience and “current role” dates come from `src/lib/experience.ts`.** Do not hardcode year counts in new UI copy.
4. **No long-running server work in route handlers.** Public site has no `src/app/api` routes. `/desk/session`, `/desk/fit`, `/desk/pack`, `/desk/discover`, `/desk/track`, `/desk/prep`, and `/desk/notes` are short desk POSTs (and GET list for `/desk/track` and `/desk/notes`) only. `/desk/fit`, `/desk/pack`, and `/desk/prep` may fetch one owner-known URL with a timeout. `/desk/discover` fetches Arbeitnow page 1, Remotive, HN Who is Hiring (Algolia), curated ATS boards, and the IND sponsor register in parallel, 8s timeout each (`maxDuration` 60 on Vercel). Allowlisted hosts include `remotive.com` and `hn.algolia.com` (`2.21`). The weekly email (`2.5`/`2.9`) is a CLI / GitHub Action, not a public route.
5. **Do not introduce a database, auth provider, or CMS on the public site** without an explicit spec and an architecture update. The private `/desk` exception is `2.x` only (`2.1` for the shell).
6. **Keep Server Components as the default.** Add `"use client"` only at the leaf that needs the browser.
7. **Achievement binaries in `public/images/achievements/` stay on disk.** `/achievements` is a footer text list, not a trophy gallery. Do not delete the binaries unless a spec says so.
