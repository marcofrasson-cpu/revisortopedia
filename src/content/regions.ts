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
          { slug: "fratura-clavicula", title: "Fratura da clavícula", status: "complete" },
          { slug: "luxacao-acromioclavicular", title: "Luxação acromioclavicular", status: "complete" },
          { slug: "luxacao-glenoumeral-anterior", title: "Luxação glenoumeral anterior", status: "complete" },
          { slug: "fratura-glenoide", title: "Fratura da glenoide", status: "complete" },
        ],
      },
      {
        id: "ms-umero",
        title: "Úmero",
        topics: [
          { slug: "fratura-umero-proximal", title: "Fratura do úmero proximal", status: "complete" },
          { slug: "fratura-diafise-umeral", title: "Fratura da diáfise umeral", status: "complete" },
          { slug: "fratura-umero-distal", title: "Fratura do úmero distal", status: "complete" },
        ],
      },
      {
        id: "ms-cotovelo",
        title: "Cotovelo",
        topics: [
          { slug: "fratura-cabeca-radial", title: "Fratura da cabeça do rádio", status: "complete" },
          { slug: "fratura-olecrano", title: "Fratura do olécrano", status: "complete" },
          { slug: "luxacao-cotovelo", title: "Luxação do cotovelo", status: "complete" },
          { slug: "triade-terrivel-cotovelo", title: "Tríade terrível do cotovelo", status: "complete" },
        ],
      },
      {
        id: "ms-antebraco",
        title: "Antebraço",
        topics: [
          { slug: "fratura-diafise-radio-ulna", title: "Fratura das diáfises do rádio e da ulna", status: "complete" },
          { slug: "fratura-galeazzi", title: "Fratura-luxação de Galeazzi", status: "complete" },
          { slug: "fratura-monteggia", title: "Fratura-luxação de Monteggia", status: "complete" },
        ],
      },
      {
        id: "ms-punho-radio-distal",
        title: "Punho & rádio distal",
        topics: [
          { slug: "fratura-radio-distal", title: "Fratura do rádio distal", status: "complete" },
          { slug: "fratura-escafoide", title: "Fratura do escafoide", status: "complete" },
          { slug: "instabilidade-carpo", title: "Instabilidade do carpo", status: "complete" },
        ],
      },
      {
        id: "ms-mao",
        title: "Mão",
        topics: [
          { slug: "fratura-metacarpo", title: "Fratura dos metacarpos", status: "complete" },
          { slug: "fratura-falanges", title: "Fratura das falanges", status: "complete" },
          { slug: "lesao-ligamento-colateral-ulnar-polegar", title: "Lesão do ligamento colateral ulnar do polegar", status: "complete" },
        ],
      },
      {
        id: "ms-punho-mao-nao-trauma",
        title: "Punho & mão — não traumático",
        topics: [
          { slug: "luxacao-perilunar", title: "Luxação perilunar do carpo", status: "complete" },
          { slug: "kienbock", title: "Doença de Kienböck", status: "complete" },
          { slug: "rizartrose", title: "Rizartrose (artrose trapézio-metacarpiana)", status: "complete" },
        ],
      },
    ],
  },
  {
    id: "membro-inferior",
    title: "Membro inferior",
    tag: "MI",
    blurb:
      "Da pelve ao pé: carga, alinhamento, partes moles e reconstrução articular.",
    groups: [
      {
        id: "mi-pelve-acetabulo",
        title: "Pelve & acetábulo",
        topics: [
          { slug: "fratura-anel-pelvico", title: "Fratura do anel pélvico", status: "complete" },
          { slug: "fratura-acetabulo", title: "Fratura do acetábulo", status: "complete" },
        ],
      },
      {
        id: "mi-quadril-femur-proximal",
        title: "Quadril & fêmur proximal",
        topics: [
          { slug: "fratura-colo-femoral", title: "Fratura do colo femoral", status: "complete" },
          { slug: "fratura-transtrocanteriana", title: "Fratura transtrocantérica", status: "complete" },
          { slug: "fratura-subtrocanteriana", title: "Fratura subtrocantérica", status: "complete" },
        ],
      },
      {
        id: "mi-diafise-femoral",
        title: "Diáfise femoral",
        topics: [
          { slug: "fratura-diafise-femoral", title: "Fratura da diáfise femoral", status: "complete" },
          { slug: "fratura-femur-distal", title: "Fratura do fêmur distal", status: "complete" },
        ],
      },
      {
        id: "mi-joelho",
        title: "Joelho",
        topics: [
          { slug: "fratura-patela", title: "Fratura da patela", status: "complete" },
          { slug: "fratura-planalto-tibial", title: "Fratura do planalto tibial", status: "complete" },
          { slug: "luxacao-joelho", title: "Luxação do joelho", status: "complete" },
        ],
      },
      {
        id: "mi-tibia",
        title: "Tíbia",
        topics: [
          { slug: "fratura-diafise-tibial", title: "Fratura da diáfise tibial", status: "complete" },
          { slug: "fratura-pilao-tibial", title: "Fratura do pilão tibial", status: "complete" },
        ],
      },
      {
        id: "mi-tornozelo",
        title: "Tornozelo",
        topics: [
          { slug: "fratura-maleolar-tornozelo", title: "Fratura maleolar do tornozelo", status: "complete" },
          { slug: "lesao-sindesmose-isolada", title: "Lesão isolada da sindesmose", status: "complete" },
          { slug: "fratura-estresse-maleolo-medial", title: "Fratura por estresse do maléolo medial", status: "complete" },
        ],
      },
      {
        id: "mi-pe",
        title: "Pé",
        topics: [
          { slug: "fratura-calcaneo", title: "Fratura do calcâneo", status: "complete" },
          { slug: "fratura-talus", title: "Fratura do tálus", status: "complete" },
          { slug: "lesao-lisfranc", title: "Lesão de Lisfranc", status: "complete" },
          { slug: "fratura-quinto-metatarso", title: "Fratura do quinto metatarso", status: "complete" },
        ],
      },
      {
        id: "mi-tendoes-partes-moles",
        title: "Tendões & partes moles",
        topics: [
          { slug: "ruptura-tendao-aquiles", title: "Ruptura do tendão de Aquiles", status: "complete" },
          { slug: "tendinopatia-aquiles", title: "Tendinopatia do Aquiles", status: "complete" },
          { slug: "ruptura-tendao-tibial-posterior", title: "Disfunção do tendão tibial posterior", status: "complete" },
          { slug: "lesao-tendoes-fibulares", title: "Lesão dos tendões fibulares", status: "complete" },
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
          { slug: "fratura-axis-odontoide", title: "Fratura do áxis (processo odontoide)", status: "complete" },
          { slug: "fratura-atlas-jefferson", title: "Fratura do atlas (Jefferson)", status: "complete" },
          { slug: "trauma-cervical-subaxial", title: "Trauma cervical subaxial", status: "complete" },
          { slug: "hernia-cervical-radiculopatia", title: "Hérnia cervical e radiculopatia", status: "complete" },
          { slug: "mielopatia-cervical-espondilotica", title: "Mielopatia cervical espondilótica", status: "complete" },
        ],
      },
      {
        id: "col-toracolombar",
        title: "Toracolombar",
        topics: [
          { slug: "fratura-toracolombar-explosao", title: "Fratura toracolombar por explosão", status: "complete" },
          { slug: "fratura-compressao-osteoporotica", title: "Fratura por compressão osteoporótica", status: "complete" },
          { slug: "espondilolistese", title: "Espondilolistese", status: "complete" },
        ],
      },
      {
        id: "col-lombar-degenerativo",
        title: "Lombar — degenerativo",
        topics: [
          { slug: "hernia-discal-lombar", title: "Hérnia discal lombar", status: "complete" },
          { slug: "estenose-lombar", title: "Estenose de canal lombar", status: "complete" },
        ],
      },
      {
        id: "col-deformidade",
        title: "Deformidade",
        topics: [
          { slug: "escoliose-idiopatica-adolescente", title: "Escoliose idiopática do adolescente", status: "complete" },
          { slug: "cifose-scheuermann", title: "Cifose de Scheuermann", status: "complete" },
        ],
      },
      {
        id: "col-medular",
        title: "Lesão medular",
        topics: [
          { slug: "trauma-raquimedular", title: "Trauma raquimedular", status: "complete" },
        ],
      },
      {
        id: "col-sacro",
        title: "Sacro",
        topics: [
          { slug: "fratura-sacro", title: "Fratura do sacro", status: "complete" },
          { slug: "fratura-insuficiencia-sacral", title: "Fratura por insuficiência sacral", status: "complete" },
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
          { slug: "fratura-supracondiliana-umero", title: "Fratura supracondiliana do úmero", status: "complete" },
          { slug: "fratura-condilo-lateral-umero", title: "Fratura do côndilo lateral do úmero", status: "complete" },
          { slug: "fratura-epicondilo-medial", title: "Fratura do epicôndilo medial", status: "complete" },
          { slug: "fratura-antebraco-crianca", title: "Fratura do antebraço na criança", status: "complete" },
          { slug: "monteggia-crianca", title: "Monteggia na criança", status: "complete" },
          { slug: "paralisia-braquial-obstetrica", title: "Paralisia braquial obstétrica", status: "complete" },
        ],
      },
      {
        id: "ped-quadril",
        title: "Quadril",
        topics: [
          { slug: "displasia-desenvolvimento-quadril", title: "Displasia do desenvolvimento do quadril", status: "complete" },
          { slug: "epifisiolise-femoral-proximal", title: "Epifisiólise femoral proximal", status: "complete" },
          { slug: "legg-calve-perthes", title: "Doença de Legg-Calvé-Perthes", status: "complete" },
          { slug: "fratura-colo-femoral-crianca", title: "Fratura do colo femoral na criança", status: "complete" },
          { slug: "coxa-vara", title: "Coxa vara do desenvolvimento", status: "complete" },
        ],
      },
      {
        id: "ped-membro-inferior",
        title: "Membro inferior & fises",
        topics: [
          { slug: "fratura-fisaria-salter-harris", title: "Fratura fisária (Salter-Harris)", status: "complete" },
          { slug: "fratura-transicao-tornozelo", title: "Fraturas de transição do tornozelo", status: "complete" },
          { slug: "deformidades-angulares-blount", title: "Deformidades angulares e doença de Blount", status: "complete" },
        ],
      },
      {
        id: "ped-pe",
        title: "Pé",
        topics: [
          { slug: "pe-torto-congenito", title: "Pé torto congênito", status: "complete" },
          { slug: "metatarso-aduto", title: "Metatarso aduto", status: "complete" },
        ],
      },
      {
        id: "ped-desenvolvimento",
        title: "Desenvolvimento",
        topics: [
          { slug: "torcicolo-muscular-congenito", title: "Torcicolo muscular congênito", status: "complete" },
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
          { slug: "biopsia-lesao-ossea", title: "Biópsia da lesão óssea", status: "complete" },
          { slug: "estadiamento-enneking", title: "Estadiamento de Enneking", status: "complete" },
        ],
      },
      {
        id: "tum-primarios",
        title: "Tumores primários",
        topics: [
          { slug: "osteossarcoma", title: "Osteossarcoma", status: "complete" },
          { slug: "tumor-celulas-gigantes", title: "Tumor de células gigantes", status: "complete" },
          { slug: "condrossarcoma", title: "Condrossarcoma", status: "complete" },
        ],
      },
      {
        id: "tum-metastases",
        title: "Doença metastática",
        topics: [
          { slug: "metastase-ossea-membro", title: "Metástase óssea em osso longo", status: "complete" },
          { slug: "fratura-patologica-iminente", title: "Fratura patológica iminente (Mirels)", status: "complete" },
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
          { slug: "osteomielite-aguda", title: "Osteomielite aguda", status: "complete" },
          { slug: "osteomielite-cronica", title: "Osteomielite crônica", status: "complete" },
        ],
      },
      {
        id: "inf-articulacao-implante",
        title: "Articulação & implante",
        topics: [
          { slug: "artrite-septica", title: "Artrite séptica", status: "complete" },
          { slug: "infeccao-periprotetica", title: "Infecção periprotética", status: "complete" },
          { slug: "infeccao-associada-fratura", title: "Infecção associada à fratura", status: "complete" },
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
          { slug: "lesao-lca", title: "Lesão do ligamento cruzado anterior", status: "complete" },
          { slug: "lesao-meniscal", title: "Lesão meniscal", status: "complete" },
        ],
      },
      {
        id: "esp-ombro",
        title: "Ombro",
        topics: [
          { slug: "lesao-manguito-rotador", title: "Lesão do manguito rotador", status: "complete" },
          { slug: "lesao-labral-bankart", title: "Lesão labral (Bankart)", status: "complete" },
        ],
      },
      {
        id: "esp-tornozelo-pe",
        title: "Tornozelo & pé",
        topics: [
          { slug: "instabilidade-lateral-tornozelo", title: "Instabilidade lateral do tornozelo", status: "complete" },
        ],
      },
    ],
  },
];
