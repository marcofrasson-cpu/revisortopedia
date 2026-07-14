import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "op-ombro-paralisia-braquial-obstetrica",
  slug: "paralisia-braquial-obstetrica",
  kind: "condicao",
  regionId: "ortopedia-pediatrica",
  bone: "Ombro (criança)",
  injury: "Lesão do plexo braquial no parto",
  title: "Paralisia braquial obstétrica",
  subtitle:
    "Lesão por tração do plexo braquial no parto: reconhecer o padrão, respeitar a recuperação espontânea da maioria, usar o bíceps aos 3 meses como marco prognóstico e rastrear ativamente a displasia glenoumeral.",
  laterality: null,
  status: "complete",
  overview:
    "A paralisia braquial obstétrica é uma lesão por tração do plexo braquial ocorrida no momento do parto, classicamente associada à distocia de ombro, à macrossomia fetal, ao parto instrumentado e à apresentação pélvica. O mecanismo é o aumento do ângulo entre a cabeça e o ombro, que estira as raízes cervicais; por isso o padrão superior (C5-C6, de Erb-Duchenne) predomina, com o membro em adução e rotação interna, cotovelo estendido, antebraço pronado e punho fletido — a chamada postura em \"gorjeta de garçom\", com preensão preservada. O padrão inferior isolado (C8-T1, de Klumpke) é raro e cursa com mão em garra e, com frequência, síndrome de Horner; a paralisia total (C5-T1) é a de pior prognóstico.\n\nO fato clínico dominante é que a MAIORIA das crianças recupera espontaneamente. O papel do ortopedista, portanto, não é operar cedo, e sim identificar a minoria que não vai recuperar — sem, no caminho, deixar instalar-se a sequela mecânica. A recuperação da flexão ativa do cotovelo (bíceps) até cerca de 3 meses de vida é o marcador prognóstico clássico: a criança que reconquista o bíceps nesse prazo tende à recuperação completa, enquanto a recuperação tardia associa-se a pior função final do ombro. A ausência de bíceps aos 3 meses estratifica o risco e leva à vigilância estreita, consolidando-se a indicação de exploração e microcirurgia quando o bíceps permanece ausente aos 6 meses; Horner, membro totalmente flácido e avulsão radicular demonstrada antecipam essa decisão.\n\nMesmo com boa recuperação neurológica, o desequilíbrio muscular entre o subescapular e o peitoral maior (funcionantes e contraturados) e os rotadores externos (paralisados) produz contratura em rotação interna e, sobre uma articulação em crescimento, DISPLASIA GLENOUMERAL: retroversão progressiva da glenoide, subluxação posterior e, no extremo, luxação e falsa glenoide. Essa sequela é adquirida, progressiva e, no início, reversível — o que faz do rastreamento com ultrassom e ressonância magnética uma obrigação, e não um detalhe. O tratamento das sequelas escalona da toxina botulínica e da liberação/alongamento do subescapular com redução articular às transferências tendíneas do grande dorsal e do redondo maior para o manguito, reservando-se a osteotomia desrotacional do úmero à articulação já incongruente.",
  keyFacts: [
    { label: "Incidência", value: "≈ 0,4-4 por 1.000 nascidos vivos" },
    { label: "Fatores de risco", value: "Distocia de ombro, macrossomia, parto instrumentado, apresentação pélvica" },
    { label: "Padrão mais comum", value: "Erb (C5-C6): \"gorjeta de garçom\" com preensão preservada" },
    { label: "Marco prognóstico", value: "Recuperação do bíceps até ~3 meses" },
    { label: "Indicação cirúrgica", value: "Bíceps ausente aos 6 meses (antecipar se Horner/flácido/avulsão)" },
    { label: "Sinal de avulsão", value: "Síndrome de Horner (ptose, miose, anidrose) — T1" },
    { label: "Sequela-chave", value: "Contratura em rotação interna → displasia glenoumeral" },
    { label: "Rastreamento", value: "US (triagem/dinâmico) e RM (padrão-ouro da articulação)" },
  ],
  anatomy: {
    text:
      "O plexo braquial forma-se das raízes ventrais de C5 a T1. C5 e C6 unem-se no tronco superior — cujo vértice é o ponto de Erb —, C7 segue como tronco médio e C8 com T1 formam o tronco inferior. Cada tronco divide-se em ramos anterior e posterior atrás da clavícula; as divisões reorganizam-se nos fascículos lateral, posterior e medial, dos quais nascem os ramos terminais: musculocutâneo (bíceps), axilar (deltoide), radial, mediano e ulnar. Do tronco superior parte precocemente o nervo supraescapular, responsável pela rotação externa e pela abdução iniciais — motivo pelo qual sua reinervação é prioritária.\n\nDois detalhes anatômicos comandam toda a conduta. O primeiro é o gânglio da raiz dorsal: lesões DISTAIS a ele (pós-ganglionares, isto é, rupturas) mantêm um coto proximal viável e são enxertáveis; lesões PROXIMAIS a ele (pré-ganglionares, isto é, avulsões da medula) não têm coto proximal, costumam vir com pseudomeningocele na imagem e só podem ser tratadas por neurotização. O segundo é a proximidade de T1 com o gânglio estrelado da cadeia simpática: a síndrome de Horner (ptose, miose e anidrose) é, na prática, um marcador clínico de avulsão baixa e de lesão extensa. Vizinhanças igualmente relevantes são o nervo frênico (C3-C5), cuja lesão gera paralisia diafragmática e desconforto respiratório, e o nervo torácico longo.\n\nNo ombro em crescimento, a anatomia relevante deixa de ser apenas neural e passa a ser mecânica. O subescapular e o peitoral maior são rotadores internos potentes e habitualmente poupados ou precocemente reinervados; o infraespinal e o redondo menor, rotadores externos, dependem do supraescapular e do axilar, tardiamente recuperados. O par de forças desequilibrado mantém o ombro em rotação interna, a cápsula anterior encurta e a cabeça umeral é empurrada posteriormente. Como a glenoide da criança é uma superfície cartilaginosa moldada pela cabeça que a habita, a pressão excêntrica retroverte a glenoide, cria uma falsa glenoide posterior (biconcavidade) e achata a cabeça. Daí a lógica de medir, no corte axial da RM, a versão glenoidal, o ângulo α e a porcentagem da cabeça umeral anterior ao eixo escapular (PHHA).",
    figureIds: [
      "paralisia-braquial-obstetrica:anatomia",
      "paralisia-braquial-obstetrica:lesao-nervosa",
      "paralisia-braquial-obstetrica:displasia-glenoumeral",
    ],
  },
  classification: [
    {
      id: "padrao-clinico",
      name: "Padrão clínico (topográfico)",
      basis: "Grupo de raízes acometidas e postura resultante do membro ao exame do recém-nascido.",
      note:
        "É a leitura de cabeceira e deve ser refeita em cada consulta: o padrão inicial pode ser mais extenso do que o definitivo, à medida que a neuropraxia se resolve.",
      types: [
        {
          code: "Erb",
          label: "Erb-Duchenne (C5-C6)",
          description:
            "Padrão superior, o mais comum. Ombro aduzido e em rotação interna, cotovelo estendido, antebraço pronado e punho fletido (\"gorjeta de garçom\"); preensão preservada e reflexo de Moro assimétrico.",
          figureId: "paralisia-braquial-obstetrica:padroes",
          figureVariant: "erb",
        },
        {
          code: "Erb+",
          label: "Erb estendido (C5-C7)",
          description:
            "Acrescenta ao padrão de Erb a perda da extensão do punho e dos dedos (queda do punho) pelo acometimento de C7; preensão presente, porém mais fraca.",
          figureId: "paralisia-braquial-obstetrica:padroes",
          figureVariant: "erb-plus",
        },
        {
          code: "Klumpke",
          label: "Klumpke (C8-T1)",
          description:
            "Padrão inferior, raro isoladamente. Ombro e cotovelo relativamente preservados, mão em garra por paralisia de intrínsecos e flexores longos, frequentemente com síndrome de Horner.",
          figureId: "paralisia-braquial-obstetrica:padroes",
          figureVariant: "klumpke",
        },
        {
          code: "Total",
          label: "Paralisia total (C5-T1)",
          description:
            "Membro flácido e anestésico, sem movimento ativo; Horner presente na maioria. Maior taxa de avulsão radicular e o pior prognóstico do espectro.",
          figureId: "paralisia-braquial-obstetrica:padroes",
          figureVariant: "total",
        },
      ],
    },
    {
      id: "narakas",
      name: "Classificação de Narakas",
      basis: "Extensão das raízes acometidas ao exame neonatal, com a síndrome de Horner separando os grupos completos.",
      note:
        "É a classificação prognóstica de referência: os grupos I e II têm probabilidade de recuperação espontânea do bíceps muito maior do que os grupos III e IV, que concentram as indicações de microcirurgia.",
      types: [
        {
          code: "I",
          label: "C5-C6",
          description:
            "Erb clássico, com paralisia de ombro e de flexão do cotovelo. Melhor prognóstico; recuperação espontânea na maioria.",
          figureId: "paralisia-braquial-obstetrica:narakas",
          figureVariant: "1",
        },
        {
          code: "II",
          label: "C5-C7",
          description:
            "Acrescenta a queda do punho. Prognóstico intermediário; a sequela de ombro (contratura em rotação interna) é frequente mesmo com boa recuperação neurológica.",
          figureId: "paralisia-braquial-obstetrica:narakas",
          figureVariant: "2",
        },
        {
          code: "III",
          label: "C5-T1, sem Horner",
          description:
            "Membro totalmente flácido, sem síndrome de Horner. Recuperação espontânea completa é pouco provável; indicação frequente de exploração.",
          figureId: "paralisia-braquial-obstetrica:narakas",
          figureVariant: "3",
        },
        {
          code: "IV",
          label: "C5-T1, com Horner",
          description:
            "Membro flácido com síndrome de Horner. Alta prevalência de avulsão pré-ganglionar e pior prognóstico; exploração precoce.",
          figureId: "paralisia-braquial-obstetrica:narakas",
          figureVariant: "4",
        },
      ],
    },
    {
      id: "tipo-lesao",
      name: "Tipo de lesão nervosa (pré- × pós-ganglionar)",
      basis: "Relação da lesão com o gânglio da raiz dorsal e grau de comprometimento axonal.",
      note:
        "Essa distinção define a técnica: a lesão pós-ganglionar tem coto proximal e é enxertável; a pré-ganglionar (avulsão) exige neurotização. Horner, pseudomeningocele na RM/mielo-TC e paralisia diafragmática apontam para avulsão.",
      types: [
        {
          code: "N",
          label: "Neuropraxia",
          description:
            "Bloqueio focal de condução com continuidade axonal mantida; recuperação completa em semanas. É o substrato da maioria dos casos que se resolvem espontaneamente.",
          figureId: "paralisia-braquial-obstetrica:lesao-nervosa",
          figureVariant: "neuropraxia",
        },
        {
          code: "NC",
          label: "Neuroma em continuidade",
          description:
            "Cicatriz fusiforme que conduz mal. Se a função não recupera, a ressecção do neuroma com enxertia tende a superar a evolução natural.",
          figureId: "paralisia-braquial-obstetrica:lesao-nervosa",
          figureVariant: "neuroma",
        },
        {
          code: "R",
          label: "Ruptura (pós-ganglionar)",
          description:
            "Descontinuidade distal ao gânglio da raiz dorsal, com coto proximal viável. Lesão enxertável com enxertos em cabo do nervo sural.",
          figureId: "paralisia-braquial-obstetrica:lesao-nervosa",
          figureVariant: "ruptura",
        },
        {
          code: "A",
          label: "Avulsão (pré-ganglionar)",
          description:
            "Raiz arrancada da medula, com pseudomeningocele; sem coto proximal e, portanto, não enxertável. Exige neurotização a partir de doadores funcionantes.",
          figureId: "paralisia-braquial-obstetrica:lesao-nervosa",
          figureVariant: "avulsao",
        },
      ],
    },
    {
      id: "waters-rm",
      name: "Deformidade glenoumeral na RM (Waters)",
      basis: "Morfologia da glenoide, versão e posição da cabeça umeral em corte axial de ressonância magnética.",
      note:
        "Graduar a deformidade orienta a estratégia: os tipos iniciais ainda são redutíveis e remodelam com liberação e recentragem; os tipos avançados, com falsa glenoide ou luxação estabelecida, deixam de responder ao reequilíbrio de partes moles.",
      types: [
        {
          code: "I-II",
          label: "Normal a deformidade mínima",
          description:
            "Glenoide côncava com versão próxima do fisiológico (≈ −5°) e cabeça centrada; PHHA em torno de 50%.",
          figureId: "paralisia-braquial-obstetrica:displasia-glenoumeral",
          figureVariant: "normal",
        },
        {
          code: "III",
          label: "Subluxação posterior",
          description:
            "Retroversão progressiva da glenoide com deslocamento posterior da cabeça; PHHA cai abaixo de 35%.",
          figureId: "paralisia-braquial-obstetrica:displasia-glenoumeral",
          figureVariant: "iii",
        },
        {
          code: "IV",
          label: "Falsa glenoide (biconcavidade)",
          description:
            "A cabeça esculpe uma neoarticulação posterior; a glenoide torna-se bicôncava, com crista central entre a glenoide verdadeira e a falsa.",
          figureId: "paralisia-braquial-obstetrica:displasia-glenoumeral",
          figureVariant: "iv",
        },
        {
          code: "V",
          label: "Achatamento com luxação",
          description:
            "Glenoide plana ou convexa, achatamento da cabeça umeral e luxação posterior estabelecida.",
          figureId: "paralisia-braquial-obstetrica:displasia-glenoumeral",
          figureVariant: "v",
        },
        {
          code: "VI",
          label: "Luxação infantil",
          description:
            "Luxação franca já no lactente. É a maior janela de oportunidade: a redução precoce ainda permite remodelação substancial.",
          figureId: "paralisia-braquial-obstetrica:displasia-glenoumeral",
          figureVariant: "vi",
        },
        {
          code: "VII",
          label: "Parada de crescimento proximal",
          description:
            "Hipoplasia da cabeça e do úmero proximal por comprometimento do crescimento; deformidade não corrigível por reequilíbrio muscular.",
          figureId: "paralisia-braquial-obstetrica:displasia-glenoumeral",
          figureVariant: "vii",
        },
      ],
    },
    {
      id: "mallet",
      name: "Escala funcional de Mallet (modificada)",
      basis: "Avaliação de cinco tarefas globais do ombro na criança colaborativa (a partir de ~3 anos), pontuadas de I a V.",
      note:
        "É o desfecho funcional de referência do ombro na paralisia braquial obstétrica e o instrumento usado para comparar tratamentos. Exige colaboração, portanto não substitui a avaliação motora seriada do lactente (escalas do tipo AMS/Toronto).",
      types: [
        {
          code: "I",
          label: "Grau I",
          description: "Ausência de função — não graduável nas tarefas; extremo inferior da escala.",
        },
        {
          code: "II",
          label: "Grau II",
          description:
            "Abdução inferior a 30°, sem rotação externa ativa; mão não alcança a nuca nem a boca sem truques.",
        },
        {
          code: "III",
          label: "Grau III",
          description:
            "Abdução entre 30° e 90°, rotação externa até 20°; mão à nuca e à boca com dificuldade e compensações.",
        },
        {
          code: "IV",
          label: "Grau IV",
          description:
            "Abdução acima de 90°, rotação externa além de 20°; mão à nuca e à boca com facilidade — considerado bom resultado.",
        },
        {
          code: "V",
          label: "Grau V",
          description: "Função normal e simétrica ao lado contralateral.",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Ausência de flexão ativa do cotovelo (bíceps) aos 6 meses de idade — indicação consolidada de exploração e reconstrução microcirúrgica do plexo.",
      "Paralisia total flácida com síndrome de Horner (Narakas IV) ou avulsão radicular demonstrada em RM/mielo-TC: antecipar a exploração para cerca de 3 meses.",
      "Neuroma em continuidade que não conduz, encontrado à exploração: ressecção e enxertia em cabo.",
      "Avulsão pré-ganglionar: neurotização (acessório espinhal → supraescapular; fascículo ulnar → musculocutâneo, técnica de Oberlin).",
      "Contratura em rotação interna com subluxação/displasia glenoumeral progressiva em articulação ainda redutível: liberação/alongamento do subescapular com redução articular, aberta ou artroscópica.",
      "Desequilíbrio persistente dos rotadores externos com articulação recentrada: transferência do grande dorsal e do redondo maior para o manguito rotador.",
      "Deformidade glenoumeral avançada, incongruente ou irredutível, com limitação funcional pela rotação interna fixa: osteotomia desrotacional do úmero.",
    ],
    nonOperative: [
      "Todos os casos, na fase inicial: programa domiciliar de amplitude passiva iniciado por volta das 2-3 semanas, após conforto da lesão perinatal, para prevenir contratura enquanto se aguarda a reinervação.",
      "Recuperação do bíceps antigravitário até cerca de 3 meses — expectativa de recuperação espontânea; manter apenas ADM passiva, estimulação funcional e vigilância.",
      "Narakas I e II com recuperação progressiva documentada em avaliações seriadas mensais.",
      "Contratura em rotação interna incipiente sem subluxação: alongamento passivo intensivo, com ou sem toxina botulínica no subescapular/peitoral maior como adjuvante temporário.",
      "Proteção do membro insensível e orientação familiar nas lesões completas, para prevenir lesões térmicas e automutilação.",
    ],
    decisionNotes:
      "A decisão organiza-se em torno de um relógio biológico, não de um achado isolado. Primeiro, respeitar a história natural: a maioria das crianças recupera, e operar cedo demais expõe a uma cirurgia desnecessária um lactente que iria recuperar sozinho. Segundo, usar o bíceps como cronômetro: a recuperação da flexão do cotovelo até cerca de 3 meses prediz recuperação completa; a recuperação entre o 4º e o 6º mês associa-se a pior função final do ombro, e a persistência da ausência aos 6 meses é a indicação clássica de exploração. Vale a nuance: mesmo entre crianças sem bíceps aos 3 meses, boa parte — sobretudo as de lesão C5-C6 — ainda recupera e evolui com bom ombro sem cirurgia do plexo, o que explica por que os 3 meses estratificam o risco, mas não são, isoladamente, um gatilho operatório universal. Terceiro, reconhecer as exceções que antecipam a cirurgia: Horner, membro totalmente flácido e avulsão demonstrada não vão melhorar com o tempo.\n\nParalelamente corre um segundo relógio, o mecânico. A displasia glenoumeral instala-se cedo, é progressiva e pode ocorrer mesmo em crianças com boa recuperação neurológica — inclusive nas que \"receberam alta\" da vigilância neurológica. Perda de rotação externa passiva é o sinal de alarme e obriga a imagem. O ultrassom é excelente como triagem e para avaliar a redução em tempo real, mas concorda mal com a RM, sobretudo em crianças maiores, de modo que a RM permanece o padrão-ouro para caracterizar a articulação e decidir a estratégia. A regra prática é hierárquica: enquanto a articulação for redutível, reequilibrar partes moles (toxina, liberação, redução, transferências) e deixar a glenoide remodelar; quando a incongruência já estiver estabelecida, a osteotomia desrotacional apenas redistribui o arco de rotação — melhora a função, mas não corrige a displasia.",
  },
  approaches: [
    {
      id: "programa-adm",
      name: "Programa de amplitude passiva e orientação familiar (base do tratamento)",
      indication:
        "Todos os casos, desde as primeiras semanas — é o que preserva o ombro enquanto o nervo decide seu destino.",
      interval:
        "Iniciar por volta de 2-3 semanas, após conforto da lesão perinatal e afastadas fraturas associadas. Mobilização passiva diária de ombro (com ênfase na rotação externa com a escápula estabilizada), cotovelo, antebraço, punho e dedos, ensinada aos pais e reforçada a cada consulta. Estimulação funcional e proteção do membro insensível nas lesões completas. Não imobilizar de forma prolongada: a contratura, e não a paralisia, é o que rouba o ombro.",
      atRisk: [
        "Contratura em rotação interna por adesão insuficiente ao programa",
        "Lesão iatrogênica se a mobilização for feita sem estabilizar a escápula",
        "Fratura de clavícula ou de úmero proximal não diagnosticada, mobilizada como se fosse paralisia",
      ],
      figureId: "paralisia-braquial-obstetrica:padroes",
    },
    {
      id: "exploracao-supraclavicular",
      name: "Exploração supraclavicular do plexo (± extensão infraclavicular)",
      indication:
        "Ausência de bíceps aos 6 meses; ou aos ~3 meses no membro flácido com Horner e/ou avulsão demonstrada.",
      interval:
        "Incisão transversa supraclavicular; secção do platisma, afastamento do esternocleidomastóideo e do omo-hióideo; a gordura supraclavicular é rebatida e o plexo abordado no intervalo entre os escalenos anterior e médio, identificando-se as raízes C5-T1, o tronco superior e o nervo supraescapular. Estimulação intraoperatória caracteriza neuroma, ruptura e avulsão. Quando necessário, estende-se abaixo da clavícula para expor divisões e fascículos.",
      atRisk: [
        "Nervo frênico (sobre o escaleno anterior) — paralisia diafragmática",
        "Ducto torácico à esquerda — fístula quilosa",
        "Artéria e veia subclávias",
        "Cúpula pleural — pneumotórax",
        "Nervo acessório espinhal e ramos do plexo cervical",
      ],
      figureId: "paralisia-braquial-obstetrica:microcirurgia",
    },
    {
      id: "enxertia",
      name: "Ressecção do neuroma e enxertia em cabo (nervo sural)",
      indication:
        "Ruptura pós-ganglionar ou neuroma em continuidade que não conduz, com coto proximal viável.",
      interval:
        "Ressecar o neuroma até fascículos sadios em ambos os cotos e reconstruir com enxertos em cabo do nervo sural, coaptados sem tensão. Priorizar a reinervação da flexão do cotovelo (musculocutâneo) e da rotação externa/abdução (supraescapular e axilar). A área doadora sural deixa hipoestesia lateral do pé, geralmente bem tolerada.",
      atRisk: [
        "Nervo sural e sua área doadora (hipoestesia, neuroma doloroso)",
        "Coaptação sob tensão com falência do enxerto",
        "Ressecção insuficiente do neuroma (fascículos cicatriciais na coaptação)",
      ],
      figureId: "paralisia-braquial-obstetrica:microcirurgia",
    },
    {
      id: "neurotizacao",
      name: "Neurotizações (transferências nervosas)",
      indication:
        "Avulsão pré-ganglionar, em que não há coto proximal para enxertar; ou complemento à enxertia em lesões extensas.",
      interval:
        "Usar doadores funcionantes com função redundante: nervo acessório espinhal para o supraescapular (restaura rotação externa e abdução) e fascículo do flexor ulnar do carpo, do nervo ulnar, para o ramo do bíceps do musculocutâneo (técnica de Oberlin, restaura a flexão do cotovelo). Coaptação direta, sem tensão e o mais distal possível, encurtando o trajeto de reinervação.",
      atRisk: [
        "Nervo ulnar (déficit residual pelo fascículo doador)",
        "Trapézio (perda parcial pela retirada do acessório espinhal)",
        "Cocontração/sincinesia entre doador e receptor",
      ],
      figureId: "paralisia-braquial-obstetrica:microcirurgia",
    },
    {
      id: "liberacao-subescapular",
      name: "Alongamento do subescapular e redução glenoumeral (aberta ou artroscópica)",
      indication:
        "Contratura em rotação interna com subluxação/displasia em articulação ainda redutível.",
      interval:
        "Via deltopeitoral ou axilar anterior; alongamento em Z (ou liberação) do subescapular junto à inserção, com capsulotomia anterior quando necessário, e recentragem da cabeça na glenoide. A alternativa artroscópica realiza capsulotomia anterior e tenotomia parcial do subescapular. Frequentemente combinada, no mesmo tempo, com a transferência do grande dorsal e do redondo maior. A remodelação da glenoide após a recentragem é a razão de ser do procedimento.",
      atRisk: [
        "Nervo axilar (quadrilátero) e nervo musculocutâneo (no bordo do coracobraquial)",
        "Veia cefálica no intervalo deltopeitoral",
        "Instabilidade anterior por liberação excessiva do subescapular",
      ],
      figureId: "paralisia-braquial-obstetrica:cirurgia-sequela",
    },
    {
      id: "transferencia-tendinea",
      name: "Transferência do grande dorsal e do redondo maior para o manguito",
      indication:
        "Rotação externa ativa insuficiente com articulação recentrada/congruente — reequilíbrio do par de forças.",
      interval:
        "Via axilar posterior: identificar e desinserir os tendões conjuntos do grande dorsal e do redondo maior de sua inserção anteromedial no úmero e transferi-los para a tuberosidade maior/manguito posterolateral, convertendo rotadores internos em rotadores externos e abdutores. Habitualmente precedida da liberação anterior no mesmo tempo cirúrgico.",
      atRisk: [
        "Nervo radial (no intervalo entre o redondo maior e a cabeça longa do tríceps)",
        "Nervo axilar e artéria circunflexa umeral posterior",
        "Falência ou alongamento da reinserção com perda da correção",
      ],
      figureId: "paralisia-braquial-obstetrica:cirurgia-sequela",
    },
    {
      id: "osteotomia-desrotacional",
      name: "Osteotomia desrotacional do úmero",
      indication:
        "Deformidade glenoumeral avançada, incongruente ou irredutível, com rotação interna fixa limitando a função.",
      interval:
        "Osteotomia transversa do úmero (proximal/diafisária ou supracondiliana), rodando externamente o fragmento distal cerca de 60-90° e fixando com placa ou fios. Não corrige a displasia nem recentra a cabeça: redistribui o arco de rotação disponível, trocando rotação interna excedente por rotação externa útil.",
      atRisk: [
        "Nervo radial no sulco espiral (osteotomia diafisária)",
        "Perda excessiva de rotação interna (mão à linha média, higiene, alimentação)",
        "Retardo de consolidação e falha de síntese",
      ],
      figureId: "paralisia-braquial-obstetrica:cirurgia-sequela",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Reconhecer ao nascimento e afastar os diferenciais",
      detail:
        "Diante de um recém-nascido que não move um membro superior, o primeiro passo não é diagnosticar paralisia — é excluir pseudoparalisia. Fratura de clavícula, fratura/descolamento epifisário do úmero proximal, artrite séptica e osteomielite cursam com dor à mobilização e choro, sem déficit segmentar. A paralisia braquial obstétrica dá um padrão neurológico coerente com raízes, sem dor. Radiografar a clavícula e o úmero, examinar o tórax (assimetria de expansão sugere lesão frênica) e registrar a história obstétrica (distocia de ombro, macrossomia, parto instrumentado, apresentação pélvica). Lembrar que fratura de clavícula e paralisia podem coexistir.",
      figureId: "paralisia-braquial-obstetrica:padroes",
      figureVariant: "erb",
      tips: [
        "Sem dor à mobilização + déficit segmentar coerente = lesão neural, não fratura",
        "Assimetria de expansão torácica ou desconforto respiratório → investigar paralisia frênica",
        "Fratura de clavícula e paralisia braquial podem coexistir — uma não exclui a outra",
      ],
      pitfalls: [
        "Rotular de paralisia uma pseudoparalisia por fratura ou infecção",
        "Iniciar mobilização agressiva sobre uma fratura não diagnosticada",
        "Atribuir todo caso a distocia de ombro: há casos sem qualquer fator de risco identificável",
      ],
    },
    {
      n: 2,
      title: "Definir o padrão, classificar por Narakas e procurar os sinais de gravidade",
      detail:
        "Caracterizar a topografia: Erb (C5-C6), Erb estendido (C5-C7), Klumpke (C8-T1) ou total. Testar deliberadamente a preensão — sua preservação define o padrão superior. Classificar por Narakas (I a IV) e procurar ativamente os marcadores de lesão extensa e de avulsão: síndrome de Horner (ptose, miose, anidrose), membro totalmente flácido e anestésico, e comprometimento diafragmático. A síndrome de Horner é, na prática de cabeceira, o melhor marcador clínico de avulsão baixa e sinaliza pior prognóstico.",
      figureId: "paralisia-braquial-obstetrica:narakas",
      figureVariant: "4",
      tips: [
        "Preensão preservada = C8-T1 íntegras = padrão superior",
        "Procurar Horner com o lactente acordado e em luz adequada — é fácil perder a miose",
        "Klumpke isolado é raro: se parece Klumpke, reexaminar em busca de lesão extensa",
      ],
      pitfalls: [
        "Classificar uma única vez: o padrão inicial pode regredir com a resolução da neuropraxia",
        "Ignorar o Horner e prometer à família a evolução benigna do Erb clássico",
        "Confundir déficit de C7 (queda do punho) com lesão de mão",
      ],
    },
    {
      n: 3,
      title: "Iniciar o programa de amplitude passiva",
      detail:
        "A partir de 2-3 semanas, com o conforto da lesão perinatal já estabelecido e afastadas as fraturas, ensinar aos pais a mobilização passiva diária: rotação externa do ombro com a escápula estabilizada (a manobra mais importante e a mais frequentemente feita errada), abdução, flexão-extensão do cotovelo, supinação do antebraço, punho e dedos. Nas lesões completas, orientar a proteção do membro insensível contra queimaduras e automutilação. O objetivo desta fase é chegar ao momento da decisão com um ombro móvel: a contratura, e não a paralisia, é o que fecha as portas terapêuticas.",
      figureId: "paralisia-braquial-obstetrica:padroes",
      figureVariant: "erb",
      tips: [
        "Estabilizar a escápula ao alongar a rotação externa — sem isso, mede-se e alonga-se escápula, não glenoumeral",
        "Reforçar e reensinar a técnica aos pais a cada consulta; adesão é tratamento",
        "Nas lesões completas, orientação sobre membro insensível é parte da prescrição",
      ],
      pitfalls: [
        "Imobilizar o membro ao tronco por tempo prolongado e trocar paralisia por rigidez",
        "Alongar com força sobre uma fratura não reconhecida",
        "Delegar o programa sem verificar a execução e a adesão",
      ],
    },
    {
      n: 4,
      title: "Seguir mensalmente e cronometrar o bíceps aos 3 meses",
      detail:
        "Reavaliar mensalmente com escala motora apropriada ao lactente, documentando o retorno segmentar. O marco é a flexão ativa do cotovelo contra a gravidade por volta dos 3 meses: quem a recupera nesse prazo tende à recuperação completa e a bom ombro; a recuperação tardia (4º ao 6º mês) associa-se a função final significativamente pior, e é raro que a criança que só recupera o bíceps após os 3 meses atinja recuperação neurológica completa. Estratificar por Narakas: nos grupos I e II a chance de bíceps aos 3 meses é ordens de grandeza maior do que nos grupos III e IV. Registrar objetivamente cada avaliação — a decisão dos 6 meses se constrói sobre essa curva, não sobre uma impressão.",
      figureId: "paralisia-braquial-obstetrica:biceps-3-meses",
      tips: [
        "Testar o bíceps contra a gravidade, com o ombro estabilizado, e não pelo esboço de flexão",
        "Documentar a curva de recuperação: é ela, e não um exame isolado, que sustenta a indicação",
        "Ausência de bíceps aos 3 meses estratifica o risco — não é, sozinha, indicação de operar",
      ],
      pitfalls: [
        "Confundir movimento por truque (gravidade, supinação, rotação do tronco) com bíceps ativo",
        "Espaçar o seguimento e perder a janela dos 6 meses",
        "Prometer recuperação completa a quem recuperou o bíceps tardiamente",
      ],
    },
    {
      n: 5,
      title: "Decidir a exploração e reconstruir o plexo",
      detail:
        "Indicar exploração quando o bíceps permanece ausente aos 6 meses; antecipar para cerca de 3 meses no membro flácido com Horner (Narakas IV) ou com avulsão demonstrada em RM/mielo-TC. À exploração supraclavicular, caracterizar a lesão com estimulação: neuroma que conduz mal e ruptura pós-ganglionar são ressecados e reconstruídos com enxertos em cabo do nervo sural, sem tensão; avulsões pré-ganglionares não são enxertáveis e exigem neurotização — acessório espinhal para o supraescapular e fascículo ulnar para o musculocutâneo (Oberlin). Priorizar a reinervação da flexão do cotovelo e da rotação externa/abdução, que são as funções que definem o ombro útil.",
      figureId: "paralisia-braquial-obstetrica:microcirurgia",
      figureVariant: "enxerto",
      tips: [
        "A regra técnica é anatômica: com coto proximal, enxerte; sem coto proximal, neurotize",
        "Coaptação sem tensão e o mais distal possível encurta o trajeto de reinervação",
        "Reinervar o supraescapular protege o ombro contra a displasia futura",
      ],
      pitfalls: [
        "Explorar cedo demais um Narakas I que iria recuperar sozinho",
        "Insistir em enxertar uma raiz avulsionada",
        "Perder o nervo frênico ou o ducto torácico na dissecção supraclavicular",
      ],
    },
    {
      n: 6,
      title: "Rastrear a contratura em rotação interna e a displasia glenoumeral",
      detail:
        "A vigilância mecânica corre em paralelo à neurológica e não termina com ela: a displasia pode instalar-se mesmo em crianças com boa recuperação neurológica. Medir seriadamente a rotação externa passiva com a escápula estabilizada — sua perda é o sinal de alarme e obriga a imagem. O ultrassom é excelente como triagem e para avaliar a redução em tempo real, mas concorda mal com a RM, sobretudo à medida que a criança cresce; a RM permanece o padrão-ouro para caracterizar a articulação. No corte axial, medir a versão glenoidal, o ângulo α e a PHHA, e graduar a deformidade (Waters). Reconhecer a biconcavidade (falsa glenoide) como a fronteira entre remodelação possível e deformidade estabelecida.",
      figureId: "paralisia-braquial-obstetrica:displasia-glenoumeral",
      figureVariant: "iv",
      tips: [
        "Perda de rotação externa passiva = imagem, não observação",
        "US para triar e ver a redução dinâmica; RM para decidir a estratégia",
        "Boa recuperação neurológica não dispensa a vigilância do ombro",
      ],
      pitfalls: [
        "Medir rotação externa sem estabilizar a escápula e superestimar o movimento glenoumeral",
        "Tratar o ultrassom como equivalente à RM, subestimando versão e ângulo α",
        "Dar alta ao Narakas I \"recuperado\" e reencontrá-lo anos depois com falsa glenoide",
      ],
    },
    {
      n: 7,
      title: "Reequilibrar o ombro enquanto a articulação é redutível",
      detail:
        "Enquanto a cabeça reduz na glenoide, a estratégia é de partes moles. A toxina botulínica no subescapular e no peitoral maior serve como adjuvante temporário na contratura incipiente, comprando tempo para o alongamento. Instalada a subluxação, alongar/liberar o subescapular (aberto, em Z, ou artroscópico com capsulotomia anterior e tenotomia parcial) e recentrar a cabeça — e, no mesmo tempo, transferir o grande dorsal e o redondo maior para o manguito posterolateral, convertendo rotadores internos em rotadores externos. A recentragem devolve à glenoide o estímulo mecânico correto: a remodelação, inclusive em crianças mais velhas, é a razão de ser do procedimento. Imobilizar em rotação externa e abdução para manter o que foi conquistado.",
      figureId: "paralisia-braquial-obstetrica:cirurgia-sequela",
      figureVariant: "liberacao",
      tips: [
        "Liberação anterior + transferência no mesmo tempo: libera-se o que trava e reequilibra-se o que faltava",
        "Confirmar a redução em tempo real (ultrassom/artroscopia) antes de fixar a estratégia",
        "A remodelação da glenoide após a recentragem ocorre mesmo além dos 5 anos — não descartar pela idade",
      ],
      pitfalls: [
        "Liberar em excesso o subescapular e criar instabilidade anterior",
        "Confiar apenas na toxina botulínica em uma articulação já subluxada",
        "Transferir tendões sobre uma articulação não reduzida — reequilibra-se uma incongruência",
      ],
    },
    {
      n: 8,
      title: "Osteotomizar apenas quando a articulação já é incongruente",
      detail:
        "Na deformidade avançada, incongruente ou irredutível, com rotação interna fixa que impede a mão de alcançar a boca e a nuca, a osteotomia desrotacional do úmero roda externamente o fragmento distal cerca de 60-90°, fixando-o com placa ou fios. É preciso ser honesto sobre o que ela faz: não corrige a displasia nem recentra a cabeça — apenas redistribui o arco de rotação disponível. Dosar a correção para não trocar um problema por outro: rotação externa demais custa a rotação interna necessária à linha média, à higiene e à alimentação.",
      figureId: "paralisia-braquial-obstetrica:cirurgia-sequela",
      figureVariant: "osteotomia",
      tips: [
        "Indicação é de arco de movimento, não de imagem: o que incomoda é a mão que não chega à boca",
        "Dosar a rotação preservando a rotação interna funcional",
        "Proteger o nervo radial na osteotomia diafisária",
      ],
      pitfalls: [
        "Osteotomizar uma articulação ainda redutível, perdendo a chance de remodelação",
        "Rodar em excesso e inutilizar a rotação interna",
        "Apresentar a osteotomia à família como correção da displasia",
      ],
    },
  ],
  postop: {
    immobilization:
      "Após microcirurgia do plexo, imobilização do membro junto ao tronco (tipo Velpeau) por cerca de 3-4 semanas, protegendo as coaptações contra tração. Após liberação do subescapular com redução articular e/ou transferência do grande dorsal e do redondo maior, imobilização em abdução e rotação externa (gesso toracobraquial ou órtese) por cerca de 4-6 semanas, para manter a cabeça reduzida e proteger a reinserção. Após osteotomia desrotacional, imobilização conforme a estabilidade da síntese até sinais de consolidação. No tratamento não operatório não há imobilização: o programa é de mobilização.",
    weightBearing:
      "Conceito adaptado ao membro superior: o que se gradua é o USO do membro e o uso de órteses, não a carga. Na fase pós-microcirúrgica, uso protegido por 3-4 semanas, com retomada progressiva do movimento ativo espontâneo à medida que a reinervação avança (esperar meses, não semanas). Após cirurgia do ombro, o membro é mantido em abdução e rotação externa pela órtese/gesso, liberando-se o uso funcional progressivamente após 4-6 semanas; órteses noturnas de rotação externa podem ser mantidas para preservar a correção. A criança não deve apoiar-se nem escalar com o membro operado enquanto a síntese ou a reinserção não estiverem protegidas.",
    rehab: [
      {
        window: "0-4 semanas (pós-microcirurgia)",
        weightBearing: "Membro imobilizado ao tronco; sem uso funcional",
        focus:
          "Proteger as coaptações. Mobilização apenas de punho e dedos conforme a imobilização permitir; orientação familiar e proteção do membro insensível.",
      },
      {
        window: "4 semanas - 3 meses",
        weightBearing: "Uso espontâneo livre, sem tração do membro",
        focus:
          "Retomar amplitude passiva completa, com ênfase na rotação externa com escápula estabilizada. Prevenir contratura enquanto a reinervação progride; ainda não se espera movimento ativo novo.",
      },
      {
        window: "3-12 meses",
        weightBearing: "Uso funcional pleno conforme retorno motor",
        focus:
          "Aguardar e estimular a reinervação (progressão proximal para distal). Terapia ocupacional, estimulação funcional bimanual e vigilância da rotação externa passiva.",
      },
      {
        window: "0-6 semanas (pós-cirurgia do ombro)",
        weightBearing: "Órtese/gesso em abdução e rotação externa",
        focus:
          "Manter a cabeça reduzida e proteger a reinserção da transferência. Sem rotação interna ativa ou passiva forçada.",
      },
      {
        window: "6 semanas - 6 meses (pós-cirurgia do ombro)",
        weightBearing: "Uso progressivo; órtese noturna conforme correção",
        focus:
          "Reeducação da nova função dos tendões transferidos (rotação externa ativa), ganho de abdução, atividades bimanuais e prevenção da recidiva da contratura.",
      },
      {
        window: "Até a maturidade esquelética",
        weightBearing: "Livre",
        focus:
          "Vigilância da remodelação glenoidal, da recidiva da contratura, da discrepância de comprimento do membro e das sequelas de cotovelo e antebraço.",
      },
    ],
    followup:
      "Seguimento prolongado, até a maturidade esquelética, mesmo nas crianças consideradas recuperadas. Reavaliação seriada da rotação externa passiva a cada consulta e imagem (US como triagem, RM para caracterizar) diante de qualquer perda. Graduar a função pela escala de Mallet a partir dos ~3 anos. Vigiar a recidiva da contratura após liberações e transferências, a discrepância de comprimento do membro, a contratura em flexão do cotovelo, a deformidade em supinação do antebraço e a luxação da cabeça radial. A reinervação estende-se por 18-24 meses; ganhos funcionais e adaptativos continuam além disso.",
  },
  complications: [
    {
      name: "Displasia glenoumeral e luxação posterior",
      detail:
        "Retroversão progressiva da glenoide, subluxação posterior da cabeça, biconcavidade (falsa glenoide) e, no extremo, luxação e achatamento da cabeça. É adquirida, progressiva e pode ocorrer mesmo com boa recuperação neurológica; a RM é o padrão-ouro para caracterizá-la e o ultrassom, uma triagem que subestima versão e ângulo α.",
      prevention:
        "Programa precoce de rotação externa passiva, rastreamento seriado da rotação externa com imagem ao primeiro sinal de perda e intervenção de partes moles enquanto a articulação ainda é redutível.",
    },
    {
      name: "Contratura em rotação interna e adução do ombro",
      detail:
        "Encurtamento do subescapular, do peitoral maior e da cápsula anterior, com perda de rotação externa e da abdução; é o motor mecânico da displasia e a queixa funcional dominante (mão não alcança boca e nuca).",
      prevention:
        "Amplitude passiva diária desde as primeiras semanas com escápula estabilizada; toxina botulínica como adjuvante na contratura incipiente; liberação antes que a incongruência se estabeleça.",
    },
    {
      name: "Sequelas do cotovelo e do antebraço",
      detail:
        "Contratura em flexão do cotovelo, deformidade em supinação fixa do antebraço (por desequilíbrio do bíceps reinervado sobre pronadores fracos) e luxação/subluxação da cabeça radial, com limitação funcional e queixa estética.",
      prevention:
        "Amplitude passiva de cotovelo e antebraço no programa domiciliar; vigilância radiográfica da cabeça radial; osteotomia rotacional do rádio/liberações nos casos estabelecidos.",
    },
    {
      name: "Síndrome de Horner",
      detail:
        "Ptose, miose e anidrose ipsilaterais por comprometimento simpático de T1/gânglio estrelado. Não é complicação tratável, e sim marcador clínico de avulsão pré-ganglionar e de lesão extensa (Narakas IV), com pior prognóstico.",
      prevention:
        "Não prevenível; reconhecê-la muda a conduta — antecipa a investigação de avulsão e a indicação de exploração.",
    },
    {
      name: "Paralisia diafragmática (nervo frênico)",
      detail:
        "Lesão de C3-C5/frênico com elevação da hemicúpula, desconforto respiratório e infecções de repetição no lactente; também pode ser iatrogênica na dissecção supraclavicular.",
      prevention:
        "Examinar a expansão torácica e investigar com imagem no lactente sintomático; identificar e proteger o nervo frênico sobre o escaleno anterior durante a exploração.",
    },
    {
      name: "Cocontração e sincinesia",
      detail:
        "Reinervação aberrante faz músculos antagonistas contraírem-se juntos (por exemplo, bíceps e tríceps), limitando o movimento útil; o \"sinal do trompetista\" (abdução do ombro para levar a mão à boca) é a expressão típica.",
      prevention:
        "Coaptações o mais distais possível e reeducação motora específica; toxina botulínica no antagonista como adjuvante em casos selecionados.",
    },
    {
      name: "Discrepância de comprimento do membro",
      detail:
        "O membro acometido cresce menos, com encurtamento habitualmente modesto, porém perceptível e cumulativo até a maturidade; nas lesões graves há hipoplasia global e parada de crescimento do úmero proximal (Waters VII).",
      prevention:
        "Não prevenível; documentar, orientar a família quanto à expectativa e reavaliar até a maturidade esquelética.",
    },
    {
      name: "Insensibilidade, automutilação e negligência do membro",
      detail:
        "Nas lesões completas, a anestesia expõe a queimaduras, ferimentos e automutilação; o desuso aprendido reduz a incorporação do membro ao esquema corporal mesmo após reinervação.",
      prevention:
        "Orientação familiar explícita sobre proteção do membro insensível e terapia com estimulação funcional bimanual precoce.",
    },
    {
      name: "Complicações da microcirurgia",
      detail:
        "Falência do enxerto por coaptação sob tensão, morbidade da área doadora sural (hipoestesia lateral do pé, neuroma), déficit residual pelo fascículo ulnar doador, fístula quilosa e pneumotórax na dissecção supraclavicular.",
      prevention:
        "Ressecção do neuroma até fascículos sadios, coaptação sem tensão, escolha criteriosa de doadores redundantes e domínio da anatomia supraclavicular (frênico, ducto torácico, cúpula pleural, subclávia).",
    },
  ],
  evidence: [
    {
      id: "waters-1999-biceps-3-meses",
      claim:
        "Em coorte prospectiva de lactentes avaliados mensalmente, os que recuperaram a função do bíceps nos primeiros 3 meses tiveram função normal ao final, enquanto os que a recuperaram no 4º, 5º ou 6º mês tiveram escores de Mallet significativamente piores (p < 0,005); a reparação microcirúrgica melhorou a função no pequeno subgrupo sem bíceps aos 6 meses.",
      takeaway:
        "É o alicerce do marco clássico: recuperar o bíceps até ~3 meses prediz recuperação completa; recuperá-lo depois disso raramente é recuperação neurológica completa, e a microcirurgia se justifica no subgrupo sem bíceps aos 6 meses.",
      level: "III",
      studyType: "Coorte prospectiva com comparação entre grupos (história natural × microcirurgia × cirurgia reconstrutiva)",
      era: "classico",
      citation: {
        authors: "Waters PM",
        title:
          "Comparison of the natural history, the outcome of microsurgical repair, and the outcome of operative reconstruction in brachial plexus birth palsy.",
        journal: "J Bone Joint Surg Am",
        year: 1999,
        pmid: "10360693",
        doi: "10.2106/00004623-199905000-00006",
      },
    },
    {
      id: "smith-2004-biceps-ausente-3-meses",
      claim:
        "Em 28 pacientes com bíceps AUSENTE aos 3 meses seguidos por em média 11 anos, o bíceps contraiu até os 6 meses em 71% (incluindo todos os 13 com lesão C5-C6); 55% dos que não operaram o plexo alcançaram ombro classe IV de Mallet, e a recuperação entre 3 e 6 meses associou-se a melhor abdução e função mão-nuca/mão-dorso do que a recuperação após os 6 meses.",
      takeaway:
        "Nuança essencial: a ausência de bíceps aos 3 meses estratifica o risco, mas não é indicação automática de operar — a criança C5-C6 frequentemente recupera e evolui com bom ombro sem cirurgia do plexo.",
      level: "II",
      studyType: "Coorte prospectiva de prognóstico com seguimento de longo prazo (média de 11 anos)",
      era: "classico",
      citation: {
        authors: "Smith NC, Rowan P, Benson LJ, Ezaki M, Carter PR",
        title: "Neonatal brachial plexus palsy. Outcome of absent biceps function at three months of age.",
        journal: "J Bone Joint Surg Am",
        year: 2004,
        pmid: "15466724",
      },
    },
    {
      id: "foad-2009-narakas-prognostico",
      claim:
        "Revisão baseada em evidências de 11 estudos: 64% dos lactentes Narakas I-II recuperaram o bíceps aos 3 meses, contra apenas 9% dos Narakas III-IV; a chance de recuperação do bíceps aos 3 meses foi 19 vezes maior no grupo I-II, e a de recuperação completa, 11 vezes maior.",
      takeaway:
        "O marco dos 3 meses deve ser lido dentro do grupo de Narakas: nas lesões superiores ele quase sempre é cumprido, enquanto nas completas quase nunca — é aí que se concentra a indicação de microcirurgia.",
      level: "III",
      studyType: "Revisão sistemática baseada em evidências (graduação Oxford)",
      era: "atual",
      citation: {
        authors: "Foad SL, Mehlman CT, Foad MB, Lippert WC",
        title: "Prognosis following neonatal brachial plexus palsy: an evidence-based review.",
        journal: "J Child Orthop",
        year: 2009,
        pmid: "19885693",
        doi: "10.1007/s11832-009-0208-3",
      },
    },
    {
      id: "donohue-2017-us-vs-rm",
      claim:
        "Estudo diagnóstico multicêntrico comparando ultrassom e RM na displasia glenoumeral: a concordância interobservador da versão glenoidal ao ultrassom foi ruim (ICC 0,30), e o ultrassom subestimou o ângulo α em média 13° ± 23° e a versão em 6° ± 17° em relação à RM, com diferença crescente conforme a idade.",
      takeaway:
        "O ultrassom serve como triagem e para avaliar a redução em tempo real, mas não é intercambiável com a RM: a RM permanece o padrão-ouro para caracterizar a articulação e sustentar a decisão cirúrgica.",
      level: "I",
      studyType: "Estudo diagnóstico comparativo multicêntrico (concordância US × RM)",
      era: "atual",
      citation: {
        authors: "Donohue KW, Little KJ, Gaughan JP, Kozin SH, Norton BD, Zlotolow DA",
        title: "Comparison of Ultrasound and MRI for the Diagnosis of Glenohumeral Dysplasia in Brachial Plexus Birth Palsy.",
        journal: "J Bone Joint Surg Am",
        year: 2017,
        pmid: "28099302",
        doi: "10.2106/JBJS.15.01116",
      },
    },
    {
      id: "jonsson-2019-liberacao-remodelacao",
      claim:
        "Em 61 pacientes submetidos a alongamento aberto do subescapular com redução glenoumeral e seguidos por em média 10,2 anos, a PHHA subiu de 13,2% para 40,8% (+27,6 pontos percentuais) e a retroversão glenoidal reduziu-se de 25,4° para 10,6° (variação de 14,8°); todos os pacientes, inclusive os operados após os 5 anos, se beneficiaram.",
      takeaway:
        "Recentrar a cabeça devolve à glenoide o estímulo mecânico correto e produz remodelação consistente — inclusive em crianças mais velhas, o que questiona o encaminhamento automático desse grupo à osteotomia desrotacional.",
      level: "III",
      studyType: "Coorte antes-e-depois com imagem pareada e seguimento médio de 10 anos",
      era: "atual",
      citation: {
        authors: "Jönsson K, Werner M, Roos F, Hultgren T",
        title:
          "Development of the glenohumeral joint after subscapular release and open relocation in children with brachial plexus birth palsy: long-term results in 61 patients.",
        journal: "J Shoulder Elbow Surg",
        year: 2019,
        pmid: "31085034",
        doi: "10.1016/j.jse.2019.02.025",
      },
    },
  ],
  pearls: [
    "A maioria recupera espontaneamente: o papel do ortopedista é identificar a minoria que não vai recuperar, sem deixar instalar-se a sequela mecânica.",
    "Bíceps antigravitário até ~3 meses prediz recuperação completa; recuperação tardia significa ombro pior — mas a ausência aos 3 meses estratifica o risco, e a indicação clássica se consolida aos 6 meses.",
    "Preensão preservada define o padrão superior (C5-C6): é o teste de cabeceira que separa Erb de lesão extensa.",
    "Síndrome de Horner é o marcador clínico de avulsão pré-ganglionar (T1) e de pior prognóstico — procure-a ativamente.",
    "A regra técnica é anatômica: com coto proximal (ruptura pós-ganglionar), enxerte; sem coto proximal (avulsão), neurotize.",
    "A displasia glenoumeral é adquirida, progressiva e ocorre mesmo com boa recuperação neurológica: perda de rotação externa passiva pede imagem, não observação.",
    "US para triar e ver a redução dinâmica; RM para decidir — o ultrassom subestima versão e ângulo α, e cada vez mais à medida que a criança cresce.",
    "Enquanto a articulação for redutível, reequilibre partes moles e deixe a glenoide remodelar; a remodelação ocorre mesmo além dos 5 anos.",
    "A osteotomia desrotacional não corrige a displasia — apenas redistribui o arco de rotação disponível.",
  ],
  pitfalls: [
    "Rotular de paralisia uma pseudoparalisia por fratura de clavícula/úmero, artrite séptica ou osteomielite — nelas há dor, e não déficit segmentar.",
    "Confundir movimento por truque (gravidade, supinação, rotação do tronco) com flexão ativa do cotovelo e superestimar a recuperação.",
    "Indicar exploração precoce em Narakas I que iria recuperar sozinho — ou, no extremo oposto, perder a janela dos 6 meses por seguimento espaçado.",
    "Ignorar a síndrome de Horner e o membro flácido, prometendo à família a evolução benigna do Erb clássico.",
    "Medir a rotação externa sem estabilizar a escápula: mede-se escapulotorácica, superestima-se o ombro e perde-se a displasia.",
    "Tratar o ultrassom como equivalente à RM e subestimar a retroversão e o ângulo α.",
    "Dar alta à criança neurologicamente \"recuperada\" e reencontrá-la anos depois com falsa glenoide estabelecida.",
    "Transferir tendões ou osteotomizar sobre uma articulação não reduzida, fixando a incongruência.",
    "Rodar em excesso na osteotomia desrotacional e inutilizar a rotação interna necessária à linha média, à higiene e à alimentação.",
    "Insistir em enxertar uma raiz avulsionada, ou coaptar sob tensão e condenar o enxerto.",
  ],
  figures: [
    {
      id: "paralisia-braquial-obstetrica:anatomia",
      caption:
        "Plexo braquial (C5-T1): raízes, troncos, divisões retroclaviculares, fascículos e ramos terminais, com o ponto de Erb e o gânglio estrelado.",
      alt: "Esquema do plexo braquial da raiz ao ramo terminal, destacando o ponto de Erb e a cadeia simpática",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:padroes",
      variant: "erb",
      caption:
        "Padrão de Erb-Duchenne (C5-C6): postura em \"gorjeta de garçom\" com adução, rotação interna, cotovelo estendido e preensão preservada.",
      alt: "Recém-nascido com o membro superior em postura de gorjeta de garçom",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:padroes",
      variant: "erb-plus",
      caption: "Padrão de Erb estendido (C5-C7): acrescenta a queda do punho e dos dedos pelo acometimento de C7.",
      alt: "Padrão de Erb estendido com queda do punho",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:padroes",
      variant: "klumpke",
      caption: "Padrão de Klumpke (C8-T1): mão em garra com síndrome de Horner; ombro e cotovelo relativamente poupados.",
      alt: "Padrão de Klumpke com mão em garra e síndrome de Horner",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:padroes",
      variant: "total",
      caption: "Paralisia total (C5-T1): membro flácido e anestésico, com síndrome de Horner na maioria.",
      alt: "Paralisia braquial total com membro flácido e síndrome de Horner",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:narakas",
      variant: "1",
      caption: "Narakas I (C5-C6): paralisia de ombro e de flexão do cotovelo, com mão poupada; melhor prognóstico.",
      alt: "Classificação de Narakas grupo I",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:narakas",
      variant: "3",
      caption: "Narakas III (C5-T1, sem Horner): membro totalmente flácido; recuperação espontânea completa é pouco provável.",
      alt: "Classificação de Narakas grupo III",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:narakas",
      variant: "4",
      caption: "Narakas IV (C5-T1 com Horner): alta prevalência de avulsão pré-ganglionar e pior prognóstico do espectro.",
      alt: "Classificação de Narakas grupo IV com síndrome de Horner",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:lesao-nervosa",
      variant: "neuropraxia",
      caption: "Neuropraxia: bloqueio focal de condução com continuidade mantida — o substrato da recuperação espontânea.",
      alt: "Neuropraxia do plexo braquial com continuidade axonal preservada",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:lesao-nervosa",
      variant: "ruptura",
      caption:
        "Ruptura pós-ganglionar: descontinuidade distal ao gânglio da raiz dorsal, com coto proximal viável — lesão enxertável.",
      alt: "Ruptura pós-ganglionar do plexo braquial",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:lesao-nervosa",
      variant: "avulsao",
      caption:
        "Avulsão pré-ganglionar: raiz arrancada da medula com pseudomeningocele; sem coto proximal, exige neurotização.",
      alt: "Avulsão pré-ganglionar com pseudomeningocele",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:biceps-3-meses",
      caption:
        "Marco do bíceps: recuperação até ~3 meses prediz evolução excelente; a ausência aos 6 meses indica exploração e microcirurgia.",
      alt: "Linha do tempo e algoritmo de decisão baseado na recuperação do bíceps",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:microcirurgia",
      variant: "enxerto",
      caption: "Ressecção do neuroma e reconstrução com enxertos em cabo do nervo sural, coaptados sem tensão.",
      alt: "Enxertia em cabo do plexo braquial com nervo sural",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:microcirurgia",
      variant: "neurotizacao",
      caption:
        "Neurotizações na avulsão: acessório espinhal para o supraescapular e fascículo ulnar para o musculocutâneo (Oberlin).",
      alt: "Neurotizações do acessório espinhal e do nervo ulnar",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:displasia-glenoumeral",
      variant: "normal",
      caption:
        "Corte axial normal: glenoide côncava, versão ≈ −5° e cabeça centrada (PHHA ≈ 50%) — referência para as medidas.",
      alt: "Corte axial normal da articulação glenoumeral com versão e PHHA",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:displasia-glenoumeral",
      variant: "iii",
      caption: "Subluxação posterior: retroversão progressiva da glenoide com queda da PHHA abaixo de 35%.",
      alt: "Subluxação posterior da cabeça umeral com retroversão glenoidal",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:displasia-glenoumeral",
      variant: "iv",
      caption:
        "Falsa glenoide: a cabeça esculpe uma neoarticulação posterior e a glenoide torna-se bicôncava — fronteira da remodelação.",
      alt: "Glenoide bicôncava com falsa glenoide posterior",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:displasia-glenoumeral",
      variant: "vi",
      caption: "Luxação infantil: a redução precoce é a maior janela de oportunidade para a remodelação glenoidal.",
      alt: "Luxação glenoumeral posterior no lactente",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:cirurgia-sequela",
      variant: "liberacao",
      caption:
        "Alongamento em Z do subescapular com redução articular: recentrar a cabeça devolve à glenoide o estímulo para remodelar.",
      alt: "Alongamento do subescapular e redução glenoumeral",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:cirurgia-sequela",
      variant: "transferencia",
      caption:
        "Transferência do grande dorsal e do redondo maior para o manguito: converte rotadores internos em rotadores externos.",
      alt: "Transferência tendínea do grande dorsal e redondo maior para o manguito rotador",
      kind: "diagram",
    },
    {
      id: "paralisia-braquial-obstetrica:cirurgia-sequela",
      variant: "osteotomia",
      caption:
        "Osteotomia desrotacional do úmero: redistribui o arco de rotação na articulação já incongruente, sem corrigir a displasia.",
      alt: "Osteotomia desrotacional do úmero com fixação por placa",
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
      "Rockwood and Wilkins' Fractures in Children, 10ª ed. (2024) / Tachdjian's Pediatric Orthopaedics 6ª — redesenho original, não reprodução.",
  },
});
