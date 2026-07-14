import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "tum-principios-enneking",
  slug: "estadiamento-enneking",
  kind: "fundamento",
  regionId: "tumores-e-metastases",
  bone: "Oncologia ortopédica",
  injury: "Estadiamento cirúrgico musculoesquelético",
  title: "Estadiamento de Enneking",
  subtitle:
    "Integrar grau, compartimento e metástase à linguagem de margens para transformar a extensão tumoral em um plano cirúrgico reproduzível.",
  laterality: null,
  status: "complete",
  overview:
    "O sistema de Enneking organiza tumores musculoesqueléticos segundo comportamento biológico e extensão anatômica. Para sarcomas, combina grau histológico (baixo ou alto), relação com o compartimento de origem (intra ou extracompartimental) e presença de metástases. O resultado orienta a intenção e a margem da cirurgia, mas não substitui protocolos específicos, AJCC/TNM ou resposta à terapia sistêmica.\n\nSarcoma de baixo grau é estágio I; alto grau, estágio II. O sufixo A indica tumor confinado ao compartimento e B, extensão além de suas barreiras. Qualquer metástase regional ou distante define estágio III. Assim: IA e IB são baixo grau; IIA e IIB, alto grau; III, metastático.\n\nPara tumores benignos, Enneking descreve estágio 1 latente, 2 ativo e 3 agressivo. A mesma lógica conecta biologia a margem: lesão latente pode ser observada; ativa frequentemente recebe curetagem; agressiva exige curetagem ampliada ou ressecção conforme diagnóstico e local. Margens são intralesional, marginal, ampla e radical. O objetivo moderno não é medir centímetros fixos, mas obter margem negativa através de barreira anatômica adequada sem sacrificar função desnecessariamente.",
  keyFacts: [
    { label: "Grau", value: "G1 baixo · G2 alto" },
    { label: "Extensão", value: "T1 intracompartimental · T2 extracompartimental" },
    { label: "Metástase", value: "M1 define estágio III" },
    { label: "Sarcoma", value: "IA, IB, IIA, IIB ou III" },
    { label: "Benigno", value: "1 latente · 2 ativo · 3 agressivo" },
    { label: "Margens", value: "Intralesional · marginal · ampla · radical" },
  ],
  anatomy: {
    text:
      "Compartimento é uma unidade anatômica delimitada por barreiras naturais. Em osso, córtex e cartilagem articular são barreiras; em partes moles, fáscias e septos definem compartimentos. T1 permanece dentro da unidade de origem. T2 rompe a barreira e invade tecidos adjacentes ou apresenta componente extraósseo. Na prática moderna, a RM demonstra essa relação e orienta a ressecção.\n\nZona reativa circunda o tumor e pode conter edema, pseudocápsula, células satélites e contaminação da biópsia. Passar através do tumor é margem intralesional. Passar pela zona reativa é marginal. A margem ampla atravessa tecido normal fora da zona reativa, preservando o compartimento quando possível. Radical remove todo o compartimento de origem.\n\nEspessura não equivale a qualidade: milímetros de fáscia intacta podem ser oncologicamente superiores a centímetros de músculo infiltrado. O patologista deve orientar a peça, pintar margens e informar o ponto mais próximo e a barreira presente.",
    figureIds: ["estadiamento-enneking:compartimento", "estadiamento-enneking:estagios"],
  },
  classification: [
    { id: "sarcomas", name: "Sarcomas musculoesqueléticos", basis: "Grau (G), extensão compartimental (T) e metástase (M).", types: [
      { code: "IA", label: "Baixo grau intracompartimental", description: "G1 T1 M0; tumor de baixa agressividade confinado à barreira anatômica.", figureId: "estadiamento-enneking:estagios", figureVariant: "IA" },
      { code: "IB", label: "Baixo grau extracompartimental", description: "G1 T2 M0; baixo grau com ruptura da barreira ou extensão extraóssea.", figureId: "estadiamento-enneking:estagios", figureVariant: "IB" },
      { code: "IIA", label: "Alto grau intracompartimental", description: "G2 T1 M0; alta agressividade ainda confinada ao compartimento.", figureId: "estadiamento-enneking:estagios", figureVariant: "IIA" },
      { code: "IIB", label: "Alto grau extracompartimental", description: "G2 T2 M0; apresentação clássica de muitos sarcomas ósseos de alto grau.", figureId: "estadiamento-enneking:estagios", figureVariant: "IIB" },
      { code: "III", label: "Metastático", description: "Qualquer G e T com M1 regional ou distante.", figureId: "estadiamento-enneking:estagios", figureVariant: "III" },
    ] },
    { id: "benignos", name: "Tumores benignos", basis: "Atividade biológica e agressividade local.", types: [
      { code: "1", label: "Latente", description: "Margem esclerótica, assintomático e sem crescimento; observação costuma bastar.", figureId: "estadiamento-enneking:benignos", figureVariant: "1" },
      { code: "2", label: "Ativo", description: "Crescimento limitado e sintomas; curetagem ou excisão conforme diagnóstico.", figureId: "estadiamento-enneking:benignos", figureVariant: "2" },
      { code: "3", label: "Agressivo", description: "Destruição cortical, extensão de partes moles e recorrência; exige controle local ampliado.", figureId: "estadiamento-enneking:benignos", figureVariant: "3" },
    ] },
  ],
  indications: {
    operative: ["Planejamento de ressecção de sarcoma ósseo ou de partes moles.", "Definição da margem desejada e viabilidade de preservação do membro.", "Comunicação padronizada entre cirurgia, radiologia e patologia.", "Estratificação cirúrgica de lesões benignas latentes, ativas e agressivas."],
    nonOperative: ["Lesão benigna latente sem sintomas ou crescimento.", "Uso isolado do Enneking para decidir quimioterapia ou radioterapia.", "Substituição de AJCC/TNM ou protocolos específicos do subtipo tumoral.", "Estadiamento antes de completar imagem local, tórax e histologia."],
    decisionNotes:
      "Enneking informa a estratégia local. Alto grau sem metástase não significa automaticamente amputação: ressecção ampla preservando membro é adequada se margens negativas e reconstrução funcional forem possíveis. Metástase não elimina controle local, mas muda objetivo e integração sistêmica. O plano final combina Enneking, subtipo histológico, resposta à quimioterapia, anatomia neurovascular, expectativa funcional e preferência do paciente.",
  },
  approaches: [],
  technique: [
    { n: 1, title: "Confirmar diagnóstico e grau", detail: "Integrar biópsia representativa, subtipo e grau. Não estadiar por aparência radiográfica isolada nem assumir que todo tumor benigno seja biologicamente latente.", figureId: "estadiamento-enneking:estagios", tips: ["Revisão por patologista musculoesquelético reduz discordância"], pitfalls: ["Confundir grau histológico com tamanho"] },
    { n: 2, title: "Mapear o compartimento", detail: "Na RM, definir limites intraósseos, extensão extraóssea, articulações, feixes, fratura e contaminação da biópsia. Classificar T1 se contido e T2 se rompe barreira.", figureId: "estadiamento-enneking:compartimento", tips: ["Incluir todo o osso e articulações adjacentes quando indicado"], pitfalls: ["Chamar grande tumor contido de T2 apenas pelo tamanho"] },
    { n: 3, title: "Pesquisar metástases", detail: "Completar tórax e investigação sistêmica conforme subtipo. Linfonodo regional é incomum em sarcomas, mas deve ser avaliado nos subtipos que disseminam por via linfática.", figureId: "estadiamento-enneking:estagios", figureVariant: "III", tips: ["Pulmão é sítio dominante em muitos sarcomas ósseos"], pitfalls: ["Planejar ressecção sem estadiamento torácico"] },
    { n: 4, title: "Atribuir o estágio", detail: "Combinar G, T e M: IA/IB para baixo grau, IIA/IIB para alto grau e III para metastático. Em benignos, classificar latente, ativo ou agressivo.", figureId: "estadiamento-enneking:estagios", tips: ["Registrar os componentes além do rótulo final"], pitfalls: ["Usar estágio sem explicar G, T e M"] },
    { n: 5, title: "Definir a margem pretendida", detail: "Planejar curetagem intralesional quando oncologicamente apropriada ou ressecção marginal, ampla ou radical. Incluir trajeto da biópsia e estruturas contaminadas na peça.", figureId: "estadiamento-enneking:margens", tips: ["Barreira anatômica intacta importa mais que centímetro arbitrário"], pitfalls: ["Confundir margem planejada com margem obtida"] },
    { n: 6, title: "Auditar a margem definitiva", detail: "Orientar a peça com o patologista, marcar margens críticas e comparar plano com histologia. Margem positiva exige discussão multidisciplinar de ampliação, radioterapia ou vigilância conforme o subtipo.", figureId: "estadiamento-enneking:margens", tips: ["Documentar o ponto mais próximo e o tecido da barreira"], pitfalls: ["Relatar apenas R0 sem contexto anatômico"] },
  ],
  postop: { immobilization: "Não se aplica isoladamente; depende da ressecção e reconstrução realizadas.", weightBearing: "Definida pelo procedimento reconstrutivo e pela qualidade óssea residual.", rehab: [{ window: "Planejamento", weightBearing: "Não se aplica", focus: "Alinhar objetivo oncológico, margem, reconstrução e função esperada." }, { window: "Após ressecção", weightBearing: "Conforme reconstrução", focus: "Reabilitação funcional e vigilância oncológica específica do diagnóstico." }], followup: "Vigilância local e sistêmica é específica do subtipo, grau, estágio, margem e tratamento. Recorrência local exige reestadiamento completo." },
  complications: [
    { name: "Subestadiamento", detail: "Grau ou extensão subestimados levam a margem insuficiente.", prevention: "Amostra representativa e RM pré-biópsia completa." },
    { name: "Margem positiva", detail: "Tumor microscópico residual aumenta risco de recorrência local.", prevention: "Planejamento por barreiras, orientação da peça e auditoria patológica." },
    { name: "Ressecção excessiva", detail: "Aplicar margem radical sem necessidade sacrifica função.", prevention: "Equilibrar biologia, barreiras e resposta terapêutica." },
    { name: "Comunicação ambígua", detail: "Estágio sem componentes ou margem sem contexto não orientam a equipe.", prevention: "Registrar G, T, M, margem planejada e margem histológica." },
  ],
  evidence: [
    { id: "enneking-1980", claim: "O sistema de Enneking estabeleceu uma linguagem cirúrgica baseada em grau, compartimento e metástase, conectando estágio à margem de ressecção.", takeaway: "Use o sistema para planejar controle local e comunicar a estratégia cirúrgica.", level: "V", studyType: "Sistema de estadiamento e consenso", era: "classico", citation: { authors: "Enneking WF, Spanier SS, Goodman MA", title: "A system for the surgical staging of musculoskeletal sarcoma. 1980", journal: "Clinical Orthopaedics and Related Research", year: 2003, pmid: "14612624", doi: "10.1097/01.blo.0000093891.12372.0f" } },
    { id: "picci-margens-1994", claim: "Em osteossarcoma, resposta histológica e margens cirúrgicas foram os principais fatores associados ao controle local.", takeaway: "Estágio e margem devem ser interpretados junto da biologia e resposta ao tratamento.", level: "III", studyType: "Coorte prognóstica", era: "classico", citation: { authors: "Picci P, Sangiorgi L, Rougraff BT, Neff JR, Casadei R, Campanacci M", title: "Relationship of chemotherapy-induced necrosis and surgical margins to local recurrence in osteosarcoma", journal: "Journal of Clinical Oncology", year: 1994, pmid: "7989947", doi: "10.1200/JCO.1994.12.12.2699" } },
    { id: "li-margens-2012", claim: "Margens positivas aumentaram recorrência local; margens estreitas porém negativas não se comportaram como margens comprometidas na coorte estudada.", takeaway: "Barreira e negatividade importam mais que um número universal de milímetros.", level: "III", studyType: "Coorte retrospectiva", era: "atual", citation: { authors: "Li X, Moretti VM, Ashana AO, Lackman RD", title: "Impact of close surgical margin on local recurrence and survival in osteosarcoma", journal: "International Orthopaedics", year: 2012, pmid: "21404025", doi: "10.1007/s00264-011-1230-x" } },
  ],
  pearls: ["Estágio descreve biologia e anatomia; não é apenas tamanho.", "T1 é contido; T2 rompe a barreira.", "Qualquer metástase define estágio III.", "Margem ampla atravessa tecido normal fora da zona reativa.", "Barreira anatômica pode valer mais que distância métrica."],
  pitfalls: ["Confundir extensão extracompartimental com tumor grande.", "Usar Enneking no lugar de AJCC e protocolo específico.", "Planejar margem sem incluir o trajeto da biópsia.", "Chamar curetagem de margem ampla.", "Confundir margem pretendida com margem histológica obtida."],
  figures: [
    { id: "estadiamento-enneking:compartimento", caption: "Tumor contido versus ruptura da barreira e extensão extracompartimental.", alt: "Corte do osso e partes moles comparando tumor T1 e T2.", kind: "diagram" },
    { id: "estadiamento-enneking:estagios", caption: "Matriz de grau, compartimento e metástase para estágios IA a III.", alt: "Tabela visual do estadiamento de Enneking para sarcomas.", kind: "diagram" },
    { id: "estadiamento-enneking:benignos", caption: "Tumores benignos latentes, ativos e agressivos.", alt: "Progressão radiográfica esquemática dos estágios benignos de Enneking.", kind: "diagram" },
    { id: "estadiamento-enneking:margens", caption: "Margens intralesional, marginal, ampla e radical em relação à zona reativa.", alt: "Planos de ressecção ao redor de um tumor musculoesquelético.", kind: "diagram" },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Enneking et al., CORR 1980/2003", "Picci et al., JCO 1994", "Li et al., Int Orthop 2012"], attribution: "Conteúdo original em português brasileiro; evidências verificadas no PubMed e diagramas próprios.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), princípios de estadiamento e margens em tumores musculoesqueléticos." },
});
