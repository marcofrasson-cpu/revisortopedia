import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-umero-fratura-umero-distal",
  slug: "fratura-umero-distal",
  regionId: "membro-superior",
  bone: "Úmero distal",
  injury: "Fratura",
  title: "Fratura do úmero distal",
  subtitle:
    "Reconstruir a dobradica articular e as duas colunas do cotovelo com estabilidade suficiente para mobilidade precoce.",
  laterality: null,
  status: "complete",
  overview:
    "Fraturas do úmero distal são lesões articulares técnicamente exigentes. O conceito central e bicolunar: coluna medial e lateral sustentam a tróclea/capitelo como um arco. Em adultos jovens, o objetivo e redução anatômica da superfície articular e ORIF com duas placas. No idoso osteoporotico com cominuicao articular não reconstrutivel, artroplastia total do cotovelo pode oferecer função previsivel, mas troca o problema por restrição de carga vitalicia e risco de revisão. O nervo ulnar e personagem de todo o caso: deve ser identificado, protegido e documentado, mas transposicao anterior rotineira continua controversa.",
  keyFacts: [
    { label: "Classificação", value: "AO/OTA 13: A extra-articular, B parcial, C articular completa" },
    { label: "Conceito", value: "Duas colunas + bloco articular tróclea/capitelo" },
    { label: "Padrao adulto", value: "ORIF com dupla placa e mobilidade precoce" },
    { label: "Idoso", value: "TEA se articular não reconstrutivel/osteoporose grave" },
    { label: "Nervo em risco", value: "Ulnar: identificar e proteger sempre" },
    { label: "Complicacao", value: "Rigidez, neuropatia ulnar, não-união, ossificacao heterotopica" },
  ],
  anatomy: {
    text:
      "O úmero distal forma um triangulo: coluna medial, coluna lateral e superfície articular. A tróclea e essencial para estabilidade ulnotróclear; o capitelo articula com a cabeça radial. A fossa olecraniana posterior e as fossas coronoide/radial anteriores limitam o estoque ósseo para parafusos. O nervo ulnar passa posterior ao epicôndilo medial no túnel cubital e fica vulnerável na exposição, redução e placas mediais.",
    figureIds: ["fratura-umero-distal:radiografia", "fratura-umero-distal:anatomia", "fratura-umero-distal:colunas"],
  },
  classification: [
    {
      id: "ao-ota-13",
      name: "AO/OTA 13",
      basis: "Relacao entre traço e superfície articular do úmero distal.",
      types: [
        { code: "13-A", label: "Extra-articular", description: "Supracondiliana/colunar sem fratura da superfície.", figureId: "fratura-umero-distal:ao-13", figureVariant: "A" },
        { code: "13-B", label: "Articular parcial", description: "Uma coluna/condilo permanece ligada a diáfise.", figureId: "fratura-umero-distal:ao-13", figureVariant: "B" },
        { code: "13-C", label: "Articular completa", description: "Bloco articular separado da diáfise; frequentemente bicolunar.", figureId: "fratura-umero-distal:ao-13", figureVariant: "C" },
      ],
    },
  ],
  indications: {
    operative: [
      "Fratura articular desviada (13-B/C) em paciente apto.",
      "Instabilidade bicolunar ou perda de alinhamento supracondiliano.",
      "Fratura exposta, lesão vascular ou sindrome compartimental associada.",
      "Idoso com cominuicao articular não reconstrutivel: considerar artroplastia total do cotovelo.",
    ],
    nonOperative: [
      "Fratura sem desvio ou paciente com risco cirúrgico proibitivo.",
      "Idoso de baixissima demanda em que imobilizacao funcional/paliativa e aceitavel.",
    ],
    decisionNotes:
      "ORIF exige que a articulação possa ser reconstruída e que placas/parafusos tenham compra suficiente para mobilidade precoce. Quando isso não e possível no idoso, TEA primária pode entregar função melhor no curto prazo, mas exige restrição permanente de carga e vigilância de soltura. Em jovens, TEA e excecao extrema.",
  },
  approaches: [
    {
      id: "posterior-olecrano",
      name: "Posterior com osteotomia do olecrano",
      indication: "Fraturas articulares completas que exigem visao ampla da tróclea.",
      interval: "Exposicao posterior, identificacao do ulnar e osteotomia em chevron do olecrano.",
      atRisk: ["Nervo ulnar", "Não-uniao/irritacao da osteotomia", "Ossificacao heterotopica"],
      figureId: "fratura-umero-distal:via-olecrano",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Planejar por colunas e superfície",
      detail:
        "Usar AP/lateral e TC para definir AO 13, fragmentos articulares, coluna medial/lateral e estoque ósseo. Planejar placas paralelas ou ortogonais e necessidade de osteotomia do olecrano.",
      figureId: "fratura-umero-distal:ao-13",
      figureVariant: "C",
      tips: ["Pensar primeiro na articulação, depois nas colunas"],
      pitfalls: ["Subestimar fragmentos coronais do capitelo/tróclea"],
    },
    {
      n: 2,
      title: "Identificar e proteger nervo ulnar",
      detail:
        "Expor o nervo ulnar proximal e distalmente o suficiente para protegê-lo durante redução e aplicacao da placa medial. Decidir transposicao caso haja tensao, instabilidade ou conflito com implante.",
      figureId: "fratura-umero-distal:step-nervo-ulnar",
      tips: ["Documentar estado pre e pós-operatório do ulnar"],
      pitfalls: ["Manipular excessivamente o nervo", "Deixar placa/parafuso irritando o túnel cubital"],
    },
    {
      n: 3,
      title: "Reconstruir bloco articular",
      detail:
        "Reduzir tróclea/capitelo sob visao direta, fixar provisoriamente com fios e converter em parafusos de compressão fora da cartilagem quando possível. O bloco articular vira uma unidade para ser ligado a diáfise.",
      figureId: "fratura-umero-distal:step-articular",
      tips: ["Checar congruencia ulnotróclear", "Enterrar parafusos subcondrais sem invadir a articulação"],
      pitfalls: ["Degrau na tróclea", "Parafuso intra-articular"],
    },
    {
      n: 4,
      title: "Fixar as duas colunas",
      detail:
        "Aplicar placas medial e lateral em configuração paralela ou ortogonal, com parafusos longos através do bloco distal quando possível. A meta e estabilidade para mobilidade precoce, não imobilizacao prolongada.",
      figureId: "fratura-umero-distal:dupla-placa",
      figureVariant: "paralela",
      tips: ["Maximizar parafusos distais divergentes/convergentes no bloco articular"],
      pitfalls: ["Placa curta", "Fixação de uma coluna e abandono da outra"],
    },
    {
      n: 5,
      title: "TEA primária quando não reconstrutivel",
      detail:
        "Em idoso com cominuicao extrema, osso ruim e baixa demanda, artroplastia total do cotovelo pode substituir ORIF inviável. Proteger triceps/ulnar e educar restrição permanente de carga.",
      figureId: "fratura-umero-distal:atc",
      tips: ["Indicar apenas quando restrição de carga e aceitavel"],
      pitfalls: ["TEA em paciente jovem/alta demanda", "Não explicar limite vitalicio de peso"],
    },
  ],
  postop: {
    immobilization: "Tala curta para conforto/ferida; iniciar mobilidade precoce quando fixação permitir.",
    weightBearing: "Sem carga por 6-12 semanas após ORIF; após TEA, restrição permanente de carga conforme implante/servico.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Sem carga", focus: "Edema, ferida, mobilidade de dedos/punho/ombro; iniciar arco protegido se liberado." },
      { window: "2-6 semanas", weightBearing: "Sem carga", focus: "Ganho de flexo-extensao e prono-supinacao; evitar rigidez." },
      { window: "6-12 semanas", weightBearing: "Progressiva se consolidando", focus: "Fortalecimento leve e função; vigiar ulnar." },
    ],
    followup: "Radiografias para consolidação/implante; monitorar ulnar, HO e arco de movimento.",
  },
  complications: [
    { name: "Rigidez", detail: "A complicação funcional mais comum.", prevention: "Fixação estável e mobilidade precoce." },
    { name: "Neuropatia ulnar", detail: "Pode ser preexistente, iatrogenica ou por cicatriz/implante.", prevention: "Protecao, pouca manipulacao e evitar conflito com placa." },
    { name: "Falha/não-união", detail: "Mais comum em osteoporose, cominuicao e fixação insuficiente.", prevention: "Dupla placa adequada e respeito biológico." },
  ],
  evidence: [
    {
      id: "mckee-2009-tea-orif",
      claim: "Em idosos com fratura intra-articular desviada, TEA teve papel como alternativa quando ORIF estável não era viável.",
      takeaway: "TEA e ferramenta para fratura não reconstrutivel do idoso, não substituto amplo da ORIF.",
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
      claim: "Revisao atual reforca decisão ORIF versus TEA baseada em reconstrutibilidade, idade, osso e demanda funcional.",
      takeaway: "No idoso, TEA deve ser considerada cedo quando a ORIF não sustentara mobilidade precoce.",
      level: "V",
      studyType: "Revisao contemporanea",
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
    "Construa primeiro o bloco articular, depois fixe o bloco as colunas.",
    "O melhor tratamento da rigidez e evitar imobilizacao prolongada.",
    "Nervo ulnar deve estar no plano desde o primeiro minuto.",
  ],
  pitfalls: [
    "Uma placa para fratura bicolunar instável.",
    "Não reconhecer osteoporose não reconstrutivel no idoso.",
    "Transpor ou dissecar o ulnar sem necessidade clara e criar neurite.",
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
    { id: "fratura-umero-distal:anatomia", caption: "Tróclea, capitelo, fossas e relação do ulnar.", alt: "Anatomia do úmero distal" },
    { id: "fratura-umero-distal:colunas", caption: "Modelo de duas colunas do úmero distal.", alt: "Colunas medial e lateral do úmero distal" },
    { id: "fratura-umero-distal:ao-13", variant: "A", caption: "AO 13-A: extra-articular.", alt: "AO 13A" },
    { id: "fratura-umero-distal:ao-13", variant: "C", caption: "AO 13-C: articular completa.", alt: "AO 13C" },
    { id: "fratura-umero-distal:via-olecrano", caption: "Exposicao posterior com osteotomia do olecrano.", alt: "Via posterior do cotovelo" },
    { id: "fratura-umero-distal:step-nervo-ulnar", caption: "Identificação e proteção do nervo ulnar.", alt: "Nervo ulnar no cotovelo" },
    { id: "fratura-umero-distal:step-articular", caption: "Reconstrução do bloco articular.", alt: "Redução articular do úmero distal" },
    { id: "fratura-umero-distal:dupla-placa", variant: "paralela", caption: "Fixação bicolunar com dupla placa.", alt: "Dupla placa no úmero distal" },
    { id: "fratura-umero-distal:atc", caption: "Artroplastia total do cotovelo em fratura não reconstrutivel.", alt: "Artroplastia total do cotovelo" },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Titulo de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
    ],
    attribution: "Conteudo original Revisortopedia; figuras esquematicas originais.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), seção de fraturas do úmero distal; redesenho original, não reprodução.",
  },
});
