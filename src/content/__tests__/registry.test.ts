import { describe, expect, it } from "vitest";
import { flattenTree, neighbors, stats } from "../registry";

/* ============================================================================
   Registry: binds authored topics to the navigation tree and derives the
   readable (prev/next) ordering. These tests pin the invariants the rest of
   the app depends on, without asserting on any specific title/prose.
   ========================================================================== */

const ANKLE = "fratura-maleolar-tornozelo";

describe("flattenTree", () => {
  const flat = flattenTree();

  it("returns a non-empty flat list of topic refs", () => {
    expect(flat.length).toBeGreaterThan(0);
    for (const t of flat) {
      expect(typeof t.slug).toBe("string");
      expect(typeof t.regionId).toBe("string");
      expect(typeof t.regionTitle).toBe("string");
      expect(typeof t.groupTitle).toBe("string");
    }
  });

  it("includes the ankle malleolar fracture as a complete topic", () => {
    const ankle = flat.find((t) => t.slug === ANKLE);
    expect(ankle, `"${ANKLE}" must be present in the tree`).toBeDefined();
    expect(ankle?.status).toBe("complete");
  });

  it("publishes the full sports and arthroscopy section", () => {
    const sports = flat.filter((topic) => topic.regionId === "esportiva-artroscopia");

    expect(sports).toHaveLength(7);
    expect(sports.every((topic) => topic.status === "complete")).toBe(true);
  });

  it("publishes the full lower-limb section", () => {
    const lowerLimb = flat.filter((topic) => topic.regionId === "membro-inferior");

    expect(lowerLimb).toHaveLength(24);
    expect(lowerLimb.every((topic) => topic.status === "complete")).toBe(true);
  });

  it("publishes the tumor investigation and staging foundations", () => {
    const foundations = flat.filter(
      (topic) =>
        topic.regionId === "tumores-e-metastases" &&
        topic.groupTitle === "Princípios & estadiamento",
    );

    expect(foundations).toHaveLength(2);
    expect(foundations.every((topic) => topic.status === "complete")).toBe(true);
  });

  it("publishes the complete 98-topic framework", () => {
    expect(flat).toHaveLength(98);
    expect(flat.every((topic) => topic.status === "complete")).toBe(true);
  });
});

describe("neighbors", () => {
  it("does not throw for a known slug and returns an object", () => {
    let result: ReturnType<typeof neighbors> | undefined;
    expect(() => {
      result = neighbors(ANKLE);
    }).not.toThrow();
    expect(result).toBeTypeOf("object");
  });

  it("returns an empty object for an unknown slug", () => {
    expect(neighbors("__nao-existe__")).toEqual({});
  });
});

describe("stats", () => {
  it("reports at least one complete topic and some regions", () => {
    expect(stats.topicsComplete).toBeGreaterThanOrEqual(1);
    expect(stats.regions).toBeGreaterThan(0);
    expect(stats.topicsPlanned).toBeGreaterThanOrEqual(stats.topicsComplete);
  });

  it("reports full editorial coverage", () => {
    expect(stats.topicsPlanned).toBe(98);
    expect(stats.topicsComplete).toBe(98);
  });
});
