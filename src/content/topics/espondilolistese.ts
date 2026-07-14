import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "col-lombar-espondilolistese",
  slug: "espondilolistese",
  kind: "condicao",
  regionId: "coluna",
  bone: "Lombar",
  injury: "Escorregamento vertebral",
  title: "Espondilolistese",
  subtitle:
    "Separar a forma ístmica do jovem da forma degenerativa da mulher madura, graduar por Meyerding, ler o balanço sagital e conduzir do conservador — sempre primeiro — à descompressão, sabendo que acrescentar artrodese é decisão discutida e não automática.",
  laterality: null,
  status: "complete",
  overview:
    "Espondilolistese é o escorregamento anterior de uma vértebra sobre a subjacente. Duas formas dominam a prática e é preciso mantê-las separadas na cabeça, porque têm paciente, mecanismo, história natural e conduta diferentes. A forma ÍSTMICA decorre de uma lise (defeito) da pars interarticularis, tipicamente em L5-S1, em adolescentes e adultos jovens, sobretudo atletas de esportes que exigem hiperextensão e rotação repetidas — ginástica, futebol, tênis, levantamento de peso. A forma DEGENERATIVA decorre da artrose facetária e da degeneração discal com instabilidade segmentar, tipicamente em L4-L5, em mulheres acima de 50 anos, e o arco posterior permanece íntegro.\n\nEssa diferença anatômica tem uma consequência clínica que vale memorizar. Na ístmica, a pars está rota: o corpo, os pedículos e os processos articulares superiores escorregam para a frente, mas a lâmina e o processo espinhoso ficam para trás — o canal, portanto, tende a se manter amplo ou até alargar, e o sofrimento é radicular, por tensão da raiz de L5 no forame. Na degenerativa, a pars está íntegra: todo o arco posterior acompanha o corpo para a frente, o canal ESTREITA e o quadro dominante é a estenose com claudicação neurogênica.\n\nA classificação de Wiltse organiza a etiologia em seis tipos (displásica, ístmica, degenerativa, traumática, patológica e iatrogênica), e a de Meyerding gradua a magnitude do escorregamento em cinco graus, medindo o deslocamento do corpo de L5 sobre a largura da placa terminal superior de S1. Nos escorregamentos de alto grau, porém, a magnitude importa menos que a forma: o ângulo de escorregamento (a cifose local do segmento) e os parâmetros sagitais — em especial a incidência pélvica, que é elevada nesses pacientes — predizem melhor a progressão e o resultado do que o grau isolado.\n\nA conduta começa sempre pelo tratamento conservador, que resolve a maioria dos casos em ambas as formas. Quando ele falha, a cirurgia na forma degenerativa com estenose passa por uma descompressão, e a pergunta que domina a literatura é se essa descompressão deve ou não vir acompanhada de artrodese. Aqui a evidência é genuinamente conflitante e o tópico exige honestidade: dois ensaios randomizados publicados lado a lado no mesmo número do New England Journal of Medicine, em 2016, chegaram a conclusões opostas, e um terceiro ensaio de não inferioridade, em 2021, sustentou a descompressão isolada. A leitura madura não é escolher um lado, e sim entender por que discordam e o que isso significa diante do paciente.",
  keyFacts: [
    { label: "Definição", value: "Escorregamento anterior de uma vértebra sobre a subjacente" },
    { label: "Ístmica", value: "Lise da pars; L5-S1; jovem/atleta em hiperextensão repetida" },
    { label: "Degenerativa", value: "Pars íntegra; L4-L5; mulher > 50 anos; artrose facetária" },
    { label: "Regra do canal", value: "Ístmica alarga o canal (dor radicular); degenerativa estreita (estenose)" },
    { label: "Etiologia", value: "Wiltse I–VI (displásica, ístmica, degenerativa, traumática, patológica, iatrogênica)" },
    { label: "Magnitude", value: "Meyerding I–V (V = espondiloptose, > 100%)" },
    { label: "Forma > grau", value: "Ângulo de escorregamento e incidência pélvica predizem progressão" },
    { label: "1ª linha", value: "Conservador em ambas as formas — resolve a maioria" },
    { label: "Controvérsia central", value: "Descompressão isolada × descompressão + artrodese na degenerativa" },
  ],
  anatomy: {
    text:
      "A pars interarticularis é a ponte óssea que une o processo articular superior ao inferior, entre o pedículo e a lâmina. É a região mais estreita e mais solicitada do arco neural e concentra tensão durante a extensão e a rotação, quando o processo articular inferior da vértebra suprajacente age sobre ela como um quebra-nozes. Em L5 esse estresse é máximo, porque a vértebra se apoia sobre a placa terminal inclinada de S1 e recebe uma força de cisalhamento anterior contínua. É por isso que a lise da pars é fenômeno de fadiga — uma fratura de estresse — e não de trauma agudo, e por isso predomina em L5 e em atletas de hiperextensão repetida.\n\nA estabilidade do segmento depende de três colunas funcionais: o disco intervertebral à frente e as duas articulações facetárias atrás. As facetas lombares são orientadas de forma predominantemente sagital, o que permite flexoextensão e resiste à rotação — mas resiste pouco à translação anterior quando degeneram. Com a artrose facetária, as facetas se hipertrofiam, tornam-se mais coronais e perdem a capacidade de conter o cisalhamento; somada à degeneração discal e à hipertrofia do ligamento amarelo, essa incompetência produz a listese degenerativa e, simultaneamente, a estenose que a acompanha.\n\nO canal vertebral é limitado à frente pelo corpo e pelo disco, lateralmente pelos pedículos e atrás pela lâmina e pelo ligamento amarelo. O recesso lateral — entre o corpo, o pedículo e o processo articular superior — abriga a raiz que descerá para emergir no forame do nível abaixo. Na listese degenerativa de L4-L5, a raiz comprimida é caracteristicamente a de L5, no recesso lateral. Na listese ístmica de L5-S1, a raiz de L5 sofre no forame, tensionada pelo tecido fibrocartilaginoso do defeito da pars (o chamado calo de Gill) e pelo colapso da altura foraminal.\n\nO balanço sagital dá o contexto. A incidência pélvica é um parâmetro anatômico fixo do indivíduo, definido pelo ângulo entre a perpendicular à placa terminal de S1 no seu ponto médio e a linha que une esse ponto ao eixo das cabeças femorais; ela é a soma da inclinação sacral com a versão pélvica. Pacientes com espondilolistese ístmica têm incidência pélvica caracteristicamente elevada, o que aumenta a inclinação sacral, a força de cisalhamento sobre L5 e o risco de escorregamento e de progressão. O ângulo de escorregamento mede a cifose local entre L5 e S1 e é o melhor preditor isolado de progressão nos casos de alto grau.",
    figureIds: ["espondilolistese:anatomia", "espondilolistese:estenose", "espondilolistese:sagital"],
  },
  classification: [
    {
      id: "wiltse",
      name: "Classificação etiológica de Wiltse-Newman-Macnab",
      basis:
        "Causa do escorregamento — a origem do defeito, e não sua magnitude. Define paciente, história natural e estratégia.",
      note:
        "Os tipos II (ístmica) e III (degenerativa) respondem por quase toda a prática clínica e devem ser distinguidos de imediato: mudam idade, nível, sexo, quadro neurológico e conduta. Regra prática do canal — na ístmica o arco posterior fica para trás e o canal se mantém amplo (dor radicular); na degenerativa o arco íntegro acompanha o corpo e o canal estreita (claudicação neurogênica).",
      types: [
        {
          code: "I",
          label: "Displásica (congênita)",
          description:
            "Displasia congênita da faceta superior de S1 ou do arco de L5, que não contém o escorregamento. A pars pode estar íntegra e alongada. Risco neurológico mais alto, porque o arco íntegro acompanha o corpo e comprime a cauda equina; tende a progredir e a atingir altos graus.",
        },
        {
          code: "II",
          label: "Ístmica (lise da pars)",
          description:
            "Defeito da pars interarticularis. Subtipos: IIA, fratura de estresse por fadiga (a mais comum, do jovem atleta); IIB, pars alongada por fraturas repetidas consolidadas; IIC, fratura aguda da pars. Típica em L5-S1. O corpo escorrega e a lâmina fica para trás — o canal não estreita.",
          figureId: "espondilolistese:wiltse",
          figureVariant: "istmica",
        },
        {
          code: "III",
          label: "Degenerativa",
          description:
            "Artrose facetária e degeneração discal com instabilidade segmentar e pars íntegra. Típica em L4-L5, em mulheres acima de 50 anos. Como todo o arco acompanha o corpo, produz estenose central e do recesso lateral — o quadro é de claudicação neurogênica. Raramente ultrapassa o grau II.",
          figureId: "espondilolistese:wiltse",
          figureVariant: "degenerativa",
        },
        {
          code: "IV",
          label: "Traumática",
          description:
            "Fratura aguda do arco neural fora da pars (pedículo, lâmina ou faceta) por trauma de alta energia, permitindo o escorregamento. Rara e distinta da fratura aguda da pars (IIC).",
        },
        {
          code: "V",
          label: "Patológica",
          description:
            "Doença óssea generalizada ou localizada que compromete o arco posterior — tumor, infecção, osteogênese imperfeita, doença de Paget. O escorregamento é consequência da destruição estrutural.",
        },
        {
          code: "VI",
          label: "Iatrogênica (pós-cirúrgica)",
          description:
            "Escorregamento após ressecção excessiva de elementos posteriores estabilizadores, sobretudo facetectomia ampla ou remoção da pars durante descompressão. Reforça a necessidade de preservar as facetas e a pars ao descomprimir.",
        },
      ],
    },
    {
      id: "meyerding",
      name: "Graduação de Meyerding",
      basis:
        "Magnitude do escorregamento, medida em radiografia em perfil: deslocamento do corpo de L5 dividido pela largura anteroposterior da placa terminal superior de S1.",
      note:
        "Divide-se a placa de S1 em quartos e observa-se em qual quarto se projeta o canto posteroinferior de L5. Graus I e II são de baixo grau; III, IV e V, de alto grau. A graduação é útil, simples e reprodutível, mas é uma medida de magnitude, não de forma: nos casos de alto grau o ângulo de escorregamento e os parâmetros sagitais predizem melhor a progressão e o resultado.",
      types: [
        {
          code: "I",
          label: "Até 25%",
          description:
            "Baixo grau. A imensa maioria das listeses degenerativas e boa parte das ístmicas do adulto. Conduta conservadora inicial praticamente sempre.",
          figureId: "espondilolistese:meyerding",
          figureVariant: "i",
        },
        {
          code: "II",
          label: "25% a 50%",
          description:
            "Baixo grau. Limite superior habitual da listese degenerativa. Ainda tratada conservadoramente de início; cirurgia por sintoma refratário, não pelo grau.",
          figureId: "espondilolistese:meyerding",
          figureVariant: "ii",
        },
        {
          code: "III",
          label: "50% a 75%",
          description:
            "Alto grau. Praticamente restrito às formas ístmica e displásica. Avaliar ângulo de escorregamento, incidência pélvica e balanço sagital global; risco de progressão e de deformidade postural.",
          figureId: "espondilolistese:meyerding",
          figureVariant: "iii",
        },
        {
          code: "IV",
          label: "75% a 100%",
          description:
            "Alto grau. Deformidade estruturada com retroversão pélvica compensatória, retificação lombossacra e marcha alterada. Indicação cirúrgica frequente, com artrodese.",
          figureId: "espondilolistese:meyerding",
          figureVariant: "iv",
        },
        {
          code: "V",
          label: "Espondiloptose (> 100%)",
          description:
            "O corpo de L5 perde completamente o contato e desce à frente do sacro. Deformidade grave, com risco neurológico; tratamento cirúrgico complexo e reservado a serviços com experiência.",
          figureId: "espondilolistese:meyerding",
          figureVariant: "v",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Dor e limitação funcional persistentes apesar de tratamento conservador bem conduzido por pelo menos 3 a 6 meses.",
      "Claudicação neurogênica incapacitante na forma degenerativa com estenose — a indicação mais frequente.",
      "Radiculopatia persistente ou déficit neurológico progressivo.",
      "Síndrome da cauda equina — descompressão de urgência (exceção à regra do conservador primeiro).",
      "Escorregamento de alto grau (Meyerding III–V) sintomático, sobretudo com progressão documentada ou ângulo de escorregamento cifótico.",
      "Progressão do escorregamento em criança ou adolescente em crescimento, ainda que oligossintomática.",
      "Instabilidade segmentar demonstrada em radiografias dinâmicas com correlação clínica.",
    ],
    nonOperative: [
      "Primeira linha em praticamente todos os casos, em ambas as formas — a maioria melhora sem cirurgia.",
      "Lise da pars aguda do jovem atleta: restrição da atividade esportiva e, quando indicado, órtese, buscando consolidação do defeito.",
      "Fisioterapia com estabilização do tronco, fortalecimento do core e dos extensores, alongamento de isquiotibiais.",
      "Analgesia e anti-inflamatórios não esteroidais por período limitado.",
      "Educação, controle de peso e adaptação das atividades desencadeantes.",
      "Infiltração epidural ou foraminal com corticosteroide para alívio sintomático e valor diagnóstico topográfico.",
      "Listese assintomática, de qualquer grau em adulto: observação, sem indicação cirúrgica profilática.",
    ],
    decisionNotes:
      "A primeira decisão é operar ou não, e a resposta na grande maioria das vezes é não: o tratamento conservador é a primeira linha em ambas as formas e resolve a maioria dos casos. O SPORT, que randomizou pacientes com espondilolistese degenerativa e estenose, mostrou vantagem substancial da cirurgia sobre o tratamento não operatório na análise como-tratado em dois anos — mas com crossover de cerca de 40% em cada direção na coorte randomizada e sem efeito significativo na análise por intenção de tratar. A leitura correta é que a cirurgia ajuda o paciente refratário e bem selecionado, não que ela seja obrigatória. Uma análise do SPORT mostrou ainda que, ao contrário da estenose isolada, o resultado na listese degenerativa não piorou com duração de sintomas maior que 12 meses — ou seja, há tempo para tentar o conservador sem penalizar o resultado.\n\nDecidida a cirurgia na forma degenerativa com estenose, a descompressão é o ponto pacífico. A controvérsia é acrescentar ou não a artrodese, e é preciso apresentá-la como ela realmente é. O estudo clássico de Herkowitz e Kurz, em 1991, favoreceu a artrodese e moldou a prática por 25 anos. Em 2016, dois ensaios randomizados publicados lado a lado no mesmo número do New England Journal of Medicine chegaram a conclusões opostas: o sueco (Försth), com 247 pacientes, não encontrou diferença em dois nem em cinco anos, com mais tempo cirúrgico, mais sangramento, internação mais longa e maior custo no grupo artrodese; o americano (Ghogawala, SLIP), com apenas 66 pacientes, encontrou vantagem pequena porém clinicamente relevante da artrodese no componente físico do SF-36, mantida em quatro anos, e — dado importante — reoperação de 14% com artrodese contra 34% sem. Em 2021, o NORDSTEN-DS, ensaio de não inferioridade com 267 pacientes, mostrou que a descompressão isolada foi não inferior à descompressão com artrodese instrumentada em dois anos, com reoperação de 12,5% contra 9,1%.\n\nPor que discordam? Os desfechos primários eram diferentes (ODI no sueco, componente físico do SF-36 no SLIP); as populações também — o SLIP exigiu listese estável de 3 a 14 mm e excluiu instabilidade franca, enquanto o estudo sueco incluiu estenose com e sem listese, diluindo o subgrupo de interesse; e o SLIP, com 66 pacientes, tem poder limitado e intervalo de confiança que quase toca o nulo. A síntese prática, sustentada pelo maior corpo de evidência, é que a descompressão isolada é uma opção legítima e adequada para a maioria dos pacientes com listese degenerativa de baixo grau e estenose, evitando a morbidade e o custo da artrodese. A artrodese merece consideração diante de instabilidade demonstrada em radiografias dinâmicas, dor lombar mecânica desproporcional à dor em membros, escorregamento móvel ou de maior magnitude, deformidade, cifose local, ou quando a descompressão necessária exigir ressecção facetária extensa que crie instabilidade iatrogênica (Wiltse VI). A preocupação com reoperação levantada pelo SLIP é real e deve entrar na conversa com o paciente.\n\nNa forma ístmica a lógica é outra. No jovem com lise aguda, o objetivo é a consolidação do defeito com restrição esportiva; o reparo direto da pars é opção em pacientes selecionados, jovens, com lise em nível acima de L5, disco preservado e escorregamento mínimo, porque preserva o segmento. No escorregamento de alto grau, o tratamento é a artrodese, e a decisão de reduzir ou fundir in situ deve ser deliberada: a redução melhora o balanço sagital e o ângulo de escorregamento, mas carrega risco expressivo de lesão da raiz de L5, sendo a fusão in situ alternativa segura e consagrada. Em qualquer cenário, listese assintomática em adulto não se opera profilaticamente.",
  },
  approaches: [
    {
      id: "conservador",
      name: "Conduta conservadora escalonada (primeira linha)",
      indication:
        "Praticamente todos os casos sintomáticos, em ambas as formas, como tratamento inicial; base do manejo antes de considerar cirurgia.",
      interval:
        "Sequência: educação e adaptação das atividades → restrição esportiva na lise aguda do jovem (com órtese quando se busca consolidação) → analgesia e anti-inflamatórios por período limitado → fisioterapia com estabilização do tronco, fortalecimento do core e dos extensores e alongamento de isquiotibiais → infiltração epidural ou foraminal na dor refratária, com valor diagnóstico adicional. Reavaliar em 3 a 6 meses antes de escalar.",
      atRisk: [
        "Efeitos adversos dos anti-inflamatórios (gastrointestinais, renais, cardiovasculares)",
        "Descondicionamento e atrofia por repouso e imobilização prolongados",
        "Retardo de diagnóstico de déficit progressivo ou de síndrome da cauda equina — reavaliar sempre o exame neurológico",
      ],
      figureId: "espondilolistese:scottie",
    },
    {
      id: "descompressao-isolada",
      name: "Descompressão isolada (sem artrodese)",
      indication:
        "Listese degenerativa de baixo grau com estenose sintomática refratária, sem instabilidade demonstrada e com dor predominantemente em membros inferiores.",
      interval:
        "Via posterior na linha média ou acesso tubular unilateral. Descompressão central e dos recessos laterais por laminectomia, laminotomia ou técnica preservadora (over-the-top, com descompressão bilateral por acesso unilateral). Ressecção do ligamento amarelo hipertrofiado e da porção medial das facetas hipertrofiadas, preservando ao menos metade de cada faceta e a pars para não criar instabilidade iatrogênica.",
      atRisk: [
        "Durotomia com fístula liquórica",
        "Raiz de L5 no recesso lateral, sob tração ou retração",
        "Instabilidade iatrogênica por facetectomia excessiva ou lesão da pars (Wiltse VI)",
        "Descompressão insuficiente, com persistência da claudicação",
      ],
      figureId: "espondilolistese:tratamento",
    },
    {
      id: "descompressao-artrodese",
      name: "Descompressão + artrodese posterolateral instrumentada",
      indication:
        "Instabilidade demonstrada em radiografias dinâmicas, dor lombar mecânica desproporcional, escorregamento móvel ou de maior magnitude, deformidade ou cifose local, e quando a descompressão exigir ressecção facetária extensa.",
      interval:
        "Via posterior na linha média, com dissecção subperiosteal até os processos transversos. Descompressão seguida de instrumentação com parafusos pediculares e hastes; decorticação dos processos transversos e das facetas com enxerto ósseo posterolateral. Pode-se associar suporte intersomático (TLIF ou PLIF) quando se busca restaurar altura discal, foraminal e lordose local.",
      atRisk: [
        "Raiz nervosa e saco tecal durante a instrumentação e a colocação do dispositivo intersomático",
        "Mau posicionamento de parafuso pedicular (violação medial ou inferior do pedículo)",
        "Perda sanguínea maior, tempo cirúrgico e internação mais longos do que na descompressão isolada",
        "Pseudoartrose e doença do segmento adjacente",
      ],
      figureId: "espondilolistese:tratamento",
    },
    {
      id: "reparo-pars",
      name: "Reparo direto da pars",
      indication:
        "Paciente jovem selecionado com lise ístmica sintomática refratária, escorregamento mínimo ou ausente, disco do nível preservado e defeito preferencialmente acima de L5.",
      interval:
        "Via posterior sobre o nível acometido. Curetagem do tecido fibroso do defeito até osso sangrante, enxerto ósseo local e fixação do defeito — parafuso translaminar de Buck, técnica de amarrilho com fio (Scott), ou construto parafuso pedicular-gancho laminar. Preserva o movimento do segmento e evita a artrodese.",
      atRisk: [
        "Raiz nervosa no forame e no defeito, sob o tecido fibrocartilaginoso",
        "Pseudoartrose do reparo, sobretudo se o disco já estiver degenerado",
        "Seleção inadequada: disco degenerado ou escorregamento significativo condenam o reparo",
      ],
      figureId: "espondilolistese:scottie",
    },
    {
      id: "alto-grau",
      name: "Artrodese no alto grau — in situ ou com redução",
      indication:
        "Meyerding III–V sintomático, com progressão documentada, ângulo de escorregamento cifótico ou desequilíbrio sagital.",
      interval:
        "Artrodese instrumentada L4-S1 (ou L5-S1) por via posterior, frequentemente com suporte intersomático e, em casos selecionados, fixação transacral (parafuso de Bohlman) ou abordagem combinada. A redução da cifose local e do escorregamento melhora o balanço sagital, mas deve ser deliberada e realizada sob monitorização neurofisiológica; a fusão in situ permanece alternativa segura e consagrada.",
      atRisk: [
        "Raiz de L5 — a estrutura de maior risco na redução do alto grau; déficit pode ocorrer mesmo com técnica correta",
        "Plexo lombossacro e cauda equina",
        "Pseudoartrose, mais frequente no alto grau",
        "Perda da correção e progressão da cifose local",
      ],
      figureId: "espondilolistese:sagital",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Caracterizar a forma e o quadro clínico",
      detail:
        "Definir de imediato se a listese é ístmica ou degenerativa, porque tudo decorre daí. Ístmica: jovem ou adulto jovem, atleta de hiperextensão, L5-S1, dor lombar mecânica que piora em extensão, isquiotibiais encurtados e, quando há sofrimento neural, radiculopatia de L5 por compressão foraminal. Degenerativa: mulher acima de 50 anos, L4-L5, claudicação neurogênica — dor e peso em membros inferiores ao caminhar e ficar em pé, aliviados ao sentar e ao fletir o tronco (o carrinho de supermercado). Exame neurológico completo e documentado em toda consulta; pesquisar sinais de alarme e síndrome da cauda equina, que muda a urgência.",
      figureId: "espondilolistese:anatomia",
      tips: [
        "Alívio ao fletir o tronco e ao sentar aponta claudicação neurogênica, não vascular",
        "Isquiotibiais encurtados e marcha com pelve retrovertida sugerem escorregamento de alto grau",
      ],
      pitfalls: [
        "Tratar toda listese como a mesma doença — a ístmica e a degenerativa divergem em tudo",
        "Deixar de reconhecer síndrome da cauda equina, que exige descompressão de urgência",
      ],
    },
    {
      n: 2,
      title: "Imagem: graduar, medir e caracterizar",
      detail:
        "Radiografias em perfil com carga graduam por Meyerding e medem o ângulo de escorregamento; radiografias dinâmicas em flexoextensão demonstram mobilidade e instabilidade — informação decisiva para a discussão sobre artrodese. Incidência oblíqua mostra o cãozinho da Escócia, cuja coleira revela a lise da pars, embora a tomografia seja mais sensível e seja o exame de escolha para caracterizar o defeito. A ressonância avalia o canal, os recessos laterais, os forames e o estado do disco. Radiografia panorâmica em perfil com cabeças femorais permite medir incidência pélvica, inclinação sacral, versão pélvica e balanço sagital global.",
      figureId: "espondilolistese:meyerding",
      figureVariant: "iii",
      tips: [
        "Radiografia deitado pode reduzir a listese e subestimar o grau — usar perfil com carga",
        "A listese degenerativa pode desaparecer na ressonância em decúbito: correlacionar sempre com a radiografia em pé",
      ],
      pitfalls: [
        "Graduar por Meyerding e parar aí no alto grau — a forma pesa mais que a magnitude",
        "Não solicitar dinâmicas e depois discutir artrodese sem saber se o segmento é móvel",
      ],
    },
    {
      n: 3,
      title: "Conduzir o tratamento conservador — sempre a primeira linha",
      detail:
        "Em ambas as formas, iniciar por educação, adaptação das atividades, analgesia e anti-inflamatórios por período limitado, e fisioterapia com estabilização do tronco, fortalecimento do core e dos extensores e alongamento de isquiotibiais. No jovem com lise aguda da pars, a restrição da atividade esportiva é o pilar, com órtese quando se busca a consolidação do defeito. Na dor refratária, a infiltração epidural ou foraminal alivia e ajuda a confirmar o nível sintomático. Reavaliar em 3 a 6 meses. A análise do SPORT mostrou que, na listese degenerativa, esperar mais de 12 meses não piorou o resultado — há tempo para tratar bem sem operar.",
      figureId: "espondilolistese:scottie",
      tips: [
        "Listese assintomática em adulto não se opera, em nenhum grau",
        "Documentar a falha do conservador antes de indicar cirurgia sustenta a decisão",
      ],
      pitfalls: [
        "Indicar cirurgia pelo grau radiográfico e não pelo sintoma refratário",
        "Prescrever repouso prolongado, que descondiciona e agrava",
      ],
    },
    {
      n: 4,
      title: "Descompressão na listese degenerativa com estenose",
      detail:
        "Na falha do conservador, o alvo é a estenose central e dos recessos laterais. Por via posterior mediana ou acesso tubular, realizar laminectomia, laminotomia ou descompressão preservadora (over-the-top, bilateral por acesso unilateral), ressecando o ligamento amarelo hipertrofiado e a porção medial das facetas. O princípio técnico que não se negocia é preservar ao menos metade de cada faceta e a pars: a ressecção excessiva cria instabilidade iatrogênica e converte um caso de descompressão isolada em um caso que exigiria artrodese (Wiltse VI). Confirmar descompressão adequada do recesso lateral e da raiz de L5, que é a estrutura tipicamente comprimida em L4-L5.",
      figureId: "espondilolistese:tratamento",
      figureVariant: "descompressao",
      tips: [
        "Técnicas preservadoras descomprimem bem mantendo a estabilidade posterior",
        "Palpar o trajeto da raiz no recesso e no forame confirma a liberação",
      ],
      pitfalls: [
        "Facetectomia excessiva, criando instabilidade iatrogênica",
        "Descompressão insuficiente do recesso lateral, mantendo a claudicação",
        "Durotomia por manipulação de ligamento amarelo aderido",
      ],
    },
    {
      n: 5,
      title: "Decidir sobre a artrodese — a controvérsia explicitada",
      detail:
        "Esta é a decisão discutida do tópico e deve ser tomada com a evidência sobre a mesa. Herkowitz e Kurz (1991) favoreceram a artrodese e moldaram a prática. Em 2016, dois ensaios randomizados no mesmo número do NEJM discordaram: Försth (247 pacientes) não achou diferença em 2 nem em 5 anos, com mais morbidade e custo na artrodese; Ghogawala (SLIP, 66 pacientes) achou vantagem pequena porém clinicamente relevante da artrodese no SF-36 físico até 4 anos, com reoperação de 14% contra 34%. Em 2021, o NORDSTEN-DS (267 pacientes) mostrou não inferioridade da descompressão isolada em 2 anos. A síntese: a descompressão isolada é opção legítima para a maioria dos casos de baixo grau com estenose e dor predominantemente em membros. Reservar a artrodese para instabilidade demonstrada em dinâmicas, dor lombar mecânica desproporcional, escorregamento móvel ou maior, deformidade, cifose local, ou quando a descompressão necessária comprometer as facetas.",
      figureId: "espondilolistese:tratamento",
      figureVariant: "artrodese",
      tips: [
        "Radiografias dinâmicas antes da cirurgia informam esta decisão como nenhum outro exame",
        "Dor predominantemente em membros favorece descompressão isolada; dor lombar mecânica dominante puxa para artrodese",
        "Compartilhar a incerteza com o paciente, incluindo o risco de reoperação, é parte da decisão",
      ],
      pitfalls: [
        "Apresentar a artrodese como conduta obrigatória — a evidência de alto nível não sustenta",
        "Apresentar a descompressão isolada como sempre suficiente — o SLIP mostrou mais reoperação sem artrodese",
        "Fundir sem indicação, acrescentando morbidade, custo e doença do segmento adjacente",
      ],
    },
    {
      n: 6,
      title: "Executar a artrodese quando indicada",
      detail:
        "Por via posterior mediana, expor até os processos transversos preservando as cápsulas facetárias do nível adjacente — gesto simples que reduz doença do segmento adjacente. Instrumentar com parafusos pediculares sob controle radioscópico, decorticar os processos transversos e as facetas e depositar enxerto ósseo posterolateral em leito bem preparado. Considerar suporte intersomático (TLIF ou PLIF) quando se busca restaurar altura discal e foraminal, corrigir cifose local e aumentar a taxa de fusão. No alto grau, a redução melhora o balanço sagital e o ângulo de escorregamento, mas expõe a raiz de L5 a risco expressivo: decidir deliberadamente, sob monitorização neurofisiológica, lembrando que a fusão in situ é alternativa segura e consagrada.",
      figureId: "espondilolistese:sagital",
      figureVariant: "slip",
      tips: [
        "Preservar a cápsula facetária do nível adjacente à instrumentação",
        "Corrigir o ângulo de escorregamento importa mais que reduzir a translação",
      ],
      pitfalls: [
        "Perseguir redução anatômica no alto grau e provocar déficit da raiz de L5",
        "Leito de enxerto mal preparado, com pseudoartrose",
        "Violação medial ou inferior do pedículo, lesando raiz ou saco tecal",
      ],
    },
    {
      n: 7,
      title: "Situações particulares: jovem com lise e alto grau",
      detail:
        "No jovem com lise aguda da pars, a meta é a consolidação: restrição esportiva e órtese quando indicada, com retorno progressivo guiado por sintoma e imagem. Na lise refratária de paciente jovem selecionado — escorregamento mínimo, disco preservado, defeito preferencialmente acima de L5 —, o reparo direto da pars (parafuso de Buck, técnica de Scott, construto parafuso-gancho) preserva o segmento e evita a artrodese. No alto grau em crescimento, vigiar progressão: escorregamento que progride, ainda que pouco sintomático, é indicação de artrodese. Na espondiloptose, o tratamento é complexo e deve ficar em serviços com experiência.",
      figureId: "espondilolistese:wiltse",
      figureVariant: "istmica",
      tips: [
        "Disco preservado é condição para o reparo direto da pars dar certo",
        "Na criança em crescimento, o seguimento seriado é parte do tratamento",
      ],
      pitfalls: [
        "Indicar reparo da pars com disco já degenerado ou escorregamento significativo",
        "Liberar o retorno esportivo antes da consolidação e da recuperação da estabilização do tronco",
      ],
    },
  ],
  postop: {
    immobilization:
      "Após descompressão isolada, não se usa órtese de rotina. Após artrodese instrumentada, a imobilização também não é obrigatória, ficando a critério do cirurgião conforme a qualidade óssea e o construto; quando empregada, colete lombossacro por 6 a 12 semanas. No tratamento conservador da lise aguda do jovem, a órtese é utilizada por período definido quando se busca a consolidação do defeito, sempre associada à restrição esportiva.",
    weightBearing:
      "Não se trata de carga em membro, e sim de mobilização do tronco. Deambulação é liberada e estimulada já no primeiro dia de pós-operatório em ambos os procedimentos. Restringem-se flexão, rotação e levantamento de peso nas primeiras semanas — mais estritamente após artrodese, até sinais de consolidação. A internação é caracteristicamente mais curta após descompressão isolada do que após artrodese.",
    rehab: [
      {
        window: "0-2 semanas",
        weightBearing: "Deambulação livre desde o 1º dia",
        focus:
          "Controle da dor, cuidados com a ferida, caminhadas curtas e frequentes. Evitar flexão, rotação e levantamento de peso. Orientar higiene postural e mecânica corporal.",
      },
      {
        window: "2-6 semanas",
        weightBearing: "Caminhada progressiva",
        focus:
          "Aumentar distância e tempo de caminhada. Iniciar ativação do core e mobilidade suave. Após artrodese, manter restrição de flexão, rotação e carga; após descompressão isolada, progredir mais rapidamente.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Atividade progressiva",
        focus:
          "Fisioterapia estruturada: estabilização do tronco, fortalecimento do core e dos extensores, alongamento de isquiotibiais. Retorno a atividades leves e ao trabalho não pesado. Após artrodese, progredir conforme sinais de consolidação.",
      },
      {
        window: "3-6 meses",
        weightBearing: "Livre conforme critérios",
        focus:
          "Fortalecimento avançado e condicionamento. Retorno ao trabalho pesado e ao esporte após artrodese apenas com consolidação confirmada; no jovem com lise tratada conservadoramente, retorno esportivo guiado por sintoma, imagem e recuperação da estabilização do tronco.",
      },
    ],
    followup:
      "Acompanhar dor lombar e em membros, distância de marcha sem claudicação, escores funcionais (ODI) e exame neurológico. Radiografias seriadas em perfil, com carga e dinâmicas quando pertinente, para vigiar progressão do escorregamento após descompressão isolada, consolidação e integridade do implante após artrodese, e doença do segmento adjacente a longo prazo. Reoperação é desfecho relevante e discordante entre os ensaios: no SLIP foi de 34% com descompressão isolada contra 14% com artrodese, enquanto no NORDSTEN-DS foi de 12,5% contra 9,1% — informar o paciente sobre essa incerteza.",
  },
  complications: [
    {
      name: "Progressão do escorregamento",
      detail:
        "Aumento do escorregamento após descompressão isolada ou na história natural, sobretudo com instabilidade prévia, escorregamento móvel, disco preservado (mais móvel) ou ressecção posterior excessiva. Nem toda progressão radiográfica é sintomática.",
      prevention:
        "Preservar ao menos metade de cada faceta e a pars ao descomprimir; avaliar dinâmicas antes de decidir por descompressão isolada; considerar artrodese diante de instabilidade demonstrada.",
    },
    {
      name: "Instabilidade iatrogênica (Wiltse VI)",
      detail:
        "Escorregamento criado ou agravado pela cirurgia, por facetectomia ampla ou lesão da pars durante a descompressão. Transforma um caso simples em um caso que exigirá artrodese.",
      prevention:
        "Disciplina técnica na descompressão: preservar as facetas e a pars, empregando técnicas preservadoras quando possível.",
    },
    {
      name: "Durotomia e fístula liquórica",
      detail:
        "Lesão dural durante a descompressão, favorecida por aderência do ligamento amarelo, estenose grave e cirurgia de revisão. Pode cursar com cefaleia postural, pseudomeningocele ou fístula.",
      prevention:
        "Dissecção cuidadosa do ligamento amarelo, uso de instrumental adequado e reparo primário meticuloso quando ocorrer.",
    },
    {
      name: "Lesão da raiz de L5",
      detail:
        "Complicação mais temida da redução do escorregamento de alto grau, mas possível também na descompressão do recesso lateral e na instrumentação. Pode ocorrer mesmo com técnica correta na redução.",
      prevention:
        "Descompressão adequada antes da redução, redução deliberada e gradual sob monitorização neurofisiológica; considerar fusão in situ como alternativa segura.",
    },
    {
      name: "Mau posicionamento de parafuso pedicular",
      detail:
        "Violação medial ou inferior do pedículo, com irritação ou lesão de raiz ou do saco tecal, exigindo reposicionamento.",
      prevention:
        "Referências anatômicas confiáveis, controle radioscópico ou navegação, e revisão do trajeto antes da inserção.",
    },
    {
      name: "Pseudoartrose",
      detail:
        "Falha de consolidação da artrodese, mais frequente no alto grau, em tabagistas e em leito de enxerto mal preparado; pode cursar com dor persistente e falha do implante.",
      prevention:
        "Decorticação e preparo cuidadoso do leito, enxerto adequado, suporte intersomático em casos selecionados e cessação do tabagismo.",
    },
    {
      name: "Doença do segmento adjacente",
      detail:
        "Degeneração acelerada, estenose ou nova listese no nível vizinho à artrodese, podendo exigir reoperação a longo prazo. Argumento relevante contra fundir sem indicação.",
      prevention:
        "Fundir apenas quando indicado, limitar a extensão da artrodese, preservar a cápsula facetária do nível adjacente e restaurar o balanço sagital.",
    },
    {
      name: "Morbidade acrescida pela artrodese",
      detail:
        "Comparada à descompressão isolada, a artrodese acrescenta tempo cirúrgico, sangramento, internação mais longa e custo — diferenças consistentes e estatisticamente significativas nos ensaios randomizados.",
      prevention:
        "Reservar a artrodese aos casos com indicação clara, evitando-a como reflexo diante de toda listese degenerativa.",
    },
  ],
  evidence: [
    {
      id: "herkowitz-1991",
      claim:
        "Estudo prospectivo comparativo com 50 pacientes com estenose associada a espondilolistese degenerativa (41 em L4-L5) mostrou resultados significativamente melhores quanto ao alívio da dor lombar e em membros inferiores nos que receberam artrodese intertransversa concomitante à laminectomia descompressiva, em seguimento médio de 3 anos.",
      takeaway:
        "Trabalho clássico que estabeleceu a artrodese associada à descompressão como padrão na listese degenerativa e moldou a prática por cerca de 25 anos — ponto de partida obrigatório da controvérsia.",
      level: "II",
      studyType: "Estudo prospectivo comparativo",
      era: "classico",
      citation: {
        authors: "Herkowitz HN, Kurz LT",
        title:
          "Degenerative lumbar spondylolisthesis with spinal stenosis. A prospective study comparing decompression with decompression and intertransverse process arthrodesis.",
        journal: "J Bone Joint Surg Am",
        year: 1991,
        pmid: "2071615",
        url: "https://pubmed.ncbi.nlm.nih.gov/2071615/",
      },
    },
    {
      id: "weinstein-2007-sport",
      claim:
        "SPORT: 607 pacientes com espondilolistese degenerativa e estenose alocados em coorte randomizada (304) e observacional (303). A análise por intenção de tratar da coorte randomizada não mostrou efeito significativo nos desfechos primários, com crossover de cerca de 40% em cada direção; a análise como-tratado das duas coortes combinadas mostrou vantagem substancial da cirurgia em 2 anos (dor corporal 18,1; função física 18,3; Oswestry -16,7), com pouca evidência de dano em qualquer dos tratamentos.",
      takeaway:
        "A cirurgia beneficia o paciente refratário e bem selecionado com listese degenerativa e estenose, mas o alto crossover e a ausência de efeito por intenção de tratar impedem transformá-la em conduta obrigatória.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico com coorte observacional paralela",
      era: "classico",
      citation: {
        authors:
          "Weinstein JN, Lurie JD, Tosteson TD, Hanscom B, Tosteson AN, Blood EA, Birkmeyer NJ, et al.",
        title: "Surgical versus nonsurgical treatment for lumbar degenerative spondylolisthesis.",
        journal: "N Engl J Med",
        year: 2007,
        pmid: "17538085",
        doi: "10.1056/NEJMoa070302",
        url: "https://doi.org/10.1056/NEJMoa070302",
      },
    },
    {
      id: "forsth-2016",
      claim:
        "Ensaio sueco com 247 pacientes de 50 a 80 anos com estenose lombar, com ou sem espondilolistese degenerativa (135 com listese), randomizados para descompressão isolada ou descompressão com artrodese. Sem diferença significativa no Oswestry em 2 anos (24 contra 27; p=0,24) nem no teste de caminhada de 6 minutos, com resultados semelhantes nos subgrupos com e sem listese e sem diferença aos 5 anos. Internação de 4,1 contra 7,4 dias, com maior tempo cirúrgico, sangramento e custo no grupo artrodese; reoperação de 21% contra 22% em seguimento médio de 6,5 anos.",
      takeaway:
        "Acrescentar artrodese à descompressão não melhorou o resultado clínico em 2 nem em 5 anos e acrescentou morbidade e custo — o principal argumento a favor da descompressão isolada.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico",
      era: "atual",
      citation: {
        authors:
          "Försth P, Ólafsson G, Carlsson T, Frost A, Borgström F, Fritzell P, Öhagen P, Michaëlsson K, Sandén B",
        title: "A Randomized, Controlled Trial of Fusion Surgery for Lumbar Spinal Stenosis.",
        journal: "N Engl J Med",
        year: 2016,
        pmid: "27074066",
        doi: "10.1056/NEJMoa1513721",
        url: "https://doi.org/10.1056/NEJMoa1513721",
      },
    },
    {
      id: "ghogawala-2016-slip",
      claim:
        "SLIP: 66 pacientes de 50 a 80 anos com espondilolistese degenerativa grau I estável (3 a 14 mm) e estenose sintomática, randomizados para laminectomia isolada ou laminectomia com artrodese posterolateral instrumentada. O grupo artrodese teve maior ganho no componente físico do SF-36 em 2 anos (15,2 contra 9,5; diferença 5,7; IC 95% 0,1 a 11,3; p=0,046), mantido em 3 e 4 anos, sem diferença significativa no Oswestry (p=0,06). Maior sangramento e internação mais longa com artrodese; reoperação acumulada de 14% com artrodese contra 34% sem (p=0,05).",
      takeaway:
        "Publicado no mesmo número do NEJM e com conclusão oposta à do estudo sueco: sugere ganho pequeno porém clinicamente relevante da artrodese e, sobretudo, menos reoperação — a preocupação que mais legitimamente sustenta fundir.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico",
      era: "atual",
      citation: {
        authors:
          "Ghogawala Z, Dziura J, Butler WE, Dai F, Terrin N, Magge SN, Coumans JV, Harrington JF, et al.",
        title: "Laminectomy plus Fusion versus Laminectomy Alone for Lumbar Spondylolisthesis.",
        journal: "N Engl J Med",
        year: 2016,
        pmid: "27074067",
        doi: "10.1056/NEJMoa1508788",
        url: "https://doi.org/10.1056/NEJMoa1508788",
      },
    },
    {
      id: "austevoll-2021-nordsten",
      claim:
        "NORDSTEN-DS: ensaio de não inferioridade, aberto e multicêntrico, com 267 pacientes com estenose lombar sintomática e espondilolistese de um nível igual ou maior que 3 mm, randomizados para descompressão isolada ou descompressão com artrodese instrumentada. Redução de pelo menos 30% no Oswestry em 2 anos ocorreu em 71,4% contra 72,9% (diferença -1,4 pontos percentuais; IC 95% -12,2 a 9,4), demonstrando não inferioridade; variação média do Oswestry de -20,6 contra -21,3. Reoperação em 12,5% contra 9,1%.",
      takeaway:
        "O maior e mais recente ensaio dedicado ao tema sustenta a descompressão isolada como não inferior na listese degenerativa, inclinando o corpo de evidência a favor de não fundir de rotina.",
      level: "I",
      studyType: "Ensaio clínico randomizado de não inferioridade",
      era: "atual",
      citation: {
        authors:
          "Austevoll IM, Hermansen E, Fagerland MW, Storheim K, Brox JI, Solberg T, Rekeland F, Franssen E, et al.",
        title: "Decompression with or without Fusion in Degenerative Lumbar Spondylolisthesis.",
        journal: "N Engl J Med",
        year: 2021,
        pmid: "34347953",
        doi: "10.1056/NEJMoa2100990",
        url: "https://doi.org/10.1056/NEJMoa2100990",
      },
    },
  ],
  pearls: [
    "Ístmica e degenerativa são doenças diferentes: idade, nível, sexo, mecanismo e quadro neurológico divergem em tudo.",
    "Regra do canal: na ístmica o arco posterior fica para trás e o canal se mantém amplo (dor radicular); na degenerativa o arco íntegro acompanha o corpo e o canal estreita (claudicação neurogênica).",
    "No alto grau, a forma pesa mais que a magnitude: ângulo de escorregamento e incidência pélvica predizem progressão melhor que o grau de Meyerding.",
    "O tratamento conservador é a primeira linha em ambas as formas, e o SPORT mostrou que esperar mais de 12 meses não piora o resultado na listese degenerativa.",
    "Descompressão isolada é opção legítima na listese degenerativa de baixo grau com estenose — Försth e NORDSTEN-DS sustentam não fundir de rotina.",
    "Preservar metade de cada faceta e a pars ao descomprimir evita criar a listese iatrogênica (Wiltse VI).",
  ],
  pitfalls: [
    "Tratar toda espondilolistese como uma doença só, ignorando a divisão entre ístmica e degenerativa.",
    "Indicar cirurgia pelo grau radiográfico e não pelo sintoma refratário — listese assintomática em adulto não se opera.",
    "Apresentar a artrodese como obrigatória na listese degenerativa: a evidência de alto nível é conflitante e o maior ensaio sustenta a descompressão isolada.",
    "Ignorar o achado do SLIP de mais reoperação sem artrodese ao apresentar a descompressão isolada como sempre suficiente.",
    "Discutir artrodese sem radiografias dinâmicas — é o exame que mais informa essa decisão.",
    "Perseguir redução anatômica no escorregamento de alto grau e lesar a raiz de L5, quando a fusão in situ é alternativa segura.",
    "Fazer facetectomia ampla na descompressão e criar instabilidade iatrogênica.",
  ],
  figures: [
    {
      id: "espondilolistese:anatomia",
      caption:
        "Anatomia lombar em perfil: corpo, disco, pedículo, pars interarticularis, articulação facetária, saco tecal e raiz de L5. A pars é a ponte estreita entre os processos articulares — o ponto de fadiga.",
      alt: "Anatomia da coluna lombar em perfil com a pars interarticularis e o canal vertebral",
      kind: "diagram",
    },
    {
      id: "espondilolistese:wiltse",
      variant: "istmica",
      caption:
        "Espondilolistese ístmica (Wiltse II) em L5-S1: a lise da pars separa o arco; o corpo escorrega e a lâmina fica para trás, de modo que o canal se mantém amplo e a raiz de L5 sofre no forame.",
      alt: "Espondilolistese ístmica de L5-S1 com lise da pars e arco posterior mantido para trás",
      kind: "diagram",
    },
    {
      id: "espondilolistese:wiltse",
      variant: "degenerativa",
      caption:
        "Espondilolistese degenerativa (Wiltse III) em L4-L5: pars íntegra, todo o arco acompanha o corpo e o canal estreita — a estenose com claudicação neurogênica domina o quadro.",
      alt: "Espondilolistese degenerativa de L4-L5 com pars íntegra e estenose do canal",
      kind: "diagram",
    },
    {
      id: "espondilolistese:meyerding",
      variant: "iii",
      caption:
        "Graduação de Meyerding: a placa terminal superior de S1 é dividida em quartos e observa-se em qual deles se projeta o canto posteroinferior de L5 (I até 25%, II 25-50%, III 50-75%, IV 75-100%, V espondiloptose).",
      alt: "Graus de Meyerding do escorregamento vertebral sobre a placa terminal de S1",
      kind: "diagram",
    },
    {
      id: "espondilolistese:scottie",
      caption:
        "Cãozinho da Escócia na incidência oblíqua: focinho é o processo transverso, olho o pedículo, orelha o processo articular superior e pescoço a pars. A lise aparece como a “coleira” do cão.",
      alt: "Cãozinho da Escócia com coleira indicando lise da pars interarticularis",
      kind: "diagram",
    },
    {
      id: "espondilolistese:sagital",
      variant: "parametros",
      caption:
        "Parâmetros sagitais: incidência pélvica (constante do indivíduo) = inclinação sacral + versão pélvica. Incidência pélvica elevada aumenta o cisalhamento sobre L5 e favorece o escorregamento ístmico.",
      alt: "Incidência pélvica, inclinação sacral e versão pélvica medidas no perfil da pelve",
      kind: "diagram",
    },
    {
      id: "espondilolistese:estenose",
      variant: "estenose",
      caption:
        "Corte axial na listese degenerativa: hipertrofia facetária e do ligamento amarelo estreitam o canal central e os recessos laterais, comprimindo o saco tecal em aspecto de trevo.",
      alt: "Corte axial mostrando estenose central e do recesso lateral por hipertrofia facetária",
      kind: "diagram",
    },
    {
      id: "espondilolistese:tratamento",
      variant: "artrodese",
      caption:
        "Descompressão isolada contra descompressão com artrodese instrumentada — a controvérsia central: Försth e NORDSTEN-DS não mostraram vantagem em acrescentar a artrodese; o SLIP mostrou ganho pequeno e menos reoperação.",
      alt: "Descompressão lombar com artrodese posterolateral instrumentada por parafusos pediculares",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: princípios e prática. 6ª ed. 2025.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, não reprodução de material protegido.",
    figureReference:
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Campbell's Operative Orthopaedics 14a — redesenho original das figuras.",
  },
});
