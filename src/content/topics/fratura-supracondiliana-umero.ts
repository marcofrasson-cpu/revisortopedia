import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "op-cotovelo-supracondiliana",
  slug: "fratura-supracondiliana-umero",
  regionId: "ortopedia-pediatrica",
  bone: "Cotovelo (criança)",
  injury: "Fratura supracondiliana",
  title: "Fratura supracondiliana do úmero",
  subtitle:
    "A fratura mais comum do cotovelo na criança; uma urgência potencialmente neurovascular em que reconhecer o padrão (Gartland) e o estado da mão define o tempo e a via de tratamento.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura supracondiliana é a fratura mais comum do cotovelo na infância, com pico entre 5 e 7 anos, decorrente de queda com a mão espalmada e cotovelo em hiperextensão. Cerca de 98% são do tipo extensão (fragmento distal desviado posteriormente); o tipo flexão é raro. A região supracondiliana é uma zona frágil — colunas medial e lateral finas separadas pelas fossas do olécrano e coronoide — o que explica a alta frequência.\n\nO tratamento depende do desvio (classificação de Gartland) e, sobretudo, do estado neurovascular. Gartland I é tratada com imobilização; Gartland II e III exigem redução e fixação percutânea com fios de Kirschner. As grandes decisões clínicas giram em torno de três eixos consagrados na literatura: configuração dos pinos (laterais vs cruzados e o risco ao nervo ulnar), o momento da cirurgia (a maioria dos casos sem comprometimento vascular não é emergência) e o manejo da mão sem pulso — em especial a 'mão rosa sem pulso' bem perfundida.",

  keyFacts: [
    { label: "Epidemiologia", value: "Fratura de cotovelo mais comum na criança (pico 5–7 anos)" },
    { label: "Mecanismo", value: "Extensão em 98% (queda com mão espalmada)" },
    { label: "Classificação", value: "Gartland I–III (+ IV multidirecional)" },
    { label: "Nervo mais lesado", value: "Interósseo anterior (NIA) no tipo extensão" },
    { label: "Fixação padrão", value: "Fios laterais (2–3); cruzados aumentam risco ao ulnar" },
    { label: "Emergência", value: "Mão pálida sem pulso, pucker, síndrome compartimental" },
  ],

  anatomy: {
    text:
      "O úmero distal se organiza em duas colunas — medial e lateral — unidas por uma fina lâmina óssea entre as fossas do olécrano (posterior) e coronoide/radial (anterior). Essa arquitetura em 'garfo', somada à frouxidão ligamentar e à placa de crescimento (fise) ainda aberta, torna a metáfise supracondiliana o ponto mais vulnerável do cotovelo imaturo.\n\nAnteriormente correm a artéria braquial e o nervo mediano (com seu ramo interósseo anterior, NIA); lateralmente, o nervo radial; e posteromedialmente, o nervo ulnar, atrás do epicôndilo medial. No tipo extensão, o fragmento proximal desloca-se anteriormente e pode contundir a artéria braquial e o NIA — a lesão nervosa mais frequente. No tipo flexão, o nervo ulnar fica mais exposto. A referência radiográfica essencial é a linha umeral anterior, que normalmente cruza o terço médio do capítulo; o ângulo de Baumann afere a inclinação da fise do capítulo e guia a redução no plano coronal.",
    figureIds: [
      "fratura-supracondiliana-umero:anatomia",
      "fratura-supracondiliana-umero:neurovascular",
    ],
  },

  classification: [
    {
      id: "gartland",
      name: "Classificação de Gartland (modificada)",
      basis: "Grau de desvio no tipo extensão; IV = instabilidade multidirecional",
      note: "Aplica-se ao tipo extensão (98%). O tipo flexão é classificado à parte pelo sentido do desvio.",
      types: [
        { code: "I", label: "Sem desvio", description: "Fratura sem desvio ou mínima; linha umeral anterior preservada. Tratamento incruento.", figureId: "fratura-supracondiliana-umero:gartland", figureVariant: "I" },
        { code: "II", label: "Desviada, córtex posterior íntegro", description: "Angulação em extensão com dobradiça cortical posterior intacta. Redução + fixação percutânea.", figureId: "fratura-supracondiliana-umero:gartland", figureVariant: "II" },
        { code: "III", label: "Totalmente desviada", description: "Perda completa de contato cortical, desvio posteromedial ou posterolateral. Redução + pinagem.", figureId: "fratura-supracondiliana-umero:gartland", figureVariant: "III" },
        { code: "IV", label: "Instabilidade multidirecional", description: "Instável tanto em flexão quanto em extensão (periósteo circunferencialmente roto); diagnóstico intraoperatório sob fluoroscopia (Leitch).", figureId: "fratura-supracondiliana-umero:gartland", figureVariant: "IV" },
      ],
    },
    {
      id: "mecanismo",
      name: "Tipo de mecanismo",
      basis: "Sentido do desvio do fragmento distal",
      types: [
        { code: "EXT", label: "Extensão (98%)", description: "Fragmento distal desviado posteriormente; risco de lesão da artéria braquial e do NIA/mediano.", figureId: "fratura-supracondiliana-umero:mecanismo", figureVariant: "extensao" },
        { code: "FLEX", label: "Flexão (~2%)", description: "Fragmento distal desviado anteriormente; maior risco ao nervo ulnar e maior chance de necessidade de redução aberta.", figureId: "fratura-supracondiliana-umero:mecanismo", figureVariant: "flexao" },
      ],
    },
  ],

  indications: {
    operative: [
      "Gartland II — redução fechada e fixação percutânea com fios",
      "Gartland III e IV — redução e pinagem (aberta se irredutível)",
      "Tipo flexão desviado / instável",
      "Mão pálida sem pulso — redução urgente; explorar se não reperfundir",
      "Fratura exposta, sinal do pucker ou síndrome compartimental — emergência",
    ],
    nonOperative: [
      "Gartland I — tala/gesso axilopalmar a ~90° por 3 semanas",
      "Fraturas com desvio mínimo e linha umeral anterior preservada, sem déficit",
    ],
    decisionNotes:
      "A maioria das fraturas sem comprometimento vascular pode aguardar a cirurgia com segurança para o horário eletivo, sem aumento de complicações — não é, por si só, emergência. São verdadeiras emergências: mão pálida/mal perfundida sem pulso, fratura exposta, sinal do pucker (botoeira do fragmento proximal no braquial, sugerindo irredutibilidade e alto risco vascular) e síndrome compartimental. Na 'mão rosa sem pulso' (bem perfundida, capilar preservado) após redução e fixação, adota-se observação atenta; a exploração fica reservada aos casos que deterioram ou que permanecem mal perfundidos.",
  },

  approaches: [
    {
      id: "lateral-percutanea",
      name: "Fixação percutânea lateral",
      indication: "Padrão para Gartland II/III após redução fechada.",
      interval: "Entrada percutânea pelo capítulo/coluna lateral; 2–3 fios divergentes e bicorticais.",
      atRisk: ["Estabilidade rotacional (usar fios divergentes com boa separação)"],
      figureId: "fratura-supracondiliana-umero:pinagem",
    },
    {
      id: "cruzada",
      name: "Fixação cruzada (medial + lateral)",
      indication: "Maior estabilidade em padrões muito instáveis; requer técnica cuidadosa.",
      interval: "Fio medial pelo epicôndilo medial + fio(s) lateral(is); usar mini-incisão medial para proteger o ulnar.",
      atRisk: ["Nervo ulnar (fio medial) — usar técnica mini-aberta com cotovelo em extensão"],
      figureId: "fratura-supracondiliana-umero:pinagem",
    },
    {
      id: "aberta",
      name: "Redução aberta",
      indication: "Fratura irredutível, exposta ou com necessidade de exploração vascular.",
      interval: "Via anterior (acesso à artéria braquial/pucker) ou lateral/medial conforme o desvio.",
      atRisk: ["Artéria braquial", "Nervo mediano/NIA", "Nervo radial", "Nervo ulnar"],
      figureId: "fratura-supracondiliana-umero:pucker",
    },
  ],

  technique: [
    { n: 1, title: "Avaliação neurovascular dirigida", detail: "Documentar pulso radial, perfusão da mão, e função dos nervos mediano/NIA (pinça 'OK'), radial (extensão do punho/dedos) e ulnar. Procurar sinal do pucker e sinais de síndrome compartimental.", figureId: "fratura-supracondiliana-umero:neurovascular", tips: ["Testar o NIA pela flexão da IFD do indicador e IF do polegar (pinça 'OK')."], pitfalls: ["Confundir mão rosa sem pulso (bem perfundida) com mão pálida sem pulso (isquêmica)."] },
    { n: 2, title: "Definir padrão e urgência", detail: "Classificar por Gartland e mecanismo; confirmar a linha umeral anterior e o ângulo de Baumann. Sem comprometimento vascular, a cirurgia pode ser programada; mão pálida, pucker, exposta ou compartimental = emergência.", figureId: "fratura-supracondiliana-umero:radiografia", tips: ["A linha umeral anterior deve cruzar o terço médio do capítulo."], pitfalls: ["Atrasar a cirurgia diante de uma mão mal perfundida."] },
    { n: 3, title: "Redução fechada", detail: "Sob fluoroscopia: tração longitudinal, correção do desvio medial/lateral e da rotação, depois hiperflexão com pressão anterior no olécrano para reduzir o tipo extensão.", figureId: "fratura-supracondiliana-umero:gartland", figureVariant: "III", tips: ["Confirmar redução no plano coronal pelo ângulo de Baumann e no sagital pela linha umeral anterior."], pitfalls: ["Deformidade rotacional residual (checar a linha oblíqua/coluna)."] },
    { n: 4, title: "Fixação percutânea", detail: "Preferir 2–3 fios laterais divergentes, bicorticais, com ampla separação no foco. Se necessário fio medial, usar mini-incisão com o cotovelo em extensão para afastar e proteger o nervo ulnar.", figureId: "fratura-supracondiliana-umero:pinagem", figureVariant: "lateral", tips: ["Separação ampla dos fios no traço aumenta a estabilidade rotacional."], pitfalls: ["Fio medial percutâneo às cegas com o cotovelo fletido lesa o nervo ulnar."] },
    { n: 5, title: "Confirmar estabilidade e perfusão", detail: "Testar estabilidade sob fluoroscopia (identifica Gartland IV), reavaliar pulso/perfusão após a fixação e imobilizar com o cotovelo abaixo de 90° para não comprometer a circulação.", figureId: "fratura-supracondiliana-umero:pinagem", figureVariant: "cruzada", tips: ["Se a mão permanecer mal perfundida após redução e fixação, explorar a artéria braquial."], pitfalls: ["Imobilizar em flexão excessiva e precipitar isquemia/compartimental."] },
  ],

  postop: {
    immobilization: "Tala/gesso axilopalmar com cotovelo a ~70–80° (abaixo de 90°) por 3–4 semanas, até a consolidação e a retirada dos fios.",
    weightBearing: "Membro superior sem carga; retorno gradual às atividades após a consolidação.",
    rehab: [
      { window: "0–3 sem", weightBearing: "Sem carga", focus: "Imobilização; vigilância neurovascular e de compartimento; elevação" },
      { window: "3–4 sem", weightBearing: "Sem carga", focus: "Retirada dos fios após sinais de consolidação; início da mobilização ativa" },
      { window: "4–12 sem", weightBearing: "Progressiva", focus: "Recuperação de flexo-extensão e força; a maioria das crianças recupera ADM sem fisioterapia formal" },
    ],
    followup: "Radiografias para consolidação e alinhamento (ângulo de Baumann, linha umeral anterior); vigiar cúbito varo e recuperação neurológica; a maioria dos déficits neurais é neuropraxia e resolve em semanas a meses.",
  },

  complications: [
    { name: "Lesão neurológica", detail: "O NIA/mediano é o mais afetado no tipo extensão; radial e ulnar também ocorrem. A maioria é neuropraxia com recuperação espontânea.", prevention: "Exame dirigido pré e pós-operatório; técnica cuidadosa na pinagem medial." },
    { name: "Lesão do nervo ulnar iatrogênica", detail: "Associada ao fio medial, sobretudo em pinagem cruzada percutânea com cotovelo fletido.", prevention: "Priorizar fios laterais; se usar fio medial, mini-incisão com cotovelo em extensão." },
    { name: "Lesão vascular / mão sem pulso", detail: "Comprometimento da artéria braquial. Distinguir mão pálida sem pulso (isquêmica, urgência) da mão rosa sem pulso (bem perfundida).", prevention: "Redução urgente; observação na mão rosa perfundida; exploração se persiste má perfusão." },
    { name: "Síndrome compartimental / isquemia de Volkmann", detail: "Aumento da pressão do antebraço; dor à extensão passiva dos dedos é o sinal precoce. Não tratada, evolui para contratura isquêmica de Volkmann.", prevention: "Evitar imobilização em flexão > 90°; monitorar; fasciotomia se instalada." },
    { name: "Cúbito varo", detail: "Deformidade em varo ('gunstock') por consolidação viciosa/redução inadequada no plano coronal; sobretudo estético, mas persistente.", prevention: "Redução anatômica guiada pelo ângulo de Baumann; osteotomia corretiva se sintomático." },
    { name: "Rigidez", detail: "Perda transitória de ADM após imobilização, geralmente recuperada em crianças.", prevention: "Mobilização precoce após a retirada dos fios." },
  ],

  evidence: [
    { id: "woratanarat-2012", claim: "Meta-análise (18 estudos, 1615 fraturas): a pinagem cruzada teve risco de lesão iatrogênica do nervo ulnar 4,3 vezes maior que a lateral, sem diferença em perda de fixação ou critérios de Flynn.", takeaway: "Preferir fios laterais pela menor lesão do nervo ulnar.", level: "I", studyType: "Meta-análise", era: "classico", citation: { authors: "Woratanarat P, Angsanuntsukh C, Rattanasiri S, Attia J, Woratanarat T, Thakkinstian A", title: "Meta-analysis of pinning in supracondylar fracture of the humerus in children", journal: "J Orthop Trauma", year: 2012, pmid: "21909033", doi: "10.1097/BOT.0b013e3182143de0", url: "https://doi.org/10.1097/BOT.0b013e3182143de0" } },
    { id: "xing-2023", claim: "Meta-análise de 19 ECRs (1297 fraturas Gartland II/III): a pinagem cruzada perdeu menos redução, porém com maior risco de lesão do ulnar; esse risco desaparece quando o fio medial é colocado por técnica mini-aberta.", takeaway: "Cruzada estabiliza mais; se usada, o fio medial deve ser mini-aberto para proteger o ulnar.", level: "I", studyType: "Meta-análise de ECRs", era: "atual", citation: { authors: "Xing B, Dong B, Che X", title: "Medial-lateral versus lateral-only pinning fixation in children with displaced supracondylar humeral fractures: a meta-analysis of randomized controlled trials", journal: "J Orthop Surg Res", year: 2023, pmid: "36647086", doi: "10.1186/s13018-023-03528-8", url: "https://doi.org/10.1186/s13018-023-03528-8" } },
    { id: "ismayl-2022", claim: "Revisão sistemática e meta-análise (14 estudos, 1263 pacientes) em Gartland III: cirurgia precoce vs tardia sem diferença em conversão para redução aberta, síndrome compartimental, lesão nervosa/vascular ou infecção.", takeaway: "Sem comprometimento vascular, o adiamento não emergencial da cirurgia é seguro.", level: "II", studyType: "Revisão sistemática e meta-análise", era: "atual", citation: { authors: "Ismayl G, Kim WJ, Iqbal M, Sajid S", title: "Early Versus Delayed Treatment for Gartland Type III Supracondylar Humeral Fractures in Children: A Systematic Review and Meta-analysis", journal: "Indian J Orthop", year: 2022, pmid: "36092280", doi: "10.1007/s43465-022-00734-0", url: "https://doi.org/10.1007/s43465-022-00734-0" } },
    { id: "delniotis-2018", claim: "Revisão sistemática (608 fraturas sem pulso): a redução e fixação são prioridade em todas; na mão rosa bem perfundida sem pulso indica-se observação, enquanto a mão pálida mal perfundida que não reperfunde exige exploração da artéria braquial.", takeaway: "Reduzir primeiro; observar a mão rosa perfundida, explorar a mão pálida que não reperfunde.", level: "II", studyType: "Revisão sistemática", era: "atual", citation: { authors: "Delniotis I, Delniotis A, Saloupis P, et al.", title: "Management of the Pediatric Pulseless Supracondylar Humeral Fracture: A Systematic Review and Comparison Study of 'Watchful Expectancy Strategy' Versus Surgical Exploration of the Brachial Artery", journal: "Ann Vasc Surg", year: 2019, pmid: "30081162", doi: "10.1016/j.avsg.2018.05.045", url: "https://doi.org/10.1016/j.avsg.2018.05.045" } },
    { id: "griffin-2008", claim: "Revisão da literatura sobre a 'mão rosa sem pulso': angiografia e duplex agregam pouco; a criança bem perfundida pode ser manejada expectantemente, reservando a exploração para sinais adicionais de isquemia.", takeaway: "Referência clássica: observação criteriosa da mão rosa sem pulso.", level: "IV", studyType: "Revisão narrativa", era: "classico", citation: { authors: "Griffin KJ, Walsh SR, Markar S, Tang TY, Boyle JR, Hayes PD", title: "The pink pulseless hand: a review of the literature regarding management of vascular complications of supracondylar humeral fractures in children", journal: "Eur J Vasc Endovasc Surg", year: 2008, pmid: "18851922", doi: "10.1016/j.ejvs.2008.08.013", url: "https://doi.org/10.1016/j.ejvs.2008.08.013" } },
  ],

  pearls: [
    "98% são tipo extensão; a linha umeral anterior deve cruzar o terço médio do capítulo.",
    "NIA é o nervo mais lesado no tipo extensão — teste a pinça 'OK'.",
    "Fios laterais divergentes são o padrão; poupam o nervo ulnar.",
    "Sem lesão vascular, a maioria não é emergência — pode aguardar horário eletivo.",
    "Mão rosa sem pulso bem perfundida: reduzir, fixar e observar.",
    "Dor à extensão passiva dos dedos é o sinal precoce de síndrome compartimental.",
  ],

  pitfalls: [
    "Colocar fio medial percutâneo com o cotovelo fletido e lesar o nervo ulnar.",
    "Imobilizar em flexão > 90° e precipitar isquemia/síndrome compartimental.",
    "Ignorar o sinal do pucker (fratura irredutível, alto risco vascular).",
    "Tratar mão pálida sem pulso como se fosse mão rosa perfundida.",
    "Deixar deformidade coronal/rotacional e evoluir para cúbito varo.",
  ],

  figures: [
    { id: "fratura-supracondiliana-umero:anatomia", kind: "diagram", caption: "Úmero distal da criança: colunas medial/lateral, fossa do olécrano, capítulo, tróclea e a fise.", alt: "Anatomia do úmero distal imaturo com placa de crescimento." },
    { id: "fratura-supracondiliana-umero:gartland", variant: "I", kind: "diagram", caption: "Gartland I — sem desvio.", alt: "Fratura supracondiliana sem desvio." },
    { id: "fratura-supracondiliana-umero:gartland", variant: "II", kind: "diagram", caption: "Gartland II — desviada com córtex posterior íntegro.", alt: "Fratura em extensão com dobradiça cortical posterior." },
    { id: "fratura-supracondiliana-umero:gartland", variant: "III", kind: "diagram", caption: "Gartland III — totalmente desviada.", alt: "Fratura supracondiliana completamente desviada." },
    { id: "fratura-supracondiliana-umero:gartland", variant: "IV", kind: "diagram", caption: "Gartland IV — instabilidade multidirecional (Leitch).", alt: "Fratura instável em flexão e extensão." },
    { id: "fratura-supracondiliana-umero:mecanismo", variant: "extensao", kind: "diagram", caption: "Tipo extensão (98%) — fragmento distal posterior.", alt: "Mecanismo de extensão com desvio posterior." },
    { id: "fratura-supracondiliana-umero:mecanismo", variant: "flexao", kind: "diagram", caption: "Tipo flexão (~2%) — fragmento distal anterior.", alt: "Mecanismo de flexão com desvio anterior." },
    { id: "fratura-supracondiliana-umero:radiografia", kind: "diagram", caption: "Linha umeral anterior (terço médio do capítulo) e ângulo de Baumann.", alt: "Referências radiográficas de redução." },
    { id: "fratura-supracondiliana-umero:pinagem", variant: "lateral", kind: "diagram", caption: "Pinagem lateral divergente — configuração padrão.", alt: "Fixação com fios laterais divergentes." },
    { id: "fratura-supracondiliana-umero:pinagem", variant: "cruzada", kind: "diagram", caption: "Pinagem cruzada — fio medial com risco ao nervo ulnar.", alt: "Fixação cruzada com fio medial próximo ao nervo ulnar." },
    { id: "fratura-supracondiliana-umero:neurovascular", kind: "diagram", caption: "Estruturas em risco: artéria braquial, mediano/NIA, radial e ulnar.", alt: "Estruturas neurovasculares ao redor do cotovelo." },
    { id: "fratura-supracondiliana-umero:pucker", kind: "diagram", caption: "Sinal do pucker — botoeira do fragmento proximal com retração cutânea anterior.", alt: "Sinal do pucker na fossa antecubital." },
    { id: "fratura-supracondiliana-umero:volkmann", kind: "diagram", caption: "Contratura isquêmica de Volkmann — sequela da síndrome compartimental.", alt: "Mão em garra por contratura isquêmica." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024)",
      "Herring JA. Tachdjian's Pediatric Orthopaedics, 6ª ed. (2022)",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics, 8ª ed. (2021)",
      "Bibliografia TEOT 2026",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados.",
    figureReference: "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024)",
  },
});
