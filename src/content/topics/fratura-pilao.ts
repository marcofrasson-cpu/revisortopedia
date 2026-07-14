import { defineTopic } from "../../types/topic";
import { topic as fraturaPilaoTibial } from "./fratura-pilao-tibial";

export const topic = defineTopic({
  ...fraturaPilaoTibial,
  id: "mi-tornozelo-fratura-pilao",
  slug: "fratura-pilao",
  title: "Fratura do pilão",
  subtitle:
    "Do envelope de partes moles à estratégia estagiada para reconstrução do plafond tibial.",
  meta: {
    ...fraturaPilaoTibial.meta,
    lastReviewed: "2026-07-14",
    attribution:
      "Versão de navegação derivada do conteúdo completo de fratura do pilão tibial, com evidências e figuras compartilhadas.",
  },
});
