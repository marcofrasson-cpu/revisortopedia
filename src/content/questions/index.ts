import type { Question } from "../../types/question";
import { membroInferiorQuestions } from "./membro-inferior";
import { allRegions, getTopic } from "../registry";

/* Registro de questões. Um novo bloco = um arquivo novo + uma linha aqui. */

export const questions: Question[] = [...membroInferiorQuestions];

export function allQuestions(): Question[] {
  return questions;
}

export function questionsForRegion(regionId: string): Question[] {
  return questions.filter((q) => q.regionId === regionId);
}

export function questionsForTopic(slug: string): Question[] {
  return questions.filter((q) => q.topicSlug === slug);
}

export interface RegionQuizGroup {
  id: string;
  title: string;
  count: number;
}

/** Regiões que já têm questões, com contagem — para a tela de estudo. */
export function regionsWithQuestions(): RegionQuizGroup[] {
  const out: RegionQuizGroup[] = [];
  for (const region of allRegions) {
    const count = questionsForRegion(region.id).length;
    if (count > 0) out.push({ id: region.id, title: region.title, count });
  }
  return out;
}

/** Título legível do tópico de uma questão (para exibir no gabarito). */
export function topicTitle(slug: string): string {
  return getTopic(slug)?.title ?? slug;
}

export const quizStats = {
  total: questions.length,
  regions: regionsWithQuestions().length,
};
