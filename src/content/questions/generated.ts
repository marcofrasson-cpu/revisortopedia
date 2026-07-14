import type { Question, QuestionOption } from "../../types/question";
import type { Topic } from "../../types/topic";
import { defineQuestions } from "../../types/question";
import { allTopics } from "../registry";

/* Questões originais de fixação em formato de melhor resposta. A construção
   usa somente relações já revisadas no conteúdo (fato, classificação, técnica
   e evidência), sem reproduzir enunciados de provas ou simulados. */

const KEYS = ["A", "B", "C", "D"] as const;

function hash(value: string): number {
  let out = 0;
  for (let i = 0; i < value.length; i += 1) out = (out * 31 + value.charCodeAt(i)) >>> 0;
  return out;
}

function distinct(values: string[]): string[] {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))];
}

const globalFactValues = distinct(allTopics.flatMap((topic) => topic.keyFacts.map((fact) => fact.value)));
const globalClassDescriptions = distinct(
  allTopics.flatMap((topic) => topic.classification.flatMap((system) => system.types.map((type) => type.description))),
);
const globalTechniqueDetails = distinct(allTopics.flatMap((topic) => topic.technique.map((step) => step.detail)));
const globalEvidenceClaims = distinct(allTopics.flatMap((topic) => topic.evidence.map((item) => item.claim)));

function options(correct: string, candidates: string[], seed: string): { options: QuestionOption[]; correct: string } {
  const distractors = distinct(candidates).filter((candidate) => candidate !== correct).slice(0, 3);
  const fallback = distinct([...globalFactValues, ...globalClassDescriptions, ...globalTechniqueDetails, ...globalEvidenceClaims])
    .filter((candidate) => candidate !== correct && !distractors.includes(candidate));
  while (distractors.length < 3) distractors.push(fallback[distractors.length]);

  const correctIndex = hash(seed) % KEYS.length;
  const texts = [...distractors];
  texts.splice(correctIndex, 0, correct);
  return {
    options: texts.map((text, index) => ({ key: KEYS[index], text })),
    correct: KEYS[correctIndex],
  };
}

function shortReference(topic: Topic): string {
  return topic.meta.sources.slice(0, 2).join(" · ") || `Resumo: ${topic.title}`;
}

function citationReference(topic: Topic, evidenceIndex: number): string {
  const citation = topic.evidence[evidenceIndex]?.citation;
  if (!citation) return shortReference(topic);
  const identifier = citation.doi ? `DOI ${citation.doi}` : citation.pmid ? `PMID ${citation.pmid}` : "";
  return `${citation.authors}. ${citation.journal}. ${citation.year}${identifier ? ` — ${identifier}` : ""}`;
}

function factQuestion(topic: Topic): Question {
  const index = hash(`${topic.slug}:fact`) % topic.keyFacts.length;
  const target = topic.keyFacts[index];
  const built = options(
    target.value,
    topic.keyFacts.filter((_, itemIndex) => itemIndex !== index).map((fact) => fact.value),
    `${topic.slug}:fact:options`,
  );
  return {
    id: `autoq:${topic.slug}:fato`,
    topicSlug: topic.slug,
    regionId: topic.regionId,
    stem: `Em relação a ${topic.title}, qual alternativa corresponde corretamente ao item “${target.label}”?`,
    ...built,
    explanation: `${target.label}: ${target.value}. A associação foi extraída do quadro de pontos-chave do resumo e deve ser interpretada no contexto clínico descrito no tema.`,
    reference: shortReference(topic),
    difficulty: "básica",
    tags: [topic.regionId, "ponto-chave", "original"],
  };
}

function classificationQuestion(topic: Topic): Question {
  const systems = topic.classification.filter((system) => system.types.length > 0);
  if (systems.length === 0) {
    const index = (hash(`${topic.slug}:class-fallback`) + 1) % topic.keyFacts.length;
    const target = topic.keyFacts[index];
    const built = options(target.value, topic.keyFacts.map((fact) => fact.value), `${topic.slug}:class-fallback`);
    return {
      id: `autoq:${topic.slug}:classificacao`,
      topicSlug: topic.slug,
      regionId: topic.regionId,
      stem: `Durante a revisão de ${topic.title}, qual definição está corretamente associada a “${target.label}”?`,
      ...built,
      explanation: `A associação correta é “${target.label}: ${target.value}”. Este tópico não utiliza uma classificação formal como eixo principal.`,
      reference: shortReference(topic),
      difficulty: "intermediária",
      tags: [topic.regionId, "conceito", "original"],
    };
  }

  const system = systems[hash(`${topic.slug}:system`) % systems.length];
  const index = hash(`${topic.slug}:type`) % system.types.length;
  const target = system.types[index];
  const localDescriptions = topic.classification.flatMap((item) => item.types.map((type) => type.description));
  const built = options(
    target.description,
    [...system.types.map((type) => type.description), ...localDescriptions, ...globalClassDescriptions],
    `${topic.slug}:classification:options`,
  );
  return {
    id: `autoq:${topic.slug}:classificacao`,
    topicSlug: topic.slug,
    regionId: topic.regionId,
    stem: `Na classificação ${system.name}, aplicada a ${topic.title}, qual descrição corresponde a “${target.code} — ${target.label}”?`,
    ...built,
    explanation: `${target.code} — ${target.label}: ${target.description} A classificação se baseia em ${system.basis.toLowerCase()}`,
    reference: shortReference(topic),
    difficulty: "intermediária",
    tags: [topic.regionId, "classificação", "original"],
  };
}

function techniqueQuestion(topic: Topic): Question {
  const index = hash(`${topic.slug}:step`) % topic.technique.length;
  const target = topic.technique[index];
  const localDetails = topic.technique.filter((_, itemIndex) => itemIndex !== index).map((step) => step.detail);
  const built = options(target.detail, [...localDetails, ...globalTechniqueDetails], `${topic.slug}:technique:options`);
  return {
    id: `autoq:${topic.slug}:tecnica`,
    topicSlug: topic.slug,
    regionId: topic.regionId,
    stem: `Em uma discussão teórico-prática sobre ${topic.title}, qual conduta corresponde à etapa “${target.title}”?`,
    ...built,
    explanation: `Etapa ${target.n} — ${target.title}: ${target.detail}`,
    reference: shortReference(topic),
    difficulty: "intermediária",
    tags: [topic.regionId, "técnica", "decisão", "original"],
  };
}

function evidenceQuestion(topic: Topic): Question {
  const index = hash(`${topic.slug}:evidence`) % topic.evidence.length;
  const target = topic.evidence[index];
  const localClaims = topic.evidence.filter((_, itemIndex) => itemIndex !== index).map((item) => item.claim);
  const built = options(target.claim, [...localClaims, ...globalEvidenceClaims], `${topic.slug}:evidence:options`);
  const leadAuthor = target.citation.authors.split(",")[0];
  return {
    id: `autoq:${topic.slug}:evidencia`,
    topicSlug: topic.slug,
    regionId: topic.regionId,
    stem: `Qual conclusão está corretamente vinculada ao estudo de ${leadAuthor} e colaboradores (${target.citation.year}), citado no resumo de ${topic.title}?`,
    ...built,
    explanation: `${target.claim} Aplicação prática: ${target.takeaway}`,
    reference: citationReference(topic, index),
    difficulty: "avançada",
    tags: [topic.regionId, "evidência", target.era, "original"],
  };
}

export const generatedQuestions = defineQuestions(
  allTopics.flatMap((topic) => [
    factQuestion(topic),
    classificationQuestion(topic),
    techniqueQuestion(topic),
    evidenceQuestion(topic),
  ]),
);
