import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-punho-carpo-instabilidade-carpo",
  slug: "instabilidade-carpo",
  kind: "condicao",
  regionId: "membro-superior",
  bone: "Punho",
  injury: "Instabilidade ligamentar do carpo",
  title: "Instabilidade do carpo",
  subtitle:
    "Reconhecer e tratar a dissociação escafolunar e lunopiramidal a partir da sequência de lesão de Mayfield, do alinhamento em DISI/VISI e do estadiamento de Garcia-Elias.",
  laterality: null,
  status: "complete",
  overview:
    "A instabilidade do carpo resulta da falha dos ligamentos interósseos que sincronizam a fileira proximal — o \"segmento intercalado\" sem inserções tendíneas próprias. As duas formas dissociativas mais relevantes são a dissociação escafolunar (SL), a mais comum, e a lunopiramidal (LP). Sem o freio do ligamento escafolunar, o escafoide flexiona e o semilunar segue o piramidal em extensão, produzindo o padrão DISI (dorsal intercalated segment instability). Na lesão lunopiramidal, o semilunar acompanha o escafoide em flexão e surge o padrão VISI (volar intercalated segment instability).\n\nO diagnóstico começa pela história de queda com o punho em extensão e desvio ulnar, dor dorsorradial (SL) ou ulnar (LP) e testes provocativos: manobra de deslocamento do escafoide de Watson para o SL e ballottement de Reagan para o LP. A imagem confirma diástase (gap), sinal do anel cortical, ângulo escafolunar aumentado e báscula do semilunar; incidências sob estresse revelam instabilidade dinâmica. O tratamento é guiado pelo estadiamento de Garcia-Elias — reparabilidade do ligamento, redutibilidade do desalinhamento e integridade da cartilagem — que separa reparo direto, reconstrução ligamentar e procedimentos de salvamento antes que se instale o colapso avançado do carpo (SLAC).",
  keyFacts: [
    { label: "Mais comum", value: "Dissociação escafolunar (SL)" },
    { label: "Mecanismo", value: "Extensão, desvio ulnar e supinação intercarpal" },
    { label: "Sequência", value: "Perilunar progressiva de Mayfield (SL → capitolunar → LP → luxação)" },
    { label: "Deformidade", value: "DISI na lesão SL; VISI na lesão LP" },
    { label: "Imagem-chave", value: "Gap SL > 3 mm, sinal do anel, ângulo SL > 60–70°" },
    { label: "Estadiamento", value: "Garcia-Elias I–VI orienta reparo, reconstrução ou salvamento" },
  ],
  anatomy: {
    text:
      "A fileira proximal do carpo (escafoide, semilunar e piramidal) não recebe inserções tendíneas diretas e comporta-se como um segmento intercalado entre o rádio e a fileira distal. Sua estabilidade depende dos ligamentos interósseos escafolunar e lunopiramidal, complementados por ligamentos extrínsecos palmares e dorsais. O ligamento escafolunar tem forma de ferradura, e sua banda dorsal — mais espessa e resistente — é o principal restritor da rotação; sua secção é a que mais altera o alinhamento. No ligamento lunopiramidal, a banda palmar é a mais importante.\n\nO escafoide tende à flexão pela sua orientação oblíqua e pela carga através da articulação escafotrapézio-trapezoide; o semilunar e o piramidal, ao contrário, tendem à extensão. O ligamento escafolunar íntegro acopla esses momentos opostos. Quando ele falha, o escafoide flexiona e o semilunar báscula em extensão junto ao piramidal (DISI). Quando falha o ligamento lunopiramidal, o semilunar acompanha o escafoide em flexão (VISI). A compreensão dessa mecânica de acoplamento explica tanto os sinais radiográficos quanto a lógica de cada reconstrução.",
    figureIds: [
      "instabilidade-carpo:anatomia",
      "instabilidade-carpo:disi-visi",
    ],
  },
  classification: [
    {
      id: "mayfield",
      name: "Instabilidade perilunar progressiva de Mayfield",
      basis: "Sequência de disrupção ligamentar ao redor do semilunar, do radial ao ulnar.",
      note:
        "Descrita em estudo cadavérico clássico: a lesão avança de forma ordenada e ajuda a entender por que a dissociação SL é o primeiro elo de um espectro que termina na luxação do semilunar.",
      types: [
        {
          code: "I",
          label: "Estágio I — escafolunar",
          description:
            "Ruptura do ligamento escafolunar com dissociação SL e rotação do escafoide; menor grau de instabilidade carpal.",
          figureId: "instabilidade-carpo:mayfield",
          figureVariant: "i",
        },
        {
          code: "II",
          label: "Estágio II — capitolunar",
          description:
            "Extensão da lesão pelo espaço de Poirier, com luxação capitolunar (perilunar) do capitato em relação ao semilunar.",
          figureId: "instabilidade-carpo:mayfield",
          figureVariant: "ii",
        },
        {
          code: "III",
          label: "Estágio III — lunopiramidal",
          description:
            "Acometimento do ligamento lunopiramidal, completando a dissociação da fileira proximal ao redor do semilunar.",
          figureId: "instabilidade-carpo:mayfield",
          figureVariant: "iii",
        },
        {
          code: "IV",
          label: "Estágio IV — luxação do semilunar",
          description:
            "Falha dos ligamentos radiossemilunares dorsais e báscula/luxação palmar do semilunar; maior grau de instabilidade.",
          figureId: "instabilidade-carpo:mayfield",
          figureVariant: "iv",
        },
      ],
    },
    {
      id: "garcia-elias",
      name: "Estadiamento de Garcia-Elias da dissociação escafolunar",
      basis: "Reparabilidade do ligamento, redutibilidade do desalinhamento e integridade da cartilagem.",
      note:
        "Responde a seis perguntas práticas que definem a conduta: existe coto reparável? A deformidade é dinâmica ou estática? É redutível? A cartilagem está preservada?",
      types: [
        {
          code: "I",
          label: "I — parcial / predinâmica",
          description:
            "Lesão parcial do ligamento escafolunar, sem desalinhamento; radiografias estáticas normais. Favorece reparo/consolidação.",
          figureId: "instabilidade-carpo:garcia-elias",
        },
        {
          code: "II",
          label: "II — completa reparável, dinâmica",
          description:
            "Ruptura completa com coto reparável; instabilidade dinâmica (aparece sob estresse). Reparo direto é viável.",
          figureId: "instabilidade-carpo:garcia-elias",
        },
        {
          code: "III",
          label: "III — estática redutível",
          description:
            "Desalinhamento estático porém redutível, ligamento não reparável; candidato a reconstrução ligamentar.",
          figureId: "instabilidade-carpo:garcia-elias",
        },
        {
          code: "IV",
          label: "IV — estática irredutível, cartilagem preservada",
          description:
            "Desalinhamento fixo mas ainda com cartilagem normal; exige liberação e reconstrução mais robusta.",
          figureId: "instabilidade-carpo:garcia-elias",
        },
        {
          code: "V",
          label: "V — má-redução, cartilagem ainda utilizável",
          description:
            "Alterações articulares iniciais localizadas com superfície ainda aproveitável em parte; conduta individualizada.",
          figureId: "instabilidade-carpo:garcia-elias",
        },
        {
          code: "VI",
          label: "VI — artrose (SLAC)",
          description:
            "Colapso avançado do carpo por dissociação escafolunar; indica procedimentos de salvamento, não reconstrução ligamentar.",
          figureId: "instabilidade-carpo:garcia-elias",
        },
      ],
    },
    {
      id: "padrao-deformidade",
      name: "Padrão de desalinhamento intercalado",
      basis: "Direção da báscula do semilunar no perfil e ângulo escafolunar.",
      types: [
        {
          code: "DISI",
          label: "DISI — dorsiflexão do semilunar",
          description:
            "Semilunar em extensão e escafoide em flexão; padrão típico da dissociação escafolunar. Ângulo SL habitualmente > 60–70°.",
          figureId: "instabilidade-carpo:disi-visi",
          figureVariant: "disi",
        },
        {
          code: "VISI",
          label: "VISI — flexão palmar do semilunar",
          description:
            "Semilunar em flexão acompanhando o escafoide; padrão associado à instabilidade lunopiramidal.",
          figureId: "instabilidade-carpo:disi-visi",
          figureVariant: "visi",
        },
      ],
    },
  ],
  indications: {
    operative: [
      "Dissociação escafolunar aguda com coto reparável (Garcia-Elias I–II), especialmente em jovem ativo.",
      "Instabilidade escafolunar crônica reparável e redutível sem artrose (Garcia-Elias III–IV): reconstrução ligamentar.",
      "Instabilidade lunopiramidal sintomática refratária ao tratamento conservador.",
      "Luxação/fratura-luxação perilunar (Mayfield avançado): redução aberta e reparo/fixação de urgência.",
      "Colapso avançado (SLAC): procedimento de salvamento conforme o padrão de artrose.",
    ],
    nonOperative: [
      "Lesão parcial predinâmica sem desalinhamento, com boa resposta à reabilitação.",
      "Instabilidade lunopiramidal isolada de baixa demanda em fase inicial (imobilização, órtese e propriocepção).",
      "Paciente de baixa demanda ou com contraindicação cirúrgica, priorizando controle da dor e função.",
    ],
    decisionNotes:
      "A conduta segue o estadiamento de Garcia-Elias, não apenas o tempo de lesão: importa se há coto reparável, se o desalinhamento é redutível e se a cartilagem está preservada. O reparo direto é mais previsível na lesão aguda/subaguda com ligamento reparável; a reconstrução ligamentar (tenodese) é reservada à lesão crônica reparável, redutível e sem artrose. Quando já há colapso do carpo (SLAC), a indicação muda para salvamento (carpectomia da fileira proximal ou artrodeses parciais). Uma diástase dinâmica pode exigir radiografias sob estresse ou artroscopia para ser demonstrada.",
  },
  approaches: [
    {
      id: "dorsal",
      name: "Via dorsal do punho",
      indication: "Reparo e reconstrução ligamentar escafolunar; acesso à cápsula dorsal e ao intervalo SL.",
      interval:
        "Incisão dorsal longitudinal; abertura entre o terceiro e o quarto compartimentos extensores com retração do extensor longo do polegar. Capsulotomia dorsal poupadora de ligamentos (baseada nas fibras do ligamento intercarpal dorsal e radiocarpal dorsal) expõe o intervalo escafolunar.",
      atRisk: [
        "Ramos sensitivos dorsais dos nervos radial e ulnar",
        "Suprimento vascular dorsal do escafoide e do semilunar",
        "Cartilagem articular durante o preparo dos túneis e âncoras",
      ],
      figureId: "instabilidade-carpo:anatomia",
    },
    {
      id: "artroscopia",
      name: "Artroscopia diagnóstica do punho",
      indication: "Estadiamento da lesão, avaliação do coto ligamentar e da cartilagem; guia da reparabilidade.",
      interval:
        "Portais dorsais radiocarpais (3-4, 4-5, 6R) e mediocarpais (RMC, UMC). A avaliação mediocarpal define o grau de instabilidade pela mobilidade e degrau escafolunar e lunopiramidal.",
      atRisk: [
        "Ramos sensitivos dorsais e tendões extensores nos portais",
        "Cartilagem na introdução dos instrumentos",
      ],
    },
  ],
  technique: [
    {
      n: 1,
      title: "Avaliação clínica e testes provocativos",
      detail:
        "Localizar a dor (dorsorradial na lesão SL; ulnar na LP) e aplicar testes específicos. A manobra de deslocamento do escafoide de Watson pesquisa a instabilidade SL: pressão no polo distal do escafoide durante desvio radioulnar reproduz dor e um clunk dorsal. O ballottement de Reagan cisalha o piramidal contra o semilunar para a lesão LP. Comparar sempre com o lado contralateral.",
      figureId: "instabilidade-carpo:lunopiramidal",
      tips: [
        "Testar o punho contralateral para calibrar frouxidão fisiológica",
        "Dor dorsorradial pós-queda em extensão obriga a pensar em dissociação SL",
      ],
      pitfalls: [
        "Atribuir toda dor ulnar à lesão da fibrocartilagem triangular",
        "Considerar radiografia estática normal como exclusão de instabilidade dinâmica",
      ],
    },
    {
      n: 2,
      title: "Confirmar e medir na imagem",
      detail:
        "Obter PA e perfil neutros e, quando a suspeita persiste, incidências sob estresse (PA com punho fechado/carga ou desvio ulnar). Medir o gap escafolunar (alargamento > 3 mm — sinal de Terry-Thomas), procurar o sinal do anel cortical do escafoide fletido e medir o ângulo escafolunar no perfil (normal ≈ 30–60°; > 60–70° sugere DISI). Avaliar a báscula do semilunar.",
      figureId: "instabilidade-carpo:sinais-radiograficos",
      tips: [
        "Comparar o gap com o punho contralateral na mesma incidência",
        "O ângulo escafolunar no perfil reflete bem a progressão da lesão",
      ],
      pitfalls: [
        "Medir o gap em incidência mal rodada",
        "Ignorar que lesão ligamentar significativa pode preceder o alargamento visível",
      ],
    },
    {
      n: 3,
      title: "Estadiar por artroscopia e definir a via",
      detail:
        "A artroscopia radiocarpal e mediocarpal confirma o grau de instabilidade, a presença de coto reparável e o estado da cartilagem, situando a lesão no estadiamento de Garcia-Elias. Esse estadiamento — e não apenas o tempo decorrido — direciona entre reparo direto, reconstrução e salvamento.",
      figureId: "instabilidade-carpo:garcia-elias",
      tips: [
        "A avaliação mediocarpal quantifica melhor o degrau e a mobilidade SL/LP",
        "Registrar reparabilidade, redutibilidade e cartilagem antes de decidir",
      ],
      pitfalls: [
        "Indicar reconstrução ligamentar quando já há artrose",
        "Subestimar a irredutibilidade de um desalinhamento crônico",
      ],
    },
    {
      n: 4,
      title: "Reparo direto na lesão aguda/subaguda",
      detail:
        "Com coto reparável (Garcia-Elias I–II), reduzir o intervalo escafolunar e reinserir o remanescente dorsal do ligamento com âncoras, frequentemente reforçado por capsulodese dorsal. A fixação temporária com fios protege o reparo durante a cicatrização. O objetivo é restaurar a banda dorsal, o principal restritor da rotação.",
      figureId: "instabilidade-carpo:reparo-reconstrucao",
      figureVariant: "reparo",
      tips: [
        "Priorizar a restauração da banda dorsal do ligamento escafolunar",
        "Resultados de reparo agudo e subagudo são comparáveis quando o coto é reparável",
      ],
      pitfalls: [
        "Forçar reparo de um coto inviável em vez de reconstruir",
        "Retirar precocemente a proteção do reparo",
      ],
    },
    {
      n: 5,
      title: "Reconstrução ligamentar na lesão crônica reparável e redutível",
      detail:
        "Sem coto reparável, mas com desalinhamento redutível e sem artrose (Garcia-Elias III–IV), reconstruir o intervalo com enxerto tendíneo. Técnicas como a tenodese de três ligamentos usam faixa do flexor radial do carpo passada por túnel no escafoide, reorientando o escafoide e reconstruindo os freios dorsais; alternativas de ligamentoplastia dorsal têm mostrado melhora clínica no médio prazo. Corrigir a rotação do escafoide antes de fixar.",
      figureId: "instabilidade-carpo:reparo-reconstrucao",
      figureVariant: "reconstrucao",
      tips: [
        "Reduzir a flexão/rotação do escafoide antes de tensionar o enxerto",
        "Reservar a reconstrução para carpo redutível e cartilagem preservada",
      ],
      pitfalls: [
        "Reconstruir sobre desalinhamento irredutível sem liberação prévia",
        "Osteólise ao redor das âncoras/túneis por posicionamento inadequado",
      ],
    },
    {
      n: 6,
      title: "Salvamento no colapso avançado (SLAC)",
      detail:
        "Quando há artrose estabelecida (Garcia-Elias VI), a reconstrução ligamentar não se aplica. Conforme o padrão de degeneração, opta-se por carpectomia da fileira proximal ou artrodeses parciais (por exemplo, ressecção do escafoide com artrodese das quatro esquinas), preservando algum arco de movimento e aliviando a dor.",
      figureId: "instabilidade-carpo:garcia-elias",
      tips: [
        "Escolher o salvamento conforme o padrão e a extensão da artrose",
        "Alinhar a expectativa de mobilidade e alívio da dor com o paciente",
      ],
      pitfalls: [
        "Insistir em reconstrução ligamentar em carpo já artrósico",
        "Ignorar a articulação radioescafoide ao planejar carpectomia proximal",
      ],
    },
  ],
  postop: {
    immobilization:
      "Imobilização do punho por cerca de 6–8 semanas após reparo ou reconstrução (frequentemente com fixação temporária por fios protegendo o intervalo), ajustada à técnica e à estabilidade obtida.",
    weightBearing:
      "Sem carga axial, preensão de força ou impacto sobre o punho no início. Retorno gradual conforme consolidação ligamentar, amplitude e força; atividades de impacto e esporte são as últimas a liberar.",
    rehab: [
      {
        window: "0-6 semanas",
        weightBearing: "Sem carga no punho",
        focus: "Proteção do reparo, controle de edema e mobilidade de dedos, cotovelo e ombro.",
      },
      {
        window: "6-8 semanas",
        weightBearing: "Sem carga; retirada de fios",
        focus: "Início de amplitude ativa protegida do punho após remoção da fixação temporária.",
      },
      {
        window: "8-12 semanas",
        weightBearing: "Carga leve progressiva",
        focus: "Ganho de amplitude, treino proprioceptivo e ativação dos estabilizadores dinâmicos do carpo.",
      },
      {
        window: "3-6 meses",
        weightBearing: "Progressiva até funcional/esportiva",
        focus: "Fortalecimento, preensão e gestos específicos antes do retorno a impacto ou esporte.",
      },
    ],
    followup:
      "Acompanhar dor, amplitude, força de preensão e manutenção da redução (gap e ângulo escafolunar) em radiografias seriadas. O resultado funcional pode ser satisfatório mesmo com sinais radiográficos de artrose ao longo do tempo.",
  },
  complications: [
    {
      name: "Instabilidade residual ou recorrente",
      detail:
        "Persistência ou retorno da diástase e do desalinhamento por reparo insuficiente, escolha técnica inadequada ao estágio ou lesão associada não reconhecida.",
      prevention: "Estadiamento correto, restauração da banda dorsal e reconstrução compatível com a redutibilidade.",
    },
    {
      name: "Rigidez e perda de amplitude",
      detail: "Redução da flexão do punho após capsulodese/tenodese e imobilização prolongada.",
      prevention: "Reabilitação progressiva e tensionamento individualizado do enxerto.",
    },
    {
      name: "Artrose e colapso do carpo (SLAC)",
      detail: "Evolução degenerativa previsível quando a dissociação escafolunar não é corrigida a tempo.",
      prevention: "Diagnóstico e tratamento antes da instalação do desalinhamento fixo e da artrose.",
    },
    {
      name: "Osteólise / falha de âncoras e túneis",
      detail: "Reação osteolítica ao redor de âncoras e afrouxamento em ligamentoplastias.",
      prevention: "Posicionamento e diâmetro adequados dos túneis e âncoras; proteção pós-operatória.",
    },
    {
      name: "Lesão neurovascular dorsal",
      detail: "Neuroma ou hipoestesia por lesão de ramos sensitivos dorsais e comprometimento vascular do escafoide.",
      prevention: "Dissecção cuidadosa dos ramos sensitivos e da vascularização dorsal.",
    },
  ],
  evidence: [
    {
      id: "mayfield-1980-perilunar",
      claim:
        "Em 32 punhos cadavéricos carregados até a falha, as luxações perilunares ocorreram de forma sequencial por disrupção ligamentar progressiva do radial ao ulnar, do estágio I (diástase escafolunar) ao IV (luxação do semilunar).",
      takeaway:
        "A dissociação escafolunar é o primeiro elo de um espectro ordenado de instabilidade perilunar, o que sustenta a lógica de estadiar e tratar cedo.",
      level: "V",
      studyType: "Estudo biomecânico cadavérico",
      era: "classico",
      citation: {
        authors: "Mayfield JK, Johnson RP, Kilcoyne RK",
        title: "Carpal dislocations: pathomechanics and progressive perilunar instability.",
        journal: "J Hand Surg Am",
        year: 1980,
        pmid: "7400560",
        doi: "10.1016/s0363-5023(80)80007-4",
      },
    },
    {
      id: "meade-1990-seccao-seletiva",
      claim:
        "Em secção ligamentar sequencial cadavérica, lesão ligamentar significativa precedeu a ultrapassagem dos limites radiográficos usuais, e o ângulo escafolunar lateral foi o parâmetro que melhor refletiu a progressão da lesão.",
      takeaway:
        "Radiografia estática normal não exclui instabilidade; o ângulo escafolunar no perfil e as incidências sob estresse aumentam a sensibilidade.",
      level: "V",
      studyType: "Estudo cadavérico radiográfico",
      era: "classico",
      citation: {
        authors: "Meade TD, Schneider LH, Cherry K",
        title:
          "Radiographic analysis of selective ligament sectioning at the carpal scaphoid: a cadaver study.",
        journal: "J Hand Surg Am",
        year: 1990,
        pmid: "2269773",
        doi: "10.1016/0363-5023(90)90003-a",
      },
    },
    {
      id: "chen-2021-agudo-subagudo",
      claim:
        "Em 24 pacientes submetidos a reparo direto do ligamento escafolunar (± capsulodese), não houve diferença significativa de longo prazo entre reparo agudo (< 6 semanas) e subagudo (6–12 semanas) em força, escores e achados radiográficos.",
      takeaway:
        "Quando o coto é reparável, um intervalo até algumas semanas não compromete o resultado do reparo direto — a reparabilidade importa mais que o cronômetro exato.",
      level: "III",
      studyType: "Estudo prognóstico comparativo retrospectivo",
      era: "atual",
      citation: {
        authors: "Chen RE, Calfee RP, Stepan JG, Osei DA",
        title: "Outcomes of Acute Versus Subacute Scapholunate Ligament Repair.",
        journal: "J Hand Surg Glob Online",
        year: 2021,
        pmid: "35434576",
        doi: "10.1016/j.jhsg.2021.10.007",
      },
    },
    {
      id: "moneim-2021-reparo-tardio",
      claim:
        "Em série de reparo tardio isolado do ligamento escafolunar após ruptura completa, os resultados clínicos funcionais no longo prazo nem sempre acompanharam a presença radiográfica de artrose.",
      takeaway:
        "Sinais radiográficos de degeneração ao longo do tempo não equivalem, isoladamente, a mau resultado funcional — o acompanhamento deve integrar clínica e imagem.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "atual",
      citation: {
        authors: "Moneim MS, Aubin-Lemay C, Anderson MS, Mercer DM",
        title:
          "Long-term Outcomes of Delayed Scapholunate Ligament Repair After Complete Rupture of the Ligament.",
        journal: "Orthopedics",
        year: 2021,
        pmid: "34039212",
        doi: "10.3928/01477447-20210415-04",
      },
    },
    {
      id: "helfter-2023-ligamentoplastia",
      claim:
        "Em 21 pacientes com instabilidade escafolunar estágio 3–4 de Garcia-Elias tratados por ligamentoplastia dorsal, houve melhora de dor, redução da diástase e do ângulo escafolunar, com 81% de satisfação, porém osteólise ao redor das âncoras em 47%.",
      takeaway:
        "A reconstrução ligamentar melhora a instabilidade crônica reparável e redutível no médio prazo, mas exige atenção à osteólise e a fatores de pior prognóstico (lesão relacionada ao trabalho).",
      level: "IV",
      studyType: "Estudo retrospectivo de coorte",
      era: "atual",
      citation: {
        authors: "Helfter L, Forli A, Philippides A, Bouyer M, Corcella D",
        title:
          "Ligamentoplasty in scapholunate instability: short-term results of the \"all dorsal scapholunate repair\" technique.",
        journal: "Eur J Orthop Surg Traumatol",
        year: 2023,
        pmid: "37897667",
        doi: "10.1007/s00590-023-03765-x",
      },
    },
  ],
  pearls: [
    "A banda dorsal do ligamento escafolunar é o alvo do reparo: é ela que restringe a rotação do escafoide.",
    "DISI acompanha a lesão escafolunar; VISI, a lunopiramidal — o padrão no perfil aponta o ligamento culpado.",
    "Radiografia estática normal com dor dorsorradial pós-trauma pede incidências sob estresse ou artroscopia.",
    "O estadiamento de Garcia-Elias responde às perguntas certas: reparável? redutível? cartilagem preservada?",
  ],
  pitfalls: [
    "Tratar toda diástase igual sem estadiar reparabilidade, redutibilidade e cartilagem.",
    "Confiar apenas na radiografia neutra e perder a instabilidade dinâmica.",
    "Indicar reconstrução ligamentar em carpo já artrósico (SLAC), quando cabe salvamento.",
    "Confundir dor ulnar da lesão lunopiramidal com lesão isolada da fibrocartilagem triangular.",
  ],
  figures: [
    {
      id: "instabilidade-carpo:anatomia",
      caption:
        "Ligamentos interósseos escafolunar (banda dorsal) e lunopiramidal (banda palmar) na fileira proximal.",
      alt: "Vista dorsal do carpo com os ligamentos escafolunar e lunopiramidal",
      kind: "diagram",
    },
    {
      id: "instabilidade-carpo:mayfield",
      variant: "i",
      caption: "Sequência de Mayfield — estágio I: dissociação escafolunar.",
      alt: "Instabilidade perilunar progressiva de Mayfield, estágio I",
      kind: "diagram",
    },
    {
      id: "instabilidade-carpo:mayfield",
      variant: "iv",
      caption: "Sequência de Mayfield — estágio IV: luxação palmar do semilunar.",
      alt: "Instabilidade perilunar progressiva de Mayfield, estágio IV",
      kind: "diagram",
    },
    {
      id: "instabilidade-carpo:disi-visi",
      variant: "disi",
      caption: "Padrão DISI: semilunar em extensão e escafoide fletido na dissociação escafolunar.",
      alt: "Alinhamento sagital em DISI",
      kind: "diagram",
    },
    {
      id: "instabilidade-carpo:disi-visi",
      variant: "visi",
      caption: "Padrão VISI: semilunar em flexão palmar, típico da instabilidade lunopiramidal.",
      alt: "Alinhamento sagital em VISI",
      kind: "diagram",
    },
    {
      id: "instabilidade-carpo:sinais-radiograficos",
      caption: "Sinais na incidência PA: gap escafolunar (Terry-Thomas), sinal do anel cortical e ângulo SL.",
      alt: "Sinais radiográficos da dissociação escafolunar",
      kind: "diagram",
    },
    {
      id: "instabilidade-carpo:garcia-elias",
      caption: "Espectro de Garcia-Elias (I–VI) e a conduta correspondente, do reparo ao salvamento.",
      alt: "Estadiamento de Garcia-Elias da dissociação escafolunar",
      kind: "diagram",
    },
    {
      id: "instabilidade-carpo:reparo-reconstrucao",
      variant: "reparo",
      caption: "Reparo direto dorsal do ligamento escafolunar com âncoras na lesão aguda/subaguda.",
      alt: "Reparo direto do ligamento escafolunar",
      kind: "diagram",
    },
    {
      id: "instabilidade-carpo:reparo-reconstrucao",
      variant: "reconstrucao",
      caption: "Reconstrução ligamentar (tenodese) do intervalo escafolunar na lesão crônica redutível.",
      alt: "Reconstrução ligamentar escafolunar",
      kind: "diagram",
    },
    {
      id: "instabilidade-carpo:lunopiramidal",
      caption: "Teste de cisalhamento (ballottement) de Reagan para a instabilidade lunopiramidal.",
      alt: "Teste de ballottement lunopiramidal",
      kind: "diagram",
    },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
      "Hebert S, Lech O, et al. Ortopedia e Traumatologia: princípios e prática. 6ª ed. 2025.",
      "Barros Filho TEP, Lech O. Exame Físico em Ortopedia. 3ª ed.",
    ],
    attribution:
      "Conteúdo original Revisortopedia; figuras esquemáticas originais, sem reprodução de material protegido.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), capítulo de instabilidade do carpo e lesões ligamentares do punho; redesenho original, não reprodução.",
  },
});
