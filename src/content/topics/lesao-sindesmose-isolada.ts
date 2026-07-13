import { defineTopic } from "../../types/topic";

/* ============================================================================
   Lesão isolada da sindesmose (entorse alta do tornozelo)
   Conteúdo clínico pt-BR. Figuras com prefixo "lesao-sindesmose-isolada:".
   ========================================================================== */

export const topic = defineTopic({
  id: "lesao-sindesmose-isolada",
  slug: "lesao-sindesmose-isolada",
  regionId: "membro-inferior",
  bone: "Tornozelo",
  injury: "Lesão sindesmótica",
  title: "Lesão isolada da sindesmose",
  subtitle: "Entorse alta do tornozelo — diagnóstico, estabilização e retorno esportivo",
  laterality: null,
  status: "complete",

  overview:
    "A lesão isolada da sindesmose — a chamada 'entorse alta do tornozelo' — corresponde à ruptura do complexo tibiofibular distal (ligamento tibiofibular anterior inferior [AITFL], ligamento interósseo, membrana interóssea e ligamento tibiofibular posterior inferior [PITFL]) sem fratura maleolar associada. É típica de atletas de esportes de contato e de campo, resultando de rotação externa forçada e dorsiflexão do tornozelo com o pé fixo. Diferencia-se da entorse lateral clássica pela dor proximal à interlinha articular, evolução mais arrastada e alto potencial de instabilidade oculta. O desafio central é distinguir lesões estáveis (tratamento funcional) das instáveis (cirúrgicas), pois a instabilidade não reconhecida leva a diástase, incongruência tibiotalar e artrose pós-traumática. A redução anatômica da fíbula na incisura é o determinante prognóstico mais importante, e a fixação dinâmica com suture button vem substituindo progressivamente o parafuso sindesmótico rígido por menor taxa de má-redução e melhor função.",

  keyFacts: [
    { label: "Mecanismo", value: "Rotação externa + dorsiflexão, pé fixo" },
    { label: "Marco clínico", value: "Dor acima da interlinha tibiotalar" },
    { label: "Padrão-ouro imagem", value: "TC axial bilateral comparativa" },
    { label: "Fator prognóstico #1", value: "Redução anatômica da fíbula na incisura" },
    { label: "Tendência de fixação", value: "Suture button (dinâmica) > parafuso" },
    { label: "Retorno ao esporte", value: "~6–12 semanas (lesão estável a instável operada)" },
  ],

  anatomy: {
    text:
      "A sindesmose tibiofibular distal é uma articulação fibrosa mantida por quatro estruturas: (1) o AITFL, que se estende do tubérculo tibial anterior (Chaput) ao tubérculo fibular anterior (Wagstaffe) e é o primeiro a romper; (2) o ligamento interósseo (LIO), continuação distal da membrana interóssea, principal restritor à translação; (3) a membrana interóssea (MIO); e (4) o PITFL, com seu componente profundo (ligamento transverso inferior), o mais resistente e o último a ceder. A fíbula distal aloja-se na incisura fibular da tíbia, uma concavidade de profundidade variável cuja anatomia influencia a congruência da redução. Em dorsiflexão, a tróclea talar, mais larga anteriormente, promove leve rotação externa e translação lateral fisiológicas da fíbula — micromovimento que a fixação ideal deve preservar. A estabilidade rotacional externa depende sobretudo da integridade combinada de AITFL e do ligamento deltoide/PITFL.",
    figureIds: ["lesao-sindesmose-isolada:anatomia"],
  },

  classification: [
    {
      id: "west-point",
      name: "Graduação clínica (West Point / entorse alta)",
      basis: "Gravidade clínica e capacidade de carga",
      note: "Orienta a triagem inicial, mas não substitui a avaliação de estabilidade.",
      types: [
        {
          code: "I",
          label: "Estiramento",
          description:
            "Dor localizada na sindesmose sem instabilidade; carga possível com desconforto. Testes provocativos podem ser positivos, imagem estática normal.",
        },
        {
          code: "II",
          label: "Ruptura parcial",
          description:
            "Dor mais intensa, dificuldade de carga; zona intermediária que exige investigação de instabilidade oculta (estresse/TC), pois inclui lesões latentes.",
        },
        {
          code: "III",
          label: "Ruptura completa / diástase",
          description:
            "Instabilidade franca com diástase tibiofibular; incapacidade de carga. Indicação cirúrgica.",
        },
      ],
    },
    {
      id: "instabilidade",
      name: "Classificação de estabilidade sindesmótica",
      basis: "Congruência e comportamento sob estresse (radiografia/TC/artroscopia)",
      note: "É a classificação que efetivamente decide conduta operatória vs não operatória.",
      types: [
        {
          code: "estavel",
          label: "Estável",
          description:
            "Lesão ligamentar sem diástase ao estresse; incisura congruente na TC bilateral. Tratamento funcional.",
          figureId: "lesao-sindesmose-isolada:tc",
          figureVariant: "normal",
        },
        {
          code: "latente",
          label: "Instabilidade latente (dinâmica)",
          description:
            "Imagem estática normal, porém diástase/rotação sob estresse ou à artroscopia. Grupo de maior risco de subtratamento; frequentemente requer estabilização.",
          figureId: "lesao-sindesmose-isolada:tc",
          figureVariant: "ma-reducao",
        },
        {
          code: "franca",
          label: "Diástase franca",
          description:
            "Instabilidade evidente em imagem estática, com alargamento do espaço claro tibiofibular e/ou incongruência rotacional. Estabilização cirúrgica.",
          figureId: "lesao-sindesmose-isolada:tc",
          figureVariant: "ma-reducao",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Diástase franca da sindesmose em imagem estática (alargamento do espaço claro tibiofibular acima do lado contralateral).",
      "Instabilidade latente confirmada por estresse (rotação externa/hook test) ou artroscopia.",
      "Má-redução da incisura demonstrada em TC bilateral comparativa.",
      "Lesão sindesmótica com componente rotacional em atleta de alta demanda, visando retorno esportivo confiável.",
    ],
    nonOperative: [
      "Lesão estável (grau I e II sem diástase ao estresse) com incisura congruente na TC bilateral.",
      "Ausência de dor à carga progressiva após período de proteção inicial.",
      "Bota imobilizadora com carga conforme dor e reabilitação funcional precoce.",
    ],
    decisionNotes:
      "A decisão gira em torno da estabilidade, não da graduação clínica. Toda lesão intermediária (grau II) merece esforço ativo para excluir instabilidade oculta — radiografia sob estresse de rotação externa e, quando disponível, TC axial bilateral comparativa; a artroscopia é o método mais sensível para instabilidade rotacional sutil. Confirmada a instabilidade, prioriza-se a redução anatômica direta (visualização aberta da incisura) sobre a redução fechada, pois a má-redução é a principal causa de mau resultado. A escolha do implante (suture button vs parafuso) segue-se à decisão de estabilizar.",
  },

  approaches: [
    {
      id: "anterolateral",
      name: "Via ântero-lateral (redução aberta direta)",
      indication:
        "Estabilização sindesmótica quando se deseja visualização direta da incisura e do encaixe da fíbula, reduzindo o risco de má-redução.",
      interval:
        "Incisão sobre a borda anterior da fíbula distal, expondo o tubérculo de Chaput e a incisura fibular; dissecção entre os tendões extensores/fibulares e a face anterior da sindesmose.",
      atRisk: [
        "Nervo fibular superficial (cruza o campo ântero-lateral)",
        "Ramos da artéria fibular perfurante",
        "Tendões extensores/fibulares adjacentes",
      ],
      figureId: "lesao-sindesmose-isolada:via-acesso",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Avaliação da estabilidade e exposição",
      detail:
        "Sob anestesia, confirma-se a instabilidade com hook test/estresse de rotação externa. Realiza-se a via ântero-lateral, expondo a incisura fibular e o tubérculo de Chaput para visualização direta da redução.",
      figureId: "lesao-sindesmose-isolada:via-acesso",
      tips: [
        "A artroscopia diagnóstica prévia aumenta a sensibilidade para instabilidade rotacional.",
        "Identifique e proteja o nervo fibular superficial antes de aprofundar.",
      ],
      pitfalls: [
        "Confiar apenas em imagem estática subestima a instabilidade latente.",
      ],
    },
    {
      n: 2,
      title: "Redução anatômica da fíbula na incisura",
      detail:
        "Com o tornozelo em dorsiflexão neutra, reduz-se a fíbula na incisura sob visualização direta, aplicando a pinça de redução perpendicular ao eixo tibiofibular. Evita-se sobre-compressão e correção rotacional excessiva.",
      figureId: "lesao-sindesmose-isolada:step-reducao",
      tips: [
        "Posicione a pinça exatamente no plano da incisura para não malrotacionar a fíbula.",
        "A redução aberta direta tem taxa de má-redução menor que a fechada.",
      ],
      pitfalls: [
        "Pinça oblíqua gera translação/rotação anteroposterior — causa clássica de má-redução.",
        "Sobre-compressão estreita o espaço e altera a cinemática.",
      ],
    },
    {
      n: 3,
      title: "Posicionamento do implante",
      detail:
        "O implante é passado 1–2 cm acima da interlinha tibiotalar, paralelo ao plafond, com trajeto de posterolateral (fíbula) para anteromedial (tíbia), formando ~30° com o plano coronal, direcionado à tíbia.",
      figureId: "lesao-sindesmose-isolada:step-implante",
      tips: [
        "Mantenha o trajeto paralelo à superfície articular para reproduzir a orientação anatômica.",
        "Angulação de ~30° póstero-anterior captura corretamente a tíbia.",
      ],
      pitfalls: [
        "Nível muito baixo (intra-articular) ou muito alto reduz a estabilidade.",
      ],
    },
    {
      n: 4,
      title: "Fixação dinâmica (suture button) vs rígida (parafuso)",
      detail:
        "No suture button, botões cortical tibial e fibular são conectados por sutura de alta resistência, permitindo micromovimento fisiológico e dispensando retirada rotineira. No parafuso, fixação rígida trans-sindesmótica (3–4 corticais) — maior rigidez, porém maior risco de quebra, má-redução e necessidade de remoção.",
      figureId: "lesao-sindesmose-isolada:fixacao",
      figureVariant: "suture-button",
      tips: [
        "O suture button acomoda o micromovimento e reduz má-redução residual.",
        "Considere reparo/augmentação do AITFL em instabilidade rotacional.",
      ],
      pitfalls: [
        "Tensionar o botão com a fíbula malrotacionada 'trava' a má-redução.",
        "Irritação de partes moles pelo nó — sepulte adequadamente.",
      ],
    },
    {
      n: 5,
      title: "Confirmação intraoperatória da redução",
      detail:
        "Confirma-se a redução com fluoroscopia em incidências padronizadas e, idealmente, TC intraoperatória ou pós-operatória comparativa com o lado contralateral; má-redução identificada deve ser revisada no mesmo tempo.",
      figureId: "lesao-sindesmose-isolada:tc",
      figureVariant: "normal",
      tips: [
        "A TC bilateral é mais sensível que a fluoroscopia para incongruência rotacional.",
        "Na fixação dinâmica, a TC intraoperatória pode enganar se o tornozelo não estiver apoiado a 90°.",
      ],
      pitfalls: [
        "Aceitar redução apenas por fluoroscopia ântero-posterior mascara má-rotação.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Bota imobilizadora ou tala por 2 semanas; retirada de pontos e transição para bota removível conforme conforto e método de fixação.",
    weightBearing:
      "Fixação dinâmica (suture button) tolera carga protegida mais precoce; com parafuso rígido, carga progressiva mais cautelosa. Lesões estáveis tratadas sem cirurgia: carga conforme dor em bota.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Sem carga a carga de toque em bota",
        focus:
          "Controle de edema e dor, mobilização suave de dedos/joelho, elevação; proteção da reconstrução ligamentar.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Carga parcial progressiva em bota",
        focus:
          "Amplitude de movimento do tornozelo, ativação da panturrilha, propriocepção inicial; desmame da bota conforme estabilidade.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Carga total, transição para calçado",
        focus:
          "Fortalecimento de fibulares e tríceps sural, equilíbrio unipodal, marcha normal, início de corrida linear.",
      },
      {
        window: "> 12 semanas",
        weightBearing: "Total, sem restrição",
        focus:
          "Retorno esportivo por critérios: força simétrica, hop tests, agilidade e mudanças de direção sem dor; progressão esporte-específica.",
      },
    ],
    followup:
      "Retorno ao esporte guiado por critérios funcionais (força, propriocepção, testes de salto e agilidade) mais do que por prazo fixo; radiografias/TC de controle conforme evolução. Discutir remoção de parafuso caso sintomático; suture button geralmente não requer retirada.",
  },

  complications: [
    {
      name: "Má-redução da sindesmose",
      detail:
        "Principal determinante de mau resultado; incongruência rotacional/translacional da fíbula na incisura correlaciona-se com piores escores funcionais no seguimento de médio prazo.",
      prevention:
        "Redução aberta direta, pinça perpendicular ao eixo, confirmação por TC bilateral e revisão intraoperatória quando detectada.",
    },
    {
      name: "Artrose pós-traumática",
      detail:
        "Consequência tardia da incongruência tibiotalar e da instabilidade residual não corrigida.",
      prevention: "Restaurar e manter a redução anatômica; tratar instabilidade oculta.",
    },
    {
      name: "Falha/quebra do implante (parafuso)",
      detail:
        "Parafusos rígidos podem quebrar ou soltar com a carga e o micromovimento fisiológico da sindesmose.",
      prevention:
        "Preferir fixação dinâmica quando apropriado; carga protegida no início com parafuso.",
    },
    {
      name: "Necessidade de remoção de implante",
      detail:
        "Taxa de reoperação para retirada substancialmente maior com parafuso do que com suture button.",
      prevention: "Fixação dinâmica reduz reoperações por remoção.",
    },
    {
      name: "Instabilidade/diástase recorrente",
      detail:
        "Perda de redução ou instabilidade persistente, mais associada à fixação rígida com afrouxamento.",
      prevention: "Estabilização adequada e reparo do AITFL em instabilidade rotacional.",
    },
    {
      name: "Lesão do nervo fibular superficial",
      detail: "Neuropraxia ou dor neuropática pela proximidade na via ântero-lateral.",
      prevention: "Identificação e proteção do nervo durante a abordagem.",
    },
  ],

  evidence: [
    {
      id: "andersen-2018",
      claim:
        "Em RCT com 97 pacientes e seguimento de 2 anos, o suture button superou o parafuso único em AOFAS, OMA e EQ-5D, com menor alargamento radiográfico e menos diástase recorrente sintomática.",
      takeaway:
        "Fixação dinâmica oferece melhor função e menor perda de redução que o parafuso a médio prazo.",
      level: "I",
      studyType: "Ensaio clínico randomizado",
      era: "atual",
      citation: {
        authors: "Andersen MR, Frihagen F, Hellund JC, Madsen JE, Figved W",
        title:
          "Randomized Trial Comparing Suture Button with Single Syndesmotic Screw for Syndesmosis Injury",
        journal: "The Journal of Bone and Joint Surgery. American Volume",
        year: 2018,
        pmid: "29298255",
        doi: "10.2106/JBJS.16.01011",
      },
    },
    {
      id: "shimozono-2018",
      claim:
        "Meta-análise de RCTs (285 pacientes) mostrou AOFAS superior no suture button (95,3 vs 86,7) e taxas menores de implante quebrado (0% vs 25,4%), remoção (6% vs 22,4%) e má-redução (0,8% vs 11,5%).",
      takeaway:
        "Evidência de nível I favorece o suture button com recomendação grau A sobre o parafuso.",
      level: "I",
      studyType: "Meta-análise de ensaios randomizados",
      era: "atual",
      citation: {
        authors: "Shimozono Y, Hurley ET, Myerson CL, Murawski CD, Kennedy JG",
        title:
          "Suture Button Versus Syndesmotic Screw for Syndesmosis Injuries: A Meta-analysis of Randomized Controlled Trials",
        journal: "The American Journal of Sports Medicine",
        year: 2018,
        pmid: "30475639",
        doi: "10.1177/0363546518804804",
      },
    },
    {
      id: "kortekangas-2015",
      claim:
        "RCT com avaliação por TC axial bilateral comparativa mostrou que a má-redução foi mais bem mantida com TightRope, enquanto o parafuso teve tendência a aumentar a má-redução no seguimento de 2 anos; a TC intraoperatória pode enganar na fixação dinâmica se o tornozelo não estiver apoiado a 90°.",
      takeaway:
        "A TC bilateral é referência para avaliar redução, e a fixação dinâmica mantém melhor a congruência.",
      level: "I",
      studyType: "Ensaio clínico randomizado",
      era: "atual",
      citation: {
        authors:
          "Kortekangas T, Savola O, Flinkkilä T, Lepojärvi S, Nortunen S, Ohtonen P, Katisko J, Pakarinen H",
        title:
          "A prospective randomised study comparing TightRope and syndesmotic screw fixation for accuracy and maintenance of syndesmotic reduction assessed with bilateral computed tomography",
        journal: "Injury",
        year: 2015,
        pmid: "25769201",
        doi: "10.1016/j.injury.2015.02.004",
      },
    },
    {
      id: "sagi-2012",
      claim:
        "Estudo prospectivo com TC bilateral: 39% das sindesmoses estavam mal reduzidas, e a redução aberta teve muito menos má-redução (15%) que a fechada (44%); pacientes com má-redução tiveram escores funcionais significativamente piores em ≥2 anos.",
      takeaway:
        "A redução anatômica direta é o fator prognóstico crítico; má-redução piora a função.",
      level: "II",
      studyType: "Coorte prospectiva (prognóstico)",
      era: "classico",
      citation: {
        authors: "Sagi HC, Shah AR, Sanders RW",
        title:
          "The functional consequence of syndesmotic joint malreduction at a minimum 2-year follow-up",
        journal: "Journal of Orthopaedic Trauma",
        year: 2012,
        pmid: "22357084",
        doi: "10.1097/BOT.0b013e31822a526a",
      },
    },
    {
      id: "regauer-2022",
      claim:
        "Revisão que sintetiza a literatura em um algoritmo baseado em evidência: a redução anatômica é crucial para prevenir artrose, técnicas dinâmicas devem ser preferidas quando possível, e o AITFL instável deve ser reparado/augmentado como estabilizador da rotação externa.",
      takeaway:
        "Algoritmo atual privilegia redução anatômica, fixação dinâmica e reparo do AITFL na instabilidade rotacional.",
      level: "V",
      studyType: "Revisão narrativa / algoritmo baseado em evidência",
      era: "atual",
      citation: {
        authors: "Regauer M, Mackay G, Nelson O, Böcker W, Ehrnthaller C",
        title: "Evidence-Based Surgical Treatment Algorithm for Unstable Syndesmotic Injuries",
        journal: "Journal of Clinical Medicine",
        year: 2022,
        pmid: "35054025",
        doi: "10.3390/jcm11020331",
      },
    },
  ],

  pearls: [
    "Dor proximal à interlinha tibiotalar após rotação externa é entorse alta até prova em contrário.",
    "A estabilidade — não a graduação clínica — define a conduta.",
    "TC axial bilateral comparativa é o exame de referência para redução e má-redução.",
    "Redução anatômica da fíbula na incisura é o principal determinante prognóstico.",
    "Suture button oferece melhor função, menos má-redução e menos reoperação que o parafuso (nível I).",
    "Retorno ao esporte por critérios funcionais, não apenas por tempo.",
  ],

  pitfalls: [
    "Subestimar instabilidade latente por confiar só em radiografia estática.",
    "Pinça de redução oblíqua, que trava a fíbula em má-rotação.",
    "Sobre-compressão do espaço tibiofibular alterando a cinemática.",
    "Tensionar o implante antes de confirmar a redução na incisura.",
    "Aceitar a redução apenas pela fluoroscopia ântero-posterior, mascarando má-rotação.",
    "Retorno esportivo precoce sem restauração de força e propriocepção.",
  ],

  figures: [
    {
      id: "lesao-sindesmose-isolada:anatomia",
      caption: "Complexo sindesmótico: AITFL, ligamento interósseo, membrana interóssea e PITFL.",
      alt: "Corte axial do tornozelo mostrando a fíbula na incisura fibular da tíbia e os ligamentos sindesmóticos.",
      variant: "axial",
    },
    {
      id: "lesao-sindesmose-isolada:anatomia",
      caption: "Visão coronal: membrana e ligamento interósseos entre tíbia e fíbula.",
      alt: "Visão coronal da tíbia e fíbula distais com membrana interóssea e ligamento interósseo.",
      variant: "coronal",
    },
    {
      id: "lesao-sindesmose-isolada:exame",
      caption: "Teste da rotação externa: dor ântero-lateral com o joelho a 90°.",
      alt: "Perna com joelho flexionado e pé em rotação externa reproduzindo dor na sindesmose.",
      variant: "rotacao-externa",
    },
    {
      id: "lesao-sindesmose-isolada:exame",
      caption: "Squeeze test: compressão do terço médio da perna gera dor distal referida.",
      alt: "Mãos comprimindo a diáfise tibiofibular com dor referida na sindesmose distal.",
      variant: "squeeze",
    },
    {
      id: "lesao-sindesmose-isolada:tc",
      caption: "TC axial bilateral: sindesmose congruente vs má-redução da fíbula.",
      alt: "TC axial comparativa mostrando fíbula bem encaixada e, na variante, fíbula transladada e rodada.",
      variant: "normal",
    },
    {
      id: "lesao-sindesmose-isolada:fixacao",
      caption: "Suture button (dinâmica) vs parafuso trans-sindesmótico (rígida).",
      alt: "Comparação esquemática entre fixação por botões e sutura e fixação por parafuso.",
      variant: "suture-button",
    },
    {
      id: "lesao-sindesmose-isolada:via-acesso",
      caption: "Via ântero-lateral com o nervo fibular superficial em risco.",
      alt: "Visão anterior do tornozelo com incisão ântero-lateral e trajeto do nervo fibular superficial.",
    },
    {
      id: "lesao-sindesmose-isolada:step-reducao",
      caption: "Redução da fíbula na incisura com pinça perpendicular ao eixo tibiofibular.",
      alt: "Pinça de redução aplicada perpendicularmente reduzindo a fíbula na incisura.",
    },
    {
      id: "lesao-sindesmose-isolada:step-implante",
      caption: "Trajeto do implante: 1–2 cm acima do plafond, paralelo à articulação, ~30°.",
      alt: "Visão coronal do trajeto do implante acima da interlinha e paralelo ao plafond.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Andersen et al., J Bone Joint Surg Am 2018 (DOI 10.2106/JBJS.16.01011)",
      "Shimozono et al., Am J Sports Med 2018 (DOI 10.1177/0363546518804804)",
      "Kortekangas et al., Injury 2015 (DOI 10.1016/j.injury.2015.02.004)",
      "Sagi et al., J Orthop Trauma 2012 (DOI 10.1097/BOT.0b013e31822a526a)",
      "Regauer et al., J Clin Med 2022 (DOI 10.3390/jcm11020331)",
    ],
    attribution:
      "Evidências verificadas no PubMed; DOIs conferidos junto aos registros originais. Cite o PubMed ao reutilizar as referências.",
  },
});
