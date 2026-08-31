# Specs

Feature contracts for this portfolio. **Context describes the product. Specs describe the next change.** Agents implement only from a spec whose status is `ready` (or from an explicit user override).

## Flow

```
Owner names what they expect  →  agent writes that one spec  →  owner reviews
Status: ready  →  implement that spec only  →  update context/progress-tracker.md
```

Do not write the next spec until the owner asks. Do not implement from names in this list.

## Naming

```
specs/{major}.{minor}-{short-slug}.md
```

| Part    | Meaning                                                                 |
| ------- | ----------------------------------------------------------------------- |
| `0.x`   | Current phase (workflow + portfolio v2)                                 |
| `1.x`   | After v2 ships (public-site follow-ups)                                 |
| `2.x`   | Private job desk in this repo (`/desk`). Fill one stub at a time.       |
| slug    | kebab-case, one concern                                                 |

Use the next unused minor number. Do not reuse a number.

## Files in this folder

| File | Status | Role |
| ---- | ------ | ---- |
| `_template.md` | — | Copy this when filling a stub |
| `README.md` | — | This file |
| `0.0-ai-dev-workflow.md` | `done` | AI-dev workflow |
| `0.1-positioning-and-voice.md` | `done` | Public identity, voice, default CV |
| `0.2-information-architecture.md` | `done` | Routes, nav, redirects |
| `0.3-selected-work-inventory.md` | `done` | Three home proofs, 4–6 work pieces |
| `0.4-home-index.md` | `done` | Document home, kicker, dual CTAs |
| `0.5-work-and-case-studies.md` | `done` | `/work` list and articles |
| `0.6-writing-ieee.md` | `done` | `/writing`, IEEE lead |
| `0.7-about.md` | `done` | Experience, stack, CV variants |
| `0.8-visual-system.md` | `done` | UI/UX pass (not first) |
| `0.9-retire-v1-surfaces.md` | `done` | Remove tutorial chrome |
| `0.10-seo-and-metadata.md` | `done` | Titles, OG, JSON-LD, sitemap |
| `0.11-footer-archives.md` | `done` | Footer `/testimonials` and `/achievements` |
| `1.0-og-artwork.md` | `done` | Paper/ink Open Graph card |
| `1.1-writing-under-review.md` | `done` | Under-review survey + Developer Data link |
| `2.0-job-search-profile.md` | `done` | Private profile + desk boundary. No UI |
| `2.1-desk-shell.md` | `done` | `/desk` password, fail-closed 404, noindex |
| `2.2-fit-from-jd.md` | `done` | Paste JD → apply/skip, variant, work links |
| `2.3-pack-and-cv.md` | `done` | Compiled CV + letter pack |
| `2.4-legal-discovery.md` | `done` | Arbeitnow + curated ATS feeds |
| `2.5-weekly-email.md` | `done` | Weekly run + email packs |
| `2.6-application-tracker.md` | `done` | Applied / interview / skip / silence |

`stub` means the file exists so you can fill it. Agents must not implement a stub. Fill it (or ask the agent to write that one spec), set `ready`, then execute.

## Planned sequence (v2)

Full research: `context/portfolio-v2.md`. Fill and ship **one spec at a time** in this order.

| File | Intro |
| ---- | ----- |
| `0.1-positioning-and-voice.md` | SWE first; AI/LLM research as secondary copy. Default industry CV. No layout. **Done.** |
| `0.2-information-architecture.md` | Target routes (`/`, `/work`, `/writing`, `/about`), nav labels, redirects from old URLs. **Done.** |
| `0.3-selected-work-inventory.md` | Choose the three home proofs and the 4–6 `/work` pieces. Content decision, little UI. **Done.** |
| `0.4-home-index.md` | Rebuild `/` as a document: kicker, one sentence, dual CTAs (Work primary, Writing secondary). **Done.** |
| `0.5-work-and-case-studies.md` | `/work` list + `/work/[slug]` as problem / role / constraints / outcome articles. **Done.** |
| `0.6-writing-ieee.md` | `/writing` with the IEEE paper as the lead item. **Done.** |
| `0.7-about.md` | Experience as a list, stack as prose, CV variants, optional location line. **Done.** |
| `0.8-visual-system.md` | **UI/UX pass** (type, paper, accent, pills). After `0.4`–`0.7`. Not first. **Done.** |
| `0.9-retire-v1-surfaces.md` | Remove Earth, timeline lib, tech-icon grid, showcase, unused nav. **Done.** |
| `0.10-seo-and-metadata.md` | Titles, OG, JSON-LD aligned to SWE identity; sitemap for new routes. **Done.** |
| `0.11-footer-archives.md` | Footer links to quiet `/testimonials` and `/achievements`. Off nav. **Done.** |

## Handoff

When a spec is ready, a sufficient prompt is:

> Implement `specs/0.1-{slug}.md`. Follow `AGENTS.md`. Do not expand scope.

Until then, the agent should refuse to invent the feature and should wait or help you finish the spec.

## After v2

| File | Intro |
| ---- | ----- |
| `1.0-og-artwork.md` | Paper/ink share card. Replaces the v1 navy OG graphic. **Done.** |
| `1.1-writing-under-review.md` | IEEE stays lead. Elsevier survey as under review. One Developer Data index link. **Done.** |

## Job desk (`2.x`)

Private application assistant in this same repo. Public site stays a document: no nav link, no sitemap, no login on hiring URLs. Fill and ship **one spec at a time** in this order. Stubs are not implementable.

| File | Intro |
| ---- | ----- |
| `2.0-job-search-profile.md` | Locked profile from `career-brief.md`. Architecture exception for `/desk`. No UI. **Done.** |
| `2.1-desk-shell.md` | Empty `/desk`: password, 404 when locked, noindex. Production desk stays off. **Done.** |
| `2.2-fit-from-jd.md` | Paste a JD. Score, vetoes, CV variant, work articles. First useful slice. **Done.** |
| `2.3-pack-and-cv.md` | Downloadable tailored CV PDF + cover letter. Human send only. **Done.** |
| `2.4-legal-discovery.md` | Public APIs and company ATS feeds. No LinkedIn login. **Done.** |
| `2.5-weekly-email.md` | Weekly shortlist emailed as packs. **Done.** |
| `2.6-application-tracker.md` | Applied / interview / skip so jobs do not return. **Done.** |

Later (no files yet): hosted production `/desk`, NL sponsor register, Canada Job Bank, interview prep. Never: auto-submit.
