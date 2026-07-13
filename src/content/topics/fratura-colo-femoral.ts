import { defineTopic } from "../../types/topic";

/* Fratura do colo femoral — tópico de membro inferior.
   Escopo: Garden e Pauwels; jovem (redução urgente + fixação, risco de necrose)
   vs idoso (artroplastia — hemi vs total). Evidência: FAITH, HEALTH, timing.
   Todas as figuras são prefixadas por "fratura-colo-femoral:".
   Evidência verificada no PubMed (DOIs reais citados). */
export const topic = defineTopic({
  id: "mi-quadril-colo-femoral",
  slug: "fratura-colo-femoral",
  regionId: "membro-inferior",
  bone: "Quadril",
  injury: "Fratura do colo",
  title: "Fratura do colo femoral",
  subtitle:
    "Fratura intracapsular do fêmur proximal — a decisão que separa preservar a cabeça (jovem) de substituí-la (idoso).",
  laterality: null,
  status: "complete",

  overview:
    "A fratura do colo femoral é uma fratura intracapsular do fêmur proximal, situada entre a cabeça e a linha intertrocantérica. A localização intracapsular tem duas consequências que dominam toda a conduta: o suprimento vascular da cabeça é retrógrado e frágil (interrompido pela própria fratura, com risco de necrose avascular e pseudartrose), e o hematoma fica contido pela cápsula, elevando a pressão intra-articular.\n\nA epidemiologia é bimodal. No idoso osteoporótico, é uma fratura de fragilidade por trauma de baixa energia — cada vez mais frequente e associada a mortalidade elevada no primeiro ano. No jovem, resulta de trauma de alta energia e representa uma emergência de preservação articular.\n\nDuas classificações guiam a decisão: Garden (grau de desvio) e Pauwels (obliquidade do traço, ligada ao cisalhamento). A partir delas, o raciocínio bifurca-se: no jovem, redução anatômica urgente e fixação para salvar a cabeça; no idoso com fratura desviada, artroplastia (hemi ou total) que permite mobilização imediata e evita as altas taxas de reoperação da fixação.",

  keyFacts: [
    { label: "Localização", value: "Intracapsular — cabeça a linha intertrocantérica" },
    { label: "Risco vascular", value: "Necrose avascular e pseudartrose (suprimento retrógrado)" },
    { label: "Classificações", value: "Garden (desvio) · Pauwels (obliquidade)" },
    { label: "Jovem", value: "Redução urgente + fixação — preservar a cabeça" },
    { label: "Idoso desviada", value: "Artroplastia (hemi × total)" },
    { label: "Idoso não desviada", value: "Fixação in situ (parafusos ou FNS/DHS)" },
    { label: "Mortalidade", value: "Elevada no 1º ano na fratura de fragilidade" },
  ],

  anatomy: {
    text:
      "O colo femoral une a cabeça esférica à região trocantérica, com ângulo cervicodiafisário de cerca de 130° e anteversão de 10°–15°. É totalmente intracapsular e, ao contrário da região metafisária trocantérica, tem pouca cobertura periosteal — o que limita a consolidação e favorece a pseudartrose.\n\nO suprimento arterial é a chave do prognóstico. A artéria circunflexa femoral medial forma um anel extracapsular na base do colo e emite os vasos retinaculares ascendentes (sobretudo o feixe posterossuperior), que sobem pela superfície do colo por baixo da reflexão sinovial até penetrar a cabeça. A artéria do ligamento redondo contribui minimamente no adulto. Como esse fluxo é essencialmente retrógrado, uma fratura desviada rompe os vasos retinaculares e pode desvascularizar a cabeça — origem da necrose avascular.\n\nO tamponamento intracapsular pelo hematoma pode comprometer ainda mais a perfusão; por isso, alguns defendem a capsulotomia/aspiração, sobretudo no jovem. As trabéculas primárias de compressão, que se irradiam da cortical medial (calcar) para a cabeça, são a referência do índice de alinhamento de Garden.",
    figureIds: ["fratura-colo-femoral:anatomia"],
  },

  classification: [
    {
      id: "garden",
      name: "Classificação de Garden",
      basis: "Grau de desvio na radiografia AP (alinhamento das trabéculas)",
      note:
        "Descreve o desvio em quatro tipos. Na prática, o mais útil é o agrupamento binário: não desviadas (I–II) × desviadas (III–IV). Selecione um tipo para ver o padrão.",
      types: [
        {
          code: "I",
          label: "Incompleta / impactada em valgo",
          description:
            "Fratura incompleta ou impactada em valgo; a cabeça bascula em valgo e as trabéculas mediais se angulam para cima. Estável, mas o valgo excessivo pode indicar risco.",
          figureId: "fratura-colo-femoral:garden",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "Completa, sem desvio",
          description:
            "Traço completo através do colo, sem desvio; as trabéculas mantêm o alinhamento normal com o acetábulo. Estável.",
          figureId: "fratura-colo-femoral:garden",
          figureVariant: "II",
        },
        {
          code: "III",
          label: "Completa, desvio parcial (varo)",
          description:
            "Traço completo com desvio parcial em varo; as trabéculas da cabeça não se alinham com as do acetábulo. A cápsula e alguns retináculos ainda ligam os fragmentos.",
          figureId: "fratura-colo-femoral:garden",
          figureVariant: "III",
        },
        {
          code: "IV",
          label: "Completa, desvio total",
          description:
            "Desvio completo; a cabeça se solta e reassume posição neutra no acetábulo, de modo que suas trabéculas voltam a ficar paralelas às acetabulares. Maior risco de necrose.",
          figureId: "fratura-colo-femoral:garden",
          figureVariant: "IV",
        },
      ],
    },
    {
      id: "pauwels",
      name: "Classificação de Pauwels",
      basis: "Ângulo do traço de fratura em relação à horizontal (biomecânica)",
      note:
        "Quanto mais vertical o traço, maior a componente de cisalhamento e a tendência a varo/pseudartrose — relevante sobretudo no jovem. Selecione um tipo.",
      types: [
        {
          code: "1",
          label: "< 30°",
          description:
            "Traço mais horizontal; predominam forças de compressão que favorecem a consolidação. Menor tendência a falha.",
          figureId: "fratura-colo-femoral:pauwels",
          figureVariant: "1",
        },
        {
          code: "2",
          label: "30–50°",
          description:
            "Obliquidade intermediária, com forças mistas de compressão e cisalhamento.",
          figureId: "fratura-colo-femoral:pauwels",
          figureVariant: "2",
        },
        {
          code: "3",
          label: "> 50–70° (vertical)",
          description:
            "Traço vertical; predomina o cisalhamento, com alto risco de varo, falha da fixação e pseudartrose. Favorece construtos de ângulo fixo (FNS/DHS) no jovem.",
          figureId: "fratura-colo-femoral:pauwels",
          figureVariant: "3",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Praticamente todas as fraturas do colo femoral têm indicação cirúrgica — a imobilidade prolongada do tratamento não-operatório é deletéria.",
      "Jovem (< 60 anos) com qualquer padrão: redução (fechada urgente ou aberta) + fixação interna para preservar a cabeça.",
      "Idoso com fratura NÃO desviada (Garden I–II): fixação in situ com parafusos canulados ou sistema de ângulo fixo (FNS/DHS).",
      "Idoso com fratura DESVIADA (Garden III–IV): artroplastia — hemiartroplastia ou artroplastia total do quadril (ATQ).",
      "ATQ preferível no idoso ativo, independente e sem demência, especialmente com artrose acetabular prévia.",
    ],
    nonOperative: [
      "Reservado a pacientes sem condições clínicas para qualquer anestesia/cirurgia, ou não deambuladores com dor mínima (paliativo).",
      "Raras fraturas verdadeiramente impactadas em valgo, estáveis, em pacientes de altíssimo risco — com mobilização e vigilância radiográfica de desvio.",
    ],
    decisionNotes:
      "A decisão gira em torno de idade fisiológica, desvio (Garden) e demanda funcional. No jovem, o objetivo é salvar a cabeça: redução anatômica urgente e fixação estável, aceitando o risco de necrose/pseudartrose em troca de preservar a articulação nativa. No idoso, o objetivo é a mobilização precoce com uma cirurgia definitiva: fratura não desviada → fixação; fratura desviada → artroplastia. Entre hemi e total, o ensaio HEALTH mostrou que a ATQ não reduziu significativamente as reoperações em 24 meses, com ganho funcional modesto e mais instabilidade/luxação — de modo que a hemiartroplastia permanece adequada para o idoso frágil e menos ativo, reservando-se a ATQ para o paciente ativo e independente.",
  },

  approaches: [
    {
      id: "smith-petersen",
      name: "Via anterior de Smith-Petersen",
      indication:
        "Redução aberta e fixação no jovem quando a redução fechada é inaceitável; permite visão direta do colo e capsulotomia para descompressão do hematoma.",
      interval:
        "Superficial: sartório (n. femoral) × tensor da fáscia lata (n. glúteo superior). Profundo: reto femoral × glúteo médio.",
      atRisk: [
        "Nervo cutâneo femoral lateral (parestesia da coxa)",
        "Ramo ascendente da a. circunflexa femoral lateral",
      ],
      figureId: "fratura-colo-femoral:via-smith-petersen",
    },
    {
      id: "watson-jones",
      name: "Via anterolateral de Watson-Jones",
      indication:
        "Acesso ao colo para redução aberta/fixação com incisão centrada no trocânter maior; alternativa útil quando se planeja instrumentação lateral.",
      interval: "Glúteo médio (n. glúteo superior) × tensor da fáscia lata (n. glúteo superior).",
      atRisk: [
        "Musculatura abdutora (glúteo médio) — evitar desinserção excessiva",
        "Ramos da a. circunflexa femoral lateral",
        "Nervo glúteo superior se a dissecção subir demais",
      ],
      figureId: "fratura-colo-femoral:via-watson-jones",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Redução (jovem: urgência)",
      detail:
        "No jovem, a redução anatômica é a variável mais importante e deve ser urgente. Tentar redução fechada (tração, leve abdução e rotação interna); confirmar em AP e perfil que o índice de alinhamento de Garden está entre ~155° e 180°. Se a redução fechada for inaceitável, converter para redução aberta por via anterior sem hesitar — uma redução ruim condena a fixação.",
      figureId: "fratura-colo-femoral:step-reducao",
      tips: [
        "Documente a qualidade da redução em duas incidências antes de fixar.",
        "Considere capsulotomia/descompressão do hematoma no jovem.",
      ],
      pitfalls: [
        "Aceitar varo residual ou báscula posterior → falha da fixação e pseudartrose.",
        "Redução repetida e forçada pode agravar o dano vascular.",
      ],
    },
    {
      n: 2,
      title: "Fixação com parafusos canulados",
      detail:
        "Para fraturas não desviadas ou de padrão mais horizontal (Pauwels 1–2), fixar com três parafusos canulados paralelos em triângulo invertido: um inferior apoiado na cortical do calcar, e dois superiores junto às corticais anterior e posterior. O paralelismo é essencial para permitir deslizamento e compressão dinâmica no foco.",
      figureId: "fratura-colo-femoral:step-parafusos",
      figureVariant: "parafusos",
      tips: [
        "Parafuso inferior rente ao calcar; posterior rente à cortical posterior.",
        "Rosca inteiramente além do traço para gerar compressão.",
      ],
      pitfalls: [
        "Parafusos não paralelos travam o deslizamento e impedem a compressão.",
        "Entrada abaixo do trocânter menor cria concentrador de tensão (fratura subtrocantérica).",
      ],
    },
    {
      n: 3,
      title: "Construto de ângulo fixo (traço vertical)",
      detail:
        "Para o traço vertical do jovem (Pauwels 3), em que o cisalhamento vence os parafusos isolados, preferir um sistema de ângulo fixo — Femoral Neck System (FNS) ou parafuso dinâmico do quadril (DHS) com parafuso antirrotatório. O apoio na placa lateral resiste ao varo. No ensaio FAITH, o DHS não reduziu reoperações no geral, mas subgrupos (tabagistas, fraturas de base de colo) tenderam a se beneficiar.",
      figureId: "fratura-colo-femoral:step-parafusos",
      figureVariant: "fns",
      tips: [
        "Adicionar parafuso antirrotatório superior ao DHS.",
        "Restaurar comprimento/altura do colo evita encurtamento e claudicação.",
      ],
      pitfalls: [
        "Confiar em parafusos isolados no Pauwels 3 → varo e falha.",
        "Fresagem excessiva compromete o estoque ósseo cefálico.",
      ],
    },
    {
      n: 4,
      title: "Artroplastia (idoso, fratura desviada)",
      detail:
        "No idoso com Garden III–IV, substituir em vez de fixar. Hemiartroplastia (usualmente bipolar, cimentada no osso osteoporótico) para o paciente frágil e menos ativo — rápida, estável e com baixa taxa de reoperação. ATQ para o idoso ativo, independente e cognitivamente hígido, ou com artrose acetabular prévia: melhora funcional modesta às custas de maior risco de luxação. A escolha da via influencia a estabilidade.",
      figureId: "fratura-colo-femoral:step-artroplastia",
      figureVariant: "hemi",
      tips: [
        "Preferir haste cimentada no osso osteoporótico (menos fratura periprotética).",
        "ATQ: atenção ao posicionamento dos componentes para reduzir luxação.",
      ],
      pitfalls: [
        "Indicar fixação em fratura desviada do idoso → alta taxa de reoperação.",
        "ATQ no paciente com demência/instabilidade → risco elevado de luxação.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Sem imobilização gessada. Após fixação estável ou artroplastia, o foco é a mobilização precoce, com profilaxia de tromboembolismo e cuidado geriátrico multidisciplinar (delirium, nutrição, ósteo-metabólico).",
    weightBearing:
      "Artroplastia: carga total imediata conforme tolerado. Fixação no idoso: carga conforme tolerada, pois restrições rígidas são impraticáveis e prejudiciais. Fixação no jovem: protocolo variável — muitos serviços liberam carga conforme tolerada; alguns restringem em padrões verticais instáveis.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Conforme tolerado (artroplastia/idoso)",
        focus:
          "Sentar fora do leito e deambular com apoio no 1º dia; prevenção de delirium, TVP e úlceras; precauções antiluxação após ATQ.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Progressiva",
        focus:
          "Marcha com andador/muletas, fortalecimento de abdutores e quadríceps, amplitude de movimento; controle radiográfico do implante/redução.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Total na maioria",
        focus:
          "Retirada progressiva de auxílio de marcha; no jovem fixado, confirmar sinais de consolidação antes de liberar carga plena em traços verticais.",
      },
      {
        window: "3–12 meses",
        weightBearing: "Total",
        focus:
          "Retorno funcional; vigilância de necrose avascular e pseudartrose no paciente fixado (dor inguinal, colapso, não consolidação).",
      },
    ],
    followup:
      "Seguimento clínico-radiográfico seriado. No paciente fixado, vigiar necrose avascular e pseudartrose por ao menos 1–2 anos (a necrose pode manifestar-se tardiamente). Iniciar/otimizar tratamento da osteoporose e prevenção de novas quedas no idoso. Reoperação frequente é a conversão para artroplastia após falha da fixação.",
  },

  complications: [
    {
      name: "Necrose avascular da cabeça femoral",
      detail:
        "Consequência da interrupção dos vasos retinaculares; mais frequente nas fraturas desviadas (Garden III–IV) e após redução inadequada. Pode surgir meses a anos depois, com colapso subcondral e dor.",
      prevention:
        "Redução anatômica precoce, manuseio delicado dos fragmentos e, no jovem, considerar descompressão do hematoma capsular.",
    },
    {
      name: "Pseudartrose (não consolidação)",
      detail:
        "Favorecida pela ausência de periósteo, pelo traço vertical (Pauwels 3) e por redução em varo. Manifesta-se como dor persistente e falha do implante.",
      prevention:
        "Redução anatômica e construto estável; ângulo fixo (FNS/DHS) nos traços verticais.",
    },
    {
      name: "Falha da fixação / cut-out e varo",
      detail:
        "Migração dos parafusos ou colapso em varo, sobretudo em osso osteoporótico ou traço vertical fixado apenas com parafusos.",
      prevention:
        "Escolher o implante conforme a biomecânica; evitar parafusos isolados no Pauwels 3.",
    },
    {
      name: "Luxação da artroplastia",
      detail:
        "Mais comum após ATQ do que após hemiartroplastia (no HEALTH, cerca de 4,7% × 2,4%). Fatores: via posterior, demência, mau posicionamento dos componentes.",
      prevention:
        "Seleção do paciente (hemi no frágil/demente), técnica cuidadosa e escolha da via.",
    },
    {
      name: "Encurtamento do colo / claudicação",
      detail:
        "Após deslizamento excessivo dos parafusos, com perda do braço de alavanca dos abdutores e sinal de Trendelenburg.",
      prevention:
        "Preservar o comprimento na fixação; considerar construtos que limitem o colapso.",
    },
    {
      name: "Mortalidade e complicações clínicas",
      detail:
        "A fratura de fragilidade tem alta mortalidade no 1º ano. Tromboembolismo, pneumonia, infecção e delirium são frequentes no idoso.",
      prevention:
        "Cirurgia sem atraso indevido, protocolo geriátrico ortogeriátrico, profilaxia de TEV e mobilização precoce.",
    },
  ],

  evidence: [
    {
      id: "faith",
      claim:
        "Em pacientes ≥ 50 anos operados por fixação, o parafuso dinâmico do quadril (DHS) não reduziu a reoperação em 24 meses frente aos parafusos canulados (20% × 22%; HR 0,83; IC 0,63–1,09).",
      takeaway:
        "A escolha do implante de fixação deve ser guiada pelo padrão da fratura e pelo paciente — subgrupos (tabagistas, fraturas de base de colo) podem se beneficiar do DHS; a necrose avascular foi mais comum com DHS.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico (FAITH)",
      era: "atual",
      citation: {
        authors: "FAITH Investigators",
        title:
          "Fracture fixation in the operative management of hip fractures (FAITH): an international, multicentre, randomised controlled trial.",
        journal: "Lancet",
        year: 2017,
        pmid: "28262269",
        doi: "10.1016/S0140-6736(17)30066-1",
      },
    },
    {
      id: "health",
      claim:
        "Em deambuladores independentes ≥ 50 anos com fratura desviada do colo, a artroplastia total não reduziu significativamente as reoperações em 24 meses frente à hemiartroplastia (7,9% × 8,3%; HR 0,95), com ganho funcional modesto e mais instabilidade/luxação (4,7% × 2,4%).",
      takeaway:
        "A hemiartroplastia permanece adequada para o idoso frágil e menos ativo; a ATQ oferece função ligeiramente melhor ao paciente ativo e independente, ao custo de maior risco de luxação.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico (HEALTH)",
      era: "atual",
      citation: {
        authors: "HEALTH Investigators (Bhandari M, et al.)",
        title: "Total Hip Arthroplasty or Hemiarthroplasty for Hip Fracture.",
        journal: "N Engl J Med",
        year: 2019,
        pmid: "31557429",
        doi: "10.1056/NEJMoa1906190",
      },
    },
    {
      id: "hip-attack",
      claim:
        "A cirurgia acelerada (meta de operar em até 6 h) não reduziu a mortalidade nem o composto de complicações maiores em 90 dias frente ao cuidado padrão (mortalidade 9% × 10%; HR 0,91).",
      takeaway:
        "Acelerar a cirurgia por si só não melhora a sobrevida; ainda assim, evitar atrasos evitáveis e otimizar o paciente rapidamente segue sendo boa prática.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico (HIP ATTACK)",
      era: "atual",
      citation: {
        authors: "HIP ATTACK Investigators",
        title:
          "Accelerated surgery versus standard care in hip fracture (HIP ATTACK): an international, randomised, controlled trial.",
        journal: "Lancet",
        year: 2020,
        pmid: "32050090",
        doi: "10.1016/S0140-6736(20)30058-1",
      },
    },
    {
      id: "lu-yao",
      claim:
        "Meta-análise clássica de 106 relatos: após fixação interna de fratura desviada, pseudartrose em ~33% e necrose avascular em ~16%, com reoperação em 20–36% — bem acima dos 6–18% da hemiartroplastia.",
      takeaway:
        "Documenta o alto ônus de reoperação da fixação na fratura desviada do idoso e sustenta a preferência histórica pela artroplastia nesse grupo.",
      level: "III",
      studyType: "Meta-análise de relatos observacionais",
      era: "classico",
      citation: {
        authors: "Lu-Yao GL, Keller RB, Littenberg B, Wennberg JE",
        title:
          "Outcomes after displaced fractures of the femoral neck. A meta-analysis of one hundred and six published reports.",
        journal: "J Bone Joint Surg Am",
        year: 1994,
        pmid: "8288658",
        doi: "10.2106/00004623-199401000-00003",
      },
    },
    {
      id: "young-fnf",
      claim:
        "Coorte multicêntrica de fraturas do colo em jovens (< 50 anos): as isoladas foram frequentemente verticais (Pauwels 3) e tiveram falha de tratamento em ~49%; implantes de ângulo fixo desempenharam melhor que múltiplos parafusos canulados.",
      takeaway:
        "No jovem, o padrão vertical é de alto risco de falha e favorece construtos de ângulo fixo, reforçando a importância da redução e da escolha do implante.",
      level: "III",
      studyType: "Estudo de coorte retrospectivo multicêntrico",
      era: "atual",
      citation: {
        authors:
          "Rechter GR, Collinge CA, Rechter AJ, Gardner MJ, Sagi HC, et al.",
        title:
          "Femoral Neck Fractures With Associated Ipsilateral Femoral Shaft Fractures in Young Adults <50 Years Old: A Multicenter Comparison of 80 Cases Versus Isolated Femoral Neck Fractures.",
        journal: "J Orthop Trauma",
        year: 2024,
        pmid: "39007656",
        doi: "10.1097/BOT.0000000000002826",
      },
    },
  ],

  pearls: [
    "Pense em dois pacientes distintos: o jovem (salvar a cabeça) e o idoso (mobilizar com uma cirurgia definitiva).",
    "Garden na prática é binário: I–II (não desviada) × III–IV (desviada).",
    "Pauwels alto = traço vertical = cisalhamento = pense em ângulo fixo (FNS/DHS) no jovem.",
    "No idoso desviado, hemi para o frágil; ATQ para o ativo, independente e sem demência (HEALTH).",
    "Redução anatômica é o fator modificável mais importante para o risco de necrose no jovem.",
    "Prefira haste cimentada na artroplastia do osso osteoporótico.",
  ],

  pitfalls: [
    "Fixar uma fratura desviada no idoso — condena a alta taxa de reoperação (Lu-Yao; HEALTH).",
    "Usar apenas parafusos canulados no Pauwels 3 do jovem — falha em varo.",
    "Aceitar redução em varo ou báscula posterior — pseudartrose e necrose.",
    "Iniciar entrada dos parafusos abaixo do trocânter menor — fratura subtrocantérica iatrogênica.",
    "Indicar ATQ ao paciente com demência/instabilidade — risco elevado de luxação.",
    "Assumir que operar em 6 h salva vidas por si só — o HIP ATTACK não confirmou benefício de mortalidade.",
  ],

  figures: [
    {
      id: "fratura-colo-femoral:anatomia",
      caption:
        "Fêmur proximal coronal com o suprimento retrógrado: anel da circunflexa femoral medial e vasos retinaculares ascendentes.",
      alt: "Desenho esquemático do fêmur proximal mostrando cabeça, colo, trocânteres e os vasos retinaculares que sobem pelo colo.",
    },
    {
      id: "fratura-colo-femoral:garden",
      caption:
        "Classificação de Garden (I–IV) pelo grau de desvio e alinhamento das trabéculas. Selecione um tipo.",
      alt: "Quatro padrões de desvio da fratura do colo femoral segundo Garden.",
      variant: "I",
    },
    {
      id: "fratura-colo-femoral:pauwels",
      caption:
        "Classificação de Pauwels pela obliquidade do traço em relação à horizontal; quanto mais vertical, maior o cisalhamento.",
      alt: "Traço de fratura do colo em três ângulos crescentes com a horizontal, com arco de medida do ângulo.",
      variant: "1",
    },
    {
      id: "fratura-colo-femoral:via-smith-petersen",
      caption:
        "Via anterior de Smith-Petersen: intervalo sartório × tensor da fáscia lata; nervo cutâneo femoral lateral em risco.",
      alt: "Esquema do intervalo internervoso anterior do quadril com a linha de incisão.",
    },
    {
      id: "fratura-colo-femoral:via-watson-jones",
      caption:
        "Via anterolateral de Watson-Jones: intervalo glúteo médio × tensor da fáscia lata, incisão sobre o trocânter maior.",
      alt: "Esquema do intervalo anterolateral do quadril com o trocânter maior de referência.",
    },
    {
      id: "fratura-colo-femoral:step-reducao",
      caption:
        "Redução anatômica urgente no jovem: manobra de tração e rotação interna e checagem do índice de alinhamento de Garden.",
      alt: "Fêmur proximal reduzido sobre o contorno fantasma do fragmento desviado.",
    },
    {
      id: "fratura-colo-femoral:step-parafusos",
      caption:
        "Fixação com três parafusos canulados paralelos em triângulo invertido, o inferior apoiado no calcar.",
      alt: "Três parafusos canulados atravessando o colo em configuração de triângulo invertido.",
      variant: "parafusos",
    },
    {
      id: "fratura-colo-femoral:step-artroplastia",
      caption:
        "Artroplastia no idoso com fratura desviada: hemiartroplastia bipolar ou artroplastia total. Selecione a variante.",
      alt: "Comparação esquemática entre hemiartroplastia e artroplastia total do quadril.",
      variant: "hemi",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "FAITH Investigators, Lancet 2017 (DOI 10.1016/S0140-6736(17)30066-1)",
      "HEALTH Investigators, N Engl J Med 2019 (DOI 10.1056/NEJMoa1906190)",
      "HIP ATTACK Investigators, Lancet 2020 (DOI 10.1016/S0140-6736(20)30058-1)",
      "Lu-Yao GL et al., J Bone Joint Surg Am 1994 (DOI 10.2106/00004623-199401000-00003)",
      "Rechter GR et al., J Orthop Trauma 2024 (DOI 10.1097/BOT.0000000000002826)",
    ],
    attribution:
      "Evidência recuperada do PubMed. Ver DOIs citados nesta seção.",
  },
});
