import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-mao-rizartrose",
  slug: "rizartrose",
  kind: "condicao",
  regionId: "membro-superior",
  bone: "Mão",
  injury: "Artrose trapeziometacarpiana",
  title: "Rizartrose (artrose trapézio-metacarpiana)",
  subtitle:
    "Reconhecer a artrose da base do polegar, estadiar por Eaton-Littler e conduzir do conservador — que é sempre a primeira linha — à cirurgia refratária, sabendo que a trapeziectomia isolada e as técnicas com suspensão têm resultados semelhantes.",
  laterality: null,
  status: "complete",
  overview:
    "A rizartrose é a artrose da articulação trapézio-metacarpiana (TMC), a base do polegar, e uma das localizações mais frequentes de osteoartrose sintomática da mão. Predomina em mulheres na perimenopausa e na pós-menopausa e cursa com dor na base do polegar, agravada pela pinça e pela preensão de força — abrir potes, girar chaves, apertar. A articulação em sela, biarticular, deve conciliar grande mobilidade com estabilidade, e essa demanda mecânica, somada à incompetência do ligamento oblíquo volar (o ligamento \"beak\"), explica a degeneração precoce.\n\nCom a evolução, a base do metacarpo subluxa em direção dorsorradial, o metacarpo aduz e a metacarpofalângica (MCF) hiperestende de forma compensatória, produzindo a clássica deformidade em Z ou em zigue-zague do polegar. O diagnóstico é clínico e radiográfico: dor localizada, teste de grind (compressão axial com rotação) positivo e, nas fases iniciais, subluxação ao teste de estresse. O estadiamento de Eaton-Littler, em radiografias, orienta o prognóstico e, sobretudo, a escolha cirúrgica — em especial se a doença é isolada da TMC ou pantrapezial (estágio IV), acometendo também a articulação escafo-trapézio-trapezoide (STT).\n\nA condução é escalonada. O tratamento conservador — orientação e proteção articular, órtese da coluna do polegar, anti-inflamatórios e infiltração — é sempre a primeira linha e resolve a maioria dos casos. A cirurgia fica reservada ao paciente refratário, com dor persistente e limitação funcional apesar de tratamento conservador adequado. Entre as opções operatórias, a evidência de alto nível mostra que nenhuma técnica é claramente superior às demais: a trapeziectomia isolada oferece alívio da dor e função equivalentes aos das técnicas com reconstrução ligamentar e interposição tendínea (LRTI) ou suspensão, com menos complicações precoces e menor tempo cirúrgico.",
  keyFacts: [
    { label: "Articulação", value: "Trapézio-metacarpiana (sela), base do polegar" },
    { label: "Epidemiologia", value: "Mulheres na peri e pós-menopausa; dor à pinça e preensão" },
    { label: "Estabilizador-chave", value: "Ligamento oblíquo volar (beak) — sua falha inicia a subluxação" },
    { label: "Deformidade", value: "Subluxação dorsorradial + adução do metacarpo + hiperextensão da MCF (Z)" },
    { label: "Exame", value: "Teste de grind positivo; teste de estresse mostra subluxação inicial" },
    { label: "Estadiamento", value: "Eaton-Littler I–IV (IV = pantrapezial, acomete a STT)" },
    { label: "1ª linha", value: "Conservador: órtese, AINE, infiltração, proteção articular" },
    { label: "Cirurgia refratária", value: "Trapeziectomia isolada ≈ LRTI/suspensão em dor e função" },
  ],
  anatomy: {
    text:
      "A articulação trapézio-metacarpiana é uma sela biarticular (em cadeira de montaria) formada pela superfície distal do trapézio e pela base do primeiro metacarpo. A geometria em sela permite flexoextensão, abdução-adução e rotação axial (circundução e oponência), mas confere pouca estabilidade óssea intrínseca; a congruência é máxima apenas na posição de pinça terminal. A estabilidade depende, portanto, de um complexo ligamentar.\n\nO principal estabilizador é o ligamento oblíquo volar anterior — o ligamento \"beak\" ou oblíquo anterior profundo —, que ancora a base volar-ulnar do metacarpo ao tubérculo do trapézio e resiste à translação dorsorradial durante a pinça. O ligamento dorsorradial e o complexo dorsal também contribuem, e há debate sobre qual estrutura é a mais crítica; na prática, a incompetência do complexo volar/beak é considerada o evento inicial da instabilidade e da degeneração. A atenuação ligamentar, mais frouxa em mulheres e sob demanda repetitiva, permite microinstabilidade, sobrecarga da cartilagem volar e progressão da artrose.\n\nO trapézio articula-se ainda com o escafoide (proximal), o trapezoide (ulnar) e a base do segundo metacarpo. O acometimento da articulação escafo-trapézio-trapezoide (STT) define a doença pantrapezial (Eaton-Littler IV) e tem implicação cirúrgica direta, pois procedimentos que preservam ou ignoram a STT doente tendem a manter a dor. À frente da TMC passam o ramo sensitivo do nervo radial e a artéria radial, ambos em risco nas vias de acesso.",
    figureIds: ["rizartrose:anatomia", "rizartrose:subluxacao"],
  },
  classification: [
    {
      id: "eaton-littler",
      name: "Classificação radiográfica de Eaton-Littler",
      basis:
        "Estágio radiográfico da degeneração da TMC — interlinha articular, osteófitos, subluxação e extensão à articulação escafo-trapézio-trapezoide (STT).",
      note:
        "Radiografias em AP, perfil e a incidência de Robert (AP verdadeira da TMC, com o antebraço em pronação máxima) permitem estadiar. O estágio guia sobretudo a decisão cirúrgica: procedimentos que preservam o trapézio (osteotomia, reconstrução ligamentar) fazem sentido nos estágios iniciais; a doença pantrapezial (IV) contraindica técnicas que deixem a STT doente.",
      types: [
        {
          code: "I",
          label: "Pré-artrósico / laxidez",
          description:
            "Contornos articulares normais ou interlinha discretamente alargada por sinovite/derrame; sem osteófitos. Pode haver subluxação < 1/3 ao teste de estresse. Fase de instabilidade ligamentar.",
          figureId: "rizartrose:classificacao",
          figureVariant: "i",
        },
        {
          code: "II",
          label: "Artrose inicial",
          description:
            "Redução da interlinha articular da TMC com osteófitos ou corpos livres menores que 2 mm. Subluxação leve possível. Cartilagem ainda parcialmente preservada.",
          figureId: "rizartrose:classificacao",
          figureVariant: "ii",
        },
        {
          code: "III",
          label: "Artrose avançada da TMC",
          description:
            "Estreitamento acentuado, osteófitos maiores que 2 mm, esclerose subcondral e cistos; subluxação dorsorradial evidente. A STT permanece preservada.",
          figureId: "rizartrose:classificacao",
          figureVariant: "iii",
        },
        {
          code: "IV",
          label: "Pantrapezial (STT acometida)",
          description:
            "Doença da TMC associada a degeneração da articulação escafo-trapézio-trapezoide. Determina que a conduta cirúrgica trate também a STT — em geral trapeziectomia — e contraindica procedimentos que a ignorem.",
          figureId: "rizartrose:classificacao",
          figureVariant: "iv",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Dor e limitação funcional persistentes apesar de tratamento conservador bem conduzido (órtese, AINE, infiltração, terapia da mão).",
      "Artrose sintomática Eaton-Littler III–IV refratária, com subluxação e perda de força de pinça.",
      "Deformidade em adução/hiperextensão (Z) sintomática que compromete a pinça.",
      "Doença pantrapezial (estágio IV): trapeziectomia, isolada ou com suspensão/interposição, tratando a STT.",
      "Paciente jovem, manual e de alta demanda com TMC isolada: considerar artrodese como alternativa que prioriza força.",
    ],
    nonOperative: [
      "Todos os estágios como primeira linha — a maioria dos pacientes melhora sem cirurgia.",
      "Educação, proteção articular e adaptação ergonômica das atividades.",
      "Órtese da coluna do polegar (imobilização da TMC, poupando a interfalângica).",
      "Anti-inflamatórios não esteroidais orais ou tópicos e analgesia.",
      "Infiltração intra-articular: corticosteroide (alívio mais rápido, porém mais curto) ou ácido hialurônico.",
      "Exercícios de fortalecimento e estabilização dinâmica sob terapia da mão.",
    ],
    decisionNotes:
      "A pergunta prática não é qual cirurgia fazer, e sim se a cirurgia é necessária: o tratamento conservador é sempre a primeira linha e controla a maioria dos casos. Um ensaio clínico randomizado (COMBO) mostrou que a combinação de órtese, exercícios, educação e AINE tópico melhora a função da mão em relação à educação isolada. A infiltração de corticosteroide oferece alívio mais rápido, porém mais curto; o ácido hialurônico age mais lentamente e dura mais, sem evidência que o firme como superior.\n\nNa falha do conservador, a decisão cirúrgica ancora-se em dois princípios sustentados por evidência de alto nível. Primeiro: nenhuma técnica é claramente superior às demais em dor e função — a revisão Cochrane e metanálises comparando trapeziectomia isolada com trapeziectomia associada a reconstrução ligamentar e interposição tendínea (LRTI) não mostram diferença consistente em dor, função (DASH) ou pinça-chave, enquanto a LRTI acrescenta tempo cirúrgico e mais complicações precoces (ainda que possa oferecer alguma vantagem de força de preensão). Segundo: o estágio de Eaton-Littler orienta a escolha — a doença pantrapezial (IV) exige tratar a STT (favorecendo a trapeziectomia), enquanto o paciente jovem, manual e de alta demanda com TMC isolada pode se beneficiar da artrodese, que prioriza força e estabilidade ao custo da mobilidade. A artroplastia de substituição preserva mobilidade e força, mas carrega risco de soltura e luxação e deve ficar com cirurgiões experientes. A denervação seletiva da TMC é opção emergente com resultados comparáveis à LRTI em 2 anos e recuperação mais rápida, ainda que com menor corpo de evidência.",
  },
  approaches: [
    {
      id: "conservador",
      name: "Conduta conservadora escalonada (primeira linha)",
      indication:
        "Todos os estágios sintomáticos como tratamento inicial; base do manejo antes de considerar cirurgia.",
      interval:
        "Sequência: educação e proteção articular → órtese da coluna do polegar (uso diurno em atividades ou noturno) → AINE oral/tópico → terapia da mão com fortalecimento e estabilização → infiltração intra-articular (corticosteroide ou ácido hialurônico) na dor refratária. Reavaliar em 6–12 semanas.",
      atRisk: [
        "Atrofia/rigidez por imobilização excessiva — poupar a interfalângica e mobilizar",
        "Efeitos adversos dos AINE (gastrointestinais, renais, cardiovasculares)",
        "Atrofia de partes moles e despigmentação em infiltrações repetidas de corticosteroide",
      ],
      figureId: "rizartrose:ortese",
    },
    {
      id: "acesso-tmc",
      name: "Via de acesso à trapézio-metacarpiana",
      indication:
        "Trapeziectomia (isolada ou com suspensão/interposição), artrodese e artroplastia da TMC no paciente refratário.",
      interval:
        "Incisão dorsorradial ou volar longitudinal/curvilínea sobre a TMC (variando com o procedimento e o enxerto tendíneo empregado). Afastar e proteger os ramos sensitivos do nervo radial e a artéria radial; abrir a cápsula, expor o trapézio e a base do metacarpo. Quando se usa tira do flexor radial do carpo (FCR), acessa-se também o tendão na face volar do antebraço.",
      atRisk: [
        "Ramo sensitivo do nervo radial (neuroma doloroso é complicação frequente)",
        "Artéria radial no fundo do campo dorsorradial",
        "Ramo do nervo cutâneo lateral do antebraço",
        "Flexor radial do carpo (FCR), quando usado como enxerto",
      ],
      figureId: "rizartrose:trapeziectomia",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Diagnóstico, estadiamento e escolha da estratégia",
      detail:
        "Confirmar dor na base do polegar, teste de grind positivo e, nas fases iniciais, subluxação ao teste de estresse. Estadiar por Eaton-Littler em radiografias (AP, perfil e incidência de Robert) e definir se a doença é isolada da TMC ou pantrapezial (IV, com STT). Esgotar o tratamento conservador antes de indicar cirurgia; a estratégia operatória segue estágio, demanda e preferência do paciente.",
      figureId: "rizartrose:teste-grind",
      tips: [
        "A incidência de Robert (AP verdadeira em pronação máxima) mostra melhor a TMC e a STT",
        "Excluir estenose de De Quervain e artrose da STT/MCF como fontes concomitantes de dor",
      ],
      pitfalls: [
        "Indicar cirurgia sem antes conduzir adequadamente o tratamento conservador",
        "Ignorar a STT (estágio IV) e escolher procedimento que a deixe doente",
      ],
    },
    {
      n: 2,
      title: "Otimizar o tratamento conservador",
      detail:
        "Prescrever órtese da coluna do polegar (imobiliza a TMC, poupando a interfalângica), associar AINE oral/tópico e proteção articular, e encaminhar à terapia da mão para fortalecimento e estabilização dinâmica. Na dor refratária, infiltração intra-articular — corticosteroide para alívio mais rápido, ácido hialurônico como alternativa de efeito mais tardio e duradouro. Reavaliar antes de escalar para cirurgia.",
      figureId: "rizartrose:ortese",
      tips: [
        "Órtese sob demanda em atividades desencadeantes tende a melhor adesão",
        "Combinar modalidades (órtese + exercício + educação) supera a educação isolada",
      ],
      pitfalls: [
        "Imobilização rígida e prolongada, gerando rigidez e atrofia",
        "Repetir infiltrações de corticosteroide indefinidamente sem reavaliar a indicação",
      ],
    },
    {
      n: 3,
      title: "Trapeziectomia — remoção do trapézio",
      detail:
        "Na falha do conservador, o procedimento de referência é a trapeziectomia. Pela via de acesso à TMC, protegendo os ramos sensitivos do nervo radial e a artéria radial, remove-se o trapézio (total ou, em casos selecionados, parcial). Na doença pantrapezial, a ressecção do trapézio trata simultaneamente a STT. O espaço resultante pode ser deixado à cicatrização por hematoma/fibrose (trapeziectomia isolada) ou ser complementado.",
      figureId: "rizartrose:trapeziectomia",
      figureVariant: "isolada",
      tips: [
        "Preservar a base do 2º metacarpo e a inserção do FCR ao remover o trapézio",
        "Confirmar remoção completa dos osteófitos e de fragmentos retidos",
      ],
      pitfalls: [
        "Lesar o ramo sensitivo do nervo radial (neuroma) ou a artéria radial",
        "Remoção incompleta do trapézio, mantendo dor por remanescente ósseo",
      ],
    },
    {
      n: 4,
      title: "Decidir sobre suspensão/interposição (LRTI) ou trapeziectomia isolada",
      detail:
        "A trapeziectomia associada a reconstrução ligamentar e interposição tendínea (LRTI) usa uma tira tendínea (classicamente do FCR) para reconstruir o ligamento oblíquo volar, suspender a base do metacarpo e preencher o espaço. A evidência de alto nível, porém, não mostra vantagem consistente da LRTI sobre a trapeziectomia isolada em dor e função, com mais complicações precoces e maior tempo cirúrgico. Assim, a técnica é escolha do cirurgião: a trapeziectomia isolada é simples e confiável; a LRTI/suspensão pode ser considerada quando se busca força de preensão adicional.",
      figureId: "rizartrose:trapeziectomia",
      figureVariant: "lrti",
      tips: [
        "Discutir com o paciente que isolada e LRTI têm dor e função equivalentes",
        "Alternativas de suspensão (suture-button, suspensão com FCR parcial) buscam menor morbidade",
      ],
      pitfalls: [
        "Prometer resultado superior à trapeziectomia isolada sem respaldo na evidência",
        "Sobrecarregar o procedimento com dissecção extensa e mais complicações",
      ],
    },
    {
      n: 5,
      title: "Alternativas: artrodese e artroplastia de substituição",
      detail:
        "Na TMC isolada de paciente jovem, manual e de alta demanda, a artrodese oferece uma coluna estável e forte ao custo da mobilidade, com risco de pseudoartrose e de sobrecarga das articulações vizinhas; exige ausência de doença pantrapezial. A artroplastia de substituição (implante taça-e-haste) preserva mobilidade e força e propicia recuperação rápida, mas carrega risco de soltura e luxação, devendo ficar com cirurgiões experientes. A denervação seletiva da TMC é opção emergente, com resultados comparáveis à LRTI em 2 anos e recuperação mais rápida.",
      figureId: "rizartrose:alternativas",
      figureVariant: "artrodese",
      tips: [
        "Artrodese posiciona o polegar em oponência funcional para a pinça e a preensão",
        "Selecionar bem o candidato à artroplastia reduz a taxa de falha do implante",
      ],
      pitfalls: [
        "Indicar artrodese na doença pantrapezial (STT persistiria sintomática)",
        "Empregar artroplastia sem experiência com a técnica e o implante",
      ],
    },
  ],
  postop: {
    immobilization:
      "Após trapeziectomia (isolada ou com LRTI/suspensão), imobilização em órtese ou gesso da coluna do polegar por cerca de 4 a 6 semanas, poupando a interfalângica. Na artrodese, imobilização mantida até sinais radiográficos de consolidação (frequentemente 6 a 12 semanas). Na artroplastia, imobilização mais curta conforme a estabilidade do implante.",
    weightBearing:
      "Sem pinça de força ou preensão vigorosa no período inicial. A carga sobre a pinça é liberada de forma progressiva após a cicatrização de partes moles (ou consolidação, na artrodese), com retorno a atividades manuais pesadas apenas ao final da reabilitação.",
    rehab: [
      {
        window: "0-4 semanas",
        weightBearing: "Sem carga na pinça",
        focus:
          "Proteção em órtese/gesso da coluna do polegar; controle de edema e da dor; mobilizar a interfalângica, os demais dedos e o punho conforme o procedimento.",
      },
      {
        window: "4-6 semanas",
        weightBearing: "Carga leve protegida",
        focus:
          "Iniciar mobilidade ativa do polegar em órtese removível; oponência suave; dessensibilização da cicatriz. Na artrodese, manter imobilização até consolidação.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Progressiva",
        focus:
          "Ganho de amplitude e de oponência; fortalecimento progressivo da pinça e da preensão; treino funcional. Na artrodese, iniciar após confirmação de fusão.",
      },
      {
        window: "3-6 meses",
        weightBearing: "Livre conforme critérios",
        focus:
          "Retorno a atividades manuais e de força conforme dor e recuperação; a melhora de força pode continuar até cerca de um ano.",
      },
    ],
    followup:
      "Acompanhar dor, força de pinça e de preensão e amplitude comparadas ao lado contralateral. Vigiar neuroma do ramo sensitivo do nervo radial, colapso/proximalização do metacarpo, e — na artrodese — consolidação; na artroplastia, sinais de soltura ou luxação do implante em radiografias seriadas.",
  },
  complications: [
    {
      name: "Neuroma do ramo sensitivo do nervo radial",
      detail:
        "Dor e disestesia dorsorradial por lesão ou tração do ramo sensitivo durante o acesso; uma das queixas mais frequentes após cirurgia da base do polegar.",
      prevention:
        "Identificação e proteção cuidadosa do ramo, incisão bem planejada e manuseio delicado das partes moles.",
    },
    {
      name: "Perda de força de pinça / proximalização do metacarpo",
      detail:
        "Migração proximal e colapso do metacarpo no espaço da trapeziectomia, associada a alguma perda de força; em geral sem correlação clara com o resultado clínico.",
      prevention:
        "Suspensão/interposição em casos selecionados; a evidência, porém, não mostra que previna dor ou disfunção de forma consistente.",
    },
    {
      name: "Dor persistente ou recorrente",
      detail:
        "Manutenção da dor por remanescente ósseo, STT não tratada (estágio IV), diagnóstico concomitante não reconhecido ou complicação nervosa.",
      prevention:
        "Estadiamento correto, remoção completa do trapézio e tratamento da STT quando acometida.",
    },
    {
      name: "Complicações da artrodese",
      detail:
        "Pseudoartrose, consolidação em posição inadequada e sobrecarga com artrose das articulações vizinhas (STT e MCF).",
      prevention:
        "Fixação estável, posicionamento funcional em oponência e seleção do candidato (TMC isolada, alta demanda).",
    },
    {
      name: "Soltura ou luxação do implante (artroplastia)",
      detail:
        "Falha mecânica do implante de substituição, com soltura, luxação ou desgaste, exigindo revisão.",
      prevention:
        "Seleção criteriosa do paciente e execução por cirurgião experiente na técnica.",
    },
    {
      name: "Rigidez e complicações da imobilização",
      detail:
        "Perda de amplitude e atrofia por imobilização excessiva; distrofia simpático-reflexa em casos raros.",
      prevention:
        "Imobilização pelo tempo necessário, poupando a interfalângica, com reabilitação precoce guiada.",
    },
  ],
  evidence: [
    {
      id: "wajon-2015-cochrane",
      claim:
        "Revisão Cochrane de 11 ensaios (670 participantes) não demonstrou superioridade de nenhuma técnica cirúrgica em dor, função, qualidade de vida ou falha; evidência de baixa qualidade sugere que a trapeziectomia com LRTI não traz benefício adicional sobre a trapeziectomia isolada e pode gerar mais eventos adversos.",
      takeaway:
        "Nenhuma técnica cirúrgica é comprovadamente superior; a trapeziectomia isolada é referência simples e confiável.",
      level: "I",
      studyType: "Revisão sistemática Cochrane de ECRs",
      era: "atual",
      citation: {
        authors: "Wajon A, Vinycomb T, Carr E, Edmunds I, Ada L",
        title: "Surgery for thumb (trapeziometacarpal joint) osteoarthritis.",
        journal: "Cochrane Database Syst Rev",
        year: 2015,
        pmid: "25702783",
        doi: "10.1002/14651858.CD004631.pub4",
        url: "https://doi.org/10.1002/14651858.CD004631.pub4",
      },
    },
    {
      id: "liu-2021-metanalise",
      claim:
        "Metanálise de 8 estudos (7 ECRs, 656 casos) comparando trapeziectomia isolada com trapeziectomia + LRTI mostrou melhor força de preensão e pinça-fina no grupo LRTI ao ano, mas sem diferença em dor (VAS), função (DASH) ou pinça-chave, com mais complicações precoces na LRTI.",
      takeaway:
        "A LRTI pode oferecer alguma vantagem de força, porém sem ganho de dor ou função e com mais complicações e custo; a trapeziectomia isolada é recomendável quando não há exigência especial de força.",
      level: "I",
      studyType: "Metanálise de ensaios controlados",
      era: "atual",
      citation: {
        authors: "Liu Q, Xu B, Lyu H, Lee JH",
        title:
          "Differences between simple trapeziectomy and trapeziectomy with ligament reconstruction and tendon interposition for the treatment of trapeziometacarpal osteoarthritis: a systematic review and meta-analysis.",
        journal: "Arch Orthop Trauma Surg",
        year: 2021,
        pmid: "33462739",
        doi: "10.1007/s00402-020-03707-w",
        url: "https://doi.org/10.1007/s00402-020-03707-w",
      },
    },
    {
      id: "deveza-2021-combo",
      claim:
        "ECR (COMBO, 204 pacientes) comparou combinação de terapias conservadoras (educação, órtese da base do polegar, exercícios e diclofenaco tópico) com educação isolada e mostrou melhora significativa da função da mão em 6 e 12 semanas, com benefício de dor apenas em 12 semanas.",
      takeaway:
        "A combinação de tratamentos conservadores melhora a função na artrose da base do polegar, sustentando o manejo não operatório como primeira linha.",
      level: "I",
      studyType: "Ensaio clínico randomizado",
      era: "atual",
      citation: {
        authors:
          "Deveza LA, Robbins SR, Duong V, Bennell KL, Vicenzino B, Hodges PW, Wajon A, et al.",
        title:
          "Efficacy of a Combination of Conservative Therapies vs an Education Comparator on Clinical Outcomes in Thumb Base Osteoarthritis: A Randomized Clinical Trial.",
        journal: "JAMA Intern Med",
        year: 2021,
        pmid: "33683300",
        doi: "10.1001/jamainternmed.2020.7101",
        url: "https://doi.org/10.1001/jamainternmed.2020.7101",
      },
    },
    {
      id: "frost-2023-denervacao",
      claim:
        "Estudo prospectivo (53 pacientes, Eaton 2–4) comparou denervação seletiva da TMC com trapeziectomia + LRTI: ambos melhoraram o brief Michigan Hand Questionnaire de forma durável, sem diferença entre grupos em 2 anos; a denervação teve menor tempo de torniquete e retorno mais rápido, com conversão de 9% para LRTI.",
      takeaway:
        "A denervação seletiva é alternativa emergente com resultados comparáveis à LRTI em 2 anos e recuperação mais rápida em casos selecionados.",
      level: "II",
      studyType: "Estudo de coorte prospectivo comparativo",
      era: "atual",
      citation: {
        authors:
          "Frost CM, Suresh V, Padovano W, Luck JD, Quan A, Aravind P, Ingari JV, Laporte DM, Shores JT, Lifchez SD",
        title:
          "Selective Thumb Carpometacarpal Joint Denervation Versus Trapeziectomy and Ligament Reconstruction With Tendon Interposition for Painful Arthritis: A Prospective Study With 2 Years of Follow-Up.",
        journal: "J Hand Surg Am",
        year: 2023,
        pmid: "37452814",
        doi: "10.1016/j.jhsa.2023.05.015",
        url: "https://doi.org/10.1016/j.jhsa.2023.05.015",
      },
    },
    {
      id: "qureshi-2021-artroplastia",
      claim:
        "Revisão sistemática e metanálise comparando trapeziectomia + LRTI com artroplastia de substituição da TMC encontrou melhores escores QuickDASH e Kapandji com a artroplastia, porém taxa de complicações mais alta, concluindo que o implante não deve substituir a LRTI como tratamento padrão.",
      takeaway:
        "A artroplastia de substituição pode melhorar função e oponência, mas às custas de mais complicações; deve ser reservada a cenários e cirurgiões selecionados.",
      level: "III",
      studyType: "Revisão sistemática e metanálise",
      era: "atual",
      citation: {
        authors: "Qureshi MK, Halim UA, Khaled AS, Roche SJ, Arshad MS",
        title:
          "Trapeziectomy with Ligament Reconstruction and Tendon Interposition versus Trapeziometacarpal Joint Replacement for Thumb Carpometacarpal Osteoarthritis: A Systematic Review and Meta-Analysis.",
        journal: "J Wrist Surg",
        year: 2021,
        pmid: "35845236",
        doi: "10.1055/s-0041-1731818",
        url: "https://doi.org/10.1055/s-0041-1731818",
      },
    },
  ],
  pearls: [
    "O tratamento conservador é sempre a primeira linha e resolve a maioria dos casos de rizartrose.",
    "A incompetência do ligamento oblíquo volar (beak) inicia a subluxação dorsorradial e a deformidade em Z.",
    "Trapeziectomia isolada e técnicas com suspensão/LRTI têm dor e função equivalentes — a evidência de alto nível não favorece a LRTI.",
    "O teste de grind e o teste de estresse (subluxação) apoiam o diagnóstico já na fase inicial.",
    "A doença pantrapezial (Eaton-Littler IV) exige tratar a STT — em geral por trapeziectomia.",
  ],
  pitfalls: [
    "Indicar cirurgia antes de esgotar um tratamento conservador bem conduzido.",
    "Prometer superioridade da LRTI sobre a trapeziectomia isolada sem respaldo na evidência.",
    "Ignorar o acometimento da STT (estágio IV) e manter dor por procedimento inadequado.",
    "Lesar o ramo sensitivo do nervo radial no acesso, gerando neuroma doloroso.",
    "Indicar artrodese na doença pantrapezial ou artroplastia sem experiência com o implante.",
  ],
  figures: [
    {
      id: "rizartrose:anatomia",
      caption:
        "Articulação trapézio-metacarpiana em sela: ligamento oblíquo volar (beak) e dorsorradial, com escafoide e trapezoide adjacentes.",
      alt: "Anatomia da articulação trapézio-metacarpiana em sela e seus ligamentos",
      kind: "diagram",
    },
    {
      id: "rizartrose:subluxacao",
      variant: "subluxada",
      caption:
        "Fisiopatologia: incompetência do beak leva à subluxação dorsorradial da base do metacarpo, adução e hiperextensão compensatória da MCF.",
      alt: "Subluxação dorsorradial da base do primeiro metacarpo na rizartrose",
      kind: "diagram",
    },
    {
      id: "rizartrose:classificacao",
      variant: "iv",
      caption:
        "Classificação de Eaton-Littler: I pré-artrósico, II inicial, III avançada da TMC e IV pantrapezial com acometimento da STT.",
      alt: "Estágios de Eaton-Littler da artrose trapézio-metacarpiana",
      kind: "diagram",
    },
    {
      id: "rizartrose:teste-grind",
      caption:
        "Teste de grind: compressão axial associada à rotação da TMC reproduz dor e crepitação; o teste de estresse revela subluxação inicial.",
      alt: "Teste de grind da articulação trapézio-metacarpiana",
      kind: "diagram",
    },
    {
      id: "rizartrose:ortese",
      caption:
        "Órtese da coluna do polegar: imobiliza a TMC poupando a interfalângica, base do tratamento conservador de primeira linha.",
      alt: "Órtese de imobilização da base do polegar para artrose trapézio-metacarpiana",
      kind: "diagram",
    },
    {
      id: "rizartrose:trapeziectomia",
      variant: "isolada",
      caption:
        "Trapeziectomia isolada: remoção do trapézio, com o espaço preenchido por hematoma/fibrose; procedimento simples e confiável.",
      alt: "Trapeziectomia isolada da base do polegar",
      kind: "diagram",
    },
    {
      id: "rizartrose:trapeziectomia",
      variant: "lrti",
      caption:
        "Trapeziectomia com reconstrução ligamentar e interposição tendínea (LRTI): tira tendínea suspende a base e preenche o leito, sem superioridade clara sobre a isolada.",
      alt: "Trapeziectomia com LRTI e suspensão do primeiro metacarpo",
      kind: "diagram",
    },
    {
      id: "rizartrose:alternativas",
      variant: "artrodese",
      caption:
        "Alternativas cirúrgicas: artrodese da TMC (força e estabilidade, perda de mobilidade) e artroplastia de substituição (preserva mobilidade, risco de soltura).",
      alt: "Artrodese e artroplastia de substituição da articulação trapézio-metacarpiana",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Green's Operative Hand Surgery. 8th ed.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: princípios e prática. 6ª ed. 2025.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, não reprodução de material protegido.",
    figureReference:
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024) / Green's Operative Hand Surgery — redesenho original das figuras.",
  },
});
