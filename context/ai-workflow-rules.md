# AI Workflow Rules

## Approach

Build this portfolio **incrementally with a spec-driven workflow**.

```
context/   →  what the product is, how it is built, what “good” looks like
specs/     →  what to implement in this unit (written before code)
AGENTS.md  →  which files to open for this kind of task
```

Do not infer product behavior from scratch. Implement against a **ready** spec plus the context files. If the user pastes a spec in chat, treat that as the spec, then save it under `specs/` before coding.

**Portfolio v2:** `context/portfolio-v2.md` is a plan. Do not restyle, delete tutorial surfaces, or add `/work` until the named spec is `ready` and the owner says to execute it. Specs are written one at a time after the owner reviews.

## Scoping Rules

- Work on **one spec** (one feature unit) at a time.
- Prefer small, verifiable increments: one route, one data shape, one UI surface.
- Do not combine unrelated system boundaries in a single implementation (for example: copy changes in `testimonials.ts` plus a Three.js rewrite).
- Do not start a second spec while the first is in-progress unless the user explicitly re-prioritizes.

## When to Split Work

Split an implementation step if it combines:

- Visual redesign **and** a data-model change
- Multiple unrelated routes (e.g. `/testimonials` and `/achievements`)
- Behavior that is not written in the spec or context files
- A content dump (new case studies) **and** a new UI pattern

If a change cannot be verified on one or two routes quickly, the scope is too broad — split it and update the spec / progress tracker.

## Handling Missing Requirements

- Do not invent case studies, metrics, testimonials, job titles, or employer claims.
- Do not invent navigation IA, new pages, or theme changes that are not in the spec.
- If a requirement is ambiguous, resolve it in the spec (or the relevant context file) **before** implementing.
- If a requirement is missing, add it under **Open Questions** in `context/progress-tracker.md` and ask the user. Do not guess.

## Spec lifecycle

1. **draft** — user (or AI, if asked) writes the spec. No production code yet.
2. **ready** — user says the spec is ready / hands it to AI. Implementation may start.
3. **in-progress** — AI is implementing. Keep the spec’s status in sync.
4. **done** — acceptance criteria met; progress tracker updated.

Never implement from a `draft` spec unless the user explicitly says to proceed anyway.

## Protected Files

Do not modify the following unless a spec or the user explicitly instructs:

- `public/images/achievements/` — award / certificate binaries
- `context/*.md` — except when the change actually updates architecture, UI tokens, standards, or progress
- Generated output: `.next/`, `node_modules/`
- Secrets: any `.env*` file

Do not reintroduce Earth, a testimonials wall, or `/showcase` unless a spec says so.

## Keeping Docs in Sync

After a meaningful implementation, update:

| If you changed…                         | Also update                          |
| --------------------------------------- | ------------------------------------ |
| Routes, data model, lib boundaries      | `context/architecture.md`            |
| Visual language, tokens, layout         | `context/ui-context.md`              |
| Conventions                             | `context/code-standards.md`          |
| Product scope / positioning             | `context/project-overview.md`        |
| Anything completed or newly blocked     | `context/progress-tracker.md`        |
| Spec status                             | the spec file itself                 |

## Before Moving to the Next Unit

1. The current spec’s acceptance criteria are met end to end.
2. No invariant in `architecture.md` was violated.
3. `context/progress-tracker.md` reflects the completed work and the next unit.
4. `npm run typecheck` passes (and `npm run build` if routes / config changed).
5. The changed routes were exercised in the browser.
