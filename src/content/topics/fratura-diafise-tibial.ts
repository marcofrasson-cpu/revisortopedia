import { defineTopic } from "../../types/topic";

/* Fratura da diáfise tibial.
   Escopo: haste intramedular bloqueada (padrão), fresada vs não-fresada (SPRINT),
   fratura exposta (Gustilo–Anderson, antibiótico precoce, desbridamento),
   síndrome compartimental (5 P / ΔP) e acesso suprapatelar vs infrapatelar.
   Evidência recuperada do PubMed (DOIs citados). */
export const topic = defineTopic({
  id: "mi-tibia-diafise",
  slug: "fratura-diafise-tibial",
  regionId: "membro-inferior",
  bone: "Tíbia",
  injury: "Fratura diafisária",
  title: "Fratura da diáfise tibial",
  subtitle:
    "A fratura de osso longo mais comum — haste intramedular bloqueada como padrão, com as decisões críticas na exposta (antibiótico precoce) e na síndrome compartimental.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura da diáfise tibial é a fratura de osso longo mais frequente. Distribui-se de forma bimodal: trauma de alta energia (colisões, atropelamentos) em jovens e trauma de baixa energia (torção, queda da própria altura) em idosos. Como um terço da circunferência da tíbia é subcutâneo na borda ântero-medial, a exposição é comum e a cobertura de partes moles frequentemente precária.\n\nTrês decisões definem o prognóstico. Primeiro, o método de fixação: a haste intramedular bloqueada e fresada é o padrão para a maioria das fraturas diafisárias fechadas e para muitas expostas após limpeza, por ser um implante de compartilhamento de carga que permite mobilização e carga precoces. Segundo, o manejo da fratura exposta: antibioticoterapia o mais precoce possível (idealmente na primeira hora), desbridamento cirúrgico e cobertura oportuna são os pilares que reduzem a infecção. Terceiro, a vigilância da síndrome compartimental — a complicação aguda mais temida, que pode ocorrer tanto na fratura fechada quanto na exposta e exige diagnóstico clínico e fasciotomia sem demora.\n\nO grande debate técnico contemporâneo é o ponto de entrada: o acesso suprapatelar (joelho semiestendido) versus infrapatelar (joelho fletido), com evidência crescente de melhor função patelofemoral e menos dor anterior de joelho no suprapatelar.",

  keyFacts: [
    { label: "Frequência", value: "Fratura de osso longo mais comum" },
    { label: "Anatomia crítica", value: "Borda ântero-medial subcutânea → exposta" },
    { label: "Padrão-ouro", value: "Haste IM bloqueada (fresada, na fechada)" },
    { label: "Exposta", value: "ATB na 1ª hora + desbridamento" },
    { label: "Emergência", value: "Síndrome compartimental (ΔP < 30 mmHg)" },
    { label: "Acesso", value: "Suprapatelar × infrapatelar" },
  ],

  anatomy: {
    text:
      "A tíbia é um osso longo de secção triangular na diáfise, com três faces (medial, lateral e posterior) e três bordas. A borda ântero-medial e a face medial são subcutâneas em todo o terço médio-distal — sem envelope muscular protetor —, o que explica a alta incidência de fraturas expostas e a dificuldade de cobertura. A tuberosidade anterior recebe o tendão patelar e é referência para o portal infrapatelar.\n\nA fíbula divide a carga axial (10–15%) e sua integridade influencia a estabilidade e o padrão de desvio; a articulação tibiofibular proximal e distal (sindesmose) e a membrana interóssea acoplam os dois ossos. A vascularização da tíbia é dupla e precária: a artéria nutrícia, ramo da tibial posterior, penetra a cortical posterolateral no terço proximal e supre os dois terços internos da cortical de dentro para fora; o periósteo supre o terço externo. Fraturas do terço médio-distal, na zona de transição do aporte, e o descolamento periosteal da alta energia predispõem ao retardo de consolidação e à pseudartrose.\n\nA perna divide-se em quatro compartimentos fasciais inextensíveis — anterior (extensores + nervo fibular profundo + a. tibial anterior), lateral (fibulares + nervo fibular superficial), posterior superficial (tríceps sural) e posterior profundo (flexores + nervo tibial + a. tibial posterior). O compartimento anterior é o mais acometido pela síndrome compartimental. O nervo fibular comum contorna o colo da fíbula, superficial e vulnerável.",
    figureIds: ["fratura-diafise-tibial:anatomia", "fratura-diafise-tibial:compartimentos"],
  },

  classification: [
    {
      id: "gustilo-anderson",
      name: "Gustilo–Anderson (fratura exposta)",
      basis: "Tamanho da ferida, energia, contaminação e lesão de partes moles",
      note:
        "Classificação definitiva feita no intraoperatório, após o desbridamento — o grau tende a subir ao expor a real extensão da lesão. Orienta antibiótico, cobertura e prognóstico de infecção. Selecione um tipo para ver o padrão.",
      types: [
        {
          code: "I",
          label: "< 1 cm, limpa",
          description:
            "Ferida puntiforme (geralmente de dentro para fora), contaminação mínima, baixa energia, sem cominuição significativa.",
          figureId: "fratura-diafise-tibial:gustilo",
          figureVariant: "I",
        },
        {
          code: "II",
          label: "1–10 cm",
          description:
            "Lesão moderada de partes moles, sem desvitalização extensa nem cominuição importante; cobertura primária em geral possível.",
          figureId: "fratura-diafise-tibial:gustilo",
          figureVariant: "II",
        },
        {
          code: "IIIA",
          label: "Cobertura adequada",
          description:
            "Alta energia/cominuição ou ferida > 10 cm, mas com partes moles suficientes para cobrir o osso após desbridamento. Inclui trauma de alta energia mesmo com ferida pequena e ferimentos por arma de fogo de alta velocidade.",
          figureId: "fratura-diafise-tibial:gustilo",
          figureVariant: "IIIA",
        },
        {
          code: "IIIB",
          label: "Perda de cobertura",
          description:
            "Desperiostização e perda de partes moles com exposição óssea — exige retalho (rotação ou microcirúrgico) para cobertura; alta contaminação.",
          figureId: "fratura-diafise-tibial:gustilo",
          figureVariant: "IIIB",
        },
        {
          code: "IIIC",
          label: "Lesão arterial",
          description:
            "Lesão arterial que requer reparo para salvar o membro, independentemente do tamanho da ferida — a de pior prognóstico.",
          figureId: "fratura-diafise-tibial:gustilo",
          figureVariant: "IIIC",
        },
      ],
    },
    {
      id: "ao-ota-42",
      name: "AO/OTA (segmento 42)",
      basis: "Morfologia do traço na diáfise da tíbia (42 = diáfise tibial)",
      note: "Sistema alfanumérico que gradua a complexidade do traço; usado para documentação e pesquisa.",
      types: [
        { code: "42A", label: "Simples", description: "Traço único — espiral (A1), oblíquo ≥ 30° (A2) ou transverso < 30° (A3)." },
        { code: "42B", label: "Em cunha", description: "Fragmento em cunha (borboleta), intacto ou fragmentado, com contato entre os fragmentos principais após redução." },
        { code: "42C", label: "Complexa", description: "Multifragmentar/segmentar, sem contato cortical entre os fragmentos principais após redução." },
      ],
    },
  ],

  indications: {
    operative: [
      "Haste intramedular bloqueada: implante de escolha para a maioria das fraturas diafisárias fechadas e para expostas após desbridamento adequado",
      "Desvio inaceitável após redução incruenta: encurtamento > 1 cm, angulação > 5° em varo/valgo ou > 10° ântero-posterior, rotação > 10°, ou < 50% de aposição cortical",
      "Fratura exposta (Gustilo I–III): desbridamento, antibiótico precoce e estabilização — haste na maioria; fixador externo se contaminação grosseira ou instabilidade fisiológica",
      "Fratura segmentar, cominutiva, bilateral, ou perna flutuante (fratura ipsilateral de fêmur)",
      "Politrauma, síndrome compartimental (fixação + fasciotomia) e falha do tratamento conservador",
      "Placa em ponte ou fixação percutânea nas extensões metafisárias muito proximais/distais em que a haste controla mal o alinhamento",
    ],
    nonOperative: [
      "Fratura fechada de baixa energia, isolada, com alinhamento aceitável e estável — gesso cruropodálico inicial, convertido em órtese funcional tipo Sarmiento",
      "Critérios de aceitação: encurtamento ≤ 1 cm, ≤ 5° varo/valgo, ≤ 10° angulação sagital, ≤ 10° rotação e ≥ 50% de contato cortical",
      "Paciente sem condições clínicas para cirurgia",
    ],
    decisionNotes:
      "A maioria das fraturas diafisárias tibiais desviadas do adulto é tratada com haste intramedular bloqueada, que oferece consolidação previsível com reabilitação e carga precoces. Na fratura fechada, a haste fresada é preferível: a fresagem melhora a fixação e, no ensaio SPRINT, associou-se a menos eventos de reoperação nas fraturas fechadas — sem benefício (e sem prejuízo claro) nas expostas. Na fratura exposta, a prioridade absoluta é o antibiótico precoce (idealmente na primeira hora) somado ao desbridamento; a estabilização com haste é segura na maioria, reservando-se o fixador externo para contaminação grosseira, perda óssea/de partes moles extensa ou doente instável (controle de danos). Toda fratura tibial — fechada ou exposta — exige vigilância ativa de síndrome compartimental no perioperatório.",
  },

  approaches: [
    {
      id: "suprapatelar",
      name: "Suprapatelar (semiestendido)",
      indication:
        "Acesso em ascensão para a maioria das fraturas, sobretudo proximais e distais, onde o joelho semiestendido facilita a redução e a passagem do fio-guia. Reduz a força deformante do quadríceps sobre o fragmento proximal.",
      interval:
        "Portal longitudinal acima do polo superior da patela, através do tendão quadricipital; a haste atravessa a articulação patelofemoral protegida por camisa/trocarte até o ponto de entrada.",
      atRisk: ["Cartilagem patelofemoral", "Gordura de Hoffa / recesso suprapatelar", "Cartilagem troclear"],
      figureId: "fratura-diafise-tibial:via-suprapatelar",
    },
    {
      id: "infrapatelar",
      name: "Infrapatelar (joelho fletido)",
      indication:
        "Acesso clássico, com o joelho hiperfletido; adequado para fraturas do terço médio. A flexão, porém, dificulta o controle do fragmento proximal (deformidade em ápice anterior e valgo nas proximais).",
      interval:
        "Portal transtendíneo (dividindo o tendão patelar) ou paratendíneo medial, entre o polo inferior da patela e a tuberosidade anterior da tíbia.",
      atRisk: ["Tendão patelar", "Menisco / corno anterior", "Ramo infrapatelar do n. safeno (dormência)"],
      figureId: "fratura-diafise-tibial:via-infrapatelar",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Posicionamento, ponto de entrada e fio-guia",
      detail:
        "Decúbito dorsal; escolher o acesso (suprapatelar semiestendido ou infrapatelar fletido). O ponto de entrada ideal é imediatamente medial à borda lateral da eminência intercondilar no AP e na margem anterior do platô no perfil, alinhado ao eixo do canal. Passar o fio-guia com ponta em bola centrado no canal em ambas as incidências, atravessando o foco reduzido até o osso subcondral distal.",
      figureId: "fratura-diafise-tibial:step-entrada",
      tips: [
        "Ponto de entrada correto previne a deformidade — sobretudo nas fraturas proximais.",
        "O acesso suprapatelar semiestendido reduz a tração do quadríceps e ajuda a controlar o fragmento proximal.",
      ],
      pitfalls: [
        "Entrada medial ou posterior demais → deformidade em valgo e procurvato (ápice anterior) nas proximais.",
        "Fio-guia excêntrico → fresagem e haste em posição viciosa.",
      ],
    },
    {
      n: 2,
      title: "Redução e fresagem",
      detail:
        "Obter e manter a redução (comprimento, alinhamento e rotação) antes de fresar — fresar em desvio desloca fragmentos e amplia o defeito. Na fratura fechada, fresar sequencialmente em incrementos de 0,5 mm, 1,0–1,5 mm acima do diâmetro da haste pretendida, com fresas afiadas e irrigação para reduzir calor e pressão intramedular. Manobras auxiliares (parafuso de bloqueio-poste, redutor femoral, pinça percutânea) ajudam nas fraturas instáveis.",
      figureId: "fratura-diafise-tibial:step-fresagem",
      tips: [
        "Confira a rotação comparando o perfil da tíbia/pé com o lado contralateral sob fluoroscopia.",
        "Bloqueadores de Poller (blocking screws) estreitam o trajeto e corrigem o alinhamento em fraturas metafisárias.",
      ],
      pitfalls: [
        "Fresar com a fratura em desvio → deslocamento e defeito ósseo.",
        "Malrotação é subestimada — a cominuição elimina as referências corticais.",
      ],
    },
    {
      n: 3,
      title: "Passagem da haste e bloqueio",
      detail:
        "Introduzir a haste sobre o fio-guia de troca mantendo a redução, rebaixando-a sob a cartilagem articular proximal. Bloquear proximal e distalmente. O bloqueio estático (proximal + distal) é a regra nas fraturas proximais, distais, cominutivas ou instáveis, para controlar comprimento e rotação; usar múltiplos parafusos (idealmente em planos diferentes) nas metáfises pela fixação óssea mais tênue. Conferir alinhamento e rotação finais antes de fechar.",
      figureId: "fratura-diafise-tibial:step-bloqueio",
      tips: [
        "Nas fraturas proximais/distais, use ≥ 2 parafusos por segmento e considere planos múltiplos.",
        "Reavalie a rotação após o bloqueio, antes de acordar o paciente.",
      ],
      pitfalls: [
        "Bloqueio insuficiente em fratura metafisária → perda de redução e malrotação.",
        "Bloqueio distal a mão livre mal executado → múltiplas perfurações e enfraquecimento cortical.",
      ],
    },
    {
      n: 4,
      title: "Manejo da exposta e vigilância compartimental",
      detail:
        "Na fratura exposta: antibiótico o mais precoce possível (cefalosporina de 1ª geração; acrescentar aminoglicosídeo/gram-negativos nas Gustilo III e penicilina/anaerobicida em contaminação por solo/fazenda), profilaxia antitetânica, desbridamento cirúrgico de tecido desvitalizado e irrigação, com cobertura de partes moles oportuna. Em toda fratura tibial, monitorar ativamente síndrome compartimental — dor desproporcional e dor à extensão passiva são os sinais mais precoces; ΔP (diastólica − pressão do compartimento) < 30 mmHg indica fasciotomia dos quatro compartimentos.",
      figureId: "fratura-diafise-tibial:compartimentos",
      tips: [
        "Na exposta, o antibiótico é a intervenção mais tempo-dependente — priorize-o já na admissão/pré-hospitalar.",
        "Reavaliação seriada é mais sensível que uma única medida de pressão; documente exames de repetição.",
      ],
      pitfalls: [
        "Confiar nas '5 P' tardias (ausência de pulso e paralisia são achados finais) e perder a janela da fasciotomia.",
        "Atrasar antibiótico e desbridamento na exposta aumenta a infecção profunda.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Após haste bloqueada, nenhuma imobilização externa é necessária — o implante permite movimento imediato de joelho e tornozelo. No tratamento conservador, gesso cruropodálico inicial convertido em órtese funcional (Sarmiento) quando a dor e o edema cedem. Na exposta com fasciotomia, curativos e fechamento/cobertura conforme evolução das partes moles.",
    weightBearing:
      "Haste bloqueada em fratura estável (transversa/oblíqua curta com contato cortical): carga conforme tolerada precoce, que estimula a consolidação. Em padrões instáveis (cominutiva, segmentar, exposta com perda óssea): carga protegida por 4–6 semanas antes de progredir. Fixador externo de controle de danos: sem carga até a fixação definitiva.",
    rehab: [
      { window: "0–2 sem", weightBearing: "Conforme tolerada (estável) / protegida", focus: "ADM de joelho e tornozelo; controle de dor/edema; vigilância compartimental; prevenção de TVP." },
      { window: "2–6 sem", weightBearing: "Progressão da carga conforme padrão", focus: "Fortalecimento do quadríceps e da panturrilha; marcha com apoio; ganho de dorsiflexão." },
      { window: "6–12 sem", weightBearing: "Progressão à carga total, desmame de apoios", focus: "Marcha sem auxílio; propriocepção; sinais radiográficos de calo em ≥ 3 corticais." },
      { window: "> 12 sem", weightBearing: "Total, sem restrição", focus: "Retorno gradual a impacto/esporte; avaliar dinamização ou troca de haste se atraso de consolidação." },
    ],
    followup:
      "Radiografias seriadas até a consolidação (calo em ≥ 3 de 4 corticais); vigiar retardo/pseudartrose, sobretudo no terço médio-distal e nas expostas de alta energia. Diante de atraso, considerar dinamização (retirada do bloqueio de um lado), troca de haste por diâmetro maior fresado, ou enxertia. Monitorar dor anterior de joelho (mais comum no acesso infrapatelar) e malrotação (queixa de rotação anômala do pé; TC comparativa se dúvida).",
  },

  complications: [
    {
      name: "Síndrome compartimental aguda",
      detail:
        "Complicação aguda mais temida; ocorre em fraturas fechadas e expostas (a fáscia rota não descomprime de forma confiável). Dor desproporcional e dor à extensão passiva dos dedos são os sinais mais precoces; parestesia, palidez, ausência de pulso e paralisia são tardios. O compartimento anterior é o mais acometido.",
      prevention:
        "Alto índice de suspeita e reavaliação clínica seriada; medir a pressão (ΔP < 30 mmHg da diastólica) no paciente sedado/não confiável; fasciotomia precoce dos quatro compartimentos sem demora.",
    },
    {
      name: "Infecção (sobretudo na exposta)",
      detail:
        "Risco proporcional ao grau de Gustilo — baixo nas I–II e elevado nas III (particularmente IIIB/IIIC). A infecção intramedular após haste é grave e de difícil erradicação.",
      prevention:
        "Antibiótico o mais precoce possível (janela de ~1 h), desbridamento adequado, cobertura oportuna de partes moles e técnica asséptica; escalonar o esquema conforme o grau e a contaminação.",
    },
    {
      name: "Pseudartrose / retardo de consolidação",
      detail:
        "Favorecida pela vascularização precária do terço médio-distal, alta energia, cominuição, exposição, perda óssea e tabagismo. A fíbula intacta pode gerar distração no foco tibial.",
      prevention:
        "Estabilidade e alinhamento adequados; preferir haste fresada na fechada; carga precoce; dinamização, troca de haste fresada ou enxertia diante de atraso.",
    },
    {
      name: "Dor anterior do joelho",
      detail:
        "Queixa mais comum após haste tibial, sobretudo pelo acesso infrapatelar/transtendíneo; relacionada à violação do aparelho extensor e ao proeminência do topo da haste.",
      prevention:
        "Rebaixar bem a haste sob a cartilagem; considerar o acesso suprapatelar (menos dor anterior e melhor função patelofemoral na evidência recente); reabilitação do quadríceps.",
    },
    {
      name: "Malalinhamento / malrotação",
      detail:
        "Mais frequente nas fraturas proximais (valgo e procurvato por tração do quadríceps/patelar) e distais; a rotação é subestimada intraoperatoriamente.",
      prevention:
        "Ponto de entrada e trajeto corretos; bloqueadores de Poller e blocking screws nas metáfises; conferir rotação com o lado contralateral; joelho semiestendido nas proximais.",
    },
    {
      name: "Lesão neurovascular",
      detail:
        "Nervo fibular comum vulnerável no colo da fíbula; artéria/nervo tibiais posteriores e ramo infrapatelar do safeno em risco conforme o acesso e o bloqueio distal.",
      prevention:
        "Conhecer as zonas seguras do bloqueio; dissecção romba e proteção de partes moles; cautela com afastadores no colo da fíbula.",
    },
    {
      name: "Tromboembolismo venoso",
      detail: "Risco por trauma de membro inferior, imobilização e cirurgia.",
      prevention: "Tromboprofilaxia mecânica e/ou farmacológica conforme estratificação e risco de sangramento; mobilização precoce.",
    },
  ],

  evidence: [
    {
      id: "sprint-2008",
      claim:
        "RCT multicêntrico cego (SPRINT, 1319 adultos): a haste fresada reduziu o desfecho composto de reoperação nas fraturas FECHADAS (RR 0,67; IC 0,47–0,96; p = 0,03), sem diferença nas EXPOSTAS (RR 1,27; p = 0,16). Adiar a reoperação por pseudartrose por ≥ 6 meses reduziu muito a necessidade de reintervenção.",
      takeaway:
        "Prefira a haste fresada na tíbia fechada; nas expostas, fresar ou não é indiferente. Não reopere pseudartrose antes de ~6 meses.",
      level: "I",
      studyType: "RCT multicêntrico (J Bone Joint Surg Am)",
      era: "classico",
      citation: {
        authors: "Bhandari M, Guyatt G, Tornetta P 3rd, Schemitsch EH, Swiontkowski M, Sanders D, Walter SD (SPRINT Investigators)",
        title:
          "Randomized trial of reamed and unreamed intramedullary nailing of tibial shaft fractures",
        journal: "J Bone Joint Surg Am",
        year: 2008,
        pmid: "19047701",
        doi: "10.2106/JBJS.G.01694",
        url: "https://doi.org/10.2106/JBJS.G.01694",
      },
    },
    {
      id: "cochrane-2012-imn",
      claim:
        "Revisão sistemática Cochrane (11 estudos, 2093 pacientes; dominada pelo SPRINT): sem diferença clara entre haste fresada e não-fresada em reoperação maior, pseudartrose, infecção profunda ou síndrome compartimental; a falha de implante (parafuso quebrado) foi menor com a fresada (RR 0,42).",
      takeaway:
        "A fresagem não penaliza os desfechos maiores e reduz a falha de implante — reforça a fresada como padrão na fechada.",
      level: "I",
      studyType: "Revisão sistemática Cochrane de RCTs (Cochrane Database Syst Rev)",
      era: "classico",
      citation: {
        authors: "Duan X, Al-Qwbani M, Zeng Y, Zhang W, Xiang Z",
        title: "Intramedullary nailing for tibial shaft fractures in adults",
        journal: "Cochrane Database Syst Rev",
        year: 2012,
        pmid: "22258982",
        doi: "10.1002/14651858.CD008241.pub2",
        url: "https://doi.org/10.1002/14651858.CD008241.pub2",
      },
    },
    {
      id: "lack-2015-atb",
      claim:
        "Estudo prognóstico (137 fraturas tibiais expostas tipo III): antibiótico além de 66 min (OR 3,78) e cobertura além de 5 dias (OR 7,39) predisseram independentemente infecção profunda. ATB imediato + cobertura precoce: infecção de 2,8% vs 40,5% quando ambos atrasados.",
      takeaway:
        "Na tíbia exposta tipo III, o tempo até o antibiótico é determinante — administre-o na primeira hora, idealmente já no pré-hospitalar.",
      level: "II",
      studyType: "Estudo prognóstico observacional (J Orthop Trauma)",
      era: "atual",
      citation: {
        authors: "Lack WD, Karunakar MA, Angerame MR, Seymour RB, Sims S, Kellam JF, Bosse MJ",
        title: "Type III open tibia fractures: immediate antibiotic prophylaxis minimizes infection",
        journal: "J Orthop Trauma",
        year: 2015,
        pmid: "25526095",
        doi: "10.1097/BOT.0000000000000262",
        url: "https://doi.org/10.1097/BOT.0000000000000262",
      },
    },
    {
      id: "vandepol-2024-supra-rct",
      claim:
        "RCT (95 tíbias, nível I): o acesso suprapatelar superou o infrapatelar em função patelofemoral (Kujala 92,0 vs 81,3 aos 12 meses; p < 0,01) e reduziu a dor anterior do joelho aos 12 meses (VAS 0,7 vs 2,9; p < 0,01).",
      takeaway:
        "O acesso suprapatelar oferece melhor função patelofemoral e menos dor anterior de joelho a médio prazo.",
      level: "I",
      studyType: "RCT (J Orthop Trauma)",
      era: "atual",
      citation: {
        authors: "van de Pol GJ, Axelrod DE, Conyard C, Tetsworth KD",
        title:
          "A suprapatellar approach, when compared with an infrapatellar approach, yields less anterior knee pain and better patellofemoral joint function, for intramedullary nailing of diaphyseal tibial fractures: results of a randomized controlled trial",
        journal: "J Orthop Trauma",
        year: 2024,
        pmid: "38345356",
        doi: "10.1097/BOT.0000000000002783",
        url: "https://doi.org/10.1097/BOT.0000000000002783",
      },
    },
    {
      id: "sepehri-2022-meta-supra",
      claim:
        "Revisão sistemática e meta-análise (12 estudos, 1196 pacientes): o acesso suprapatelar associou-se a melhora significativa nos desfechos relatados pelo paciente e a menor tempo de fluoroscopia intraoperatória, com melhor acurácia do ponto de entrada e da redução.",
      takeaway:
        "Além da clínica, o suprapatelar reduz a radiação e melhora a precisão técnica — tendência consistente na literatura atual.",
      level: "III",
      studyType: "Revisão sistemática e meta-análise (J Orthop Trauma)",
      era: "atual",
      citation: {
        authors: "Sepehri A, You D, Lobo AA, Schneider P, Lefaivre KA, Guy P",
        title:
          "Comparison of patient-reported outcomes after suprapatellar versus infrapatellar nailing techniques for tibial shaft fractures: a systematic review and meta-analysis",
        journal: "J Orthop Trauma",
        year: 2022,
        pmid: "34799545",
        doi: "10.1097/BOT.0000000000002303",
        url: "https://doi.org/10.1097/BOT.0000000000002303",
      },
    },
  ],

  pearls: [
    "A tíbia é a fratura de osso longo mais comum e a exposta mais frequente — a borda ântero-medial é subcutânea.",
    "Haste intramedular bloqueada é o padrão; na fratura FECHADA, prefira a fresada (menos reoperação no SPRINT).",
    "Na exposta, o antibiótico é a intervenção mais tempo-dependente: administre-o na primeira hora, some desbridamento e cobertura oportuna.",
    "Classifique a exposta (Gustilo) DEPOIS do desbridamento — o grau costuma subir na sala.",
    "Síndrome compartimental é diagnóstico clínico: dor desproporcional e dor à extensão passiva vêm antes das '5 P'.",
    "ΔP (diastólica − pressão do compartimento) < 30 mmHg indica fasciotomia dos quatro compartimentos.",
    "Fraturas proximais desviam em valgo e procurvato — o acesso suprapatelar semiestendido e blocking screws ajudam a controlá-las.",
    "O acesso suprapatelar reduz dor anterior de joelho e melhora a função patelofemoral frente ao infrapatelar.",
  ],

  pitfalls: [
    "Confiar nas '5 P' tardias e perder a janela da fasciotomia — ausência de pulso e paralisia são achados finais.",
    "Adiar o antibiótico na exposta: cada hora conta para a infecção profunda.",
    "Fresar com a fratura em desvio — deslocar fragmentos e criar defeito ósseo.",
    "Ponto de entrada medial/posterior demais → valgo e procurvato nas fraturas proximais.",
    "Bloqueio insuficiente nas metáfises proximal/distal → perda de redução e malrotação.",
    "Deixar a fíbula intacta distrair o foco e não reconhecer a pseudartrose do terço médio-distal.",
    "Ignorar a rotação: liberar o paciente com o pé rodado por falta de conferência intraoperatória.",
    "Assumir que a fratura exposta 'descomprime' os compartimentos — a síndrome compartimental ocorre na exposta.",
  ],

  figures: [
    {
      id: "fratura-diafise-tibial:anatomia",
      caption: "Tíbia e fíbula: borda ântero-medial subcutânea, secção triangular e artéria nutrícia proximal.",
      alt: "Vista anterior de tíbia e fíbula com borda subcutânea e artéria nutrícia assinaladas.",
    },
    {
      id: "fratura-diafise-tibial:compartimentos",
      caption: "Corte transverso da perna — quatro compartimentos fasciais; síndrome compartimental (5 P / ΔP < 30 mmHg).",
      alt: "Secção axial da perna com os compartimentos anterior, lateral, posterior superficial e profundo.",
    },
    {
      id: "fratura-diafise-tibial:gustilo",
      variant: "I",
      caption: "Gustilo–Anderson I — ferida < 1 cm, limpa, baixa energia.",
      alt: "Tíbia com traço simples e ferida cutânea puntiforme.",
    },
    {
      id: "fratura-diafise-tibial:gustilo",
      variant: "II",
      caption: "Gustilo–Anderson II — ferida 1–10 cm, lesão moderada de partes moles.",
      alt: "Tíbia com ferida cutânea moderada.",
    },
    {
      id: "fratura-diafise-tibial:gustilo",
      variant: "IIIA",
      caption: "Gustilo–Anderson IIIA — alta energia com cobertura de partes moles adequada.",
      alt: "Tíbia cominutiva com ferida ampla, cobertura possível.",
    },
    {
      id: "fratura-diafise-tibial:gustilo",
      variant: "IIIB",
      caption: "Gustilo–Anderson IIIB — perda de cobertura e exposição óssea (exige retalho).",
      alt: "Tíbia cominutiva com osso exposto e perda de partes moles.",
    },
    {
      id: "fratura-diafise-tibial:gustilo",
      variant: "IIIC",
      caption: "Gustilo–Anderson IIIC — lesão arterial que requer reparo.",
      alt: "Tíbia cominutiva com lesão arterial assinalada.",
    },
    {
      id: "fratura-diafise-tibial:via-suprapatelar",
      caption: "Acesso suprapatelar — joelho semiestendido, portal acima da patela pela patelofemoral.",
      alt: "Joelho semiestendido com haste entrando por portal suprapatelar.",
    },
    {
      id: "fratura-diafise-tibial:via-infrapatelar",
      caption: "Acesso infrapatelar — joelho fletido, portal no tendão patelar.",
      alt: "Joelho fletido com haste entrando por portal infrapatelar.",
    },
    {
      id: "fratura-diafise-tibial:step-entrada",
      caption: "Passo 1 — ponto de entrada correto e fio-guia central no canal.",
      alt: "Tíbia proximal com ponto de entrada e fio-guia centralizado.",
    },
    {
      id: "fratura-diafise-tibial:step-fresagem",
      caption: "Passo 2 — fresagem sequencial (0,5 mm/passo) com a fratura reduzida.",
      alt: "Fresa flexível descendo pelo canal medular da tíbia reduzida.",
    },
    {
      id: "fratura-diafise-tibial:step-bloqueio",
      caption: "Passo 3 — haste bloqueada em modo estático (parafusos proximais e distais).",
      alt: "Haste intramedular tibial com bloqueio proximal e distal.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Bhandari et al. (SPRINT), J Bone Joint Surg Am 2008",
      "Duan et al. (Cochrane), Cochrane Database Syst Rev 2012",
      "Lack et al., J Orthop Trauma 2015",
      "van de Pol et al., J Orthop Trauma 2024",
      "Sepehri et al., J Orthop Trauma 2022",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados nesta seção.",
  },
});
