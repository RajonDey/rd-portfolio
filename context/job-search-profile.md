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

- Titles to search: Senior Software Engineer, Full-Stack Engineer, Senior Frontend Engineer, Tech Lead (Lead Frontend Engineer / Module Lead as aliases)
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
- Contract, freelance, hourly, intern, junior, entry-level, Werkstudent, Praktikum, working-student, short contract (1–3 months)
- Not full-time
- Location in Portugal, Estonia, or the US
- US work authorization: citizenship, green card, W2, US-only, no US visa sponsorship (even when the location field says Remote). “No visa sponsorship” on a German/Dutch Blue Card or kennismigrant posting is not this veto
- Must already live in the EU, UK, Germany, or Netherlands, with no relocation / visa / hire-from-abroad language
- Title is DevOps / SRE specialist, ML Research Engineer, or people-manager Engineering Manager with no IC coding
- Interview bar is LeetCode / HackerRank DSA / data-structures-and-algorithms / competitive programming. A practical take-home is not this veto. Prep then shows the locked DSA note
- Computer Science (or CSE) degree **required**. Preferred, or “or equivalent”, is not a skip
- Invented or dual-career researcher branding as the job title

## Quality bar

Precision, not volume. Only jobs with a real shot at a call. Apply-eligible jobs get a rules score 0–100 (`2.19`). Inbox and Monday mail sort by that score, then recency. Weekly shortlist cap (for `2.5`/`2.9`): about 5–8 DE/NL/CA, plus up to two Singapore/Bangladesh overflow (`2.16`), not 40. Owner reviews and sends; never auto-submit. Remote worldwide without visa/relocation is not boosted.

## Weekly loop

1. Monday mail is a reminder. Nothing was submitted. No CV or letter is attached.
2. Open the posting. If it is a real fit, open Desk (`https://portfolio.rajondey.com/desk`).
3. Inbox lists Apply hits. The title is the posting. Paste a job when the posting was not in the scan (LinkedIn, Indeed, Wellfound, Relocate, Job Bank, SuperCoder, and other login boards).
4. Apply by hand on the company site. Never auto-submit.
5. Apply with the matching Google Doc (SWE or Frontend). Desk ATS draft CV is optional. Delete the download after you send.
6. Mark the tracker: Applied (you sent it), Skip (you will not apply), Silence (hide without applying), Interview (they replied). Clear only if you hid it by mistake. All four statuses hide the URL from Find jobs and Monday mail.
7. Delete the downloaded PDFs from Downloads. Do not save extra copies to Drive. `.desk-out` pack PDFs are already removed on Applied (`2.10`). The tracker row is the record.
8. When they reply, mark Interview. Open Prep on that Tracker row. Use locked logistics and work links. Do not invent extra stories.

## CV variants

| Variant | When | Source |
| --- | --- | --- |
| SWE default | Most postings | Google Doc `1_4CDSLUAE8K2_QRXg12bkbvPgIrSY8jzJibTDDiyMJA`; web PDF https://rajondey.com/cv.pdf (`CV_URL` in `src/lib/site.ts`) |
| Frontend-only | Senior Frontend / UI-heavy postings | Google Doc `1FTe6VOEeQ-6YLV0rboZaTrOGnCkynpp_3k8BKYNKu7M` (`FRONTEND_CV_URL`) |
| Master reference | Human editing only, not an application file | Google Doc `19gTE6HCaFoAqtolYyL4k0QyHS3CJdJ2y5I5rYmtSV4M` |

`2.3` still compiles an ATS draft. The apply file is the Doc in this table (`2.12`). This overlay does not compile PDFs.

## Apply file

- The file you attach is the matching Google Doc: SWE default or Frontend. Export from the Doc when a form needs a PDF.
- Desk ATS draft CV is optional (plain Helvetica). Do not send it as the designed CV until a later craft spec.
- ATS draft experience bullets come from `src/lib/data.ts` (`2.13`). Edit that file when the master Doc changes.
- Desk letter is a starting draft. Edit if needed.
- Public site CV stays the existing web PDF. Master Google Doc stays for human editing only.

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

## Search queries (for `2.4`/`2.14`/`2.20`; encoded in `src/lib/desk/queries.ts`)

Do not invent extra titles at scan time. Mix: about 70% SWE / full-stack / Tech Lead, about 30% Senior Frontend. No intern/junior queries. Do not use Remote Worldwide as a primary location clause. Negative keywords stay `2.18` (after fetch). Arbeitnow stays page 1 (no invented search param). Remotive is one `category=software-dev` pull, then overlay geo/visa filter (`2.21`).

