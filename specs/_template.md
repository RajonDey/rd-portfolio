# {N.N} {Short title}

> Copy this file to `specs/{N.N}-{short-slug}.md`. Fill every section. Set **Status** to `ready` only when an agent may implement.

## Status

`draft` <!-- draft | ready | in-progress | done -->

## Goal

One or two sentences: what will be true when this unit is done.

## Why

Why this change matters (hiring, IA, bug, content, DX). Link to `context/progress-tracker.md` if it is already listed there.

## In scope

- …

## Out of scope

- …

## User-facing behavior

Numbered flow a visitor or you would actually do:

1. …
2. …

## Content / copy

Paste final strings here, or name the `src/lib/*` records to add. **Do not ask the agent to invent case studies, quotes, or metrics.**

- …

## Files likely involved

Use `AGENTS.md` task map. List paths:

- `src/…`

## UI notes

Match `context/ui-context.md`. Call out exceptions only.

- Layout:
- Tokens / components to reuse:
- Breakpoints:

## Acceptance criteria

- [ ] …
- [ ] `npm run typecheck` passes
- [ ] Touched routes checked in the browser

## Open questions

- …

## Notes for the agent

Anything that would otherwise get invented (redirects to keep, URLs to leave stable, data not to duplicate).
