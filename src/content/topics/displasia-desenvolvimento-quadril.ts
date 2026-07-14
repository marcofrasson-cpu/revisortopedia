import { defineTopic } from "../../types/topic";

/* Displasia do desenvolvimento do quadril (DDQ) — tópico de ortopedia pediátrica.
   Escopo: espectro displasia→luxação; fatores de risco; Ortolani/Barlow no
   recém-nascido; ultrassom de Graf (até ~4–6 m) e radiografia após ossificação;
   suspensório de Pavlik (1ª linha < 6 m); redução fechada/aberta + gesso;
   osteotomias femoral/pélvica; necrose avascular.
   Todas as figuras são prefixadas por "displasia-desenvolvimento-quadril:".
   Evidência verificada no PubMed (DOIs reais citados; Lerman 2001 sem DOI atribuído,
   citado por PMID). Bibliografia oficial TEOT 2026 de ortopedia pediátrica. */
export const topic = defineTopic({
  id: "peds-quadril-ddq",
  slug: "displasia-desenvolvimento-quadril",
  regionId: "ortopedia-pediatrica",
  bone: "Quadril (criança)",
  injury: "Displasia do desenvolvimento (DDQ)",
  title: "Displasia do desenvolvimento do quadril",
  subtitle:
    "Espectro do quadril imaturo — do acetábulo raso à luxação. Diagnóstico precoce e redução concêntrica atempada determinam o quadril de adulto.",
  laterality: null,
  status: "complete",

  overview:
    "A displasia do desenvolvimento do quadril (DDQ) é um espectro de anormalidades da relação entre a cabeça femoral e o acetábulo, que vai do acetábulo apenas raso (displasia) à subluxação e à luxação franca. O termo \"do desenvolvimento\" substituiu \"congênita\" justamente porque a condição é dinâmica: pode surgir, agravar-se ou resolver-se ao longo dos primeiros meses, e um exame normal ao nascer não a exclui em definitivo.\n\nA lógica de todo o tratamento é uma só: um acetábulo só amadurece e se aprofunda se a cabeça femoral estiver concentricamente reduzida dentro dele. Quanto mais cedo se obtém e se mantém essa redução, maior o potencial de remodelação — e menor a necessidade de cirurgia. Por isso a conduta é fortemente dependente da idade: rastreio clínico neonatal (Ortolani e Barlow), suspensório de Pavlik como 1ª linha abaixo de ~6 meses, redução fechada com gesso entre ~6 e 18 meses e reduções abertas com osteotomias femoral e/ou pélvica nas crianças maiores ou com displasia residual.\n\nO grande adversário do tratamento é a necrose avascular da cabeça femoral — iatrogênica, ligada ao posicionamento em abdução/extensão forçada e à redução sob tensão. Todo o cuidado técnico (posição humana, zona segura, tenotomia dos adutores, confirmação da redução concêntrica) existe para obter estabilidade sem comprometer a vascularização.",

  keyFacts: [
    { label: "Definição", value: "Espectro: displasia (teto raso) → subluxação → luxação" },
    { label: "Fatores de risco", value: "Sexo feminino, apresentação pélvica, história familiar, primogenitura, oligoidrâmnio" },
    { label: "Exame neonatal", value: "Ortolani (reduz) e Barlow (luxa) — um quadril por vez" },
    { label: "Imagem < 4–6 m", value: "Ultrassom de Graf (α ≥ 60° = normal)" },
    { label: "Imagem > 4–6 m", value: "Radiografia AP (Hilgenreiner, Perkin, Shenton, índice acetabular)" },
    { label: "1ª linha (< 6 m)", value: "Suspensório de Pavlik (flexão + abdução na zona segura)" },
    { label: "6–18 m", value: "Redução fechada + gesso pelvipodálico (± tenotomia dos adutores)" },
    { label: "Complicação temida", value: "Necrose avascular (iatrogênica, por abdução forçada/redução sob tensão)" },
  ],

  anatomy: {
    text:
      "O quadril imaturo é, em grande parte, cartilaginoso. O acetábulo é formado pelo ílio, ísquio e púbis, que convergem na cartilagem trirradiada — a placa de crescimento em Y responsável pelo aprofundamento acetabular até a puberdade. A borda do acetábulo é completada pelo labro (fibrocartilagem), estrutura-chave tanto para a estabilidade quanto para os obstáculos à redução.\n\nA cabeça femoral é inicialmente toda cartilaginosa; o núcleo de ossificação surge por volta dos 4–6 meses e só então torna a radiografia plenamente informativa (antes disso, o ultrassom é superior). A fise (placa de crescimento) cervicocefálica e a vascularização retinacular da cabeça explicam por que a necrose avascular é a complicação mais temida: a artéria circunflexa femoral medial e seus ramos são vulneráveis à compressão e ao estiramento quando o quadril é forçado em abdução e extensão.\n\nNa luxação, vários elementos podem impedir a redução concêntrica (obstáculos): o labro invertido/evertido, o pulvinar (tecido fibrogorduroso no fundo do acetábulo), o ligamento redondo hipertrofiado, o ligamento acetabular transverso e a cápsula constrita em ampulheta pelo tendão do psoas. Reconhecê-los é essencial: a persistência de um obstáculo é o que converte uma redução fechada malsucedida em indicação de redução aberta.",
    figureIds: ["displasia-desenvolvimento-quadril:anatomia"],
  },

  classification: [
    {
      id: "espectro-clinico",
      name: "Espectro clínico-anatômico",
      basis: "Relação entre a cabeça femoral e o acetábulo",
      note:
        "Mais útil pensar em espectro do que em categorias estanques. Selecione um estágio para ver o padrão.",
      types: [
        {
          code: "N",
          label: "Normal",
          description:
            "Cabeça concentricamente reduzida, teto acetabular côncavo e bem formado. Ortolani/Barlow negativos.",
          figureId: "displasia-desenvolvimento-quadril:espectro",
          figureVariant: "normal",
        },
        {
          code: "D",
          label: "Displasia",
          description:
            "Teto acetabular raso/oblíquo (índice acetabular aumentado), mas a cabeça ainda está dentro do acetábulo. Pode ser subclínica e só evidente à imagem.",
          figureId: "displasia-desenvolvimento-quadril:espectro",
          figureVariant: "displasia",
        },
        {
          code: "S",
          label: "Subluxação",
          description:
            "Cabeça descentralizada, com contato parcial com o acetábulo. Barlow pode ser positivo (quadril luxável).",
          figureId: "displasia-desenvolvimento-quadril:espectro",
          figureVariant: "subluxacao",
        },
        {
          code: "L",
          label: "Luxação",
          description:
            "Cabeça totalmente fora do acetábulo, tende a ascender e a criar obstáculos à redução. Ortolani positivo se ainda redutível; irredutível quando teardrop/labro se interpõem.",
          figureId: "displasia-desenvolvimento-quadril:espectro",
          figureVariant: "luxacao",
        },
      ],
    },
    {
      id: "graf",
      name: "Classificação ultrassonográfica de Graf",
      basis: "Ângulos α (teto ósseo) e β (teto cartilaginoso) na USG coronal",
      note:
        "Método de escolha antes da ossificação (~4–6 m). O ângulo α reflete a maturidade do teto ósseo; β, a cobertura cartilaginosa. Selecione um tipo.",
      types: [
        {
          code: "I",
          label: "α ≥ 60° — maduro",
          description:
            "Quadril normal/maduro: teto ósseo bem formado, cobertura adequada da cabeça. Não requer tratamento.",
          figureId: "displasia-desenvolvimento-quadril:graf",
          figureVariant: "I",
        },
        {
          code: "IIa",
          label: "α 50–59° (< 3 m) — imaturo fisiológico",
          description:
            "Retardo de ossificação fisiológico no lactente jovem; frequentemente amadurece sozinho. Vigilância ultrassonográfica; tratar se não evoluir (tipo IIb).",
          figureId: "displasia-desenvolvimento-quadril:graf",
          figureVariant: "IIa",
        },
        {
          code: "III",
          label: "Cabeça luxada, labro evertido",
          description:
            "Teto ósseo deficiente com a cabeça descentralizada e o labro empurrado para cima. Indica tratamento ativo.",
          figureId: "displasia-desenvolvimento-quadril:graf",
          figureVariant: "III",
        },
        {
          code: "IV",
          label: "Luxação com labro interposto",
          description:
            "Cabeça francamente luxada com o labro rebatido para dentro (interposto). Alto risco de obstáculo à redução fechada.",
          figureId: "displasia-desenvolvimento-quadril:graf",
          figureVariant: "IV",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Falha do tratamento conservador (Pavlik/órtese) em manter redução concêntrica — sobretudo com labro invertido ou coverage muito baixo à USG.",
      "Diagnóstico tardio (tipicamente > 6 meses) ou quadril irredutível por manobra fechada.",
      "Redução fechada instável ou não concêntrica sob artrografia → converter para redução aberta.",
      "Displasia acetabular residual significativa em criança maior (índice acetabular persistentemente elevado, subluxação) → osteotomia pélvica.",
      "Anteversão femoral/coxa valga excessiva impedindo cobertura → osteotomia femoral varizante desrotadora (frequentemente com encurtamento).",
    ],
    nonOperative: [
      "Recém-nascido/lactente < 6 meses com quadril redutível: suspensório de Pavlik como 1ª linha (flexão ~100–110° + abdução na zona segura).",
      "Quadril Graf IIa (imaturo fisiológico) em lactente jovem: vigilância ultrassonográfica; tratar se não amadurecer.",
      "Instabilidade leve neonatal (Barlow discretamente positivo): reavaliação em 2–6 semanas antes de tratar (muitos estabilizam espontaneamente).",
      "Após falha do Pavlik ou como alternativa: órtese rígida de abdução (p. ex. von Rosen, Tübingen, calção de abdução).",
    ],
    decisionNotes:
      "A idade governa a estratégia. Abaixo de ~6 meses, com quadril redutível, o Pavlik é a 1ª linha, com metas rígidas de posição para não provocar necrose. Se o Pavlik falha (cabeça não reduz ou não se mantém), abandoná-lo precocemente — insistir em um quadril luxado dentro do suspensório (\"Pavlik harness disease\") deforma ainda mais o acetábulo posterior. Entre ~6 e 18 meses, a redução fechada sob anestesia com artrografia e gesso pelvipodálico na posição humana é o padrão; a tenotomia dos adutores amplia a zona segura. Acima de ~18 meses, ou quando a redução fechada é não concêntrica/instável, indica-se redução aberta, associando osteotomia femoral e/ou pélvica conforme a idade e a displasia residual. Em toda decisão, o par redução concêntrica × preservação da vascularização é o que separa um bom resultado de uma necrose avascular.",
  },

  approaches: [
    {
      id: "pavlik",
      name: "Suspensório de Pavlik (1ª linha < 6 m)",
      indication:
        "Lactente < 6 meses com quadril redutível (Ortolani positivo) ou displasia/subluxação. Dinâmico: permite movimento dentro de uma faixa segura.",
      interval:
        "Mecanismo: faixa torácica + tirantes anteriores mantêm flexão ~100–110°; tirantes posteriores limitam a adução, deixando o quadril repousar em abdução na zona segura e reduzir-se por gravidade.",
      atRisk: [
        "Necrose avascular por abdução excessiva/forçada",
        "Paralisia do nervo femoral por hiperflexão (reversível ao afrouxar)",
        "\"Pavlik harness disease\": erosão do acetábulo posterior se mantido com o quadril luxado",
      ],
      figureId: "displasia-desenvolvimento-quadril:pavlik",
    },
    {
      id: "orteses-rigidas",
      name: "Órteses rígidas de abdução",
      indication:
        "Alternativa ou sequência ao Pavlik (falha, não adesão) — von Rosen, Tübingen, calção/abdução fixa. Posicionamento mais controlado e estático.",
      interval:
        "Mantêm abdução e flexão fixas fora da amplitude de risco; usadas quando o controle dinâmico do Pavlik é insuficiente ou a família não adere.",
      atRisk: [
        "Necrose avascular se a abdução for excessiva",
        "Lesões cutâneas por pressão",
      ],
    },
    {
      id: "reducao-fechada",
      name: "Redução fechada + gesso pelvipodálico",
      indication:
        "Tipicamente 6–18 meses, ou falha do Pavlik. Sob anestesia geral, com artrografia para confirmar redução concêntrica e medir a zona segura.",
      interval:
        "Manobra suave de flexão + abdução (posição humana); tenotomia percutânea dos adutores se a abdução necessária ultrapassa a zona segura. Imobilização em gesso e confirmação por TC/RM.",
      atRisk: [
        "Necrose avascular por redução sob tensão / abdução forçada",
        "Reluxação se a redução não for concêntrica ou estável",
      ],
      figureId: "displasia-desenvolvimento-quadril:reducao-gesso",
    },
    {
      id: "reducao-aberta",
      name: "Redução aberta (via medial ou anterolateral)",
      indication:
        "Quadril irredutível ou redução fechada não concêntrica/instável; crianças maiores. Remove os obstáculos à redução.",
      interval:
        "Via medial (Ludloff) no lactente pequeno — acesso direto aos obstáculos mediais, porém com risco vascular; via anterolateral de Smith-Petersen na criança maior, permitindo capsulorrafia e osteotomias associadas.",
      atRisk: [
        "Ramo ascendente da a. circunflexa femoral medial (via medial)",
        "Nervo cutâneo femoral lateral (via anterior)",
        "Necrose avascular",
      ],
    },
    {
      id: "osteotomias",
      name: "Osteotomias femoral e/ou pélvica",
      indication:
        "Displasia residual, criança maior, anteversão/coxa valga excessivas ou cobertura acetabular insuficiente após redução.",
      interval:
        "Femoral varizante desrotadora (± encurtamento) reduz a pressão e melhora a orientação da cabeça; pélvicas de reorientação (Salter, Pemberton, Dega) ou de salvamento melhoram a cobertura do teto acetabular.",
      atRisk: [
        "Necrose avascular",
        "Hipercorreção / rigidez",
        "Discrepância de comprimento (encurtamento femoral)",
      ],
      figureId: "displasia-desenvolvimento-quadril:osteotomias",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Exame neonatal e estratificação de risco",
      detail:
        "Em todo recém-nascido, examinar um quadril por vez com quadris e joelhos a 90°. Ortolani reduz uma cabeça luxada (abdução + elevação do trocânter → \"clunk\" de entrada); Barlow luxa um quadril luxável (adução + pressão posterior). Registrar fatores de risco: sexo feminino, apresentação pélvica, história familiar, primogenitura e oligoidrâmnio. Após ~3 meses, o sinal de Galeazzi (encurtamento aparente da coxa) e a limitação da abdução tornam-se mais informativos que Ortolani/Barlow.",
      figureId: "displasia-desenvolvimento-quadril:manobras",
      figureVariant: "ortolani",
      tips: [
        "Um quadril de cada vez, criança relaxada; manobras suaves.",
        "Encaminhe para USG os fatores de risco mesmo com exame normal (bilateral pode enganar).",
      ],
      pitfalls: [
        "Confiar em cliques finos (\"hip clicks\") sem \"clunk\" verdadeiro.",
        "Assumir que exame normal ao nascer exclui DDQ — a condição é do desenvolvimento.",
      ],
    },
    {
      n: 2,
      title: "Imagem conforme a idade (Graf × radiografia)",
      detail:
        "Antes da ossificação da cabeça (~4–6 meses), o ultrassom de Graf é o método de escolha: mede-se o ângulo α (teto ósseo; ≥ 60° = tipo I/normal) e β (teto cartilaginoso). O momento ideal é após ~4–6 semanas, para não sobretratar a instabilidade fisiológica neonatal. Após surgir o núcleo de ossificação, a radiografia AP passa a guiar: linha de Hilgenreiner (horizontal pelas cartilagens trirradiadas), linha de Perkin (vertical pela borda lateral do acetábulo), arco de Shenton (contínuo quando reduzido; roto na luxação) e índice acetabular (aumentado na displasia).",
      figureId: "displasia-desenvolvimento-quadril:graf",
      figureVariant: "I",
      tips: [
        "USG muito precoce sobrediagnostica imaturidade fisiológica — respeite as ~4–6 semanas.",
        "Cabeça normal projeta-se no quadrante ínfero-medial de Ombrédanne.",
      ],
      pitfalls: [
        "Pedir radiografia útil antes do núcleo de ossificação (cabeça cartilaginosa é radiotransparente).",
        "Interpretar o índice acetabular sem posicionamento neutro da bacia.",
      ],
    },
    {
      n: 3,
      title: "Suspensório de Pavlik (< 6 m) e vigilância da resposta",
      detail:
        "No lactente < 6 meses com quadril redutível, aplicar o Pavlik em flexão ~100–110° e deixar a abdução repousar na zona segura (sem forçar). Reavaliar clínica e ultrassonograficamente em cerca de 1–3 semanas: a cabeça deve estar reduzida e o α, melhorando. Se aos ~3 semanas a cabeça permanece luxada, abandonar o Pavlik para não erodir o acetábulo posterior (\"Pavlik harness disease\") e escalar para órtese rígida ou redução.",
      figureId: "displasia-desenvolvimento-quadril:pavlik",
      tips: [
        "Ensine os pais a manter a posição e a não afrouxar/apertar por conta própria.",
        "Cheque a extensão ativa do joelho/quadril: hiperflexão pode causar paralisia femoral transitória.",
      ],
      pitfalls: [
        "Insistir no Pavlik com quadril persistentemente luxado.",
        "Abdução forçada dentro do suspensório → risco de necrose avascular.",
      ],
    },
    {
      n: 4,
      title: "Redução fechada + artrografia + gesso pelvipodálico",
      detail:
        "Entre ~6 e 18 meses (ou após falha do Pavlik), realizar redução fechada sob anestesia geral com artrografia: a manobra é de flexão + abdução (posição humana), e a artrografia confirma a redução concêntrica (medindo o \"pool\" de contraste medial) e a zona segura de Ramsey. Se a abdução necessária para manter a redução ultrapassa a zona segura, realizar tenotomia percutânea dos adutores para alargá-la. Imobilizar em gesso pelvipodálico na posição humana e confirmar a redução concêntrica com TC ou RM.",
      figureId: "displasia-desenvolvimento-quadril:reducao-gesso",
      tips: [
        "Posição humana (não a posição de rã forçada) reduz o risco de necrose.",
        "Troca(s) de gesso a cada ~6 semanas; total tipicamente ~3 meses.",
      ],
      pitfalls: [
        "Gessar em abdução extrema para \"garantir\" estabilidade → necrose avascular.",
        "Aceitar redução não concêntrica (obstáculo interposto) → converter para aberta.",
      ],
    },
    {
      n: 5,
      title: "Redução aberta (quadril irredutível)",
      detail:
        "Quando a redução fechada é irredutível, não concêntrica ou instável, indica-se redução aberta para remover os obstáculos (labro invertido, pulvinar, ligamento redondo, ligamento transverso, cápsula em ampulheta pelo psoas). No lactente pequeno, a via medial (Ludloff) dá acesso direto aos obstáculos mediais; na criança maior, a via anterolateral de Smith-Petersen permite capsulorrafia e osteotomias associadas.",
      figureId: "displasia-desenvolvimento-quadril:reducao-gesso",
      tips: [
        "Libere o ligamento transverso e o pulvinar para permitir centralização real.",
        "A capsulorrafia melhora a estabilidade na via anterolateral.",
      ],
      pitfalls: [
        "Via medial na criança maior → maior risco vascular e cobertura insuficiente.",
        "Deixar o labro invertido → redução aparente, porém não concêntrica.",
      ],
    },
    {
      n: 6,
      title: "Osteotomias femoral e/ou pélvica",
      detail:
        "Para displasia residual, anteversão/coxa valga excessivas ou cobertura insuficiente, associar osteotomias. A femoral varizante desrotadora (frequentemente com encurtamento na criança maior) reorienta a cabeça e reduz a pressão sobre a fise. A pélvica de reorientação (Salter — sobre a sínfise; Pemberton/Dega — através do teto acetabular) melhora a cobertura anterolateral. Osteotomias de salvamento (Chiari, shelf) reservam-se a acetábulos não redutíveis/incongruentes.",
      figureId: "displasia-desenvolvimento-quadril:osteotomias",
      figureVariant: "pelvica",
      tips: [
        "Escolha a pélvica conforme a maturidade da cartilagem trirradiada (Salter x Pemberton/Dega).",
        "A femoral facilita a redução ao \"desrotar\" a anteversão aumentada.",
      ],
      pitfalls: [
        "Hipercorrigir a abdução/cobertura → impacto e rigidez.",
        "Ignorar a anteversão femoral e corrigir só o lado pélvico (ou vice-versa).",
      ],
    },
  ],

  postop: {
    immobilization:
      "Conservador: Pavlik ou órtese rígida em tempo integral por semanas a meses, conforme a resposta ultrassonográfica. Pós-redução (fechada ou aberta): gesso pelvipodálico na posição humana, tipicamente por ~3 meses com trocas, seguido de órtese de abdução. Pós-osteotomia: gesso pelvipodálico por ~6 semanas.",
    weightBearing:
      "No lactente e no período gessado, a marcha ainda não é um objetivo (idade pré-deambulatória ou imobilização). Após a retirada do gesso e a consolidação das osteotomias, retomada progressiva da descarga conforme a idade e a consolidação radiográfica.",
    rehab: [
      {
        window: "Fase de órtese/Pavlik",
        weightBearing: "Não aplicável (lactente)",
        focus:
          "Manter a posição segura; orientar os pais quanto a higiene, pele e adesão; reavaliação ultrassonográfica seriada da maturação acetabular.",
      },
      {
        window: "Período em gesso (pós-redução)",
        weightBearing: "Imobilizado",
        focus:
          "Cuidados com o gesso e a pele; confirmar a manutenção da redução concêntrica (TC/RM); trocas de gesso conforme protocolo.",
      },
      {
        window: "Após retirada do gesso",
        weightBearing: "Progressiva conforme idade",
        focus:
          "Transição para órtese de abdução; recuperar amplitude de movimento; estimular marcha quando apropriado; vigilância de displasia residual.",
      },
      {
        window: "Seguimento a longo prazo",
        weightBearing: "Total",
        focus:
          "Radiografias seriadas do índice acetabular e da cobertura; rastrear necrose avascular (pode manifestar-se tardiamente) e displasia residual que exija osteotomia.",
      },
    ],
    followup:
      "Seguimento clínico-radiográfico prolongado, muitas vezes até a maturidade esquelética, pois a displasia residual e a necrose avascular podem manifestar-se tardiamente. Acompanhar a maturação do índice acetabular, a cobertura da cabeça e o crescimento da fise proximal do fêmur (a lesão fisária por necrose leva a coxa magna, coxa breva e discrepância de comprimento).",
  },

  complications: [
    {
      name: "Necrose avascular da cabeça femoral (iatrogênica)",
      detail:
        "A complicação mais temida do tratamento — não da doença. Decorre de compressão/estiramento dos vasos retinaculares em abdução e extensão forçadas, ou de redução mantida sob tensão. Leva a deformidade da cabeça, coxa magna/breva e distúrbio de crescimento fisário.",
      prevention:
        "Posição humana (flexão + abdução moderada dentro da zona segura), evitar abdução extrema, tenotomia dos adutores quando necessário e confirmar redução concêntrica sem tensão.",
    },
    {
      name: "Falha do tratamento com Pavlik",
      detail:
        "Incapacidade de obter/manter a redução no suspensório. Preditores incluem irredutibilidade ao exame, baixa cobertura à USG, labro acetabular invertido, bilateralidade e diagnóstico mais tardio.",
      prevention:
        "Selecionar candidatos (quadril redutível), reavaliar precocemente e abandonar o Pavlik se a cabeça não reduzir em ~3 semanas.",
    },
    {
      name: "\"Pavlik harness disease\"",
      detail:
        "Erosão e deformação da parede posterior do acetábulo pela cabeça mantida luxada dentro do suspensório, dificultando reduções futuras.",
      prevention:
        "Não persistir com o Pavlik em quadril persistentemente luxado; documentar a redução por USG.",
    },
    {
      name: "Reluxação / redução não concêntrica",
      detail:
        "Perda da redução após gesso ou redução por obstáculo interposto (labro, pulvinar, ligamento transverso), resultando em contato não concêntrico.",
      prevention:
        "Artrografia para confirmar concentricidade, tenotomia dos adutores, e conversão para redução aberta quando a fechada não é concêntrica.",
    },
    {
      name: "Displasia acetabular residual",
      detail:
        "Persistência de teto raso/oblíquo apesar da redução, sobretudo com diagnóstico/redução tardios; pode evoluir para subluxação e artrose precoce.",
      prevention:
        "Redução precoce e concêntrica; osteotomia pélvica/femoral quando o remodelamento é insuficiente.",
    },
    {
      name: "Paralisia transitória do nervo femoral",
      detail:
        "Associada à hiperflexão no suspensório de Pavlik; cursa com perda da extensão ativa do joelho.",
      prevention:
        "Evitar flexão excessiva; se ocorrer, afrouxar/retirar o suspensório — costuma reverter.",
    },
  ],

  evidence: [
    {
      id: "lerman-2001",
      claim:
        "Coorte de 93 lactentes (137 quadris) tratados com Pavlik: 26% falharam; irredutibilidade ao exame combinada a cobertura ultrassonográfica < 20% identificou um grupo que falhou uniformemente (6/6).",
      takeaway:
        "Preditores clínicos e ultrassonográficos de falha permitem selecionar quem não deve insistir no Pavlik — irredutíveis com baixa cobertura são candidatos a bracing rígido, tração ou redução.",
      level: "III",
      studyType: "Estudo de coorte retrospectivo",
      era: "classico",
      citation: {
        authors: "Lerman JA, Emans JB, Millis MB, Share J, Zurakowski D, Kasser JR",
        title:
          "Early failure of Pavlik harness treatment for developmental hip dysplasia: clinical and ultrasound predictors.",
        journal: "J Pediatr Orthop",
        year: 2001,
        pmid: "11371819",
      },
    },
    {
      id: "senaran-2007",
      claim:
        "Após falha do Pavlik, a redução realizada até os 3 meses de idade (31 quadris) não gerou nenhum caso de necrose avascular; no total, apenas 1/35 (3%) desenvolveu necrose ao seguimento.",
      takeaway:
        "Falhar o Pavlik não condena o quadril: a redução precoce (fechada na maioria) após a falha tem baixa taxa de necrose — reforça reconhecer a falha cedo e não postergar a redução.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "classico",
      citation: {
        authors: "Senaran H, Bowen JR, Harcke HT",
        title:
          "Avascular necrosis rate in early reduction after failed Pavlik harness treatment of developmental dysplasia of the hip.",
        journal: "J Pediatr Orthop B",
        year: 2007,
        pmid: "17314645",
        doi: "10.1097/01.bpb.0000248567.49089.f0",
      },
    },
    {
      id: "cochrane-2011",
      claim:
        "Revisão Cochrane de rastreio da DDQ: o ultrassom universal aumenta a taxa de tratamento sem reduzir significativamente a DDQ tardia ou a cirurgia frente ao ultrassom seletivo ou ao exame clínico; adiar o ultrassom e o splinting em quadris instáveis (não luxados) reduz tratamento sem aumentar DDQ tardia.",
      takeaway:
        "Não há evidência de alta qualidade que consagre um único programa de rastreio; o ultrassom universal sobretrata, e adiar o tratamento na instabilidade leve é razoável — base para o rastreio seletivo por fatores de risco.",
      level: "I",
      studyType: "Revisão sistemática Cochrane / metanálise",
      era: "atual",
      citation: {
        authors: "Shorter D, Hong T, Osborn DA",
        title:
          "Screening programmes for developmental dysplasia of the hip in newborn infants.",
        journal: "Cochrane Database Syst Rev",
        year: 2011,
        pmid: "21901691",
        doi: "10.1002/14651858.CD004595.pub2",
      },
    },
    {
      id: "lin-2021",
      claim:
        "Coorte de 229 quadris displásicos: labro acetabular invertido esteve presente em 10% e associou-se a 91% de falha do Pavlik (vs 27%), 86% de necessidade de redução (vs 3%) e 18% de necrose avascular (vs 0,4%).",
      takeaway:
        "O labro invertido é forte preditor de falha do Pavlik e de necrose — sua presença deve pesar contra insistir no suspensório e a favor de redução planejada.",
      level: "III",
      studyType: "Estudo de coorte retrospectivo",
      era: "atual",
      citation: {
        authors: "Lin AJ, Siddiqui AA, Lai LM, Goldstein RY",
        title:
          "An Inverted Acetabular Labrum Is Predictive of Pavlik Harness Treatment Failure in Children With Developmental Hip Dysplasia.",
        journal: "J Pediatr Orthop",
        year: 2021,
        pmid: "34267151",
        doi: "10.1097/BPO.0000000000001916",
      },
    },
    {
      id: "tomaru-2023",
      claim:
        "Reaplicação do Pavlik após falha inicial em quadris luxados (57 quadris) obteve 49% de redução com necrose avascular de apenas 3,6%; lado esquerdo e sinal de Ortolani positivo associaram-se a maior sucesso.",
      takeaway:
        "Em casos selecionados, reaplicar o Pavlik após falha é uma opção de baixo risco antes de escalar para redução cirúrgica — decisão guiada por lateralidade e redutibilidade.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors:
          "Tomaru Y, Kamegaya M, Saisu T, Murakami R, Sakuma A, Oikawa Y, et al.",
        title:
          "Reapplication of the Pavlik Harness for Treatment of Developmental Dysplasia of the Hip After Initial Pavlik Harness Failure.",
        journal: "J Pediatr Orthop",
        year: 2024,
        pmid: "37981894",
        doi: "10.1097/BPO.0000000000002572",
      },
    },
  ],

  pearls: [
    "O acetábulo só amadurece com a cabeça concentricamente reduzida — reduzir cedo é remodelar.",
    "\"Do desenvolvimento\", não \"congênita\": exame normal ao nascer não exclui a DDQ.",
    "Rastreie por fatores de risco (sexo feminino, pélvica, história familiar) com USG mesmo se o exame for normal.",
    "USG de Graf até ~4–6 meses; radiografia útil só após o núcleo de ossificação.",
    "Pavlik é 1ª linha < 6 meses, mas abandone se a cabeça não reduzir em ~3 semanas.",
    "Posição humana e zona segura protegem a vascularização — a necrose é iatrogênica.",
    "Labro invertido/baixa cobertura à USG preveem falha do Pavlik (Lin; Lerman).",
  ],

  pitfalls: [
    "Confiar em cliques finos em vez do \"clunk\" verdadeiro de Ortolani/Barlow.",
    "Insistir no Pavlik com quadril persistentemente luxado (\"Pavlik harness disease\").",
    "Gessar/imobilizar em abdução extrema para \"garantir\" estabilidade → necrose avascular.",
    "Aceitar redução não concêntrica por obstáculo interposto (labro, pulvinar, lig. transverso).",
    "Pedir radiografia antes da ossificação da cabeça (cartilagem é radiotransparente).",
    "Rastrear com USG precocíssima e sobretratar a imaturidade fisiológica (respeite ~4–6 semanas).",
  ],

  figures: [
    {
      id: "displasia-desenvolvimento-quadril:anatomia",
      caption:
        "Quadril imaturo coronal: acetábulo, cartilagem trirradiada, labro, cabeça cartilaginosa com núcleo de ossificação e fise cervicocefálica.",
      alt: "Desenho do quadril infantil mostrando acetábulo, cartilagem trirradiada em Y, labro, cabeça femoral cartilaginosa com núcleo de ossificação e a placa de crescimento do colo.",
      kind: "diagram",
    },
    {
      id: "displasia-desenvolvimento-quadril:espectro",
      caption:
        "Espectro da DDQ: normal → displasia (teto raso) → subluxação → luxação, com o índice acetabular crescente. Selecione um estágio.",
      alt: "Quatro estágios da relação cabeça-acetábulo, do quadril normal à luxação, com o teto acetabular cada vez mais oblíquo.",
      variant: "normal",
      kind: "diagram",
    },
    {
      id: "displasia-desenvolvimento-quadril:manobras",
      caption:
        "Manobras neonatais: Ortolani reduz a cabeça luxada (abdução) e Barlow luxa o quadril luxável (adução + pressão posterior). Selecione a manobra.",
      alt: "Esquema das manobras de Ortolani e Barlow com o quadril e o joelho a 90 graus e setas de redução e luxação.",
      variant: "ortolani",
      kind: "diagram",
    },
    {
      id: "displasia-desenvolvimento-quadril:graf",
      caption:
        "Ultrassom de Graf: ângulos α (teto ósseo) e β (teto cartilaginoso) definem os tipos I a IV. Selecione um tipo.",
      alt: "Esquema ultrassonográfico coronal do quadril com a linha de base do ílio, as linhas dos ângulos alfa e beta, o labro e a cabeça femoral cartilaginosa.",
      variant: "I",
      kind: "diagram",
    },
    {
      id: "displasia-desenvolvimento-quadril:radiografia",
      caption:
        "Radiografia AP da bacia: linhas de Hilgenreiner e Perkin, arco de Shenton (roto na luxação), índice acetabular e quadrantes de Ombrédanne.",
      alt: "Radiografia esquemática da bacia infantil comparando um quadril normal e um displásico, com as linhas de referência de Hilgenreiner, Perkin e Shenton.",
      kind: "diagram",
    },
    {
      id: "displasia-desenvolvimento-quadril:pavlik",
      caption:
        "Suspensório de Pavlik: faixa torácica com tirantes que mantêm flexão ~100–110° e abdução na zona segura, permitindo redução dinâmica.",
      alt: "Esquema do lactente com o suspensório de Pavlik, mostrando os tirantes anteriores e posteriores e as coxas em flexão e abdução.",
      kind: "diagram",
    },
    {
      id: "displasia-desenvolvimento-quadril:reducao-gesso",
      caption:
        "Redução fechada e gesso pelvipodálico na posição humana; zona segura de Ramsey e tenotomia dos adutores quando a abdução necessária a ultrapassa.",
      alt: "Esquema do lactente em gesso pelvipodálico com os quadris em flexão e abdução dentro da zona segura e indicação do local da tenotomia dos adutores.",
      kind: "diagram",
    },
    {
      id: "displasia-desenvolvimento-quadril:osteotomias",
      caption:
        "Osteotomias: femoral varizante desrotadora (reorienta a cabeça) e pélvica de Salter (reorienta o teto acetabular). Selecione a variante.",
      alt: "Comparação esquemática entre a osteotomia femoral varizante desrotadora com placa e a osteotomia pélvica de Salter com enxerto e fios.",
      variant: "femoral",
      kind: "diagram",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Herring JA. Tachdjian's Pediatric Orthopaedics, 6a ed. (2022).",
      "Weinstein SL, Flynn JM. Lovell and Winter's Pediatric Orthopaedics, 8a ed. (2021).",
      "Waters PM, Skaggs DL, Flynn JM. Rockwood and Wilkins' Fractures in Children, 10a ed. (2024).",
      "Hebert & Lech, Ortopedia e Traumatologia, 6a ed. (2025).",
      "Lerman JA et al., J Pediatr Orthop 2001 (PMID 11371819).",
      "Senaran H et al., J Pediatr Orthop B 2007 (DOI 10.1097/01.bpb.0000248567.49089.f0).",
      "Shorter D et al., Cochrane Database Syst Rev 2011 (DOI 10.1002/14651858.CD004595.pub2).",
      "Lin AJ et al., J Pediatr Orthop 2021 (DOI 10.1097/BPO.0000000000001916).",
      "Tomaru Y et al., J Pediatr Orthop 2024 (DOI 10.1097/BPO.0000000000002572).",
    ],
    attribution:
      "Evidência recuperada do PubMed. Ver DOIs/PMIDs citados nesta seção.",
    figureReference: "Rockwood and Wilkins' Fractures in Children, 10a ed. (2024)",
  },
});
