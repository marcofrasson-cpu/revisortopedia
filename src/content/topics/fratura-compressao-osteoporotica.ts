import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "fratura-compressao-osteoporotica",
  slug: "fratura-compressao-osteoporotica",
  regionId: "coluna",
  bone: "Toracolombar",
  injury: "Fratura por compressão osteoporótica",
  title: "Fratura por compressão osteoporótica",
  subtitle:
    "Fratura de fragilidade da transição toracolombar — a sentinela da osteoporose e a maior controvérsia da coluna",
  laterality: null,
  status: "complete",

  overview:
    "A fratura por compressão osteoporótica é a fratura de fragilidade mais comum e, ao mesmo tempo, a mais subdiagnosticada: a maior parte nunca chega ao pronto-socorro e aparece como achado incidental em uma radiografia de tórax ou de abdome pedida por outro motivo. Ocorre por trauma mínimo ou ausente — tossir, curvar-se para calçar um sapato, levantar uma sacola de compras — e concentra-se na transição toracolombar (T11–L2), onde a coluna torácica, rígida e sustentada pelas costelas, encontra a lombar móvel. O quadro típico é dor axial de início súbito, mecânica, que piora ao sentar e ao levantar e alivia em decúbito, sem irradiação radicular e sem deficit neurológico. Dor à percussão do processo espinhoso do nível acometido é o achado mais útil do exame físico.\n\nO ponto central deste tópico não é a fratura em si, e sim o que ela anuncia. Uma fratura vertebral por fragilidade é uma SENTINELA: identifica um paciente com risco muito elevado de nova fratura vertebral e de fratura do quadril, e associa-se a excesso de mortalidade nos anos seguintes. Tratar apenas a dor e devolver o paciente para casa sem investigar e tratar a osteoporose é o erro mais frequente e mais caro desta condição — e é justamente o passo com a melhor evidência de benefício, incluindo redução de mortalidade.\n\nO tratamento é conservador na esmagadora maioria dos casos: analgesia escalonada, mobilização precoce e reabilitação, associadas ao tratamento farmacológico da osteoporose. A augmentação vertebral percutânea (vertebroplastia e cifoplastia) é a grande controvérsia da coluna. Os ensaios randomizados com controle simulado (sham) — Buchbinder e INVEST, ambos publicados no NEJM em 2009, e VERTOS IV, no BMJ em 2018 — não demonstraram superioridade sobre o placebo, enquanto ensaios abertos (VERTOS II) e um ensaio com sham em subgrupo selecionado (VAPOUR: fratura com menos de seis semanas e dor ≥ 7/10) mostraram benefício. A leitura madura é que o procedimento não tem lugar rotineiro, mas pode ter espaço em um nicho estreito e bem definido — e que a diferença entre os ensaios abertos e os cegados mede, na prática, o tamanho do efeito de expectativa em um procedimento com agulha.",

  keyFacts: [
    {
      label: "Epidemiologia",
      value:
        "Fratura de fragilidade mais comum. Cerca de dois terços são clinicamente silenciosas e só aparecem como achado incidental em radiografia.",
    },
    {
      label: "Localização",
      value:
        "T11–L2 concentra a maioria: transição entre a coluna torácica rígida (costelas) e a lombar móvel, com carga em flexão sobre a coluna anterior.",
    },
    {
      label: "Mecanismo",
      value:
        "Trauma mínimo ou ausente — tossir, espirrar, curvar-se, levantar peso leve. Trauma de alta energia em jovem é outra doença (classificação AO Spine).",
    },
    {
      label: "Quadro típico",
      value:
        "Dor axial súbita, mecânica, pior ao sentar/levantar e melhor deitado; dor à percussão do processo espinhoso. Sem deficit neurológico.",
    },
    {
      label: "Sentinela",
      value:
        "A fratura identifica quem vai fraturar de novo. Uma fratura vertebral prévia é o mais forte preditor isolado de nova fratura vertebral.",
    },
    {
      label: "Mortalidade",
      value:
        "Fratura de fragilidade associa-se a excesso de mortalidade; o zoledronato após fratura reduziu a mortalidade por qualquer causa em 28% (HORIZON-RFT).",
    },
    {
      label: "Datação — RM",
      value:
        "STIR é o exame que data a fratura: edema medular = fratura recente e não consolidada. Sem edema, a dor atual provavelmente não vem dali.",
    },
    {
      label: "Classificações",
      value:
        "Genant (semiquantitativa, morfologia + grau de perda de altura) e OF/DGOU (OF 1–5, guia de conduta via OF-score).",
    },
    {
      label: "Tratamento base",
      value:
        "Conservador + tratamento da osteoporose. Analgesia isolada, sem investigar e tratar a doença de base, é tratamento incompleto.",
    },
    {
      label: "Controvérsia",
      value:
        "Vertebroplastia vs sham: Buchbinder, INVEST e VERTOS IV negativos; a metanálise Cochrane confirma. Só o VAPOUR foi positivo, em nicho estreito.",
    },
    {
      label: "Bandeiras vermelhas",
      value:
        "Idade < 60 anos, dor noturna/em repouso, perda de peso, febre, nível T1–T4, pedículo destruído ou massa de partes moles: investigar mieloma, metástase e infecção.",
    },
    {
      label: "Cirurgia aberta",
      value:
        "Reservada a OF4/OF5, deficit neurológico e coluna anquilosada. Exige parafusos cimentados/fenestrados e construtos longos no osso osteoporótico.",
    },
  ],

  anatomy: {
    text:
      "O corpo vertebral é essencialmente osso trabecular envolto por uma casca cortical fina e pelos platôs terminais. Na osteoporose, as trabéculas horizontais (transversais) desaparecem antes das verticais: o corpo passa a se comportar como uma série de colunas finas sem travamento lateral e falha por flambagem sob carga axial — daí o colapso ocorrer de forma súbita, com trauma trivial, e tipicamente junto ao platô superior, que é o mais fino e o mais carregado.\n\nA transição toracolombar (T11–L2) é o sítio de eleição por três razões somadas. Primeiro, é a passagem entre a coluna torácica, rigidamente estabilizada pelo gradil costal, e a coluna lombar, móvel — a mudança abrupta de rigidez concentra tensão. Segundo, é onde a cifose torácica se converte em lordose lombar, de modo que a linha de carga passa anteriormente ao segmento e gera um momento fletor sobre a coluna anterior. Terceiro, em flexão a coluna anterior (corpo + dois terços anteriores do disco) absorve a maior parte da carga, e é justamente ela que é feita de osso trabecular.\n\nA parede posterior do corpo vertebral é habitualmente poupada na fratura osteoporótica típica — é isso que explica a ausência de deficit neurológico e é o critério que separa a OF 2 da OF 3 na classificação da DGOU. Quando há retropulsão de fragmento ou deficit, a lesão saiu do padrão osteoporótico simples e exige reavaliação diagnóstica. Vale lembrar que o cone medular termina em T12–L1: uma fratura desse nível com compressão atinge, ao mesmo tempo, cone e raízes da cauda equina, com padrão neurológico misto e prognóstico pior.\n\nO pedículo é o corredor de acesso: é cortical, resiste bem mesmo no osso osteoporótico e conduz do plano posterior ao corpo vertebral. Suas corticais medial e inferior são as barreiras que protegem, respectivamente, o saco dural e a raiz emergente — violá-las é a complicação técnica clássica da augmentação e da instrumentação. Nos níveis torácicos altos, o pedículo é estreito e obriga ao trajeto extrapedicular/costotransversário, com a pleura e a artéria segmentar sob risco.\n\nA drenagem venosa do corpo vertebral faz-se por veias basivertebrais amplas que confluem para o plexo venoso vertebral interno — sem válvulas e em comunicação direta com o sistema ázigos e a veia cava. É essa anatomia que transforma um extravasamento de cimento no corpo vertebral em embolia pulmonar de cimento, e é por ela que a injeção precisa ser feita com cimento viscoso, sob baixa pressão e com fluoroscopia contínua em perfil.",
    figureIds: [
      "fratura-compressao-osteoporotica:anatomia",
      "fratura-compressao-osteoporotica:cifose-sagital",
    ],
  },

  classification: [
    {
      id: "genant",
      name: "Genant — semiquantitativa",
      basis:
        "Avaliação visual da perda de altura do corpo vertebral em radiografia de perfil, definindo o grau pela maior perda entre as alturas anterior, média e posterior.",
      note:
        "É a linguagem padrão dos ensaios clínicos e dos laudos de densitometria (VFA/morfometria). A deformidade 'borderline' — alteração de forma sem perda de 20% — não conta como fratura. Descrita por Genant e colaboradores em 1993 com concordância interobservador confiável quando aplicada com critérios bem definidos.",
      types: [
        {
          code: "G0",
          label: "Grau 0 — normal",
          description:
            "Sem perda de altura mensurável (< 20%). Inclui a categoria 'borderline', em que há alteração de forma sem atingir o limiar de 20% — não deve ser rotulada como fratura.",
          figureId: "fratura-compressao-osteoporotica:genant",
        },
        {
          code: "G1",
          label: "Grau 1 — leve",
          description:
            "Perda de 20 a 25% de qualquer das alturas (anterior, média ou posterior), com redução aproximada de 10 a 20% da área do corpo vertebral.",
          figureId: "fratura-compressao-osteoporotica:genant",
        },
        {
          code: "G2",
          label: "Grau 2 — moderada",
          description:
            "Perda de 25 a 40% de qualquer das alturas, com redução aproximada de 20 a 40% da área do corpo vertebral.",
          figureId: "fratura-compressao-osteoporotica:genant",
        },
        {
          code: "G3",
          label: "Grau 3 — grave",
          description:
            "Perda superior a 40% de qualquer das alturas e da área. Corresponde ao extremo do colapso, incluindo a vértebra plana.",
          figureId: "fratura-compressao-osteoporotica:genant",
        },
      ],
    },
    {
      id: "morfologia",
      name: "Padrão morfológico",
      basis:
        "Localização da perda de altura no corpo vertebral, avaliada no perfil. Complementa o grau de Genant e orienta a leitura biomecânica da deformidade.",
      note:
        "A cunha anterior é o padrão dominante na transição toracolombar e é a que gera cifose; a bicôncava predomina na lombar, onde o disco hidratado empurra os platôs; o esmagamento é o colapso global e costuma ser o mais doloroso e o mais instável.",
      types: [
        {
          code: "cunha",
          label: "Cunha anterior",
          description:
            "Perda seletiva da altura anterior com parede posterior preservada. É o padrão mais frequente em T11–L2 e o único que produz cifose segmentar — cada cunha soma alguns graus de deformidade ao perfil sagital.",
          figureId: "fratura-compressao-osteoporotica:genant",
          figureVariant: "cunha",
        },
        {
          code: "biconcava",
          label: "Bicôncava (vértebra em peixe)",
          description:
            "Depressão central dos dois platôs com alturas anterior e posterior relativamente preservadas. Típica da coluna lombar, onde o núcleo pulposo ainda hidratado é impelido contra platôs enfraquecidos.",
          figureId: "fratura-compressao-osteoporotica:genant",
          figureVariant: "biconcava",
        },
        {
          code: "esmagamento",
          label: "Esmagamento (crush)",
          description:
            "Perda de todas as alturas — anterior, média e posterior. Sugere carga axial pura ou osso muito comprometido; obriga a excluir causa secundária (mieloma, metástase) antes de aceitar o rótulo de osteoporótica.",
          figureId: "fratura-compressao-osteoporotica:genant",
          figureVariant: "esmagamento",
        },
      ],
    },
    {
      id: "of-dgou",
      name: "Classificação OF (Spine Section da DGOU)",
      basis:
        "Morfologia da fratura em cinco grupos, definidos pela deformidade do corpo vertebral e pelo envolvimento da parede posterior, avaliados em radiografia, TC e RM.",
      note:
        "Publicada por Schnake e colaboradores (Global Spine J, 2018) com concordância interobservador substancial (κ = 0,63). É a classificação de escolha para a fratura osteoporótica porque, ao contrário da AO Spine (concebida para trauma), separa exatamente o que muda a conduta neste cenário. Combina-se ao OF-score, que soma o tipo OF à dor, à mobilidade, às comorbidades e à densidade óssea: escore ≤ 5 favorece o tratamento conservador, ≥ 7 favorece a cirurgia e 6 é zona cinzenta que exige decisão individualizada.",
      types: [
        {
          code: "OF1",
          label: "OF 1 — sem deformidade do corpo vertebral",
          description:
            "Edema vertebral sem deformidade. A radiografia é normal e o diagnóstico só existe na RM (STIR) ou na cintilografia. Conduta conservadora, com o foco inteiramente no tratamento da osteoporose.",
          figureId: "fratura-compressao-osteoporotica:classificacao-of",
          figureVariant: "OF1",
        },
        {
          code: "OF2",
          label: "OF 2 — deformidade com parede posterior poupada",
          description:
            "Deformidade do corpo vertebral com envolvimento nulo ou mínimo (menos de 1/5) da parede posterior. É a fratura osteoporótica clássica em cunha. Conservadora na grande maioria.",
          figureId: "fratura-compressao-osteoporotica:classificacao-of",
          figureVariant: "OF2",
        },
        {
          code: "OF3",
          label: "OF 3 — deformidade com parede posterior acometida",
          description:
            "Deformidade com envolvimento nítido (mais de 1/5) da parede posterior, em geral sem retropulsão significativa e sem deficit. A augmentação isolada torna-se arriscada — há caminho para o cimento entrar no canal.",
          figureId: "fratura-compressao-osteoporotica:classificacao-of",
          figureVariant: "OF3",
        },
        {
          code: "OF4",
          label: "OF 4 — perda da integridade estrutural",
          description:
            "Perda da integridade do arcabouço vertebral: colapso do corpo, vértebra plana, fratura em pinça (pincer) ou cleft intravertebral (pseudartrose vertebral / fenômeno de Kümmell). É instável e progride — cenário de estabilização, isolada ou com augmentação.",
          figureId: "fratura-compressao-osteoporotica:classificacao-of",
          figureVariant: "OF4",
        },
        {
          code: "OF5",
          label: "OF 5 — lesão por distração ou rotação",
          description:
            "Falha das colunas anterior e posterior por distração ou cisalhamento/rotação. Ocorre tipicamente na coluna anquilosada (espondilite anquilosante, DISH), em que a alavanca longa transforma um trauma trivial em fratura instável. Sempre cirúrgica, com construto longo.",
          figureId: "fratura-compressao-osteoporotica:classificacao-of",
          figureVariant: "OF5",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Fratura recente (menos de 6 semanas), com edema na RM no nível correspondente à dor, e dor intensa (EVA/NRS ≥ 7–8) refratária, que impede a mobilização ou exige opioide não tolerado — o nicho definido pelo VAPOUR, tipicamente em paciente internado: augmentação percutânea.",
      "Dor incapacitante que persiste após 3 a 6 semanas de tratamento conservador otimizado, com edema mantido na RM no nível sintomático: augmentação percutânea, após consentimento explícito sobre a evidência dos ensaios com sham.",
      "OF 4 — cleft intravertebral / pseudartrose vertebral (Kümmell) com dor mecânica em báscula ('abre e fecha' entre decúbito e ortostase): a cavidade não consolida sozinha e é o cenário com o racional mais forte para preenchimento com cimento.",
      "Colapso progressivo documentado em radiografias seriadas em ortostase, com cifose segmentar crescente: augmentação e/ou estabilização.",
      "Deficit neurológico por retropulsão de fragmento ou por cifose crítica (raro na fratura osteoporótica pura): descompressão e instrumentação posterior com parafusos cimentados.",
      "OF 5 — fratura por distração ou cisalhamento, sobretudo em coluna anquilosada (espondilite anquilosante, DISH): sempre cirúrgica, com instrumentação longa (3 níveis acima e 3 abaixo), independentemente do grau de dor.",
      "Deformidade sagital fixa e sintomática, com desequilíbrio anterior que impede a marcha e o olhar horizontal, em paciente com reserva clínica para uma cirurgia de grande porte.",
      "Suspeita ou confirmação de fratura patológica por tumor ou infecção: a conduta passa a ser a da doença de base — biópsia obrigatória antes ou durante qualquer procedimento.",
    ],
    nonOperative: [
      "Analgesia escalonada: paracetamol ou dipirona de base; AINH com muita cautela e por poucos dias no idoso (risco renal, gástrico e cardiovascular); opioide fraco por curto período, sempre associado a laxante e com vigilância de delirium e quedas.",
      "Mobilização precoce, em 24 a 48 horas. Repouso no leito é intervenção ativa com efeitos colaterais: perda óssea e muscular acelerada, TVP, pneumonia, delirium, úlcera de pressão e constipação.",
      "Órtese (colete tipo Jewett ou TLSO) apenas para conforto e por poucas semanas, se ela realmente permitir mobilizar mais cedo. Não consolida, não previne cifose e, usada por muito tempo, atrofia os extensores do tronco.",
      "Fisioterapia com foco em fortalecimento dos extensores do tronco, treino de equilíbrio, marcha e proteção da coluna nas atividades diárias; exercícios de flexão intensa da coluna devem ser evitados na fase inicial.",
      "Prevenção de queda: revisão de fármacos sedativos e hipotensores, avaliação de visão, correção de riscos domiciliares, calçado adequado.",
      "INVESTIGAÇÃO DA OSTEOPOROSE: densitometria (DXA), cálcio, fósforo, função renal e hepática, 25-OH-vitamina D, PTH, TSH, hemograma, VHS/PCR, eletroforese de proteínas séricas e urinárias (mieloma), testosterona no homem.",
      "Reposição de cálcio (dieta ± suplemento) e correção da vitamina D antes e durante o antirreabsortivo — bisfosfonato em paciente hipovitaminótico gera hipocalcemia.",
      "TRATAMENTO FARMACOLÓGICO DA OSTEOPOROSE, iniciado já na fase aguda: bisfosfonato (zoledronato anual ou alendronato semanal) ou denosumabe; agente anabólico (teriparatida ou romosozumabe) no paciente de altíssimo risco — fratura vertebral grave, múltiplas fraturas ou fratura sob tratamento antirreabsortivo — seguido obrigatoriamente de antirreabsortivo.",
      "Encaminhamento formal a um serviço de coordenação de fraturas (FLS — Fracture Liaison Service) ou a um responsável nominal pelo seguimento da osteoporose. Sem um dono, o tratamento não acontece.",
    ],
    decisionNotes:
      "A decisão tem duas camadas, e elas não têm o mesmo peso. A primeira — tratar ou não a osteoporose — não é uma decisão: é obrigatória, tem evidência de nível I e é o único componente que comprovadamente reduz novas fraturas e mortalidade. A segunda — cimentar ou não — é a que consome o debate e é a que menos muda o desfecho.\n\nSobre a augmentação, a evidência é desconfortavelmente clara e vale entendê-la, não decorá-la. Três ensaios randomizados, duplo-cegos e com controle simulado — Buchbinder (n = 78) e INVEST/Kallmes (n = 131), ambos em 2009, e VERTOS IV (n = 180), em 2018 — não encontraram diferença clinicamente relevante entre a vertebroplastia e um procedimento em que se faz tudo igual, inclusive anestesia nos pedículos, exceto injetar o cimento. A metanálise Cochrane de 2018, com evidência de alta a moderada qualidade, consolidou: o ganho de dor sobre o placebo é de cerca de 0,7 ponto em 10, muito abaixo do limiar de relevância clínica de 15%, e não difere entre fratura aguda e subaguda. Nos dois braços de todos esses ensaios a dor caiu muito — o que não se sustenta é atribuir essa melhora ao cimento.\n\nA divergência tem explicação, e ela é metodológica. Os ensaios ABERTOS, que comparam vertebroplastia com tratamento usual, são consistentemente positivos: o VERTOS II mostrou 2,6 pontos de vantagem em 1 mês. Mas VERTOS II e VERTOS IV vieram do mesmo grupo, no mesmo país, com a mesma técnica — a única variável que mudou foi o cegamento, e o efeito desapareceu. A própria análise de sensibilidade da Cochrane demonstra que os ensaios abertos superestimam o benefício. Ou seja: a diferença entre VERTOS II e VERTOS IV é a melhor medida publicada do efeito de expectativa de um procedimento com agulha em paciente idoso com dor. Citar o VERTOS II sem citar o VERTOS IV é erro de leitura, não diferença de opinião.\n\nO contraponto honesto é o VAPOUR (2016), o único ensaio com sham positivo. Ele não contradiz os demais — ele define um subgrupo que os outros diluíam: fratura com menos de 6 semanas, dor NRS ≥ 7/10 (a maioria dos pacientes internada, ou seja, dor que já falhou no tratamento ambulatorial) e técnica de preenchimento vertebral adequado. Aos 14 dias, 44% do grupo vertebroplastia vs 21% do placebo tinham NRS < 4. É um nicho estreito, e é sobre ele que a discussão clínica deve girar — não sobre a fratura em cunha assintomática vista num raio-X de tórax.\n\nNa prática, isso se traduz assim. Fratura OF 1 ou OF 2, dor tolerável com analgesia oral, paciente andando: conservador, sem discussão, e tratamento da osteoporose iniciado na mesma consulta. Dor que impede mobilizar, com edema na RM no nível certo: espere 3 a 6 semanas de tratamento otimizado — a maioria melhora, e o VERTOS II documentou que 229 de 431 pacientes elegíveis (53%) tiveram alívio espontâneo durante a própria avaliação, antes de qualquer randomização. Se a dor persiste, ou se o paciente está internado com dor grave e fratura recente (o cenário VAPOUR), a augmentação é uma opção defensável, desde que o paciente seja informado de que os melhores ensaios não mostraram vantagem sobre o placebo. Cleft intravertebral (OF 4) é a exceção conceitual: ali existe uma cavidade que não vai consolidar, e o cimento tem função mecânica, não analgésica por preenchimento trabecular.\n\nDuas regras fecham a decisão. Primeira: sem edema na RM, não cimente — você estaria tratando uma imagem, não a dor do paciente. Segunda: se a parede posterior está rota (OF 3) ou o arcabouço perdeu integridade (OF 4/OF 5), a pergunta deixa de ser 'cimentar?' e passa a ser 'estabilizar?', com TC obrigatória e planejamento de parafusos cimentados. E, em qualquer cenário — cimentando ou não, operando ou não — o paciente sai com densitometria pedida, vitamina D corrigida, antirreabsortivo prescrito e um nome responsável pelo seguimento.",
  },

  approaches: [
    {
      id: "conservador",
      name: "Tratamento conservador estruturado + tratamento da osteoporose",
      indication:
        "OF 1 e OF 2 sem deficit neurológico — a esmagadora maioria dos casos. É também a via obrigatória em paralelo a qualquer procedimento.",
      interval:
        "Sem dissecção. O 'intervalo' aqui é temporal e é o que define a conduta: analgesia e mobilização nas primeiras 24–48 h; reavaliação clínica em 2 semanas; reavaliação em 6 semanas com radiografia em ortostase para detectar colapso progressivo. Em paralelo, e sem esperar a dor passar: DXA, laboratório para osteoporose secundária, correção de vitamina D e início do antirreabsortivo.",
      atRisk: [
        "Sarcopenia, perda óssea e descondicionamento por repouso prolongado",
        "Delirium, quedas e constipação induzidos por opioide",
        "Lesão renal aguda, hemorragia digestiva e descompensação cardiovascular por AINH no idoso",
        "Trombose venosa profunda e pneumonia por imobilidade",
        "Atrofia dos extensores do tronco pelo uso prolongado de colete",
        "Nova fratura — o desfecho de quem recebe alta sem tratamento da osteoporose",
      ],
    },
    {
      id: "vertebroplastia-transpedicular",
      name: "Vertebroplastia percutânea — via transpedicular",
      indication:
        "Augmentação em nível toracolombar e lombar (T10–L5), onde o pedículo é largo o suficiente para conter o trocarte. Via padrão.",
      interval:
        "Pele → tecido subcutâneo → fáscia toracolombar → musculatura paravertebral (dilatada por divulsão, não seccionada) → junção do processo transverso com o processo articular superior → cortical posterior do pedículo. Entrada no quadrante superolateral do pedículo na incidência AP (posição de 10 h à esquerda, 2 h à direita), progredindo medial e anteriormente até o terço anterior do corpo vertebral. Regra de segurança: a ponta só pode cruzar a cortical medial do pedículo na AP depois de já ter ultrapassado a parede posterior no perfil.",
      atRisk: [
        "Saco dural e medula — violação da cortical medial do pedículo",
        "Raiz nervosa emergente — violação da cortical inferior do pedículo",
        "Artéria e veia segmentares — trajeto lateral demais",
        "Plexo venoso vertebral interno e veias basivertebrais — porta de entrada para embolia de cimento",
        "Pleura e pulmão nos níveis torácicos",
        "Platôs vertebrais e disco — fuga discal do cimento",
      ],
      figureId: "fratura-compressao-osteoporotica:vertebroplastia",
    },
    {
      id: "cifoplastia",
      name: "Cifoplastia com balão",
      indication:
        "Mesmas indicações da vertebroplastia, preferida quando o risco de extravasamento é maior — parede posterior frágil, colapso acentuado, cleft intravertebral — ou quando se busca alguma restauração de altura.",
      interval:
        "Mesmo trajeto transpedicular da vertebroplastia, com cânula de trabalho de maior calibre. Diferença essencial: o balão insuflado cria uma cavidade e compacta o osso trabecular ao redor, permitindo injetar cimento de alta viscosidade sob baixa pressão em um espaço contido — daí a menor taxa de extravasamento.",
      atRisk: [
        "As mesmas estruturas da via transpedicular, com risco adicional pelo maior calibre da cânula",
        "Platô vertebral — o balão pode romper a cortical e migrar para o disco",
        "Parede posterior — insuflação em vértebra com OF 3 pode empurrar fragmento para o canal",
        "Falsa sensação de segurança: o ganho de altura é modesto e sem tradução clínica comprovada",
      ],
      figureId: "fratura-compressao-osteoporotica:cifoplastia",
    },
    {
      id: "extrapedicular",
      name: "Via extrapedicular / costotransversária",
      indication:
        "Níveis torácicos altos e médios (T5–T9), em que o pedículo é estreito demais para conter o trocarte, ou quando se deseja acesso unipedicular com preenchimento cruzado da linha média.",
      interval:
        "Entrada lateral ao pedículo, na junção costovertebral: pele → paravertebrais → borda superior da costela (protegendo o feixe intercostal, que corre na borda inferior) → ângulo formado pela costela, pelo processo transverso e pelo pedículo → cortical lateral do corpo vertebral, com trajeto oblíquo em direção à linha média do corpo.",
      atRisk: [
        "Pleura e pulmão — pneumotórax é a complicação específica desta via",
        "Feixe neurovascular intercostal na borda inferior da costela",
        "Artéria segmentar e, em níveis torácicos baixos, a artéria de Adamkiewicz",
        "Raiz nervosa torácica — dor radicular em faixa por lesão ou por cimento perirradicular",
      ],
    },
    {
      id: "posterior-instrumentada",
      name: "Instrumentação posterior com parafusos cimentados ± descompressão",
      indication:
        "OF 4 (perda da integridade estrutural, colapso progressivo), OF 5 (distração/cisalhamento, coluna anquilosada), deficit neurológico por retropulsão e deformidade sagital fixa sintomática.",
      interval:
        "Via posterior mediana: incisão na linha média sobre os processos espinhosos → fáscia toracolombar → descolamento subperiosteal da musculatura paraespinhal até expor lâminas, facetas e processos transversos, que são as referências de entrada dos parafusos. Alternativa percutânea (MIS) com parafusos fenestrados, poupando a musculatura, quando não há necessidade de descompressão aberta.",
      atRisk: [
        "Saco dural e raízes — durante a descompressão e a passagem dos parafusos",
        "Falha do implante no osso osteoporótico: soltura, arrancamento e migração ou perfuração pelos parafusos",
        "Fratura e cifose junto ao topo da instrumentação (PJK/PJF) — complicação frequente e específica do osso osteoporótico",
        "Extravasamento de cimento pelo parafuso fenestrado para o plexo venoso e para o canal",
        "Perda sanguínea, tempo cirúrgico e infecção em paciente idoso e frágil",
      ],
    },
  ],

  technique: [
    {
      n: 1,
      title: "Reconhecer a fratura como sentinela e excluir causa secundária",
      detail:
        "Antes de qualquer conduta analgésica, decida se esta é mesmo uma fratura osteoporótica. Anamnese e exame dirigidos a bandeiras vermelhas: idade abaixo de 60 anos, história de câncer, dor noturna ou em repouso que não alivia deitado, perda de peso, febre, sintomas B, uso de corticoide, deficit neurológico. Radiografia em AP e perfil, em ortostase quando o paciente tolerar. Na AP, procure o sinal da vértebra 'caolha' (pedículo destruído) e massa paravertebral — achados de metástase, não de osteoporose. Solicite eletroforese de proteínas séricas e urinárias, hemograma, VHS/PCR, cálcio, fósforo e função renal. Nível T1–T4 é atípico para osteoporose e merece suspeita alta.",
      tips: [
        "Dor à percussão do processo espinhoso localiza o nível sintomático melhor do que a radiografia, que mostra todas as fraturas, inclusive as antigas.",
        "Fratura de fragilidade em homem ou em mulher na pré-menopausa exige investigação de causa secundária até prova em contrário.",
        "Em coluna anquilosada (espondilite anquilosante, DISH), qualquer dor axial nova após trauma trivial é fratura instável até que a TC prove o contrário — não peça só radiografia.",
      ],
      pitfalls: [
        "Aceitar o rótulo 'osteoporótica' pelo contexto (idoso + dor nas costas) sem olhar o pedículo e sem pedir eletroforese.",
        "Interpretar deficit neurológico como parte do quadro — não é: é sinal de que o diagnóstico está errado ou de que a fratura é OF 3/OF 4/OF 5.",
      ],
      figureId: "fratura-compressao-osteoporotica:anatomia",
    },
    {
      n: 2,
      title: "Datar a fratura com RM (STIR) e classificar",
      detail:
        "A radiografia mostra deformidade; ela não diz quando a fratura ocorreu nem se é ela que dói. A RM com sequência STIR (ou T1 + T2 com saturação de gordura) responde às duas perguntas: edema medular no corpo vertebral significa fratura recente, não consolidada e biologicamente ativa; ausência de edema significa fratura antiga e consolidada, e a dor atual vem de outro lugar. Em paciente com marca-passo ou claustrofobia grave, a cintilografia óssea (ou o SPECT/TC) é a alternativa. TC é obrigatória sempre que houver dúvida sobre a parede posterior — é ela que separa OF 2 de OF 3 e que define se a augmentação é segura. Classifique em OF 1–5 e calcule o OF-score.",
      tips: [
        "Peça a RM de toda a coluna toracolombar, não só do nível suspeito: fraturas múltiplas e assintomáticas são a regra, e o edema aponta qual delas é a nova.",
        "O cleft intravertebral (fenda com líquido ou gás dentro do corpo) na RM ou na TC é pseudartrose vertebral — classifica como OF 4 e muda a conduta.",
        "Radiografia em ortostase e em decúbito, comparadas, revelam a fratura móvel: se a altura 'abre e fecha' entre as posições, há pseudartrose.",
      ],
      pitfalls: [
        "Indicar augmentação com base na radiografia, sem RM: é o caminho direto para cimentar uma fratura antiga e manter a dor.",
        "Ler o edema como sinônimo de indicação cirúrgica. Edema data a fratura; ele não indica procedimento algum por si só.",
      ],
      figureId: "fratura-compressao-osteoporotica:rm-datacao",
    },
    {
      n: 3,
      title: "Analgesia escalonada e mobilização precoce",
      detail:
        "Comece com paracetamol ou dipirona em horário fixo. AINH apenas se a função renal, o estômago e o coração permitirem, e por poucos dias. Opioide fraco (codeína, tramadol) por período curto, sempre com laxante profilático e com atenção a delirium, tontura e queda. Mobilize em 24 a 48 horas, com fisioterapia à beira do leito. Se o paciente só consegue levantar com um colete, use-o — mas como ferramenta de mobilização, por poucas semanas, e não como tratamento da fratura. Analgesia bem feita e mobilização precoce são o que realmente muda a trajetória deste paciente na fase aguda.",
      tips: [
        "Objetivo da analgesia não é dor zero: é dor que permita levantar, andar até o banheiro e respirar fundo.",
        "Bloqueio dos ramos mediais ou infiltração facetária pode ser útil quando há componente facetário associado à cifose.",
        "Profilaxia de TVP enquanto o paciente estiver restrito ao leito.",
      ],
      pitfalls: [
        "Prescrever repouso no leito 'até a dor passar'. Isso não é conduta conservadora: é iatrogenia com nome respeitável.",
        "Manter o colete por meses. Ele não consolida nada e atrofia exatamente a musculatura que protege a coluna.",
        "AINH em série no idoso — a fratura melhora e o rim, não.",
      ],
    },
    {
      n: 4,
      title: "Iniciar o tratamento da osteoporose na fase aguda",
      detail:
        "Este é o passo com o maior efeito comprovado de todo o tópico, e o mais esquecido. Solicite DXA, dose 25-OH-vitamina D, cálcio, fósforo, creatinina, PTH, TSH, hemograma, eletroforese de proteínas (e testosterona no homem). Corrija a vitamina D e garanta ingesta de cálcio ANTES de iniciar o antirreabsortivo, para não provocar hipocalcemia. Prescreva o tratamento: bisfosfonato (zoledronato 5 mg IV anual ou alendronato semanal) ou denosumabe. No paciente de altíssimo risco — fratura vertebral grave, fraturas múltiplas ou fratura ocorrida durante o uso de antirreabsortivo — considere iniciar com agente anabólico (teriparatida ou romosozumabe), sempre seguido de antirreabsortivo para consolidar o ganho. Não espere a fratura consolidar para começar: bisfosfonato não impede a consolidação da fratura vertebral.",
      tips: [
        "O zoledronato administrado após a fratura reduziu novas fraturas clínicas em 35% e a mortalidade por qualquer causa em 28% no HORIZON-RFT. É o dado mais forte deste tópico.",
        "Denosumabe exige adesão absoluta: a interrupção provoca rebote de reabsorção e fraturas vertebrais múltiplas. Nunca suspenda sem plano de transição para bisfosfonato.",
        "Encaminhe formalmente a um FLS ou nomeie o responsável pelo seguimento. Sem dono, o tratamento evapora.",
      ],
      pitfalls: [
        "Dar alta com receita de analgésico e retorno 'se piorar'. É o erro mais comum e o de maior custo desta doença.",
        "Iniciar bisfosfonato com vitamina D baixa — hipocalcemia sintomática.",
        "Achar que o cimento trata a osteoporose. Ele preenche uma vértebra; a doença segue intacta nas outras vinte e três.",
      ],
    },
    {
      n: 5,
      title: "Reavaliar em 2 e em 6 semanas — dar chance à história natural",
      detail:
        "Reavalie a dor, a capacidade de mobilizar, o uso de analgésico e a adesão ao tratamento da osteoporose. Repita a radiografia em ortostase em 6 semanas para detectar colapso progressivo. A maioria dos pacientes melhora substancialmente nesse intervalo, e essa é a razão de a espera ser conduta, e não omissão: no VERTOS II, 229 de 431 pacientes elegíveis (53%) tiveram alívio espontâneo da dor durante a própria fase de avaliação, antes de qualquer randomização. É a melhor documentação publicada da história natural benigna desta fratura.",
      tips: [
        "Se a dor melhorou e o paciente anda, a discussão sobre augmentação acabou. Foque na osteoporose e na prevenção de queda.",
        "Piora da cifose ou da dor entre as duas consultas é sinal de colapso progressivo — reclassifique (OF 4) e reconsidere.",
      ],
      pitfalls: [
        "Indicar o procedimento na primeira semana 'porque dói muito', fora do cenário VAPOUR. Você estará cimentando pacientes que iam melhorar sozinhos.",
        "Usar a espera como desculpa para não tratar a osteoporose enquanto isso. As duas coisas correm em paralelo, não em série.",
      ],
      figureId: "fratura-compressao-osteoporotica:evidencia-sham",
    },
    {
      n: 6,
      title: "Selecionar o candidato à augmentação e consentir com honestidade",
      detail:
        "O candidato defensável reúne, ao mesmo tempo: fratura recente com edema no STIR, no nível que dói à percussão; dor grave (EVA/NRS ≥ 7) refratária, que impede mobilizar ou que exige opioide mal tolerado; e OF 2 (parede posterior íntegra) ou cleft intravertebral (OF 4). Dentro das primeiras 6 semanas e com dor desse porte, o cenário aproxima-se do VAPOUR, o único ensaio com sham positivo. O consentimento precisa ser explícito: três ensaios duplo-cegos com procedimento simulado e uma metanálise Cochrane não mostraram benefício sobre o placebo; o benefício, se existir, restringe-se a um subgrupo estreito; e há risco de extravasamento de cimento e de embolia.",
      tips: [
        "Cheque a coagulação, suspenda anticoagulante conforme protocolo e exclua infecção ativa e alergia ao cimento antes de agendar.",
        "Dor à percussão do espinhoso + edema no STIR no MESMO nível: se os dois não coincidirem, reveja a indicação.",
        "Havendo dúvida sobre a parede posterior, TC antes — não descubra a OF 3 com o cimento já injetado.",
      ],
      pitfalls: [
        "Cimentar o nível de maior deformidade radiográfica em vez do nível com edema. A vértebra mais feia costuma ser a mais antiga.",
        "Consentir dizendo apenas que 'o procedimento tira a dor'. Isso não é o que os melhores ensaios mostram.",
        "Cimentar OF 3 como se fosse OF 2.",
      ],
      figureId: "fratura-compressao-osteoporotica:classificacao-of",
      figureVariant: "OF2",
    },
    {
      n: 7,
      title: "Vertebroplastia — posicionamento e acesso transpedicular",
      detail:
        "Decúbito ventral com coxins sob o tórax e a pelve, permitindo alguma redução postural por extensão. Sedação consciente e anestesia local generosa até o periósteo do pedículo. Obtenha uma AP verdadeira do nível alvo: processo espinhoso equidistante dos pedículos e platôs sobrepostos em linha única. Puncione o quadrante superolateral do pedículo — 10 horas à esquerda, 2 horas à direita — e avance o trocarte com martelo, alternando AP e perfil. A regra de ouro é geométrica: na AP, a ponta não pode cruzar a cortical medial do pedículo enquanto, no perfil, ainda não tiver ultrapassado a parede posterior do corpo. Alvo final: junção do terço anterior com o terço médio do corpo, ligeiramente abaixo do platô fraturado.",
      tips: [
        "Acesso bipedicular garante preenchimento simétrico; o unipedicular com trajeto oblíquo (mais lateral na entrada) cruza a linha média e resolve com uma punção só.",
        "No torácico alto, pedículo estreito: use a via extrapedicular/costotransversária pela borda SUPERIOR da costela, poupando o feixe intercostal.",
        "Se o trocarte 'afunda' sem resistência, você provavelmente saiu do pedículo — pare e refaça a incidência.",
      ],
      pitfalls: [
        "AP oblíqua: os pedículos aparecem em posição falsa e o trajeto medializa sem que você perceba.",
        "Violar a cortical medial cedo demais — a agulha entra no canal e a raiz ou o saco dural pagam a conta.",
        "Violar a cortical inferior — dor radicular imediata.",
      ],
      figureId: "fratura-compressao-osteoporotica:vertebroplastia",
      figureVariant: "axial",
    },
    {
      n: 8,
      title: "Vertebroplastia — preparo e injeção do cimento",
      detail:
        "Prepare o PMMA e espere-o atingir viscosidade de pasta de dente — cimento líquido é a causa número um de extravasamento. Injete pequenos volumes de forma incremental, com fluoroscopia CONTÍNUA em perfil, observando a frente de cimento a cada fração de mililitro. Pare imediatamente ao primeiro sinal de fuga: para o disco, para o plexo venoso ou em direção à parede posterior. Volume típico é de 2 a 4 mL por nível na coluna torácica e de 3 a 6 mL na lombar — mas o alvo é o preenchimento adequado das duas metades do corpo, não um número. Retire o trocarte apenas depois de o cimento endurecer, girando-o para romper o rabo de cimento. Mantenha o paciente em decúbito dorsal por 1 a 2 horas e mobilize em seguida.",
      tips: [
        "O VAPOUR — o único ensaio positivo — usou explicitamente a técnica de preenchimento vertebral adequado. Se for fazer, faça bem: preenchimento insuficiente reúne o risco do procedimento sem o eventual benefício.",
        "Cimento mais viscoso e injeção mais lenta: os dois fatores que mais reduzem extravasamento.",
        "Radiografia de tórax no pós-procedimento se houver qualquer suspeita clínica de embolia de cimento.",
      ],
      pitfalls: [
        "Injetar sob alta pressão para 'vencer a resistência': a resistência é o osso avisando que o espaço acabou.",
        "Fluoroscopia intermitente durante a injeção — quando você reolhar, o cimento já estará no canal ou na veia cava.",
        "Perseguir volume alto: mais cimento não é mais analgesia, é mais risco.",
      ],
      figureId: "fratura-compressao-osteoporotica:vertebroplastia",
      figureVariant: "perfil",
    },
    {
      n: 9,
      title: "Cifoplastia — alternativa com balão",
      detail:
        "Mesmo posicionamento e mesmo acesso transpedicular, com cânula de trabalho de maior calibre. Passe a broca manual, posicione o balão no corpo vertebral logo abaixo do platô deprimido e insufle sob controle de pressão e volume, acompanhando pela fluoroscopia. O balão compacta o osso trabecular, cria uma cavidade contida e pode restaurar parte da altura. Esvazie, retire o balão e preencha a cavidade com cimento de alta viscosidade sob baixa pressão — é essa a vantagem real do método: menor taxa de extravasamento. Interrompa a insuflação ao atingir a pressão máxima, o volume máximo ou o contato com a cortical, o que vier primeiro.",
      tips: [
        "Indicada preferencialmente quando o risco de fuga é maior: colapso acentuado, parede posterior frágil, cleft intravertebral.",
        "O ganho de altura é real na radiografia, mas modesto e sem tradução clínica comprovada — não venda restauração de altura como objetivo.",
      ],
      pitfalls: [
        "Insuflar contra o platô já roto: o balão migra para o disco.",
        "Insuflar em OF 3: você pode empurrar o fragmento da parede posterior para dentro do canal.",
        "Assumir que a cifoplastia escapa da controvérsia da vertebroplastia. Ela não escapa: o comparador com placebo continua sendo o problema.",
      ],
      figureId: "fratura-compressao-osteoporotica:cifoplastia",
    },
    {
      n: 10,
      title: "Falha estrutural (OF 4/OF 5) ou deficit — instrumentação posterior",
      detail:
        "Quando há perda da integridade estrutural, colapso progressivo, deficit neurológico ou fratura por distração em coluna anquilosada, a augmentação isolada não resolve e a conduta é a estabilização. Via posterior, aberta ou percutânea conforme a necessidade de descompressão. No osso osteoporótico, o construto precisa de compensações: parafusos fenestrados com cimento (ou augmentação dos corpos-âncora), maior número de pontos de fixação, construtos LONGOS — em coluna anquilosada, três níveis acima e três abaixo — e ganchos ou fitas no nível proximal para suavizar a transição de rigidez. Descompressão apenas onde houver compressão comprovada e deficit correspondente.",
      tips: [
        "Prefira parafusos de maior diâmetro e maior comprimento, com trajeto convergente e bicortical quando possível: cada um desses fatores aumenta a resistência ao arrancamento.",
        "Cimentar os parafusos das extremidades do construto é a medida de maior custo-benefício contra a soltura.",
        "Anticipe a fratura junto ao topo (PJK/PJF): termine o construto em nível estável e evite terminar no ápice da cifose.",
      ],
      pitfalls: [
        "Construto curto em coluna anquilosada — falha praticamente garantida pela alavanca longa.",
        "Parafuso convencional em osso osteoporótico: soltura, arrancamento e revisão.",
        "Injetar cimento pelo parafuso fenestrado sem fluoroscopia: fuga venosa e embolia.",
        "Operar a deformidade em paciente sem reserva clínica para uma cirurgia de grande porte.",
      ],
      figureId: "fratura-compressao-osteoporotica:classificacao-of",
      figureVariant: "OF5",
    },
  ],

  postop: {
    immobilization:
      "Sem imobilização rígida de rotina. Órtese (Jewett ou TLSO) apenas como recurso de conforto que permita mobilizar mais cedo, por 4 a 6 semanas no máximo, e com desmame planejado desde o início. Não há evidência de que o colete acelere a consolidação, evite o colapso progressivo ou reduza a cifose final — e o uso prolongado atrofia os extensores do tronco, que são exatamente o que protege a coluna a longo prazo. Após augmentação percutânea, nenhuma imobilização. Após instrumentação por OF 5 em coluna anquilosada, órtese pode ser considerada como lembrete postural, nunca como estabilizador.",
    weightBearing:
      "Carga total e marcha desde o primeiro dia, conforme a dor permitir — em qualquer cenário: conservador, pós-vertebroplastia, pós-cifoplastia ou pós-instrumentação. Após augmentação, o paciente permanece em decúbito dorsal por 1 a 2 horas enquanto o cimento polimeriza e depois levanta com fisioterapia. O conceito de 'proteger a carga' não existe aqui e é contraproducente: a descarga acelera a perda óssea e muscular e é a origem das complicações mais graves desta condição no idoso. Restrição real: evitar flexão intensa da coluna com carga (levantar peso do chão de tronco fletido) nas primeiras 6 a 12 semanas.",
    rehab: [
      {
        window: "0 a 2 semanas",
        weightBearing: "Carga total conforme a dor; deambulação assistida desde as primeiras 24–48 h.",
        focus:
          "Analgesia em horário fixo e mobilização precoce. Treino de transferências e de rolamento em bloco para reduzir a dor ao levantar. Exercícios respiratórios (a cifose e a dor restringem a ventilação). Profilaxia de TVP enquanto restrito ao leito. Educação: o que é osteoporose, por que a fratura aconteceu e o que vem a seguir. Início do tratamento farmacológico da osteoporose e correção da vitamina D.",
      },
      {
        window: "2 a 6 semanas",
        weightBearing: "Carga total, marcha independente ou com auxílio conforme o equilíbrio.",
        focus:
          "Desmame do opioide e do colete. Isometria dos extensores do tronco e ativação do core sem flexão resistida. Treino de marcha e de equilíbrio. Reavaliação clínica e radiografia em ortostase às 6 semanas para detectar colapso progressivo. Verificar adesão ao antirreabsortivo e ao cálcio/vitamina D. Avaliação domiciliar de risco de queda.",
      },
      {
        window: "6 a 12 semanas",
        weightBearing: "Carga total sem restrição; retomada gradual das atividades domésticas.",
        focus:
          "Fortalecimento progressivo dos extensores do tronco (extensão em prono, remada), glúteos e quadríceps. Treino proprioceptivo e de equilíbrio dinâmico. Exercício com carga axial tolerada (caminhada, subir escada) — estímulo osteogênico. Evitar ainda flexão intensa com carga. Retorno à direção e ao trabalho leve conforme dor e conforto.",
      },
      {
        window: "3 a 12 meses",
        weightBearing: "Sem restrição; incentivo a atividade regular com carga.",
        focus:
          "Programa permanente de exercício resistido e de equilíbrio, que é a única 'fisioterapia' com efeito comprovado na prevenção de queda e de nova fratura. Manutenção do tratamento farmacológico com verificação de adesão a cada consulta. DXA de controle em 1 a 2 anos. Reavaliação da necessidade de manter, trocar ou sequenciar o agente (anabólico seguido de antirreabsortivo).",
      },
    ],
    followup:
      "Clínico: 2 semanas, 6 semanas, 3 meses, 6 meses e 12 meses, depois anual e permanente — este paciente tem uma doença crônica, não um episódio. Radiografia em ortostase às 6 semanas e aos 3 meses para detectar colapso progressivo e cifose crescente; radiografias adicionais apenas se houver mudança clínica. RM apenas se surgir nova dor axial de padrão fraturário (para datar a nova fratura), nunca de rotina. DXA de controle em 1 a 2 anos, sempre no mesmo aparelho. A cada consulta, três perguntas obrigatórias: você está tomando o medicamento da osteoporose? você caiu desde a última vez? você está fazendo exercício? Pelo menos uma nova fratura clínica ocorrerá em parcela relevante desses pacientes, e a janela para preveni-la é agora. Após augmentação, o seguimento é o mesmo — o procedimento não encurta nem substitui nada.",
  },

  complications: [
    {
      name: "Nova fratura vertebral — a cascata",
      detail:
        "É a complicação definidora. Uma fratura vertebral prévia é o mais forte preditor isolado de nova fratura vertebral, e a segunda fratura tende a ocorrer em meses, não em anos, frequentemente em nível adjacente. Cada nova cunha soma cifose, desloca o centro de gravidade para a frente e aumenta o momento fletor sobre os corpos seguintes — a deformidade alimenta a si mesma.",
      prevention:
        "Tratamento farmacológico da osteoporose iniciado na fase aguda e mantido com adesão verificada; correção de cálcio e vitamina D; exercício resistido e treino de equilíbrio; prevenção de queda; seguimento por FLS.",
    },
    {
      name: "Colapso progressivo e pseudartrose vertebral (fenômeno de Kümmell)",
      detail:
        "Cleft intravertebral com gás ou líquido dentro do corpo vertebral, correspondendo a uma cavidade que não consolida. Clinicamente, dor mecânica em báscula: a altura vertebral 'abre e fecha' entre o decúbito e a ortostase, e a dor acompanha. Classifica como OF 4 e é o cenário com racional mais forte para preenchimento com cimento.",
      prevention:
        "Radiografia em ortostase às 6 semanas e aos 3 meses; comparar ortostase com decúbito quando houver suspeita; reconhecer o sinal do cleft na RM e na TC em vez de repetir ciclos de analgesia.",
    },
    {
      name: "Cifose progressiva e desequilíbrio sagital",
      detail:
        "O somatório das cunhas produz hipercifose fixa, deslocamento anterior do eixo vertical sagital e sobrecarga permanente dos extensores do tronco. As consequências ultrapassam a coluna: restrição ventilatória, saciedade precoce e refluxo por compressão abdominal, dificuldade de manter o olhar horizontal, perda de equilíbrio e mais quedas.",
      prevention:
        "Tratar a osteoporose para impedir novas cunhas; fortalecer extensores do tronco; evitar colete prolongado; reconhecer e tratar precocemente o colapso progressivo.",
    },
    {
      name: "Excesso de mortalidade",
      detail:
        "A fratura de fragilidade associa-se a excesso de mortalidade nos anos seguintes, por uma cadeia que passa por imobilidade, restrição ventilatória, pneumonia, delirium, sarcopenia e nova fratura. O tratamento com zoledronato após fratura reduziu a mortalidade por qualquer causa em 28% no HORIZON-RFT — evidência de que essa mortalidade é, em parte, modificável.",
      prevention:
        "Mobilização precoce; evitar repouso no leito; tratamento farmacológico da osteoporose; manejo cuidadoso do opioide; abordagem geriátrica ampla (nutrição, sarcopenia, polifarmácia, quedas).",
    },
    {
      name: "Extravasamento de cimento",
      detail:
        "A complicação técnica mais frequente da augmentação. Radiograficamente comum, na maioria das vezes assintomático — mas pode ser catastrófico. Fuga posterior invade o canal e comprime medula ou raiz; fuga discal aumenta o estresse sobre o platô adjacente; fuga venosa é a porta da embolia. O plexo venoso vertebral interno não tem válvulas e comunica-se diretamente com o sistema cava.",
      prevention:
        "Cimento em viscosidade de pasta, não líquido; injeção incremental e lenta; fluoroscopia contínua em perfil durante toda a injeção; parar ao primeiro sinal de fuga; TC prévia quando houver dúvida sobre a parede posterior; preferir cifoplastia quando o risco de fuga for alto.",
    },
    {
      name: "Embolia pulmonar de cimento",
      detail:
        "Migração de cimento pelo plexo venoso vertebral até a circulação pulmonar. Espectro amplo: de achado radiográfico assintomático a hipoxemia, dor torácica, instabilidade hemodinâmica e óbito. Relatam-se ainda migrações para câmaras cardíacas.",
      prevention:
        "Os mesmos cuidados do extravasamento — sobretudo viscosidade adequada e baixa pressão de injeção; atenção redobrada em vértebras muito vascularizadas e em fraturas com cleft; radiografia de tórax ao menor sinal clínico.",
    },
    {
      name: "Fratura de vértebra adjacente após augmentação",
      detail:
        "Preocupação clássica: a vértebra cimentada torna-se rígida e transferiria carga para a vizinha. A evidência não sustenta o medo. A análise do VERTOS IV não mostrou diferença na ocorrência de novas fraturas entre vertebroplastia e sham (31 fraturas em 15 pacientes vs 28 em 19; p = 0,36), sem risco maior nas vértebras adjacentes em relação às distantes — e mostrou que a vertebroplastia protegeu contra a perda progressiva de altura do nível tratado (8% vs 45%; p < 0,001). A metanálise Cochrane manteve incerteza por número pequeno de eventos.",
      prevention:
        "Não usar esse risco como argumento contra a augmentação, nem ignorá-lo: a nova fratura decorre sobretudo da osteoporose não tratada. Tratar a doença de base é a prevenção real.",
    },
    {
      name: "Lesão neurológica durante o acesso",
      detail:
        "Violação da cortical medial do pedículo lesa saco dural e medula; violação da cortical inferior lesa a raiz emergente. Manifesta-se como dor radicular imediata, deficit motor ou fístula liquórica.",
      prevention:
        "AP verdadeira do nível alvo antes de puncionar; entrada no quadrante superolateral do pedículo; a regra geométrica — não cruzar a cortical medial na AP antes de ultrapassar a parede posterior no perfil; alternar AP e perfil a cada avanço.",
    },
    {
      name: "Pneumotórax e lesão pleural",
      detail:
        "Específica dos níveis torácicos e da via extrapedicular/costotransversária, em que a pleura fica a milímetros do trajeto.",
      prevention:
        "Entrar pela borda superior da costela; trajeto controlado nas duas incidências; radiografia de tórax pós-procedimento em acesso torácico; baixo limiar para investigar dispneia.",
    },
    {
      name: "Infecção — espondilodiscite e osteomielite pós-cimento",
      detail:
        "Rara, porém devastadora: o cimento é um corpo estranho avascular e a infecção nele instalada exige, em regra, ressecção e reconstrução. A revisão Cochrane registrou osteomielite entre os eventos adversos graves relatados após vertebroplastia.",
      prevention:
        "Excluir infecção ativa antes do procedimento (VHS/PCR, febre, foco urinário ou cutâneo); antibiótico profilático; técnica asséptica rigorosa; nunca cimentar sem biópsia quando houver qualquer suspeita de infecção ou tumor.",
    },
    {
      name: "Complicações do tratamento conservador mal conduzido",
      detail:
        "Não são efeito da fratura; são efeito da conduta. Repouso prolongado gera sarcopenia, perda óssea acelerada, TVP, pneumonia, úlcera de pressão e delirium. Opioide gera constipação, tontura, queda e delirium. AINH gera lesão renal aguda, hemorragia digestiva e descompensação cardíaca. Colete prolongado gera atrofia dos extensores.",
      prevention:
        "Mobilizar em 24–48 h; analgesia em horário fixo com desmame planejado; laxante junto com o opioide; AINH por poucos dias e apenas se o perfil permitir; colete por poucas semanas e com desmame previsto.",
    },
    {
      name: "Falha da instrumentação no osso osteoporótico",
      detail:
        "Soltura, arrancamento e migração ou perfuração pelos parafusos, e sobretudo a fratura/cifose junto ao topo do construto (PJK/PJF), decorrente da transição abrupta entre um segmento rígido instrumentado e um osso frágil.",
      prevention:
        "Parafusos fenestrados cimentados (ao menos nas extremidades), maior diâmetro e comprimento, trajeto convergente, construtos longos — três níveis acima e três abaixo em coluna anquilosada —, terminar em nível estável e fora do ápice da cifose, e otimizar o tratamento farmacológico antes de operações eletivas.",
    },
  ],

  evidence: [
    {
      id: "ev-buchbinder-2009",
      claim:
        "Em pacientes com fratura vertebral osteoporótica dolorosa, não consolidada e confirmada por RM, a vertebroplastia alivia mais a dor do que um procedimento simulado?",
      takeaway:
        "Não. Em 78 pacientes randomizados, duplo-cegos, com fratura de menos de 12 meses e edema na RM, a vertebroplastia não teve vantagem significativa em nenhum desfecho, em nenhum momento (1 semana, 1, 3 e 6 meses). Aos 3 meses, a dor caiu 2,6 pontos com vertebroplastia e 1,9 com o procedimento simulado — diferença ajustada de 0,6 (IC 95% −0,7 a 1,8). O ponto essencial não é 'a vertebroplastia falhou': é que OS DOIS GRUPOS MELHORARAM MUITO. A melhora existe; o que não se sustenta é atribuí-la ao cimento.",
      level: "I",
      studyType:
        "Ensaio clínico randomizado multicêntrico, duplo-cego, controlado por procedimento simulado (n = 78)",
      era: "classico",
      citation: {
        authors:
          "Buchbinder R, Osborne RH, Ebeling PR, Wark JD, Mitchell P, Wriedt C, Graves S, Staples MP, Murphy B",
        title: "A randomized trial of vertebroplasty for painful osteoporotic vertebral fractures",
        journal: "N Engl J Med",
        year: 2009,
        pmid: "19657121",
        doi: "10.1056/NEJMoa0900429",
      },
    },
    {
      id: "ev-invest-kallmes-2009",
      claim:
        "O ensaio INVEST, publicado lado a lado com o de Buchbinder, confirma a ausência de benefício da vertebroplastia sobre o controle simulado?",
      takeaway:
        "Sim, e com uma nuance importante. 131 pacientes com 1 a 3 fraturas dolorosas foram randomizados para vertebroplastia ou procedimento simulado sem cimento. Em 1 mês, não houve diferença no RDQ (0,7; IC 95% −1,3 a 2,8; p = 0,49) nem na dor (0,7; IC 95% −0,3 a 1,7; p = 0,19). A nuance: houve tendência a mais melhora clinicamente relevante da dor com vertebroplastia (64% vs 48%; p = 0,06) e, aos 3 meses, um crossover muito maior no grupo controle (51% vs 13%; p < 0,001) — os pacientes 'votaram com os pés'. É o sinal que motivou a busca por um subgrupo respondedor, encontrada depois pelo VAPOUR.",
      level: "I",
      studyType:
        "Ensaio clínico randomizado multicêntrico, duplo-cego, controlado por procedimento simulado, com crossover permitido após 1 mês (n = 131)",
      era: "classico",
      citation: {
        authors:
          "Kallmes DF, Comstock BA, Heagerty PJ, Turner JA, Wilson DJ, Diamond TH, Edwards R, Gray LA, Stout L, Owen S, Hollingworth W, Ghdoke B, Annesley-Williams DJ, Ralston SH, Jarvik JG",
        title: "A randomized trial of vertebroplasty for osteoporotic spinal fractures",
        journal: "N Engl J Med",
        year: 2009,
        pmid: "19657122",
        doi: "10.1056/NEJMoa0900563",
      },
    },
    {
      id: "ev-vertos-iv-2018",
      claim:
        "A crítica de que os ensaios de 2009 incluíram fraturas 'antigas demais' se sustenta? Na fratura AGUDA, a vertebroplastia supera o sham?",
      takeaway:
        "Não se sustenta. O VERTOS IV randomizou 180 pacientes com fratura osteoporótica AGUDA para vertebroplastia ou sham (ambos com lidocaína e bupivacaína em cada pedículo), com 12 meses de seguimento. A EVA caiu significativamente nos dois grupos em todos os tempos, mas a diferença entre eles nunca foi significativa — aos 12 meses, 0,45 (IC 95% −0,37 a 1,24). Desfechos secundários e consumo de analgésicos também não diferiram. Este é o ensaio decisivo: veio do mesmo grupo do VERTOS II (aberto e positivo), no mesmo país e com a mesma técnica. Mudou o cegamento — e o efeito desapareceu.",
      level: "I",
      studyType:
        "Ensaio clínico randomizado, duplo-cego, controlado por procedimento simulado, 4 centros, seguimento de 12 meses (n = 180)",
      era: "atual",
      citation: {
        authors:
          "Firanescu CE, de Vries J, Lodder P, Venmans A, Schoemaker MC, Smeets AJ, Donga E, Juttmann JR, Klazen CAH, Elgersma OEH, Jansen FH, Tielbeek AV, Boukrab I, Schonenberg K, van Rooij WJJ, Hirsch JA, Lohle PNM",
        title:
          "Vertebroplasty versus sham procedure for painful acute osteoporotic vertebral compression fractures (VERTOS IV): randomised sham controlled clinical trial",
        journal: "BMJ",
        year: 2018,
        pmid: "29743284",
        doi: "10.1136/bmj.k1551",
      },
    },
    {
      id: "ev-vapour-2016",
      claim:
        "Existe algum subgrupo — fratura muito recente e dor intensa — em que a vertebroplastia realmente supera o placebo?",
      takeaway:
        "Sim, e é o único ensaio com sham positivo. O VAPOUR selecionou 120 pacientes com fratura de MENOS DE 6 SEMANAS e dor NRS ≥ 7/10 (a maioria internada, ou seja, dor que já havia falhado no manejo habitual) e usou explicitamente a técnica de preenchimento vertebral adequado. Aos 14 dias, 44% do grupo vertebroplastia vs 21% do grupo placebo tinham NRS < 4 — diferença de 23 pontos percentuais (IC 95% 6 a 39; p = 0,011). O VAPOUR não refuta os demais: ele define o nicho estreito onde a discussão é legítima — fratura aguda, dor grave e refratária, e técnica bem executada.",
      level: "I",
      studyType:
        "Ensaio clínico randomizado multicêntrico, duplo-cego, controlado por placebo (n = 120)",
      era: "atual",
      citation: {
        authors:
          "Clark W, Bird P, Gonski P, Diamond TH, Smerdely P, McNeil HP, Schlaphoff G, Bryant C, Barnes E, Gebski V",
        title:
          "Safety and efficacy of vertebroplasty for acute painful osteoporotic fractures (VAPOUR): a multicentre, randomised, double-blind, placebo-controlled trial",
        journal: "Lancet",
        year: 2016,
        pmid: "27544377",
        doi: "10.1016/S0140-6736(16)31341-1",
      },
    },
    {
      id: "ev-cochrane-2018",
      claim:
        "Somando toda a literatura, qual é o efeito real da vertebroplastia — e por que ensaios abertos e cegados discordam?",
      takeaway:
        "Evidência de alta a moderada qualidade, de 5 ensaios controlados por placebo (541 pacientes), mostra AUSÊNCIA de benefício clinicamente importante em dor, incapacidade, qualidade de vida ou sucesso do tratamento em 1 mês. A dor melhorou 0,7 ponto a mais (IC 95% 0,3 a 1,2) — redução absoluta de 7%, muito abaixo da diferença mínima clinicamente importante de 15%. Os efeitos não diferiram entre fratura aguda e subaguda. E a resposta à segunda pergunta: a análise de sensibilidade demonstrou que os ensaios ABERTOS (vs tratamento usual) superestimam o benefício — corrigido o viés, o efeito tende ao nulo. Eventos adversos graves relatados incluem osteomielite, compressão medular, lesão do saco dural e insuficiência respiratória.",
      level: "I",
      studyType: "Revisão sistemática Cochrane com metanálise (21 ensaios; 5 controlados por placebo)",
      era: "atual",
      citation: {
        authors: "Buchbinder R, Johnston RV, Rischin KJ, Homik J, Jones CA, Golmohammadi K, Kallmes DF",
        title: "Percutaneous vertebroplasty for osteoporotic vertebral compression fracture",
        journal: "Cochrane Database Syst Rev",
        year: 2018,
        pmid: "30399208",
        doi: "10.1002/14651858.CD006349.pub4",
      },
    },
    {
      id: "ev-horizon-rft-2007",
      claim:
        "Tratar a osteoporose depois de uma fratura de fragilidade muda algum desfecho duro — ou é só densidade óssea no papel?",
      takeaway:
        "Muda, e é a intervenção com o maior benefício comprovado de todo este tópico. 2.127 pacientes receberam ácido zoledrônico 5 mg IV anual ou placebo, iniciado em até 90 dias após a correção cirúrgica de uma fratura do quadril por baixa energia. Novas fraturas clínicas caíram de 13,9% para 8,6% (redução de 35%; p = 0,001), novas fraturas vertebrais clínicas de 3,8% para 1,7% (p = 0,02) e a MORTALIDADE POR QUALQUER CAUSA de 13,3% para 9,6% (redução de 28%; p = 0,01), sem prejuízo à consolidação da fratura. Ressalva de escopo: o ensaio foi conduzido após fratura do quadril, não vertebral — mas o princípio da fratura sentinela é o mesmo, e o contraste é o recado do tópico. Enquanto se debate o cimento, o bisfosfonato reduz mortalidade — e é justamente ele que se esquece de prescrever.",
      level: "I",
      studyType:
        "Ensaio clínico randomizado multicêntrico, duplo-cego, controlado por placebo (HORIZON Recurrent Fracture Trial; n = 2.127)",
      era: "classico",
      citation: {
        authors:
          "Lyles KW, Colón-Emeric CS, Magaziner JS, Adachi JD, Pieper CF, Mautalen C, Hyldstrup L, Recknor C, Nordsletten L, Moore KA, Lavecchia C, Zhang J, Mesenbrink P, Hodgson PK, Abrams K, Orloff JJ, Horowitz Z, Eriksen EF, Boonen S",
        title: "Zoledronic acid and clinical fractures and mortality after hip fracture",
        journal: "N Engl J Med",
        year: 2007,
        pmid: "17878149",
        doi: "10.1056/NEJMoa074941",
      },
    },
  ],

  pearls: [
    "A pergunta certa diante de uma fratura vertebral osteoporótica não é 'devo cimentar?', mas 'quem vai tratar a osteoporose deste paciente?'. O tratamento da doença de base é o único componente com redução comprovada de novas fraturas e de mortalidade — e é o que menos se faz.",
    "RM com STIR data a fratura. Edema medular = fratura recente, não consolidada, e é ela que dói. Ausência de edema = fratura antiga, e a dor atual vem de outro lugar. Sem edema, não cimente: você estaria tratando uma imagem.",
    "T11–L2 concentra a maioria das fraturas porque ali a coluna torácica rígida, sustentada pelas costelas, encontra a lombar móvel — e porque a cifose se converte em lordose, jogando a linha de carga à frente do segmento.",
    "A maioria melhora sozinha, e isso está documentado: no VERTOS II, 229 de 431 pacientes elegíveis (53%) tiveram alívio espontâneo da dor durante a própria fase de avaliação, antes de qualquer randomização. É a melhor ilustração publicada da história natural benigna desta fratura.",
    "VERTOS II (aberto, positivo) e VERTOS IV (sham, negativo): mesmo grupo, mesmo país, mesma técnica. A única variável que mudou foi o cegamento — e o efeito sumiu. Essa diferença é a melhor medida publicada do efeito de expectativa de um procedimento com agulha.",
    "Na osteoporose, as trabéculas horizontais desaparecem antes das verticais: o corpo vertebral vira um conjunto de colunas finas sem travamento lateral e falha por flambagem. É por isso que a fratura acontece ao tossir, e não ao cair.",
    "Deficit neurológico numa fratura 'osteoporótica' é bandeira vermelha, não parte do quadro. Pense em malignidade, infecção, OF 3 com retropulsão ou fratura por distração em coluna anquilosada.",
    "Repouso no leito é intervenção ativa com efeitos colaterais graves: perda óssea e muscular, TVP, pneumonia, delirium, constipação. Mobilize em 24 a 48 horas — a cama é mais perigosa que a fratura.",
    "Pedículo destruído na AP ('vértebra caolha'), nível T1–T4, massa de partes moles, dor noturna ou paciente com menos de 60 anos: eletroforese de proteínas e investigação de mieloma/metástase antes de aceitar o rótulo de osteoporótica.",
    "Cleft intravertebral (fenda com gás ou líquido no corpo vertebral) é pseudartrose vertebral — o fenômeno de Kümmell. Classifica como OF 4, cursa com dor mecânica em báscula, e é o único cenário em que o cimento tem função mecânica clara, e não apenas analgésica.",
    "Colete não consolida nem previne cifose. Se usar, é por conforto, por poucas semanas, e sabendo que ele atrofia exatamente os extensores do tronco que protegem a coluna a longo prazo.",
    "A regra geométrica que evita a lesão neurológica na augmentação: na AP, a ponta não pode cruzar a cortical medial do pedículo enquanto, no perfil, ainda não tiver ultrapassado a parede posterior do corpo.",
    "Escolha o nível pelo edema na RM e pela dor à percussão do processo espinhoso — não pela deformidade mais chamativa na radiografia. A vértebra mais feia costuma ser a mais antiga.",
    "O medo da fratura adjacente pós-cimento não se confirma: o VERTOS IV não mostrou diferença de novas fraturas entre vertebroplastia e sham (p = 0,36) e ainda mostrou proteção contra a perda progressiva de altura do nível tratado (8% vs 45%; p < 0,001). A nova fratura vem da osteoporose não tratada.",
  ],

  pitfalls: [
    "Dar alta com dipirona, colete e 'retorne se piorar' — sem densitometria, sem vitamina D, sem antirreabsortivo e sem encaminhamento. É o erro mais comum, o mais caro e o único que mata.",
    "Cimentar uma fratura sem edema na RM. Trata-se uma deformidade radiográfica antiga e mantém-se intacta a dor que trouxe o paciente.",
    "Indicar augmentação na primeira semana 'porque dói muito', fora do cenário VAPOUR (fratura < 6 semanas, NRS ≥ 7, refratária, geralmente internado). Fora dele, a conduta é otimizar e reavaliar em 3 a 6 semanas — a maioria melhora sozinha.",
    "Citar o VERTOS II e ignorar o VERTOS IV. São do mesmo grupo e da mesma linha de pesquisa; o segundo, cegado, anulou o resultado do primeiro. Isso é erro de leitura da literatura, não divergência de escola.",
    "Ler 'não há benefício sobre o placebo' como 'o paciente não vai melhorar'. Ele vai — nos dois braços de todos os ensaios a dor caiu muito. O que não se sustenta é o crédito ao cimento.",
    "Violar a cortical medial do pedículo antes de ultrapassar a parede posterior no perfil: a agulha entra no canal e a raiz ou o saco dural pagam a conta.",
    "Injetar cimento líquido, sob alta pressão, com fluoroscopia intermitente. É a receita completa do extravasamento venoso e da embolia pulmonar de cimento. A resistência à injeção é o osso avisando que o espaço acabou.",
    "Tratar uma OF 3 (parede posterior rota) ou uma OF 4 como se fosse uma OF 2: cimento ou fragmento empurrados para dentro do canal. Na dúvida sobre a parede posterior, TC antes — não durante.",
    "Esquecer de investigar osteoporose secundária: mieloma, hiperparatireoidismo, corticoterapia, hipogonadismo, hipertireoidismo, doença celíaca, deficiência grave de vitamina D. Fratura de fragilidade em homem é secundária até prova em contrário.",
    "Iniciar bisfosfonato com vitamina D baixa e sem cálcio corrigido — hipocalcemia sintomática, e o paciente abandona o tratamento no primeiro mês.",
    "Suspender denosumabe sem plano de transição para bisfosfonato: o rebote de reabsorção provoca fraturas vertebrais múltiplas — a doença volta pior do que começou.",
    "Usar parafuso convencional em osso osteoporótico e construto curto em coluna anquilosada: soltura, arrancamento e falha proximal (PJK/PJF). Se for instrumentar, planeje parafusos fenestrados cimentados e construtos longos.",
    "Prescrever repouso no leito 'até a dor passar' e opioide sem laxante. A fratura consolida e o paciente perde a marcha, a autonomia e, não raro, a vida.",
    "Confundir a fratura por compressão osteoporótica do idoso com a fratura por compressão traumática do jovem: mecanismo, classificação (AO Spine em vez de OF), estabilidade e conduta são outros.",
    "Vender a cifoplastia como se escapasse da controvérsia da vertebroplastia. Ela reduz extravasamento e restaura alguns graus na radiografia — mas o problema do comparador com placebo continua exatamente o mesmo.",
  ],

  figures: [
    {
      id: "fratura-compressao-osteoporotica:anatomia",
      caption:
        "Transição toracolombar em perfil (T11–L2). Corpos vertebrais de osso trabecular, discos, canal, medula terminando no cone medular em T12–L1 e cauda equina. T12 em cunha, com traço de impactação junto ao platô superior e parede posterior íntegra (em âmbar) — o padrão que explica a ausência de deficit neurológico.",
      alt: "Diagrama sagital das vértebras T11 a L2 com discos, canal medular, cone medular e cauda equina, mostrando T12 colapsada em cunha anterior com a parede posterior preservada.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference:
          "Rockwood and Green's Fractures in Adults, 10ª ed. (2024) / Campbell's Operative Orthopaedics, 14ª ed.",
      },
    },
    {
      id: "fratura-compressao-osteoporotica:genant",
      caption:
        "Classificação semiquantitativa de Genant. Acima, os três padrões morfológicos comparados ao contorno normal (tracejado): cunha anterior, bicôncava (vértebra em peixe) e esmagamento. Abaixo, os graus definidos pela maior perda de altura: grau 1 (20–25%), grau 2 (25–40%) e grau 3 (mais de 40%).",
      alt: "Diagrama com três corpos vertebrais em perfil ilustrando as deformidades em cunha, bicôncava e por esmagamento sobre o contorno normal tracejado, e uma escala com os três graus de perda de altura.",
      variant: "cunha",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference:
          "Genant HK et al. J Bone Miner Res. 1993 (PMID 8237484) / Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      },
    },
    {
      id: "fratura-compressao-osteoporotica:classificacao-of",
      caption:
        "Classificação OF da Spine Section da DGOU, em gravidade crescente. OF 1: sem deformidade, só edema na RM. OF 2: deformidade com parede posterior poupada (menos de 1/5). OF 3: parede posterior nitidamente acometida, com retropulsão. OF 4: perda da integridade estrutural — colapso, vértebra plana, pinça ou cleft intravertebral. OF 5: distração ou cisalhamento, típica da coluna anquilosada.",
      alt: "Cinco painéis em sequência mostrando os tipos OF 1 a OF 5 de fratura osteoporótica toracolombar, da vértebra sem deformidade com edema até a lesão por distração em coluna anquilosada.",
      variant: "OF2",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference:
          "Schnake KJ et al. Global Spine J. 2018 (PMID 30210960) / Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      },
    },
    {
      id: "fratura-compressao-osteoporotica:cifose-sagital",
      caption:
        "Cifose segmentar e desequilíbrio sagital. A cunha de T12 soma graus à cifose torácica; o ângulo de Cobb é medido do platô superior da vértebra íntegra acima ao platô inferior da íntegra abaixo. O prumo a partir de C7 (eixo vertical sagital) desloca-se anteriormente, aumentando o momento fletor sobre os corpos vertebrais seguintes — a deformidade que alimenta a si mesma.",
      alt: "Diagrama do perfil da coluna de T5 a L3 com T12 em cunha, ângulo de Cobb marcado em âmbar e linha de prumo a partir de C7 mostrando o deslocamento anterior do eixo vertical sagital.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference:
          "Rockwood and Green's Fractures in Adults, 10ª ed. (2024) / Campbell's Operative Orthopaedics, 14ª ed.",
      },
    },
    {
      id: "fratura-compressao-osteoporotica:rm-datacao",
      caption:
        "RM em STIR datando a fratura. À esquerda, fratura recente: edema medular no corpo vertebral, hiperintenso no STIR — a fratura ainda não consolidou e é a fonte da dor. À direita, a mesma deformidade sem edema: fratura antiga, consolidada, e a dor atual vem de outro lugar. Este é o exame que decide se há ou não algo a tratar naquele nível.",
      alt: "Dois painéis comparando três vértebras com a do meio em cunha: à esquerda com edema medular hachurado indicando fratura recente, à direita sem edema indicando fratura antiga consolidada.",
      variant: "aguda",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference:
          "Rockwood and Green's Fractures in Adults, 10ª ed. (2024) / Hebert & Lech, Ortopedia e Traumatologia, 6ª ed. (2025)",
      },
    },
    {
      id: "fratura-compressao-osteoporotica:vertebroplastia",
      caption:
        "Vertebroplastia percutânea transpedicular. À esquerda, o trajeto axial: entrada no quadrante superolateral do pedículo, progredindo medial e anteriormente sem cruzar a cortical medial (linhas em âmbar), que protege o saco dural. À direita, o perfil: ponta na junção do terço anterior com o terço médio do corpo e cimento preenchendo a vértebra. Em vermelho, as rotas do extravasamento — para o canal e para o plexo venoso.",
      alt: "Diagrama em dois painéis da vertebroplastia transpedicular: vista axial com dois trocartes atravessando os pedículos até o corpo vertebral e vista de perfil com a agulha no terço anterior, cimento e rotas de extravasamento.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference:
          "Campbell's Operative Orthopaedics, 14ª ed. (2021) / Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      },
    },
    {
      id: "fratura-compressao-osteoporotica:cifoplastia",
      caption:
        "Cifoplastia com balão em três tempos: cânula transpedicular com balão desinsuflado no corpo vertebral; insuflação, que compacta o osso trabecular, cria uma cavidade contida e restaura parte da altura; e preenchimento da cavidade com cimento de alta viscosidade sob baixa pressão. A vantagem real é a menor taxa de extravasamento — o ganho de altura é modesto e sem tradução clínica comprovada.",
      alt: "Três painéis sequenciais da cifoplastia: cânula com balão desinsuflado, balão insuflado criando cavidade com setas de restauração de altura, e cavidade preenchida com cimento.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference:
          "Campbell's Operative Orthopaedics, 14ª ed. (2021) / Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      },
    },
    {
      id: "fratura-compressao-osteoporotica:evidencia-sham",
      caption:
        "Por que os ensaios com controle simulado são negativos. Redução da dor aos 3 meses no ensaio de Buchbinder (NEJM 2009, n = 78): 1,9 ponto com o procedimento simulado e 2,6 com a vertebroplastia — diferença ajustada de 0,6 (IC 95% −0,7 a 1,8), não significativa. Os dois grupos melhoram muito; o que não se sustenta é atribuir a melhora ao cimento.",
      alt: "Gráfico de duas barras comparando a redução da dor em escala de zero a dez aos três meses: 1,9 ponto no grupo de procedimento simulado e 2,6 no grupo de vertebroplastia, com a diferença de 0,6 marcada em âmbar.",
      kind: "diagram",
      source: {
        label: "Diagrama original — Revisortopedia",
        reference:
          "Dados de Buchbinder R et al. N Engl J Med. 2009;361(6):557-68 (PMID 19657121)",
      },
    },
  ],

  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Rockwood and Green's Fractures in Adults, 10ª ed. (2024) — Thoracolumbar Spine Fractures; Osteoporotic Vertebral Compression Fractures; Vertebral Augmentation",
      "Campbell's Operative Orthopaedics, 14ª ed. (2021) — Fractures, Dislocations and Fracture-Dislocations of the Spine; Vertebroplasty and Kyphoplasty",
      "Hebert & Lech, Ortopedia e Traumatologia: Princípios e Prática, 6ª ed. (2025) — Fraturas da coluna toracolombar; Osteoporose e fraturas de fragilidade",
      "Schnake KJ, Blattert TR, Hahn P, et al. Classification of Osteoporotic Thoracolumbar Spine Fractures: Recommendations of the Spine Section of the German Society for Orthopaedics and Trauma (DGOU). Global Spine J. 2018;8(2 Suppl):46S-49S — PMID 30210960; doi 10.1177/2192568217717972 (classificação OF e OF-score)",
      "Genant HK, Wu CY, van Kuijk C, Nevitt MC. Vertebral fracture assessment using a semiquantitative technique. J Bone Miner Res. 1993;8(9):1137-48 — PMID 8237484; doi 10.1002/jbmr.5650080915 (classificação semiquantitativa)",
      "Klazen CAH, Lohle PNM, de Vries J, et al. Vertebroplasty versus conservative treatment in acute osteoporotic vertebral compression fractures (VERTOS II): an open-label randomised trial. Lancet. 2010;376(9746):1085-92 — PMID 20701962; doi 10.1016/S0140-6736(10)60954-3 (ensaio aberto positivo; contraponto metodológico ao VERTOS IV)",
      "Firanescu CE, de Vries J, Lodder P, et al. Percutaneous Vertebroplasty is no Risk Factor for New Vertebral Fractures and Protects Against Further Height Loss (VERTOS IV). Cardiovasc Intervent Radiol. 2019;42(7):991-1000 — PMID 30941490; doi 10.1007/s00270-019-02205-w (fratura adjacente e perda de altura)",
      "Black DM, Delmas PD, Eastell R, et al. Once-yearly zoledronic acid for treatment of postmenopausal osteoporosis (HORIZON-PFT). N Engl J Med. 2007;356(18):1809-22 — PMID 17476007; doi 10.1056/NEJMoa067312 (prevenção primária de fratura vertebral)",
    ],
    attribution:
      "Conteúdo original em pt-BR. Evidências verificadas individualmente no PubMed — todos os PMIDs e DOIs citados foram conferidos na fonte.",
    figureReference:
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a",
  },
});
