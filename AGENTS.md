# AGENTS.md

Navigator for this repo. Read this first, then open **only** the files this map points to. Do not load the entire tree “just in case”.

This is Rajon Dey’s **personal portfolio** (Next.js App Router, static content in `src/lib/`). The **public site** has no auth and no database. Job-search overlay: `context/job-search-profile.md`. Private `/desk` opens when `DESK_PASSWORD` is set (`2.1`, hosted `2.7`).

## Loop

```
1. context/     what the product is, how it is built, current progress
2. specs/       what to build in this unit (required before feature work)
3. code         implement against the spec
4. tracker      update context/progress-tracker.md when the unit ends
```

Full workflow rules: `context/ai-workflow-rules.md`.

## Always, at the start of a task

1. Read `context/progress-tracker.md` (what is in flight, what is blocked).
2. If the user is asking to **build or change a feature**, find a spec in `specs/` whose status is `ready` or `in-progress`. If none exists, **write or wait for a spec** — do not invent the feature.
3. Using the tables below, open the matching context file(s) and source files.
4. Implement the smallest unit that satisfies the spec.
5. When done: update the spec status, `context/progress-tracker.md`, and any context file whose facts changed.

## Context map — what to read

| Need                                        | File                            |
| ------------------------------------------- | ------------------------------- |
| What the site is, audience, in/out of scope | `context/project-overview.md`   |
| Career facts, titles, relocation, CV links  | `context/career-brief.md`       |
| Job-search overlay (titles, vetoes, CV map) | `context/job-search-profile.md` |
| V2 research, keep/cut, target IA            | `context/portfolio-v2.md`       |
| Stack, folders, routes, data model          | `context/architecture.md`       |
| Color, type, layout, components to reuse    | `context/ui-context.md`         |
| How to write code in this repo              | `context/code-standards.md`     |
| Spec lifecycle, split rules, protected files| `context/ai-workflow-rules.md`  |
| Done / next / open questions                | `context/progress-tracker.md`   |
| Feature contract                            | `specs/{n.n}-{slug}.md`         |
| Spec format                                 | `specs/_template.md`            |

## Task map — where the code lives

| User is talking about…                         | Open first                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------------- |
| Home / first screen                            | `src/app/page.tsx`                                                              |
| Top nav / CV button / mobile menu              | `src/components/MainNavigation.tsx`, `src/app/layout.tsx`                       |
| Experience / years on the job                  | `src/lib/data.ts`, `src/lib/experience.ts`, `src/app/about/page.tsx`            |
| Work list                                      | `src/app/work/page.tsx`, `src/lib/selected-work.ts`, `src/lib/portfolio.ts`     |
| Work / case study detail                       | `src/app/work/[slug]/page.tsx`, `src/lib/work-article.ts`, `src/components/Work/WorkArticleView.tsx` |
| Writing                                        | `src/app/writing/page.tsx`, `src/lib/writing.ts`                                |
| About                                          | `src/app/about/page.tsx`, `src/lib/about.ts`, `src/lib/data.ts`                 |
| Testimonials                                   | `src/app/testimonials/page.tsx`, `src/lib/testimonials.ts` (footer, off nav)    |
| Achievements                                   | `src/app/achievements/page.tsx`, `src/lib/certificates.ts` (footer, off nav)    |
| Old archive URLs                               | `next.config.ts` (308 `/projects` `/showcase` `/case-studies` → `/work`)        |
| Adding/editing a project or case study         | **`src/lib/portfolio.ts` only** for data; then `/work` or `/work/[slug]`        |
| Footer / copyright / “site updated”            | `src/components/Footer.tsx`, `src/lib/site.ts`                                  |
| SEO / OG / JSON-LD                             | `src/app/layout.tsx`, `src/app/SchemaOrg.tsx`, `src/lib/site.ts`                |
| Theme tokens / global CSS                      | `tailwind.config.ts`, `src/app/globals.css`, `context/ui-context.md`            |
| Types for project cards                        | `src/types/index.ts`                                                            |
| Job desk / application packs                   | `src/app/desk/`, `src/lib/desk/`, `context/job-search-profile.md`. Public nav never links here. Do not implement from `stub`. |

## Specs

- Location: `specs/`
- Name: `{major}.{minor}-{short-slug}.md` (examples: `0.1-positioning-and-voice.md`, `2.0-job-search-profile.md`)
- `0.x` / `1.x` = public site. `2.x` = private job desk in this repo.
- Copy `specs/_template.md`
- Status must be `ready` before implementation
- One spec = one shippable unit

If the user describes a feature in chat without a file: draft `specs/{next}-{slug}.md`, confirm it is `ready`, then implement.

## Hard rules (short)

- Content lives in `src/lib/*`, not copied into JSX.
- Selected work on `/work` and home proofs come from `src/lib/selected-work.ts`. Do not invent a parallel list in JSX.
- Do not duplicate a case study as a `projects[]` entry.
- Do not hardcode years of experience — use `src/lib/experience.ts`.
- Do not invent quotes, metrics, or case studies.
- Server Components by default; `"use client"` only when required.
- Do not add auth, a database, or API routes unless the spec says so.
- After each unit: update `context/progress-tracker.md`.

## Verify

- `npm run typecheck`
- `npm run lint`
- `npm run build` if routes or `next.config` changed
- Browser-check the routes you touched
