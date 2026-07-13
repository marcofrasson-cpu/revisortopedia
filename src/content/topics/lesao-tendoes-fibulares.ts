import { defineTopic } from "../../types/topic";

/* ============================================================================
   Lesão dos tendões fibulares — rasgos, tendinopatia e instabilidade
   Conteúdo clínico pt-BR. Figuras com prefixo "lesao-tendoes-fibulares:".
   ========================================================================== */

export const topic = defineTopic({
  id: "lesao-tendoes-fibulares",
  slug: "lesao-tendoes-fibulares",
  regionId: "membro-inferior",
  bone: "Tendão",
  injury: "Lesão/instabilidade tendínea",
  title: "Lesão dos tendões fibulares",
  subtitle:
    "Rasgos do fibular curto, subluxação/luxação e instabilidade lateral do tornozelo — do desbridamento à tenodese e à estabilização do retináculo",
  laterality: null,
  status: "complete",

  overview:
    "As lesões dos tendões fibulares englobam um espectro que vai da tendinopatia e dos rasgos longitudinais do fibular curto até a subluxação e a luxação recidivantes por insuficiência do retináculo superior dos fibulares (SPR). São causa frequentemente subdiagnosticada de dor lateral crônica do tornozelo e coexistem, em boa parte dos casos, com instabilidade lateral ligamentar. O fibular curto é o mais acometido: no seu trajeto retromaleolar fica comprimido entre o fibular longo e a borda posterior da fíbula, o que favorece o rasgo longitudinal (split). Um sulco retromaleolar raso ou convexo e a hipertrofia do tubérculo peroneal predispõem à instabilidade. A decisão terapêutica organiza-se por dois eixos: (1) para os rasgos, desbridar e tubularizar quando a lesão acomete menos de ~50% da área transversal, ou ressecar o segmento inviável e fazer tenodese ao fibular longo quando acomete mais de 50%; nas rupturas irreparáveis de ambos os tendões, considerar transferência tendínea ou enxerto; (2) para a instabilidade, reparar/retensionar o SPR e, quando o sulco é raso, aprofundá-lo. A investigação e o tratamento das comorbidades (instabilidade lateral, retropé varo, os peroneum, tubérculo peroneal hipertrófico) são essenciais para o bom resultado.",

  keyFacts: [
    { label: "Tendão mais acometido", value: "Fibular curto (rasgo longitudinal)" },
    { label: "Instabilidade", value: "Insuficiência do retináculo superior (SPR)" },
    { label: "Fator predisponente", value: "Sulco retromaleolar raso/convexo" },
    { label: "Comorbidade frequente", value: "Instabilidade lateral do tornozelo / retropé varo" },
    { label: "Regra decisória (rasgo)", value: "Reparo se < 50%; tenodese se > 50%" },
    { label: "Exame de imagem", value: "RM e US dinâmico (subluxação)" },
  ],

  anatomy: {
    text:
      "Os fibulares (curto e longo) ocupam o compartimento lateral da perna e descem por trás do maléolo lateral em um túnel osteofibroso: o assoalho é o sulco retromaleolar da fíbula, e o teto é o retináculo superior dos fibulares (SPR), que se estende da borda posterolateral da fíbula até a fáscia profunda e o calcâneo. No sulco, o fibular curto está mais profundo e anterior (achatado, contra o osso) e o fibular longo mais superficial e posterior (arredondado). Distalmente, o fibular curto insere-se na base do 5º metatarso, e o fibular longo contorna o tubérculo peroneal e o cuboide para inserir-se na base do 1º metatarso e no cuneiforme medial — ambos são eversores e estabilizadores dinâmicos laterais. A morfologia do sulco é variável (côncavo/profundo, plano ou convexo); um sulco raso ou convexo reduz a contenção e predispõe à subluxação. Uma crista fibrocartilaginosa reforça a borda posterolateral do sulco. O nervo sural cursa posterolateralmente, próximo aos tendões distais, sendo estrutura-chave a proteger na via de acesso. O mecanismo típico de instabilidade é a dorsiflexão súbita com contração reflexa dos fibulares e eversão forçada, que avulsiona ou descola o SPR.",
    figureIds: [
      "lesao-tendoes-fibulares:anatomia",
      "lesao-tendoes-fibulares:sulco",
    ],
  },

  classification: [
    {
      id: "eckert-davis-oden",
      name: "Eckert-Davis (modificação de Oden) — lesão do SPR",
      basis: "Anatomia da falha do retináculo superior na luxação aguda",
      note:
        "Graduação intraoperatória/imagem que orienta a técnica de estabilização; o grau III (escama óssea) é sugestivo em radiografia (fleck sign).",
      types: [
        {
          code: "I",
          label: "Descolamento do SPR/periósteo",
          description:
            "O retináculo e o periósteo são descolados da fíbula, criando uma bolsa por onde os tendões subluxam; o osso permanece íntegro. Grau mais comum.",
          figureId: "lesao-tendoes-fibulares:classificacao-spr",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "Elevação da crista fibrocartilaginosa",
          description:
            "A crista fibrocartilaginosa da borda posterolateral é elevada junto ao SPR, sem fragmento ósseo cortical.",
          figureId: "lesao-tendoes-fibulares:classificacao-spr",
          figureVariant: "II",
        },
        {
          code: "III",
          label: "Avulsão de escama cortical",
          description:
            "Fina lâmina óssea cortical é avulsionada com o SPR (rim/fleck fracture), visível na radiografia como sinal de avulsão paralelo à fíbula.",
          figureId: "lesao-tendoes-fibulares:classificacao-spr",
          figureVariant: "III",
        },
        {
          code: "IV",
          label: "Ruptura posterior do SPR",
          description:
            "O retináculo é roto/avulsionado da sua inserção posterior (calcâneo/fáscia), com os tendões luxando sobre o retalho.",
          figureId: "lesao-tendoes-fibulares:classificacao-spr",
          figureVariant: "IV",
        },
      ],
    },
    {
      id: "morfologia-sulco",
      name: "Morfologia do sulco retromaleolar",
      basis: "Forma do assoalho ósseo do túnel retromaleolar (TC/anatomia)",
      note: "Modula o risco de instabilidade e a indicação de aprofundamento do sulco.",
      types: [
        {
          code: "concavo",
          label: "Côncavo (profundo)",
          description:
            "Assoalho côncavo, profundidade ~2–4 mm; boa contenção dos tendões. Configuração mais estável.",
          figureId: "lesao-tendoes-fibulares:sulco",
          figureVariant: "concavo",
        },
        {
          code: "plano",
          label: "Plano (raso)",
          description:
            "Sulco raso, com pouca contenção óssea; predispõe à subluxação, sobretudo se o SPR estiver insuficiente.",
          figureId: "lesao-tendoes-fibulares:sulco",
          figureVariant: "plano",
        },
        {
          code: "convexo",
          label: "Convexo",
          description:
            "Superfície posterior convexa, sem sulco; a mais instável — costuma requerer aprofundamento do sulco na cirurgia.",
          figureId: "lesao-tendoes-fibulares:sulco",
          figureVariant: "convexo",
        },
      ],
    },
    {
      id: "krause-brodsky-rasgo",
      name: "Rasgo do fibular curto (regra dos 50% — Krause-Brodsky)",
      basis: "Proporção da área transversal comprometida (achado intraoperatório)",
      note: "Determina reparo/tubularização vs excisão e tenodese.",
      types: [
        {
          code: "grau-I",
          label: "< 50% da área — reparável",
          description:
            "Rasgo longitudinal viável: desbridamento das bordas degeneradas e tubularização, preservando o tendão como unidade funcional.",
          figureId: "lesao-tendoes-fibulares:rasgo-brevis",
          figureVariant: "parcial",
        },
        {
          code: "grau-II",
          label: "> 50% da área — tenodese",
          description:
            "Comprometimento extenso/segmento inviável: ressecção e tenodese ao fibular longo (ou transferência/enxerto se ambos irreparáveis).",
          figureId: "lesao-tendoes-fibulares:rasgo-brevis",
          figureVariant: "maior",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Rasgo sintomático do fibular curto/longo refratário ao tratamento conservador (>3–6 meses).",
      "Subluxação/luxação recidivante dos fibulares com falha do tratamento não operatório ou em atleta de alta demanda.",
      "Luxação aguda em atleta de alta demanda ou com escama óssea cortical (Eckert-Davis III) — estabilização precoce.",
      "Instabilidade lateral ligamentar associada que exige reconstrução no mesmo tempo cirúrgico.",
      "Deformidades associadas (retropé varo, tubérculo peroneal hipertrófico, os peroneum sintomático) que perpetuam a lesão.",
    ],
    nonOperative: [
      "Tendinopatia/tenossinovite sem rasgo estrutural significativo — reabilitação, controle de carga e correção do retropé com órtese.",
      "Rasgos parciais pouco sintomáticos e subluxação de baixa demanda: imobilização/bota e fisioterapia de fibulares e propriocepção.",
      "Luxação aguda em paciente de baixa demanda: imobilização em leve inversão por ~6 semanas (resultados inferiores à cirurgia em atletas).",
    ],
    decisionNotes:
      "A conduta parte de distinguir tendinopatia/rasgo de instabilidade, embora coexistam. Nos rasgos, a regra dos 50% (Krause-Brodsky) orienta reparo/tubularização (< 50%) vs excisão e tenodese ao fibular longo (> 50%); rupturas irreparáveis de ambos os tendões podem exigir transferência (flexor longo dos dedos/hálux) ou enxerto. Na instabilidade, o pilar é a reconstrução/retensionamento do SPR; quando o sulco é raso ou convexo, associa-se o aprofundamento do sulco, cuja combinação com o reparo do retináculo se associa a maior retorno esportivo. É indispensável tratar as comorbidades — instabilidade lateral, retropé varo, tubérculo peroneal hipertrófico e os peroneum — sob pena de recidiva.",
  },

  approaches: [
    {
      id: "retromaleolar",
      name: "Via retromaleolar/lateral (curvilínea posterior à fíbula)",
      indication:
        "Acesso amplo aos fibulares para reparo/tenodese, à borda posterolateral da fíbula para o SPR e ao sulco para aprofundamento.",
      interval:
        "Incisão curvilínea 1 cm posterior ao bordo posterior da fíbula, acompanhando os tendões até a base do 5º metatarso; abertura da bainha e do SPR preservando um coto para reinserção.",
      atRisk: [
        "Nervo sural (posterolateral, próximo aos tendões distais)",
        "Ramos da artéria fibular",
        "Retináculo superior dos fibulares (preservar coto para reparo)",
      ],
      figureId: "lesao-tendoes-fibulares:via-acesso",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Exposição e inventário lesional",
      detail:
        "Via retromaleolar; abre-se a bainha preservando um coto do SPR na fíbula. Inspecionam-se ambos os tendões em toda a excursão, a morfologia do sulco, a crista fibrocartilaginosa e a presença de tubérculo peroneal hipertrófico ou os peroneum. Testa-se dinamicamente a subluxação.",
      figureId: "lesao-tendoes-fibulares:via-acesso",
      tips: [
        "Identifique e proteja o nervo sural antes de aprofundar distalmente.",
        "Avalie a instabilidade lateral associada — pode mudar o plano cirúrgico.",
      ],
      pitfalls: [
        "Seccionar o SPR sem deixar coto compromete a reconstrução posterior.",
        "Não inventariar o fibular longo deixa passar rasgos concomitantes.",
      ],
    },
    {
      n: 2,
      title: "Rasgo < 50%: desbridamento e tubularização",
      detail:
        "Ressecam-se as bordas degeneradas do rasgo longitudinal e tubulariza-se o tendão com sutura contínua invertente, restaurando um tubo de contorno liso que desliza sem conflito no sulco.",
      figureId: "lesao-tendoes-fibulares:step-reparo",
      tips: [
        "Preserve o máximo de tendão viável — a tubularização mantém a função eversora.",
        "Alise transições para evitar reconflito no túnel.",
      ],
      pitfalls: [
        "Tubularizar sob tensão excessiva estreita e enrijece o tendão.",
        "Deixar tecido degenerado perpetua a dor.",
      ],
    },
    {
      n: 3,
      title: "Rasgo > 50%: excisão e tenodese ao fibular longo",
      detail:
        "Ressecado o segmento inviável, faz-se tenodese látero-lateral dos cotos ao fibular longo íntegro, proximal e distalmente à zona de conflito, com o tornozelo em posição neutra/leve eversão e tensão fisiológica.",
      figureId: "lesao-tendoes-fibulares:step-tenodese",
      tips: [
        "Ancore fora da zona retromaleolar de atrito para evitar recidiva sintomática.",
        "Se ambos os tendões forem irreparáveis, considere transferência (FDL/FHL) ou enxerto.",
      ],
      pitfalls: [
        "Tenodese muito frouxa gera fraqueza de eversão; muito tensa limita a mobilidade.",
        "Ignorar um retropé varo sobrecarrega a reconstrução.",
      ],
    },
    {
      n: 4,
      title: "Instabilidade: aprofundamento do sulco (quando raso/convexo)",
      detail:
        "Nos sulcos rasos ou convexos, aprofunda-se o sulco por brocagem intramedular e impacção da parede posterior (técnica do retalho ósteo-cartilaginoso), ganhando ~4–6 mm de profundidade e preservando a cartilagem de deslizamento.",
      figureId: "lesao-tendoes-fibulares:step-sulco",
      figureVariant: "aprofundamento",
      tips: [
        "Preserve a cortical/cartilagem posterior como superfície de deslizamento.",
        "Confirme que os tendões acomodam-se sem impacto após o aprofundamento.",
      ],
      pitfalls: [
        "Aprofundamento insuficiente mantém a instabilidade residual.",
        "Remoção agressiva pode fragilizar a fíbula distal.",
      ],
    },
    {
      n: 5,
      title: "Reconstrução/retensionamento do retináculo superior (SPR)",
      detail:
        "Reduzem-se os tendões e reinsere-se/retensiona-se o SPR na borda posterolateral da fíbula com âncoras ou túneis ósseos (técnica de Das De/pants-over-vest), restaurando o teto do túnel. Trata-se, no mesmo tempo, a instabilidade lateral se presente.",
      figureId: "lesao-tendoes-fibulares:step-sulco",
      figureVariant: "retinaculo",
      tips: [
        "A associação de aprofundamento do sulco + reparo do SPR eleva o retorno esportivo (evidência de revisão sistemática).",
        "Cheque a estabilidade dinâmica em dorsiflexão-eversão antes de fechar.",
      ],
      pitfalls: [
        "Retensionar demais o SPR pode comprimir e estenosar os tendões.",
        "Deixar de tratar a instabilidade lateral associada favorece a recidiva.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Imobilização em bota/tala com o pé em leve eversão e neutro por ~2 semanas; após, bota removível. Estabilizações do SPR/aprofundamento de sulco costumam ser protegidas por 4–6 semanas.",
    weightBearing:
      "Reparo/tenodese isolados: carga protegida precoce conforme dor. Reconstrução do retináculo/aprofundamento do sulco: sem carga a carga parcial nas primeiras 2–4 semanas, progredindo conforme cicatrização.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Sem carga a toque, em bota",
        focus:
          "Controle de edema e dor, elevação, mobilização de dedos e joelho; proteção da reconstrução tendínea/retinacular.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Carga parcial progressiva em bota",
        focus:
          "Amplitude de movimento do tornozelo (evitar inversão forçada precoce nas estabilizações), isometria de fibulares, propriocepção inicial.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Carga total, transição para calçado",
        focus:
          "Fortalecimento progressivo de eversão/fibulares, equilíbrio unipodal, marcha normal, início de corrida linear.",
      },
      {
        window: "> 12 semanas",
        weightBearing: "Total, sem restrição",
        focus:
          "Retorno ao esporte por critérios: força de eversão simétrica, propriocepção, agilidade e mudança de direção sem dor ou apreensão.",
      },
    ],
    followup:
      "Seguimento clínico com atenção à recidiva de subluxação (teste dinâmico), força de eversão e correção das comorbidades (retropé varo, instabilidade lateral). Retorno esportivo guiado por critérios funcionais mais do que por prazo fixo.",
  },

  complications: [
    {
      name: "Recidiva de subluxação/luxação",
      detail:
        "Persistência ou retorno da instabilidade, favorecida por aprofundamento insuficiente do sulco, retináculo mal retensionado ou comorbidade não tratada (instabilidade lateral, retropé varo).",
      prevention:
        "Combinar reparo do SPR com aprofundamento do sulco nos sulcos rasos/convexos e tratar a instabilidade lateral associada.",
    },
    {
      name: "Lesão do nervo sural",
      detail:
        "Neuropraxia, neuroma ou dor neuropática pela proximidade do nervo na via retromaleolar/distal.",
      prevention: "Identificação e proteção do nervo sural durante a dissecção.",
    },
    {
      name: "Fraqueza de eversão",
      detail:
        "Pode ocorrer após tenodese/transferência ou tubularização sob tensão inadequada; costuma ser bem tolerada quando um dos tendões permanece funcional.",
      prevention: "Tensão fisiológica na tenodese e preservação máxima de tendão viável.",
    },
    {
      name: "Re-rasgo / dor persistente",
      detail:
        "Falha da tubularização ou tendinopatia residual, sobretudo se tecido degenerado não foi adequadamente ressecado ou o conflito mecânico não foi corrigido.",
      prevention:
        "Ressecar tecido inviável, alisar transições e corrigir tubérculo peroneal hipertrófico/os peroneum.",
    },
    {
      name: "Estenose tendínea pós-estabilização",
      detail:
        "Retensionamento excessivo do SPR ou aprofundamento inadequado pode comprimir os tendões e gerar dor/tenossinovite.",
      prevention: "Checar deslizamento livre em dorsiflexão-eversão antes do fechamento.",
    },
    {
      name: "Rigidez / perda de mobilização",
      detail:
        "Imobilização prolongada e aderências podem limitar a amplitude; mais comum após reconstruções extensas.",
      prevention: "Reabilitação progressiva e mobilização precoce protegida.",
    },
  ],

  evidence: [
    {
      id: "vandijk-2015",
      claim:
        "Revisão sistemática de 14 estudos sobre luxação dos fibulares: a cirurgia melhora o AOFAS e a satisfação, com redislocação < 1,5%; pacientes tratados com aprofundamento do sulco + reparo do SPR tiveram maior taxa de retorno ao esporte do que reparo do SPR isolado (p = 0,022).",
      takeaway:
        "Na instabilidade, combinar aprofundamento do sulco e reparo do retináculo maximiza o retorno esportivo.",
      level: "IV",
      studyType: "Revisão sistemática de estudos nível IV",
      era: "classico",
      citation: {
        authors: "van Dijk PAD, Gianakos AL, Kerkhoffs GMMJ, Kennedy JG",
        title:
          "Return to sports and clinical outcomes in patients treated for peroneal tendon dislocation: a systematic review",
        journal: "Knee Surgery, Sports Traumatology, Arthroscopy",
        year: 2015,
        pmid: "26519186",
        doi: "10.1007/s00167-015-3833-z",
      },
    },
    {
      id: "park-2021",
      claim:
        "Série de 36 pacientes com luxação recidivante dos fibulares tratados apenas com reinserção anatômica do retináculo superior, sem aprofundamento do sulco: 34/36 sem re-subluxação, com melhora significativa de AOFAS, EVA e FFI e sem fraqueza de eversão ou perda de mobilidade.",
      takeaway:
        "Em casos selecionados, o reparo isolado do SPR com reabilitação adequada pode ser suficiente, dispensando o aprofundamento do sulco.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors: "Park SH, Choi YR, Lee J, Seo J, Lee HS",
        title:
          "Treatment of Recurrent Peroneal Tendon Dislocation by Peroneal Retinaculum Reattachment Without Fibular Groove Deepening",
        journal: "The Journal of Foot and Ankle Surgery",
        year: 2021,
        pmid: "34275719",
        doi: "10.1053/j.jfas.2020.04.027",
      },
    },
    {
      id: "burkhard-2021",
      claim:
        "Coorte prospectiva de transferência distal do fibular longo para o curto em rasgos maiores do fibular curto: bons escores clínicos (AOFAS 86) sem diferença mensurável de força isocinética ou amplitude de eversão/inversão em relação ao lado contralateral.",
      takeaway:
        "A tenodese/transferência longo-para-curto é opção válida nos rasgos extensos, sem comprometer força ou mobilidade.",
      level: "IV",
      studyType: "Série de casos prospectiva",
      era: "atual",
      citation: {
        authors: "Burkhard MD, Wirth SH, Andronic O, Viehöfer AF, Imhoff FB, Fröhlich S",
        title: "Clinical and Functional Outcomes of Peroneus Longus to Brevis Tendon Transfer",
        journal: "Foot & Ankle International",
        year: 2021,
        pmid: "33451277",
        doi: "10.1177/1071100720982592",
      },
    },
    {
      id: "hu-2018",
      claim:
        "Série de subluxação crônica dos fibulares tratada com aprofundamento posteromedial do sulco associado a reparo da bainha: melhora do AOFAS (55 → 93,6) e da EVA (5,3 → 1,2), sem recidiva de subluxação e sem complicações maiores no seguimento.",
      takeaway:
        "O aprofundamento do sulco com reparo da bainha corrige eficazmente a subluxação crônica quando o assoalho é insuficiente.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors: "Hu M, Xu X",
        title:
          "Treatment of Chronic Subluxation of the Peroneal Tendons Using a Modified Posteromedial Peroneal Tendon Groove Deepening Technique",
        journal: "The Journal of Foot and Ankle Surgery",
        year: 2018,
        pmid: "29933904",
        doi: "10.1053/j.jfas.2018.03.009",
      },
    },
    {
      id: "danna-2020",
      claim:
        "Revisão do diagnóstico e tratamento operatório dos rasgos dos fibulares: rasgos limitados de um único tendão são desbridados e reparados; quando avançados, opta-se por excisão do segmento inviável e tenodese ao tendão adjacente; rupturas irreparáveis de ambos os tendões demandam transferência tendínea e/ou enxerto.",
      takeaway:
        "O algoritmo atual escalona reparo → tenodese → transferência/enxerto conforme a extensão e a viabilidade tendínea.",
      level: "V",
      studyType: "Revisão narrativa / algoritmo de tratamento",
      era: "atual",
      citation: {
        authors: "Danna NR, Brodsky JW",
        title: "Diagnosis and Operative Treatment of Peroneal Tendon Tears",
        journal: "Foot & Ankle Orthopaedics",
        year: 2020,
        pmid: "35097372",
        doi: "10.1177/2473011420910407",
      },
    },
  ],

  pearls: [
    "Dor lateral crônica do tornozelo pós-entorse com edema retromaleolar deve levantar suspeita de lesão dos fibulares.",
    "O fibular curto rasga longitudinalmente por ficar comprimido entre o fibular longo e a borda posterior da fíbula.",
    "Regra dos 50% (Krause-Brodsky): reparar/tubularizar se < 50%; excisar e fazer tenodese se > 50%.",
    "Sulco raso/convexo é fator de instabilidade — considerar aprofundamento do sulco.",
    "Combinar aprofundamento do sulco + reparo do SPR aumenta o retorno esportivo (revisão sistemática).",
    "Sempre procurar e tratar comorbidades: instabilidade lateral, retropé varo, tubérculo peroneal hipertrófico, os peroneum.",
  ],

  pitfalls: [
    "Atribuir a dor lateral apenas à entorse ligamentar e não investigar os fibulares.",
    "Seccionar o SPR sem deixar coto para reinserção.",
    "Tenodese sob tensão inadequada — fraqueza de eversão ou restrição.",
    "Aprofundamento insuficiente do sulco mantendo a instabilidade.",
    "Retensionar demais o retináculo e estenosar os tendões.",
    "Não corrigir o retropé varo/instabilidade lateral e perpetuar a recidiva.",
  ],

  figures: [
    {
      id: "lesao-tendoes-fibulares:anatomia",
      caption:
        "Anatomia retromaleolar: fibular curto (profundo) e longo (superficial) no sulco fibular sob o retináculo superior.",
      alt: "Corte axial retromaleolar mostrando a fíbula com sulco posterior, os dois tendões fibulares e o retináculo superior.",
      variant: "axial",
    },
    {
      id: "lesao-tendoes-fibulares:anatomia",
      caption:
        "Visão lateral: trajeto dos fibulares curto e longo atrás do maléolo lateral, contidos pelo SPR.",
      alt: "Visão lateral do tornozelo com os tendões fibulares descendo atrás do maléolo lateral e o retináculo superior.",
      variant: "lateral",
    },
    {
      id: "lesao-tendoes-fibulares:classificacao-spr",
      caption:
        "Classificação de Eckert-Davis (mod. Oden) da lesão do retináculo superior — graus I a IV (clicável).",
      alt: "Quatro padrões de falha do retináculo superior dos fibulares na luxação, do descolamento periosteal à ruptura posterior.",
      variant: "I",
    },
    {
      id: "lesao-tendoes-fibulares:sulco",
      caption:
        "Morfologia do sulco retromaleolar: côncavo (estável), plano (raso) e convexo (instável).",
      alt: "Cortes axiais comparando sulcos fibulares côncavo, plano e convexo e a contenção dos tendões.",
      variant: "concavo",
    },
    {
      id: "lesao-tendoes-fibulares:rasgo-brevis",
      caption:
        "Rasgo longitudinal do fibular curto: parcial (< 50%, reparável) vs extenso (> 50%, tenodese).",
      alt: "Tendão fibular curto com fenda longitudinal, comparando rasgo parcial e rasgo acometendo mais de metade da área.",
      variant: "parcial",
    },
    {
      id: "lesao-tendoes-fibulares:via-acesso",
      caption:
        "Via retromaleolar curvilínea posterior à fíbula, com o nervo sural em risco.",
      alt: "Visão lateral do tornozelo com incisão retromaleolar posterior à fíbula e o trajeto do nervo sural.",
    },
    {
      id: "lesao-tendoes-fibulares:step-reparo",
      caption:
        "Desbridamento das bordas e tubularização do fibular curto (rasgo < 50%).",
      alt: "Tendão fibular curto com bordas degeneradas ressecadas e sutura contínua tubularizando o tendão.",
    },
    {
      id: "lesao-tendoes-fibulares:step-tenodese",
      caption:
        "Excisão do segmento inviável e tenodese látero-lateral do fibular curto ao longo (rasgo > 50%).",
      alt: "Cotos do fibular curto ancorados ao fibular longo íntegro após excisão do segmento central.",
    },
    {
      id: "lesao-tendoes-fibulares:step-sulco",
      caption:
        "Aprofundamento do sulco retromaleolar e reinserção/retensionamento do retináculo superior.",
      alt: "Aprofundamento intramedular do sulco fibular e reancoragem do retináculo superior sobre os tendões reduzidos.",
      variant: "aprofundamento",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "van Dijk et al., Knee Surg Sports Traumatol Arthrosc 2015 (DOI 10.1007/s00167-015-3833-z)",
      "Park et al., J Foot Ankle Surg 2021 (DOI 10.1053/j.jfas.2020.04.027)",
      "Burkhard et al., Foot Ankle Int 2021 (DOI 10.1177/1071100720982592)",
      "Hu & Xu, J Foot Ankle Surg 2018 (DOI 10.1053/j.jfas.2018.03.009)",
      "Danna & Brodsky, Foot Ankle Orthop 2020 (DOI 10.1177/2473011420910407)",
    ],
    attribution:
      "Evidências verificadas no PubMed; DOIs conferidos junto aos registros originais. Cite o PubMed ao reutilizar as referências.",
  },
});
