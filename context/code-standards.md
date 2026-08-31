# Code Standards

First draft from this repo’s actual patterns. Match neighboring files; do not impose a new architecture.

V2 visual and IA changes only land through `ready` specs. Do not reintroduce Earth, the timeline, or archive pages as cleanup.

## General

- Keep modules single-purpose: a page composes, a component renders, `src/lib/*` owns data and helpers.
- Fix root causes. Do not add a parallel data array in a component because the lib shape is inconvenient — extend the type or helper instead.
- Do not mix unrelated routes in one change (e.g. testimonials copy + 3D contact rewrite).
- Prefer small, reviewable diffs that a spec can accept.

## TypeScript

- `strict` is on. Do not add `any`. Use existing interfaces in `src/types/index.ts` or export new ones next to the data that needs them (`CaseStudy`, `PortfolioEntryViewModel`, `ProjectDetail`, `Certificate`).
- App Router dynamic `params` and `searchParams` are **Promises** on newer pages (`await params`). Match the page you are editing; do not “simplify” back to sync params on a file that already awaits.
- Validate assumptions at the boundary: `getXBySlug` → `notFound()` if missing.

## Next.js / React

- Default to Server Components.
- `"use client"` only for state, effects, Framer Motion, or Next navigation hooks.
- Put client leaves **below** a server page when possible (`MainNavigation` is client; pages are server components).
- Internal navigation: `next/link`. External: `<a target="_blank" rel="noopener noreferrer">`.
- New routes: add `generateMetadata` (or a layout metadata export).
- Images: `next/image`. If you need a remote host, add it in `next.config.ts` — do not disable the optimizer to “just make it work”.

## Styling

- Tailwind utility classes. No new CSS-in-JS.
- Prefer theme tokens (`primary`, `accent`, `textDark`, `textLight`, `secondary`, `background`) over raw hex.
- Reuse existing button, card, and section class strings from a nearby page rather than inventing a new visual language.
- Keep radius and type scale as defined in `context/ui-context.md`.
- Avoid adding global CSS unless the utility is truly shared.

## Data and content

- Add or edit portfolio content in `src/lib/portfolio.ts`, experience in `src/lib/data.ts`, site strings in `src/lib/site.ts`.
- Never duplicate a case study into `projects[]`.
- Derived labels (years of experience, copyright range) belong in `src/lib/experience.ts` / `site.ts`.
- Do not invent case studies, quotes, metrics, or employer claims. If the spec does not include the copy, stop and ask, or record an open question in `context/progress-tracker.md`.
- Public copy follows `context/career-brief.md`: short, specific, **no em dashes**, no AI filler (“passionate,” “innovative solutions,” “bring your ideas to life”).
- Default on-site title is **Senior Software Engineer**. Do not put Module Lead / Tech Lead in the H1 unless a spec says so.

## File Organization

- `src/app/<route>/page.tsx` — route entry
- `src/app/layout.tsx` — chrome + default metadata
- `src/components/<Domain>/` — UI for that domain
- `src/lib/<dataset>.ts` — content + pure helpers
- `src/types/index.ts` — shared card-level types
- `public/images/...` — binaries referenced by data `image` / `pdfUrl` fields
- `context/` — AI knowledge (not bundled)
- `specs/` — feature specs (not bundled)

Colocate a new component with its domain folder. Do not create `src/components/ui/` unless a spec introduces a real primitive kit.

## Naming

- Components: `PascalCase.tsx`, default export matching the file name.
- Helpers: `camelCase`, named exports.
- Case study `id` / project detail `slug`: `kebab-case`.
- Spec files: `specs/{major}.{minor}-{short-slug}.md` (example: `0.1-unify-project-types.md`).

## Imports

- Prefer `@/` alias for lib/app hops when the file already uses it (`@/lib/experience`).
- Many components still use relative `../../lib/...`. When touching a file, **do not restyle every import** — match that file.

## Verification

Before calling a unit done:

1. `npm run typecheck`
2. `npm run lint`
3. `npm run build` if the change touches routes, metadata, or `next.config`
4. Exercise the changed route in the browser (home, `/projects`, detail, or whichever you touched)

## Do not

- Add dependencies unless the spec names them.
- Introduce API routes, env secrets, or auth “just in case”.
- Rewrite `SEO.tsx`, `/showcase`, or `SidebarNav` as drive-by cleanup.
- Commit `.env` files or secrets.
