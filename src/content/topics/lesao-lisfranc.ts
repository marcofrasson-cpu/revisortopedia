import { defineTopic } from "../../types/topic";

/* ============================================================================
   Lesão de Lisfranc (lesão tarsometatársica)
   Conteúdo clínico pt-BR. Figuras com prefixo "lesao-lisfranc:".
   ========================================================================== */

export const topic = defineTopic({
  id: "lesao-lisfranc",
  slug: "lesao-lisfranc",
  regionId: "membro-inferior",
  bone: "Pé",
  injury: "Lesão tarsometatársica",
  title: "Lesão de Lisfranc",
  subtitle: "Complexo tarsometatársico — do sinal do fleck à artrodese primária",
  laterality: null,
  status: "complete",

  overview:
    "A lesão de Lisfranc compreende o espectro de traumas do complexo articular tarsometatársico (TMT), da entorse ligamentar sutil à fratura-luxação com grande desvio. A estabilidade do médio-pé depende da geometria em arco romano das bases metatársicas e, sobretudo, do ligamento de Lisfranc — banda plantar robusta que conecta o cuneiforme medial à base do segundo metatarso, o único elo entre a primeira e a segunda colunas (não há ligamento intermetatársico dorsal entre as bases do 1º e 2º MT). A base do segundo metatarso encaixa-se, recuada, num mortise formado pelos cuneiformes, funcionando como pedra angular do arco transverso. Até um terço das lesões passa despercebido na avaliação inicial, e o atraso diagnóstico ou a redução inadequada levam a artrose pós-traumática, colapso do arco e incapacidade prolongada. O diagnóstico apoia-se na suspeição clínica (dor plantar, equimose plantar, incapacidade de carga), no sinal do 'fleck' e na diástase 1º–2º nas radiografias em carga ou sob estresse, complementadas por TC. O tratamento das lesões instáveis é cirúrgico; o debate central opõe a redução aberta com fixação interna (ORIF) — parafuso transarticular ou placa dorsal em ponte — à artrodese primária, sobretudo nas lesões puramente ligamentares.",

  keyFacts: [
    { label: "Estabilizador-chave", value: "Ligamento de Lisfranc (cuneiforme medial → base do 2º MT)" },
    { label: "Pedra angular", value: "Base do 2º MT recuada no mortise dos cuneiformes" },
    { label: "Sinal patognomônico", value: "'Fleck sign' no 1º–2º espaço" },
    { label: "Exame decisivo", value: "RX em carga/estresse + TC (diástase > 2 mm)" },
    { label: "Taxa de erro diagnóstico", value: "Até ~20–30% inicialmente despercebidas" },
    { label: "Debate operatório", value: "ORIF vs artrodese primária (lesão ligamentar)" },
  ],

  anatomy: {
    text:
      "O complexo de Lisfranc articula as bases dos cinco metatarsos com os três cuneiformes e o cuboide, organizado em três colunas funcionais: medial (1º TMT, com maior mobilidade sagital), média (2º e 3º TMT, praticamente rígida) e lateral (4º e 5º TMT com o cuboide, a mais móvel). A estabilidade transversal deriva do arco romano — as bases metatársicas trapezoidais encaixam-se em cunha, com o 2º metatarso recuado proximalmente num mortise formado pelos cuneiformes medial e lateral e chaveado ao cuneiforme intermédio (o mais curto). O ligamento de Lisfranc, que vai da face lateral do cuneiforme medial à base plantar do 2º metatarso, é o principal restritor; não existe ligamento intermetatársico entre as bases do 1º e do 2º MT, o que torna esse intervalo o ponto frágil onde a diástase se manifesta. Os ligamentos plantares são mais fortes que os dorsais, explicando o padrão de desvio dorsal e a equimose plantar característica. O feixe neurovascular dorsal (artéria dorsal do pé e ramo do nervo fibular profundo) cruza o 1º–2º espaço e a artéria plantar profunda mergulha entre as bases do 1º e 2º MT — estruturas em risco no acesso e na redução.",
    figureIds: ["lesao-lisfranc:anatomia"],
  },

  classification: [
    {
      id: "myerson",
      name: "Classificação de Myerson (Quénu-Küss modificada)",
      basis: "Padrão e direção do desvio das colunas na fratura-luxação",
      note: "Descritiva e útil para a comunicação; não prediz isoladamente o prognóstico, que depende sobretudo da qualidade da redução.",
      types: [
        {
          code: "A",
          label: "Incongruência total (homolateral)",
          description:
            "Todos os cinco metatarsos desviam-se no mesmo sentido (em geral lateral), com incongruência de todo o complexo TMT.",
          figureId: "lesao-lisfranc:classificacao",
          figureVariant: "A",
        },
        {
          code: "B",
          label: "Incongruência parcial",
          description:
            "Apenas uma coluna se desloca: B1 com desvio medial (1º MT/coluna medial) e B2 com desvio lateral de uma ou mais das colunas laterais, permanecendo o restante congruente.",
          figureId: "lesao-lisfranc:classificacao",
          figureVariant: "B",
        },
        {
          code: "C",
          label: "Divergente",
          description:
            "Padrão divergente: 1º metatarso desviado medialmente e os demais lateralmente. C1 parcial e C2 total — associados a maior energia, edema e risco de síndrome compartimental.",
          figureId: "lesao-lisfranc:classificacao",
          figureVariant: "C",
        },
      ],
    },
    {
      id: "nunley-vertullo",
      name: "Classificação de Nunley-Vertullo (lesões atléticas sutis)",
      basis: "Diástase em carga e cintilografia/perda de altura do arco",
      note: "Voltada às lesões ligamentares de baixa energia; orienta a decisão entre tratamento conservador e cirúrgico.",
      types: [
        {
          code: "I",
          label: "Estável",
          description:
            "Entorse do ligamento de Lisfranc sem diástase (< 2 mm) e sem perda de altura do arco; radiografia em carga normal. Tratamento conservador.",
        },
        {
          code: "II",
          label: "Diástase sem colapso",
          description:
            "Diástase de 2–5 mm entre 1º e 2º MT em carga, sem perda de altura do arco longitudinal. Instável — indicação cirúrgica.",
        },
        {
          code: "III",
          label: "Diástase com colapso do arco",
          description:
            "Diástase > 5 mm e perda de altura do arco longitudinal medial. Instável, com maior desvio — tratamento cirúrgico.",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Qualquer instabilidade demonstrada: diástase 1º–2º > 2 mm em radiografia em carga ou sob estresse.",
      "Fratura-luxação tarsometatársica com desvio (Myerson A, B ou C).",
      "Sinal do 'fleck' com instabilidade confirmada ou incongruência articular na TC.",
      "Lesão ligamentar (Nunley-Vertullo II–III) — candidata a ORIF ou artrodese primária.",
      "Lesão aberta, síndrome compartimental do pé ou luxação irredutível (urgência).",
    ],
    nonOperative: [
      "Lesão estável (Nunley-Vertullo I): sem diástase (< 2 mm) em radiografia em carga e sem desvio na TC.",
      "Imobilização sem carga em bota/gesso por ~6 semanas, seguida de carga progressiva.",
      "Radiografia em carga de controle em ~2 semanas para excluir instabilidade tardia.",
    ],
    decisionNotes:
      "O eixo da decisão é a estabilidade, não o achado estático isolado: uma radiografia sem carga normal não exclui lesão de Lisfranc. Toda suspeita justifica radiografia em carga (comparativa com o pé contralateral) e, se inconclusiva, estresse sob fluoroscopia/anestesia e TC. Confirmada a instabilidade, a redução anatômica é o determinante prognóstico mais importante. Nas lesões predominantemente ósseas, o padrão continua sendo a ORIF (parafuso transarticular posicional e/ou placa dorsal em ponte, que evita nova agressão à cartilagem). Nas lesões puramente ligamentares do médio-pé, a evidência de nível I favorece a artrodese primária das colunas medial e média, com melhor função e menos reoperações — em grande parte pela retirada de material inerente à ORIF. A coluna lateral (4º–5º TMT), muito móvel, é preferencialmente poupada de fusão, estabilizada de forma temporária (fios de Kirschner) quando necessário.",
  },

  approaches: [
    {
      id: "dupla-incisao-dorsal",
      name: "Dupla incisão dorsal",
      indication:
        "Acesso padrão para redução aberta e fixação das colunas medial e média do complexo tarsometatársico.",
      interval:
        "Incisão longitudinal sobre o 1º–2º espaço (acesso ao 1º e 2º TMT, entre o tendão do extensor longo do hálux e o extensor longo dos dedos) e segunda incisão sobre o 4º metatarso (acesso ao 3º/4º TMT); manter ponte cutânea ≥ 3 cm.",
      atRisk: [
        "Artéria dorsal do pé e ramo do nervo fibular profundo (cruzam o 1º–2º espaço)",
        "Ramo comunicante/artéria plantar profunda entre as bases do 1º e 2º MT",
        "Tendões extensores (retração cuidadosa)",
      ],
      figureId: "lesao-lisfranc:via-acesso",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Confirmação da instabilidade e exposição",
      detail:
        "Sob anestesia, confirma-se a instabilidade com estresse fluoroscópico (abdução/pronação) quando a imagem estática é duvidosa. Realiza-se a dupla incisão dorsal, protegendo o feixe neurovascular do 1º–2º espaço e expondo as bases metatársicas e os cuneiformes.",
      figureId: "lesao-lisfranc:via-acesso",
      tips: [
        "Radiografia em carga/estresse comparativa é mais sensível que a imagem sem carga.",
        "Identifique e afaste a artéria dorsal do pé antes de aprofundar no 1º–2º espaço.",
      ],
      pitfalls: [
        "Confiar em radiografia sem carga normal e subvalorizar a lesão.",
        "Ponte cutânea estreita entre as incisões, com risco de necrose.",
      ],
    },
    {
      n: 2,
      title: "Redução anatômica do 2º metatarso (pedra angular)",
      detail:
        "Limpa-se o mortise de fragmentos e hematoma e reduz-se a base do 2º metatarso, restaurando o alinhamento da sua borda medial com a borda medial do cuneiforme intermédio. A pinça pontiaguda de redução é aplicada do cuneiforme medial à base do 2º MT.",
      figureId: "lesao-lisfranc:step-reducao",
      tips: [
        "A redução do 2º MT (pedra angular) costuma reduzir indiretamente as demais colunas.",
        "Cheque a congruência dorsal e a ausência de degrau na TC/fluoroscopia.",
      ],
      pitfalls: [
        "Interposição de fragmento do 'fleck' ou de tecidos moles impedindo a redução.",
        "Aceitar redução aproximada — qualquer incongruência residual piora o prognóstico.",
      ],
    },
    {
      n: 3,
      title: "Fixação com parafuso transarticular (parafuso de Lisfranc)",
      detail:
        "Fixação posicional com parafuso de 3,5–4,0 mm da base medial do cuneiforme medial à base do 2º metatarso, reconstituindo o ligamento de Lisfranc, complementada por parafusos transarticulares do 1º e 3º TMT conforme a instabilidade de cada coluna.",
      figureId: "lesao-lisfranc:fixacao",
      figureVariant: "parafuso",
      tips: [
        "É um parafuso posicional (não de compressão) — não sobreapertar para não estreitar o espaço.",
        "Considere afundar/rebaixar a cabeça para reduzir irritação dos extensores.",
      ],
      pitfalls: [
        "Parafuso transarticular agride a cartilagem e pode quebrar; frequentemente requer retirada.",
        "Trajeto inadequado, deixando o 2º MT malposicionado ('travar' a má-redução).",
      ],
    },
    {
      n: 4,
      title: "Alternativa: placa dorsal em ponte",
      detail:
        "Placa dorsal em ponte sobre o TMT, com parafusos apenas no metatarso e no cuneiforme (extra-articulares), mantendo a redução sem violar a cartilagem articular. Útil em cominuição articular ou para preservar a articulação.",
      figureId: "lesao-lisfranc:fixacao",
      figureVariant: "placa",
      tips: [
        "Evita o dano condral do parafuso transarticular, teoricamente reduzindo a artrose.",
        "Boa opção em fraturas cominutivas da base metatársica.",
      ],
      pitfalls: [
        "Proeminência dorsal do material com irritação de partes moles.",
        "Fixação insuficiente se os parafusos não ancorarem em osso de boa qualidade.",
      ],
    },
    {
      n: 5,
      title: "Alternativa: artrodese primária (lesão ligamentar)",
      detail:
        "Nas lesões puramente ligamentares do médio-pé, artrodese primária das colunas medial e média (1º–3º TMT) com preparo das superfícies e fixação em compressão (parafusos/placa). A coluna lateral, muito móvel, é preservada e, quando instável, estabilizada temporariamente com fios de Kirschner.",
      figureId: "lesao-lisfranc:fixacao",
      figureVariant: "artrodese",
      tips: [
        "Evita a reoperação para retirada de material e a artrose sintomática das colunas medial/média.",
        "Não fundir a coluna lateral: preservar a mobilidade do 4º–5º TMT.",
      ],
      pitfalls: [
        "Preparo inadequado das superfícies com pseudartrose.",
        "Malalinhamento na fusão gera sobrecarga e metatarsalgia de transferência.",
      ],
    },
    {
      n: 6,
      title: "Detalhe do parafuso de Lisfranc e verificação final",
      detail:
        "O parafuso posicional segue trajeto oblíquo dorso-distal da base medial do cuneiforme medial à base do 2º metatarso. Confirma-se a redução com fluoroscopia em múltiplas incidências (e TC quando disponível), verificando a diástase 1º–2º, o alinhamento das bordas mediais e a ausência de degrau articular.",
      figureId: "lesao-lisfranc:step-parafuso",
      tips: [
        "Uma incidência ântero-posterior isolada mascara desvios — cheque oblíqua e lateral.",
        "TC pós-operatória é a referência para confirmar redução anatômica.",
      ],
      pitfalls: [
        "Fixar antes de confirmar a redução da pedra angular.",
        "Deixar diástase residual > 2 mm no controle final.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Imobilização em bota/gesso com o pé em posição neutra; tala pós-operatória inicial e transição para bota removível após controle de partes moles.",
    weightBearing:
      "Sem carga por ~6–8 semanas, com progressão para carga parcial e depois total ao longo de 8–12 semanas, guiada pela estabilidade da fixação. A artrodese primária costuma permitir progressão de carga sem depender de retirada de material.",
    rehab: [
      {
        window: "0–2 semanas",
        weightBearing: "Sem carga, tala/bota",
        focus:
          "Controle de edema e dor, elevação, cuidados com a ferida e mobilização dos dedos.",
      },
      {
        window: "2–6 semanas",
        weightBearing: "Sem carga em bota",
        focus:
          "Amplitude de movimento suave de tornozelo e dedos, proteção da fixação, prevenção de rigidez.",
      },
      {
        window: "6–12 semanas",
        weightBearing: "Carga parcial → total progressiva em bota",
        focus:
          "Reintrodução da marcha, propriocepção, suporte de arco e fortalecimento intrínseco; desmame da bota.",
      },
      {
        window: "> 12 semanas",
        weightBearing: "Carga total, transição para calçado",
        focus:
          "Fortalecimento global, palmilha/suporte de arco, retorno gradual a corrida e esporte por critérios.",
      },
    ],
    followup:
      "Radiografias em carga seriadas para confirmar a manutenção da redução. Na ORIF com parafuso transarticular, planejar a retirada do material (habitualmente 3–6 meses) antes de retomar impacto, dada a probabilidade de quebra; placa em ponte e artrodese têm menor necessidade de remoção rotineira. Discutir com o paciente o risco de artrose pós-traumática e eventual artrodese de resgate.",
  },

  complications: [
    {
      name: "Lesão despercebida / atraso diagnóstico",
      detail:
        "Até 20–30% das lesões passam despercebidas na avaliação inicial, sobretudo as ligamentares sutis com radiografia sem carga normal; o atraso piora o desfecho.",
      prevention:
        "Alto índice de suspeição, radiografia em carga/estresse comparativa e TC nas dúvidas.",
    },
    {
      name: "Artrose pós-traumática do médio-pé",
      detail:
        "Complicação tardia mais comum, decorrente da lesão condral inicial e, principalmente, da redução inadequada; leva a dor e colapso do arco.",
      prevention:
        "Redução anatômica e sua manutenção; considerar artrodese primária na lesão ligamentar.",
    },
    {
      name: "Má-redução / instabilidade residual",
      detail:
        "Incongruência residual ou perda de redução correlaciona-se com pior função e artrose acelerada.",
      prevention:
        "Redução aberta direta da pedra angular e confirmação por TC pós-operatória.",
    },
    {
      name: "Falha ou quebra do implante",
      detail:
        "Parafusos transarticulares atravessam a cartilagem e podem quebrar com a carga; frequentemente exigem retirada.",
      prevention:
        "Sem carga inicial, retirada programada do parafuso; considerar placa em ponte ou artrodese.",
    },
    {
      name: "Reoperação para retirada de material",
      detail:
        "Necessidade de nova cirurgia substancialmente maior após ORIF do que após artrodese primária.",
      prevention:
        "Artrodese primária nas lesões ligamentares reduz a taxa de reoperação por remoção.",
    },
    {
      name: "Lesão neurovascular / complicações de ferida",
      detail:
        "Lesão da artéria dorsal do pé ou do nervo fibular profundo, e necrose de pele por ponte cutânea estreita.",
      prevention:
        "Dupla incisão com ponte adequada, dissecção cuidadosa e respeito às partes moles edemaciadas.",
    },
  ],

  evidence: [
    {
      id: "ly-coetzee-2006",
      claim:
        "RCT com 41 pacientes de lesão de Lisfranc primariamente ligamentar: aos 2 anos, a artrodese primária teve AOFAS médio de 88 vs 68,6 pontos da ORIF e nível de atividade estimado em 92% vs 65% do pré-lesão; 5 pacientes da ORIF evoluíram com dor/deformidade tratada por artrodese.",
      takeaway:
        "Na lesão ligamentar, a artrodese primária das colunas medial/média oferece melhor função a médio prazo que a ORIF.",
      level: "I",
      studyType: "Ensaio clínico randomizado",
      era: "classico",
      citation: {
        authors: "Ly TV, Coetzee JC",
        title:
          "Treatment of primarily ligamentous Lisfranc joint injuries: primary arthrodesis compared with open reduction and internal fixation. A prospective, randomized study",
        journal: "The Journal of Bone and Joint Surgery. American Volume",
        year: 2006,
        pmid: "16510816",
        doi: "10.2106/JBJS.E.00228",
      },
    },
    {
      id: "henning-2009",
      claim:
        "RCT prospectivo com 40 pacientes randomizados para ORIF ou artrodese primária: a taxa de cirurgias secundárias (incluindo retirada de material e artrodese de resgate) foi 78,6% na ORIF vs 16,7% na artrodese, sem diferença significativa em SF-36 e SMFA.",
      takeaway:
        "A artrodese primária reduz marcadamente as reoperações, com função equivalente à ORIF.",
      level: "I",
      studyType: "Ensaio clínico randomizado",
      era: "classico",
      citation: {
        authors: "Henning JA, Jones CB, Sietsema DL, Bohay DR, Anderson JG",
        title:
          "Open reduction internal fixation versus primary arthrodesis for lisfranc injuries: a prospective randomized study",
        journal: "Foot & Ankle International",
        year: 2009,
        pmid: "19796583",
        doi: "10.3113/FAI.2009.0913",
      },
    },
    {
      id: "smith-2016",
      claim:
        "Meta-análise (3 ensaios) mostrou risco relativo de retirada de material de 0,23 (IC95% 0,11–0,45) a favor da artrodese; sem diferença significativa em revisões maiores, desfechos relatados pelo paciente ou alinhamento não anatômico.",
      takeaway:
        "A principal vantagem consistente da artrodese primária é a menor retirada de material; os demais desfechos são comparáveis.",
      level: "I",
      studyType: "Revisão sistemática e meta-análise",
      era: "atual",
      citation: {
        authors: "Smith N, Stone C, Furey A",
        title:
          "Does Open Reduction and Internal Fixation versus Primary Arthrodesis Improve Patient Outcomes for Lisfranc Trauma? A Systematic Review and Meta-analysis",
        journal: "Clinical Orthopaedics and Related Research",
        year: 2016,
        pmid: "26022112",
        doi: "10.1007/s11999-015-4366-y",
      },
    },
    {
      id: "magill-2019",
      claim:
        "Revisão sistemática e meta-análise (2 RCTs e 3 estudos observacionais, 187 pacientes, seguimento médio de 62 meses): a ORIF associou-se a maior necessidade de revisão (OR 6,37) e maior dor persistente (OR 6,29); na análise só dos RCTs, a ORIF teve pior AOFAS e maior EVA de dor.",
      takeaway:
        "A síntese atual favorece a artrodese primária em dor, função e reintervenção, embora a evidência ainda seja limitada.",
      level: "I",
      studyType: "Revisão sistemática e meta-análise",
      era: "atual",
      citation: {
        authors: "Magill HHP, Hajibandeh S, Bennett J, Campbell N, Mehta J",
        title:
          "Open Reduction and Internal Fixation Versus Primary Arthrodesis for the Treatment of Acute Lisfranc Injuries: A Systematic Review and Meta-analysis",
        journal: "The Journal of Foot and Ankle Surgery",
        year: 2019,
        pmid: "30850102",
        doi: "10.1053/j.jfas.2018.08.061",
      },
    },
    {
      id: "myerson-1986",
      claim:
        "Série clássica de 76 fraturas-luxações tarsometatársicas: apenas 49% alcançaram resultado bom/excelente; o principal determinante de resultado insatisfatório foi a qualidade da redução inicial, indicando redução aberta e fixação quando o desvio residual excedia 2 mm ou o ângulo talometatársico 15°.",
      takeaway:
        "A qualidade da redução — não o padrão da lesão — é o fator prognóstico dominante; esta série fundou a classificação em uso.",
      level: "IV",
      studyType: "Série de casos retrospectiva",
      era: "classico",
      citation: {
        authors: "Myerson MS, Fisher RT, Burgess AR, Kenzora JE",
        title:
          "Fracture dislocations of the tarsometatarsal joints: end results correlated with pathology and treatment",
        journal: "Foot & Ankle",
        year: 1986,
        pmid: "3710321",
        doi: "10.1177/107110078600600504",
      },
    },
  ],

  pearls: [
    "Radiografia sem carga normal NÃO exclui lesão de Lisfranc — peça imagem em carga/estresse.",
    "O 'fleck sign' no 1º–2º espaço é a avulsão do ligamento de Lisfranc até prova em contrário.",
    "Equimose plantar do médio-pé é sinal de alerta clássico.",
    "A base do 2º metatarso é a pedra angular: reduzi-la costuma alinhar as demais colunas.",
    "Na lesão puramente ligamentar, evidência de nível I favorece a artrodese primária (medial+média).",
    "Poupe a coluna lateral (4º–5º TMT) da fusão para preservar mobilidade.",
    "A qualidade da redução é o fator prognóstico mais importante (Myerson).",
  ],

  pitfalls: [
    "Subestimar a lesão por confiar em radiografia estática sem carga.",
    "Não reconhecer instabilidade oculta em atleta com dor persistente no médio-pé.",
    "Redução aproximada com diástase residual > 2 mm.",
    "Interposição do fragmento do 'fleck' ou de partes moles impedindo a redução.",
    "Sobreapertar o parafuso posicional, estreitando o espaço e alterando a anatomia.",
    "Fundir a coluna lateral, gerando rigidez e sobrecarga.",
    "Ponte cutânea estreita entre as incisões dorsais, com necrose de pele.",
  ],

  figures: [
    {
      id: "lesao-lisfranc:anatomia",
      caption: "Colunas do médio-pé e mortise do 2º metatarso (pedra angular).",
      alt: "Visão dorsal do médio-pé com três colunas e a base do 2º metatarso recuada no mortise dos cuneiformes.",
      variant: "colunas",
    },
    {
      id: "lesao-lisfranc:anatomia",
      caption: "Ligamento de Lisfranc: cuneiforme medial à base do 2º MT; ausência de ligamento 1º–2º.",
      alt: "Esquema do ligamento de Lisfranc oblíquo entre cuneiforme medial e base do segundo metatarso.",
      variant: "ligamento",
    },
    {
      id: "lesao-lisfranc:rx",
      caption: "Sinal do 'fleck': fragmento avulso no 1º–2º espaço.",
      alt: "Bases do 1º e 2º metatarsos com pequeno fragmento ósseo avulso no intervalo entre elas.",
      variant: "fleck",
    },
    {
      id: "lesao-lisfranc:rx",
      caption: "Radiografia em carga: diástase 1º–2º MT e alargamento C1–C2 (> 2 mm).",
      alt: "Esquema em carga mostrando afastamento entre o 1º e o 2º metatarso com medida maior que 2 mm.",
      variant: "carga",
    },
    {
      id: "lesao-lisfranc:classificacao",
      caption: "Myerson tipo A — incongruência total (homolateral).",
      alt: "Todos os metatarsos desviados no mesmo sentido lateral.",
      variant: "A",
    },
    {
      id: "lesao-lisfranc:classificacao",
      caption: "Myerson tipo B — incongruência parcial (B1 medial / B2 lateral).",
      alt: "Desvio de apenas uma coluna, com o restante do complexo congruente.",
      variant: "B",
    },
    {
      id: "lesao-lisfranc:classificacao",
      caption: "Myerson tipo C — divergente (1º MT medial, demais lateral).",
      alt: "Primeiro metatarso desviado medialmente e os demais lateralmente.",
      variant: "C",
    },
    {
      id: "lesao-lisfranc:via-acesso",
      caption: "Dupla incisão dorsal e feixe neurovascular do 1º–2º espaço em risco.",
      alt: "Visão dorsal do pé com duas incisões longitudinais e trajeto da artéria dorsal do pé e nervo fibular profundo.",
    },
    {
      id: "lesao-lisfranc:step-reducao",
      caption: "Redução da base do 2º metatarso na pedra angular com pinça pontiaguda.",
      alt: "Pinça de redução do cuneiforme medial à base do 2º metatarso restaurando o alinhamento.",
    },
    {
      id: "lesao-lisfranc:fixacao",
      caption: "Fixação com parafuso transarticular (parafuso de Lisfranc) e parafusos TMT.",
      alt: "Parafuso oblíquo do cuneiforme medial à base do 2º MT com parafusos transarticulares do 1º e 3º TMT.",
      variant: "parafuso",
    },
    {
      id: "lesao-lisfranc:fixacao",
      caption: "Placa dorsal em ponte, sem violar a cartilagem articular.",
      alt: "Placas dorsais em ponte sobre o 1º e 2º tarsometatársico com parafusos extra-articulares.",
      variant: "placa",
    },
    {
      id: "lesao-lisfranc:fixacao",
      caption: "Artrodese primária das colunas medial e média, poupando a lateral.",
      alt: "Fusão do 1º ao 3º tarsometatársico com parafusos de compressão e coluna lateral preservada.",
      variant: "artrodese",
    },
    {
      id: "lesao-lisfranc:step-parafuso",
      caption: "Trajeto oblíquo do parafuso de Lisfranc (cuneiforme medial → base do 2º MT).",
      alt: "Detalhe ampliado do trajeto dorso-distal do parafuso posicional entre cuneiforme medial e base do 2º metatarso.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Ly & Coetzee, J Bone Joint Surg Am 2006 (DOI 10.2106/JBJS.E.00228)",
      "Henning et al., Foot Ankle Int 2009 (DOI 10.3113/FAI.2009.0913)",
      "Smith, Stone & Furey, Clin Orthop Relat Res 2016 (DOI 10.1007/s11999-015-4366-y)",
      "Magill et al., J Foot Ankle Surg 2019 (DOI 10.1053/j.jfas.2018.08.061)",
      "Myerson et al., Foot Ankle 1986 (DOI 10.1177/107110078600600504)",
    ],
    attribution:
      "Evidências verificadas no PubMed; DOIs conferidos junto aos registros originais. Cite o PubMed ao reutilizar as referências.",
  },
});
