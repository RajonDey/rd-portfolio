# Rajon Dey Portfolio

Version 2 is **shipped** (`specs/0.1`–`0.11`, plus `1.0` OG artwork). Implement only from a `ready` spec. Career facts: `context/career-brief.md`. Job-search overlay (private): `context/job-search-profile.md`. V2 research and keep/cut history: `context/portfolio-v2.md`. How the app is built: `context/architecture.md`. Visual system: `context/ui-context.md`.

## Overview

Personal site for **Rajon Dey**, used as a hiring document for full-time Senior Software Engineer / Full-Stack roles (healthcare, SaaS, EdTech, AI/LLM tooling, headless CMS/DXP), with Germany and the Netherlands as the main relocation track.

Live URL: [https://portfolio.rajondey.com](https://portfolio.rajondey.com)

The app is **static Next.js**, content in `src/lib/`. The public site has no auth, no database, no CMS. A private job desk (`/desk`) opens when `DESK_PASSWORD` is set and is not a public page.

The live site is a **short document**: identity, three selected proofs, a work list, one writing/research lane. V1 (tutorial landing: Earth, timeline, tech icons, card grids) was retired in `0.9`.

## Goals

1. Read as a senior engineer site, not a tutorial clone or an AI landing page.
2. Default identity: **Senior Software Engineer** (full-stack). Tech Lead / Module Lead only where a spec says so (About, SJI-tier), never as the H1.
3. Two proof lanes: **Work** (shipped product) and **Writing** (IEEE paper first). Not two equal careers.
4. Selected work, not an archive. IEEE as a proof point, not a certificate thumbnail.
5. Stay easy to update in `src/lib/*`.

## Core User Flow

1. Land on `/` — kicker, name, role, one paragraph, Work/Writing CTAs, three selected evidence items, current role, links (email, GitHub, LinkedIn). CV is in the nav.
2. Open **Work** for the six selected pieces; open one article for depth.
3. Open **Writing** for the IEEE paper, the under-review survey, and a link to Developer Data.
4. Open **About** for experience, stack as prose, location, CV variants.
5. Leave via email or CV.

Footer (off nav): `/testimonials`, `/achievements`. Old URLs `/projects`, `/showcase`, `/case-studies` 308 to `/work`.

## Features

### Current (v2)

- Index as a document (`HOME_EVIDENCE` in `src/lib/selected-work.ts`).
- `/work` + `/work/[slug]` as the work lane.
- `/writing` for the IEEE paper, one under-review manuscript, and a Developer Data index link (not a post list).
- `/about` for experience and logistics.
- Quiet nav: Work · Writing · About · CV.
- Footer archives: `/testimonials`, `/achievements`.
- Paper/ink visual system (IBM Plex). Share card from `opengraph-image.tsx`.

### Retired (v1)

- Home sections: Header animation, Introduction cards, TechStack icons, Experience timeline, Projects cards, Achievements slice, Testimonials wall, Contact + Earth.
- `/projects` filter archive, `/showcase`. Those paths 308 to `/work`.
- `/case-studies/[slug]` 308 to `/work/[slug]`.

## Scope

### In Scope

- Spec-driven changes on the shipped v2 site (copy, inventory, visual, SEO, new `1.x` units).
- Static content updates in `src/lib/*` when a spec names the records.
- SEO/metadata aligned with Senior Software Engineer.
- Private job desk overlay in `context/job-search-profile.md` (`2.0`). `/desk` shell (`2.1`) opens when `DESK_PASSWORD` is set, including Vercel (`2.7`). Paste-JD fit (`2.2`/`2.18`/`2.19`). Compiled ATS draft CV + letter on `/desk/pack` (`2.3`). Apply file is the matching Google Doc (`2.12`). Legal discovery from Arbeitnow, Remotive, HN Who is Hiring, and owner-named ATS boards (`2.4`/`2.21`/`2.22`); NL Arbeitnow hits filtered by the IND sponsor register (`2.14`). LinkedIn, Job Bank, Relocate, Wellfound, Indeed, and SuperCoder stay paste-only (`2.18`). Weekly reminder email (`2.9`), no PDF attachments. Application tracker (`2.6`/`2.7`): local JSON or a secret gist. Desk UI (`2.8`). Weekly loop (`2.11`). Interview prep on Interview tracker rows (`2.15`). Up to two Singapore/Bangladesh overflow Apply hits (`2.16`). Usage notes on `/desk` (`2.17`).

### Out of Scope

- Auth, CMS, database, chatbot, MCP-for-the-portfolio, 3D as a skill demo **on the public site**.
- Private job desk as a public page, nav/footer link, or sitemap entry. Auto-apply.
- Invented blog, invented metrics, invented case studies.
- Visa essays on the homepage.
- Contract/freelance positioning.
- Dark mode unless a later spec asks.
- Cloning Gourob’s, Paco’s, or Brittany Chiang’s visual design.
- Academic CV on the site until the owner supplies a file and a spec places it.

## Success Criteria

V2 criteria in `context/portfolio-v2.md` are met. Code changes still need `npm run typecheck` (and `build` if routes or `next.config` change).

## Audience

Primary: hiring managers and engineering leads for **full-time** Senior SWE / Full-Stack / (sometimes) Senior Frontend roles in the target industries, including visa-sponsoring employers in Germany and the Netherlands.

Secondary: people who already have the IEEE link or a case-study URL.

Not: a general “hire a freelancer” audience.

## Brand / voice

- First person, short, concrete. Same bar as cover letters in `career-brief.md`.
- **No em dashes.** No “Hi, I’m” as the design. No slogan stacks of titles.
- Years of experience: `src/lib/experience.ts` only, never hardcoded.
- Default public title: **Senior Software Engineer**.
