# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- Portfolio v2. Specs `0.1`–`0.11` are **done**.

## Current Goal

- v2 spec sequence is complete. Next unit is a named `1.x` spec if the owner wants one.

## Completed

- AI-dev workflow (context templates, `AGENTS.md`, `specs/0.0-ai-dev-workflow.md`).
- Career brief locked in `context/career-brief.md`.
- V2 research, diagnosis, keep/cut, target IA in `context/portfolio-v2.md`.
- Project overview, architecture, UI context, code standards, navigator, spec README sequence.
- **`0.1-positioning-and-voice`:** public identity is Senior Software Engineer; research is secondary copy; default CV PDF; GitHub URL fixed; CTA bands shortened. Shared strings in `src/lib/site.ts`.
- **`0.2-information-architecture`:** nav is Work · Writing · About · CV. Routes `/work`, `/work/[slug]`, `/writing`, `/about`. `/case-studies` 308s to `/work`.
- **`0.3-selected-work-inventory`:** `/work` shows six selected pieces. `HOME_EVIDENCE` locked for `0.4` (CalystaPro, IELTS, IEEE). Data in `src/lib/selected-work.ts`.
- **`0.4-home-index`:** `/` is a document (kicker, Work/Writing CTAs, three proofs).
- **`0.5-work-and-case-studies`:** `/work/[slug]` is a short article mapped from existing fields.
- **`0.6-writing-ieee`:** `/writing` is one IEEE paper (plus existing research/dataset/GitHub links on that same item).
- **`0.7-about`:** `/about` is a facts page: intro, experience list, stack sentence, location line, CV PDF + frontend Google Doc.
- **`0.8-visual-system`:** paper/ink tokens, IBM Plex Serif/Sans/Mono, pill CTAs, hairline nav/footer.
- **`0.9-retire-v1-surfaces`:** Earth, timeline, tech icons, showcase, WhatsApp, and unused chrome removed. `/projects` and `/showcase` 308 to `/work`.
- **`0.11-footer-archives`:** `/testimonials` and `/achievements` restored as quiet lists, linked from the footer, off nav.
- **`0.10-seo-and-metadata`:** titles, OG, JSON-LD Person + IEEE ScholarlyArticle, manifest, sitemap (v2 routes + six selected work URLs).

## In Progress

- None.

## Next Up

1. Named `1.x` only if the owner wants a follow-up (content, OG artwork, or otherwise).

## Open Questions

- Which three home evidence items? **Locked in `0.3`:** CalystaPro EMR, IELTS platform, IEEE paper (`HOME_EVIDENCE`).
- Which 4–6 work pieces on `/work`? **Locked in `0.3`:** CalystaPro, Neutrogena DXP, Racksub, Propel Health, IELTS, Year in Review.
- Relocation line on About: yes/no? **Locked in `0.7`:** yes, one line (Sylhet; open to Germany, Netherlands, Canada).
- WhatsApp: quiet link or drop? **Locked in `0.9`:** drop. No WhatsApp on the site.
- Testimonials: none vs two quotes on About? **Locked in `0.7`:** none on About. Full list is `/testimonials` via footer (`0.11`).
- Redirect vs 404 vs 410 for archives? **Locked in `0.9`/`0.11`:** `/projects` and `/showcase` 308 to `/work`. `/testimonials` and `/achievements` are live (footer).

## Architecture Decisions

- **Static TypeScript modules as CMS** — still true.
- **V2 is a document site** — selected work + writing lane; not a tutorial landing.
- **Identity** — public default is Senior Software Engineer / Full-Stack, not Module Lead in the H1. AI / LLM security research is a secondary lane (IEEE, scholarships), never a dual H1.
- **UI/UX is spec `0.8` (done):** paper/ink, IBM Plex pairing, pill CTAs.
- **IEEE** — proof point on home/writing, not a certificate gallery item.
- **Do not implement v2 without a `ready` spec.**
- **Retired URLs 308** — `/case-studies`, `/projects`, `/showcase` → `/work`. `/testimonials` and `/achievements` are footer archives (`0.11`).
- Light-only until a spec says otherwise.
- Spec-driven AI workflow unchanged.

## Session Notes

- Colleague site used for **IA only** ([Gourob](https://gourob-portfolio.vercel.app/)): selected evidence + work-as-article. Not a visual clone.
- Reference DNA (structure): [paco.me](https://paco.me/), [leerob.com](https://leerob.com/), [emilkowal.ski](https://www.emilkowal.ski/), [brittanychiang.com](https://brittanychiang.com/) (list layout, not her forked v4 theme).
- Achievement image binaries remain in `public/images/achievements/` with no gallery route.
