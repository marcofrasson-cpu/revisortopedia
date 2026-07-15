import type { EvidenceLevel } from "../types/topic";

/* ============================================================================
   A forma da literatura que sustenta o manual: por ano, quantos estudos citados
   em cada nível de evidência (Oxford CEBM).

   Dado gerado, não autorado. Fica aqui em vez de ser derivado dos tópicos em
   tempo de render porque a home não pode importar os corpos dos 95 tópicos — são
   2,5 MB e ~536 ms de zod fora do caminho de boot (ver src/content/topicData.ts).
   Este arquivo tem 1,5 KB.

   evidenceSpine.test.ts recomputa tudo a partir de allTopics e compara com o que
   está aqui: se um tópico ganhar, perder ou reclassificar uma citação, o teste
   quebra e aponta o número certo. Não edite à mão.
   ========================================================================== */

export const SPINE_LEVELS: EvidenceLevel[] = ["I", "II", "III", "IV", "V"];

/** [ano, [nível I, II, III, IV, V]] — ordenado por ano. */
export const evidenceByYear: Array<[number, number[]]> = [
  [1966, [0, 0, 0, 1, 0]],
  [1970, [0, 0, 0, 1, 0]],
  [1974, [0, 0, 0, 1, 0]],
  [1975, [0, 0, 0, 3, 0]],
  [1977, [0, 0, 1, 0, 0]],
  [1978, [0, 1, 0, 0, 0]],
  [1980, [0, 0, 0, 0, 2]],
  [1982, [0, 0, 1, 0, 0]],
  [1983, [0, 0, 0, 2, 0]],
  [1984, [0, 0, 0, 1, 0]],
  [1986, [0, 0, 1, 1, 0]],
  [1987, [0, 0, 0, 1, 0]],
  [1988, [0, 0, 0, 2, 0]],
  [1989, [0, 0, 1, 0, 0]],
  [1990, [1, 0, 0, 2, 1]],
  [1991, [0, 1, 0, 0, 0]],
  [1992, [0, 0, 0, 1, 0]],
  [1993, [0, 0, 2, 2, 0]],
  [1994, [0, 0, 4, 1, 0]],
  [1995, [0, 0, 1, 0, 0]],
  [1996, [0, 0, 1, 2, 0]],
  [1997, [0, 0, 1, 1, 0]],
  [1998, [0, 0, 1, 4, 2]],
  [1999, [0, 1, 1, 1, 0]],
  [2000, [0, 0, 0, 0, 1]],
  [2001, [0, 4, 4, 1, 0]],
  [2002, [1, 0, 0, 3, 0]],
  [2003, [0, 3, 0, 0, 2]],
  [2004, [1, 4, 2, 5, 0]],
  [2005, [1, 0, 2, 0, 2]],
  [2006, [1, 1, 1, 1, 1]],
  [2007, [4, 1, 3, 3, 2]],
  [2008, [3, 1, 1, 4, 0]],
  [2009, [7, 0, 4, 1, 0]],
  [2010, [3, 1, 2, 1, 1]],
  [2011, [2, 2, 2, 1, 1]],
  [2012, [5, 3, 3, 3, 4]],
  [2013, [3, 4, 4, 4, 1]],
  [2014, [1, 3, 4, 2, 1]],
  [2015, [6, 4, 5, 6, 1]],
  [2016, [8, 1, 2, 2, 1]],
  [2017, [7, 3, 3, 3, 1]],
  [2018, [8, 4, 5, 3, 2]],
  [2019, [9, 6, 3, 5, 1]],
  [2020, [4, 3, 2, 4, 9]],
  [2021, [13, 2, 3, 5, 3]],
  [2022, [6, 5, 13, 3, 3]],
  [2023, [4, 6, 12, 3, 0]],
  [2024, [7, 4, 10, 7, 4]],
  [2025, [3, 2, 4, 1, 0]],
  [2026, [1, 1, 1, 1, 1]],
];

export const evidenceSpan = {
  from: evidenceByYear[0][0],
  to: evidenceByYear[evidenceByYear.length - 1][0],
};

export const evidenceTotal = evidenceByYear.reduce(
  (sum, [, levels]) => sum + levels.reduce((a, b) => a + b, 0),
  0,
);

export const evidencePeak = Math.max(
  ...evidenceByYear.map(([, levels]) => levels.reduce((a, b) => a + b, 0)),
);

/** Ensaios de nível I — o que separa este manual de um resumo de aula. */
export const evidenceLevelOne = evidenceByYear.reduce((sum, [, levels]) => sum + levels[0], 0);
