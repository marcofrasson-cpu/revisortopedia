import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-cotovelo-luxacao",
  slug: "luxacao-cotovelo",
  regionId: "membro-superior",
  bone: "Cotovelo",
  injury: "Luxação",
  title: "Luxação do cotovelo",
  subtitle:
    "A segunda articulação que mais luxa no adulto. A decisão central é separar a luxação simples — que se trata por redução e mobilização precoce — da complexa, com fratura associada.",
  laterality: null,
  status: "complete",

  overview:
    "O cotovelo é a articulação grande que mais luxa no adulto (atrás apenas do ombro). O mecanismo típico é queda sobre a mão com o cotovelo em ligeira flexão, gerando carga axial, valgo e supinação — um padrão de instabilidade posterolateral rotatória que rompe os estabilizadores da lateral para a medial (círculo de Horii).\n\nA distinção clínica fundamental é entre a luxação SIMPLES (puramente ligamentar, sem fratura) e a COMPLEXA (com fratura de coronoide, cabeça do rádio ou olécrano). A simples, na imensa maioria, é tratada por redução fechada seguida de mobilização precoce — a rigidez, e não a recorrência, é o desfecho a temer. A complexa costuma exigir cirurgia para restaurar os estabilizadores ósseos e ligamentares e permitir movimento precoce sem reluxação.",

  keyFacts: [
    { label: "Frequência", value: "2ª articulação grande que mais luxa (após o ombro)" },
    { label: "Direção", value: "~90% posterior / posterolateral" },
    { label: "Mecanismo", value: "Carga axial + valgo + supinação (PLRI)" },
    { label: "Simples", value: "Redução + mobilização precoce (não cirúrgico)" },
    { label: "Complexa", value: "Fratura associada → em geral cirúrgica" },
    { label: "Inimigo nº 1", value: "Rigidez, não recorrência" },
  ],

  anatomy: {
    text:
      "A estabilidade do cotovelo repousa sobre estabilizadores primários e secundários. Os primários são: a articulação ulnoumeral (tróclea–incisura troclear, com o processo coronoide como bloqueio anterior), o complexo ligamentar colateral lateral (LCL, sobretudo o feixe ulnar — LUCL, principal freio à instabilidade posterolateral rotatória) e o feixe anterior do ligamento colateral medial (LCM, principal freio ao valgo). Os secundários são a cabeça do rádio, a cápsula anterior e a musculatura flexopronadora e extensora comum.\n\nO coronoide é a pedra angular da estabilidade anteroposterior: mesmo pequenas fraturas da sua ponta sinalizam um vetor de instabilidade importante. Compreender que a lesão progride da lateral (LUCL) para a medial (LCM) — o 'círculo de Horii' — explica por que reparar a coluna lateral costuma bastar para restabelecer a estabilidade concêntrica na maioria dos casos.",
    figureIds: ["luxacao-cotovelo:anatomia", "luxacao-cotovelo:circulo-horii"],
  },

  classification: [
    {
      id: "direcao",
      name: "Classificação pela direção",
      basis: "Deslocamento do antebraço em relação ao úmero distal",
      note: "A grande maioria é posterior ou posterolateral.",
      types: [
        { code: "POST", label: "Posterior / posterolateral", description: "Antebraço deslocado posteriormente; padrão mais comum, ligado à instabilidade posterolateral rotatória.", figureId: "luxacao-cotovelo:direcao", figureVariant: "posterior" },
        { code: "ANT", label: "Anterior", description: "Rara; associada a trauma de alta energia e maior risco de lesão do olécrano e neurovascular.", figureId: "luxacao-cotovelo:direcao", figureVariant: "anterior" },
        { code: "DIV", label: "Divergente / lateral / medial", description: "Padrões raros, quase sempre de alta energia, com desarranjo da articulação radioulnar proximal.", figureId: "luxacao-cotovelo:direcao", figureVariant: "posterior" },
      ],
    },
    {
      id: "simples-complexa",
      name: "Simples vs complexa",
      basis: "Presença de fratura associada",
      note: "Divisor prognóstico e terapêutico mais importante.",
      types: [
        { code: "S", label: "Simples", description: "Lesão puramente ligamentar, sem fratura. Estável após redução na maioria dos casos; tratamento não cirúrgico com mobilização precoce.", figureId: "luxacao-cotovelo:simples-complexa", figureVariant: "simples" },
        { code: "C", label: "Complexa", description: "Com fratura associada (coronoide, cabeça do rádio, olécrano). Ex.: tríade terrível (luxação posterolateral + fratura da cabeça do rádio + fratura do coronoide). Em geral cirúrgica.", figureId: "luxacao-cotovelo:simples-complexa", figureVariant: "complexa" },
      ],
    },
    {
      id: "horii",
      name: "Estágios de Horii (instabilidade posterolateral rotatória)",
      basis: "Progressão anatômica da ruptura, da lateral para a medial",
      types: [
        { code: "1", label: "Ruptura do LUCL", description: "Subluxação posterolateral rotatória; o LUCL é o primeiro a ceder.", figureId: "luxacao-cotovelo:circulo-horii", figureVariant: "1" },
        { code: "2", label: "Ruptura capsular", description: "Progressão para a cápsula anterior e posterior; luxação incompleta ('perched').", figureId: "luxacao-cotovelo:circulo-horii", figureVariant: "2" },
        { code: "3", label: "Ruptura do LCM", description: "Falência do feixe anterior do LCM; luxação completa. Subdividido conforme o LCM esteja parcial (3A) ou totalmente (3B) roto.", figureId: "luxacao-cotovelo:circulo-horii", figureVariant: "3" },
      ],
    },
  ],

  indications: {
    operative: [
      "Instabilidade após redução (reluxação dentro do arco funcional, < 30° de extensão)",
      "Luxação complexa: tríade terrível, fratura significativa do coronoide ou da cabeça do rádio",
      "Fratura-luxação do olécrano / lesão de Monteggia associada",
      "Redução não concêntrica ou incarceração de fragmento osteocondral",
      "Luxação irredutível ou aberta; lesão vascular associada",
    ],
    nonOperative: [
      "Luxação simples com redução concêntrica e estável",
      "Estabilidade mantida ao longo de um arco funcional de movimento (extensão até ~30°)",
    ],
    decisionNotes:
      "Após redução fechada, testar a estabilidade sob fluoroscopia: se o cotovelo permanece reduzido e concêntrico ao longo de um arco funcional, trata-se como simples com mobilização precoce. A tendência a reluxar apenas em extensão terminal pode ser controlada com bloqueio de extensão temporário. A necessidade de flexão acima de 50–60° para manter a redução, ou reluxação dentro do arco funcional, indica lesão estrutural que exige cirurgia. Radiografia pós-redução obrigatória para descartar fratura associada e confirmar congruência (sinal do 'drop').",
  },

  approaches: [
    {
      id: "lateral-kocher",
      name: "Via lateral (Kocher)",
      indication: "Reparo do LCL/LUCL, fixação/substituição da cabeça do rádio e acesso ao coronoide na tríade terrível.",
      interval: "Entre ancôneo e extensor ulnar do carpo; proteger o LUCL",
      atRisk: ["Ligamento colateral lateral (LUCL)", "Nervo interósseo posterior (pronar o antebraço)"],
      figureId: "luxacao-cotovelo:teste-estabilidade",
    },
    {
      id: "medial",
      name: "Via medial (over-the-top / Hotchkiss)",
      indication: "Acesso ao coronoide e reparo do LCM quando a estabilidade não é restaurada apenas pela lateral.",
      interval: "Elevação da musculatura flexopronadora; identificar e proteger o nervo ulnar",
      atRisk: ["Nervo ulnar", "Feixe anterior do LCM"],
      figureId: "luxacao-cotovelo:anatomia",
    },
  ],

  technique: [
    { n: 1, title: "Avaliar e reduzir", detail: "Exame neurovascular antes e depois. Redução sob analgesia/sedação: tração longitudinal do antebraço com o cotovelo em leve flexão, corrigindo o desvio medial/lateral e empurrando o olécrano para anterior enquanto se flete e supina.", figureId: "luxacao-cotovelo:reducao", tips: ["Documentar pulso e função dos nervos mediano, ulnar e interósseo posterior."], pitfalls: ["Reduzir sem radiografia pré e pós — pode mascarar fratura associada."] },
    { n: 2, title: "Confirmar redução concêntrica", detail: "Radiografia AP e perfil. Buscar congruência ulnoumeral perfeita; o 'drop sign' (alargamento do espaço ulnoumeral) denota redução não concêntrica ou instabilidade grosseira.", figureId: "luxacao-cotovelo:teste-estabilidade", tips: ["Perfil verdadeiro é essencial para ver a congruência."], pitfalls: ["Aceitar redução não concêntrica como adequada."] },
    { n: 3, title: "Testar estabilidade dinâmica", detail: "Sob fluoroscopia, mover o cotovelo em todo o arco. Definir o arco estável e o ângulo em que ocorre reluxação; testar em pronação (protege a lateral) e supinação.", figureId: "luxacao-cotovelo:teste-estabilidade", tips: ["Pronação estabiliza a lesão do LCL; usar durante a mobilização."], pitfalls: ["Não caracterizar o arco estável antes de decidir conduta."] },
    { n: 4, title: "Simples estável → mobilização precoce", detail: "Tala por poucos dias apenas para conforto; iniciar movimento ativo em poucos dias, evitando estresse em varo e a extensão terminal se houver tendência a reluxar.", figureId: "luxacao-cotovelo:simples-complexa", figureVariant: "simples", tips: ["Movimento ativo assistido dentro do arco estável reduz rigidez."], pitfalls: ["Imobilização prolongada (> 1–2 semanas) → contratura em flexão."] },
    { n: 5, title: "Instável / complexa → cirurgia", detail: "Restaurar de fora para dentro: fixar/substituir a cabeça do rádio, fixar o coronoide (sutura ou parafuso), reparar o LCL/LUCL à sua origem no epicôndilo lateral; reavaliar. Se ainda instável, reparar o LCM ou aplicar fixador articulado.", figureId: "luxacao-cotovelo:simples-complexa", figureVariant: "complexa", tips: ["Na tríade, reparar a coluna lateral costuma restaurar a estabilidade."], pitfalls: ["Ressecar a cabeça do rádio sem substituir num cotovelo instável."] },
    { n: 6, title: "Reabilitação orientada pela estabilidade", detail: "Após reparo, mobilizar precocemente dentro do arco seguro definido no intraoperatório, em pronação quando a lesão é lateral; bloqueio de extensão progressivo conforme cicatrização.", figureId: "luxacao-cotovelo:teste-estabilidade", tips: ["O objetivo é movimento precoce protegido, não imobilização."], pitfalls: ["Estresse em varo precoce estressa o reparo lateral."] },
  ],

  postop: {
    immobilization: "Simples: tala por poucos dias, só para conforto. Complexa/reparada: tala em ~90° por poucos dias, depois órtese articulada com bloqueio de extensão ajustável.",
    weightBearing: "Sem carga no membro; foco em recuperar movimento (extensão e pronossupinação) precocemente.",
    rehab: [
      { window: "0–1 sem", weightBearing: "Sem carga", focus: "Controle da dor; iniciar movimento ativo dentro do arco estável (pronação se lesão lateral)" },
      { window: "1–3 sem", weightBearing: "Sem carga", focus: "ADM ativa-assistida de flexo-extensão e pronossupinação; evitar varo e extensão terminal" },
      { window: "3–6 sem", weightBearing: "Sem carga", focus: "Ampliar arco, reduzir bloqueio de extensão progressivamente" },
      { window: "6–12 sem", weightBearing: "Progressiva", focus: "Ganho de extensão terminal e fortalecimento; tratar rigidez residual" },
    ],
    followup: "Radiografias seriadas para confirmar redução concêntrica mantida (vigiar 'drop sign' e subluxação); monitorar rigidez e ossificação heterotópica.",
  },

  complications: [
    { name: "Rigidez / contratura em flexão", detail: "Complicação mais comum, fortemente associada a imobilização prolongada; perda da extensão terminal.", prevention: "Mobilização precoce dentro do arco estável." },
    { name: "Instabilidade recorrente", detail: "Reluxação ou subluxação por lesão estrutural não reconhecida (LUCL, coronoide) ou reparo insuficiente.", prevention: "Testar estabilidade sob fluoroscopia; reparar estabilizadores na complexa." },
    { name: "Redução não concêntrica ('drop sign')", detail: "Alargamento do espaço ulnoumeral por fragmento incarcerado, tecido interposto ou instabilidade grosseira.", prevention: "Confirmar congruência no perfil; revisar se houver alargamento." },
    { name: "Ossificação heterotópica", detail: "Mais frequente em trauma de alta energia, tríade terrível e trauma craniano associado; pode limitar o arco.", prevention: "Mobilização precoce; considerar profilaxia em casos de alto risco." },
    { name: "Lesão neurovascular", detail: "Nervo ulnar (o mais comum), mediano ou interósseo posterior; artéria braquial em luxações anteriores/alta energia.", prevention: "Exame neurovascular pré e pós-redução; proteger o ulnar na via medial." },
    { name: "Artrose pós-traumática", detail: "Por dano condral inicial ou incongruência residual, sobretudo nas complexas.", prevention: "Restaurar congruência articular e estabilidade." },
  ],

  evidence: [
    { id: "mehlhoff-1988", claim: "Série clássica de 52 luxações simples tratadas de forma fechada: 15% desenvolveram contratura em flexão > 30° e a imobilização prolongada associou-se fortemente a maior contratura (p < 0,001) e mais dor.", takeaway: "O movimento ativo precoce é o fator-chave da reabilitação; imobilizar por muito tempo gera rigidez.", level: "IV", studyType: "Série de casos", era: "classico", citation: { authors: "Mehlhoff TL, Noble PC, Bennett JB, Tullos HS", title: "Simple dislocation of the elbow in the adult. Results after closed treatment", journal: "J Bone Joint Surg Am", year: 1988, pmid: "3343270" } },
    { id: "iordens-2015", claim: "ECR multicêntrico (FuncSiE, n=100): mobilização precoce vs 3 semanas de gesso na luxação simples. Aos 6 semanas, o grupo de mobilização precoce teve menos incapacidade (DASH) e maior arco de flexo-extensão, com retorno ao trabalho mais rápido (10 vs 18 dias) e sem aumento de complicações nem reluxações; sem diferença em 1 ano.", takeaway: "Mobilização ativa precoce é segura e acelera a recuperação na luxação simples.", level: "I", studyType: "Ensaio clínico randomizado", era: "atual", citation: { authors: "Iordens GIT, Van Lieshout EMM, Schep NWL, et al.", title: "Early mobilisation versus plaster immobilisation of simple elbow dislocations: results of the FuncSiE multicentre randomised clinical trial", journal: "Br J Sports Med", year: 2015, pmid: "26175020", doi: "10.1136/bjsports-2015-094704", url: "https://doi.org/10.1136/bjsports-2015-094704" } },
    { id: "taylor-cochrane-2012", claim: "Revisão Cochrane: nas luxações simples do adulto, não há evidência de que o reparo cirúrgico dos ligamentos melhore a função a longo prazo em comparação ao tratamento conservador; a pesquisa deve focar na duração da imobilização.", takeaway: "Luxação simples não se beneficia de reparo ligamentar de rotina — tratar de forma conservadora.", level: "I", studyType: "Revisão sistemática (Cochrane)", era: "atual", citation: { authors: "Taylor F, Sims M, Theis JC, Herbison GP", title: "Interventions for treating acute elbow dislocations in adults", journal: "Cochrane Database Syst Rev", year: 2012, pmid: "22513954", doi: "10.1002/14651858.CD007908.pub2", url: "https://doi.org/10.1002/14651858.CD007908.pub2" } },
    { id: "vanlieshout-2019", claim: "Análise de custos do FuncSiE: a mobilização precoce reduziu o absenteísmo (10 vs 18 dias) e o custo total por paciente (€3624 vs €7072) frente ao gesso, com resultados clínicos equivalentes.", takeaway: "Além de clinicamente superior, a mobilização precoce é a opção mais custo-efetiva na luxação simples.", level: "I", studyType: "Análise econômica de ECR", era: "atual", citation: { authors: "Van Lieshout EMM, Iordens GIT, Polinder S, et al.", title: "Early mobilization versus plaster immobilization of simple elbow dislocations: a cost analysis of the FuncSiE multicenter randomized clinical trial", journal: "Arch Orthop Trauma Surg", year: 2019, pmid: "31760487", doi: "10.1007/s00402-019-03309-1", url: "https://doi.org/10.1007/s00402-019-03309-1" } },
    { id: "liu-2018", claim: "Coorte prospectiva (n=42) de tríade terrível tratada por protocolo padronizado (reparo/substituição da cabeça do rádio, fixação do coronoide e reparo do LCL): Mayo médio de 88 pontos e arco de flexo-extensão de ~107°, à custa de taxa não desprezível de complicações (OH, neuropraxia, reoperação).", takeaway: "Na luxação complexa, a reconstrução sistemática dos estabilizadores permite bons resultados funcionais, mas com complicações relevantes.", level: "IV", studyType: "Coorte prospectiva", era: "atual", citation: { authors: "Liu G, Ma W, Li M, Feng J, Xu R, Pan Z", title: "Operative treatment of terrible triad of the elbow with a modified Pugh standard protocol: Retrospective analysis of a prospective cohort", journal: "Medicine (Baltimore)", year: 2018, pmid: "29668642", doi: "10.1097/MD.0000000000010523", url: "https://doi.org/10.1097/MD.0000000000010523" } },
  ],

  pearls: [
    "Separe simples de complexa: é a decisão que muda tudo.",
    "Na luxação simples, o inimigo é a rigidez — mobilize cedo, não imobilize.",
    "Radiografia pós-redução SEMPRE: congruência concêntrica e descartar fratura.",
    "A lesão progride da lateral para a medial (círculo de Horii); a coluna lateral (LUCL) é a chave.",
    "Pronação estabiliza a lesão do LCL — use durante a mobilização.",
    "Fratura da ponta do coronoide, mesmo pequena, sinaliza instabilidade importante.",
    "Na tríade terrível, reparar a coluna lateral costuma restaurar a estabilidade.",
  ],

  pitfalls: [
    "Imobilizar a luxação simples por semanas e gerar contratura em flexão.",
    "Reparar cirurgicamente uma luxação simples estável sem indicação.",
    "Aceitar redução não concêntrica ('drop sign') como adequada.",
    "Ressecar a cabeça do rádio sem substituir num cotovelo instável.",
    "Não documentar exame neurovascular antes e depois da redução.",
    "Deixar de reconhecer a fratura associada (coronoide/cabeça do rádio) que torna a lesão complexa.",
  ],

  figures: [
    { id: "luxacao-cotovelo:anatomia", kind: "diagram", caption: "Estabilizadores do cotovelo: LCL/LUCL, coronoide, LCM e cabeça do rádio.", alt: "Anatomia dos estabilizadores do cotovelo." },
    { id: "luxacao-cotovelo:direcao", variant: "posterior", kind: "diagram", caption: "Luxação posterior/posterolateral — o padrão mais comum.", alt: "Luxação posterior do cotovelo." },
    { id: "luxacao-cotovelo:direcao", variant: "anterior", kind: "diagram", caption: "Luxação anterior — rara, de alta energia.", alt: "Luxação anterior do cotovelo." },
    { id: "luxacao-cotovelo:simples-complexa", variant: "simples", kind: "diagram", caption: "Luxação simples — sem fratura associada.", alt: "Luxação simples do cotovelo." },
    { id: "luxacao-cotovelo:simples-complexa", variant: "complexa", kind: "diagram", caption: "Luxação complexa — com fratura de coronoide e cabeça do rádio (tríade terrível).", alt: "Luxação complexa do cotovelo." },
    { id: "luxacao-cotovelo:circulo-horii", variant: "1", kind: "diagram", caption: "Círculo de Horii — estágios da instabilidade posterolateral rotatória.", alt: "Estágios de Horii da instabilidade do cotovelo." },
    { id: "luxacao-cotovelo:reducao", kind: "diagram", caption: "Manobra de redução da luxação posterior.", alt: "Redução da luxação posterior do cotovelo." },
    { id: "luxacao-cotovelo:teste-estabilidade", kind: "diagram", caption: "Teste de estabilidade concêntrica e definição do arco estável.", alt: "Teste de estabilidade do cotovelo." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: ["Rockwood and Green's Fractures in Adults, 10ª ed. (2024)", "Campbell's Operative Orthopaedics, 14ª ed. (2021)", "Hebert & Lech, Ortopedia e Traumatologia, 6ª ed. (2025)", "Bibliografia TEOT 2026"],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados.",
    figureReference: "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
  },
});
