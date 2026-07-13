import { defineTopic } from "../../types/topic";

/* Luxação do joelho (lesão multiligamentar).
   Escopo: EMERGÊNCIA — lesão da artéria poplítea; índice tornozelo-braquial
   (ITB > 0,90), angioTC; redução urgente; lesão multiligamentar (classificação
   de Schenck, KD-I a KD-V); lesão do nervo fibular comum; timing da
   reconstrução. Evidência recuperada do PubMed (DOIs citados). */
export const topic = defineTopic({
  id: "mi-joelho-luxacao",
  slug: "luxacao-joelho",
  regionId: "membro-inferior",
  bone: "Joelho",
  injury: "Luxação multiligamentar",
  title: "Luxação do joelho",
  subtitle:
    "Emergência ortopédica que ameaça o membro — a lesão da artéria poplítea deve ser ativamente excluída em toda luxação, reduzida ou espontaneamente reduzida.",
  laterality: null,
  status: "complete",

  overview:
    "A luxação do joelho é, por definição, uma lesão multiligamentar: a perda de congruência tibiofemoral exige a ruptura de pelo menos dois dos quatro estabilizadores maiores (LCA, LCP, canto medial e canto lateral). Embora rara, é uma verdadeira emergência ortopédica — a proximidade da artéria poplítea, ancorada proximal e distalmente, torna a lesão vascular a complicação que define o prognóstico do membro.\n\nUm ponto crítico e recorrente: até metade das luxações reduz espontaneamente antes da avaliação, de modo que um joelho \"apenas\" com grande instabilidade multiligamentar e derrame pode esconder uma luxação já reduzida — e o mesmo risco vascular. Toda suspeita obriga a exame vascular estruturado. O índice tornozelo-braquial (ITB) é a ferramenta de triagem: valores ≥ 0,90 têm valor preditivo negativo próximo de 100% para lesão arterial cirúrgica, enquanto ITB < 0,90 indica angiotomografia (angioTC) ou exploração.\n\nO manejo segue uma sequência: redução imediata, reavaliação neurovascular, estabilização (com frequência por fixador externo transarticular), tratamento da lesão vascular quando presente (revascularização em janela isquêmica curta) e, num segundo tempo, a reconstrução ligamentar. A lesão do nervo fibular comum acompanha frequentemente as lesões do canto lateral (KD-III lateral) e é um marcador de gravidade.",

  keyFacts: [
    { label: "Definição", value: "Lesão de ≥ 2 dos 4 ligamentos maiores" },
    { label: "Emergência", value: "Excluir lesão da a. poplítea sempre" },
    { label: "Triagem vascular", value: "ITB ≥ 0,90 → VPN ~100%" },
    { label: "ITB < 0,90", value: "angioTC / arteriografia ou exploração" },
    { label: "Isquemia", value: "Revascularizar em < 6 h; fasciotomia" },
    { label: "Redução espontânea", value: "Até ~50% — não descartar o risco" },
    { label: "Classificação", value: "Schenck (KD-I a KD-V)" },
    { label: "Nervo", value: "Fibular comum (~25%), pior no KD-IIIL" },
  ],

  anatomy: {
    text:
      "A artéria poplítea é o elo anatômico que transforma a luxação do joelho em emergência. Ela entra na fossa poplítea pelo hiato dos adutores (fixada proximalmente) e sai sob a arcada tendínea do músculo sóleo (fixada distalmente), dando ramos geniculares curtos. Ancorada nas duas extremidades e correndo justaposta à cápsula posterior, tem pouca mobilidade para acomodar o deslocamento tibiofemoral — daí a alta incidência de lesão por estiramento, avulsão de ramos ou trombose da íntima, mesmo sem transecção. A lesão da íntima pode ser inicialmente oclusiva de forma incompleta, com pulso presente e trombose progressiva nas horas seguintes — o motivo pelo qual o exame seriado e o ITB são indispensáveis.\n\nO nervo fibular comum é a segunda estrutura em risco: contorna o colo da fíbula superficialmente, ponto fixo e subcutâneo, sendo tracionado sobretudo nas lesões do canto posterolateral (varo/estiramento lateral). A perda de dorsiflexão (pé caído) e da eversão, com anestesia do dorso do pé e do primeiro espaço, caracteriza a paralisia.\n\nOs quatro estabilizadores definem a instabilidade: o LCA e o LCP (pivô central) controlam a translação ântero-posterior; o canto/ligamento colateral medial resiste ao valgo; e o canto posterolateral (LCL, tendão poplíteo, ligamento poplíteo-fibular) resiste ao varo e à rotação externa. A direção da luxação (anterior, posterior, medial, lateral, rotatória) correlaciona-se com o padrão lesional — a luxação anterior por hiperextensão tende a estirar a poplítea; a posterior tende a lesá-la diretamente.",
    figureIds: ["luxacao-joelho:anatomia", "luxacao-joelho:nervo-fibular"],
  },

  classification: [
    {
      id: "schenck-kd",
      name: "Schenck (anatômica — KD)",
      basis: "Quais ligamentos estão rotos (pivô central e cantos)",
      note: "Classificação anatômica que substituiu a descrição posicional (Kennedy), pois metade das luxações reduz espontaneamente. Orienta o planejamento cirúrgico e sinaliza risco vascular/neural. Selecione um tipo para ver o padrão lesional.",
      types: [
        {
          code: "KD-I",
          label: "Um cruzado íntegro",
          description:
            "Luxação com um dos cruzados preservado (lesão de LCA ou de LCP, em geral com um colateral) — padrão menos instável, muitas vezes por baixa energia.",
          figureId: "luxacao-joelho:schenck",
          figureVariant: "I",
        },
        {
          code: "KD-II",
          label: "Ambos os cruzados",
          description:
            "LCA e LCP rotos com colaterais íntegros — padrão puramente central, relativamente incomum.",
          figureId: "luxacao-joelho:schenck",
          figureVariant: "II",
        },
        {
          code: "KD-IIIM",
          label: "Cruzados + canto medial",
          description:
            "Ambos os cruzados mais o LCM/canto posteromedial. Instabilidade em valgo associada; o canto medial frequentemente cicatriza bem com tratamento adequado.",
          figureId: "luxacao-joelho:schenck",
          figureVariant: "IIIM",
        },
        {
          code: "KD-IIIL",
          label: "Cruzados + canto lateral",
          description:
            "Ambos os cruzados mais o canto posterolateral (PLC). Subtipo de maior risco de lesão vascular e do nervo fibular comum; o PLC raramente cicatriza sem cirurgia.",
          figureId: "luxacao-joelho:schenck",
          figureVariant: "IIIL",
        },
        {
          code: "KD-IV",
          label: "Cruzados + ambos os cantos",
          description:
            "LCA, LCP, canto medial e canto lateral — a lesão de 4 ligamentos, altamente instável e de maior morbidade.",
          figureId: "luxacao-joelho:schenck",
          figureVariant: "IV",
        },
        {
          code: "KD-V",
          label: "Luxação-fratura",
          description:
            "Luxação associada a fratura periarticular (platô tibial, côndilo femoral). Exige estabilização óssea antes ou junto da reconstrução ligamentar.",
          figureId: "luxacao-joelho:schenck",
          figureVariant: "V",
        },
      ],
    },
    {
      id: "kennedy-posicional",
      name: "Kennedy (posicional)",
      basis: "Direção do deslocamento da tíbia em relação ao fêmur",
      note: "Sistema clássico, limitado pela redução espontânea frequente e por não descrever a lesão ligamentar. A luxação anterior (hiperextensão) e a posterior concentram o risco vascular.",
      types: [
        { code: "Anterior", label: "Hiperextensão", description: "Tíbia anteriorizada; mecanismo de hiperextensão — estiramento da poplítea (lesão de íntima)." },
        { code: "Posterior", label: "Dashboard", description: "Tíbia posteriorizada; força axial sobre a tíbia flexionada — maior risco de transecção da poplítea." },
        { code: "Medial", label: "Varo", description: "Deslocamento medial; associado a lesão do canto posterolateral." },
        { code: "Lateral", label: "Valgo", description: "Deslocamento lateral; associado a lesão do canto medial." },
        { code: "Rotatória", label: "Postero-lateral irredutível", description: "A variante posterolateral pode ser irredutível por invaginação capsular (sinal da covinha / dimple sign) — indica redução aberta." },
      ],
    },
  ],

  indications: {
    operative: [
      "Membro isquêmico / lesão arterial: revascularização de emergência (reparo ou enxerto de safena invertida) com estabilização óssea associada",
      "Luxação irredutível (dimple sign posterolateral): redução aberta urgente",
      "Estabilização temporária com fixador externo transarticular no instável, no politrauma ou após reparo vascular",
      "Reconstrução/reparo ligamentar do pivô central e dos cantos — tratamento definitivo da instabilidade multiligamentar no paciente adequado",
      "Canto posterolateral e LCP em geral requerem cirurgia; a reconstrução do PLC tem menor falha que o reparo",
      "Transferência do tibial posterior para pé caído por paralisia completa e persistente do fibular comum (sem recuperação em ~6 meses)",
    ],
    nonOperative: [
      "Paciente sem condições clínicas para reconstrução (comorbidade grave, instabilidade fisiológica) — imobilização/órtese após redução e vigilância vascular",
      "Alguns padrões KD-I de baixa energia com boa cicatrização de colateral podem ser conduzidos com reabilitação protegida",
      "Manejo incruento historicamente associado a mais rigidez e instabilidade residual que a reconstrução",
    ],
    decisionNotes:
      "A primeira decisão nunca é ligamentar — é vascular e de viabilidade do membro. Toda luxação (inclusive a espontaneamente reduzida) exige exame neurovascular seriado e ITB; ITB ≥ 0,90 tem valor preditivo negativo próximo de 100% e permite observação com Doppler, enquanto ITB < 0,90 indica angioTC/arteriografia ou exploração direta se houver isquemia franca. Membro isquêmico vai ao centro cirúrgico de imediato para estabilização e revascularização — a janela para revascularizar sem sequela é curta (classicamente < 6–8 h), e a fasciotomia deve ser liberal após reperfusão. Definida a viabilidade, a reconstrução ligamentar entra num segundo momento: a evidência favorece a cirurgia precoce (melhores escores funcionais que a tardia), respeitando a janela de reparo direto de estruturas (≈ 3 semanas) e o estado das partes moles. O fixador externo transarticular é a ponte que protege o reparo vascular e mantém a redução.",
  },

  approaches: [
    {
      id: "reducao-fixador",
      name: "Redução fechada + fixador externo transarticular",
      indication:
        "Primeiro tempo de quase toda luxação instável: reduzir de imediato, reavaliar pulsos/ITB e estabilizar. Obrigatório após revascularização e no politraumatizado (controle de danos).",
      interval:
        "Pinos de Schanz no fêmur distal e na tíbia proximal, ligados por barra medial/anterior, mantendo o joelho reduzido em leve flexão sem tensionar o reparo vascular.",
      atRisk: ["Artéria poplítea (reparo)", "N. fibular comum", "Trajeto dos pinos (perfurantes)"],
      figureId: "luxacao-joelho:step-fixador",
    },
    {
      id: "exposicao-poplitea",
      name: "Exposição vascular (acesso medial à poplítea)",
      indication:
        "Lesão arterial confirmada ou membro isquêmico — revascularização por reparo direto ou enxerto de veia safena invertida, geralmente com equipe vascular.",
      interval:
        "Acesso medial supra e infragenicular ao longo da borda posterior da tíbia/sartório, expondo a artéria poplítea proximal e distal; fasciotomia dos 4 compartimentos se isquemia prolongada.",
      atRisk: ["Veia poplítea", "N. tibial", "Ramos geniculares"],
      figureId: "luxacao-joelho:via-poplitea",
    },
  ],

  technique: [
    {
      n: 1,
      title: "Redução imediata e reavaliação neurovascular",
      detail:
        "Reduzir a luxação assim que possível com tração longitudinal e manobra dirigida à direção do deslocamento, sob analgesia/sedação. Documentar pulsos (pedioso, tibial posterior), perfusão, motricidade e sensibilidade ANTES e DEPOIS da redução, e calcular o ITB. A variante posterolateral pode ser irredutível pelo sinal da covinha (invaginação da cápsula medial) — nesse caso, redução aberta.",
      figureId: "luxacao-joelho:step-reducao",
      tips: [
        "Trate a luxação espontaneamente reduzida com o mesmo rigor vascular de uma luxação franca.",
        "Reavalie o ITB após a redução — a perfusão pode mudar com o realinhamento.",
      ],
      pitfalls: [
        "Pulso palpável NÃO exclui lesão de íntima com trombose progressiva.",
        "Insistir em redução fechada no dimple sign posterolateral → necrose de pele e falha.",
      ],
    },
    {
      n: 2,
      title: "Protocolo vascular — ITB e imagem seletiva",
      detail:
        "Medir o ITB (PAS do tornozelo dividida pela PAS do braço) em todo paciente. ITB ≥ 0,90: observação seriada com Doppler (valor preditivo negativo ~100% para lesão cirúrgica). ITB < 0,90 ou exame anormal: angiotomografia (ou arteriografia). Membro francamente isquêmico não aguarda imagem — vai ao centro cirúrgico. A arteriografia rotineira para todos foi abandonada em favor desta estratégia seletiva guiada pelo ITB/exame.",
      figureId: "luxacao-joelho:itb",
      tips: [
        "ITB é rápido, barato e à beira do leito — use-o como triagem em todos.",
        "Repita o exame vascular em série nas primeiras 24–48 h (trombose tardia).",
      ],
      pitfalls: [
        "Confiar apenas no pulso e dispensar o ITB → diagnóstico tardio e amputação.",
        "Atrasar a revascularização por buscar arteriografia num membro já isquêmico.",
      ],
    },
    {
      n: 3,
      title: "Revascularização e fasciotomia (se lesão arterial)",
      detail:
        "Confirmada a lesão da poplítea, revascularizar com urgência — reparo direto ou, mais comumente, enxerto de veia safena invertida (interposição), idealmente dentro de uma janela isquêmica curta. Estabilizar o esqueleto (fixador externo) protege a anastomose. A fasciotomia dos quatro compartimentos deve ser liberal após reperfusão de isquemia prolongada, prevenindo a síndrome compartimental de reperfusão.",
      figureId: "luxacao-joelho:via-poplitea",
      tips: [
        "Estabilize o osso (ex-fix) para não tracionar a anastomose vascular.",
        "Na dúvida sobre isquemia prolongada, faça a fasciotomia — o custo de não fazê-la é o membro.",
      ],
      pitfalls: [
        "Reconstruir ligamento antes de resolver a lesão vascular.",
        "Omitir a fasciotomia após revascularização tardia → lesão de reperfusão irreversível.",
      ],
    },
    {
      n: 4,
      title: "Estabilização temporária (fixador externo transarticular)",
      detail:
        "Aplicar fixador externo transarticular fêmur–tíbia quando há reparo vascular a proteger, instabilidade grosseira, lesão extensa de partes moles ou politrauma (controle de danos ortopédico). Mantém a redução e permite o cuidado das feridas até a reconstrução definitiva. Posicionar o joelho em leve flexão e evitar tensão sobre estruturas neurovasculares reparadas.",
      figureId: "luxacao-joelho:step-fixador",
      tips: [
        "Posicione os pinos longe do trajeto de futuros túneis/incisões de reconstrução.",
        "Leve flexão do joelho relaxa a poplítea e o reparo vascular.",
      ],
      pitfalls: [
        "Imobilização prolongada em fixador → rigidez; planeje a transição para a reconstrução.",
        "Pinos mal posicionados que comprometem a via de acesso definitiva.",
      ],
    },
    {
      n: 5,
      title: "Reconstrução ligamentar (timing definitivo)",
      detail:
        "Com o membro viável e as partes moles estáveis, proceder à reconstrução do pivô central (LCA e LCP) e ao tratamento dos cantos. A evidência favorece a intervenção precoce por melhores escores funcionais; o reparo direto de estruturas avulsionadas tem janela de ≈ 3 semanas, e o canto posterolateral costuma exigir reconstrução (menor falha que o reparo). Reabilitação com mobilização precoce reduz déficits de amplitude de movimento.",
      figureId: "luxacao-joelho:step-reconstrucao",
      tips: [
        "Trate o PLC formalmente — reparo isolado do canto lateral falha mais que a reconstrução.",
        "Mobilização precoce protegida combate a rigidez, a complicação funcional mais comum.",
      ],
      pitfalls: [
        "Adiar demais e perder a janela de reparo direto (~3 semanas).",
        "Reconstrução agressiva com partes moles ainda comprometidas → complicação de ferida/infecção.",
      ],
    },
  ],

  postop: {
    immobilization:
      "Após reparo vascular e/ou estabilização inicial, o joelho é mantido reduzido em leve flexão (fixador externo transarticular ou órtese articulada travada). Após a reconstrução ligamentar, órtese articulada com progressão controlada da amplitude, protegendo os enxertos.",
    weightBearing:
      "Sem carga na fase aguda com fixador externo/reparo vascular. Após a reconstrução, carga protegida e progressiva conforme os ligamentos tratados e a fixação, tipicamente liberando ao longo de 6–12 semanas.",
    rehab: [
      { window: "0–2 sem", weightBearing: "Sem carga / protegida", focus: "Vigilância vascular seriada; cuidado das feridas e pinos; controle de edema; ADM protegida precoce para evitar rigidez." },
      { window: "2–6 sem", weightBearing: "Carga parcial protegida", focus: "Ganho gradual de amplitude em órtese; ativação do quadríceps; proteção dos enxertos/cantos reconstruídos." },
      { window: "6–12 sem", weightBearing: "Progressão para carga total", focus: "Amplitude funcional; fortalecimento; marcha sem apoio; para pé caído, órtese tornozelo-pé (AFO)." },
      { window: "> 12 sem", weightBearing: "Total, conforme estabilidade", focus: "Fortalecimento avançado e propriocepção; avaliar recuperação do fibular comum; retorno gradual às atividades." },
    ],
    followup:
      "Monitorar perfusão nas primeiras 24–48 h (trombose tardia da poplítea). Acompanhar a recuperação do nervo fibular comum: a paralisia parcial recupera bem, a completa tem prognóstico reservado — considerar transferência do tibial posterior se não houver recuperação em ~6 meses. Vigiar rigidez articular (a complicação funcional mais frequente) e instabilidade residual.",
  },

  complications: [
    {
      name: "Lesão da artéria poplítea",
      detail:
        "A complicação que ameaça o membro. Pode ser transecção, avulsão ou lesão de íntima com trombose progressiva; um pulso inicial normal não a exclui. O diagnóstico tardio é a principal causa de amputação.",
      prevention:
        "Exame neurovascular seriado e ITB em toda luxação (inclusive reduzida); angioTC se ITB < 0,90; revascularização em janela isquêmica curta com fasciotomia liberal.",
    },
    {
      name: "Amputação",
      detail:
        "Desfecho de isquemia não revertida a tempo; o risco cresce com o atraso na revascularização e com a lesão de partes moles associada.",
      prevention: "Reconhecimento e revascularização precoces; estabilização óssea que proteja a anastomose.",
    },
    {
      name: "Síndrome compartimental / lesão de reperfusão",
      detail:
        "Após revascularização de isquemia prolongada, o retorno do fluxo pode desencadear edema e síndrome compartimental.",
      prevention: "Fasciotomia dos quatro compartimentos liberal após reperfusão tardia; monitorização pós-operatória.",
    },
    {
      name: "Lesão do nervo fibular comum",
      detail:
        "Ocorre em cerca de um quarto das luxações, sobretudo no padrão KD-III lateral, por tração sobre o colo da fíbula. Causa pé caído e perda de eversão/sensibilidade dorsal.",
      prevention:
        "Documentar a função no exame inicial; proteger em órtese (AFO); transferência do tibial posterior para paralisia completa persistente.",
    },
    {
      name: "Rigidez articular",
      detail:
        "Complicação funcional mais comum após o tratamento; agravada por imobilização prolongada e por lesões de múltiplos ligamentos.",
      prevention: "Mobilização precoce protegida; reabilitação estruturada; artrólise/manipulação se persistente.",
    },
    {
      name: "Instabilidade residual / falha de reconstrução",
      detail:
        "Persistência de frouxidão, sobretudo do canto posterolateral quando reparado em vez de reconstruído.",
      prevention: "Reconstruir o PLC (menor falha que reparo); tratar todas as estruturas lesadas; respeitar o timing.",
    },
    {
      name: "Trombose venosa / TEV",
      detail: "Risco elevado por trauma de alta energia, lesão vascular e imobilização.",
      prevention: "Tromboprofilaxia conforme risco de sangramento; mobilização assim que seguro.",
    },
    {
      name: "Infecção",
      detail: "Relacionada a feridas de partes moles, trajeto de pinos do fixador e cirurgias de revisão.",
      prevention: "Cuidado dos pinos e feridas; timing cirúrgico após estabilização das partes moles; técnica asséptica.",
    },
  ],

  evidence: [
    {
      id: "mills-2004-itb",
      claim:
        "Estudo prospectivo de 38 luxações do joelho: todos os 11 pacientes com ITB < 0,90 tinham lesão arterial cirúrgica; nenhum dos 27 com ITB ≥ 0,90 teve lesão vascular ao exame seriado/duplex — sensibilidade, especificidade e VPP de 100% e VPN de 100%.",
      takeaway: "O ITB < 0,90 identifica com segurança a lesão arterial; ITB ≥ 0,90 dispensa arteriografia rotineira.",
      level: "II",
      studyType: "Estudo diagnóstico prospectivo (J Trauma)",
      era: "classico",
      citation: {
        authors: "Mills WJ, Barei DP, McNair P",
        title:
          "The value of the ankle-brachial index for diagnosing arterial injury after knee dislocation: a prospective study",
        journal: "J Trauma",
        year: 2004,
        pmid: "15211135",
        doi: "10.1097/01.ta.0000068995.63201.0b",
        url: "https://doi.org/10.1097/01.ta.0000068995.63201.0b",
      },
    },
    {
      id: "medina-2014-review",
      claim:
        "Revisão sistemática de 862 luxações: lesão vascular em 18% e lesão nervosa em 25%; das lesões vasculares, 80% foram reparadas e 12% evoluíram para amputação. O subtipo KD-IIIL (ACL+PCL+canto lateral) teve a maior prevalência de lesão vascular (32%).",
      takeaway: "A lesão vascular é frequente e amputa em ~1/8 dos casos; o padrão lateral concentra o risco.",
      level: "IV",
      studyType: "Revisão sistemática (Clin Orthop Relat Res)",
      era: "classico",
      citation: {
        authors: "Medina O, Arom GA, Yeranosian MG, Petrigliano FA, McAllister DR",
        title: "Vascular and nerve injury after knee dislocation: a systematic review",
        journal: "Clin Orthop Relat Res",
        year: 2014,
        pmid: "24554457",
        doi: "10.1007/s11999-014-3511-3",
        url: "https://doi.org/10.1007/s11999-014-3511-3",
      },
    },
    {
      id: "hohmann-2017-timing",
      claim:
        "Meta-análise de 8 estudos (260 pacientes): a reconstrução precoce (média ~10,6 dias) resultou em escores de Lysholm significativamente superiores à tardia (média ~294 dias) — 31% de joelhos normais/quase normais na precoce vs 15% na tardia; sem diferença relevante na amplitude de movimento.",
      takeaway: "A reconstrução ligamentar precoce melhora o desfecho funcional em relação à tardia.",
      level: "IV",
      studyType: "Revisão sistemática e meta-análise (The Knee)",
      era: "atual",
      citation: {
        authors: "Hohmann E, Glatt V, Tetsworth K",
        title:
          "Early or delayed reconstruction in multi-ligament knee injuries: A systematic review and meta-analysis",
        journal: "Knee",
        year: 2017,
        pmid: "28716470",
        doi: "10.1016/j.knee.2017.06.011",
        url: "https://doi.org/10.1016/j.knee.2017.06.011",
      },
    },
    {
      id: "woodmass-2015-fibular",
      claim:
        "Revisão sistemática de 214 paralisias do fibular comum após luxação do joelho: recuperação funcional (MRC ≥ 3/5) em apenas 38,4% das paralisias completas, contra recuperação total em 87,3% das parciais; a idade mais jovem foi preditora de recuperação, e a transferência do tibial posterior é o meio mais previsível de restaurar a dorsiflexão na paralisia persistente.",
      takeaway: "Paralisia parcial do fibular recupera bem; a completa tem prognóstico reservado e pode exigir transferência tendínea.",
      level: "IV",
      studyType: "Revisão sistemática (Knee Surg Sports Traumatol Arthrosc)",
      era: "atual",
      citation: {
        authors: "Woodmass JM, Romatowski NPJ, Esposito JG, Mohtadi NGH, Longino PD",
        title:
          "A systematic review of peroneal nerve palsy and recovery following traumatic knee dislocation",
        journal: "Knee Surg Sports Traumatol Arthrosc",
        year: 2015,
        pmid: "26115847",
        doi: "10.1007/s00167-015-3676-7",
        url: "https://doi.org/10.1007/s00167-015-3676-7",
      },
    },
    {
      id: "ng-2020-manejo",
      claim:
        "Revisão de conduta: até 18% das lesões multiligamentares têm lesão vascular; todas devem ser avaliadas pelo ITB, com arteriografia seletiva se ITB < 0,90; o membro isquêmico vai ao centro cirúrgico de imediato para estabilização e revascularização; o reparo direto eficaz só é possível em até 3 semanas; a reconstrução do canto posterolateral tem menor taxa de falha que o reparo.",
      takeaway: "Consolida o algoritmo: ITB para todos, imagem seletiva, revascularização emergente e reconstrução preferível a reparo no PLC.",
      level: "V",
      studyType: "Revisão narrativa (EFORT Open Rev)",
      era: "atual",
      citation: {
        authors: "Ng JWG, Myint Y, Ali FM",
        title: "Management of multiligament knee injuries",
        journal: "EFORT Open Rev",
        year: 2020,
        pmid: "32296548",
        doi: "10.1302/2058-5241.5.190012",
        url: "https://doi.org/10.1302/2058-5241.5.190012",
      },
    },
  ],

  pearls: [
    "Luxação do joelho é emergência vascular até prova em contrário — a artéria poplítea, ancorada, quase não tolera o deslocamento.",
    "Até metade das luxações reduz espontaneamente: um joelho multiligamentar instável pode esconder uma luxação e o mesmo risco vascular.",
    "ITB ≥ 0,90 tem VPN próximo de 100% para lesão arterial cirúrgica; ITB < 0,90 pede angioTC/arteriografia.",
    "Pulso palpável não exclui lesão de íntima com trombose progressiva — reavalie em série nas primeiras 24–48 h.",
    "Membro isquêmico não aguarda imagem: centro cirúrgico para estabilizar e revascularizar, com fasciotomia liberal.",
    "Classifique por Schenck (KD-I a KD-V); o KD-IIIL concentra o risco vascular e de nervo fibular.",
    "Paralisia parcial do fibular recupera bem (~87%); a completa é reservada (~38%) — pense em transferência do tibial posterior.",
    "Reconstrução precoce dá melhores escores funcionais; reparo direto tem janela de ~3 semanas; reconstrua o PLC.",
  ],

  pitfalls: [
    "Confiar no pulso e dispensar o ITB — o caminho clássico para a amputação por diagnóstico tardio.",
    "Tratar a luxação espontaneamente reduzida como entorse e liberar o paciente sem vigilância vascular.",
    "Insistir na redução fechada da luxação posterolateral irredutível (dimple sign) e necrosar a pele.",
    "Buscar arteriografia num membro já claramente isquêmico em vez de revascularizar.",
    "Esquecer a fasciotomia após reperfusão tardia → síndrome compartimental de reperfusão.",
    "Reparar (em vez de reconstruir) o canto posterolateral → alta taxa de falha.",
    "Imobilizar por tempo excessivo e produzir rigidez, a complicação funcional mais comum.",
    "Perder a janela de reparo direto (~3 semanas) por indecisão no timing.",
  ],

  figures: [
    {
      id: "luxacao-joelho:anatomia",
      caption: "Fossa poplítea: a. poplítea ancorada no hiato dos adutores e na arcada do sóleo; n. fibular comum no colo da fíbula.",
      alt: "Joelho em vista posterior com a artéria poplítea e o nervo fibular comum e seus pontos de ancoragem.",
    },
    {
      id: "luxacao-joelho:schenck",
      variant: "I",
      caption: "Schenck KD-I — luxação com um cruzado íntegro.",
      alt: "Esquema do joelho com apenas um dos cruzados roto.",
    },
    {
      id: "luxacao-joelho:schenck",
      variant: "II",
      caption: "Schenck KD-II — ambos os cruzados rotos, colaterais íntegros.",
      alt: "Esquema com LCA e LCP rotos e colaterais preservados.",
    },
    {
      id: "luxacao-joelho:schenck",
      variant: "IIIM",
      caption: "Schenck KD-IIIM — ambos os cruzados + canto medial.",
      alt: "Esquema com cruzados e colateral medial rotos.",
    },
    {
      id: "luxacao-joelho:schenck",
      variant: "IIIL",
      caption: "Schenck KD-IIIL — ambos os cruzados + canto lateral (maior risco vascular/nervo fibular).",
      alt: "Esquema com cruzados e canto posterolateral rotos.",
    },
    {
      id: "luxacao-joelho:schenck",
      variant: "IV",
      caption: "Schenck KD-IV — ambos os cruzados + ambos os colaterais.",
      alt: "Esquema com os quatro ligamentos maiores rotos.",
    },
    {
      id: "luxacao-joelho:schenck",
      variant: "V",
      caption: "Schenck KD-V — luxação com fratura periarticular.",
      alt: "Esquema com lesão ligamentar e traço de fratura do platô.",
    },
    {
      id: "luxacao-joelho:itb",
      caption: "Protocolo vascular pelo ITB — limiar de 0,90 separando observação de imagem/exploração.",
      alt: "Diagrama do índice tornozelo-braquial com limiar de 0,90 e ramos de conduta.",
    },
    {
      id: "luxacao-joelho:nervo-fibular",
      caption: "Nervo fibular comum contornando o colo da fíbula — pé caído por lesão de tração.",
      alt: "Trajeto do nervo fibular comum ao redor do colo da fíbula com pé caído.",
    },
    {
      id: "luxacao-joelho:via-poplitea",
      caption: "Acesso medial para exposição e revascularização da artéria poplítea (enxerto de safena invertida).",
      alt: "Via medial do membro inferior expondo a artéria poplítea e o enxerto venoso.",
    },
    {
      id: "luxacao-joelho:step-reducao",
      caption: "Passo 1 — redução imediata com tração longitudinal e reavaliação neurovascular.",
      alt: "Redução da luxação tibiofemoral com setas de tração e contra-tração.",
    },
    {
      id: "luxacao-joelho:step-fixador",
      caption: "Fixador externo transarticular fêmur–tíbia — estabilização temporária que protege o reparo vascular.",
      alt: "Fixador externo com pinos femorais e tibiais e barra de conexão.",
    },
    {
      id: "luxacao-joelho:step-reconstrucao",
      caption: "Reconstrução ligamentar precoce — túneis e enxertos do pivô central.",
      alt: "Enxertos dos cruzados em túneis ósseos com parafusos de interferência.",
    },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Mills et al., J Trauma 2004",
      "Medina et al., Clin Orthop Relat Res 2014",
      "Hohmann et al., The Knee 2017",
      "Woodmass et al., Knee Surg Sports Traumatol Arthrosc 2015",
      "Ng et al., EFORT Open Rev 2020",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados nesta seção.",
  },
});
