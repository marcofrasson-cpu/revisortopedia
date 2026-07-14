import { defineTopic } from "../../types/topic";
import { topic as luxacaoJoelho } from "./luxacao-joelho";

export const topic = defineTopic({
  ...luxacaoJoelho,
  id: "esp-joelho-lesao-multiligamentar",
  slug: "lesao-multiligamentar-joelho",
  kind: "condicao",
  regionId: "esportiva-artroscopia",
  injury: "Lesão multiligamentar do joelho",
  title: "Lesão multiligamentar do joelho",
  subtitle:
    "Do reconhecimento da luxação espontaneamente reduzida e da emergência vascular ao planejamento da reconstrução ligamentar e reabilitação esportiva.",
  meta: {
    ...luxacaoJoelho.meta,
    lastReviewed: "2026-07-14",
    attribution:
      "Versão esportiva derivada do conteúdo completo de luxação do joelho; evidências verificadas no PubMed e diagramas originais compartilhados.",
  },
});
