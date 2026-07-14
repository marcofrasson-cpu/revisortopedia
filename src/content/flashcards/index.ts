import type { Flashcard } from "../../types/flashcard";
import type { Topic } from "../../types/topic";
import { defineFlashcards } from "../../types/flashcard";
import { allRegions } from "../registry";
import { allTopics, getTopic } from "../topicData";

function reference(topic: Topic): string {
  return topic.meta.sources.slice(0, 2).join(" · ") || `Resumo: ${topic.title}`;
}

function bullets(items: string[], limit = 4): string {
  return items.slice(0, limit).map((item) => `• ${item}`).join("\n");
}

function techniqueIndexes(topic: Topic): number[] {
  const last = topic.technique.length - 1;
  return [...new Set([0, Math.floor(last / 2), last])].filter((index) => index >= 0);
}

function cardsForTopic(topic: Topic): Flashcard[] {
  const source = reference(topic);
  const cards: Flashcard[] = [];

  topic.keyFacts.slice(0, 4).forEach((fact, index) => {
    cards.push({
      id: `card:${topic.slug}:fato:${index + 1}`,
      topicSlug: topic.slug,
      regionId: topic.regionId,
      category: "ponto-chave",
      prompt: `${topic.title}: o que deve ser lembrado sobre “${fact.label}”?`,
      answer: fact.value,
      reference: source,
    });
  });

  topic.classification.flatMap((system) => system.types.map((type) => ({ system, type }))).slice(0, 2)
    .forEach(({ system, type }, index) => {
      cards.push({
        id: `card:${topic.slug}:classificacao:${index + 1}`,
        topicSlug: topic.slug,
        regionId: topic.regionId,
        category: "classificação",
        prompt: `Na classificação ${system.name}, como se define “${type.code} — ${type.label}”?`,
        answer: type.description,
        reference: source,
      });
    });

  cards.push({
    id: `card:${topic.slug}:indicacao:operar`,
    topicSlug: topic.slug,
    regionId: topic.regionId,
    category: "indicação",
    prompt: `Quais são as principais indicações operatórias em ${topic.title}?`,
    answer: bullets(topic.indications.operative),
    reference: source,
  });
  cards.push({
    id: `card:${topic.slug}:indicacao:nao-operar`,
    topicSlug: topic.slug,
    regionId: topic.regionId,
    category: "indicação",
    prompt: `Quando o manejo não operatório ou a observação são apropriados em ${topic.title}?`,
    answer: bullets(topic.indications.nonOperative),
    reference: source,
  });

  techniqueIndexes(topic).forEach((index, cardIndex) => {
    const step = topic.technique[index];
    cards.push({
      id: `card:${topic.slug}:tecnica:${cardIndex + 1}`,
      topicSlug: topic.slug,
      regionId: topic.regionId,
      category: "técnica",
      prompt: `Em ${topic.title}, o que deve ser feito na etapa “${step.title}”?`,
      answer: step.detail,
      reference: source,
    });
  });

  const evidence = topic.evidence[0];
  cards.push({
    id: `card:${topic.slug}:evidencia:1`,
    topicSlug: topic.slug,
    regionId: topic.regionId,
    category: "evidência",
    prompt: `Qual é a principal mensagem prática da evidência de ${evidence.citation.authors.split(",")[0]} (${evidence.citation.year}) sobre ${topic.title}?`,
    answer: `${evidence.claim}\n\nAplicação: ${evidence.takeaway}`,
    reference: `${evidence.citation.journal} · ${evidence.citation.year}${evidence.citation.doi ? ` · DOI ${evidence.citation.doi}` : evidence.citation.pmid ? ` · PMID ${evidence.citation.pmid}` : ""}`,
  });

  cards.push({
    id: `card:${topic.slug}:perola:1`,
    topicSlug: topic.slug,
    regionId: topic.regionId,
    category: "pérola",
    prompt: `Quais pérolas de prova e prática devem ser lembradas em ${topic.title}?`,
    answer: bullets(topic.pearls, 3),
    reference: source,
  });
  cards.push({
    id: `card:${topic.slug}:armadilha:1`,
    topicSlug: topic.slug,
    regionId: topic.regionId,
    category: "armadilha",
    prompt: `Quais erros devem ser evitados em ${topic.title}?`,
    answer: bullets(topic.pitfalls, 3),
    reference: source,
  });

  return cards;
}

export const flashcards = defineFlashcards(allTopics.flatMap(cardsForTopic));

export function allFlashcards(): Flashcard[] {
  return flashcards;
}

export function flashcardsForTopic(slug: string): Flashcard[] {
  return flashcards.filter((card) => card.topicSlug === slug);
}

export function flashcardsForRegion(regionId: string): Flashcard[] {
  return flashcards.filter((card) => card.regionId === regionId);
}

export function flashcardTopicTitle(slug: string): string {
  return getTopic(slug)?.title ?? slug;
}

export const flashcardStats = {
  total: flashcards.length,
  topics: new Set(flashcards.map((card) => card.topicSlug)).size,
  regions: allRegions.filter((region) => flashcardsForRegion(region.id).length > 0).length,
};
