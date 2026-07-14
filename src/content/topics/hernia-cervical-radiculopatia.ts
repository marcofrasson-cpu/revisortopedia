import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "col-cervical-hernia-radiculopatia",
  slug: "hernia-cervical-radiculopatia",
  kind: "condicao",
  regionId: "coluna",
  bone: "Cervical",
  injury: "Radiculopatia cervical",
  title: "Hérnia cervical e radiculopatia",
  subtitle:
    "Localizar a raiz pelo padrão clínico, separar radiculopatia de mielopatia e escolher tratamento conservador, descompressão anterior ou foraminotomia posterior conforme a anatomia da compressão.",
  laterality: null,
  status: "complete",
  overview:
    "Radiculopatia cervical é a disfunção de uma raiz nervosa por compressão e inflamação, geralmente provocada por hérnia discal mole ou por estenose foraminal osteofitária. O quadro cardinal é dor cervical irradiada ao braço em distribuição dermatomérica, acompanhada em graus variáveis por parestesia, perda de reflexo e fraqueza miotômica. A imagem só tem valor quando explica o lado, o nível e o padrão do exame: protrusões assintomáticas são frequentes e não devem ser operadas.\n\nA primeira obrigação é excluir mielopatia. Alteração da marcha, perda de destreza, hiperreflexia, clônus, sinal de Hoffmann ou disfunção esfincteriana deslocam o problema da raiz para a medula e mudam urgência, prognóstico e estratégia. Na radiculopatia isolada sem déficit progressivo, a história natural costuma ser favorável e o tratamento inicial é conservador. Cirurgia é indicada por déficit motor progressivo, dor incapacitante persistente apesar de tratamento adequado ou compressão concordante que inviabiliza função e sono.\n\nA via anterior permite discectomia e descompressão central/foraminal direta, seguida por artrodese (ACDF) ou, em pacientes selecionados, artroplastia. A foraminotomia posterior preserva movimento e evita os riscos viscerais da via anterior, mas serve melhor à compressão foraminal unilateral e lateral, sem cifose, instabilidade ou doença central importante. O ensaio FACET mostrou não inferioridade da via posterior em relação à ACDF para radiculopatia unilateral de um nível, tornando a anatomia e o perfil do paciente mais importantes que uma preferência automática de via.",
  keyFacts: [
    { label: "Causa", value: "Hérnia mole no jovem; complexo disco-osteofitário e estenose foraminal no paciente mais velho" },
    { label: "Raiz mais comum", value: "C7, geralmente por doença C6-C7; depois C6 por C5-C6" },
    { label: "Teste provocativo", value: "Spurling reproduz dor radicular; alta especificidade, sensibilidade limitada" },
    { label: "Teste de alívio", value: "Abdução do ombro pode aliviar ao reduzir a tensão sobre a raiz" },
    { label: "Imagem", value: "RM é o exame principal; correlacionar nível, lado e clínica antes de tratar" },
    { label: "Alarme", value: "Mielopatia, déficit motor progressivo, dor intratável ou sinais sistêmicos" },
    { label: "Via anterior", value: "Melhor para compressão central ou ventral, cifose, instabilidade e doença multissegmentar" },
    { label: "Via posterior", value: "Boa opção para compressão foraminal unilateral e lateral com alinhamento preservado" },
  ],
  anatomy: {
    text:
      "Cada raiz cervical sai pelo forame acima da vértebra de mesmo número; a exceção é C8, que emerge entre C7 e T1. Como o disco e o uncus ficam anteriormente e a faceta posteriormente, a raiz atravessa um corredor que pode estreitar por hérnia, osteófito uncovertebral, hipertrofia facetária ou perda de altura discal. A medula ocupa o canal central e não tolera a mesma lógica de observação aplicada à raiz: compressão medular com sinais longos define mielopatia.\n\nC5 inerva principalmente deltoide e bíceps; C6, extensores do punho; C7, tríceps e extensores dos dedos; C8, flexores dos dedos; T1, interósseos. Reflexos bicipital e braquiorradial ajudam em C5-C6, e tricipital em C7. Há sobreposição ampla, por isso a combinação de dor, sensibilidade, força e reflexo é mais confiável que um único achado.",
    figureIds: [
      "hernia-cervical-radiculopatia:anatomia",
      "hernia-cervical-radiculopatia:tipos-hernia",
      "hernia-cervical-radiculopatia:mapa-raizes",
    ],
  },
  classification: [
    {
      id: "morfologia-topografia",
      name: "Morfologia e topografia da compressão",
      basis: "Relação da hérnia ou do osteófito com o canal, o forame e a raiz correspondente.",
      note: "Não é uma classificação prognóstica isolada; sua utilidade é selecionar a via que alcança a compressão sem criar dano desnecessário.",
      types: [
        { code: "central", label: "Central", description: "Comprime saco dural ou medula; exige pesquisar mielopatia e costuma favorecer acesso anterior.", figureId: "hernia-cervical-radiculopatia:tipos-hernia" },
        { code: "paracentral", label: "Paracentral", description: "Alcança a zona de entrada da raiz e pode produzir quadro radicular com componente central.", figureId: "hernia-cervical-radiculopatia:tipos-hernia" },
        { code: "foraminal", label: "Foraminal", description: "Comprime diretamente a raiz no forame; se unilateral e lateral, pode ser tratada por via posterior.", figureId: "hernia-cervical-radiculopatia:tipos-hernia" },
        { code: "osteofitaria", label: "Estenose osteofitária", description: "Perda de altura discal e osteófitos uncovertebrais/facetários; frequentemente mais rígida e multissegmentar.", figureId: "hernia-cervical-radiculopatia:tipos-hernia" },
      ],
    },
  ],
  indications: {
    operative: [
      "Déficit motor progressivo ou clinicamente relevante com compressão concordante.",
      "Dor radicular incapacitante persistente após 6 a 12 semanas de tratamento conservador bem conduzido.",
      "Recorrências frequentes que impedem trabalho, sono e atividades apesar de medidas não operatórias.",
      "Mielopatia associada: não é mais radiculopatia isolada e requer estratégia de descompressão medular.",
    ],
    nonOperative: [
      "Radiculopatia isolada recente, sem déficit motor progressivo e sem sinais de mielopatia.",
      "Analgesia e anti-inflamatório conforme risco individual, manutenção de atividade e fisioterapia estruturada.",
      "Tração e infiltração foraminal/epidural podem ser consideradas em casos selecionados; infiltração exige técnica e informação sobre eventos raros graves.",
    ],
    decisionNotes:
      "A duração isolada da dor não decide cirurgia. O que pesa é a combinação de intensidade, incapacidade, evolução neurológica, concordância clínico-radiológica e resposta ao tratamento. Na doença unilateral de um nível, a foraminotomia posterior é alternativa validada à ACDF quando a compressão é lateral e o alinhamento é favorável. ACDF é preferível quando se precisa remover compressão ventral/central, restaurar altura foraminal, corrigir cifose ou tratar instabilidade. Artroplastia exige movimento preservado, facetas competentes e ausência de instabilidade, osteoporose ou espondilose avançada.",
  },
  approaches: [
    {
      id: "anterior-smith-robinson",
      name: "Via cervical anterior",
      indication: "Compressão ventral ou central, doença discal de um ou mais níveis, cifose segmentar ou necessidade de reconstrução do disco.",
      interval: "Incisão transversal, intervalo medial à bainha carotídea e lateral a traqueia/esôfago; exposição do disco entre longos do pescoço.",
      atRisk: ["Nervo laríngeo recorrente", "Esôfago e traqueia", "Artéria vertebral lateralmente", "Raiz e medula durante a descompressão"],
      figureId: "hernia-cervical-radiculopatia:opcoes-cirurgicas",
    },
    {
      id: "posterior-foraminotomia",
      name: "Foraminotomia cervical posterior",
      indication: "Radiculopatia unilateral por compressão foraminal/lateral, lordose preservada e ausência de instabilidade ou compressão central relevante.",
      interval: "Dissecção paravertebral unilateral até a junção lâmina-faceta; ressecção limitada da lâmina e da porção medial da faceta para abrir o forame.",
      atRisk: ["Raiz cervical", "Artéria vertebral se dissecção lateral excessiva", "Instabilidade por facetectomia ampla", "Musculatura extensora e ramo medial"],
      figureId: "hernia-cervical-radiculopatia:opcoes-cirurgicas",
    },
  ],
  technique: [
    { n: 1, title: "Confirmar síndrome radicular e excluir mielopatia", detail: "Mapear dor, sensibilidade, força e reflexos; testar marcha, destreza, Hoffmann, clônus e reflexos longos. Correlacionar com RM e radiografias dinâmicas quando houver suspeita de instabilidade.", figureId: "hernia-cervical-radiculopatia:mapa-raizes", tips: ["Documentar força por grupo muscular antes do tratamento"], pitfalls: ["Operar uma RM sem concordância clínica"] },
    { n: 2, title: "Conduzir o tratamento conservador estruturado", detail: "Manter atividade tolerada, controlar dor e iniciar fisioterapia com educação, mobilidade e fortalecimento cervicoescapular. Reavaliar déficit e função em vez de repetir apenas a escala de dor.", figureId: "hernia-cervical-radiculopatia:algoritmo", tips: ["Explicar a história natural reduz medo e imobilidade"], pitfalls: ["Colar prolongado e repouso como estratégia principal"] },
    { n: 3, title: "Selecionar a via pela topografia", detail: "Compressão ventral/central, cifose ou instabilidade favorecem a via anterior; fragmento foraminal unilateral e lateral com lordose preservada favorece a via posterior.", figureId: "hernia-cervical-radiculopatia:opcoes-cirurgicas", tips: ["Rever cortes axiais e sagitais lado a lado"], pitfalls: ["Usar via posterior para hérnia central ou cifose"] },
    { n: 4, title: "Realizar a descompressão anterior", detail: "Confirmar o nível, remover disco e osteófitos, abrir o ligamento longitudinal posterior quando necessário e descomprimir o forame até visualizar a raiz livre, sem tração direta sobre medula ou raiz.", figureId: "hernia-cervical-radiculopatia:opcoes-cirurgicas", figureVariant: "acdf", tips: ["Descompressão foraminal completa é mais importante que o implante"], pitfalls: ["Discectomia incompleta na região uncovertebral"] },
    { n: 5, title: "Reconstruir com artrodese ou artroplastia", detail: "Na ACDF, restaurar altura sem sobredistrair e obter estabilidade. Na artroplastia, preservar placas terminais, centralizar o implante e confirmar mobilidade; contraindicar se facetas doentes ou segmento instável.", figureId: "hernia-cervical-radiculopatia:opcoes-cirurgicas", figureVariant: "artroplastia", tips: ["Escolha do implante vem depois da indicação correta"], pitfalls: ["Artroplastia em espondilose avançada ou osteoporose"] },
    { n: 6, title: "Executar foraminotomia posterior poupando a faceta", detail: "Expor a junção lâmina-faceta, abrir o forame e retirar fragmento lateral quando acessível. Preservar mais de metade da faceta e evitar manipulação agressiva da raiz.", figureId: "hernia-cervical-radiculopatia:opcoes-cirurgicas", figureVariant: "posterior", tips: ["A raiz deve ficar livre em seu trajeto foraminal"], pitfalls: ["Facetectomia excessiva e instabilidade iatrogênica"] },
    { n: 7, title: "Verificar função e plano de recuperação", detail: "Após descompressão, confirmar hemostasia, deglutição e exame neurológico. Orientar sinais de hematoma cervical, disfagia progressiva, nova fraqueza ou alteração da marcha.", figureId: "hernia-cervical-radiculopatia:algoritmo", tips: ["Exame neurológico pós-operatório deve repetir a documentação prévia"], pitfalls: ["Subestimar hematoma cervical em expansão"] },
  ],
  postop: {
    immobilization: "Colar não é obrigatório após ACDF estável ou foraminotomia; usar apenas conforme qualidade óssea, construção e preferência técnica.",
    weightBearing: "Deambulação precoce e atividades leves conforme dor; evitar carga intensa e impacto nas primeiras semanas.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Atividade leve", focus: "Marcha, controle da dor, ferida, deglutição e vigilância neurológica." },
      { window: "2-6 semanas", weightBearing: "Progressiva", focus: "Mobilidade segura, postura e ativação cervicoescapular sem provocar dor radicular." },
      { window: "6-12 semanas", weightBearing: "Conforme consolidação e sintomas", focus: "Força, resistência e retorno gradual ao trabalho e esporte." },
    ],
    followup: "Reavaliar dor do braço, força, reflexos e sinais de mielopatia. Após artrodese, acompanhar alinhamento e consolidação; após artroplastia, posição e mobilidade do implante.",
  },
  complications: [
    { name: "Disfagia e disfonia", detail: "Comuns após via anterior; persistência exige avaliação dirigida.", prevention: "Dissecção delicada, retração intermitente e atenção ao nervo laríngeo recorrente." },
    { name: "Hematoma cervical", detail: "Pode comprimir rapidamente a via aérea.", prevention: "Hemostasia rigorosa e reconhecimento imediato de aumento de volume, dispneia ou agitação." },
    { name: "Lesão neural", detail: "Piora radicular, lesão medular ou paralisia de C5.", prevention: "Nível correto, descompressão sob visão e evitar tração sobre raiz/medula." },
    { name: "Pseudoartrose", detail: "Dor persistente e falha de consolidação após ACDF, mais comum em tabagismo e múltiplos níveis.", prevention: "Otimizar fatores do hospedeiro e construção adequada." },
    { name: "Instabilidade pós-foraminotomia", detail: "Relacionada à ressecção facetária excessiva.", prevention: "Preservar mais de 50% da faceta e respeitar alinhamento pré-operatório." },
  ],
  evidence: [
    {
      id: "wainner-cluster-2003",
      claim: "Um conjunto de testes clínicos é mais útil que um teste isolado para confirmar radiculopatia cervical.",
      takeaway: "Combinar rotação cervical, Spurling, distração e teste de tensão neural aumenta a razão de verossimilhança; o teste de tensão ajuda a excluir.",
      level: "II", studyType: "Estudo prospectivo de acurácia diagnóstica", era: "classico",
      citation: { authors: "Wainner RS et al.", title: "Reliability and diagnostic accuracy of the clinical examination and patient self-report measures for cervical radiculopathy", journal: "Spine", year: 2003, pmid: "12544957", doi: "10.1097/00007632-200301010-00014" },
    },
    {
      id: "engquist-2017",
      claim: "ACDF associada à fisioterapia melhora mais incapacidade cervical que fisioterapia isolada em pacientes selecionados.",
      takeaway: "Ambos os grupos melhoraram; a indicação cirúrgica continua dependente de incapacidade, déficit e falha do tratamento conservador.",
      level: "I", studyType: "Ensaio clínico randomizado, 5 a 8 anos", era: "classico",
      citation: { authors: "Engquist M et al.", title: "A 5- to 8-year randomized study on the treatment of cervical radiculopathy", journal: "J Neurosurg Spine", year: 2017, pmid: "27564856", doi: "10.3171/2016.6.SPINE151427" },
    },
    {
      id: "facet-2024",
      claim: "Foraminotomia posterior foi não inferior à ACDF para radiculopatia unilateral de um nível aos dois anos.",
      takeaway: "Quando anatomia e alinhamento permitem, a via posterior é alternativa baseada em evidência e preserva o movimento.",
      level: "I", studyType: "Ensaio randomizado de não inferioridade", era: "atual",
      citation: { authors: "Simões de Souza NF et al.", title: "Posterior Cervical Foraminotomy Compared with Anterior Cervical Discectomy with Fusion for Cervical Radiculopathy", journal: "J Bone Joint Surg Am", year: 2024, pmid: "39047120", doi: "10.2106/JBJS.23.00775" },
    },
    {
      id: "taso-2025",
      claim: "O benefício cirúrgico em 12 meses varia com a etiologia da radiculopatia.",
      takeaway: "Nos ensaios noruegueses, houve vantagem da cirurgia para hérnia discal, mas não para espondilose, reforçando seleção por mecanismo.",
      level: "I", studyType: "Dois ensaios clínicos randomizados", era: "atual",
      citation: { authors: "Taso M et al.", title: "Surgical versus Nonsurgical Treatment for Cervical Radiculopathy", journal: "NEJM Evidence", year: 2025, pmid: "40130970", doi: "10.1056/EVIDoa2400404" },
    },
  ],
  pearls: [
    "Dor no braço que melhora com a mão sobre a cabeça sugere radiculopatia, mas não substitui o exame neurológico.",
    "C7: tríceps, extensão dos dedos e reflexo tricipital. C6: extensão do punho e reflexo braquiorradial.",
    "A melhor via é a que alcança a compressão preservando alinhamento, movimento e segurança, não a via preferida pelo cirurgião.",
    "Fraqueza progressiva e qualquer sinal de mielopatia encurtam a janela de observação.",
  ],
  pitfalls: [
    "Operar achado incidental de RM sem concordância de lado, nível e raiz.",
    "Rotular alteração da marcha e hiperreflexia como radiculopatia simples.",
    "Realizar foraminotomia posterior em cifose, instabilidade ou compressão central.",
    "Indicar artroplastia em facetas degeneradas, osteoporose ou segmento sem movimento.",
    "Sobredistrair o espaço discal na ACDF e criar dor facetária ou disfagia.",
  ],
  figures: [
    { id: "hernia-cervical-radiculopatia:anatomia", caption: "Relação entre disco, forame, raiz e medula na coluna cervical.", alt: "Diagrama anatômico cervical com disco, forame, raiz nervosa e medula.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "hernia-cervical-radiculopatia:tipos-hernia", caption: "Topografias central, paracentral e foraminal da hérnia cervical.", alt: "Cortes axiais comparando localizações de hérnia discal cervical.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "hernia-cervical-radiculopatia:spurling", caption: "Teste de Spurling: extensão, inclinação e compressão axial reproduzem a dor radicular.", alt: "Diagrama do teste clínico de Spurling.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Barros Filho & Lech, Exame Físico em Ortopedia" } },
    { id: "hernia-cervical-radiculopatia:alivio-abducao", caption: "Sinal de alívio pela abdução do ombro.", alt: "Paciente com a mão sobre a cabeça reduzindo a tensão radicular.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Barros Filho & Lech, Exame Físico em Ortopedia" } },
    { id: "hernia-cervical-radiculopatia:mapa-raizes", caption: "Mapa prático de raízes, miótomos e reflexos cervicais.", alt: "Quadro anatômico de C5 a T1 com músculos e reflexos correspondentes.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "hernia-cervical-radiculopatia:opcoes-cirurgicas", caption: "ACDF, artroplastia e foraminotomia posterior conforme topografia e alinhamento.", alt: "Comparação das três principais opções cirúrgicas para radiculopatia cervical.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "hernia-cervical-radiculopatia:algoritmo", caption: "Algoritmo de decisão da radiculopatia cervical isolada.", alt: "Fluxograma entre tratamento conservador, sinais de alarme e opções cirúrgicas.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Síntese editorial baseada nas evidências citadas" } },
  ],
  meta: {
    lastReviewed: "2026-07-14",
    sources: [
      "Campbell's Operative Orthopaedics, 14a ed. (2021) - Cervical disc disease and radiculopathy",
      "Hebert & Lech. Ortopedia e Traumatologia, 6a ed. (2025) - Coluna cervical",
      "FACET trial - PMID 39047120",
      "Taso et al. NEJM Evidence 2025 - PMID 40130970",
    ],
    attribution: "Conteúdo original em português brasileiro; diagramas próprios sem reprodução de material protegido.",
    figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021)",
  },
});
