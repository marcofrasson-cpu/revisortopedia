import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-antebraco-fratura-monteggia",
  slug: "fratura-monteggia",
  regionId: "membro-superior",
  bone: "Antebraço",
  injury: "Fratura-luxação",
  title: "Fratura-luxação de Monteggia",
  subtitle:
    "Reconhecer a luxação da cabeça do rádio associada à fratura da ulna e restaurar o comprimento e o contorno da ulna, que reduz indiretamente a articulação radioulnar proximal.",
  laterality: null,
  status: "complete",
  overview:
    "A fratura-luxação de Monteggia é a associação de uma fratura da ulna com luxação da cabeça do rádio na articulação radioulnar proximal. O erro mais frequente não é técnico, mas diagnóstico: a luxação da cabeça do rádio passa despercebida quando a radiografia se limita ao antebraço ou se centra apenas no traço evidente da ulna. Toda fratura da ulna, sobretudo proximal e angulada, exige radiografias que incluam o cotovelo, com avaliação da linha radiocapitelar em todas as incidências. O exame do nervo interósseo posterior deve ser documentado, pois é a lesão neurológica mais associada, em especial nos padrões com deslocamento anterior ou lateral da cabeça do rádio.\n\nNo adulto, a lesão é essencialmente cirúrgica. O princípio central, consolidado desde a série de Ring e Jupiter, é que a redução anatômica e a fixação estável da ulna, com restauração do comprimento, do alinhamento rotacional e do contorno da incisura troclear, reduzem de forma indireta a cabeça do rádio. Quando a ulna é fixada de modo anatômico e a cabeça do rádio não reduz, deve-se suspeitar de interposição do ligamento anular ou de fragmento, o que indica exploração aberta. O padrão de Bado II, o mais comum no adulto, associa-se com frequência a fratura da cabeça do rádio e do processo coronoide, e esses elementos, mais do que a própria luxação, determinam a dificuldade da reconstrução e o prognóstico.",
  keyFacts: [
    { label: "Definição", value: "Fratura da ulna + luxação da cabeça do rádio (radioulnar proximal)" },
    { label: "Princípio", value: "Redução anatômica da ulna reduz a cabeça do rádio" },
    { label: "Mais comum no adulto", value: "Bado II (posterior), com fratura da cabeça do rádio e do coronoide" },
    { label: "Nervo em risco", value: "Interósseo posterior (ramo profundo do radial)" },
    { label: "Imagem", value: "Radiografia do cotovelo + antebraço; linha radiocapitelar" },
    { label: "Adulto", value: "Tratamento cirúrgico com placa; mobilização precoce" },
  ],
  anatomy: {
    text:
      "A articulação radioulnar proximal é formada pela cabeça do rádio, pela incisura radial da ulna e pelo ligamento anular, que envolve o colo do rádio e é o principal estabilizador da cabeça, permitindo a pronossupinação. A estabilidade do complexo depende ainda do ligamento quadrado e da membrana interóssea. A incisura troclear (grande incisura sigmoide) da ulna articula-se com a tróclea umeral; sua reconstrução anatômica, incluindo o processo coronoide, é decisiva para a estabilidade ulno-humeral e para a redução da cabeça do rádio.\n\nO nervo interósseo posterior, ramo profundo do nervo radial, contorna o colo do rádio e atravessa o músculo supinador pela arcada de Frohse, ficando vulnerável nos deslocamentos anteriores e laterais da cabeça do rádio e durante a exposição lateral. A pronação do antebraço afasta o nervo do campo cirúrgico. No acesso posterior à ulna, o nervo ulnar é a estrutura de risco na porção proximal e medial.",
    figureIds: [
      "fratura-monteggia:anatomia",
    ],
  },
  classification: [
    {
      id: "bado",
      name: "Classificação de Bado",
      basis: "Direção da luxação da cabeça do rádio e nível da fratura da ulna.",
      note:
        "A direção do ápice da fratura da ulna costuma acompanhar a direção da luxação da cabeça do rádio. No adulto predomina o tipo II; os tipos III e IV são mais raros. Não confundir com a fratura-luxação transolecraniana, na qual a relação radioulnar proximal está preservada.",
      types: [
        {
          code: "I",
          label: "Bado I — anterior",
          description:
            "Luxação anterior da cabeça do rádio com fratura da diáfise da ulna em ápice anterior. É o padrão mais comum na criança e frequentemente associado à lesão do nervo interósseo posterior.",
          figureId: "fratura-monteggia:bado",
          figureVariant: "1",
        },
        {
          code: "II",
          label: "Bado II — posterior",
          description:
            "Luxação posterior ou posterolateral da cabeça do rádio com fratura da ulna proximal em ápice posterior. É o tipo mais comum no adulto e o que mais se associa a fratura da cabeça do rádio e do coronoide.",
          figureId: "fratura-monteggia:bado",
          figureVariant: "2",
        },
        {
          code: "III",
          label: "Bado III — lateral",
          description:
            "Luxação lateral ou anterolateral da cabeça do rádio com fratura da metáfise proximal da ulna. Ocorre sobretudo na criança e também tem risco elevado de lesão do nervo interósseo posterior.",
          figureId: "fratura-monteggia:bado",
          figureVariant: "3",
        },
        {
          code: "IV",
          label: "Bado IV — anterior com fratura do rádio",
          description:
            "Luxação anterior da cabeça do rádio com fratura da ulna e fratura associada da diáfise do rádio no mesmo nível. É o padrão mais raro e o de reconstrução mais complexa.",
          figureId: "fratura-monteggia:bado",
          figureVariant: "4",
        },
      ],
    },
    {
      id: "jupiter",
      name: "Subclassificação de Jupiter (Bado II)",
      basis: "Localização do traço da ulna e envolvimento do coronoide no padrão posterior.",
      note:
        "Detalha o Bado II do adulto conforme o nível da fratura em relação à incisura troclear e ao coronoide. Quanto mais proximal e articular o traço, maior a dificuldade de reconstrução e pior o prognóstico.",
      types: [
        {
          code: "IIA",
          label: "Jupiter IIA",
          description:
            "Traço ao nível da incisura troclear, envolvendo o coronoide como fragmento significativo. É o subtipo de reconstrução mais exigente e de maior risco de resultado insatisfatório.",
          figureId: "fratura-monteggia:jupiter",
          figureVariant: "a",
        },
        {
          code: "IIB",
          label: "Jupiter IIB",
          description:
            "Traço na junção metadiafisária, distal ao coronoide. A incisura troclear costuma estar preservada, com reconstrução mais previsível.",
          figureId: "fratura-monteggia:jupiter",
          figureVariant: "b",
        },
        {
          code: "IIC",
          label: "Jupiter IIC",
          description:
            "Traço na diáfise da ulna. Tende a comportar-se como fratura diafisária, com melhor prognóstico quanto à incisura troclear.",
          figureId: "fratura-monteggia:jupiter",
          figureVariant: "c",
        },
        {
          code: "IID",
          label: "Jupiter IID",
          description:
            "Cominução que se estende do coronoide à diáfise proximal. A reconstrução do comprimento e do contorno da ulna é o principal desafio técnico.",
          figureId: "fratura-monteggia:jupiter",
          figureVariant: "d",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Praticamente todas as fraturas de Monteggia no adulto: redução aberta e fixação interna da ulna com placa.",
      "Cabeça do rádio que não reduz após a fixação anatômica da ulna, sugerindo interposição do ligamento anular ou de fragmento.",
      "Fratura associada da cabeça do rádio ou do coronoide que comprometa a estabilidade do cotovelo.",
      "Padrões de Bado II com subtipo de Jupiter proximal (IIA/IID), que exigem reconstrução cuidadosa da incisura troclear.",
    ],
    nonOperative: [
      "Fratura estável e incompleta da ulna na criança, com cabeça do rádio reduzida e estável após redução incruenta.",
      "No adulto, o tratamento não cirúrgico é excepcional e reservado a contraindicações clínicas ao procedimento.",
    ],
    decisionNotes:
      "No adulto, a decisão raramente é entre operar ou não, e sim sobre a sequência e a extensão da reconstrução. A prioridade é a fixação anatômica e estável da ulna, que restaura o comprimento, o alinhamento e o contorno da incisura troclear e, com isso, reduz a cabeça do rádio. A cabeça do rádio deve ser tratada quando fraturada ou quando permanece irredutível, mas a ressecção isolada da cabeça em um cotovelo instável deve ser evitada. Na criança, o tratamento depende da estabilidade: fraturas incompletas e estáveis podem ser tratadas de forma incruenta, enquanto as instáveis exigem estabilização da ulna.",
  },
  approaches: [
    {
      id: "posterior-ulna",
      name: "Via posterior direta à ulna",
      indication: "Redução e fixação da fratura da ulna e do coronoide; acesso principal na maioria dos casos.",
      interval:
        "Incisão sobre a borda subcutânea da ulna, com dissecção no intervalo entre o extensor ulnar do carpo e o flexor ulnar do carpo. Exposição subperiosteal da ulna proximal, com identificação e proteção do nervo ulnar na porção proximal e medial.",
      atRisk: [
        "Nervo ulnar na porção proximal e medial",
        "Nervo interósseo posterior na exposição mais distal e lateral",
      ],
      figureId: "fratura-monteggia:via-posterior",
    },
    {
      id: "lateral-radio",
      name: "Via lateral (Kocher/Kaplan) para a cabeça do rádio",
      indication: "Tratamento da fratura da cabeça do rádio ou da luxação irredutível por interposição.",
      interval:
        "Acesso lateral pelo intervalo entre o ancôneo e o extensor ulnar do carpo (Kocher) ou anterior a este, com o antebraço em pronação para afastar o nervo interósseo posterior do campo.",
      atRisk: [
        "Nervo interósseo posterior ao redor do colo do rádio",
        "Complexo ligamentar colateral lateral",
      ],
      figureId: "fratura-monteggia:radiocapitelar",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Reconhecer a lesão e planejar",
      detail:
        "Obter radiografias que incluam cotovelo e antebraço e conferir a linha radiocapitelar em todas as incidências; o eixo do rádio deve apontar ao centro do capítulo. Classificar por Bado e, no Bado II, pelo subtipo de Jupiter. Documentar a função do nervo interósseo posterior e planejar o tratamento da cabeça do rádio e do coronoide.",
      figureId: "fratura-monteggia:bado",
      figureVariant: "2",
      tips: [
        "Toda fratura proximal da ulna angulada deve levantar a suspeita de Monteggia",
        "A TC ajuda a definir o coronoide e a cominução no Bado II",
      ],
      pitfalls: [
        "Radiografar apenas o antebraço e não visualizar a cabeça do rádio",
        "Confundir com fratura-luxação transolecraniana, na qual a radioulnar proximal está preservada",
      ],
    },
    {
      n: 2,
      title: "Posicionar e acessar a ulna",
      detail:
        "Posicionar o paciente de modo a permitir a via posterior direta e a fluoroscopia. Expor a ulna pela borda subcutânea, proteger o nervo ulnar proximalmente e limpar o foco de fratura sem desperiostizar excessivamente os fragmentos.",
      figureId: "fratura-monteggia:via-posterior",
      tips: ["Preservar a vascularização dos fragmentos do coronoide", "Planejar a osteossíntese antes de expor totalmente"],
      pitfalls: ["Desperiostização ampla que compromete a consolidação", "Lesão do nervo ulnar por afastamento proximal agressivo"],
    },
    {
      n: 3,
      title: "Reconstruir o contorno e o coronoide",
      detail:
        "Restaurar o comprimento, o alinhamento rotacional e o contorno da incisura troclear, que é o determinante da estabilidade e da redução do rádio. Reduzir e fixar o fragmento do coronoide, quando presente, antes ou junto da fixação definitiva, com sutura, parafuso ou placa conforme o tamanho.",
      figureId: "fratura-monteggia:fixacao-ulna",
      tips: ["A incisura troclear guia a redução; evite encurtamento", "Fragmento grande do coronoide muda a estratégia de fixação"],
      pitfalls: ["Reconstruir a diáfise e negligenciar o coronoide", "Aceitar angulação residual que perpetua a luxação"],
    },
    {
      n: 4,
      title: "Fixar a ulna de forma estável",
      detail:
        "Fixar a ulna com placa, preferencialmente na face dorsal (lado de tensão) da ulna proximal, contornada à anatomia. As placas bloqueadas ajudam na região metafisária cominutiva. A estabilidade deve permitir mobilização precoce.",
      figureId: "fratura-monteggia:fixacao-ulna",
      tips: ["Placa dorsal resiste melhor às forças de tração na ulna proximal", "Considerar placa bloqueada em cominução metafisária"],
      pitfalls: ["Fixação insuficiente que leva a perda de redução e pseudartrose", "Placa curta que não ancora a diáfise distal ao traço"],
    },
    {
      n: 5,
      title: "Confirmar a redução da cabeça do rádio",
      detail:
        "Com a ulna reduzida e fixada, confirmar sob fluoroscopia que a cabeça do rádio está reduzida e concêntrica ao capítulo em todas as incidências e ao longo de todo o arco de movimento. Se a cabeça não reduz, suspeitar de interposição do ligamento anular ou de fragmento e explorar por via lateral.",
      figureId: "fratura-monteggia:radiocapitelar",
      tips: ["Testar a redução em pronossupinação completa", "Reduzir a ulna anatomicamente resolve a maioria das luxações"],
      pitfalls: ["Deixar cabeça subluxada por confiar apenas em uma incidência", "Insistir em manobra fechada diante de interposição do ligamento anular"],
    },
    {
      n: 6,
      title: "Tratar a cabeça do rádio e checar estabilidade",
      detail:
        "Tratar a fratura da cabeça do rádio com fixação quando reconstrutível ou com artroplastia quando cominutiva e essencial à estabilidade; evitar a ressecção isolada no cotovelo instável. Avaliar a estabilidade ulno-humeral e o complexo colateral lateral, reparando-os quando necessário, e verificar o arco de movimento estável.",
      figureId: "fratura-monteggia:radiocapitelar",
      tips: ["Cabeça do rádio é estabilizador secundário importante nesse contexto", "Reavaliar a estabilidade antes de fechar"],
      pitfalls: ["Ressecar a cabeça do rádio em cotovelo instável", "Ignorar lesão do colateral lateral associada"],
    },
  ],
  postop: {
    immobilization:
      "Imobilização breve para conforto e proteção das partes moles, seguida de mobilização precoce quando a fixação é estável. A posição de imobilização e a liberação da rotação são ajustadas conforme a estabilidade radiocapitelar e o tratamento da cabeça do rádio.",
    weightBearing:
      "Sem carga ou esforço no membro operado na fase inicial. O retorno progressivo depende de sinais de consolidação e da estabilidade do cotovelo.",
    rehab: [
      {
        window: "0-2 semanas",
        weightBearing: "Sem carga",
        focus: "Controle da dor e do edema; mobilização ativa suave do cotovelo quando a fixação permite.",
      },
      {
        window: "2-6 semanas",
        weightBearing: "Sem carga",
        focus: "Amplitude ativa de flexo-extensão e pronossupinação, respeitando a estabilidade radiocapitelar.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Progressiva conforme consolidação",
        focus: "Ganho de amplitude, início de fortalecimento e vigilância de sinostose e de perda de redução.",
      },
      {
        window: "3-6 meses",
        weightBearing: "Funcional progressiva",
        focus: "Fortalecimento, recuperação da rotação do antebraço e retorno gradual às atividades.",
      },
    ],
    followup:
      "Radiografias seriadas para confirmar a manutenção da redução radiocapitelar, a consolidação da ulna e o desenvolvimento de sinostose radioulnar proximal. Monitorar a recuperação do nervo interósseo posterior quando havia déficit inicial.",
  },
  complications: [
    {
      name: "Falha no diagnóstico da luxação da cabeça do rádio",
      detail: "A luxação radioulnar proximal passa despercebida quando a imagem não inclui o cotovelo, resultando em Monteggia crônica.",
      prevention: "Radiografar cotovelo e antebraço e conferir a linha radiocapitelar em toda fratura da ulna.",
    },
    {
      name: "Pseudartrose e perda de redução da ulna",
      detail: "Fixação insuficiente, cominução ou desperiostização ampla favorecem a não consolidação e a nova angulação, com reluxação do rádio.",
      prevention: "Reconstrução anatômica, placa dorsal adequada e preservação das partes moles.",
    },
    {
      name: "Sinostose radioulnar proximal",
      detail: "Ponte óssea entre rádio e ulna que limita a pronossupinação, mais frequente em lesões de alta energia e cominutivas.",
      prevention: "Manuseio cuidadoso das partes moles e evitar dispersão de fragmentos ósseos no espaço interósseo.",
    },
    {
      name: "Lesão do nervo interósseo posterior",
      detail: "Associada aos padrões com deslocamento anterior ou lateral e à exposição lateral; geralmente neuropraxia com recuperação.",
      prevention: "Exame documentado, pronação do antebraço na via lateral e proteção do nervo ao redor do colo do rádio.",
    },
    {
      name: "Rigidez e perda de rotação",
      detail: "Comum após lesões complexas do cotovelo; agravada por imobilização prolongada e por reconstrução articular imperfeita.",
      prevention: "Fixação estável que permita mobilização precoce e reconstrução anatômica da incisura troclear.",
    },
    {
      name: "Instabilidade persistente da cabeça do rádio",
      detail: "Redução mantida apenas se a ulna estiver anatômica; interposição do ligamento anular ou coronoide malconsolidado perpetua a subluxação.",
      prevention: "Confirmar redução concêntrica sob fluoroscopia e explorar quando irredutível.",
    },
  ],
  evidence: [
    {
      id: "ring-1998-jbjs-adultos",
      claim:
        "Em 48 adultos com fratura de Monteggia, a fixação estável e anatômica da ulna com placa e parafusos levou a resultado satisfatório na maioria, muito superior às séries antigas.",
      takeaway:
        "A fixação anatômica da ulna com técnica moderna é o determinante do bom resultado no adulto; o Bado II com fratura da cabeça do rádio e do coronoide concentra os piores desfechos.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "classico",
      citation: {
        authors: "Ring D, Jupiter JB, Simpson NS",
        title: "Monteggia fractures in adults.",
        journal: "J Bone Joint Surg Am",
        year: 1998,
        pmid: "9875931",
        doi: "10.2106/00004623-199812000-00003",
      },
    },
    {
      id: "ring-1998-jaaos-principio",
      claim:
        "É o caráter da fratura da ulna, e não a direção da luxação da cabeça do rádio, que orienta o tratamento; a redução anatômica e estável da ulna resulta na redução da cabeça do rádio.",
      takeaway:
        "O reconhecimento precoce da dissociação radioulnar proximal e a reconstrução da ulna são a base do tratamento em crianças e adultos.",
      level: "V",
      studyType: "Revisão narrativa",
      era: "classico",
      citation: {
        authors: "Ring D, Jupiter JB, Waters PM",
        title: "Monteggia fractures in children and adults.",
        journal: "J Am Acad Orthop Surg",
        year: 1998,
        pmid: "9682084",
        doi: "10.5435/00124635-199807000-00003",
      },
    },
    {
      id: "hamaker-2017-ligamento-anular",
      claim:
        "Em 119 fraturas de Monteggia no adulto, o tipo Bado I predominou (68%); a interposição do ligamento anular impediu a redução da cabeça do rádio em cerca de 17% dos Bado I, e a refixação da ulna para reduzir o rádio não foi necessária.",
      takeaway:
        "Quando a cabeça do rádio não reduz após o alinhamento da ulna, deve-se suspeitar de interposição do ligamento anular e indicar redução aberta.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors: "Hamaker M, Zheng A, Eglseder WA, Pensy RA",
        title:
          "The Adult Monteggia Fracture: Patterns and Incidence of Annular Ligament Incarceration Among 121 Cases at a Single Institution Over 19 Years.",
        journal: "J Hand Surg Am",
        year: 2017,
        pmid: "28967445",
        doi: "10.1016/j.jhsa.2017.08.013",
      },
    },
    {
      id: "kim-2020-jaaos-complexas",
      claim:
        "A subclassificação de Jupiter dos Bado II caracteriza a gravidade da cominução da ulna proximal e o envolvimento do coronoide, prognosticando melhor a dificuldade da reconstrução e o desfecho.",
      takeaway:
        "A cirurgia visa restaurar o alinhamento anatômico da ulna, que reduz indiretamente a articulação radiocapitelar; a redução anatômica é considerada crítica para o bom resultado.",
      level: "V",
      studyType: "Revisão narrativa",
      era: "atual",
      citation: {
        authors: "Kim JM, London DA",
        title: "Complex Monteggia Fractures in the Adult Cohort: Injury and Management.",
        journal: "J Am Acad Orthop Surg",
        year: 2020,
        pmid: "32649440",
        doi: "10.5435/JAAOS-D-19-00625",
      },
    },
    {
      id: "weber-2022-revisao-sistematica",
      claim:
        "Revisão sistemática de 651 casos mostrou predomínio do Bado II (60,4%), taxa média de reoperação de 23% e a pseudartrose da ulna e a limitação de amplitude como principais causas de revisão, com tendência ao uso de placas bloqueadas.",
      takeaway:
        "A reconstrução estável da ulna, incluindo o uso de placas bloqueadas, tende a reduzir a pseudartrose e a necessidade de revisão nessas lesões de alta complicação.",
      level: "III",
      studyType: "Revisão sistemática e metanálise de estudos retrospectivos",
      era: "atual",
      citation: {
        authors: "Weber MM, Rosteius T, Schildhauer TA, Königshausen M, Rausch V",
        title: "Monteggia fractures and Monteggia-like-lesions: a systematic review.",
        journal: "Arch Orthop Trauma Surg",
        year: 2022,
        pmid: "36056930",
        doi: "10.1007/s00402-022-04576-1",
      },
    },
  ],
  pearls: [
    "Toda fratura da ulna, sobretudo proximal e angulada, exige radiografia do cotovelo e leitura da linha radiocapitelar.",
    "A redução anatômica e estável da ulna reduz a cabeça do rádio; o alvo é o contorno da incisura troclear, não apenas a diáfise.",
    "Cabeça do rádio que não reduz após a ulna anatômica sugere interposição do ligamento anular — explorar.",
    "No Bado II, o coronoide e a cabeça do rádio, mais do que a luxação, definem a dificuldade e o prognóstico.",
  ],
  pitfalls: [
    "Radiografar apenas o antebraço e perder a luxação da cabeça do rádio, gerando Monteggia crônica.",
    "Aceitar angulação ou encurtamento residual da ulna, que perpetua a subluxação radiocapitelar.",
    "Ressecar a cabeça do rádio de forma isolada em um cotovelo instável.",
    "Confundir Monteggia com fratura-luxação transolecraniana, na qual a articulação radioulnar proximal está preservada.",
  ],
  figures: [
    {
      id: "fratura-monteggia:anatomia",
      caption: "Articulação radioulnar proximal, ligamento anular e trajeto do nervo interósseo posterior ao redor do colo do rádio.",
      alt: "Anatomia da articulação radioulnar proximal e do nervo interósseo posterior",
      kind: "diagram",
    },
    {
      id: "fratura-monteggia:bado",
      variant: "1",
      caption: "Bado I: luxação anterior da cabeça do rádio com fratura da ulna em ápice anterior.",
      alt: "Classificação de Bado tipo I da fratura de Monteggia",
      kind: "diagram",
    },
    {
      id: "fratura-monteggia:bado",
      variant: "2",
      caption: "Bado II: luxação posterior da cabeça do rádio com fratura da ulna proximal — padrão mais comum no adulto.",
      alt: "Classificação de Bado tipo II da fratura de Monteggia",
      kind: "diagram",
    },
    {
      id: "fratura-monteggia:bado",
      variant: "3",
      caption: "Bado III: luxação lateral da cabeça do rádio com fratura da metáfise proximal da ulna.",
      alt: "Classificação de Bado tipo III da fratura de Monteggia",
      kind: "diagram",
    },
    {
      id: "fratura-monteggia:bado",
      variant: "4",
      caption: "Bado IV: luxação anterior da cabeça do rádio com fratura da ulna e da diáfise do rádio.",
      alt: "Classificação de Bado tipo IV da fratura de Monteggia",
      kind: "diagram",
    },
    {
      id: "fratura-monteggia:jupiter",
      variant: "a",
      caption: "Subtipo de Jupiter IIA: traço ao nível da incisura troclear com fragmento do coronoide.",
      alt: "Subclassificação de Jupiter IIA do Bado II",
      kind: "diagram",
    },
    {
      id: "fratura-monteggia:jupiter",
      variant: "d",
      caption: "Subtipo de Jupiter IID: cominução do coronoide à diáfise proximal da ulna.",
      alt: "Subclassificação de Jupiter IID do Bado II",
      kind: "diagram",
    },
    {
      id: "fratura-monteggia:via-posterior",
      caption: "Via posterior direta à ulna pelo intervalo entre ECU e FCU, com nervo ulnar e interósseo posterior em risco.",
      alt: "Via posterior de acesso à ulna",
      kind: "diagram",
    },
    {
      id: "fratura-monteggia:reducao-ulna",
      variant: "angulada",
      caption: "Ulna angulada: o encurtamento e a angulação residuais mantêm a cabeça do rádio luxada.",
      alt: "Ulna angulada com cabeça do rádio luxada",
      kind: "diagram",
    },
    {
      id: "fratura-monteggia:reducao-ulna",
      variant: "reduzida",
      caption: "Ulna com contorno restaurado: a cabeça do rádio reduz-se indiretamente ao capítulo.",
      alt: "Redução anatômica da ulna com cabeça do rádio reduzida",
      kind: "diagram",
    },
    {
      id: "fratura-monteggia:fixacao-ulna",
      caption: "Fixação da ulna proximal com placa dorsal contornada e fixação do coronoide.",
      alt: "Fixação da ulna com placa e do coronoide",
      kind: "diagram",
    },
    {
      id: "fratura-monteggia:radiocapitelar",
      caption: "Conferência da linha radiocapitelar e interposição do ligamento anular impedindo a redução.",
      alt: "Conferência radiocapitelar e interposição do ligamento anular",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: Princípios e Prática. 6ª ed. 2025.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, não reprodução.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), capítulo de fraturas do antebraço e fratura-luxação de Monteggia; redesenho original.",
  },
});
