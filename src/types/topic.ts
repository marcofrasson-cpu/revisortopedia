import { z } from "zod";

/* ============================================================================
   Content schema. Every topic is a data file conforming to `topicSchema`.
   The UI renders generically from this schema — a new topic is a new data
   file with zero new layout code. Validated at load & in tests (content-lint).
   ========================================================================== */

export const citationSchema = z.object({
  authors: z.string(),
  title: z.string(),
  journal: z.string(),
  year: z.number().int(),
  pmid: z.string().optional(),
  doi: z.string().optional(),
  url: z.string().url().optional(),
});
export type Citation = z.infer<typeof citationSchema>;

/** Oxford CEBM level of evidence. */
export const evidenceLevelSchema = z.enum(["I", "II", "III", "IV", "V"]);
export type EvidenceLevel = z.infer<typeof evidenceLevelSchema>;

export const evidenceItemSchema = z.object({
  id: z.string(),
  claim: z.string(),
  takeaway: z.string(),
  level: evidenceLevelSchema,
  studyType: z.string(),
  /** Foundational ("clássico") vs current ("atual") — the app mixes both. */
  era: z.enum(["classico", "atual"]),
  citation: citationSchema,
});
export type EvidenceItem = z.infer<typeof evidenceItemSchema>;

export const figureKindSchema = z
  .enum(["diagram", "radiograph", "ct", "mri", "anatomy-photo", "clinical-photo"])
  .default("diagram");
export type FigureKind = z.infer<typeof figureKindSchema>;

export const figureSourceSchema = z.object({
  /** Author, collection or publication responsible for the image. */
  label: z.string(),
  url: z.string().url().optional(),
  license: z.string().optional(),
  /** Editorial reference used to validate an original diagram. */
  reference: z.string().optional(),
});
export type FigureSource = z.infer<typeof figureSourceSchema>;

export const figureSchema = z.object({
  /** Resolves against the figures registry; unknown ids render a placeholder. */
  id: z.string(),
  caption: z.string(),
  alt: z.string(),
  variant: z.string().optional(),
  kind: figureKindSchema,
  source: figureSourceSchema.optional(),
});
export type Figure = z.infer<typeof figureSchema>;

export const classificationTypeSchema = z.object({
  code: z.string(),
  label: z.string(),
  description: z.string(),
  figureId: z.string().optional(),
  figureVariant: z.string().optional(),
});
export type ClassificationType = z.infer<typeof classificationTypeSchema>;

export const classificationSystemSchema = z.object({
  id: z.string(),
  name: z.string(),
  basis: z.string(),
  note: z.string().optional(),
  types: z.array(classificationTypeSchema),
});
export type ClassificationSystem = z.infer<typeof classificationSystemSchema>;

export const approachSchema = z.object({
  id: z.string(),
  name: z.string(),
  indication: z.string(),
  interval: z.string(),
  atRisk: z.array(z.string()).default([]),
  figureId: z.string().optional(),
});
export type Approach = z.infer<typeof approachSchema>;

export const stepSchema = z.object({
  n: z.number().int(),
  title: z.string(),
  detail: z.string(),
  figureId: z.string().optional(),
  figureVariant: z.string().optional(),
  tips: z.array(z.string()).default([]),
  pitfalls: z.array(z.string()).default([]),
});
export type Step = z.infer<typeof stepSchema>;

export const rehabPhaseSchema = z.object({
  window: z.string(),
  weightBearing: z.string(),
  focus: z.string(),
});
export type RehabPhase = z.infer<typeof rehabPhaseSchema>;

export const complicationSchema = z.object({
  name: z.string(),
  detail: z.string(),
  prevention: z.string().optional(),
});
export type Complication = z.infer<typeof complicationSchema>;

export const keyFactSchema = z.object({ label: z.string(), value: z.string() });
export type KeyFact = z.infer<typeof keyFactSchema>;

export const topicSchema = z.object({
  id: z.string(),
  slug: z.string(),
  regionId: z.string(),
  bone: z.string(),
  injury: z.string(),
  title: z.string(),
  subtitle: z.string(),
  laterality: z.enum(["left", "right", "bilateral"]).nullable().default(null),
  status: z.enum(["complete", "stub"]).default("stub"),
  overview: z.string(),
  keyFacts: z.array(keyFactSchema).default([]),
  anatomy: z.object({
    text: z.string(),
    figureIds: z.array(z.string()).default([]),
  }),
  classification: z.array(classificationSystemSchema).default([]),
  indications: z.object({
    operative: z.array(z.string()).default([]),
    nonOperative: z.array(z.string()).default([]),
    decisionNotes: z.string(),
  }),
  approaches: z.array(approachSchema).default([]),
  technique: z.array(stepSchema).default([]),
  postop: z.object({
    immobilization: z.string(),
    weightBearing: z.string(),
    rehab: z.array(rehabPhaseSchema).default([]),
    followup: z.string(),
  }),
  complications: z.array(complicationSchema).default([]),
  evidence: z.array(evidenceItemSchema).default([]),
  pearls: z.array(z.string()).default([]),
  pitfalls: z.array(z.string()).default([]),
  figures: z.array(figureSchema).default([]),
  meta: z.object({
    lastReviewed: z.string(),
    sources: z.array(z.string()).default([]),
    attribution: z.string().optional(),
    figureReference: z.string().optional(),
  }),
});
export type Topic = z.infer<typeof topicSchema>;

/** Parse + validate a topic authored as a plain object (fail fast). */
export function defineTopic(data: unknown): Topic {
  return topicSchema.parse(data);
}

/* ---- Section model (drives the section rail + generic renderer) ---------- */

export const SECTIONS = [
  { key: "overview", label: "Visão geral", short: "Geral" },
  { key: "anatomy", label: "Anatomia", short: "Anatomia" },
  { key: "classification", label: "Classificação", short: "Classif." },
  { key: "indications", label: "Indicações", short: "Indic." },
  { key: "approaches", label: "Vias de acesso", short: "Vias" },
  { key: "technique", label: "Técnica passo a passo", short: "Técnica" },
  { key: "postop", label: "Pós-op & reabilitação", short: "Pós-op" },
  { key: "complications", label: "Complicações", short: "Compl." },
  { key: "evidence", label: "Evidência", short: "Evidência" },
  { key: "pearls", label: "Pérolas & armadilhas", short: "Pérolas" },
] as const;
export type SectionKey = (typeof SECTIONS)[number]["key"];

/* ---- Region / navigation tree (the whole-orthopedics framework) ---------- */

export type TopicStatus = "complete" | "stub" | "planned";

export interface TopicRef {
  slug: string;
  title: string;
  status: TopicStatus;
}

export interface RegionGroup {
  id: string;
  title: string;
  topics: TopicRef[];
}

export interface RegionNode {
  id: string;
  title: string;
  blurb: string;
  /** Short mono tag shown in the nav, e.g. "MI", "COL". */
  tag: string;
  groups: RegionGroup[];
}

/* ---- Figure component contract ------------------------------------------- */

export interface FigureProps {
  /** Selects a sub-drawing within a figure family (e.g. Weber "A" | "B" | "C"). */
  variant?: string;
  /** Current technique step (1-based); figures may highlight the active stage. */
  activeStep?: number;
  className?: string;
  title?: string;
}
