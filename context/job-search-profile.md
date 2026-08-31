# Job-search profile (private)

Desk overlay for `2.x`. Not a public page. Not imported by the Next app.

Career facts: `context/career-brief.md` (wins on conflict). Evidence: `src/lib/portfolio.ts`, `src/lib/selected-work.ts`, `src/lib/writing.ts`, `src/lib/data.ts`. Identity strings: `src/lib/site.ts`.

Do not invent employers, titles, metrics, or case studies. Letters follow career-brief voice: short, plain, no fluff, no em dashes.

## Candidate

- Name: Rajon Dey
- Public title: Senior Software Engineer
- Current role: Module Lead (Frontend) and Senior Software Engineer at SJ Innovation LLC (Bangladesh)
- Experience: corporate start May 2019; use `src/lib/experience.ts` for year counts, never hardcode
- Location: Sylhet, Bangladesh (UTC+6)
- Notice: currently employed, 4-week notice
- English: professional. German: not fluent (see vetoes)
- Email: contact@rajondey.com
- Portfolio: https://portfolio.rajondey.com
- LinkedIn: https://linkedin.com/in/rajondey
- GitHub: https://github.com/RajonDey
- IEEE: https://ieeexplore.ieee.org/document/11491067

## Stack (for matching, not a skill dump on letters)

React, Next.js, TypeScript, Node.js, Python/FastAPI. Working knowledge of AWS, Docker, CI/CD. Full-stack production including healthcare and SaaS.

## Target roles

- Titles to search: Senior Software Engineer, Full-Stack Engineer, Senior Frontend Engineer, Tech Lead
- Mix: about 70% Full-Stack / SWE / Tech Lead, about 30% Senior Frontend
- Industries: healthcare tech, SaaS, EdTech, AI/LLM tooling, headless CMS / DXP
- Role type: full-time only
- Default application title: Senior Software Engineer
- Frontend-only posting: Senior Frontend Engineer
- SJI-tier / Tech Lead posting: Tech Lead / Module Lead (Frontend). Never the public H1

## Title used on each surface

| Surface | Title |
| --- | --- |
| Default (site, SWE applications) | Senior Software Engineer |
| Secondary line | Full-stack (React, Next.js, TypeScript, Node, Python) |
| Research kicker | `FULL-STACK · LLM SECURITY` (not the H1) |
| SJI-tier / Tech Lead postings | Tech Lead / Module Lead (Frontend), not the H1 |
| Frontend-only postings | Senior Frontend Engineer + frontend CV |
| Scholarship / academic readers | Same site. Lead with IEEE on `/writing` |

Do not call Rajon a researcher in the H1 or in application headlines.

## Relocation and visa (private; never on the public site beyond the existing About line)

- Germany (primary): EU Blue Card via employer offer. Opportunity Card only if remote applications stall
- Netherlands (primary): Kennismigrant via IND-recognized sponsor
- Canada (secondary): Express Entry STEM (NOC 21231/21232); Global Talent Stream if an offer appears
- Japan (Tokyo): one-off exception (e.g. HENNGE)
- Excluded: Portugal, Estonia, US
- Execution order: (1) Canada Express Entry profile, (2) Germany/Netherlands as main track, (3) Opportunity Card in reserve
- Public About already has: based in Sylhet; open to Germany, Netherlands, and Canada. Do not add visa essays to the site

## Salary (private)

Country-adjusted, roughly €65k–€85k gross. Not for the public site. Later fit specs may flag below-band postings; do not invent a different number.

## Hard vetoes (skip; do not pack)

- Fluent / C1 / “Deutsch in Wort und Schrift erforderlich” / German required as a condition of the job. “German is a plus” is not a hard skip (later fit spec ranks it)
- Contract, freelance, hourly, intern, junior, Werkstudent, Praktikum, working-student
- Not full-time
- Location in Portugal, Estonia, or the US
- Invented or dual-career researcher branding as the job title

## Quality bar

