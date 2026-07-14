import { z } from "zod";

export const flashcardCategorySchema = z.enum([
  "ponto-chave",
  "classificação",
  "indicação",
  "técnica",
  "evidência",
  "pérola",
  "armadilha",
]);

export const flashcardSchema = z.object({
  id: z.string(),
  topicSlug: z.string(),
  regionId: z.string(),
  category: flashcardCategorySchema,
  prompt: z.string().min(1),
  answer: z.string().min(1),
  reference: z.string().optional(),
});

export type Flashcard = z.infer<typeof flashcardSchema>;
export type FlashcardCategory = z.infer<typeof flashcardCategorySchema>;

export function defineFlashcards(data: unknown[]): Flashcard[] {
  return data.map((card) => flashcardSchema.parse(card));
}
