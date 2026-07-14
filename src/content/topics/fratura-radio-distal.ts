import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-punho-radio-distal-fratura-radio-distal",
  slug: "fratura-radio-distal",
  regionId: "membro-superior",
  bone: "Punho",
  injury: "Fratura do rádio distal",
  title: "Fratura do rádio distal",
  subtitle:
    "Classificar pelo mecanismo e pela articulação, reconhecer os critérios de instabilidade e escolher entre placa volar bloqueada e redução com gesso — lembrando que, no idoso, a função tende a se equiparar apesar de pior radiografia.",
  laterality: null,
  status: "complete",
  overview:
    "A fratura do rádio distal é uma das fraturas mais comuns e tem distribuição bimodal: adultos jovens em trauma de alta energia e idosos com osso osteoporótico após queda da própria altura. A avaliação inicial exige exame neurovascular com atenção ao nervo mediano, pesquisa de síndrome compartimental incipiente e radiografias em incidências posteroanterior e perfil, medindo inclinação radial, altura radial, inclinação volar e variância ulnar. A tomografia é útil quando há dúvida sobre o traço articular, degrau ou fragmento volar de sustentação.\n\nA decisão terapêutica combina três eixos: o padrão da fratura (AO/OTA e Fernandez), os critérios de instabilidade (cominução dorsal, báscula dorsal, encurtamento) e o paciente (idade, demanda funcional, comorbidades e preferência). A placa volar bloqueada oferece fixação estável que permite mobilização precoce e melhor alinhamento radiográfico, sendo particularmente útil quando a redução não é mantida. Por outro lado, no paciente idoso de menor demanda, a redução fechada com imobilização gessada frequentemente alcança função semelhante ao final do primeiro ano, mesmo com consolidação viciosa radiográfica — um ponto central e reiterado na literatura recente.",
  keyFacts: [
    { label: "Epidemiologia", value: "Distribuição bimodal; comum no idoso osteoporótico" },
    { label: "Parâmetros", value: "Inclinação radial ≈22°, inclinação volar ≈11°, altura ≈11–12 mm" },
    { label: "Classificações", value: "AO/OTA (A/B/C) e Fernandez (mecanismo)" },
    { label: "Instabilidade", value: "Cominução dorsal, báscula dorsal, encurtamento" },
    { label: "Nervo em risco", value: "Mediano — pesquisar antes e após a redução" },
    { label: "No idoso", value: "Função tende a se equiparar apesar de pior radiografia" },
  ],
  anatomy: {
    text:
      "O rádio distal sustenta cerca de 80% da carga axial do punho por meio de duas fossas articulares — escafoide e semilunar — e articula-se com a cabeça da ulna pela incisura sigmoide, formando a articulação radioulnar distal (ARUD). Os parâmetros radiográficos de referência orientam redução e fixação: inclinação radial em torno de 22°, inclinação volar (palmar) de cerca de 11° no perfil e altura radial de aproximadamente 11 a 12 mm, com variância ulnar próxima de neutra. A perda desses parâmetros define desvio e instabilidade.\n\nO conceito de três colunas ajuda no planejamento: coluna radial (estiloide e fossa do escafoide), coluna intermediária (fossa do semilunar e incisura sigmoide, que transmite a maior parte da carga) e coluna ulnar (cabeça da ulna, complexo da fibrocartilagem triangular e ARUD). Na face volar, a linha watershed marca o rebordo mais anterior do rádio distal e limita a posição distal segura da placa; ultrapassá-la aumenta o conflito com os tendões flexores. O nervo mediano, no túnel do carpo, é a estrutura neurológica mais exposta ao desvio e ao hematoma.",
    figureIds: [
      "fratura-radio-distal:anatomia",
      "fratura-radio-distal:instabilidade",
    ],
  },
  classification: [
    {
      id: "ao-ota",
      name: "AO/OTA (segmento 23)",
      basis: "Envolvimento articular e grau de cominução, do extra-articular ao articular completo.",
      note:
        "Grupos são subdivididos numericamente conforme a cominução e o número de fragmentos; a distinção prática mais útil é entre extra-articular (A), articular parcial (B) e articular completo (C).",
      types: [
        {
          code: "23-A",
          label: "Extra-articular",
          description:
            "Traço metafisário que poupa a superfície articular. Inclui os padrões clássicos de báscula dorsal (Colles) e volar (Smith).",
          figureId: "fratura-radio-distal:classificacao-ao",
          figureVariant: "a",
        },
        {
          code: "23-B",
          label: "Articular parcial",
          description:
            "Parte da superfície articular é fraturada, mas permanece em continuidade com a metáfise; inclui as fraturas-luxação de Barton volar e dorsal e a fratura da estiloide radial.",
          figureId: "fratura-radio-distal:classificacao-ao",
          figureVariant: "b",
        },
        {
          code: "23-C",
          label: "Articular completa",
          description:
            "A superfície articular está separada da diáfise, frequentemente com cominução metafisária e articular; padrão de maior instabilidade e dificuldade de reconstrução.",
          figureId: "fratura-radio-distal:classificacao-ao",
          figureVariant: "c",
        },
      ],
    },
    {
      id: "fernandez",
      name: "Fernandez (mecanismo de lesão)",
      basis: "Mecanismo traumático, o que orienta diretamente a estratégia de redução e fixação.",
      note:
        "Por ser baseada no mecanismo, ajuda a prever a estabilidade e a necessidade de sustentação de fragmentos, além de lembrar as lesões associadas (ligamentares e da ARUD).",
      types: [
        {
          code: "I",
          label: "Flexão metafisária",
          description:
            "Falha por flexão da metáfise (Colles e Smith); a cominução da cortical oposta define a instabilidade.",
          figureId: "fratura-radio-distal:fernandez",
          figureVariant: "i",
        },
        {
          code: "II",
          label: "Cisalhamento articular",
          description:
            "Fratura por cisalhamento da superfície articular (Barton volar/dorsal, estiloide radial); exige sustentação com placa de apoio.",
          figureId: "fratura-radio-distal:fernandez",
          figureVariant: "ii",
        },
        {
          code: "III",
          label: "Compressão articular",
          description:
            "Impacção da superfície articular (die-punch); pode necessitar de elevação do fragmento e enxerto/substituto ósseo.",
          figureId: "fratura-radio-distal:fernandez",
          figureVariant: "iii",
        },
        {
          code: "IV",
          label: "Avulsão / fratura-luxação",
          description:
            "Avulsão de inserções ligamentares (fratura-luxação radiocárpica); instabilidade ligamentar associada.",
          figureId: "fratura-radio-distal:fernandez",
          figureVariant: "iv",
        },
        {
          code: "V",
          label: "Combinada / alta energia",
          description:
            "Associação de mecanismos em trauma de alta energia, com lesão de partes moles e cominução extensa.",
          figureId: "fratura-radio-distal:fernandez",
          figureVariant: "v",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Fratura articular com degrau ou diástase significativos após tentativa de redução.",
      "Instabilidade caracterizada por cominução dorsal, báscula dorsal residual ou encurtamento radial, especialmente em paciente ativo.",
      "Perda da redução no acompanhamento de uma fratura inicialmente tratada com gesso.",
      "Fraturas por cisalhamento (Barton) que exigem placa de sustentação.",
      "Fratura exposta, lesão neurovascular progressiva ou síndrome compartimental associada.",
    ],
    nonOperative: [
      "Fratura estável ou minimamente desviada com parâmetros radiográficos aceitáveis.",
      "Fratura redutível e mantida com moldagem adequada, sobretudo no idoso de menor demanda.",
      "Paciente com comorbidades ou preferência informada que desaconselham a cirurgia, aceitando o risco de consolidação viciosa.",
    ],
    decisionNotes:
      "A decisão integra padrão de fratura, critérios de instabilidade e paciente. A placa volar bloqueada favorece alinhamento radiográfico e reabilitação precoce e é vantajosa quando a redução não é mantida ou a demanda é alta. No idoso, entretanto, ensaios randomizados e meta-análises mostram que a vantagem funcional da placa sobre o gesso tende a desaparecer ao longo do primeiro ano e no seguimento de longo prazo, apesar de melhor radiografia e de maior força de preensão precoce — enquanto a cirurgia carrega mais complicações relacionadas ao implante. A consolidação viciosa radiográfica não equivale automaticamente a mau resultado funcional nessa população.",
  },
  approaches: [
    {
      id: "volar-fcr",
      name: "Via volar do flexor radial do carpo (Henry modificada)",
      indication:
        "Acesso padrão para a maioria das fraturas fixadas com placa volar bloqueada, incluindo padrões articulares e de sustentação volar.",
      interval:
        "Incisão sobre o tendão do flexor radial do carpo (FCR); abrir a bainha do FCR e afastá-lo ulnarmente, protegendo a artéria radial lateralmente e o nervo mediano em posição ulnar/profunda. Desinserir o pronador quadrado do rádio para expor a metáfise volar.",
      atRisk: [
        "Nervo mediano e seu ramo cutâneo palmar",
        "Artéria radial, lateral ao FCR",
        "Ramo motor do nervo interósseo anterior no pronador quadrado",
      ],
      figureId: "fratura-radio-distal:via-volar",
    },
    {
      id: "dorsal",
      name: "Via dorsal",
      indication:
        "Fraturas com cisalhamento dorsal (Barton dorsal), impacção articular dorsal que exige visualização direta ou quando a reconstrução volar é insuficiente.",
      interval:
        "Acesso pelo terceiro compartimento extensor, com transposição do extensor longo do polegar e elevação subperiosteal dos compartimentos vizinhos para expor a cortical dorsal e a articulação.",
      atRisk: [
        "Tendão extensor longo do polegar",
        "Ramos sensitivos do nervo radial superficial",
      ],
    },
  ],
  technique: [
    {
      n: 1,
      title: "Avaliar, reduzir e imobilizar na urgência",
      detail:
        "Documentar o exame do nervo mediano e a perfusão. Sob analgesia, realizar tração longitudinal para desimpactar, reverter o mecanismo da fratura e moldar em três pontos. Confirmar a redução por radiografia e reavaliar o nervo mediano.",
      figureId: "fratura-radio-distal:reducao-gesso",
      tips: [
        "Tração adequada desimpacta antes de qualquer manobra angular",
        "Gesso bem moldado, mas sem constrição circunferencial no edema agudo",
      ],
      pitfalls: [
        "Ignorar parestesia do mediano antes e depois da manobra",
        "Flexão palmar excessiva do punho no gesso, que agrava a compressão do mediano",
      ],
    },
    {
      n: 2,
      title: "Medir parâmetros e definir instabilidade",
      detail:
        "Nas radiografias, medir inclinação radial, inclinação volar, altura radial e variância ulnar; avaliar cominução dorsal, báscula dorsal residual e encurtamento. Correlacionar com idade e demanda para decidir entre manter o gesso ou operar.",
      figureId: "fratura-radio-distal:instabilidade",
      tips: [
        "Cominução dorsal e encurtamento predizem perda de redução",
        "Repetir radiografias na primeira e segunda semanas se optar por gesso",
      ],
      pitfalls: [
        "Aceitar redução inicial boa sem controlar a perda tardia",
        "Superestimar o valor da radiografia perfeita no idoso de baixa demanda",
      ],
    },
    {
      n: 3,
      title: "Expor pela via volar do FCR",
      detail:
        "Abrir a bainha do flexor radial do carpo e afastá-lo ulnarmente, protegendo a artéria radial e o nervo mediano. Desinserir o pronador quadrado para expor a metáfise volar, preservando tecido para posterior cobertura da placa.",
      figureId: "fratura-radio-distal:via-volar",
      tips: [
        "Elevar o pronador quadrado em retalho para recobrir a placa ao final",
        "Identificar a linha watershed como referência distal",
      ],
      pitfalls: [
        "Retração vigorosa que lesa o ramo cutâneo palmar do mediano",
        "Dissecção lateral excessiva próxima à artéria radial",
      ],
    },
    {
      n: 4,
      title: "Reduzir a fratura e restaurar os parâmetros",
      detail:
        "Empregar ligamentotaxia com tração, corrigir a báscula dorsal e restaurar inclinação e altura radiais. Reconstruir a superfície articular, elevando fragmentos impactados quando necessário e conferindo a congruência sob visão e radioscopia.",
      figureId: "fratura-radio-distal:anatomia",
      tips: [
        "A incidência de perfil com inclinação avalia melhor a superfície articular",
        "Reduzir a coluna intermediária, que transmite a maior carga",
      ],
      pitfalls: [
        "Deixar báscula dorsal residual por redução incompleta",
        "Ignorar degrau articular em fratura de alta demanda",
      ],
    },
    {
      n: 5,
      title: "Posicionar e fixar a placa volar bloqueada",
      detail:
        "Posicionar a placa proximal à linha watershed. Fixar primeiro o corpo à diáfise, ajustar a redução e inserir os parafusos distais bloqueados em posição subcondral para sustentar a articulação. Verificar por radioscopia que os parafusos não penetram a cortical dorsal nem a ARUD.",
      figureId: "fratura-radio-distal:placa-volar",
      tips: [
        "A incidência tangencial dorsal (skyline) detecta parafusos dorsais salientes",
        "Parafusos distais subcondrais dão maior sustentação em osso osteoporótico",
      ],
      pitfalls: [
        "Placa distal demais, ultrapassando a watershed e irritando os flexores",
        "Parafusos longos que rompem a cortical dorsal e lesam os extensores",
      ],
    },
    {
      n: 6,
      title: "Testar a ARUD, fechar e reabilitar",
      detail:
        "Avaliar a estabilidade da articulação radioulnar distal após a fixação. Recobrir a placa com o pronador quadrado quando possível, fechar por planos e iniciar mobilização precoce dos dedos e do punho conforme a estabilidade obtida.",
      figureId: "fratura-radio-distal:placa-volar",
      tips: [
        "A fixação estável autoriza reabilitação precoce dos dedos",
        "Estimular retorno funcional em vez de terapia supervisionada prolongada",
      ],
      pitfalls: [
        "Não reconhecer instabilidade residual da ARUD",
        "Imobilização rígida e prolongada que favorece rigidez",
      ],
    },
  ],
  postop: {
    immobilization:
      "Após placa volar estável, tala/órtese de conforto por curto período, geralmente 1–2 semanas, com início precoce da mobilização. No tratamento conservador, gesso antebraquiopalmar por cerca de 4–6 semanas, com controle radiográfico seriado.",
    weightBearing:
      "Sem apoio de carga axial pelo membro no período inicial. Progressão de força e carga funcional conforme consolidação e estabilidade da fixação.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Sem carga",
        focus: "Elevação, controle do edema e mobilização ativa dos dedos; monitorar o nervo mediano.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Sem carga a carga leve",
        focus: "Amplitude ativa de punho e antebraço após fixação estável; no gesso, manter mobilidade de dedos e cotovelo.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Progressiva",
        focus: "Ganho de amplitude, fortalecimento de preensão e retorno gradual às atividades diárias.",
      },
      {
        window: "3–6 meses",
        weightBearing: "Funcional plena",
        focus: "Fortalecimento avançado e retorno a atividades de maior demanda conforme função.",
      },
    ],
    followup:
      "Controle clínico e radiográfico para confirmar consolidação e manutenção do alinhamento. Estimular a retomada das atividades diárias; a terapia da mão formal e prolongada não demonstrou superioridade sobre orientação e exercícios domiciliares no idoso.",
  },
  complications: [
    {
      name: "Consolidação viciosa",
      detail:
        "Perda de inclinação volar, encurtamento radial e incongruência da ARUD; pode ser assintomática, sobretudo no idoso de baixa demanda.",
      prevention: "Redução adequada, reconhecimento de instabilidade e fixação quando indicada.",
    },
    {
      name: "Compressão do nervo mediano",
      detail:
        "Neuropatia aguda por desvio/hematoma ou síndrome do túnel do carpo tardia; a flexão excessiva no gesso é fator de risco.",
      prevention: "Exame neurológico documentado, evitar posições extremas e descomprimir quando sintomático.",
    },
    {
      name: "Ruptura tendínea",
      detail:
        "Ruptura do extensor longo do polegar (mais comum no tratamento conservador ou por parafuso dorsal saliente) e irritação/ruptura dos flexores por placa distal à watershed.",
      prevention: "Comprimento correto dos parafusos, incidência skyline e placa proximal à watershed.",
    },
    {
      name: "Complicações do implante e rigidez",
      detail:
        "Falha ou proeminência do implante, parafuso intra-articular e rigidez do punho e dos dedos; a cirurgia acrescenta risco de complicações relacionadas ao material.",
      prevention: "Técnica meticulosa, checagem radioscópica e reabilitação precoce.",
    },
    {
      name: "Síndrome dolorosa regional complexa",
      detail: "Dor desproporcional, edema e rigidez; pode ocorrer em qualquer modalidade de tratamento.",
      prevention: "Analgesia adequada, mobilização precoce dos dedos e vigilância clínica.",
    },
  ],
  evidence: [
    {
      id: "arora-2011-vlp-vs-gesso-idoso",
      claim:
        "Em pacientes com 65 anos ou mais, a placa volar proporcionou melhor força de preensão e melhores parâmetros radiográficos, mas sem diferença de dor, amplitude ou escores funcionais (PRWE/DASH) aos 12 meses, com mais complicações no grupo operado.",
      takeaway:
        "A anatomia radiográfica melhor da placa não se traduziu em ganho funcional ao final de um ano no idoso, que ainda enfrenta mais complicações cirúrgicas.",
      level: "I",
      studyType: "Ensaio clínico randomizado",
      era: "classico",
      citation: {
        authors: "Arora R, Lutz M, Deml C, Krappinger D, Haug L, Gabl M",
        title:
          "A prospective randomized trial comparing nonoperative treatment with volar locking plate fixation for displaced and unstable distal radial fractures in patients sixty-five years of age and older.",
        journal: "J Bone Joint Surg Am",
        year: 2011,
        pmid: "22159849",
        doi: "10.2106/JBJS.J.01597",
      },
    },
    {
      id: "wrist-2020-12meses",
      claim:
        "No ensaio multicêntrico WRIST, em adultos de 60 anos ou mais, a fixação interna teve recuperação mais rápida e melhor alinhamento radiográfico, mas sem diferença clinicamente relevante no escore MHQ aos 12 meses; 48% do grupo com gesso evoluiu com consolidação viciosa, ainda com resultados satisfatórios.",
      takeaway:
        "A placa acelera a recuperação e mantém o alinhamento, porém a vantagem funcional se dilui ao longo do primeiro ano, e o gesso pode oferecer resultado satisfatório apesar da má radiografia.",
      level: "II",
      studyType: "Ensaio clínico randomizado multicêntrico",
      era: "atual",
      citation: {
        authors: "Chung KC, Kim HM, Malay S, Shauver MJ; WRIST Group",
        title:
          "The Wrist and Radius Injury Surgical Trial: 12-Month Outcomes from a Multicenter International Randomized Clinical Trial.",
        journal: "Plast Reconstr Surg",
        year: 2020,
        pmid: "32195857",
        doi: "10.1097/PRS.0000000000006829",
      },
    },
    {
      id: "yang-2024-metanalise-longo-prazo",
      claim:
        "Meta-análise de ensaios randomizados com seguimento de pelo menos 2 anos em pacientes com 60 anos ou mais não encontrou vantagem clínica de longo prazo da placa volar sobre a redução com gesso, apesar de pequenas diferenças de PRWE/DASH e força de preensão.",
      takeaway:
        "No longo prazo, a placa volar não demonstra superioridade clínica relevante sobre o tratamento conservador no idoso.",
      level: "I",
      studyType: "Meta-análise de ensaios randomizados",
      era: "atual",
      citation: {
        authors: "Yang J, Li Y, Li X, Wulan N",
        title:
          "A meta-analysis comparing volar locking plates and cast immobilization for distal radius fractures in the elderly.",
        journal: "J Orthop Surg Res",
        year: 2024,
        pmid: "39593102",
        doi: "10.1186/s13018-024-05216-7",
      },
    },
    {
      id: "diaz-garcia-2011-revisao-sistematica",
      claim:
        "Revisão sistemática em pacientes com 60 anos ou mais mostrou que, apesar de piores parâmetros radiográficos com o gesso, os desfechos funcionais não diferiram das técnicas cirúrgicas; a placa volar teve mais complicações maiores exigindo reintervenção.",
      takeaway:
        "A dissociação entre radiografia e função no idoso é consistente na literatura clássica, e a cirurgia adiciona risco de complicações.",
      level: "III",
      studyType: "Revisão sistemática",
      era: "classico",
      citation: {
        authors: "Diaz-Garcia RJ, Oda T, Shauver MJ, Chung KC",
        title:
          "A systematic review of outcomes and complications of treating unstable distal radius fractures in the elderly.",
        journal: "J Hand Surg Am",
        year: 2011,
        pmid: "21527140",
        doi: "10.1016/j.jhsa.2011.02.005",
      },
    },
    {
      id: "wrist-2019-terapia-mao",
      claim:
        "Análise do WRIST não encontrou diferença de desfechos entre pacientes que fizeram ou não terapia da mão supervisionada após fratura do rádio distal, sugerindo que retomar as atividades diárias pode ser tão efetivo quanto a terapia formal.",
      takeaway:
        "Terapia da mão formal e prolongada não é obrigatória no idoso; orientação e exercícios domiciliares com retorno precoce à função tendem a bastar.",
      level: "II",
      studyType: "Análise de ensaio clínico randomizado pragmático",
      era: "atual",
      citation: {
        authors: "Chung KC, Malay S, Shauver MJ; WRIST Group",
        title:
          "The Relationship between Hand Therapy and Long-Term Outcomes after Distal Radius Fracture in Older Adults: Evidence from the Randomized Wrist and Radius Injury Surgical Trial.",
        journal: "Plast Reconstr Surg",
        year: 2019,
        pmid: "31348349",
        doi: "10.1097/PRS.0000000000005829",
      },
    },
  ],
  pearls: [
    "Meça inclinação radial, inclinação volar, altura radial e variância ulnar em toda fratura do rádio distal — são a linguagem da redução.",
    "Cominução dorsal, báscula dorsal e encurtamento predizem perda de redução: reavalie com radiografias seriadas quando optar por gesso.",
    "No idoso, radiografia pior não significa função pior; decida com base na demanda e na preferência, não apenas no filme.",
    "Mantenha a placa proximal à linha watershed e confirme com a incidência skyline que nenhum parafuso rompe a cortical dorsal.",
  ],
  pitfalls: [
    "Tratar a consolidação viciosa radiográfica como fracasso automático no paciente idoso de baixa demanda.",
    "Flexionar demais o punho no gesso e precipitar compressão do nervo mediano.",
    "Colocar a placa distal à watershed ou usar parafusos longos, com irritação de flexores e extensores.",
    "Deixar de testar a estabilidade da ARUD após a fixação da fratura.",
  ],
  figures: [
    {
      id: "fratura-radio-distal:anatomia",
      caption:
        "Rádio distal em AP e perfil com os parâmetros de referência: inclinação radial, altura radial, variância ulnar e inclinação volar.",
      alt: "Anatomia e parâmetros radiográficos do rádio distal",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:instabilidade",
      caption:
        "Preditores radiográficos de instabilidade: cominução dorsal, báscula dorsal e encurtamento radial.",
      alt: "Critérios de instabilidade da fratura do rádio distal",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:classificacao-ao",
      variant: "a",
      caption: "AO/OTA 23-A: fratura extra-articular, com superfície articular preservada.",
      alt: "Classificação AO/OTA tipo A do rádio distal",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:classificacao-ao",
      variant: "b",
      caption: "AO/OTA 23-B: fratura articular parcial, com fragmento em continuidade com a metáfise.",
      alt: "Classificação AO/OTA tipo B do rádio distal",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:classificacao-ao",
      variant: "c",
      caption: "AO/OTA 23-C: fratura articular completa, com a superfície separada da diáfise.",
      alt: "Classificação AO/OTA tipo C do rádio distal",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:fernandez",
      variant: "i",
      caption: "Fernandez tipo I: falha por flexão metafisária (Colles/Smith).",
      alt: "Classificação de Fernandez tipo I",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:fernandez",
      variant: "ii",
      caption: "Fernandez tipo II: cisalhamento articular (Barton), que exige placa de sustentação.",
      alt: "Classificação de Fernandez tipo II",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:fernandez",
      variant: "iii",
      caption: "Fernandez tipo III: compressão da superfície articular (die-punch).",
      alt: "Classificação de Fernandez tipo III",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:fernandez",
      variant: "iv",
      caption: "Fernandez tipo IV: avulsão ligamentar / fratura-luxação radiocárpica.",
      alt: "Classificação de Fernandez tipo IV",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:fernandez",
      variant: "v",
      caption: "Fernandez tipo V: mecanismos combinados de alta energia.",
      alt: "Classificação de Fernandez tipo V",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:via-volar",
      caption:
        "Via volar do flexor radial do carpo (Henry modificada): afastar o FCR ulnarmente e proteger artéria radial e nervo mediano.",
      alt: "Via de acesso volar do rádio distal",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:placa-volar",
      caption:
        "Placa volar bloqueada posicionada proximal à linha watershed, com parafusos subcondrais que não perfuram a cortical dorsal.",
      alt: "Fixação com placa volar bloqueada do rádio distal",
      kind: "diagram",
    },
    {
      id: "fratura-radio-distal:reducao-gesso",
      caption:
        "Redução fechada com tração e reversão do mecanismo, seguida de moldagem gessada em três pontos.",
      alt: "Redução fechada e imobilização gessada do rádio distal",
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
      "Conteúdo original Revisortopedia; figuras esquemáticas originais (line-art), não reprodução de imagens protegidas.",
    figureReference:
      "Referência editorial: Rockwood and Green's Fractures in Adults, 10th ed. (2024), capítulo de fraturas do rádio distal; redesenho original, não reprodução.",
  },
});
