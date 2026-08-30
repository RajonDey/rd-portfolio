# Rajon Dey Portfolio

Version 2 **intent** (planning). Current code is still v1. Implement only from a `ready` spec. Career facts: `context/career-brief.md`. Structure and keep/cut: `context/portfolio-v2.md`.

## Overview

Personal site for **Rajon Dey**, used as a hiring document for full-time Senior Software Engineer / Full-Stack roles (healthcare, SaaS, EdTech, AI/LLM tooling, headless CMS/DXP), with Germany and the Netherlands as the main relocation track.

Live URL: [https://portfolio.rajondey.com](https://portfolio.rajondey.com)

The app stays **static Next.js**, content in `src/lib/`. No auth, no database, no CMS.

V1 (shipped) is a long marketing landing: hero animation, tech tabs, timeline, card grids, testimonials, achievements, 3D contact. V2 replaces that with a **short document**: identity, three proofs, selected work, one writing/research lane.

## Goals

1. Read as a senior engineer site, not a tutorial clone or an AI landing page.
2. Default identity: **Senior Software Engineer** (full-stack). Tech Lead / Module Lead only where a spec says so (About, SJI-tier), never as the H1.
3. Two proof lanes: **Work** (shipped product) and **Writing** (IEEE paper first). Not two equal careers.
4. Selected work, not an archive. IEEE as a proof point, not a certificate thumbnail.
5. Stay easy to update in `src/lib/*`.

## Core User Flow (v2 target)

1. Land on `/` — name, role, one paragraph, three selected evidence items, links (email, GitHub, LinkedIn, CV).
2. Open **Work** for the list; open one article for depth.
3. Open **Writing** for the IEEE paper (and later, only real posts).
4. Open **About** for experience, stack as prose, CV variants.
5. Leave via email or CV.

V1 flow (still in code): long home scroll → `/projects` filters → `/testimonials` / `/achievements`. Treat as legacy until retire specs run.

## Features

### V2 (planned)

- Index as a document (selected evidence).
- `/work` + `/work/[slug]` as the work lane.
- `/writing` for IEEE (and real writing only).
- `/about` for experience and logistics.
- Quiet nav: Work · Writing · About · CV.

### V1 (current, to retire via specs)

- Home sections: Header, Introduction, TechStack, Experience timeline, Projects cards, Achievements slice, Testimonials, Contact + Earth, Footer.
- `/projects` unified archive with filters.
- `/case-studies/[slug]`, `/projects/[slug]`.
- `/testimonials`, `/achievements`.
- WIP `/showcase`.

## Scope

### In Scope

- Spec-driven v2 restructure (IA, copy, visual system, redirects).
- Static content updates in `src/lib/*` when a spec names the records.
- SEO/metadata aligned with Senior Software Engineer.

### Out of Scope

- Auth, CMS, database, chatbot, MCP-for-the-portfolio, 3D as a skill demo.
- Invented blog, invented metrics, invented case studies.
- Visa essays on the homepage.
- Contract/freelance positioning.
- Dark mode unless a later spec asks.
- Cloning Gourob’s, Paco’s, or Brittany Chiang’s visual design.

## Success Criteria

See `context/portfolio-v2.md`. Until v2 ships: `npm run typecheck` / `build` still apply to any spec that touches code.

## Audience

Primary: hiring managers and engineering leads for **full-time** Senior SWE / Full-Stack / (sometimes) Senior Frontend roles in the target industries, including visa-sponsoring employers in Germany and the Netherlands.

Secondary: people who already have the IEEE link or a case-study URL.

Not: a general “hire a freelancer” audience.

## Brand / voice

- First person, short, concrete. Same bar as cover letters in `career-brief.md`.
- **No em dashes.** No “Hi, I’m” as the design. No slogan stacks of titles.
- Years of experience: `src/lib/experience.ts` only, never hardcoded.
- Default public title: **Senior Software Engineer**.
