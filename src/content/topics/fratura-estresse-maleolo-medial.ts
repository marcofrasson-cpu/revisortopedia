import { defineTopic } from "../../types/topic";

/* ============================================================================
   Fratura por estresse do maléolo medial
   Região: membro inferior — Tornozelo
   ========================================================================== */

export const topic = defineTopic({
  id: "fratura-estresse-maleolo-medial",
  slug: "fratura-estresse-maleolo-medial",
  regionId: "membro-inferior",
  bone: "Tornozelo",
  injury: "Fratura por estresse",
  title: "Fratura por estresse do maléolo medial",
  subtitle:
    "Lesão de sobrecarga rara no atleta de corrida e salto — traço vertical do plafond, alto índice de suspeição e decisão entre fixação profilática e tratamento conservador",
  laterality: null,
  status: "complete",

  overview:
    "A fratura por estresse do maléolo medial é uma lesão por sobrecarga rara (cerca de 0,6–4% de todas as fraturas de estresse) que acomete tipicamente atletas de corrida de longa distância, saltadores e jogadores de futebol/basquete submetidos a impacto e mudança de direção repetitivos. Manifesta-se por dor medial no tornozelo de início insidioso, agravada pela atividade e aliviada pelo repouso, frequentemente subdiagnosticada por radiografias iniciais normais. Diferentemente das fraturas de estresse de baixo risco, ela tem comportamento de ALTO RISCO: o traço característico é VERTICAL, ascendente a partir do ângulo entre o plafond tibial e o maléolo medial, uma orientação submetida a forças de cisalhamento e tração que predispõem à progressão, ao retardo de consolidação e à não-união. A etiopatogenia associa impacto anteromedial repetitivo (impingement) com esporão osteofitário do plafond/tálus e, com frequência, mau alinhamento em varo do retropé/joelho. O manejo é individualizado: repouso e restrição de carga no atleta recreacional ou na fissura incompleta detectada precocemente, versus fixação cirúrgica (parafusos canulados de compressão, muitas vezes associada a debridamento artroscópico do esporão) no atleta de alto rendimento, na fratura completa/desviada, na não-união ou quando se busca retorno esportivo mais rápido e previsível.",

  keyFacts: [
    { label: "População típica", value: "Corredores de fundo, saltadores, futebol/basquete" },
    { label: "Sintoma-chave", value: "Dor medial insidiosa, piora com impacto" },
    { label: "Traço característico", value: "Vertical, do canto do plafond ↑ maléolo" },
    { label: "Comportamento", value: "Alto risco — tração/cisalhamento" },
    { label: "Diagnóstico padrão-ouro", value: "RM (edema medular + linha) ± TC" },
    { label: "Radiografia inicial", value: "Frequentemente normal" },
    { label: "Fator associado", value: "Esporão anteromedial + varo do retropé" },
    { label: "Cirurgia", value: "Parafusos canulados ± debridamento do esporão" },
  ],

  anatomy: {
    text:
      "O maléolo medial é o prolongamento distal da metáfise-epífise medial da tíbia e forma, com o plafond, a parede medial da pinça (mortise) do tornozelo. É composto predominantemente por osso esponjoso, revestido por fina cortical, o que explica por que radiografias iniciais costumam ser negativas. Ancora o complexo do ligamento deltoide (porções superficial e profunda), estabilizador primário contra o valgo e a translação lateral do tálus, e é contornado posteriormente pelo tendão tibial posterior. O ponto de concentração de estresse situa-se no ângulo reentrante entre a superfície articular horizontal do plafond e a vertente medial — a chamada 'junção plafond-maléolo' — onde as trajetórias trabeculares mudam bruscamente de direção. Durante a corrida e o salto, cargas axiais somadas a torção e à tração do deltoide geram um vetor de cisalhamento que orienta a linha de falência no plano VERTICAL (e não transverso), diferente da maioria das fraturas maleolares traumáticas. A presença de esporão osteofitário anteromedial na tíbia distal e/ou no colo do tálus (impingement) concentra o estresse nessa região a cada ciclo de dorsiflexão, sendo considerada a lesão pré-clínica precursora em grande parte dos casos de atletas de elite. O mau alinhamento em varo (genu varum ou retropé varo) aumenta a carga medial e é fator de risco reconhecido.",
    figureIds: [
      "fratura-estresse-maleolo-medial:anatomia",
      "fratura-estresse-maleolo-medial:etiologia",
    ],
  },

  classification: [
    {
      id: "extensao-traco",
      name: "Estágio por extensão e estabilidade do traço (uso prático)",
      basis:
        "Extensão da linha vertical na TC/RM e presença de desvio ou não-união — orienta a decisão terapêutica",
      note:
        "Não existe classificação universalmente consagrada; a estratificação por extensão/estabilidade é a mais útil na prática e reflete o risco de progressão do traço vertical.",
      types: [
        {
          code: "I",
          label: "Reação/fissura incompleta",
          description:
            "Edema medular na RM com linha incompleta ou ausente na cortical; sem traço completo na TC. Candidata a tratamento conservador vigiado, sobretudo fora de temporada.",
          figureId: "fratura-estresse-maleolo-medial:classificacao",
          figureVariant: "incompleta",
        },
        {
          code: "II",
          label: "Fratura completa, não desviada",
          description:
            "Traço vertical completo atravessando a junção plafond-maléolo, sem desvio. Alto risco de progressão; fixação é frequentemente indicada no atleta de rendimento.",
          figureId: "fratura-estresse-maleolo-medial:classificacao",
          figureVariant: "completa",
        },
        {
          code: "III",
          label: "Desviada ou não-união estabelecida",
          description:
            "Desvio do fragmento, esclerose das bordas ou falha de consolidação após tratamento conservador. Indicação formal de fixação, com desbridamento do foco e enxertia se necessário.",
          figureId: "fratura-estresse-maleolo-medial:classificacao",
          figureVariant: "deslocada",
        },
      ],
    },
    {
      id: "kaeding-miller-risco",
      name: "Contexto — fratura de estresse de alto risco",
      basis:
        "Classificação conceitual (baixo vs alto risco) segundo localização e biomecânica do traço",
      note:
        "O maléolo medial figura entre as fraturas de estresse de ALTO risco (junto a colo do fêmur tensão, patela, base do 5º metatarso, sesamoides, tálus e cortical anterior da tíbia) porque o traço está sob tração/cisalhamento e tende à não-união — o que justifica limiar mais baixo para cirurgia.",
      types: [
        {
          code: "baixo",
          label: "Baixo risco (compressão)",
          description:
            "Regiões sob compressão com boa vascularização e tendência à consolidação (ex.: diáfise tibial póstero-medial, metatarsos centrais). Tratamento conservador é a regra.",
        },
        {
          code: "alto",
          label: "Alto risco (tração/cisalhamento)",
          description:
            "Traço sob forças de tração, com propensão à progressão e não-união — inclui o maléolo medial. Limiar mais baixo para imobilização rígida, descarga e fixação.",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Atleta de alto rendimento que necessita de retorno esportivo previsível e mais rápido",
      "Fratura completa (traço vertical atravessando o maléolo) ou com desvio",
      "Não-união ou retardo de consolidação após tratamento conservador adequado",
      "Progressão do traço em imagem seriada apesar da restrição de carga",
      "Esporão anteromedial/impingement sintomático associado (permite fixação + debridamento no mesmo tempo)",
      "Lesão intra-temporada em que se busca minimizar tempo de afastamento com reabilitação assistida",
    ],
    nonOperative: [
      "Reação de estresse ou fissura incompleta detectada precocemente (grau I)",
      "Atleta recreacional ou de baixa demanda, sem pressa de retorno",
      "Lesão fora de temporada, com margem para repouso prolongado",
      "Ausência de desvio e de esporão significativo, com boa adesão à descarga",
    ],
    decisionNotes:
      "A controvérsia central é fixação profilática/precoce versus conservador no atleta. O tratamento conservador (bota/imobilização, descarga protegida por 6 semanas e progressão gradual) pode consolidar fraturas incompletas, porém exige 8–12 semanas ou mais até o retorno esportivo e carrega risco não desprezível de progressão para fratura completa e não-união justamente pela natureza de alto risco do traço vertical. A cirurgia (parafusos canulados de compressão perpendiculares ao traço, frequentemente associada a debridamento artroscópico do esporão anteromedial) oferece fixação estável, permite reabilitação mais precoce e mostra, nas maiores séries, taxas de consolidação e de retorno ao nível pré-lesão próximas de 100% em atletas de elite. A decisão pondera nível competitivo, fase da temporada, extensão/estabilidade do traço, presença de impingement e alinhamento em varo (que, se não corrigido com palmilha/órtese, perpetua a sobrecarga medial). Em atletas de elite, muitos autores defendem fixação já na fratura completa e mesmo em algumas incompletas de alta demanda; no recreacional com fissura incompleta, o conservador vigiado é razoável.",
  },

  approaches: [
    {
      id: "anteromedial",
      name: "Via anteromedial (mini-open)",
      indication:
        "Acesso ao maléolo medial para fixação com parafusos; permite artrotomia anteromedial para ressecção do esporão",
      interval:
        "Incisão longitudinal sobre o maléolo, anterior ao tendão tibial posterior; dissecção direta à cortical, poupando o periósteo do foco",
      atRisk: [
        "Veia safena magna",
        "Nervo safeno",
        "Tendão tibial posterior (posteromedial)",
      ],
      figureId: "fratura-estresse-maleolo-medial:via-acesso",
    },
    {
      id: "artroscopia",
      name: "Artroscopia anterior do tornozelo",
      indication:
        "Debridamento do esporão osteofitário anteromedial (impingement) e avaliação da cartilagem/foco, associada à fixação percutânea",
      interval:
        "Portais anteromedial e anterolateral padrão, medial ao tendão tibial anterior e lateral aos tendões extensores",
      atRisk: [
        "Nervo fibular superficial (portal anterolateral)",
        "Nervo safeno e veia safena magna (portal anteromedial)",
        "Cartilagem do plafond e do tálus",
      ],
    },
  ],

  technique: [
    {
      n: 1,
      title: "Artroscopia e ressecção do esporão anteromedial",
      detail:
        "Com o paciente em decúbito dorso e tornozelo em tração leve, realiza-se artroscopia anterior. Identifica-se e resseca-se o esporão osteofitário anteromedial da tíbia distal (e do colo do tálus, se presente) com fresa/shaver — passo considerado essencial, pois trata a causa mecânica do impingement e da concentração de estresse. Avalia-se a cartilagem e o foco de fratura.",
      figureId: "fratura-estresse-maleolo-medial:step-1",
      tips: [
        "Documentar o esporão na TC/RM pré-operatória — está presente na maioria dos atletas de elite",
        "A ressecção adequada reduz o risco de refratura ao eliminar o impacto repetitivo",
      ],
      pitfalls: [
        "Ressecção insuficiente mantém o impingement e o estímulo à falha",
        "Portais mal posicionados lesam o nervo fibular superficial ou o safeno",
      ],
    },
    {
      n: 2,
      title: "Redução e passagem dos fios-guia perpendiculares ao traço",
      detail:
        "Via mini-open anteromedial (ou percutânea sob fluoroscopia), reduz-se o traço vertical e introduzem-se dois fios-guia de parafuso canulado orientados PERPENDICULARMENTE à linha de fratura — portanto de disposição predominantemente horizontal, cruzando o traço vertical — para maximizar a compressão interfragmentária. Confirma-se posição em AP e perfil.",
      figureId: "fratura-estresse-maleolo-medial:step-2",
      tips: [
        "Perpendicularidade ao traço é o princípio biomecânico-chave para compressão eficaz",
        "Dois pontos de fixação controlam rotação do fragmento",
      ],
      pitfalls: [
        "Fios paralelos ao traço não geram compressão e favorecem não-união",
        "Convergência excessiva pode penetrar a superfície articular",
      ],
    },
    {
      n: 3,
      title: "Fixação com parafusos canulados de compressão",
      detail:
        "Sobre os fios-guia, colocam-se dois parafusos canulados parcialmente rosqueados (3,5–4,0 mm) de compressão. Em ossos de boa qualidade e traço estável, obtém-se compressão interfragmentária sólida. Considera-se aspirado/concentrado de medula óssea ou enxerto no foco em não-uniões. Verifica-se a redução final e a ausência de penetração articular sob fluoroscopia.",
      figureId: "fratura-estresse-maleolo-medial:step-3",
      tips: [
        "Parafusos parcialmente rosqueados cruzando o traço otimizam a compressão",
        "Biológicos (aspirado medular/enxerto) auxiliam em retardo/não-união",
      ],
      pitfalls: [
        "Rosca cavalgando o traço impede compressão",
        "Sobrecompressão em osso osteopênico pode fragmentar a cortical fina",
        "Não corrigir o varo (palmilha/órtese) perpetua a sobrecarga e arrisca refratura",
      ],
    },
  ],

  postop: {
    immobilization:
      "Bota imobilizadora ou tala por 2–4 semanas conforme estabilidade da fixação; retirada precoce para mobilização ativa do tornozelo quando a fixação é sólida.",
    weightBearing:
      "Descarga ou carga parcial protegida por cerca de 2–6 semanas, com progressão para carga total conforme consolidação clínica e radiográfica (habitualmente em torno de 6 semanas na fixação estável).",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Sem carga / toque",
        focus:
          "Controle de edema e dor, mobilização precoce do tornozelo quando a fixação permite, exercícios de cadeia proximal e core",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Carga parcial progressiva",
        focus:
          "Amplitude de movimento plena, fortalecimento isométrico/concêntrico progressivo, propriocepção; palmilha/órtese para varo do retropé",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Carga total",
        focus:
          "Retorno gradual à corrida guiado por ausência de dor e por consolidação em TC; treino de impacto e mudança de direção conforme evolução",
      },
      {
        window: "> 12 semanas",
        weightBearing: "Total, esporte-específico",
        focus:
          "Progressão a treino esporte-específico e retorno competitivo; retorno pleno de performance costuma ser mais tardio que a consolidação radiográfica",
      },
    ],
    followup:
      "Acompanhamento clínico e radiográfico seriado; TC aos 3 meses é útil para confirmar consolidação antes da liberação para impacto pleno. Corrigir fatores de risco (alinhamento em varo, esporão residual, carga de treino, saúde óssea/tríade da atleta) para prevenir refratura.",
  },

  complications: [
    {
      name: "Não-união / retardo de consolidação",
      detail:
        "Principal complicação, favorecida pela natureza de alto risco do traço vertical sob tração e pelo osso esponjoso. Mais comum após tratamento conservador de fraturas completas.",
      prevention:
        "Fixação com compressão perpendicular ao traço; considerar biológicos; descarga adequada no conservador.",
    },
    {
      name: "Progressão para fratura completa/desviada",
      detail:
        "Fissura incompleta tratada conservadoramente pode evoluir para fratura completa, às vezes de forma aguda durante a atividade.",
      prevention:
        "Restrição rigorosa de carga e imagem seriada; limiar baixo para cirurgia no atleta de alta demanda.",
    },
    {
      name: "Refratura",
      detail:
        "Recorrência por manutenção do fator causal (impingement/esporão não tratado ou varo não corrigido).",
      prevention:
        "Ressecção do esporão, correção do alinhamento com órtese e progressão gradual de carga.",
    },
    {
      name: "Impingement/dor residual e artrose",
      detail:
        "Esporão osteofitário residual ou lesão condral associada podem manter dor anteromedial e evoluir para degeneração articular.",
      prevention:
        "Debridamento artroscópico adequado e tratamento das lesões condrais no mesmo tempo cirúrgico.",
    },
    {
      name: "Lesão neurovascular / de partes moles",
      detail:
        "Lesão da veia safena magna, do nervo safeno ou irritação do tendão tibial posterior pela via ou pelos parafusos.",
      prevention:
        "Dissecção cuidadosa anterior ao tibial posterior; posicionamento seguro de portais; considerar retirada de material sintomático.",
    },
  ],

  evidence: [
    {
      id: "nguyen-2019",
      claim:
        "Maior série publicada: 16 jogadores profissionais de futebol tratados com ORIF (três parafusos) + debridamento artroscópico do esporão.",
      takeaway:
        "Todos consolidaram e retornaram ao mesmo nível profissional; 81% de resultados excelentes. Varo do membro inferior identificado como fator de risco — reforça fixação agressiva multimodal no atleta de elite.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors: "Nguyen A, Beasley I, Calder J",
        title:
          "Stress fractures of the medial malleolus in the professional soccer player demonstrate excellent outcomes when treated with open reduction internal fixation and arthroscopic spur debridement",
        journal: "Knee Surg Sports Traumatol Arthrosc",
        year: 2019,
        pmid: "30915513",
        doi: "10.1007/s00167-019-05483-6",
      },
    },
    {
      id: "ramsodit-2024",
      claim:
        "Abordagem cirúrgica individualizada em etapas (debridamento artroscópico de esporões, microfratura do foco, fixação com parafuso) em atletas de elite.",
      takeaway:
        "Retorno a treino esporte-específico em mediana de 10 semanas e à primeira competição em 19 semanas, com consolidação em TC aos 3 meses e sem refraturas; o retorno pleno de performance costuma ser mais tardio que a união radiográfica.",
      level: "IV",
      studyType: "Série de casos / técnica cirúrgica",
      era: "atual",
      citation: {
        authors:
          "Ramsodit KR, Zwiers R, Dalmau-Pastor M, Gouttebarge V, Kerkhoffs GMMJ",
        title:
          "Most elite athletes return to preinjury competitive activity after surgical treatment for medial malleolus stress fractures",
        journal: "Knee Surg Sports Traumatol Arthrosc",
        year: 2024,
        pmid: "38829266",
        doi: "10.1002/ksa.12284",
      },
    },
    {
      id: "lempainen-2012",
      claim:
        "Dez atletas com fratura de estresse do maléolo medial tratados cirurgicamente; radiografias iniciais negativas em todos, fratura visível apenas na RM.",
      takeaway:
        "Tratamento cirúrgico resultou em consolidação em 3–4 meses e retorno ao nível pré-lesão em 9/10 atletas — apoia RM precoce e cirurgia no atleta.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors:
          "Lempainen L, Liimatainen E, Heikkilä J, Alonso J, Sarimo J, Mattila K, Orava S",
        title:
          "Medial malleolar stress fracture in athletes: diagnosis and operative treatment",
        journal: "Scand J Surg",
        year: 2012,
        pmid: "23238501",
        doi: "10.1177/145749691210100407",
      },
    },
    {
      id: "jowett-2008",
      claim:
        "Cinco atletas de elite com fratura de estresse do maléolo medial secundária a impingement anteromedial crônico; todos com esporão tibial na imagem pré-operatória.",
      takeaway:
        "Fixação interna associada a debridamento artroscópico do esporão levou à consolidação (média 10,2 semanas) e retorno ao nível prévio sem refraturas — estabelece o impingement/esporão como alvo terapêutico.",
      level: "IV",
      studyType: "Série de casos",
      era: "classico",
      citation: {
        authors: "Jowett AJL, Birks CL, Blackney MC",
        title:
          "Medial malleolar stress fracture secondary to chronic ankle impingement",
        journal: "Foot Ankle Int",
        year: 2008,
        pmid: "18785422",
        doi: "10.3113/FAI.2008.0716",
      },
    },
    {
      id: "sherbondy-2006",
      claim:
        "Revisão sobre fraturas de estresse do maléolo medial e da fíbula distal, abordando biomecânica, diagnóstico e princípios de tratamento.",
      takeaway:
        "Radiografias frequentemente não diagnósticas; RM/cintilografia confirmam o diagnóstico. A maioria é tratável de forma não cirúrgica, mas há indicações operatórias específicas no atleta — contextualiza a decisão conservador vs cirurgia.",
      level: "V",
      studyType: "Revisão narrativa",
      era: "classico",
      citation: {
        authors: "Sherbondy PS, Sebastianelli WJ",
        title: "Stress fractures of the medial malleolus and distal fibula",
        journal: "Clin Sports Med",
        year: 2006,
        pmid: "16324979",
        doi: "10.1016/j.csm.2005.08.006",
      },
    },
  ],

  pearls: [
    "Dor medial insidiosa no atleta de impacto com radiografia normal exige RM — o padrão-ouro para diagnóstico precoce.",
    "O traço é VERTICAL (do canto do plafond para cima), não transverso — marca de comportamento de alto risco.",
    "Procure e trate o esporão anteromedial: é a lesão precursora na maioria dos atletas de elite.",
    "Alinhamento em varo do retropé/joelho é fator de risco — corrija com palmilha/órtese para prevenir refratura.",
    "No atleta de elite, o limiar para fixação é baixo; parafusos canulados de compressão dão retorno previsível e rápido.",
    "Parafusos devem ser perpendiculares ao traço vertical para gerar compressão interfragmentária eficaz.",
  ],

  pitfalls: [
    "Atribuir a dor medial a tendinopatia do tibial posterior e perder o diagnóstico até a fratura completar.",
    "Confiar em radiografias iniciais negativas e postergar RM/TC.",
    "Tratar conservadoramente uma fratura completa em atleta de alta demanda, arriscando não-união.",
    "Deixar o esporão anteromedial in situ, mantendo o impingement e o estímulo à refratura.",
    "Posicionar parafusos paralelos ao traço, sem compressão, favorecendo a não-união.",
    "Liberar impacto pleno antes da consolidação em TC aos ~3 meses.",
  ],

  figures: [
    {
      id: "fratura-estresse-maleolo-medial:anatomia",
      caption:
        "Anatomia do tornozelo (AP): maléolo medial, plafond, ligamento deltoide e tendão tibial posterior; junção plafond-maléolo como ponto de concentração de estresse.",
      alt:
        "Esquema AP do tornozelo mostrando tíbia, fíbula, maléolo medial, plafond, deltoide e tendão tibial posterior.",
    },
    {
      id: "fratura-estresse-maleolo-medial:etiologia",
      caption:
        "Etiologia: impacto anteromedial repetitivo com esporão osteofitário do plafond/tálus concentrando estresse no maléolo medial.",
      alt:
        "Corte sagital do tornozelo mostrando esporão anteromedial e seta de impacto repetitivo gerando estresse focal no maléolo.",
    },
    {
      id: "fratura-estresse-maleolo-medial:classificacao",
      caption:
        "Estágios por extensão/estabilidade do traço vertical: I incompleta, II completa não desviada, III desviada/não-união. Clique para alternar.",
      alt:
        "Três variantes do traço vertical do maléolo medial: fissura incompleta, fratura completa e fratura desviada.",
      variant: "incompleta",
    },
    {
      id: "fratura-estresse-maleolo-medial:imagem",
      caption:
        "RM coronal: edema medular (hipersinal) do maléolo medial com traço vertical — achado que confirma o diagnóstico apesar de radiografia normal.",
      alt:
        "Imagem esquemática de RM coronal mostrando edema medular e linha vertical de fratura no maléolo medial.",
    },
    {
      id: "fratura-estresse-maleolo-medial:via-acesso",
      caption:
        "Via anteromedial (mini-open) e estruturas em risco: veia safena magna, nervo safeno e tendão tibial posterior.",
      alt:
        "Esquema da incisão anteromedial no tornozelo com veia/nervo safeno e tendão tibial posterior.",
    },
    {
      id: "fratura-estresse-maleolo-medial:step-1",
      caption:
        "Passo 1: artroscopia anterior com ressecção do esporão osteofitário anteromedial (tratamento da causa do impingement).",
      alt:
        "Corte sagital com shaver artroscópico ressecando esporão anteromedial da tíbia distal.",
    },
    {
      id: "fratura-estresse-maleolo-medial:step-2",
      caption:
        "Passo 2: redução do traço vertical e fios-guia perpendiculares à linha de fratura para compressão.",
      alt:
        "Maléolo medial em AP com traço vertical e dois fios-guia horizontais perpendiculares ao traço.",
    },
    {
      id: "fratura-estresse-maleolo-medial:step-3",
      caption:
        "Passo 3: fixação com dois parafusos canulados de compressão (3,5–4,0 mm) cruzando o traço vertical.",
      alt:
        "Maléolo medial em AP fixado com dois parafusos canulados horizontais comprimindo o traço vertical.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Nguyen A, Beasley I, Calder J. Knee Surg Sports Traumatol Arthrosc. 2019 (PMID 30915513, DOI 10.1007/s00167-019-05483-6)",
      "Ramsodit KR, et al. Knee Surg Sports Traumatol Arthrosc. 2024 (PMID 38829266, DOI 10.1002/ksa.12284)",
      "Lempainen L, et al. Scand J Surg. 2012 (PMID 23238501, DOI 10.1177/145749691210100407)",
      "Jowett AJL, Birks CL, Blackney MC. Foot Ankle Int. 2008 (PMID 18785422, DOI 10.3113/FAI.2008.0716)",
      "Sherbondy PS, Sebastianelli WJ. Clin Sports Med. 2006 (PMID 16324979, DOI 10.1016/j.csm.2005.08.006)",
    ],
    attribution:
      "Evidências verificadas via PubMed. Cite o PubMed e os DOIs correspondentes ao reutilizar as referências.",
  },
});
