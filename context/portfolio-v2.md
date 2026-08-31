# Portfolio v2 — research, diagnosis, target

Planning document. **Do not implement until a `ready` spec says so.**

Sources: owner career brief; live site; colleague [Gourob Debnath](https://gourob-portfolio.vercel.app/) (structure only, not a clone); public senior-engineer sites listed below.

## Why the current site feels “AI-built”

The live site is a **tutorial portfolio**, not a senior hiring document. It matches the widely copied [JavaScript Mastery 3D developer portfolio](https://explore.market.dev/ecosystems/threejs/projects/adrianhajdin-project_3d_developer_portfolio) pattern:

| Tutorial tell                         | Where it lives today                                      |
| ------------------------------------- | --------------------------------------------------------- |
| Three.js Earth on contact             | `EarthCanvas.tsx`, `public/planet/`                       |
| `react-vertical-timeline-component`   | `ExperienceTimeline.tsx`                                  |
| Tech-icon tabs                        | `TechStack/`                                              |
| Gradient tag text (blue/pink/green)   | `globals.css` + `projects[].tags[].color`                 |
| Hover-scale project cards             | `ProjectCard.tsx` Framer `hover: scale 1.03`              |
| “Hi, I’m …” + decorative animation    | `Header.tsx`, `DeveloperAnimation.tsx`                    |
| 3-equal expertise cards               | `Introduction.tsx` (four, same shape)                     |
| Testimonial wall                      | `/testimonials` + home teaser                             |
| Award/certificate gallery as IA       | `/achievements` in primary nav                            |
| Single font (Roboto) + #000 / #fff    | `layout.tsx`, `tailwind.config.ts`                        |
| Sticky SaaS nav + CV button           | `MainNavigation.tsx`                                      |

Hiring managers at the Germany / Netherlands / Canada senior bar see this shape daily. Extra pages (filters, POM gallery, 50+ quotes) add **inventory**, not **judgment**.

Hallmark-style audit of `/` (no code edits):

- **Critical:** tutorial 3D contact; full-viewport hero; 3/4-column equal cards; gradient text on tags; Inter-family tell (Roboto as only face); default-attractor landing (hero → features → timeline → cards → CTA).
- **Major:** AI nav fingerprint; testimonial carousel energy; card grid as the work metaphor; “Download CV” repeated as the only action.
- **Minor:** mixed icon packs; unused `SidebarNav`; broken `/showcase`.

Count: **6 critical · 4 major · 3 minor**.

## What strong engineer sites actually do

These are **document sites**, not product landing pages. Work is a short list. Writing or one proof point carries weight. Chrome is quiet.

| Site | What to steal (DNA, not pixels) | What not to copy |
| ---- | -------------------------------- | ---------------- |
| [Paco Coursey](https://paco.me/) | Index = name + one sentence + lists (Building / Projects / Writing / Connect). No cards. | Linear-level UI craft as the whole identity |
| [Lee Robinson](https://leerob.com/) | Bio first. Writing is the proof. Site is fast and plain. | A large public blog we do not have |
| [Emil Kowalski](https://www.emilkowal.ski/) | Who I am → few named projects → writing. Restraint. | Animation-as-personal-brand |
| [Brittany Chiang](https://brittanychiang.com/) | About + experience as a **list** + few projects + writing. | Her v4 Gatsby theme (thousands of forks; another template) |
| [Gourob Debnath](https://gourob-portfolio.vercel.app/) | **Two proof lanes** (research vs production). Home = one sentence + **three selected evidence** items. Work pages = problem / role / constraints / outcome. | Equal “researcher” identity. Gourob’s career is AI + research; ours is SWE + one paper. |

Pattern that repeats:

1. **One identity in the H1** (job you want, not every title you hold).
2. **Selected evidence (3), not a CMS.**
3. **Work as writing**, not a filterable card catalog.
4. **Nav of 3–4 words**, not archive labels (Testimonials, Achievements).
5. **No 3D, no icon skill grids, no timeline widgets.**

## How this maps to Rajon (not a Gourob clone)

Gourob is “AI Software Engineer **and** Graduate Researcher.” Two jobs, two nav lanes (Research / Work).

Rajon is **Senior Software Engineer / Full-Stack** first. AI / LLM security research is a **secondary, real lane** (IEEE paper; scholarships and AI-adjacent roles later). It is not a second job title.

Gourob’s home header (kicker, name, dual title, one sentence, four pills with Publications as the filled primary) is the **structure** to adapt in spec `0.4`, with the primary inverted:

| Gourob | Rajon |
| ------ | ----- |
| Kicker: `AGENTIC AI · LLM SECURITY` | Kicker: `FULL-STACK · LLM SECURITY` |
| Title: AI SWE **and** Graduate Researcher | Title: Senior Software Engineer only |
| Primary pill: Publications | Primary pill: Work (or Industry CV) |
| Academic CV + Industry CV | Industry CV now. Academic CV **only if the owner supplies a URL**. Until then, research CTA is the IEEE paper / Writing. |

| Lane | Job for the reader | Content |
| ---- | ------------------ | ------- |
| Work (primary) | Can he ship product in healthcare / SaaS / DXP? | 4–6 selected pieces, written as short case studies |
| Writing (secondary) | Research / scholarships / AI tooling | IEEE paper first; only real posts after that |

Home = Gourob’s **selected evidence** idea: three items that mix both lanes (e.g. one enterprise/healthcare case, one product you own, the IEEE paper). Exact three are chosen in spec `0.3`.

## Spec order (identity vs UI)

Do **not** restyle first. Painting the current tutorial layout makes a prettier clone.

1. **`0.1` Positioning** (first): words, titles, voice, secondary research line in copy. No new header chrome.
2. **`0.2` IA:** `/work` and `/writing` in the nav so the research lane has a place.
3. **`0.3` Inventory:** which proofs, including IEEE on home.
4. **`0.4` Home index:** Gourob-like header *structure* (kicker, one sentence, dual CTAs). Still existing tokens unless `0.8` has already run.
5. **`0.5`–`0.7`:** work articles, writing page, about.
6. **`0.8` Visual system (separate spec, not first):** type pairing, paper/ink, quiet accent, pill buttons. This is the UI/UX pass. It comes **after** the document pages exist so we style the right structure once.
7. **`0.9`–`0.10`:** retire tutorial chrome, SEO.

Steal Gourob’s *rhythm* (left column, sparse type, one filled pill). Do not copy his forest-green pixels unless `0.8` explicitly studies that DNA.

## Target identity (public site)

- **H1:** Rajon Dey
- **Role line:** Senior Software Engineer
- **Kicker (from `0.4`):** `FULL-STACK · LLM SECURITY`
- **Supporting line:** Full-stack. React, Next.js, TypeScript, Node.js, Python. Production work in healthcare and SaaS. Secondary: AI / LLM security research (IEEE).
- **Not on the H1:** Module Lead, Tech Lead, Graduate Researcher, “AI Software Engineer and …”.
- **CV button:** default industry / web PDF. Frontend CV on About. Academic CV omitted until a URL exists.

## Target information architecture

```
/                 Index: name, role, one paragraph, 3 selected evidence, current role, links
/work             Selected work as a list (not search/filters)
/work/[slug]      One case study as an article (problem, role, constraints, outcome)
/writing          IEEE paper + any real writing (no fake blog)
/about            Experience as a list, stack as prose, location, CV variants
```

**Nav:** Work · Writing · About · CV  
**Contact:** email, GitHub, LinkedIn in the index and footer. No 3D, no WhatsApp theater unless a spec keeps WhatsApp as a quiet text link.

**Old URLs (when we implement):** keep `/case-studies/[id]` as redirects onto `/work/[slug]` so existing links do not 404. `/projects`, `/testimonials`, `/achievements`, `/showcase` leave the primary nav; redirects or 410 decided in the retire spec.

## Keep / cut / reshape

### Keep (content)

- Real shipped work in `src/lib/portfolio.ts` (especially healthcare, DXP/headless, SaaS). **Select**, do not display all on home.
- IEEE paper as a first-class evidence item.
- Personal products that show ownership (e.g. IELTS platform, Year in Review) if they survive the inventory spec.
- Computed years of experience (`experience.ts`).
- Email, GitHub, LinkedIn, CV PDF + SWE Google Doc.

### Cut (surfaces and tropes)

- Three.js Earth and `public/planet/` as a product surface
- Developer / Lottie hero animation
- Tech stack icon tabs
- Vertical timeline library
- Expertise image cards
- Gradient tag classes
- `/testimonials` as a primary page (internal POM-adjacent quotes read as a Fiverr wall to DE/NL hiring)
- `/achievements` as a primary page (POM certificates are internal; IEEE is not a gallery item)
- Filter/sort/search archive UI
- Repeated “Download CV” / “Interested in working together?” bands
- `/showcase` WIP
- Unused `SidebarNav`

### Reshape

- Case studies: from long templated sections (process numbered 1–4, 10 feature bullets) to **Gourob-style** problem / role / constraints / outcome + what I owned.
- Experience: from decorated timeline to a **short list** (role, company, dates, 3–5 bullets max).
- Stack: from icon grid to **one sentence** on About / index.
- Testimonials: off nav. At most 1–2 named quotes on About if a spec keeps them.
- Dual CV: About footer, not two hero buttons.

## Visual direction (locked for later visual spec)

- **Genre:** editorial document, not SaaS landing, not 3D playground.
- **Tone:** austere / utilitarian. Quiet type, lists, hairline rules. Motion almost none.
- **Type:** pair a display face with a body face. Roboto-only is a template tell. Exact pairing is spec `0.8`.
- **Color:** stop pure `#000` / `#fff` as the whole system; one ink, one paper, one quiet accent. No gradient text, no colored tag chips as identity.
- **Work metaphor:** text list + one optional still image per case, not a 3-column screenshot grid on the index.
- Do **not** clone Gourob’s, Paco’s, or Brittany’s pixels. Steal structure.

## Copy rules (v2)

Same as cover letters: short, specific, no em dashes, no “passionate about,” no “innovative solutions,” no “let’s bring your ideas to life.” First person, past tense for shipped work. Metrics only if they already exist in `src/lib` or the spec.

## Success criteria (v2)

1. A hiring manager knows title, stack, and one proof (work or paper) in the first screen.
2. Primary nav has no Testimonials / Achievements / Showcase.
3. Home does not use 3D, a timeline widget, or a tech-icon grid.
4. Work is selected (single-digit featured), not an inventory with filters.
5. IEEE is reachable in one click from home.
6. Default CV is the SWE variant; frontend CV is available but not the default.
7. Old case-study URLs still resolve.

## Open questions (owner)

- Which **three** home evidence items?
- Which **4–6** work pieces survive `/work`?
- Relocation sentence on About: yes/no.
- WhatsApp: keep as text link or drop.
- Testimonials: zero vs two quotes on About.
- Dark mode: still out of scope (recommend stay light, document-like).
