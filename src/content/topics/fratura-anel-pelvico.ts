import { defineTopic } from "../../types/topic";

/* Fratura do anel pélvico — trauma de alta energia com risco de hemorragia
   exsanguinante. Ênfase em Young-Burgess / Tile, estabilidade mecânica,
   controle de dano (binder, fixador, packing, angioembolização) e fixação
   definitiva. Evidência verificada no PubMed (DOIs reais citados). */
export const topic = defineTopic({
  id: "mi-anel-pelvico-fratura",
  slug: "fratura-anel-pelvico",
  regionId: "membro-inferior",
  bone: "Pelve",
  injury: "Fratura do anel",
  title: "Fratura do anel pélvico",
  subtitle:
    "Trauma de alta energia com risco de hemorragia exsanguinante — da classificação mecânica ao controle de dano.",
  laterality: null,
  status: "complete",

  overview:
    "A fratura do anel pélvico resulta tipicamente de trauma de alta energia (colisão automobilística, atropelamento, queda de altura) e, por definição, exige dois pontos de ruptura do anel osteoligamentar — um anterior (sínfise / ramos púbicos) e outro posterior (articulação sacroilíaca, sacro ou ílio). O elemento posterior é o determinante da estabilidade e o principal responsável pela hemorragia.\n\nA lesão pode ser rapidamente fatal: a hemorragia é sobretudo venosa (plexo pré-sacral e superfícies ósseas fraturadas, ~85%) e, em menor parte, arterial (ramos da ilíaca interna). O manejo inicial segue o ATLS, com reconhecimento precoce do anel instável como fonte de choque.\n\nDuas linguagens classificatórias coexistem: Young-Burgess descreve o mecanismo (APC, LC, VS, CMI) e prediz o padrão de sangramento; Tile/AO-OTA descreve a estabilidade (A estável, B rotacional, C rotacional + vertical) e orienta a fixação. A conduta em choque é uma sequência de controle de dano: binder pélvico → reanimação hemostática → fixador externo, packing pré-peritoneal e/ou angioembolização → fixação definitiva anterior e posterior.",

  keyFacts: [
    { label: "Mecanismo", value: "Alta energia; duplo ponto de ruptura do anel" },
    { label: "Fonte de sangramento", value: "Venoso ~85% > arterial (ilíaca interna)" },
    { label: "Classificações", value: "Young-Burgess (mecanismo) + Tile (estabilidade)" },
    { label: "Chave da instabilidade", value: "Complexo posterior (SI / sacro)" },
    { label: "1ª medida no choque", value: "Binder no nível dos trocânteres" },
    { label: "Controle de dano", value: "Binder → fixador → packing / angio" },
    { label: "Fixação definitiva", value: "Posterior (parafuso IS) + anterior" },
  ],

  anatomy: {
    text:
      "O anel pélvico é uma estrutura osteoligamentar fechada: dois ossos inominados (ílio, ísquio, púbis) unidos anteriormente pela sínfise púbica e posteriormente ao sacro pelas articulações sacroilíacas. A estabilidade depende muito mais dos ligamentos do que do osso — o sacro é suspenso entre os ílios como uma 'ponte suspensa' pelos ligamentos SI posteriores, os mais fortes do corpo.\n\nO complexo posterior é a chave: ligamentos sacroilíacos posteriores e interósseos (resistem ao deslocamento vertical e à separação), ligamento sacroespinhoso (resiste à rotação externa) e ligamento sacrotuberoso (resiste à rotação no plano sagital e ao cisalhamento vertical). A perda desses estabilizadores define a instabilidade vertical.\n\nA hemorragia origina-se predominantemente do plexo venoso pré-sacral e das superfícies ósseas esponjosas fraturadas (~85%); o sangramento arterial vem de ramos da artéria ilíaca interna (glútea superior, pudenda interna, obturatória). Estruturas em risco incluem o plexo lombossacral, os vasos ilíacos, a bexiga e a uretra (sobretudo em fraturas com desvio anterior).",
    figureIds: [
      "fratura-anel-pelvico:anatomia",
      "fratura-anel-pelvico:ligamentos-posteriores",
    ],
  },

  classification: [
    {
      id: "young-burgess",
      name: "Young-Burgess (mecanismo)",
      basis: "Vetor de força — prediz padrão de lesão e necessidade de reanimação",
      note: "Descreve o mecanismo e prediz a hemorragia. Selecione um mecanismo para ver a deformação do anel e o vetor de força.",
      types: [
        {
          code: "APC",
          label: "Compressão anteroposterior (livro aberto)",
          description:
            "Força AP abre o anel por rotação externa, com diástase da sínfise. Graduada I–III conforme a progressão da lesão posterior (I sínfise < 2,5 cm; II ruptura dos lig. SI anteriores; III ruptura completa — instabilidade rotacional e vertical). APC de alto grau associa-se a grande necessidade transfusional e maior mortalidade.",
          figureId: "fratura-anel-pelvico:young-burgess",
          figureVariant: "APC",
        },
        {
          code: "LC",
          label: "Compressão lateral",
          description:
            "Força lateral produz rotação interna do hemipelve, com fraturas dos ramos púbicos (frequentemente horizontais) e impacção sacral/SI posterior. Mecanismo mais comum; graus I–III. Costuma sangrar menos que a APC, mas associa-se a lesões cranianas e viscerais (LC de alto grau).",
          figureId: "fratura-anel-pelvico:young-burgess",
          figureVariant: "LC",
        },
        {
          code: "VS",
          label: "Cisalhamento vertical",
          description:
            "Força vertical (queda / impacto axial) desloca o hemipelve cranialmente, rompendo os elementos anterior e posterior — instabilidade vertical completa. Alta energia, alto risco de lesão neurovascular e de hemorragia.",
          figureId: "fratura-anel-pelvico:young-burgess",
          figureVariant: "VS",
        },
        {
          code: "CMI",
          label: "Mecanismo combinado",
          description:
            "Combinação de vetores (p.ex. LC + VS). Padrões mistos que não se enquadram nos grupos puros; conduta guiada pela estabilidade e pela hemodinâmica.",
          figureId: "fratura-anel-pelvico:young-burgess",
          figureVariant: "CMI",
        },
      ],
    },
    {
      id: "tile",
      name: "Tile / AO-OTA (estabilidade)",
      basis: "Estabilidade rotacional e vertical — orienta a fixação",
      note: "Descreve a estabilidade do anel. Selecione um tipo para ver o padrão de instabilidade.",
      types: [
        {
          code: "Tipo A",
          label: "Estável",
          description:
            "Anel estável, complexo posterior íntegro (p.ex. fratura de asa ilíaca, fratura isolada de ramo, avulsões). Tratamento habitualmente não-operatório.",
          figureId: "fratura-anel-pelvico:tile",
          figureVariant: "A",
        },
        {
          code: "Tipo B",
          label: "Instável em rotação (parcialmente estável)",
          description:
            "Instabilidade rotacional com complexo posterior parcialmente íntegro — B1 livro aberto (rotação externa), B2 compressão lateral (rotação interna), B3 bilateral. Verticalmente estável; costuma exigir fixação anterior.",
          figureId: "fratura-anel-pelvico:tile",
          figureVariant: "B",
        },
        {
          code: "Tipo C",
          label: "Instável em rotação e vertical",
          description:
            "Ruptura completa do complexo posterior com instabilidade rotacional E vertical (C1 unilateral, C2 bilateral com um lado tipo B, C3 com fratura acetabular). Exige fixação posterior estável, quase sempre combinada à anterior.",
          figureId: "fratura-anel-pelvico:tile",
          figureVariant: "C",
        },
      ],
    },
  ],

  indications: {
    operative: [
      "Instabilidade mecânica: Tile B (rotacional) e, sobretudo, Tile C (vertical) — fixação para restaurar o anel",
      "Diástase da sínfise púbica > 2,5 cm (livro aberto)",
      "Deslocamento posterior vertical > 1 cm (instabilidade vertical / VS)",
      "Lesão em livro aberto que compromete a hemostasia (o binder/fixador reduz o volume pélvico como medida de reanimação)",
      "Fratura exposta, lesão associada de bexiga/uretra ou lesão neurológica progressiva que exija abordagem",
      "Instabilidade hemodinâmica refratária — controle de dano com fixador externo + packing pré-peritoneal e/ou angioembolização",
    ],
    nonOperative: [
      "Fraturas estáveis (Tile A): asa ilíaca isolada, fratura de ramo isolada, avulsões",
      "Fraturas de ramo por compressão lateral de baixo grau (LC I) com posterior estável, sem desvio significativo",
      "Paciente com carga protegida e dor controlada, sem instabilidade demonstrada em exame dinâmico/imagem",
    ],
    decisionNotes:
      "A decisão integra ESTABILIDADE (Tile) e HEMODINÂMICA. No paciente instável, a prioridade não é a fixação definitiva, mas o controle de dano segundo o ATLS: reduzir o volume pélvico com binder no nível dos trocânteres, reanimação hemostática (protocolo de transfusão maciça, ácido tranexâmico) e, se persistir o choque, fixador externo + packing pré-peritoneal e/ou angioembolização. O binder aproxima e estabiliza o anel, tamponando o sangramento venoso — é gesto de reanimação, não de tratamento definitivo. Sangramento arterial (blush na TC) favorece a angioembolização; sangramento venoso predominante e centros sem angiografia imediata favorecem o packing pré-peritoneal. As duas estratégias são complementares, não excludentes. A fixação definitiva (posterior ± anterior) é feita após a estabilização fisiológica.",
  },

  approaches: [
    {
      id: "binder-fixador",
      name: "Estabilização temporária (binder / fixador externo)",
      indication:
        "Redução do volume pélvico e tamponamento no anel instável com instabilidade hemodinâmica. Binder no nível dos grandes trocânteres; fixador externo anterior com pinos supra-acetabulares ou na crista ilíaca.",
      interval: "Percutâneo (binder) / anterior supra-acetabular (fixador)",
      atRisk: ["N. cutâneo femoral lateral", "Pele sob o binder (necrose se prolongado)"],
      figureId: "fratura-anel-pelvico:controle-mecanico",
    },
    {
      id: "packing-preperitoneal",
      name: "Packing pré-peritoneal (retropúbico)",
      indication:
        "Controle rápido do sangramento venoso/ósseo pélvico via incisão suprapúbica no espaço pré-peritoneal, com três compressas por hemipelve. Combinado à estabilização do anel; complementar à angioembolização.",
      interval: "Suprapúbica (espaço de Retzius / pré-peritoneal)",
      atRisk: ["Bexiga", "Vasos ilíacos externos"],
      figureId: "fratura-anel-pelvico:controle-hemorragia",
    },
    {
      id: "acesso-anterior",
      name: "Anterior — Pfannenstiel / Stoppa modificada",
      indication:
        "Fixação da sínfise e dos ramos superiores com placa. Acesso à borda pélvica e à coluna anterior.",
      interval: "Linha média infraumbilical / retromuscular (Stoppa)",
      atRisk: ["Corona mortis", "Bexiga", "Cordão espermático / feixe ilíaco externo"],
      figureId: "fratura-anel-pelvico:step-anterior",
    },
    {
      id: "acesso-posterior",
      name: "Posterior — parafuso iliossacral percutâneo",
      indication:
        "Fixação do complexo posterior (art. SI / sacro) com parafuso iliossacral guiado por fluoroscopia, através do corredor ósseo seguro de S1.",
      interval: "Percutâneo posterior (guiado por imagem)",
      atRisk: ["Raízes L5 e S1", "Vasos ilíacos", "Má trajetória por corredor sacral estreito / dismorfismo"],
      figureId: "fratura-anel-pelvico:step-si-screw",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Binder pélvico (reanimação)",
      detail:
        "No anel instável com choque, aplicar o binder circunferencial CENTRADO NOS GRANDES TROCÂNTERES (não na crista ilíaca) para fechar o livro aberto, reduzir o volume pélvico e tamponar o sangramento venoso. Gesto precoce, ainda na sala de emergência, em paralelo à reanimação hemostática.",
      figureId: "fratura-anel-pelvico:controle-mecanico",
      figureVariant: "binder",
      tips: [
        "Nível dos trocânteres, não da crista — o vetor correto fecha a sínfise.",
        "Não fechar demais uma fratura por compressão lateral (rotação interna) já 'fechada'.",
        "Retirar/converter o quanto antes para evitar necrose cutânea.",
      ],
      pitfalls: [
        "Colocar o binder na crista ilíaca (ineficaz).",
        "Manter o binder por tempo prolongado → lesão de pele.",
      ],
    },
    {
      n: 2,
      title: "Fixador externo anterior",
      detail:
        "Como controle de dano ou ponte, montar fixador externo anterior — pinos supra-acetabulares (coluna anterior) ou na crista ilíaca — com barra de conexão anterior. Estabiliza o anel, permite acesso abdominal e mantém a redução do volume pélvico melhor que o binder a médio prazo.",
      figureId: "fratura-anel-pelvico:controle-mecanico",
      figureVariant: "fixador",
      tips: [
        "Pinos supra-acetabulares oferecem melhor ancoragem que os da crista.",
        "Não estabiliza isoladamente a instabilidade vertical (posterior) — é controle anterior.",
      ],
      pitfalls: [
        "Confiar no fixador anterior para uma lesão tipo C (posterior) instável.",
        "Mau posicionamento dos pinos (intra-articular / lesão do n. cutâneo femoral lateral).",
      ],
    },
    {
      n: 3,
      title: "Packing pré-peritoneal",
      detail:
        "Se persistir o choque apesar da estabilização e da reanimação, realizar packing pré-peritoneal: incisão suprapúbica, entrada no espaço pré-peritoneal (sem abrir o peritônio) e colocação de três compressas por hemipelve, do sacro à sínfise, tamponando o sangramento venoso e ósseo. Idealmente após estabilizar o anel.",
      figureId: "fratura-anel-pelvico:controle-hemorragia",
      figureVariant: "packing",
      tips: [
        "Estabilize o anel antes — o packing precisa de um continente pélvico fechado.",
        "Rápido e disponível em qualquer centro; complementar à angio.",
      ],
      pitfalls: [
        "Packing sem estabilizar o anel → tamponamento ineficaz.",
        "Ignorar sangramento arterial persistente que exige angioembolização.",
      ],
    },
    {
      n: 4,
      title: "Angioembolização",
      detail:
        "Diante de sangramento arterial (blush na angio-TC ou instabilidade persistente após packing), a arteriografia identifica e emboliza o ramo da ilíaca interna responsável (embolização seletiva; não-seletiva bilateral em sangramento difuso/instabilidade extrema). Complementa o packing e a estabilização mecânica.",
      figureId: "fratura-anel-pelvico:controle-hemorragia",
      figureVariant: "angio",
      tips: [
        "Blush arterial na TC é o gatilho clássico.",
        "Embolização seletiva preserva perfusão; a não-seletiva é reservada a casos extremos.",
      ],
      pitfalls: [
        "Atraso na angiografia por logística → perda da janela de reanimação.",
        "Atribuir todo o sangramento à artéria — a maior parte é venosa/óssea.",
      ],
    },
    {
      n: 5,
      title: "Fixação posterior definitiva",
      detail:
        "Após a estabilização fisiológica, restaurar o complexo posterior: parafuso(s) iliossacral(is) percutâneo(s) guiados por fluoroscopia através do corredor ósseo seguro de S1 (com/sem redução aberta), reconstituindo a estabilidade vertical do anel (tipos C).",
      figureId: "fratura-anel-pelvico:step-si-screw",
      tips: [
        "Reduzir antes de fixar — o parafuso não reduz por si só.",
        "Atenção ao dismorfismo sacral (corredor estreito) no planejamento da trajetória.",
      ],
      pitfalls: [
        "Má trajetória → lesão das raízes L5/S1 ou dos vasos.",
        "Fixar apenas o anterior em lesão tipo C → falha e desvio vertical.",
      ],
    },
    {
      n: 6,
      title: "Fixação anterior definitiva",
      detail:
        "Complementar com fixação anterior: placa da sínfise púbica (via Pfannenstiel/Stoppa) na diástase, ou fixação dos ramos (placa/parafuso de coluna anterior). Restabelece a integridade do anel e neutraliza as forças de rotação.",
      figureId: "fratura-anel-pelvico:step-anterior",
      tips: [
        "Cuidado com a corona mortis (anastomose obturatório-ilíaca externa) no acesso.",
        "Combine com a fixação posterior nos tipos C para estabilidade completa.",
      ],
      pitfalls: [
        "Lesão vesical/uretral não reconhecida durante o acesso.",
        "Placa anterior isolada em instabilidade vertical → construção insuficiente.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Sem imobilização gessada — a estabilidade é conferida pela osteossíntese. Precauções de mobilização (evitar adução/rotação extremas) conforme o padrão fixado e a orientação da equipe.",
    weightBearing:
      "Carga guiada pela estabilidade e pela lateralidade: descarga (toque ao solo) do lado posterior lesado por ~6–12 semanas nas lesões instáveis (tipo C); carga conforme tolerância no lado íntegro. Progressão orientada por controle radiográfico.",
    rehab: [
      { window: "0–2 sem", weightBearing: "Descarga do lado lesado; mobilização no leito", focus: "Analgesia, profilaxia de TEV, cuidados de ferida, transferências protegidas." },
      { window: "2–6 sem", weightBearing: "Toque ao solo do lado lesado", focus: "ADM de quadril protegida, fortalecimento isométrico, sedestação e verticalização." },
      { window: "6–12 sem", weightBearing: "Progressão da carga conforme consolidação", focus: "Marcha progressiva com auxílio, fortalecimento de tronco e glúteos." },
      { window: "> 12 sem", weightBearing: "Carga total conforme evolução radiográfica", focus: "Normalização da marcha, condicionamento e retorno funcional." },
    ],
    followup:
      "Controle radiográfico seriado (AP, inlet, outlet) para vigiar a manutenção da redução e a consolidação. Avaliar dor sacroilíaca, função neurológica (L5/S1), dismetria e queixas urinárias/sexuais. Rastrear TEV.",
  },

  complications: [
    { name: "Hemorragia / choque hemorrágico", detail: "Principal causa de morte precoce; venosa/óssea em ~85%, arterial em ramos da ilíaca interna.", prevention: "Reconhecimento precoce, binder no nível dos trocânteres, reanimação hemostática, packing e/ou angioembolização." },
    { name: "Lesão geniturinária", detail: "Lesão de bexiga e uretra (sobretudo em livro aberto/desvio anterior no homem).", prevention: "Alta suspeição; uretrocistografia antes da sondagem quando há sinais; abordagem conjunta com urologia." },
    { name: "Lesão neurológica (plexo lombossacral)", detail: "Déficit de L5/S1 por lesão posterior ou má trajetória de parafuso.", prevention: "Redução adequada, trajetória fluoroscópica cuidadosa, monitorização quando indicada." },
    { name: "Tromboembolismo venoso (TVP/TEP)", detail: "Risco elevado por imobilidade e lesão vascular pélvica.", prevention: "Tromboprofilaxia mecânica e farmacológica precoce conforme o risco hemorrágico." },
    { name: "Infecção", detail: "Infecção de sítio cirúrgico ou do trajeto dos pinos do fixador; risco maior com packing/laparotomia.", prevention: "Cuidado com pinos, retirada oportuna do binder, técnica asséptica." },
    { name: "Consolidação viciosa / pseudoartrose", detail: "Desvio residual do anel, dismetria e dor sacroilíaca crônica.", prevention: "Redução anatômica e fixação estável do complexo posterior." },
    { name: "Dor crônica e disfunção sexual/urinária", detail: "Sequelas funcionais frequentes após lesões de alto grau.", prevention: "Redução adequada, reabilitação e acompanhamento multidisciplinar." },
    { name: "Necrose de pele sob o binder", detail: "Complicação do binder mantido por tempo prolongado.", prevention: "Converter para fixador/definitivo o quanto antes; inspecionar a pele." },
  ],

  evidence: [
    {
      id: "whitbeck-1997",
      claim:
        "Nas dissociações completas anterior + posterior do anel, a lesão por APC exigiu ≥10 unidades de sangue com muito mais frequência que a por cisalhamento vertical (VS), com maior falência de múltiplos órgãos (11/18 vs 2/14) e mortalidade (39% vs 0%).",
      takeaway:
        "O padrão APC de alto grau carrega a maior demanda transfusional e a pior mortalidade — antecipe a reanimação.",
      level: "III",
      studyType: "Coorte retrospectiva (J Orthop Trauma)",
      era: "classico",
      citation: {
        authors: "Whitbeck MG, Zwally HJ, Burgess AR.",
        title:
          "Innominosacral dissociation: mechanism of injury as a predictor of resuscitation requirements, morbidity, and mortality",
        journal: "J Orthop Trauma",
        year: 1997,
        pmid: "9057140",
        doi: "10.1097/00005131-199702000-00002",
        url: "https://doi.org/10.1097/00005131-199702000-00002",
      },
    },
    {
      id: "cothren-2007",
      claim:
        "Protocolo de packing pré-peritoneal + fixação externa em 28 pacientes com fratura pélvica hemodinamicamente instáveis: redução significativa da transfusão (12 → 6 U em 24 h), pouca necessidade de angiografia e nenhuma morte por sangramento agudo.",
      takeaway:
        "O packing pré-peritoneal controla rapidamente o sangramento venoso e pode preceder/substituir a angiografia de urgência.",
      level: "IV",
      studyType: "Estudo prospectivo de protocolo (J Trauma)",
      era: "classico",
      citation: {
        authors: "Cothren CC, Osborn PM, Moore EE, et al.",
        title:
          "Preperitoneal pelvic packing for hemodynamically unstable pelvic fractures: a paradigm shift",
        journal: "J Trauma",
        year: 2007,
        pmid: "17426537",
        doi: "10.1097/TA.0b013e31803c7632",
        url: "https://doi.org/10.1097/TA.0b013e31803c7632",
      },
    },
    {
      id: "coccolini-wses-2017",
      claim:
        "As diretrizes da WSES propõem classificar e conduzir o trauma pélvico com base na hemodinâmica e na estabilidade do anel, integrando binder/fixação, packing pré-peritoneal, angioembolização e REBOA em um algoritmo multidisciplinar de controle de dano.",
      takeaway:
        "A conduta moderna é um algoritmo guiado por fisiologia + estabilidade, com as ferramentas de controle de hemorragia como complementares.",
      level: "V",
      studyType: "Diretriz / revisão (World J Emerg Surg)",
      era: "atual",
      citation: {
        authors: "Coccolini F, Stahel PF, Montori G, et al.",
        title: "Pelvic trauma: WSES classification and guidelines",
        journal: "World J Emerg Surg",
        year: 2017,
        pmid: "28115984",
        doi: "10.1186/s13017-017-0117-6",
        url: "https://doi.org/10.1186/s13017-017-0117-6",
      },
    },
    {
      id: "agri-2017",
      claim:
        "Coorte de 228 fraturas pélvicas: as lesões Tile C tiveram maior mortalidade e maior necessidade transfusional que Tile A/B; não se observou associação entre o uso do binder pré-hospitalar ou da angioembolização e a sobrevida nesta amostra.",
      takeaway:
        "A gravidade (Tile C) domina o prognóstico; o benefício do binder/angio sobre a mortalidade é difícil de isolar em coortes retrospectivas.",
      level: "III",
      studyType: "Coorte retrospectiva (BMC Surg)",
      era: "atual",
      citation: {
        authors: "Agri F, Bourgeat M, Becce F, et al.",
        title:
          "Association of pelvic fracture patterns, pelvic binder use and arterial angio-embolization with transfusion requirements and mortality rates; a 7-year retrospective cohort study",
        journal: "BMC Surg",
        year: 2017,
        pmid: "29121893",
        doi: "10.1186/s12893-017-0299-6",
        url: "https://doi.org/10.1186/s12893-017-0299-6",
      },
    },
    {
      id: "mcdonogh-2022",
      claim:
        "Revisão sistemática e meta-análise (18 estudos, 579 pacientes) de packing pré-peritoneal (PPP) vs angioembolização (AE): as coortes diferem em idade, ISS, sangramento arterial e tempo até a intervenção; em ~27% dos casos o PPP não controlou a hemorragia e exigiu AE subsequente — as duas modalidades são complementares, não excludentes.",
      takeaway:
        "Packing e angioembolização são complementares: o packing controla o venoso; o sangramento arterial residual frequentemente ainda exige angio.",
      level: "III",
      studyType: "Revisão sistemática e meta-análise (J Trauma Acute Care Surg)",
      era: "atual",
      citation: {
        authors: "McDonogh JM, Lewis DP, Tarrant SM, Balogh ZJ.",
        title:
          "Preperitoneal packing versus angioembolization for the initial management of hemodynamically unstable pelvic fracture: A systematic review and meta-analysis",
        journal: "J Trauma Acute Care Surg",
        year: 2022,
        pmid: "34991126",
        doi: "10.1097/TA.0000000000003528",
        url: "https://doi.org/10.1097/TA.0000000000003528",
      },
    },
  ],

  pearls: [
    "Anel fechado: uma fratura visível anteriormente implica uma segunda lesão posterior — procure-a (o posterior manda na estabilidade).",
    "A maior parte do sangramento é venosa/óssea (~85%); só uma minoria é arterial e responde à embolização.",
    "Binder no nível dos GRANDES TROCÂNTERES, não na crista — só assim fecha a sínfise e reduz o volume pélvico.",
    "Young-Burgess fala de mecanismo (prediz sangramento); Tile fala de estabilidade (orienta a fixação). Use ambos.",
    "Sequência de controle de dano: binder → reanimação hemostática (TXA, transfusão maciça) → fixador/packing/angioembolização.",
    "Packing e angioembolização são complementares: packing para o venoso, angio para o blush arterial.",
    "Estabilize o anel antes do packing — o tamponamento precisa de um continente pélvico fechado.",
    "Tipo C (instabilidade vertical) exige fixação POSTERIOR; a placa anterior isolada não basta.",
  ],

  pitfalls: [
    "Colocar o binder na crista ilíaca (ineficaz) ou mantê-lo por tempo prolongado (necrose de pele).",
    "Atribuir todo o sangramento à artéria e correr para a angiografia, esquecendo o binder e o packing do sangramento venoso.",
    "Fixar apenas o anterior numa lesão tipo C → recidiva do desvio vertical.",
    "Não pesquisar lesão de bexiga/uretra antes de sondar em fratura com desvio anterior.",
    "Fechar demais uma fratura por compressão lateral (rotação interna) já colapsada com o binder.",
    "Fazer packing sem estabilizar o anel → tamponamento ineficaz.",
    "Má trajetória do parafuso iliossacral (dismorfismo sacral) → lesão de L5/S1 ou vascular.",
    "Retardar a reanimação hemostática enquanto se aguarda logística de angiografia.",
  ],

  figures: [
    { id: "fratura-anel-pelvico:anatomia", caption: "Anel pélvico em visão AP — sacro, articulações SI, sínfise e acetábulos.", alt: "Esquema AP do anel pélvico osteoligamentar." },
    { id: "fratura-anel-pelvico:ligamentos-posteriores", caption: "Complexo ligamentar posterior — SI posterior, sacroespinhoso e sacrotuberoso ('ponte suspensa').", alt: "Ligamentos posteriores do anel pélvico em visão posterior." },
    { id: "fratura-anel-pelvico:young-burgess", variant: "APC", caption: "Young-Burgess APC — livro aberto por rotação externa (diástase da sínfise).", alt: "Anel pélvico aberto anteriormente com setas de força AP." },
    { id: "fratura-anel-pelvico:young-burgess", variant: "LC", caption: "Young-Burgess LC — compressão lateral com rotação interna.", alt: "Anel pélvico com rotação interna e setas laterais." },
    { id: "fratura-anel-pelvico:young-burgess", variant: "VS", caption: "Young-Burgess VS — cisalhamento vertical com deslocamento cranial do hemipelve.", alt: "Hemipelve deslocado cranialmente com seta vertical." },
    { id: "fratura-anel-pelvico:young-burgess", variant: "CMI", caption: "Young-Burgess CMI — mecanismo combinado.", alt: "Anel pélvico com deformação combinada." },
    { id: "fratura-anel-pelvico:tile", variant: "A", caption: "Tile A — anel estável (complexo posterior íntegro).", alt: "Anel pélvico íntegro e estável." },
    { id: "fratura-anel-pelvico:tile", variant: "B", caption: "Tile B — instabilidade rotacional (livro aberto), posterior parcialmente íntegro.", alt: "Anel pélvico com diástase anterior e posterior preservado." },
    { id: "fratura-anel-pelvico:tile", variant: "C", caption: "Tile C — instabilidade rotacional e vertical (anterior + posterior).", alt: "Anel pélvico com ruptura anterior e posterior e desvio vertical." },
    { id: "fratura-anel-pelvico:controle-mecanico", variant: "binder", caption: "Binder pélvico no nível dos grandes trocânteres.", alt: "Faixa circunferencial comprimindo a pelve nos trocânteres." },
    { id: "fratura-anel-pelvico:controle-mecanico", variant: "fixador", caption: "Fixador externo anterior com pinos supra-acetabulares.", alt: "Fixador externo anterior sobre a pelve." },
    { id: "fratura-anel-pelvico:controle-hemorragia", variant: "packing", caption: "Packing pré-peritoneal — três compressas por hemipelve (sangramento venoso).", alt: "Corte axial com compressas no espaço pré-peritoneal." },
    { id: "fratura-anel-pelvico:controle-hemorragia", variant: "angio", caption: "Angioembolização — cateter na ilíaca interna e coils no ramo sangrante.", alt: "Vasos pélvicos com cateter e embolização do ramo arterial." },
    { id: "fratura-anel-pelvico:step-si-screw", caption: "Fixação posterior — parafuso iliossacral no corredor seguro de S1.", alt: "Parafuso iliossacral cruzando a articulação SI." },
    { id: "fratura-anel-pelvico:step-anterior", caption: "Fixação anterior — placa da sínfise púbica (Pfannenstiel/Stoppa).", alt: "Placa e parafusos sobre a sínfise púbica." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Whitbeck, Zwally, Burgess, J Orthop Trauma 1997",
      "Cothren et al., J Trauma 2007",
      "Coccolini et al. (WSES), World J Emerg Surg 2017",
      "Agri et al., BMC Surg 2017",
      "McDonogh et al., J Trauma Acute Care Surg 2022",
    ],
    attribution:
      "Evidência recuperada do PubMed. Ver DOIs/PMIDs citados nesta seção.",
  },
});
