import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-ombro-clavicula-luxacao-acromioclavicular",
  slug: "luxacao-acromioclavicular",
  regionId: "membro-superior",
  bone: "Articulação acromioclavicular",
  injury: "Luxação/separação AC",
  title: "Luxação acromioclavicular",
  subtitle:
    "Tratar a suspensão escapuloclavicular: nem toda deformidade radiográfica exige cirurgia, mas a instabilidade horizontal e a demanda mudam a indicação.",
  laterality: null,
  status: "complete",
  overview:
    "A luxação acromioclavicular resulta de trauma direto no ombro, com falha progressiva dos ligamentos acromioclaviculares e coracoclaviculares. A classificação de Rockwood organiza a gravidade de I a VI, mas o tipo III permanece controverso: muitos pacientes evoluem bem sem cirurgia, enquanto aqueles com instabilidade horizontal, dor persistente, trabalho acima da cabeça ou atividade esportiva de alto rendimento podem precisar de reconstrução. Os tipos IV, V e VI são instáveis e geralmente cirúrgicos. O objetivo técnico não é apenas alinhar a radiografia AP, mas restaurar a relação entre clavícula e escápula nos planos vertical e horizontal, preservando ou reconstruindo a função dos ligamentos CC e AC.",
  keyFacts: [
    { label: "Mecanismo", value: "Queda/impacto direto sobre o ombro aduzido" },
    { label: "Classificação", value: "Rockwood I-VI; o tipo III exige decisão individualizada" },
    { label: "Radiografia", value: "AP bilateral e incidência de Zanca; axilar para desvio posterior" },
    { label: "Medida-chave", value: "Distância coracoclavicular comparativa" },
    { label: "Cirurgia usual", value: "Rockwood IV-VI; IIIB sintomático ou alta demanda" },
    { label: "Risco técnico", value: "Perda de redução, fratura do coracoide ou da clavícula e rigidez" },
  ],
  anatomy: {
    text:
      "A articulação AC é estabilizada pela cápsula e pelos ligamentos acromioclaviculares no plano horizontal, enquanto os ligamentos coracoclaviculares (conoide medial e trapezoide lateral) controlam a suspensão vertical. A fáscia deltotrapezoidal recobre a extremidade distal da clavícula e deve ser reparada nas lesões de alta energia. A escápula e o membro superior ficam suspensos na clavícula por esse complexo: quando a escápula desce e a clavícula parece subir, o defeito real é a perda da suspensão escapular.",
    figureIds: ["luxacao-acromioclavicular:radiografia", "luxacao-acromioclavicular:anatomia"],
  },
  classification: [
    {
      id: "rockwood",
      name: "Rockwood I-VI",
      basis: "Progressão da lesão ligamentar e direção do deslocamento da clavícula distal.",
      note:
        "Tipo III pode ser subdividido funcionalmente: IIIA estável horizontalmente e IIIB com instabilidade horizontal/escapular disfuncional.",
      types: [
        { code: "I", label: "Entorse AC", description: "Ligamentos AC estirados; CC intactos; radiografia normal.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "I" },
        { code: "II", label: "Subluxação", description: "Ruptura AC, ligamentos CC estirados e discreto aumento das distâncias AC/CC.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "II" },
        { code: "III", label: "Luxação completa", description: "Ruptura AC e CC; aumento da distância CC de até cerca de 100%; decisão individualizada.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "III" },
        { code: "IV", label: "Posterior", description: "A clavícula desloca-se posteriormente para o trapézio; a incidência axilar demonstra melhor o desvio; tratamento cirúrgico.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "IV" },
        { code: "V", label: "Superior grave", description: "Descolamento deltotrapezoidal e aumento CC importante; geralmente cirúrgico.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "V" },
        { code: "VI", label: "Inferior", description: "Clavícula em posição subcoracoide ou subacromial; rara, de alta energia e cirúrgica.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "VI" },
      ],
    },
  ],
  indications: {
    operative: [
      "Rockwood IV, V e VI.",
      "Rockwood III com instabilidade horizontal marcada, dor persistente, discinesia escapular ou alta demanda acima da cabeça.",
      "Falha de tratamento conservador com dor e perda funcional persistentes.",
      "Lesão aberta, interposição irredutível ou associação com fratura instável.",
    ],
    nonOperative: [
      "Rockwood I e II.",
      "Rockwood III sem alta demanda e sem instabilidade horizontal incapacitante.",
      "Paciente com baixo risco funcional ou alto risco cirúrgico.",
    ],
    decisionNotes:
      "A evidência recente reforça que a maioria das lesões Rockwood III evolui bem sem cirurgia. A cirurgia pode melhorar a redução anatômica e a aparência, mas traz complicações do implante e reoperações. O tipo III deve ser tratado como decisão compartilhada: reavaliar dor, função, trabalho, esporte e estabilidade horizontal após um período inicial de reabilitação. As lesões IV-VI fogem desse equilíbrio porque a deformidade é multiplanar e instável.",
  },
  approaches: [
    {
      id: "superior-ac",
      name: "Via superior sobre a articulação AC e o coracoide",
      indication: "Reconstrução coracoclavicular, reparo AC/deltotrapezoidal ou placa-gancho.",
      interval:
        "Incisão transversal em sabre ou longitudinal sobre a clavícula distal e a articulação AC, com exposição subperiostal limitada; identificar a base do coracoide quando a técnica suspensória exigir passagem inferior.",
      atRisk: ["Nervos supraclaviculares", "Plexo braquial e vasos mediais e inferiores ao coracoide", "Fratura iatrogênica do coracoide ou da clavícula por túneis"],
      figureId: "luxacao-acromioclavicular:via",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Confirmar classificação e instabilidade horizontal",
      detail:
        "Obter incidências AP, Zanca comparativa e axilar. Medir a distância CC bilateral e procurar deslocamento posterior da clavícula, interposição no trapézio e disfunção escapular clínica.",
      figureId: "luxacao-acromioclavicular:mensuracao",
      tips: ["A axilar muda conduta no tipo IV", "Comparar com o lado contralateral reduz erro de medida"],
      pitfalls: ["Decidir pelo AP isolado", "Chamar todo tipo III de indicação absoluta"],
    },
    {
      n: 2,
      title: "Reduzir a relação entre clavícula e escápula",
      detail:
        "Com o paciente em cadeira de praia, elevar o braço e a escápula e rebaixar a clavícula distal até restaurar a distância CC e alinhar a articulação AC. A redução deve ser conferida nos planos vertical e horizontal.",
      figureId: "luxacao-acromioclavicular:step-reducao",
      tips: ["Reduzir a escápula em relação à clavícula, não só puxar a clavícula para baixo"],
      pitfalls: ["Aceitar a redução na AP e manter o desvio posterior na axilar"],
    },
    {
      n: 3,
      title: "Reconstruir a suspensão coracoclavicular",
      detail:
        "Usar suspensão cortical, enxerto ou cerclagem anatômica conforme a cronologia e o estoque ósseo. Na lesão aguda, o reparo biológico dos ligamentos e da fáscia deltotrapezoidal complementa a fixação. Evitar túneis grandes e convergentes.",
      figureId: "luxacao-acromioclavicular:step-cc-reconstrucao",
      tips: ["Túneis menores e bem centrados reduzem fratura", "Reparar deltotrapezoide em Rockwood V"],
      pitfalls: ["Passagem medial demais sob coracoide", "Fixação vertical sem controle horizontal"],
    },
    {
      n: 4,
      title: "Escolher implante e proteger reabilitação",
      detail:
        "A placa-gancho pode ser útil quando há necessidade de fixação rígida temporária, mas exige retirada planejada e pode causar impacto subacromial. As técnicas suspensórias preservam a articulação, mas podem perder a redução se a reabilitação for agressiva.",
      figureId: "luxacao-acromioclavicular:step-fixacao",
      tips: ["Documentar plano de retirada se usar placa-gancho"],
      pitfalls: ["Liberar carga precocemente", "Esquecer que a placa-gancho não é definitiva"],
    },
  ],
  postop: {
    immobilization: "Tipoia por 4-6 semanas após reconstrução; nos tipos I-II e III tratados conservadoramente, uso curto para conforto.",
    weightBearing: "Sem carga, adução cruzada ou resistência no início; retorno esportivo após recuperação da força e do controle escapular.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Sem carga", focus: "Dor, gelo, postura escapular e mobilidade de cotovelo, punho e mão." },
      { window: "2-6 semanas", weightBearing: "Sem carga", focus: "Amplitude passiva/ativa-assistida protegida; evitar estresse AC." },
      { window: "6-12 semanas", weightBearing: "Progressiva", focus: "Fortalecimento escapular e do manguito; propriocepção." },
    ],
    followup: "Radiografias para avaliar a manutenção da redução; se houver placa-gancho, programar a retirada conforme a consolidação e o reparo.",
  },
  complications: [
    { name: "Perda de redução", detail: "Comum em técnicas suspensórias e reabilitação precoce.", prevention: "Fixação adequada e protocolo protegido." },
    { name: "Fratura do coracoide ou da clavícula", detail: "Relacionada a túneis grandes ou múltiplos.", prevention: "Usar túneis centrados e de diâmetro mínimo e evitar convergência." },
    { name: "Dor subacromial por placa-gancho", detail: "Pode limitar elevação e exigir retirada.", prevention: "Indicar seletivamente e retirar no tempo correto." },
  ],
  evidence: [
    {
      id: "tauber-2023-rockwood-iii",
      claim: "No Rockwood III agudo isolado, cirurgia não demonstrou superioridade funcional consistente sobre tratamento não cirúrgico.",
      takeaway: "O tipo III deve ser individualizado; iniciar de forma conservadora e reavaliar é uma estratégia defensável.",
      level: "I",
      studyType: "Ensaio clínico randomizado multicêntrico",
      era: "atual",
      citation: {
        authors: "Tauber M, Hoffelner T, Lehmann L, Kraus N, Scheibel M, Moroder P",
        title: "Prospective Multicenter Randomized Controlled Trial of Surgical Versus Nonsurgical Treatment for Acute Rockwood Type 3 Acromioclavicular Injury.",
        journal: "Orthop J Sports Med",
        year: 2023,
        pmid: "37655239",
        doi: "10.1177/23259671231190411",
      },
    },
    {
      id: "haugaard-2024-ac",
      claim: "Coorte atual de Rockwood III/V mostrou recuperação satisfatória sem cirurgia para a maioria dos pacientes.",
      takeaway: "Mesmo em lesões altas, função e demanda devem pesar tanto quanto a redução radiográfica.",
      level: "III",
      studyType: "Estudo clínico prospectivo/observacional",
      era: "atual",
      citation: {
        authors: "Haugaard KB, Bak K, Ryberg D, Muharemovic O, Holmich P, Barfod KW",
        title: "Acromioclavicular joint dislocation Rockwood type III and V show no difference in functional outcome and 91% recovered well without the need for surgery.",
        journal: "Knee Surg Sports Traumatol Arthrosc",
        year: 2024,
        pmid: "38372155",
        doi: "10.1002/ksa.12070",
      },
    },
  ],
  pearls: [
    "A radiografia AP avalia o desvio vertical; a incidência axilar revela o desvio horizontal.",
    "Rockwood III é decisão funcional, não reflexo cirúrgico.",
    "Reparar a fáscia deltotrapezoidal importa nas lesões de alta energia.",
  ],
  pitfalls: [
    "Fixar só no plano vertical e deixar instabilidade horizontal.",
    "Usar placa-gancho sem plano de retirada.",
    "Reabilitar agressivamente antes da cicatriz ligamentar.",
  ],
  figures: [
    {
      id: "luxacao-acromioclavicular:radiografia",
      caption: "Radiografia real com separação acromioclavicular e aumento da distância coracoclavicular.",
      alt: "Radiografia de luxação acromioclavicular",
      kind: "radiograph",
      source: {
        label: "Jay F. Cox (2006) / Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:AC_Separation_XRAY_(enhanced).png",
        license: "CC BY 2.5",
      },
    },
    { id: "luxacao-acromioclavicular:anatomia", caption: "Complexo AC/CC: cápsula AC, conoide e trapezoide.", alt: "Anatomia da articulação acromioclavicular" },
    { id: "luxacao-acromioclavicular:rockwood", variant: "I", caption: "Rockwood I: entorse sem deslocamento.", alt: "Rockwood tipo I" },
    { id: "luxacao-acromioclavicular:rockwood", variant: "III", caption: "Rockwood III: ruptura AC/CC completa.", alt: "Rockwood tipo III" },
    { id: "luxacao-acromioclavicular:rockwood", variant: "V", caption: "Rockwood V: deslocamento superior grave e lesão da fáscia deltotrapezoidal.", alt: "Rockwood tipo V" },
    { id: "luxacao-acromioclavicular:mensuracao", caption: "Distância coracoclavicular comparativa.", alt: "Mensuração coracoclavicular" },
    { id: "luxacao-acromioclavicular:via", caption: "Via superior para AC/coracoide.", alt: "Via de acesso acromioclavicular" },
    { id: "luxacao-acromioclavicular:step-reducao", caption: "Redução da relação entre clavícula e escápula.", alt: "Redução da luxação AC" },
    { id: "luxacao-acromioclavicular:step-cc-reconstrucao", caption: "Reconstrução da suspensão coracoclavicular.", alt: "Reconstrução coracoclavicular" },
    { id: "luxacao-acromioclavicular:step-fixacao", caption: "Placa-gancho como fixação temporária selecionada.", alt: "Fixação com placa-gancho" },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Título de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
    ],
    attribution: "Conteúdo original Revisortopedia; figuras esquemáticas originais.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), seção de lesões acromioclaviculares; redesenho original, não reprodução.",
  },
});
