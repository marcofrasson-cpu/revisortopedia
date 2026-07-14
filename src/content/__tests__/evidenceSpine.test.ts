import { describe, expect, it } from "vitest";
import { allTopics } from "../topicData";
import {
  evidenceByYear,
  evidenceLevelOne,
  evidencePeak,
  evidenceSpan,
  evidenceTotal,
  SPINE_LEVELS,
} from "../evidenceSpine";

/* ============================================================================
   src/content/evidenceSpine.ts é dado gerado que a home mostra sem carregar os
   tópicos. Um número gerado que ninguém confere é um número que mente: este
   teste recomputa a partir de allTopics e compara. Se um tópico ganhar, perder
   ou reclassificar uma citação, ele quebra e mostra o valor certo.
   ========================================================================== */

function recompute(): Array<[number, number[]]> {
  const byYear = new Map<number, number[]>();
  for (const topic of allTopics) {
    for (const item of topic.evidence) {
      const year = item.citation.year;
      if (!year) continue;
      const levels = byYear.get(year) ?? SPINE_LEVELS.map(() => 0);
      levels[SPINE_LEVELS.indexOf(item.level)] += 1;
      byYear.set(year, levels);
    }
  }
  return [...byYear.entries()].sort((a, b) => a[0] - b[0]);
}

describe("evidence spine", () => {
  const truth = recompute();

  it("matches the evidence actually cited by the topics", () => {
    expect(evidenceByYear).toEqual(truth);
  });

  it("derives its headline numbers from the same data", () => {
    const total = truth.reduce((sum, [, l]) => sum + l.reduce((a, b) => a + b, 0), 0);
    expect(evidenceTotal).toBe(total);
    expect(evidenceSpan.from).toBe(truth[0][0]);
    expect(evidenceSpan.to).toBe(truth[truth.length - 1][0]);
    expect(evidencePeak).toBe(Math.max(...truth.map(([, l]) => l.reduce((a, b) => a + b, 0))));
    expect(evidenceLevelOne).toBe(truth.reduce((sum, [, l]) => sum + l[0], 0));
  });

  it("stays cheap enough to sit on the home page", () => {
    // O ponto do arquivo é não arrastar os corpos dos tópicos para o boot.
    expect(evidenceByYear.length).toBeLessThan(120);
    expect(JSON.stringify(evidenceByYear).length).toBeLessThan(4000);
  });
});
