# Orthopedic Surgery Reviewer — Design Spec

**Date:** 2026-07-12
**Status:** Approved (design), pending implementation plan
**Author:** Marco Aurelio Frasson (with Claude Code)

## Summary

A personal, offline-first orthopedic surgery reference in the style of the AO Surgery Reference: interactive, illustrated, step-by-step. The v1 ships a **scalable framework** covering all of orthopedics structurally, with **real, evidence-backed content for one seed topic (ankle fractures)** proving the full vertical slice. Content is schema-driven data; the UI renders any topic generically. Runs as an installable PWA that works offline (e.g., in the surgical center).

## Goals

- Reference/consult experience first (not quiz/study — that is out of scope for v1).
- AO-style navigation and step-by-step surgical technique presentation.
- Original schematic SVG illustrations (no copyrighted images).
- Real citations mixing foundational ("antigas") and current evidence.
- Offline-capable, installable, fast, premium visual design.
- Architecture scales to all of orthopedics by adding data files, not code.

## Non-Goals (v1)

- Quiz / flashcards / spaced-repetition study mode.
- Surgical checklist-execution mode.
- Backend, accounts, multi-device sync, dynamic content updates.
- Photorealistic imagery or reproduction of any copyrighted atlas/AO figures.
- Content breadth beyond the single seed topic (framework only for the rest).

## Decisions (from brainstorming)

| Decision | Choice |
|---|---|
| Content scope | Whole-orthopedics **framework**; real content for **1 seed topic** |
| Seed topic | **Ankle fracture** |
| Platform | **PWA, offline-first** |
| Images | **Original generated schematic SVG** |
| Evidence | **Real citations** pulled via PubMed/Consensus MCP |
| Mode | **Reference / consult** (AO-pure) |
| Content architecture | **A — schema-driven content-as-data** |

## Architecture

### Content-as-data (Approach A)

Each topic is a typed data file conforming to a fixed schema, validated with **zod**. The UI renders generically from the schema, so a new topic is a new data file with zero new layout code. This guarantees AO-like consistency and scales to all of orthopedics.

**Topic schema (conceptual):**

```ts
Topic {
  id: string
  region: Region          // e.g. "lower-limb"
  bone: string            // e.g. "ankle"
  injury: string          // e.g. "malleolar-fracture"
  title: string
  laterality?: "left" | "right" | "bilateral" | null
  overview: string

  anatomy:        { text: string; figureIds: string[] }
  classification: System[]        // {name, description, types: {code, description, figureId?}[]}
  indications:    { operative: string[]; nonOperative: string[]; decisionNotes: string }
  approaches:     Approach[]       // {name, interval, risks: string[], steps?: string[], figureId?}
  technique:      Step[]           // {n, title, detail, figureId?, tips: string[], pitfalls: string[]}
  postop:         { immobilization: string; weightBearing: string; rehab: RehabPhase[]; followup: string }
  complications:  Complication[]   // {name, description, prevention?}
  evidence:       EvidenceItem[]   // {claim, citation, level, takeaway}
  pearls:         string[]
  pitfalls:       string[]
  figures:        Figure[]         // {id, component, caption, alt}
  meta:           { lastReviewed: string; sources: string[] }
}

Citation {
  authors: string
  title: string
  journal: string
  year: number
  pmid?: string
  doi?: string
  url?: string
}
```

A **content registry** aggregates topic files and builds:
- the navigation tree (Region → Bone → Injury → Topic),
- the search index (Fuse.js),
- route definitions.

### Tech stack

- **Vite + React + TypeScript**
- **Tailwind CSS** with a design-token layer (premium clinical aesthetic)
- **vite-plugin-pwa** (Workbox) — precache all content + SVG for offline use
- **IndexedDB** (via a thin wrapper, e.g. idb-keyval) — user state: bookmarks, last-read position, personal notes
- **Fuse.js** — client-side fuzzy search (cmd-K palette)
- **React Router** (hash history for static offline hosting)
- Lightweight state (Zustand or React context)
- **No backend.** All content bundled at build time.

### UI / navigation (AO-style)

**Desktop — three panes:**
- **Left:** collapsible navigation tree (Region → Bone → Injury → Topic).
- **Center:** topic content with sticky section tabs (Anatomy / Classification / Indications / Approach / Technique / Post-op / Evidence / Pitfalls) and a **step-by-step stepper** for the technique.
- **Right:** figure panel showing the SVG synced to the current step/section, plus quick facts.

**Mobile:** single column, drawer navigation, swipeable steps, section tabs as a scrollable strip.

**Global:** search (cmd-K), breadcrumb, dark/light theme toggle. Motion on step/section transitions. Detailed visual design language is produced during implementation via the frontend-design skill.

### SVG illustration system

A library of **original** schematic React SVG components with a consistent visual language (line-art, two-tone, `currentColor`-themable, labeled callouts):
- reusable primitives: bone outlines, fracture patterns, hardware (plates, screws, K-wires), surgical approaches (skin incision + deep interval), reduction maneuvers.
- **ankle seed set:** mortise view, Weber A/B/C patterns, syndesmosis, lateral plate fixation, medial malleolus screw fixation, surgical approaches.

Figures are referenced by `id` from topic data and rendered in the right panel / inline.

### Evidence pipeline

During implementation, real citations for ankle fractures are pulled via the **PubMed / Consensus** MCP tools. Each `EvidenceItem` carries a real PMID/DOI, a level-of-evidence tag, and a one-line takeaway. The set deliberately mixes **foundational** references (e.g., Lauge-Hansen 1950; Danis-Weber) with **current** evidence (recent syndesmosis-fixation RCTs, early-weight-bearing trials, recent meta-analyses). Rendered in the Evidence tab with outbound links.

### Testing

- **Vitest + React Testing Library.**
- zod validation of every topic data file (content-lint at test/build).
- Rendering a topic from data (each section renders from schema).
- Navigation-tree construction from the registry.
- Search-index build and query.
- Stepper logic (next/prev/bounds, figure sync).
- PWA precache manifest builds successfully.

## Data flow

1. Topic data files → content registry → { nav tree, search index, routes }.
2. Route → topic renderer → section components (generic, schema-driven).
3. Stepper state drives which figure the right panel shows.
4. User state (bookmarks, notes, last-read) ↔ IndexedDB.
5. Service worker precaches the built bundle → offline.

## Error handling

- zod validation fails the build if any topic file is malformed (fail fast).
- Missing figure `id` → visible placeholder + console warning (never a crash).
- Missing/optional sections render as "não documentado" rather than blank.
- Search with no results → empty state with suggestions.
- Offline with uncached route → graceful fallback screen.

## Milestones (high level; detailed plan next)

1. Scaffold Vite+React+TS+Tailwind+PWA; base layout shell (3-pane / mobile).
2. Content schema + zod + registry + nav tree + routing.
3. Generic topic renderer (all sections) + stepper + figure panel.
4. SVG primitives + ankle seed figure set.
5. Ankle-fracture seed content authored to schema.
6. Evidence pulled via MCP and encoded into seed content.
7. Search (cmd-K), IndexedDB user state, theme.
8. Premium visual pass (frontend-design).
9. Tests + content-lint + PWA offline verification.

## Open questions

- None blocking. Visual design language finalized during implementation.
