import { defineTopic } from "../../types/topic";

/* Fratura da diáfise femoral.
   Escopo: haste intramedular fresada bloqueada (padrão-ouro), anterógrada vs
   retrógrada, timing (controle de danos × fixação precoce), embolia gordurosa
   e fratura exposta. Evidência recuperada do PubMed (DOIs citados). */
export const topic = defineTopic({
  id: "mi-femur-diafise",
  slug: "fratura-diafise-femoral",
  regionId: "membro-inferior",
  bone: "Fêmur",
  injury: "Fratura diafisária",
  title: "Fratura da diáfise femoral",
  subtitle:
    "Fratura de alta energia do osso mais forte do corpo — haste intramedular fresada bloqueada como padrão-ouro e a decisão de timing no politraumatizado.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura da diáfise femoral resulta tipicamente de trauma de alta energia (colisões, quedas de altura, ferimentos por arma de fogo) em adultos jovens, ou de trauma de baixa energia em idosos osteoporóticos. Por exigir grande transferência de energia, associa-se com frequência a politrauma, choque hemorrágico e lesões concomitantes — a busca ativa por outras lesões é obrigatória.\n\nO fêmur pode sequestrar 1 a 1,5 litro de sangue por fratura, contribuindo para a instabilidade hemodinâmica. As potentes forças musculares (iliopsoas, glúteos e adutores) deslocam os fragmentos, produzindo encurtamento e deformidade em flexão/abdução do fragmento proximal.\n\nO tratamento de escolha é a haste intramedular bloqueada, preferencialmente fresada — um implante de compartilhamento de carga que preserva o hematoma fraturário e o envelope de partes moles, permitindo mobilização precoce. A grande decisão no doente grave não é o método definitivo (haste), mas o timing: fixação definitiva precoce nos estáveis versus controle de danos (fixador externo) nos limítrofes/instáveis, poupando o \"segundo golpe\" inflamatório.",

  keyFacts: [
    { label: "Mecanismo", value: "Alta energia; suspeitar politrauma" },
    { label: "Perda sanguínea", value: "~1–1,5 L por fratura de fêmur" },
    { label: "Padrão-ouro", value: "Haste IM fresada bloqueada" },
    { label: "Acesso", value: "Anterógrado (padrão) ou retrógrado" },
    { label: "Decisão-chave", value: "Fixação precoce × controle de danos" },
    { label: "Exposta", value: "ATB precoce + desbridamento; haste após limpeza" },
  ],

  anatomy: {
    text:
      "A diáfise femoral estende-se de 5 cm distal ao trocânter menor até 5 cm proximal ao tubérculo dos adutores. É um osso tubular com cortical espessa e um arco anterior (convexidade anterolateral) que deve ser respeitado ao escolher o raio de curvatura da haste. O istmo — a porção mais estreita do canal medular — determina o diâmetro máximo de haste e é o principal ponto de fixação por atrito de hastes não-fresadas.\n\nO suprimento sanguíneo é duplo: a artéria nutrícia (ramo da femoral profunda) penetra a cortical posterior na linha áspera e supre os dois terços internos da cortical de dentro para fora; o periósteo supre o terço externo. A fresagem lesa transitoriamente o aporte endosteal, mas ele se regenera — daí a preferência histórica pela haste fresada apesar do insulto vascular.\n\nAs forças deformantes definem o padrão de desvio: o iliopsoas flete e roda externamente o fragmento proximal, os glúteos o abduzem, e os adutores tracionam o fragmento distal em varo e encurtamento. O nervo e os vasos femorais correm anteromediais; a artéria femoral atravessa o hiato dos adutores distalmente, exposta em fraturas do terço distal.",
    figureIds: ["fratura-diafise-femoral:anatomia"],
  },

  classification: [
    {
      id: "winquist-hansen",
      name: "Winquist–Hansen",
      basis: "Grau de cominuição e contato cortical no foco",
      note: "Orienta a estabilidade rotacional e axial e a necessidade de bloqueio estático. Selecione um tipo para ver o padrão de cominuição.",
      types: [
        {
          code: "Tipo I",
          label: "Cominuição mínima",
          description:
            "Pequeno fragmento ou traço simples com > 75% de contato cortical — estável ao encurtamento e à rotação.",
          figureId: "fratura-diafise-femoral:winquist",
          figureVariant: "I",
        },
        {
          code: "Tipo II",
          label: "Fragmento em asa",
          description:
            "Fragmento borboleta com ≥ 50% de contato cortical entre os fragmentos principais — ainda razoavelmente estável.",
          figureId: "fratura-diafise-femoral:winquist",
          figureVariant: "II",
        },
        {
          code: "Tipo III",
          label: "Cominuição 50–100%",
          description:
            "Cominuição de 50 a 100% da circunferência; contato cortical insuficiente — exige bloqueio estático para controlar comprimento e rotação.",
          figureId: "fratura-diafise-femoral:winquist",
          figureVariant: "III",
        },
        {
          code: "Tipo IV",
          label: "Segmentar / sem contato",
          description:
            "Cominuição circunferencial completa ou fratura segmentar, sem contato cortical entre os fragmentos — instável; bloqueio estático mandatório.",
          figureId: "fratura-diafise-femoral:winquist",
          figureVariant: "IV",
        },
      ],
    },
    {
      id: "ao-ota-32",
      name: "AO/OTA (segmento 32)",
      basis: "Morfologia do traço na diáfise (32 = diáfise femoral)",
      note: "Sistema alfanumérico que gradua a complexidade do traço; usado para documentação e pesquisa.",
      types: [
        { code: "32A", label: "Simples", description: "Traço único — espiral (A1), oblíquo (A2) ou transverso (A3)." },
        { code: "32B", label: "Em cunha", description: "Fragmento em cunha (borboleta) com contato entre os fragmentos principais após redução." },
        { code: "32C", label: "Complexa", description: "Multifragmentar sem contato após redução — cunha fragmentada ou cominuição segmentar." },
      ],
    },
    {
      id: "gustilo-anderson",
      name: "Gustilo–Anderson (se exposta)",
      basis: "Tamanho da ferida, contaminação e lesão de partes moles",
      types: [
        { code: "I", label: "< 1 cm, limpa", description: "Ferida puntiforme, contaminação mínima, baixa energia." },
        { code: "II", label: "1–10 cm", description: "Lesão moderada de partes moles, sem cominuição extensa nem desvitalização importante." },
        { code: "IIIA", label: "Cobertura adequada", description: "Alta energia/cominuição, mas cobertura de partes moles possível." },
        { code: "IIIB", label: "Perda de cobertura", description: "Desperiostização e perda de partes moles — exige retalho para cobertura." },
        { code: "IIIC", label: "Lesão arterial", description: "Lesão vascular que requer reparo para salvar o membro." },
      ],
    },
  ],

  indications: {
    operative: [
      "Praticamente todas as fraturas diafisárias femorais no adulto — a fixação cirúrgica é a regra",
      "Haste intramedular fresada bloqueada: implante de escolha para o traço fechado ou exposto após limpeza",
      "Fixação externa temporária (controle de danos) no politraumatizado fisiologicamente instável ou limítrofe",
      "Placa em ponte quando a haste é inviável (canal muito estreito, deformidade/implante prévio, fratura periprotética adjacente)",
      "Fratura exposta: desbridamento e antibioticoterapia precoces; haste após limpeza adequada",
    ],
    nonOperative: [
      "Excepcional no adulto — reservado a paciente sem condições clínicas de qualquer cirurgia",
      "Tração esquelética apenas como medida temporária/de transporte quando a fixação não está disponível",
      "Crianças pequenas (fora do escopo deste tópico) toleram tratamento incruento",
    ],
    decisionNotes:
      "A questão raramente é operar ou não — é quando e como. No doente estável, a fixação definitiva precoce (early total care) com haste reduz complicações pulmonares, tempo de internação e custos (Bone/Pape). No doente limítrofe ou instável (\"in extremis\"), o controle de danos ortopédico (DCO) com fixador externo evita o segundo golpe inflamatório da instrumentação intramedular precoce, convertendo-se para haste após ressuscitação (EPOFF). Parâmetros de ressuscitação — lactato, déficit de base, temperatura, coagulação e resposta à volemia — guiam a escolha melhor do que qualquer regra rígida. Quanto à fresagem, a haste fresada é o padrão pela menor taxa de pseudartrose e reoperação, sem aumento demonstrado de SDRA na fratura fechada.",
  },

  approaches: [
    {
      id: "anterograda",
      name: "Anterógrada (trocantérica/piriforme)",
      indication:
        "Acesso padrão para a maioria das fraturas diafisárias, sobretudo do terço proximal e médio. Paciente em mesa de tração ou decúbito lateral.",
      interval:
        "Ápice do trocânter maior (hastes trocantéricas) ou fossa piriforme (hastes retas) — divulsão do glúteo médio.",
      atRisk: ["Suprimento da cabeça femoral (fossa piriforme)", "Glúteo médio / abdutores", "N. glúteo superior"],
      figureId: "fratura-diafise-femoral:via-anterograda",
    },
    {
      id: "retrograda",
      name: "Retrógrada (intercondilar)",
      indication:
        "Fraturas do terço distal, fêmur flutuante (fratura ipsilateral de tíbia), obeso, gestante, politrauma que exige decúbito dorsal, ou fratura periprotética supracondilar.",
      interval:
        "Sulco intercondilar, imediatamente anterior à inserção do LCP, via tendão patelar (transtendínea ou medial ao tendão).",
      atRisk: ["Cartilagem patelofemoral", "Ligamento cruzado posterior", "Joelho (sepse/rigidez)"],
      figureId: "fratura-diafise-femoral:via-retrograda",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Redução e planejamento",
      detail:
        "Restaurar comprimento, alinhamento e — crucialmente — a rotação, por redução fechada em mesa de tração ou com o membro livre. Conferir a rotação comparando o perfil do trocânter menor e o ângulo cervicodiafisário com o lado contralateral sob fluoroscopia. Planejar comprimento e diâmetro da haste a partir do lado sadio.",
      figureId: "fratura-diafise-femoral:step-reducao",
      tips: [
        "Compare o trocânter menor com o lado contralateral para acertar a rotação.",
        "Cominuição impede o \"encaixe\" cortical — confie em referências radiográficas para comprimento/rotação.",
      ],
      pitfalls: [
        "Malrotação é a complicação técnica mais comum e mais subestimada.",
        "Tração excessiva/prolongada na mesa pode causar lesão do pudendo por compressão perineal.",
      ],
    },
    {
      n: 2,
      title: "Ponto de entrada e fio-guia",
      detail:
        "Estabelecer o ponto de entrada correto (ápice do trocânter para hastes trocantéricas; fossa piriforme para hastes retas, colinear ao canal). Passar o fio-guia com ponta em bola atravessando o foco reduzido, centrado no canal em ambas as incidências, avançando até o osso subcondral distal.",
      figureId: "fratura-diafise-femoral:step-ponto-entrada",
      tips: [
        "Ponto de entrada correto é o passo que mais previne deformidade — errar lateralmente induz varo.",
        "Confirme o fio-guia centrado no canal distal antes de fresar.",
      ],
      pitfalls: [
        "Entrada lateral demais → deformidade em varo e afilamento da cortical medial.",
        "Fio-guia excêntrico → fresagem e haste em posição viciosa.",
      ],
    },
    {
      n: 3,
      title: "Fresagem sequencial",
      detail:
        "Manter o foco reduzido durante toda a fresagem (fresar em desvio empurra fragmentos e amplia o defeito). Fresar em incrementos de 0,5 mm com fresas afiadas e de haste flexível, 1,0–1,5 mm acima do diâmetro da haste pretendida. A fresagem gera calor e pressão intramedular — usar fresas afiadas e irrigação minimiza a carga de êmbolos gordurosos.",
      figureId: "fratura-diafise-femoral:step-fresagem",
      tips: [
        "Fresas afiadas e avanço lento reduzem calor e pressão intramedular.",
        "Sobre-fresar 1,0–1,5 mm facilita a passagem sem impactação.",
      ],
      pitfalls: [
        "Fresar com a fratura em desvio desloca fragmentos e pode causar defeito ósseo.",
        "Fresas cegas → necrose térmica e maior embolização.",
      ],
    },
    {
      n: 4,
      title: "Passagem da haste e bloqueio",
      detail:
        "Introduzir a haste sobre o fio-guia de troca, mantendo a redução. Bloquear proximal e distalmente. O bloqueio estático (proximal + distal) é a regra em fraturas cominutivas/instáveis (Winquist III–IV) para controlar comprimento e rotação; o bloqueio dinâmico é exceção. Conferir comprimento, alinhamento e rotação finais antes de fechar.",
      figureId: "fratura-diafise-femoral:step-bloqueio",
      tips: [
        "Bloqueio estático em toda cominuição — nunca confie no contato cortical instável.",
        "Reavalie a rotação após o bloqueio, antes de acordar o paciente.",
      ],
      pitfalls: [
        "Esquecer um parafuso distal → encurtamento/rotação e falha por fadiga.",
        "Bloqueio distal a mão livre mal executado → múltiplas perfurações e enfraquecimento cortical.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Nenhuma imobilização externa após haste bloqueada — o implante é estável o suficiente para movimento imediato de quadril e joelho. Analgesia e mobilização precoce previnem rigidez e complicações do decúbito.",
    weightBearing:
      "Haste fresada bloqueada em fratura estável (Winquist I–II): carga conforme tolerada precoce. Em cominuição extensa (Winquist III–IV) ou padrão muito instável, alguns cirurgiões protegem a carga por 6 semanas antes de liberar. Fixador externo de controle de danos: sem carga até a conversão para haste.",
    rehab: [
      { window: "0–2 sem", weightBearing: "Conforme tolerada (estável) / protegida", focus: "ADM ativa de quadril e joelho; controle da dor e do edema; prevenção de TVP." },
      { window: "2–6 sem", weightBearing: "Progressão da carga", focus: "Fortalecimento do quadríceps e glúteos; marcha com apoio; ganho de ADM do joelho." },
      { window: "6–12 sem", weightBearing: "Carga total, desmame de apoios", focus: "Marcha sem auxílio; propriocepção; sinais radiográficos de calo." },
      { window: "> 12 sem", weightBearing: "Total, sem restrição", focus: "Retorno gradual às atividades/impacto conforme consolidação; avaliar dinamização se atraso de consolidação." },
    ],
    followup:
      "Radiografias seriadas para acompanhar a consolidação (calo em 4 pontos corticais). Vigiar malrotação (queixa de rotação anômala do pé) com TC comparativa se suspeita. Considerar dinamização (retirada do bloqueio de um lado) ou troca de haste por haste maior fresada em caso de atraso/pseudartrose hipertrófica.",
  },

  complications: [
    {
      name: "Embolia gordurosa / SDRA",
      detail:
        "Glóbulos de gordura medular embolizam para o pulmão durante a fresagem e a instrumentação, podendo causar síndrome da embolia gordurosa (hipoxemia, petéquias, alteração neurológica) e contribuir para SDRA no politraumatizado.",
      prevention:
        "Fresas afiadas, avanço lento e irrigação reduzem a pressão intramedular; controle de danos (fixador externo) no doente pulmonar limítrofe adia a carga embólica da haste.",
    },
    {
      name: "Malrotação",
      detail:
        "Complicação técnica mais comum e frequentemente não reconhecida no intraoperatório; a cominuição elimina as referências corticais de rotação.",
      prevention:
        "Comparar o perfil do trocânter menor e o ângulo cervicodiafisário com o lado contralateral; TC pós-operatória se houver dúvida.",
    },
    {
      name: "Pseudartrose / atraso de consolidação",
      detail:
        "Maior nas fraturas de alta energia, cominutivas, expostas e em tabagistas; a haste não-fresada tem taxa de pseudartrose superior à fresada.",
      prevention:
        "Preferir haste fresada; estabilidade e alinhamento adequados; dinamização ou troca de haste fresada se atraso.",
    },
    {
      name: "Infecção",
      detail:
        "Mais frequente nas fraturas expostas; a infecção intramedular após haste é grave e de difícil erradicação.",
      prevention:
        "Antibioticoterapia precoce e desbridamento nas expostas; técnica asséptica; haste só após limpeza adequada.",
    },
    {
      name: "Deformidade em varo / erro de ponto de entrada",
      detail:
        "Ponto de entrada lateral ou fio-guia excêntrico geram deformidade angular, sobretudo em varo nas fraturas proximais.",
      prevention: "Estabelecer o ponto de entrada correto e o fio-guia centrado antes de fresar.",
    },
    {
      name: "Lesão do nervo pudendo",
      detail:
        "Compressão perineal contra o poste da mesa de tração durante tração prolongada — parestesia genital, em geral transitória.",
      prevention: "Acolchoar o poste, limitar a força e o tempo de tração.",
    },
    {
      name: "Dor no joelho (acesso retrógrado)",
      detail:
        "Dor anterior do joelho e risco de sepse/rigidez articular relacionados à violação da articulação na entrada intercondilar.",
      prevention: "Ponto de entrada preciso anterior ao LCP; rebaixar a haste sob a cartilagem; ADM precoce do joelho.",
    },
    {
      name: "Tromboembolismo venoso",
      detail: "Risco elevado por trauma de membro inferior, imobilidade e estado de hipercoagulabilidade do politrauma.",
      prevention: "Tromboprofilaxia mecânica e farmacológica conforme estratificação e risco de sangramento.",
    },
  ],

  evidence: [
    {
      id: "pape-2003-epoff",
      claim:
        "RCT multicêntrico (EPOFF): a haste intramedular primária (< 24 h) no politraumatizado provocou aumento sustentado de IL-6/IL-8, não observado com fixador externo ou na conversão secundária para haste — sustento imunológico do controle de danos.",
      takeaway: "A instrumentação intramedular precoce é um 'segundo golpe' inflamatório; o controle de danos o atenua no doente grave.",
      level: "II",
      studyType: "RCT multicêntrico (J Trauma)",
      era: "classico",
      citation: {
        authors: "Pape HC, Grimme K, van Griensven M, et al. (EPOFF Study Group)",
        title:
          "Impact of intramedullary instrumentation versus damage control for femoral fractures on immunoinflammatory parameters: prospective randomized analysis by the EPOFF Study Group",
        journal: "J Trauma",
        year: 2003,
        pmid: "12855874",
        doi: "10.1097/01.TA.0000075787.69695.4E",
        url: "https://doi.org/10.1097/01.TA.0000075787.69695.4E",
      },
    },
    {
      id: "shepherd-2001-reamed",
      claim:
        "RCT (100 fraturas): a haste não-fresada foi mais rápida e com menor sangramento, mas teve mais complicações perioperatórias (18 vs 7) e casos que exigiram fresagem de resgate por incompatibilidade canal/haste.",
      takeaway: "Poupar a fresagem economiza tempo e sangue, mas troca isso por mais problemas técnicos e de fixação.",
      level: "II",
      studyType: "RCT (J Orthop Trauma)",
      era: "classico",
      citation: {
        authors: "Shepherd LE, Shean CJ, Gelalis ID, Lee J, Carter VS",
        title:
          "Prospective randomized study of reamed versus unreamed femoral intramedullary nailing: an assessment of procedures",
        journal: "J Orthop Trauma",
        year: 2001,
        pmid: "11147684",
        doi: "10.1097/00005131-200101000-00005",
        url: "https://doi.org/10.1097/00005131-200101000-00005",
      },
    },
    {
      id: "tuttle-2009-dco",
      claim:
        "Coorte de politraumatizados: o controle de danos com fixador externo teve tempo cirúrgico (22 vs 125 min) e sangramento (37 vs 330 mL) muito menores que a haste precoce, sem diferença em SDRA, falência de múltiplos órgãos ou mortalidade.",
      takeaway: "O fixador externo é um primeiro tempo seguro no doente grave, com muito menor insulto operatório e sem penalizar desfechos sistêmicos.",
      level: "III",
      studyType: "Coorte comparativa (J Trauma)",
      era: "atual",
      citation: {
        authors: "Tuttle MS, Smith WR, Williams AE, et al.",
        title:
          "Safety and efficacy of damage control external fixation versus early definitive stabilization for femoral shaft fractures in the multiple-injured patient",
        journal: "J Trauma",
        year: 2009,
        pmid: "19741407",
        doi: "10.1097/TA.0b013e3181aa21c0",
        url: "https://doi.org/10.1097/TA.0b013e3181aa21c0",
      },
    },
    {
      id: "li-2016-meta",
      claim:
        "Meta-análise de 8 RCTs (1078 pacientes): a haste fresada teve menor tempo até a consolidação, menor pseudartrose (OR 0,14), menor atraso de consolidação e menos reoperações, sem aumento de SDRA, falha de implante, mortalidade ou sangramento.",
      takeaway: "A fresagem é o padrão: melhora a consolidação e reduz reoperação sem custo pulmonar demonstrável.",
      level: "I",
      studyType: "Revisão sistemática e meta-análise de RCTs (Medicine)",
      era: "atual",
      citation: {
        authors: "Li AB, Zhang WJ, Guo WJ, Wang XH, Jin HM, Zhao YM",
        title:
          "Reamed versus unreamed intramedullary nailing for the treatment of femoral fractures: A meta-analysis of prospective randomized controlled trials",
        journal: "Medicine (Baltimore)",
        year: 2016,
        pmid: "27442651",
        doi: "10.1097/MD.0000000000004248",
        url: "https://doi.org/10.1097/MD.0000000000004248",
      },
    },
    {
      id: "huang-2021-meta",
      claim:
        "Meta-análise de 8 RCTs: a haste fresada reduziu a pseudartrose (RR 0,20) e a taxa de reoperação (RR 0,28); a não-fresada teve menor sangramento. Sem diferença nas taxas de SDRA ou de complicações pulmonares entre as técnicas.",
      takeaway: "Confirma a fresada como padrão-ouro por consolidação/reoperação, dissipando o receio de mais SDRA na fratura fechada.",
      level: "I",
      studyType: "Revisão sistemática e meta-análise de RCTs (J Orthop Sci)",
      era: "atual",
      citation: {
        authors: "Huang X, Chen Y, Chen B, Zheng K, Lin C, Lin F, Luo X",
        title:
          "Reamed versus unreamed intramedullary nailing for the treatment of femoral shaft fractures among adults: A meta-analysis of randomized controlled trials",
        journal: "J Orthop Sci",
        year: 2021,
        pmid: "34303590",
        doi: "10.1016/j.jos.2021.03.022",
        url: "https://doi.org/10.1016/j.jos.2021.03.022",
      },
    },
  ],

  pearls: [
    "Fratura de fêmur diafisário = trauma de alta energia até prova em contrário: procure ativamente outras lesões e choque.",
    "O fêmur sangra 1–1,5 L; a fratura contribui para a instabilidade hemodinâmica.",
    "Haste intramedular fresada bloqueada é o padrão-ouro: melhor consolidação e menor reoperação que a não-fresada.",
    "No doente estável, fixe cedo (menos complicação pulmonar, internação e custo); no instável, controle de danos com fixador externo.",
    "O timing guia-se pela fisiologia (lactato, déficit de base, coagulação, temperatura), não por uma regra fixa de horas.",
    "Acerte a rotação comparando o trocânter menor com o lado contralateral — a malrotação é a falha técnica mais comum.",
    "Ponto de entrada correto previne o varo; centralize o fio-guia antes de fresar.",
    "Retrógrado é a escolha no fêmur distal, fêmur flutuante, obeso, gestante ou politrauma que exige decúbito dorsal.",
  ],

  pitfalls: [
    "Tratar a fratura e esquecer o politrauma — perder lesões associadas e o choque.",
    "Insistir em haste precoce no doente 'in extremis' e desencadear o segundo golpe inflamatório.",
    "Fresar com a fratura em desvio — deslocar fragmentos e criar defeito ósseo.",
    "Ponto de entrada lateral demais → deformidade em varo.",
    "Não bloquear estaticamente uma fratura Winquist III–IV → encurtamento e malrotação.",
    "Ignorar a rotação: liberar o paciente com o pé rodado por falta de conferência intraoperatória.",
    "Tração perineal prolongada na mesa → lesão do nervo pudendo.",
    "Na exposta, adiar o antibiótico e o desbridamento aumenta a infecção intramedular.",
  ],

  figures: [
    {
      id: "fratura-diafise-femoral:anatomia",
      caption: "Diáfise femoral: istmo, arco anterior e forças deformantes (iliopsoas, glúteos, adutores).",
      alt: "Fêmur em vista anterior com setas das forças musculares deformantes.",
    },
    {
      id: "fratura-diafise-femoral:winquist",
      variant: "I",
      caption: "Winquist–Hansen I — cominuição mínima, > 75% de contato cortical.",
      alt: "Traço diafisário simples com fragmentos bem apostos.",
    },
    {
      id: "fratura-diafise-femoral:winquist",
      variant: "II",
      caption: "Winquist–Hansen II — fragmento em asa, ≥ 50% de contato cortical.",
      alt: "Fratura com fragmento borboleta parcial.",
    },
    {
      id: "fratura-diafise-femoral:winquist",
      variant: "III",
      caption: "Winquist–Hansen III — cominuição de 50–100% da circunferência.",
      alt: "Fratura cominutiva com contato cortical insuficiente.",
    },
    {
      id: "fratura-diafise-femoral:winquist",
      variant: "IV",
      caption: "Winquist–Hansen IV — segmentar, sem contato cortical (instável).",
      alt: "Fratura segmentar com múltiplos fragmentos livres.",
    },
    {
      id: "fratura-diafise-femoral:via-anterograda",
      caption: "Acesso anterógrado — entrada no ápice do trocânter / fossa piriforme.",
      alt: "Fêmur proximal com haste anterógrada e ponto de entrada trocantérico.",
    },
    {
      id: "fratura-diafise-femoral:via-retrograda",
      caption: "Acesso retrógrado — entrada no sulco intercondilar, anterior ao LCP.",
      alt: "Fêmur distal com haste retrógrada e ponto de entrada intercondilar.",
    },
    {
      id: "fratura-diafise-femoral:step-reducao",
      caption: "Passo 1 — redução fechada com tração longitudinal na mesa de tração.",
      alt: "Fragmentos femorais alinhados sob tração com bota de tração.",
    },
    {
      id: "fratura-diafise-femoral:step-ponto-entrada",
      caption: "Passo 2 — ponto de entrada correto e fio-guia central no canal.",
      alt: "Fio-guia com ponta em bola centralizado no canal medular.",
    },
    {
      id: "fratura-diafise-femoral:step-fresagem",
      caption: "Passo 3 — fresagem sequencial (0,5 mm/passo) com a fratura reduzida.",
      alt: "Fresa flexível descendo pelo canal medular do fêmur reduzido.",
    },
    {
      id: "fratura-diafise-femoral:step-bloqueio",
      caption: "Passo 4 — haste bloqueada em modo estático (parafusos proximal e distal).",
      alt: "Haste intramedular com parafusos de bloqueio proximal e distal.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Pape et al. (EPOFF), J Trauma 2003",
      "Shepherd et al., J Orthop Trauma 2001",
      "Tuttle et al., J Trauma 2009",
      "Li et al., Medicine 2016",
      "Huang et al., J Orthop Sci 2021",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados nesta seção.",
  },
});
