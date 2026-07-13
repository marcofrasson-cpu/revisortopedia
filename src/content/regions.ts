import type { RegionNode } from "../types/topic";

/* ============================================================================
   Framework de navegação — a ortopedia inteira em regiões → grupos → tópicos.
   Mostra a amplitude pretendida do app. Apenas "fratura-maleolar-tornozelo"
   está "complete"; os demais são "planned" (nomes reais, terminologia pt-BR).
   ========================================================================== */

export const regions: RegionNode[] = [
  {
    id: "membro-superior",
    title: "Membro superior",
    tag: "MS",
    blurb:
      "Do ombro à mão: cintura escapular, úmero, cotovelo, antebraço e punho — traumatologia e reconstrução.",
    groups: [
      {
        id: "ms-ombro-clavicula",
        title: "Ombro & clavícula",
        topics: [
          { slug: "fratura-clavicula", title: "Fratura da clavícula", status: "planned" },
          { slug: "luxacao-acromioclavicular", title: "Luxação acromioclavicular", status: "planned" },
          { slug: "luxacao-glenoumeral-anterior", title: "Luxação glenoumeral anterior", status: "planned" },
          { slug: "fratura-glenoide", title: "Fratura da glenoide", status: "planned" },
        ],
      },
      {
        id: "ms-umero",
        title: "Úmero",
        topics: [
          { slug: "fratura-umero-proximal", title: "Fratura do úmero proximal", status: "planned" },
          { slug: "fratura-diafise-umeral", title: "Fratura da diáfise umeral", status: "planned" },
          { slug: "fratura-umero-distal", title: "Fratura do úmero distal", status: "planned" },
        ],
      },
      {
        id: "ms-cotovelo",
        title: "Cotovelo",
        topics: [
          { slug: "fratura-cabeca-radial", title: "Fratura da cabeça do rádio", status: "planned" },
          { slug: "fratura-olecrano", title: "Fratura do olécrano", status: "planned" },
          { slug: "luxacao-cotovelo", title: "Luxação do cotovelo", status: "planned" },
          { slug: "triade-terrivel-cotovelo", title: "Tríade terrível do cotovelo", status: "planned" },
        ],
      },
      {
        id: "ms-antebraco",
        title: "Antebraço",
        topics: [
          { slug: "fratura-diafise-radio-ulna", title: "Fratura das diáfises do rádio e da ulna", status: "planned" },
          { slug: "fratura-galeazzi", title: "Fratura-luxação de Galeazzi", status: "planned" },
          { slug: "fratura-monteggia", title: "Fratura-luxação de Monteggia", status: "planned" },
        ],
      },
      {
        id: "ms-punho-radio-distal",
        title: "Punho & rádio distal",
        topics: [
          { slug: "fratura-radio-distal", title: "Fratura do rádio distal", status: "planned" },
          { slug: "fratura-escafoide", title: "Fratura do escafoide", status: "planned" },
          { slug: "instabilidade-carpo", title: "Instabilidade do carpo", status: "planned" },
        ],
      },
      {
        id: "ms-mao",
        title: "Mão",
        topics: [
          { slug: "fratura-metacarpo", title: "Fratura dos metacarpos", status: "planned" },
          { slug: "fratura-falanges", title: "Fratura das falanges", status: "planned" },
          { slug: "lesao-ligamento-colateral-ulnar-polegar", title: "Lesão do ligamento colateral ulnar do polegar", status: "planned" },
        ],
      },
    ],
  },
  {
    id: "membro-inferior",
    title: "Membro inferior",
    tag: "MI",
    blurb:
      "Da pelve ao pé: carga, alinhamento e a pinça do tornozelo. Região com o tópico-semente completo.",
    groups: [
      {
        id: "mi-pelve-acetabulo",
        title: "Pelve & acetábulo",
        topics: [
          { slug: "fratura-anel-pelvico", title: "Fratura do anel pélvico", status: "planned" },
          { slug: "fratura-acetabulo", title: "Fratura do acetábulo", status: "planned" },
        ],
      },
      {
        id: "mi-quadril-femur-proximal",
        title: "Quadril & fêmur proximal",
        topics: [
          { slug: "fratura-colo-femoral", title: "Fratura do colo femoral", status: "planned" },
          { slug: "fratura-transtrocanteriana", title: "Fratura transtrocantérica", status: "planned" },
          { slug: "fratura-subtrocanteriana", title: "Fratura subtrocantérica", status: "planned" },
        ],
      },
      {
        id: "mi-diafise-femoral",
        title: "Diáfise femoral",
        topics: [
          { slug: "fratura-diafise-femoral", title: "Fratura da diáfise femoral", status: "planned" },
          { slug: "fratura-femur-distal", title: "Fratura do fêmur distal", status: "planned" },
        ],
      },
      {
        id: "mi-joelho",
        title: "Joelho",
        topics: [
          { slug: "fratura-patela", title: "Fratura da patela", status: "planned" },
          { slug: "fratura-planalto-tibial", title: "Fratura do planalto tibial", status: "planned" },
          { slug: "luxacao-joelho", title: "Luxação do joelho", status: "planned" },
        ],
      },
      {
        id: "mi-tibia",
        title: "Tíbia",
        topics: [
          { slug: "fratura-diafise-tibial", title: "Fratura da diáfise tibial", status: "planned" },
          { slug: "fratura-pilao-tibial", title: "Fratura do pilão tibial", status: "planned" },
        ],
      },
      {
        id: "mi-tornozelo",
        title: "Tornozelo",
        topics: [
          { slug: "fratura-maleolar-tornozelo", title: "Fratura maleolar do tornozelo", status: "complete" },
          { slug: "lesao-sindesmose-isolada", title: "Lesão isolada da sindesmose", status: "planned" },
          { slug: "fratura-pilao", title: "Fratura do pilão", status: "planned" },
          { slug: "fratura-estresse-maleolo-medial", title: "Fratura por estresse do maléolo medial", status: "planned" },
        ],
      },
      {
        id: "mi-pe",
        title: "Pé",
        topics: [
          { slug: "fratura-calcaneo", title: "Fratura do calcâneo", status: "planned" },
          { slug: "fratura-talus", title: "Fratura do tálus", status: "planned" },
          { slug: "lesao-lisfranc", title: "Lesão de Lisfranc", status: "planned" },
          { slug: "fratura-quinto-metatarso", title: "Fratura do quinto metatarso", status: "planned" },
        ],
      },
      {
        id: "mi-tendoes-partes-moles",
        title: "Tendões & partes moles",
        topics: [
          { slug: "ruptura-tendao-aquiles", title: "Ruptura do tendão de Aquiles", status: "complete" },
          { slug: "tendinopatia-aquiles", title: "Tendinopatia do Aquiles", status: "planned" },
          { slug: "ruptura-tendao-tibial-posterior", title: "Disfunção do tendão tibial posterior", status: "planned" },
          { slug: "lesao-tendoes-fibulares", title: "Lesão dos tendões fibulares", status: "planned" },
        ],
      },
    ],
  },
  {
    id: "coluna",
    title: "Coluna",
    tag: "COL",
    blurb:
      "Estabilidade, alinhamento e proteção neural — do áxis ao sacro, do trauma à degeneração.",
    groups: [
      {
        id: "col-cervical",
        title: "Cervical",
        topics: [
          { slug: "fratura-axis-odontoide", title: "Fratura do áxis (processo odontoide)", status: "planned" },
          { slug: "fratura-atlas-jefferson", title: "Fratura do atlas (Jefferson)", status: "planned" },
          { slug: "trauma-cervical-subaxial", title: "Trauma cervical subaxial", status: "planned" },
        ],
      },
      {
        id: "col-toracolombar",
        title: "Toracolombar",
        topics: [
          { slug: "fratura-toracolombar-explosao", title: "Fratura toracolombar por explosão", status: "planned" },
          { slug: "fratura-compressao-osteoporotica", title: "Fratura por compressão osteoporótica", status: "planned" },
          { slug: "espondilolistese", title: "Espondilolistese", status: "planned" },
        ],
      },
      {
        id: "col-sacro",
        title: "Sacro",
        topics: [
          { slug: "fratura-sacro", title: "Fratura do sacro", status: "planned" },
          { slug: "fratura-insuficiencia-sacral", title: "Fratura por insuficiência sacral", status: "planned" },
        ],
      },
    ],
  },
  {
    id: "ortopedia-pediatrica",
    title: "Ortopedia pediátrica",
    tag: "PED",
    blurb:
      "Osso em crescimento: fises, remodelação e lesões próprias da criança.",
    groups: [
      {
        id: "ped-membro-superior",
        title: "Membro superior",
        topics: [
          { slug: "fratura-supracondiliana-umero", title: "Fratura supracondiliana do úmero", status: "planned" },
          { slug: "fratura-antebraco-crianca", title: "Fratura do antebraço na criança", status: "planned" },
        ],
      },
      {
        id: "ped-quadril",
        title: "Quadril",
        topics: [
          { slug: "displasia-desenvolvimento-quadril", title: "Displasia do desenvolvimento do quadril", status: "planned" },
          { slug: "epifisiolise-femoral-proximal", title: "Epifisiólise femoral proximal", status: "planned" },
          { slug: "legg-calve-perthes", title: "Doença de Legg-Calvé-Perthes", status: "planned" },
        ],
      },
      {
        id: "ped-membro-inferior",
        title: "Membro inferior & fises",
        topics: [
          { slug: "fratura-fisaria-salter-harris", title: "Fratura fisária (Salter-Harris)", status: "planned" },
          { slug: "fratura-transicao-tornozelo", title: "Fraturas de transição do tornozelo", status: "planned" },
        ],
      },
    ],
  },
  {
    id: "tumores-e-metastases",
    title: "Tumores & metástases",
    tag: "TUM",
    blurb:
      "Do estadiamento ao controle local: lesões ósseas benignas, malignas e doença metastática.",
    groups: [
      {
        id: "tum-principios",
        title: "Princípios & estadiamento",
        topics: [
          { slug: "biopsia-lesao-ossea", title: "Biópsia da lesão óssea", status: "planned" },
          { slug: "estadiamento-enneking", title: "Estadiamento de Enneking", status: "planned" },
        ],
      },
      {
        id: "tum-primarios",
        title: "Tumores primários",
        topics: [
          { slug: "osteossarcoma", title: "Osteossarcoma", status: "planned" },
          { slug: "tumor-celulas-gigantes", title: "Tumor de células gigantes", status: "planned" },
          { slug: "condrossarcoma", title: "Condrossarcoma", status: "planned" },
        ],
      },
      {
        id: "tum-metastases",
        title: "Doença metastática",
        topics: [
          { slug: "metastase-ossea-membro", title: "Metástase óssea em osso longo", status: "planned" },
          { slug: "fratura-patologica-iminente", title: "Fratura patológica iminente (Mirels)", status: "planned" },
        ],
      },
    ],
  },
  {
    id: "infeccao-musculoesqueletica",
    title: "Infecção musculoesquelética",
    tag: "INF",
    blurb:
      "Osteomielite, artrite séptica e infecção associada a implante — diagnóstico e controle.",
    groups: [
      {
        id: "inf-osso",
        title: "Osso",
        topics: [
          { slug: "osteomielite-aguda", title: "Osteomielite aguda", status: "planned" },
          { slug: "osteomielite-cronica", title: "Osteomielite crônica", status: "planned" },
        ],
      },
      {
        id: "inf-articulacao-implante",
        title: "Articulação & implante",
        topics: [
          { slug: "artrite-septica", title: "Artrite séptica", status: "planned" },
          { slug: "infeccao-periprotetica", title: "Infecção periprotética", status: "planned" },
          { slug: "infeccao-associada-fratura", title: "Infecção associada à fratura", status: "planned" },
        ],
      },
    ],
  },
  {
    id: "esportiva-artroscopia",
    title: "Esportiva & artroscopia",
    tag: "ESP",
    blurb:
      "Lesões ligamentares, meniscais e labrais — do gesto esportivo ao retorno ao esporte.",
    groups: [
      {
        id: "esp-joelho",
        title: "Joelho",
        topics: [
          { slug: "lesao-lca", title: "Lesão do ligamento cruzado anterior", status: "planned" },
          { slug: "lesao-meniscal", title: "Lesão meniscal", status: "planned" },
          { slug: "lesao-multiligamentar-joelho", title: "Lesão multiligamentar do joelho", status: "planned" },
        ],
      },
      {
        id: "esp-ombro",
        title: "Ombro",
        topics: [
          { slug: "lesao-manguito-rotador", title: "Lesão do manguito rotador", status: "planned" },
          { slug: "lesao-labral-bankart", title: "Lesão labral (Bankart)", status: "planned" },
        ],
      },
      {
        id: "esp-tornozelo-pe",
        title: "Tornozelo & pé",
        topics: [
          { slug: "instabilidade-lateral-tornozelo", title: "Instabilidade lateral do tornozelo", status: "planned" },
          { slug: "ruptura-tendao-calcaneo", title: "Ruptura do tendão calcâneo", status: "planned" },
        ],
      },
    ],
  },
];
