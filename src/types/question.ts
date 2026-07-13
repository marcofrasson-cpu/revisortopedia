import { z } from "zod";

/* ============================================================================
   Questões de estudo — MCQs ORIGINAIS no formato do TEOT (vinheta clínica +
   alternativas + gabarito comentado + referência). Autoradas a partir do
   conteúdo baseado em evidência do app; NÃO reproduzem provas/simulados
   protegidos por direitos autorais.
   ========================================================================== */

export const questionOptionSchema = z.object({
  key: z.string(), // "A".."E"
  text: z.string(),
});

export const questionSchema = z.object({
  id: z.string(),
  topicSlug: z.string(),
  regionId: z.string(),
  stem: z.string(),
  options: z.array(questionOptionSchema).min(3),
  correct: z.string(), // deve corresponder a options[].key
  explanation: z.string(),
  /** Referência curta (autor, journal, ano — DOI opcional). */
  reference: z.string().optional(),
  difficulty: z.enum(["básica", "intermediária", "avançada"]).default("intermediária"),
  tags: z.array(z.string()).default([]),
});

export type Question = z.infer<typeof questionSchema>;
export type QuestionOption = z.infer<typeof questionOptionSchema>;

/** Valida uma lista de questões autoradas como objetos simples (falha rápido). */
export function defineQuestions(data: unknown[]): Question[] {
  return data.map((q) => questionSchema.parse(q));
}
