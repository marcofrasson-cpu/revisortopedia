import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "col-lombar-estenose",
  slug: "estenose-lombar",
  kind: "condicao",
  regionId: "coluna",
  bone: "Lombar",
  injury: "Estenose do canal lombar",
  title: "Estenose de canal lombar",
  subtitle:
    "Reconhecer a claudicação neurogênica, localizar estenose central, de recesso ou foraminal e descomprimir preservando estabilidade, sem acrescentar artrodese por rotina.",
  laterality: null,
  status: "complete",
  overview:
    "Estenose lombar degenerativa é a redução do espaço disponível para as raízes por combinação de abaulamento discal, hipertrofia facetária, espessamento ou dobra do ligamento amarelo e eventual espondilolistese. O quadro típico é claudicação neurogênica: dor, peso, parestesia ou fraqueza nas pernas ao ficar em pé e caminhar, com alívio ao sentar ou flexionar o tronco. A postura em flexão aumenta o canal; extensão o reduz.\n\nA clínica decide se a imagem é relevante. Estenose anatômica é comum em idosos assintomáticos, e a gravidade na RM não se traduz de forma linear em incapacidade. O diagnóstico combina padrão de claudicação, exame neurológico, pulsos periféricos e imagem concordante. Dor que melhora apenas ao parar, independentemente da posição, pulsos reduzidos e pele trófica sugerem componente vascular. Déficit esfincteriano ou anestesia em sela exige investigação urgente de cauda equina.\n\nO tratamento inicial é conservador, com educação, condicionamento, analgesia e fisioterapia. Quando a limitação para caminhar permanece inaceitável, a cirurgia descomprime as raízes. A questão técnica central é retirar os elementos compressivos sem criar instabilidade. Ensaios randomizados mostram que acrescentar artrodese à descompressão não melhora os resultados de rotina, mesmo em parte dos pacientes com espondilolistese degenerativa estável, e aumenta tempo, sangramento, internação e custo. Artrodese deve responder a instabilidade, deformidade ou ressecção facetária necessária, não à simples presença de estenose.",
  keyFacts: [
    { label: "Síndrome", value: "Claudicação neurogênica: pior em ortostatismo/extensão, melhor sentado ou em flexão" },
    { label: "Mecanismo", value: "Disco + facetas + ligamento amarelo reduzem canal, recessos laterais e forames" },
    { label: "Dinâmica", value: "Extensão fecha; flexão abre o canal e os forames" },
    { label: "Nível comum", value: "L4-L5, seguido por L3-L4" },
    { label: "Diferencial", value: "Claudicação vascular, neuropatia periférica, quadril e mielopatia cervical" },
    { label: "Imagem", value: "RM define topografia; tratar sintomas concordantes, não milímetros isolados" },
    { label: "Cirurgia", value: "Descompressão quando incapacidade persiste apesar de tratamento conservador" },
    { label: "Artrodese", value: "Reservar para instabilidade/deformidade; não adicionar automaticamente" },
  ],
  anatomy: {
    text:
      "O canal central contém saco dural e raízes da cauda equina. Lateralmente, cada raiz atravessa o recesso lateral, limitado pelo disco anteriormente, faceta superior e ligamento amarelo posteriormente e pedículo lateralmente, antes de alcançar o forame. A raiz que atravessa é comprimida no recesso; a raiz que sai é comprimida no forame.\n\nNa degeneração, o disco perde altura e abaula, as facetas aumentam e podem formar cistos sinoviais, e o ligamento amarelo dobra para dentro do canal. A carga axial e a extensão aproximam os elementos posteriores, explicando a natureza dinâmica dos sintomas. Preservar pars, facetas e a banda posterior durante a descompressão reduz a chance de instabilidade iatrogênica.",
    figureIds: ["estenose-lombar:anatomia", "estenose-lombar:axial", "estenose-lombar:dinamica"],
  },
  classification: [
    {
      id: "topografica",
      name: "Topografia da estenose",
      basis: "Compartimento anatômico em que ocorre a compressão neural.",
      types: [
        { code: "central", label: "Central", description: "Redução global do canal, geralmente produzindo claudicação bilateral ou multirradicular.", figureId: "estenose-lombar:zonas", figureVariant: "central" },
        { code: "recesso", label: "Recesso lateral", description: "Comprime a raiz que atravessa antes de entrar no forame.", figureId: "estenose-lombar:zonas", figureVariant: "recesso" },
        { code: "foraminal", label: "Foraminal", description: "Comprime a raiz que sai, frequentemente por perda de altura discal e osteófito.", figureId: "estenose-lombar:zonas", figureVariant: "foraminal" },
        { code: "extraforaminal", label: "Extraforaminal", description: "Compressão além do pedículo por osteófitos ou deformidade coronal.", figureId: "estenose-lombar:zonas", figureVariant: "extraforaminal" },
      ],
    },
    {
      id: "schizas",
      name: "Schizas na RM axial",
      basis: "Morfologia do saco dural e visibilidade das radículas em relação à gordura epidural.",
      note: "A a D expressam gravidade morfológica, mas não substituem a correlação com claudicação e função.",
      types: [
        { code: "A", label: "Grau A", description: "Radículas claramente separadas dentro do saco dural.", figureId: "estenose-lombar:schizas", figureVariant: "A" },
        { code: "B", label: "Grau B", description: "Radículas ocupam todo o saco, ainda individualizáveis.", figureId: "estenose-lombar:schizas", figureVariant: "B" },
        { code: "C", label: "Grau C", description: "Radículas não individualizáveis; gordura epidural posterior ainda visível.", figureId: "estenose-lombar:schizas", figureVariant: "C" },
        { code: "D", label: "Grau D", description: "Sem radículas individualizáveis e sem gordura epidural posterior visível.", figureId: "estenose-lombar:schizas", figureVariant: "D" },
      ],
    },
  ],
  indications: {
    operative: [
      "Claudicação neurogênica ou radiculopatia que limita marcha e atividades apesar de tratamento conservador adequado.",
      "Déficit neurológico progressivo com compressão concordante.",
      "Síndrome da cauda equina: descompressão urgente.",
      "Artrodese associada apenas diante de instabilidade demonstrada, deformidade relevante ou descompressão que exige ressecção desestabilizadora.",
    ],
    nonOperative: [
      "Sintomas leves a moderados, função aceitável e ausência de déficit progressivo.",
      "Educação, atividade aeróbica adaptada, fisioterapia, analgesia e controle de peso/comorbidades.",
      "Infiltração epidural pode oferecer benefício transitório em componente radicular selecionado, sem reverter a estenose.",
    ],
    decisionNotes:
      "A indicação cirúrgica é funcional: distância de marcha, autonomia e qualidade de vida importam mais que a área do canal isolada. Se não há instabilidade em radiografias dinâmicas, deformidade significativa ou necessidade de remover grande parte das facetas, a descompressão isolada é o padrão mais parcimonioso. O Swedish Spinal Stenosis Study mostrou resultados equivalentes com ou sem artrodese em dois e cinco anos; a artrodese aumentou a carga perioperatória. Mesmo na espondilolistese degenerativa, o NORDSTEN sustenta descompressão isolada em pacientes selecionados.",
  },
  approaches: [
    { id: "laminotomia-bilateral", name: "Descompressão bilateral por acesso unilateral", indication: "Estenose central e de recessos em um ou mais níveis com objetivo de preservar banda posterior e facetas.", interval: "Acesso unilateral intermuscular ou mediano; laminotomia ipsilateral, flavectomia e descompressão contralateral por baixo do processo espinhoso.", atRisk: ["Saco dural e raízes", "Facetas", "Pars interarticularis", "Vasos epidurais"], figureId: "estenose-lombar:tratamento" },
    { id: "laminectomia", name: "Laminectomia descompressiva", indication: "Estenose extensa ou anatomia que exige exposição ampla, preservando facetas sempre que possível.", interval: "Exposição posterior mediana, remoção controlada de lâmina e ligamento amarelo, descompressão dos recessos e forames conforme sintomas.", atRisk: ["Dura-máter", "Raízes", "Facetas e pars", "Musculatura paravertebral"], figureId: "estenose-lombar:tratamento" },
  ],
  technique: [
    { n: 1, title: "Confirmar claudicação neurogênica", detail: "Caracterizar distância de marcha, relação com postura e alívio ao sentar; examinar pulsos, quadril, neuropatia e sinais longos para excluir vascular e cervical.", figureId: "estenose-lombar:claudicacao", tips: ["Carrinho de supermercado é pista de flexão analgésica"], pitfalls: ["Atribuir toda dor da perna à RM lombar"] },
    { n: 2, title: "Mapear o compartimento comprimido", detail: "Ler RM axial e sagital para canal central, recessos e forames; correlacionar cada zona com a raiz e o padrão clínico.", figureId: "estenose-lombar:zonas", tips: ["O corte axial mostra o mecanismo melhor que o laudo isolado"], pitfalls: ["Descomprimir o canal e ignorar o forame sintomático"] },
    { n: 3, title: "Avaliar estabilidade", detail: "Revisar alinhamento, espondilolistese, escoliose e radiografias em flexoextensão quando indicadas. Definir antes da cirurgia se há motivo real para artrodese.", figureId: "estenose-lombar:dinamica", tips: ["Instabilidade clínica e radiográfica devem conversar"], pitfalls: ["Adicionar artrodese apenas porque existe listese estável"] },
    { n: 4, title: "Planejar descompressão poupadora", detail: "Escolher laminotomia focal ou acesso unilateral para descompressão bilateral conforme níveis e anatomia. Preservar processos espinhosos, ligamentos e facetas quando possível.", figureId: "estenose-lombar:tratamento", tips: ["Menor ressecção óssea reduz instabilidade e agressão muscular"], pitfalls: ["Confundir exposição ampla com descompressão completa"] },
    { n: 5, title: "Abrir recessos e forames", detail: "Retirar ligamento amarelo sob visão, descomprimir a borda medial da faceta e seguir a raiz até que esteja livre, sem ressecar mais da faceta que o necessário.", figureId: "estenose-lombar:axial", tips: ["Palpar pedículo ajuda a confirmar o limite foraminal"], pitfalls: ["Facetectomia bilateral excessiva"] },
    { n: 6, title: "Decidir artrodese somente se indicada", detail: "Se houver instabilidade, deformidade ou facetectomia inevitavelmente ampla, instrumentar e reconstruir alinhamento. Caso contrário, encerrar com descompressão isolada.", figureId: "estenose-lombar:tratamento", figureVariant: "fusao", tips: ["Registrar o motivo específico da artrodese"], pitfalls: ["Usar implante para compensar uma indicação imprecisa"] },
  ],
  postop: {
    immobilization: "Sem órtese após descompressão isolada; após artrodese, uso seletivo conforme qualidade óssea e construção.",
    weightBearing: "Deambulação precoce, inicialmente com apoio se necessário.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Livre para marcha", focus: "Recuperar marcha, monitorar ferida e déficit neurológico." },
      { window: "2-8 semanas", weightBearing: "Progressiva", focus: "Condicionamento, força de membros inferiores e tolerância à caminhada." },
      { window: "8-16 semanas", weightBearing: "Conforme tolerância", focus: "Autonomia, equilíbrio e retorno às atividades; proteger consolidação se houve artrodese." },
    ],
    followup: "Medir distância de marcha e autonomia, não apenas dor. Persistência focal pode indicar descompressão insuficiente; nova instabilidade ou doença adjacente exige correlação clínica.",
  },
  complications: [
    { name: "Durotomia", detail: "Mais frequente em idosos e cirurgias de revisão.", prevention: "Dissecção sob visão e separação cuidadosa do ligamento amarelo aderido." },
    { name: "Descompressão insuficiente", detail: "Persistência de claudicação ou radiculopatia por recesso/forame residual.", prevention: "Planejamento topográfico e verificação de cada raiz sintomática." },
    { name: "Instabilidade iatrogênica", detail: "Dor mecânica ou progressão de listese após ressecção facetária.", prevention: "Preservar facetas, pars e banda posterior." },
    { name: "Infecção e hematoma", detail: "Podem comprimir raízes e deteriorar rapidamente o exame.", prevention: "Profilaxia, hemostasia e vigilância neurológica." },
    { name: "Falha de implante/pseudoartrose", detail: "Específica dos casos em que artrodese foi realmente necessária.", prevention: "Otimizar osso, tabagismo, alinhamento e técnica de fusão." },
  ],
  evidence: [
    { id: "delitto-2015", claim: "Fisioterapia estruturada e cirurgia produziram melhora semelhante em análise por intenção de tratar, com alto cruzamento para cirurgia.", takeaway: "Tratamento conservador ativo é uma opção real para quem não tem déficit progressivo ou incapacidade inaceitável.", level: "I", studyType: "Ensaio clínico randomizado", era: "atual", citation: { authors: "Delitto A et al.", title: "Surgery versus nonsurgical treatment of lumbar spinal stenosis", journal: "Ann Intern Med", year: 2015, pmid: "25844995" } },
    { id: "forsth-2016", claim: "Adicionar artrodese à descompressão não melhorou ODI nem caminhada em dois anos, com ou sem espondilolistese degenerativa.", takeaway: "Artrodese de rotina aumenta recursos sem benefício demonstrado.", level: "I", studyType: "Ensaio clínico randomizado multicêntrico", era: "classico", citation: { authors: "Försth P et al.", title: "A Randomized, Controlled Trial of Fusion Surgery for Lumbar Spinal Stenosis", journal: "N Engl J Med", year: 2016, pmid: "27074066", doi: "10.1056/NEJMoa1513721" } },
    { id: "karlsson-2024", claim: "Aos cinco anos, descompressão isolada e descompressão com artrodese mantiveram ODI semelhante.", takeaway: "O seguimento prolongado reforça descompressão isolada como opção preferencial na ausência de instabilidade específica.", level: "I", studyType: "Seguimento de ensaio randomizado", era: "atual", citation: { authors: "Karlsson T et al.", title: "Decompression alone or decompression with fusion for lumbar spinal stenosis: five-year clinical results", journal: "Bone Joint J", year: 2024, pmid: "38945544", doi: "10.1302/0301-620X.106B7.BJJ-2023-1160.R2" } },
  ],
  pearls: [
    "Alívio ao sentar ou flexionar diferencia melhor claudicação neurogênica que a distância fixa de marcha.",
    "Recesso lateral comprime a raiz que atravessa; forame comprime a raiz que sai.",
    "Descompressão completa não significa laminectomia completa.",
    "A pergunta antes da artrodese é: qual instabilidade estou tratando?",
  ],
  pitfalls: [
    "Operar estenose radiográfica em paciente sem síndrome concordante.",
    "Ignorar doença vascular, quadril, neuropatia ou mielopatia cervical.",
    "Ressecar facetas para ganhar exposição e criar a instabilidade que depois exige artrodese.",
    "Adicionar artrodese automaticamente à listese degenerativa estável.",
    "Descomprimir canal central e deixar recesso ou forame sintomático fechado.",
  ],
  figures: [
    { id: "estenose-lombar:anatomia", caption: "Componentes degenerativos que reduzem o canal lombar.", alt: "Segmento lombar com disco, facetas e ligamento amarelo.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "estenose-lombar:axial", caption: "Corte axial da estenose central e dos recessos laterais.", alt: "Comparação axial de canal normal e estenótico.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "estenose-lombar:dinamica", caption: "Flexão abre e extensão reduz o canal e os forames.", alt: "Diagrama dinâmico da coluna lombar em flexão e extensão.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "estenose-lombar:claudicacao", caption: "Diferenças práticas entre claudicação neurogênica e vascular.", alt: "Quadro comparativo dos dois tipos de claudicação.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Hebert & Lech, 6a ed." } },
    { id: "estenose-lombar:schizas", caption: "Graus A a D de Schizas na RM axial.", alt: "Classificação morfológica do saco dural na estenose lombar.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Schizas classification" } },
    { id: "estenose-lombar:zonas", caption: "Canal central, recesso lateral, forame e zona extraforaminal.", alt: "Mapa axial das zonas de compressão lombar.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "estenose-lombar:tratamento", caption: "Descompressão poupadora e critérios para associar artrodese.", alt: "Comparação entre descompressão isolada e com artrodese.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Síntese editorial dos ensaios citados" } },
  ],
  meta: {
    lastReviewed: "2026-07-14",
    sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert & Lech, 6a ed. (2025)", "Swedish Spinal Stenosis Study - PMID 27074066 e 38945544"],
    attribution: "Conteúdo original em português brasileiro; evidências verificadas no PubMed e diagramas próprios.",
    figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021)",
  },
});
