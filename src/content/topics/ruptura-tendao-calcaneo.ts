import { defineTopic } from "../../types/topic";
import { rupturaTendaoAquiles } from "./ruptura-tendao-aquiles";

export const topic = defineTopic({
  ...rupturaTendaoAquiles,
  id: "esp-tornozelo-ruptura-tendao-calcaneo",
  slug: "ruptura-tendao-calcaneo",
  kind: "condicao",
  regionId: "esportiva-artroscopia",
  bone: "Tornozelo & pé",
  injury: "Ruptura do tendão calcâneo",
  title: "Ruptura do tendão calcâneo",
  subtitle:
    "Diagnóstico clínico, decisão compartilhada entre reparo e tratamento funcional e retorno seguro à corrida e ao salto.",
  meta: {
    ...rupturaTendaoAquiles.meta,
    lastReviewed: "2026-07-14",
    attribution:
      "Versão esportiva derivada do conteúdo completo de ruptura do tendão de Aquiles; evidências verificadas no PubMed e diagramas originais compartilhados.",
  },
});
