import { defineTopic } from "../../types/topic";

/* ============================================================================
   Fratura do quinto metatarso — membro inferior / pé.
   Evidências verificadas no PubMed (DOIs reais). Ver meta.attribution.
   ========================================================================== */

export const topic = defineTopic({
  id: "fratura-quinto-metatarso",
  slug: "fratura-quinto-metatarso",
  regionId: "membro-inferior",
  bone: "Pé",
  injury: "Fratura do 5º metatarso",
  title: "Fratura do quinto metatarso",
  subtitle: "Zonas 1–3, fratura de Jones e o dilema parafuso intramedular vs. tratamento funcional no atleta",
  laterality: null,
  status: "complete",

  overview:
    "As fraturas do 5º metatarso estão entre as fraturas mais comuns do pé. A conduta depende inteiramente da localização anatômica proximal, sistematizada pelas três zonas de Lawrence e Botte. A zona 1 (avulsão da tuberosidade), a mais frequente, tem excelente potencial de consolidação e é tratada funcionalmente. A zona 2 — a fratura de Jones, na junção metafisodiafisária — situa-se numa área de watershed vascular e concentra o risco de retardo de consolidação, pseudartrose e refratura. A zona 3 corresponde às fraturas diafisárias proximais, tipicamente por estresse, com comportamento igualmente problemático. O eixo decisório central é o do atleta: a fixação com parafuso intramedular acelera a consolidação e o retorno esportivo em comparação ao tratamento conservador, enquanto o não atleta pode ser conduzido com bota/gesso em muitos casos.",

  keyFacts: [
    { label: "Osso", value: "5º metatarso (base proximal)" },
    { label: "Zona de risco", value: "Zona 2 (Jones) — watershed metafisodiafisário" },
    { label: "Mecanismo Z1", value: "Inversão com adução do antepé (avulsão)" },
    { label: "Mecanismo Z2/Z3", value: "Carga lateral repetitiva / estresse (adução do antepé)" },
    { label: "Padrão-ouro atleta", value: "Parafuso intramedular canulado de rosca parcial" },
    { label: "Retorno ao esporte", value: "~9–10 semanas (cirúrgico) vs. ~13 semanas (conservador)" },
    { label: "Refratura", value: "Complicação-chave (~10%), sobretudo em atletas de impacto" },
  ],

  anatomy: {
    text:
      "O 5º metatarso articula-se proximalmente com o cuboide e, medialmente, com o 4º metatarso pela articulação intermetatársica (referência anatômica que define o limite distal das zonas). A tuberosidade (apófise, estilóide) recebe a inserção do tendão fibular curto lateralmente e da banda lateral da aponeurose plantar; o fibular terceiro insere-se dorsalmente na base/diáfise. A vascularização é o determinante prognóstico: existe um aporte metafisário proximal (tuberosidade) e um aporte nutrício diafisário, com uma zona de watershed hipovascular exatamente na junção metafisodiafisária — o território da fratura de Jones. Essa hipoperfusão explica a propensão a retardo de consolidação e pseudartrose nessa localização, em contraste com a rica vascularização da tuberosidade (zona 1). Em crianças e adolescentes, a fise apofisária normal (orientada longitudinalmente, paralela à diáfise) não deve ser confundida com fratura (orientada transversalmente).",
    figureIds: ["fratura-quinto-metatarso:anatomia", "fratura-quinto-metatarso:vascular"],
  },

  classification: [
    {
      id: "lawrence-botte",
      name: "Zonas de Lawrence e Botte",
      basis: "Localização anatômica da linha de fratura na base proximal do 5º metatarso",
      note: "Sistema mais utilizado por sua implicação prognóstica e terapêutica direta. O limite distal é a articulação intermetatársica 4–5.",
      types: [
        {
          code: "Zona 1",
          label: "Avulsão da tuberosidade",
          description:
            "Fratura da tuberosidade (estilóide), tipicamente por avulsão em inversão. Ricamente vascularizada; consolida bem, inclusive quando cominutiva, desviada ou intra-articular. Tratamento funcional. O imobilizador gessado atrasa o retorno sem benefício de consolidação.",
          figureId: "fratura-quinto-metatarso:zonas",
          figureVariant: "1",
        },
        {
          code: "Zona 2",
          label: "Fratura de Jones",
          description:
            "Fratura na junção metafisodiafisária que se estende para a articulação intermetatársica 4–5 (watershed vascular). Aguda, porém com risco elevado de retardo/pseudartrose e refratura. Fixação com parafuso intramedular é recomendada no atleta.",
          figureId: "fratura-quinto-metatarso:zonas",
          figureVariant: "2",
        },
        {
          code: "Zona 3",
          label: "Diafisária proximal (estresse)",
          description:
            "Fratura da diáfise proximal, distal à articulação intermetatársica, geralmente por estresse (sobrecarga repetitiva). Alta taxa de falha do tratamento não operatório em carga; frequentemente crônica com esclerose medular.",
          figureId: "fratura-quinto-metatarso:zonas",
          figureVariant: "3",
        },
      ],
    },
    {
      id: "torg",
      name: "Classificação de Torg (fraturas de Jones/estresse)",
      basis: "Cronicidade radiográfica: reação periosteal, alargamento da linha e esclerose medular",
      note: "Estratifica o potencial de consolidação e orienta a necessidade de enxertia. Aplica-se sobretudo às zonas 2 e 3.",
      types: [
        {
          code: "Tipo I",
          label: "Aguda",
          description:
            "Linha de fratura nítida sem alargamento, sem esclerose intramedular e sem reação periosteal. Melhor prognóstico de consolidação; pode responder ao tratamento não operatório em não atletas.",
          figureId: "fratura-quinto-metatarso:torg",
          figureVariant: "I",
        },
        {
          code: "Tipo II",
          label: "Retardo de consolidação",
          description:
            "Alargamento da linha de fratura, reação periosteal e esclerose intramedular parcial — indica estresse prévio. Menor potencial de consolidação sem fixação.",
          figureId: "fratura-quinto-metatarso:torg",
          figureVariant: "II",
        },
        {
          code: "Tipo III",
          label: "Pseudartrose estabelecida",
          description:
            "Obliteração do canal medular por esclerose, com gap de reabsorção. Requer fixação com curetagem/enxertia óssea.",
          figureId: "fratura-quinto-metatarso:torg",
          figureVariant: "III",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Fratura de Jones (zona 2) ou diafisária (zona 3) em atleta ou indivíduo de alta demanda — parafuso intramedular acelera consolidação e retorno esportivo.",
      "Torg II/III (retardo de consolidação ou pseudartrose) — fixação com ou sem enxertia óssea.",
      "Refratura após tratamento prévio.",
      "Falha do tratamento conservador em zona 2/3 (dor persistente, ausência de consolidação).",
      "Avulsão de zona 1 com grande fragmento intra-articular desviado (>2 mm de degrau) ou diástase da tuberosidade — indicação relativa e infrequente.",
    ],
    nonOperative: [
      "Avulsão da tuberosidade (zona 1) — regra geral, mesmo cominutiva/intra-articular.",
      "Fratura de Jones aguda (Torg I) em paciente sedentário/baixa demanda que aceita imobilização prolongada e risco de retardo.",
      "Fratura por estresse incipiente sem esclerose em não atleta, com descarga rigorosa.",
    ],
    decisionNotes:
      "O ponto de decisão é a intersecção zona × demanda funcional. Zona 1: funcional para praticamente todos. Zonas 2 e 3: no atleta, o parafuso intramedular é o padrão pela redução do tempo até consolidação, maior taxa de união e retorno esportivo mais rápido e previsível; no não atleta, a bota/gesso sem carga é opção válida, aceitando maior tempo e risco de retardo/pseudartrose. A classificação de Torg refina a decisão: Torg II/III favorecem fortemente a cirurgia com atenção à biologia (enxertia). Sempre discutir refratura, especialmente com retorno precoce ao impacto.",
  },

  approaches: [
    {
      id: "percutaneo-high-inside",
      name: "Acesso percutâneo 'high and inside'",
      indication: "Fixação intramedular da fratura de Jones/estresse (zonas 2 e 3).",
      interval:
        "Incisão longitudinal de ~1,5 cm proximal e dorsal à tuberosidade; ponto de entrada 'alto e medial' (high and inside) para alinhar o parafuso ao eixo do canal medular e evitar perfuração da cortical lateral.",
      atRisk: [
        "Ramo dorsolateral do nervo sural",
        "Tendão fibular curto (afastar, não transfixar)",
        "Cortical lateral (risco de desvio/penetração se o ponto de entrada for baixo/lateral)",
      ],
      figureId: "fratura-quinto-metatarso:acesso",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Posicionamento, ponto de entrada e fio guia",
      detail:
        "Paciente em decúbito dorsal com coxim ipsilateral; fluoroscopia disponível. Localiza-se o ponto de entrada 'high and inside' na tuberosidade e introduz-se o fio guia no eixo medular, confirmando o trajeto em pelo menos dois planos (AP e oblíqua) para garantir que o fio permaneça intramedular e cruze o foco.",
      figureId: "fratura-quinto-metatarso:step-1",
      tips: [
        "A curvatura do 5º metatarso é traiçoeira: um ponto de entrada baixo faz o parafuso perfurar a cortical lateral.",
        "Confirme o fio em AP e oblíqua antes de fresar.",
      ],
      pitfalls: [
        "Ponto de entrada lateral/plantar leva a desvio e penetração cortical.",
        "Fio curto que não cruza o foco resulta em fixação inadequada.",
      ],
    },
    {
      n: 2,
      title: "Fresagem e dimensionamento do parafuso",
      detail:
        "Sobre o fio guia, fresa-se o canal e mede-se o comprimento. Escolhe-se o parafuso de maior diâmetro que o istmo diafisário comporte (tipicamente 4,5–5,5 mm ou maior em atletas), para maximizar rigidez e resistência à refratura. Rosca parcial permite compressão do foco.",
      figureId: "fratura-quinto-metatarso:step-2",
      tips: [
        "Parafuso maior = maior rigidez e menor refratura; subdimensionar é erro clássico.",
        "Comprimento adequado: rosca inteiramente distal ao foco para compressão, sem impactar a curvatura distal.",
      ],
      pitfalls: [
        "Parafuso muito longo endireita o osso curvo e distrai o foco ou perfura a cortical distal.",
        "Parafuso fino não previne refratura em atleta de impacto.",
      ],
    },
    {
      n: 3,
      title: "Inserção do parafuso e compressão",
      detail:
        "Insere-se o parafuso canulado de rosca parcial sobre o fio, obtendo compressão interfragmentar à medida que a rosca ultrapassa o foco. Confirma-se a redução, o comprimento e a ausência de distração/gap sob fluoroscopia. Considera-se augmentação biológica (aspirado de medula óssea, enxerto) em Torg II/III, refratura ou pseudartrose.",
      figureId: "fratura-quinto-metatarso:step-3",
      tips: [
        "A cabeça do parafuso deve enterrar na tuberosidade para evitar irritação de partes moles.",
        "Em cenário de alto risco (pseudartrose, refratura), associe enxertia/biologia.",
      ],
      pitfalls: [
        "Distração do foco durante o aperto compromete a consolidação.",
        "Cabeça proeminente causa irritação sintomática e eventual remoção.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Bota imobilizadora removível no pós-operatório imediato. Em tratamento conservador de zona 2/3, bota ou gesso curto sem carga por 6–8 semanas.",
    weightBearing:
      "Após fixação, protocolos variam do descarga inicial de 2 semanas ao apoio conforme tolerado precoce em bota; em séries de atletas de elite, carga conforme tolerado e retorno guiado por sintomas e evidência radiográfica de consolidação. Conservador: sem carga rigorosa até sinais de consolidação.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Descarga a apoio protegido em bota (protocolo-dependente)",
        focus: "Controle do edema, cuidados da ferida, mobilidade do tornozelo/dedos.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Progressão do apoio em bota conforme tolerado",
        focus: "Fortalecimento progressivo, propriocepção, transição para calçado com palmilha de suporte do arco lateral.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Carga total; retorno gradual ao impacto guiado por consolidação",
        focus: "Corrida progressiva, gestos esportivos, retorno ao esporte (~9–10 semanas na média cirúrgica; casos selecionados retornam antes).",
      },
    ],
    followup:
      "Radiografias seriadas para documentar consolidação antes da liberação para impacto. Órteses com suporte do arco lateral e, em contextos de alto rendimento, estimulação óssea podem ser empregadas. A remoção rotineira do parafuso não é recomendada — a refratura após remoção precoce (mesmo com foco consolidado) é descrita.",
  },

  complications: [
    {
      name: "Retardo de consolidação",
      detail:
        "Frequente nas zonas 2 e 3 pela hipovascularização do watershed; mais provável no tratamento não operatório.",
      prevention:
        "Fixação intramedular em atleta/alta demanda; descarga rigorosa quando conservador; considerar biologia em Torg II.",
    },
    {
      name: "Pseudartrose (não união)",
      detail:
        "Falência de consolidação, associada a esclerose medular (Torg III). Requer revisão com curetagem/enxertia.",
      prevention: "Fixação precoce nas fraturas de risco; enxertia óssea nas formas escleróticas.",
    },
    {
      name: "Refratura",
      detail:
        "Complicação-chave em atletas de impacto (~10%), sobretudo com parafuso subdimensionado ou retorno precoce ao esporte, e após remoção de material.",
      prevention:
        "Parafuso de maior diâmetro possível; retorno guiado por consolidação radiográfica; evitar remoção rotineira do implante.",
    },
    {
      name: "Irritação sintomática do implante",
      detail:
        "Proeminência da cabeça do parafuso na tuberosidade causando dor no calçado.",
      prevention: "Enterrar a cabeça na cortical da tuberosidade; ponto de entrada adequado.",
    },
    {
      name: "Lesão do nervo sural / ramo dorsolateral",
      detail: "Parestesia/dor no bordo lateral do pé por dano ao ramo cutâneo no acesso.",
      prevention: "Dissecção romba e afastamento cuidadoso; incisão no ponto de entrada correto.",
    },
    {
      name: "Penetração/desvio cortical",
      detail:
        "Parafuso perfura a cortical lateral por ponto de entrada baixo ou por endireitamento do osso curvo com parafuso longo.",
      prevention: "Ponto de entrada 'high and inside'; comprimento e diâmetro adequados; controle fluoroscópico em dois planos.",
    },
  ],

  evidence: [
    {
      id: "lehman-torg-1987",
      claim:
        "Descrição clássica das fraturas de Jones distais à tuberosidade e proposta de classificação (aguda, retardo, pseudartrose) com plano de tratamento.",
      takeaway:
        "Fundou a distinção entre avulsão da tuberosidade e fratura da diáfise proximal, recomendando fixação intramedular com parafuso e enxertia para atletas com retardo/pseudartrose.",
      level: "IV",
      studyType: "Série de casos / revisão clássica",
      era: "classico",
      citation: {
        authors: "Lehman RC, Torg JS, Pavlov H, DeLee JC",
        title: "Fractures of the base of the fifth metatarsal distal to the tuberosity: a review.",
        journal: "Foot & Ankle",
        year: 1987,
        pmid: "3817669",
        doi: "10.1177/107110078700700406",
      },
    },
    {
      id: "polzer-2012",
      claim:
        "Revisão sistemática de ensaios prospectivos reavaliando a classificação por zonas e as recomendações de tratamento.",
      takeaway:
        "Fraturas metafisárias (não além da articulação 4–5) consolidam com tratamento funcional independentemente de cominução/desvio; fraturas meta-diafisárias por estresse falham mais com gesso sem carga e beneficiam-se de parafuso intramedular precoce.",
      level: "I",
      studyType: "Revisão sistemática de ensaios prospectivos",
      era: "atual",
      citation: {
        authors: "Polzer H, Polzer S, Mutschler W, Prall WC",
        title:
          "Acute fractures to the proximal fifth metatarsal bone: development of classification and treatment recommendations based on the current evidence.",
        journal: "Injury",
        year: 2012,
        pmid: "22465516",
        doi: "10.1016/j.injury.2012.03.010",
      },
    },
    {
      id: "attia-2021",
      claim:
        "Meta-análise de 22 estudos (646 fraturas de Jones em atletas) comparando manejo operatório e não operatório quanto a retorno ao esporte e consolidação.",
      takeaway:
        "Retorno ao esporte de 98,8% com parafuso intramedular vs. 71,6% conservador; tempo até retorno 9,6 vs. 13,1 semanas e tempo até consolidação 8,2 vs. 13,7 semanas — favorecendo a fixação cirúrgica em atletas (refratura global ~10,2%).",
      level: "I",
      studyType: "Revisão sistemática e meta-análise",
      era: "atual",
      citation: {
        authors: "Attia AK, Taha T, Kong G, Alhammoud A, Mahmoud K, Myerson M",
        title:
          "Return to Play and Fracture Union After the Surgical Management of Jones Fractures in Athletes: A Systematic Review and Meta-analysis.",
        journal: "The American Journal of Sports Medicine",
        year: 2021,
        pmid: "33740393",
        doi: "10.1177/0363546521990020",
      },
    },
    {
      id: "watson-2020",
      claim:
        "Série de 22 anos de fixação intramedular de fraturas de Jones agudas em atletas universitários com retorno ao esporte guiado por sintomas.",
      takeaway:
        "Retorno ao esporte em média de 3,6 semanas (1,5–6) com carga conforme tolerada em bota no pós-operatório imediato, sem não-união/mal-união e com baixa taxa de complicações — retorno precoce pode ser seguro em casos selecionados.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors: "Watson S, Trammell A, Tanner S, Martin S, Bowman L",
        title:
          "Early Return to Play After Intramedullary Screw Fixation of Acute Jones Fractures in Collegiate Athletes: 22-Year Experience.",
        journal: "Orthopaedic Journal of Sports Medicine",
        year: 2020,
        pmid: "32426399",
        doi: "10.1177/2325967120912423",
      },
    },
    {
      id: "lareau-2015",
      claim:
        "Coorte de 25 jogadores da NFL com fixação de fratura de Jones aguda associada a augmentação biológica e reabilitação agressiva.",
      takeaway:
        "Retorno ao esporte de 100% (média de 8,7 semanas nos elegíveis à mesma temporada) com refratura de 12%; parafuso intramedular bem posicionado com biologia permite retorno rápido em atletas de elite.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors: "Lareau CR, Hsu AR, Anderson RB",
        title: "Return to Play in National Football League Players After Operative Jones Fracture Treatment.",
        journal: "Foot & Ankle International",
        year: 2015,
        pmid: "26353796",
        doi: "10.1177/1071100715603983",
      },
    },
  ],

  pearls: [
    "A pergunta não é 'operar ou não', mas 'qual zona e qual demanda': zona 1 é quase sempre funcional; zonas 2/3 no atleta pedem parafuso.",
    "Jones (zona 2) vive no watershed vascular — trate a biologia com o respeito que a anatomia exige.",
    "Use o maior parafuso que o istmo comporta: subdimensionar é a causa evitável mais comum de refratura.",
    "Ponto de entrada 'high and inside' alinha o parafuso ao canal e evita perfuração da cortical lateral do osso curvo.",
    "Retorno ao esporte deve ser guiado por consolidação radiográfica, não apenas pelo calendário — mesmo com séries que retornam cedo.",
    "Não remova o parafuso de rotina: refratura após remoção precoce está descrita mesmo com foco consolidado.",
  ],

  pitfalls: [
    "Confundir a fise apofisária normal do adolescente (longitudinal) com fratura (transversal).",
    "Imobilizar em gesso a avulsão de zona 1 — atrasa o retorno sem ganho de consolidação.",
    "Tratar uma fratura de estresse de zona 3 (Torg II/III) como se fosse aguda e conservável.",
    "Parafuso longo demais que endireita o osso curvo e distrai o foco ou perfura a cortical distal.",
    "Ponto de entrada baixo/lateral levando a desvio e penetração da cortical lateral.",
    "Liberar o atleta para impacto antes da consolidação radiográfica — risco de refratura.",
  ],

  figures: [
    {
      id: "fratura-quinto-metatarso:anatomia",
      caption: "Anatomia do 5º metatarso: tuberosidade, diáfise, cabeça e inserções (fibular curto, banda plantar lateral, fibular terceiro).",
      alt: "Desenho esquemático do quinto metatarso em vista lateral com as inserções tendíneas e a tuberosidade proximal.",
    },
    {
      id: "fratura-quinto-metatarso:vascular",
      caption: "Suprimento vascular e a zona de watershed hipovascular na junção metafisodiafisária (território da fratura de Jones).",
      alt: "Diagrama do aporte metafisário e nutrício diafisário com a área de watershed hachurada.",
    },
    {
      id: "fratura-quinto-metatarso:zonas",
      caption: "Zonas de Lawrence e Botte: Z1 avulsão da tuberosidade, Z2 Jones (junção metafisodiafisária), Z3 diafisária proximal por estresse.",
      alt: "Base do quinto metatarso dividida em três zonas com a linha de fratura destacada por zona.",
      variant: "2",
    },
    {
      id: "fratura-quinto-metatarso:torg",
      caption: "Classificação de Torg: tipo I aguda, tipo II retardo de consolidação, tipo III pseudartrose com esclerose medular.",
      alt: "Três estágios radiográficos da fratura por estresse do quinto metatarso segundo Torg.",
      variant: "I",
    },
    {
      id: "fratura-quinto-metatarso:acesso",
      caption: "Acesso percutâneo 'high and inside': ponto de entrada dorsomedial na tuberosidade alinhado ao eixo do canal medular.",
      alt: "Base do quinto metatarso com o ponto de entrada percutâneo e o trajeto do fio guia, e o nervo sural em risco.",
    },
    {
      id: "fratura-quinto-metatarso:step-1",
      caption: "Passo 1: fio guia intramedular cruzando o foco de Jones, confirmado em dois planos.",
      alt: "Fio guia introduzido no canal medular do quinto metatarso cruzando a linha de fratura.",
    },
    {
      id: "fratura-quinto-metatarso:step-2",
      caption: "Passo 2: fresagem do canal e escolha do maior diâmetro de parafuso que o istmo comporta.",
      alt: "Canal medular fresado com cota de comprimento do parafuso.",
    },
    {
      id: "fratura-quinto-metatarso:step-3",
      caption: "Passo 3: parafuso intramedular de rosca parcial cruzando o foco com compressão interfragmentar.",
      alt: "Parafuso intramedular posicionado no quinto metatarso com a rosca distal ao foco.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Lawrence & Botte — classificação por zonas da base do 5º metatarso",
      "Torg / Lehman — classificação das fraturas de Jones e por estresse",
      "Evidência primária verificada no PubMed (ver seção Evidência)",
    ],
    attribution:
      "Citações verificadas no PubMed. DOIs reais incluídos em cada evidência. Fonte bibliográfica: PubMed (https://pubmed.ncbi.nlm.nih.gov).",
  },
});
