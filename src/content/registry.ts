import type { RegionNode, Topic, TopicStatus } from "../types/topic";
import { topics } from "./topics";
import { regions } from "./regions";

/* ============================================================================
   Content registry — the single source that binds authored topic data to the
   whole-orthopedics navigation tree, and derives search + prev/next ordering.
   ========================================================================== */

const bySlug = new Map<string, Topic>(topics.map((t) => [t.slug, t]));

export const allTopics: Topic[] = topics;
export const allRegions: RegionNode[] = regions;

export function getTopic(slug: string): Topic | undefined {
  return bySlug.get(slug);
}

export function hasTopic(slug: string): boolean {
  return bySlug.has(slug);
}

/** Display status: data presence overrides the tree's declared intent. */
export function effectiveStatus(slug: string, declared: TopicStatus): TopicStatus {
  const t = bySlug.get(slug);
  if (!t) return declared === "complete" ? "planned" : declared;
  return t.status;
}

export interface FlatTopic {
  slug: string;
  title: string;
  status: TopicStatus;
  regionId: string;
  regionTitle: string;
  groupTitle: string;
}

/** Every topic reference in tree order — powers search index and prev/next. */
export function flattenTree(): FlatTopic[] {
  const out: FlatTopic[] = [];
  for (const region of regions) {
    for (const group of region.groups) {
      for (const ref of group.topics) {
        out.push({
          slug: ref.slug,
          title: ref.title,
          status: effectiveStatus(ref.slug, ref.status),
          regionId: region.id,
          regionTitle: region.title,
          groupTitle: group.title,
        });
      }
    }
  }
  return out;
}

const flat = flattenTree();
const readableOrder = flat.filter((t) => t.status === "complete").map((t) => t.slug);

export function neighbors(slug: string): { prev?: FlatTopic; next?: FlatTopic } {
  const i = readableOrder.indexOf(slug);
  if (i === -1) return {};
  const find = (s?: string) => flat.find((t) => t.slug === s);
  return { prev: find(readableOrder[i - 1]), next: find(readableOrder[i + 1]) };
}

export function locate(slug: string): FlatTopic | undefined {
  return flat.find((t) => t.slug === slug);
}

export const stats = {
  regions: regions.length,
  topicsPlanned: flat.length,
  topicsComplete: flat.filter((t) => t.status === "complete").length,
};
