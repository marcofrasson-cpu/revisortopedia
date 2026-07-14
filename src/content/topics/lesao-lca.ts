import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "esp-joelho-lesao-lca",
  slug: "lesao-lca",
  kind: "condicao",
  regionId: "esportiva-artroscopia",
  bone: "Joelho",
  injury: "Lesão do ligamento cruzado anterior",
  title: "Lesão do ligamento cruzado anterior",
  subtitle:
    "Da confirmação da instabilidade à escolha compartilhada entre reabilitação e reconstrução, com preservação meniscal e retorno ao esporte guiado por critérios.",
  laterality: null,
  status: "complete",

  overview:
    "A lesão do ligamento cruzado anterior (LCA) ocorre principalmente em desaceleração, mudança de direção ou aterrissagem com o pé apoiado. Estalo, derrame nas primeiras horas e sensação de falseio formam a apresentação clássica. O diagnóstico é clínico: o teste de Lachman pesquisa a translação anterior, enquanto o teste de ressalto rotatório (pivot shift) reproduz a instabilidade rotacional funcional. A ressonância magnética confirma a ruptura e, sobretudo, mapeia lesões associadas do menisco, cartilagem e ligamentos colaterais.\n\nRuptura do LCA na ressonância não significa indicação cirúrgica automática. Ensaios randomizados sustentam reabilitação estruturada com possibilidade de reconstrução tardia como estratégia válida para pacientes selecionados. A decisão depende de falseios recorrentes, objetivo esportivo, demanda ocupacional, lesões meniscais reparáveis, idade biológica e resposta à reabilitação. Atletas que desejam retornar a esportes com mudança de direção e pacientes com instabilidade funcional persistente tendem a se beneficiar da reconstrução.\n\nQuando indicada, a reconstrução deve reproduzir as inserções anatômicas, proteger os meniscos e usar preferencialmente autoenxerto no jovem ativo. O sucesso não termina na fixação: extensão completa, controle do derrame, força do quadríceps, qualidade do movimento e prontidão psicológica são marcos obrigatórios. O retorno irrestrito antes de nove meses aumenta o risco de nova lesão; tempo, porém, não substitui critérios funcionais.",

  keyFacts: [
    { label: "Mecanismo", value: "Desaceleração, aterrissagem ou mudança de direção sem contato" },
    { label: "Apresentação", value: "Estalo + hemartrose precoce + falseio" },
    { label: "Exame", value: "Lachman e ressalto rotatório" },
    { label: "Imagem", value: "RM confirma e mapeia menisco, cartilagem e ligamentos" },
    { label: "Decisão", value: "Instabilidade funcional e demanda, não a RM isolada" },
    { label: "Enxerto", value: "Autoenxerto no jovem ativo; evitar aloenxerto" },
    { label: "Prioridade", value: "Preservar e reparar o menisco sempre que possível" },
    { label: "Retorno", value: "≥ 9 meses + critérios de força, salto e movimento" },
  ],

  anatomy: {
    text:
      "O LCA nasce na porção posterior da face medial do côndilo femoral lateral e se dirige anterior, distal e medialmente até a área intercondilar anterior da tíbia. Suas fibras funcionais são descritas como feixes anteromedial e posterolateral conforme a inserção tibial. O anteromedial permanece mais tenso em flexão; o posterolateral contribui mais próximo da extensão. Em conjunto, limitam a translação anterior da tíbia e o ressalto rotatório.\n\nA inserção femoral anatômica ocupa a parede lateral do intercôndilo, atrás da crista intercondilar lateral, e não o teto do intercôndilo. Na tíbia, o centro da inserção fica posterior à linha intermeniscal anterior, entre as raízes meniscais anteriores e anterior às espinhas. Túneis verticais ou um túnel tibial excessivamente anterior podem deixar instabilidade rotatória, causar impacto no teto ou perda de extensão.\n\nMeniscos e estruturas periféricas são estabilizadores secundários. O corno posterior do menisco medial restringe a translação anterior no joelho com LCA insuficiente; lesões da rampa meniscal e da raiz lateral devem ser procuradas ativamente. O complexo anterolateral também participa do controle rotatório e ajuda a explicar o ressalto persistente em pacientes de alto risco.",
    figureIds: ["lesao-lca:anatomia", "lesao-lca:mecanismo"],
  },

  classification: [
    {
      id: "padrao-funcional",
      name: "Padrão clínico-funcional",
      basis: "Continuidade das fibras, estabilidade ao exame e ocorrência de falseio.",
      note:
        "A aparência da ressonância deve ser integrada ao exame. Uma lesão parcial com feixe funcional pode ser estável; uma ruptura completa pode ser compensada em atividades lineares, mas falhar em mudanças de direção.",
      types: [
        {
          code: "Parcial estável",
          label: "Fibras funcionais preservadas",
          description:
            "Lachman com ponto final firme, sem ressalto rotatório relevante e sem falseio nas atividades desejadas. Favorece reabilitação e reavaliação funcional.",
          figureId: "lesao-lca:anatomia",
          figureVariant: "parcial",
        },
        {
          code: "Parcial instável",
          label: "Insuficiência funcional",
          description:
            "Fibras residuais sem controle adequado, aumento da translação ou ressalto rotatório e episódios de falseio. A conduta se aproxima da ruptura completa.",
          figureId: "lesao-lca:anatomia",
          figureVariant: "parcial-instavel",
        },
        {
          code: "Completa",
          label: "Ruptura completa do LCA",
          description:
            "Ausência de continuidade funcional, Lachman sem ponto final e instabilidade rotatória variável. A indicação depende da demanda e da resposta à reabilitação.",
          figureId: "lesao-lca:anatomia",
          figureVariant: "completa",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Falseios recorrentes apesar de reabilitação estruturada, com limitação nas atividades desejadas.",
      "Atleta que pretende retornar a esporte com mudança de direção, contato ou aterrissagens de alta demanda.",
      "Lesão meniscal reparável cuja proteção dependa da restauração da estabilidade do joelho.",
      "Lesão ligamentar associada que exija reconstrução coordenada do joelho.",
      "Ruptura em jovem ativo com alto risco de novos episódios de instabilidade e dano meniscal secundário.",
    ],
    nonOperative: [
      "Paciente sem falseio após reabilitação, com demanda predominantemente linear e disposição para adaptar atividades.",
      "Lesão parcial estável, ponto final firme e ausência de instabilidade rotatória relevante.",
      "Baixa demanda, comorbidades ou preferência informada por tratamento não operatório.",
      "Fase inicial de todo paciente: recuperar extensão, controlar derrame e restaurar ativação do quadríceps antes da decisão definitiva.",
    ],
    decisionNotes:
      "Não se deve operar um joelho inflamado e rígido apenas porque a ressonância mostrou ruptura. A pré-reabilitação busca extensão completa, flexão próxima do normal, derrame mínimo, marcha normal e bom controle do quadríceps. Em paciente selecionado, reabilitação com reconstrução opcional tardia não produz desfecho inferior de forma clinicamente importante nos ensaios disponíveis. A reconstrução ganha peso quando a instabilidade impede a atividade desejada, quando há lesão meniscal reparável ou quando o objetivo é retornar a esporte de alta demanda. Em adolescentes, longos períodos com instabilidade estão associados a mais lesão meniscal e condral, mas essa associação observacional não prova que a cirurgia previna artrose. A decisão deve ser compartilhada e documentar esporte, risco, enxerto e expectativas.",
  },

  approaches: [
    {
      id: "portais-artroscopicos",
      name: "Portais artroscópicos anterolateral e anteromedial",
      indication:
        "Inventário articular, tratamento das lesões meniscais e criação dos túneis anatômicos.",
      interval:
        "Portal anterolateral junto ao tendão patelar para visão; portal anteromedial sob visão direta para instrumentação. Um portal anteromedial acessório baixo pode facilitar o túnel femoral independente.",
      atRisk: [
        "Corno anterior do menisco na entrada do portal",
        "Cartilagem do côndilo femoral medial",
        "Nervo safeno e seus ramos em incisões mediais",
      ],
      figureId: "lesao-lca:tuneis",
    },
    {
      id: "retirada-enxerto",
      name: "Acesso conforme o autoenxerto",
      indication:
        "Retirada de tendão patelar, tendões flexores ou tendão do quadríceps conforme perfil do paciente e preferência técnica.",
      interval:
        "Incisão anterior para o terço central do tendão patelar ou quadríceps; incisão anteromedial proximal à pata de ganso para semitendíneo, com identificação cuidadosa das expansões tendíneas.",
      atRisk: [
        "Ramos infrapatelares do nervo safeno",
        "Tendão patelar e patela na retirada osso-tendão-osso",
        "Ligamento colateral medial durante a retirada dos flexores",
      ],
      figureId: "lesao-lca:enxertos",
    },
    {
      id: "lateral-extra-articular",
      name: "Acesso lateral para tenodese extra-articular",
      indication:
        "Complemento em jovem de alto risco, grande ressalto rotatório, frouxidão generalizada, revisão ou retorno a esporte com mudança de direção.",
      interval:
        "Faixa posterior do trato iliotibial mantida inserida no tubérculo de Gerdy, passada profunda ao ligamento colateral lateral e fixada proximal e posterior ao epicôndilo lateral.",
      atRisk: [
        "Ligamento colateral lateral",
        "Confluência com o túnel femoral do LCA",
        "Sobre-restrição da rotação interna se tensionada em excesso",
      ],
      figureId: "lesao-lca:tenodese-lateral",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Preparar o joelho e confirmar a indicação",
      detail:
        "Operar após recuperar extensão completa, flexão funcional, marcha e ativação do quadríceps, com derrame mínimo. Rever objetivo esportivo, lesões associadas e escolha do enxerto. Sob anestesia, graduar Lachman e ressalto rotatório e comparar com o lado oposto.",
      figureId: "lesao-lca:exame",
      tips: [
        "Registrar o grau do ressalto rotatório antes da reconstrução",
        "Adiar a reconstrução eletiva se o joelho permanecer inflamado ou sem extensão",
      ],
      pitfalls: ["Confundir urgência diagnóstica com urgência para reconstruir um joelho rígido"],
    },
    {
      n: 2,
      title: "Inventariar a articulação e preservar os meniscos",
      detail:
        "Inspecionar cartilagem, raízes meniscais, corno posterior medial e recesso posteromedial. Reparar lesão da rampa, raiz ou ruptura longitudinal instável quando possível. A meniscectomia deve ser a exceção e restrita ao tecido inviável.",
      figureId: "lesao-lca:rm-lesoes-associadas",
      tips: [
        "Usar visão transintercondilar e portal posteromedial quando houver suspeita de lesão da rampa",
        "Tratar a lesão meniscal antes de perder os reparos de vista durante a reconstrução",
      ],
      pitfalls: ["Declarar o menisco medial normal sem explorar sua junção meniscocapsular posterior"],
    },
    {
      n: 3,
      title: "Retirar e preparar o autoenxerto",
      detail:
        "Escolher entre tendão patelar, flexores ou quadríceps conforme idade, esporte, trabalho, anatomia e morbidade esperada. Medir diâmetro e comprimento, preparar as extremidades e manter o enxerto protegido e umedecido até a passagem.",
      figureId: "lesao-lca:enxertos",
      tips: [
        "Priorizar autoenxerto no jovem que pratica esporte de alta demanda",
        "Planejar o enxerto com o paciente, incluindo dor anterior, ajoelhar e força flexora/extensora",
      ],
      pitfalls: ["Usar aloenxerto em jovem de alta demanda sem discutir o maior risco de falha"],
    },
    {
      n: 4,
      title: "Marcar a inserção femoral anatômica",
      detail:
        "Identificar a parede lateral do intercôndilo e o remanescente da inserção. Posicionar o centro do túnel dentro da área anatômica, posterior à crista intercondilar lateral e com parede posterior suficiente. Flexionar adequadamente o joelho ao perfurar por portal anteromedial.",
      figureId: "lesao-lca:tuneis",
      figureVariant: "femoral",
      tips: ["Confirmar a posição diretamente na parede lateral, sem depender apenas de referências horárias"],
      pitfalls: [
        "Túnel alto e vertical que controla a translação, mas deixa ressalto rotatório",
        "Parede posterior insuficiente ou túnel femoral curto",
      ],
    },
    {
      n: 5,
      title: "Criar o túnel tibial sem impacto",
      detail:
        "Centralizar o guia na inserção tibial nativa, posterior à linha intermeniscal anterior e alinhado com o centro femoral. Proteger raízes meniscais e remover apenas o tecido necessário. Confirmar que o enxerto não impactará o teto em extensão.",
      figureId: "lesao-lca:tuneis",
      figureVariant: "tibial",
      tips: ["Usar o remanescente tibial e as espinhas como referências combinadas"],
      pitfalls: [
        "Túnel anterior causando impacto no teto e perda de extensão",
        "Túnel posterior comprometendo o LCP ou a raiz meniscal",
      ],
    },
    {
      n: 6,
      title: "Passar, fixar e ciclar o enxerto",
      detail:
        "Passar o enxerto sem torção, assentar a fixação femoral, ciclar o joelho e aplicar tensão controlada antes da fixação tibial. Confirmar extensão completa, ausência de impacto, Lachman firme e amplitude preservada. A posição anatômica importa mais que tensionar excessivamente.",
      figureId: "lesao-lca:reconstrucao",
      tips: [
        "Visualizar o assentamento da fixação e marcar o comprimento de passagem",
        "Reexaminar Lachman e ressalto rotatório ao final",
      ],
      pitfalls: [
        "Fixação cortical sem confirmação de assentamento",
        "Excesso de tensão que limita extensão ou altera a cinemática",
      ],
    },
    {
      n: 7,
      title: "Adicionar tenodese lateral quando o risco justificar",
      detail:
        "Em paciente de até 25 anos com grande ressalto rotatório, frouxidão generalizada e intenção de retornar a esporte de alto risco, considerar tenodese extra-articular lateral associada. Passar a faixa do trato iliotibial profunda ao colateral lateral e fixá-la sem sobre-restringir o joelho.",
      figureId: "lesao-lca:tenodese-lateral",
      tips: ["Planejar a fixação lateral para não convergir com o túnel femoral"],
      pitfalls: ["Indicar rotineiramente ou tensionar em excesso, produzindo sobre-restrição lateral"],
    },
    {
      n: 8,
      title: "Fechar com plano de reabilitação por critérios",
      detail:
        "Documentar procedimento meniscal, tipo de fixação e restrições específicas. O protocolo deve priorizar extensão imediata, controle do derrame e quadríceps; corrida, mudança de direção e esporte são liberados por marcos objetivos, não por calendário isolado.",
      figureId: "lesao-lca:retorno-esporte",
      tips: ["Entregar critérios mensuráveis e reavaliar força, saltos, movimento e confiança"],
      pitfalls: ["Liberar pelo tempo de pós-operatório sem testar função e qualidade do movimento"],
    },
  ],

  postop: {
    immobilization:
      "Órtese não é obrigatória após reconstrução isolada estável; pode ser usada conforme controle muscular ou reparos associados. Priorizar extensão completa desde o primeiro dia e evitar apoio sob o joelho que mantenha flexão.",
    weightBearing:
      "Carga conforme tolerado com muletas após reconstrução isolada. Reparos de raiz, lesões radiais complexas ou procedimentos associados podem exigir restrição de carga e flexão definida pelo reparo.",
    rehab: [
      {
        window: "0-2 semanas",
        weightBearing: "Conforme tolerado, salvo reparo associado",
        focus: "Extensão completa, flexão progressiva, controle do derrame, marcha e ativação do quadríceps.",
      },
      {
        window: "2-12 semanas",
        weightBearing: "Carga plena progressiva",
        focus: "Amplitude simétrica, força em cadeia cinética, controle unipodal e ausência de derrame reativo.",
      },
      {
        window: "3-6 meses",
        weightBearing: "Treino de impacto progressivo",
        focus: "Iniciar corrida quando houver joelho quieto, amplitude completa, força suficiente e boa mecânica de aterrissagem.",
      },
      {
        window: "6-9 meses",
        weightBearing: "Mudança de direção e treino esportivo",
        focus: "Potência, desaceleração, agilidade, contato gradual e exposição específica ao esporte.",
      },
      {
        window: "≥ 9 meses",
        weightBearing: "Retorno esportivo se aprovado",
        focus: "Força e saltos ≥ 90% do lado oposto, boa qualidade de movimento, joelho sem derrame e prontidão psicológica; nenhum teste isolado basta.",
      },
    ],
    followup:
      "Reavaliar extensão, derrame, força do quadríceps e qualidade do movimento em cada fase. Déficit persistente de extensão exige pesquisa precoce de fibrose ou lesão tipo cyclops. Antes do retorno, combinar tempo mínimo, bateria de força e saltos, tarefa específica do esporte e prontidão psicológica. Manter programa preventivo neuromuscular após a liberação.",
  },

  complications: [
    {
      name: "Artrofibrose e perda de extensão",
      detail:
        "Mais provável quando se opera joelho inflamado, sem extensão ou com reabilitação inicial inadequada; lesão tipo cyclops pode bloquear a extensão.",
      prevention: "Pré-reabilitação, extensão imediata, controle do derrame e investigação precoce do bloqueio.",
    },
    {
      name: "Falha do enxerto ou nova lesão",
      detail:
        "Relacionada a retorno precoce, nova torção, túnel inadequado, lesões periféricas não tratadas e maior risco biológico no jovem.",
      prevention: "Túneis anatômicos, tratar instabilidade associada, reabilitação por critérios e retorno não precoce.",
    },
    {
      name: "Instabilidade rotatória residual",
      detail:
        "Pode persistir por túnel vertical, grande frouxidão, lesão meniscal/periférica não reconhecida ou indicação incompleta de reforço lateral.",
      prevention: "Posicionamento anatômico, inventário meniscal e avaliação seletiva da tenodese lateral.",
    },
    {
      name: "Morbidade da área doadora",
      detail:
        "Dor anterior e ao ajoelhar no tendão patelar, déficit flexor nos flexores ou déficit extensor inicial no quadríceps.",
      prevention: "Escolha compartilhada do enxerto, retirada cuidadosa e reabilitação específica.",
    },
    {
      name: "Infecção",
      detail: "Rara, mas deve ser suspeitada diante de dor, derrame, febre ou perda funcional desproporcionais.",
      prevention: "Antibioticoprofilaxia, técnica asséptica e abordagem precoce de sinais de artrite séptica.",
    },
    {
      name: "Lesão meniscal ou condral progressiva",
      detail:
        "Episódios repetidos de falseio podem produzir nova lesão, sobretudo no menisco medial; reconstrução não elimina o risco de artrose.",
      prevention: "Evitar instabilidade recorrente, preservar meniscos e manter força, peso e controle neuromuscular.",
    },
  ],

  evidence: [
    {
      id: "kanon-frobell-2010",
      claim:
        "Em adultos jovens ativos com ruptura aguda do LCA, reconstrução precoce não produziu vantagem clinicamente relevante nos desfechos relatados em dois anos sobre reabilitação estruturada com opção de reconstrução tardia.",
      takeaway:
        "Reabilitação inicial com cirurgia opcional é uma estratégia legítima em pacientes selecionados; a ressonância isolada não define a operação.",
      level: "I",
      studyType: "Ensaio clínico randomizado",
      era: "classico",
      citation: {
        authors: "Frobell RB, Roos EM, Roos HP, Ranstam J, Lohmander LS",
        title: "A randomized trial of treatment for acute anterior cruciate ligament tears",
        journal: "The New England Journal of Medicine",
        year: 2010,
        pmid: "20660401",
        doi: "10.1056/NEJMoa0907797",
      },
    },
    {
      id: "compare-reijman-2021",
      claim:
        "No COMPARE, reconstrução precoce gerou diferença estatística no IKDC em dois anos, mas abaixo da relevância clínica; metade do grupo de reabilitação não realizou reconstrução durante o período.",
      takeaway:
        "A decisão pode ser escalonada pela resposta funcional sem obrigar todos os pacientes a uma cirurgia imediata.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico",
      era: "atual",
      citation: {
        authors: "Reijman M, Eggerding V, van Es E, et al.",
        title:
          "Early surgical reconstruction versus rehabilitation with elective delayed reconstruction for patients with anterior cruciate ligament rupture: COMPARE randomised controlled trial",
        journal: "BMJ",
        year: 2021,
        pmid: "33687926",
        doi: "10.1136/bmj.n375",
      },
    },
    {
      id: "stability-getgood-2020",
      claim:
        "No STABILITY, jovens de alto risco tratados com autoenxerto dos flexores tiveram menos falha clínica (25% vs 40%) e menos ruptura do enxerto (4% vs 11%) quando uma tenodese extra-articular lateral foi associada.",
      takeaway:
        "O reforço lateral reduz falha em pacientes jovens criteriosamente selecionados; não é complemento obrigatório para todos.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico",
      era: "atual",
      citation: {
        authors: "Getgood AMJ, Bryant DM, Litchfield R, et al.; STABILITY Study Group",
        title:
          "Lateral Extra-articular Tenodesis Reduces Failure of Hamstring Tendon Autograft Anterior Cruciate Ligament Reconstruction: 2-Year Outcomes From the STABILITY Study Randomized Clinical Trial",
        journal: "The American Journal of Sports Medicine",
        year: 2020,
        pmid: "31940222",
        doi: "10.1177/0363546519896333",
      },
    },
    {
      id: "delaware-oslo-grindem-2016",
      claim:
        "Na coorte Delaware-Oslo, retorno a esporte de nível I aumentou em mais de quatro vezes a taxa de nova lesão; cada mês de adiamento até nove meses reduziu o risco em 51%, e maior simetria do quadríceps foi protetora.",
      takeaway:
        "Retorno antes de nove meses e sem recuperação de força expõe o atleta a risco evitável.",
      level: "II",
      studyType: "Coorte prospectiva",
      era: "atual",
      citation: {
        authors: "Grindem H, Snyder-Mackler L, Moksnes H, Engebretsen L, Risberg MA",
        title:
          "Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction: the Delaware-Oslo ACL cohort study",
        journal: "British Journal of Sports Medicine",
        year: 2016,
        pmid: "27162233",
        doi: "10.1136/bjsports-2016-096031",
      },
    },
    {
      id: "moon-kaeding-2011",
      claim:
        "Na coorte MOON, menor idade e uso de aloenxerto foram preditores independentes de nova ruptura; o risco do aloenxerto foi particularmente relevante no jovem.",
      takeaway: "Autoenxerto é a escolha de referência para o paciente jovem e ativo.",
      level: "II",
      studyType: "Coorte prospectiva longitudinal",
      era: "classico",
      citation: {
        authors: "Kaeding CC, Aros B, Pedroza A, et al.; MOON Consortium",
        title:
          "Allograft Versus Autograft Anterior Cruciate Ligament Reconstruction: Predictors of Failure From a MOON Prospective Longitudinal Cohort",
        journal: "Sports Health",
        year: 2011,
        pmid: "23015994",
        doi: "10.1177/1941738110386185",
      },
    },
    {
      id: "katz-fingeroth-1986",
      claim:
        "Estudo clínico clássico mostrou que o Lachman é mais sensível para a ruptura, enquanto o ressalto rotatório é altamente específico e representa a instabilidade funcional.",
      takeaway: "O diagnóstico é clínico e combina translação anterior com instabilidade rotatória.",
      level: "III",
      studyType: "Estudo comparativo de acurácia diagnóstica",
      era: "classico",
      citation: {
        authors: "Katz JW, Fingeroth RJ",
        title:
          "The diagnostic accuracy of ruptures of the anterior cruciate ligament comparing the Lachman test, the anterior drawer sign, and the pivot shift test in acute and chronic knee injuries",
        journal: "The American Journal of Sports Medicine",
        year: 1986,
        pmid: "3752353",
        doi: "10.1177/036354658601400115",
      },
    },
    {
      id: "hickie-adolescentes-2025",
      claim:
        "Em coorte de 2.740 adolescentes operados, atraso superior a 12 meses associou-se a maiores chances de cirurgia do menisco medial e lesão condral medial no momento da reconstrução.",
      takeaway:
        "No adolescente instável, demora prolongada exige cautela; a associação não deve ser apresentada como prova de prevenção de artrose pela cirurgia.",
      level: "III",
      studyType: "Coorte retrospectiva",
      era: "atual",
      citation: {
        authors: "Hickie KL, Salmon LJ, Gooden BR, et al.",
        title:
          "The Association Between Delaying Anterior Cruciate Ligament Reconstruction in Adolescents and Increasing Meniscal and Chondral Pathology: A Cohort Study of 2740 Adolescents",
        journal: "The American Journal of Sports Medicine",
        year: 2025,
        pmid: "39773073",
        doi: "10.1177/03635465241306759",
      },
    },
  ],

  pearls: [
    "A ressonância confirma a anatomia; quem indica tratamento é a instabilidade funcional no contexto do paciente.",
    "Recuperar extensão e controlar o derrame antes da cirurgia reduz o risco de artrofibrose.",
    "Pesquisar rampa do menisco medial e raiz do menisco lateral de forma sistemática.",
    "Autoenxerto é preferível no jovem de alta demanda; a escolha deve considerar esporte e morbidade da área doadora.",
    "Túnel femoral anatômico fica na parede lateral, não no teto do intercôndilo.",
    "Retorno ao esporte exige tempo, força, saltos, qualidade de movimento e confiança; nenhum item isolado libera o atleta.",
  ],

  pitfalls: [
    "Operar o joelho inflamado, com derrame e déficit de extensão.",
    "Indicar reconstrução apenas pelo laudo da ressonância.",
    "Ignorar lesão meniscal posterior por inspeção artroscópica incompleta.",
    "Criar túnel femoral vertical ou túnel tibial anterior com impacto no teto.",
    "Escolher aloenxerto para jovem que retornará a esporte de alta demanda sem discutir a maior falha.",
    "Prometer que reconstrução do LCA previne artrose.",
    "Liberar esporte antes de nove meses ou somente porque o calendário foi cumprido.",
  ],

  figures: [
    {
      id: "lesao-lca:anatomia",
      caption: "Inserções femoral e tibial do LCA e comportamento funcional dos feixes.",
      alt: "Diagrama anatômico do joelho mostrando os feixes anteromedial e posterolateral do ligamento cruzado anterior.",
      kind: "diagram",
    },
    {
      id: "lesao-lca:mecanismo",
      caption: "Mecanismo sem contato: desaceleração, valgo dinâmico e rotação interna.",
      alt: "Atleta aterrissando com o joelho em valgo dinâmico e rotação interna da tíbia.",
      kind: "diagram",
    },
    {
      id: "lesao-lca:exame",
      caption: "Lachman pesquisa translação anterior; ressalto rotatório reproduz a instabilidade funcional.",
      alt: "Três quadros mostram os testes de Lachman, gaveta anterior e ressalto rotatório do joelho.",
      kind: "diagram",
    },
    {
      id: "lesao-lca:rm-lesoes-associadas",
      caption: "Leitura dirigida da RM: LCA, contusões ósseas, rampa e raiz meniscal.",
      alt: "Esquema de ressonância magnética sagital e axial indicando ruptura do LCA e lesões meniscais associadas.",
      kind: "diagram",
    },
    {
      id: "lesao-lca:enxertos",
      caption: "Autoenxertos mais usados: tendão patelar, flexores e tendão do quadríceps.",
      alt: "Comparação das áreas doadoras dos autoenxertos patelar, flexores e quadríceps.",
      kind: "diagram",
    },
    {
      id: "lesao-lca:tuneis",
      caption: "Túneis anatômicos restauram controle anterior e rotatório; posições vertical e anterior falham.",
      alt: "Vista do intercôndilo e platô tibial comparando túneis anatômicos com erros de posicionamento.",
      kind: "diagram",
    },
    {
      id: "lesao-lca:reconstrucao",
      caption: "Sequência da reconstrução artroscópica do LCA, da inspeção à fixação final.",
      alt: "Fluxo em oito etapas da reconstrução artroscópica do ligamento cruzado anterior.",
      kind: "diagram",
    },
    {
      id: "lesao-lca:tenodese-lateral",
      caption: "Tenodese extra-articular lateral seletiva com faixa do trato iliotibial.",
      alt: "Vista lateral do joelho mostrando faixa do trato iliotibial sob o ligamento colateral lateral.",
      kind: "diagram",
    },
    {
      id: "lesao-lca:retorno-esporte",
      caption: "Retorno ao esporte: progressão por critérios, com exposição esportiva após nove meses.",
      alt: "Linha do tempo da reabilitação com portões de amplitude, força, corrida, agilidade e retorno esportivo.",
      kind: "diagram",
    },
  ],

  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Frobell et al., N Engl J Med 2010 (PMID 20660401)",
      "Reijman et al., BMJ 2021 (PMID 33687926)",
      "Getgood et al., Am J Sports Med 2020 (PMID 31940222)",
      "Grindem et al., Br J Sports Med 2016 (PMID 27162233)",
      "Kaeding et al., Sports Health 2011 (PMID 23015994)",
      "Hickie et al., Am J Sports Med 2025 (PMID 39773073)",
    ],
    attribution:
      "Conteúdo original em português brasileiro; evidências e identificadores verificados no PubMed. Diagramas próprios, sem reprodução de material protegido.",
    figureReference:
      "Campbell's Operative Orthopaedics, 14a ed. (2021), seção de lesões do joelho e reconstrução do LCA.",
  },
});
