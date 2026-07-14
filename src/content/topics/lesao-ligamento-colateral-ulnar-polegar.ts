import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-mao-lesao-ligamento-colateral-ulnar-polegar",
  slug: "lesao-ligamento-colateral-ulnar-polegar",
  regionId: "membro-superior",
  bone: "Mão",
  injury: "Lesão ligamentar",
  title: "Lesão do ligamento colateral ulnar do polegar",
  subtitle:
    "Reconhecer a lesão de Stener, que impede a cicatrização e indica cirurgia, e distinguir a ruptura completa instável da lesão parcial tratável de forma conservadora.",
  laterality: null,
  status: "complete",
  overview:
    "A lesão do ligamento colateral ulnar (LCU) da articulação metacarpofalângica (MCF) do polegar resulta de um estresse em valgo — abdução e hiperextensão forçadas do polegar. É clássica na queda com o bastão de esqui preso à mão, o \"polegar do esquiador\" na forma aguda; o termo \"polegar do guarda-caça\" descreve a atenuação crônica por estresse repetitivo. O LCU é o principal restritor ao valgo da MCF e sustenta a pinça polpa a polpa; quando incompetente, resultam dor, perda de força de pinça e, a longo prazo, artrose da MCF.\n\nA falha ocorre tipicamente na inserção distal, na base da falange proximal, com ou sem fragmento ósseo por avulsão. O ponto central da decisão é a lesão de Stener: quando o ligamento se rompe completamente, o coto pode retrair e deslocar-se superficialmente à borda proximal da aponeurose do músculo adutor do polegar. A aponeurose interposta separa o coto de sua inserção e impede a cicatrização, tornando o tratamento conservador ineficaz e indicando reparo cirúrgico. O exame com estresse em valgo, em extensão e a 30° de flexão, define instabilidade; ruptura parcial com endpoint firme é tratada com imobilização, enquanto a ruptura completa instável — sobretudo com lesão de Stener — é cirúrgica.",
  keyFacts: [
    { label: "Sinônimos", value: "Polegar do esquiador (agudo); do guarda-caça (crônico)" },
    { label: "Mecanismo", value: "Abdução e hiperextensão forçadas da MCF (valgo)" },
    { label: "Local da falha", value: "Inserção distal do LCU na base da falange proximal" },
    { label: "Lesão de Stener", value: "Coto acima da aponeurose do adutor — não cicatriza, é cirúrgica" },
    { label: "Exame", value: "Estresse em valgo em extensão e a 30° de flexão vs contralateral" },
    { label: "Instabilidade", value: "Abertura ≥ 30–35° ou > 15° de diferença, sem endpoint firme" },
  ],
  anatomy: {
    text:
      "O complexo colateral ulnar da MCF do polegar tem duas porções. O ligamento colateral ulnar próprio origina-se na região dorsal da cabeça do metacarpo e insere-se na base volar da falange proximal, sendo o principal restritor ao valgo com a articulação em flexão. O ligamento colateral acessório, mais volar, e a placa volar contribuem para a estabilidade com a articulação em extensão. Por isso o estresse deve ser aplicado tanto em extensão quanto a 30° de flexão.\n\nSobre o LCU passa a aponeurose do músculo adutor do polegar, que se dirige à base da falange e ao aparelho extensor. Essa relação anatômica é a chave da lesão de Stener: com a ruptura completa e a retração do coto, a borda proximal da aponeurose pode interpor-se entre o ligamento avulsionado e sua inserção. Na dissecção, ramos sensitivos do nervo radial superficial cruzam o campo dorsoulnar e devem ser protegidos.",
    figureIds: [
      "lesao-ligamento-colateral-ulnar-polegar:anatomia",
      "lesao-ligamento-colateral-ulnar-polegar:mecanismo",
    ],
  },
  classification: [
    {
      id: "grau-instabilidade",
      name: "Grau de instabilidade ao estresse em valgo",
      basis: "Presença de endpoint firme e magnitude da abertura articular ao estresse.",
      note:
        "Testar em extensão e a 30° de flexão e comparar sempre com o polegar contralateral. Radiografia antes do estresse exclui fratura por avulsão que contraindique a manobra vigorosa.",
      types: [
        {
          code: "I",
          label: "Estiramento",
          description:
            "Lesão sem laxidez ao estresse; dor localizada com estabilidade preservada. Tratamento conservador.",
          figureId: "lesao-ligamento-colateral-ulnar-polegar:classificacao",
          figureVariant: "i",
        },
        {
          code: "II",
          label: "Ruptura parcial",
          description:
            "Aumento da abertura, porém com endpoint firme; laxidez sem instabilidade franca. Habitualmente conservador.",
          figureId: "lesao-ligamento-colateral-ulnar-polegar:classificacao",
          figureVariant: "ii",
        },
        {
          code: "III",
          label: "Ruptura completa",
          description:
            "Abertura ampla sem endpoint firme (em geral ≥ 30–35°, ou mais de 15° de diferença em relação ao lado contralateral); indica instabilidade e avaliação para cirurgia.",
          figureId: "lesao-ligamento-colateral-ulnar-polegar:classificacao",
          figureVariant: "iii",
        },
      ],
    },
    {
      id: "morfologia",
      name: "Morfologia do coto e da avulsão",
      basis: "Posição do coto ligamentar em relação à aponeurose do adutor e presença de fragmento ósseo.",
      note:
        "A definição entre ruptura sem deslocamento e lesão de Stener orienta diretamente a escolha entre imobilização e cirurgia.",
      types: [
        {
          code: "SEM-DESLOC",
          label: "Ruptura sem deslocamento",
          description:
            "Coto do LCU permanece sob a aponeurose, em aposição à inserção; tem potencial de cicatrização com imobilização.",
          figureId: "lesao-ligamento-colateral-ulnar-polegar:stener",
          figureVariant: "nao-deslocada",
        },
        {
          code: "STENER",
          label: "Lesão de Stener",
          description:
            "Coto rompido retraído e deslocado superficialmente à borda proximal da aponeurose do adutor; a interposição impede a cicatrização e indica reparo cirúrgico.",
          figureId: "lesao-ligamento-colateral-ulnar-polegar:stener",
          figureVariant: "stener",
        },
        {
          code: "AVULSAO-OSSEA",
          label: "Avulsão óssea",
          description:
            "Fragmento ósseo na base da falange; cirurgia quando há desvio significativo, rotação, incongruência articular ou instabilidade associada.",
          figureId: "lesao-ligamento-colateral-ulnar-polegar:stener",
          figureVariant: "stener",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Lesão de Stener — a interposição da aponeurose impede a cicatrização.",
      "Ruptura completa instável (grau III) sem endpoint firme ao estresse em valgo.",
      "Avulsão óssea com desvio significativo, rotação do fragmento ou incongruência articular.",
      "Instabilidade crônica sintomática com dor, fraqueza de pinça ou incompetência do LCU.",
      "Falha do tratamento conservador com instabilidade persistente.",
    ],
    nonOperative: [
      "Lesão parcial (graus I e II) com endpoint firme ao estresse em valgo.",
      "Ruptura sem deslocamento do coto, sem interposição da aponeurose.",
      "Avulsão óssea pouco desviada, congruente e estável.",
    ],
    decisionNotes:
      "A pergunta prática é dupla: a lesão é completa e instável, e há uma lesão de Stener? A ruptura parcial estável cicatriza bem com imobilização em espica de polegar por cerca de 4 a 6 semanas. A ruptura completa instável — em especial a lesão de Stener — não cicatriza com aponeurose interposta e é indicação de reparo. Quando o exame é equívoco por dor ou defesa, ultrassonografia ou ressonância ajudam a identificar o coto deslocado. O reparo agudo (idealmente nas primeiras semanas) tende a bons resultados, mas evidência recente sugere que o reparo tardio de lesões completas pode alcançar resultados semelhantes, sem transformar toda demora em indicação de reconstrução. Em lesões crônicas irreparáveis, opta-se por reconstrução com enxerto tendíneo; a artrodese da MCF é reservada a artrose ou instabilidade crônica grave.",
  },
  approaches: [
    {
      id: "dorsoulnar",
      name: "Via dorsoulnar da MCF do polegar",
      indication: "Reparo agudo do LCU e reconstrução da lesão crônica.",
      interval:
        "Incisão curvilínea ou longitudinal dorsoulnar sobre a MCF; identificar e proteger os ramos sensitivos do nervo radial superficial. Incisar a aponeurose do músculo adutor para expor o LCU e a base da falange; em lesão de Stener, o coto é encontrado dobrado superficialmente à borda proximal da aponeurose. A aponeurose é reparada ao final.",
      atRisk: [
        "Ramos sensitivos do nervo radial superficial",
        "Aponeurose do adutor (incisar e reparar corretamente)",
        "Superfície articular e cartilagem da MCF",
      ],
      figureId: "lesao-ligamento-colateral-ulnar-polegar:via-acesso",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Examinar, estabilizar e obter imagem antes do estresse",
      detail:
        "Palpar o ponto doloroso ulnar da MCF e procurar nódulo palpável proximal sugestivo de coto de Stener. Obter radiografia antes do estresse em valgo vigoroso para excluir avulsão óssea deslocada. Testar o valgo em extensão e a 30° de flexão, sempre comparando ao lado contralateral, para definir endpoint e magnitude da abertura.",
      figureId: "lesao-ligamento-colateral-ulnar-polegar:teste-estresse",
      tips: [
        "Um nódulo palpável dorsoulnar sugere fortemente lesão de Stener",
        "Anestesia local pode ser necessária para um exame de estresse confiável",
      ],
      pitfalls: [
        "Aplicar estresse antes da radiografia e desviar uma avulsão óssea",
        "Testar apenas em extensão e não avaliar o LCU próprio a 30° de flexão",
      ],
    },
    {
      n: 2,
      title: "Definir Stener versus lesão sem deslocamento",
      detail:
        "Diferenciar ruptura completa com coto deslocado acima da aponeurose (Stener) da ruptura sem deslocamento, cujo coto permanece sob a aponeurose e em aposição à inserção. Em exame equívoco, ultrassonografia ou ressonância localizam o coto e orientam a indicação.",
      figureId: "lesao-ligamento-colateral-ulnar-polegar:stener",
      figureVariant: "stener",
      tips: [
        "A lesão de Stener não cicatriza com imobilização — é decisão cirúrgica",
        "Imagem dinâmica ajuda quando dor e defesa limitam o exame",
      ],
      pitfalls: [
        "Imobilizar uma lesão de Stener e aguardar cicatrização que não ocorrerá",
        "Confundir edema com nódulo de coto e vice-versa",
      ],
    },
    {
      n: 3,
      title: "Expor pela via dorsoulnar e reduzir o coto",
      detail:
        "Acessar a MCF pela via dorsoulnar, protegendo os ramos sensitivos do nervo radial superficial. Incisar a aponeurose do adutor; em Stener, liberar o coto de sua posição superficial e retorná-lo ao leito da inserção distal na base da falange proximal.",
      figureId: "lesao-ligamento-colateral-ulnar-polegar:via-acesso",
      tips: [
        "Marcar a borda proximal da aponeurose para reparo anatômico ao final",
        "Manipular o ligamento por sutura-guia, preservando seu comprimento",
      ],
      pitfalls: [
        "Lesar ramos sensitivos do nervo radial com afastadores",
        "Não identificar a interposição e reparar sobre a aponeurose",
      ],
    },
    {
      n: 4,
      title: "Reinserir o LCU na inserção anatômica",
      detail:
        "Preparar o leito ósseo na base volar-ulnar da falange proximal e reinserir o coto com âncora de sutura (ou sutura transóssea/pull-out). Reduzir a MCF, tensionar o reparo em posição neutra e conferir estabilidade ao valgo sem restringir a mobilidade. Um fio de Kirschner transarticular pode proteger o reparo.",
      figureId: "lesao-ligamento-colateral-ulnar-polegar:reparo",
      figureVariant: "reparo",
      tips: [
        "Reproduzir a inserção anatômica preserva a cinemática da pinça",
        "A augmentação com fita de sutura pode permitir reabilitação mais precoce",
      ],
      pitfalls: [
        "Sobretensionar e limitar a flexão da MCF",
        "Fixar o ligamento proximal ou volar demais em relação à inserção nativa",
      ],
    },
    {
      n: 5,
      title: "Reparar a aponeurose e planejar a lesão crônica",
      detail:
        "Reparar a aponeurose do adutor sobre o LCU reconstituído e fechar por planos. Na lesão crônica irreparável, optar por reconstrução com enxerto tendíneo livre (por exemplo, palmar longo) reproduzindo origem e inserção do LCU; reservar artrodese da MCF para artrose ou instabilidade crônica grave.",
      figureId: "lesao-ligamento-colateral-ulnar-polegar:reconstrucao",
      tips: [
        "A restauração da aponeurose evita subluxação dinâmica do reparo",
        "Escolher reconstrução quando o tecido nativo não sustenta sutura",
      ],
      pitfalls: [
        "Deixar a aponeurose incompetente após o reparo do ligamento",
        "Indicar reconstrução sem antes avaliar reparabilidade do coto",
      ],
    },
  ],
  postop: {
    immobilization:
      "Espica de polegar por cerca de 4 a 6 semanas, protegendo o valgo; fio de Kirschner transarticular, quando usado, é retirado por volta de 3 a 4 semanas. No tratamento conservador da lesão parcial, imobilização em espica por período semelhante.",
    weightBearing:
      "Sem pinça forte, preensão de força ou estresse em valgo no início. A carga sobre a pinça é liberada progressivamente após a cicatrização, com retorno a esporte de contato ou preensão vigorosa somente após estabilidade e força recuperadas.",
    rehab: [
      {
        window: "0-4 semanas",
        weightBearing: "Sem carga na pinça",
        focus: "Proteção do reparo em espica; mobilizar interfalângica e demais dedos; controle de edema.",
      },
      {
        window: "4-6 semanas",
        weightBearing: "Carga leve protegida",
        focus: "Retirar fio quando presente; iniciar mobilidade ativa da MCF em órtese removível, evitando valgo.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Progressiva",
        focus: "Ganho de amplitude, fortalecimento progressivo da pinça e da preensão; dessensibilização da cicatriz.",
      },
      {
        window: "3-4 meses",
        weightBearing: "Livre conforme critérios",
        focus: "Retorno a esporte e trabalho de força; órtese protetora em atividades de risco até estabilidade plena.",
      },
    ],
    followup:
      "Avaliar estabilidade ao valgo, amplitude e força de pinça em relação ao lado contralateral. Vigiar dor persistente e sinais de artrose tardia da MCF; irritação de ramo sensitivo do nervo radial deve ser reconhecida precocemente.",
  },
  complications: [
    {
      name: "Instabilidade residual ou recorrente",
      detail:
        "Persistência de laxidez ao valgo por reparo insuficiente, lesão de Stener não reconhecida ou reabilitação inadequada.",
      prevention: "Diagnóstico correto do Stener, reinserção anatômica e proteção adequada do reparo.",
    },
    {
      name: "Rigidez da MCF",
      detail: "Perda de amplitude por imobilização prolongada ou reparo sobretensionado.",
      prevention: "Tensionamento em posição neutra e mobilização protegida progressiva.",
    },
    {
      name: "Lesão de ramo sensitivo do nervo radial",
      detail: "Neuroma ou disestesia dorsoulnar por tração ou secção inadvertida no acesso.",
      prevention: "Identificação e proteção cuidadosa dos ramos sensitivos durante a dissecção.",
    },
    {
      name: "Artrose secundária da MCF",
      detail: "Consequência tardia de instabilidade crônica não tratada ou incongruência articular.",
      prevention: "Restaurar a estabilidade precocemente e tratar corretamente avulsões articulares.",
    },
  ],
  evidence: [
    {
      id: "stener-1962-interposicao",
      claim:
        "A descrição original demonstrou que, na ruptura completa do LCU, o coto pode deslocar-se superficialmente à aponeurose do adutor, ficando interposto e impedido de cicatrizar.",
      takeaway:
        "A lesão de Stener é o fundamento anatômico que separa a ruptura completa cirúrgica da lesão tratável de forma conservadora.",
      level: "V",
      studyType: "Revisão histórica e de critérios diagnósticos",
      era: "classico",
      citation: {
        authors: "Lark ME, Maroukis BL, Chung KC",
        title: "The Stener Lesion: Historical Perspective and Evolution of Diagnostic Criteria",
        journal: "Hand (N Y)",
        year: 2016,
        pmid: "28453338",
        doi: "10.1177/1558944716661999",
        url: "https://doi.org/10.1177/1558944716661999",
      },
    },
    {
      id: "samora-2013-revisao-sistematica",
      claim:
        "Revisão sistemática mostrou excelentes resultados após reparo agudo e reconstrução crônica, sem diferença significativa entre reparo e reconstrução, enquanto o tratamento conservador frequentemente falhou e exigiu cirurgia.",
      takeaway:
        "O tratamento cirúrgico da lesão completa é confiável tanto no reparo agudo quanto na reconstrução tardia; o conservador se reserva à lesão parcial estável.",
      level: "IV",
      studyType: "Revisão sistemática de estudos de resultado",
      era: "atual",
      citation: {
        authors: "Samora JB, Harris JD, Griesser MJ, Ruff ME, Awan HM",
        title: "Outcomes after injury to the thumb ulnar collateral ligament — a systematic review.",
        journal: "Clin J Sport Med",
        year: 2013,
        pmid: "23615487",
        doi: "10.1097/JSM.0b013e318289c6ff",
      },
    },
    {
      id: "legerstee-2023-prom",
      claim:
        "Em coorte prospectiva de 76 pacientes com reparo aberto de ruptura completa do LCU, os desfechos relatados pelo paciente melhoraram significativamente em 3 e 12 meses, sem diferença entre reparo agudo (< 3 semanas) e tardio (< 6 meses).",
      takeaway:
        "O reparo tardio de lesões completas pode alcançar bons resultados, sugerindo que o reparo agudo nem sempre é imprescindível.",
      level: "II",
      studyType: "Estudo de coorte prospectivo",
      era: "atual",
      citation: {
        authors: "Legerstee IWF, van der Oest MJW, Souer JS, et al.",
        title:
          "Patient-Reported Outcomes and Function After Surgical Repair of the Ulnar Collateral Ligament of the Thumb.",
        journal: "J Hand Surg Am",
        year: 2023,
        pmid: "37294237",
        doi: "10.1016/j.jhsa.2023.05.003",
      },
    },
    {
      id: "assefa-2025-revisao-sistematica",
      claim:
        "Revisão sistemática de 12 estudos (335 pacientes) concluiu que o tratamento cirúrgico é o padrão de referência para a ruptura completa do LCU, especialmente com lesão de Stener, instabilidade ou falha do conservador, com altas taxas de retorno ao esporte.",
      takeaway:
        "Diversas técnicas — âncora, enxerto e augmentação com fita — produzem resultados funcionais favoráveis na lesão completa.",
      level: "III",
      studyType: "Revisão sistemática",
      era: "atual",
      citation: {
        authors: "Assefa AK, Amin MN, Hashish R, et al.",
        title:
          "Evaluation of Functional and Clinical Outcomes Following Surgical Repair of Complete Thumb Ulnar Collateral Ligament Injuries in Adults: A Systematic Review Across Diverse Populations.",
        journal: "Cureus",
        year: 2025,
        pmid: "40741552",
        doi: "10.7759/cureus.87053",
      },
    },
    {
      id: "daley-2020-decisao",
      claim:
        "Revisão contemporânea ressalta que o manejo depende do grau da lesão e da presença de lesão de Stener ou avulsão óssea ampla, com decisão compartilhada quanto ao momento cirúrgico e reparo primário com ou sem augmentação na fase aguda.",
      takeaway:
        "A conduta se estrutura em torno da instabilidade e da lesão de Stener, individualizando o momento da cirurgia conforme demanda e contexto.",
      level: "V",
      studyType: "Artigo de revisão",
      era: "atual",
      citation: {
        authors: "Daley D, Geary M, Gaston RG",
        title: "Thumb Metacarpophalangeal Ulnar and Radial Collateral Ligament Injuries.",
        journal: "Clin Sports Med",
        year: 2020,
        pmid: "32115093",
        doi: "10.1016/j.csm.2019.12.003",
      },
    },
  ],
  pearls: [
    "Um nódulo palpável dorsoulnar sobre a MCF é sinal clínico de lesão de Stener e indica cirurgia.",
    "Testar o valgo em extensão e a 30° de flexão avalia, respectivamente, o complexo acessório/placa volar e o LCU próprio.",
    "Radiografia antes do estresse evita desviar uma avulsão óssea durante a manobra.",
    "Endpoint firme, mesmo com alguma laxidez, sinaliza lesão parcial habitualmente tratável de forma conservadora.",
  ],
  pitfalls: [
    "Imobilizar uma lesão de Stener na expectativa de cicatrização que não ocorre com a aponeurose interposta.",
    "Aplicar estresse em valgo vigoroso antes de excluir avulsão óssea deslocada.",
    "Reparar o ligamento e deixar a aponeurose do adutor incompetente.",
    "Lesar ramos sensitivos do nervo radial superficial no acesso dorsoulnar.",
  ],
  figures: [
    {
      id: "lesao-ligamento-colateral-ulnar-polegar:anatomia",
      caption:
        "Complexo colateral ulnar da MCF do polegar: ligamento próprio, acessório, placa volar e aponeurose do adutor recobrindo o LCU.",
      alt: "Anatomia do ligamento colateral ulnar do polegar e aponeurose do adutor",
      kind: "diagram",
    },
    {
      id: "lesao-ligamento-colateral-ulnar-polegar:mecanismo",
      caption:
        "Mecanismo do polegar do esquiador: abdução e hiperextensão forçadas produzem avulsão do LCU na inserção distal.",
      alt: "Mecanismo de lesão em valgo da metacarpofalângica do polegar",
      kind: "diagram",
    },
    {
      id: "lesao-ligamento-colateral-ulnar-polegar:stener",
      variant: "nao-deslocada",
      caption: "Ruptura sem deslocamento: o coto do LCU permanece sob a aponeurose, com potencial de cicatrização.",
      alt: "Ruptura do LCU sem deslocamento do coto",
      kind: "diagram",
    },
    {
      id: "lesao-ligamento-colateral-ulnar-polegar:stener",
      variant: "stener",
      caption:
        "Lesão de Stener: coto do LCU deslocado superficialmente à aponeurose do adutor, cuja interposição impede a cicatrização.",
      alt: "Lesão de Stener do polegar",
      kind: "diagram",
    },
    {
      id: "lesao-ligamento-colateral-ulnar-polegar:classificacao",
      variant: "ii",
      caption: "Graus de instabilidade ao estresse em valgo: estiramento, ruptura parcial estável e ruptura completa instável.",
      alt: "Graus de instabilidade da MCF ao estresse em valgo",
      kind: "diagram",
    },
    {
      id: "lesao-ligamento-colateral-ulnar-polegar:teste-estresse",
      caption: "Teste de estresse em valgo em extensão e a 30° de flexão, comparado ao polegar contralateral.",
      alt: "Teste de estresse em valgo da metacarpofalângica do polegar",
      kind: "diagram",
    },
    {
      id: "lesao-ligamento-colateral-ulnar-polegar:via-acesso",
      caption: "Via dorsoulnar: incisão da aponeurose do adutor e proteção dos ramos sensitivos do nervo radial.",
      alt: "Via dorsoulnar de acesso à metacarpofalângica do polegar",
      kind: "diagram",
    },
    {
      id: "lesao-ligamento-colateral-ulnar-polegar:reparo",
      caption: "Reparo do LCU com âncora de sutura na inserção distal e reparo subsequente da aponeurose do adutor.",
      alt: "Reparo do ligamento colateral ulnar com âncora de sutura",
      kind: "diagram",
    },
    {
      id: "lesao-ligamento-colateral-ulnar-polegar:reconstrucao",
      caption: "Reconstrução da lesão crônica com enxerto tendíneo livre reproduzindo origem e inserção do LCU.",
      alt: "Reconstrução do ligamento colateral ulnar com enxerto tendíneo",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: princípios e prática. 6ª ed. 2025.",
      "Barros Filho TEP, Lech O. Exame Físico em Ortopedia. 3ª ed.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, não reprodução de material protegido.",
    figureReference:
      "Referência editorial: Rockwood and Green's Fractures in Adults, 10ª ed. (2024), capítulo de lesões dos ligamentos colaterais da metacarpofalângica do polegar; redesenho original.",
  },
});
