import { defineTopic } from "../../types/topic";

/* Fratura transtrocantérica (intertrocantérica) do fêmur — membro inferior.
   Foco: AO/OTA 31A, estabilidade, integridade da parede lateral, e a escolha
   entre parafuso deslizante do quadril (DHS) e haste cefalomedular.
   Evidência verificada no PubMed (DOIs reais citados na seção Evidência). */
export const topic = defineTopic({
  id: "mi-femur-transtrocanteriana",
  slug: "fratura-transtrocanteriana",
  regionId: "membro-inferior",
  bone: "Quadril",
  injury: "Fratura intertrocantérica",
  title: "Fratura transtrocantérica",
  subtitle:
    "Fratura extracapsular do fêmur proximal entre os trocânteres — estabilidade, parede lateral e a escolha entre DHS e haste cefalomedular.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura transtrocantérica (intertrocantérica) é uma fratura extracapsular do fêmur proximal, cujo traço principal cruza a região entre o trocânter maior e o menor. É uma fratura de fragilidade típica do idoso osteoporótico após queda da própria altura, com predomínio no sexo feminino — e uma das grandes causas de morbimortalidade geriátrica.\n\nPor ser extracapsular e ocorrer em osso metafisário bem vascularizado, a consolidação é a regra e a osteonecrose é rara — ao contrário da fratura do colo femoral. O objetivo do tratamento é a fixação estável que permita carga e mobilização precoces; a artroplastia tem papel muito restrito.\n\nA decisão técnica central gira em torno de dois eixos: a estabilidade do padrão (integridade do arco póstero-medial/calcar) e, sobretudo, a integridade da parede lateral. Padrões estáveis com parede lateral íntegra são bem tratados com o parafuso deslizante do quadril (DHS); padrões instáveis, obliquidade reversa e parede lateral comprometida exigem haste cefalomedular. O tratamento é cirúrgico e idealmente precoce (< 24–48 h), dentro de um cuidado ortogeriátrico coordenado.",

  keyFacts: [
    { label: "Natureza", value: "Fratura extracapsular de fragilidade do idoso" },
    { label: "Consolidação", value: "Regra — osteonecrose rara (extracapsular)" },
    { label: "Classificação", value: "AO/OTA 31A (A1 / A2 / A3)" },
    { label: "Fator-chave", value: "Integridade da parede lateral" },
    { label: "Implantes", value: "DHS (extramedular) × haste cefalomedular (IM)" },
    { label: "Meta cirúrgica", value: "Fixação estável + carga precoce; cirurgia < 48 h" },
  ],

  anatomy: {
    text:
      "A região trocantérica é metafisária, de osso esponjoso ricamente vascularizado — o que explica a consolidação previsível e a raridade de osteonecrose. Quatro elementos determinam a mecânica da fratura:\n\n• Calcar femoral (arco/esporão póstero-medial): pilar de transmissão de carga do colo à cortical medial. Sua cominuição define a instabilidade clássica (perda do suporte medial → colapso em varo).\n\n• Parede lateral (cortical lateral abaixo da crista intertrocantérica): contraforte que resiste ao deslizamento do parafuso cefálico. Sua fratura — pré ou intraoperatória — converte um DHS em construção instável, com medialização da diáfise e falha.\n\n• Trocânter maior: inserção dos abdutores (glúteos médio e mínimo); o ápice do trocânter é o ponto de entrada da haste cefalomedular.\n\n• Trocânter menor: inserção do iliopsoas; seu destacamento sinaliza cominuição póstero-medial e perda de suporte.\n\nO fêmur proximal é submetido a forças de flexão e ao braço de alavanca do colo; por isso a posição do implante (parafuso central, TAD baixa) e a restauração do suporte medial/lateral governam a estabilidade da montagem.",
    figureIds: [
      "fratura-transtrocanteriana:anatomia",
      "fratura-transtrocanteriana:parede-lateral",
    ],
  },

  classification: [
    {
      id: "ao-ota-31a",
      name: "AO/OTA 31A",
      basis: "Localização do traço e cominuição (base de estabilidade)",
      note: "Selecione A1, A2 ou A3 para ver o padrão. A distinção guia o implante: A1 e a maioria dos A2 com parede lateral íntegra → DHS; A2 com parede lateral fina/rompida e todos os A3 → haste cefalomedular.",
      types: [
        {
          code: "31-A1",
          label: "Simples (2 fragmentos) — estável",
          description:
            "Traço trocantérico simples, com arco póstero-medial e parede lateral íntegros. Padrão estável — boa indicação de DHS.",
          figureId: "fratura-transtrocanteriana:ao-ota",
          figureVariant: "A1",
        },
        {
          code: "31-A2",
          label: "Cominutiva (multifragmentar) — instável",
          description:
            "Traço trans-trocantérico com fragmento do trocânter menor e cominuição póstero-medial. A estabilidade depende da parede lateral: se fina (< 20,5 mm) ou rompida, prefira haste.",
          figureId: "fratura-transtrocanteriana:ao-ota",
          figureVariant: "A2",
        },
        {
          code: "31-A3",
          label: "Obliquidade reversa / transversa — instável",
          description:
            "Traço de obliquidade reversa (distal-medial a proximal-lateral) ou transverso, envolvendo a parede lateral. Biomecanicamente desfavorável ao DHS — indicação de haste cefalomedular.",
          figureId: "fratura-transtrocanteriana:ao-ota",
          figureVariant: "A3",
        },
      ],
    },
    {
      id: "parede-lateral",
      name: "Integridade da parede lateral",
      basis: "Contraforte lateral (preditor de reoperação; limiar ~20,5 mm)",
      note: "A parede lateral tornou-se o fator determinante da escolha do implante. Palm et al. mostraram que sua fratura é o principal preditor de reoperação; Hsu et al. definiram o limiar de espessura de 20,5 mm abaixo do qual não se deve usar DHS isolado.",
      types: [
        {
          code: "Íntegra",
          label: "Parede lateral espessa (≥ 20,5 mm)",
          description:
            "Contraforte lateral preservado resiste ao deslizamento do parafuso — o DHS é adequado e permite compressão dinâmica controlada.",
          figureId: "fratura-transtrocanteriana:parede-lateral",
          figureVariant: "intact",
        },
        {
          code: "Comprometida",
          label: "Parede lateral fina ou fraturada",
          description:
            "Parede fina (< 20,5 mm) ou rompida (pré/intraoperatória) → medialização da diáfise, colapso e falha do DHS. Indica haste cefalomedular, que ferula a parede lateral.",
          figureId: "fratura-transtrocanteriana:parede-lateral",
          figureVariant: "fractured",
        },
      ],
    },
    {
      id: "estabilidade",
      name: "Estável × instável",
      basis: "Suporte póstero-medial (calcar) e parede lateral",
      types: [
        {
          code: "Estável",
          label: "Arco medial e parede lateral íntegros",
          description:
            "Após a redução, as corticais medial e lateral se apoiam e resistem à carga. Tipicamente 31-A1 e A2.1 — colapso controlado sobre o parafuso deslizante.",
        },
        {
          code: "Instável",
          label: "Cominuição póstero-medial / parede lateral rota / obliquidade reversa",
          description:
            "Perda do suporte medial (destacamento do trocânter menor, cominuição) e/ou da parede lateral. Padrões A2.2–A2.3 e A3 — risco de colapso em varo; favorece fixação intramedular.",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Praticamente todas as fraturas transtrocantéricas — a fixação estável precoce reduz dor, complicações do decúbito e mortalidade",
      "Padrão estável com parede lateral íntegra (31-A1, A2.1): parafuso deslizante do quadril (DHS)",
      "Padrão instável, cominuição póstero-medial, parede lateral fina (< 20,5 mm) ou fraturada: haste cefalomedular",
      "Obliquidade reversa / traço transverso (31-A3): haste cefalomedular (DHS contraindicado)",
      "Extensão subtrocantérica: haste cefalomedular longa",
    ],
    nonOperative: [
      "Paciente não deambulador prévio, com dor mínima e risco cirúrgico proibitivo, em cuidado paliativo",
      "Instabilidade clínica extrema que contraindique qualquer anestesia (decisão compartilhada, com controle de dor)",
      "Recusa informada do paciente/família após esclarecimento dos riscos do tratamento conservador (úlceras, TVP, descondicionamento)",
    ],
    decisionNotes:
      "A decisão gira em torno de estabilidade e, sobretudo, da parede lateral. Palm et al. (JBJS 2007) mostraram que a fratura da parede lateral é o principal preditor de reoperação após DHS, ocorrendo em 31% dos A2.2/A2.3; Hsu et al. (BJJ 2013) estabeleceram o limiar de 20,5 mm de espessura da parede — abaixo dele, não usar DHS isolado. Para padrões instáveis (A2 com parede comprometida e todos os A3), a haste cefalomedular ferula a parede lateral e sustenta a coluna medial com braço de alavanca curto. Em padrões estáveis (A1), a revisão Cochrane (Lewis/Parker 2022) mostra resultados funcionais equivalentes entre DHS e haste, com menos infecção e pseudartrose com a haste, porém mais fraturas peri-implante — de modo que o DHS, mais barato, permanece adequado. O RCT de 1000 pacientes (Parker 2017) não encontrou diferença relevante entre os dois métodos, exceto discreto ganho de mobilidade com a haste. A cirurgia deve ser precoce (< 48 h) em contexto ortogeriátrico.",
  },

  approaches: [
    {
      id: "via-lateral",
      name: "Via lateral do fêmur proximal (DHS)",
      indication:
        "Exposição da cortical lateral para colocação do parafuso deslizante e da placa — padrões estáveis com parede lateral íntegra.",
      interval: "Divisão / elevação do vasto lateral a partir do septo intermuscular",
      atRisk: ["Ramos perfurantes da a. femoral profunda", "Malredução em varo"],
      figureId: "fratura-transtrocanteriana:via-lateral",
    },
    {
      id: "via-cefalomedular",
      name: "Acesso percutâneo cefalomedular (haste)",
      indication:
        "Introdução da haste pelo ápice do trocânter maior sob fluoroscopia — padrões instáveis, obliquidade reversa e extensão subtrocantérica.",
      interval: "Percutâneo, pelo ápice do trocânter maior (fenda dos abdutores)",
      atRisk: ["Abdutores / n. glúteo superior", "Ponto de entrada incorreto → varo/malredução"],
      figureId: "fratura-transtrocanteriana:via-cefalomedular",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Redução fechada em mesa de tração",
      detail:
        "Posicionar em mesa ortopédica; reduzir por tração longitudinal e rotação interna, conferindo alinhamento em duas incidências (AP e perfil). A redução anatômica (ou levemente em valgo) precede qualquer fixação — nunca compense má redução com o implante.",
      figureId: "fratura-transtrocanteriana:step-reducao",
      tips: [
        "Rotação interna corrige a tendência à rotação externa do fragmento distal.",
        "Confirme a redução em perfil — o desvio sagital é facilmente subestimado no AP.",
      ],
      pitfalls: [
        "Aceitar redução em varo ou com translação póstero-medial → colapso e falha.",
        "Tração excessiva pode distrair o foco e dificultar a compressão.",
      ],
    },
    {
      n: 2,
      title: "Fio-guia central e distância ápice-ponta (TAD)",
      detail:
        "Passar o fio-guia do parafuso cefálico centralizado no colo e na cabeça (central-central ou central-inferior), mirando o ápice. Confirmar a distância ápice-ponta (TAD) somando as medidas em AP e perfil, com alvo < 25 mm — o preditor mais forte de cut-out.",
      figureId: "fratura-transtrocanteriana:step-tad",
      tips: [
        "TAD < 25 mm reduz drasticamente o risco de cut-out.",
        "Posição central-inferior no colo tolera melhor pequenos erros.",
      ],
      pitfalls: [
        "Parafuso alto/posterior aumenta o TAD e o risco de cut-out.",
        "Medir a TAD sem calibrar a magnificação leva a estimativa falsamente segura.",
      ],
    },
    {
      n: 3,
      title: "Opção A — parafuso deslizante do quadril (DHS)",
      detail:
        "Para padrões estáveis com parede lateral íntegra: fresar e inserir o parafuso deslizante no colo/cabeça, acoplar o barril e fixar a placa lateral à diáfise. O parafuso desliza no barril, permitindo compressão dinâmica controlada com apoio das corticais medial e lateral.",
      figureId: "fratura-transtrocanteriana:step-dhs",
      figureVariant: "dhs",
      tips: [
        "Preserve a parede lateral ao fresar — a fratura iatrogênica converte a montagem em instável.",
        "Placa de 2–4 furos costuma bastar; comprimento não melhora estabilidade rotacional.",
      ],
      pitfalls: [
        "Usar DHS em obliquidade reversa (A3) ou parede lateral fina → medialização e falha.",
        "Barril curto limita o deslizamento e pode levar à distração do foco.",
      ],
    },
    {
      n: 4,
      title: "Opção B — haste cefalomedular",
      detail:
        "Para padrões instáveis, obliquidade reversa e extensão subtrocantérica: ponto de entrada no ápice do trocânter maior, introdução da haste no canal, parafuso/lâmina cefálico até a cabeça (TAD < 25 mm) e bloqueio distal. O implante intramedular tem braço de alavanca curto e ferula a parede lateral, resistindo ao colapso em varo.",
      figureId: "fratura-transtrocanteriana:step-haste",
      figureVariant: "nail",
      tips: [
        "Ponto de entrada no ápice do trocânter evita varo (entrada lateral) e fratura medial (entrada muito medial).",
        "Não force a haste sobre redução imperfeita — reduza primeiro.",
      ],
      pitfalls: [
        "Entrada lateral ao ápice → redução em varo.",
        "Fresagem distal agressiva / haste subdimensionada → fratura peri-implante da diáfise.",
      ],
    },
    {
      n: 5,
      title: "Conferência fluoroscópica e fechamento",
      detail:
        "Checar em AP e perfil: redução mantida, TAD < 25 mm, comprimento do parafuso, integridade da parede lateral e ausência de penetração articular (rodar o quadril sob fluoroscopia). Lavar, fechar por planos e liberar carga conforme a estabilidade da montagem.",
      figureId: "fratura-transtrocanteriana:step-tad",
      tips: [
        "Gire o membro sob fluoroscopia para excluir penetração intra-articular do parafuso.",
        "Documente a TAD final e a posição central do parafuso.",
      ],
      pitfalls: [
        "Não reconhecer penetração articular oculta em incidência única.",
        "Deixar de checar a parede lateral após a fresagem/inserção.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Sem imobilização externa. A montagem estável (DHS em padrão estável, ou haste em padrão instável) é projetada para permitir mobilização imediata. Tromboprofilaxia e cuidado ortogeriátrico desde o pós-operatório imediato.",
    weightBearing:
      "Carga conforme tolerância precoce é a regra, tanto para DHS quanto para haste — a carga total precoce não aumenta a falha e melhora a recuperação funcional e a sobrevida no idoso.",
    rehab: [
      { window: "0–2 sem", weightBearing: "Carga conforme tolera (auxílio de marcha)", focus: "Sentar/ficar de pé precoce, prevenção de úlceras/TVP, controle da dor, ativação dos abdutores." },
      { window: "2–6 sem", weightBearing: "Progressão para carga total", focus: "Treino de marcha, fortalecimento de quadríceps e glúteos, transferências independentes." },
      { window: "6–12 sem", weightBearing: "Carga total sem auxílio conforme força", focus: "Marcha independente, equilíbrio e retorno às AVDs; controle radiográfico da consolidação." },
      { window: "> 12 sem", weightBearing: "Livre conforme consolidação", focus: "Reabilitação da força e da mobilidade; prevenção secundária de quedas e osteoporose." },
    ],
    followup:
      "Seguimento clínico-radiográfico (6, 12 semanas e conforme necessário) para consolidação, deslizamento do parafuso/colapso, cut-out e posição do implante. Iniciar/otimizar tratamento da osteoporose e programa de prevenção de quedas — a fratura de fragilidade é sinal de alto risco de nova fratura.",
  },

  complications: [
    { name: "Cut-out do parafuso cefálico", detail: "Migração/perfuração do parafuso pela cabeça femoral — falha mecânica mais comum; associada a TAD alto e posição não-central.", prevention: "TAD < 25 mm e posição central-inferior do parafuso; redução adequada." },
    { name: "Fratura da parede lateral", detail: "Falha do contraforte lateral (pré ou intraoperatória) com medialização da diáfise; principal preditor de reoperação após DHS.", prevention: "Reconhecer parede fina (< 20,5 mm); preferir haste; fresagem cuidadosa." },
    { name: "Colapso em varo / perda de redução", detail: "Perda do suporte medial em padrões instáveis tratados com implante inadequado.", prevention: "Escolher haste em padrões instáveis; restaurar o suporte medial e a redução." },
    { name: "Fratura peri-implante / femoral", detail: "Fratura na ponta da haste ou peri-placa; risco intra e pós-operatório maior com hastes.", prevention: "Técnica de fresagem/inserção cuidadosa; haste de comprimento adequado; evitar entrada excêntrica." },
    { name: "Pseudartrose / retardo de consolidação", detail: "Incomum na região metafisária; associada a instabilidade, distração ou infecção.", prevention: "Fixação estável com contato ósseo; evitar distração do foco." },
    { name: "Infecção", detail: "Superficial ou profunda; menos frequente com implantes intramedulares.", prevention: "Antibioticoprofilaxia, técnica asséptica, cirurgia eficiente." },
    { name: "Tromboembolismo venoso (TVP/TEP)", detail: "Risco elevado na fratura de quadril do idoso.", prevention: "Tromboprofilaxia farmacológica/mecânica e mobilização precoce." },
    { name: "Mortalidade e desfechos geriátricos", detail: "Mortalidade em 1 ano elevada; delirium, perda funcional e institucionalização.", prevention: "Cuidado ortogeriátrico coordenado e cirurgia precoce (< 48 h)." },
  ],

  evidence: [
    {
      id: "palm-2007",
      claim:
        "Coorte consecutiva de 214 fraturas intertrocantéricas tratadas com parafuso deslizante: reoperação em 3% com parede lateral íntegra vs 22% com parede fraturada; a fratura da parede lateral foi o principal preditor independente de reoperação (p = 0,010), ocorrendo em 31% dos A2.2/A2.3.",
      takeaway: "A integridade da parede lateral é o fator decisivo — parede rota contraindica o DHS isolado.",
      level: "III",
      studyType: "Coorte prospectiva consecutiva (JBJS Am)",
      era: "classico",
      citation: {
        authors: "Palm H, Jacobsen S, Sonne-Holm S, Gebuhr P.",
        title:
          "Integrity of the lateral femoral wall in intertrochanteric hip fractures: an important predictor of a reoperation",
        journal: "J Bone Joint Surg Am",
        year: 2007,
        pmid: "17332094",
        doi: "10.2106/JBJS.F.00679",
        url: "https://doi.org/10.2106/JBJS.F.00679",
      },
    },
    {
      id: "hsu-2013",
      claim:
        "Estudo de 208 fraturas A1/A2 fixadas com DHS: a espessura da parede lateral foi preditor confiável de fratura pós-operatória da parede; o limiar de risco foi 20,5 mm — abaixo dele, o DHS isolado não deve ser usado.",
      takeaway: "Meça a parede lateral: < 20,5 mm → não use DHS isolado, prefira haste.",
      level: "III",
      studyType: "Coorte retrospectiva (Bone Joint J)",
      era: "atual",
      citation: {
        authors: "Hsu CE, Shih CM, Wang CC, Huang KC.",
        title:
          "Lateral femoral wall thickness. A reliable predictor of post-operative lateral wall fracture in intertrochanteric fractures",
        journal: "Bone Joint J",
        year: 2013,
        pmid: "23908432",
        doi: "10.1302/0301-620X.95B8.31495",
        url: "https://doi.org/10.1302/0301-620X.95B8.31495",
      },
    },
    {
      id: "parker-2017",
      claim:
        "RCT com 1000 pacientes comparando parafuso deslizante e haste intramedular em fraturas trocantéricas: sem diferença significativa em mortalidade, complicações de consolidação, reoperações, dor ou independência; discreta melhora do ganho de mobilidade com a haste, válida para todos os tipos de fratura.",
      takeaway: "Nos padrões testados, os dois implantes se equivalem — a haste dá leve vantagem de mobilidade.",
      level: "I",
      studyType: "Ensaio clínico randomizado (Injury)",
      era: "atual",
      citation: {
        authors: "Parker MJ.",
        title:
          "Sliding hip screw versus intramedullary nail for trochanteric hip fractures; a randomised trial of 1000 patients with presentation of results related to fracture stability",
        journal: "Injury",
        year: 2017,
        pmid: "29102044",
        doi: "10.1016/j.injury.2017.10.029",
        url: "https://doi.org/10.1016/j.injury.2017.10.029",
      },
    },
    {
      id: "zhu-2017",
      claim:
        "Meta-análise de 6 RCTs (909 pacientes) restrita a fraturas AO/OTA 31-A2: a haste intramedular associou-se a menor perda sanguínea, menor encurtamento, menos infecção de ferida, menor internação e melhor escore de Parker; sem diferença em complicações de fixação e mortalidade em 1 ano.",
      takeaway: "No subgrupo instável A2, a haste tende a ser preferível ao DHS.",
      level: "I",
      studyType: "Meta-análise de RCTs (Int J Surg)",
      era: "atual",
      citation: {
        authors: "Zhu Q, Xu X, Yang X, Chen X, Wang L, Liu C, Lin P.",
        title:
          "Intramedullary nails versus sliding hip screws for AO/OTA 31-A2 trochanteric fractures in adults: A meta-analysis",
        journal: "Int J Surg",
        year: 2017,
        pmid: "28549994",
        doi: "10.1016/j.ijsu.2017.05.042",
        url: "https://doi.org/10.1016/j.ijsu.2017.05.042",
      },
    },
    {
      id: "lewis-cochrane-2022",
      claim:
        "Revisão Cochrane de 76 estudos (10.979 pacientes): dispositivos extramedulares (sobretudo o parafuso deslizante) produzem resultados funcionais muito semelhantes aos das hastes cefalomedulares; a haste reduz infecção superficial e pseudartrose, mas aumenta o risco de fratura peri-implante — não atenuado por desenhos mais novos.",
      takeaway: "Em fraturas extracapsulares no geral, função equivalente; a escolha pondera pseudartrose/infecção × fratura peri-implante e custo.",
      level: "I",
      studyType: "Revisão sistemática Cochrane (RCTs)",
      era: "atual",
      citation: {
        authors: "Lewis SR, Macey R, Gill JR, Parker MJ, Griffin XL.",
        title:
          "Cephalomedullary nails versus extramedullary implants for extracapsular hip fractures in older adults",
        journal: "Cochrane Database Syst Rev",
        year: 2022,
        pmid: "35080771",
        doi: "10.1002/14651858.CD000093.pub6",
        url: "https://doi.org/10.1002/14651858.CD000093.pub6",
      },
    },
  ],

  pearls: [
    "Fratura extracapsular → consolida quase sempre e a osteonecrose é rara; o objetivo é fixação estável com carga precoce.",
    "A integridade da parede lateral é o fator decisivo do implante: íntegra → DHS; fina (< 20,5 mm) ou rota → haste.",
    "Todo padrão instável (A2 com parede comprometida) e toda obliquidade reversa (A3) → haste cefalomedular.",
    "TAD < 25 mm e parafuso central-inferior minimizam o cut-out — o modo de falha mais comum.",
    "Reduza antes de fixar: nunca use o implante para compensar uma redução em varo.",
    "Carga total precoce é segura e melhora desfechos no idoso, para DHS e para haste.",
    "Trate como fratura de fragilidade: cuidado ortogeriátrico, cirurgia < 48 h, osteoporose e prevenção de quedas.",
  ],

  pitfalls: [
    "Usar DHS em obliquidade reversa (A3) ou com parede lateral fina/rota → medialização e falha.",
    "Fresar/inserir de forma agressiva e fraturar a parede lateral no intraoperatório.",
    "Parafuso alto/posterior com TAD elevado → cut-out.",
    "Aceitar redução em varo ou com translação póstero-medial.",
    "Ponto de entrada da haste lateral ao ápice do trocânter → redução em varo.",
    "Ignorar penetração articular do parafuso por conferir apenas uma incidência.",
    "Deixar de iniciar tratamento da osteoporose e prevenção secundária de quedas.",
  ],

  figures: [
    { id: "fratura-transtrocanteriana:anatomia", caption: "Fêmur proximal: calcar femoral, parede lateral, trocânteres e inserções.", alt: "Vista AP do fêmur proximal com landmarks anatômicos rotulados." },
    { id: "fratura-transtrocanteriana:ao-ota", variant: "A1", caption: "AO/OTA 31-A1 — traço simples, parede lateral íntegra (estável).", alt: "Fratura trocantérica simples de dois fragmentos." },
    { id: "fratura-transtrocanteriana:ao-ota", variant: "A2", caption: "AO/OTA 31-A2 — cominutiva, fragmento do trocânter menor (instável).", alt: "Fratura trocantérica cominutiva com fragmento póstero-medial." },
    { id: "fratura-transtrocanteriana:ao-ota", variant: "A3", caption: "AO/OTA 31-A3 — obliquidade reversa, parede lateral rompida (instável).", alt: "Fratura de obliquidade reversa com parede lateral rota." },
    { id: "fratura-transtrocanteriana:parede-lateral", variant: "intact", caption: "Parede lateral íntegra e espessa (≥ 20,5 mm) — favorece DHS.", alt: "Parede lateral preservada com medida de espessura." },
    { id: "fratura-transtrocanteriana:parede-lateral", variant: "fractured", caption: "Parede lateral fraturada — falha do DHS e risco de reoperação.", alt: "Parede lateral rompida indicando haste." },
    { id: "fratura-transtrocanteriana:via-lateral", caption: "Via lateral do fêmur proximal (acesso do DHS).", alt: "Incisão lateral e divisão do vasto lateral com ramos perfurantes em risco." },
    { id: "fratura-transtrocanteriana:via-cefalomedular", caption: "Acesso percutâneo pelo ápice do trocânter maior (haste).", alt: "Ponto de entrada da haste cefalomedular no ápice do trocânter." },
    { id: "fratura-transtrocanteriana:step-reducao", caption: "Passo 1 — redução fechada por tração e rotação interna.", alt: "Redução do foco em mesa de tração com setas de tração e rotação." },
    { id: "fratura-transtrocanteriana:step-tad", caption: "Passo 2 — fio-guia central e distância ápice-ponta (TAD < 25 mm).", alt: "Parafuso central no colo com medida da distância ápice-ponta." },
    { id: "fratura-transtrocanteriana:step-dhs", caption: "Passo 3 — montagem do DHS (parafuso deslizante, barril e placa).", alt: "Construção com parafuso deslizante e placa lateral." },
    { id: "fratura-transtrocanteriana:step-haste", caption: "Passo 4 — haste cefalomedular com parafuso cefálico e bloqueio distal.", alt: "Haste intramedular com parafuso cefálico na cabeça femoral." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Palm et al., JBJS Am 2007",
      "Hsu et al., Bone Joint J 2013",
      "Parker MJ, Injury 2017 (RCT 1000)",
      "Zhu et al., Int J Surg 2017 (meta-análise A2)",
      "Lewis/Parker et al., Cochrane Database Syst Rev 2022",
      "Gotfried Y, Clin Orthop Relat Res 2004 (conceito de parede lateral)",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados na seção Evidência.",
  },
});
