import Fuse from "fuse.js";
import type { IFuseOptions } from "fuse.js";
import type { Topic, TopicStatus } from "../types/topic";
import { flattenTree } from "../content/registry";
import { getTopic } from "../content/topicData";

/* ============================================================================
   Client-side fuzzy search over the content tree.
   Every navigable topic reference (real + planned) becomes a searchable record.
   When authored content exists for a slug, we enrich the record with terms from
   the overview, classification codes, key facts, pearls and pitfalls so the
   topic can be found by a synonym or a classification code — not just its title.
   The empty-query path returns the full tree in order, so the palette doubles
   as a browsable index.
   ========================================================================== */

export interface SearchResult {
  slug: string;
  title: string;
  regionTitle: string;
  groupTitle: string;
  status: TopicStatus;
  snippet?: string;
}

/** Internal index record — carries the extra haystack fields Fuse searches. */
interface IndexRecord extends SearchResult {
  codes: string;
  keywords: string;
  overview: string;
}

/** Trim an overview to a compact, sentence-aware snippet. */
function makeSnippet(overview: string, max = 150): string {
  const text = overview.trim().replace(/\s+/g, " ");
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastStop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "));
  if (lastStop > max * 0.5) return `${cut.slice(0, lastStop + 1)}`;
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`;
}

/** Gather classification codes + names as a searchable string. */
function collectCodes(topic: Topic): string {
  const parts: string[] = [];
  for (const system of topic.classification) {
    parts.push(system.name, system.basis);
    for (const type of system.types) {
      parts.push(type.code, type.label);
    }
  }
  return parts.filter(Boolean).join(" ");
}

/** Gather synonym-rich free text: bone, injury, key facts, pearls, pitfalls. */
function collectKeywords(topic: Topic): string {
  const parts: string[] = [
    topic.bone,
    topic.injury,
    topic.subtitle,
    ...topic.keyFacts.flatMap((f) => [f.label, f.value]),
    ...topic.pearls,
    ...topic.pitfalls,
  ];
  return parts.filter(Boolean).join(" ");
}

/** Build the index records once, in tree order. */
function buildRecords(): IndexRecord[] {
  return flattenTree().map((flat) => {
    const topic = getTopic(flat.slug);
    const record: IndexRecord = {
      slug: flat.slug,
      title: flat.title,
      regionTitle: flat.regionTitle,
      groupTitle: flat.groupTitle,
      status: flat.status,
      codes: "",
      keywords: "",
      overview: "",
    };
    if (topic) {
      record.overview = topic.overview;
      record.codes = collectCodes(topic);
      record.keywords = collectKeywords(topic);
      const snippet = makeSnippet(topic.overview);
      if (snippet) record.snippet = snippet;
    }
    return record;
  });
}

const records: IndexRecord[] = buildRecords();

const fuseOptions: IFuseOptions<IndexRecord> = {
  includeScore: false,
  ignoreLocation: true,
  threshold: 0.4,
  minMatchCharLength: 2,
  keys: [
    { name: "title", weight: 0.45 },
    { name: "codes", weight: 0.2 },
    { name: "keywords", weight: 0.15 },
    { name: "overview", weight: 0.1 },
    { name: "groupTitle", weight: 0.05 },
    { name: "regionTitle", weight: 0.05 },
  ],
};

const fuse = new Fuse(records, fuseOptions);

/** Strip internal haystack fields down to the public SearchResult shape. */
function toResult(record: IndexRecord): SearchResult {
  return {
    slug: record.slug,
    title: record.title,
    regionTitle: record.regionTitle,
    groupTitle: record.groupTitle,
    status: record.status,
    snippet: record.snippet,
  };
}

/** Full navigable index in tree order — used by the empty-query state. */
export function allSearchable(): SearchResult[] {
  return records.map(toResult);
}

/**
 * Fuzzy-search topics by title, classification code, synonym or overview text.
 * An empty or too-short query returns the complete list (tree order), so the
 * command palette can present a browsable index before the user types.
 */
export function searchTopics(query: string): SearchResult[] {
  const q = query.trim();
  if (q.length < 2) return allSearchable();
  return fuse.search(q).map((hit) => toResult(hit.item));
}
