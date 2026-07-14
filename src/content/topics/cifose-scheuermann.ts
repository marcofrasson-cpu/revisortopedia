import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "col-deformidade-scheuermann",
  slug: "cifose-scheuermann",
  kind: "condicao",
  regionId: "coluna",
  bone: "Coluna torácica e toracolombar",
  injury: "Cifose estrutural do adolescente",
  title: "Cifose de Scheuermann",
  subtitle: "Distinguir a deformidade estrutural da postura flexível e tratar o paciente, não apenas o ângulo de Cobb.",
  laterality: null,
  status: "complete",
  overview: "A cifose de Scheuermann é uma hipercifose estrutural que surge durante o crescimento. A definição radiográfica clássica exige acunhamento anterior de pelo menos 5 graus em três vértebras consecutivas, acompanhado por irregularidade dos platôs, nódulos de Schmorl e redução discal variável. A deformidade é rígida: não corrige completamente com hiperextensão ou decúbito.\n\nA apresentação torácica clássica tem ápice entre T7 e T9 e lordose lombar compensatória. A forma toracolombar tem ápice mais baixo, costuma ser dolorosa e pode evoluir de modo menos favorável. O exame deve documentar equilíbrio sagital, flexibilidade, dor, encurtamento de isquiotibiais, lordose compensatória, exame neurológico e impacto psicossocial.\n\nObservação, exercícios e controle sintomático tratam curvas leves e estáveis. Em pacientes ainda em crescimento, órtese bem ajustada pode remodelar curvas moderadas e flexíveis. Cirurgia é reservada para progressão, dor refratária, desequilíbrio, déficit neurológico raro ou deformidade grave com impacto relevante. O limiar angular não é absoluto; curvas em torno de 70-80 graus entram na discussão, mas rigidez, localização, sintomas e maturidade determinam a decisão.",
  keyFacts: [
    { label: "Critério clássico", value: "Acunhamento ≥ 5° em 3 vértebras consecutivas" },
    { label: "Rigidez", value: "Não corrige por completo na hiperextensão" },
    { label: "Imagem", value: "Cobb + platôs irregulares + nódulos de Schmorl" },
    { label: "Órtese", value: "Melhor resposta com crescimento remanescente e curva flexível" },
    { label: "Cirurgia", value: "Progressão, dor refratária, desequilíbrio ou deformidade grave" },
    { label: "Meta cirúrgica", value: "Equilíbrio e correção segura; evitar hipercorreção" },
  ],
  anatomy: {
    text: "O crescimento assimétrico da porção anterior dos corpos vertebrais produz acunhamento e cifose rígida. O ápice torácico está habitualmente entre T7 e T9; na variante toracolombar, entre T10 e L2. A lordose cervical e lombar aumenta para manter a cabeça sobre a pelve, podendo ser fonte de dor muscular.\n\nA medula é alongada sobre a concavidade anterior da deformidade. Déficit neurológico é incomum e exige RM para pesquisar hérnia discal, cisto, tumor, siringomielia ou compressão apical. A artéria de Adamkiewicz e o suprimento medular segmentar são relevantes em liberações e osteotomias.\n\nRadiografia panorâmica em ortostase mede o Cobb entre os platôs mais inclinados. Perfil em hiperextensão sobre apoio avalia flexibilidade e ajuda a planejar a correção. Maturidade esquelética, balanço sagital global e parâmetros pélvicos complementam o ângulo isolado.",
    figureIds: ["framework-completion:scheuermann-diagnostico", "framework-completion:scheuermann-conduta"],
  },
  classification: [
    { id: "padrao-scheuermann", name: "Padrão anatômico", basis: "Localização do ápice e comportamento da deformidade.", types: [
      { code: "I", label: "Torácica clássica", description: "Ápice torácico médio, hiperlordose lombar compensatória e imagem típica de Scheuermann.", figureId: "framework-completion:scheuermann-diagnostico", figureVariant: "toracica" },
      { code: "II", label: "Toracolombar", description: "Ápice entre T10 e L2; pode gerar mais lombalgia e merece vigilância de progressão.", figureId: "framework-completion:scheuermann-diagnostico", figureVariant: "toracolombar" },
    ] },
  ],
  indications: {
    operative: ["Progressão documentada apesar de manejo adequado.", "Dor incapacitante persistente após tratamento conservador estruturado.", "Cifose grave, em geral acima de 70-80 graus, com rigidez, desequilíbrio ou impacto funcional/psicossocial relevante.", "Déficit neurológico ou compressão demonstrada, situação rara."],
    nonOperative: ["Curva leve ou moderada sem progressão e com sintomas controláveis.", "Exercícios de extensão, condicionamento e alongamento para dor e postura.", "Órtese em paciente imaturo com curva moderada, flexível e potencial de crescimento.", "Observação de achado radiográfico sem repercussão clínica."],
    decisionNotes: "Órtese funciona melhor antes da maturidade e exige adesão. Na cirurgia moderna, instrumentação posterior segmentar com osteotomias de Ponte costuma evitar a morbidade do acesso anterior. Correção excessiva aumenta falha de junção; o objetivo é restaurar um perfil harmonioso, não converter a cifose em coluna reta.",
  },
  approaches: [
    { id: "posterior", name: "Correção posterior", indication: "Padrão atual para a maioria das deformidades operatórias.", interval: "Exposição posterior segmentar, liberação facetária, osteotomias conforme rigidez e instrumentação pedicular.", atRisk: ["Medula espinal", "Raízes", "Junções proximal e distal", "Musculatura extensora"], figureId: "framework-completion:scheuermann-conduta" },
    { id: "combinada", name: "Liberação anterior e correção posterior", indication: "Casos muito rígidos ou reconstruções selecionadas; hoje menos frequente.", interval: "Liberação discal anterior associada a instrumentação posterior.", atRisk: ["Pulmão e pleura", "Vasos segmentares", "Suprimento medular", "Ducto torácico"], figureId: "framework-completion:scheuermann-conduta" },
  ],
  technique: [
    { n: 1, title: "Confirmar deformidade estrutural", detail: "Obter radiografia panorâmica em ortostase e perfil em hiperextensão. Medir Cobb, acunhamento, equilíbrio sagital e maturidade; diferenciar cifose postural flexível.", figureId: "framework-completion:scheuermann-diagnostico", tips: ["Marcar sempre as vértebras terminais usadas no Cobb"], pitfalls: ["Diagnosticar apenas por nódulos de Schmorl"] },
    { n: 2, title: "Avaliar repercussão", detail: "Relacionar dor, fadiga, imagem corporal, atividade e progressão. Realizar exame neurológico completo e RM se houver sinais atípicos, dor noturna ou planejamento cirúrgico.", tips: ["Fotografias clínicas padronizadas ajudam a acompanhar o perfil"], pitfalls: ["Tratar o número sem ouvir o paciente"] },
    { n: 3, title: "Estruturar tratamento conservador", detail: "Prescrever educação, atividade, extensão torácica, fortalecimento do tronco e alongamento. Indicar órtese moldada quando há crescimento e potencial de correção.", figureId: "framework-completion:scheuermann-conduta", figureVariant: "ortese", tips: ["Checar adaptação e uso real da órtese"], pitfalls: ["Prometer correção óssea com exercício isolado"] },
    { n: 4, title: "Planejar níveis e correção", detail: "Na cirurgia, incluir as vértebras terminais adequadas, analisar a vértebra estável sagital e preservar tecidos de junção. Planejar osteotomias pela rigidez.", figureId: "framework-completion:scheuermann-conduta", figureVariant: "cirurgia", tips: ["Correção proporcional reduz estresse de junção"], pitfalls: ["Terminar a fusão dentro da cifose"] },
    { n: 5, title: "Corrigir sob monitorização", detail: "Realizar liberações graduais, instrumentar, aplicar forças segmentares e confirmar alinhamento e integridade neurológica.", tips: ["Manter perfusão e evitar distração brusca na concavidade"], pitfalls: ["Hipercorrigir em busca de radiografia perfeita"] },
  ],
  postop: {
    immobilization: "Órtese pós-operatória não é rotineira após instrumentação estável; pode ser usada em situações selecionadas.",
    weightBearing: "Deambulação precoce; evitar impacto e carga axial intensa até consolidação.",
    rehab: [
      { window: "0-6 semanas", weightBearing: "Marcha livre conforme tolerância", focus: "Controle de dor, postura, mobilidade e cuidado da ferida." },
      { window: "6 semanas-3 meses", weightBearing: "Atividades leves", focus: "Condicionamento progressivo e proteção da artrodese." },
      { window: "3-12 meses", weightBearing: "Progressão após consolidação", focus: "Força, resistência e retorno gradual ao esporte sem contato." },
    ],
    followup: "Radiografias panorâmicas seriadas avaliam equilíbrio, implantes e junções. Dor nova, perda de correção ou alteração neurológica requer investigação imediata.",
  },
  complications: [
    { name: "Cifose juncional proximal", detail: "Aumento angular acima da instrumentação, por vezes com falha estrutural.", prevention: "Níveis adequados, preservação ligamentar e correção sem excesso." },
    { name: "Falha juncional distal", detail: "Progressão da cifose ou desequilíbrio abaixo da artrodese.", prevention: "Selecionar vértebra terminal com critérios sagitais." },
    { name: "Déficit neurológico", detail: "Raro, porém grave, por correção, implante ou perfusão inadequada.", prevention: "Planejamento, monitorização e correção gradual." },
    { name: "Pseudoartrose ou falha de implante", detail: "Dor e perda de correção tardias.", prevention: "Preparo adequado do leito, enxertia e proteção até consolidação." },
  ],
  evidence: [
    { id: "scheuermann-followup-2002", claim: "Seguimento prolongado demonstrou que sintomas e função variam e não são explicados apenas pelo ângulo radiográfico.", takeaway: "A decisão deve integrar dor, função, equilíbrio e progressão.", level: "IV", studyType: "Seguimento clínico de longo prazo", era: "classico", citation: { authors: "Soo CL, Noble PC, Esses SI", title: "Scheuermann kyphosis: long-term follow-up", journal: "The Spine Journal", year: 2002, pmid: "14588288", doi: "10.1016/S1529-9430(01)00168-1" } },
    { id: "scheuermann-surgery-2022", claim: "Em seguimento de longo prazo, correção posterior isolada apresentou resultados comparáveis ao acesso combinado e menor carga de complicações.", takeaway: "A correção posterior moderna é suficiente na maioria dos casos operatórios.", level: "III", studyType: "Coorte comparativa de longo prazo", era: "atual", citation: { authors: "Debnath UK, Quraishi NA, McCarthy MJH, et al.", title: "Long-term outcome after surgical treatment of Scheuermann's Kyphosis", journal: "Spine Deformity", year: 2022, pmid: "34533775", doi: "10.1007/s43390-021-00410-7" } },
  ],
  pearls: ["Scheuermann é rígida; cifose postural corrige.", "Nódulo de Schmorl isolado não fecha diagnóstico.", "Órtese precisa de crescimento remanescente e adesão.", "Curva toracolombar merece atenção à dor e progressão.", "Correção equilibrada é mais segura que coluna excessivamente reta."],
  pitfalls: ["Indicar cirurgia por Cobb isolado.", "Ignorar dor noturna ou exame neurológico anormal.", "Prometer remodelação com órtese após maturidade.", "Escolher nível distal inadequado.", "Hipercorrigir e criar falha juncional."],
  figures: [
    { id: "framework-completion:scheuermann-diagnostico", caption: "Critério de acunhamento, rigidez e padrões torácico e toracolombar.", alt: "Comparação visual entre cifose postural e cifose estrutural de Scheuermann.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's Operative Orthopaedics, 14a ed.; Hebert e Lech, 6a ed." } },
    { id: "framework-completion:scheuermann-conduta", caption: "Conduta conforme crescimento, flexibilidade, sintomas e progressão.", alt: "Fluxo entre observação, órtese e correção cirúrgica da cifose de Scheuermann.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Debnath et al., Spine Deformity, 2022." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, Ortopedia e Traumatologia, 6a ed. (2025)", "Soo et al., Spine J 2002", "Debnath et al., Spine Deform 2022"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), deformidades da coluna." },
});
