import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-cotovelo-cabeca-radial",
  slug: "fratura-cabeca-radial",
  regionId: "membro-superior",
  bone: "Cotovelo",
  injury: "Fratura da cabeça do rádio",
  title: "Fratura da cabeça do rádio",
  subtitle:
    "A fratura mais comum do cotovelo adulto; a chave é distinguir a lesão isolada estável da fratura que faz parte de uma instabilidade maior.",
  laterality: null,
  status: "complete",

  overview:
    "A cabeça do rádio é a fratura mais frequente do cotovelo no adulto. Funciona como estabilizador secundário do valgo (auxiliando o ligamento colateral medial) e como estabilizador primário da estabilidade longitudinal do antebraço junto à membrana interóssea. Por isso, o desfecho depende menos do traço em si e mais das lesões associadas — ligamento colateral lateral, coronoide (tríade terrível) e membrana interóssea (Essex-Lopresti).\n\nA maioria das fraturas sem desvio ou com desvio mínimo (Mason I) é tratada de forma não cirúrgica com mobilização precoce. Nas cominutivas irreparáveis, a artroplastia (substituição) supera a ressecção quando há instabilidade associada, pois preserva a coluna lateral do cotovelo.",

  keyFacts: [
    { label: "Frequência", value: "Fratura mais comum do cotovelo adulto" },
    { label: "Função", value: "Estabilizador 2º do valgo · 1º da estab. longitudinal" },
    { label: "Classificação", value: "Mason (I–IV)" },
    { label: "Mason I", value: "Não cirúrgico + mobilização precoce" },
    { label: "Cominutiva irreparável", value: "Artroplastia > ressecção se instável" },
    { label: "Não esquecer", value: "Coronoide, LCL e Essex-Lopresti" },
  ],

  anatomy: {
    text:
      "A cabeça do rádio articula-se com o capítulo umeral (flexo-extensão e pronossupinação) e com a incisura radial da ulna. Cerca de 240° da circunferência é articular; o restante — a zona segura ('safe zone'), voltada dorsolateralmente com o antebraço em posição neutra — recebe os implantes sem interferir na pronossupinação.\n\nComo estabilizador secundário do valgo, torna-se crítico quando o ligamento colateral medial está lesado. Junto à membrana interóssea, resiste à migração proximal do rádio; sua ressecção sem substituição, num contexto de lesão da membrana (Essex-Lopresti), leva a encurtamento radial e dor no punho.",
    figureIds: ["fratura-cabeca-radial:anatomia", "fratura-cabeca-radial:essex-lopresti"],
  },

  classification: [
    {
      id: "mason",
      name: "Classificação de Mason (modificada)",
      basis: "Desvio e cominução; IV = com luxação do cotovelo",
      types: [
        { code: "I", label: "Sem desvio", description: "Fratura sem desvio ou com desvio mínimo (< 2 mm), sem bloqueio mecânico à rotação.", figureId: "fratura-cabeca-radial:mason", figureVariant: "I" },
        { code: "II", label: "Desviada", description: "Fragmento desviado (> 2 mm) parcial articular, potencialmente reparável.", figureId: "fratura-cabeca-radial:mason", figureVariant: "II" },
        { code: "III", label: "Cominutiva", description: "Cominução de toda a cabeça, em geral irreparável.", figureId: "fratura-cabeca-radial:mason", figureVariant: "III" },
        { code: "IV", label: "Com luxação", description: "Qualquer fratura da cabeça associada a luxação do cotovelo (Johnston).", figureId: "fratura-cabeca-radial:mason", figureVariant: "IV" },
      ],
    },
  ],

  indications: {
    operative: [
      "Bloqueio mecânico à pronossupinação (fragmento incarcerado)",
      "Fratura desviada reparável (Mason II) sintomática",
      "Fratura cominutiva (Mason III) irreparável — artroplastia",
      "Instabilidade associada (tríade terrível, luxação, Essex-Lopresti)",
    ],
    nonOperative: [
      "Mason I (sem desvio) — mobilização precoce",
      "Mason II estável sem bloqueio mecânico em paciente de baixa demanda",
    ],
    decisionNotes:
      "Testar a rotação (aspirar o hematoma e infiltrar anestésico ajuda a distinguir dor de bloqueio verdadeiro). Na cominutiva irreparável COM instabilidade associada, a artroplastia é preferível à ressecção porque mantém a coluna lateral. A ressecção isolada só é aceitável em fratura verdadeiramente isolada, sem lesão ligamentar, ou no idoso de baixa demanda.",
  },

  approaches: [
    {
      id: "kocher",
      name: "Via lateral (Kocher / Kaplan)",
      indication: "ORIF ou artroplastia da cabeça do rádio; reparo do LCL.",
      interval: "Kocher: entre ancôneo e extensor ulnar do carpo; respeitar o LUCL",
      atRisk: ["Ligamento colateral lateral (LUCL)", "Nervo interósseo posterior (pronar o antebraço)"],
      figureId: "fratura-cabeca-radial:orif",
    },
  ],

  technique: [
    { n: 1, title: "Avaliar estabilidade e lesões associadas", detail: "Documentar bloqueio mecânico, estabilidade em valgo/varo, coronoide e DRUJ/punho (Essex-Lopresti). Definir reparável vs substituir.", figureId: "fratura-cabeca-radial:anatomia", tips: ["Radiografia do punho se houver dor — não perder Essex-Lopresti."], pitfalls: ["Ressecar a cabeça num contexto de instabilidade longitudinal."] },
    { n: 2, title: "Via lateral e proteção do NIP", detail: "Acesso de Kocher, preservando o LUCL; pronar o antebraço para afastar o nervo interósseo posterior.", figureId: "fratura-cabeca-radial:orif", tips: ["Trabalhar na zona segura para os implantes."], pitfalls: ["Lesar o LUCL e induzir instabilidade posterolateral."] },
    { n: 3, title: "ORIF (Mason II / III selecionadas)", detail: "Parafusos sem cabeça ou mini-placa na zona segura; a reparabilidade depende de haver ≤ 3 fragmentos com osso subcondral viável.", figureId: "fratura-cabeca-radial:orif", tips: ["Fragmentos maiores com boa qualidade óssea favorecem ORIF."], pitfalls: ["Implante saliente na região articular bloqueando a rotação."] },
    { n: 4, title: "Artroplastia (cominutiva irreparável)", detail: "Substituição por prótese de tamanho anatômico ('não superdimensionar'); restaura a coluna lateral e a estabilidade.", figureId: "fratura-cabeca-radial:artroplastia", tips: ["Aferir o tamanho pelos fragmentos ressecados."], pitfalls: ["Prótese superdimensionada → sobrecarga do capítulo e dor."] },
    { n: 5, title: "Reparar estabilizadores e checar", detail: "Reparar o LCL (e coronoide/LCM se tríade terrível), testar estabilidade concêntrica sob fluoroscopia e definir arco seguro de mobilização.", figureId: "fratura-cabeca-radial:artroplastia", tips: ["Mobilização precoce dentro do arco estável reduz rigidez."], pitfalls: ["Imobilização prolongada → rigidez, a complicação mais comum."] },
  ],

  postop: {
    immobilization: "Tala por poucos dias para conforto; mobilização precoce dentro do arco estável.",
    weightBearing: "Sem carga no membro; foco em recuperar pronossupinação e extensão.",
    rehab: [
      { window: "0–1 sem", weightBearing: "Sem carga", focus: "Controle da dor, movimento ativo precoce conforme estabilidade" },
      { window: "1–6 sem", weightBearing: "Sem carga", focus: "ADM ativa de flexo-extensão e pronossupinação; evitar estresse em varo" },
      { window: "6–12 sem", weightBearing: "Progressiva", focus: "Ganho de extensão terminal e fortalecimento leve" },
    ],
    followup: "Radiografias seriadas; vigiar rigidez, ossificação heterotópica e, na prótese, afrouxamento.",
  },

  complications: [
    { name: "Rigidez", detail: "Perda de extensão é a complicação mais comum, sobretudo após imobilização prolongada.", prevention: "Mobilização precoce dentro do arco estável." },
    { name: "Instabilidade residual", detail: "Por lesão ligamentar não reconhecida (LCL, coronoide) ou ressecção inadequada.", prevention: "Reparar estabilizadores; substituir em vez de ressecar quando instável." },
    { name: "Bloqueio mecânico", detail: "Fragmento ou implante interferindo na pronossupinação.", prevention: "Implantes na zona segura; remover fragmentos livres." },
    { name: "Encurtamento radial (Essex-Lopresti)", detail: "Ressecção com membrana interóssea lesada leva a migração proximal e dor no punho.", prevention: "Nunca ressecar sem substituir quando há lesão longitudinal." },
    { name: "Afrouxamento/superdimensionamento da prótese", detail: "Prótese grande sobrecarrega o capítulo; a tardia tem mais afrouxamento.", prevention: "Dimensionamento anatômico; preferir tratamento agudo." },
    { name: "Ossificação heterotópica", detail: "Mais frequente em traumas de maior energia e tríade terrível." },
  ],

  evidence: [
    { id: "catellani-2018", claim: "Revisão sistemática: na cominutiva irreparável (Mason III/IV), a artroplastia supera a ressecção em estabilidade, ADM, dor e complicações; a ressecção fica reservada à fratura isolada sem lesão ligamentar ou ao idoso de baixa demanda.", takeaway: "Substituir, não ressecar, quando há instabilidade associada.", level: "II", studyType: "Revisão sistemática", era: "atual", citation: { authors: "Catellani F, De Caro F, De Biase CF, et al.", title: "Radial Head Resection versus Arthroplasty in Unrepairable Comminuted Fractures Mason Type III and Type IV: A Systematic Review", journal: "Biomed Res Int", year: 2018, pmid: "30112387", doi: "10.1155/2018/4020625", url: "https://doi.org/10.1155/2018/4020625" } },
    { id: "alburdeni-2015", claim: "Comparativo ORIF vs artroplastia na cominutiva fechada (Mason III/IV): QuickDASH, recuperação do arco funcional e complicações semelhantes, com menor tempo cirúrgico na artroplastia.", takeaway: "Em fraturas selecionadas, ORIF e prótese têm resultados comparáveis.", level: "III", studyType: "Estudo comparativo", era: "atual", citation: { authors: "Al-Burdeni S, Abuodeh Y, Ibrahim T, Ahmed G", title: "Open reduction and internal fixation versus radial head arthroplasty in the treatment of adult closed comminuted radial head fractures (modified Mason type III and IV)", journal: "Int Orthop", year: 2015, pmid: "25823518", doi: "10.1007/s00264-015-2755-1", url: "https://doi.org/10.1007/s00264-015-2755-1" } },
    { id: "walsh-2022", claim: "Série de ORIF em Mason III/IV: fraturas com mais de 3 fragmentos tiveram escores (QuickDASH, Broberg-Morrey) e reoperação semelhantes às de ≤ 2 fragmentos — a cominução por si não contraindica a fixação.", takeaway: "ORIF pode ser considerado mesmo em algumas cominutivas reparáveis.", level: "IV", studyType: "Coorte retrospectiva", era: "atual", citation: { authors: "Walsh A, Zhang Y, McGough J, Kim J, Hausman M", title: "Open Reduction Internal Fixation of Simple Versus Comminuted Radial Head Fractures: Comparison of Clinical Outcomes", journal: "J Hand Surg Am", year: 2022, pmid: "35545488", doi: "10.1016/j.jhsa.2022.02.020", url: "https://doi.org/10.1016/j.jhsa.2022.02.020" } },
    { id: "nieboer-2022", claim: "Artroplastia aguda vs tardia: a tardia teve pior escore de Mayo, maior taxa de revisão/ressecção em 5 anos e mais afrouxamento radiográfico.", takeaway: "Quando indicada, a artroplastia aguda tem melhor sobrevida que a tardia.", level: "III", studyType: "Coorte retrospectiva", era: "atual", citation: { authors: "Nieboer MJ, Austin DC, Uvodich ME, et al.", title: "Acute versus delayed radial head arthroplasty for the treatment of radial head fractures", journal: "J Shoulder Elbow Surg", year: 2022, pmid: "36115618", doi: "10.1016/j.jse.2022.07.031", url: "https://doi.org/10.1016/j.jse.2022.07.031" } },
  ],

  pearls: [
    "Mason I: mobilização precoce — a rigidez é o maior inimigo.",
    "Distinguir dor de bloqueio verdadeiro (infiltração intra-articular ajuda).",
    "Sempre avaliar coronoide, LCL e punho (Essex-Lopresti).",
    "Instabilidade + cabeça irreparável = substituir, nunca só ressecar.",
    "Não superdimensionar a prótese: dimensionamento anatômico pelos fragmentos.",
    "Implantes na zona segura para não bloquear a pronossupinação.",
  ],

  pitfalls: [
    "Ressecar a cabeça num contexto de instabilidade longitudinal (Essex-Lopresti).",
    "Perder a lesão do LCL/coronoide e subestimar a instabilidade.",
    "Imobilizar por tempo prolongado e gerar rigidez.",
    "Lesar o nervo interósseo posterior por não pronar o antebraço.",
    "Prótese superdimensionada causando dor e desgaste do capítulo.",
  ],

  figures: [
    { id: "fratura-cabeca-radial:anatomia", kind: "diagram", caption: "Cabeça do rádio, capítulo, incisura radial da ulna e LUCL.", alt: "Anatomia da cabeça do rádio." },
    { id: "fratura-cabeca-radial:mason", variant: "I", kind: "diagram", caption: "Mason I — sem desvio.", alt: "Fratura sem desvio." },
    { id: "fratura-cabeca-radial:mason", variant: "II", kind: "diagram", caption: "Mason II — desviada.", alt: "Fratura desviada." },
    { id: "fratura-cabeca-radial:mason", variant: "III", kind: "diagram", caption: "Mason III — cominutiva.", alt: "Fratura cominutiva." },
    { id: "fratura-cabeca-radial:mason", variant: "IV", kind: "diagram", caption: "Mason IV — com luxação do cotovelo.", alt: "Fratura com luxação." },
    { id: "fratura-cabeca-radial:orif", kind: "diagram", caption: "ORIF com implantes na zona segura.", alt: "Fixação da cabeça do rádio." },
    { id: "fratura-cabeca-radial:artroplastia", kind: "diagram", caption: "Artroplastia (prótese) da cabeça do rádio.", alt: "Prótese da cabeça do rádio." },
    { id: "fratura-cabeca-radial:essex-lopresti", kind: "diagram", caption: "Essex-Lopresti: membrana interóssea + DRUJ.", alt: "Lesão de Essex-Lopresti." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: ["Rockwood and Green's Fractures in Adults, 10ª ed. (2024)", "Campbell's Operative Orthopaedics, 14ª ed. (2021)", "Bibliografia TEOT 2026"],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados.",
    figureReference: "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
  },
});
