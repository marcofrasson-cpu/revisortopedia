import { defineTopic } from "../../types/topic";

/* Fratura subtrocantérica do fêmur — região de alta carga biomecânica entre o
   pequeno trocânter e ~5 cm distais. Forças deformantes potentes tornam a
   redução (obtida ANTES de fresar) o passo que define o desfecho.
   Evidência recuperada do PubMed (DOIs citados). */
export const topic = defineTopic({
  id: "mi-femur-subtrocanterica",
  slug: "fratura-subtrocanteriana",
  regionId: "membro-inferior",
  bone: "Fêmur proximal",
  injury: "Fratura subtrocantérica",
  title: "Fratura subtrocantérica",
  subtitle:
    "Fratura da região entre o pequeno trocânter e ~5 cm distais — dominada por forças deformantes intensas e pela exigência de reduzir antes de fresar.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura subtrocantérica acomete a zona do fêmur entre a borda inferior do pequeno trocânter e um ponto cerca de 5 cm distal a ela — uma região de altíssima concentração de estresse, onde a cortical medial suporta grandes forças compressivas e a lateral, forças de tração. Isso explica tanto a energia habitualmente necessária para fraturá-la em jovens (trauma de alta energia) quanto o padrão de fragilidade em idosos e o subtipo atípico associado ao uso prolongado de bifosfonatos.\n\nO que torna essa fratura tecnicamente exigente são as forças deformantes que agem sobre o fragmento proximal: o iliopsoas (pequeno trocânter) o flexiona, o glúteo médio/mínimo (grande trocânter) o abduz e os rotadores curtos o rodam externamente; o fragmento distal, por sua vez, é aduzido e encurtado pelos adutores. O resultado é a clássica deformidade em flexão-abdução-rotação externa do proximal, que a haste intramedular, sozinha, NÃO corrige.\n\nO implante de escolha é a haste cefalomedular longa. A regra de ouro é obter a redução ANTES de fresar e passar a haste — por meios percutâneos (clamp, cerclagem, parafuso de bloqueio) ou por mini-abertura — porque a má-redução, sobretudo em varo e com falta de contato da cortical medial, é a principal causa de pseudartrose e falha do implante.",

  keyFacts: [
    { label: "Definição", value: "Peq. trocânter até ~5 cm distais" },
    { label: "Deformidade proximal", value: "Flexão + abdução + rotação externa" },
    { label: "Implante de escolha", value: "Haste cefalomedular longa" },
    { label: "Regra de ouro", value: "Reduzir ANTES de fresar" },
    { label: "Principal causa de falha", value: "Má-redução (varo / gap medial)" },
    { label: "Subtipo especial", value: "Atípica por bifosfonato" },
  ],

  anatomy: {
    text:
      "A região subtrocantérica vai da borda inferior do pequeno trocânter até cerca de 5 cm distais. É biomecanicamente crítica: a cortical medial (calcar) recebe forças compressivas elevadas e a cortical lateral, forças de tração — daí a alta taxa de falha quando o contato medial não é restabelecido.\n\nAs inserções musculares comandam a deformidade. Sobre o fragmento proximal: o iliopsoas insere-se no pequeno trocânter e produz FLEXÃO; o glúteo médio e mínimo inserem-se no grande trocânter e produzem ABDUÇÃO; os rotadores curtos produzem ROTAÇÃO EXTERNA. Sobre o fragmento distal, os adutores geram ADUÇÃO e encurtamento (varo), e o gastrocnêmio pode extendê-lo. Conhecer esse vetor é o que permite planejar a redução.\n\nO osso é predominantemente cortical, com menor vascularização periosteal e endosteal do que a metáfise trocantérica — outra razão para a consolidação mais lenta e a intolerância à má-redução. A fratura atípica ocorre tipicamente na cortical lateral, com espessamento/‘bico’ (beaking) periosteal, traço transverso e esporão medial quando completa.",
    figureIds: ["fratura-subtrocanteriana:anatomia"],
  },

  classification: [
    {
      id: "russell-taylor",
      name: "Russell–Taylor",
      basis: "Envolvimento do pequeno trocânter e da fossa piriforme (grande trocânter)",
      note: "Guia a escolha do ponto de entrada: o tipo II (extensão à fossa piriforme/grande trocânter) contraindica a entrada piriforme clássica. Selecione cada tipo para ver o padrão.",
      types: [
        {
          code: "IA",
          label: "Peq. troc. íntegro, fossa livre",
          description: "Traço abaixo do pequeno trocânter, sem extensão à fossa piriforme — permite entrada piriforme ou trocantérica.",
          figureId: "fratura-subtrocanteriana:russell-taylor",
          figureVariant: "IA",
        },
        {
          code: "IB",
          label: "Peq. troc. envolvido, fossa livre",
          description: "Traço acomete o pequeno trocânter, mas poupa a fossa piriforme — a ancoragem proximal na haste é mais desafiadora.",
          figureId: "fratura-subtrocanteriana:russell-taylor",
          figureVariant: "IB",
        },
        {
          code: "IIA",
          label: "Extensão à fossa, peq. troc. íntegro",
          description: "Traço estende-se ao grande trocânter/fossa piriforme com pequeno trocânter íntegro — entrada piriforme desaconselhada.",
          figureId: "fratura-subtrocanteriana:russell-taylor",
          figureVariant: "IIA",
        },
        {
          code: "IIB",
          label: "Extensão à fossa + peq. troc.",
          description: "Extensão à fossa piriforme com envolvimento do pequeno trocânter — padrão mais instável; entrada trocantérica e atenção redobrada à redução.",
          figureId: "fratura-subtrocanteriana:russell-taylor",
          figureVariant: "IIB",
        },
      ],
    },
    {
      id: "atipica",
      name: "Atípica × típica (ASBMR)",
      basis: "Morfologia e mecanismo (contexto de bifosfonato)",
      note: "Os critérios maiores da ASBMR distinguem a fratura atípica; sua identificação muda a conduta clínica (suspender bifosfonato, investigar bilateralidade, avaliar teriparatida).",
      types: [
        {
          code: "Atípica",
          label: "Transversa, bico lateral, esporão medial",
          description: "Traço transverso/oblíquo curto originado na cortical lateral, com espessamento periosteal (‘beaking’), esporão medial quando completa e sem/ mínima cominução; trauma mínimo, frequente dor prodrômica e bilateralidade.",
          figureId: "fratura-subtrocanteriana:atipica",
          figureVariant: "atipica",
        },
        {
          code: "Típica",
          label: "Oblíqua / cominutiva de alta energia",
          description: "Traço oblíquo ou cominutivo por trauma de maior energia, sem os marcadores corticais da atípica.",
          figureId: "fratura-subtrocanteriana:atipica",
          figureVariant: "tipica",
        },
      ],
    },
    {
      id: "seinsheimer",
      name: "Seinsheimer",
      basis: "Número de fragmentos e configuração do traço",
      types: [
        { code: "I", label: "Sem desvio", description: "Fratura não desviada ou desvio < 2 mm." },
        { code: "II", label: "Dois fragmentos", description: "Traço em dois fragmentos (transverso, espiral com peq. troc. no proximal ou no distal)." },
        { code: "III", label: "Três fragmentos", description: "Terceiro fragmento, tipicamente o pequeno trocânter ou uma borboleta lateral." },
        { code: "IV", label: "Cominutivo", description: "Quatro ou mais fragmentos — cominução extensa." },
        { code: "V", label: "Extensão intertrocantérica", description: "Qualquer padrão com extensão à região intertrocantérica/grande trocânter." },
      ],
    },
    {
      id: "ao-ota",
      name: "AO/OTA 32 (diáfise proximal)",
      basis: "Complexidade do traço diafisário proximal",
      types: [
        { code: "32-A", label: "Simples", description: "Traço simples (espiral, oblíquo ou transverso) com contato cortical após a redução." },
        { code: "32-B", label: "Em cunha", description: "Fragmento(s) em cunha, com contato entre os fragmentos principais após a redução." },
        { code: "32-C", label: "Complexa", description: "Cominutiva/segmentar, sem contato cortical entre os fragmentos principais — maior exigência de comprimento/alinhamento." },
      ],
    },
  ],

  indications: {
    operative: [
      "Praticamente todas as fraturas subtrocantéricas desviadas do adulto — a haste cefalomedular longa é o padrão",
      "Fratura atípica completa por bifosfonato (fixação profilática/definitiva com haste)",
      "Fratura atípica incompleta com dor e linha de fratura na cortical lateral que não melhora com medidas conservadoras",
      "Extensão intertrocantérica ou grande cominução exigindo ponte de todo o segmento instável",
      "Falha/pseudartrose de tratamento prévio (revisão, muitas vezes com correção da má-redução)",
    ],
    nonOperative: [
      "Excepcional — reservado a pacientes sem condições clínicas para cirurgia ou com prognóstico vital muito limitado",
      "Fratura atípica incompleta sem linha na cortical, com dor controlável e vigilância radiográfica (restrição de carga + revisão do bifosfonato)",
    ],
    decisionNotes:
      "A imensa maioria das fraturas subtrocantéricas é cirúrgica, com haste cefalomedular longa. A decisão técnica central não é ‘operar ou não’, e sim COMO reduzir: a haste é um implante intramedular que não corrige por si a deformidade em flexão-abdução-rotação externa do fragmento proximal. Reduzir antes de fresar/introduzir a haste — por clamp percutâneo, cerclagem, parafuso de bloqueio (poller) ou mini-abertura — é o que previne o varo e o gap medial. Na fratura atípica, além da fixação, é mandatório suspender o bifosfonato, corrigir cálcio/vitamina D, investigar o fêmur contralateral (dor prodrômica/linha de estresse) e considerar teriparatida como adjuvante, ciente de que a evidência é inconsistente.",
  },

  approaches: [
    {
      id: "trocanterico-cefalomedular",
      name: "Entrada trocantérica / percutânea (haste cefalomedular)",
      indication: "Acesso padrão para a haste cefalomedular longa; incisão pequena sobre o ápice do grande trocânter. Preferível a entrada trocantérica nos padrões com extensão à fossa piriforme (Russell–Taylor II).",
      interval: "Split do glúteo médio sobre o ápice do grande trocânter",
      atRisk: ["N. glúteo superior", "Abdutores (glúteo médio)"],
      figureId: "fratura-subtrocanteriana:acesso-entrada",
    },
    {
      id: "reducao-aberta-adjuvante",
      name: "Redução aberta/assistida (clamp, cerclagem)",
      indication: "Quando a redução fechada falha: mini-abertura para clamp de redução ou cerclagem, restabelecendo o contato da cortical medial antes de fresar.",
      interval: "Mini-incisão lateral direcionada ao foco da fratura",
      atRisk: ["Vascularização periosteal", "A. femoral profunda / perfurantes"],
      figureId: "fratura-subtrocanteriana:step-reducao",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Planejamento e posicionamento",
      detail:
        "Antecipe a deformidade: o fragmento proximal tende a flexão, abdução e rotação externa. Posicione em mesa de tração ou decúbito lateral e planeje como neutralizar esse vetor. Radiografe o fêmur inteiro e o lado contralateral (padrão atípico, bilateralidade) e defina o comprimento/diâmetro da haste.",
      figureId: "fratura-subtrocanteriana:anatomia",
      tips: [
        "Compare com o contralateral para restaurar comprimento e rotação.",
        "Suspeite de fratura atípica em traço transverso na cortical lateral com espessamento — investigue o outro fêmur.",
      ],
      pitfalls: ["Ignorar as forças deformantes leva a fresar/nailar sobre um proximal fletido e abduzido → varo."],
    },
    {
      n: 2,
      title: "Reduzir ANTES de fresar",
      detail:
        "Passo que define o desfecho. Obtenha a redução antes de introduzir a fresa e a haste: manobra fechada (tração, flexão/adução do proximal), e, se insuficiente, adjuvantes — clamp percutâneo, cerclagem, parafuso de bloqueio (poller) ou mini-abertura. O alvo é restaurar o contato da cortical medial e o alinhamento neutro (sem varo, sem procurvato).",
      figureId: "fratura-subtrocanteriana:step-reducao",
      tips: [
        "A haste é intramedular: ela segue a redução, não a cria.",
        "Cerclagem bem posicionada pode manter a redução sem prejudicar a consolidação quando aplicada com cuidado.",
      ],
      pitfalls: [
        "Fresar sobre fratura não reduzida ‘congela’ a má-redução.",
        "Varo e gap da cortical medial são os precursores da pseudartrose.",
      ],
    },
    {
      n: 3,
      title: "Ponto de entrada correto",
      detail:
        "Escolha o ponto de entrada conforme a haste e o padrão (Russell–Taylor): ápice do grande trocânter para hastes trocantéricas; fossa piriforme para hastes retas, evitada quando há extensão à fossa (tipo II). Um ponto de entrada lateral demais empurra o proximal em varo — confirme o fio-guia centrado no canal em AP e perfil.",
      figureId: "fratura-subtrocanteriana:step-entrada",
      tips: ["Cheque o fio-guia em duas incidências antes de fresar.", "Entrada correta é parte da redução, não um detalhe."],
      pitfalls: ["Entrada lateral → varo; entrada anterior → procurvato do segmento proximal."],
    },
    {
      n: 4,
      title: "Fresagem e passagem da haste longa",
      detail:
        "Com a redução mantida, frese progressivamente e passe a haste cefalomedular longa, que faz ponte sobre todo o segmento subtrocantérico instável e reduz o braço de alavanca sobre o implante. Confirme que a redução não se perdeu durante a passagem.",
      figureId: "fratura-subtrocanteriana:step-haste",
      tips: [
        "Haste longa distribui a carga e protege a diáfise distal.",
        "Reavalie o alinhamento sob fluoroscopia após passar a haste.",
      ],
      pitfalls: ["Perder a redução ao introduzir a haste anula todo o esforço prévio."],
    },
    {
      n: 5,
      title: "Parafuso cefálico e travamento distal",
      detail:
        "Insira o parafuso/lâmina cefálico na cabeça femoral com distância ápice-ápice (tip-apex) adequada e trave a haste distalmente. Cheque comprimento e rotação comparando com o lado contralateral antes de finalizar.",
      figureId: "fratura-subtrocanteriana:step-haste",
      tips: ["Tip-apex < 25 mm reduz o risco de cut-out.", "Confirme a rotação clinicamente e por fluoroscopia."],
      pitfalls: ["Parafuso cefálico alto/posterior aumenta o risco de cut-out.", "Deixar rotação/comprimento errados fixa a deformidade."],
    },
    {
      n: 6,
      title: "Conferência final — evitar a má-redução",
      detail:
        "Antes de encerrar, documente o alinhamento em AP e perfil: sem varo, sem procurvato, com contato da cortical medial. A má-redução (especialmente varo com gap medial) é a principal causa de falha mecânica e pseudartrose — corrija-a na mesa, não no seguimento.",
      figureId: "fratura-subtrocanteriana:step-ma-reducao",
      tips: ["Se a redução está em varo, refaça-a agora — a revisão tardia é muito mais custosa."],
      pitfalls: ["Aceitar varo/gap medial ‘pequeno’ subestima a carga cíclica sobre o implante."],
    },
  ],

  postop: {
    immobilization:
      "Sem imobilização rígida na fixação estável — mobilização precoce do quadril e do joelho. Órtese raramente necessária.",
    weightBearing:
      "Depende da estabilidade da montagem e da qualidade óssea: carga conforme tolerância costuma ser possível em construções estáveis, mas em padrões cominutivos/atípicos ou fixação limítrofe adota-se carga protegida até sinais de consolidação. A consolidação da subtrocantérica (osso cortical) é lenta e exige paciência.",
    rehab: [
      { window: "0–2 sem", weightBearing: "Conforme estabilidade (protegida a total)", focus: "Controle da dor, ADM de quadril/joelho, prevenção de TVP, transferências." },
      { window: "2–6 sem", weightBearing: "Progressão conforme o padrão da fratura", focus: "Fortalecimento de abdutores e quadríceps; marcha com apoio." },
      { window: "6–12 sem", weightBearing: "Aumentar carga com sinais radiográficos de consolidação", focus: "Marcha progressiva, propriocepção; vigiar consolidação da cortical medial." },
      { window: "> 12 sem", weightBearing: "Carga total quando consolidada", focus: "Retorno funcional; investigar pseudartrose se dor/ausência de consolidação persistirem." },
    ],
    followup:
      "Radiografias seriadas atentas à consolidação da cortical medial e a sinais de varo progressivo, cut-out ou quebra do implante. Na fratura atípica, acompanhar o fêmur contralateral, garantir suspensão do bifosfonato e otimização metabólica (cálcio/vitamina D), considerando teriparatida. A consolidação lenta é a regra — não confundir com pseudartrose precoce.",
  },

  complications: [
    { name: "Má-redução (varo / gap medial)", detail: "Alinhamento em varo e falta de contato da cortical medial concentram estresse no implante — a raiz da maioria das falhas.", prevention: "Reduzir antes de fresar; conferir alinhamento em AP e perfil na mesa." },
    { name: "Pseudartrose / retardo de consolidação", detail: "Frequente no osso cortical subtrocantérico, agravada por má-redução e por biologia comprometida (bifosfonato).", prevention: "Restaurar o contato da cortical medial; evitar desperiostização excessiva; otimização metabólica." },
    { name: "Falha do implante (quebra da haste/parafuso)", detail: "Consequência da carga cíclica sobre uma fratura não consolidada e mal alinhada.", prevention: "Boa redução + haste longa que faça ponte no segmento instável." },
    { name: "Cut-out do parafuso cefálico", detail: "Migração do parafuso pela cabeça femoral, mais provável com tip-apex elevado ou posição alta/posterior.", prevention: "Tip-apex < 25 mm; posição central-inferior do parafuso na cabeça." },
    { name: "Malrotação e discrepância de comprimento", detail: "Rotação/encurtamento incorretos por perda da referência contralateral.", prevention: "Comparar comprimento e rotação com o lado sadio antes de travar." },
    { name: "Fratura atípica contralateral", detail: "Bilateralidade é característica do padrão por bifosfonato.", prevention: "Radiografar/rastrear o fêmur oposto; tratar dor prodrômica e linhas de estresse." },
    { name: "Tromboembolismo venoso (TVP/TEP)", detail: "Risco elevado em fratura de fêmur proximal e imobilidade.", prevention: "Tromboprofilaxia e mobilização precoce." },
  ],

  evidence: [
    {
      id: "shane-2014",
      claim:
        "Segundo relatório da força-tarefa da ASBMR revisou a definição de caso da fratura femoral atípica: traço transverso na cortical lateral, reação periosteal (‘beaking’) como critério maior, mínima/nenhuma cominução e esporão medial; interpreta as AFF como fraturas de estresse/insuficiência com risco absoluto baixo, porém crescente com o uso prolongado de bifosfonato.",
      takeaway: "Define o que é ‘atípica’ e liga o padrão à supressão do remodelamento pelo bifosfonato — muda a conduta médica além da fixação.",
      level: "V",
      studyType: "Relatório de força-tarefa / revisão de especialistas (J Bone Miner Res)",
      era: "classico",
      citation: {
        authors: "Shane E, Burr D, Abrahamsen B, et al.",
        title:
          "Atypical subtrochanteric and diaphyseal femoral fractures: second report of a task force of the American Society for Bone and Mineral Research",
        journal: "J Bone Miner Res",
        year: 2014,
        pmid: "23712442",
        doi: "10.1002/jbmr.1998",
        url: "https://doi.org/10.1002/jbmr.1998",
      },
    },
    {
      id: "shane-2010",
      claim:
        "Primeiro relatório da força-tarefa da ASBMR estabeleceu a definição inicial da fratura femoral atípica (subtrocantérica/diafisária) e a plausibilidade biológica da associação com o uso prolongado de bifosfonatos, apesar de risco absoluto muito baixo.",
      takeaway: "Marco que introduziu a entidade ‘fratura atípica’ e a necessidade de reconhecê-la no subtrocantérico.",
      level: "V",
      studyType: "Relatório de força-tarefa / revisão de especialistas (J Bone Miner Res)",
      era: "classico",
      citation: {
        authors: "Shane E, Burr D, Ebeling PR, et al.",
        title:
          "Atypical subtrochanteric and diaphyseal femoral fractures: report of a task force of the American Society for Bone and Mineral Research",
        journal: "J Bone Miner Res",
        year: 2010,
        pmid: "20842676",
        doi: "10.1002/jbmr.253",
        url: "https://doi.org/10.1002/jbmr.253",
      },
    },
    {
      id: "mingo-robinet-2015",
      claim:
        "Série de 26 fraturas subtrocantéricas em idosos tratadas com redução assistida por clamp minimamente invasivo e haste cefalomedular, sem cerclagem: 92,3% com alinhamento varo/valgo aceitável, tip-apex < 25 mm em todos e consolidação em todos — os autores concluem que reduzir a fratura antes de nailar é mandatório para bons resultados.",
      takeaway: "Confirma na prática a regra de ouro: reduzir antes de passar a haste — o clamp assistido é seguro e reprodutível.",
      level: "IV",
      studyType: "Série de casos retrospectiva (Injury)",
      era: "atual",
      citation: {
        authors: "Mingo-Robinet J, Torres-Torres M, Moreno-Barrero M, et al.",
        title:
          "Minimally invasive clamp-assisted reduction and cephalomedullary nailing without cerclage cables for subtrochanteric femur fractures in the elderly: Surgical technique and results",
        journal: "Injury",
        year: 2015,
        pmid: "25712701",
        doi: "10.1016/j.injury.2015.01.019",
        url: "https://doi.org/10.1016/j.injury.2015.01.019",
      },
    },
    {
      id: "alonso-polo-2024",
      claim:
        "Coorte de 95 fraturas subtrocantéricas de fragilidade: a qualidade da redução foi o fator determinante das complicações mecânicas — 0% nas bem reduzidas, 35,5% nas com redução apenas aceitável e 53,3% nas mal reduzidas (p = 0,002); a redução anatômica é apontada como a chave para evitar falhas.",
      takeaway: "Quantifica o preço da má-redução: sem redução anatômica, mais de metade evolui com complicação mecânica.",
      level: "III",
      studyType: "Coorte retrospectiva comparativa (Arch Bone Jt Surg)",
      era: "atual",
      citation: {
        authors: "Alonso Polo MB, Peix C, Velasco P, et al.",
        title: "Subtrochanteric Fractures of The Femur: May a Short Nail Be a Reliable Option?",
        journal: "Arch Bone Jt Surg",
        year: 2024,
        pmid: "39850928",
        doi: "10.22038/ABJS.2024.67182.3194",
        url: "https://doi.org/10.22038/ABJS.2024.67182.3194",
      },
    },
    {
      id: "gibbons-2023",
      claim:
        "Coorte de 220 fraturas subtrocantéricas (25% atípicas): apesar de perfis demográficos distintos (atípicas predominantemente femininas e associadas a bifosfonato, OR 7,98), os desfechos foram semelhantes entre atípicas e típicas — sem diferença em pseudartrose, falha do implante ou tempo de consolidação; a redução anatômica em alinhamento lateral neutro foi obtida menos vezes nas atípicas.",
      takeaway: "Com técnica adequada (incluindo boa redução), atípicas e típicas têm desfechos comparáveis — a atípica é mais difícil de reduzir anatomicamente.",
      level: "III",
      studyType: "Coorte retrospectiva comparativa (JBJS Am)",
      era: "atual",
      citation: {
        authors: "Gibbons K, Merrell LA, Ganta A, Rivero S, Konda SR, Egol KA.",
        title: "Atypical Versus Typical Subtrochanteric Femoral Fractures: Disparate Patient Profiles, Similar Outcomes",
        journal: "J Bone Joint Surg Am",
        year: 2024,
        pmid: "37992181",
        doi: "10.2106/JBJS.23.00583",
        url: "https://doi.org/10.2106/JBJS.23.00583",
      },
    },
  ],

  pearls: [
    "Antecipe o vetor: o fragmento proximal vai a flexão + abdução + rotação externa; planeje a redução para neutralizá-lo.",
    "A haste é intramedular e segue a redução — ela não reduz a fratura sozinha.",
    "Reduza ANTES de fresar: clamp, cerclagem, parafuso de bloqueio (poller) ou mini-abertura.",
    "O alvo é o contato da cortical medial e o alinhamento neutro — sem varo, sem procurvato.",
    "Ponto de entrada lateral demais gera varo; confirme o fio-guia centrado em duas incidências.",
    "Use haste cefalomedular longa para pontar todo o segmento instável.",
    "Suspeite de atípica em traço transverso na cortical lateral com espessamento — rastreie o fêmur contralateral e revise o bifosfonato.",
    "Consolidação lenta é a regra no osso cortical subtrocantérico — não confunda com pseudartrose precoce.",
  ],

  pitfalls: [
    "Confiar que a haste corrigirá a deformidade do fragmento proximal.",
    "Fresar sobre fratura não reduzida, ‘congelando’ o varo e o gap medial.",
    "Ponto de entrada lateral (varo) ou anterior (procurvato).",
    "Aceitar má-redução ‘pequena’ — principal causa de pseudartrose e falha do implante.",
    "Tip-apex elevado ou parafuso cefálico alto/posterior → cut-out.",
    "Perder a referência de rotação/comprimento do lado contralateral.",
    "Não reconhecer a fratura atípica: manter o bifosfonato e ignorar o fêmur oposto.",
    "Tratar como fratura metafisária de consolidação rápida e liberar carga irrestrita cedo demais em montagem limítrofe.",
  ],

  figures: [
    { id: "fratura-subtrocanteriana:anatomia", caption: "Forças deformantes: flexão (iliopsoas), abdução (glúteo médio) e rotação externa do fragmento proximal; adução do distal.", alt: "Fêmur proximal com setas das forças musculares deformantes." },
    { id: "fratura-subtrocanteriana:russell-taylor", variant: "IA", caption: "Russell–Taylor IA — pequeno trocânter íntegro, fossa piriforme livre.", alt: "Fêmur proximal com traço subtrocantérico sem extensão à fossa." },
    { id: "fratura-subtrocanteriana:russell-taylor", variant: "IIB", caption: "Russell–Taylor IIB — extensão à fossa piriforme com pequeno trocânter envolvido.", alt: "Traço estendendo-se à fossa piriforme e ao pequeno trocânter." },
    { id: "fratura-subtrocanteriana:atipica", variant: "atipica", caption: "Fratura atípica — traço transverso na cortical lateral, bico periosteal e esporão medial.", alt: "Diáfise femoral com traço transverso e espessamento da cortical lateral." },
    { id: "fratura-subtrocanteriana:atipica", variant: "tipica", caption: "Fratura típica — traço oblíquo/cominutivo de maior energia.", alt: "Diáfise femoral com traço oblíquo e cominução." },
    { id: "fratura-subtrocanteriana:acesso-entrada", caption: "Pontos de entrada: ápice do grande trocânter (haste trocantérica) e fossa piriforme.", alt: "Fêmur proximal em AP com dois pontos de entrada marcados." },
    { id: "fratura-subtrocanteriana:step-reducao", caption: "Passo — reduzir ANTES de fresar: clamp percutâneo e cerclagem restaurando o contato medial.", alt: "Fratura reduzida com clamp e cerclagem antes da haste." },
    { id: "fratura-subtrocanteriana:step-entrada", caption: "Passo — ponto de entrada e fio-guia centrados no canal (entrada lateral gera varo).", alt: "Fio-guia centralizado no canal femoral." },
    { id: "fratura-subtrocanteriana:step-haste", caption: "Passo — haste cefalomedular longa com parafuso cefálico e travamento distal.", alt: "Fêmur com haste intramedular longa e parafuso cefálico." },
    { id: "fratura-subtrocanteriana:step-ma-reducao", caption: "Má-redução — varo e gap da cortical medial: precursores de pseudartrose e falha do implante.", alt: "Fratura em varo com gap medial e haste sob estresse." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Shane et al. (ASBMR, 2º relatório), J Bone Miner Res 2014",
      "Shane et al. (ASBMR, 1º relatório), J Bone Miner Res 2010",
      "Mingo-Robinet et al., Injury 2015",
      "Alonso Polo et al., Arch Bone Jt Surg 2024",
      "Gibbons et al., JBJS Am 2024",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados nesta seção.",
  },
});
