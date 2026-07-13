import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-umero-fratura-umero-proximal",
  slug: "fratura-umero-proximal",
  regionId: "membro-superior",
  bone: "Úmero proximal",
  injury: "Fratura",
  title: "Fratura do úmero proximal",
  subtitle:
    "Equilibrar biologia, estabilidade medial e função do manguito: muitas fraturas do idoso vao melhor sem cirurgia do que com uma placa mal indicada.",
  laterality: null,
  status: "complete",
  overview:
    "Fraturas do úmero proximal são comuns no idoso osteoporotico e no adulto jovem após alta energia. A classificação de Neer descreve segmentos desviados (cabeça, tubérculo maior, tubérculo menor e diáfise), mas a decisão real depende de idade fisiologica, demanda, qualidade ossea, tuberosidades, suporte medial/calcar e risco de isquemia da cabeça. Ensaios randomizados fortes (PROFHER e NITEP) mostraram que, para muitos adultos e idosos com fraturas deslocadas, cirurgia não melhora consistentemente o resultado funcional sobre tratamento não operatório. Isso não elimina a cirurgia: fratura-luxacao, cabeça dividida, tuberosidade maior muito desviada em paciente ativo, lesão aberta/neurovascular e padrões reconstrutiveis em pacientes selecionados ainda pedem intervenção. Quando operar, a técnica deve restaurar tuberosidades e coluna medial; quando a cabeça e inviável no idoso, a artroplastia reversa ganha espaço.",
  keyFacts: [
    { label: "Classificação", value: "Neer: partes desviadas > 1 cm ou > 45 graus" },
    { label: "Prognostico", value: "Suporte medial/calcar e tuberosidades" },
    { label: "Isquemia", value: "Hertel: calcar curto, charneira medial rota, cabeça dividida" },
    { label: "Evidência", value: "PROFHER/NITEP: cirurgia não superior para muitos idosos" },
    { label: "Placa", value: "Exige parafusos de calcar + suturas do manguito" },
    { label: "Reversa", value: "Idoso com 3-4 partes, tuberosidades ruins ou cabeça inviável" },
  ],
  anatomy: {
    text:
      "Os quatro segmentos de Neer são cabeça articular, tubérculo maior, tubérculo menor e diáfise. O manguito puxa as tuberosidades: supra/infraespinal deslocam o tubérculo maior posterossuperiormente, subescapular puxa o menor medialmente. O suprimento da cabeça vem de rede anterior/posterior, com importância da artéria arqueada e da charneira medial. Perda do calcar medial, cominuicao metafisaria e ruptura da charneira reduzem perfusão e estabilidade em varo.",
    figureIds: ["fratura-umero-proximal:radiografia", "fratura-umero-proximal:anatomia"],
  },
  classification: [
    {
      id: "neer",
      name: "Neer",
      basis: "Numero de segmentos desviados (> 1 cm ou > 45 graus).",
      types: [
        { code: "1", label: "Uma parte", description: "Sem segmento significativamente desviado; geralmente conservador.", figureId: "fratura-umero-proximal:neer", figureVariant: "1" },
        { code: "2", label: "Duas partes", description: "Colo cirúrgico ou tuberosidade isolada desviada.", figureId: "fratura-umero-proximal:neer", figureVariant: "2" },
        { code: "3", label: "Tres partes", description: "Colo cirúrgico + uma tuberosidade; decisão por idade, demanda e osso.", figureId: "fratura-umero-proximal:neer", figureVariant: "3" },
        { code: "4", label: "Quatro partes", description: "Cabeça isolada das tuberosidades e diáfise; maior risco de isquemia.", figureId: "fratura-umero-proximal:neer", figureVariant: "4" },
      ],
    },
    {
      id: "hertel",
      name: "Hertel — predicao de isquemia",
      basis: "Padroes que ameaçam perfusão da cabeça umeral.",
      types: [
        { code: "favoravel", label: "Calcar longo/charneira integra", description: "Melhor chance de perfusão e reconstrução.", figureId: "fratura-umero-proximal:hertel", figureVariant: "perfusao" },
        { code: "alto-risco", label: "Calcar < 8 mm ou charneira rota", description: "Risco de necrose; considerar artroplastia no idoso.", figureId: "fratura-umero-proximal:hertel", figureVariant: "isquemia" },
      ],
    },
  ],
  indications: {
    operative: [
      "Fratura-luxacao, cabeça dividida (head-split) ou fragmento articular irreconstrutível.",
      "Tubérculo maior desviado com impacto funcional esperado, sobretudo paciente ativo.",
      "Fratura 3-4 partes em paciente funcional com padrão reconstrutivel e boa qualidade ossea.",
      "Lesao aberta, neurovascular ou politrauma em que estabilizacao ajuda cuidado global.",
      "Idoso com fratura complexa, tuberosidades comprometidas e baixa chance de osteossintese duravel: considerar reversa.",
    ],
    nonOperative: [
      "Uma parte ou fraturas pouco desviadas.",
      "Muitos padrões de 2 partes no idoso sem demanda alta, desde que cabeça esteja centrada.",
      "Paciente com comorbidade/osteoporose grave em que risco cirúrgico supera beneficio.",
    ],
    decisionNotes:
      "O erro comum e tratar a classificação como indicação automatica. PROFHER e NITEP tornam obrigatorio justificar a cirurgia por algo alem de 'fratura desviada': luxacao, tuberosidade funcionalmente deslocada, paciente jovem/ativo, bloqueio mecanico ou padrão em que a cirurgia realmente muda o prognostico. Se a opcao for placa, sem suporte medial e suturas de tuberosidade a falha em varo e previsivel.",
  },
  approaches: [
    {
      id: "deltopeitoral",
      name: "Deltopeitoral",
      indication: "Osteossintese com placa, artroplastia e exposição ampla anterior.",
      interval: "Intervalo cefalica entre deltoide e peitoral; preservar deltoide e vascularizacao das tuberosidades.",
      atRisk: ["Veia cefalica", "Nervo axilar distal", "Arteria circunflexa umeral anterior/posterior"],
      figureId: "fratura-umero-proximal:via-deltopeitoral",
    },
    {
      id: "deltoide-split",
      name: "Deltoide split anterolateral",
      indication: "Placa lateral/minimamente invasiva e tubérculo maior selecionado.",
      interval: "Divisao controlada do deltoide, respeitando zona segura do nervo axilar.",
      atRisk: ["Nervo axilar a cerca de 5-7 cm do acromio", "Ramo anterior do deltoide"],
      figureId: "fratura-umero-proximal:via-deltoide",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Decidir reconstrução versus tratamento funcional",
      detail:
        "Avaliar idade fisiologica, demanda, TC, tuberosidades, calcar medial, luxacao e viabilidade da cabeça. Se não houver objetivo mecanico claro, tratamento funcional e padrão forte no idoso.",
      figureId: "fratura-umero-proximal:hertel",
      figureVariant: "isquemia",
      tips: ["Use a TC para head-split e tuberosidades", "Explique expectativa de rigidez/dor no conservador e no cirúrgico"],
      pitfalls: ["Operar idoso osteoporotico com placa sem suporte medial"],
    },
    {
      n: 2,
      title: "Controlar tuberosidades com suturas",
      detail:
        "Passar suturas fortes no manguito/tuberosidades antes da redução final; elas são joystick, redução biológica e proteção da placa ou da reversa.",
      figureId: "fratura-umero-proximal:step-philos",
      tips: ["Suturas supra/infra/subescapular ajudam redução tridimensional"],
      pitfalls: ["Ignorar tuberosidade maior e perder rotação externa"],
    },
    {
      n: 3,
      title: "Restaurar coluna medial e fixar placa",
      detail:
        "Reduzir cabeça em valgo neutro, recuperar calcar e posicionar placa lateral baixa o suficiente para evitar impacto. Parafusos inferomediais de calcar sustentam a cabeça contra colapso em varo.",
      figureId: "fratura-umero-proximal:step-philos",
      tips: ["Checar parafusos em multiplas rotacoes fluoroscopicas", "Não deixar placa alta"],
      pitfalls: ["Penetracao articular tardia por colapso", "Varo residual"],
    },
    {
      n: 4,
      title: "Artroplastia reversa quando a reconstrução não e confiável",
      detail:
        "No idoso com cabeça inviável, 3-4 partes com tuberosidades ruins ou osteoporose, reversa permite elevar pelo deltoide. Ainda assim, reinsercao das tuberosidades melhora rotação.",
      figureId: "fratura-umero-proximal:step-reversa",
      tips: ["Buscar altura/versão correta da haste", "Reinserir tuberosidades quando possível"],
      pitfalls: ["Medializar/baixar sem tensionamento adequado", "Abandonar tuberosidades reparaveis"],
    },
  ],
  postop: {
    immobilization: "Tipoia 3-6 semanas conforme estabilidade; reversa e placa seguem proteção de tuberosidades.",
    weightBearing: "Sem carga inicialmente; fortalecimento após consolidação/reparo.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Sem carga", focus: "Dor, edema, cotovelo/punho/mao e pendulares se liberado." },
      { window: "2-6 semanas", weightBearing: "Sem carga", focus: "Amplitude passiva/ativa-assistida protegida." },
      { window: "6-12 semanas", weightBearing: "Progressiva", focus: "Amplitude ativa e fortalecimento leve; vigiar consolidação/tuberosidades." },
    ],
    followup: "Radiografias seriadas; procurar colapso em varo, penetração de parafuso e migracao de tuberosidade.",
  },
  complications: [
    { name: "Falha em varo", detail: "Perda de suporte medial leva colapso e cut-out.", prevention: "Reduzir calcar e usar parafusos inferomediais." },
    { name: "Rigidez", detail: "Comum no conservador e no pós-operatório.", prevention: "Reabilitação progressiva sem violar estabilidade." },
    { name: "Necrose avascular", detail: "Maior em 4 partes, fratura-luxacao e sinais de Hertel.", prevention: "Selecionar artroplastia quando cabeça inviável." },
  ],
  evidence: [
    {
      id: "profher-2015",
      claim: "Em adultos com fraturas deslocadas do úmero proximal envolvendo colo cirúrgico, cirurgia não melhorou resultado funcional em 2 anos versus tratamento não cirúrgico.",
      takeaway: "A indicação cirúrgica deve ser seletiva, especialmente no idoso.",
      level: "I",
      studyType: "Ensaio clínico randomizado pragmatico",
      era: "classico",
      citation: {
        authors: "Rangan A, Handoll H, Brealey S, Jefferson L, Keding A, Martin BC, et al.",
        title: "Surgical vs nonsurgical treatment of adults with displaced fractures of the proximal humerus: the PROFHER randomized clinical trial.",
        journal: "JAMA",
        year: 2015,
        pmid: "25756440",
        doi: "10.1001/jama.2015.1629",
      },
    },
    {
      id: "nitep-2023",
      claim: "Em idosos com fraturas 3-4 partes, placa ou hemiartroplastia não superaram tratamento não operatório no NITEP.",
      takeaway: "Mesmo fraturas complexas do idoso exigem indicação cirúrgica individual, não automatica.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico",
      era: "atual",
      citation: {
        authors: "Launonen AP, Sumrein BO, Reito A, Lepola V, Paloneva J, Berg HE, et al.",
        title: "Surgery with locking plate or hemiarthroplasty versus nonoperative treatment of 3-4-part proximal humerus fractures in older patients (NITEP): An open-label randomized trial.",
        journal: "PLoS Med",
        year: 2023,
        pmid: "38015877",
        doi: "10.1371/journal.pmed.1004308",
      },
    },
  ],
  pearls: [
    "Sem calcar medial, a placa lateral trabalha sozinha e falha.",
    "Tuberosidade maior e manguito determinam função mais que a radiografia bonita.",
    "PROFHER/NITEP são freio para cirurgia reflexa no idoso.",
  ],
  pitfalls: [
    "Placa alta causando impacto subacromial.",
    "Parafuso longo na cabeça ou penetração tardia.",
    "Subestimar fratura-luxacao/head-split na radiografia simples.",
  ],
  figures: [
    {
      id: "fratura-umero-proximal:radiografia",
      caption: "Radiografia real de fratura complexa do úmero proximal em múltiplas partes.",
      alt: "Radiografia de fratura complexa do úmero proximal",
      kind: "radiograph",
      source: {
        label: "Mattiassich et al. / Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:X-ray_of_complex_fracture_of_proximal_humerus.jpg",
        license: "CC BY 2.0",
      },
    },
    { id: "fratura-umero-proximal:anatomia", caption: "Segmentos de Neer e vascularizacao da cabeça.", alt: "Anatomia do úmero proximal" },
    { id: "fratura-umero-proximal:neer", variant: "2", caption: "Neer duas partes: colo cirúrgico.", alt: "Neer duas partes" },
    { id: "fratura-umero-proximal:neer", variant: "3", caption: "Neer três partes.", alt: "Neer três partes" },
    { id: "fratura-umero-proximal:neer", variant: "4", caption: "Neer quatro partes.", alt: "Neer quatro partes" },
    { id: "fratura-umero-proximal:hertel", variant: "isquemia", caption: "Hertel de alto risco: calcar curto e charneira rota.", alt: "Preditores de isquemia de Hertel" },
    { id: "fratura-umero-proximal:via-deltopeitoral", caption: "Via deltopeitoral.", alt: "Via deltopeitoral do ombro" },
    { id: "fratura-umero-proximal:via-deltoide", caption: "Via deltoide split e nervo axilar.", alt: "Via anterolateral deltoide split" },
    { id: "fratura-umero-proximal:step-philos", caption: "Placa bloqueada com suporte de calcar e suturas.", alt: "Fixação PHILOS do úmero proximal" },
    { id: "fratura-umero-proximal:step-reversa", caption: "Artroplastia reversa em fratura complexa do idoso.", alt: "Artroplastia reversa do ombro" },
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
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), seção de fraturas do úmero proximal; redesenho original, não reprodução.",
  },
});
