import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-ombro-clavicula-fratura-glenoide",
  slug: "fratura-glenoide",
  regionId: "membro-superior",
  bone: "Glenoide/escapula",
  injury: "Fratura intra-articular",
  title: "Fratura da glenoide",
  subtitle:
    "Reconstruir a superfície glenoidal e o anel suspensório superior quando a estabilidade do ombro ou o arco articular estao comprometidos.",
  laterality: null,
  status: "complete",
  overview:
    "Fraturas da glenoide são raras e geralmente surgem em dois cenários: avulsão da rima associada a luxação do ombro (Bankart ósseo ou rima posterior) e fraturas de alta energia que atravéssam a fossa glenoidal/colo escapular. O tratamento depende de três perguntas: há instabilidade glenoumeral por perda de rima? há incongruência/degrau articular relevante na fossa? há dupla ruptura do complexo suspensório superior do ombro (SSSC), criando um 'ombro flutuante'? A TC com reconstrução 3D e indispensável para medir tamanho do fragmento, desvio, versão e trajetória do traço. Rimas pequenas estáveis podem ser tratadas conservadoramente; perdas grandes, fragmento deslocado, instabilidade recorrente ou fraturas transversas com degrau articular tendem a precisar de fixação aberta, percutanea ou assistida por artroscopia.",
  keyFacts: [
    { label: "Imagem", value: "TC com 3D para fossa, rima e colo escapular" },
    { label: "Classificação", value: "Ideberg modificada por Goss" },
    { label: "Rima anterior", value: "Relacionada a luxação anterior/Bankart ósseo" },
    { label: "Rima posterior", value: "Luxacao posterior, convulsao/choque ou trauma axial" },
    { label: "SSSC", value: "Dupla ruptura pode instabilizar a cintura escapular" },
    { label: "Meta cirúrgica", value: "Congruencia articular e ombro estável" },
  ],
  anatomy: {
    text:
      "A glenoide e uma cavidade rasa, com labrum aumentando a profundidade e capsula/ligamentos guiando a estabilidade. A rima anterior e vulnerável na luxação anterior; a posterior, na luxação posterior. A fossa glenoidal conecta-se ao corpo/colo da escapula, e a estabilidade da cintura depende do complexo suspensório superior do ombro: glenoide, coracoide, clavicula distal, AC, ligamentos CC e acromio. Duas lesões nesse anel podem produzir instabilidade mesmo que cada uma pareca moderada isoladamente.",
    figureIds: ["fratura-glenoide:radiografia", "fratura-glenoide:anatomia", "fratura-glenoide:sssc"],
  },
  classification: [
    {
      id: "ideberg-goss",
      name: "Ideberg modificada por Goss",
      basis: "Direcao do traço envolvendo rima/fossa glenoidal e extensao para escapula.",
      types: [
        { code: "I", label: "Rima", description: "Fratura da rima anterior ou posterior; comportamento dominado por instabilidade.", figureId: "fratura-glenoide:ideberg", figureVariant: "i" },
        { code: "II", label: "Inferior/lateral", description: "Traco pela fossa saindo lateral/inferior no corpo escapular.", figureId: "fratura-glenoide:ideberg", figureVariant: "ii" },
        { code: "III", label: "Superior", description: "Traco superior em direcao a base do coracoide.", figureId: "fratura-glenoide:ideberg", figureVariant: "iii" },
        { code: "IV", label: "Medial", description: "Traco transverso para borda medial da escapula.", figureId: "fratura-glenoide:ideberg", figureVariant: "iv" },
        { code: "V", label: "Combinada", description: "Combinacoes de II-IV, frequentemente alta energia.", figureId: "fratura-glenoide:ideberg", figureVariant: "v" },
        { code: "VI", label: "Cominutiva", description: "Cominuicao grave da superfície articular.", figureId: "fratura-glenoide:ideberg", figureVariant: "vi" },
      ],
    },
  ],
  indications: {
    operative: [
      "Fragmento de rima grande com instabilidade glenoumeral, subluxacao ou luxacao recorrente.",
      "Degrau/gap articular relevante da fossa glenoidal em paciente ativo.",
      "Desvio medial/lateral do colo escapular com perda do offset glenoumeral.",
      "Dupla ruptura do SSSC com instabilidade da cintura escapular.",
      "Fragmento intra-articular incarcerado ou bloqueio mecanico.",
    ],
    nonOperative: [
      "Rima pequena, ombro centrado e estável após redução.",
      "Fratura extra-articular/minimamente desviada sem instabilidade do SSSC.",
      "Paciente com baixa demanda ou risco cirúrgico alto.",
    ],
    decisionNotes:
      "Não há um unico numero universal para todos os fragmentos de rima; o que manda e instabilidade, subluxacao da cabeça e perda funcional da concavidade glenoidal. Para fossa/colo, degrau articular, medializacao e dupla lesão do SSSC aumentam indicação. A artroscopia pode auxiliar rimas e alguns fragmentos, mas fraturas complexas de fossa/colo ainda exigem planejamento aberto anterior, posterior ou combinado.",
  },
  approaches: [
    {
      id: "deltopeitoral",
      name: "Anterior deltopeitoral/subescapular",
      indication: "Rima anterior, Ideberg I anterior e alguns padrões com extensao anterior.",
      interval: "Intervalo deltopeitoral; manejo do subescapular/capsula conforme reparo da rima.",
      atRisk: ["Nervo musculocutaneo medial ao coracobraquial", "Nervo axilar inferior ao subescapular", "Cartilagem glenoidal"],
      figureId: "fratura-glenoide:via-anterior",
    },
    {
      id: "judet-posterior",
      name: "Posterior/Judet modificado",
      indication: "Rima posterior, fraturas da fossa com saida posterior/medial e colo escapular.",
      interval: "Entre infraespinal e redondo menor ou elevação muscular controlada conforme padrão.",
      atRisk: ["Nervo supraescapular na incisura/espinha", "Nervo axilar no quadrilatero", "Vascularizacao muscular posterior"],
      figureId: "fratura-glenoide:via-posterior",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Mapear fossa, rima e SSSC na TC",
      detail:
        "Reconstruir a glenoide em face, medir fragmento de rima, avaliar subluxacao da cabeça, degrau articular e dupla lesão do SSSC. Planejar parafuso/placa/ancora conforme vetor do traço.",
      figureId: "fratura-glenoide:sssc",
      tips: ["A reconstrução 3D em face da glenoide evita subestimar perda de rima"],
      pitfalls: ["Tratar apenas a clavícula/AC e ignorar dupla ruptura do SSSC"],
    },
    {
      n: 2,
      title: "Selecionar via pelo fragmento dominante",
      detail:
        "Rima anterior pede acesso anterior ou artroscopia; rima posterior e fraturas de fossa/colo geralmente pedem via posterior. Em padrões combinados, preparar estrategia sequencial.",
      figureId: "fratura-glenoide:rima-instabilidade",
      figureVariant: "anterior",
      tips: ["Escolher a via que oferece redução direta do degrau principal"],
      pitfalls: ["Tentar reduzir indiretamente fragmento articular rodado"],
    },
    {
      n: 3,
      title: "Reduzir superfície e centrar a cabeça",
      detail:
        "Remover interposição, reduzir fragmento ao labrum/cortical e confirmar que a cabeça esta centrada. Em rimas, restaurar labrum/capsula e concavidade; em fossa, comprimir perpendicularmente ao traço.",
      figureId: "fratura-glenoide:step-fixacao",
      tips: ["Controle fluoroscopico e, quando artroscopico, visao direta da cartilagem"],
      pitfalls: ["Parafuso intra-articular", "Fixar rima baixa demais e manter instabilidade"],
    },
    {
      n: 4,
      title: "Fixar com estabilidade suficiente para mobilidade precoce",
      detail:
        "Usar parafusos canulados, mini-placas ou ancoras conforme fragmento. Proteger reparo capsulolabral e evitar rigidez com mobilidade passiva progressiva quando a fixação permitir.",
      figureId: "fratura-glenoide:step-fixacao",
      figureVariant: "ancoras",
      tips: ["Checar amplitude passiva sem bloqueio mecanico"],
      pitfalls: ["Imobilizacao prolongada sem necessidade", "Não diagnosticar lesão associada do manguito/labrum"],
    },
  ],
  postop: {
    immobilization: "Tipoia 3-6 semanas conforme estabilidade e reparo capsulolabral.",
    weightBearing: "Sem carga e sem esporte de contato até consolidação; retorno progressivo após forca e estabilidade.",
    rehab: [
      { window: "0-3 semanas", weightBearing: "Sem carga", focus: "Pendulares e mobilidade distal; proteger capsula/labrum." },
      { window: "3-8 semanas", weightBearing: "Sem carga", focus: "Amplitude passiva/ativa-assistida gradual." },
      { window: "8-16 semanas", weightBearing: "Progressiva", focus: "Forca de manguito/escapula e retorno funcional." },
    ],
    followup: "Radiografias/TC se duvida de redução ou consolidação; vigiar subluxacao e artrose.",
  },
  complications: [
    { name: "Instabilidade recorrente", detail: "Por perda de rima não tratada ou reparo capsulolabral insuficiente.", prevention: "Medir perda ossea e centrar a cabeça." },
    { name: "Artrose glenoumeral", detail: "Associada a degrau articular, condropatia e luxacao.", prevention: "Redução anatômica da superfície de carga." },
    { name: "Lesao nervosa", detail: "Supraescapular/axilar conforme via.", prevention: "Conhecer zonas seguras e limitar retracao." },
  ],
  evidence: [
    {
      id: "chalidis-2024-glenoid",
      claim: "Fixação assistida por artroscopia tem papel crescente em fraturas selecionadas da fossa/rima, preservando partes moles e permitindo avaliação intra-articular.",
      takeaway: "Boa opcao para fragmentos acessiveis; não substitui via aberta em padrões complexos de fossa/colo.",
      level: "IV",
      studyType: "Revisao narrativa contemporanea",
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
      claim: "A TC define biomecanica, classificação e achados que mudam manejo nas fraturas agudas da cintura escapular.",
      takeaway: "Em glenoide, TC em face e 3D deve dirigir indicação e via.",
      level: "V",
      studyType: "Revisao radiologica",
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
    "A glenoide deve ser vista em face na TC, não so em cortes axiais.",
    "Rima pequena pode ser grande funcionalmente se a cabeça subluxa.",
    "SSSC com duas rupturas muda uma fratura aparentemente isolada.",
  ],
  pitfalls: [
    "Perder luxacao posterior associada.",
    "Parafuso intra-articular.",
    "Tratar rima ossea sem reparar labrum/capsula quando instável.",
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
    { id: "fratura-glenoide:anatomia", caption: "Glenoide, labrum e relação com escapula.", alt: "Anatomia da glenoide" },
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
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Titulo de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
    ],
    attribution: "Conteudo original Revisortopedia; figuras esquematicas originais.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), seção de fraturas da escápula e glenoide; redesenho original, não reprodução.",
  },
});
