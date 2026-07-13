import { defineTopic } from "../../types/topic";

/* Fratura do fêmur distal (AO/OTA 33) — membro inferior.
   Placa bloqueada lateral vs haste retrógrada; deformidade em extensão/valgo
   por tração do gastrocnêmio; cominução metafisária e fixação em ponte;
   construções duplas (nail-plate / placa dupla).
   Evidência recuperada do PubMed (DOIs citados). */
export const topic = defineTopic({
  id: "mi-femur-distal-fratura",
  slug: "fratura-femur-distal",
  regionId: "membro-inferior",
  bone: "Fêmur distal",
  injury: "Fratura metafisária/articular",
  title: "Fratura do fêmur distal",
  subtitle:
    "Fratura supracondiliana/intercondiliana do fêmur (AO/OTA 33) — do controle da deformidade em extensão à escolha entre placa lateral e haste retrógrada.",
  laterality: null,
  status: "complete",

  overview:
    "As fraturas do fêmur distal têm distribuição bimodal: trauma de alta energia em jovens (acidentes de trânsito, com cominução e extensão articular) e trauma de baixa energia em idosos osteoporóticos — grupo em rápido crescimento e no qual muitas são periprotéticas ao redor de um componente femoral de artroplastia de joelho.\n\nO fragmento distal assume uma deformidade característica: o gastrocnêmio traciona os côndilos em EXTENSÃO (ápice posterior, recurvatum) enquanto a diáfise se desloca anteriormente; adutores e a anatomia condilar acrescentam tendência ao valgo/varo. Reconhecer e neutralizar esses vetores é a chave da redução — e a ponta posterior do fragmento aponta para a artéria poplítea.\n\nO objetivo cirúrgico é restaurar eixo, comprimento e rotação, reconstruir a superfície articular (redução anatômica dos côndilos) e estabilizar a metáfise, frequentemente cominuída, com fixação em ponte (estabilidade relativa, consolidação por calo). As duas construções dominantes são a placa bloqueada lateral e a haste intramedular retrógrada; nas cominuições, perda óssea medial e osso osteoporótico, ganham espaço as construções duplas (haste + placa ou placa dupla medial-lateral).",

  keyFacts: [
    { label: "Classificação", value: "AO/OTA 33 (A extra-articular · B parcial · C completa)" },
    { label: "Distribuição", value: "Bimodal — jovem (alta energia) e idoso osteoporótico" },
    { label: "Deformidade", value: "Extensão/ápice posterior (gastrocnêmio) + valgo/varo" },
    { label: "Risco vascular", value: "Artéria poplítea (fragmento distal posterior)" },
    { label: "Construções", value: "Placa bloqueada lateral × haste retrógrada" },
    { label: "Cominução metafisária", value: "Fixação em ponte (estabilidade relativa)" },
    { label: "Refratariedade", value: "Não-união ~10–20% na placa lateral isolada" },
  ],

  anatomy: {
    text:
      "O fêmur distal alarga-se em uma metáfise trapezoidal terminando em dois côndilos assimétricos, unidos anteriormente pela tróclea (sulco patelar) e separados posteriormente pela chanfradura intercondilar. Em corte axial, a face medial inclina-se cerca de 25° e a lateral cerca de 10° — geometria que precisa ser respeitada ao posicionar parafusos distais para não perfurar a articulação.\n\nO eixo anatômico do fêmur forma ~6–9° de valgo com o eixo mecânico; o ângulo articular distal lateral mecânico (mLDFA) normal é de ~85–90°. Esses parâmetros guiam a redução: erro rotacional e em valgo/varo é a principal armadilha, sobretudo com fixação minimamente invasiva sem exposição do foco.\n\nOs vetores deformantes são anatômicos e previsíveis: as duas cabeças do gastrocnêmio originam-se na face posterior dos côndilos e tracionam o fragmento distal em extensão (ápice posterior/recurvatum); o quadríceps e os isquiotibiais encurtam o membro; os adutores puxam a diáfise em varo. A artéria poplítea corre aderida à cápsula posterior, imediatamente atrás da metáfise distal — a razão pela qual a angulação em extensão do fragmento distal ameaça o pedículo e obriga a avaliação vascular.",
    figureIds: ["fratura-femur-distal:anatomia", "fratura-femur-distal:deformidade"],
  },

  classification: [
    {
      id: "ao-ota-33",
      name: "AO/OTA 33 (fêmur distal)",
      basis: "Envolvimento articular",
      note: "Selecione um tipo para ver o padrão do traço. A subdivisão A/B/C determina a estratégia: reconstrução articular anatômica nos tipos C antes da fixação metafisária.",
      types: [
        {
          code: "33-A",
          label: "Extra-articular",
          description:
            "Fratura metafisária que poupa a superfície articular. A1 simples, A2 com cunha, A3 cominuída. Candidata tanto a placa lateral quanto a haste retrógrada.",
          figureId: "fratura-femur-distal:ao-ota",
          figureVariant: "A",
        },
        {
          code: "33-B",
          label: "Articular parcial",
          description:
            "Parte da superfície articular fica em continuidade com a diáfise. B1/B2 sagitais (côndilo lateral/medial); B3 é a fratura de Hoffa (fragmento coronal posterior) — exige parafusos ântero-posteriores.",
          figureId: "fratura-femur-distal:ao-ota",
          figureVariant: "B",
        },
        {
          code: "33-C",
          label: "Articular completa",
          description:
            "Traço intercondilar dissocia a superfície articular da diáfise. C1/C2 com metáfise simples/cominuída; C3 com cominução articular. Reconstruir os côndilos primeiro, depois fixar o bloco à diáfise.",
          figureId: "fratura-femur-distal:ao-ota",
          figureVariant: "C",
        },
      ],
    },
    {
      id: "hoffa",
      name: "Fratura de Hoffa (33-B3)",
      basis: "Plano coronal do côndilo",
      types: [
        { code: "Lateral", label: "Côndilo lateral (mais comum)", description: "Fragmento coronal posterior do côndilo lateral; fácil de perder em incidências AP — pesquisar no perfil e na TC." },
        { code: "Medial", label: "Côndilo medial", description: "Menos frequente; fixação com parafusos de compressão ântero-posteriores, idealmente enterrados na cartilagem." },
      ],
    },
    {
      id: "periprotetica",
      name: "Periprotética (Su / Lewis-Rorabeck)",
      basis: "Relação com o componente femoral de ATJ",
      note: "Contexto cada vez mais comum no idoso. A estabilidade e o desenho do componente (com/sem caixa intercondilar) definem a viabilidade da haste retrógrada.",
      types: [
        { code: "Tipo I/II", label: "Componente estável", description: "Osso condilar suficiente e implante bem fixo — fixação (placa ou haste, se a geometria da caixa permitir)." },
        { code: "Tipo III", label: "Componente solto/insuficiente", description: "Afrouxamento ou estoque ósseo distal insuficiente — considerar revisão com componente de haste/megaprótese." },
      ],
    },
  ],

  indications: {
    operative: [
      "Praticamente todas as fraturas deslocadas do fêmur distal no adulto (instabilidade inerente e deformidade em extensão)",
      "Qualquer degrau/diastase articular significativo (tipos B e C) — redução anatômica da superfície",
      "Encurtamento, angulação em valgo/varo ou deformidade rotacional inaceitáveis",
      "Fratura periprotética deslocada com componente estável (fixação) ou instável (revisão)",
      "Fratura exposta, lesão vascular associada ou síndrome compartimental",
      "Idoso: fixação que permita mobilização e carga precoces reduz a morbimortalidade do decúbito",
    ],
    nonOperative: [
      "Fraturas verdadeiramente não deslocadas e estáveis, com paciente confiável e seguimento radiográfico estreito",
      "Paciente sem condições clínicas de anestesia/cirurgia ou não deambulador com fratura pouco sintomática (objetivo de conforto)",
    ],
    decisionNotes:
      "A escolha entre placa bloqueada lateral e haste retrógrada depende do padrão e do contexto. A haste retrógrada exige bloco articular distal suficiente e íntegro (ou reconstruído) para ancorar os parafusos e, na periprotética, geometria de caixa intercondilar compatível — oferece construção com carga compartilhada, biologicamente favorável, com menores taxas de infecção e não-união em algumas séries. A placa lateral é versátil (extra e intra-articular, periprotética, qualquer componente), mas a construção lateral isolada, se muito rígida, inibe o calo medial e associa-se a não-união metafisária (~10–20%). Quando há cominução, gap ou perda óssea medial, e em osso osteoporótico, as construções duplas (haste + placa lateral, ou placa dupla medial-lateral) aumentam a estabilidade e reduzem reoperações para promover consolidação. A decisão integra padrão AO/OTA, qualidade óssea, presença de artroplastia, biologia e a meta de carga precoce.",
  },

  approaches: [
    {
      id: "via-lateral",
      name: "Parapatelar lateral / swashbuckler (submuscular)",
      indication: "Placa lateral em fraturas extra-articulares e articulares; permite via minimamente invasiva com túnel submuscular e redução indireta da metáfise.",
      interval: "Entre o trato iliotibial e o vasto lateral, elevando o vasto do septo intermuscular.",
      atRisk: ["A. femoral perfurante (septo)", "Vasto lateral / suprimento muscular"],
      figureId: "fratura-femur-distal:via-lateral",
    },
    {
      id: "via-lateral-artrotomia",
      name: "Parapatelar lateral com artrotomia (bloco articular)",
      indication: "Tipos C: expõe a chanfradura intercondilar para redução anatômica direta dos côndilos antes da fixação metafisária.",
      interval: "Parapatelar lateral com eversão/lateralização da patela para visão articular.",
      atRisk: ["Superfície articular / cartilagem", "Aparelho extensor"],
      figureId: "fratura-femur-distal:via-lateral",
    },
    {
      id: "via-retrograda",
      name: "Portal intercondilar (haste retrógrada)",
      indication: "Introdução da haste retrógrada; miniartrotomia parapatelar medial ou transtendínea até o ápice do intercôndilo.",
      interval: "Parapatelar medial curta ou transligamentar (tendão patelar) até o ponto de entrada.",
      atRisk: ["Cartilagem articular / tróclea", "LCP na entrada muito posterior"],
      figureId: "fratura-femur-distal:via-retrograda",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Redução — neutralizar a deformidade em extensão",
      detail:
        "Restaurar comprimento, eixo e rotação antes de qualquer implante. Flexionar o joelho e colocar um coxim poplíteo relaxa o gastrocnêmio e reduz o ápice posterior; a tração longitudinal restabelece o comprimento. Confirmar eixo (mLDFA ~87°), rotação (perfil dos côndilos, sinal do pequeno trocânter) e ausência de valgo/varo à fluoroscopia.",
      figureId: "fratura-femur-distal:step-reducao",
      tips: [
        "Coxim sob o fragmento distal (ou um pino de Schanz como joystick) corrige o recurvatum.",
        "Compare rotação e eixo com o membro contralateral preparado no campo.",
      ],
      pitfalls: [
        "Ignorar o vetor do gastrocnêmio → fratura consolida em extensão/ápice posterior.",
        "Fixar em valgo/varo ou malrrotação na técnica minimamente invasiva sem checar o eixo.",
      ],
    },
    {
      n: 2,
      title: "Reconstrução articular (tipos B/C)",
      detail:
        "Nas fraturas intra-articulares, converter primeiro o problema articular em extra-articular: reduzir anatomicamente os côndilos e fixá-los com parafusos de compressão interfragmentária (respeitando o corredor futuro da haste ou da placa). Pesquisar e fixar fragmento de Hoffa com parafusos ântero-posteriores enterrados.",
      figureId: "fratura-femur-distal:ao-ota",
      figureVariant: "C",
      tips: [
        "Reduza o bloco articular sob visão direta (artrotomia) e provisione com fios de Kirschner.",
        "Posicione parafusos condilares fora do trajeto do implante metafisário.",
      ],
      pitfalls: [
        "Deixar degrau articular → artrose pós-traumática precoce.",
        "Perder a fratura de Hoffa coronal (invisível em AP) → falha de fixação.",
      ],
    },
    {
      n: 3,
      title: "Placa bloqueada lateral em ponte",
      detail:
        "Deslizar a placa lateral pré-contornada por túnel submuscular, alinhada ao eixo. Fixar as extremidades (côndilos com parafusos bloqueados convergentes; diáfise proximal) deixando a zona metafisária cominuída em ponte — estabilidade relativa que favorece o calo. Buscar comprimento de trabalho adequado (não encher todos os furos junto ao foco) e evitar rigidez excessiva.",
      figureId: "fratura-femur-distal:step-placa",
      tips: [
        "Comprimento de trabalho longo e menor densidade de parafusos junto ao foco reduzem a rigidez e estimulam o calo.",
        "Parafusos policortiais e de boa distribuição melhoram a ancoragem no osso osteoporótico.",
      ],
      pitfalls: [
        "Construção lateral muito rígida (curta, densa) → inibição do calo e não-união medial.",
        "Placa curta na diáfise → concentração de estresse e falha proximal.",
      ],
    },
    {
      n: 4,
      title: "Haste intramedular retrógrada",
      detail:
        "Alternativa de carga compartilhada: ponto de entrada central em AP e no ápice de Blumensaat no perfil, com fresagem cuidadosa. A haste mantém o eixo por efeito de férula intramedular; travar com múltiplos parafusos distais (idealmente ≥3, multiplanares) para controlar o curto bloco distal, e bloqueio proximal. Exige bloco condilar íntegro/reconstruído e, na periprotética, caixa intercondilar compatível.",
      figureId: "fratura-femur-distal:step-haste",
      tips: [
        "Entrada correta evita malalinhamento em valgo/flexão — confira no perfil o ápice de Blumensaat.",
        "Múltiplos parafusos distais e parafusos-poller ajudam a controlar o segmento curto.",
      ],
      pitfalls: [
        "Entrada anterior/posterior errada → deformidade em flexão/extensão.",
        "Bloco articular pequeno ou cominuído demais → fixação distal insuficiente.",
      ],
    },
    {
      n: 5,
      title: "Construção dupla (cominução / perda medial / osteoporose)",
      detail:
        "Quando a coluna medial está cominuída ou há gap/perda óssea e osso frágil, reforçar a construção: haste retrógrada complementada por placa lateral (nail-plate), ou placa dupla lateral + medial. Aumenta a rigidez e a estabilidade rotacional, reduz o colapso em varo e as reoperações para promover união, permitindo reabilitação e carga mais precoces.",
      figureId: "fratura-femur-distal:step-dupla",
      figureVariant: "nail-plate",
      tips: [
        "Placa medial curta sustenta a coluna medial cominuída e neutraliza o colapso em varo.",
        "Considerar enxerto ósseo no defeito metafisário medial de grande volume.",
      ],
      pitfalls: [
        "Dupla fixação rígida sem biologia → converter cominução em não-união atrófica.",
        "Dissecção medial extensa comprometendo o suprimento sanguíneo do fragmento.",
      ],
    },
    {
      n: 6,
      title: "Conferência final e fechamento",
      detail:
        "Fluoroscopia em AP e perfil de todo o fêmur: eixo, comprimento, rotação, redução articular e posição dos parafusos (fora da articulação, considerando a inclinação condilar). Testar estabilidade e amplitude do joelho. Fechar em camadas preservando o aparelho extensor.",
      figureId: "fratura-femur-distal:step-placa",
      tips: [
        "Incidência do túnel/oblíquas ajudam a excluir parafuso intra-articular.",
        "Documente pulsos distais e perfusão ao final.",
      ],
      pitfalls: ["Parafuso condilar intra-articular por ignorar a inclinação de 10–25° dos côndilos."],
    },
  ],

  postop: {
    immobilization:
      "Em geral sem imobilização rígida — mobilização precoce do joelho é objetivo primário para evitar rigidez em extensão. Órtese articulada apenas em reconstruções articulares frágeis ou reparo de partes moles.",
    weightBearing:
      "Historicamente restrita (toque/parcial por 6–12 semanas) com placa lateral isolada. Construções mais estáveis — haste retrógrada e, sobretudo, construções duplas — favorecem carga precoce; no idoso, a carga imediata conforme tolerância vem sendo perseguida para reduzir a morbimortalidade do decúbito. Individualizar conforme a estabilidade do montante e a qualidade óssea.",
    rehab: [
      { window: "0–2 sem", weightBearing: "Toque/carga conforme o montante", focus: "Controle da dor e do edema; ADM ativa-assistida precoce do joelho; ativação do quadríceps." },
      { window: "2–6 sem", weightBearing: "Progressão conforme construção", focus: "Ganho de flexão do joelho (meta ≥90°), marcha com auxílio; evitar rigidez em extensão." },
      { window: "6–12 sem", weightBearing: "Progressão para carga total (sinais de calo)", focus: "Fortalecimento progressivo, propriocepção e normalização da marcha." },
      { window: "> 12 sem", weightBearing: "Carga total sem auxílio", focus: "Força e resistência; retorno funcional guiado por consolidação radiográfica." },
    ],
    followup:
      "Radiografias seriadas (AP/perfil) buscando calo — a não-união se manifesta tardiamente, sem falha aguda do implante, com calo escasso. Vigiar alinhamento (colapso em varo), consolidação e amplitude do joelho. Falha de implante costuma ocorrer após 3–6 meses, sinalizando não-união subjacente.",
  },

  complications: [
    { name: "Não-união / retardo de consolidação", detail: "Especialmente metafisária medial na placa lateral rígida isolada (~10–20%); apresenta-se tarde, com calo pobre e sem falha aguda.", prevention: "Fixação em ponte com comprimento de trabalho adequado; evitar rigidez excessiva; construção dupla e biologia (enxerto) na cominução medial." },
    { name: "Falha do implante", detail: "Quebra da placa ou soltura de parafusos, geralmente após 3–6 meses — marcador de não-união subjacente.", prevention: "Otimizar a mecânica (comprimento de trabalho, densidade de parafusos) e a biologia; carga guiada pela estabilidade." },
    { name: "Malalinhamento (valgo/varo, extensão, rotação)", detail: "Frequente na técnica minimamente invasiva sem exposição do foco; deformidade em extensão se o gastrocnêmio não for neutralizado.", prevention: "Checar eixo, rotação e perfil à fluoroscopia; coxim/joystick para o recurvatum." },
    { name: "Rigidez do joelho / artrofibrose", detail: "Perda de flexão por imobilização prolongada e aderências do aparelho extensor.", prevention: "Fixação estável que permita ADM precoce; fisioterapia agressiva." },
    { name: "Artrose pós-traumática", detail: "Sequela de degrau/incongruência articular residual (tipos B/C).", prevention: "Redução anatômica da superfície articular; identificar e fixar a fratura de Hoffa." },
    { name: "Lesão vascular (artéria poplítea)", detail: "Fragmento distal em extensão desloca-se contra o pedículo poplíteo.", prevention: "Avaliação vascular no trauma de alta energia; reduzir a extensão precocemente; angiografia se índice tornozelo-braço alterado." },
    { name: "Infecção", detail: "Maior em fraturas expostas e em cirurgia extensa; algumas séries mostram menos infecção com haste que com placa.", prevention: "Manejo de partes moles, técnica minimamente invasiva quando possível, antibioticoprofilaxia." },
    { name: "Parafuso condilar intra-articular", detail: "Por não respeitar a inclinação de 10–25° dos côndilos ao mirar os parafusos distais.", prevention: "Fluoroscopia em incidências oblíquas/túnel; conhecer a geometria condilar." },
  ],

  evidence: [
    {
      id: "henderson-2011",
      claim:
        "Coorte de 82 pacientes / 86 fraturas com placa lateral bloqueada: 20% não consolidaram; a não-união apresentou-se tarde, sem falha de hardware, com menos calo — sugerindo INIBIÇÃO do calo (construção rígida demais) e não falha mecânica pura. Cominução associou-se a mais não-união; placas de titânio geraram mais calo que as de aço.",
      takeaway: "A placa lateral rígida isolada inibe o calo medial — a mecânica da fixação em ponte importa tanto quanto a estabilidade.",
      level: "III",
      studyType: "Coorte retrospectiva (Clin Orthop Relat Res)",
      era: "classico",
      citation: {
        authors: "Henderson CE, Lujan TJ, Kuhl LL, Bottlang M, Fitzpatrick DC, Marsh JL",
        title:
          "2010 mid-America Orthopaedic Association Physician in Training Award: healing complications are common after locked plating for distal femur fractures",
        journal: "Clin Orthop Relat Res",
        year: 2011,
        pmid: "21424831",
        doi: "10.1007/s11999-011-1870-6",
        url: "https://doi.org/10.1007/s11999-011-1870-6",
      },
    },
    {
      id: "aggarwal-2022",
      claim:
        "Revisão sistemática e meta-análise (16 estudos, 936 pacientes; inclui 6 RCTs) comparando haste retrógrada e placa bloqueada: significativamente menos NÃO-UNIÃO e INFECÇÃO com a haste; melhor amplitude de joelho com a placa; sem diferença em tempo de consolidação, complicações gerais, reoperação ou tempo cirúrgico.",
      takeaway: "Haste e placa são globalmente equivalentes; a haste tende a menos não-união/infecção, a placa a melhor ADM.",
      level: "I",
      studyType: "Revisão sistemática e meta-análise (J Orthop)",
      era: "atual",
      citation: {
        authors: "Aggarwal S, Rajnish RK, Kumar P, Srivastava A, Rathor K, Haq RU",
        title:
          "Comparison of outcomes of retrograde intramedullary nailing versus locking plate fixation in distal femur fractures: A Systematic Review and Meta-analysis of 936 patients in 16 studies",
        journal: "J Orthop",
        year: 2022,
        pmid: "36591439",
        doi: "10.1016/j.jor.2022.12.007",
        url: "https://doi.org/10.1016/j.jor.2022.12.007",
      },
    },
    {
      id: "neradi-2022",
      claim:
        "Meta-análise placa bloqueada vs haste retrógrada: tempo cirúrgico e sangramento favoreceram a haste (menores) de forma significativa; falha de implante, ADM, não-união e tempo de união tenderam a favorecer a haste, sem significância. União e complicações globalmente comparáveis.",
      takeaway: "As duas construções são comparáveis em consolidação; a haste reduz tempo cirúrgico e sangramento.",
      level: "I",
      studyType: "Revisão sistemática e meta-análise (Arch Bone Jt Surg)",
      era: "atual",
      citation: {
        authors: "Neradi D, Sodavarapu P, Jindal K, Kumar D, Kumar V, Goni V",
        title:
          "Locked Plating Versus Retrograde Intramedullary Nailing for Distal Femur Fractures: a Systematic Review and Meta-Analysis",
        journal: "Arch Bone Jt Surg",
        year: 2022,
        pmid: "35655740",
        doi: "10.22038/abjs.2021.53515.2656",
        url: "https://doi.org/10.22038/abjs.2021.53515.2656",
      },
    },
    {
      id: "baumann-2024",
      claim:
        "Meta-análise de estudos comparativos (5 estudos, 1.368 pacientes; 134 com construção nail-plate): a construção dupla haste+placa teve MENOS complicações totais (10,6% vs 16,0%; OR 0,31) e menos reoperações não planejadas (8,2% vs 14,8%; OR 0,42) que a construção única, sem diferença de tempo cirúrgico, sangramento ou internação.",
      takeaway: "A construção nail-plate reduz complicações e reoperações vs construção única — útil em padrões instáveis (evidência limitada por amostra).",
      level: "IV",
      studyType: "Revisão sistemática/meta-análise de estudos comparativos retrospectivos (Arch Orthop Trauma Surg)",
      era: "atual",
      citation: {
        authors: "Baumann AN, Uhler MA, Fiechter J, Anastasio AT, Walley KC, Coscia A, Hake ME",
        title:
          "Nail-plate combination constructs versus single traditional constructs for distal femur fractures: a systematic review and meta-analysis of comparative studies",
        journal: "Arch Orthop Trauma Surg",
        year: 2024,
        pmid: "39714731",
        doi: "10.1007/s00402-024-05723-6",
        url: "https://doi.org/10.1007/s00402-024-05723-6",
      },
    },
    {
      id: "lee-brodke-2023",
      claim:
        "Coorte multicêntrica de 1.111 fraturas AO/OTA 33A/C (10 centros nível I): 11% precisaram de reoperação para promover consolidação. Preditores independentes: IMC, fratura intra-articular, exposta tipo III, COMINUÇÃO MEDIAL e translação medial pós-operatória. O TIPO de construção (placa, haste, dupla) NÃO foi preditivo — porém com poucos casos nos grupos dupla/nail-plate.",
      takeaway: "Cominução e translação mediais predizem reoperação por não-união; restaurar a coluna medial importa mais que o implante escolhido.",
      level: "III",
      studyType: "Coorte retrospectiva multicêntrica (J Orthop Trauma)",
      era: "atual",
      citation: {
        authors: "Lee C, Brodke D, O'Hara N, Devana S, Hernandez A, Burke C, et al.",
        title: "Risk Factors for Reoperation to Promote Union in 1111 Distal Femur Fractures",
        journal: "J Orthop Trauma",
        year: 2023,
        pmid: "36379069",
        doi: "10.1097/BOT.0000000000002516",
        url: "https://doi.org/10.1097/BOT.0000000000002516",
      },
    },
  ],

  pearls: [
    "O fragmento distal vai para EXTENSÃO (gastrocnêmio) — flexione o joelho e coloque um coxim poplíteo para reduzir.",
    "A ponta posterior do fragmento distal aponta para a artéria poplítea: avalie a perfusão no trauma de alta energia.",
    "Nos tipos B/C, reduza e fixe os côndilos primeiro (converta em extra-articular), depois estabilize a metáfise.",
    "Procure a fratura de Hoffa coronal — invisível em AP; peça perfil e TC, fixe com parafusos ântero-posteriores.",
    "Fixação em ponte: comprimento de trabalho longo e menor densidade de parafusos junto ao foco estimulam o calo.",
    "Placa lateral rígida isolada inibe o calo medial → não-união ~10–20%; considere construção dupla na cominução/osso frágil.",
    "Haste retrógrada exige bloco condilar íntegro e, na periprotética, caixa intercondilar compatível — trave com ≥3 parafusos distais.",
    "Respeite a inclinação condilar (medial ~25°, lateral ~10°) para não deixar parafuso intra-articular.",
  ],

  pitfalls: [
    "Fixar em extensão/ápice posterior por não neutralizar o gastrocnêmio.",
    "Malalinhamento em valgo/varo ou rotação na técnica minimamente invasiva sem checar o eixo.",
    "Construção lateral curta e rígida demais → inibição do calo e não-união metafisária medial.",
    "Deixar degrau articular residual (tipos B/C) → artrose pós-traumática.",
    "Perder a fratura de Hoffa coronal → falha de fixação e degrau articular.",
    "Entrada errada da haste retrógrada → deformidade em flexão/extensão.",
    "Parafuso condilar intra-articular por ignorar a geometria dos côndilos.",
    "Imobilização prolongada → rigidez do joelho em extensão.",
  ],

  figures: [
    { id: "fratura-femur-distal:anatomia", caption: "Anatomia do fêmur distal (AP) — metáfise, côndilos e inserção do gastrocnêmio.", alt: "Vista anteroposterior do fêmur distal com côndilos e vetores do gastrocnêmio." },
    { id: "fratura-femur-distal:deformidade", caption: "Deformidade em extensão do fragmento distal (tração do gastrocnêmio) e risco poplíteo.", alt: "Vista sagital com fragmento distal rodado em extensão e artéria poplítea posterior." },
    { id: "fratura-femur-distal:ao-ota", variant: "A", caption: "AO/OTA 33-A — extra-articular (metafisária).", alt: "Fêmur distal com traço metafisário transverso poupando a articulação." },
    { id: "fratura-femur-distal:ao-ota", variant: "B", caption: "AO/OTA 33-B — articular parcial (um côndilo).", alt: "Fêmur distal com traço sagital separando um côndilo." },
    { id: "fratura-femur-distal:ao-ota", variant: "C", caption: "AO/OTA 33-C — articular completa (dissocia os côndilos da diáfise).", alt: "Fêmur distal com traço metafisário e intercondilar em Y." },
    { id: "fratura-femur-distal:via-lateral", caption: "Via parapatelar lateral / swashbuckler — acesso para placa lateral.", alt: "Incisão lateral e intervalo sob o vasto lateral no fêmur distal." },
    { id: "fratura-femur-distal:via-retrograda", caption: "Portal intercondilar para a haste retrógrada (ápice de Blumensaat).", alt: "Ponto de entrada central da haste retrógrada no intercôndilo." },
    { id: "fratura-femur-distal:step-reducao", caption: "Passo 1 — redução com coxim poplíteo e tração, neutralizando a extensão.", alt: "Coxim sob o joelho e tração longitudinal corrigindo o recurvatum." },
    { id: "fratura-femur-distal:step-placa", caption: "Passo 3 — placa bloqueada lateral em ponte sobre a cominução metafisária.", alt: "Placa lateral com parafusos nas extremidades poupando a zona cominuída." },
    { id: "fratura-femur-distal:step-haste", caption: "Passo 4 — haste retrógrada bloqueada com múltiplos parafusos distais.", alt: "Haste intramedular retrógrada com bloqueio distal multiplanar." },
    { id: "fratura-femur-distal:step-dupla", variant: "nail-plate", caption: "Passo 5 — construção dupla (haste + placa lateral) na cominução/perda medial.", alt: "Haste central complementada por placa lateral no fêmur distal." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Henderson et al., Clin Orthop Relat Res 2011",
      "Aggarwal et al., J Orthop 2022",
      "Neradi et al., Arch Bone Jt Surg 2022",
      "Baumann et al., Arch Orthop Trauma Surg 2024",
      "Lee, Brodke et al., J Orthop Trauma 2023",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados nesta seção.",
  },
});
