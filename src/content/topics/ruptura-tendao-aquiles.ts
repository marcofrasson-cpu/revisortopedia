import { defineTopic } from "../../types/topic";

/* Ruptura aguda do tendão de Aquiles (tendão calcâneo).
   Segundo tópico-semente — exercita o framework fora do domínio de fratura.
   Evidência recuperada do PubMed (DOIs citados). */
export const rupturaTendaoAquiles = defineTopic({
  id: "mi-aquiles-ruptura",
  slug: "ruptura-tendao-aquiles",
  regionId: "membro-inferior",
  bone: "Tornozelo & retropé",
  injury: "Ruptura tendínea",
  title: "Ruptura do tendão de Aquiles",
  subtitle:
    "Ruptura aguda do tendão calcâneo — diagnóstico clínico e a decisão entre reparo e tratamento funcional.",
  laterality: null,
  status: "complete",

  overview:
    "A ruptura aguda do tendão calcâneo (Aquiles) ocorre tipicamente em homens de 30 a 50 anos, no esporte recreacional, durante uma arrancada ou salto — uma contração excêntrica súbita do tríceps sural. A lesão acontece quase sempre na zona hipovascular, 2 a 6 cm proximal à inserção no calcâneo.\n\nO diagnóstico é clínico: teste de Thompson positivo, gap palpável e perda da tensão de repouso (Matles). Imagem raramente muda a conduta.\n\nA grande questão terapêutica — operar ou não — praticamente empatou. Com reabilitação funcional precoce, a diferença de reruptura entre cirurgia e tratamento não-operatório torna-se pequena, à custa de complicações de ferida e de nervo no grupo cirúrgico. A conduta é uma decisão compartilhada, guiada por idade, demanda, comorbidades e aposição dinâmica dos cotos.",

  keyFacts: [
    { label: "Perfil típico", value: "Homem 30–50a, esporte recreacional" },
    { label: "Local da ruptura", value: "Zona hipovascular 2–6 cm da inserção" },
    { label: "Diagnóstico", value: "Clínico — Thompson, gap, Matles" },
    { label: "Decisão-chave", value: "Reruptura × complicações de ferida/nervo" },
    { label: "Reabilitação", value: "Funcional precoce, carga conforme tolera" },
    { label: "Retorno ao esporte", value: "~5–6 meses, guiado por critérios" },
  ],

  anatomy: {
    text:
      "O tríceps sural — gastrocnêmio (biarticular, duas cabeças) e sóleo (monoarticular) — converge no tendão calcâneo, o mais forte e espesso do corpo. As fibras giram cerca de 90° em direção à inserção, o que concentra estresse na porção distal.\n\nO tendão não tem bainha sinovial verdadeira; é envolvido pelo paratenon, principal fonte de vascularização. Existe uma zona hipovascular (watershed) de 2 a 6 cm acima da inserção — a região de menor aporte sanguíneo e o sítio habitual de ruptura.\n\nO tendão plantar delgado corre medialmente e pode ser confundido com fibras íntegras. A inserção se dá no terço médio-posterior da tuberosidade do calcâneo, com a bursa retrocalcânea à frente.",
    figureIds: ["achilles-anatomy"],
  },

  classification: [
    {
      id: "thompson",
      name: "Sinal de Thompson (Simmonds–Thompson)",
      basis: "Teste diagnóstico — compressão da panturrilha",
      note: "Com o paciente em decúbito ventral, apertar a panturrilha produz flexão plantar se o tendão está íntegro. Selecione para ver o teste.",
      types: [
        {
          code: "Negativo",
          label: "Tendão íntegro",
          description: "A compressão da panturrilha gera flexão plantar do pé — tendão contínuo.",
          figureId: "thompson-test",
          figureVariant: "intact",
        },
        {
          code: "Positivo",
          label: "Ruptura completa",
          description: "A compressão não gera flexão plantar — perda da continuidade do tendão.",
          figureId: "thompson-test",
          figureVariant: "ruptured",
        },
      ],
    },
    {
      id: "aposicao",
      name: "Aposição dinâmica dos cotos",
      basis: "Posição do tornozelo (auxilia a decisão op × não-op)",
      note: "À ultrassonografia dinâmica, boa aposição dos cotos em flexão plantar favorece o tratamento não-operatório.",
      types: [
        {
          code: "Neutro",
          label: "Gap em posição neutra",
          description: "Com o tornozelo neutro, os cotos permanecem afastados — gap residual.",
          figureId: "achilles-apposition",
          figureVariant: "gap",
        },
        {
          code: "Flexão plantar",
          label: "Cotos aproximam-se",
          description: "Em flexão plantar (equino), os cotos se aproximam — boa aposição.",
          figureId: "achilles-apposition",
          figureVariant: "apposed",
        },
      ],
    },
    {
      id: "kuwada",
      name: "Kuwada — extensão da lesão",
      basis: "Tamanho do gap / defeito tendíneo",
      types: [
        { code: "Tipo I", label: "Ruptura parcial", description: "Lesão parcial — geralmente conduta não-operatória." },
        { code: "Tipo II", label: "Completa, gap < 3 cm", description: "Ruptura completa com gap pequeno — reparo término-terminal." },
        { code: "Tipo III", label: "Gap 3–6 cm", description: "Defeito que pode exigir enxerto/alongamento (ex.: plastia em V-Y)." },
        { code: "Tipo IV", label: "Defeito > 6 cm", description: "Grande defeito — reconstrução com transferência tendínea (ex.: FHL)." },
      ],
    },
    {
      id: "cronicidade",
      name: "Aguda × crônica",
      basis: "Tempo desde a lesão",
      types: [
        { code: "Aguda", label: "< 4–6 semanas", description: "Cotos reaproximáveis; reparo término-terminal ou tratamento funcional." },
        { code: "Crônica", label: "> 4–6 semanas", description: "Retração dos cotos e defeito interposto por tecido cicatricial — frequentemente exige reconstrução." },
      ],
    },
  ],

  indications: {
    operative: [
      "Paciente jovem, atleta ou de alta demanda que prioriza minimizar o risco de reruptura",
      "Ruptura crônica ou negligenciada, com retração dos cotos",
      "Grande gap que não se aproxima em flexão plantar (má aposição dinâmica)",
      "Avulsão óssea da inserção no calcâneo",
      "Reruptura após tratamento não-operatório",
    ],
    nonOperative: [
      "Maioria dos pacientes com ruptura aguda típica e reabilitação funcional precoce disponível",
      "Boa aposição dos cotos em flexão plantar à ultrassonografia dinâmica",
      "Alto risco cirúrgico ou de ferida: diabetes, vasculopatia, tabagismo, pele/tecido de má qualidade",
      "Preferência do paciente por evitar risco cirúrgico após decisão compartilhada",
    ],
    decisionNotes:
      "As meta-análises mostram que a cirurgia reduz a reruptura em termos absolutos pequenos, mas aumenta as complicações de ferida/infecção e o risco de lesão do nervo sural. Quando ambos os grupos seguem reabilitação funcional precoce, a diferença de reruptura praticamente desaparece (Ochen 2019). O RCT do NEJM (Myhrvold 2022) não encontrou diferença de função entre não-operatório, reparo aberto e minimamente invasivo aos 12 meses, com reruptura maior no não-operatório (6,2% vs 0,6%). No tratamento não-operatório, a bota funcional com carga precoce equivale ao gesso (UKSTAR). A conduta é uma decisão compartilhada.",
  },

  approaches: [
    {
      id: "aberto-posteromedial",
      name: "Aberto posteromedial",
      indication: "Reparo término-terminal sob visão direta; rupturas com má aposição, crônicas ou reruptura.",
      interval: "Posteromedial",
      atRisk: ["N. sural", "Pele / ferida"],
      figureId: "approach-open-achilles",
    },
    {
      id: "percutaneo-mis",
      name: "Percutâneo / minimamente invasivo",
      indication: "Reduz a complicação de ferida em relação ao aberto; usa mini-incisão e jig de passagem de sutura.",
      interval: "Mini-incisão + guia percutâneo",
      atRisk: ["N. sural"],
      figureId: "approach-percutaneous",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Posicionamento",
      detail:
        "Decúbito ventral, ambos os pés para fora da mesa. A gravidade coloca o tornozelo em equino e permite comparar a tensão de repouso com o lado contralateral — a referência para tensionar o reparo.",
      figureId: "step-position",
      tips: [
        "Prepare ambas as pernas no campo para comparar o equino de repouso.",
        "Garrote na coxa é opcional; o campo costuma ser pouco sangrante.",
      ],
      pitfalls: ["Perder a referência contralateral leva a tensionar o reparo de forma incorreta."],
    },
    {
      n: 2,
      title: "Exposição",
      detail:
        "Incisão longitudinal posteromedial, junto à borda medial do tendão, para afastar o nervo sural (lateral). Abrir o paratenon preservando os retalhos e identificar os cotos, tipicamente com extremidades desfiadas em 'esfregão'.",
      figureId: "step-exposure",
      tips: [
        "Incisão medial ao tendão protege o nervo sural.",
        "Manuseio delicado da pele e do paratenon reduz a deiscência.",
      ],
      pitfalls: [
        "Incisão sobre a linha média ou lateral aproxima-se do sural.",
        "Desbridar em excesso os cotos aumenta o defeito.",
      ],
    },
    {
      n: 3,
      title: "Sutura core bloqueante",
      detail:
        "Passar uma sutura core resistente (nº 2) em cada coto — técnica bloqueante de Krackow (ou Bunnell/Kessler). Desbridamento mínimo das extremidades desfiadas antes de aproximar.",
      figureId: "step-core-suture",
      tips: ["Laços bloqueantes distribuem a carga e resistem ao arrancamento."],
      pitfalls: ["Fio fino ou poucos passos → falha na fase de carga."],
    },
    {
      n: 4,
      title: "Tensão e nó",
      detail:
        "Aproximar os cotos e dar o nó com o tornozelo no mesmo equino de repouso do lado contralateral. Reforçar com sutura epitendínea circunferencial, que aumenta a resistência e regulariza o reparo.",
      figureId: "step-tension-repair",
      tips: [
        "Iguale o equino ao contralateral — não deixe o reparo frouxo.",
        "A sutura epitendínea acrescenta resistência significativa.",
      ],
      pitfalls: ["Reparo frouxo → alongamento do tendão e perda de força de flexão plantar."],
    },
    {
      n: 5,
      title: "Alternativa minimamente invasiva",
      detail:
        "Como alternativa ao aberto, o reparo percutâneo/minimamente invasivo usa uma mini-incisão sobre o gap e um guia (jig) para passar a sutura por via percutânea. Reduz a complicação de ferida, mas coloca o nervo sural em risco.",
      figureId: "step-mis-repair",
      figureVariant: "mis",
      tips: ["Menor taxa de problemas de ferida que o aberto."],
      pitfalls: ["O nervo sural é a principal estrutura em risco (até ~5% no MIS)."],
    },
    {
      n: 6,
      title: "Fechamento e órtese funcional",
      detail:
        "Fechar o paratenon e a pele com cuidado. Colocar bota funcional (walker) com calços de calcanhar em leve equino e iniciar o protocolo de reabilitação funcional, com carga precoce conforme tolerância.",
      figureId: "step-functional-brace",
      tips: ["Bota funcional com calços permite carga precoce e protege o reparo."],
      pitfalls: ["Dorsiflexão precoce excessiva estressa o reparo."],
    },
  ],

  postop: {
    immobilization:
      "Bota funcional (walker) com calços de calcanhar em leve equino, progredindo gradualmente ao neutro. Evitar imobilização rígida prolongada.",
    weightBearing:
      "Carga conforme tolerância precoce dentro da bota — a reabilitação funcional acelerada melhora a função sem aumentar a reruptura na fixação/aposição adequadas.",
    rehab: [
      { window: "0–2 sem", weightBearing: "Carga protegida na bota (equino)", focus: "Proteção da ferida; equino ~20–30°; mobilização suave conforme o protocolo." },
      { window: "2–6 sem", weightBearing: "Carga progressiva; reduzir calços", focus: "ADM ativa até o neutro; não ultrapassar a dorsiflexão neutra; retirar calços gradualmente." },
      { window: "6–12 sem", weightBearing: "Desmame da bota", focus: "Fortalecimento progressivo, propriocepção e normalização da marcha." },
      { window: "> 12 sem", weightBearing: "Retorno gradual ao impacto", focus: "Força concêntrica e excêntrica; retorno ao esporte guiado por testes funcionais." },
    ],
    followup:
      "Avaliar força de flexão plantar, altura do salto/elevação unipodal e simetria com o lado contralateral. O retorno ao esporte é guiado por critérios funcionais, geralmente em torno de 5–6 meses ou mais.",
  },

  complications: [
    { name: "Reruptura", detail: "Maior no tratamento não-operatório; costuma ocorrer no início da fase de carga.", prevention: "Progressão gradual da dorsiflexão e proteção da tensão do reparo." },
    { name: "Infecção / deiscência de ferida", detail: "Complicação mais temida do reparo aberto.", prevention: "Técnica delicada; preferir MIS ou não-operatório em pele/tecido de risco (tabagista, diabético)." },
    { name: "Lesão do nervo sural", detail: "Parestesia/dor lateral; mais comum no reparo percutâneo/MIS.", prevention: "Incisão medial no aberto; cuidado com a passagem do jig no MIS." },
    { name: "Alongamento do tendão / perda de força", detail: "Reparo frouxo ou dorsiflexão precoce excessiva reduzem a força de flexão plantar.", prevention: "Tensionar em equino igual ao contralateral; respeitar a progressão da ADM." },
    { name: "Tromboembolismo venoso (TVP/TEP)", detail: "Risco associado à imobilização do membro inferior.", prevention: "Tromboprofilaxia conforme estratificação de risco." },
    { name: "Aderências e rigidez", detail: "Perda de dorsiflexão e desconforto.", prevention: "Mobilização precoce dentro do protocolo funcional." },
    { name: "Proeminência / sensibilidade da cicatriz", detail: "Nódulo do reparo ou hipersensibilidade sobre a cicatriz.", prevention: "Manuseio cuidadoso dos tecidos e do paratenon." },
  ],

  evidence: [
    {
      id: "willits-2010",
      claim:
        "RCT multicêntrico com reabilitação funcional acelerada: reruptura semelhante entre operados (2/72) e não-operados (3/72), sem diferença de força ou função, com mais complicações de partes moles no grupo cirúrgico.",
      takeaway: "A reabilitação funcional acelerada tornou o tratamento não-operatório uma opção segura.",
      level: "I",
      studyType: "RCT multicêntrico (JBJS)",
      era: "classico",
      citation: {
        authors: "Willits K, Amendola A, Bryant D, et al.",
        title:
          "Operative versus nonoperative treatment of acute Achilles tendon ruptures: a multicenter randomized trial using accelerated functional rehabilitation",
        journal: "J Bone Joint Surg Am",
        year: 2010,
        pmid: "21037028",
        doi: "10.2106/JBJS.I.01401",
        url: "https://doi.org/10.2106/JBJS.I.01401",
      },
    },
    {
      id: "myhrvold-2022",
      claim:
        "RCT com 554 pacientes: sem diferença de função (ATRS) aos 12 meses entre não-operatório, reparo aberto e minimamente invasivo; reruptura maior no não-operatório (6,2% vs 0,6%) e lesão nervosa maior no MIS (5,2%).",
      takeaway: "A cirurgia não supera o tratamento não-operatório em função — troca reruptura por risco de ferida/nervo.",
      level: "I",
      studyType: "RCT multicêntrico (NEJM)",
      era: "atual",
      citation: {
        authors: "Myhrvold SB, Brouwer EF, Andresen TKM, et al.",
        title: "Nonoperative or Surgical Treatment of Acute Achilles' Tendon Rupture",
        journal: "N Engl J Med",
        year: 2022,
        pmid: "35417636",
        doi: "10.1056/NEJMoa2108447",
        url: "https://doi.org/10.1056/NEJMoa2108447",
      },
    },
    {
      id: "ochen-2019",
      claim:
        "Revisão sistemática e meta-análise: a cirurgia reduz a reruptura (2,3% vs 3,9%) mas aumenta as complicações (infecção); com reabilitação funcional precoce, a diferença de reruptura desaparece (RR 0,60, não significativa).",
      takeaway: "A vantagem cirúrgica na reruptura some quando ambos usam reabilitação funcional; decida em conjunto.",
      level: "I",
      studyType: "Revisão sistemática e meta-análise (BMJ)",
      era: "atual",
      citation: {
        authors: "Ochen Y, Beks RB, van Heijl M, et al.",
        title:
          "Operative treatment versus nonoperative treatment of Achilles tendon ruptures: systematic review and meta-analysis",
        journal: "BMJ",
        year: 2019,
        pmid: "30617123",
        doi: "10.1136/bmj.k5120",
        url: "https://doi.org/10.1136/bmj.k5120",
      },
    },
    {
      id: "costa-2020",
      claim:
        "RCT (UKSTAR): no tratamento não-operatório, o gesso não foi superior à bota funcional (ATRS aos 9 meses), sem diferença de reruptura; a bota funcional com carga precoce é segura e custo-efetiva.",
      takeaway: "No não-operatório, bota funcional com carga precoce equivale ao gesso — e é preferível.",
      level: "I",
      studyType: "RCT multicêntrico (Lancet)",
      era: "atual",
      citation: {
        authors: "Costa ML, Achten J, Marian IR, et al.",
        title:
          "Plaster cast versus functional brace for non-surgical treatment of Achilles tendon rupture (UKSTAR): a multicentre randomised controlled trial and economic evaluation",
        journal: "Lancet",
        year: 2020,
        pmid: "32035553",
        doi: "10.1016/S0140-6736(19)32942-3",
        url: "https://doi.org/10.1016/S0140-6736(19)32942-3",
      },
    },
    {
      id: "bragg-2023",
      claim:
        "A neutralidade estatística dos RCTs que mostram reruptura equivalente é frágil: índice de fragilidade reverso mediano de 3, muitas vezes menor do que as perdas de seguimento dos estudos.",
      takeaway: "Interprete a 'equivalência' com cautela — poucos eventos mudariam o resultado.",
      level: "I",
      studyType: "Revisão sistemática — índice de fragilidade reverso (Am J Sports Med)",
      era: "atual",
      citation: {
        authors: "Bragg JT, Ruelos VCB, McIntyre JA, et al.",
        title:
          "Reverse Fragility Index Comparing Rates of Rerupture After Open Achilles Tendon Repair Versus Early Functional Rehabilitation: A Systematic Review of Randomized Controlled Trials",
        journal: "Am J Sports Med",
        year: 2023,
        pmid: "37306060",
        doi: "10.1177/03635465231178831",
        url: "https://doi.org/10.1177/03635465231178831",
      },
    },
  ],

  pearls: [
    "O diagnóstico é clínico: Thompson positivo, gap palpável e Matles têm alta acurácia — a imagem raramente muda a conduta.",
    "Trate cedo: após 4–6 semanas os cotos retraem e a reconstrução fica mais difícil.",
    "Avalie a aposição em flexão plantar (USG dinâmico) — boa aposição favorece o tratamento não-operatório.",
    "Tensione o reparo igualando o equino de repouso do lado contralateral.",
    "Reabilitação funcional precoce (carga + ADM) melhora o resultado e reduz a diferença entre operar e não operar.",
    "No aberto, incisão medial protege o nervo sural; no MIS, o sural é a principal estrutura em risco.",
    "Conduza como decisão compartilhada: demanda/idade contra risco de ferida e de reruptura.",
  ],

  pitfalls: [
    "Pedir imagem e atrasar o diagnóstico, que é clínico.",
    "Reparar frouxo (sem equino) → alongamento e perda de força de flexão plantar.",
    "Operar pele/tecido de risco (tabagista, diabético) → infecção e deiscência.",
    "Permitir dorsiflexão precoce excessiva na reabilitação → reruptura ou alongamento.",
    "Ignorar o nervo sural no acesso percutâneo/minimamente invasivo.",
    "Imobilização rígida prolongada em vez de reabilitação funcional → rigidez e pior função.",
    "Subestimar o risco de reruptura no início da fase de carga (não-operatório).",
  ],

  figures: [
    { id: "achilles-anatomy", caption: "Complexo gastrocnêmio-sóleo, tendão calcâneo e zona hipovascular (2–6 cm).", alt: "Vista sagital do tendão de Aquiles com watershed." },
    { id: "thompson-test", variant: "intact", caption: "Teste de Thompson negativo — flexão plantar preservada.", alt: "Compressão da panturrilha com flexão plantar." },
    { id: "thompson-test", variant: "ruptured", caption: "Teste de Thompson positivo — ausência de flexão plantar.", alt: "Compressão da panturrilha sem movimento do pé." },
    { id: "achilles-gap", caption: "Gap palpável e teste de Matles (ângulo de repouso).", alt: "Comparação do ângulo de repouso entre lado normal e afetado." },
    { id: "achilles-apposition", variant: "gap", caption: "Tornozelo neutro — cotos afastados.", alt: "Cotos do tendão afastados em posição neutra." },
    { id: "achilles-apposition", variant: "apposed", caption: "Flexão plantar — cotos aproximados.", alt: "Cotos do tendão aproximados em flexão plantar." },
    { id: "approach-open-achilles", caption: "Acesso aberto posteromedial (poupa o nervo sural).", alt: "Incisão posteromedial na vista posterior." },
    { id: "approach-percutaneous", caption: "Reparo minimamente invasivo com mini-incisão e passagens percutâneas.", alt: "Portais percutâneos com nervo sural em risco." },
    { id: "step-position", caption: "Passo 1 — decúbito ventral, pés para fora da mesa.", alt: "Posicionamento em pronação." },
    { id: "step-exposure", caption: "Passo 2 — incisão posteromedial e cotos desfiados.", alt: "Exposição do tendão e paratenon." },
    { id: "step-core-suture", caption: "Passo 3 — sutura core bloqueante (Krackow) nos cotos.", alt: "Suturas bloqueantes nos cotos do tendão." },
    { id: "step-tension-repair", caption: "Passo 4 — nó com a tensão de repouso restaurada.", alt: "Reparo tensionado em equino com sutura epitendínea." },
    { id: "step-mis-repair", variant: "mis", caption: "Passo 5 — reparo percutâneo com jig.", alt: "Reparo minimamente invasivo com guia." },
    { id: "step-functional-brace", caption: "Passo 6 — bota funcional com calços e carga precoce.", alt: "Órtese funcional com calços de calcanhar." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Willits et al., JBJS 2010",
      "Myhrvold et al., NEJM 2022",
      "Ochen et al., BMJ 2019",
      "Costa et al. (UKSTAR), Lancet 2020",
      "Bragg et al., Am J Sports Med 2023",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados nesta seção.",
  },
});
