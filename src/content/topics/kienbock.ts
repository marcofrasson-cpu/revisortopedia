import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-punho-semilunar-kienbock",
  slug: "kienbock",
  regionId: "membro-superior",
  bone: "Punho",
  injury: "Osteonecrose do semilunar",
  title: "Doença de Kienböck",
  subtitle:
    "Reconhecer a osteonecrose do semilunar antes do colapso e escolher a conduta pelo estágio de Lichtman, pela variância ulnar e pela vitalidade óssea remanescente.",
  laterality: null,
  status: "complete",
  overview:
    "A doença de Kienböck é a osteonecrose do semilunar, um osso com alta carga axial e irrigação intraóssea pobre. A dor é insidiosa no dorso do punho, com perda de força de preensão e limitação da mobilidade, muitas vezes sem trauma definido. A etiologia é multifatorial: fatores vasculares (padrão intraósseo em Y ou X com anastomose escassa), mecânicos (variância ulnar negativa, que concentra a carga sobre o semilunar) e anatômicos (geometria do semilunar) participam da doença, mas nenhum isolado a explica.\n\nO diagnóstico precoce depende da ressonância magnética: no estágio I a radiografia é normal e apenas a RM evidencia o edema/isquemia, com queda de sinal em T1. A radiografia mostra esclerose, colapso e artrose nos estágios seguintes. A conduta segue o estadiamento de Lichtman e o estado da cartilagem e do alinhamento carpal, não um procedimento fixo. Nas fases iniciais busca-se aliviar a carga e revascularizar; na presença de variância negativa, o encurtamento radial (nivelamento articular) é a operação de descarga mais estabelecida. Com colapso e artrose, migra-se para procedimentos de salvamento — carpectomia da fileira proximal ou artrodese. A natureza pouco previsível da história natural e a fraca correlação entre imagem e sintomas impõem decisão individualizada e compartilhada.",
  keyFacts: [
    { label: "Definição", value: "Osteonecrose do semilunar (lunatomalácia)" },
    { label: "Apresentação", value: "Dor dorsal insidiosa, perda de força e mobilidade" },
    { label: "Fator mecânico", value: "Associação com variância ulnar negativa" },
    { label: "Diagnóstico precoce", value: "RM (T1 baixo) com radiografia ainda normal" },
    { label: "Estadiamento", value: "Lichtman I–IV (IIIA sem / IIIB com colapso do carpo)" },
    { label: "Decisão", value: "Estágio, variância ulnar e vitalidade guiam a conduta" },
  ],
  anatomy: {
    text:
      "O semilunar ocupa o centro da fileira proximal do carpo, entre o rádio (fossa do semilunar) e o capitato, recebendo e transmitindo grande parte da carga axial do punho. Sua irrigação depende de vasos que penetram pelos polos volar e dorsal, formando padrões intraósseos em Y ou X; quando há um único vaso dominante ou anastomose intraóssea escassa, o osso fica vulnerável à isquemia. Essa combinação de alta demanda mecânica e reserva vascular limitada é o substrato da osteonecrose.\n\nA variância ulnar negativa — ulna mais curta que o rádio (índice de Hultén) — aumenta o cisalhamento e a carga sobre a borda ulnar do semilunar e serve de base para as operações de nivelamento articular. Com a progressão, o semilunar perde altura e colapsa; o escafoide flete (sinal do anel radiográfico), o capitato migra proximalmente e instala-se a artrose radiocarpal e mediocarpal. Compreender essa cadeia — carga axial, irrigação frágil, variância e colapso — organiza tanto o estadiamento quanto a escolha terapêutica.",
    figureIds: ["kienbock:anatomia", "kienbock:variancia-ulnar"],
  },
  classification: [
    {
      id: "lichtman",
      name: "Estadiamento de Lichtman",
      basis: "Achados radiográficos e de RM, com foco em esclerose, colapso e artrose.",
      note:
        "O estágio III separa-se pela integridade do alinhamento carpal: IIIA sem colapso fixo do carpo, IIIB com escafoide fletido e perda de altura carpal. A correlação entre estágio e sintomas é imperfeita.",
      types: [
        {
          code: "I",
          label: "Estágio I",
          description:
            "Radiografia normal; a RM mostra edema/isquemia do semilunar com queda de sinal em T1. Diagnóstico essencialmente por RM.",
          figureId: "kienbock:estagios",
          figureVariant: "1",
        },
        {
          code: "II",
          label: "Estágio II",
          description:
            "Esclerose do semilunar na radiografia, com forma e altura preservadas; sem colapso. Janela para procedimentos de descarga e revascularização.",
          figureId: "kienbock:estagios",
          figureVariant: "2",
        },
        {
          code: "IIIA",
          label: "Estágio IIIA",
          description:
            "Colapso do semilunar sem alteração do alinhamento carpal; altura carpal e posição do escafoide preservadas.",
          figureId: "kienbock:estagios",
          figureVariant: "3a",
        },
        {
          code: "IIIB",
          label: "Estágio IIIB",
          description:
            "Colapso do semilunar com desalinhamento carpal: escafoide fletido (sinal do anel), migração proximal do capitato e perda de altura carpal.",
          figureId: "kienbock:estagios",
          figureVariant: "3b",
        },
        {
          code: "IV",
          label: "Estágio IV",
          description:
            "Fragmentação do semilunar com artrose radiocarpal e/ou mediocarpal estabelecida. Território dos procedimentos de salvamento.",
          figureId: "kienbock:estagios",
          figureVariant: "4",
        },
      ],
    },
    {
      id: "variancia-ulnar",
      name: "Variância ulnar (índice de Hultén)",
      basis: "Relação de comprimento entre as superfícies articulares distais do rádio e da ulna.",
      note:
        "A variância orienta a escolha do procedimento de descarga: negativa favorece o encurtamento radial; neutra/positiva desloca a preferência para descarga do capitato ou revascularização, pois encurtar o rádio geraria impacto ulnocarpal.",
      types: [
        {
          code: "NEG",
          label: "Variância negativa",
          description:
            "Ulna mais curta que o rádio; concentra carga sobre o semilunar e é o cenário clássico para o nivelamento articular por encurtamento radial.",
          figureId: "kienbock:variancia-ulnar",
          figureVariant: "negativa",
        },
        {
          code: "NEU",
          label: "Variância neutra ou positiva",
          description:
            "Sem degrau ulnar favorável ao encurtamento radial; preferir osteotomia de descarga do capitato, revascularização ou salvamento conforme o estágio.",
          figureId: "kienbock:variancia-ulnar",
          figureVariant: "neutra",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Estágios II e IIIA sintomáticos com variância ulnar negativa: encurtamento radial (nivelamento articular).",
      "Estágios II–IIIA com variância neutra/positiva: osteotomia de descarga do capitato ou revascularização.",
      "Estágios iniciais sem colapso fixo e com semilunar necrótico mas preservável: revascularização por enxerto vascularizado.",
      "Estágio IIIB com colapso e desalinhamento carpal: reconstrução do alinhamento (artrodese intercarpal) ou salvamento conforme a cartilagem.",
      "Estágio IV com artrose estabelecida: procedimentos de salvamento (carpectomia da fileira proximal ou artrodese do punho).",
    ],
    nonOperative: [
      "Estágio I e casos iniciais pouco sintomáticos: imobilização, analgesia e observação com reavaliação clínica e por imagem.",
      "Paciente com baixa demanda, comorbidades ou preferência informada por conduta conservadora.",
      "Falha do tratamento não operatório funciona como gatilho para reestadiar e considerar cirurgia.",
    ],
    decisionNotes:
      "Não há procedimento único: a decisão combina estágio de Lichtman, variância ulnar, integridade da cartilagem/alinhamento e demanda do paciente. Ainda é incerto se a cirurgia supera o tratamento não operatório na história natural, mas operações de descarga e revascularização buscam interromper a progressão antes do colapso fixo. Com variância negativa, o encurtamento radial é a descarga mais previsível; com colapso e artrose, prioriza-se alívio da dor por salvamento, aceitando perda de mobilidade. Em pacientes jovens e ativos, opções que preservam movimento e não impedem salvamento futuro são preferíveis quando factíveis.",
  },
  approaches: [
    {
      id: "volar-radio-distal",
      name: "Via volar do rádio distal (Henry)",
      indication: "Osteotomia de encurtamento radial e fixação com placa.",
      interval:
        "Intervalo entre o flexor radial do carpo e a artéria radial; afastar o pronador quadrado do rádio distal para expor a metáfise, planejar a osteotomia transversa e aplicar a placa volar.",
      atRisk: [
        "Artéria radial na borda radial do campo",
        "Ramo palmar cutâneo do nervo mediano",
        "Pronador quadrado e inserções capsulares volares",
      ],
      figureId: "kienbock:encurtamento-radial",
    },
    {
      id: "dorsal-punho",
      name: "Via dorsal do punho",
      indication: "Revascularização, osteotomia do capitato, carpectomia proximal e artrodeses.",
      interval:
        "Incisão dorsal longitudinal, abertura entre o 3º e 4º compartimentos com retração do extensor longo do polegar; capsulotomia para acesso ao semilunar, ao capitato e às articulações radiocarpal e mediocarpal, preservando os pedículos dorsais do rádio distal quando indicada revascularização.",
      atRisk: [
        "Pedículos vasculares dorsais do rádio distal (na revascularização)",
        "Ramos sensitivos dorsais dos nervos radial e ulnar",
        "Cartilagem da cabeça do capitato e da fossa do rádio (na PRC)",
      ],
      figureId: "kienbock:revascularizacao",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Confirmar o diagnóstico e estadiar",
      detail:
        "Correlacionar dor dorsal insidiosa e perda de força com radiografias em PA e perfil, avaliando esclerose, altura e colapso do semilunar, sinal do anel do escafoide e artrose. Solicitar RM quando a radiografia for normal ou duvidosa, buscando a queda de sinal em T1 do estágio I. Medir a variância ulnar em incidência PA neutra padronizada.",
      figureId: "kienbock:rm",
      tips: [
        "No estágio I, a RM é o exame que define o diagnóstico",
        "Padronizar a incidência ao medir a variância ulnar",
      ],
      pitfalls: [
        "Descartar a doença por radiografia normal sem solicitar RM",
        "Estadiar apenas pela imagem, ignorando sintomas e demanda",
      ],
    },
    {
      n: 2,
      title: "Estágios I–II: aliviar carga e observar",
      detail:
        "Iniciar com imobilização, analgesia e modificação de atividade, reavaliando clínica e imagem. A ausência de melhora é gatilho para reestadiar e discutir descarga articular ou revascularização, especialmente no paciente jovem e ativo com semilunar ainda preservável.",
      figureId: "kienbock:estagios",
      figureVariant: "2",
      tips: ["Definir prazo objetivo de reavaliação", "Documentar força e amplitude para comparação"],
      pitfalls: ["Prolongar conduta conservadora após falha evidente", "Perder a janela de descarga antes do colapso"],
    },
    {
      n: 3,
      title: "Variância negativa: encurtamento radial",
      detail:
        "Pela via volar, realizar osteotomia transversa do rádio distal e ressecar o segmento planejado para levar a variância ao nível neutro, redistribuindo a carga para fora do semilunar. Fixar com placa em compressão. Evitar encurtamento excessivo, que gera impacto ulnocarpal.",
      figureId: "kienbock:encurtamento-radial",
      tips: ["Planejar o valor do encurtamento pela variância medida", "Compressão estável favorece consolidação precoce"],
      pitfalls: ["Encurtar demais e criar impacto ulnocarpal", "Indicar encurtamento radial na variância neutra/positiva"],
    },
    {
      n: 4,
      title: "Revascularizar quando não há colapso fixo",
      detail:
        "Nos estágios II–IIIA com semilunar necrótico mas sem colapso fixo, curetar o osso necrótico e transpor enxerto ósseo vascularizado pediculado do rádio distal (por exemplo, pedículos 4+5 EAC ou 2,3-ICSRA). Associar fixação temporária de descarga (por exemplo, capitolunar ou escafotrapézio) para proteger o enxerto durante a consolidação.",
      figureId: "kienbock:revascularizacao",
      tips: ["Preservar o pedículo em todo o trajeto", "Proteger o enxerto com descarga temporária"],
      pitfalls: ["Indicar revascularização com colapso e artrose já estabelecidos", "Lesar o pedículo na dissecção dorsal"],
    },
    {
      n: 5,
      title: "Estágio IIIB: restaurar alinhamento carpal",
      detail:
        "Com colapso e escafoide fletido, mas cartilagem radiocarpal ainda utilizável, considerar artrodese intercarpal (por exemplo, escafotrapézio-trapezoide ou capitato-hamato) para descarregar o semilunar e corrigir o desalinhamento, ou combinar com revascularização conforme a vitalidade. Reservar salvamento para quando a artrose já compromete a articulação.",
      figureId: "kienbock:estagios",
      figureVariant: "3b",
      tips: ["Avaliar a cartilagem antes de optar por preservação", "Corrigir a flexão do escafoide melhora a mecânica carpal"],
      pitfalls: ["Preservar o semilunar quando a cartilagem já está inviável", "Ignorar o desalinhamento do escafoide"],
    },
    {
      n: 6,
      title: "Estágio IV: salvamento",
      detail:
        "Na artrose estabelecida, escolher entre carpectomia da fileira proximal — que requer cabeça do capitato e fossa do rádio íntegras e cria uma nova articulação capitato-radial — e artrodese (intercarpal ou total do punho), que alivia a dor à custa de mobilidade. A escolha depende do estado da cartilagem, da demanda e da preferência do paciente.",
      figureId: "kienbock:salvamento",
      figureVariant: "prc",
      tips: ["Confirmar integridade da cabeça do capitato antes da PRC", "Alinhar expectativa de mobilidade versus alívio de dor"],
      pitfalls: ["Indicar PRC com cartilagem do capitato ou da fossa do rádio comprometida", "Prometer preservação de movimento quando a artrodese é a melhor opção"],
    },
  ],
  postop: {
    immobilization:
      "Após encurtamento radial, imobilização até sinais de consolidação da osteotomia (habitualmente algumas semanas), guiada pela estabilidade da fixação. Após revascularização com fixação de descarga, proteção mais prolongada até integração do enxerto. Em PRC, imobilização breve; em artrodese, imobilização até a fusão.",
    weightBearing:
      "Sem carga axial ou preensão de força no punho operado no início. A progressão de carga acompanha a consolidação óssea (osteotomia, enxerto ou artrodese) confirmada clínica e radiograficamente.",
    rehab: [
      {
        window: "0–6 semanas",
        weightBearing: "Sem carga",
        focus: "Proteção da fixação/enxerto, controle de edema, mobilidade de dedos, cotovelo e ombro.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Carga leve progressiva",
        focus: "Amplitude ativa do punho conforme consolidação; iniciar fortalecimento leve.",
      },
      {
        window: "3–6 meses",
        weightBearing: "Progressiva conforme consolidação",
        focus: "Fortalecimento de preensão e propriocepção; retomada gradual de atividades.",
      },
      {
        window: "> 6 meses",
        weightBearing: "Funcional plena após consolidação",
        focus: "Retorno a atividades e trabalho segundo dor, força e demanda; ajuste de expectativa após salvamento.",
      },
    ],
    followup:
      "Acompanhamento clínico e radiográfico seriado para consolidação da osteotomia/enxerto/artrodese, evolução do estágio radiográfico e sintomas. Vigiar progressão do colapso e da artrose, que pode exigir reestadiamento e novo procedimento.",
  },
  complications: [
    {
      name: "Progressão do colapso e da artrose",
      detail:
        "A doença pode avançar apesar do tratamento, com perda de altura do semilunar e artrose radiocarpal/mediocarpal, culminando em necessidade de salvamento.",
      prevention: "Intervir antes do colapso fixo nos casos indicados e reavaliar periodicamente.",
    },
    {
      name: "Falha de consolidação da osteotomia radial",
      detail: "Retardo ou pseudartrose no local do encurtamento, favorecido por fixação instável.",
      prevention: "Fixação em compressão estável e imobilização até sinais de consolidação.",
    },
    {
      name: "Não integração do enxerto vascularizado",
      detail: "Falha da revascularização por lesão do pedículo, seleção inadequada ou colapso já instalado.",
      prevention: "Indicação em estágio adequado, preservação do pedículo e descarga temporária.",
    },
    {
      name: "Impacto ulnocarpal",
      detail: "Encurtamento radial excessivo torna a ulna relativamente longa, gerando dor ulnar.",
      prevention: "Planejar o encurtamento pela variância medida, evitando corrigir além do neutro.",
    },
    {
      name: "Limitação funcional após salvamento",
      detail: "PRC e artrodese reduzem mobilidade e/ou força; a artrodese elimina o movimento do punho.",
      prevention: "Escolher o salvamento conforme cartilagem e demanda e alinhar expectativas.",
    },
  ],
  evidence: [
    {
      id: "chung-2001-variancia-ulnar",
      claim:
        "Metanálise não confirmou associação estatisticamente significativa entre variância ulnar negativa e doença de Kienböck, com dados limitados e heterogêneos.",
      takeaway:
        "A variância negativa é fator de risco plausível e base racional do nivelamento articular, mas não é causa isolada nem obrigatória da doença.",
      level: "III",
      studyType: "Metanálise de estudos observacionais",
      era: "classico",
      citation: {
        authors: "Chung KC, Spilson MS, Kim MH",
        title: "Is negative ulnar variance a risk factor for Kienböck's disease? A meta-analysis.",
        journal: "Ann Plast Surg",
        year: 2001,
        pmid: "11716259",
        doi: "10.1097/00000637-200111000-00004",
      },
    },
    {
      id: "lutsky-2012-revisao",
      claim:
        "Revisão da doença: história natural incerta, correlação imperfeita entre imagem e sintomas, e ausência de evidência definitiva de superioridade da cirurgia sobre o tratamento não operatório.",
      takeaway:
        "A conduta deve ser individualizada e escalonada pelo estágio; encurtamento radial e PRC são opções confiáveis para dor e função.",
      level: "V",
      studyType: "Revisão narrativa",
      era: "atual",
      citation: {
        authors: "Lutsky K, Beredjiklian PK",
        title: "Kienböck disease.",
        journal: "J Hand Surg Am",
        year: 2012,
        pmid: "22916868",
        doi: "10.1016/j.jhsa.2012.06.029",
      },
    },
    {
      id: "vanleeuwen-2020-encurtamento",
      claim:
        "Em estágios II e IIIA tratados com encurtamento radial, o resultado funcional a longo prazo foi razoável, com cerca de 13% evoluindo para carpectomia proximal por falha e taxa relevante de reoperações.",
      takeaway:
        "O encurtamento radial é eficaz, mas parte dos pacientes ainda requer salvamento — dado a considerar na decisão inicial.",
      level: "IV",
      studyType: "Coorte retrospectiva com desfechos relatados pelo paciente",
      era: "atual",
      citation: {
        authors: "van Leeuwen WF, Pong TM, Gottlieb RW, Deml C, Chen N, van der Heijden BEPA",
        title:
          "Radial Shortening Osteotomy for Symptomatic Kienböck's Disease: Complications and Long-Term Patient-Reported Outcome.",
        journal: "J Wrist Surg",
        year: 2020,
        pmid: "33552689",
        doi: "10.1055/s-0040-1714750",
      },
    },
    {
      id: "park-2023-vbg-vs-conservador",
      claim:
        "Revisão sistemática com metanálise de braço único: o enxerto ósseo vascularizado apresentou menor proporção de piora do estágio de Lichtman e menos dor que o tratamento não operatório, sem diferença clara em amplitude e força.",
      takeaway:
        "A revascularização tende a estabilizar o estágio radiográfico e a dor, mas a superioridade clínica global sobre a conduta conservadora ainda não está confirmada.",
      level: "III",
      studyType: "Revisão sistemática e metanálise de estudos observacionais",
      era: "atual",
      citation: {
        authors: "Park JY, Kim JK, Shin YH",
        title:
          "Comparison of Long-term Outcomes between Nonoperative Treatment and Vascularized Bone Graft for Kienböck Disease: A Systematic Review and Single-Arm Meta-Analysis.",
        journal: "Clin Orthop Surg",
        year: 2023,
        pmid: "37529196",
        doi: "10.4055/cios22307",
      },
    },
    {
      id: "wang-2022-estagio-iv",
      claim:
        "Revisão sistemática do estágio IV: procedimentos que preservam movimento tiveram maior arco de flexo-extensão que os de salvamento, com força de preensão semelhante; todos aliviaram a dor.",
      takeaway:
        "Em pacientes jovens e ativos, opções que preservam movimento podem ser tentadas no estágio IV, pois não impedem salvamento futuro.",
      level: "III",
      studyType: "Revisão sistemática",
      era: "atual",
      citation: {
        authors: "Wang PQ, Charron BP, Chan KTK, Grewal R, Suh N",
        title:
          "Potential Role for Non-Salvage Procedures in the Treatment of Kienböck Disease Stage IV: A Systematic Review.",
        journal: "Hand (N Y)",
        year: 2022,
        pmid: "35043699",
        doi: "10.1177/15589447211066613",
      },
    },
  ],
  pearls: [
    "No estágio I, radiografia normal não afasta a doença — a RM em T1 faz o diagnóstico.",
    "A variância negativa embasa o encurtamento radial; sem ela, prefira descarga do capitato ou revascularização.",
    "O IIIB distingue-se do IIIA pelo colapso carpal com escafoide fletido (sinal do anel).",
    "Antes da PRC, confirme cabeça do capitato e fossa do rádio íntegras.",
    "Revascularizar faz sentido antes do colapso fixo; depois dele, pensar em restaurar alinhamento ou salvar.",
  ],
  pitfalls: [
    "Descartar Kienböck com base apenas em radiografia normal.",
    "Indicar encurtamento radial em variância neutra/positiva e gerar impacto ulnocarpal.",
    "Manter conduta conservadora após falha clara, perdendo a janela de descarga.",
    "Realizar revascularização com artrose e colapso já estabelecidos.",
    "Prometer preservação de movimento quando a artrose já exige artrodese.",
  ],
  figures: [
    {
      id: "kienbock:anatomia",
      caption:
        "Semilunar entre o rádio e o capitato, sob alta carga axial e com irrigação intraóssea frágil.",
      alt: "Anatomia do carpo destacando o semilunar e sua vascularização",
      kind: "diagram",
    },
    {
      id: "kienbock:variancia-ulnar",
      variant: "negativa",
      caption: "Variância ulnar negativa (índice de Hultén): ulna mais curta que o rádio.",
      alt: "Esquema de variância ulnar negativa",
      kind: "diagram",
    },
    {
      id: "kienbock:variancia-ulnar",
      variant: "neutra",
      caption: "Variância ulnar neutra: sem degrau favorável ao encurtamento radial.",
      alt: "Esquema de variância ulnar neutra",
      kind: "diagram",
    },
    {
      id: "kienbock:estagios",
      variant: "1",
      caption: "Estágio I de Lichtman: radiografia normal, RM com isquemia do semilunar.",
      alt: "Estágio I da doença de Kienböck",
      kind: "diagram",
    },
    {
      id: "kienbock:estagios",
      variant: "2",
      caption: "Estágio II: esclerose do semilunar sem colapso.",
      alt: "Estágio II da doença de Kienböck",
      kind: "diagram",
    },
    {
      id: "kienbock:estagios",
      variant: "3a",
      caption: "Estágio IIIA: colapso do semilunar com carpo alinhado.",
      alt: "Estágio IIIA da doença de Kienböck",
      kind: "diagram",
    },
    {
      id: "kienbock:estagios",
      variant: "3b",
      caption: "Estágio IIIB: colapso com escafoide fletido (sinal do anel) e perda de altura carpal.",
      alt: "Estágio IIIB da doença de Kienböck",
      kind: "diagram",
    },
    {
      id: "kienbock:estagios",
      variant: "4",
      caption: "Estágio IV: fragmentação do semilunar e artrose.",
      alt: "Estágio IV da doença de Kienböck",
      kind: "diagram",
    },
    {
      id: "kienbock:rm",
      caption: "RM no diagnóstico precoce: radiografia normal e queda de sinal em T1 no semilunar.",
      alt: "Comparação entre radiografia normal e RM na doença de Kienböck",
      kind: "diagram",
    },
    {
      id: "kienbock:encurtamento-radial",
      caption: "Osteotomia de encurtamento radial nivelando a variância e descarregando o semilunar.",
      alt: "Osteotomia de encurtamento radial",
      kind: "diagram",
    },
    {
      id: "kienbock:revascularizacao",
      caption: "Enxerto ósseo vascularizado pediculado do rádio distal transposto ao semilunar.",
      alt: "Revascularização do semilunar por enxerto vascularizado",
      kind: "diagram",
    },
    {
      id: "kienbock:salvamento",
      variant: "prc",
      caption: "Carpectomia da fileira proximal: capitato articula diretamente com a fossa do rádio.",
      alt: "Carpectomia da fileira proximal",
      kind: "diagram",
    },
    {
      id: "kienbock:salvamento",
      variant: "artrodese",
      caption: "Artrodese como salvamento na artrose estabelecida.",
      alt: "Artrodese do punho na doença de Kienböck",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Green's Operative Hand Surgery. 8th ed.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, sem reprodução de material protegido.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024) e Green's Operative Hand Surgery, capítulos de doença de Kienböck / osteonecrose do carpo; redesenho original, não reprodução.",
  },
});
