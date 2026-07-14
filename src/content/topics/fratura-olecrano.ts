import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-cotovelo-ulna-fratura-olecrano",
  slug: "fratura-olecrano",
  regionId: "membro-superior",
  bone: "Cotovelo",
  injury: "Fratura do olecrano",
  title: "Fratura do olecrano",
  subtitle:
    "Restaurar o aparelho extensor e a congruência da incisura troclear escolhendo entre banda de tensão, placa e tratamento conservador conforme o traço, a cominuição e a demanda do paciente.",
  laterality: null,
  status: "complete",
  overview:
    "A fratura do olecrano é intra-articular por definição, pois o traço atravessa a incisura troclear, superfície de carga do cotovelo. O olecrano recebe a inserção do tríceps, de modo que qualquer solução de continuidade rompe o aparelho extensor: sem extensão ativa contra a gravidade, o cotovelo perde função. A tração do tríceps tende a afastar o fragmento proximal, o que explica por que a maioria das fraturas desviadas exige fixação para restaurar comprimento, congruência articular e a capacidade de estender o antebraço.\n\nA avaliação começa pelo exame do aparelho extensor (extensão ativa contra a gravidade), pela pele sobre a proeminência subcutânea do olecrano e pelo estado neurovascular, com atenção ao nervo ulnar. A radiografia em perfil verdadeiro do cotovelo define o traço, o desvio e a cominuição; a incidência AP ajuda a excluir extensão à cabeça do rádio e ao coronoide. A decisão terapêutica combina três eixos: o padrão da fratura (transverso simples versus oblíquo ou cominutivo), a estabilidade do cotovelo (fratura-luxação, envolvimento do coronoide) e a demanda funcional e a qualidade óssea do paciente. Fraturas transversas simples e desviadas em osso de boa qualidade respondem bem à banda de tensão; padrões cominutivos, oblíquos que se estendem distalmente e o Mayo IIB são mais previsíveis com placa. No idoso de baixa demanda e alto risco cirúrgico, o tratamento não operatório funcional oferece bons resultados apesar da alta taxa de não união.",
  keyFacts: [
    { label: "Natureza", value: "Fratura intra-articular da incisura troclear" },
    { label: "Deformidade", value: "Tração do tríceps afasta o fragmento proximal" },
    { label: "Exame-chave", value: "Extensão ativa contra a gravidade; avaliar nervo ulnar" },
    { label: "Imagem", value: "Perfil verdadeiro do cotovelo define traço e cominuição" },
    { label: "Transversa simples", value: "Banda de tensão (Mayo IIA)" },
    { label: "Cominutiva / oblíqua", value: "Placa dorsal contornada (Mayo IIB)" },
    { label: "Idoso baixa demanda", value: "Conservador funcional é opção válida" },
  ],
  anatomy: {
    text:
      "O olecrano é a projeção proximal e posterior da ulna, subcutâneo e palpável, que forma com o processo coronoide a incisura troclear (sigmoide maior). Essa incisura em C articula-se com a tróclea umeral e proporciona a estabilidade óssea intrínseca do cotovelo em flexão e extensão. O tendão do tríceps insere-se amplamente na face proximal e dorsal do olecrano, tornando-o o braço de alavanca do aparelho extensor.\n\nO caráter intra-articular impõe redução anatômica da superfície da incisura; degraus articulares predispõem à artrose pós-traumática e à perda de movimento. Como o olecrano é a inserção do extensor, o desvio significa incompetência do tríceps. A crista subcutânea explica a intolerância a implantes proeminentes, principal causa de reoperação para retirada de material. O nervo ulnar cruza posteriormente ao epicôndilo medial, medial ao olecrano, e deve ser considerado nas fraturas com extensão medial, na dissecção e na passagem de fios e parafusos.",
    figureIds: ["fratura-olecrano:anatomia", "fratura-olecrano:mecanismo"],
  },
  classification: [
    {
      id: "mayo",
      name: "Classificação de Mayo",
      basis: "Desvio, cominuição e estabilidade do cotovelo — orienta diretamente o tratamento.",
      note:
        "É a classificação mais útil na prática: separa o que pode ser tratado sem cirurgia (I), o que responde à banda de tensão (IIA) do que exige placa (IIB), e o que representa instabilidade articular (III).",
      types: [
        {
          code: "I",
          label: "Tipo I — não desviada",
          description:
            "Desvio menor que 2 mm, mantido em flexão e contra a gravidade. Subtipos A (não cominutiva) e B (cominutiva). Tratamento habitualmente conservador.",
          figureId: "fratura-olecrano:mayo",
          figureVariant: "I",
        },
        {
          code: "IIA",
          label: "Tipo IIA — desviada estável, não cominutiva",
          description:
            "Fratura desviada com cotovelo estável e traço transverso simples. Indicação clássica de banda de tensão.",
          figureId: "fratura-olecrano:mayo",
          figureVariant: "IIA",
        },
        {
          code: "IIB",
          label: "Tipo IIB — desviada estável, cominutiva",
          description:
            "Desvio com cominuição ou traço oblíquo. A banda de tensão não neutraliza bem essas forças; a placa dorsal contornada é preferida.",
          figureId: "fratura-olecrano:mayo",
          figureVariant: "IIB",
        },
        {
          code: "III",
          label: "Tipo III — instável (fratura-luxação)",
          description:
            "Instabilidade do cotovelo associada, frequentemente com lesão do coronoide, da cabeça do rádio ou luxação. Exige fixação estável e restauração de todos os estabilizadores.",
          figureId: "fratura-olecrano:mayo",
          figureVariant: "III",
        },
      ],
    },
    {
      id: "schatzker",
      name: "Morfologia de Schatzker",
      basis: "Geometria do traço — ajuda a antecipar o implante e o risco de falha da banda de tensão.",
      note:
        "Descreve o formato do traço (transverso, transverso-impactado, oblíquo, cominutivo, oblíquo distal e fratura-luxação). Traços oblíquos, distais ou cominutivos favorecem a placa em vez da banda de tensão.",
      types: [
        {
          code: "TRANSV",
          label: "Transversa",
          description:
            "Traço transverso no ponto mais profundo da incisura; padrão ideal para banda de tensão quando simples e estável.",
          figureId: "fratura-olecrano:schatzker",
          figureVariant: "transversa",
        },
        {
          code: "OBL",
          label: "Oblíqua",
          description:
            "Traço oblíquo que começa no fundo da incisura e se estende distalmente; a compressão axial da banda de tensão é menos previsível — preferir placa.",
          figureId: "fratura-olecrano:schatzker",
          figureVariant: "obliqua",
        },
        {
          code: "COMIN",
          label: "Cominutiva",
          description:
            "Múltiplos fragmentos articulares; a fixação em ponte com placa dorsal contornada mantém comprimento e congruência.",
          figureId: "fratura-olecrano:schatzker",
          figureVariant: "cominutiva",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Fratura desviada (mais de 2 mm) com incompetência do aparelho extensor.",
      "Traço transverso simples e estável em osso de boa qualidade — banda de tensão (Mayo IIA).",
      "Cominuição, obliquidade distal ou perda articular — placa dorsal contornada (Mayo IIB).",
      "Fratura-luxação e padrões instáveis (Mayo III), com atenção ao coronoide e à cabeça do rádio.",
      "Degrau articular relevante na incisura troclear que exige redução anatômica.",
    ],
    nonOperative: [
      "Fratura não desviada (Mayo I) com aparelho extensor íntegro contra a gravidade.",
      "Idoso de baixa demanda funcional e alto risco cirúrgico, mesmo com desvio, após decisão compartilhada.",
      "Contraindicação clínica à cirurgia ou preferência informada do paciente com expectativas ajustadas.",
    ],
    decisionNotes:
      "O eixo central é: aparelho extensor competente e traço estável orientam para tratamento não operatório ou banda de tensão; instabilidade, cominuição ou obliquidade orientam para placa. A banda de tensão é ideal na transversa simples porque converte a força de distração do tríceps em compressão na cortical articular durante a flexão; em traços oblíquos ou cominutivos essa conversão falha e há colapso e diástase. No idoso de baixa demanda, o tratamento funcional aceita a alta taxa de não união em troca de bons escores funcionais e evita as complicações da fixação, sobretudo a irritação por implante. Independentemente do método, a irritação por material proeminente é a complicação mais comum e a principal causa de reoperação, especialmente após banda de tensão.",
  },
  approaches: [
    {
      id: "posterior-direta",
      name: "Via posterior direta ao olecrano",
      indication: "Acesso para banda de tensão e para a maioria das fixações com placa.",
      interval:
        "Incisão posterior curvando levemente radial ao ápice do olecrano para evitar a cicatriz sobre a proeminência subcutânea. Dissecção até o periósteo; a incisura troclear é inspecionada e reduzida sob visão direta, elevando a cominuição impactada quando presente.",
      atRisk: [
        "Nervo ulnar, medial ao olecrano — identificar e proteger, sobretudo em extensão medial ou cominuição",
        "Pele e tecido subcutâneo finos sobre o olecrano, sujeitos a deiscência e a irritação por implante",
      ],
      figureId: "fratura-olecrano:placa",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Avaliar o aparelho extensor e planejar",
      detail:
        "Confirmar a incompetência do tríceps (perda de extensão ativa contra a gravidade), inspecionar a pele e documentar a função do nervo ulnar. Definir o padrão no perfil verdadeiro: transverso simples versus oblíquo ou cominutivo. Escolher banda de tensão para transversa simples estável (Mayo IIA) e placa para cominuição, obliquidade distal ou instabilidade (Mayo IIB/III).",
      figureId: "fratura-olecrano:mecanismo",
      tips: [
        "Extensão ativa contra a gravidade é o teste funcional do aparelho extensor",
        "No idoso de baixa demanda, rediscutir a opção conservadora antes de indicar cirurgia",
      ],
      pitfalls: [
        "Tratar como transversa simples um traço oblíquo que se estende distalmente",
        "Subestimar a cominuição articular no planejamento",
      ],
    },
    {
      n: 2,
      title: "Reduzir a superfície articular",
      detail:
        "Com o cotovelo em extensão relativa para relaxar o tríceps, reduzir o fragmento proximal e restaurar a congruência da incisura troclear sob visão direta. Fixar provisoriamente com pinça de redução; degraus articulares devem ser eliminados antes da fixação definitiva.",
      figureId: "fratura-olecrano:anatomia",
      tips: ["Reduzir com o cotovelo estendido diminui a força deformante do tríceps", "Elevar e enxertar defeito por impactação articular quando necessário"],
      pitfalls: ["Aceitar degrau na incisura, que predispõe a artrose", "Encurtar a incisura ao comprimir uma cominuição central"],
    },
    {
      n: 3,
      title: "Banda de tensão na transversa simples",
      detail:
        "Passar dois fios de Kirschner paralelos da cortical dorsal do olécrano, engatando a cortical anterior distal (ou intramedulares), e ancorar uma cerclagem em oito por um túnel transverso distal ao traço. Ao fletir o cotovelo, a tração do tríceps é convertida em compressão na cortical articular. Impactar e dobrar as pontas dos fios sob o tendão do tríceps.",
      figureId: "fratura-olecrano:banda-tensao",
      tips: ["Enterrar as pontas dos fios reduz a irritação e a retirada de material", "Engatar a cortical anterior aumenta a estabilidade dos fios"],
      pitfalls: [
        "Usar banda de tensão em traço oblíquo ou cominutivo — colapso e diástase",
        "Deixar fios proeminentes, principal causa de reoperação",
      ],
    },
    {
      n: 4,
      title: "Placa na cominutiva, oblíqua ou instável",
      detail:
        "Aplicar placa dorsal anatômica contornada sobre o olécrano, envolvendo o ápice, com parafusos multiplanares e, quando útil, um parafuso proximal longo intramedular. Em cominuição, usar a placa em ponte para manter comprimento e congruência sem comprimir os fragmentos articulares. Nos Mayo III, restaurar coronoide e cabeça do rádio conforme necessário.",
      figureId: "fratura-olecrano:placa",
      tips: ["Contornar a placa sobre o ápice melhora a fixação proximal", "Reconstruir todos os estabilizadores na fratura-luxação"],
      pitfalls: ["Comprimir uma cominuição central e encurtar a incisura", "Ignorar o coronoide/cabeça do rádio na fratura-luxação"],
    },
    {
      n: 5,
      title: "Conservador funcional no idoso de baixa demanda",
      detail:
        "Imobilizar brevemente em tipoia com o cotovelo em cerca de 90° e iniciar mobilização ativa conforme a dor, sem reabilitação formal intensiva. Aceita-se alta taxa de não união fibrosa, geralmente indolor e com arco funcional preservado. Reservar cirurgia para os poucos casos sintomáticos.",
      figureId: "fratura-olecrano:conservador",
      tips: ["Mobilização precoce evita rigidez sem comprometer o resultado funcional", "Ajustar expectativas: união fibrosa é comum e costuma ser funcional"],
      pitfalls: ["Imobilização prolongada e rígida, que gera rigidez", "Indicar cirurgia de rotina apenas pela imagem de não união assintomática"],
    },
  ],
  postop: {
    immobilization:
      "Após fixação estável, imobilização curta em tipoia por poucos dias, priorizando mobilização precoce protegida. No tratamento conservador, tipoia breve com o cotovelo próximo a 90° e mobilização conforme a dor.",
    weightBearing:
      "Sem carga, apoio ou empurrar-se com o membro operado nas primeiras semanas. Resistência progressiva do tríceps apenas após sinais de consolidação.",
    rehab: [
      {
        window: "0-2 semanas",
        weightBearing: "Sem carga",
        focus: "Controle de edema e dor; movimento ativo-assistido suave conforme estabilidade do reparo.",
      },
      {
        window: "2-6 semanas",
        weightBearing: "Sem carga",
        focus: "Progressão da amplitude ativa de flexoextensão e prono-supinação; evitar extensão resistida.",
      },
      {
        window: "6-12 semanas",
        weightBearing: "Progressiva conforme consolidação",
        focus: "Fortalecimento gradual do tríceps e ganho de amplitude terminal.",
      },
      {
        window: "> 12 semanas",
        weightBearing: "Plena após consolidação",
        focus: "Retorno funcional; fortalecimento avançado e atividades de maior demanda.",
      },
    ],
    followup:
      "Acompanhamento clínico e radiográfico até a consolidação, verificando congruência articular e posição do implante. A irritação sintomática por material, sobretudo após banda de tensão, é a indicação mais comum de reoperação para retirada.",
  },
  complications: [
    {
      name: "Irritação e proeminência do implante",
      detail:
        "Complicação mais frequente, sobretudo após banda de tensão, pela pele fina sobre o olecrano; principal causa de reoperação para retirada de material.",
      prevention: "Enterrar as pontas dos fios sob o tríceps; usar implantes de baixo perfil e posicioná-los adequadamente.",
    },
    {
      name: "Perda de redução e diástase",
      detail:
        "Falha do construto quando a banda de tensão é usada em traços oblíquos ou cominutivos, ou com fios mal ancorados.",
      prevention: "Escolher placa para cominuição/obliquidade; engatar a cortical anterior com os fios na banda de tensão.",
    },
    {
      name: "Não união",
      detail:
        "Incomum após fixação estável; frequente e habitualmente funcional (união fibrosa) no tratamento conservador do idoso.",
      prevention: "Fixação estável quando indicada; no conservador, ajustar expectativas e reservar cirurgia para casos sintomáticos.",
    },
    {
      name: "Rigidez e artrose pós-traumática",
      detail:
        "Perda de amplitude por imobilização prolongada; artrose por degrau articular residual na incisura troclear.",
      prevention: "Redução anatômica da superfície articular e mobilização precoce.",
    },
    {
      name: "Lesão do nervo ulnar",
      detail: "Risco na dissecção medial, em fraturas com extensão medial e na passagem de fios e parafusos.",
      prevention: "Identificar e proteger o nervo ulnar; controlar a direção e o comprimento dos implantes.",
    },
  ],
  evidence: [
    {
      id: "duckworth-2017-rct-tbw-placa",
      claim:
        "Em ensaio randomizado com fraturas simples desviadas do olécrano, banda de tensão e placa tiveram desfecho funcional (DASH em 1 ano) semelhante, mas a banda de tensão teve mais complicações, sobretudo retirada de material.",
      takeaway:
        "Na transversa simples, banda de tensão e placa equivalem-se em função; a maior morbidade da banda de tensão vem da irritação por implante.",
      level: "I",
      studyType: "Ensaio clínico randomizado",
      era: "classico",
      citation: {
        authors: "Duckworth AD, Clement ND, White TO, Court-Brown CM, McQueen MM",
        title: "Plate Versus Tension-Band Wire Fixation for Olecranon Fractures: A Prospective Randomized Trial.",
        journal: "J Bone Joint Surg Am",
        year: 2017,
        pmid: "28763412",
        doi: "10.2106/JBJS.16.00773",
      },
    },
    {
      id: "midtgaard-2025-rct-noninferioridade",
      claim:
        "Ensaio randomizado de não inferioridade com 200 pacientes mostrou que a banda de tensão não foi inferior à placa contornada para fraturas de 2 partes e multifragmentadas (QuickDASH em 12 meses), com cirurgia mais rápida, porém mais reoperações (retirada de material sintomático).",
      takeaway:
        "A banda de tensão pode ser não inferior à placa mesmo em padrões multifragmentados selecionados, ao custo de mais reoperações por irritação de implante.",
      level: "I",
      studyType: "Ensaio clínico randomizado de não inferioridade",
      era: "atual",
      citation: {
        authors: "Midtgaard KS, Flugsrud GB, Jonsson KB, et al.",
        title:
          "Tension Band Wiring Versus Precontoured Plate Fixation for 2-Part and Multifragmented Olecranon Fractures: A Prospective Randomized Trial.",
        journal: "J Bone Joint Surg Am",
        year: 2025,
        pmid: "40644505",
        doi: "10.2106/JBJS.24.01461",
      },
    },
    {
      id: "ren-2016-metanalise",
      claim:
        "Metanálise (1 ECR e 12 estudos observacionais) não encontrou diferença em DASH, amplitude, tempo cirúrgico ou sangramento entre banda de tensão e placa, mas observou menos complicações com a placa.",
      takeaway:
        "Os desfechos funcionais se equivalem; o menor índice de complicações favorece a placa na síntese dos estudos disponíveis.",
      level: "III",
      studyType: "Revisão sistemática e metanálise",
      era: "atual",
      citation: {
        authors: "Ren YM, Qiao HY, Wei ZJ, et al.",
        title:
          "Efficacy and safety of tension band wiring versus plate fixation in olecranon fractures: a systematic review and meta-analysis.",
        journal: "J Orthop Surg Res",
        year: 2016,
        pmid: "27842568",
        doi: "10.1186/s13018-016-0465-z",
      },
    },
    {
      id: "gallucci-2014-conservador-idoso",
      claim:
        "Coorte de 28 idosos (idade média 82 anos) com fratura desviada do olécrano tratada de forma não operatória funcional obteve boa amplitude e alta satisfação, apesar de 22 de 28 evoluírem com não união, sem necessidade de cirurgia.",
      takeaway:
        "No idoso de baixa demanda, o tratamento funcional gera bons resultados clínicos apesar da alta taxa de não união, que costuma ser assintomática.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "classico",
      citation: {
        authors: "Gallucci GL, Piuzzi NS, Slullitel PAI, et al.",
        title: "Non-surgical functional treatment for displaced olecranon fractures in the elderly.",
        journal: "Bone Joint J",
        year: 2014,
        pmid: "24692623",
        doi: "10.1302/0301-620X.96B4.33339",
      },
    },
    {
      id: "alvara-2020-revisao-conservador",
      claim:
        "Revisão sistemática do tratamento não operatório de fraturas desviadas do olécrano em pacientes acima de 70 anos encontrou DASH médio de 16,9 e arco médio de 138°, com 92% de bons resultados, apesar de apenas 25% de união radiográfica.",
      takeaway:
        "Confirma que o manejo conservador é efetivo em idosos, com boa função e satisfação apesar da baixa taxa de consolidação óssea.",
      level: "IV",
      studyType: "Revisão sistemática de estudos observacionais",
      era: "atual",
      citation: {
        authors: "Alvara CA, Biedron G, Dunn JC",
        title: "Nonoperative Management of Olecranon Fractures in Elderly Patients: A Systematic Review.",
        journal: "Hand (N Y)",
        year: 2020,
        pmid: "35815367",
        doi: "10.1177/1558944720944261",
      },
    },
  ],
  pearls: [
    "A extensão ativa contra a gravidade testa o aparelho extensor: sua perda define a fratura desviada como cirúrgica na maioria dos casos.",
    "Banda de tensão brilha na transversa simples porque converte a tração do tríceps em compressão articular na flexão.",
    "Traço oblíquo distal ou cominuição pedem placa: nessas geometrias a banda de tensão colapsa e diastasa.",
    "No idoso de baixa demanda, a não união costuma ser fibrosa, indolor e funcional — evitar cirurgia de rotina.",
    "Enterrar as pontas dos fios sob o tríceps reduz a irritação, a complicação mais comum e a principal causa de reoperação.",
  ],
  pitfalls: [
    "Aplicar banda de tensão em fratura oblíqua ou cominutiva e obter diástase e falha do construto.",
    "Aceitar degrau articular na incisura troclear e favorecer artrose pós-traumática.",
    "Deixar implantes proeminentes sobre a pele fina do olecrano.",
    "Imobilizar por tempo prolongado e provocar rigidez do cotovelo.",
    "Ignorar o coronoide e a cabeça do rádio na fratura-luxação (Mayo III).",
  ],
  figures: [
    {
      id: "fratura-olecrano:anatomia",
      caption: "Ulna proximal em perfil: olécrano, incisura troclear, coronoide e inserção do tríceps.",
      alt: "Anatomia da ulna proximal e do aparelho extensor do cotovelo",
      kind: "diagram",
    },
    {
      id: "fratura-olecrano:mecanismo",
      caption: "Mecanismo extensor: a tração do tríceps afasta proximalmente o fragmento do olécrano.",
      alt: "Deslocamento do fragmento proximal pela tração do tríceps",
      kind: "diagram",
    },
    {
      id: "fratura-olecrano:mayo",
      variant: "I",
      caption: "Mayo I: fratura não desviada, com aparelho extensor competente.",
      alt: "Classificação de Mayo tipo I da fratura do olécrano",
      kind: "diagram",
    },
    {
      id: "fratura-olecrano:mayo",
      variant: "IIA",
      caption: "Mayo IIA: desviada estável e não cominutiva — indicação clássica de banda de tensão.",
      alt: "Classificação de Mayo tipo IIA da fratura do olécrano",
      kind: "diagram",
    },
    {
      id: "fratura-olecrano:mayo",
      variant: "IIB",
      caption: "Mayo IIB: desviada com cominuição — preferência por placa dorsal contornada.",
      alt: "Classificação de Mayo tipo IIB da fratura do olécrano",
      kind: "diagram",
    },
    {
      id: "fratura-olecrano:mayo",
      variant: "III",
      caption: "Mayo III: instável, associada a fratura-luxação do cotovelo.",
      alt: "Classificação de Mayo tipo III da fratura do olécrano",
      kind: "diagram",
    },
    {
      id: "fratura-olecrano:schatzker",
      variant: "transversa",
      caption: "Padrão transverso de Schatzker: geometria ideal para banda de tensão.",
      alt: "Traço transverso da fratura do olécrano",
      kind: "diagram",
    },
    {
      id: "fratura-olecrano:schatzker",
      variant: "obliqua",
      caption: "Padrão oblíquo: a compressão axial da banda de tensão é menos previsível — preferir placa.",
      alt: "Traço oblíquo da fratura do olécrano",
      kind: "diagram",
    },
    {
      id: "fratura-olecrano:schatzker",
      variant: "cominutiva",
      caption: "Padrão cominutivo: fixação em ponte com placa dorsal contornada.",
      alt: "Fratura cominutiva do olécrano",
      kind: "diagram",
    },
    {
      id: "fratura-olecrano:banda-tensao",
      caption:
        "Banda de tensão: dois fios de Kirschner e cerclagem em oito convertem a distração do tríceps em compressão articular.",
      alt: "Técnica de banda de tensão do olécrano",
      kind: "diagram",
    },
    {
      id: "fratura-olecrano:placa",
      caption: "Placa dorsal anatômica contornando o ápice do olécrano, com parafusos multiplanares.",
      alt: "Fixação com placa dorsal da fratura do olécrano",
      kind: "diagram",
    },
    {
      id: "fratura-olecrano:conservador",
      caption:
        "Tratamento não operatório funcional no idoso de baixa demanda: tipoia curta e mobilização precoce, com união fibrosa frequente.",
      alt: "Tratamento conservador da fratura do olécrano no idoso",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia. 6ª ed. 2025.",
      "Barros Filho TEP, Lech O. Exame Físico em Ortopedia. 3ª ed.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais (line-art), não reprodução de imagens protegidas.",
    figureReference:
      "Rockwood and Green's Fractures in Adults, 10a ed. (2024)",
  },
});
