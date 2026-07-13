import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-ombro-clavicula-fratura-glenoide",
  slug: "fratura-glenoide",
  regionId: "membro-superior",
  bone: "Glenoide/escápula",
  injury: "Fratura intra-articular",
  title: "Fratura da glenoide",
  subtitle:
    "Reconstruir a superfície glenoidal e o anel suspensório superior quando a estabilidade do ombro ou o arco articular estão comprometidos.",
  laterality: null,
  status: "complete",
  overview:
    "Fraturas da glenoide são raras e geralmente surgem em dois cenários: avulsão da rima associada à luxação do ombro (Bankart ósseo ou rima posterior) e fraturas de alta energia que atravessam a fossa glenoidal ou o colo escapular. O tratamento depende de três perguntas: há instabilidade glenoumeral por perda da rima? Há incongruência ou degrau articular relevante na fossa? Há dupla ruptura do complexo suspensório superior do ombro (SSSC), criando um ombro flutuante? A TC com reconstrução 3D é indispensável para medir o tamanho do fragmento, o desvio, a versão e a trajetória do traço. Fragmentos pequenos e estáveis da rima podem ser tratados conservadoramente; perdas grandes, fragmentos deslocados, instabilidade recorrente ou fraturas transversas com degrau articular tendem a exigir fixação aberta, percutânea ou assistida por artroscopia.",
  keyFacts: [
    { label: "Imagem", value: "TC com 3D para fossa, rima e colo escapular" },
    { label: "Classificação", value: "Ideberg modificada por Goss" },
    { label: "Rima anterior", value: "Relacionada a luxação anterior/Bankart ósseo" },
    { label: "Rima posterior", value: "Luxação posterior, convulsão, choque elétrico ou trauma axial" },
    { label: "SSSC", value: "Dupla ruptura pode instabilizar a cintura escapular" },
    { label: "Meta cirúrgica", value: "Congruência articular e ombro estável" },
  ],
  anatomy: {
    text:
      "A glenoide é uma cavidade rasa, cuja profundidade é aumentada pelo lábio glenoidal; a cápsula e os ligamentos orientam a estabilidade. A rima anterior é vulnerável na luxação anterior e a posterior, na luxação posterior. A fossa glenoidal conecta-se ao corpo e ao colo da escápula, e a estabilidade da cintura depende do complexo suspensório superior do ombro: glenoide, coracoide, clavícula distal, articulação AC, ligamentos CC e acrômio. Duas lesões nesse anel podem produzir instabilidade mesmo que, isoladamente, cada uma pareça moderada.",
    figureIds: ["fratura-glenoide:radiografia", "fratura-glenoide:anatomia", "fratura-glenoide:sssc"],
  },
  classification: [
    {
      id: "ideberg-goss",
      name: "Ideberg modificada por Goss",
      basis: "Direção do traço envolvendo a rima ou a fossa glenoidal e extensão para a escápula.",
      types: [
        { code: "I", label: "Rima", description: "Fratura da rima anterior ou posterior; comportamento dominado por instabilidade.", figureId: "fratura-glenoide:ideberg", figureVariant: "i" },
        { code: "II", label: "Inferior/lateral", description: "Traço pela fossa com saída lateral ou inferior no corpo escapular.", figureId: "fratura-glenoide:ideberg", figureVariant: "ii" },
        { code: "III", label: "Superior", description: "Traço superior em direção à base do coracoide.", figureId: "fratura-glenoide:ideberg", figureVariant: "iii" },
        { code: "IV", label: "Medial", description: "Traço transverso para a borda medial da escápula.", figureId: "fratura-glenoide:ideberg", figureVariant: "iv" },
        { code: "V", label: "Combinada", description: "Combinações dos tipos II-IV, frequentemente após trauma de alta energia.", figureId: "fratura-glenoide:ideberg", figureVariant: "v" },
        { code: "VI", label: "Cominutiva", description: "Cominuição grave da superfície articular.", figureId: "fratura-glenoide:ideberg", figureVariant: "vi" },
      ],
    },
  ],
  indications: {
    operative: [
      "Fragmento grande da rima com instabilidade glenoumeral, subluxação ou luxação recorrente.",
      "Degrau ou afastamento articular relevante da fossa glenoidal em paciente ativo.",
      "Desvio medial ou lateral do colo escapular com alteração da relação glenoide-corpo da escápula.",
      "Dupla ruptura do SSSC com instabilidade da cintura escapular.",
      "Fragmento intra-articular encarcerado ou bloqueio mecânico.",
    ],
    nonOperative: [
      "Rima pequena, ombro centrado e estável após redução.",
      "Fratura extra-articular ou minimamente desviada sem instabilidade do SSSC.",
      "Paciente com baixa demanda ou risco cirúrgico alto.",
    ],
    decisionNotes:
      "Não há um único valor universal para todos os fragmentos da rima; a decisão depende da instabilidade, da subluxação da cabeça e da perda funcional da concavidade glenoidal. Na fossa e no colo, degrau articular, medialização e dupla lesão do SSSC aumentam a indicação. A artroscopia pode auxiliar no tratamento da rima e de alguns fragmentos, mas fraturas complexas da fossa ou do colo ainda exigem planejamento aberto anterior, posterior ou combinado.",
  },
  approaches: [
    {
      id: "deltopeitoral",
      name: "Anterior deltopeitoral/subescapular",
      indication: "Rima anterior, Ideberg I anterior e alguns padrões com extensão anterior.",
      interval: "Intervalo deltopeitoral; manejo do subescapular e da cápsula conforme o reparo da rima.",
      atRisk: ["Nervo musculocutâneo medial ao coracobraquial", "Nervo axilar inferior ao subescapular", "Cartilagem glenoidal"],
      figureId: "fratura-glenoide:via-anterior",
    },
    {
      id: "judet-posterior",
      name: "Posterior/Judet modificado",
      indication: "Rima posterior, fraturas da fossa com saída posterior ou medial e colo escapular.",
      interval: "Entre infraespinal e redondo menor ou elevação muscular controlada conforme padrão.",
      atRisk: ["Nervo supraescapular na incisura ou na espinha", "Nervo axilar no espaço quadrilátero", "Vascularização muscular posterior"],
      figureId: "fratura-glenoide:via-posterior",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Mapear fossa, rima e SSSC na TC",
      detail:
        "Reconstruir a glenoide em face, medir o fragmento da rima, avaliar a subluxação da cabeça, o degrau articular e a dupla lesão do SSSC. Planejar parafuso, placa ou âncora conforme o vetor do traço.",
      figureId: "fratura-glenoide:sssc",
      tips: ["A reconstrução 3D em face da glenoide evita subestimar perda de rima"],
      pitfalls: ["Tratar apenas a clavícula/AC e ignorar dupla ruptura do SSSC"],
    },
    {
      n: 2,
      title: "Selecionar via pelo fragmento dominante",
      detail:
        "A rima anterior exige acesso anterior ou artroscopia; a rima posterior e as fraturas da fossa ou do colo geralmente exigem via posterior. Nos padrões combinados, preparar uma estratégia sequencial.",
      figureId: "fratura-glenoide:rima-instabilidade",
      figureVariant: "anterior",
      tips: ["Escolher a via que oferece redução direta do degrau principal"],
      pitfalls: ["Tentar reduzir indiretamente fragmento articular rodado"],
    },
    {
      n: 3,
      title: "Reduzir superfície e centrar a cabeça",
      detail:
        "Remover a interposição, reduzir o fragmento ao lábio glenoidal e à cortical e confirmar que a cabeça está centrada. Nas fraturas da rima, restaurar o lábio glenoidal, a cápsula e a concavidade; nas fraturas da fossa, comprimir perpendicularmente ao traço.",
      figureId: "fratura-glenoide:step-fixacao",
      tips: ["Controle fluoroscópico e, quando artroscópico, visão direta da cartilagem"],
      pitfalls: ["Parafuso intra-articular", "Fixar rima baixa demais e manter instabilidade"],
    },
    {
      n: 4,
      title: "Fixar com estabilidade suficiente para mobilidade precoce",
      detail:
        "Usar parafusos canulados, miniplacas ou âncoras conforme o fragmento. Proteger o reparo capsulolabral e evitar rigidez com mobilidade passiva progressiva quando a fixação permitir.",
      figureId: "fratura-glenoide:step-fixacao",
      figureVariant: "ancoras",
      tips: ["Checar a amplitude passiva sem bloqueio mecânico"],
      pitfalls: ["Imobilização prolongada sem necessidade", "Não diagnosticar lesão associada do manguito ou do lábio glenoidal"],
    },
  ],
  postop: {
    immobilization: "Tipoia 3-6 semanas conforme estabilidade e reparo capsulolabral.",
    weightBearing: "Sem carga e sem esporte de contato até a consolidação; retorno progressivo após recuperar força e estabilidade.",
    rehab: [
      { window: "0-3 semanas", weightBearing: "Sem carga", focus: "Exercícios pendulares e mobilidade distal; proteger cápsula e lábio glenoidal." },
      { window: "3-8 semanas", weightBearing: "Sem carga", focus: "Amplitude passiva/ativa-assistida gradual." },
      { window: "8-16 semanas", weightBearing: "Progressiva", focus: "Força do manguito e da escápula e retorno funcional." },
    ],
    followup: "Radiografias e TC se houver dúvida sobre redução ou consolidação; vigiar subluxação e artrose.",
  },
  complications: [
    { name: "Instabilidade recorrente", detail: "Decorre de perda da rima não tratada ou reparo capsulolabral insuficiente.", prevention: "Medir a perda óssea e centrar a cabeça." },
    { name: "Artrose glenoumeral", detail: "Associada a degrau articular, condropatia e luxação.", prevention: "Redução anatômica da superfície de carga." },
    { name: "Lesão nervosa", detail: "Pode afetar os nervos supraescapular ou axilar, conforme a via.", prevention: "Conhecer as zonas seguras e limitar a retração." },
  ],
  evidence: [
    {
      id: "chalidis-2024-glenoid",
      claim: "Fixação assistida por artroscopia tem papel crescente em fraturas selecionadas da fossa/rima, preservando partes moles e permitindo avaliação intra-articular.",
      takeaway: "Boa opção para fragmentos acessíveis; não substitui a via aberta em padrões complexos da fossa ou do colo.",
      level: "IV",
      studyType: "Revisão narrativa contemporânea",
      era: "atual",
      citation: {
        authors: "Chalidis B, Papadopoulos PP, Papadopoulos P, Pitsilos C",
        title: "The Role of Arthroscopy in Contemporary Glenoid Fossa Fracture Fixation.",
        journal: "Diagnostics (Basel)",
        year: 2024,
        pmid: "38732322",
        doi: "10.3390/diagnostics14090908",
      },
    },
    {
      id: "dreizin-2026-shoulder-ct",
      claim: "A TC define a biomecânica, a classificação e os achados que mudam o manejo nas fraturas agudas da cintura escapular.",
      takeaway: "Na glenoide, reconstruções tomográficas em face e 3D devem orientar a indicação e a via.",
      level: "V",
      studyType: "Revisão radiológica",
      era: "atual",
      citation: {
        authors: "Dreizin D, Champ K, Dattwyler MP, Garzan AD, Edmond T",
        title: "CT of Acute Shoulder Girdle Fractures in Adults: Biomechanics, Classification, and Management.",
        journal: "Radiographics",
        year: 2026,
        pmid: "41379653",
        doi: "10.1148/rg.250025",
      },
    },
  ],
  pearls: [
    "A glenoide deve ser vista em face na TC, não só em cortes axiais.",
    "Rima pequena pode ser grande funcionalmente se a cabeça subluxa.",
    "SSSC com duas rupturas muda uma fratura aparentemente isolada.",
  ],
  pitfalls: [
    "Perder luxação posterior associada.",
    "Parafuso intra-articular.",
    "Tratar a rima óssea sem reparar o lábio glenoidal e a cápsula quando houver instabilidade.",
  ],
  figures: [
    {
      id: "fratura-glenoide:radiografia",
      caption: "Radiografia axial real mostrando fratura da glenoide esquerda.",
      alt: "Radiografia axial de fratura da glenoide esquerda",
      kind: "radiograph",
      source: {
        label: "Drahreg01 / Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Glenoidfraktur_axial.JPG",
        license: "CC BY-SA 3.0",
      },
    },
    { id: "fratura-glenoide:anatomia", caption: "Glenoide, lábio glenoidal e relação com a escápula.", alt: "Anatomia da glenoide" },
    { id: "fratura-glenoide:ideberg", variant: "i", caption: "Ideberg I: rima glenoidal.", alt: "Ideberg tipo I" },
    { id: "fratura-glenoide:ideberg", variant: "ii", caption: "Ideberg II: traço inferior/lateral.", alt: "Ideberg tipo II" },
    { id: "fratura-glenoide:ideberg", variant: "iv", caption: "Ideberg IV: traço medial/transverso.", alt: "Ideberg tipo IV" },
    { id: "fratura-glenoide:rima-instabilidade", variant: "anterior", caption: "Rima anterior e instabilidade.", alt: "Fratura da rima anterior da glenoide" },
    { id: "fratura-glenoide:sssc", caption: "Complexo suspensório superior do ombro.", alt: "SSSC da cintura escapular" },
    { id: "fratura-glenoide:via-anterior", caption: "Via anterior para rima anterior.", alt: "Via anterior da glenoide" },
    { id: "fratura-glenoide:via-posterior", caption: "Via posterior para fossa/rima posterior.", alt: "Via posterior da glenoide" },
    { id: "fratura-glenoide:step-fixacao", caption: "Redução e fixação da glenoide.", alt: "Fixação da glenoide" },
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
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), seção de fraturas da escápula e glenoide; redesenho original, não reprodução.",
  },
});
