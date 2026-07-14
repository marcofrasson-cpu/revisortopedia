import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-cotovelo-triade-terrivel",
  slug: "triade-terrivel-cotovelo",
  regionId: "membro-superior",
  bone: "Cotovelo",
  injury: "Luxação-fratura",
  title: "Tríade terrível do cotovelo",
  subtitle:
    "Luxação posterior do cotovelo somada a fratura da cabeça do rádio e do coronoide; a chave é reconstruir cada estabilizador em sequência e mobilizar cedo.",
  laterality: null,
  status: "complete",

  overview:
    "A tríade terrível é a combinação de luxação posterior (ou posterolateral) do cotovelo, fratura da cabeça do rádio e fratura do processo coronoide. O nome, cunhado por Hotchkiss, reflete o histórico de maus resultados: instabilidade recorrente e rigidez quando se imobilizava por tempo prolongado.\n\nO cotovelo perde ao mesmo tempo estabilizadores ósseos (coronoide e cabeça do rádio) e ligamentares (complexo colateral lateral), tornando-se grosseiramente instável. A mudança de paradigma veio com o protocolo padronizado de Pugh e McKee: reconstruir cada estrutura em uma sequência lógica — de dentro para fora — restaurando estabilidade suficiente para permitir movimento em 7–10 dias. Quase todos os casos são cirúrgicos; o objetivo é um cotovelo concentricamente estável que possa ser mobilizado precocemente.",

  keyFacts: [
    { label: "Definição", value: "Luxação + fratura da cabeça do rádio + coronoide" },
    { label: "Mecanismo", value: "Posterolateral rotatório (falha lateral → medial)" },
    { label: "Coronoide", value: "Classificação de O'Driscoll (ponta/ântero-medial/basal)" },
    { label: "Sequência", value: "Coronoide/cápsula → cabeça do rádio → LCL" },
    { label: "Cabeça do rádio", value: "Fixar se reparável; substituir se cominutiva" },
    { label: "Meta", value: "Estabilidade concêntrica + mobilização precoce" },
  ],

  anatomy: {
    text:
      "O cotovelo é estabilizado por três estabilizadores primários — a articulação ulnoumeral (coronoide + olécrano), o ligamento colateral medial (banda anterior) e o complexo colateral lateral (LUCL) — e por dois secundários — a cabeça do rádio e a musculatura flexo-extensora comum. Na tríade terrível, perdem-se de uma só vez o coronoide, a cabeça do rádio e o LCL.\n\nO coronoide é o batente ósseo anterior que resiste ao deslocamento posterior e às cargas em varo/rotação; mesmo pequenos fragmentos da ponta desestabilizam. A cabeça do rádio é o estabilizador secundário do valgo e resiste ao deslocamento posterior — reconstruí-la ou substituí-la é indispensável quando o coronoide está deficiente. O complexo colateral lateral, avulsionado do epicôndilo, é a via final da instabilidade posterolateral rotatória e deve ser sempre reparado.",
    figureIds: ["triade-terrivel-cotovelo:anatomia", "triade-terrivel-cotovelo:mecanismo"],
  },

  classification: [
    {
      id: "odriscoll-coronoide",
      name: "Classificação de O'Driscoll (coronoide)",
      basis: "Localização anatômica do fragmento do coronoide",
      note: "Na tríade terrível predomina a fratura da ponta (Tipo 1); a ântero-medial associa-se a padrão em varo posteromedial, não à tríade clássica.",
      types: [
        { code: "1", label: "Ponta (tip)", description: "Fratura transversa da ponta do coronoide (subtipos 1 e 2 conforme a altura). Padrão mais comum na tríade terrível.", figureId: "triade-terrivel-cotovelo:odriscoll", figureVariant: "tip" },
        { code: "2", label: "Faceta ântero-medial", description: "Fratura da faceta ântero-medial — associada à instabilidade rotatória posteromedial em varo; exige fixação (placa medial).", figureId: "triade-terrivel-cotovelo:odriscoll", figureVariant: "anteromedial" },
        { code: "3", label: "Basal", description: "Fratura da base do coronoide (> 50% da altura), frequentemente com o olécrano; muito instável, exige fixação estável.", figureId: "triade-terrivel-cotovelo:odriscoll", figureVariant: "basal" },
      ],
    },
    {
      id: "regan-morrey",
      name: "Classificação de Regan-Morrey (coronoide)",
      basis: "Tamanho/altura do fragmento em perfil",
      types: [
        { code: "I", label: "Avulsão da ponta", description: "Avulsão da ponta do coronoide, sem fragmento significativo de altura." },
        { code: "II", label: "≤ 50%", description: "Fragmento envolvendo até 50% da altura do coronoide." },
        { code: "III", label: "> 50%", description: "Fragmento envolvendo mais de 50% da altura (base); alta instabilidade." },
      ],
    },
    {
      id: "mason-radio",
      name: "Classificação de Mason (cabeça do rádio)",
      basis: "Desvio e cominução da cabeça do rádio associada",
      types: [
        { code: "I", label: "Sem desvio", description: "Sem desvio ou mínimo — raro isoladamente no contexto da tríade." },
        { code: "II", label: "Desviada", description: "Fragmento desviado potencialmente reparável (ORIF)." },
        { code: "III", label: "Cominutiva", description: "Cominução irreparável — indicação de artroplastia (substituição)." },
      ],
    },
  ],

  indications: {
    operative: [
      "Praticamente todas as tríades terríveis — a instabilidade combinada é cirúrgica",
      "Fratura da cabeça do rádio desviada/cominutiva (fixar ou substituir)",
      "Coronoide fraturado com cápsula anterior avulsionada",
      "Complexo colateral lateral avulsionado do epicôndilo",
      "Instabilidade residual após reconstrução → reparo do LCM e/ou fixador articulado",
    ],
    nonOperative: [
      "Exceção rara: fragmentos mínimos, cotovelo concentricamente estável em toda a ADM sob fluoroscopia, com arco estável ≥ 30° de extensão, em paciente confiável e vigilância radiográfica rigorosa",
    ],
    decisionNotes:
      "O tratamento não cirúrgico é a exceção e só se sustenta com estabilidade concêntrica confirmada sob fluoroscopia e reavaliação seriada precoce (risco de subluxação e artrose). Na regra, opera-se cedo com o protocolo padronizado. A decisão de fixar versus substituir a cabeça do rádio depende da reparabilidade (≤ 3 fragmentos com osso subcondral viável favorecem ORIF); na cominutiva com instabilidade, substituir é preferível à ressecção, que jamais deve ser feita isoladamente neste contexto.",
  },

  approaches: [
    {
      id: "kocher-lateral",
      name: "Via lateral (Kocher / coluna lateral)",
      indication: "Acesso à cabeça do rádio, ao coronoide (através do defeito da cabeça) e ao LCL — resolve a maioria das tríades.",
      interval: "Entre ancôneo e extensor ulnar do carpo (Kocher); o LCL já costuma estar avulsionado",
      atRisk: ["Nervo interósseo posterior (pronar o antebraço)", "Complexo colateral lateral (LUCL)"],
      figureId: "triade-terrivel-cotovelo:lcl-reparo",
    },
    {
      id: "medial-hotchkiss",
      name: "Via medial (over-the-top / Hotchkiss)",
      indication: "Coronoide de difícil acesso (fragmentos grandes/basais ou faceta ântero-medial) e reparo do LCM quando necessário.",
      interval: "Sobre o flexor comum, protegendo o nervo ulnar",
      atRisk: ["Nervo ulnar", "Banda anterior do LCM"],
      figureId: "triade-terrivel-cotovelo:coronoide-reparo",
    },
  ],

  technique: [
    { n: 1, title: "Avaliação e planejamento", detail: "TC para caracterizar coronoide (O'Driscoll) e cabeça do rádio; definir fixar vs substituir e a necessidade de via medial. Posicionar para fluoroscopia e testar estabilidade sob anestesia.", figureId: "triade-terrivel-cotovelo:mecanismo", tips: ["A TC muda a conduta ao revelar o padrão exato do coronoide."], pitfalls: ["Subestimar o coronoide por radiografia simples."] },
    { n: 2, title: "Coronoide e cápsula anterior (1º)", detail: "Trabalhar de dentro para fora: fixar o coronoide (parafuso, laço de sutura transóssea ou placa) e reinserir a cápsula anterior. O acesso ao coronoide é facilitado pelo defeito da cabeça do rádio antes de reconstruí-la.", figureId: "triade-terrivel-cotovelo:coronoide-reparo", figureVariant: "coronoide", tips: ["Fragmentos de ponta: laço de sutura transóssea captura cápsula + coronoide."], pitfalls: ["Reconstruir a cabeça do rádio antes e perder o acesso ao coronoide."] },
    { n: 3, title: "Cabeça do rádio — fixar ou substituir (2º)", detail: "Se reparável (≤ 3 fragmentos, osso viável), ORIF com parafusos/mini-placa na zona segura. Se cominutiva/irreparável, artroplastia de tamanho anatômico. Nunca ressecar isoladamente.", figureId: "triade-terrivel-cotovelo:cabeca-radial", figureVariant: "substituir", tips: ["Dimensionar a prótese pelos fragmentos ressecados — não superdimensionar."], pitfalls: ["Prótese superdimensionada → sobrecarga do capítulo e dor."] },
    { n: 4, title: "Complexo colateral lateral (3º)", detail: "Reinserir o LCL/LUCL avulsionado na origem isométrica do epicôndilo lateral (âncora ou túnel transósseo), com o antebraço pronado. Reavaliar estabilidade sob fluoroscopia.", figureId: "triade-terrivel-cotovelo:lcl-reparo", figureVariant: "lcl", tips: ["Ponto isométrico = centro de rotação do capítulo."], pitfalls: ["Fixar o LCL fora do ponto isométrico → restrição ou frouxidão."] },
    { n: 5, title: "Reavaliar e adjuvantes", detail: "Testar arco estável sob fluoroscopia. Se persistir instabilidade (subluxação < 30–40° de extensão), reparar o LCM por via medial e/ou aplicar fixador externo articulado. Definir o arco seguro de mobilização.", figureId: "triade-terrivel-cotovelo:fixador-articulado", tips: ["O fixador articulado protege o reparo permitindo ADM precoce."], pitfalls: ["Encerrar com o cotovelo ainda subluxado → falha do tratamento."] },
  ],

  postop: {
    immobilization: "Tala de conforto por poucos dias em pronação (protege o LCL reparado); órtese articulada conforme o arco estável.",
    weightBearing: "Sem carga no membro; foco em recuperar flexo-extensão e pronossupinação dentro do arco estável.",
    rehab: [
      { window: "7–10 dias", weightBearing: "Sem carga", focus: "Iniciar ADM ativa/ativa-assistida precoce dentro do arco estável; extensão limitada se LCL/LCM em risco" },
      { window: "2–6 sem", weightBearing: "Sem carga", focus: "Ampliar flexo-extensão e pronossupinação; pronação para proteger o LCL; evitar estresse em varo" },
      { window: "6–12 sem", weightBearing: "Progressiva", focus: "Ganho de extensão terminal, fortalecimento leve; retirar fixador articulado se usado" },
    ],
    followup: "Radiografias seriadas precoces para confirmar redução concêntrica (vigiar subluxação); atenção a ossificação heterotópica e rigidez.",
  },

  complications: [
    { name: "Rigidez", detail: "Perda de extensão é a complicação mais comum; agravada por imobilização prolongada.", prevention: "Estabilidade suficiente para mobilização em 7–10 dias." },
    { name: "Instabilidade recorrente / subluxação", detail: "Redução não concêntrica por reconstrução incompleta (coronoide, cabeça do rádio ou LCL não tratados).", prevention: "Reconstruir todos os estabilizadores; usar LCM/fixador se necessário." },
    { name: "Ossificação heterotópica / sinostose radioulnar", detail: "Frequente em traumas de alta energia; pode limitar a pronossupinação.", prevention: "Manejo de tecidos moles; mobilização precoce; considerar profilaxia em casos selecionados." },
    { name: "Artrose pós-traumática", detail: "Por incongruência articular, redução imperfeita ou instabilidade residual.", prevention: "Restaurar congruência e estabilidade concêntrica." },
    { name: "Neuropraxia (ulnar/interósseo posterior)", detail: "Por tração, edema ou dissecção; o nervo ulnar é vulnerável na via medial.", prevention: "Identificar e proteger os nervos; pronar o antebraço na via lateral." },
    { name: "Falha/afrouxamento da prótese ou dos implantes", detail: "Prótese superdimensionada sobrecarrega o capítulo; implantes na cabeça podem bloquear a rotação.", prevention: "Dimensionamento anatômico; implantes na zona segura." },
  ],

  evidence: [
    { id: "pugh-2004", claim: "Série de 36 cotovelos com luxação + fratura da cabeça do rádio e do coronoide tratados com protocolo padronizado (fixar/substituir cabeça do rádio, fixar coronoide, reparar cápsula/LCL, ± LCM/fixador articulado) obteve MEPS médio de 88, arco de flexo-extensão médio de 112° e estabilidade concêntrica em 34/36.", takeaway: "O protocolo padronizado com mobilização precoce transformou o prognóstico da tríade terrível.", level: "IV", studyType: "Coorte retrospectiva", era: "classico", citation: { authors: "Pugh DMW, Wild LM, Schemitsch EH, King GJW, McKee MD", title: "Standard surgical protocol to treat elbow dislocations with radial head and coronoid fractures", journal: "J Bone Joint Surg Am", year: 2004, pmid: "15173283", doi: "10.2106/00004623-200406000-00002", url: "https://doi.org/10.2106/00004623-200406000-00002" } },
    { id: "mckee-2005", claim: "Descrição da técnica cirúrgica do protocolo padronizado, detalhando a sequência de reconstrução dos estabilizadores ósseos e ligamentares e o racional de mobilização em 7–10 dias.", takeaway: "Referência técnica da sequência coronoide → cabeça do rádio → LCL (± LCM/fixador).", level: "V", studyType: "Técnica cirúrgica / revisão", era: "classico", citation: { authors: "McKee MD, Pugh DMW, Wild LM, Schemitsch EH, King GJW", title: "Standard surgical protocol to treat elbow dislocations with radial head and coronoid fractures. Surgical technique", journal: "J Bone Joint Surg Am", year: 2005, pmid: "15743844", doi: "10.2106/JBJS.D.02933", url: "https://doi.org/10.2106/JBJS.D.02933" } },
    { id: "chen-2019", claim: "Revisão sistemática e metanálise (4 estudos, 115 pacientes): na tríade terrível, a substituição (artroplastia) da cabeça do rádio associou-se a melhores DASH/MEPS, melhor ADM (flexão, extensão, pronação) e menos complicações do que a fixação.", takeaway: "Quando a cabeça do rádio é irreparável, substituir supera tentar fixar.", level: "II", studyType: "Revisão sistemática e metanálise", era: "atual", citation: { authors: "Chen H, Shao Y, Li S", title: "Replacement or repair of terrible triad of the elbow: A systematic review and meta-analysis", journal: "Medicine (Baltimore)", year: 2019, pmid: "30732120", doi: "10.1097/MD.0000000000013054", url: "https://doi.org/10.1097/MD.0000000000013054" } },
    { id: "kamel-2023", claim: "Revisão sistemática e metanálise de braço único (11 estudos, 301 pacientes): a mobilização precoce (ADM ativa ≤ 14 dias) associou-se a MEPS médio mais alto (91,2 vs 85) sem aumento aparente do risco de instabilidade.", takeaway: "Mobilizar cedo melhora a função sem custo de instabilidade — pilar do protocolo.", level: "II", studyType: "Revisão sistemática e metanálise", era: "atual", citation: { authors: "Ahmed Kamel S, Shepherd J, Al-Shahwani A, Abourisha E, Maduka D, Singh H", title: "Postoperative mobilization after terrible triad injury: systematic review and single-arm meta-analysis", journal: "J Shoulder Elbow Surg", year: 2023, pmid: "38036253", doi: "10.1016/j.jse.2023.10.012", url: "https://doi.org/10.1016/j.jse.2023.10.012" } },
    { id: "fahs-2024", claim: "Revisão abrangente atualiza os princípios: falha sequencial de lateral para medial por força rotatória posterolateral; reconstrução do complexo lateral, da cabeça do rádio (fixar/substituir), do coronoide/cápsula, com reparo medial ou fixador interno/externo nos casos persistentemente instáveis, e reabilitação com ADM precoce.", takeaway: "Consolida o algoritmo contemporâneo de reconstrução em sequência e reabilitação precoce.", level: "V", studyType: "Revisão narrativa", era: "atual", citation: { authors: "Fahs A, Waldron J, Afsari A, Best B", title: "Management of Elbow Terrible Triad Injuries: A Comprehensive Review and Update", journal: "J Am Acad Orthop Surg", year: 2024, pmid: "39151182", doi: "10.5435/JAAOS-D-24-00310", url: "https://doi.org/10.5435/JAAOS-D-24-00310" } },
  ],

  pearls: [
    "Reconstruir de dentro para fora: coronoide/cápsula → cabeça do rádio → LCL.",
    "Acessar o coronoide pelo defeito da cabeça do rádio antes de reconstruí-la.",
    "Cabeça do rádio irreparável = substituir; nunca ressecar isoladamente.",
    "Reinserir o LCL no ponto isométrico do epicôndilo, com o antebraço pronado.",
    "Testar a estabilidade sob fluoroscopia ao final; LCM/fixador articulado se subluxar.",
    "Estabilidade suficiente = mobilização em 7–10 dias — a rigidez é o maior inimigo.",
  ],

  pitfalls: [
    "Tratar como luxação simples e ignorar os estabilizadores ósseos e ligamentares.",
    "Reconstruir a cabeça do rádio antes do coronoide e perder o acesso a ele.",
    "Ressecar a cabeça do rádio sem substituir num cotovelo instável.",
    "Fixar o LCL fora do ponto isométrico, gerando restrição ou frouxidão.",
    "Imobilizar por tempo prolongado e produzir rigidez irreversível.",
    "Encerrar a cirurgia com redução não concêntrica (subluxação residual).",
  ],

  figures: [
    { id: "triade-terrivel-cotovelo:anatomia", kind: "diagram", caption: "Estabilizadores do cotovelo: coronoide, cabeça do rádio, LCL e cápsula anterior.", alt: "Anatomia dos estabilizadores do cotovelo." },
    { id: "triade-terrivel-cotovelo:mecanismo", kind: "diagram", caption: "Mecanismo posterolateral rotatório — falha de lateral para medial.", alt: "Mecanismo de lesão da tríade terrível." },
    { id: "triade-terrivel-cotovelo:odriscoll", variant: "tip", kind: "diagram", caption: "O'Driscoll Tipo 1 — fratura da ponta do coronoide.", alt: "Fratura da ponta do coronoide." },
    { id: "triade-terrivel-cotovelo:odriscoll", variant: "anteromedial", kind: "diagram", caption: "O'Driscoll Tipo 2 — faceta ântero-medial.", alt: "Fratura da faceta ântero-medial do coronoide." },
    { id: "triade-terrivel-cotovelo:odriscoll", variant: "basal", kind: "diagram", caption: "O'Driscoll Tipo 3 — fratura basal do coronoide.", alt: "Fratura basal do coronoide." },
    { id: "triade-terrivel-cotovelo:sequencia", kind: "diagram", caption: "Sequência padronizada: coronoide/cápsula → cabeça do rádio → LCL.", alt: "Sequência de reparo da tríade terrível." },
    { id: "triade-terrivel-cotovelo:coronoide-reparo", kind: "diagram", caption: "Reparo do coronoide e da cápsula anterior com laço de sutura transóssea.", alt: "Reparo do coronoide e cápsula anterior." },
    { id: "triade-terrivel-cotovelo:cabeca-radial", variant: "substituir", kind: "diagram", caption: "Cabeça do rádio: fixar (ORIF) ou substituir (prótese).", alt: "Fixação ou substituição da cabeça do rádio." },
    { id: "triade-terrivel-cotovelo:lcl-reparo", kind: "diagram", caption: "Reinserção do LCL no ponto isométrico do epicôndilo lateral.", alt: "Reparo do ligamento colateral lateral." },
    { id: "triade-terrivel-cotovelo:fixador-articulado", kind: "diagram", caption: "Fixador externo articulado com dobradiça no eixo de rotação.", alt: "Fixador externo articulado do cotovelo." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: ["Rockwood and Green's Fractures in Adults, 10ª ed. (2024)", "Campbell's Operative Orthopaedics, 14ª ed. (2021)", "Hebert & Lech, Ortopedia e Traumatologia, 6ª ed. (2025)", "Bibliografia TEOT 2026"],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados.",
    figureReference: "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
  },
});
