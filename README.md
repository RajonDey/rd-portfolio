# Rajon Dey Portfolio

Personal hiring site for **Rajon Dey**, Senior Software Engineer. Next.js App Router, static content in `src/lib/`. No auth and no database.

Live: [https://portfolio.rajondey.com](https://portfolio.rajondey.com)

## Routes

- `/` — name, role, selected evidence
- `/work` — six selected pieces
- `/work/[slug]` — short work article
- `/writing` — IEEE paper
- `/about` — experience, stack, CV
- `/testimonials` and `/achievements` — footer archives, off nav

Nav: Work · Writing · About · CV

## Stack

Next.js, React, TypeScript, Tailwind CSS. IBM Plex Serif / Sans / Mono.

## Develop

```bash
npm install
npm run dev
```

Requires Node 18+. Scripts: `dev`, `build`, `start`, `lint`, `typecheck`.

Content lives in `src/lib/` (not in JSX). See `AGENTS.md` and `context/` for how the site is maintained.
