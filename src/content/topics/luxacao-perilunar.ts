import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-punho-carpo-luxacao-perilunar",
  slug: "luxacao-perilunar",
  regionId: "membro-superior",
  bone: "Punho",
  injury: "Fratura-luxação perilunar",
  title: "Luxação perilunar do carpo",
  subtitle:
    "Reconhecer precocemente um espectro de instabilidade perilunar de alta energia, reduzir em urgência e restaurar a anatomia por fixação óssea e reparo ligamentar.",
  laterality: null,
  status: "complete",
  overview:
    "A luxação perilunar representa a falência sequencial das conexões ao redor do semilunar, quase sempre por trauma de alta energia com o punho em extensão, desvio ulnar e supinação intercárpica. O semilunar permanece ancorado ao rádio enquanto o restante do carpo se desloca — habitualmente para dorsal (97% das séries). Quando a energia dissipa-se por partes moles, a lesão é puramente ligamentar (arco menor); quando atravessa o osso, produz fratura-luxação (arco maior), sendo a variante transescafoperilunar dorsal a mais frequente.\n\nÉ uma emergência ortopédica e um diagnóstico traiçoeiro: cerca de um quarto dos casos passa despercebido na avaliação inicial. A prioridade na urgência é documentar a função do nervo mediano, obter redução fechada atraumática e liberar o túnel do carpo se houver compressão progressiva do mediano ou irredutibilidade. A redução fechada raramente é definitiva; o tratamento de referência é a redução aberta com fixação interna e reparo ligamentar (dorsal, associando via volar quando há lesão capsular volar, síndrome do túnel do carpo estabelecida ou fragmento irredutível). Mesmo com tratamento adequado e anatômico, perda de mobilidade, redução de força de preensão e artrose radiográfica tardia são comuns.",
  keyFacts: [
    { label: "Mecanismo", value: "Extensão, desvio ulnar e supinação intercárpica (alta energia)" },
    { label: "Emergência", value: "Redução urgente; liberar túnel do carpo se compressão do mediano" },
    { label: "Espectro", value: "Arco menor (ligamentar) vs arco maior (transósseo)" },
    { label: "Estágios", value: "Mayfield I–IV: escafolunar → capitolunar → lunopiramidal → luxação do semilunar" },
    { label: "Diagnóstico", value: "~25% despercebidos; semilunar triangular no AP, xícara derramada no perfil" },
    { label: "Tratamento", value: "RAFI + reparo ligamentar; redução fechada isolada é insuficiente" },
  ],
  anatomy: {
    text:
      "O semilunar é a chave mecânica do carpo: assenta na fossa semilunar do rádio e recebe a cabeça do capitato em sua concavidade distal, transmitindo carga da coluna central. Sua estabilidade depende de ligamentos intrínsecos (escafolunar e lunopiramidal, ambos com porções dorsal e volar) e extrínsecos volares, com destaque para o complexo radioescafocapitato e o radiolunar longo e curto. Entre esses feixes volares existe uma zona de menor resistência, o espaço de Poirier, por onde o carpo tende a se deslocar.\n\nO escafoide comporta-se como uma ponte oblíqua entre as fileiras proximal e distal, o que o torna vulnerável tanto à dissociação escafolunar quanto à fratura no traço transescafoide. No assoalho do túnel do carpo, o nervo mediano corre imediatamente volar ao semilunar; por isso o deslocamento volar do osso (estágio IV) frequentemente cursa com neuropatia aguda do mediano. Dorsalmente, o acesso cirúrgico atravessa o intervalo entre o 3º e o 4º compartimentos extensores, com o nervo interósseo posterior no assoalho do 4º compartimento.",
    figureIds: [
      "luxacao-perilunar:anatomia",
      "luxacao-perilunar:arcos",
    ],
  },
  classification: [
    {
      id: "mayfield",
      name: "Instabilidade perilunar progressiva (Mayfield)",
      basis:
        "Sequência de falência ligamentar ao redor do semilunar demonstrada em carga experimental, de radial para ulnar e então volar.",
      note:
        "Descreve a progressão anatômica e explica os achados por imagem; os estágios I–III podem coexistir num mesmo punho antes da luxação franca do semilunar (estágio IV).",
      types: [
        {
          code: "I",
          label: "Dissociação escafolunar",
          description:
            "Falência do ligamento escafolunar; corresponde ao início da instabilidade na coluna radial, com escafoide tendendo à flexão.",
          figureId: "luxacao-perilunar:mayfield",
          figureVariant: "1",
        },
        {
          code: "II",
          label: "Luxação capitolunar",
          description:
            "Progressão pela articulação mediocárpica: a cabeça do capitato desloca-se dorsalmente sobre o semilunar.",
          figureId: "luxacao-perilunar:mayfield",
          figureVariant: "2",
        },
        {
          code: "III",
          label: "Dissociação lunopiramidal",
          description:
            "Falência do ligamento lunopiramidal, completando a separação do semilunar em relação ao restante do carpo.",
          figureId: "luxacao-perilunar:mayfield",
          figureVariant: "3",
        },
        {
          code: "IV",
          label: "Luxação do semilunar",
          description:
            "O semilunar báscula e luxa-se volarmente para o túnel do carpo (aspecto de xícara derramada), enquanto o capitato retorna à fossa do rádio.",
          figureId: "luxacao-perilunar:mayfield",
          figureVariant: "4",
        },
      ],
    },
    {
      id: "arcos",
      name: "Arco menor vs arco maior",
      basis:
        "Trajeto da lesão ao redor do semilunar: exclusivamente pelas partes moles ou atravessando estruturas ósseas.",
      note:
        "As fraturas-luxações do arco maior são cerca de duas vezes mais frequentes que as luxações puramente ligamentares, e a variante transescafoperilunar dorsal é a mais comum de todas.",
      types: [
        {
          code: "MENOR",
          label: "Arco menor (puramente ligamentar)",
          description:
            "Luxação perilunar sem fratura: rupturas escafolunar, capitolunar e lunopiramidal. Mais propensa à perda secundária de redução por depender apenas de cicatrização ligamentar.",
          figureId: "luxacao-perilunar:arcos",
          figureVariant: "menor",
        },
        {
          code: "MAIOR",
          label: "Arco maior (transósseo)",
          description:
            "Fratura-luxação com traços transestiloide, transescafoide, transcapitato e/ou transpiramidal. A consolidação óssea confere estabilidade adicional após a fixação.",
          figureId: "luxacao-perilunar:arcos",
          figureVariant: "maior",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Praticamente todas as luxações e fraturas-luxações perilunares agudas: redução aberta com fixação interna e reparo ligamentar.",
      "Compressão progressiva do nervo mediano ou irredutibilidade — liberação do túnel do carpo em urgência.",
      "Fratura-luxação do arco maior com traço transescafoide/transcapitato exigindo fixação óssea.",
      "Perda secundária de redução, incongruência residual ou diástase escafolunar após tentativa fechada.",
      "Luxação exposta: desbridamento, estabilização (eventual fixador externo) e fixação definitiva conforme a ferida.",
    ],
    nonOperative: [
      "Papel muito restrito: apenas estabilização provisória com redução fechada e imobilização enquanto se aguarda a cirurgia.",
      "Paciente sem condições clínicas para anestesia/cirurgia, como medida temporária ou paliativa.",
    ],
    decisionNotes:
      "A redução fechada é uma medida de urgência para descomprimir o mediano e restaurar o alinhamento, não o tratamento definitivo: a manutenção da redução e a cicatrização ligamentar adequada raramente são obtidas sem fixação. A via de acesso segue a lesão — a via dorsal permite reduzir o carpo e reparar os ligamentos interósseos e fixar o escafoide; a via volar é adicionada para descompressão do mediano, reparo do assoalho capsular volar (espaço de Poirier) e fragmentos irredutíveis. Lesões negligenciadas até cerca de cinco semanas ainda podem responder à RAFI; além disso, procedimentos de salvamento (carpectomia da fileira proximal ou artrodese) tendem a ser necessários.",
  },
  approaches: [
    {
      id: "reducao-fechada",
      name: "Redução fechada de urgência (manobra de Tavernier)",
      indication:
        "Primeira medida no pronto-socorro para descomprimir o nervo mediano e restaurar grosseiramente o alinhamento carpal.",
      interval:
        "Sob analgesia/sedação adequada: tração longitudinal sustentada com contratração no braço, extensão do punho para desengatar o capitato, pressão do polegar sobre o semilunar e flexão progressiva para recapturar a cabeça do capitato. Confirmar por radiografia e reavaliar o mediano.",
      atRisk: [
        "Nervo mediano no túnel do carpo",
        "Cartilagem articular sob manipulação repetida e forçada",
        "Suprimento vascular do escafoide e do semilunar",
      ],
      figureId: "luxacao-perilunar:reducao",
    },
    {
      id: "via-dorsal",
      name: "Via dorsal (intervalo 3º–4º compartimentos)",
      indication:
        "Acesso principal: redução do carpo sob visão direta, fixação do escafoide e reparo dos ligamentos escafolunar e lunopiramidal.",
      interval:
        "Incisão dorsal longitudinal; abertura do 3º compartimento com transposição do extensor longo do polegar; capsulotomia dorsal poupadora de ligamentos (tipo Berger) para expor o carpo.",
      atRisk: [
        "Nervo interósseo posterior no assoalho do 4º compartimento",
        "Tendão extensor longo do polegar",
        "Ramos sensitivos dorsais do nervo radial",
      ],
      figureId: "luxacao-perilunar:via-dorsal",
    },
    {
      id: "via-volar",
      name: "Via volar estendida (túnel do carpo)",
      indication:
        "Descompressão do nervo mediano, reparo do assoalho capsular volar (espaço de Poirier / radiolunar curto) e redução de fragmento ou semilunar irredutível.",
      interval:
        "Incisão do túnel do carpo estendida proximalmente pela prega do punho; abertura do retináculo flexor, proteção e liberação do mediano e acesso à cápsula volar entre os feixes radiolunares.",
      atRisk: [
        "Nervo mediano e seu ramo motor tenar",
        "Ramo cutâneo palmar do mediano",
        "Arco palmar superficial",
      ],
      figureId: "luxacao-perilunar:via-volar",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Avaliar, documentar e reduzir em urgência",
      detail:
        "Registrar o exame do nervo mediano (sensibilidade dos dedos radiais e função tenar) antes de qualquer manobra. Obter radiografias em AP e perfil e reconhecer os sinais de perda de colinearidade. Realizar a manobra de Tavernier sob analgesia e reavaliar o mediano após a redução.",
      figureId: "luxacao-perilunar:reducao",
      tips: [
        "No perfil, checar o alinhamento rádio–semilunar–capitato em uma linha",
        "Em dúvida, comparar com o punho contralateral",
      ],
      pitfalls: [
        "Interpretar a redução fechada como tratamento definitivo",
        "Postergar a descompressão diante de sintomas progressivos do mediano",
      ],
    },
    {
      n: 2,
      title: "Reconhecer o padrão e planejar as vias",
      detail:
        "Definir arco menor (ligamentar) versus arco maior (transósseo) e o estágio de Mayfield. A TC delineia os traços de fratura do escafoide e do capitato; a decisão entre via dorsal isolada e combinada dorsopalmar depende de compressão do mediano, lesão capsular volar e reducibilidade.",
      figureId: "luxacao-perilunar:arcos",
      figureVariant: "maior",
      tips: ["TC define o traço transescafoide/transcapitato", "Planejar enxerto se houver cominuição do escafoide"],
      pitfalls: ["Subestimar a lesão ligamentar em fraturas-luxações", "Ignorar a fratura do estiloide radial associada"],
    },
    {
      n: 3,
      title: "Exposição dorsal e redução do carpo",
      detail:
        "Pela via dorsal, transpor o extensor longo do polegar e realizar capsulotomia poupadora de ligamentos. Reduzir sequencialmente a coluna central (capitato–semilunar) e as colunas radial e ulnar sob visão direta, corrigindo a báscula do semilunar e a rotação do escafoide.",
      figureId: "luxacao-perilunar:via-dorsal",
      tips: ["Usar fios de Kirschner como joysticks para controlar escafoide e semilunar", "Restaurar primeiro o alinhamento sagital do semilunar"],
      pitfalls: ["Capsulotomia que sacrifica ligamentos extrínsecos reparáveis", "Reduzir o escafoide em flexão residual (DISI persistente)"],
    },
    {
      n: 4,
      title: "Fixar o esqueleto ósseo",
      detail:
        "Nas fraturas-luxações, fixar o escafoide com parafuso canulado sem cabeça e o capitato/estiloide conforme o traço. Nas lesões puramente ligamentares, estabilizar as articulações escafolunar e lunopiramidal com fios de Kirschner mantendo a redução anatômica.",
      figureId: "luxacao-perilunar:fixacao",
      tips: ["Confirmar a redução escafolunar antes de fixar em definitivo", "Checar comprimento do parafuso do escafoide sob fluoroscopia"],
      pitfalls: ["Fixar apenas o escafoide e deixar diástase escafolunar ou lunopiramidal", "Fios curtos que migram ou perdem a preensão"],
    },
    {
      n: 5,
      title: "Reparar os ligamentos interósseos",
      detail:
        "Reinserir o ligamento escafolunar dorsal (e o lunopiramidal quando avulsionado) com âncoras ou suturas transósseas, protegendo o reparo com os fios de Kirschner. Nas lesões do arco menor, o reparo ligamentar é o determinante da estabilidade a médio prazo.",
      figureId: "luxacao-perilunar:fixacao",
      tips: ["Priorizar a porção dorsal do ligamento escafolunar", "Aumentar o reparo com capsulodese dorsal quando o tecido é tênue"],
      pitfalls: ["Confiar apenas na cicatrização espontânea nas lesões do arco menor", "Sobretensionar e restringir a mobilidade mediocárpica"],
    },
    {
      n: 6,
      title: "Abordar o lado volar quando indicado",
      detail:
        "Se houver compressão do mediano, lesão capsular volar significativa ou fragmento irredutível, complementar com a via volar: liberar o túnel do carpo, reparar o assoalho capsular (espaço de Poirier e radiolunar curto) e conferir a redução do semilunar. Fechar sem tensão e imobilizar.",
      figureId: "luxacao-perilunar:via-volar",
      tips: ["A liberação do túnel também facilita a redução do semilunar luxado", "Reparar a cápsula volar reduz a instabilidade residual"],
      pitfalls: ["Fechar o retináculo flexor sobre um mediano ainda comprimido", "Negligenciar o reparo do assoalho capsular volar"],
    },
  ],
  postop: {
    immobilization:
      "Imobilização gessada ou tala com o punho em posição neutra por cerca de 8 semanas, mantendo os fios de Kirschner; a proteção total costuma se estender de 8 a 12 semanas conforme a consolidação óssea e a cicatrização ligamentar.",
    weightBearing:
      "Sem carga axial pelo punho enquanto os fios estiverem posicionados e o reparo em maturação; carga e preensão de força são liberadas progressivamente após a retirada dos fios e sinais de consolidação.",
    rehab: [
      {
        window: "0–8 semanas",
        weightBearing: "Sem carga pelo punho",
        focus: "Imobilização com fios; mobilizar dedos, cotovelo e ombro; controle de edema e da dor.",
      },
      {
        window: "8–12 semanas",
        weightBearing: "Sem carga de força",
        focus: "Retirada dos fios após consolidação; início de amplitude ativa protegida do punho.",
      },
      {
        window: "3–6 meses",
        weightBearing: "Progressiva",
        focus: "Ganho de amplitude, fortalecimento de preensão e reeducação proprioceptiva.",
      },
      {
        window: "6–12 meses",
        weightBearing: "Plena conforme tolerância",
        focus: "Retorno gradual ao trabalho/esporte; expectativa realista quanto a mobilidade e força residuais.",
      },
    ],
    followup:
      "Acompanhamento radiográfico seriado para consolidação do escafoide, manutenção da redução escafolunar e detecção precoce de artrose mediocárpica ou radiocárpica. A artrose radiográfica é frequente e aumenta com o tempo, mas correlaciona-se mal com dor e função — a decisão por procedimento de salvamento deve basear-se nos sintomas.",
  },
  complications: [
    {
      name: "Perda secundária de redução",
      detail:
        "Principal complicação após fixação; mais frequente nas luxações puramente ligamentares (arco menor) do que nas fraturas-luxações, por dependerem apenas da cicatrização ligamentar.",
      prevention: "Reparo ligamentar robusto, fixação adequada e imobilização suficiente antes da retirada dos fios.",
    },
    {
      name: "Artrose pós-traumática",
      detail:
        "Artrose mediocárpica e radiocárpica é comum a médio e longo prazo e aumenta com o seguimento; nem sempre traduz-se em dor ou limitação funcional relevante.",
      prevention: "Redução anatômica e restauração da altura e do alinhamento carpal reduzem, mas não eliminam, o risco.",
    },
    {
      name: "Neuropatia do nervo mediano",
      detail:
        "Compressão aguda (semilunar volar) ou síndrome do túnel do carpo pós-traumática; pode persistir se a descompressão for tardia.",
      prevention: "Exame documentado e liberação precoce do túnel do carpo diante de sintomas progressivos.",
    },
    {
      name: "Necrose avascular e não união",
      detail:
        "Osteonecrose do semilunar e não união/necrose do polo proximal do escafoide comprometem a coluna central e podem levar a colapso perilunar.",
      prevention: "Manuseio cuidadoso dos ligamentos volares (vascularização) e fixação estável do escafoide.",
    },
    {
      name: "Rigidez e perda de força",
      detail:
        "Redução de amplitude e da força de preensão em relação ao lado contralateral é a regra, mesmo com tratamento anatômico.",
      prevention: "Reabilitação orientada e expectativa realista discutida com o paciente.",
    },
  ],
  evidence: [
    {
      id: "mayfield-1980-pli",
      claim:
        "Em carga experimental de punhos cadavéricos, as luxações perilunares ocorrem por falência ligamentar sequencial ao redor do semilunar, definindo estágios I–IV de instabilidade perilunar progressiva.",
      takeaway:
        "Fundamenta o raciocínio anatômico: a lesão progride de radial para ulnar e então volar, o que orienta o reparo de todas as conexões, não apenas de uma.",
      level: "V",
      studyType: "Estudo biomecânico cadavérico",
      era: "classico",
      citation: {
        authors: "Mayfield JK, Johnson RP, Kilcoyne RK",
        title: "Carpal dislocations: pathomechanics and progressive perilunar instability.",
        journal: "J Hand Surg Am",
        year: 1980,
        pmid: "7400560",
        doi: "10.1016/s0363-5023(80)80007-4",
      },
    },
    {
      id: "herzberg-1993-multicentrico",
      claim:
        "Em série multicêntrica de 166 luxações e fraturas-luxações perilunares, o diagnóstico foi perdido inicialmente em 25%, o deslocamento foi dorsal em 97% e a artrose pós-traumática atingiu 56% dos casos tratados precocemente; abertura e atraso pioraram os resultados.",
      takeaway:
        "Estabelece a epidemiologia e a classificação de referência e reforça que reconhecimento precoce e tratamento aberto influenciam o prognóstico.",
      level: "IV",
      studyType: "Estudo multicêntrico retrospectivo",
      era: "classico",
      citation: {
        authors: "Herzberg G, Comtet JJ, Linscheid RL, Amadio PC, Cooney WP, Stalder J",
        title: "Perilunate dislocations and fracture-dislocations: a multicenter study.",
        journal: "J Hand Surg Am",
        year: 1993,
        pmid: "8228045",
        doi: "10.1016/0363-5023(93)90041-Z",
      },
    },
    {
      id: "liechti-2023-revisao",
      claim:
        "Revisão sistemática de 553 lesões perilunares operadas mostrou complicação global de 15%, com perda secundária de redução como principal fator (10,1%) e risco maior nas luxações puras do que nas fraturas-luxações (24,2% vs 7,0%); a artrose radiográfica aumentou com o seguimento sem boa correlação com função.",
      takeaway:
        "Sintetiza a evidência atual: luxações do arco menor são mais instáveis, técnicas menos invasivas reduzem complicações e a artrose radiográfica não prediz insatisfação.",
      level: "IV",
      studyType: "Revisão sistemática e metanálise",
      era: "atual",
      citation: {
        authors: "Liechti R, Merky DN, Grobbelaar AO, van de Wall BJM, Vögelin E, Hirsiger S",
        title: "Outcomes of acute perilunate injuries—a systematic review.",
        journal: "Eur J Trauma Emerg Surg",
        year: 2023,
        pmid: "36750472",
        doi: "10.1007/s00068-023-02222-y",
      },
    },
    {
      id: "massoud-2012-cronicas",
      claim:
        "Em 19 lesões perilunares crônicas tratadas com RAFI (tempo médio até a cirurgia de 29 semanas), todas as fraturas consolidaram e 58% alcançaram resultado bom a excelente pela escala de Mayo, com desempenho inferior nas lesões do arco menor.",
      takeaway:
        "A RAFI ainda oferece resultados satisfatórios em lesões negligenciadas selecionadas, mas as lesões puramente ligamentares evoluem pior.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors: "Massoud AHA, Naam NH",
        title: "Functional outcome of open reduction of chronic perilunate injuries.",
        journal: "J Hand Surg Am",
        year: 2012,
        pmid: "22854256",
        doi: "10.1016/j.jhsa.2012.06.009",
      },
    },
    {
      id: "stanbury-2011-revisao",
      claim:
        "Revisão de conduta descreve a redução fechada aguda seguida de redução aberta com reparo ósseo e ligamentar como tratamento padrão, com perda de mobilidade e força e artrose radiográfica frequentes, embora sem correlação consistente com a função.",
      takeaway:
        "Consolida o algoritmo clínico e a expectativa realista de sequelas, apesar de tratamento adequado.",
      level: "V",
      studyType: "Revisão narrativa",
      era: "atual",
      citation: {
        authors: "Stanbury SJ, Elfar JC",
        title: "Perilunate dislocation and perilunate fracture-dislocation.",
        journal: "J Am Acad Orthop Surg",
        year: 2011,
        pmid: "21885701",
        doi: "10.5435/00124635-201109000-00006",
      },
    },
  ],
  pearls: [
    "O semilunar é a chave do carpo: pense em instabilidade perilunar sempre que a colinearidade rádio–semilunar–capitato estiver perdida.",
    "Um quarto dos casos é despercebido — o semilunar triangular no AP e a xícara derramada no perfil salvam o diagnóstico.",
    "Sintomas progressivos do mediano ou irredutibilidade indicam liberação do túnel do carpo em urgência.",
    "Redução fechada é ponte, não destino: o padrão é RAFI com reparo de todas as conexões ligamentares lesadas.",
    "Artrose radiográfica tardia é comum, mas decide-se salvamento pela clínica, não pela radiografia.",
  ],
  pitfalls: [
    "Aceitar a redução fechada como tratamento definitivo e dispensar a fixação.",
    "Fixar só o escafoide e deixar diástase escafolunar ou lunopiramidal residual.",
    "Postergar a descompressão do mediano diante de déficit neurológico progressivo.",
    "Reduzir o escafoide em flexão e perpetuar um padrão DISI.",
    "Subestimar a instabilidade ligamentar nas lesões puramente do arco menor, mais sujeitas a perda de redução.",
  ],
  figures: [
    {
      id: "luxacao-perilunar:anatomia",
      caption:
        "Carpo em visão dorsal: o semilunar ancorado ao rádio recebe a cabeça do capitato, com o escafoide fazendo ponte entre as fileiras.",
      alt: "Diagrama dos ossos do carpo em visão dorsal destacando o semilunar",
      kind: "diagram",
    },
    {
      id: "luxacao-perilunar:mayfield",
      variant: "1",
      caption: "Mayfield estágio I: dissociação escafolunar, início da instabilidade na coluna radial.",
      alt: "Estágio I de Mayfield com falência do ligamento escafolunar",
      kind: "diagram",
    },
    {
      id: "luxacao-perilunar:mayfield",
      variant: "4",
      caption: "Mayfield estágio IV: luxação volar do semilunar para o túnel do carpo (xícara derramada).",
      alt: "Estágio IV de Mayfield com luxação volar do semilunar",
      kind: "diagram",
    },
    {
      id: "luxacao-perilunar:arcos",
      variant: "menor",
      caption: "Arco menor: lesão puramente ligamentar ao redor do semilunar, sem fratura associada.",
      alt: "Padrão de arco menor da instabilidade perilunar",
      kind: "diagram",
    },
    {
      id: "luxacao-perilunar:arcos",
      variant: "maior",
      caption: "Arco maior: fratura-luxação com traços transestiloide, transescafoide, transcapitato e transpiramidal.",
      alt: "Padrão de arco maior da fratura-luxação perilunar",
      kind: "diagram",
    },
    {
      id: "luxacao-perilunar:radiografia",
      variant: "ap",
      caption: "Sinais no AP: semilunar de aspecto triangular e interrupção dos arcos de Gilula por sobreposição.",
      alt: "Sinais radiográficos em AP da luxação perilunar",
      kind: "diagram",
    },
    {
      id: "luxacao-perilunar:radiografia",
      variant: "perfil",
      caption: "Sinais no perfil: báscula volar do semilunar (xícara derramada) e capitato deslocado dorsalmente.",
      alt: "Sinais radiográficos em perfil da luxação perilunar",
      kind: "diagram",
    },
    {
      id: "luxacao-perilunar:reducao",
      caption: "Redução fechada de urgência (manobra de Tavernier) com tração, extensão e flexão sobre o polegar.",
      alt: "Manobra de redução fechada da luxação perilunar",
      kind: "diagram",
    },
    {
      id: "luxacao-perilunar:via-dorsal",
      caption: "Via dorsal pelo intervalo do 3º–4º compartimentos com capsulotomia poupadora de ligamentos.",
      alt: "Via de acesso dorsal ao carpo",
      kind: "diagram",
    },
    {
      id: "luxacao-perilunar:via-volar",
      caption: "Via volar estendida: liberação do túnel do carpo, proteção do mediano e reparo do espaço de Poirier.",
      alt: "Via de acesso volar ao carpo com liberação do túnel do carpo",
      kind: "diagram",
    },
    {
      id: "luxacao-perilunar:fixacao",
      caption: "Fixação: parafuso do escafoide, fios de Kirschner escafolunar e lunopiramidal e reparo ligamentar dorsal.",
      alt: "Fixação interna e reparo ligamentar da lesão perilunar",
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
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, redesenhadas a partir da literatura de referência.",
    figureReference:
      "Referência editorial: Rockwood and Green's Fractures in Adults, 10ª ed. (2024) / Green's Operative Hand Surgery, capítulos de instabilidade perilunar e do carpo; redesenho original, não reprodução.",
  },
});
