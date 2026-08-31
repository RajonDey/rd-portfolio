# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- Portfolio v2 shipped (`0.1`–`0.11`). Follow-ups `1.0` OG and `1.1` writing are **done**. Job desk `2.0`–`2.6` are **done**.

## Current Goal

- Academic CV remains a later `1.x` (owner writes the PDF first). Hosted production `/desk` is a later spec.

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
- **`1.0-og-artwork`:** paper/ink 1200×630 share card via `opengraph-image.tsx` (IBM Plex, kicker, name, role, Work/Writing pills). Replaced the v1 navy Module Lead graphic. Snapshot at `public/og-image.png`.
- **`1.1-writing-under-review`:** `/writing` adds the Elsevier agentic-AI survey as under review (no URL). One index link to Developer Data. Home and JSON-LD stay IEEE-only.
- **`2.0-job-search-profile`:** private overlay in `context/job-search-profile.md`. Architecture records planned `/desk` (code from `2.1`). Public site unchanged. No `src/` in this unit.
- **`2.1-desk-shell`:** `/desk` empty home in `next dev` with `DESK_PASSWORD`. Production and locked requests 404. `noindex`, not in sitemap/nav. Cookie HMAC, not Clerk.
- **`2.2-fit-from-jd`:** paste a JD on `/desk`. Rules scorer: apply/skip, CV variant, work slugs, IEEE when relevant. No PDF, no LLM.
- **`2.3-pack-and-cv`:** Apply on `/desk` downloads a tailored CV PDF and one-page letter via `@react-pdf/renderer`. Skip has no pack. Files are not written to `public/`.
- **`2.4-legal-discovery`:** Find jobs on `/desk` scans Arbeitnow + curated Greenhouse/Ashby/Personio boards, scores with `2.2`, lists Apply hits. No LinkedIn. No persistence.
- **`2.5-weekly-email`:** `npm run desk:weekly -- --dry-run` writes packs to `.desk-out/`. GitHub Action Mondays emails the owner via Resend. Cap 8. Production `/desk` stays 404.
- **`2.6-application-tracker`:** `/desk` records applied / interview / skip / silence in `.desk-out/tracker.json`. Those URLs drop from Find jobs and local weekly runs. GitHub Action weekly runs do not see the file.

## In Progress

- None.

## Next Up

1. Academic CV — owner writes the PDF; then a `1.x` spec for how it appears on the site (About / Writing, not the H1).
2. Hosted production `/desk` / remote tracker (later spec). GitHub Action weekly mailer still cannot see local `tracker.json`.

## Open Questions

- Which three home evidence items? **Updated 2026-08-31:** IELTS Ready - Online IELTS Test Platform, YearInReview, IEEE paper (`HOME_EVIDENCE`). `/work` list is unchanged.
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
- **Job desk (`2.x`):** overlay (`2.0`), local `/desk` shell (`2.1`), paste-JD fit (`2.2`), compiled pack (`2.3`), legal discovery (`2.4`), weekly email (`2.5`), application tracker (`2.6`). Public site stays authless and unlinked. Production `/desk` is 404 until a later spec. Auto-apply is out. Do not implement from stubs.

## Session Notes

- Colleague site used for **IA only** ([Gourob](https://gourob-portfolio.vercel.app/)): selected evidence + work-as-article. Not a visual clone.
- Reference DNA (structure): [paco.me](https://paco.me/), [leerob.com](https://leerob.com/), [emilkowal.ski](https://www.emilkowal.ski/), [brittanychiang.com](https://brittanychiang.com/) (list layout, not her forked v4 theme).
- Achievement image binaries remain in `public/images/achievements/` with no gallery route.
- **2026-08-31 cleanup:** Removed unused v1 files/assets, duplicate OG/favicon, leftover case-study fields (`process` / `features` / `learnings` / `nextSteps`), and work records for LLM research site, Franchisor AI Labs, Advanced GI Care, and ClipKit. IEEE extra links (research site, Zenodo, GitHub) stay on `/writing`.
- **2026-08-31 home Selected:** IELTS Ready - Online IELTS Test Platform, YearInReview, IEEE paper. CalystaPro stays on `/work`, not on home.
- **2026-08-31 OG:** v1 navy card retired. Share previews use the document card (`1.0`). Academic CV still unplanned until the owner has a file.
- **2026-08-31 context:** `project-overview.md` updated to describe shipped v2 (no longer “code is still v1”).
- **2026-08-31 writing:** Under-review Elsevier survey on `/writing` below IEEE. Developer Data is an index link, not a post list (`1.1`).
- **2026-08-31 job desk:** Overlay (`2.0`) through application tracker (`2.6`) shipped. `2.x` sequence in this repo is complete. Auto-apply never.
