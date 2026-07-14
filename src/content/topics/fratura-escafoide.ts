import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-punho-fratura-escafoide",
  slug: "fratura-escafoide",
  regionId: "membro-superior",
  bone: "Punho",
  injury: "Fratura do escafoide",
  title: "Fratura do escafoide",
  subtitle:
    "Diagnosticar a fratura oculta, proteger o polo proximal de suprimento retrógrado e escolher entre imobilização e fixação por parafuso antes que a pseudartrose evolua para colapso do carpo.",
  laterality: null,
  status: "complete",
  overview:
    "O escafoide é o osso do carpo mais fraturado e o que mais gera litígio quando negligenciado. Ele cruza as fileiras proximal e distal do carpo e recebe boa parte de seu sangue por fluxo retrógrado, a partir de ramos que entram na crista dorsal, próximos ao colo. Por isso, quanto mais proximal a fratura, maior o risco de necrose avascular e de pseudartrose. O mecanismo típico é a queda sobre a mão espalmada em hiperextensão, e o achado clínico clássico é a dor à palpação da tabaqueira anatômica e do tubérculo.\n\nO grande problema prático é a fratura oculta: radiografias iniciais normais não afastam o diagnóstico. Diante de dor sugestiva com radiografia negativa, imobiliza-se e reavalia-se, ou realiza-se ressonância magnética precoce, hoje o exame mais acurado. A decisão terapêutica na fratura sem desvio ou com desvio mínimo gira em torno de imobilização gessada versus fixação percutânea por parafuso canulado sem cabeça. O ensaio SWIFFT mostrou que, na fratura do colo com desvio de até 2 mm, o gesso inicial com fixação apenas das que não consolidam produz resultado equivalente ao da cirurgia precoce, com menos complicações cirúrgicas. Quando a fratura evolui para pseudartrose, o objetivo passa a ser restaurar a altura e o alinhamento com enxerto ósseo, reservando o enxerto vascularizado para a necrose do polo proximal, antes que se instale o padrão de colapso avançado do carpo (SNAC).",
  keyFacts: [
    { label: "Mecanismo", value: "Queda sobre a mão espalmada em hiperextensão" },
    { label: "Exame", value: "Dor na tabaqueira anatômica e no tubérculo do escafoide" },
    { label: "Vascularização", value: "Fluxo retrógrado; polo proximal é o mais vulnerável" },
    { label: "Fratura oculta", value: "RX normal não exclui; RM é o exame mais acurado" },
    { label: "Local mais comum", value: "Colo do escafoide (~65–70%)" },
    { label: "Decisão", value: "Gesso vs parafuso percutâneo; desvio e local guiam" },
    { label: "Complicações", value: "Necrose avascular, pseudartrose e colapso SNAC" },
  ],
  anatomy: {
    text:
      "O escafoide tem formato de barco e liga as fileiras proximal e distal do carpo, o que o submete a alto cisalhamento durante os movimentos do punho. Divide-se em polo proximal, colo (cintura) e polo distal com o tubérculo. A superfície é recoberta por cartilagem em grande parte, restando pouca área para entrada de vasos.\n\nO suprimento arterial provém sobretudo de ramos da artéria radial. O ramo carpal dorsal penetra na crista dorsal, na altura do colo ou do polo distal, e irriga cerca de 70% a 80% do osso, incluindo todo o polo proximal, por fluxo retrógrado. Um ramo palmar entra pelo tubérculo e supre apenas o polo distal. Essa disposição explica por que fraturas do polo proximal e do colo comprometem a perfusão do fragmento proximal e favorecem necrose avascular e pseudartrose. Clinicamente, a dor à palpação da tabaqueira anatômica, do tubérculo volar e à compressão axial do polegar compõe a tríade de suspeita.",
    figureIds: [
      "fratura-escafoide:anatomia",
      "fratura-escafoide:vascularizacao",
    ],
  },
  classification: [
    {
      id: "localizacao-anatomica",
      name: "Localização anatômica",
      basis: "Terço acometido do escafoide, que se correlaciona diretamente com o risco vascular.",
      note:
        "Quanto mais proximal a fratura, maior a chance de necrose e de pseudartrose por interrupção do fluxo retrógrado.",
      types: [
        {
          code: "PROX",
          label: "Polo proximal",
          description:
            "Menos frequente, mas de maior risco: consolidação lenta, alta taxa de necrose avascular e pseudartrose. Baixo limiar para fixação.",
          figureId: "fratura-escafoide:localizacao",
          figureVariant: "proximal",
        },
        {
          code: "COLO",
          label: "Colo (cintura)",
          description:
            "Local mais comum (cerca de 65% a 70%). Prognóstico depende do desvio e da estabilidade; base do dilema gesso versus parafuso.",
          figureId: "fratura-escafoide:localizacao",
          figureVariant: "colo",
        },
        {
          code: "DIST",
          label: "Polo distal / tubérculo",
          description:
            "Bem vascularizado; consolida de forma confiável com tratamento conservador na maioria dos casos.",
          figureId: "fratura-escafoide:localizacao",
          figureVariant: "distal",
        },
      ],
    },
    {
      id: "herbert-estabilidade",
      name: "Herbert (modificada) — estabilidade e cronologia",
      basis: "Estabilidade da fratura aguda e evolução para retardo de consolidação e pseudartrose.",
      note:
        "A distinção entre estável e instável orienta a indicação cirúrgica; retardo e pseudartrose definem a necessidade de enxerto.",
      types: [
        {
          code: "A",
          label: "Estável aguda",
          description:
            "Fraturas incompletas ou do tubérculo, sem desvio. Alta taxa de consolidação com imobilização.",
          figureId: "fratura-escafoide:herbert",
        },
        {
          code: "B",
          label: "Instável aguda",
          description:
            "Fratura do colo desviada, do polo proximal, oblíqua ou fratura-luxação. Instabilidade favorece a fixação.",
          figureId: "fratura-escafoide:herbert",
        },
        {
          code: "C",
          label: "Retardo de consolidação",
          description:
            "Ausência de sinais de união dentro do prazo esperado; exige reavaliação de imagem e estabilidade.",
          figureId: "fratura-escafoide:herbert",
        },
        {
          code: "D",
          label: "Pseudartrose",
          description:
            "D1 fibrosa e D2 esclerótica. Frequentemente com corcova, DISI e necrose; requer enxerto e fixação estável.",
          figureId: "fratura-escafoide:herbert",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Fratura do colo com desvio maior que 1 mm, degrau articular ou instabilidade.",
      "Fratura do polo proximal, pelo alto risco de necrose e pseudartrose.",
      "Fratura oblíqua, cominuta, fratura-luxação perilunar ou instabilidade do carpo associada.",
      "Retardo de consolidação e pseudartrose confirmados, com ou sem necessidade de enxerto.",
      "Preferência informada por retorno mais rápido em fratura sem desvio, após discussão de riscos.",
    ],
    nonOperative: [
      "Fratura do colo sem desvio ou com desvio de até 2 mm, como estratégia inicial.",
      "Fratura do polo distal ou do tubérculo, tipicamente estável.",
      "Fratura oculta confirmada por RM sem desvio, tratada com imobilização e reavaliação.",
      "Contraindicação cirúrgica ou preferência do paciente por conduta conservadora.",
    ],
    decisionNotes:
      "Na fratura do colo com desvio de até 2 mm, o ensaio SWIFFT mostrou que gesso inicial, reservando fixação para as que não consolidam, equivale à cirurgia precoce em resultado funcional a um ano, com menos complicações cirúrgicas — embora com mais complicações relacionadas ao gesso. A fixação percutânea acelera a consolidação e o retorno ao trabalho, o que pode ser decisivo em pacientes de alta demanda, mas não deve ser oferecida como rotina para toda fratura sem desvio. Fraturas do polo proximal, desviadas ou instáveis têm baixo limiar cirúrgico. Diante de dor sugestiva com radiografia normal, imobiliza-se e reavalia-se ou solicita-se RM precoce, que é o exame mais acurado para a fratura oculta.",
  },
  approaches: [
    {
      id: "percutanea-volar",
      name: "Fixação percutânea volar (retrógrada)",
      indication:
        "Fraturas do colo e do terço distal sem desvio ou com desvio mínimo, com bom acesso ao tubérculo.",
      interval:
        "Entrada percutânea no tubérculo distal do escafoide com o punho estendido, sob fluoroscopia; fio-guia no eixo central e parafuso canulado sem cabeça. Proteger o ramo palmar cutâneo e os tendões flexores.",
      atRisk: [
        "Ramo palmar cutâneo do nervo mediano",
        "Artéria radial na tabaqueira",
        "Cartilagem da articulação escafotrapézio-trapezoide",
      ],
      figureId: "fratura-escafoide:fixacao-percutanea",
    },
    {
      id: "percutanea-dorsal",
      name: "Fixação percutânea dorsal (anterógrada)",
      indication:
        "Fraturas do colo proximal e do polo proximal, em que a via dorsal alinha melhor o eixo central.",
      interval:
        "Entrada no polo proximal com o punho fletido, sob fluoroscopia; fio-guia central e parafuso canulado. Atenção aos tendões extensores e ao ramo dorsal da artéria radial que nutre o osso.",
      atRisk: [
        "Ramo carpal dorsal da artéria radial (suprimento do escafoide)",
        "Tendões extensores no dorso do punho",
        "Cartilagem articular do polo proximal e do rádio",
      ],
      figureId: "fratura-escafoide:fixacao-percutanea",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Confirmar o diagnóstico e afastar a fratura oculta",
      detail:
        "Diante de dor na tabaqueira e no tubérculo, obter incidências dedicadas do escafoide. Se as radiografias forem normais mas a suspeita persistir, imobilizar e reavaliar ou solicitar RM precoce, que é o exame mais acurado. A tomografia define melhor o desvio, a cominução e a consolidação.",
      figureId: "fratura-escafoide:anatomia",
      tips: [
        "Incidências específicas do escafoide (punho em desvio ulnar) aumentam a detecção",
        "RM precoce evita imobilização prolongada desnecessária e diagnostica a fratura oculta",
      ],
      pitfalls: [
        "Aceitar radiografia inicial normal como exclusão do diagnóstico",
        "Rotular como entorse e liberar sem reavaliação ou imagem avançada",
      ],
    },
    {
      n: 2,
      title: "Caracterizar local, desvio e vascularização",
      detail:
        "Definir o terço acometido, o desvio (degrau ou gap), a angulação em corcova e a integridade do polo proximal. Correlacionar com a demanda do paciente. Local proximal e instabilidade deslocam a decisão para fixação.",
      figureId: "fratura-escafoide:localizacao",
      figureVariant: "colo",
      tips: ["TC no plano do eixo longo do escafoide mede melhor a corcova", "Suspeitar de necrose no polo proximal esclerótico"],
      pitfalls: ["Subestimar desvio em incidência única", "Ignorar sinais de instabilidade do carpo associada"],
    },
    {
      n: 3,
      title: "Imobilizar a fratura estável sem desvio",
      detail:
        "Na fratura do colo sem desvio ou com desvio de até 2 mm, aplicar imobilização e acompanhar. Confirmar consolidação por exame e imagem antes de liberar carga e esporte; havendo dúvida, usar TC. Fixar precocemente as que não consolidam.",
      figureId: "fratura-escafoide:herbert",
      tips: ["Estratégia do SWIFFT: gesso inicial e cirurgia apenas para as que não unem", "Orientar sobre o risco de complicações relacionadas ao gesso"],
      pitfalls: ["Retirar a imobilização sem confirmar consolidação", "Prolongar gesso indefinidamente diante de sinais de pseudartrose"],
    },
    {
      n: 4,
      title: "Fixar por parafuso canulado no eixo central",
      detail:
        "Sob fluoroscopia, posicionar o fio-guia no eixo central do escafoide e inserir parafuso canulado sem cabeça, que permite maior comprimento e compressão interfragmentar. Via volar para colo/distal; via dorsal para polo proximal. Confirmar o comprimento para não ultrapassar a cortical.",
      figureId: "fratura-escafoide:fixacao-percutanea",
      figureVariant: "volar",
      tips: ["Posição central do parafuso melhora a estabilidade e a taxa de união", "Fluoroscopia em múltiplos planos evita protrusão articular"],
      pitfalls: ["Parafuso excêntrico ou longo, com protrusão articular", "Lesar o ramo dorsal da artéria radial na entrada proximal"],
    },
    {
      n: 5,
      title: "Reconstruir a pseudartrose sem necrose",
      detail:
        "Na pseudartrose com polo proximal viável, ressecar o tecido fibroso, restaurar a altura e o alinhamento com enxerto corticoesponjoso, corrigir a corcova (cunha volar de Fisk–Fernandez quando houver deformidade) e fixar de forma estável com parafuso.",
      figureId: "fratura-escafoide:enxerto",
      figureVariant: "cunha",
      tips: ["Corrigir a corcova reduz o DISI e melhora a mecânica do carpo", "Osso esponjoso da crista ou do rádio distal é boa fonte"],
      pitfalls: ["Fixar sem corrigir a angulação em corcova", "Deixar tecido fibroso interposto no foco"],
    },
    {
      n: 6,
      title: "Usar enxerto vascularizado na necrose do polo proximal",
      detail:
        "Quando o polo proximal está avascular, preferir enxerto ósseo vascularizado pediculado (por exemplo, o 1,2-ICSRA do dorso do rádio distal) ou enxerto livre vascularizado, para elevar a taxa de consolidação. Reservar salvamento (ressecção do polo, carpectomia da fileira proximal ou artrodese parcial) para o carpo já colapsado.",
      figureId: "fratura-escafoide:enxerto",
      figureVariant: "vascularizado",
      tips: ["Avaliar sangramento puntiforme intraoperatório do polo proximal", "Planejar salvamento se já houver artrose radioescafoide (SNAC)"],
      pitfalls: ["Insistir em enxerto convencional em polo francamente necrótico", "Ignorar artrose estabelecida e tentar reconstrução isolada"],
    },
  ],
  postop: {
    immobilization:
      "Após fixação estável, imobilização curta por conforto, tipicamente por poucas semanas; após enxerto, imobilização mais prolongada até sinais de consolidação. No tratamento conservador, gesso até confirmação da união.",
    weightBearing:
      "Sem carga axial, preensão de força ou esporte de impacto até evidência de consolidação. Progressão guiada por exame clínico e imagem, com TC em caso de dúvida.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Sem carga",
        focus: "Controle de edema e dor; mobilidade de dedos, cotovelo e ombro; proteção do foco.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Sem carga de força",
        focus: "Amplitude ativa progressiva do punho conforme estabilidade da fixação; evitar impacto.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Progressiva após sinais de união",
        focus: "Ganho de amplitude e início de fortalecimento leve; confirmar consolidação por imagem.",
      },
      {
        window: "3–6 meses",
        weightBearing: "Retorno progressivo a esporte/trabalho pesado",
        focus: "Fortalecimento, preensão e gestos específicos após consolidação comprovada.",
      },
    ],
    followup:
      "Acompanhar até a consolidação com exame e imagem seriada; usar TC quando as radiografias forem duvidosas. Vigiar sinais de necrose do polo proximal e de pseudartrose para intervir antes do colapso do carpo.",
  },
  complications: [
    {
      name: "Necrose avascular do polo proximal",
      detail:
        "Consequência da interrupção do fluxo retrógrado, mais provável em fraturas proximais e do colo; manifesta-se por esclerose e falha de consolidação.",
      prevention:
        "Diagnóstico e fixação precoces nas fraturas de risco; enxerto vascularizado quando o polo está avascular.",
    },
    {
      name: "Pseudartrose (não consolidação)",
      detail:
        "Falha de união, favorecida por retardo diagnóstico, desvio não corrigido e comprometimento vascular; evolui com corcova e DISI.",
      prevention:
        "Reconhecer a fratura oculta, imobilizar ou fixar adequadamente e confirmar a consolidação antes de liberar carga.",
    },
    {
      name: "Colapso avançado do carpo (SNAC)",
      detail:
        "Artrose progressiva secundária à pseudartrose, iniciando na articulação radioescafoide (estiloide) e avançando para escafocapitato e capitolunar.",
      prevention:
        "Tratar a pseudartrose antes da instalação da artrose; nos casos estabelecidos, indicar salvamento apropriado.",
    },
    {
      name: "Complicações da fixação por parafuso",
      detail:
        "Protrusão articular, parafuso excêntrico ou longo, e lesão do ramo dorsal da artéria radial ou de ramos cutâneos.",
      prevention:
        "Posição central do parafuso, medida cuidadosa do comprimento e controle fluoroscópico em múltiplos planos.",
    },
  ],
  evidence: [
    {
      id: "dias-2020-swifft",
      claim:
        "Em fratura bicortical do colo do escafoide com desvio de até 2 mm, o gesso inicial com fixação apenas das que não consolidam produziu PRWE em 52 semanas equivalente à cirurgia precoce, com menos complicações cirúrgicas.",
      takeaway:
        "Na fratura do colo pouco ou nada desviada, imobilizar de início e reservar a fixação para as que não unem é conduta respaldada por evidência de nível I.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico (SWIFFT)",
      era: "atual",
      citation: {
        authors: "Dias JJ, Brealey SD, Fairhurst C, et al.",
        title:
          "Surgery versus cast immobilisation for adults with a bicortical fracture of the scaphoid waist (SWIFFT): a pragmatic, multicentre, open-label, randomised superiority trial.",
        journal: "Lancet",
        year: 2020,
        pmid: "32771106",
        doi: "10.1016/S0140-6736(20)30931-4",
      },
    },
    {
      id: "bond-2001-percutanea",
      claim:
        "Em fraturas do colo sem desvio em militares, a fixação percutânea por parafuso canulado reduziu o tempo de consolidação (7 vs 12 semanas) e de retorno ao trabalho (8 vs 15 semanas) em relação ao gesso, sem diferença de amplitude ou força em dois anos.",
      takeaway:
        "A fixação percutânea acelera consolidação e retorno funcional, útil em pacientes de alta demanda, ainda que não seja obrigatória na fratura sem desvio.",
      level: "II",
      studyType: "Ensaio clínico randomizado (amostra pequena)",
      era: "classico",
      citation: {
        authors: "Bond CD, Shin AY, McBride MT, Dao KD",
        title:
          "Percutaneous screw fixation or cast immobilization for nondisplaced scaphoid fractures.",
        journal: "J Bone Joint Surg Am",
        year: 2001,
        pmid: "11315775",
        doi: "10.2106/00004623-200104000-00001",
      },
    },
    {
      id: "yin-2012-imagem",
      claim:
        "Metanálise com análise de classe latente estimou sensibilidade/especificidade de 97,7%/99,8% para a RM na fratura suspeita do escafoide, superando a cintilografia (menos específica) e a TC (menos sensível).",
      takeaway:
        "A RM é o exame mais acurado para a fratura oculta e deve ser preferida quando o diagnóstico precoce é necessário.",
      level: "I",
      studyType: "Metanálise de estudos diagnósticos",
      era: "atual",
      citation: {
        authors: "Yin ZG, Zhang JB, Kan SL, Wang XG",
        title:
          "Diagnostic accuracy of imaging modalities for suspected scaphoid fractures: meta-analysis combined with latent class analysis.",
        journal: "J Bone Joint Surg Br",
        year: 2012,
        pmid: "22844049",
        doi: "10.1302/0301-620X.94B8.28998",
      },
    },
    {
      id: "dean-2024-oculta",
      claim:
        "Em coorte multicêntrica, 12,9% dos punhos investigados por RM tinham fratura do escafoide oculta e, mesmo com imobilização adequada, mais de 6% evoluíram para retardo ou pseudartrose, a maioria necessitando cirurgia.",
      takeaway:
        "A fratura oculta detectada só por RM não é universalmente benigna; reforça o valor da RM precoce e do acompanhamento até a consolidação.",
      level: "III",
      studyType: "Estudo de coorte multicêntrico retrospectivo",
      era: "atual",
      citation: {
        authors: "Dean BJF, Riley N, Little C, et al.",
        title: "The rate of nonunion in the MRI-detected occult scaphoid fracture.",
        journal: "Bone Joint J",
        year: 2024,
        pmid: "38555933",
        doi: "10.1302/0301-620X.106B4.BJJ-2023-1171.R1",
      },
    },
    {
      id: "sgromolo-2019-enxerto-vascularizado",
      claim:
        "Revisão sobre pseudartrose do escafoide indica que a maioria não requer enxerto vascularizado, mas que, na necrose avascular do polo proximal, o enxerto vascularizado deve ser usado para otimizar as taxas de consolidação.",
      takeaway:
        "Reservar o enxerto vascularizado para a necrose do polo proximal; restaurar geometria e estabilidade do carpo é igualmente essencial para o resultado.",
      level: "V",
      studyType: "Revisão narrativa",
      era: "atual",
      citation: {
        authors: "Sgromolo NM, Rhee PC",
        title: "The Role of Vascularized Bone Grafting in Scaphoid Nonunion.",
        journal: "Hand Clin",
        year: 2019,
        pmid: "31178089",
        doi: "10.1016/j.hcl.2019.03.004",
      },
    },
  ],
  pearls: [
    "Radiografia inicial normal não exclui fratura do escafoide: imobilize e reavalie ou solicite RM precoce.",
    "Quanto mais proximal a fratura, maior o risco de necrose e pseudartrose por perda do fluxo retrógrado.",
    "No colo com desvio de até 2 mm, gesso inicial e fixação apenas das que não unem equivale à cirurgia precoce (SWIFFT).",
    "Parafuso canulado sem cabeça no eixo central maximiza comprimento e compressão interfragmentar.",
    "Reserve o enxerto vascularizado para a necrose do polo proximal e trate a pseudartrose antes do colapso SNAC.",
  ],
  pitfalls: [
    "Tratar dor persistente na tabaqueira como simples entorse e liberar sem reavaliação.",
    "Oferecer fixação de rotina para toda fratura sem desvio, ignorando a equivalência do tratamento conservador.",
    "Retirar a imobilização antes de confirmar a consolidação, favorecendo a pseudartrose.",
    "Fixar a pseudartrose sem corrigir a corcova e o alinhamento, perpetuando o DISI.",
    "Insistir em reconstrução quando já há artrose radioescafoide estabelecida, em vez de salvamento.",
  ],
  figures: [
    {
      id: "fratura-escafoide:anatomia",
      caption:
        "Escafoide unindo as fileiras proximal e distal do carpo, com polo proximal, colo e tubérculo, e referência da tabaqueira anatômica.",
      alt: "Anatomia do carpo com o escafoide destacado e a tabaqueira anatômica",
      kind: "diagram",
    },
    {
      id: "fratura-escafoide:vascularizacao",
      caption:
        "Suprimento arterial retrógrado: o ramo carpal dorsal entra na crista dorsal e nutre o polo proximal, que fica vulnerável nas fraturas proximais e do colo.",
      alt: "Vascularização retrógrada do escafoide e risco de necrose do polo proximal",
      kind: "diagram",
    },
    {
      id: "fratura-escafoide:localizacao",
      variant: "proximal",
      caption: "Fratura do polo proximal: maior risco de necrose avascular e pseudartrose.",
      alt: "Fratura do polo proximal do escafoide",
      kind: "diagram",
    },
    {
      id: "fratura-escafoide:localizacao",
      variant: "colo",
      caption: "Fratura do colo (cintura): localização mais comum e base do dilema terapêutico.",
      alt: "Fratura do colo do escafoide",
      kind: "diagram",
    },
    {
      id: "fratura-escafoide:localizacao",
      variant: "distal",
      caption: "Fratura do polo distal/tubérculo: bem vascularizada, de bom prognóstico.",
      alt: "Fratura do polo distal do escafoide",
      kind: "diagram",
    },
    {
      id: "fratura-escafoide:herbert",
      caption:
        "Classificação de Herbert modificada: estável aguda, instável aguda, retardo de consolidação e pseudartrose.",
      alt: "Classificação de Herbert das fraturas do escafoide",
      kind: "diagram",
    },
    {
      id: "fratura-escafoide:fixacao-percutanea",
      variant: "volar",
      caption:
        "Fixação percutânea volar (retrógrada) com parafuso canulado sem cabeça no eixo central, para fraturas do colo e distais.",
      alt: "Fixação percutânea volar do escafoide",
      kind: "diagram",
    },
    {
      id: "fratura-escafoide:fixacao-percutanea",
      variant: "dorsal",
      caption:
        "Fixação percutânea dorsal (anterógrada), preferida nas fraturas do colo proximal e do polo proximal.",
      alt: "Fixação percutânea dorsal do escafoide",
      kind: "diagram",
    },
    {
      id: "fratura-escafoide:pseudartrose",
      caption:
        "Pseudartrose com deformidade em corcova, DISI do semilunar e progressão do colapso avançado do carpo (SNAC I–III).",
      alt: "Pseudartrose do escafoide com corcova, DISI e padrão SNAC",
      kind: "diagram",
    },
    {
      id: "fratura-escafoide:enxerto",
      variant: "cunha",
      caption:
        "Reconstrução com enxerto corticoesponjoso e cunha volar (Fisk–Fernandez) para restaurar altura e corrigir a corcova.",
      alt: "Enxerto ósseo não vascularizado em cunha para pseudartrose do escafoide",
      kind: "diagram",
    },
    {
      id: "fratura-escafoide:enxerto",
      variant: "vascularizado",
      caption:
        "Enxerto ósseo vascularizado pediculado (1,2-ICSRA do dorso do rádio distal) para a necrose do polo proximal.",
      alt: "Enxerto vascularizado pediculado para necrose do polo proximal do escafoide",
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
      "Barros Filho TEP, Lech O. Exame Físico em Ortopedia. 3ª ed.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, sem reprodução de material protegido.",
    figureReference:
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024).",
  },
});
