import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-umero-fratura-umero-proximal",
  slug: "fratura-umero-proximal",
  regionId: "membro-superior",
  bone: "Úmero proximal",
  injury: "Fratura",
  title: "Fratura do úmero proximal",
  subtitle:
    "Equilibrar biologia, estabilidade medial e função do manguito: muitas fraturas do idoso vão melhor sem cirurgia do que com uma placa mal indicada.",
  laterality: null,
  status: "complete",
  overview:
    "Fraturas do úmero proximal são comuns no idoso osteoporótico e no adulto jovem após trauma de alta energia. A classificação de Neer descreve segmentos desviados (cabeça, tubérculo maior, tubérculo menor e diáfise), mas a decisão depende de idade fisiológica, demanda, qualidade óssea, tuberosidades, suporte medial e risco de isquemia da cabeça. Os ensaios PROFHER e NITEP mostraram que, para muitos adultos e idosos com fraturas deslocadas, a cirurgia não melhora consistentemente o resultado funcional em relação ao tratamento não operatório. Isso não elimina a cirurgia: fratura-luxação, fratura com divisão da cabeça, tubérculo maior muito desviado em paciente ativo, lesão aberta ou neurovascular e padrões reconstruíveis em pacientes selecionados ainda podem exigir intervenção. Quando operar, a técnica deve restaurar as tuberosidades e o suporte medial; quando a reconstrução não é viável no idoso, a artroplastia reversa ganha espaço.",
  keyFacts: [
    { label: "Classificação", value: "Neer: partes desviadas > 1 cm ou > 45 graus" },
    { label: "Prognóstico", value: "Suporte medial, extensão metafisária e tuberosidades" },
    { label: "Isquemia", value: "Hertel: extensão posteromedial < 8 mm, dobradiça medial > 2 mm e colo anatômico" },
    { label: "Evidência", value: "PROFHER e NITEP: cirurgia não superior para muitos idosos" },
    { label: "Placa", value: "Exige parafusos de calcar e suturas do manguito" },
    { label: "Reversa", value: "Idoso com três ou quatro partes, tuberosidades comprometidas ou cabeça inviável" },
  ],
  anatomy: {
    text:
      "Os quatro segmentos de Neer são cabeça articular, tubérculo maior, tubérculo menor e diáfise. O supraespinal e o infraespinal deslocam o tubérculo maior posterossuperiormente; o subescapular desloca o tubérculo menor medialmente. O suprimento da cabeça depende da rede formada pelas artérias circunflexas umerais anterior e posterior e pode ser comprometido pela perda da continuidade posteromedial. Extensão metafisária curta, cominuição medial e ruptura da dobradiça medial reduzem a perfusão potencial e a estabilidade contra o varo.",
    figureIds: ["fratura-umero-proximal:radiografia", "fratura-umero-proximal:anatomia"],
  },
  classification: [
    {
      id: "neer",
      name: "Neer",
      basis: "Número de segmentos desviados (> 1 cm ou > 45 graus).",
      types: [
        { code: "1", label: "Uma parte", description: "Sem segmento significativamente desviado; geralmente conservador.", figureId: "fratura-umero-proximal:neer", figureVariant: "1" },
        { code: "2", label: "Duas partes", description: "Colo cirúrgico ou tuberosidade isolada desviada.", figureId: "fratura-umero-proximal:neer", figureVariant: "2" },
        { code: "3", label: "Três partes", description: "Colo cirúrgico + uma tuberosidade; decisão por idade, demanda e qualidade óssea.", figureId: "fratura-umero-proximal:neer", figureVariant: "3" },
        { code: "4", label: "Quatro partes", description: "Cabeça isolada das tuberosidades e diáfise; maior risco de isquemia.", figureId: "fratura-umero-proximal:neer", figureVariant: "4" },
      ],
    },
    {
      id: "hertel",
      name: "Hertel — predição de isquemia",
      basis: "Padrões morfológicos associados à isquemia da cabeça umeral.",
      types: [
        { code: "favoravel", label: "Extensão ≥ 8 mm e dobradiça preservada", description: "Achados associados a menor risco de isquemia, sem comprovar perfusão normal.", figureId: "fratura-umero-proximal:hertel", figureVariant: "perfusao" },
        { code: "alto-risco", label: "Extensão < 8 mm ou dobradiça > 2 mm", description: "Preditores de isquemia; interpretar com o padrão do colo anatômico e o contexto clínico.", figureId: "fratura-umero-proximal:hertel", figureVariant: "isquemia" },
      ],
    },
  ],
  indications: {
    operative: [
      "Fratura-luxação, fratura com divisão da cabeça ou fragmento articular irreconstrutível.",
      "Tubérculo maior desviado com impacto funcional esperado, sobretudo paciente ativo.",
      "Fratura em três ou quatro partes em paciente funcional com padrão reconstruível e boa qualidade óssea.",
      "Lesão aberta, neurovascular ou politrauma em que a estabilização auxilia o cuidado global.",
      "Idoso com fratura complexa, tuberosidades comprometidas e baixa chance de osteossíntese durável: considerar artroplastia reversa.",
    ],
    nonOperative: [
      "Uma parte ou fraturas pouco desviadas.",
      "Muitos padrões de duas partes no idoso sem demanda alta, desde que a cabeça esteja centrada.",
      "Paciente com comorbidade ou osteoporose grave em que o risco cirúrgico supera o benefício.",
    ],
    decisionNotes:
      "O erro comum é tratar a classificação como indicação automática. PROFHER e NITEP tornam obrigatório justificar a cirurgia por algo além de 'fratura desviada': luxação, tuberosidade funcionalmente deslocada, paciente jovem e ativo, bloqueio mecânico ou padrão em que a cirurgia realmente muda o prognóstico. Se a opção for placa, a ausência de suporte medial e de suturas nas tuberosidades torna previsível a falha em varo.",
  },
  approaches: [
    {
      id: "deltopeitoral",
      name: "Deltopeitoral",
      indication: "Osteossíntese com placa, artroplastia e exposição anterior ampla.",
      interval: "Intervalo da veia cefálica entre o deltoide e o peitoral maior; preservar o deltoide e a vascularização das tuberosidades.",
      atRisk: ["Veia cefálica", "Nervo axilar distal", "Artérias circunflexas umerais anterior e posterior"],
      figureId: "fratura-umero-proximal:via-deltopeitoral",
    },
    {
      id: "deltoide-split",
      name: "Via anterolateral transdeltoidea",
      indication: "Placa lateral/minimamente invasiva e tubérculo maior selecionado.",
      interval: "Divisão controlada do deltoide, respeitando a zona de risco do nervo axilar.",
      atRisk: ["Nervo axilar a cerca de 5-7 cm do acrômio", "Ramo anterior do deltoide"],
      figureId: "fratura-umero-proximal:via-deltoide",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Decidir reconstrução versus tratamento funcional",
      detail:
        "Avaliar idade fisiológica, demanda, TC, tuberosidades, suporte medial, luxação e viabilidade da cabeça. Se não houver objetivo mecânico claro, o tratamento funcional é uma opção consistente no idoso.",
      figureId: "fratura-umero-proximal:hertel",
      figureVariant: "isquemia",
      tips: ["Use a TC para identificar divisão da cabeça e definir as tuberosidades", "Explique a expectativa de rigidez e dor tanto no tratamento conservador quanto no cirúrgico"],
      pitfalls: ["Operar idoso osteoporótico com placa sem suporte medial"],
    },
    {
      n: 2,
      title: "Controlar tuberosidades com suturas",
      detail:
        "Passar suturas fortes no manguito e nas tuberosidades antes da redução final; elas funcionam como alças de tração, auxiliam a redução biológica e protegem a placa ou a artroplastia reversa.",
      figureId: "fratura-umero-proximal:step-philos",
      tips: ["Suturas no supraespinal, infraespinal e subescapular auxiliam a redução tridimensional"],
      pitfalls: ["Ignorar tuberosidade maior e perder rotação externa"],
    },
    {
      n: 3,
      title: "Restaurar coluna medial e fixar placa",
      detail:
        "Reduzir a cabeça em valgo neutro, recuperar o suporte medial e posicionar a placa lateral baixa o suficiente para evitar impacto. Parafusos inferomediais de calcar sustentam a cabeça contra o colapso em varo.",
      figureId: "fratura-umero-proximal:step-philos",
      tips: ["Checar os parafusos em múltiplas rotações fluoroscópicas", "Não deixar a placa alta"],
      pitfalls: ["Penetração articular tardia por colapso", "Varo residual"],
    },
    {
      n: 4,
      title: "Artroplastia reversa quando a reconstrução não é confiável",
      detail:
        "No idoso com cabeça inviável, fratura em três ou quatro partes, tuberosidades comprometidas ou osteoporose, a artroplastia reversa permite elevação pelo deltoide. Ainda assim, a reinserção das tuberosidades pode melhorar a rotação.",
      figureId: "fratura-umero-proximal:step-reversa",
      tips: ["Buscar altura e versão corretas da haste", "Reinserir as tuberosidades quando possível"],
      pitfalls: ["Medializar ou baixar sem tensionamento adequado", "Abandonar tuberosidades reparáveis"],
    },
  ],
  postop: {
    immobilization: "Tipoia por 3-6 semanas conforme a estabilidade; artroplastia reversa e placa exigem proteção das tuberosidades.",
    weightBearing: "Sem carga inicialmente; fortalecimento após consolidação ou reparo.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Sem carga", focus: "Dor, edema, cotovelo, punho e mão; exercícios pendulares se liberados." },
      { window: "2-6 semanas", weightBearing: "Sem carga", focus: "Amplitude passiva/ativa-assistida protegida." },
      { window: "6-12 semanas", weightBearing: "Progressiva", focus: "Amplitude ativa e fortalecimento leve; vigiar a consolidação e as tuberosidades." },
    ],
    followup: "Radiografias seriadas; procurar colapso em varo, penetração de parafuso e migração das tuberosidades.",
  },
  complications: [
    { name: "Falha em varo", detail: "A perda de suporte medial favorece colapso em varo e perfuração articular pelos parafusos.", prevention: "Restaurar o suporte medial e usar parafusos inferomediais." },
    { name: "Rigidez", detail: "Comum no conservador e no pós-operatório.", prevention: "Reabilitação progressiva sem violar estabilidade." },
    { name: "Necrose avascular", detail: "O risco aumenta nas fraturas em quatro partes, nas fraturas-luxações e na presença de critérios de Hertel.", prevention: "Considerar artroplastia quando a reconstrução da cabeça não for viável." },
  ],
  evidence: [
    {
      id: "profher-2015",
      claim: "Em adultos com fraturas deslocadas do úmero proximal envolvendo o colo cirúrgico, a cirurgia não melhorou o resultado funcional em dois anos quando comparada ao tratamento não cirúrgico.",
      takeaway: "A indicação cirúrgica deve ser seletiva, especialmente no idoso.",
      level: "I",
      studyType: "Ensaio clínico randomizado pragmático",
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
      claim: "Em idosos com fraturas em três ou quatro partes, placa ou hemiartroplastia não superaram o tratamento não operatório no NITEP.",
      takeaway: "Mesmo fraturas complexas do idoso exigem indicação cirúrgica individual, não automática.",
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
    "Sem suporte medial, a placa lateral fica sobrecarregada e pode falhar.",
    "Tuberosidade maior e manguito influenciam mais a função do que uma redução apenas radiograficamente satisfatória.",
    "PROFHER e NITEP desaconselham a indicação cirúrgica automática no idoso.",
  ],
  pitfalls: [
    "Placa alta causando impacto subacromial.",
    "Parafuso longo na cabeça ou penetração tardia.",
    "Subestimar fratura-luxação ou divisão da cabeça na radiografia simples.",
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
    { id: "fratura-umero-proximal:anatomia", caption: "Segmentos de Neer e vascularização da cabeça.", alt: "Anatomia do úmero proximal" },
    { id: "fratura-umero-proximal:neer", variant: "2", caption: "Neer duas partes: colo cirúrgico.", alt: "Neer duas partes" },
    { id: "fratura-umero-proximal:neer", variant: "3", caption: "Neer três partes.", alt: "Neer três partes" },
    { id: "fratura-umero-proximal:neer", variant: "4", caption: "Neer quatro partes.", alt: "Neer quatro partes" },
    { id: "fratura-umero-proximal:hertel", variant: "isquemia", caption: "Critérios de Hertel de maior risco: extensão metafisária posteromedial curta e dobradiça medial desviada.", alt: "Preditores de isquemia da cabeça umeral segundo Hertel" },
    { id: "fratura-umero-proximal:via-deltopeitoral", caption: "Via deltopeitoral.", alt: "Via deltopeitoral do ombro" },
    { id: "fratura-umero-proximal:via-deltoide", caption: "Via anterolateral transdeltoidea e relação com o nervo axilar.", alt: "Via anterolateral transdeltoidea" },
    { id: "fratura-umero-proximal:step-philos", caption: "Placa bloqueada com suporte de calcar e suturas.", alt: "Fixação PHILOS do úmero proximal" },
    { id: "fratura-umero-proximal:step-reversa", caption: "Artroplastia reversa em fratura complexa do idoso.", alt: "Artroplastia reversa do ombro" },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
      "Hertel R, Hempfing A, Stiehler M, Leunig M. Predictors of humeral head ischemia after intracapsular fracture of the proximal humerus. J Shoulder Elbow Surg. 2004;13(4):427-433.",
    ],
    attribution: "Conteúdo original Revisortopedia; figuras esquemáticas originais.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), seção de fraturas do úmero proximal; redesenho original, não reprodução.",
  },
});
