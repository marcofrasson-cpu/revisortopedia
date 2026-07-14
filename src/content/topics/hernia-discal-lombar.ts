import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "col-lombar-hernia-discal",
  slug: "hernia-discal-lombar",
  kind: "condicao",
  regionId: "coluna",
  bone: "Lombar",
  injury: "Hérnia discal lombar",
  title: "Hérnia discal lombar",
  subtitle:
    "Distinguir lombalgia de radiculopatia, localizar a raiz pelo exame, reconhecer a síndrome da cauda equina e indicar microdiscectomia pela incapacidade e evolução, não pelo tamanho isolado da hérnia.",
  laterality: null,
  status: "complete",
  overview:
    "Hérnia discal lombar é o deslocamento focal de material do núcleo pulposo através do anel fibroso. Torna-se doença clínica quando comprime e inflama uma raiz, produzindo ciatalgia, parestesia, déficit miotômico ou perda reflexa. A RM confirma a hipótese, mas não substitui o exame: protrusões e extrusões assintomáticas são comuns, e o lado e o nível da imagem precisam explicar a síndrome radicular.\n\nNos níveis mais frequentes, uma hérnia paracentral L4-L5 comprime a raiz L5 que atravessa o recesso lateral, enquanto uma hérnia L5-S1 comprime S1. Hérnia foraminal ou extraforaminal comprime a raiz que sai no mesmo nível: em L4-L5, a raiz L4. O teste de elevação da perna estendida tensiona L5/S1; o teste femoral tensiona L2-L4. A síndrome da cauda equina - anestesia em sela, retenção urinária, perda do tônus anal e déficit bilateral - exige RM e descompressão urgentes.\n\nNa ausência de emergência ou déficit progressivo, o tratamento inicial é conservador porque muitos pacientes melhoram e fragmentos extrusos podem regredir. A cirurgia oferece alívio mais rápido e, em pacientes bem selecionados, maior melhora sustentada; porém os ensaios têm cruzamento elevado entre grupos e mostram que a escolha envolve tolerância à dor, função, trabalho e preferência. A microdiscectomia remove apenas o fragmento responsável e preserva o máximo possível do disco e das estruturas posteriores.",
  keyFacts: [
    { label: "Níveis", value: "L4-L5 e L5-S1 concentram a maioria dos casos" },
    { label: "Paracentral L4-L5", value: "Comprime a raiz L5 que atravessa" },
    { label: "Foraminal L4-L5", value: "Comprime a raiz L4 que sai" },
    { label: "L5", value: "Dorsiflexão do hálux/pé; sensibilidade no dorso do pé; reflexo pouco confiável" },
    { label: "S1", value: "Flexão plantar; borda lateral do pé; reflexo aquileu" },
    { label: "Teste", value: "Elevação da perna estendida é sensível para L5/S1; teste cruzado é mais específico" },
    { label: "Emergência", value: "Síndrome da cauda equina ou déficit motor rapidamente progressivo" },
    { label: "Cirurgia eletiva", value: "Dor radicular incapacitante persistente, imagem concordante e falha do tratamento conservador" },
  ],
  anatomy: {
    text:
      "O disco intervertebral combina um núcleo pulposo hidratado, que distribui carga, com um anel fibroso lamelar que contém o núcleo. O ligamento longitudinal posterior é mais estreito lateralmente na lombar, deixando a zona paracentral vulnerável. Atrás do disco ficam o saco dural e as raízes que descem; lateralmente, o pedículo delimita o forame.\n\nEm cada nível há uma raiz que sai e outra que atravessa. A hérnia central pode comprimir múltiplas raízes da cauda equina; a paracentral compromete a raiz que atravessa; a foraminal e a extraforaminal atingem a raiz que sai. Essa topografia deve ser lida nos cortes axiais e sagitais da RM. O gânglio da raiz dorsal ocupa o forame e torna a hérnia foraminal particularmente dolorosa.",
    figureIds: ["hernia-discal-lombar:anatomia", "hernia-discal-lombar:tipos", "hernia-discal-lombar:zonas", "hernia-discal-lombar:raizes"],
  },
  classification: [
    {
      id: "morfologia",
      name: "Morfologia do material discal",
      basis: "Continuidade, largura da base e relação do fragmento com o disco de origem.",
      types: [
        { code: "protrusao", label: "Protrusão", description: "Base mais larga que a porção deslocada; o material permanece contido em maior grau.", figureId: "hernia-discal-lombar:tipos", figureVariant: "protrusao" },
        { code: "extrusao", label: "Extrusão", description: "Porção herniada mais larga que a base ou continuidade estreita com o disco; maior chance de regressão espontânea.", figureId: "hernia-discal-lombar:tipos", figureVariant: "extrusao" },
        { code: "sequestro", label: "Sequestro", description: "Fragmento sem continuidade com o disco, podendo migrar cranial ou caudalmente.", figureId: "hernia-discal-lombar:tipos", figureVariant: "sequestro" },
      ],
    },
    {
      id: "msu",
      name: "Classificação MSU",
      basis: "Tamanho da hérnia no corte axial (1 a 3) e sua zona (A central, B lateral, C foraminal).",
      note: "Ajuda a comunicar topografia e ocupação do canal, mas não substitui sintomas, déficit e preferência do paciente.",
      types: [
        { code: "1", label: "Tamanho 1", description: "Hérnia pequena, abaixo da linha média entre o saco dural e a faceta.", figureId: "hernia-discal-lombar:msu", figureVariant: "1" },
        { code: "2", label: "Tamanho 2", description: "Alcança a linha média de referência sem ultrapassá-la de forma importante.", figureId: "hernia-discal-lombar:msu", figureVariant: "2" },
        { code: "3", label: "Tamanho 3", description: "Grande ocupação do canal ou recesso lateral; interpretar junto ao exame neurológico.", figureId: "hernia-discal-lombar:msu", figureVariant: "3" },
      ],
    },
  ],
  indications: {
    operative: [
      "Síndrome da cauda equina: descompressão urgente após confirmação por RM, sem atrasos evitáveis.",
      "Déficit motor grave ou progressivo com compressão concordante.",
      "Ciatalgia incapacitante persistente após cerca de 6 a 12 semanas de tratamento conservador adequado.",
      "Recorrência frequente que compromete função e qualidade de vida, com correlação clínico-radiológica.",
    ],
    nonOperative: [
      "Radiculopatia recente sem déficit motor progressivo ou sinais de cauda equina.",
      "Manutenção de atividade, analgesia e anti-inflamatório conforme risco, orientação e fisioterapia progressiva.",
      "Infiltração epidural transforaminal pode oferecer alívio temporário e facilitar reabilitação em casos selecionados.",
    ],
    decisionNotes:
      "O benefício mais consistente da cirurgia é a velocidade do alívio. No ensaio de Peul, a cirurgia precoce acelerou a recuperação, mas os resultados se igualaram em um ano; quase 40% do grupo conservador acabou operado. No SPORT, o cruzamento entre grupos enfraqueceu a análise por intenção de tratar, enquanto a análise por tratamento recebido favoreceu cirurgia em pacientes selecionados. Assim, após excluir emergência e déficit progressivo, a decisão deve ser compartilhada: suportar mais tempo de sintomas pode evitar uma operação, mas também pode prolongar sofrimento e afastamento.",
  },
  approaches: [
    { id: "interlaminar", name: "Microdiscectomia interlaminar", indication: "Hérnia central ou paracentral com radiculopatia concordante, sobretudo em L4-L5 e L5-S1.", interval: "Incisão mediana curta; descolamento unilateral; janela interlaminar com flavectomia limitada e identificação da raiz antes da retirada do fragmento.", atRisk: ["Raiz que atravessa", "Saco dural", "Articulação facetária", "Vasos epidurais"], figureId: "hernia-discal-lombar:microdiscectomia" },
    { id: "extraforaminal", name: "Acesso foraminal/extraforaminal", indication: "Hérnia foraminal ou extraforaminal que comprime a raiz que sai.", interval: "Acesso paramediano entre multifídio e longuíssimo ou abordagem tubular; exposição do forame preservando o máximo da faceta.", atRisk: ["Raiz dorsal e gânglio", "Ramo dorsal", "Artéria segmentar", "Instabilidade por facetectomia"], figureId: "hernia-discal-lombar:zonas" },
  ],
  technique: [
    { n: 1, title: "Localizar raiz e excluir emergência", detail: "Documentar força, sensibilidade e reflexos; perguntar ativamente sobre retenção urinária, anestesia em sela e sintomas bilaterais. Confirmar o nível e o lado na RM.", figureId: "hernia-discal-lombar:raizes", tips: ["Diferenciar raiz que sai da raiz que atravessa"], pitfalls: ["Confundir dor lombar isolada com indicação de discectomia"] },
    { n: 2, title: "Testar tensão neural", detail: "Executar elevação da perna estendida e teste cruzado para L5/S1; usar teste femoral para raízes altas. Registrar se a manobra reproduz a dor habitual abaixo do joelho.", figureId: "hernia-discal-lombar:lasegue", tips: ["Dor posterior da coxa sem radiação distal não é um teste positivo completo"], pitfalls: ["Interpretar encurtamento de isquiotibiais como radiculopatia"] },
    { n: 3, title: "Conduzir observação ativa", detail: "Orientar manutenção de atividade, analgesia e reabilitação; acompanhar déficit e incapacidade. Repetir imagem apenas se o quadro mudar, houver alarme ou planejamento operatório.", figureId: "hernia-discal-lombar:tipos", tips: ["Extrusões podem regredir e não exigem cirurgia pelo tamanho"], pitfalls: ["Repouso prolongado e medo de movimento"] },
    { n: 4, title: "Planejar corredor e nível", detail: "Marcar nível com fluoroscopia antes da incisão. Escolher janela interlaminar para hérnia paracentral ou corredor foraminal/extraforaminal para raiz que sai.", figureId: "hernia-discal-lombar:zonas", tips: ["Revisar migração cranial ou caudal do fragmento"], pitfalls: ["Cirurgia em nível errado"] },
    { n: 5, title: "Expor preservando estruturas posteriores", detail: "Realizar laminotomia e flavectomia apenas o suficiente para identificar a raiz e o saco dural. Preservar faceta e ligamentos sempre que possível.", figureId: "hernia-discal-lombar:microdiscectomia", tips: ["Hemostasia epidural melhora segurança e visão"], pitfalls: ["Ressecção facetária excessiva"] },
    { n: 6, title: "Retirar o fragmento responsável", detail: "Mobilizar gentilmente a raiz, identificar o fragmento e removê-lo. Explorar apenas o necessário; curetagem agressiva do espaço discal aumenta lesão sem benefício claro.", figureId: "hernia-discal-lombar:microdiscectomia", figureVariant: "fragmento", tips: ["Confirmar raiz livre após remover o fragmento"], pitfalls: ["Tração neural e durotomia por exploração cega"] },
    { n: 7, title: "Reconhecer e tratar cauda equina", detail: "Na síndrome da cauda equina, priorizar descompressão ampla e segura do material central, documentar função vesical e organizar seguimento urológico e reabilitação.", figureId: "hernia-discal-lombar:cauda-equina", tips: ["Retenção urinária é mais específica que urgência isolada"], pitfalls: ["Atrasar RM por analgesia temporariamente eficaz"] },
  ],
  postop: {
    immobilization: "Sem órtese de rotina após microdiscectomia.",
    weightBearing: "Deambulação no mesmo dia; progressão de atividades conforme dor, evitando esforço intenso nas primeiras semanas.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Livre para marcha", focus: "Ferida, marcha frequente, controle da dor e exame neurológico." },
      { window: "2-6 semanas", weightBearing: "Progressiva", focus: "Mobilidade, estabilização do tronco e retorno gradual às atividades diárias." },
      { window: "6-12 semanas", weightBearing: "Conforme tolerância", focus: "Força, condicionamento e retorno planejado ao trabalho/esporte." },
    ],
    followup: "Dor radicular costuma melhorar cedo; parestesia e força podem recuperar mais lentamente. Nova dor intensa após período assintomático sugere recorrência e deve ser reavaliada.",
  },
  complications: [
    { name: "Durotomia", detail: "Lesão dural com fuga liquórica.", prevention: "Exposição adequada, dissecção sob visão e cuidado em revisões aderidas." },
    { name: "Recorrência da hérnia", detail: "Novo fragmento no mesmo nível após melhora inicial.", prevention: "Remover o fragmento livre sem agressão excessiva; controlar fatores de risco modificáveis." },
    { name: "Lesão radicular", detail: "Piora motora, sensitiva ou dor neuropática.", prevention: "Evitar tração e coagulação junto à raiz." },
    { name: "Discite", detail: "Dor axial crescente, febre variável e marcadores inflamatórios elevados.", prevention: "Antibioticoprofilaxia e técnica asséptica." },
    { name: "Instabilidade iatrogênica", detail: "Relacionada à ressecção ampla de faceta e arco posterior.", prevention: "Abordagem focal e preservação facetária." },
  ],
  evidence: [
    { id: "peul-2007", claim: "Cirurgia precoce acelera o alívio da ciatalgia, mas os resultados de um ano se aproximam do tratamento conservador com cirurgia se necessária.", takeaway: "A urgência eletiva é definida por sofrimento e função; observar é razoável se não houver déficit progressivo ou cauda equina.", level: "I", studyType: "Ensaio clínico randomizado", era: "classico", citation: { authors: "Peul WC et al.", title: "Surgery versus prolonged conservative treatment for sciatica", journal: "N Engl J Med", year: 2007, pmid: "17538084", doi: "10.1056/NEJMoa064039" } },
    { id: "sport-8y", claim: "Pacientes selecionados operados apresentaram maior melhora em análise por tratamento recebido, mantida até oito anos.", takeaway: "A interpretação exige considerar o cruzamento elevado entre os grupos randomizados.", level: "II", studyType: "Coortes randomizada e observacional prospectivas, 8 anos", era: "atual", citation: { authors: "Lurie JD et al.", title: "Surgical versus nonoperative treatment for lumbar disc herniation: eight-year results for SPORT", journal: "Spine", year: 2014, pmid: "24153171", doi: "10.1097/BRS.0000000000000088" } },
    { id: "lequin-5y", claim: "Aos cinco anos não houve diferença nos desfechos primários entre cirurgia precoce e estratégia conservadora prolongada.", takeaway: "Quase metade do grupo conservador foi operada; a estratégia evita algumas cirurgias ao custo de sintomas mais longos em outros pacientes.", level: "I", studyType: "Seguimento de ensaio randomizado", era: "atual", citation: { authors: "Lequin MB et al.", title: "Surgery versus prolonged conservative treatment for sciatica: 5-year results", journal: "BMJ Open", year: 2013, pmid: "23793663", doi: "10.1136/bmjopen-2012-002534" } },
    { id: "motor-deficit", claim: "Cirurgia precoce acelerou a recuperação motora, mas não alterou a taxa de recuperação completa em um ano.", takeaway: "Déficit grave e progressivo continua preocupante; déficit moderado estável exige decisão individualizada.", level: "II", studyType: "Subanálise de ensaio randomizado", era: "atual", citation: { authors: "Overdevest GM et al.", title: "Recovery of motor deficit accompanying sciatica", journal: "Spine J", year: 2014, pmid: "24200407" } },
  ],
  pearls: [
    "Paracentral comprime a raiz que atravessa; foraminal comprime a raiz que sai.",
    "A elevação cruzada da perna é menos sensível, porém mais específica para hérnia discal.",
    "Extrusão grande não é indicação automática: fragmentos extrusos têm maior potencial de regressão.",
    "Retenção urinária, anestesia em sela e déficit bilateral constituem síndrome da cauda equina até prova em contrário.",
  ],
  pitfalls: [
    "Operar lombalgia axial sem síndrome radicular concordante.",
    "Usar apenas o tamanho da hérnia para indicar cirurgia.",
    "Não perguntar sobre bexiga, períneo e função sexual.",
    "Confundir raiz que sai com raiz que atravessa.",
    "Realizar discectomia agressiva e facetectomia ampla em uma doença focal.",
  ],
  figures: [
    { id: "hernia-discal-lombar:anatomia", caption: "Anatomia do disco, saco dural, forame e raízes lombares.", alt: "Diagrama anatômico de um segmento lombar.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "hernia-discal-lombar:tipos", caption: "Protrusão, extrusão e sequestro do material discal.", alt: "Comparação dos tipos morfológicos de hérnia discal.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Nomenclature and classification of lumbar disc pathology" } },
    { id: "hernia-discal-lombar:zonas", caption: "Zonas central, paracentral, foraminal e extraforaminal.", alt: "Corte axial com zonas da hérnia lombar.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "hernia-discal-lombar:raizes", caption: "Raízes L4, L5 e S1: dor, sensibilidade, força e reflexos.", alt: "Mapa clínico das raízes lombossacrais.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Barros Filho & Lech, Exame Físico em Ortopedia" } },
    { id: "hernia-discal-lombar:msu", caption: "Classificação MSU por tamanho e zona no corte axial.", alt: "Grade da classificação MSU de hérnia lombar.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Michigan State University classification" } },
    { id: "hernia-discal-lombar:lasegue", caption: "Elevação da perna estendida e teste cruzado.", alt: "Diagrama do teste de Lasègue para tensão neural.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Barros Filho & Lech, Exame Físico em Ortopedia" } },
    { id: "hernia-discal-lombar:cauda-equina", caption: "Sinais de alarme da síndrome da cauda equina.", alt: "Diagrama com compressão central e sinais de cauda equina.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "hernia-discal-lombar:microdiscectomia", caption: "Corredor interlaminar da microdiscectomia preservando raiz e faceta.", alt: "Passos anatômicos da microdiscectomia lombar.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
  ],
  meta: {
    lastReviewed: "2026-07-14",
    sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert & Lech, 6a ed. (2025)", "SPORT - PMID 24153171", "Sciatica Trial - PMID 17538084"],
    attribution: "Conteúdo original em português brasileiro; evidências verificadas no PubMed e diagramas próprios.",
    figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021)",
  },
});
