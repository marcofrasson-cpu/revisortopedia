import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-ombro-clavicula-luxacao-glenoumeral-anterior",
  slug: "luxacao-glenoumeral-anterior",
  regionId: "membro-superior",
  bone: "Articulação glenoumeral",
  injury: "Luxação anterior e instabilidade anterior",
  title: "Luxação glenoumeral anterior",
  subtitle:
    "Reduzir com segurança no episódio agudo e tratar a instabilidade pela interação entre lesão capsulolabral, perda óssea glenoidal e defeito de Hill-Sachs.",
  laterality: null,
  status: "complete",
  overview:
    "A luxação glenoumeral anterior ocorre habitualmente com o braço em abdução e rotação externa. Na urgência, a prioridade é documentar o exame neurovascular, reconhecer fraturas associadas, obter redução atraumática e confirmar a congruência articular. O nervo axilar deve ser examinado antes e depois da manobra pela sensibilidade na face lateral do ombro e pela função do deltoide. Em pacientes acima de 40 anos, fraqueza persistente após a redução exige investigação de lesão do manguito rotador.\n\nApós o primeiro episódio, a decisão deixa de ser apenas \"operar ou imobilizar\". Idade, esporte de contato, hiperlaxidez, número de episódios, lesão capsulolabral e perda óssea bipolar definem o risco. O reparo de Bankart restaura o lábio e tensiona a cápsula anterior quando o estoque ósseo é favorável. O remplissage acrescenta tenodese do infraespinal e capsulodese posterior para tornar um defeito de Hill-Sachs não participante. Perda óssea glenoidal relevante, lesão off-track não controlável por partes moles ou falha prévia direcionam para reconstrução óssea, frequentemente pela transferência do processo coracoide segundo Latarjet.",
  keyFacts: [
    { label: "Mecanismo", value: "Abdução, extensão e rotação externa" },
    { label: "Urgência", value: "Exame neurovascular antes e depois da redução" },
    { label: "Lesão-chave", value: "Bankart anteroinferior; Hill-Sachs posterolateral" },
    { label: "Imagem", value: "AP + perfil escapular/axilar; TC 3D para perda óssea" },
    { label: "Decisão", value: "Perda óssea bipolar e glenoid track, não um número isolado" },
    { label: "Alto risco", value: "Jovem, contato, recorrência, off-track e perda glenoidal" },
  ],
  anatomy: {
    text:
      "A estabilidade glenoumeral depende da concavidade glenoidal, do lábio, da pressão intra-articular negativa e do equilíbrio do manguito rotador. Em abdução e rotação externa, o feixe anterior do ligamento glenoumeral inferior é o principal restritor da translação anterior. A lesão de Bankart separa o lábio e o complexo capsuloligamentar do rebordo anteroinferior; a lesão HAGL representa avulsão umeral do ligamento glenoumeral inferior e pode passar despercebida.\n\nDurante a luxação, o rebordo glenoidal anterior impacta a região posterolateral da cabeça umeral e produz o defeito de Hill-Sachs. A relevância desse defeito depende de sua relação com a faixa de contato da glenoide sobre a cabeça umeral, o glenoid track. O nervo axilar cruza o espaço quadrangular e contorna o colo cirúrgico; portais inferiores, capsulorrafia excessiva e dissecção profunda exigem atenção à sua proximidade.",
    figureIds: [
      "luxacao-glenoumeral-anterior:radiografia",
      "luxacao-glenoumeral-anterior:anatomia",
    ],
  },
  classification: [
    {
      id: "lesoes-capsulolabrais",
      name: "Padrões capsulolabrais associados",
      basis: "Local da avulsão e integridade do periósteo escapular e da cartilagem.",
      note:
        "A ressonância artrográfica ajuda no planejamento, mas a artroscopia define mobilidade, cicatrização medial e qualidade do tecido.",
      types: [
        {
          code: "BANKART",
          label: "Lesão de Bankart",
          description:
            "Avulsão do lábio anteroinferior e do complexo glenoumeral inferior do rebordo glenoidal; pode haver fragmento ósseo associado.",
          figureId: "luxacao-glenoumeral-anterior:lesoes-capsulolabrais",
          figureVariant: "bankart",
        },
        {
          code: "PERTHES",
          label: "Lesão de Perthes",
          description:
            "Avulsão labral com periósteo escapular medial preservado; pode parecer pouco desviada e ser sutil na imagem.",
          figureId: "luxacao-glenoumeral-anterior:lesoes-capsulolabrais",
          figureVariant: "perthes",
        },
        {
          code: "ALPSA",
          label: "ALPSA",
          description:
            "Avulsão labral com periósteo contínuo e cicatrização medializada no colo da glenoide; exige liberação antes do reparo.",
          figureId: "luxacao-glenoumeral-anterior:lesoes-capsulolabrais",
          figureVariant: "alpsa",
        },
        {
          code: "HAGL",
          label: "Avulsão umeral do ligamento glenoumeral inferior",
          description:
            "Falha no lado umeral do complexo glenoumeral inferior; suspeitar quando a cápsula anterior está incompetente sem Bankart proporcional.",
          figureId: "luxacao-glenoumeral-anterior:lesoes-capsulolabrais",
          figureVariant: "hagl",
        },
      ],
    },
    {
      id: "glenoid-track",
      name: "Glenoid track: on-track e off-track",
      basis: "Relação entre perda óssea glenoidal e intervalo de Hill-Sachs.",
      note:
        "A largura do track diminui conforme aumenta a perda glenoidal. Uma lesão off-track ultrapassa medialmente essa faixa e tem maior risco de participação no rebordo anterior.",
      types: [
        {
          code: "ON",
          label: "On-track",
          description:
            "O intervalo de Hill-Sachs permanece dentro do glenoid track; com pouca perda glenoidal, o reparo capsulolabral pode ser suficiente.",
          figureId: "luxacao-glenoumeral-anterior:glenoid-track",
          figureVariant: "on",
        },
        {
          code: "OFF",
          label: "Off-track",
          description:
            "O intervalo de Hill-Sachs excede medialmente o glenoid track; considerar remplissage ou reconstrução glenoidal conforme a perda bipolar e a demanda.",
          figureId: "luxacao-glenoumeral-anterior:glenoid-track",
          figureVariant: "off",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Instabilidade anterior recorrente com repercussão funcional.",
      "Primeiro episódio em paciente jovem de alto risco, especialmente atleta de contato, após decisão compartilhada.",
      "Lesão off-track, defeito de Hill-Sachs participante ou perda óssea bipolar relevante.",
      "Perda óssea glenoidal crítica ou subcrítica associada a fatores de alto risco, favorecendo reconstrução óssea.",
      "Lesão HAGL, fragmento ósseo instável, lesão do manguito reparável ou falha de estabilização prévia.",
    ],
    nonOperative: [
      "Primeiro episódio com baixo risco de recorrência e sem lesão associada que exija reparo.",
      "Paciente sem demanda esportiva de contato e com boa resposta à reabilitação.",
      "Comorbidades ou preferência informada contrárias ao tratamento cirúrgico.",
    ],
    decisionNotes:
      "O reparo de Bankart isolado é mais previsível quando a glenoide mantém bom estoque ósseo e o Hill-Sachs é on-track. O remplissage reduz recorrência na presença de Hill-Sachs participante com perda glenoidal abaixo do limiar para reconstrução óssea. Valores entre aproximadamente 13,5% e 20% são descritos como perda subcrítica, mas o ponto de corte não deve ser usado sem considerar esporte, recorrência, qualidade capsular e lesão bipolar. Defeitos maiores, falha prévia ou risco elevado podem justificar Latarjet ou outro enxerto glenoidal.",
  },
  approaches: [
    {
      id: "artroscopica",
      name: "Portais artroscópicos posterior, anterossuperior e anteroinferior",
      indication: "Avaliação da lesão bipolar, reparo capsulolabral e remplissage.",
      interval:
        "Portal posterior para visão inicial; portal anterossuperior no intervalo dos rotadores e portal anteroinferior imediatamente superior ao subescapular, orientado ao rebordo glenoidal inferior. Cânulas devem permitir mobilização, preparo e inserção de âncoras sem conflito.",
      atRisk: [
        "Nervo axilar nos portais e âncoras inferiores",
        "Nervo musculocutâneo medial ao processo coracoide",
        "Cartilagem da cabeça umeral e da glenoide",
      ],
      figureId: "luxacao-glenoumeral-anterior:portais",
    },
    {
      id: "deltopeitoral-latarjet",
      name: "Via deltopeitoral para Latarjet",
      indication: "Reconstrução da borda glenoidal anterior com transferência do processo coracoide.",
      interval:
        "Intervalo entre deltoide e peitoral maior; identificar veia cefálica, expor o processo coracoide, proteger o nervo musculocutâneo e acessar a glenoide por divulsão horizontal do subescapular e capsulotomia.",
      atRisk: [
        "Nervo musculocutâneo medial e inferior ao processo coracoide",
        "Nervo axilar inferior ao subescapular",
        "Nervo supraescapular com parafusos longos ou divergentes",
      ],
      figureId: "luxacao-glenoumeral-anterior:via-deltopeitoral",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Documentar e reduzir o episódio agudo",
      detail:
        "Registrar pulsos, perfusão e exame motor e sensitivo, com ênfase no nervo axilar. Excluir fratura associada nas incidências disponíveis. Realizar analgesia e redução suave com técnica conhecida pela equipe, evitando alavancas e força brusca; repetir exame neurovascular e confirmar redução por imagem.",
      figureId: "luxacao-glenoumeral-anterior:reducao",
      tips: [
        "Relaxamento e analgesia adequados reduzem a força necessária",
        "Em idosos, investigar manguito rotador se a fraqueza persistir",
      ],
      pitfalls: [
        "Não documentar o nervo axilar antes da manobra",
        "Manipular vigorosamente uma luxação com fratura do úmero proximal",
      ],
    },
    {
      n: 2,
      title: "Quantificar a perda óssea bipolar",
      detail:
        "Medir a perda glenoidal em TC com reconstrução en face e método do círculo de melhor ajuste. Calcular o glenoid track e o intervalo de Hill-Sachs; correlacionar com idade, esporte, número de episódios, frouxidão e procedimentos prévios.",
      figureId: "luxacao-glenoumeral-anterior:glenoid-track",
      figureVariant: "off",
      tips: ["Planejar com a glenoide corrigida en face", "Rever imagens originais, não apenas o laudo"],
      pitfalls: ["Usar apenas o tamanho visual do Hill-Sachs", "Ignorar perda óssea subcrítica em atleta de contato"],
    },
    {
      n: 3,
      title: "Mobilizar o complexo capsulolabral",
      detail:
        "Inspecionar toda a articulação, incluindo HAGL, SLAP e manguito. Liberar o lábio até que retorne sem tensão ao rebordo; em ALPSA, a liberação do tecido cicatrizado medialmente é indispensável. Preparar o colo glenoidal até obter superfície sangrante sem ampliar o defeito.",
      figureId: "luxacao-glenoumeral-anterior:step-bankart",
      figureVariant: "mobilizacao",
      tips: ["A mobilidade do lábio determina a qualidade da redução", "Iniciar a inspeção antes do edema da bomba"],
      pitfalls: ["Fixar ALPSA na posição medializada", "Desbridar tecido capsular reparável em excesso"],
    },
    {
      n: 4,
      title: "Reparar de inferior para superior",
      detail:
        "Inserir a primeira âncora no quadrante anteroinferior, próxima ao limite articular, e realizar avanço capsular conforme a frouxidão. Prosseguir superiormente restaurando a altura e a concavidade labral. Conferir centralização da cabeça e rotação externa sem sobretensionar.",
      figureId: "luxacao-glenoumeral-anterior:step-bankart",
      figureVariant: "reparo",
      tips: ["A âncora inferior é decisiva para eliminar a bolsa capsular", "Manter ângulo seguro para não perfurar a glenoide"],
      pitfalls: ["Começar alto e deixar a lesão inferior sem controle", "Restringir rotação externa por plicatura excessiva"],
    },
    {
      n: 5,
      title: "Adicionar remplissage quando indicado",
      detail:
        "Antes de concluir o reparo anterior, preparar o leito do Hill-Sachs e inserir âncoras no defeito. Passar suturas pela cápsula posterior e pelo infraespinal e amarrá-las no espaço subacromial, preenchendo o defeito sem capturar tecido excessivo.",
      figureId: "luxacao-glenoumeral-anterior:step-remplissage",
      tips: ["Preparar e passar as suturas antes de perder acesso ao defeito", "Avaliar demanda de rotação externa do atleta"],
      pitfalls: ["Usar remplissage para compensar perda glenoidal crítica", "Medializar demais a captura do infraespinal"],
    },
    {
      n: 6,
      title: "Restaurar a glenoide quando o reparo de partes moles não basta",
      detail:
        "No Latarjet, preparar o enxerto do processo coracoide, posicioná-lo abaixo do equador e nivelado com a superfície articular, e obter compressão bicortical. Enxerto lateral causa artrose; medial reduz o efeito de extensão da superfície glenoidal. Proteger os nervos musculocutâneo e axilar durante todo o tempo.",
      figureId: "luxacao-glenoumeral-anterior:step-latarjet",
      tips: ["Posição e contato do enxerto importam mais que seu volume isolado", "Confirmar comprimento e direção dos parafusos"],
      pitfalls: ["Enxerto proeminente lateralmente", "Divulsão baixa do subescapular próxima ao nervo axilar"],
    },
  ],
  postop: {
    immobilization:
      "Tipoia geralmente por 3-4 semanas após Bankart/remplissage e por cerca de 4 semanas após Latarjet, ajustada à qualidade do reparo e aos procedimentos associados.",
    weightBearing:
      "Sem apoio do peso corporal, tração ou resistência no início. Retorno a contato somente após consolidação/reparo, amplitude funcional, força e controle escapular recuperados.",
    rehab: [
      {
        window: "0-4 semanas",
        weightBearing: "Sem carga",
        focus: "Proteção, mobilidade de cotovelo/punho/mão e amplitude passiva limitada conforme o reparo.",
      },
      {
        window: "4-8 semanas",
        weightBearing: "Carga leve funcional",
        focus: "Progressão de amplitude ativa e controle escapular; evitar ganho forçado de rotação externa.",
      },
      {
        window: "8-16 semanas",
        weightBearing: "Progressiva",
        focus: "Fortalecimento do manguito, deltoide e estabilizadores escapulares; propriocepção.",
      },
      {
        window: "4-6 meses",
        weightBearing: "Esportiva progressiva",
        focus: "Critérios funcionais, potência e gestos específicos antes do retorno a contato ou arremesso.",
      },
    ],
    followup:
      "Avaliar estabilidade, amplitude e força. Após Latarjet, controlar posição e consolidação do enxerto; TC é reservada para dúvida de consolidação, posição ou recorrência.",
  },
  complications: [
    {
      name: "Recorrência de instabilidade",
      detail: "Relacionada a idade, contato, hiperlaxidez, perda óssea não reconhecida, falha técnica ou novo trauma.",
      prevention: "Planejamento bipolar, reparo inferior adequado e escolha correta da reconstrução.",
    },
    {
      name: "Rigidez e perda de rotação externa",
      detail: "Pode ocorrer por plicatura excessiva, remplissage muito medial ou reabilitação inadequada.",
      prevention: "Tensionamento individualizado e progressão protegida da amplitude.",
    },
    {
      name: "Lesão neurológica",
      detail: "Nervos axilar e musculocutâneo são os principais riscos nas manobras, portais e Latarjet.",
      prevention: "Exame documentado, dissecção anatômica e direção segura de portais e parafusos.",
    },
    {
      name: "Complicações do enxerto do processo coracoide",
      detail: "Pseudartrose, lise, fratura, proeminência lateral e artrose secundária.",
      prevention: "Contato amplo, compressão estável e enxerto nivelado com a cartilagem.",
    },
  ],
  evidence: [
    {
      id: "minkus-2021-primeiro-episodio",
      claim:
        "Em primeiro episódio, a estabilização artroscópica reduziu a recorrência em 24 meses em comparação à imobilização em rotação externa e abdução.",
      takeaway:
        "Em pacientes jovens de alto risco, discutir reparo precoce é sustentado por evidência de nível I, sem transformar todo primeiro episódio em indicação automática.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico",
      era: "atual",
      citation: {
        authors: "Minkus M, Königshausen M, Pauly S, et al.",
        title:
          "Immobilization in External Rotation and Abduction Versus Arthroscopic Stabilization After First-Time Anterior Shoulder Dislocation: A Multicenter Randomized Controlled Trial.",
        journal: "Am J Sports Med",
        year: 2021,
        pmid: "33596092",
        doi: "10.1177/0363546520987823",
      },
    },
    {
      id: "woodmass-2024-remplissage",
      claim:
        "Com Hill-Sachs e perda glenoidal menor que 15%, Bankart com remplissage apresentou menos redislocações e menos instabilidade global que Bankart isolado no seguimento médio de quatro anos.",
      takeaway:
        "O remplissage é uma adição efetiva quando o defeito umeral participa do risco e a glenoide não exige reconstrução óssea.",
      level: "I",
      studyType: "Seguimento de ensaio clínico randomizado",
      era: "atual",
      citation: {
        authors: "Woodmass JM, McRae S, Lapner P, et al.",
        title:
          "Arthroscopic Bankart Repair With Remplissage in Anterior Shoulder Instability Results in Fewer Redislocations Than Bankart Repair Alone at Medium-term Follow-up of a Randomized Controlled Trial.",
        journal: "Am J Sports Med",
        year: 2024,
        pmid: "38874505",
        doi: "10.1177/03635465241254063",
      },
    },
    {
      id: "shin-2017-perda-glenoidal",
      claim:
        "Em coorte clínica após Bankart artroscópico, perda glenoidal de 17,3% ou mais associou-se a aumento expressivo de falha.",
      takeaway:
        "Perda óssea abaixo do antigo limiar de 20%-25% já pode comprometer o reparo isolado; interpretar junto ao risco global.",
      level: "III",
      studyType: "Estudo clínico caso-controle",
      era: "classico",
      citation: {
        authors: "Shin SJ, Kim RG, Jeon YS, Kwon TH",
        title:
          "Critical Value of Anterior Glenoid Bone Loss That Leads to Recurrent Glenohumeral Instability After Arthroscopic Bankart Repair.",
        journal: "Am J Sports Med",
        year: 2017,
        pmid: "28333542",
        doi: "10.1177/0363546517697963",
      },
    },
    {
      id: "yamamoto-2007-glenoid-track",
      claim:
        "O estudo anatômico definiu a faixa de contato da glenoide sobre a cabeça umeral e demonstrou por que um Hill-Sachs medial ao track pode participar do rebordo.",
      takeaway:
        "A perda umeral deve ser interpretada em conjunto com a perda glenoidal, e não apenas por tamanho absoluto.",
      level: "V",
      studyType: "Estudo biomecânico cadavérico",
      era: "classico",
      citation: {
        authors: "Yamamoto N, Itoi E, Abe H, et al.",
        title:
          "Contact between the glenoid and the humeral head in abduction, external rotation, and horizontal extension: a new concept of glenoid track.",
        journal: "J Shoulder Elbow Surg",
        year: 2007,
        pmid: "17644006",
        doi: "10.1016/j.jse.2006.12.012",
      },
    },
  ],
  pearls: [
    "Exame do nervo axilar antes e depois da redução é parte do procedimento, não detalhe de prontuário.",
    "Uma lesão de Bankart pequena não explica instabilidade grave se houver HAGL ou perda óssea bipolar.",
    "Glenoid track integra os dois lados da articulação; não substitui idade, esporte e qualidade capsular.",
    "No Latarjet, enxerto nivelado e abaixo do equador reduz recorrência sem criar conflito articular.",
  ],
  pitfalls: [
    "Indicar Bankart isolado sem quantificar a perda glenoidal e o Hill-Sachs.",
    "Confundir ausência de nova luxação com ausência de instabilidade; subluxação e apreensão também importam.",
    "Forçar ganho precoce de rotação externa e comprometer o reparo capsulolabral.",
    "Usar remplissage para mascarar uma glenoide que precisa de reconstrução óssea.",
  ],
  figures: [
    {
      id: "luxacao-glenoumeral-anterior:radiografia",
      caption:
        "Radiografias AP e perfil escapular mostrando a cabeça umeral deslocada em posição anteroinferior.",
      alt: "Radiografias de luxação glenoumeral anterior",
      kind: "radiograph",
      source: {
        label: "Hellerhoff / Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Dislocated_shoulder_X-ray_05.png",
        license: "CC BY-SA 3.0",
      },
    },
    {
      id: "luxacao-glenoumeral-anterior:anatomia",
      caption: "Estabilizadores anteroinferiores e relação com o nervo axilar.",
      alt: "Anatomia capsulolabral da articulação glenoumeral",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:lesoes-capsulolabrais",
      variant: "bankart",
      caption: "Lesão de Bankart: avulsão capsulolabral do rebordo anteroinferior.",
      alt: "Padrões de lesão capsulolabral anterior",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:lesoes-capsulolabrais",
      variant: "perthes",
      caption: "Lesão de Perthes: lábio avulsionado com periósteo escapular medial preservado.",
      alt: "Lesão capsulolabral de Perthes",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:lesoes-capsulolabrais",
      variant: "alpsa",
      caption: "ALPSA: complexo capsulolabral cicatrizado medialmente no colo glenoidal.",
      alt: "Lesão ALPSA do ombro",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:lesoes-capsulolabrais",
      variant: "hagl",
      caption: "HAGL: avulsão umeral do ligamento glenoumeral inferior.",
      alt: "Lesão HAGL do ombro",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:glenoid-track",
      variant: "on",
      caption: "Glenoid track e intervalo de Hill-Sachs: padrão on-track.",
      alt: "Conceito de glenoid track no ombro",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:glenoid-track",
      variant: "off",
      caption: "Padrão off-track: o intervalo de Hill-Sachs ultrapassa a faixa de contato glenoidal.",
      alt: "Lesão off-track na instabilidade anterior do ombro",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:portais",
      caption: "Portais artroscópicos para estabilização anterior.",
      alt: "Portais artroscópicos do ombro",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:via-deltopeitoral",
      caption: "Via deltopeitoral e referências neurovasculares para Latarjet.",
      alt: "Via deltopeitoral do ombro",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:reducao",
      caption: "Redução progressiva com tração suave e controle da rotação.",
      alt: "Princípios de redução da luxação anterior do ombro",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:step-bankart",
      variant: "mobilizacao",
      caption: "Mobilização e reinserção do complexo capsulolabral no rebordo glenoidal.",
      alt: "Etapas do reparo de Bankart",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:step-bankart",
      variant: "reparo",
      caption: "Reinserção capsulolabral com âncoras distribuídas de inferior para superior.",
      alt: "Reparo artroscópico de Bankart",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:step-remplissage",
      caption: "Remplissage do Hill-Sachs com cápsula posterior e infraespinal.",
      alt: "Técnica de remplissage do defeito de Hill-Sachs",
      kind: "diagram",
    },
    {
      id: "luxacao-glenoumeral-anterior:step-latarjet",
      caption: "Transferência do processo coracoide nivelada ao rebordo glenoidal anterior.",
      alt: "Posicionamento do enxerto no procedimento de Latarjet",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
      "Barros Filho TEP, Lech O. Exame Físico em Ortopedia. 3ª ed.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; radiografia licenciada e armazenada localmente; figuras esquemáticas originais.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), capítulo de luxação glenoumeral e instabilidade anterior; redesenho original, não reprodução.",
  },
});
