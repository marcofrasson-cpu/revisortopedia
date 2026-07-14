import { defineTopic } from "../../types/topic";

/* Fratura toracolombar por explosão (AOSpine A3/A4) — coluna.
   A lesão que ensina a diferença entre "osso quebrado na tomografia" e
   "coluna instável": morfologia + complexo ligamentar posterior + estado
   neurológico (TLICS). Sem déficit e com CLP íntegro, o conservador com
   órtese é equivalente — e, no seguimento muito longo, superior.
   Evidência recuperada do PubMed (PMIDs/DOIs citados). */
export const topic = defineTopic({
  id: "col-toracolombar-explosao",
  slug: "fratura-toracolombar-explosao",
  regionId: "coluna",
  bone: "Toracolombar",
  injury: "Fratura em explosão",
  title: "Fratura toracolombar por explosão",
  subtitle:
    "Explosão da junção toracolombar (AOSpine A3/A4) — do TLICS à decisão entre órtese e instrumentação, com o complexo ligamentar posterior no centro.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura por explosão é a falência do corpo vertebral sob CARGA AXIAL, com um traço que atravessa o muro posterior e projeta fragmentos para dentro do canal — o que a separa das fraturas por compressão simples, em que o muro posterior permanece íntegro. Corresponde a cerca de 45% das fraturas traumáticas da coluna toracolombar, e aproximadamente metade dos doentes chega neurologicamente íntegra.\n\nA junção toracolombar (T11–L2) concentra essas lesões por uma razão mecânica: é a fronteira entre uma coluna torácica rígida, contida pela caixa costal e pelo esterno, e uma coluna lombar móvel e lordótica. A transição abrupta de rigidez faz dessa zona o ponto de concentração de tensões — e é também onde termina a medula, no cone medular (habitualmente em L1), de modo que a mesma lesão pode produzir síndrome do cone, síndrome da cauda equina ou um quadro misto.\n\nO ponto de virada conceitual do tema é este: a decisão NÃO se toma pela altura perdida do corpo, pelo ângulo de cifose nem pela porcentagem de canal ocupado. Toma-se por três eixos — a morfologia da fratura, a integridade do COMPLEXO LIGAMENTAR POSTERIOR (a banda de tensão que contém a cifose) e o ESTADO NEUROLÓGICO. O TLICS operacionaliza exatamente esses três eixos em um escore: ≤ 3 aponta conservador, ≥ 5 aponta cirurgia, 4 é zona cinzenta. Uma explosão pura, com CLP íntegro e exame neurológico normal, soma 2 pontos — e vai para a órtese.\n\nEssa recomendação não é conveniência: é o que a evidência mostra. Ensaios randomizados e metanálise não encontraram vantagem funcional da cirurgia na explosão sem déficit; a cirurgia corrige melhor a cifose, mas às custas de mais complicações e custo. No seguimento de 16 a 22 anos do ensaio de Wood, o grupo conservador teve MENOS dor e MELHOR função — e a cifose residual maior não se traduziu em sintomas. O corolário prático: trate o doente e a coluna, não a imagem.",

  keyFacts: [
    { label: "Definição", value: "Falência axial do corpo COM traço no muro posterior" },
    { label: "Local", value: "Junção toracolombar T11–L2 (transição rígido → móvel)" },
    { label: "Frequência", value: "~45% das fraturas toracolombares; ~50% sem déficit" },
    { label: "Classificações", value: "AOSpine (A3 incompleta · A4 completa) · TLICS" },
    { label: "Decisão (TLICS)", value: "≤ 3 conservador · 4 indefinido · ≥ 5 cirúrgico" },
    { label: "Explosão sem déficit, CLP íntegro", value: "TLICS 2 → órtese, resultado equivalente" },
    { label: "Chave da instabilidade", value: "Complexo ligamentar posterior (RM/STIR)" },
    { label: "Cone medular", value: "Termina em L1 — cone, cauda equina ou misto" },
  ],

  anatomy: {
    text:
      "A vértebra toracolombar organiza-se, para fins de trauma, em torno de duas ideias: a COLUNA ANTERIOR (corpo vertebral e disco), que resiste à carga axial em compressão, e a BANDA DE TENSÃO POSTERIOR, que resiste à flexão e impede o colapso em cifose. O muro posterior do corpo é a parede anterior do canal — e é o seu envolvimento que define a explosão.\n\nO complexo ligamentar posterior (CLP) é a banda de tensão, e reúne quatro estruturas: ligamento supraespinhoso, ligamento interespinhoso, ligamento amarelo e as cápsulas facetárias. Enquanto o CLP está íntegro, ele funciona como uma corda que amarra os processos espinhosos e impede a progressão da cifose, mesmo com o corpo anterior colapsado — é exatamente por isso que uma explosão com CLP íntegro pode ser mobilizada com órtese sem colapsar. Quando o CLP rompe, a lesão deixa de ser tipo A (compressão) e passa a tipo B (falência da banda de tensão): a coluna perde o freio da flexão e a cifose progride. Os sinais são o alargamento da distância interespinhosa e a diástase facetária na TC, e o hipersinal em STIR na RM.\n\nA junção toracolombar (T11–L2) é o ponto de concentração de tensões porque a coluna torácica está enrijecida pela caixa costal e pelo esterno, enquanto a lombar é móvel e lordótica; a mudança abrupta de rigidez transfere a energia para a transição. T11 e T12 ainda têm costelas, mas flutuantes — não conferem a mesma estabilidade das costelas verdadeiras.\n\nO conteúdo neural muda de natureza nessa mesma altura. A medula termina no CONE MEDULAR, tipicamente na altura de L1 (variação T12–L2); abaixo dele, o canal contém apenas a CAUDA EQUINA, um feixe de raízes lombossacras. A consequência clínica é direta: uma lesão em T12–L1 pode lesar cone, raízes ou ambos, produzindo quadros mistos — disfunção esfincteriana e anestesia em sela (cone) sobrepostas a déficits radiculares assimétricos (cauda). O canal é, em termos relativos, mais estreito na região torácica e mais amplo na lombar, o que ajuda a explicar por que fragmentos volumosos em L2–L3 podem cursar sem déficit algum. O toque retal, o reflexo bulbocavernoso e a pesquisa de sensibilidade perianal são obrigatórios: são eles que separam o cone da cauda.",
    figureIds: [
      "fratura-toracolombar-explosao:anatomia",
      "fratura-toracolombar-explosao:mecanismo",
      "fratura-toracolombar-explosao:clp",
    ],
  },

  classification: [
    {
      id: "aospine-tl",
      name: "AOSpine toracolombar (morfologia)",
      basis: "Padrão morfológico da lesão",
      note:
        "Selecione um tipo para ver o traço. A hierarquia é A (compressão) → B (banda de tensão) → C (translação). A explosão é A3 (incompleta) ou A4 (completa): o que a define é o TRAÇO NO MURO POSTERIOR, não a altura perdida. Modificadores: N0–N4/NX (neurológico) e M1 (CLP indeterminado) / M2 (comorbidade que afeta a decisão).",
      types: [
        {
          code: "A0",
          label: "Sem lesão do corpo",
          description:
            "Fratura de processo transverso ou espinhoso, sem comprometimento do corpo vertebral e sem repercussão estrutural. Tratamento sintomático.",
          figureId: "fratura-toracolombar-explosao:aospine",
          figureVariant: "A0",
        },
        {
          code: "A1",
          label: "Cunha-impactação",
          description:
            "Compressão de UM platô, sem envolvimento do muro posterior. É a fratura por compressão clássica — NÃO é explosão. Estável, tratamento conservador.",
          figureId: "fratura-toracolombar-explosao:aospine",
          figureVariant: "A1",
        },
        {
          code: "A2",
          label: "Split / pinça",
          description:
            "Traço coronal atravessa AMBOS os platôs, mas o muro posterior é poupado. Atenção à não consolidação por interposição discal no traço.",
          figureId: "fratura-toracolombar-explosao:aospine",
          figureVariant: "A2",
        },
        {
          code: "A3",
          label: "Explosão incompleta",
          description:
            "UM platô comprometido MAIS o muro posterior. É a explosão incompleta. Fragmento retropulsado pode ocupar o canal. Conduta pelo TLICS: sem déficit e com CLP íntegro, conservador.",
          figureId: "fratura-toracolombar-explosao:aospine",
          figureVariant: "A3",
        },
        {
          code: "A4",
          label: "Explosão completa",
          description:
            "AMBOS os platôs MAIS o muro posterior. Maior perda de altura e maior retropulsão que a A3, porém a decisão continua sendo pelo CLP e pelo exame neurológico — não pelo grau de cominução.",
          figureId: "fratura-toracolombar-explosao:aospine",
          figureVariant: "A4",
        },
        {
          code: "B",
          label: "Falência da banda de tensão",
          description:
            "B1 transóssea (Chance óssea), B2 ruptura posterior ligamentar/óssea associada a lesão tipo A, B3 falência anterior por hiperextensão (típica da coluna anquilosada). Uma explosão A3/A4 com CLP roto é, na verdade, uma B2 — e é cirúrgica.",
          figureId: "fratura-toracolombar-explosao:aospine",
          figureVariant: "B",
        },
        {
          code: "C",
          label: "Translação / deslocamento",
          description:
            "Perda de alinhamento em qualquer plano: todos os elementos falharam. Alta associação com lesão neurológica. Sempre cirúrgica, com construto longo.",
          figureId: "fratura-toracolombar-explosao:aospine",
          figureVariant: "C",
        },
      ],
    },
    {
      id: "tlics",
      name: "TLICS (Thoracolumbar Injury Classification and Severity Score)",
      basis: "Morfologia + complexo ligamentar posterior + estado neurológico",
      note:
        "Escore soma os três componentes. ≤ 3 → conservador; 4 → zona cinzenta (decisão individualizada); ≥ 5 → cirúrgico. O grande mérito é dar peso explícito ao CLP e ao exame neurológico — os dois determinantes reais da instabilidade — em vez de à imagem do corpo vertebral. Nota: uma explosão isolada (2) com CLP íntegro (0) e sem déficit (0) soma 2 → conservador.",
      types: [
        {
          code: "Morfologia",
          label: "Compressão 1 · Explosão 2 · Translação/rotação 3 · Distração 4",
          description:
            "Pontua o padrão radiográfico. A explosão vale apenas 2 pontos — insuficiente, sozinha, para indicar cirurgia. Distração (4) e translação (3) pesam mais porque implicam falência circunferencial.",
          figureId: "fratura-toracolombar-explosao:tlics",
          figureVariant: "morfologia",
        },
        {
          code: "CLP",
          label: "Íntegro 0 · Suspeito 2 · Roto 3",
          description:
            "Complexo ligamentar posterior avaliado por TC (alargamento interespinhoso, diástase facetária) e RM/STIR. Passar de íntegro a roto acrescenta 3 pontos e, isoladamente, leva uma explosão de 2 para 5 — de conservador a cirúrgico.",
          figureId: "fratura-toracolombar-explosao:clp",
          figureVariant: "roto",
        },
        {
          code: "Neuro",
          label: "Íntegro 0 · Raiz 2 · Medular/cone completo 2 · Incompleto 3 · Cauda equina 3",
          description:
            "Lesão incompleta e cauda equina pontuam MAIS que a lesão completa: são as situações em que a descompressão ainda pode recuperar função. Uma explosão (2) com déficit incompleto (3) soma 5 → cirurgia.",
          figureId: "fratura-toracolombar-explosao:tlics",
          figureVariant: "neuro",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "TLICS ≥ 5 (a soma, não um componente isolado)",
      "Déficit neurológico incompleto ou progressivo com compressão documentada — a melhor indicação de descompressão",
      "Síndrome da cauda equina ou do cone medular",
      "Complexo ligamentar posterior roto (lesão passa a AOSpine B2) — banda de tensão incompetente",
      "AOSpine tipo C (translação/deslocamento) — sempre",
      "Lesão em coluna anquilosada (espondilite anquilosante, DISH): mesmo traços simples são altamente instáveis",
      "Explosões em níveis múltiplos ou contíguos com colapso progressivo",
      "Politraumatizado em que a estabilização permite mobilização precoce e cuidado pulmonar (indicação de contexto, não da fratura)",
      "Falha documentada do conservador: progressão da cifose com dor incapacitante ou déficit novo no seguimento",
    ],
    nonOperative: [
      "TLICS ≤ 3 — inclui a explosão A3/A4 SEM déficit e com CLP íntegro (escore 2)",
      "Exame neurológico normal e seriado, mantido",
      "Complexo ligamentar posterior íntegro confirmado (TC sem alargamento; RM/STIR sem hipersinal quando houver dúvida)",
      "Ausência de translação, rotação ou distração",
      "Doente capaz de mobilizar com órtese e de aderir ao seguimento radiográfico",
      "Porcentagem de canal ocupado, isoladamente, NÃO contraindica o conservador — o remodelamento do canal ocorre espontaneamente",
    ],
    decisionNotes:
      "A pergunta certa não é 'qual o tamanho da fratura?', e sim 'a banda de tensão posterior está competente e o doente está neurologicamente íntegro?'. Se as duas respostas forem sim, a explosão é uma lesão ESTÁVEL, ainda que a tomografia impressione — e o TLICS soma 2.\n\nTrês números seduzem e devem ser resistidos. (1) A CIFOSE regional: no seguimento de 16–22 anos de Wood, o grupo conservador terminou com mais cifose (19° vs 13°) e ainda assim com MENOS dor e melhor ODI — a cifose residual não previu sintomas. (2) A PERDA DE ALTURA do corpo: não consta de nenhum dos dois sistemas de decisão. (3) A % DE CANAL: fragmentos retropulsados remodelam espontaneamente — na série de Shen, a retropulsão caiu de 34% para 15% sem cirurgia — e não se correlacionam com o desfecho no doente íntegro. Nenhum dos três, isoladamente, indica cirurgia.\n\nO que a cirurgia entrega, e o que não entrega: entrega correção da cifose e alívio da dor MAIS PRECOCE (na série de Shen, vantagem até 3 meses na dor e até 6 meses no escore funcional, com equivalência a partir daí); não entrega melhor função a médio ou longo prazo, e cobra mais complicações, mais infecção, risco de falha do implante e custo várias vezes maior. O ponto de inflexão é o déficit neurológico e o CLP — não a estética radiográfica.\n\nA zona cinzenta é o TLICS = 4. Aqui decidem o contexto e o doente: idade, qualidade óssea, comorbidades, ocupação, aderência esperada, tolerância à órtese e preferência informada. Explicite a incerteza ao doente em vez de mascará-la com um número.\n\nExceções que mudam tudo: coluna ANQUILOSADA (o osso longo rígido transforma qualquer traço em fratura instável de osso longo — operar), OSTEOPOROSE grave (fixação frágil, considerar construto longo, cimentado), e o POLITRAUMA em que a estabilização é uma decisão de cuidado intensivo, não de coluna.",
  },

  approaches: [
    {
      id: "ortese",
      name: "Órtese toracolombossacra (TLSO) e mobilização precoce",
      indication:
        "TLICS ≤ 3: explosão sem déficit com CLP íntegro. É o tratamento de escolha, não o 'plano B'.",
      interval:
        "Sem intervalo cirúrgico. Órtese moldada em leve extensão, cobrindo de 1–2 níveis acima a 1–2 abaixo; lesões acima de T6 exigem extensão cervical; abaixo de L3, extensão coxal unilateral para controlar a flexão do quadril.",
      atRisk: [
        "Pele sob os pontos de pressão (esterno, cristas ilíacas) — inspecionar diariamente",
        "Restrição ventilatória se a órtese for apertada demais no tórax",
        "Descondicionamento e atrofia paravertebral com imobilização prolongada",
        "Íleo adinâmico e trombose venosa se houver repouso no leito prolongado",
      ],
      figureId: "fratura-toracolombar-explosao:clp",
    },
    {
      id: "posterior",
      name: "Via posterior com instrumentação pedicular",
      indication:
        "Padrão de eleição para a maioria das explosões cirúrgicas: A3/A4 com CLP roto, tipo B, tipo C e déficit neurológico.",
      interval:
        "Incisão mediana; intervalo entre os músculos paravertebrais (multífido e longuíssimo) e os processos espinhosos, com descolamento subperiosteal até as facetas e os processos transversos. Alternativa percutânea/minimamente invasiva (MIS) através do intervalo de Wiltse, entre multífido e longuíssimo, quando não há necessidade de descompressão aberta.",
      atRisk: [
        "Raiz nervosa e saco dural — parafuso com trajeto medial rompendo o muro medial do pedículo",
        "Ramo medial do ramo dorsal (denervação do multífido) na dissecção lateral extensa",
        "Aorta e veia cava — parafuso longo demais transgredindo o muro anterior do corpo",
        "Faceta do nível adjacente proximal — violação leva a degeneração do segmento adjacente",
      ],
      figureId: "fratura-toracolombar-explosao:instrumentacao",
    },
    {
      id: "descompressao",
      name: "Descompressão (indireta e direta)",
      indication:
        "Déficit neurológico com compressão documentada. Sem déficit, NÃO se descomprime — o canal remodela sozinho.",
      interval:
        "Descompressão INDIRETA primeiro: ligamentotaxia por distração e restauração da lordose sobre os parafusos, que traciona o ligamento longitudinal posterior e reduz o fragmento. Se insuficiente, descompressão DIRETA: transpedicular ou costotransversectomia (torácica) para empurrar o fragmento de volta ao corpo, ou via anterior (toracotomia/retroperitoneal) com corpectomia e substituição por dispositivo intersomático.",
      atRisk: [
        "Saco dural e cone medular na manipulação do fragmento retropulsado",
        "Raiz do nível na abordagem transpedicular",
        "Pleura e diafragma nas vias torácica e toracoabdominal",
        "Grandes vasos e ureter na via retroperitoneal",
        "Cadeia simpática lombar — ejaculação retrógrada na via anterior de L4–L5",
      ],
      figureId: "fratura-toracolombar-explosao:instrumentacao",
    },
    {
      id: "anterior",
      name: "Via anterior — corpectomia e reconstrução",
      indication:
        "Compressão anterior persistente com déficit não resolvida pela via posterior; cominução extrema do corpo; cirurgia de revisão por colapso anterior. Hoje é indicação de exceção.",
      interval:
        "Toracotomia (T6–T10), toracoabdominal com secção do diafragma (T11–L1) ou retroperitoneal (L2–L5). Corpectomia, dispositivo intersomático expansível ou enxerto estrutural, com placa anterolateral.",
      atRisk: [
        "Grandes vasos (aorta, veia cava, veias segmentares)",
        "Artéria de Adamkiewicz — habitualmente à esquerda, entre T9 e L2",
        "Diafragma, pleura e ducto torácico",
        "Ureter e cadeia simpática no acesso retroperitoneal",
      ],
      figureId: "fratura-toracolombar-explosao:instrumentacao",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Avaliação inicial — ATLS e exame neurológico completo",
      detail:
        "Fratura toracolombar é lesão de alta energia: siga o ATLS e afaste lesões associadas antes de olhar para a coluna. Documente o exame neurológico pelo padrão ASIA (motor, sensitivo, nível), incluindo OBRIGATORIAMENTE o toque retal, o tônus esfincteriano, a sensibilidade perianal e o reflexo bulbocavernoso — são eles que separam a síndrome do cone da cauda equina e que definem o choque medular. Palpe toda a linha dos processos espinhosos: dor localizada, degrau ou hiato palpável levantam a suspeita de CLP roto antes de qualquer imagem.",
      figureId: "fratura-toracolombar-explosao:conduta",
      tips: [
        "Fraturas não contíguas em outro nível da coluna ocorrem em cerca de 10–15% — imagine toda a coluna, não só o segmento sintomático",
        "Reflexo bulbocavernoso ausente = choque medular; o exame neurológico só é prognóstico após seu retorno",
        "Queda de altura com fratura de calcâneo bilateral: procure ativamente a explosão toracolombar",
      ],
      pitfalls: [
        "Aceitar exame neurológico 'grosseiramente normal' sem testar esfíncter e períneo — perde o cone e a cauda",
        "Deixar de repetir o exame: o déficit progressivo muda a conduta e só aparece se for procurado",
      ],
    },
    {
      n: 2,
      title: "Tomografia — definir a morfologia e o muro posterior",
      detail:
        "A TC com reconstruções sagital e coronal é o exame que classifica. Responda a três perguntas: (a) o muro posterior está comprometido? — é o que separa a compressão A1 da explosão A3/A4; (b) um ou ambos os platôs? — A3 versus A4; (c) há sinais indiretos de CLP roto? — alargamento da distância interespinhosa, diástase ou 'faceta nua', subluxação. Meça a cifose regional pelo Cobb (platô superior da vértebra acima ao platô inferior da vértebra abaixo) e registre a % de canal — mas para descrever a lesão e acompanhar, não para decidir.",
      figureId: "fratura-toracolombar-explosao:medidas",
      tips: [
        "O sagital reformatado é onde o traço do muro posterior aparece — o axial isolado engana",
        "Compare a distância interespinhosa com os níveis adjacentes: o alargamento é relativo, não absoluto",
        "Na coluna anquilosada, procure o traço transdiscal — pode ser sutil e é altamente instável",
      ],
      pitfalls: [
        "Chamar de explosão toda fratura com perda de altura: sem traço no muro posterior é A1, e é outra doença",
        "Deixar-se impressionar pela % de canal em doente íntegro — ela remodela e não indica cirurgia",
      ],
    },
    {
      n: 3,
      title: "Ressonância — quando o CLP está em dúvida",
      detail:
        "A RM entra em duas situações: déficit neurológico (avaliar medula, cone, hematoma epidural, hérnia traumática) e SUSPEITA de lesão do CLP não resolvida pela TC. A sequência-chave é o STIR sagital: o hipersinal no interespinhoso/supraespinhoso e o edema do ligamento amarelo e das cápsulas facetárias traduzem falência da banda de tensão. Esse achado reclassifica a lesão de A3/A4 para B2 e acrescenta 3 pontos ao TLICS — na prática, muda a conduta de órtese para cirurgia.",
      figureId: "fratura-toracolombar-explosao:clp",
      tips: [
        "O modificador M1 do AOSpine existe justamente para o CLP indeterminado — assuma a dúvida em vez de fingir certeza",
        "Hipersinal isolado e discreto pode ser contusão muscular; exija o conjunto (alargamento + STIR + morfologia)",
      ],
      pitfalls: [
        "Mandar todo mundo para a RM: no doente íntegro com TC inequivocamente normal para o CLP, ela raramente muda a conduta",
        "Confiar apenas na TC para excluir lesão ligamentar quando o exame clínico levanta suspeita",
      ],
    },
    {
      n: 4,
      title: "Classificar e pontuar — AOSpine e TLICS",
      detail:
        "Consolide os dados em duas linguagens. AOSpine: morfologia (A0–A4, B, C) + modificador neurológico (N0–N4/NX) + modificadores M1 (CLP indeterminado) e M2 (comorbidade). TLICS: morfologia + CLP + neurológico, somados. Aplique a regra: ≤ 3 conservador, ≥ 5 cirúrgico, 4 individualizado. Faça a soma explicitamente e por escrito no prontuário — é ela, e não a impressão da imagem, que sustenta a decisão.",
      figureId: "fratura-toracolombar-explosao:tlics",
      tips: [
        "Explosão (2) + CLP íntegro (0) + neuro normal (0) = 2 → conservador. Guarde essa conta",
        "Explosão (2) + CLP roto (3) = 5 → cirurgia. É o CLP que vira a chave",
        "Explosão (2) + déficit incompleto (3) = 5 → cirurgia com descompressão",
      ],
      pitfalls: [
        "Usar o TLICS como carimbo de uma decisão já tomada pela imagem",
        "Aplicar o escore sem reavaliar o doente: o componente neurológico é dinâmico",
      ],
    },
    {
      n: 5,
      title: "Conservador — órtese e mobilização precoce (TLICS ≤ 3)",
      detail:
        "Confeccione uma TLSO moldada em leve extensão, cobrindo 1–2 níveis acima e abaixo, e MOBILIZE. O repouso prolongado no leito é a armadilha histórica do tema: não protege a fratura e cobra íleo, trombose, pneumonia, úlcera e descondicionamento. Na série de Shen, os doentes foram autorizados a atividade no limite da dor já no dia da lesão, com bom resultado. Analgesia adequada, deambulação assistida, radiografias em ORTOSTATISMO com a órtese antes da alta — é o teste de estabilidade que importa — e repetidas em 2, 6 e 12 semanas.",
      figureId: "fratura-toracolombar-explosao:conduta",
      tips: [
        "Radiografia em pé é o exame que decide: cifose que progride ao carregar denuncia CLP incompetente que a TC deitada não mostrou",
        "Alguma progressão da cifose (~4–5°) é esperada e não significa falha — o que importa é dor e função",
        "Há evidência randomizada de que a órtese pode ser dispensável na explosão estável: mesma cifose e mesmos escores, com internação mais curta sem órtese",
      ],
      pitfalls: [
        "Prescrever repouso no leito prolongado — trata a radiografia e adoece o doente",
        "Trocar para cirurgia por progressão isolada da cifose em doente assintomático",
        "Não checar a radiografia em ortostatismo antes da alta",
      ],
    },
    {
      n: 6,
      title: "Cirúrgico — instrumentação posterior (TLICS ≥ 5)",
      detail:
        "Posicione em decúbito ventral sobre coxins que permitam a lordose (a redução começa no posicionamento). Via mediana ou MIS por Wiltse. Insira parafusos pediculares um nível acima e um abaixo (construto CURTO) — poupa segmentos móveis e é suficiente na maioria das explosões com osso de boa qualidade. Adicione parafusos NO NÍVEL da fratura quando os pedículos estão íntegros: eles melhoram a estabilidade do construto e reduzem a falha do implante e a perda de correção. Reserve o construto LONGO (2 acima / 2 abaixo) para cominução grave, osso osteoporótico, lesões tipo C e junção toracolombar com carga elevada. Reduza por ligamentotaxia — distração + lordose sobre as hastes — e confirme com radioscopia.",
      figureId: "fratura-toracolombar-explosao:instrumentacao",
      figureVariant: "curta",
      tips: [
        "Ligamentotaxia depende do ligamento longitudinal posterior íntegro; se ele rompeu, não haverá redução indireta",
        "Distração excessiva sem lordose produz cifose segmentar iatrogênica e falha do implante",
        "MIS percutâneo é opção quando não há necessidade de descompressão nem de artrodese posterolateral",
      ],
      pitfalls: [
        "Construto curto em osso osteoporótico ou cominução severa — falha e perda da correção",
        "Trajeto medial do parafuso rompendo o pedículo — lesão radicular; confirme no axial",
        "Esquecer a lordose no posicionamento e tentar corrigi-la depois com o implante",
      ],
    },
    {
      n: 7,
      title: "Descompressão — só com déficit neurológico",
      detail:
        "Tente sempre primeiro a descompressão INDIRETA por ligamentotaxia. Se persistir compressão com déficit, faça a descompressão DIRETA: por via transpedicular, remova o pedículo e empurre o fragmento retropulsado de volta para dentro do corpo com um impactador curvo, trabalhando de dentro para fora e nunca puxando o fragmento em direção ao saco dural. Alternativas: costotransversectomia na coluna torácica, ou corpectomia anterior com dispositivo intersomático nos padrões de cominução extrema. Lembre que a LAMINECTOMIA ISOLADA não alcança o fragmento, que é ANTERIOR — ela apenas desestabiliza ainda mais a coluna e é um erro clássico.",
      figureId: "fratura-toracolombar-explosao:instrumentacao",
      figureVariant: "descompressao",
      tips: [
        "Descomprima sempre com o construto já montado de um lado — evita deslocamento durante a manipulação",
        "Trabalhe do corpo para o canal: crie o vazio primeiro, depois impacte o fragmento para dentro dele",
        "No doente íntegro, o canal remodela espontaneamente — não há razão para descomprimir",
      ],
      pitfalls: [
        "Laminectomia isolada para 'descomprimir' uma explosão — não alcança o fragmento e desestabiliza",
        "Puxar o fragmento em direção ao saco dural — risco de lesão neural e sangramento epidural",
        "Descomprimir por indicação radiográfica (% de canal) em doente sem déficit",
      ],
    },
    {
      n: 8,
      title: "Fechamento, enxertia e verificação",
      detail:
        "Confirme alinhamento coronal e sagital e a posição dos parafusos na radioscopia em duas incidências antes de fechar. A artrodese posterolateral com enxerto local é discutível no construto curto para explosões tipo A em osso bom — há tendência a omiti-la, sobretudo em MIS, evitando a morbidade do leito doador. Hemostasia cuidadosa e dreno conforme o sangramento. No pós-operatório imediato, exame neurológico documentado na sala de recuperação: é o momento em que uma lesão iatrogênica ainda pode ser revertida.",
      figureId: "fratura-toracolombar-explosao:instrumentacao",
      figureVariant: "longa",
      tips: [
        "Radioscopia em perfil confirma que nenhum parafuso ultrapassou o muro anterior do corpo",
        "Exame neurológico imediato pós-anestesia — não espere o dia seguinte",
      ],
      pitfalls: [
        "Fechar sem confirmar a posição dos parafusos e o alinhamento",
        "Enxerto de crista ilíaca de rotina — morbidade do doador sem ganho demonstrado nesses padrões",
      ],
    },
  ],

  postop: {
    immobilization:
      "Conservador: TLSO moldada por 8–12 semanas, retirada gradual conforme a dor e a estabilidade radiográfica em ortostatismo. Cirúrgico: em regra SEM órtese quando o construto é estável — o implante é a imobilização; considere TLSO complementar por 6–8 semanas em osso osteoporótico, construtos curtos em cominução ou aderência duvidosa.",
    weightBearing:
      "Não se aplica no sentido de carga em membro. O equivalente é a MOBILIZAÇÃO AXIAL: deambulação precoce, no primeiro ou segundo dia, tanto no conservador (com órtese, no limite da dor) quanto no pós-operatório. Restrição a flexão, rotação e carga de peso acima de 5 kg nas primeiras 6–8 semanas em ambos os grupos. O repouso prolongado no leito NÃO faz parte do tratamento moderno.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Deambulação com órtese (conservador) ou livre (pós-op estável), no limite da dor",
        focus:
          "Analgesia eficaz, treino de rolamento em bloco (log roll), transferências, higiene pulmonar, profilaxia de trombose, exame neurológico seriado. Radiografia em ORTOSTATISMO antes da alta.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Deambulação plena com órtese; sem carga de peso e sem flexão do tronco",
        focus:
          "Isometria de paravertebrais e abdominais, marcha progressiva, retorno a atividades sedentárias. Radiografia em pé em 2 e 6 semanas para checar progressão da cifose.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Retirada gradual da órtese conforme dor e estabilidade radiográfica",
        focus:
          "Fortalecimento do core, mobilidade toracolombar, ganho de resistência, correção postural. Retorno ao trabalho leve. Radiografia em pé em 12 semanas.",
      },
      {
        window: "3–6 meses",
        weightBearing: "Livre, sem órtese",
        focus:
          "Fortalecimento progressivo, retorno a trabalho pesado e a esportes de impacto conforme consolidação e ausência de dor. Confirmação radiográfica da consolidação.",
      },
      {
        window: "> 6 meses",
        weightBearing: "Sem restrição",
        focus:
          "Retorno pleno. Vigiar dor axial persistente, cifose progressiva sintomática e, no operado, sinais de falha ou soltura do implante. Discutir remoção do implante apenas se sintomático.",
      },
    ],
    followup:
      "Radiografias em ORTOSTATISMO (não deitado — é a carga que revela a instabilidade) antes da alta e em 2, 6 e 12 semanas, depois em 6 meses e 1 ano. Exame neurológico documentado em cada retorno. Repita a TC apenas se houver dúvida de consolidação, progressão da cifose com dor ou suspeita de falha do implante. No conservador, alguma progressão da cifose (~4–5°) é esperada e, por si só, não indica cirurgia — cirurgia se dor incapacitante ou déficit novo. No operado, avalie soltura, quebra de parafuso e perda de correção. Remoção do implante é opção discutível e eletiva, apenas em doente sintomático após consolidação.",
  },

  complications: [
    {
      name: "Déficit neurológico tardio ou progressivo",
      detail:
        "Raro no doente inicialmente íntegro com CLP preservado. Decorre de colapso progressivo com cifose e estenose, ou de instabilidade não reconhecida (CLP roto subestimado).",
      prevention:
        "Exame neurológico seriado, radiografia em ortostatismo antes da alta, e não subestimar o CLP — na dúvida, RM com STIR e modificador M1.",
    },
    {
      name: "Progressão da cifose",
      detail:
        "Esperada em algum grau no conservador (~4–5° na série de Shen); no operado, perda gradual da correção inicial é a regra — Shen documentou correção de 17° perdida progressivamente. Só é problema quando produz dor incapacitante ou déficit.",
      prevention:
        "Órtese bem moldada em extensão, radiografias em carga seriadas; no cirúrgico, parafusos no nível da fratura e construto longo em osso frágil ou cominução.",
    },
    {
      name: "Falha do implante (quebra ou soltura de parafuso)",
      detail:
        "Complicação exclusiva do grupo operado: ~4,35% de falha de instrumentação com necessidade de revisão na revisão sistemática de Ghobrial. Shen registrou 2 parafusos quebrados em 33 operados.",
      prevention:
        "Evitar construto curto em cominução severa e osteoporose; incluir parafusos no nível da fratura; não distrair sem restaurar a lordose; considerar cimentação no osso osteoporótico.",
    },
    {
      name: "Infecção",
      detail:
        "Significativamente mais frequente no grupo operado (pneumonia, infecção urinária, infecção de ferida e sepse foram significativamente maiores nos operados na revisão de Ghobrial).",
      prevention:
        "Antibiótico profilático, tempo cirúrgico curto, técnica MIS quando aplicável, manejo de partes moles cuidadoso.",
    },
    {
      name: "Lesão neural iatrogênica por parafuso mal posicionado",
      detail:
        "Trajeto medial rompe o muro medial do pedículo e lesa a raiz ou o saco dural; trajeto longo demais ameaça os grandes vasos anteriores.",
      prevention:
        "Referências anatômicas rigorosas, radioscopia em duas incidências, neuromonitorização ou navegação em casos selecionados, checagem no axial.",
    },
    {
      name: "Complicações do repouso prolongado",
      detail:
        "Trombose venosa profunda e embolia, pneumonia, íleo adinâmico, úlcera de pressão, descondicionamento e perda de massa óssea — o preço histórico de tratar a radiografia em vez do doente.",
      prevention:
        "Mobilização precoce no limite da dor, profilaxia mecânica e farmacológica de trombose, fisioterapia respiratória desde o primeiro dia.",
    },
    {
      name: "Dor lombar crônica",
      detail:
        "Desfecho comum em ambos os grupos, mas no seguimento de 16–22 anos os operados relataram MAIS dor (mediana 4 cm vs 1,5 cm na EVA) e pior ODI (20 vs 2) — a cirurgia não protege da dor tardia.",
      prevention:
        "Selecionar a cirurgia por critérios reais (déficit, CLP, TLICS ≥ 5) e não por imagem; reabilitação ativa do core.",
    },
    {
      name: "Doença do segmento adjacente",
      detail:
        "Degeneração acelerada acima ou abaixo do construto artrodesado, favorecida por construtos longos e violação da faceta proximal.",
      prevention:
        "Preferir o construto mais curto que seja seguro; não violar a faceta do nível adjacente na inserção do parafuso proximal.",
    },
    {
      name: "Complicações da órtese",
      detail:
        "Úlcera de pressão sobre proeminências ósseas, dermatite, restrição ventilatória e má aderência — sobretudo no obeso e no idoso.",
      prevention:
        "Moldagem individualizada, inspeção diária da pele, camiseta de algodão sob a órtese; considerar que há evidência randomizada de que a órtese pode ser dispensável na explosão estável.",
    },
  ],

  evidence: [
    {
      id: "wood-2015-rct-longo",
      claim:
        "Na explosão toracolombar estável SEM déficit neurológico, o tratamento conservador não é apenas equivalente: no seguimento de 16 a 22 anos, foi SUPERIOR ao cirúrgico em dor e função.",
      takeaway:
        "RCT de 47 doentes com explosão estável e exame neurológico normal, seguidos em média 18 anos. A cifose final foi maior no conservador (19° vs 13°, sem diferença significativa), mas todos os desfechos relatados pelo doente favoreceram o conservador: EVA de dor 1,5 vs 4 cm (p = 0,003), ODI 2 vs 20 (p < 0,001), Roland-Morris 1 vs 7 (p = 0,001) e 7 dos 8 domínios do SF-36. Se a análise em 4 anos já não mostrava vantagem da cirurgia, o seguimento muito longo mostra o oposto do que a intuição radiográfica sugere — a cifose residual não se traduziu em sintoma.",
      level: "II",
      studyType: "Ensaio clínico randomizado (seguimento de 16–22 anos)",
      era: "atual",
      citation: {
        authors: "Wood KB, Buttermann GR, Phukan R, Harrod CC, Mehbod A, Shannon B, Bono CM, Harris MB",
        title:
          "Operative compared with nonoperative treatment of a thoracolumbar burst fracture without neurological deficit: a prospective randomized study with follow-up at sixteen to twenty-two years",
        journal: "The Journal of Bone and Joint Surgery. American Volume",
        year: 2015,
        pmid: "25568388",
        doi: "10.2106/JBJS.N.00226",
      },
    },
    {
      id: "gnanenthiran-2012-meta",
      claim:
        "Metanálise: a cirurgia melhora a cifose residual, mas não melhora dor nem função na explosão sem déficit — e cobra mais complicações e custo.",
      takeaway:
        "Metanálise de dados individuais de RCTs (4 estudos; 2 RCTs com 79 doentes: 41 operados, 38 conservadores; seguimento de 24 a 118 meses). Sem diferença entre os grupos na EVA de dor, no Roland-Morris e na taxa de retorno ao trabalho no último seguimento. O grupo operado ganhou de 12,8° a 11° de cifose, ao custo de taxas maiores de complicação e custo. É a base quantitativa da recomendação conservadora nesse cenário.",
      level: "II",
      studyType: "Metanálise de dados individuais de ensaios randomizados",
      era: "atual",
      citation: {
        authors: "Gnanenthiran SR, Adie S, Harris IA",
        title:
          "Nonoperative versus operative treatment for thoracolumbar burst fractures without neurologic deficit: a meta-analysis",
        journal: "Clinical Orthopaedics and Related Research",
        year: 2011,
        pmid: "22057820",
        doi: "10.1007/s11999-011-2157-7",
      },
    },
    {
      id: "shen-2001-rct",
      claim:
        "A fixação posterior curta oferece correção da cifose e alívio da dor MAIS PRECOCE, mas o resultado funcional em 2 anos é o mesmo do conservador com mobilização precoce.",
      takeaway:
        "RCT com 80 doentes neurologicamente íntegros com explosão de T11–L2 (47 conservadores com órtese em hiperextensão e atividade no limite da dor desde o dia da lesão; 33 com fixação pedicular de 3 níveis). O grupo cirúrgico teve menos dor até 3 meses e melhor escore de Greenough até 6 meses — depois, equivalência. No conservador, a cifose piorou 4° e a retropulsão REGREDIU espontaneamente de 34% para 15%. No cirúrgico, a correção inicial de 17° foi perdida gradualmente, com 1 infecção superficial e 2 parafusos quebrados; o custo hospitalar foi 4 vezes maior. É a fonte do dado clássico do remodelamento espontâneo do canal.",
      level: "II",
      studyType: "Ensaio clínico randomizado",
      era: "classico",
      citation: {
        authors: "Shen WJ, Liu TJ, Shen YS",
        title:
          "Nonoperative treatment versus posterior fixation for thoracolumbar junction burst fractures without neurologic deficit",
        journal: "Spine",
        year: 2001,
        pmid: "11337622",
        doi: "10.1097/00007632-200105010-00010",
      },
    },
    {
      id: "vaccaro-2005-tlics",
      claim:
        "O TLICS estrutura a decisão em três eixos — morfologia, complexo ligamentar posterior e estado neurológico — e converte a soma em conduta.",
      takeaway:
        "Artigo original que propôs o Thoracolumbar Injury Classification and Severity Score a partir de consenso internacional de especialistas em trauma da coluna. Construído sobre três características: morfologia radiográfica da lesão, integridade do complexo ligamentar posterior e estado neurológico do doente. A soma estratifica os doentes em grupos cirúrgico e não cirúrgico e ainda orienta a escolha da via. Sua contribuição decisiva foi dar peso explícito ao CLP e ao exame neurológico, em vez de à aparência do corpo vertebral.",
      level: "V",
      studyType: "Proposta de classificação por consenso de especialistas com validação inicial",
      era: "classico",
      citation: {
        authors:
          "Vaccaro AR, Lehman RA, Hurlbert RJ, Anderson PA, Harris M, Hedlund R, Harrop J, Dvorak M, Wood K, Fehlings MG, Fisher C, Zeiller SC, Anderson DG, Bono CM, Stock GH, Brown AK, Kuklo T, Oner FC",
        title:
          "A new classification of thoracolumbar injuries: the importance of injury morphology, the integrity of the posterior ligamentous complex, and neurologic status",
        journal: "Spine",
        year: 2005,
        pmid: "16227897",
        doi: "10.1097/01.brs.0000182986.43345.cb",
      },
    },
    {
      id: "vaccaro-2013-aospine",
      claim:
        "A classificação AOSpine toracolombar organiza a morfologia em A (compressão), B (banda de tensão) e C (translação), com confiabilidade substancial.",
      takeaway:
        "Desenvolvida por processo de consenso internacional estruturado, combina classificação morfológica, graduação do estado neurológico e modificadores específicos do doente. Quarenta casos foram classificados duas vezes, com 1 mês de intervalo, por membros do grupo: a confiabilidade na identificação do tipo morfológico foi SUBSTANCIAL (κ = 0,72). A explosão ocupa as subdivisões A3 (incompleta) e A4 (completa) — ambas definidas pelo envolvimento do muro posterior.",
      level: "IV",
      studyType: "Estudo de confiabilidade e concordância; série retrospectiva de casos",
      era: "atual",
      citation: {
        authors:
          "Vaccaro AR, Oner C, Kepler CK, Dvorak M, Schnake K, Bellabarba C, Reinhold M, Aarabi B, Kandziora F, Chapman J, Shanmuganathan R, Fehlings M, Vialle L",
        title:
          "AOSpine thoracolumbar spine injury classification system: fracture description, neurological status, and key modifiers",
        journal: "Spine",
        year: 2013,
        pmid: "23970107",
        doi: "10.1097/BRS.0b013e3182a8a381",
      },
    },
    {
      id: "shamji-2014-ortese",
      claim:
        "Na explosão toracolombar estável sem déficit, a própria ÓRTESE pode ser dispensável: com ou sem colete, os resultados foram iguais em 6 meses.",
      takeaway:
        "RCT prospectivo de 2 centros, com avaliador cego, em 23 doentes com explosão AO tipo A3 de nível único entre T12 e L2, sem déficit neurológico, randomizados para TLSO customizada (n = 12) ou sem órtese (n = 11). Em 6 meses, não houve diferença na perda de altura anterior (12,5% vs 11,9%), na progressão da cifose (5,3° vs 5,2°), nos eventos adversos nem nos desfechos relatados pelo doente. A internação foi significativamente MAIS CURTA sem órtese (2,8 vs 6,3 dias; p = 0,004). Estudo-piloto com amostra pequena — sugere que a mobilização precoce sem imobilização pode bastar, mas não fecha a questão.",
      level: "II",
      studyType: "Ensaio clínico randomizado piloto, multicêntrico, com avaliador cego",
      era: "atual",
      citation: {
        authors: "Shamji MF, Roffey DM, Young DK, Reindl R, Wai EK",
        title:
          "A pilot evaluation of the role of bracing in stable thoracolumbar burst fractures without neurological deficit",
        journal: "Journal of Spinal Disorders & Techniques",
        year: 2014,
        pmid: "22907065",
        doi: "10.1097/BSD.0b013e31826eacae",
      },
    },
    {
      id: "ghobrial-2014-complicacoes",
      claim:
        "A cirurgia no trauma toracolombar cobra um preço mensurável: mais infecção e uma complicação que só existe no grupo operado — a falha do implante.",
      takeaway:
        "Revisão sistemática de 19 estudos (919 operados, 436 conservadores), com a maioria dos doentes Frankel E em ambos os grupos. A incidência global de complicações foi de 32,6% nos operados versus 4,8% nos conservadores. As infecções (pneumonia, infecção urinária, infecção de ferida e sepse) foram significativamente mais frequentes nos operados (p = 0,000875), e a falha de instrumentação com necessidade de revisão ocorreu em 4,35% — evento exclusivo da categoria cirúrgica (p = 0,00396). Os autores ressalvam que o número limitado de estudos de alta qualidade impede conclusões definitivas.",
      level: "III",
      studyType: "Revisão sistemática",
      era: "atual",
      citation: {
        authors:
          "Ghobrial GM, Maulucci CM, Maltenfort M, Dalyai RT, Vaccaro AR, Fehlings MG, Street J, Arnold PM, Harrop JS",
        title:
          "Operative and nonoperative adverse events in the management of traumatic fractures of the thoracolumbar spine: a systematic review",
        journal: "Neurosurgical Focus",
        year: 2014,
        pmid: "24981907",
        doi: "10.3171/2014.4.FOCUS1467",
      },
    },
  ],

  pearls: [
    "A explosão é definida pelo TRAÇO NO MURO POSTERIOR — não pela altura perdida. Sem muro posterior, é compressão A1, outra doença.",
    "Faça a conta em voz alta: explosão (2) + CLP íntegro (0) + neuro normal (0) = TLICS 2 → órtese. É a conta mais importante do tema.",
    "O CLP é a chave que vira a decisão: de íntegro (0) para roto (3), a mesma fratura passa de 2 para 5 — de conservador a cirúrgico.",
    "Uma explosão A3/A4 com CLP roto não é mais tipo A: é B2. Reclassifique em vez de 'operar uma A4 grave'.",
    "O canal remodela sozinho: Shen documentou queda espontânea da retropulsão de 34% para 15% sem cirurgia. Não descomprima imagem.",
    "A cifose residual não prediz sintoma: em 18 anos, o grupo conservador tinha MAIS cifose (19° vs 13°) e MENOS dor (EVA 1,5 vs 4).",
    "Radiografia em ORTOSTATISMO antes da alta é o teste de estabilidade — a TC deitada não carrega a coluna e pode esconder a instabilidade.",
    "Mobilize cedo, no limite da dor. O repouso prolongado no leito não protege a fratura e produz trombose, pneumonia e descondicionamento.",
    "Cone medular termina em L1: sempre toque retal, sensibilidade perianal e reflexo bulbocavernoso — é o que separa cone de cauda equina.",
    "Lesão incompleta e cauda equina pontuam MAIS que a lesão completa no TLICS: são as situações em que a descompressão ainda recupera função.",
    "Coluna anquilosada (EA/DISH) é osso longo: qualquer traço é instável, opere — o TLICS não foi feito para ela.",
    "Parafusos no nível da fratura, quando os pedículos estão íntegros, reforçam o construto curto e reduzem a perda de correção.",
    "Ligamentotaxia depende do ligamento longitudinal posterior íntegro; se ele rompeu, a redução indireta não acontecerá.",
    "A cirurgia entrega alívio da dor mais PRECOCE (até 3–6 meses em Shen) — não melhor função tardia. Saiba o que está vendendo ao doente.",
    "Fraturas não contíguas em ~10–15%: imagine toda a coluna, sempre.",
  ],

  pitfalls: [
    "Operar pela tomografia: indicar cirurgia por % de canal, perda de altura ou grau de cifose em doente neurologicamente íntegro com CLP íntegro.",
    "Chamar toda fratura com perda de altura de 'explosão' — sem traço no muro posterior é A1, é estável e é outra conversa.",
    "Aceitar exame neurológico 'grosseiramente normal' sem testar esfíncter, períneo e reflexo bulbocavernoso — perde cone e cauda equina.",
    "Confiar só na TC para excluir lesão do CLP quando o exame clínico levanta suspeita — peça RM com STIR (modificador M1 existe para isso).",
    "Prescrever repouso prolongado no leito como 'tratamento conservador': trata a radiografia e adoece o doente.",
    "Não fazer a radiografia em ortostatismo antes da alta — perde a instabilidade que só aparece sob carga.",
    "Laminectomia isolada para descomprimir uma explosão: o fragmento é ANTERIOR, ela não o alcança e ainda desestabiliza a coluna.",
    "Descomprimir doente sem déficit: o canal remodela espontaneamente e a descompressão só acrescenta risco.",
    "Construto curto em osso osteoporótico ou cominução severa — falha do implante e perda da correção.",
    "Distrair sem restaurar a lordose — cria cifose segmentar iatrogênica e sobrecarrega o implante.",
    "Converter para cirurgia por progressão isolada da cifose em doente assintomático — a cifose não é o desfecho.",
    "Aplicar o TLICS como carimbo de uma decisão já tomada pelo olhar na imagem.",
    "Esquecer que o TLICS = 4 é zona cinzenta genuína: mascarar a incerteza com um número em vez de discutir com o doente.",
    "Tratar a coluna anquilosada com órtese como se fosse uma explosão comum — é fratura de osso longo, altamente instável.",
    "Violar a faceta do nível adjacente proximal na inserção do parafuso — semeia a doença do segmento adjacente.",
  ],

  figures: [
    {
      id: "fratura-toracolombar-explosao:anatomia",
      caption:
        "Junção toracolombar (T11–L3) em perfil: transição da coluna torácica rígida, contida pela caixa costal, para a lombar móvel e lordótica — a mudança abrupta de rigidez concentra as tensões em T11–L2. A medula termina no cone medular em L1; abaixo, apenas cauda equina.",
      alt: "Desenho esquemático em perfil das vértebras T11 a L3 mostrando corpos vertebrais, discos, canal vertebral, medula terminando no cone medular em L1 e cauda equina abaixo, com a zona de transição toracolombar destacada.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      },
    },
    {
      id: "fratura-toracolombar-explosao:mecanismo",
      caption:
        "Mecanismo: a carga axial pura faz o corpo vertebral falhar e projeta o muro posterior para dentro do canal — é a retropulsão que define a explosão. Painel axial mostra o fragmento ocupando o canal e comprimindo o saco dural.",
      alt: "Desenho em dois painéis: perfil com setas de carga axial comprimindo o corpo vertebral em explosão e fragmento do muro posterior retropulsado comprimindo a medula; painel axial com traços radiais no corpo e fragmento ocupando o canal.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      },
    },
    {
      id: "fratura-toracolombar-explosao:aospine",
      caption:
        "Classificação AOSpine toracolombar: A0 sem lesão do corpo; A1 cunha-impactação de um platô; A2 separação de ambos os platôs com muro posterior íntegro; A3 explosão incompleta (um platô + muro posterior); A4 explosão completa (ambos os platôs + muro posterior); B falência da banda de tensão; C translação.",
      alt: "Desenho esquemático em perfil de três vértebras com o nível central fraturado, mostrando os padrões morfológicos da classificação AOSpine com os respectivos traços de fratura.",
      variant: "A4",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      },
    },
    {
      id: "fratura-toracolombar-explosao:tlics",
      caption:
        "TLICS: morfologia + complexo ligamentar posterior + estado neurológico. Soma ≤ 3 aponta conservador, ≥ 5 aponta cirurgia, 4 é zona cinzenta. Explosão (2) com CLP íntegro (0) e sem déficit (0) soma 2.",
      alt: "Diagrama do escore TLICS com três blocos de componentes e suas pontuações, e uma escala inferior indicando conservador até 3 pontos, indefinido em 4 e cirúrgico a partir de 5.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Campbell's Operative Orthopaedics, 14ª ed. (2021)",
      },
    },
    {
      id: "fratura-toracolombar-explosao:clp",
      caption:
        "Complexo ligamentar posterior — a banda de tensão: ligamentos supraespinhoso, interespinhoso, amarelo e cápsulas facetárias. Íntegro, contém a cifose e permite tratar a explosão com órtese; roto, a lesão passa a AOSpine B2 e o TLICS ganha 3 pontos.",
      alt: "Desenho em perfil de duas vértebras mostrando os ligamentos supraespinhoso, interespinhoso, ligamento amarelo e cápsula facetária, com a medida da distância interespinhosa.",
      variant: "integro",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      },
    },
    {
      id: "fratura-toracolombar-explosao:medidas",
      caption:
        "Medidas: cifose regional pelo Cobb (platô superior da vértebra acima ao platô inferior da vértebra abaixo), perda de altura anterior (1 − Ha/Hp) e % de canal ocupado. Úteis para descrever e acompanhar — nenhuma delas, isoladamente, indica cirurgia.",
      alt: "Desenho em perfil de três vértebras com o nível central fraturado, mostrando as linhas do ângulo de Cobb regional, as medidas de altura anterior e posterior do corpo e um detalhe axial com a porcentagem de canal ocupado.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      },
    },
    {
      id: "fratura-toracolombar-explosao:instrumentacao",
      caption:
        "Estabilização: construto curto (um nível acima e um abaixo, com opção de parafusos no nível da fratura), construto longo (dois acima e dois abaixo) para cominução grave, osteoporose e lesões tipo C, e descompressão — reservada ao déficit neurológico.",
      alt: "Desenho em perfil de cinco vértebras com o nível central fraturado, parafusos pediculares e hastes, mostrando as opções de construto curto, construto longo e descompressão com laminectomia.",
      variant: "curta",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Campbell's Operative Orthopaedics, 14ª ed. (2021)",
      },
    },
    {
      id: "fratura-toracolombar-explosao:conduta",
      caption:
        "Sequência de conduta: ATLS e exame neurológico → TC → RM se CLP suspeito ou déficit → classificar por AOSpine e TLICS → TLICS ≤ 3 órtese e mobilização, TLICS ≥ 5 estabilização com ou sem descompressão.",
      alt: "Fluxograma vertical com seis etapas numeradas da conduta na fratura toracolombar por explosão, da avaliação inicial à decisão entre órtese e estabilização.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference: "Campbell's Operative Orthopaedics, 14ª ed. (2021)",
      },
    },
  ],

  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Rockwood and Green's Fractures in Adults, 10ª ed. (2024) — Thoracolumbar Spine Fractures",
      "Campbell's Operative Orthopaedics, 14ª ed. (2021) — Fractures, Dislocations, and Fracture-Dislocations of the Spine",
      "Hebert S, Lech O et al. Ortopedia e Traumatologia: Princípios e Prática, 6ª ed. (2025) — Traumatismos da coluna toracolombar",
      "Vaccaro AR et al. TLICS. Spine. 2005;30(20):2325-33 (PMID 16227897)",
      "Vaccaro AR et al. AOSpine thoracolumbar classification. Spine. 2013;38(23):2028-37 (PMID 23970107)",
      "Wood KB et al. J Bone Joint Surg Am. 2015;97(1):3-9 (PMID 25568388)",
      "Gnanenthiran SR et al. Clin Orthop Relat Res. 2012;470(2):567-77 (PMID 22057820)",
      "Shen WJ et al. Spine. 2001;26(9):1038-45 (PMID 11337622)",
      "Shamji MF et al. J Spinal Disord Tech. 2014;27(7):370-5 (PMID 22907065)",
      "Ghobrial GM et al. Neurosurg Focus. 2014;37(1):E8 (PMID 24981907)",
    ],
    attribution:
      "Evidência recuperada e verificada no PubMed (PMIDs e DOIs conferidos individualmente). Figuras são diagramas originais, sem material protegido por direitos autorais.",
    figureReference:
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
  },
});
