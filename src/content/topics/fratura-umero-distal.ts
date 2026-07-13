import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-umero-fratura-umero-distal",
  slug: "fratura-umero-distal",
  regionId: "membro-superior",
  bone: "Úmero distal",
  injury: "Fratura",
  title: "Fratura do úmero distal",
  subtitle:
    "Reconstruir a superfície articular e as duas colunas do cotovelo com estabilidade suficiente para mobilidade precoce.",
  laterality: null,
  status: "complete",
  overview:
    "Fraturas do úmero distal são lesões articulares tecnicamente exigentes. O conceito central é bicolunar: as colunas medial e lateral sustentam a tróclea e o capítulo como um arco. Nos adultos jovens, o objetivo é obter redução anatômica da superfície articular e redução aberta com fixação interna por duas placas. No idoso osteoporótico com cominuição articular irreconstrutível, a artroplastia total do cotovelo (ATC) pode oferecer função previsível, mas impõe restrição vitalícia de carga e risco de revisão. O nervo ulnar faz parte de todo o planejamento: deve ser identificado, protegido e documentado, mas a transposição anterior rotineira continua controversa.",
  keyFacts: [
    { label: "Classificação", value: "AO/OTA 13: A extra-articular, B parcial, C articular completa" },
    { label: "Conceito", value: "Duas colunas + bloco articular formado por tróclea e capítulo" },
    { label: "Padrão adulto", value: "Redução aberta e fixação interna com dupla placa" },
    { label: "Idoso", value: "ATC se a superfície articular for irreconstrutível e houver osteoporose grave" },
    { label: "Nervo em risco", value: "Ulnar: identificar e proteger sempre" },
    { label: "Complicações", value: "Rigidez, neuropatia ulnar, pseudartrose e ossificação heterotópica" },
  ],
  anatomy: {
    text:
      "O úmero distal forma um triângulo: coluna medial, coluna lateral e superfície articular. A tróclea é essencial para a estabilidade ulnotroclear; o capítulo articula-se com a cabeça do rádio. A fossa olecraniana posterior e as fossas coronoidea e radial anteriores limitam o estoque ósseo para parafusos. O nervo ulnar passa posteriormente ao epicôndilo medial, no túnel cubital, e fica vulnerável durante a exposição, a redução e a aplicação da placa medial.",
    figureIds: ["fratura-umero-distal:radiografia", "fratura-umero-distal:anatomia", "fratura-umero-distal:colunas"],
  },
  classification: [
    {
      id: "ao-ota-13",
      name: "AO/OTA 13",
      basis: "Relação entre o traço e a superfície articular do úmero distal.",
      types: [
        { code: "13-A", label: "Extra-articular", description: "Supracondiliana ou colunar sem fratura da superfície articular.", figureId: "fratura-umero-distal:ao-13", figureVariant: "A" },
        { code: "13-B", label: "Articular parcial", description: "Uma coluna ou côndilo permanece ligado à diáfise.", figureId: "fratura-umero-distal:ao-13", figureVariant: "B" },
        { code: "13-C", label: "Articular completa", description: "Bloco articular separado da diáfise; frequentemente bicolunar.", figureId: "fratura-umero-distal:ao-13", figureVariant: "C" },
      ],
    },
  ],
  indications: {
    operative: [
      "Fratura articular desviada (13-B/C) em paciente apto.",
      "Instabilidade bicolunar ou perda de alinhamento supracondiliano.",
      "Fratura exposta, lesão vascular ou síndrome compartimental associada.",
      "Idoso com cominuição articular irreconstrutível: considerar artroplastia total do cotovelo.",
    ],
    nonOperative: [
      "Fratura sem desvio ou paciente com risco cirúrgico proibitivo.",
      "Idoso de baixíssima demanda em que a imobilização funcional ou paliativa é aceitável.",
    ],
    decisionNotes:
      "A redução aberta com fixação interna exige que a articulação possa ser reconstruída e que placas e parafusos tenham fixação suficiente para permitir mobilidade precoce. Quando isso não é possível no idoso, a ATC primária pode oferecer melhor função no curto prazo, mas exige restrição permanente de carga e vigilância de soltura. Nos jovens, a ATC é uma exceção extrema.",
  },
  approaches: [
    {
      id: "posterior-olecrano",
      name: "Posterior com osteotomia do olecrano",
      indication: "Fraturas articulares completas que exigem visão ampla da tróclea.",
      interval: "Exposição posterior, identificação do nervo ulnar e osteotomia do olecrano em formato de V.",
      atRisk: ["Nervo ulnar", "Pseudartrose ou irritação da osteotomia", "Ossificação heterotópica"],
      figureId: "fratura-umero-distal:via-olecrano",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Planejar por colunas e superfície",
      detail:
        "Usar incidências AP e perfil e TC para definir AO 13, fragmentos articulares, colunas medial e lateral e estoque ósseo. Planejar placas paralelas ou ortogonais e a necessidade de osteotomia do olecrano.",
      figureId: "fratura-umero-distal:ao-13",
      figureVariant: "C",
      tips: ["Pensar primeiro na articulação, depois nas colunas"],
      pitfalls: ["Subestimar fragmentos coronais do capítulo ou da tróclea"],
    },
    {
      n: 2,
      title: "Identificar e proteger nervo ulnar",
      detail:
        "Expor o nervo ulnar proximal e distalmente apenas o suficiente para protegê-lo durante a redução e a aplicação da placa medial. Considerar transposição se houver tensão, instabilidade ou conflito com o implante.",
      figureId: "fratura-umero-distal:step-nervo-ulnar",
      tips: ["Documentar o estado pré e pós-operatório do nervo ulnar"],
      pitfalls: ["Manipular excessivamente o nervo", "Deixar placa ou parafuso irritando o túnel cubital"],
    },
    {
      n: 3,
      title: "Reconstruir bloco articular",
      detail:
        "Reduzir a tróclea e o capítulo sob visão direta, fixar provisoriamente com fios e converter a fixação em parafusos de compressão fora da cartilagem quando possível. O bloco articular passa a formar uma unidade para ser ligada à diáfise.",
      figureId: "fratura-umero-distal:step-articular",
      tips: ["Checar a congruência ulnotroclear", "Enterrar os parafusos subcondrais sem invadir a articulação"],
      pitfalls: ["Degrau na tróclea", "Parafuso intra-articular"],
    },
    {
      n: 4,
      title: "Fixar as duas colunas",
      detail:
        "Aplicar placas medial e lateral em configuração paralela ou ortogonal, com parafusos longos através do bloco distal quando possível. A meta é obter estabilidade para mobilidade precoce, não prolongar a imobilização.",
      figureId: "fratura-umero-distal:dupla-placa",
      figureVariant: "paralela",
      tips: ["Maximizar parafusos distais divergentes e convergentes no bloco articular"],
      pitfalls: ["Placa curta", "Fixação de uma coluna e abandono da outra"],
    },
    {
      n: 5,
      title: "ATC primária quando a articulação for irreconstrutível",
      detail:
        "No idoso com cominuição extrema, baixa qualidade óssea e baixa demanda, a artroplastia total do cotovelo pode substituir uma reconstrução inviável. Proteger o tríceps e o nervo ulnar e orientar sobre a restrição permanente de carga.",
      figureId: "fratura-umero-distal:atc",
      tips: ["Indicar apenas quando a restrição de carga for aceitável"],
      pitfalls: ["ATC em paciente jovem ou de alta demanda", "Não explicar o limite vitalício de peso"],
    },
  ],
  postop: {
    immobilization: "Tala por curto período para conforto e proteção da ferida; iniciar mobilidade precoce quando a fixação permitir.",
    weightBearing: "Sem carga por 6-12 semanas após fixação interna; após ATC, restrição permanente de carga conforme o implante e o serviço.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Sem carga", focus: "Edema, ferida e mobilidade de dedos, punho e ombro; iniciar arco protegido se liberado." },
      { window: "2-6 semanas", weightBearing: "Sem carga", focus: "Ganho de flexoextensão e pronossupinação; evitar rigidez." },
      { window: "6-12 semanas", weightBearing: "Progressiva se houver consolidação", focus: "Fortalecimento leve e função; vigiar o nervo ulnar." },
    ],
    followup: "Radiografias para avaliar consolidação e implante; monitorar o nervo ulnar, a ossificação heterotópica e o arco de movimento.",
  },
  complications: [
    { name: "Rigidez", detail: "A complicação funcional mais comum.", prevention: "Fixação estável e mobilidade precoce." },
    { name: "Neuropatia ulnar", detail: "Pode ser preexistente, iatrogênica ou causada por cicatriz ou implante.", prevention: "Proteção, pouca manipulação e ausência de conflito com a placa." },
    { name: "Falha/pseudartrose", detail: "Mais comum em osteoporose, cominuição e fixação insuficiente.", prevention: "Dupla placa adequada e respeito biológico." },
  ],
  evidence: [
    {
      id: "mckee-2009-tea-orif",
      claim: "Em idosos com fratura intra-articular desviada, a ATC foi uma alternativa quando a redução aberta com fixação interna estável não era viável.",
      takeaway: "A ATC é uma opção para a fratura irreconstrutível do idoso, não um substituto amplo da fixação interna.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico",
      era: "classico",
      citation: {
        authors: "McKee MD, Veillette CJ, Hall JA, Schemitsch EH, Wild LM, McCormack R, et al.",
        title: "A multicenter, prospective, randomized, controlled trial of open reduction--internal fixation versus total elbow arthroplasty for displaced intra-articular distal humeral fractures in elderly patients.",
        journal: "J Shoulder Elbow Surg",
        year: 2009,
        pmid: "18823799",
        doi: "10.1016/j.jse.2008.06.005",
      },
    },
    {
      id: "loisel-2024-distal-humerus",
      claim: "Revisão atual reforça a decisão entre fixação interna e ATC baseada em reconstrutibilidade, idade, qualidade óssea e demanda funcional.",
      takeaway: "No idoso, a ATC deve ser considerada precocemente quando a fixação interna não sustentará mobilidade precoce.",
      level: "V",
      studyType: "Revisão contemporânea",
      era: "atual",
      citation: {
        authors: "Loisel F, Amar Y, Rochet S, Obert L",
        title: "Distal humerus fracture in older patients: ORIF vs. total elbow arthroplasty.",
        journal: "Orthop Traumatol Surg Res",
        year: 2024,
        pmid: "37992865",
        doi: "10.1016/j.otsr.2023.103759",
      },
    },
  ],
  pearls: [
    "Construa primeiro o bloco articular; depois, fixe-o às colunas.",
    "O melhor tratamento da rigidez é evitar imobilização prolongada.",
    "Nervo ulnar deve estar no plano desde o primeiro minuto.",
  ],
  pitfalls: [
    "Uma placa para fratura bicolunar instável.",
    "Não reconhecer uma fratura irreconstrutível no idoso osteoporótico.",
    "Transpor ou dissecar o nervo ulnar sem necessidade clara e causar neurite.",
  ],
  figures: [
    {
      id: "fratura-umero-distal:radiografia",
      caption: "Radiografia real do cotovelo com fratura do úmero distal.",
      alt: "Radiografia de fratura do úmero distal",
      kind: "radiograph",
      source: {
        label: "Nevit Dilmen / Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Rad_1300117.JPG",
        license: "CC BY-SA 3.0",
      },
    },
    { id: "fratura-umero-distal:anatomia", caption: "Tróclea, capítulo, fossas e relação com o nervo ulnar.", alt: "Anatomia do úmero distal" },
    { id: "fratura-umero-distal:colunas", caption: "Modelo de duas colunas do úmero distal.", alt: "Colunas medial e lateral do úmero distal" },
    { id: "fratura-umero-distal:ao-13", variant: "A", caption: "AO 13-A: extra-articular.", alt: "AO 13A" },
    { id: "fratura-umero-distal:ao-13", variant: "C", caption: "AO 13-C: articular completa.", alt: "AO 13C" },
    { id: "fratura-umero-distal:via-olecrano", caption: "Exposição posterior com osteotomia do olecrano.", alt: "Via posterior do cotovelo" },
    { id: "fratura-umero-distal:step-nervo-ulnar", caption: "Identificação e proteção do nervo ulnar.", alt: "Nervo ulnar no cotovelo" },
    { id: "fratura-umero-distal:step-articular", caption: "Reconstrução do bloco articular.", alt: "Redução articular do úmero distal" },
    { id: "fratura-umero-distal:dupla-placa", variant: "paralela", caption: "Fixação bicolunar com dupla placa.", alt: "Dupla placa no úmero distal" },
    { id: "fratura-umero-distal:atc", caption: "Artroplastia total do cotovelo em fratura irreconstrutível.", alt: "Artroplastia total do cotovelo" },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
    ],
    attribution: "Conteúdo original Revisortopedia; figuras esquemáticas originais.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), seção de fraturas do úmero distal; redesenho original, não reprodução.",
  },
});
