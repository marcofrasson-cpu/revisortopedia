import { describe, expect, it } from "vitest";
import { flattenTree } from "../registry";

/* ============================================================================
   A árvore de navegação declara o status de cada tópico e é lida no boot; os
   corpos dos tópicos não são. Antes, effectiveStatus() corrigia a árvore em
   runtime lendo topic.status — o que obrigava a carregar os 98 tópicos (2,5 MB,
   ~536 ms de zod) só para saber quais existiam.

   Agora a árvore é a fonte da verdade e este teste é quem a mantém honesta:
   todo ref "complete" precisa ter arquivo, e todo arquivo precisa estar na
   árvore. As chaves de import.meta.glob são estáticas — nenhum módulo é
   avaliado aqui.
   ========================================================================== */

const modules = import.meta.glob("../topics/*.ts");

const slugsOnDisk = new Set(
  Object.keys(modules)
    .map((path) => path.replace("../topics/", "").replace(/\.ts$/, ""))
    .filter((slug) => slug !== "index"),
);

describe("navigation tree matches the topics on disk", () => {
  const flat = flattenTree();

  it("has a data file behind every topic the tree calls complete", () => {
    const missing = flat
      .filter((topic) => topic.status === "complete")
      .map((topic) => topic.slug)
      .filter((slug) => !slugsOnDisk.has(slug));

    expect(missing, `refs marcados "complete" sem arquivo em src/content/topics/`).toEqual([]);
  });

  it("has no topic file that the tree never references", () => {
    const referenced = new Set(flat.map((topic) => topic.slug));
    const orphans = [...slugsOnDisk].filter((slug) => !referenced.has(slug));

    expect(orphans, `arquivos em src/content/topics/ fora da árvore`).toEqual([]);
  });

  it("never lists the same slug twice", () => {
    const seen = new Map<string, number>();
    for (const topic of flat) seen.set(topic.slug, (seen.get(topic.slug) ?? 0) + 1);
    const duplicates = [...seen].filter(([, count]) => count > 1).map(([slug]) => slug);

    expect(duplicates, `slugs duplicados na árvore`).toEqual([]);
  });
});
