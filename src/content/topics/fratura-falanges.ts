import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "ms-mao-fratura-falanges",
  slug: "fratura-falanges",
  regionId: "membro-superior",
  bone: "Mão",
  injury: "Fratura das falanges",
  title: "Fratura das falanges",
  subtitle:
    "Fraturas comuns da mão em que o inimigo não é a consolidação, e sim a rigidez: o tratamento equilibra estabilidade suficiente e mobilização precoce.",
  laterality: null,
  status: "complete",

  overview:
    "As fraturas das falanges (proximal, média e distal) estão entre as lesões esqueléticas mais frequentes da mão. A questão central raramente é 'vai consolidar?' — a esmagadora maioria consolida —, e sim 'vai voltar a mover?'. A rigidez, por aderências do aparelho extensor e dos flexores dentro de compartimentos estreitos, é a principal complicação e o desfecho que define o resultado funcional.\n\nA decisão terapêutica gira em torno de dois eixos: estabilidade (o traço mantém a redução em movimento?) e envolvimento articular (há degrau ou instabilidade da IFP/IFD?). Fraturas estáveis, sem desvio e sem má rotação são tratadas de forma conservadora com imobilização breve e mobilização precoce — muitas vezes com buddy taping. Fraturas instáveis, irredutíveis, com má rotação, articulares desviadas ou expostas exigem fixação; a meta da cirurgia é dar estabilidade apenas suficiente para permitir movimento precoce, sem a dissecção que gera cicatriz e rigidez. A má rotação, mesmo de poucos graus, cruza os dedos ('tesoura') e deve ser sempre pesquisada com os dedos em flexão.",

  keyFacts: [
    { label: "Complicação-chave", value: "Rigidez (aderências extensor/flexor)" },
    { label: "Eixos de decisão", value: "Estabilidade · envolvimento articular" },
    { label: "Maioria", value: "Estável → conservador + movimento precoce" },
    { label: "Sinal a nunca perder", value: "Má rotação (tesoura na flexão)" },
    { label: "Falange proximal", value: "Tende ao ápice volar (angulação palmar)" },
    { label: "Articular IFP", value: "Tolera mal a incongruência → reduzir e fixar" },
  ],

  anatomy: {
    text:
      "Cada dedo tem três falanges (a exceção do polegar, com duas): proximal (P1), média (P2) e distal (P3). Cada falange possui base, diáfise, colo e cabeça bicondilar que se articula com a base côncava da falange seguinte, formando as articulações interfalângicas proximal (IFP) e distal (IFD). Esse encaixe condilar é congruente e pouco tolerante a degraus — daí o mau prognóstico das fraturas articulares desviadas, sobretudo na IFP.\n\nAs forças deformantes são ditadas pelas inserções tendíneas. Na falange proximal, os interósseos fletem o fragmento proximal (base) e o aparelho extensor (banda central na base de P2) estende o fragmento distal, produzindo angulação de ápice volar (palmar). Na falange média, o resultado depende da relação do traço com a inserção do flexor superficial (FDS): traço proximal à inserção tende ao ápice dorsal, distal tende ao ápice volar. A falange distal ancora o tendão extensor terminal (dorso) e o flexor profundo (FDP, base volar), o que explica as lesões em martelo (mallet) e as avulsões flexoras (jersey finger). O deslizamento tendíneo dentro de bainhas estreitas torna a mão especialmente propensa a aderências — a base biológica da mobilização precoce.",
    figureIds: ["fratura-falanges:anatomia", "fratura-falanges:forcas"],
  },

  classification: [
    {
      id: "localizacao",
      name: "Por segmento e localização",
      basis: "Osso e região acometidos guiam forças deformantes e prognóstico",
      types: [
        { code: "P1", label: "Falange proximal", description: "Base, diáfise, colo ou cabeça. Tende à angulação de ápice volar; a fratura do colo é típica da criança.", figureId: "fratura-falanges:forcas", figureVariant: "proximal" },
        { code: "P2", label: "Falange média", description: "Padrão de desvio depende da relação com a inserção do FDS (ápice dorsal vs volar).", figureId: "fratura-falanges:forcas", figureVariant: "media" },
        { code: "P3", label: "Falange distal", description: "Tufo (esmagamento, frequente hematoma subungueal), diáfise, ou base (mallet ósseo dorsal, avulsão do FDP volar).", figureId: "fratura-falanges:anatomia" },
      ],
    },
    {
      id: "padrao",
      name: "Por padrão do traço",
      basis: "Configuração do traço define estabilidade e método de fixação",
      types: [
        { code: "T", label: "Transversa", description: "Instável à flexão; tende a angular. Boa indicação de fios ou placa se irredutível.", figureId: "fratura-falanges:padroes", figureVariant: "transversa" },
        { code: "O", label: "Oblíqua / espiral", description: "Encurta e roda; má rotação frequente. Ideal para parafusos interfragmentares quando o comprimento permite.", figureId: "fratura-falanges:padroes", figureVariant: "obliqua" },
        { code: "C", label: "Cominutiva", description: "Múltiplos fragmentos, geralmente de alta energia ou exposta; estabilização com placa ou fixador externo.", figureId: "fratura-falanges:padroes", figureVariant: "cominutiva" },
        { code: "A", label: "Articular", description: "Envolve a superfície articular (condilar, base de P2, pilão); degrau > 1 mm ou instabilidade indicam fixação.", figureId: "fratura-falanges:padroes", figureVariant: "articular" },
      ],
    },
    {
      id: "estabilidade",
      name: "Estável vs instável",
      basis: "Critério prático que decide conservador vs cirúrgico",
      note: "Instabilidade = perda de redução ao mobilizar, má rotação, encurtamento, cominução ou incongruência articular.",
      types: [
        { code: "E", label: "Estável", description: "Sem desvio/mínimo, mantém redução em movimento e sem má rotação. Tratamento conservador com mobilização precoce.", figureId: "fratura-falanges:mobilizacao" },
        { code: "I", label: "Instável", description: "Redução não mantida, má rotação, articular desviada, cominutiva ou exposta. Requer fixação.", figureId: "fratura-falanges:fixacao", figureVariant: "kwire" },
      ],
    },
  ],

  indications: {
    operative: [
      "Fratura irredutível ou que perde a redução ao mobilizar (instável)",
      "Má rotação clínica (tesoura na flexão) não corrigível por meios fechados",
      "Fratura articular desviada (degrau > 1 mm) ou fratura-luxação instável da IFP",
      "Fratura do colo desviada (especialmente na criança) com risco de bloqueio",
      "Múltiplos dedos/raios lesados, fratura exposta ou com lesão de partes moles",
      "Encurtamento significativo em traço oblíquo/espiral",
    ],
    nonOperative: [
      "Fratura sem desvio ou estável, sem má rotação — imobilização breve + movimento precoce",
      "Muitas fraturas de falange distal (tufo) — proteção e cuidado da unha/leito",
      "Fraturas estáveis passíveis de buddy taping com mobilização ativa imediata",
    ],
    decisionNotes:
      "A pergunta prática é dupla: a fratura é estável e há envolvimento articular? Se estável, sem má rotação e extra-articular, o tratamento é conservador com o menor tempo de imobilização possível para permitir movimento precoce. A má rotação deve ser testada com os dedos em flexão (convergência das unhas / plano das cutículas) e não apenas na radiografia. Quando indicada, a fixação deve dar estabilidade suficiente para o movimento precoce com a menor agressão possível às partes moles — daí a preferência por técnicas percutâneas (fios) ou parafusos em traços apropriados, reservando a placa para cominutivas/instáveis, ciente de sua maior taxa de rigidez.",
  },

  approaches: [
    {
      id: "percutanea",
      name: "Fixação percutânea (fios de Kirschner)",
      indication: "Redução fechada de fraturas instáveis (transversas, colo, algumas articulares) preservando as partes moles.",
      interval: "Sem exposição: fios anterógrados/cruzados sob fluoroscopia",
      atRisk: ["Aparelho extensor", "Bandas laterais", "Cartilagem articular (evitar fios transarticulares prolongados)"],
      figureId: "fratura-falanges:fixacao",
    },
    {
      id: "dorsal",
      name: "Acesso dorsal (aparelho extensor)",
      indication: "ORIF de diáfise/base com placa ou parafusos; fraturas articulares acessíveis pelo dorso.",
      interval: "Split do tendão extensor ou entre banda central e lateral",
      atRisk: ["Tendão extensor e bandas laterais (aderências)", "Cápsula e superfície articular"],
      figureId: "fratura-falanges:fixacao",
    },
    {
      id: "midlateral",
      name: "Acesso médio-lateral",
      indication: "Fraturas do colo/cabeça e condilares; poupa o aparelho extensor dorsal.",
      interval: "Entre o feixe neurovascular (volar) e o aparelho extensor (dorsal)",
      atRisk: ["Feixe neurovascular digital", "Ligamentos colaterais"],
      figureId: "fratura-falanges:articular",
    },
  ],

  technique: [
    { n: 1, title: "Avaliar estabilidade, rotação e articulação", detail: "Documentar desvio, má rotação (dedos em flexão), encurtamento e degrau articular. Definir estável vs instável e extra vs intra-articular.", figureId: "fratura-falanges:padroes", figureVariant: "transversa", tips: ["Testar rotação clinicamente, não só na radiografia — poucos graus já cruzam os dedos."], pitfalls: ["Aceitar redução 'radiográfica' com má rotação residual."] },
    { n: 2, title: "Redução fechada e teste dinâmico", detail: "Reduzir por tração/manobra e testar se a redução se mantém à flexo-extensão. Se estável, seguir conservador com movimento precoce.", figureId: "fratura-falanges:mobilizacao", tips: ["Buddy taping ao dedo adjacente estabiliza e guia a rotação."], pitfalls: ["Imobilizar em extensão total ou por tempo prolongado."] },
    { n: 3, title: "Fixação percutânea com fios (instável, partes moles íntegras)", detail: "Fios de Kirschner cruzados ou anterógrados sob fluoroscopia, sem exposição — solução rápida que preserva o deslizamento tendíneo.", figureId: "fratura-falanges:fixacao", figureVariant: "kwire", tips: ["Excelente para transversas e fraturas do colo pediátricas."], pitfalls: ["Fios transarticulares mantidos longos favorecem rigidez."] },
    { n: 4, title: "Parafusos interfragmentares (oblíqua/espiral)", detail: "Em traços longos (comprimento ≥ 2× o diâmetro), parafusos dão fixação estável que permite movimento imediato; a técnica sem compressão pode ser equivalente à em compressão.", figureId: "fratura-falanges:fixacao", figureVariant: "parafusos", tips: ["Estabilidade suficiente para ADM ativa precoce."], pitfalls: ["Fragmentar traços curtos ou de má qualidade óssea ao apertar parafusos."] },
    { n: 5, title: "Placa (cominutiva/instável)", detail: "Reservada a cominutivas, perda óssea ou instabilidade não controlável por métodos menores; escolher perfil baixo e a menor dissecção possível.", figureId: "fratura-falanges:fixacao", figureVariant: "placa", tips: ["Considerar remoção posterior se sintomática/aderente."], pitfalls: ["Placa em falange = maior taxa de rigidez (Page & Stern)."] },
    { n: 6, title: "Fratura articular / IFP", detail: "Restaurar a congruência: fixação de fragmento condilar, redução do lábio volar ou artroplastia de hemi-hamato / fixação dinâmica na fratura-luxação instável da IFP.", figureId: "fratura-falanges:articular", tips: ["Definir estabilidade da IFP pela extensão em que ela subluxa."], pitfalls: ["Subestimar a instabilidade dorsal e evoluir para rigidez/artrose."] },
    { n: 7, title: "Confirmar rotação e iniciar movimento precoce", detail: "Checar rotação e congruência sob fluoroscopia e encaminhar à terapia da mão para ADM ativa dentro da estabilidade obtida.", figureId: "fratura-falanges:mobilizacao", tips: ["A fixação existe para permitir o movimento precoce, não para substituí-lo."], pitfalls: ["Imobilização 'de segurança' prolongada anula o ganho da cirurgia."] },
  ],

  postop: {
    immobilization: "O mínimo necessário. Nas estáveis, imobilização breve (poucos dias a ~1 semana) ou apenas buddy taping, com a MCF em flexão e as IFs em extensão ('posição de proteção') quando talas forem usadas.",
    weightBearing: "Não se aplica carga; o foco é ADM ativa precoce e deslizamento tendíneo, evitando estresse rotacional/angular até a consolidação.",
    rehab: [
      { window: "0–1 sem", weightBearing: "Sem carga", focus: "Controle de edema e dor; buddy taping; movimento ativo protegido conforme estabilidade" },
      { window: "1–4 sem", weightBearing: "Sem carga", focus: "ADM ativa de MCF, IFP e IFD; deslizamento tendíneo; vigiar rotação" },
      { window: "4–6 sem", weightBearing: "Sem carga", focus: "Progressão da amplitude; iniciar alongamento e mobilização mais ativa conforme sinais de consolidação" },
      { window: "6–12 sem", weightBearing: "Progressiva", focus: "Fortalecimento, ganho de amplitude terminal e retorno funcional; tratar rigidez residual" },
    ],
    followup: "Radiografias seriadas até a consolidação; reavaliar rotação e amplitude. Rigidez que não progride com terapia pode indicar tenólise/capsulotomia tardias.",
  },

  complications: [
    { name: "Rigidez", detail: "Complicação mais comum e mais limitante; decorre de aderências do aparelho extensor e dos flexores, agravada por imobilização prolongada e por implantes volumosos (placa).", prevention: "Estabilidade suficiente + mobilização precoce; terapia da mão; menor dissecção possível." },
    { name: "Má rotação (consolidação viciosa rotacional)", detail: "Mesmo poucos graus cruzam os dedos na flexão ('tesoura'), comprometendo a preensão.", prevention: "Testar rotação com os dedos em flexão durante a redução; corrigir precocemente." },
    { name: "Angulação / consolidação viciosa angular", detail: "Ápice volar em P1 causa pseudogarra e déficit de extensão; deformidade angular residual limita a função.", prevention: "Redução adequada e checagem do alinhamento; osteotomia corretiva se sintomática." },
    { name: "Consolidação viciosa articular", detail: "Degrau articular residual (condilar, base de P2) leva a dor, incongruência e artrose, sobretudo na IFP.", prevention: "Redução anatômica das fraturas articulares desviadas." },
    { name: "Pseudartrose / retardo", detail: "Incomum nas falanges; associada a exposição, perda óssea, infecção ou fixação inadequada.", prevention: "Estabilidade, cobertura de partes moles e manejo da infecção." },
    { name: "Infecção", detail: "Mais frequente em fraturas expostas e após fixação percutânea (trajeto dos fios).", prevention: "Cuidado do trajeto dos fios; antibiótico e desbridamento nas expostas." },
    { name: "Lesão/irritação ungueal", detail: "Nas fraturas de falange distal, comprometimento do leito ungueal e hematoma subungueal.", prevention: "Reparo do leito ungueal quando indicado; drenagem do hematoma sintomático." },
  ],

  evidence: [
    { id: "page-stern-1998", claim: "Série clássica de 105 fraturas de metacarpo/falange tratadas com placa: complicações maiores em 36% (predominando rigidez), e apenas 11% das fraturas de falange atingiram arco total > 220° — muito pior que os metacarpos.", takeaway: "A placa em falange traz alta taxa de rigidez; indicá-la com parcimônia.", level: "IV", studyType: "Coorte retrospectiva", era: "classico", citation: { authors: "Page SM, Stern PJ", title: "Complications and range of motion following plate fixation of metacarpal and phalangeal fractures", journal: "J Hand Surg Am", year: 1998, pmid: "9763256", doi: "10.1016/S0363-5023(98)80157-3", url: "https://doi.org/10.1016/S0363-5023(98)80157-3" } },
    { id: "miller-2015", claim: "ECR (n=66) após ORIF de fratura da falange proximal: exercícios sinérgicos com a MCF contida em órtese não foram superiores aos exercícios tradicionais — sem diferença em amplitude, força, dor ou função em 6 e 12 semanas.", takeaway: "O essencial é iniciar movimento precoce; o protocolo específico é secundário.", level: "II", studyType: "Ensaio clínico randomizado", era: "atual", citation: { authors: "Miller L, Crosbie J, Wajon A, Ada L", title: "No difference between two types of exercise after proximal phalangeal fracture fixation: a randomised trial", journal: "J Physiother", year: 2015, pmid: "26699692", doi: "10.1016/j.jphys.2015.11.006", url: "https://doi.org/10.1016/j.jphys.2015.11.006" } },
    { id: "sadek-2019", claim: "ECR prospectivo (n=46) em fraturas desviadas do colo da falange proximal: fixação percutânea poupadora da articulação (haste flexível intramedular vs fios cruzados) obteve consolidação média em 5,8 semanas e bons resultados funcionais, sem diferença significativa entre as técnicas.", takeaway: "A fixação percutânea fechada resolve bem a fratura do colo com mínima morbidade.", level: "II", studyType: "Ensaio clínico randomizado", era: "atual", citation: { authors: "Sadek AF", title: "Joint sparing Kirschner-wire fixation for displaced proximal phalangeal neck fractures: randomized prospective comparative study", journal: "J Hand Surg Eur Vol", year: 2019, pmid: "31842674", doi: "10.1177/1753193419894143", url: "https://doi.org/10.1177/1753193419894143" } },
    { id: "miles-2021", claim: "Estudo biomecânico em cadáver (fratura oblíqua longa de P1 sob ciclagem de flexo-extensão): parafusos sem compressão foram estatisticamente equivalentes aos parafusos em compressão (lag) na estabilidade após 2000 ciclos.", takeaway: "Para oblíquas longas, a técnica sem compressão pode simplificar a fixação sem perder estabilidade para o movimento precoce.", level: "V", studyType: "Estudo biomecânico (cadáver)", era: "atual", citation: { authors: "Miles MR, Green T, Parks BG, Thakkar MY, Segalman KA, Means KR", title: "Comparison of Lag Versus Nonlag Screw Fixation for Long Oblique Proximal Phalanx Fractures: A Biomechanical Study", journal: "J Hand Surg Am", year: 2021, pmid: "34247847", doi: "10.1016/j.jhsa.2021.06.001", url: "https://doi.org/10.1016/j.jhsa.2021.06.001" } },
    { id: "giddins-2014", claim: "Revisão sobre o tratamento não cirúrgico das fraturas da mão: para grande parte das lesões (incluindo avulsões da base de P1 e lesões em martelo ósseas) o resultado do tratamento conservador dificilmente é superado pela cirurgia.", takeaway: "A maioria das fraturas da mão vai bem sem cirurgia — evitar operações desnecessárias.", level: "V", studyType: "Revisão narrativa", era: "atual", citation: { authors: "Giddins GEB", title: "The non-operative management of hand fractures", journal: "J Hand Surg Eur Vol", year: 2015, pmid: "25217094", doi: "10.1177/1753193414548170", url: "https://doi.org/10.1177/1753193414548170" } },
  ],

  pearls: [
    "O inimigo é a rigidez, não a consolidação — priorizar o movimento precoce.",
    "Sempre testar a rotação com os dedos em flexão (unhas convergentes = má rotação).",
    "Fratura estável, sem má rotação e extra-articular = conservador + buddy taping.",
    "Falange proximal tende ao ápice volar; conhecer o vetor guia a redução.",
    "Fixar apenas o suficiente para permitir movimento — menos dissecção, menos rigidez.",
    "Parafusos interfragmentares brilham em traços oblíquos/espirais longos.",
    "A IFP tolera mal a incongruência: fratura articular desviada = reduzir e fixar.",
  ],

  pitfalls: [
    "Aceitar redução radiográfica com má rotação clínica residual.",
    "Imobilizar por tempo prolongado e em posição inadequada, gerando rigidez.",
    "Indicar placa em falange sem necessidade (alta taxa de rigidez).",
    "Subestimar a instabilidade dorsal da fratura-luxação da IFP.",
    "Deixar fios transarticulares por tempo excessivo.",
    "Não reparar o leito ungueal na fratura da falange distal.",
  ],

  figures: [
    { id: "fratura-falanges:anatomia", kind: "diagram", caption: "Raio digital em perfil: P1, P2, P3 e as inserções tendíneas que determinam as forças deformantes.", alt: "Anatomia das falanges e inserções tendíneas." },
    { id: "fratura-falanges:forcas", variant: "proximal", kind: "diagram", caption: "Falange proximal: interósseos fletem a base e o extensor estende o distal → ápice volar.", alt: "Forças deformantes na falange proximal." },
    { id: "fratura-falanges:forcas", variant: "media", kind: "diagram", caption: "Falange média: o desvio depende da relação do traço com a inserção do FDS.", alt: "Forças deformantes na falange média." },
    { id: "fratura-falanges:padroes", variant: "transversa", kind: "diagram", caption: "Padrão transverso — instável à flexão.", alt: "Fratura transversa da falange." },
    { id: "fratura-falanges:padroes", variant: "obliqua", kind: "diagram", caption: "Padrão oblíquo/espiral — encurta e roda.", alt: "Fratura oblíqua/espiral da falange." },
    { id: "fratura-falanges:padroes", variant: "cominutiva", kind: "diagram", caption: "Padrão cominutivo — múltiplos fragmentos.", alt: "Fratura cominutiva da falange." },
    { id: "fratura-falanges:padroes", variant: "articular", kind: "diagram", caption: "Padrão articular — degrau na superfície.", alt: "Fratura articular da falange." },
    { id: "fratura-falanges:articular", kind: "diagram", caption: "Fraturas articulares: condilar, base volar de P2 e fratura-luxação dorsal da IFP.", alt: "Padrões articulares das falanges." },
    { id: "fratura-falanges:fixacao", variant: "kwire", kind: "diagram", caption: "Fios de Kirschner cruzados — percutâneo, preserva partes moles.", alt: "Fixação com fios de Kirschner." },
    { id: "fratura-falanges:fixacao", variant: "parafusos", kind: "diagram", caption: "Parafusos interfragmentares — traços oblíquos/espirais.", alt: "Fixação com parafusos." },
    { id: "fratura-falanges:fixacao", variant: "placa", kind: "diagram", caption: "Placa — cominutiva/instável; maior risco de rigidez.", alt: "Fixação com placa." },
    { id: "fratura-falanges:mobilizacao", kind: "diagram", caption: "Movimento precoce vs imobilização: preservação do deslizamento tendíneo evita a rigidez.", alt: "Mobilização precoce versus rigidez." },
    { id: "fratura-falanges:consolidacao-viciosa", kind: "diagram", caption: "Consolidação viciosa: má rotação (tesoura) e angulação em ápice volar.", alt: "Consolidação viciosa das falanges." },
  ],

  meta: {
    lastReviewed: "2026-07-13",
    sources: [
      "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
      "Campbell's Operative Orthopaedics, 14ª ed. (2021)",
      "Hebert & Lech, Ortopedia e Traumatologia, 6ª ed. (2025)",
      "Bibliografia TEOT 2026",
    ],
    attribution: "Evidência recuperada do PubMed. Ver DOIs citados.",
    figureReference: "Rockwood and Green's Fractures in Adults, 10ª ed. (2024)",
  },
});
