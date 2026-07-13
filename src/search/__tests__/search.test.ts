import { describe, expect, it } from "vitest";
import { searchTopics } from "..";

/* ============================================================================
   Search: fuzzy lookup over the topic index. We assert behaviour (a real
   query surfaces the expected slug; an empty query is a passthrough to the
   full list) rather than ranking specifics, which are inherently fuzzy.
   ========================================================================== */

const ANKLE = "fratura-maleolar-tornozelo";

/** Results may be plain topic refs or fuse-style { item } wrappers. */
function slugOf(result: unknown): string | undefined {
  if (result && typeof result === "object") {
    const r = result as Record<string, unknown>;
    if (typeof r.slug === "string") return r.slug;
    const item = r.item as Record<string, unknown> | undefined;
    if (item && typeof item.slug === "string") return item.slug;
  }
  return undefined;
}

describe("searchTopics", () => {
  it("finds the ankle topic when searching 'tornozelo'", () => {
    const results = searchTopics("tornozelo");
    expect(Array.isArray(results)).toBe(true);
    const slugs = results.map(slugOf);
    expect(slugs).toContain(ANKLE);
  });

  it("returns the full list for an empty query", () => {
    const all = searchTopics("");
    expect(Array.isArray(all)).toBe(true);
    expect(all.length).toBeGreaterThan(0);
    // An empty query is a passthrough, so it can never be narrower than a
    // specific query over the same index.
    expect(all.length).toBeGreaterThanOrEqual(searchTopics("tornozelo").length);
  });

  it("returns an empty array for a query that matches nothing", () => {
    const results = searchTopics("zzzxqqwnomatch");
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBe(0);
  });
});
