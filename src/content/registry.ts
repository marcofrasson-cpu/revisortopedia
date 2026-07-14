import type { RegionNode, TopicStatus } from "../types/topic";
import { regions } from "./regions";

/* ============================================================================
   Content registry — a camada de ÁRVORE. Conhece as regiões, os grupos e as
   referências de tópico: o suficiente para navegar, buscar por título, montar
   o breadcrumb e ordenar prev/next.

   Deliberadamente NÃO importa os corpos dos tópicos. Este módulo está no
   caminho de boot (a NavTree vive no AppShell, montada em toda rota), e o
   barrel dos 98 tópicos custa ~536 ms de eval + zod. Quem precisa do conteúdo
   de um tópico usa ./topicData, carregado sob demanda.
   ========================================================================== */

export const allRegions: RegionNode[] = regions;

/** O status vem da árvore. tree-integrity.test.ts garante que todo ref
    "complete" tem arquivo e que nenhum arquivo ficou fora dela. */
export function effectiveStatus(_slug: string, declared: TopicStatus): TopicStatus {
  return declared;
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
          status: ref.status,
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

export function hasTopic(slug: string): boolean {
  return readableOrder.includes(slug);
}

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
