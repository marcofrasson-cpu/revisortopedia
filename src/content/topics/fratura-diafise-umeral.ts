import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-umero-diafise",
  slug: "fratura-diafise-umeral",
  regionId: "membro-superior",
  bone: "Úmero",
  injury: "Fratura diafisária",
  title: "Fratura da diáfise umeral",
  subtitle:
    "A maioria consolida com órtese funcional; a decisão gira em torno da pseudartrose, do nervo radial e do perfil do paciente.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura da diáfise umeral representa cerca de 3% a 5% de todas as fraturas e tem distribuição bimodal — trauma de alta energia no jovem e queda de baixa energia no idoso osteoporótico. O úmero tolera bem desvios moderados porque o ombro e o cotovelo compensam pequenas deformidades e não há carga axial obrigatória, o que sustenta o tratamento não cirúrgico na maioria dos casos isolados e fechados.\n\nHistoricamente, a órtese funcional de Sarmiento é o padrão, com altas taxas de consolidação. Contudo, o tratamento não operatório carrega maior tempo até a união e maior risco de pseudartrose, o que explica a tendência crescente à fixação em pacientes selecionados. O nervo radial, que cruza a face posterior no sulco espiral, é a estrutura-chave em todas as decisões — desde a paralisia primária até o risco iatrogênico na cirurgia.",

  keyFacts: [
    { label: "Tratamento padrão", value: "Órtese funcional de Sarmiento" },
    { label: "Nervo em risco", value: "Radial (sulco espiral)" },
    { label: "Pseudartrose não-op", value: "≈ 15–18%" },
    { label: "Critérios de aceitação", value: "< 20° AP · < 30° varo/valgo · < 3 cm encurtamento" },
    { label: "Padrão especial", value: "Holstein-Lewis (espiral do 1/3 distal)" },
    { label: "Fixação", value: "Placa (padrão-ouro) ou haste intramedular" },
  ],

  anatomy: {
    text:
      "A diáfise vai da borda superior da inserção do peitoral maior até a crista supracondilar. O deltoide, o peitoral maior e o coracobraquial determinam padrões de desvio conforme o nível do traço em relação às suas inserções.\n\nO nervo radial é a referência anatômica central: acompanha a face posterior no sulco espiral com a artéria braquial profunda, perfura o septo intermuscular lateral cerca de 10 cm proximal ao epicôndilo lateral e passa a ser anterior no terço distal, entre o braquial e o braquiorradial. Essa transição explica por que a fratura espiral do terço distal (Holstein-Lewis) e o acesso cirúrgico distal colocam o radial sob risco. A artéria braquial corre medial e anterior.",
    figureIds: ["fratura-diafise-umeral:anatomia", "fratura-diafise-umeral:holstein-lewis"],
  },

  classification: [
    {
      id: "ao-ota-12",
      name: "AO/OTA 12",
      basis: "Morfologia do traço diafisário",
      note: "Segmento 12 (diáfise do úmero): A traço simples, B em cunha, C complexa/segmentar.",
      types: [
        {
          code: "12-A",
          label: "Simples",
          description: "Traço único (espiral, oblíquo ou transverso), sem terceiro fragmento com contato cortical.",
          figureId: "fratura-diafise-umeral:ao",
          figureVariant: "A",
        },
        {
          code: "12-B",
          label: "Em cunha",
          description: "Terceiro fragmento em cunha, mantendo contato cortical após a redução.",
          figureId: "fratura-diafise-umeral:ao",
          figureVariant: "B",
        },
        {
          code: "12-C",
          label: "Complexa",
          description: "Cominução ou padrão segmentar, sem contato entre os fragmentos principais.",
          figureId: "fratura-diafise-umeral:ao",
          figureVariant: "C",
        },
      ],
    },
    {
      id: "padroes",
      name: "Padrões de interesse",
      basis: "Localização e relação com o nervo radial",
      types: [
        {
          code: "Holstein-Lewis",
          label: "Espiral do terço distal",
          description:
            "Fratura espiral do terço distal com desvio que pode aprisionar ou tracionar o nervo radial — associada a maior frequência de paralisia radial.",
          figureId: "fratura-diafise-umeral:holstein-lewis",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Fratura exposta",
      "Lesão vascular associada",
      "Politraumatizado, membro flutuante (cotovelo flutuante) ou fraturas bilaterais",
      "Falha em manter os critérios de redução aceitáveis na órtese",
      "Paralisia do nervo radial que surge APÓS a manipulação/redução fechada",
      "Fratura patológica, extensão intra-articular ou lesão do plexo braquial",
      "Situações sociais/anatômicas que inviabilizam a órtese (ex.: obesidade importante, não adesão)",
    ],
    nonOperative: [
      "Maioria das fraturas isoladas e fechadas da diáfise",
      "Órtese funcional de Sarmiento após breve imobilização inicial (tala em U/coaptação)",
      "Paralisia radial PRIMÁRIA (presente já ao trauma) — conduta expectante",
    ],
    decisionNotes:
      "Critérios clássicos de aceitação: até 20° de angulação anteroposterior, até 30° de varo/valgo e menos de 3 cm de encurtamento — o membro superior tolera essas deformidades sem prejuízo funcional relevante. A paralisia radial primária é observada (recuperação espontânea na grande maioria em 3–4 meses); a paralisia que aparece após a redução fechada favorece a exploração/fixação.",
  },

  approaches: [
    {
      id: "anterolateral",
      name: "Via anterolateral",
      indication: "Fraturas do terço médio e proximal; extensível.",
      interval: "Proximal entre bíceps e braquial; distal entre braquial e braquiorradial",
      atRisk: ["Nervo radial (distal)", "Nervo musculocutâneo", "Artéria braquial"],
      figureId: "fratura-diafise-umeral:via-anterolateral",
    },
    {
      id: "posterior",
      name: "Via posterior",
      indication: "Fraturas do terço médio-distal; boa exposição para placa.",
      interval: "Paratricipital ou trans-tríceps; identificar o nervo radial no sulco",
      atRisk: ["Nervo radial (sulco espiral)", "Nervo ulnar (distal)", "Artéria braquial profunda"],
      figureId: "fratura-diafise-umeral:via-posterior",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Planejamento e decisão",
      detail:
        "Definir órtese funcional vs fixação conforme padrão, partes moles e paciente. Se cirúrgico, escolher placa (padrão-ouro, permite compressão) ou haste intramedular bloqueada. Posicionar em decúbito conforme a via.",
      figureId: "fratura-diafise-umeral:brace-sarmiento",
      tips: ["No não-operatório, trocar a tala em U pela órtese funcional em ~1–2 semanas."],
      pitfalls: ["Não iniciar carga axial no membro; evitar apoio no cotovelo."],
    },
    {
      n: 2,
      title: "Redução e alinhamento",
      detail:
        "Restaurar comprimento, eixo e rotação. Na órtese, a gravidade e a contração muscular auxiliam o alinhamento com o paciente sentado/em pé.",
      figureId: "fratura-diafise-umeral:step-reducao",
      tips: ["Radiografias seriadas nas 2 primeiras semanas para flagrar perda de redução cedo."],
      pitfalls: ["Varo é a deformidade residual mais comum na órtese."],
    },
    {
      n: 3,
      title: "Exposição e proteção do nervo radial",
      detail:
        "Na via posterior, identificar e proteger o nervo radial no sulco espiral antes de aplicar o implante. Na anterolateral distal, o radial cruza entre braquial e braquiorradial.",
      figureId: "fratura-diafise-umeral:via-posterior",
      tips: ["Documentar a função do radial antes e depois — sempre."],
      pitfalls: ["Tração ou compressão inadvertida do radial pela placa/afastador."],
    },
    {
      n: 4,
      title: "Fixação com placa (ORIF ou MIPO)",
      detail:
        "Placa de compressão com pelo menos 6–8 corticais por fragmento; em cominução, placa em ponte (osteossíntese minimamente invasiva) preservando o envelope biológico.",
      figureId: "fratura-diafise-umeral:step-placa",
      tips: ["A MIPO em ponte reduz a exposição e a manipulação direta do radial no médio-terço."],
      pitfalls: ["Fixação insuficiente ou compressão excessiva em osso osteoporótico."],
    },
    {
      n: 5,
      title: "Alternativa: haste intramedular bloqueada",
      detail:
        "Haste anterógrada bloqueada em fraturas segmentares, patológicas ou osso de má qualidade. Cuidar do manguito rotador no ponto de entrada.",
      figureId: "fratura-diafise-umeral:step-haste",
      tips: ["Sepultar a haste abaixo da cartilagem para reduzir impacto subacromial."],
      pitfalls: ["Dor/impacto no ombro e reintervenção são desvantagens típicas da haste."],
    },
    {
      n: 6,
      title: "Checagem e fechamento",
      detail:
        "Confirmar redução, comprimento e rotação sob fluoroscopia, testar estabilidade e reavaliar a função do nervo radial antes do fechamento por planos.",
      figureId: "fratura-diafise-umeral:step-placa",
      tips: ["Reabilitação precoce de ombro e cotovelo assim que a fixação for estável."],
      pitfalls: ["Deixar de reavaliar o radial no pós-operatório imediato."],
    },
  ],

  postop: {
    immobilization:
      "Tipoia para conforto; órtese funcional mantida por 8–12 semanas no tratamento não cirúrgico. Após fixação estável, imobilização mínima.",
    weightBearing:
      "Sem carga axial no membro superior. Mobilização precoce de punho, cotovelo e ombro conforme a estabilidade.",
    rehab: [
      { window: "0–2 sem", weightBearing: "Sem carga", focus: "Tala/órtese, controle da dor, movimento de dedos e punho" },
      { window: "2–6 sem", weightBearing: "Sem carga", focus: "Pendulares, ADM ativa assistida de cotovelo e ombro" },
      { window: "6–12 sem", weightBearing: "Sem carga axial", focus: "ADM ativa plena, início de fortalecimento leve conforme consolidação" },
      { window: "> 12 sem", weightBearing: "Progressiva", focus: "Fortalecimento e retorno funcional após sinais de união" },
    ],
    followup:
      "Radiografias seriadas até sinais de consolidação (habitualmente 8–12 semanas). Pseudartrose estabelecida é tratada com placa de compressão e enxerto.",
  },

  complications: [
    {
      name: "Pseudartrose",
      detail:
        "Mais comum no tratamento não operatório (≈ 15–18%), sobretudo em fraturas transversas do terço médio, obesidade e tabagismo.",
      prevention: "Selecionar candidatos à órtese; converter cedo se não mantiver critérios; placa + enxerto na pseudartrose.",
    },
    {
      name: "Paralisia do nervo radial",
      detail:
        "Primária (ao trauma) na maioria com recuperação espontânea; a iatrogênica/secundária exige documentação e, às vezes, exploração.",
      prevention: "Exame neurológico documentado antes e depois de qualquer manobra; proteger o radial na via posterior.",
    },
    { name: "Infecção", detail: "Mais frequente após fixação aberta do que na órtese.", prevention: "Técnica asséptica, MIPO quando possível, cobertura antibiótica." },
    { name: "Má-união (varo)", detail: "Deformidade residual, geralmente bem tolerada funcionalmente.", prevention: "Vigilância radiográfica precoce na órtese." },
    { name: "Impacto subacromial", detail: "Dor no ombro após haste anterógrada, podendo exigir reintervenção.", prevention: "Ponto de entrada e sepultamento adequados da haste." },
    { name: "Rigidez", detail: "De ombro e cotovelo por imobilização prolongada.", prevention: "Reabilitação precoce." },
  ],

  evidence: [
    {
      id: "sargeant-2019",
      claim:
        "Meta-análise op vs não-op: a órtese funcional tem pseudartrose de 17,6% vs 6,3% da fixação; a cirurgia tem mais lesão nervosa iatrogênica (3,4%) e infecção (3,7%). Todas as pseudartroses consolidaram após placa.",
      takeaway: "A maioria pode ser tratada com órtese; a pseudartrose resultante resolve bem com placa.",
      level: "I",
      studyType: "Revisão sistemática e meta-análise",
      era: "atual",
      citation: {
        authors: "Sargeant HW, Farrow L, Barker S, Kumar K",
        title: "Operative versus non-operative treatment of humeral shaft fractures: A systematic review",
        journal: "Shoulder Elbow",
        year: 2019,
        pmid: "32788928",
        doi: "10.1177/1758573218825477",
        url: "https://doi.org/10.1177/1758573218825477",
      },
    },
    {
      id: "matsunaga-2017",
      claim:
        "RCT (n=110): placa em ponte (MIPO) vs órtese funcional — DASH melhor aos 6 meses (benefício clínico incerto), pseudartrose 0% vs 15% e menor desvio angular residual na incidência AP.",
      takeaway: "A fixação melhora união e desvio; o ganho funcional sobre a órtese é modesto.",
      level: "I",
      studyType: "Ensaio clínico randomizado",
      era: "atual",
      citation: {
        authors: "Matsunaga FT, Tamaoki MJS, Matsumoto MH, Netto NA, Faloppa F, Belloti JC",
        title:
          "Minimally Invasive Osteosynthesis with a Bridge Plate Versus a Functional Brace for Humeral Shaft Fractures: A Randomized Controlled Trial",
        journal: "J Bone Joint Surg Am",
        year: 2017,
        pmid: "28375891",
        doi: "10.2106/JBJS.16.00628",
        url: "https://doi.org/10.2106/JBJS.16.00628",
      },
    },
    {
      id: "beeres-2021",
      claim:
        "Meta-análise placa vs haste: a haste tem menor infecção, menor paralisia radial pós-operatória e menor tempo cirúrgico, porém mais impacto/reintervenção no ombro; quase todas as paralisias radiais recuperam espontaneamente.",
      takeaway: "Placa e haste alcançam bons resultados; a escolha pondera radial/infecção vs ombro.",
      level: "I",
      studyType: "Meta-análise (RCTs + observacionais)",
      era: "atual",
      citation: {
        authors: "Beeres FJP, van Veelen N, Houwert RM, et al.",
        title:
          "Open plate fixation versus nailing for humeral shaft fractures: a meta-analysis and systematic review of randomised clinical trials and observational studies",
        journal: "Eur J Trauma Emerg Surg",
        year: 2021,
        pmid: "34219193",
        doi: "10.1007/s00068-021-01728-7",
        url: "https://doi.org/10.1007/s00068-021-01728-7",
      },
    },
    {
      id: "amer-2022",
      claim:
        "Meta-análise haste vs placa: sem diferença de pseudartrose; a placa teve união mais rápida porém maior paralisia radial (10,8% vs 0%). Ambos os métodos têm efeito de tratamento semelhante.",
      takeaway: "Nenhuma técnica é claramente superior; o radial pesa a favor da haste em traços elegíveis.",
      level: "I",
      studyType: "Revisão sistemática e meta-análise",
      era: "atual",
      citation: {
        authors: "Amer KM, Kurland AM, Smith B, Abdo Z, Amer R, Vosbikian MM, Ahmed IH",
        title: "Intramedullary Nailing Versus Plate Fixation for Humeral Shaft Fractures: A Systematic Review and Meta-Analysis",
        journal: "Arch Bone Jt Surg",
        year: 2022,
        pmid: "36258745",
        doi: "10.22038/ABJS.2021.59413.2947",
        url: "https://doi.org/10.22038/ABJS.2021.59413.2947",
      },
    },
    {
      id: "franssen-2024",
      claim:
        "Protocolo do HUSH, RCT multicêntrico em curso comparando órtese funcional vs fixação cirúrgica (desfecho primário DASH), desenhado para dirimir a controvérsia com dados de alto nível.",
      takeaway: "A controvérsia órtese vs cirurgia segue ativa; ensaios pragmáticos devem refiná-la.",
      level: "II",
      studyType: "Protocolo de RCT multicêntrico",
      era: "atual",
      citation: {
        authors: "Franssen M, Achten J, Appelbe D, Costa ML, et al.",
        title:
          "A protocol for the conduct of a multicentre, prospective, randomized superiority trial of surgical versus non-surgical interventions for humeral shaft fractures",
        journal: "Bone Jt Open",
        year: 2024,
        pmid: "38643977",
        doi: "10.1302/2633-1462.54.BJO-2023-0151.R1",
        url: "https://doi.org/10.1302/2633-1462.54.BJO-2023-0151.R1",
      },
    },
  ],

  pearls: [
    "A grande maioria das fraturas isoladas e fechadas consolida com órtese funcional de Sarmiento.",
    "Paralisia radial primária: conduta expectante — recuperação espontânea na maioria em 3–4 meses.",
    "Paralisia radial que surge APÓS a redução fechada favorece exploração/fixação.",
    "Critérios de aceitação: < 20° AP, < 30° varo/valgo, < 3 cm de encurtamento.",
    "A placa é o padrão-ouro de fixação; a MIPO em ponte preserva a biologia na cominução.",
    "Pseudartrose do não-operatório resolve bem com placa de compressão e enxerto.",
  ],

  pitfalls: [
    "Não documentar a função do nervo radial antes e depois de qualquer manobra.",
    "Iniciar carga axial ou apoio no cotovelo durante o tratamento com órtese.",
    "Aceitar varo progressivo por falta de radiografias seriadas nas primeiras semanas.",
    "Ferir o radial na via posterior por não isolá-lo no sulco espiral.",
    "Deixar a haste proeminente e causar impacto subacromial.",
  ],

  figures: [
    { id: "fratura-diafise-umeral:anatomia", kind: "diagram", caption: "Diáfise umeral e trajeto do nervo radial no sulco espiral.", alt: "Esquema do úmero com o nervo radial cruzando a face posterior." },
    { id: "fratura-diafise-umeral:ao", variant: "A", kind: "diagram", caption: "AO/OTA 12-A — traço simples.", alt: "Fratura diafisária simples." },
    { id: "fratura-diafise-umeral:ao", variant: "B", kind: "diagram", caption: "AO/OTA 12-B — em cunha.", alt: "Fratura diafisária em cunha." },
    { id: "fratura-diafise-umeral:ao", variant: "C", kind: "diagram", caption: "AO/OTA 12-C — complexa/segmentar.", alt: "Fratura diafisária complexa." },
    { id: "fratura-diafise-umeral:holstein-lewis", kind: "diagram", caption: "Holstein-Lewis: espiral do terço distal com risco ao nervo radial.", alt: "Fratura espiral distal do úmero." },
    { id: "fratura-diafise-umeral:brace-sarmiento", kind: "diagram", caption: "Órtese funcional de Sarmiento.", alt: "Órtese funcional do braço." },
    { id: "fratura-diafise-umeral:via-anterolateral", kind: "diagram", caption: "Via anterolateral.", alt: "Acesso anterolateral do úmero." },
    { id: "fratura-diafise-umeral:via-posterior", kind: "diagram", caption: "Via posterior — nervo radial no sulco.", alt: "Acesso posterior do úmero." },
    { id: "fratura-diafise-umeral:step-reducao", kind: "diagram", caption: "Redução e alinhamento.", alt: "Redução da fratura." },
    { id: "fratura-diafise-umeral:step-placa", kind: "diagram", caption: "Fixação com placa de compressão / MIPO.", alt: "Placa no úmero." },
    { id: "fratura-diafise-umeral:step-haste", kind: "diagram", caption: "Haste intramedular bloqueada.", alt: "Haste intramedular no úmero." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      "Campbell's Operative Orthopaedics, 14ª ed. (2021)",
      "Bibliografia TEOT 2026",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados.",
    figureReference: "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
  },
});
