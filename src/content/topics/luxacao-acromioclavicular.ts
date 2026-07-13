import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-ombro-clavicula-luxacao-acromioclavicular",
  slug: "luxacao-acromioclavicular",
  regionId: "membro-superior",
  bone: "Articulação acromioclavicular",
  injury: "Luxacao/separacao AC",
  title: "Luxação acromioclavicular",
  subtitle:
    "Tratar a suspensao escapuloclavicular: nem toda deformidade radiográfica exige cirurgia, mas instabilidade horizontal e demanda mudam a indicação.",
  laterality: null,
  status: "complete",
  overview:
    "A luxação acromioclavicular resulta de trauma direto no ombro, com falha progressiva dos ligamentos acromioclaviculares e coracoclaviculares. A classificação de Rockwood organiza a gravidade de I a VI, mas a decisão dificil mora no tipo III: muitos pacientes evoluem bem sem cirurgia, enquanto subgrupos com instabilidade horizontal, dor persistente, trabalho acima da cabeça ou atleta de alto rendimento podem precisar de reconstrução. Tipos IV, V e VI são instáveis e geralmente cirúrgicos. O objetivo tecnico não e apenas alinhar a radiografia AP: e restaurar a relação clavicula-escapula nos planos vertical e horizontal, preservando ou reconstruindo a função dos ligamentos CC e AC.",
  keyFacts: [
    { label: "Mecanismo", value: "Queda/impacto direto sobre o ombro aduzido" },
    { label: "Classificação", value: "Rockwood I-VI; III e o territorio cinzento" },
    { label: "Radiografia", value: "AP bilateral/Zanca; axilar para instabilidade posterior" },
    { label: "Medida chave", value: "Distancia coracoclavicular comparativa" },
    { label: "Cirurgia usual", value: "Rockwood IV-VI; IIIB sintomatico/alta demanda" },
    { label: "Risco tecnico", value: "Perda de redução, fratura de coracoide/clavicula, rigidez" },
  ],
  anatomy: {
    text:
      "A articulação AC e estabilizada por capsula e ligamentos AC no plano horizontal, enquanto os ligamentos coracoclaviculares (conoide medial e trapezoide lateral) controlam a suspensao vertical da clavícula. O deltotrapezoide recobre a extremidade distal da clavícula e deve ser reparado nas lesões de alta energia. A escápula e o membro superior ficam suspensos a clavícula por esse complexo: quando a escápula cai e a clavícula parece subir, o defeito real e a perda da suspensao escapular.",
    figureIds: ["luxacao-acromioclavicular:radiografia", "luxacao-acromioclavicular:anatomia"],
  },
  classification: [
    {
      id: "rockwood",
      name: "Rockwood I-VI",
      basis: "Progressao da lesão ligamentar e direcao/deslocamento da clavícula distal.",
      note:
        "Tipo III pode ser subdividido funcionalmente: IIIA estável horizontalmente e IIIB com instabilidade horizontal/escapular disfuncional.",
      types: [
        { code: "I", label: "Entorse AC", description: "Ligamentos AC estirados; CC intactos; radiografia normal.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "I" },
        { code: "II", label: "Subluxacao", description: "Ruptura AC, CC estirados; discreto aumento AC/CC.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "II" },
        { code: "III", label: "Luxacao completa", description: "Ruptura AC e CC; aumento CC até cerca de 100%; decisão individualizada.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "III" },
        { code: "IV", label: "Posterior", description: "Clavícula desloca-se posteriormente para o trapézio; melhor vista na axilar; cirúrgico.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "IV" },
        { code: "V", label: "Superior grave", description: "Descolamento deltotrapezoidal e aumento CC importante; geralmente cirúrgico.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "V" },
        { code: "VI", label: "Inferior", description: "Clavícula subcoracoide/subacromial; rara, alta energia; cirúrgica.", figureId: "luxacao-acromioclavicular:rockwood", figureVariant: "VI" },
      ],
    },
  ],
  indications: {
    operative: [
      "Rockwood IV, V e VI.",
      "Rockwood III com instabilidade horizontal marcada, dor persistente, discinesia escapular ou alta demanda acima da cabeça.",
      "Falha de tratamento conservador com dor e perda funcional persistentes.",
      "Lesao aberta, interposição irredutível ou associação com fratura instável.",
    ],
    nonOperative: [
      "Rockwood I e II.",
      "Rockwood III sem alta demanda e sem instabilidade horizontal incapacitante.",
      "Paciente com baixo risco funcional ou alto risco cirúrgico.",
    ],
    decisionNotes:
      "A evidência recente reforca que a maioria dos Rockwood III recupera bem sem cirurgia. A cirurgia pode melhorar redução anatômica/cosmese, mas traz complicações de implante e reoperacoes. O tipo III deve ser tratado como decisão compartilhada: reavaliar dor, função, trabalho, esporte e estabilidade horizontal após período inicial de reabilitação. Lesoes IV-VI fogem desse equilíbrio porque a deformidade e multiplanar e instável.",
  },
  approaches: [
    {
      id: "superior-ac",
      name: "Via superior sobre AC/coracoide",
      indication: "Reconstrução coracoclavicular, reparo AC/deltotrapezoidal ou placa-gancho.",
      interval:
        "Incisao saber-cut ou longitudinal sobre clavicula distal/AC, com exposição subperiostal limitada; identificar base do coracoide quando técnica suspensória exigir passagem inferior.",
      atRisk: ["Nervos supraclaviculares", "Plexo/vasos medial e inferior ao coracoide", "Fratura iatrogenica da coracoide ou clavicula por túneis"],
      figureId: "luxacao-acromioclavicular:via",
    },
  ],
  technique: [
    {
      n: 1,
      title: "Confirmar classificação e instabilidade horizontal",
      detail:
        "Obter AP/Zanca comparativa e axilar. Medir distancia CC bilateral e procurar deslocamento posterior da clavícula, interposição no trapézio e disfunção escapular clinica.",
      figureId: "luxacao-acromioclavicular:mensuracao",
      tips: ["A axilar muda conduta no tipo IV", "Comparar com o lado contralateral reduz erro de medida"],
      pitfalls: ["Decidir pelo AP isolado", "Chamar todo tipo III de indicação absoluta"],
    },
    {
      n: 2,
      title: "Reduzir a relação clavicula-escapula",
      detail:
        "Com o paciente em cadeira de praia, elevar o braço/escapula e rebaixar a clavícula distal até restaurar a distancia CC e alinhar a AC. Redução deve ser conferida nos planos vertical e horizontal.",
      figureId: "luxacao-acromioclavicular:step-reducao",
      tips: ["Reduzir a escápula para a clavícula, não so puxar a clavícula para baixo"],
      pitfalls: ["Aceitar redução AP e manter posteriorizacao na axilar"],
    },
    {
      n: 3,
      title: "Reconstruir suspensao coracoclavicular",
      detail:
        "Usar suspensao cortical, enxerto ou cerclagem anatômica conforme cronologia e estoque ósseo. Em lesão aguda, reparo biológico dos ligamentos/deltotrapezoide complementa a fixação. Evitar túneis grandes e convergentes.",
      figureId: "luxacao-acromioclavicular:step-cc-reconstrucao",
      tips: ["Túneis menores e bem centrados reduzem fratura", "Reparar deltotrapezoide em Rockwood V"],
      pitfalls: ["Passagem medial demais sob coracoide", "Fixação vertical sem controle horizontal"],
    },
    {
      n: 4,
      title: "Escolher implante e proteger reabilitação",
      detail:
        "Placa-gancho pode ser util quando há necessidade de fixação rigida temporaria, mas exige retirada planejada e pode causar impacto subacromial. Técnicas suspensórias preservam a articulação, mas podem perder redução se reabilitação for agressiva.",
      figureId: "luxacao-acromioclavicular:step-fixacao",
      tips: ["Documentar plano de retirada se usar placa-gancho"],
      pitfalls: ["Liberar carga precoce", "Esquecer que placa-gancho não e definitiva"],
    },
  ],
  postop: {
    immobilization: "Tipoia por 4-6 semanas nas reconstrucoes; I-II/III conservador com tipoia curta para conforto.",
    weightBearing: "Sem carga e sem aducao cruzada/resistência inicial; retorno esportivo após forca e controle escapular.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Sem carga", focus: "Dor, gelo, postura escapular e cotovelo/punho/mao." },
      { window: "2-6 semanas", weightBearing: "Sem carga", focus: "Amplitude passiva/ativa-assistida protegida; evitar estresse AC." },
      { window: "6-12 semanas", weightBearing: "Progressiva", focus: "Fortalecimento escapular e manguito; propriocepcao." },
    ],
    followup: "Radiografias para manutencao da redução; se placa-gancho, programar retirada conforme consolidação/reparo.",
  },
  complications: [
    { name: "Perda de redução", detail: "Comum em técnicas suspensórias e reabilitação precoce.", prevention: "Fixação adequada e protocolo protegido." },
    { name: "Fratura de coracoide/clavicula", detail: "Relacionada a túneis grandes/multiplos.", prevention: "Túneis centrados, diametro minimo e evitar convergencia." },
    { name: "Dor subacromial por placa-gancho", detail: "Pode limitar elevação e exigir retirada.", prevention: "Indicar seletivamente e retirar no tempo correto." },
  ],
  evidence: [
    {
      id: "tauber-2023-rockwood-iii",
      claim: "No Rockwood III agudo isolado, cirurgia não demonstrou superioridade funcional consistente sobre tratamento não cirúrgico.",
      takeaway: "Tipo III deve ser individualizado; iniciar conservador e reavaliar e uma estrategia defensavel.",
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
    "A radiografia AP mede vertical; a axilar revela o problema horizontal.",
    "Rockwood III e decisão funcional, não reflexo cirúrgico.",
    "Reparar deltotrapezoide importa nas lesões de alta energia.",
  ],
  pitfalls: [
    "Fixar so no plano vertical e deixar instabilidade horizontal.",
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
    { id: "luxacao-acromioclavicular:anatomia", caption: "Complexo AC/CC: capsula AC, conoide e trapezoide.", alt: "Anatomia da articulação acromioclavicular" },
    { id: "luxacao-acromioclavicular:rockwood", variant: "I", caption: "Rockwood I: entorse sem deslocamento.", alt: "Rockwood tipo I" },
    { id: "luxacao-acromioclavicular:rockwood", variant: "III", caption: "Rockwood III: ruptura AC/CC completa.", alt: "Rockwood tipo III" },
    { id: "luxacao-acromioclavicular:rockwood", variant: "V", caption: "Rockwood V: deslocamento superior grave e deltotrapezoide.", alt: "Rockwood tipo V" },
    { id: "luxacao-acromioclavicular:mensuracao", caption: "Distancia coracoclavicular comparativa.", alt: "Mensuracao coracoclavicular" },
    { id: "luxacao-acromioclavicular:via", caption: "Via superior para AC/coracoide.", alt: "Via de acesso acromioclavicular" },
    { id: "luxacao-acromioclavicular:step-reducao", caption: "Redução da relação clavicula-escapula.", alt: "Redução da luxação AC" },
    { id: "luxacao-acromioclavicular:step-cc-reconstrucao", caption: "Reconstrução/suspensao coracoclavicular.", alt: "Reconstrução coracoclavicular" },
    { id: "luxacao-acromioclavicular:step-fixacao", caption: "Placa-gancho como fixação temporaria selecionada.", alt: "Fixação com placa gancho" },
  ],
  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "SBOT. Edital TEOT 2026: Bibliografia para o 55º Exame de Titulo de Ortopedia e Traumatologia.",
      "Rockwood and Green's Fractures in Adults. 10th ed. 2024.",
      "Campbell's Operative Orthopaedics. 14th ed. 2021.",
    ],
    attribution: "Conteudo original Revisortopedia; figuras esquematicas originais.",
    figureReference:
      "Referência editorial: Rockwood & Green's Fractures in Adults, 10th ed. (2024), seção de lesões acromioclaviculares; redesenho original, não reprodução.",
  },
});