Location clause (every query): `(Germany OR Netherlands OR Canada OR Berlin OR Amsterdam OR relocation OR visa OR "Blue Card" OR kennismigrant)`

1. Primary (~70% intent): `("Senior Software Engineer" OR "Full Stack Engineer" OR "Full-Stack Engineer") AND (React OR "Next.js") AND <location clause>`
2. Lead alias: `("Tech Lead" OR "Lead Frontend Engineer" OR "Module Lead") AND TypeScript AND <location clause>`
3. Frontend lane (~30% intent): `"Senior Frontend Engineer" AND (React OR "Next.js") AND TypeScript AND <location clause>`

Title prefilter aliases: Lead Frontend Engineer / Lead Front-End Engineer count as Tech Lead (not a third CV). Overflow titles (SG/BD) stay the same as overlay titles. Tokyo remains named one-offs only.

## Discovery sources

- Arbeitnow page 1 plus owner-named ATS boards in `src/lib/desk/sources.ts` (`2.4` starter plus `2.22`: Babbel, D2L, Storyblok, 1Password, Wealthsimple, Cohere, Raisin, Miro). Do not invent further companies.
- Remotive public JSON (`software-dev`) and the current HN “Who is Hiring?” thread via Algolia (`2.21`). Keep only overlay geo (DE/NL/CA/Europe) or visa/relocation language. Link Remotive jobs to Remotive’s URL. HN comment URLs are `news.ycombinator.com/item?id=…` (do not fetch that host).
- Netherlands Arbeitnow hits are kept only if the company is on the IND public register of recognised sponsors (work / highly skilled migrant). Curated ATS boards, Remotive, and HN are not re-filtered.
- Canada Job Bank is paste-only. No live public JSON API; do not scrape `jobbank.gc.ca`.
- LinkedIn, Indeed, Wellfound, Relocate.me, and SuperCoder stay paste-only. No scrape or unofficial API. Desk Paste intro names these boards (`2.18`).
- Overflow (`2.16`): up to two extra Apply hits whose location/title is Singapore or Bangladesh. Same sources and fit gate. Generic remote that is not SG/BD stays in the main DE/NL/CA list.

## Interview prep

When a tracker row is Interview, Desk can open Prep (`2.15`). The brief is locked logistics, current SJI bullets from `data.ts`, and the `2.2`/`2.18` fit (CV Doc, work links, IEEE, red flags). A LeetCode/DSA bar adds the locked DSA note. No LLM. No invented stories.

## Usage notes

Signed-in `/desk` has Notes (`2.17`). Jot issues and ideas there. Same store as the tracker: gist `feedback.json` on live, `.desk-out/feedback.json` locally. No database. Clear a note after it becomes a spec.

## Desk boundary (architecture; no code in `2.0`)

```
rd-portfolio/
  src/app/          public document (authless, no nav to desk)
  src/app/desk/     private desk (password, noindex, not in sitemap) — `2.1` shell
  src/lib/desk/     access, copy, fit (`2.2`), pack PDFs (`2.3`), discovery (`2.4`/`2.14`/`2.21`), weekly email (`2.5`/`2.9`), tracker (`2.6`/`2.7`), pack lifecycle (`2.10`), interview prep (`2.15`), usage notes (`2.17`)
  context/job-search-profile.md   this overlay
```

- One git repo, same npm scripts
- Public origin stays a hiring document
- Unauthenticated `/desk` 404s when locked (missing password, bad password). With `DESK_PASSWORD` set, GET `/desk` shows the password form (`2.1`/`2.7`). `noindex`, not in nav.
- Hosted `/desk` (`2.7`): same gate on Vercel. Tracker uses a secret gist when `DESK_GIST_ID` + `DESK_GIST_TOKEN` are set; otherwise `.desk-out/tracker.json`.
- Weekly email (`2.5`/`2.9`) is the inbox reminder (no PDF attachments); `/desk` is the live scan and pack UI.
- One-user password, not Clerk/OAuth/user tables (`2.1`)
- Generated packs never go in `public/` or the gist. Leftover `.desk-out/**/*.pdf` are deleted when a job is marked Applied and at the start of each weekly run (`2.10`). Tracker JSON stays.
- Auto-apply is out of product
