import { defineTopic } from "../../types/topic";

/* Fratura do pilão tibial (AO/OTA 43) — membro inferior.
   Trauma de alta energia com envelope de partes moles crítico; estratégia
   estagiada "span-scan-plan" (fixador externo em ponte → TC → ORIF tardia
   quando a pele permite). Evidência recuperada do PubMed (DOIs citados). */
export const topic = defineTopic({
  id: "mi-pilao-tibial-fratura",
  slug: "fratura-pilao-tibial",
  regionId: "membro-inferior",
  bone: "Tíbia distal",
  injury: "Fratura do pilão",
  title: "Fratura do pilão tibial",
  subtitle:
    "Fratura do plafond tibial (AO/OTA 43) — do respeito ao envelope de partes moles à estratégia estagiada span-scan-plan e à reconstrução articular tardia.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura do pilão (ou plafond) tibial é uma lesão da metáfise distal da tíbia com extensão à superfície articular do tornozelo, tipicamente por carga axial de ALTA energia (queda de altura, acidente de trânsito) que impacta o talo contra o teto tibial. Diferentemente das fraturas maleolares rotacionais, o pilão combina cominução articular, impacção metafisária e — o fator prognóstico dominante — um envelope de partes moles gravemente comprometido, com edema maciço, flictenas (fracture blisters) e risco alto de necrose de pele e infecção se operado precocemente por via aberta.\n\nA história natural do tratamento é uma lição de biologia de partes moles: as séries iniciais de ORIF imediata e agressiva (anos 1960–90) tiveram taxas catastróficas de deiscência e infecção profunda nos padrões de alta energia. Isso levou ao paradigma atual, ESTAGIADO, resumido em 'span-scan-plan': fixador externo em ponte para restaurar comprimento e proteger a pele (span), tomografia computadorizada com o comprimento já restaurado para planejar a reconstrução articular (scan) e, só depois que o edema regride e a pele volta a enrugar (7–21 dias), a fixação interna definitiva (plan).\n\nOs objetivos definitivos permanecem os da AO: restaurar comprimento, eixo e rotação; reconstruir anatomicamente a superfície articular; sustentar a coluna com placas de baixo perfil; e enxertar o defeito metafisário — tudo com manejo meticuloso das partes moles. Mesmo com técnica impecável, o pilão de alta energia (43-C, Rüedi III) evolui frequentemente para artrose pós-traumática, e o prognóstico é ditado pela energia inicial e pela lesão das partes moles tanto quanto pela qualidade da redução.",

  keyFacts: [
    { label: "Classificação", value: "AO/OTA 43 (A extra-articular · B parcial · C completa) · Rüedi-Allgöwer I–III" },
    { label: "Mecanismo", value: "Carga axial de alta energia (talo contra o plafond)" },
    { label: "Fator prognóstico", value: "Envelope de partes moles / energia inicial" },
    { label: "Estratégia", value: "Estagiada — span-scan-plan (fixador em ponte → TC → ORIF tardia)" },
    { label: "Janela para ORIF", value: "Pele enrugada / regressão do edema (~7–21 dias)" },
    { label: "Complicação temível", value: "Necrose de pele e infecção profunda" },
    { label: "Desfecho tardio", value: "Artrose pós-traumática (alta nos padrões C / Rüedi III)" },
  ],

  anatomy: {
    text:
      "O 'pilão' (do francês, pilão de almofariz) é a metáfise distal da tíbia que se alarga para formar o plafond — o teto articular côncavo que se apoia sobre o domo do talo. A carga axial que fratura o pilão é a mesma que o talo transmite para cima: o talo funciona como o pilão que esmaga o teto tibial, gerando impacção e cominução articular centrais.\n\nA superfície articular organiza-se em três colunas que orientam a redução e a escolha de vias/placas: a coluna MEDIAL (maléolo medial), a coluna ANTERO-LATERAL (tubérculo de Chaput, inserção do ligamento tibiofibular anterior) e a coluna POSTERIOR (fragmento de Volkmann, tibiofibular posterior). A fíbula distal, unida à tíbia pela sindesmose na incisura fibular, funciona como a 'régua' da coluna lateral: sua restauração devolve comprimento e rotação ao conjunto.\n\nO ponto crítico é o envelope de partes moles. A face anteromedial da tíbia distal é subcutânea — pele fina, mal vascularizada, sem ventre muscular de cobertura — exatamente onde incisões e placas costumam passar. O trauma de alta energia produz edema maciço, flictenas hemorrágicas e sofrimento cutâneo; operar por via aberta nesse terreno é a receita para deiscência, exposição do implante e infecção. Toda a estratégia estagiada existe para dar tempo a esse envelope. Estruturas neurovasculares em risco nas vias: o feixe tibial anterior e o nervo fibular profundo (anterior), o nervo fibular superficial (anterolateral/Chaput) e o feixe tibial posterior e flexor longo do hálux (posterolateral).",
    figureIds: ["fratura-pilao-tibial:anatomia", "fratura-pilao-tibial:colunas"],
  },

  classification: [
    {
      id: "ao-ota-43",
      name: "AO/OTA 43 (tíbia distal)",
      basis: "Envolvimento articular",
      note: "Selecione um tipo para ver o padrão do traço. O grupo articular (43-B parcial vs 43-C completa) e o grau de cominução determinam a agressividade da reconstrução e o prognóstico.",
      types: [
        {
          code: "43-A",
          label: "Extra-articular",
          description:
            "Fratura metafisária distal que POUPA a superfície articular. A1 simples, A2 com cunha, A3 cominuída. Melhor prognóstico; pode ser candidata a haste/placa conforme a extensão distal e as partes moles.",
          figureId: "fratura-pilao-tibial:ao-ota",
          figureVariant: "A",
        },
        {
          code: "43-B",
          label: "Articular parcial",
          description:
            "Parte do plafond permanece em continuidade com a diáfise. B1 fissura articular, B2 com depressão, B3 com cominução articular. Exige reconstrução da porção articular envolvida.",
          figureId: "fratura-pilao-tibial:ao-ota",
          figureVariant: "B",
        },
        {
          code: "43-C",
          label: "Articular completa",
          description:
            "O plafond é totalmente dissociado da diáfise. C1 articular e metafisária simples; C2 articular simples com metáfise cominuída; C3 com cominução articular. Padrão de mais alta energia, pior prognóstico e maior risco de partes moles.",
          figureId: "fratura-pilao-tibial:ao-ota",
          figureVariant: "C",
        },
      ],
    },
    {
      id: "ruedi-allgower",
      name: "Rüedi-Allgöwer",
      basis: "Grau de desvio e cominução articular",
      note: "Classificação clássica, útil pela correlação prognóstica: quanto maior a cominução/impacção articular (tipo III), pior o desfecho funcional e maior a artrose tardia.",
      types: [
        { code: "I", label: "Tipo I — sem desvio", description: "Fratura articular sem desvio significativo dos fragmentos do plafond.", figureId: "fratura-pilao-tibial:ruedi", figureVariant: "I" },
        { code: "II", label: "Tipo II — desviada, sem cominução", description: "Desvio articular significativo, porém sem cominução da superfície — fragmentos grandes reconstruíveis.", figureId: "fratura-pilao-tibial:ruedi", figureVariant: "II" },
        { code: "III", label: "Tipo III — cominuída/impactada", description: "Cominução e impacção da superfície articular — o padrão de pior prognóstico e maior taxa de artrose pós-traumática.", figureId: "fratura-pilao-tibial:ruedi", figureVariant: "III" },
      ],
    },
    {
      id: "tscherne",
      name: "Partes moles (Tscherne / Oestern)",
      basis: "Gravidade da lesão das partes moles (fechadas e expostas)",
      note: "No pilão, classificar as partes moles é tão importante quanto o osso: define o timing e a via. Flictenas, edema com sinal do enrugamento ausente e fraturas expostas contraindicam ORIF precoce.",
      types: [
        { code: "C0–C1", label: "Lesão leve", description: "Pele íntegra ou contusão discreta — janela mais precoce para fixação, ainda respeitando o edema." },
        { code: "C2–C3", label: "Lesão grave", description: "Contusão profunda, flictenas, ameaça de síndrome compartimental ou fratura exposta — indicação clássica de estratégia estagiada com fixador em ponte." },
      ],
    },
  ],

  indications: {
    operative: [
      "Praticamente todas as fraturas articulares desviadas do plafond (43-B/C) — reconstrução da superfície e do eixo",
      "Qualquer degrau/incongruência articular ou impacção significativa",
      "Encurtamento, angulação ou má-rotação inaceitáveis (coluna lateral/fíbula)",
      "Fratura exposta, lesão vascular ou síndrome compartimental — fixador externo de urgência (estágio 1)",
      "Instabilidade que impeça o controle do comprimento e a proteção do envelope de partes moles",
    ],
    nonOperative: [
      "Fraturas verdadeiramente não desviadas e estáveis (algumas 43-A ou Rüedi I) em paciente confiável, com gesso/órtese e seguimento radiográfico estreito",
      "Paciente sem condições clínicas para cirurgia ou não deambulador com objetivo de conforto",
      "Como ponte definitiva: fixação externa mantida (com/sem fixação limitada) quando o envelope de partes moles jamais permitir ORIF segura",
    ],
    decisionNotes:
      "O pilão de alta energia é, antes de tudo, um problema de partes moles. A decisão central não é 'qual implante', mas 'quando e por onde' operar sem provocar necrose de pele. O paradigma estagiado 'span-scan-plan' é o padrão: (1) SPAN — fixador externo em ponte (tíbia ao retropé), com ou sem placa de fíbula, restaura comprimento por ligamentotaxia e estabiliza o envelope; qualquer ferida aberta é desbridada nesse tempo; (2) SCAN — TC com o comprimento já restaurado revela o mapa articular real (colunas, impacção) e permite planejar as vias; (3) PLAN — ORIF definitiva com placas de baixo perfil só quando o edema regride e a pele volta a enrugar (o 'sinal do enrugamento'), tipicamente 7–21 dias. A alternativa de fixação externa definitiva (com fixação interna limitada da superfície articular) reserva-se aos envelopes mais catastróficos e ao osso muito cominuído/contaminado, aceitando pior redução articular para evitar a agressão de uma placa. A escolha das vias segue o mapa das colunas na TC, respeitando pontes de pele de ≥7 cm entre incisões. Mesmo com a melhor técnica, o desfecho é fortemente determinado pela energia inicial (43-C, Rüedi III) e pela lesão das partes moles.",
  },

  approaches: [
    {
      id: "via-anteromedial",
      name: "Anteromedial",
      indication: "Acesso mais utilizado ao plafond: expõe a coluna medial e boa parte da superfície articular. Escolhida quando o traço/impacção predomina medial e anterior — respeitando a pele subcutânea fina.",
      interval: "Medial ao tendão do tibial anterior, sobre a face subcutânea da tíbia; elevação cuidadosa de retalho de espessura total.",
      atRisk: ["Pele anteromedial subcutânea (necrose)", "Veia/nervo safeno", "Tendão do tibial anterior"],
      figureId: "fratura-pilao-tibial:via",
    },
    {
      id: "via-anterolateral",
      name: "Anterolateral (Chaput)",
      indication: "Padrões com fragmento ântero-lateral (Chaput) e para colocação de placa anterolateral com melhor cobertura de partes moles que a face medial. Facilita a reconstrução da coluna lateral.",
      interval: "Lateral ao tendão do tibial anterior / ao compartimento anterior, elevando-o em bloco; expõe o tubérculo de Chaput.",
      atRisk: ["Nervo fibular superficial", "Feixe tibial anterior / n. fibular profundo", "Tendões extensores"],
      figureId: "fratura-pilao-tibial:via",
    },
    {
      id: "via-posterolateral",
      name: "Posterolateral",
      indication: "Acesso ao fragmento posterior (Volkmann) e à fíbula pela mesma incisão, em decúbito ventral; útil quando a cominução/impacção é posterior e a pele anterior está inviável.",
      interval: "Entre os fibulares e o flexor longo do hálux; permite placa posterior antiglide e fixação da fíbula.",
      atRisk: ["Feixe tibial posterior / n. tibial", "Artéria fibular", "Nervo sural"],
      figureId: "fratura-pilao-tibial:via",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Estágio 1 — SPAN: fixador externo em ponte",
      detail:
        "Na urgência/emergência, aplicar um fixador externo em ponte da tíbia ao retropé (calcâneo ± metatarso), restaurando comprimento, eixo e rotação por ligamentotaxia. Isso descomprime e estabiliza o envelope de partes moles, permite cuidados da pele e das flictenas e converte uma emergência em cirurgia eletiva. Desbridar e estabilizar qualquer ferida aberta neste tempo; considerar placa de fíbula precoce apenas se a pele lateral permitir e ajudar a manter o comprimento.",
      figureId: "fratura-pilao-tibial:span",
      tips: [
        "Pinos da tíbia fora da futura zona de placas (mais proximais) para não contaminar o campo definitivo.",
        "Restaurar o comprimento cedo facilita a leitura da TC e a redução tardia.",
      ],
      pitfalls: [
        "Colocar pinos na zona da futura incisão → risco de infecção do trajeto no sítio cirúrgico.",
        "Fixar internamente por via aberta o plafond na fase aguda de alta energia → necrose de pele e infecção.",
      ],
    },
    {
      n: 2,
      title: "Estágio 1 — SCAN: TC com comprimento restaurado",
      detail:
        "Com o fixador in situ e o comprimento restaurado, obter TC com reconstruções. É esta imagem — e não a radiografia inicial 'encavalada' — que mostra o mapa real das colunas, os principais fragmentos articulares (medial, Chaput, Volkmann) e a impacção central. O planejamento das vias e das placas nasce daqui.",
      figureId: "fratura-pilao-tibial:colunas",
      tips: [
        "Identifique os fragmentos-chave e a direção da impacção antes de escolher as vias.",
        "Planeje pontes de pele adequadas (≥7 cm) se for usar duas incisões.",
      ],
      pitfalls: ["Planejar sobre radiografia encurtada subestima a cominução e leva a via/implante errados."],
    },
    {
      n: 3,
      title: "Estágio 2 — restaurar a coluna lateral (fíbula)",
      detail:
        "Quando a pele volta a enrugar (edema regredido, sem flictenas ativas — tipicamente 7–21 dias), iniciar a fixação definitiva. Frequentemente começa-se pela fíbula: sua fixação com placa lateral devolve comprimento e rotação e reancora a coluna lateral, servindo de referência para a reconstrução do plafond. Em alguns padrões, adia-se a fíbula para não amarrar a redução tibial.",
      figureId: "fratura-pilao-tibial:step-fibula",
      figureVariant: "medial",
      tips: [
        "O 'sinal do enrugamento' da pele é o gatilho clínico para operar com segurança.",
        "A fíbula é a régua do comprimento e da rotação da coluna lateral.",
      ],
      pitfalls: [
        "Operar antes da regressão do edema → deiscência e exposição do implante.",
        "Fixar a fíbula em mau comprimento trava a tíbia em rotação/encurtamento.",
      ],
    },
    {
      n: 4,
      title: "Estágio 2 — reconstrução articular do plafond",
      detail:
        "Pela via planejada (anteromedial, anterolateral/Chaput ou posterolateral), reduzir anatomicamente a superfície articular de fora para dentro, reconstituindo o plafond a partir dos fragmentos periféricos íntegros. Desimpactar a superfície central deprimida, elevar a cartilagem e sustentar o vazio metafisário subcondral com enxerto ósseo/substituto. Fixar a superfície com parafusos subcondrais ('raft').",
      figureId: "fratura-pilao-tibial:step-orif",
      figureVariant: "medial",
      tips: [
        "Reduza a periferia primeiro; a articulação 'se fecha' sobre os fragmentos estáveis.",
        "Enxerte o defeito metafisário para evitar colapso secundário da superfície.",
      ],
      pitfalls: [
        "Deixar degrau/impacção articular → artrose pós-traumática precoce.",
        "Não preencher o vazio metafisário → colapso e perda de redução.",
      ],
    },
    {
      n: 5,
      title: "Estágio 2 — placa de sustentação de baixo perfil",
      detail:
        "Neutralizar e sustentar a coluna com placa de baixo perfil na posição que melhor combata a deformidade (medial de sustentação, anterolateral, ou posterior antiglide), conforme o mapa da TC. Priorizar implantes finos sob a pele fina, fixação com parafusos bloqueados no bloco distal osteoporótico/cominuído e manejo delicado dos retalhos. Fechar sem tensão; se a cobertura for inviável, acionar a cirurgia plástica (retalho).",
      figureId: "fratura-pilao-tibial:step-orif",
      figureVariant: "anterolateral",
      tips: [
        "Placas de baixo perfil e posicionamento conforme a coluna dominante reduzem a irritação/necrose de pele.",
        "Tenha um plano de cobertura (retalho) para os defeitos anteromediais.",
      ],
      pitfalls: [
        "Implante volumoso sob a face anteromedial subcutânea → sofrimento e exposição da placa.",
        "Fechamento sob tensão → deiscência.",
      ],
    },
    {
      n: 6,
      title: "Conferência final e partes moles",
      detail:
        "Fluoroscopia AP, perfil e mortalha: comprimento, eixo, congruência articular e posição dos parafusos (fora da articulação). Testar estabilidade. Fechar em camadas, sem tensão, com curativo e elevação; vigiar o retalho anteromedial nas primeiras 48–72 h. Documentar perfusão distal.",
      figureId: "fratura-pilao-tibial:step-orif",
      figureVariant: "medial",
      tips: [
        "Incidência da mortalha ajuda a excluir parafuso intra-articular e checar a congruência.",
        "Elevação rigorosa no pós-operatório imediato protege o fechamento.",
      ],
      pitfalls: ["Subestimar o sofrimento do retalho anteromedial nas primeiras horas."],
    },
  ],

  postop: {
    immobilization:
      "Tala/órtese posterior mantendo o tornozelo em neutro após a ORIF definitiva, protegendo o fechamento anteromedial; mobilização do tornozelo iniciada quando a ferida está segura (frequentemente 2–3 semanas). No estágio 1, o próprio fixador em ponte imobiliza.",
    weightBearing:
      "Descarga (sem carga) prolongada é a regra: tipicamente 10–12 semanas até sinais de consolidação metafisária e articular, dado o risco de colapso da superfície reconstruída e do enxerto. Progressão individualizada pela cominução, qualidade óssea e evolução radiográfica.",
    rehab: [
      { window: "0–2 sem", weightBearing: "Sem carga", focus: "Proteção do retalho anteromedial, elevação, controle de edema; mobilização de dedos; vigilância da ferida." },
      { window: "2–6 sem", weightBearing: "Sem carga", focus: "ADM ativa-assistida do tornozelo quando a ferida cicatriza; evitar equino; fortalecimento isométrico." },
      { window: "6–12 sem", weightBearing: "Sem carga → toque conforme calo", focus: "Ganho de dorsiflexão, propriocepção; progressão guiada por radiografia." },
      { window: "> 12 sem", weightBearing: "Progressão para carga total (consolidação confirmada)", focus: "Marcha, fortalecimento e normalização funcional; expectativa realista quanto à rigidez residual." },
    ],
    followup:
      "Radiografias seriadas (AP/perfil/mortalha) buscando consolidação e vigiando colapso da superfície/enxerto e alinhamento. Rastrear infecção e sofrimento de pele nas primeiras semanas. A artrose pós-traumática é comum nos padrões de alta energia (43-C / Rüedi III) e deve ser acompanhada a longo prazo — a artrodese do tornozelo é o resgate mais frequente para a artrose sintomática refratária.",
  },

  complications: [
    { name: "Necrose de pele e deiscência", detail: "Complicação mais temida no envelope anteromedial subcutâneo; associada a ORIF precoce sobre partes moles edemaciadas/flictenadas.", prevention: "Estratégia estagiada; operar só com pele enrugada; incisões planejadas, placas de baixo perfil, fechamento sem tensão." },
    { name: "Infecção profunda / osteomielite", detail: "Frequentemente sequela da necrose cutânea e da exposição do implante; devastadora no pilão de alta energia.", prevention: "Timing correto, desbridamento de feridas no estágio 1, técnica atraumática; retalho quando a cobertura é insuficiente." },
    { name: "Artrose pós-traumática", detail: "Desfecho tardio dominante nos padrões cominuídos (43-C / Rüedi III), mesmo com boa redução — reflete o dano condral da impacção inicial.", prevention: "Redução articular anatômica e restauração do eixo; contudo, a energia inicial limita o prognóstico." },
    { name: "Não-união / retardo metafisário", detail: "Cominução e defeito ósseo metafisário podem atrasar ou impedir a consolidação; colapso da superfície reconstruída.", prevention: "Enxerto do defeito metafisário; estabilidade adequada; descarga prolongada." },
    { name: "Consolidação viciosa (mau alinhamento)", detail: "Encurtamento, varo/valgo ou má-rotação, sobretudo se a coluna lateral/fíbula não for restaurada.", prevention: "Restaurar a fíbula como régua; conferir eixo, comprimento e rotação à fluoroscopia." },
    { name: "Rigidez do tornozelo", detail: "Perda de dorsiflexão por imobilização, dano articular e aderências; equino se não prevenido.", prevention: "Mobilização assim que a ferida permitir; tala em neutro; fisioterapia dirigida." },
    { name: "Complicações do fixador externo", detail: "Infecção do trajeto dos pinos e interferência com a incisão definitiva se mal posicionados.", prevention: "Pinos fora da zona cirúrgica futura; cuidados do trajeto; retirar quando não mais necessário." },
    { name: "Síndrome compartimental / lesão vascular", detail: "Possível no trauma de alta energia; a angulação/luxação pode ameaçar o feixe.", prevention: "Avaliação vascular e compartimental na admissão; fixador em ponte reduz e estabiliza precocemente." },
  ],

  evidence: [
    {
      id: "blauth-2001",
      claim:
        "Coorte comparativa (51 de 77 pacientes, 92% fraturas tipo C, seguimento médio 68 meses) de três protocolos: ORIF primária, fixação externa transarticular prolongada e um procedimento em DOIS TEMPOS (redução articular minimamente invasiva + fixador temporário, seguida de placa medial tardia). Nenhum paciente do grupo em dois tempos precisou de artrodese secundária (p<0,05); esse grupo teve maior amplitude do tornozelo, menos dor e melhor retorno ao trabalho; sem diferença na infecção.",
      takeaway: "O procedimento em dois tempos, respeitando as partes moles, ofereceu os melhores desfechos funcionais nas fraturas graves do pilão.",
      level: "III",
      studyType: "Coorte comparativa retrospectiva (J Orthop Trauma)",
      era: "classico",
      citation: {
        authors: "Blauth M, Bastian L, Krettek C, Knop C, Evans S",
        title: "Surgical options for the treatment of severe tibial pilon fractures: a study of three techniques",
        journal: "J Orthop Trauma",
        year: 2001,
        pmid: "11265004",
        doi: "10.1097/00005131-200103000-00002",
        url: "https://doi.org/10.1097/00005131-200103000-00002",
      },
    },
    {
      id: "chen-2006",
      claim:
        "Série de 128 fraturas do pilão tratadas com ORIF e placa, seguimento médio de 10 anos, estratificadas por Rüedi-Allgöwer. O tipo III teve significativamente menos reduções excelentes/boas e piores resultados clínicos que I/II; a artrose progrediu ao longo do tempo nos tipos II e III. A fixação da fíbula e a restauração do comprimento associaram-se a melhor desfecho; fraturas expostas tiveram piores resultados que as fechadas.",
      takeaway: "O prognóstico do pilão a longo prazo é ditado pelo padrão (Rüedi III), pela restauração da fíbula/comprimento e pela lesão das partes moles.",
      level: "III",
      studyType: "Coorte longitudinal (Arch Orthop Trauma Surg)",
      era: "classico",
      citation: {
        authors: "Chen SH, Wu PH, Lee YS",
        title: "Long-term results of pilon fractures",
        journal: "Arch Orthop Trauma Surg",
        year: 2006,
        pmid: "17004076",
        doi: "10.1007/s00402-006-0225-3",
        url: "https://doi.org/10.1007/s00402-006-0225-3",
      },
    },
    {
      id: "tong-2011",
      claim:
        "Protocolo em dois tempos com MIPO em 29 pilões: estágio 1 com ORIF da fíbula + fixador externo em ponte na admissão; estágio 2 (reconstrução articular por MIPO) após regressão do edema (média ~1 mês). NÃO houve infecção superficial ou profunda nem problema de cicatrização; todos os tornozelos funcionais. Consolidação média 6,7 meses após o segundo tempo.",
      takeaway: "O protocolo estagiado (fixador em ponte → MIPO tardia) praticamente elimina os problemas de ferida da ORIF do pilão.",
      level: "IV",
      studyType: "Série de casos prospectiva (Int Orthop)",
      era: "atual",
      citation: {
        authors: "Tong D, Ji F, Zhang H, Ding W, Wang Y, Cheng P, Liu H, Cai X",
        title: "Two-stage procedure protocol for minimally invasive plate osteosynthesis technique in the treatment of the complex pilon fracture",
        journal: "Int Orthop",
        year: 2011,
        pmid: "22183151",
        doi: "10.1007/s00264-011-1434-0",
        url: "https://doi.org/10.1007/s00264-011-1434-0",
      },
    },
    {
      id: "cui-2018",
      claim:
        "Meta-análise (8 estudos, 359 pacientes / 360 fraturas) comparando ORIF em dois tempos vs fixação interna limitada + fixação externa (LIFEF) no pilão grave: o grupo ORIF estagiada teve risco significativamente MENOR de infecção superficial, não-união e problemas de consolidação; sem diferença em infecção profunda, retardo de união, consolidação viciosa, artrose ou osteomielite crônica.",
      takeaway: "A ORIF estagiada supera a fixação externa definitiva em infecção superficial e consolidação, sem penalidade em complicações profundas.",
      level: "II",
      studyType: "Revisão sistemática e meta-análise (J Int Med Res)",
      era: "atual",
      citation: {
        authors: "Cui X, Chen H, Rui Y, Niu Y, Li H",
        title:
          "Two-stage open reduction and internal fixation versus limited internal fixation combined with external fixation: a meta-analysis of postoperative complications in patients with severe Pilon fractures",
        journal: "J Int Med Res",
        year: 2018,
        pmid: "29916291",
        doi: "10.1177/0300060518776099",
        url: "https://doi.org/10.1177/0300060518776099",
      },
    },
    {
      id: "korrapati-2023",
      claim:
        "Coorte de 314 pilões em centro de trauma nível I (2010–2021): 25% desenvolveram flictenas (fracture blisters). A presença de flictenas associou-se a atraso significativo até a fixação definitiva (14,2 vs 7,9 dias; p<0,001) e a padrões de maior energia (43-C: 71,3% vs 53,8%). Flictenas raramente se localizaram no tornozelo posterior, apoiando a via posterolateral estagiada.",
      takeaway: "As partes moles (flictenas) ditam o timing: quanto mais grave o envelope, maior o atraso necessário — evidência empírica do princípio 'span-scan-plan'.",
      level: "III",
      studyType: "Coorte retrospectiva caso-controle (Eur J Orthop Surg Traumatol)",
      era: "atual",
      citation: {
        authors: "Korrapati A, Ta CN, Mitchell BC, Wall PV, Gurusamy P, Dwight K, Girard PJ, Schwartz AK, Kent WT",
        title: "Fracture blisters: predictors for time to definitive fixation in pilon fractures",
        journal: "Eur J Orthop Surg Traumatol",
        year: 2023,
        pmid: "37386191",
        doi: "10.1007/s00590-023-03623-w",
        url: "https://doi.org/10.1007/s00590-023-03623-w",
      },
    },
  ],

  pearls: [
    "O pilão é um problema de PARTES MOLES antes de ser um problema de osso — o envelope dita o timing e a via.",
    "'Span-scan-plan': fixador em ponte na urgência, TC com comprimento restaurado, ORIF tardia quando a pele enruga.",
    "O 'sinal do enrugamento' da pele (retorno das rugas, regressão das flictenas) é o gatilho clínico para a ORIF definitiva (~7–21 dias).",
    "Restaure a fíbula: é a régua do comprimento e da rotação da coluna lateral.",
    "Leia as três colunas na TC (medial, Chaput ântero-lateral, Volkmann posterior) para escolher via e placa.",
    "Reduza a periferia do plafond primeiro; a articulação fecha-se sobre os fragmentos estáveis. Enxerte o vazio metafisário.",
    "Use placas de baixo perfil sob a pele anteromedial subcutânea e feche sem tensão; tenha plano de retalho.",
    "Rüedi III / AO 43-C: informe expectativa realista — artrose pós-traumática é comum apesar da melhor técnica.",
  ],

  pitfalls: [
    "ORIF aberta precoce sobre partes moles edemaciadas/flictenadas → necrose de pele e infecção profunda.",
    "Planejar sobre radiografia encurtada em vez de TC com comprimento restaurado.",
    "Colocar pinos do fixador na zona da futura incisão/placa → contaminação do sítio cirúrgico.",
    "Deixar degrau ou impacção articular residual → artrose precoce.",
    "Não enxertar o defeito metafisário → colapso e perda de redução.",
    "Não restaurar a fíbula/comprimento → consolidação viciosa em encurtamento e má-rotação.",
    "Implante volumoso e fechamento sob tensão na face anteromedial → deiscência e exposição.",
    "Imobilização prolongada em equino → rigidez irrecuperável do tornozelo.",
  ],

  figures: [
    { id: "fratura-pilao-tibial:anatomia", caption: "Anatomia do pilão tibial (AP) — plafond, metáfise, sindesmose e envelope anteromedial subcutâneo.", alt: "Vista anteroposterior da tíbia distal com plafond, fíbula, sindesmose e pele anteromedial fina." },
    { id: "fratura-pilao-tibial:colunas", caption: "As três colunas do plafond (corte axial) — medial, ântero-lateral (Chaput) e posterior (Volkmann).", alt: "Corte axial do teto tibial dividido em colunas medial, anterolateral e posterior." },
    { id: "fratura-pilao-tibial:ao-ota", variant: "A", caption: "AO/OTA 43-A — extra-articular (metafisária), poupa a superfície.", alt: "Tíbia distal com traço metafisário transverso poupando a articulação." },
    { id: "fratura-pilao-tibial:ao-ota", variant: "B", caption: "AO/OTA 43-B — articular parcial (parte do plafond contínua à diáfise).", alt: "Tíbia distal com traço articular parcial no plafond." },
    { id: "fratura-pilao-tibial:ao-ota", variant: "C", caption: "AO/OTA 43-C — articular completa (plafond dissociado e cominuído).", alt: "Tíbia distal com traço metafisário e articular dissociando o plafond cominuído." },
    { id: "fratura-pilao-tibial:ruedi", variant: "III", caption: "Rüedi-Allgöwer III — cominução e impacção articular (pior prognóstico).", alt: "Plafond tibial com múltiplos fragmentos articulares impactados." },
    { id: "fratura-pilao-tibial:span", caption: "Estágio 1 (SPAN) — fixador externo em ponte restaura comprimento por ligamentotaxia e protege as partes moles.", alt: "Fixador externo tíbia-retropé com pinos e distração longitudinal sobre pilão cominuído." },
    { id: "fratura-pilao-tibial:via", variant: "anteromedial", caption: "Via anteromedial — coluna medial do plafond, sobre a face subcutânea da tíbia.", alt: "Incisão anteromedial na tíbia distal." },
    { id: "fratura-pilao-tibial:via", variant: "anterolateral", caption: "Via anterolateral (Chaput) — coluna ântero-lateral, melhor cobertura de partes moles.", alt: "Incisão anterolateral sobre o tubérculo de Chaput." },
    { id: "fratura-pilao-tibial:step-fibula", caption: "Estágio 2 — restauração do comprimento da fíbula (placa lateral) como régua da coluna lateral.", alt: "Placa fibular lateral restaurando comprimento e rotação da tíbia distal." },
    { id: "fratura-pilao-tibial:step-orif", variant: "medial", caption: "Estágio 2 — reconstrução do plafond com enxerto metafisário e placa de sustentação medial.", alt: "Redução articular do plafond com parafusos subcondrais, enxerto e placa medial." },
    { id: "fratura-pilao-tibial:step-orif", variant: "anterolateral", caption: "Estágio 2 — variante com placa anterolateral de baixo perfil.", alt: "Placa anterolateral de baixo perfil sustentando a coluna lateral do plafond." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Blauth et al., J Orthop Trauma 2001",
      "Chen et al., Arch Orthop Trauma Surg 2006",
      "Tong et al., Int Orthop 2011",
      "Cui et al., J Int Med Res 2018",
      "Korrapati et al., Eur J Orthop Surg Traumatol 2023",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados nesta seção.",
  },
});
