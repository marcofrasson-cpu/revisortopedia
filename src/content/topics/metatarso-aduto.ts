import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "op-pe-metatarso-aduto",
  slug: "metatarso-aduto",
  kind: "condicao",
  regionId: "ortopedia-pediatrica",
  bone: "Pé (criança)",
  injury: "Deformidade do antepé",
  title: "Metatarso aduto",
  subtitle:
    "Adução isolada do antepé com retropé neutro: graduar pela bissetora do calcâneo e pela flexibilidade, reconhecer a história natural benigna e reservar gesso e cirurgia para a minoria que resiste.",
  laterality: null,
  status: "complete",
  overview:
    "O metatarso aduto é a deformidade congênita do pé mais comum do recém-nascido, com incidência da ordem de 1 a 2 por 1.000 nascimentos, e é a causa mais frequente de marcha com os pés para dentro (intoeing) no lactente e no pré-escolar. A deformidade é uma adução do antepé em relação ao mediopé, com ápice na articulação tarsometatarsal, e o traço que define a entidade é negativo: o retropé é neutro. Não há equino, não há varo do calcâneo, e a articulação de Chopart é normal. O pé tem borda lateral convexa, borda medial côncava, base do quinto metatarso proeminente e, com frequência, um sulco no primeiro espaço interdigital.\n\nO ponto mais importante deste tópico não é uma técnica, é uma abstenção. A história natural é benigna e a resolução espontânea é a regra: a série prospectiva de Rushforth acompanhou pés não tratados e encontrou, em média sete anos depois, cerca de 86% normais ou apenas levemente deformados e todos móveis, com apenas 4% ainda deformados e rígidos. O corolário é incômodo para quem gosta de tratar: quase toda intervenção precoce corrige aquilo que corrigiria sozinho, e a boa taxa de sucesso das séries de gesso reflete em grande parte a história natural, não o gesso. Sapatos corretivos, barras e órteses de rotação não têm eficácia demonstrada.\n\nA conduta, portanto, estratifica. O pé flexível — a grande maioria — recebe explicação da história natural aos pais e observação, no máximo alongamento passivo domiciliar. O pé parcialmente flexível é observado e alongado, com gesso reservado à persistência. O pé rígido, ou o que persiste sintomático, é candidato a manipulação e gessos seriados, tanto mais eficazes quanto mais cedo iniciados. A cirurgia é excepcional, reservada à criança acima de 4 a 6 anos com deformidade rígida, sintomática e refratária, e carrega o histórico ruim das liberações tarsometatarsais amplas. Antes de qualquer decisão, três diagnósticos precisam ser afastados no retropé: pé torto congênito (equino e varo), skewfoot (valgo do retropé) e adução como recidiva de pé torto tratado.",
  keyFacts: [
    { label: "Incidência", value: "~1-2/1.000 nascidos; deformidade congênita do pé mais comum" },
    { label: "Ápice", value: "Articulação tarsometatarsal (Lisfranc)" },
    { label: "Retropé", value: "Neutro — é o que define a entidade" },
    { label: "Graduação", value: "Linha bissetora do calcâneo (heel bisector); normal = 2º-3º pododáctilos" },
    { label: "Flexibilidade", value: "Flexível, parcialmente flexível, rígido" },
    { label: "História natural", value: "~86% normais ou minimamente deformados; ~4% rígidos residuais" },
    { label: "Tratamento", value: "Observação na maioria; gesso seriado no rígido/persistente" },
    { label: "Cirurgia", value: "Excepcional; acima de 4-6 anos, rígido e sintomático" },
    { label: "Associação", value: "Rastrear displasia do desenvolvimento do quadril ao exame" },
  ],
  anatomy: {
    text:
      "O antepé aduzido gira em bloco sobre a articulação tarsometatarsal, e é aí que está o ápice da deformidade — não no mediopé nem no retropé. As cinco bases metatarsais desviam-se medialmente sobre a fileira dos cuneiformes e do cuboide, produzindo o desenho clássico: borda lateral convexa com a base do quinto metatarso saliente ao toque, borda medial côncava, e um sulco no primeiro espaço interdigital quando o primeiro raio se separa dos demais. A articulação de Chopart (talonavicular e calcaneocuboidea) permanece normal, e o calcâneo mantém alinhamento neutro sob o tálus. Essa é a distinção anatômica que separa o metatarso aduto de tudo o que se parece com ele.\n\nA anatomia óssea explica a graduação e o momento de operar. Na obliquidade da articulação cuneiforme medial-primeiro metatarso, achado radiográfico frequente em séries de longo prazo, mora parte da deformidade residual — mas ela também aparece em pés contralaterais normais, e não é por si patológica. As bases metatarsais só se ossificam em torno dos 4 a 5 anos, razão pela qual as osteotomias de base não são exequíveis antes disso e a fise proximal do primeiro metatarso, que responde pelo crescimento longitudinal do raio, precisa ser respeitada em qualquer osteotomia por ali.\n\nDo lado das partes moles, o músculo abdutor do hálux é o deformante medial recorrente: hipertônico ou contraído, mantém o hálux e o primeiro raio em adução e reproduz a deformidade após a correção. A etiologia mais aceita é o empacotamento intrauterino, o que coloca o metatarso aduto na mesma família das deformidades posicionais — daí a associação epidemiológica com displasia do desenvolvimento do quadril e com torcicolo muscular congênito, e a obrigação de examinar o quadril de todo lactente com metatarso aduto.",
    figureIds: [
      "metatarso-aduto:anatomia",
      "metatarso-aduto:diferencial",
    ],
  },
  classification: [
    {
      id: "linha-bissetora",
      name: "Linha bissetora do calcâneo (heel bisector) — Bleck",
      basis:
        "Prolongamento do eixo longitudinal que bisseta o calcâneo, na vista plantar, até a fileira dos pododáctilos; a gravidade é lida pelo ponto de saída.",
      note:
        "É a graduação clínica de referência, feita à beira do leito, sem radiografia. Depende de traçar corretamente o eixo do retropé — se o retropé não estiver neutro, a leitura não vale e o diagnóstico provavelmente é outro. A radiografia é dispensável no metatarso aduto isolado e reserva-se ao pré-operatório e à dúvida com skewfoot.",
      types: [
        {
          code: "0",
          label: "Normal",
          description:
            "A bissetora emerge entre o 2º e o 3º pododáctilos. É a referência de alinhamento e o alvo de qualquer correção.",
          figureId: "metatarso-aduto:linha-bissetora",
          figureVariant: "normal",
        },
        {
          code: "I",
          label: "Leve",
          description:
            "A bissetora emerge sobre o 3º pododáctilo. Praticamente sempre flexível e de resolução espontânea.",
          figureId: "metatarso-aduto:linha-bissetora",
          figureVariant: "leve",
        },
        {
          code: "II",
          label: "Moderado",
          description:
            "A bissetora emerge entre o 3º e o 4º pododáctilos. Costuma resolver; a flexibilidade é que orienta a conduta.",
          figureId: "metatarso-aduto:linha-bissetora",
          figureVariant: "moderado",
        },
        {
          code: "III",
          label: "Grave",
          description:
            "A bissetora emerge entre o 4º e o 5º pododáctilos. Concentra os pés rígidos e os candidatos a gesso seriado precoce.",
          figureId: "metatarso-aduto:linha-bissetora",
          figureVariant: "grave",
        },
      ],
    },
    {
      id: "flexibilidade",
      name: "Flexibilidade à manobra corretiva",
      basis:
        "Estabiliza-se o retropé/cuboide e abduz-se passivamente o antepé, observando até onde a bissetora chega.",
      note:
        "É o eixo que realmente decide a conduta — mais do que a gravidade estática. Na série de Bleck, nem a gravidade nem a flexibilidade previram o resultado do tratamento; o único preditor significativo de bom resultado foi a idade de início (melhor entre 1 dia e 8 meses). Leia isso como um argumento para tratar cedo quando se decide tratar, e não como um argumento para tratar todo mundo.",
      types: [
        {
          code: "F",
          label: "Flexível",
          description:
            "O antepé corrige passivamente até além do neutro (bissetora ao 2º-3º espaço). Maioria dos casos; história natural benigna e conduta expectante.",
          figureId: "metatarso-aduto:flexibilidade",
          figureVariant: "flexivel",
        },
        {
          code: "PF",
          label: "Parcialmente flexível",
          description:
            "Corrige parcialmente, sem alcançar o neutro. Observação com alongamento passivo; gesso se persistir além dos primeiros meses.",
          figureId: "metatarso-aduto:flexibilidade",
          figureVariant: "parcial",
        },
        {
          code: "R",
          label: "Rígido",
          description:
            "Não corrige à manobra passiva. Minoria dos pés; indicação de manipulação e gessos seriados, tanto melhores quanto mais precoces.",
          figureId: "metatarso-aduto:flexibilidade",
          figureVariant: "rigido",
        },
      ],
    },
    {
      id: "diferencial",
      name: "Diferencial pelo retropé",
      basis:
        "Posição do calcâneo e presença de equino, avaliadas na vista posterior e no perfil — o antepé aduzido é comum às três entidades.",
      note:
        "Este não é um sistema de gravidade, é o filtro diagnóstico que precede qualquer graduação. Errar aqui significa observar um pé torto ou gessar um skewfoot em valgo.",
      types: [
        {
          code: "MTA",
          label: "Metatarso aduto",
          description:
            "Antepé aduzido, retropé neutro, sem equino, dorsiflexão normal do tornozelo. Chopart normal.",
          figureId: "metatarso-aduto:diferencial",
          figureVariant: "metatarso-aduto",
        },
        {
          code: "PTC",
          label: "Pé torto congênito",
          description:
            "Antepé aduzido e cavo somado a varo do retropé e equino do tornozelo, com rigidez e prega medial. É a distinção que não se pode perder.",
          figureId: "metatarso-aduto:diferencial",
          figureVariant: "pe-torto",
        },
        {
          code: "SKEW",
          label: "Skewfoot (pé em serpentina)",
          description:
            "Antepé aduzido com retropé em valgo e mediopé abduzido — deformidade em Z. Pode ser iatrogênico após gesso que forçou o retropé em valgo.",
          figureId: "metatarso-aduto:diferencial",
          figureVariant: "skewfoot",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Deformidade rígida, persistente e sintomática após falha do tratamento conservador bem conduzido, tipicamente acima dos 4 a 6 anos.",
      "Dor localizada, calosidade sobre a base do 5º metatarso ou dificuldade real de calçar, atribuíveis à deformidade — e não apenas incômodo estético dos pais.",
      "Deformidade grave residual em criança mais velha, com bases metatarsais já ossificadas, quando o gesso não é mais exequível.",
      "Skewfoot sintomático com deformidade em Z estruturada, em que a correção precisa endereçar mediopé e retropé (cunhas no cuneiforme medial e no cuboide).",
    ],
    nonOperative: [
      "Metatarso aduto flexível em qualquer grau: observação, explicação da história natural aos pais e, opcionalmente, alongamento passivo domiciliar.",
      "Metatarso aduto parcialmente flexível: observação com alongamento; reavaliar em 4 a 8 semanas antes de escalar.",
      "Metatarso aduto rígido ou persistente sintomático no lactente: manipulação e gessos seriados, idealmente iniciados nos primeiros 8 meses.",
      "Manutenção após gesso: órtese/sapato de correção ou calçado de forma reta apenas como retenção, sem pretensão corretiva isolada.",
    ],
    decisionNotes:
      "Antes de graduar, filtre no retropé: se houver equino ou varo, é pé torto; se houver valgo, é skewfoot. Confirmado o metatarso aduto, o eixo da decisão é a flexibilidade, não a gravidade estática. O pé flexível — a esmagadora maioria — não precisa de nada além de exame seriado e uma conversa honesta com os pais; sapato corretivo, barra de Denis-Browne e órtese de rotação não têm eficácia demonstrada e não devem ser prescritos com promessa de correção. A revisão sistemática de Williams encontrou evidência forte a favor de nenhum tratamento no metatarso aduto flexível, e apenas evidência limitada para o semirrígido.\n\nQuando se decide gessar — pé rígido ou persistente —, gesse cedo: na série de Bleck, o único preditor significativo de bom resultado foi iniciar entre o primeiro dia e os 8 meses de vida. Depois dos 8 a 12 meses o gesso perde eficácia, e depois dos 4 anos deixa de ser opção. Reconheça também o limite honesto da evidência: a taxa de sucesso do gesso não é separável da resolução espontânea, e Farsetti mostrou que pés não tratados com deformidade passivamente corrigível tiveram 100% de bons resultados em mais de 30 anos de seguimento, sem hálux valgo como desfecho comum. Antes dos 3 anos não é possível identificar de forma confiável qual pé será resistente — o que argumenta contra intervir agressivamente com base em prognóstico.\n\nA cirurgia é excepcional e deve ser tratada como tal. A liberação tarsometatarsal ampla tipo Heyman-Herndon tem histórico de rigidez, dor e degeneração tardia e foi praticamente abandonada. Restam as osteotomias de base dos metatarsos, na criança com bases ossificadas, e a correção pelo mediopé (cunha de abertura no cuneiforme medial com cunha de fechamento no cuboide), preferida quando há componente de skewfoot. Opere deformidade que dói, não radiografia que incomoda.",
  },
  approaches: [
    {
      id: "observacao",
      name: "Observação com orientação parental",
      indication:
        "Metatarso aduto flexível, em qualquer grau da bissetora — a conduta da grande maioria dos pés.",
      interval:
        "Não é 'não fazer nada': é examinar seriadamente (bissetora e flexibilidade), documentar a evolução e explicar aos pais a história natural com números — cerca de 86% dos pés não tratados ficam normais ou minimamente deformados e móveis. Reavaliação a cada 3 a 6 meses até a resolução ou até os 2 a 3 anos. Desaconselhar explicitamente sapato corretivo e barra, que geram custo, desconforto e falsa expectativa.",
      atRisk: [
        "Ansiedade parental convertida em tratamento desnecessário",
        "Perder um pé torto ou skewfoot por não reexaminar o retropé",
        "Alta precoce antes de confirmar a resolução",
      ],
      figureId: "metatarso-aduto:historia-natural",
    },
    {
      id: "alongamento",
      name: "Alongamento passivo domiciliar",
      indication:
        "Metatarso aduto flexível ou parcialmente flexível, como medida de baixo custo e baixo risco.",
      interval:
        "Ensinar os pais a estabilizar o retropé com uma mão e abduzir suavemente o antepé com a outra, mantendo 5 a 10 segundos, várias séries por troca de fralda. A evidência de eficácia é fraca e o benefício provável é sobretudo o de engajar a família enquanto a história natural age. Nunca forçar o calcâneo em valgo.",
      atRisk: [
        "Manobra aplicada com fulcro na cabeça do tálus, produzindo valgo do retropé",
        "Excesso de força e desconforto do lactente",
        "Falsa atribuição da melhora ao alongamento",
      ],
      figureId: "metatarso-aduto:flexibilidade",
    },
    {
      id: "gesso-seriado",
      name: "Manipulação e gessos seriados",
      indication:
        "Metatarso aduto rígido, ou parcialmente flexível persistente e sintomático; idealmente iniciado antes dos 8 meses.",
      interval:
        "Gesso longo, acima do joelho com joelho fletido a 90°, para controlar a rotação e impedir que a criança o retire. Trocas semanais a cada 1 a 2 semanas, tipicamente 4 a 6 gessos. O antepé é abduzido contra um contra-apoio no cuboide e na borda lateral do retropé; o retropé fica livre em neutro. O alvo é a bissetora no 2º-3º espaço.",
      atRisk: [
        "Fulcro na cabeça do tálus ou pressão no calcâneo medial → valgo do retropé e skewfoot iatrogênico",
        "Lesão de pele sobre a base do 5º metatarso e o maléolo",
        "Síndrome compartimental e problemas neurovasculares por gesso apertado",
      ],
      figureId: "metatarso-aduto:gesso",
    },
    {
      id: "orteses",
      name: "Órteses, sapatos de forma reta e retenção pós-gesso",
      indication:
        "Retenção após correção por gesso; nunca como tratamento corretivo isolado.",
      interval:
        "Sapato de forma reta ou invertida e órteses de rotação podem ser usados por alguns meses após o gesso para manter a correção. Como tratamento primário, não têm eficácia comprovada e não devem ser prescritos com promessa de corrigir a deformidade. Sapatos corretivos e barras noturnas para intoeing simples são ineficazes.",
      atRisk: [
        "Custo e desconforto sem benefício demonstrado",
        "Adesão baixa e conflito familiar",
        "Adiar o reconhecimento de um pé verdadeiramente rígido",
      ],
      figureId: "metatarso-aduto:historia-natural",
    },
    {
      id: "cirurgia-osso",
      name: "Osteotomias (bases metatarsais ou mediopé)",
      indication:
        "Deformidade rígida, sintomática e refratária na criança acima de 4 a 6 anos; via de exceção.",
      interval:
        "Osteotomias das bases do 1º ao 5º metatarso por incisões dorsais longitudinais, respeitando a fise proximal do 1º metatarso; ou correção pelo mediopé com cunha de abertura no cuneiforme medial e cunha de fechamento no cuboide, poupando as articulações tarsometatarsais e preferida quando há componente de skewfoot. A liberação tarsometatarsal ampla (Heyman-Herndon) é evitada pelo histórico de rigidez e dor tardias.",
      atRisk: [
        "Fise proximal do 1º metatarso (encurtamento do raio se lesada)",
        "Artéria dorsal do pé e nervo fibular profundo no dorso",
        "Rigidez, dor e degeneração tardia (liberação TMT ampla)",
        "Necrose de pele entre incisões dorsais próximas",
      ],
      figureId: "metatarso-aduto:cirurgia",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Filtrar no retropé antes de qualquer outra coisa",
      detail:
        "Com a criança em decúbito ventral e os joelhos fletidos, olhe o calcâneo pela vista posterior e teste a dorsiflexão do tornozelo. Retropé neutro e dorsiflexão livre confirmam metatarso aduto. Equino e varo do retropé com rigidez e prega medial significam pé torto congênito. Valgo do retropé com mediopé abduzido significa skewfoot. Nenhuma graduação da bissetora tem valor antes de passar por este filtro.",
      figureId: "metatarso-aduto:diferencial",
      figureVariant: "metatarso-aduto",
      tips: [
        "Vista posterior do calcâneo e dorsiflexão do tornozelo resolvem quase todo o diferencial",
        "Considere também torção tibial interna e anteversão femoral como causas de intoeing",
      ],
      pitfalls: [
        "Rotular de metatarso aduto um pé torto e observar o que deveria ser gessado pelo método de Ponseti",
        "Ignorar valgo do retropé e gessar um skewfoot, piorando o Z",
      ],
    },
    {
      n: 2,
      title: "Graduar pela linha bissetora do calcâneo",
      detail:
        "Na vista plantar, trace o eixo longitudinal que bisseta o calcâneo e prolongue-o até a fileira dos pododáctilos. Normal: sai entre o 2º e o 3º. Leve: sobre o 3º. Moderado: entre o 3º e o 4º. Grave: entre o 4º e o 5º. Registre o grau no prontuário — a graduação seriada é o que documenta a resolução espontânea e evita tratar por impressão.",
      figureId: "metatarso-aduto:linha-bissetora",
      figureVariant: "moderado",
      tips: [
        "É exame de beira de leito: radiografia é dispensável no metatarso aduto isolado",
        "Fotografe a planta do pé para comparação objetiva ao longo do seguimento",
      ],
      pitfalls: [
        "Traçar o eixo pelo antepé em vez do calcâneo e superestimar o grau",
        "Pedir radiografia de rotina em lactente e tratar o ângulo, não a criança",
      ],
    },
    {
      n: 3,
      title: "Testar a flexibilidade — o eixo que decide",
      detail:
        "Estabilize o retropé e o cuboide com uma mão e abduza passivamente o antepé com a outra, pressionando a borda medial no nível do 1º metatarso. Flexível: corrige até além do neutro. Parcialmente flexível: corrige, mas não alcança o neutro. Rígido: não corrige. A flexibilidade orienta a conduta melhor que o grau da bissetora — pé grave e flexível continua sendo um pé de observação.",
      figureId: "metatarso-aduto:flexibilidade",
      figureVariant: "flexivel",
      tips: [
        "O fulcro é o cuboide e a borda lateral do retropé, nunca a cabeça do tálus",
        "Palpe o abdutor do hálux: contratura mantém o 1º raio aduzido",
      ],
      pitfalls: [
        "Usar a cabeça do tálus como fulcro (manobra de pé torto) e criar valgo do retropé",
        "Confundir resistência por choro e defesa com rigidez verdadeira",
      ],
    },
    {
      n: 4,
      title: "Examinar o quadril e o pescoço — o pacote posicional",
      detail:
        "O metatarso aduto é uma deformidade de empacotamento intrauterino e caminha na mesma companhia da displasia do desenvolvimento do quadril e do torcicolo muscular congênito. Faça Ortolani e Barlow no lactente, avalie abdução simétrica e cheque a mobilidade cervical. A associação epidemiológica é reconhecida e o exame do quadril é obrigatório, ainda que o rastreio ultrassonográfico universal apenas pelo metatarso aduto seja debatido.",
      figureId: "metatarso-aduto:anatomia",
      tips: [
        "Exame do quadril em todo lactente com metatarso aduto, sempre",
        "Abdução assimétrica ou Ortolani positivo mandam para a ultrassonografia",
      ],
      pitfalls: [
        "Concentrar-se no pé e perder uma displasia do quadril",
        "Tranquilizar sobre o pé sem ter examinado o quadril",
      ],
    },
    {
      n: 5,
      title: "Tratar a maioria com informação, não com material",
      detail:
        "No pé flexível, explique aos pais a história natural com números: a grande maioria fica normal ou minimamente deformada e móvel, sem tratamento algum, e mesmo os pés que permanecem moderadamente deformados costumam ser assintomáticos. Ofereça alongamento passivo domiciliar como medida opcional de baixo risco. Diga explicitamente que sapato corretivo e barra não têm eficácia demonstrada. Reavalie a cada 3 a 6 meses e documente a bissetora.",
      figureId: "metatarso-aduto:historia-natural",
      tips: [
        "Números convencem melhor que reasseguramento genérico — mostre a curva",
        "Documentar a bissetora seriada protege a família e o médico da tentação de escalar",
      ],
      pitfalls: [
        "Prescrever órtese para acalmar os pais e medicalizar uma variação que se resolve",
        "Dar alta antes dos 2 a 3 anos sem confirmar a resolução",
      ],
    },
    {
      n: 6,
      title: "Gessar cedo o pé rígido ou persistente",
      detail:
        "Quando indicado, comece cedo: o melhor preditor de bom resultado é iniciar entre o primeiro dia e os 8 meses. Manipule alongando o antepé e aplique gesso longo, acima do joelho fletido a 90°, para controlar rotação e evitar que o gesso escape. Troque a cada 1 a 2 semanas, tipicamente 4 a 6 gessos, buscando a bissetora no 2º-3º espaço. Após a correção, mantenha com sapato de forma reta ou órtese por alguns meses.",
      figureId: "metatarso-aduto:gesso",
      tips: [
        "Gesso curto escapa e não controla rotação — use acima do joelho",
        "Almofade a base do 5º metatarso e os maléolos antes de moldar",
        "Oriente os pais sobre sinais de gesso apertado e retorno imediato",
      ],
      pitfalls: [
        "Contra-apoio no calcâneo medial ou na cabeça do tálus → valgo do retropé e skewfoot iatrogênico",
        "Iniciar o gesso depois dos 12 meses e esperar o mesmo resultado",
        "Atribuir ao gesso um sucesso que a história natural entregaria sozinha",
      ],
    },
    {
      n: 7,
      title: "Reservar a cirurgia — e escolher a que não enrijece",
      detail:
        "Opere apenas a deformidade rígida, sintomática e refratária, tipicamente acima dos 4 a 6 anos, quando as bases metatarsais já estão ossificadas. Prefira osteotomias das bases do 1º ao 5º metatarso por incisões dorsais, respeitando a fise proximal do 1º metatarso, ou a correção pelo mediopé com cunha de abertura no cuneiforme medial e fechamento no cuboide — esta última preferida quando há componente de skewfoot. Evite a liberação tarsometatarsal ampla tipo Heyman-Herndon, cujo histórico de rigidez, dor e degeneração tardia a tornou praticamente obsoleta.",
      figureId: "metatarso-aduto:cirurgia",
      figureVariant: "osteotomia-bases",
      tips: [
        "Indique por sintoma e função, não por ângulo ou estética parental",
        "Liberar o abdutor do hálux contraturado evita recidiva do 1º raio",
        "Deixe pontes de pele adequadas entre incisões dorsais",
      ],
      pitfalls: [
        "Lesar a fise proximal do 1º metatarso e encurtar o raio",
        "Escolher a liberação TMT ampla e trocar deformidade por rigidez dolorosa",
        "Operar deformidade assintomática que a criança nunca notaria",
      ],
    },
  ],
  postop: {
    immobilization:
      "No tratamento conservador, o gesso longo acima do joelho (joelho a 90°) é trocado a cada 1 a 2 semanas por tipicamente 4 a 6 trocas, até a bissetora alcançar o 2º-3º espaço; segue-se retenção com sapato de forma reta ou órtese por alguns meses. Após osteotomias, gesso suropodálico ou acima do joelho por cerca de 6 semanas, conforme a estabilidade e a idade, até a consolidação. No pé flexível, não há imobilização: o tratamento é observação.",
    weightBearing:
      "O lactente não deambulante não impõe restrição prática. Na criança que já anda, o gesso pode ser liberado para carga conforme conforto e conforme o objetivo do gesso seja moldagem e não fixação. No pós-operatório de osteotomias, evita-se a carga até sinais de consolidação, tipicamente por volta de 6 semanas, com progressão em seguida. Órteses e sapatos de forma reta são usados apenas como retenção, com carga livre.",
    rehab: [
      {
        window: "Fase de observação (pé flexível)",
        weightBearing: "Livre",
        focus:
          "Alongamento passivo domiciliar opcional; reavaliação clínica a cada 3 a 6 meses com registro da bissetora e da flexibilidade; orientação parental sobre a história natural.",
      },
      {
        window: "0-8 semanas (gessos seriados)",
        weightBearing: "Livre no gesso, conforme conforto",
        focus:
          "Trocas a cada 1 a 2 semanas com manipulação e moldagem progressiva em abdução do antepé, contra-apoio no cuboide, retropé neutro; vigiar pele, perfusão e gesso apertado.",
      },
      {
        window: "2-6 meses (retenção pós-gesso)",
        weightBearing: "Livre",
        focus:
          "Sapato de forma reta ou órtese para manter a correção; alongamento domiciliar; reavaliar recidiva, sobretudo do 1º raio por contratura do abdutor do hálux.",
      },
      {
        window: "0-6 semanas (pós-osteotomia)",
        weightBearing: "Sem carga ou carga protegida",
        focus:
          "Imobilização até a consolidação; controle da dor e do edema; vigilância neurovascular e da pele das incisões dorsais.",
      },
      {
        window: "6 semanas-6 meses (pós-osteotomia)",
        weightBearing: "Progressiva conforme consolidação",
        focus:
          "Retirada do gesso, retomada de carga e marcha, recuperação de mobilidade do mediopé e do antepé, calçado adequado e retorno gradual às atividades.",
      },
    ],
    followup:
      "Acompanhar clinicamente com a bissetora do calcâneo e a flexibilidade a cada 3 a 6 meses até a resolução ou até os 2 a 3 anos; lembre que antes dos 3 anos não é possível identificar de forma confiável o pé que será resistente. Alta quando o pé estiver corrigido, móvel e assintomático. Radiografia não é rotina — reserve-a ao planejamento pré-operatório e à dúvida com skewfoot. No pós-operatório, controle radiográfico até a consolidação e seguimento até o fim do crescimento se houve risco fisário no 1º metatarso. A deformidade residual moderada e assintomática não exige tratamento nem seguimento indefinido.",
  },
  complications: [
    {
      name: "Tratamento desnecessário de uma condição autolimitada",
      detail:
        "É a complicação mais comum e a mais invisível: gesso, órtese e sapato corretivo aplicados a pés flexíveis que resolveriam sozinhos, gerando custo, desconforto, lesão de pele e medicalização da família — com um sucesso que a história natural já entregaria.",
      prevention:
        "Estratificar por flexibilidade, documentar a bissetora seriada e explicar a história natural com números aos pais antes de oferecer qualquer material.",
    },
    {
      name: "Skewfoot iatrogênico (valgo do retropé)",
      detail:
        "Gesso ou manipulação com contra-apoio na cabeça do tálus ou no calcâneo medial empurra o retropé em valgo enquanto o antepé é abduzido, estruturando a deformidade em Z e criando um problema pior do que o original.",
      prevention:
        "Fulcro sempre no cuboide e na borda lateral do retropé, com o retropé livre em neutro; reavaliar a posição do calcâneo a cada troca de gesso.",
    },
    {
      name: "Diagnóstico perdido: pé torto congênito",
      detail:
        "O antepé aduzido é comum a ambos; rotular de metatarso aduto um pé torto atrasa o método de Ponseti e piora o resultado da correção.",
      prevention:
        "Filtro obrigatório no retropé: equino e varo com rigidez e prega medial excluem metatarso aduto.",
    },
    {
      name: "Displasia do desenvolvimento do quadril não reconhecida",
      detail:
        "Deformidade posicional associada ao mesmo mecanismo de empacotamento intrauterino; concentrar-se no pé e não examinar o quadril pode retardar o diagnóstico de uma condição com janela terapêutica estreita.",
      prevention:
        "Ortolani, Barlow e avaliação da abdução em todo lactente com metatarso aduto; ultrassonografia diante de qualquer achado ou fator de risco.",
    },
    {
      name: "Complicações do gesso",
      detail:
        "Úlcera de pressão sobre a base do 5º metatarso e os maléolos, dermatite, gesso apertado com comprometimento neurovascular e, raramente, síndrome compartimental; gesso curto que escapa e não controla a rotação.",
      prevention:
        "Acolchoamento das proeminências, gesso acima do joelho com joelho a 90°, orientação parental sobre sinais de alarme e retorno imediato.",
    },
    {
      name: "Recidiva da adução, sobretudo do 1º raio",
      detail:
        "O abdutor do hálux contraturado reproduz a adução do primeiro raio após a correção por gesso ou cirurgia.",
      prevention:
        "Retenção com sapato de forma reta após o gesso; considerar liberação do abdutor do hálux no tempo cirúrgico quando houver contratura.",
    },
    {
      name: "Rigidez e dor após liberação tarsometatarsal ampla",
      detail:
        "A liberação circunferencial tipo Heyman-Herndon associa-se a rigidez do mediopé, dor e degeneração articular tardia, com resultados de longo prazo ruins — motivo de seu virtual abandono.",
      prevention:
        "Preferir osteotomias das bases metatarsais ou correção pelo mediopé (cuneiforme medial e cuboide), preservando as articulações tarsometatarsais.",
    },
    {
      name: "Lesão da fise proximal do 1º metatarso",
      detail:
        "A osteotomia da base do 1º metatarso corre junto à fise proximal, responsável pelo crescimento longitudinal do raio; sua lesão gera encurtamento e deformidade progressiva.",
      prevention:
        "Identificar a fise no intraoperatório e posicionar a osteotomia distal a ela; controle fluoroscópico e seguimento até o fim do crescimento.",
    },
  ],
  evidence: [
    {
      id: "rushforth-1978-historia-natural",
      claim:
        "Em estudo prospectivo de 130 pés com antepé aduzido idiopático não tratado, seguidos em média por sete anos, 86% estavam normais ou apenas levemente deformados e todos móveis, 10% permaneciam moderadamente deformados porém assintomáticos e apenas 4% seguiam deformados e rígidos; não foi possível identificar os casos resistentes antes dos três anos de idade.",
      takeaway:
        "A história natural é o argumento central: a resolução espontânea é a regra, a taxa de falha é baixa e o prognóstico não é identificável precocemente — o que justifica conduta expectante e desautoriza tratar todo mundo.",
      level: "II",
      studyType: "Coorte prospectiva de história natural (sem tratamento)",
      era: "classico",
      citation: {
        authors: "Rushforth GF",
        title: "The natural history of hooked forefoot.",
        journal: "J Bone Joint Surg Br",
        year: 1978,
        pmid: "711803",
        doi: "10.1302/0301-620X.60B4.711803",
      },
    },
    {
      id: "farsetti-1994-longo-prazo",
      claim:
        "Em 31 pacientes (45 pés) seguidos em média por 32 anos e meio, os 16 pés com deformidade passivamente corrigível não receberam tratamento e tiveram 100% de bons resultados, e 26 dos 29 pés (90%) parcialmente flexíveis ou rígidos tratados com manipulação e gessos seriados também tiveram bom resultado; não houve resultado ruim, nenhum paciente foi operado e hálux valgo não foi desfecho comum.",
      takeaway:
        "No horizonte de três décadas, o metatarso aduto flexível não tratado é benigno e o rígido responde bem ao gesso — não há justificativa para tratar a deformidade corrigível nem para temer sequelas funcionais tardias.",
      level: "IV",
      studyType: "Série de casos com seguimento de longuíssimo prazo (média 32,5 anos)",
      era: "classico",
      citation: {
        authors: "Farsetti P, Weinstein SL, Ponseti IV",
        title:
          "The long-term functional and radiographic outcomes of untreated and non-operatively treated metatarsus adductus.",
        journal: "J Bone Joint Surg Am",
        year: 1994,
        pmid: "8113262",
        doi: "10.2106/00004623-199402000-00014",
      },
    },
    {
      id: "bleck-1983-classificacao-idade",
      claim:
        "Em 160 crianças (265 pés) prospectivamente graduadas por gravidade e flexibilidade e tratadas com gesso ou gesso seguido de órtese, o único preditor significativo de bom resultado foi a idade ao início do tratamento, significativamente melhor quando iniciado entre o primeiro dia e os 8 meses; nem a gravidade nem a flexibilidade se correlacionaram com maus resultados.",
      takeaway:
        "A graduação de Bleck pela bissetora do calcâneo organiza a linguagem clínica, mas não prediz o resultado do tratamento — quando se decide gessar, o que importa é gessar cedo.",
      level: "IV",
      studyType: "Estudo retrospectivo de resultados com coorte graduada prospectivamente",
      era: "classico",
      citation: {
        authors: "Bleck EE",
        title: "Metatarsus adductus: classification and relationship to outcomes of treatment.",
        journal: "J Pediatr Orthop",
        year: 1983,
        pmid: "6841597",
      },
    },
    {
      id: "williams-2013-revisao-sistematica",
      claim:
        "Revisão sistemática de 13 artigos sobre tratamento conservador do metatarso aduto, avaliados pelos níveis de evidência do NHMRC, encontrou evidência forte a favor de nenhum tratamento no metatarso aduto flexível e apenas evidência limitada para o tratamento do metatarso aduto semirrígido.",
      takeaway:
        "A recomendação baseada em evidência para o pé flexível é explicitamente não tratar; alongamento, tala, gesso, posicionamento e calçado/órtese carecem de suporte fora do pé semirrígido ou rígido.",
      level: "II",
      studyType: "Revisão sistemática da literatura com graduação de evidência",
      era: "atual",
      citation: {
        authors: "Williams CM, James AM, Tran T",
        title: "Metatarsus adductus: development of a non-surgical treatment pathway.",
        journal: "J Paediatr Child Health",
        year: 2013,
        pmid: "23647850",
        doi: "10.1111/jpc.12219",
      },
    },
    {
      id: "ponseti-1966-gesso",
      claim:
        "Série original de Ponseti e Becker sobre metatarso aduto congênito tratado por manipulação e gessos seriados, estabelecendo a técnica conservadora de referência e a distinção entre a deformidade flexível e a que exige correção ativa.",
      takeaway:
        "É a base histórica da manipulação com gesso no metatarso aduto e da separação entre o pé que se resolve sozinho e o pé que precisa de moldagem — princípio depois reafirmado no seguimento de longo prazo de Farsetti.",
      level: "IV",
      studyType: "Série de casos original com técnica conservadora",
      era: "classico",
      citation: {
        authors: "Ponseti IV, Becker JR",
        title: "Congenital metatarsus adductus: the results of treatment.",
        journal: "J Bone Joint Surg Am",
        year: 1966,
        pmid: "15580738",
      },
    },
  ],
  pearls: [
    "Retropé neutro é o que define a entidade: se há equino e varo, é pé torto; se há valgo, é skewfoot.",
    "O ápice é a tarsometatarsal — o antepé gira em bloco sobre a fileira dos cuneiformes e do cuboide.",
    "Bissetora do calcâneo normal sai entre o 2º e o 3º pododáctilos; é exame de beira de leito, sem radiografia.",
    "A flexibilidade decide a conduta; a gravidade estática apenas descreve.",
    "História natural: cerca de 86% dos pés não tratados ficam normais ou minimamente deformados e móveis.",
    "Quando decidir gessar, gesse cedo — o único preditor de bom resultado é iniciar antes dos 8 meses.",
    "O fulcro da correção é o cuboide, nunca a cabeça do tálus: fulcro errado fabrica um skewfoot.",
    "Examine o quadril de todo lactente com metatarso aduto — é a mesma família de deformidades posicionais.",
    "Sapato corretivo e barra para intoeing não têm eficácia demonstrada; prescrevê-los é medicalizar o normal.",
  ],
  pitfalls: [
    "Graduar a bissetora sem antes filtrar o retropé e observar um pé torto congênito.",
    "Usar a cabeça do tálus ou o calcâneo medial como contra-apoio e criar valgo do retropé e skewfoot iatrogênico.",
    "Gessar pé flexível e atribuir ao gesso o que a história natural faria sozinha.",
    "Iniciar gesso depois dos 12 meses esperando o resultado do lactente de 3 meses.",
    "Prescrever órtese ou sapato corretivo para tranquilizar os pais, com promessa de correção que a evidência não sustenta.",
    "Pedir radiografia de rotina em lactente e passar a tratar o ângulo em vez da criança.",
    "Concentrar-se no pé e deixar passar uma displasia do desenvolvimento do quadril.",
    "Escolher a liberação tarsometatarsal ampla e trocar uma deformidade benigna por rigidez dolorosa.",
    "Lesar a fise proximal do 1º metatarso na osteotomia de base e encurtar o raio.",
    "Operar deformidade assintomática por incômodo estético dos pais.",
  ],
  figures: [
    {
      id: "metatarso-aduto:anatomia",
      caption:
        "Adução do antepé com ápice na tarsometatarsal: borda lateral convexa, base do 5º proeminente, borda medial côncava e retropé neutro.",
      alt: "Vista dorsal do pé com antepé aduzido sobre a articulação tarsometatarsal e vista posterior do retropé neutro",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:linha-bissetora",
      variant: "normal",
      caption: "Bissetora do calcâneo normal: a linha emerge entre o 2º e o 3º pododáctilos.",
      alt: "Linha bissetora do calcâneo em pé normal",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:linha-bissetora",
      variant: "leve",
      caption: "Metatarso aduto leve: a bissetora emerge sobre o 3º pododáctilo.",
      alt: "Linha bissetora do calcâneo no metatarso aduto leve",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:linha-bissetora",
      variant: "moderado",
      caption: "Metatarso aduto moderado: a bissetora emerge entre o 3º e o 4º pododáctilos.",
      alt: "Linha bissetora do calcâneo no metatarso aduto moderado",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:linha-bissetora",
      variant: "grave",
      caption: "Metatarso aduto grave: a bissetora emerge entre o 4º e o 5º pododáctilos.",
      alt: "Linha bissetora do calcâneo no metatarso aduto grave",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:flexibilidade",
      variant: "flexivel",
      caption: "Pé flexível: o antepé corrige passivamente até além do neutro — observação.",
      alt: "Teste de flexibilidade do antepé em metatarso aduto flexível",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:flexibilidade",
      variant: "parcial",
      caption: "Pé parcialmente flexível: corrige, mas não alcança o neutro.",
      alt: "Teste de flexibilidade do antepé em metatarso aduto parcialmente flexível",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:flexibilidade",
      variant: "rigido",
      caption: "Pé rígido: não corrige à manobra passiva — candidato a gessos seriados precoces.",
      alt: "Teste de flexibilidade do antepé em metatarso aduto rígido",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:diferencial",
      variant: "metatarso-aduto",
      caption: "Metatarso aduto: antepé aduzido com retropé neutro e sem equino.",
      alt: "Metatarso aduto com retropé neutro na vista posterior",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:diferencial",
      variant: "pe-torto",
      caption: "Pé torto congênito: antepé aduzido somado a varo do retropé e equino.",
      alt: "Pé torto congênito com retropé em varo e equino",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:diferencial",
      variant: "skewfoot",
      caption: "Skewfoot: antepé aduzido com retropé em valgo e mediopé abduzido — deformidade em Z.",
      alt: "Skewfoot com retropé em valgo e deformidade em Z",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:historia-natural",
      caption:
        "História natural: resolução espontânea da grande maioria dos pés e desfecho ao reexame (86% normais ou mínimos, 10% moderados assintomáticos, 4% rígidos).",
      alt: "Curva de resolução espontânea do metatarso aduto e distribuição do desfecho final",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:gesso",
      caption:
        "Manipulação e gesso seriado: abdução do antepé contra contra-apoio no cuboide, com o retropé livre em neutro.",
      alt: "Técnica de manipulação e gesso seriado no metatarso aduto com fulcro no cuboide",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:cirurgia",
      variant: "osteotomia-bases",
      caption: "Osteotomias das bases do 1º ao 5º metatarso, poupando a fise proximal do 1º metatarso.",
      alt: "Osteotomias das bases metatarsais para correção do metatarso aduto",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:cirurgia",
      variant: "cuneiforme-cuboide",
      caption:
        "Correção pelo mediopé: cunha de abertura no cuneiforme medial e cunha de fechamento no cuboide.",
      alt: "Cunha de abertura no cuneiforme medial e de fechamento no cuboide",
      kind: "diagram",
    },
    {
      id: "metatarso-aduto:cirurgia",
      variant: "capsulotomia-tmt",
      caption:
        "Liberação tarsometatarsal ampla (Heyman-Herndon): rigidez, dor e degeneração tardia levaram ao seu abandono.",
      alt: "Liberação circunferencial das cápsulas tarsometatarsais",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o Exame de Título de Ortopedia e Traumatologia (Ortopedia Pediátrica).",
      "Herring JA. Tachdjian's Pediatric Orthopaedics. 6th ed. 2022.",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics. 8th ed. 2021.",
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children. 10th ed. 2024.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: Princípios e Prática. 6ª ed. 2025.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, sem reprodução de material protegido.",
    figureReference:
      "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024) / Tachdjian's Pediatric Orthopaedics 6ª",
  },
});