Precision, not volume. Only jobs with a real shot at a call. Weekly shortlist cap (for `2.5`): about 5–8, not 40. Owner reviews and sends; never auto-submit.

## CV variants

| Variant | When | Source |
| --- | --- | --- |
| SWE default | Most postings | Google Doc `1_4CDSLUAE8K2_QRXg12bkbvPgIrSY8jzJibTDDiyMJA`; web PDF https://rajondey.com/cv.pdf (`CV_URL` in `src/lib/site.ts`) |
| Frontend-only | Senior Frontend / UI-heavy postings | Google Doc `1FTe6VOEeQ-6YLV0rboZaTrOGnCkynpp_3k8BKYNKu7M` (`FRONTEND_CV_URL`) |
| Master reference | Human editing only, not an application file | Google Doc `19gTE6HCaFoAqtolYyL4k0QyHS3CJdJ2y5I5rYmtSV4M` |

`2.3` compiles application copies from these. This overlay does not compile PDFs.

## Work articles to attach (max two work URLs, plus writing when relevant)

Base: `https://portfolio.rajondey.com/work/{slug}`. Slugs from `SELECTED_WORK_SLUGS` only.

| When the posting is about | Attach |
| --- | --- |
| Healthcare / EMR / clinics | `calystapro-emr`, `patient-experience-propel-health` |
| Patient-facing healthcare UX | `patient-experience-propel-health`, `calystapro-emr` |
| Headless CMS / DXP / Contentful | `dxp-neutrogena-migration` |
| B2B marketplace / platform SaaS | `racksub-b2b-platform` |
| EdTech / assessments | `online-ielts-test-platform` |
| Product / planning / full-stack app | `year-in-review` |
| Tech Lead / team leadership | `dxp-neutrogena-migration` (plus one domain match) |
| LLM / AI security / trust / adversarial ML | IEEE paper (https://ieeexplore.ieee.org/document/11491067), not a `/work` slug |

Elsevier survey is under review (no official URL). Do not lead an application with it. Do not use `/testimonials` or `/achievements` as application evidence unless a later spec says so.

## Writing

- Lead proof: IEEE ICCIT 2025, *Code Poisoning Through Misleading Comments: Jailbreaking Large Language Models via Contextual Deception*
- Secondary (do not lead): Elsevier survey under review, 2026, *Agentic Artificial Intelligence: A Survey of Architectures, Evolutionary Dynamics, and Governance*

## Search queries (for `2.4`, recorded now so discovery does not invent titles)

Use these title + location shapes. Do not add intern/junior queries.

- Senior Software Engineer / Full-Stack Engineer / Senior Frontend Engineer / Tech Lead
- Locations: Germany (Berlin, Munich, Hamburg, remote-DE), Netherlands (Amsterdam, Rotterdam, remote-NL), Canada (secondary), Tokyo only for named one-offs
- Keywords: React, Next.js, TypeScript, Node.js, healthcare, SaaS, EdTech, headless CMS, DXP, LLM

## Desk boundary (architecture; no code in `2.0`)

```
rd-portfolio/
  src/app/          public document (authless, no nav to desk)
  src/app/desk/     private desk (password, noindex, not in sitemap) — `2.1` shell
  src/lib/desk/     access, copy, fit (`2.2`), pack PDFs (`2.3`), discovery (`2.4`), weekly email (`2.5`), tracker (`2.6`)
  context/job-search-profile.md   this overlay
```

- One git repo, same npm scripts
- Public origin stays a hiring document
- Unauthenticated `/desk` 404s when locked (production, missing password, bad password). Local `next dev` with `DESK_PASSWORD` shows a password form (`2.1`).
- Production `/desk` stays off until a later spec; weekly email (`2.5`) is the remote review surface
- Local tracker (`2.6`): `.desk-out/tracker.json`. Applied / interview / skip / silence hide a posting from Find jobs and a local weekly run. GitHub Action weekly runs do not see this file.
- One-user password, not Clerk/OAuth/user tables (`2.1`)
- Generated packs never go in `public/`
- Auto-apply is out of product
