import { defineTopic } from "../../types/topic";

/* ============================================================================
   Fratura do calcâneo — membro inferior / retropé.
   Conteúdo clínico pt-BR, terminologia AO/OTA e Sanders. Evidência recuperada
   do PubMed (ver DOIs verificados). Figuras SVG originais prefixadas por
   "fratura-calcaneo:".
   ========================================================================== */

export const topic = defineTopic({
  id: "mi-retrope-fratura-calcaneo",
  slug: "fratura-calcaneo",
  regionId: "membro-inferior",
  bone: "Pé",
  injury: "Fratura do calcâneo",
  title: "Fratura do calcâneo",
  subtitle:
    "Restaurar a altura, o comprimento, o alinhamento e a congruência da faceta posterior — respeitando um envelope de partes moles hostil.",
  laterality: null,
  status: "complete",
  overview:
    "O calcâneo é o osso mais fraturado do tarso e a lesão resulta tipicamente de queda de altura ou trauma axial (acidente automobilístico), transmitindo a carga do tálus contra a faceta posterior. Cerca de três quartos das fraturas são intra-articulares, envolvendo a articulação subtalar. O mecanismo produz um traço primário de cisalhamento que separa um fragmento súpero-medial constante (sustentáculo do tálus, preso ao ligamento interósseo e ao tálus) do restante, e traços secundários que deprimem e alargam o corpo, colapsando a altura (ângulo de Böhler) e a articulação. A avaliação combina radiografia em perfil e axial de Harris com a TC — em especial o corte coronal da faceta posterior, base da classificação de Sanders. Dois ângulos guiam a leitura: o de Böhler (normal 20–40°), que cai ou fica negativo com o afundamento, e o crucial de Gissane, no ápice entre as facetas anterior e posterior. O grande desafio não é apenas a reconstrução articular, mas o envelope de partes moles: a pele posterolateral do retropé é fina, mal vascularizada e propensa a flictenas e necrose, o que torna o momento e a via cirúrgica decisões críticas. A evidência de alto nível (ensaios UK HeFT e de Buckley) mostra que, em fraturas intra-articulares deslocadas típicas, a cirurgia por redução aberta e fixação interna não é superior ao tratamento não cirúrgico e traz mais complicações — o que deslocou a prática para uma indicação seletiva e para vias menos invasivas, sobretudo o acesso do seio do tarso, que reduz drasticamente as complicações de ferida em relação ao acesso extensível lateral.",
  keyFacts: [
    { label: "Mecanismo", value: "Carga axial — queda de altura / trauma automobilístico" },
    { label: "Padrão", value: "~75% intra-articulares (faceta posterior subtalar)" },
    { label: "Ângulo de Böhler", value: "Normal 20–40°; cai/negativa com colapso" },
    { label: "Ângulo de Gissane", value: "Vértice entre facetas anterior e posterior" },
    { label: "Classificação", value: "Sanders (TC coronal) — I a IV pelo nº de fragmentos" },
    { label: "Fragmento constante", value: "Sustentáculo do tálus (súpero-medial)" },
    { label: "Ponto crítico", value: "Partes moles: flictenas, necrose — teste da prega" },
    { label: "Evidência-chave", value: "Op vs não-op sem superioridade (UK HeFT/Buckley); seio do tarso ↓ ferida" },
  ],
  anatomy: {
    text:
      "O calcâneo é o maior osso do tarso e forma o arcabouço do retropé, sustentando o peso corporal e servindo de braço de alavanca para o tríceps sural pela inserção do tendão de Aquiles na sua tuberosidade posterior. Sua superfície superior abriga três facetas articulares para o tálus — posterior (a maior e a que mais importa no trauma), média e anterior. A faceta média repousa sobre o sustentáculo do tálus, uma projeção medial robusta que, por estar firmemente ancorada ao tálus pelo ligamento talocalcâneo interósseo, tende a permanecer no lugar após a fratura: é o fragmento constante (súpero-medial), a referência confiável para a redução. Entre as facetas anterior e posterior, na superfície superior, há um sulco — o ângulo crucial de Gissane —, onde converge um espesso pilar cortical; sua distorção sinaliza afundamento articular. Anteriormente, o processo anterior articula-se com o cuboide (articulação calcaneocuboide). Lateralmente, os tendões fibulares correm em um túnel abaixo do maléolo lateral, sobre a parede lateral do calcâneo, que pode se abaular na fratura e gerar conflito subfibular. A vascularização da pele posterolateral depende sobretudo da artéria calcânea lateral (angiossoma), o que explica a fragilidade desse retalho nas vias extensas. Biomecanicamente, a carga axial do tálus impacta a faceta posterior contra o corpo esponjoso, deprimindo a articulação e colapsando a altura do calcâneo, medida clinicamente pelo ângulo de Böhler (formado pela linha da tuberosidade ao ponto mais alto da faceta posterior e desta ao processo anterior; normal 20–40°). O objetivo do tratamento é restaurar altura, comprimento, alinhamento do retropé (varo/valgo) e a congruência da faceta posterior.",
    figureIds: ["fratura-calcaneo:anatomia", "fratura-calcaneo:angulos"],
  },
  classification: [
    {
      id: "sanders",
      name: "Sanders (TC coronal da faceta posterior)",
      basis:
        "Baseada no corte coronal (ou semicoronal) da TC no ponto mais largo da faceta posterior, contando o número de fragmentos articulares definidos por dois traços (A e B, de lateral para medial) e a linha C junto ao sustentáculo. É a classificação de referência, com valor prognóstico: quanto maior o tipo, pior o resultado e maior a chance de artrodese subtalar.",
      note:
        "As linhas dividem a faceta em colunas lateral, central e medial; o fragmento medial (sustentáculo) costuma ser o constante. Tipos mais altos (III–IV) predizem pior prognóstico articular.",
      types: [
        {
          code: "Tipo I",
          label: "Sem desvio",
          description:
            "Fratura da faceta posterior sem desvio (< 2 mm), independentemente do número de traços. Tratamento habitualmente não cirúrgico.",
          figureId: "fratura-calcaneo:sanders",
          figureVariant: "I",
        },
        {
          code: "Tipo II",
          label: "2 fragmentos (um traço)",
          description:
            "Um único traço articular desloca a faceta em dois fragmentos (subtipos IIA, IIB, IIC conforme a posição lateral→medial do traço). Bom candidato à redução e fixação quando deslocada.",
          figureId: "fratura-calcaneo:sanders",
          figureVariant: "II",
        },
        {
          code: "Tipo III",
          label: "3 fragmentos (dois traços)",
          description:
            "Dois traços produzem três fragmentos, tipicamente com um fragmento central deprimido e impactado (IIIAB, IIIAC, IIIBC). Reconstrução mais exigente; prognóstico intermediário.",
          figureId: "fratura-calcaneo:sanders",
          figureVariant: "III",
        },
        {
          code: "Tipo IV",
          label: "≥ 4 fragmentos (cominutiva)",
          description:
            "Três ou mais traços com cominução articular grave. Pior prognóstico; muitas vezes se considera artrodese subtalar primária associada à reconstrução do contorno (altura/comprimento/eixo).",
          figureId: "fratura-calcaneo:sanders",
          figureVariant: "IV",
        },
      ],
    },
    {
      id: "intra-extra",
      name: "Intra- vs extra-articular",
      basis:
        "Distinção primária, definida pelo envolvimento ou não da faceta posterior (subtalar). As intra-articulares (~75%) determinam o prognóstico e a discussão cirúrgica; as extra-articulares poupam a subtalar.",
      note:
        "A radiografia sugere e a TC confirma. Extra-articulares incluem avulsões da tuberosidade (em bico / beak), fraturas do processo anterior e do sustentáculo.",
      types: [
        {
          code: "Intra-articular",
          label: "Envolve a faceta posterior",
          description:
            "O traço cruza a articulação subtalar posterior, com degrau/impactação articular. Padrão mais comum e de maior repercussão funcional; foco da reconstrução da faceta.",
          figureId: "fratura-calcaneo:intra-extra",
          figureVariant: "intra",
        },
        {
          code: "Extra-articular",
          label: "Poupa a faceta posterior",
          description:
            "Fraturas da tuberosidade (incluindo a avulsão em bico do Aquiles), do processo anterior, do corpo sem extensão articular ou do sustentáculo. A avulsão em bico deslocada é urgência relativa por risco de necrose de pele posterior.",
          figureId: "fratura-calcaneo:intra-extra",
          figureVariant: "extra",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Fratura intra-articular deslocada com degrau da faceta posterior > 2 mm em paciente selecionado (jovem, ativo, sem comorbidade cutânea/tabagismo pesado).",
      "Perda significativa de altura (Böhler muito reduzido/negativo), alargamento do calcâneo com conflito subfibular ou varo/valgo importante da tuberosidade.",
      "Avulsão em bico (tongue-type) da tuberosidade deslocada — urgência relativa pelo risco de necrose da pele posterior tensionada.",
      "Fratura-luxação e fratura exposta.",
      "Alargamento com impacto/luxação dos tendões fibulares.",
      "Sanders IV: reconstrução do contorno ± artrodese subtalar primária em cominução irreconstruível.",
    ],
    nonOperative: [
      "Fratura extra-articular sem desvio e a maioria das intra-articulares deslocadas típicas, à luz dos ensaios que não mostram superioridade da cirurgia.",
      "Sanders I (sem desvio).",
      "Envelope de partes moles proibitivo, tabagismo pesado, diabetes mal controlada, vasculopatia, imunossupressão.",
      "Paciente de baixa demanda ou com contraindicação clínica à cirurgia.",
      "Grande comprometimento sistêmico / politrauma que impeça a cirurgia oportuna.",
    ],
    decisionNotes:
      "A decisão equilibra a reconstrução articular contra o risco de partes moles e a evidência de que, em fraturas intra-articulares deslocadas típicas, a cirurgia por RAFI não supera o tratamento não cirúrgico e aumenta as complicações (ensaios UK HeFT e de Buckley). Assim, a indicação cirúrgica tornou-se seletiva, favorecendo pacientes jovens e ativos, sem fatores de risco cutâneo, com deformidade grosseira (perda de altura, alargamento, varo, conflito subfibular) ou padrões específicos (avulsão em bico, fratura-luxação, exposta). O tempo é regido pelas partes moles: opera-se em geral após a resolução do edema e o retorno das pregas cutâneas — o teste da prega (wrinkle test) positivo indica pele apta —, o que costuma levar 1–3 semanas; flictenas (sobretudo hemorrágicas) e edema tenso contraindicam a via extensa naquele momento. Quando se opera, a via do seio do tarso (mini-open) reduz de forma marcante as complicações de ferida frente ao acesso extensível lateral, com qualidade de redução comparável na maioria dos padrões, deixando a via extensa para as cominuções que exigem exposição ampla. A avulsão em bico deslocada é a principal exceção temporal: a tensão sobre a pele posterior pode necrosá-la em horas, exigindo redução/fixação urgente.",
  },
  approaches: [
    {
      id: "seio-tarso",
      name: "Acesso do seio do tarso (mini-open)",
      indication:
        "Via preferencial na maioria das intra-articulares (Sanders II–III): expõe diretamente a faceta posterior pelo seio do tarso, permitindo redução articular sob visão com agressão mínima às partes moles.",
      interval:
        "Incisão oblíqua de ~4–6 cm da ponta do maléolo lateral em direção à base do 4º metatarsal, sobre o seio do tarso; rebate-se o ventre do extensor curto dos dedos, expondo a faceta posterior entre os tendões fibulares (inferiores) e o pedículo/nervo sural.",
      atRisk: [
        "Nervo sural (dormência lateral do pé)",
        "Tendões fibulares (subluxação/lesão)",
        "Ramos da artéria calcânea lateral",
      ],
      figureId: "fratura-calcaneo:acesso-seio-tarso",
    },
    {
      id: "extensil-lateral",
      name: "Acesso extensível lateral em L",
      indication:
        "Reservado a fraturas muito cominutivas ou com necessidade de exposição ampla da parede lateral e de todo o corpo; oferece a melhor visão, ao custo do maior risco de ferida.",
      interval:
        "Incisão em L: braço vertical retro-maleolar (entre o Aquiles e a borda lateral) e braço horizontal na junção da pele plantar glabra; eleva-se um retalho de espessura total 'no-touch' contendo o nervo sural, os tendões fibulares e a artéria calcânea lateral, rebatendo-o em bloco.",
      atRisk: [
        "Ápice do L — ponto crítico de necrose e deiscência",
        "Artéria calcânea lateral (angiossoma do retalho)",
        "Nervo sural e tendões fibulares dentro do retalho",
      ],
      figureId: "fratura-calcaneo:acesso-extensil-lateral",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Avaliação de partes moles e planejamento (timing)",
      detail:
        "Avaliar o envelope cutâneo: edema, flictenas (serosas vs hemorrágicas), estado neurovascular e sinais de síndrome compartimental do pé. Elevação, gelo e repouso até o retorno das pregas cutâneas (teste da prega positivo). TC com cortes coronais e axiais para classificar (Sanders) e planejar a redução; medir Böhler e Gissane nas radiografias em perfil e axial de Harris.",
      figureId: "fratura-calcaneo:angulos",
      tips: [
        "Operar só com o teste da prega positivo reduz drasticamente as complicações de ferida.",
        "Flictenas hemorrágicas indicam maior sofrimento cutâneo — adiar a via extensa.",
      ],
      pitfalls: [
        "Operar sobre edema tenso/flictenas pela via extensa convida à necrose e infecção profunda.",
        "Ignorar dor desproporcional e parestesia mascara síndrome compartimental do pé.",
      ],
    },
    {
      n: 2,
      title: "Posicionamento e via de acesso",
      detail:
        "Decúbito lateral (ou dorsal em abordagens percutâneas/bilaterais), garrote na coxa, fluoroscopia disponível para perfil, axial e incidências de Broden (avaliação da faceta posterior). Escolher a via conforme o padrão e as partes moles: seio do tarso na maioria; extensível lateral em L para cominuções que exijam exposição ampla.",
      figureId: "fratura-calcaneo:acesso-seio-tarso",
      tips: [
        "As incidências de Broden mostram a congruência da faceta posterior no intraoperatório.",
        "Marcar o trajeto do nervo sural antes de incisar diminui a lesão iatrogênica.",
      ],
      pitfalls: [
        "Retalhos de espessura parcial na via extensa devascularizam a pele — sempre espessura total 'no-touch'.",
        "Incisão do seio do tarso baixa demais lesa os fibulares.",
      ],
    },
    {
      n: 3,
      title: "Redução: comprimento, altura e eixo",
      detail:
        "Reduzir a partir do fragmento constante (sustentáculo). Desimpactar a faceta posterior deprimida e elevá-la contra o tálus/sustentáculo; corrigir o alargamento e o varo da tuberosidade, restaurando comprimento e altura. Um pino de Schanz na tuberosidade (manobra de Essex-Lopresti/joystick) ajuda a tracionar e desrotacionar. Confirmar a restauração do ângulo de Böhler.",
      figureId: "fratura-calcaneo:step-reducao",
      tips: [
        "O sustentáculo é a âncora: reduza tudo a ele, não à parede lateral irregular.",
        "O pino de Schanz na tuberosidade controla varo/valgo e altura simultaneamente.",
      ],
      pitfalls: [
        "Julgar a redução só pela parede lateral deixa degrau articular oculto.",
        "Não corrigir o varo da tuberosidade perpetua sobrecarga lateral e dor.",
      ],
    },
    {
      n: 4,
      title: "Fixação da faceta posterior ao sustentáculo",
      detail:
        "Após reduzir a faceta, fixá-la ao fragmento constante com parafusos subcondrais direcionados ao sustentáculo (evitando penetração intra-articular ou lesão do tendão flexor longo do hálux, que corre sob o sustentáculo). Fios de Kirschner provisórios mantêm a redução enquanto se confere a articulação por Broden e visão direta.",
      figureId: "fratura-calcaneo:step-fixacao",
      figureVariant: "placa",
      tips: [
        "Parafusos subcondrais 'de sustentação' seguram o bloco articular reduzido.",
        "Aferir o comprimento para não protruir medialmente sobre o flexor longo do hálux.",
      ],
      pitfalls: [
        "Parafuso longo/medial demais lesa o feixe neurovascular medial ou o FLH.",
        "Parafuso intra-articular não detectado condena a cartilagem — cheque Broden.",
      ],
    },
    {
      n: 5,
      title: "Neutralização — placa lateral ou construção percutânea",
      detail:
        "Estabilizar o contorno com placa lateral de calcâneo de baixo perfil (em leque), que ponteia tuberosidade, corpo e processo anterior, ou — em padrões simples/partes moles frágeis — optar por fixação percutânea/minimamente invasiva com parafusos da tuberosidade ao processo anterior e ao sustentáculo. Preencher grandes defeitos metafisários conforme necessidade.",
      figureId: "fratura-calcaneo:step-fixacao",
      figureVariant: "percutaneo",
      tips: [
        "Placas de baixo perfil reduzem a proeminência sob a pele lateral fina.",
        "Construções percutâneas poupam o envelope cutâneo em Sanders II selecionados.",
      ],
      pitfalls: [
        "Placa volumosa sob retalho comprometido favorece deiscência e exposição de material.",
        "Fixação insuficiente permite recolapso da altura sob carga.",
      ],
    },
    {
      n: 6,
      title: "Conferência final, fechamento e curativo",
      detail:
        "Confirmar por fluoroscopia (perfil, axial, Broden) a congruência da faceta, a restauração de Böhler/Gissane, o eixo do retropé e a ausência de implante intra-articular ou proeminente. Fechar por planos sem tensão (pontos de Allgöwer-Donati na via extensa), com dreno se necessário; curativo compressivo e imobilização.",
      figureId: "fratura-calcaneo:step-reducao",
      tips: [
        "Sutura sem tensão e manejo delicado das bordas prevenem a deiscência da via extensa.",
        "Reavaliar o alinhamento do retropé com o joelho fletido a 90° confirma varo/valgo.",
      ],
      pitfalls: [
        "Fechar sob tensão o ápice do L precipita necrose.",
        "Deixar recesso não drenado sob retalho amplo favorece hematoma e infecção.",
      ],
    },
  ],
  postop: {
    immobilization:
      "Tala/bota gessada com o tornozelo em posição neutra nas primeiras semanas para proteger as partes moles; início precoce e cuidadoso do arco de movimento subtalar e do tornozelo assim que a ferida permitir, para preservar a mobilidade do retropé.",
    weightBearing:
      "Sem carga (ou apenas toque) por cerca de 8–12 semanas, até sinais de consolidação; a carga precoce arrisca o recolapso da faceta e da altura. Progressão para carga parcial e total conforme radiografia e conforto.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Sem carga; elevação",
        focus: "Cuidado da ferida, controle do edema, vigilância de necrose/infecção, mobilização de dedos, profilaxia de TVP.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Sem carga",
        focus: "Arco de movimento ativo/assistido do tornozelo e subtalar (inversão/eversão), evitar rigidez, controle da dor.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Toque → carga parcial progressiva conforme consolidação",
        focus: "Ganho de mobilidade subtalar, fortalecimento leve, propriocepção, dessensibilização de cicatriz.",
      },
      {
        window: "> 12 semanas",
        weightBearing: "Carga total progressiva",
        focus: "Fortalecimento do tríceps sural e da panturrilha, marcha, retorno gradual à atividade; palmilha/calçado adequado.",
      },
    ],
    followup:
      "Radiografias seriadas (perfil, axial, Broden) para confirmar manutenção de altura/Böhler e consolidação. Vigiar complicações de ferida nas primeiras semanas (pico de risco na via extensa), rigidez subtalar, dor lateral por conflito subfibular ou tendinite fibular e evolução para artrose subtalar pós-traumática — a sequela tardia mais relevante, que pode demandar artrodese subtalar. Aconselhar sobre o longo tempo de recuperação e sequelas residuais.",
  },
  complications: [
    {
      name: "Complicações de ferida / necrose de pele",
      detail:
        "Deiscência, necrose de borda (sobretudo no ápice do L) e infecção superficial, favorecidas pelo envelope cutâneo fino e mal vascularizado; risco muito maior na via extensível lateral e em tabagistas/diabéticos.",
      prevention:
        "Operar com teste da prega positivo, preferir o acesso do seio do tarso, retalhos de espessura total 'no-touch', sutura sem tensão e controle de comorbidades.",
    },
    {
      name: "Infecção profunda / osteomielite",
      detail:
        "Progressão de infecção da ferida ao osso e ao implante, mais provável em fraturas expostas, cominução e partes moles comprometidas; pode exigir desbridamento, retirada de material e antibioticoterapia prolongada.",
      prevention:
        "Timing correto, técnica atraumática, antibioticoprofilaxia, manejo agressivo das fraturas expostas e das flictenas.",
    },
    {
      name: "Artrose subtalar pós-traumática",
      detail:
        "Sequela tardia mais frequente, decorrente do dano condral inicial e do degrau articular residual; cursa com dor à inversão/eversão e rigidez. Fortemente associada aos tipos altos de Sanders.",
      prevention:
        "Redução articular anatômica quando indicada; nos casos avançados, artrodese subtalar (por vezes primária na cominução Sanders IV).",
    },
    {
      name: "Consolidação viciosa (malunião)",
      detail:
        "Perda de altura, alargamento, varo da tuberosidade e conflito subfibular; gera dor lateral, dificuldade de calçar e alteração da marcha. Pode requerer osteotomia corretiva ± artrodese.",
      prevention:
        "Restaurar altura, comprimento e eixo do retropé na cirurgia; evitar recolapso com carga precoce.",
    },
    {
      name: "Conflito subfibular / tendinite fibular",
      detail:
        "A parede lateral abaulada ou o calcâneo alargado comprimem/subluxam os tendões fibulares sob o maléolo lateral, causando dor lateral crônica.",
      prevention:
        "Reduzir o alargamento e a parede lateral; reparar/estabilizar os fibulares quando lesados.",
    },
    {
      name: "Lesão do nervo sural",
      detail:
        "Dormência ou neuroma na borda lateral do pé por lesão/tração do nervo sural, que atravessa o campo tanto do seio do tarso quanto da via extensa.",
      prevention:
        "Identificar e proteger o nervo; incluí-lo no retalho de espessura total na via extensa.",
    },
    {
      name: "Síndrome compartimental do pé",
      detail:
        "Aumento de pressão nos compartimentos do pé na fase aguda; pode evoluir com contratura em garra dos dedos se não tratada.",
      prevention:
        "Alto índice de suspeita (dor desproporcional), medida de pressão e fasciotomia quando indicada.",
    },
  ],
  evidence: [
    {
      id: "griffin-2014",
      claim:
        "No UK Heel Fracture Trial (151 pacientes, 22 hospitais), a RAFI não trouxe vantagem sintomática ou funcional sobre o tratamento não cirúrgico aos 2 anos (Kerr-Atkins 69,8 vs 65,7; IC95% da diferença -7,1 a 7,0), e complicações/reoperações foram mais frequentes na cirurgia (OR 7,5; IC95% 2,0–41,8).",
      takeaway: "Em fraturas intra-articulares deslocadas típicas, a cirurgia não supera o tratamento não cirúrgico e complica mais.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico pragmático (BMJ)",
      era: "atual",
      citation: {
        authors: "Griffin D, Parsons N, Shaw E, Kulikov Y, Hutchinson C, Thorogood M, Lamb SE",
        title:
          "Operative versus non-operative treatment for closed, displaced, intra-articular fractures of the calcaneus: randomised controlled trial",
        journal: "BMJ",
        year: 2014,
        pmid: "25059747",
        doi: "10.1136/bmj.g4483",
        url: "https://doi.org/10.1136/bmj.g4483",
      },
    },
    {
      id: "buckley-2002",
      claim:
        "Ensaio randomizado multicêntrico com 424 pacientes (471 fraturas): sem estratificação, os resultados funcionais do tratamento não cirúrgico foram equivalentes aos da cirurgia (SF-36 64,7 vs 68,7; p=0,13). Subgrupos sem indenização trabalhista, mulheres, jovens e com redução anatômica (degrau ≤ 2 mm) tiveram melhores escores com cirurgia.",
      takeaway: "Sem estratificar, RAFI e conservador são equivalentes; a cirurgia beneficia subgrupos selecionados com redução anatômica.",
      level: "I",
      studyType: "Ensaio clínico randomizado controlado multicêntrico (JBJS Am)",
      era: "classico",
      citation: {
        authors: "Buckley R, Tough S, McCormack R, Pate G, Leighton R, Petrie D, Galpin R",
        title:
          "Operative compared with nonoperative treatment of displaced intra-articular calcaneal fractures: a prospective, randomized, controlled multicenter trial",
        journal: "J Bone Joint Surg Am",
        year: 2002,
        pmid: "12377902",
        doi: "10.2106/00004623-200210000-00001",
        url: "https://doi.org/10.2106/00004623-200210000-00001",
      },
    },
    {
      id: "attenasio-2024",
      claim:
        "Meta-análise de 21 estudos (2086 pacientes): o acesso extensível lateral associou-se a maior risco de complicações de ferida (RR 2,82; IC95% 2,00–3,98) que o seio do tarso, além de maior tempo até a cirurgia, tempo operatório e internação; os desfechos radiográficos (Böhler, Gissane, altura/largura) foram equivalentes entre as vias.",
      takeaway: "O acesso do seio do tarso reduz as complicações de ferida com redução radiográfica comparável à via extensa.",
      level: "III",
      studyType: "Revisão sistemática e meta-análise (Injury)",
      era: "atual",
      citation: {
        authors: "Attenasio A, Heiman E, Hong IS, Bhalla AP, Jankowski JM, Yoon RS, Liporace FA, Dziadosz D",
        title:
          "Postoperative wound complications in extensile lateral approach versus sinus tarsi approach for calcaneal fractures: Are we improving? Updated meta-analysis of recent literature",
        journal: "Injury",
        year: 2024,
        pmid: "38729077",
        doi: "10.1016/j.injury.2024.111560",
        url: "https://doi.org/10.1016/j.injury.2024.111560",
      },
    },
    {
      id: "lim-2023",
      claim:
        "Coorte de um único cirurgião (129 fraturas): o acesso do seio do tarso associou-se a menor tempo até a fixação definitiva e menor tempo operatório, além de menos reoperações não planejadas; a via extensível lateral restaurou o ângulo de Gissane com diferença mínima (~3°), ambos dentro da normalidade.",
      takeaway: "O seio do tarso permite cirurgia mais precoce e rápida com qualidade de redução equivalente.",
      level: "III",
      studyType: "Coorte retrospectiva comparativa (Foot & Ankle Specialist)",
      era: "atual",
      citation: {
        authors: "Lim PK, Miller AJ, Haghverdian J, Meremikwu R, Shaath MK, Munz JW",
        title:
          "Sinus Tarsi Versus Extended Lateral Approach for Displaced Intra-Articular Calcaneal Fractures: A Single Surgeon's Experience",
        journal: "Foot Ankle Spec",
        year: 2023,
        pmid: "37013256",
        doi: "10.1177/19386400231152096",
        url: "https://doi.org/10.1177/19386400231152096",
      },
    },
    {
      id: "joseph-2023",
      claim:
        "Coorte de 139 fraturas (Sanders II–IV) em dois centros de trauma: os pacientes operados pelo seio do tarso foram à cirurgia mais cedo (6,0 vs 13,2 dias); sem diferença de necrose de ferida/infecção profunda entre as vias (12% STA vs 22% ELA; p=0,15) nem de escores AOFAS. Fatores de risco de reoperação foram Sanders IV, IMC e idade — não a via de acesso.",
      takeaway: "Ambas as vias são seguras quando bem indicadas; o padrão (Sanders IV) e o paciente pesam mais que o acesso.",
      level: "III",
      studyType: "Coorte retrospectiva comparativa multicêntrica (Injury)",
      era: "atual",
      citation: {
        authors: "Joseph NM, Sinkler MA, Magister S, Bacharach A, Pang A, Boes K, Vallier HA, Hirschfeld AG, Ochenjele G",
        title:
          "Fixation of displaced intra-articular calcaneus fractures is safe using either sinus tarsi or extensile lateral approach",
        journal: "Injury",
        year: 2023,
        pmid: "36878733",
        doi: "10.1016/j.injury.2023.02.036",
        url: "https://doi.org/10.1016/j.injury.2023.02.036",
      },
    },
  ],
  pearls: [
    "A pergunta prática é: o paciente e as partes moles suportam a cirurgia, e ela vai mudar o desfecho? Nas intra-articulares deslocadas típicas, a evidência não mostra superioridade da RAFI.",
    "Timing é regido pela pele: opere só com o teste da prega positivo; flictenas hemorrágicas e edema tenso adiam a via extensa.",
    "O sustentáculo do tálus é o fragmento constante — reduza tudo a ele, não à parede lateral irregular.",
    "Meça e restaure o ângulo de Böhler (20–40°); a queda/negativação denuncia colapso da faceta posterior.",
    "Use as incidências de Broden no intraoperatório para julgar a congruência da faceta posterior.",
    "Prefira o acesso do seio do tarso: reduz complicações de ferida com redução radiográfica comparável à via extensa.",
    "Avulsão em bico deslocada é urgência: a pele posterior tensionada pode necrosar em horas.",
    "A artrose subtalar é a sequela tardia dominante; Sanders IV pode justificar artrodese subtalar primária.",
  ],
  pitfalls: [
    "Operar sobre edema/flictenas pela via extensa — receita para necrose e infecção profunda.",
    "Julgar a redução pela parede lateral em vez da faceta/sustentáculo deixa degrau articular oculto.",
    "Parafuso ao sustentáculo longo/medial demais lesa o flexor longo do hálux ou o feixe neurovascular medial.",
    "Não corrigir o varo e o alargamento da tuberosidade perpetua conflito subfibular e dor lateral.",
    "Carga precoce demais recolapsa a altura e a faceta.",
    "Subestimar a síndrome compartimental do pé leva a contratura em garra dos dedos.",
    "Retalho de espessura parcial na via extensível lateral devasculariza a pele.",
  ],
  figures: [
    {
      id: "fratura-calcaneo:anatomia",
      caption: "Anatomia do calcâneo em perfil: faceta posterior, sustentáculo, processo anterior e ângulo de Gissane.",
      alt: "Perfil lateral do calcâneo com tálus apoiado na faceta posterior, sustentáculo do tálus medial, processo anterior, tuberosidade com inserção do Aquiles e o ângulo crucial de Gissane.",
    },
    {
      id: "fratura-calcaneo:angulos",
      caption: "Ângulo de Böhler normal (20–40°) e ângulo crucial de Gissane.",
      alt: "Calcâneo lateral com as duas linhas de Böhler entre tuberosidade, faceta posterior e processo anterior formando ângulo normal.",
      variant: "normal",
    },
    {
      id: "fratura-calcaneo:angulos",
      caption: "Ângulo de Böhler diminuído/negativo por depressão da faceta posterior.",
      alt: "Calcâneo lateral com a faceta posterior deprimida e as linhas de Böhler quase paralelas, indicando perda de altura.",
      variant: "colapso",
    },
    {
      id: "fratura-calcaneo:sanders",
      caption: "Sanders I — faceta posterior sem desvio (TC coronal).",
      alt: "Corte coronal com tálus, faceta posterior e corpo do calcâneo sem traço deslocado.",
      variant: "I",
    },
    {
      id: "fratura-calcaneo:sanders",
      caption: "Sanders II — um traço, dois fragmentos articulares.",
      alt: "Corte coronal com um traço vertical dividindo a faceta posterior em dois fragmentos.",
      variant: "II",
    },
    {
      id: "fratura-calcaneo:sanders",
      caption: "Sanders III — dois traços, três fragmentos com afundamento central.",
      alt: "Corte coronal com dois traços verticais e um fragmento central deprimido da faceta posterior.",
      variant: "III",
    },
    {
      id: "fratura-calcaneo:sanders",
      caption: "Sanders IV — cominutiva, quatro ou mais fragmentos.",
      alt: "Corte coronal com três traços verticais fragmentando amplamente a faceta posterior.",
      variant: "IV",
    },
    {
      id: "fratura-calcaneo:intra-extra",
      caption: "Fratura intra-articular — o traço cruza a faceta posterior.",
      alt: "Perfil do calcâneo com traço de fratura atravessando a faceta posterior subtalar.",
      variant: "intra",
    },
    {
      id: "fratura-calcaneo:intra-extra",
      caption: "Fratura extra-articular — traço poupa a faceta posterior.",
      alt: "Perfil do calcâneo com traço na tuberosidade/corpo poupando a articulação subtalar.",
      variant: "extra",
    },
    {
      id: "fratura-calcaneo:acesso-seio-tarso",
      caption: "Acesso do seio do tarso (mini-open) — incisão oblíqua sobre o seio do tarso.",
      alt: "Retropé lateral com incisão oblíqua do maléolo lateral à base do 4º metatarsal sobre o seio do tarso, tendões fibulares e nervo sural em risco.",
    },
    {
      id: "fratura-calcaneo:acesso-extensil-lateral",
      caption: "Acesso extensível lateral em L com retalho de espessura total.",
      alt: "Retropé lateral com incisão em L, retalho de espessura total elevado, artéria calcânea lateral e ápice do L como ponto crítico de necrose.",
    },
    {
      id: "fratura-calcaneo:step-reducao",
      caption: "Redução: elevar a faceta deprimida e restaurar altura, comprimento e Böhler.",
      alt: "Calcâneo lateral com seta elevando a faceta posterior deprimida ao sustentáculo e tração posterior na tuberosidade.",
    },
    {
      id: "fratura-calcaneo:step-fixacao",
      caption: "Fixação com placa lateral de baixo perfil e parafuso ao sustentáculo.",
      alt: "Calcâneo lateral com placa lateral em leque e parafusos, incluindo parafuso direcionado ao sustentáculo do tálus.",
      variant: "placa",
    },
    {
      id: "fratura-calcaneo:step-fixacao",
      caption: "Fixação percutânea minimamente invasiva com parafusos ao sustentáculo.",
      alt: "Calcâneo lateral com parafusos percutâneos da tuberosidade ao processo anterior e ao sustentáculo, com mínimos pontos de entrada.",
      variant: "percutaneo",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Griffin D, et al. BMJ 2014 (UK Heel Fracture Trial — op vs não-op)",
      "Buckley R, et al. JBJS Am 2002 (RCT op vs não-op, subgrupos)",
      "Attenasio A, et al. Injury 2024 (meta-análise seio do tarso vs extensível lateral — ferida)",
      "Lim PK, et al. Foot Ankle Spec 2023 (seio do tarso vs extensível lateral — cirurgia mais precoce)",
      "Joseph NM, et al. Injury 2023 (ambas as vias seguras; risco por Sanders/paciente)",
      "Sanders R — classificação por TC coronal da faceta posterior (referência)",
      "Princípios AO de tratamento de fraturas (referência técnica)",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados.",
  },
});
