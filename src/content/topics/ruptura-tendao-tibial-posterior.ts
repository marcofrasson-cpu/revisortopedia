import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "mi-pe-colapso-progressivo",
  slug: "ruptura-tendao-tibial-posterior",
  kind: "condicao",
  regionId: "membro-inferior",
  bone: "Pé e tornozelo",
  injury: "Deformidade progressiva do pé colapsado",
  title: "Disfunção do tendão tibial posterior",
  subtitle:
    "Reconhecer o colapso tridimensional, separar deformidade flexível de rígida e corrigir cada componente sem reduzir o problema a um único tendão.",
  laterality: null,
  status: "complete",
  overview:
    "A chamada disfunção do tendão tibial posterior é hoje melhor descrita como deformidade progressiva do pé colapsado. O nome atual reconhece que o problema não se limita ao tendão: falham progressivamente o ligamento calcaneonavicular plantar, a cápsula talonavicular, o ligamento deltoide e os estabilizadores da coluna medial, produzindo valgo do retropé, abdução do antepé e supinação compensatória do antepé.\n\nA avaliação deve ser feita em carga. Dor e edema retromaleolares mediais, sinal de muitos dedos e incapacidade de elevar o calcanhar em apoio monopodal sugerem o diagnóstico. O teste de elevação distingue força e flexibilidade: no pé flexível, o calcâneo ainda inverte; no rígido, permanece em valgo. Radiografias bilaterais com carga quantificam cobertura talonavicular, eixo tálus-primeiro metatarso, inclinação do calcâneo e valgo do tornozelo.\n\nEstágios iniciais recebem redução de carga, órtese e fortalecimento progressivo. Cirurgia é indicada por dor e limitação persistentes, não pela imagem isolada. O plano é por componentes: corrigir equino, recentrar o calcâneo, controlar abdução, estabilizar a coluna medial e restaurar tecidos moles. Deformidade rígida ou artrósica exige artrodese; preservar movimento é desejável, mas secundário a obter um pé estável, plantígrado e alinhado.",
  keyFacts: [
    { label: "Nome atual", value: "Deformidade progressiva do pé colapsado" },
    { label: "Plano", value: "Valgo do retropé + abdução + supinação do antepé" },
    { label: "Teste-chave", value: "Elevação monopodal do calcanhar" },
    { label: "Imagem", value: "Radiografias bilaterais em carga" },
    { label: "Flexível", value: "Reconstrução preservando articulações" },
    { label: "Rígido", value: "Artrodese das articulações comprometidas" },
  ],
  anatomy: {
    text:
      "O tibial posterior passa atrás do maléolo medial e insere-se principalmente na tuberosidade do navicular, com expansões para cuneiformes, cuboide e bases metatarsais. Ele inverte o retropé, bloqueia a articulação transversa do tarso e sustenta dinamicamente o arco medial. O flexor longo dos dedos passa adjacente e pode ser transferido ao navicular, mas é mais fraco e não corrige sozinho a deformidade.\n\nO ligamento calcaneonavicular plantar sustenta a cabeça do tálus. Sua insuficiência permite plantarização e rotação medial do tálus, subluxação peritalar e abdução do antepé. A coluna lateral encurta relativamente; a coluna medial eleva e o antepé supina para manter contato plantar. Com progressão proximal, o deltoide falha e o tálus inclina em valgo dentro da pinça.\n\nA contratura gastrocnêmio-sóleo aumenta a força deformante. O teste de Silfverskiöld separa equino predominantemente gastrocnêmio de contratura combinada. O nervo sural está em risco na osteotomia do calcâneo e o ramo plantar medial na transferência tendínea.",
    figureIds: ["ruptura-tendao-tibial-posterior:anatomia", "ruptura-tendao-tibial-posterior:deformidade-pcfd"],
  },
  classification: [
    {
      id: "pcfd-2020",
      name: "Classificação da deformidade progressiva do pé colapsado",
      basis: "Componente anatômico predominante; cada classe é estágio 1 flexível ou estágio 2 rígido.",
      note: "As classes podem coexistir. A classificação orienta procedimentos por componente, sem assumir que toda deformidade decorra de ruptura do tibial posterior.",
      types: [
        { code: "A", label: "Valgo do retropé", description: "Desalinhamento inframaleolar; avaliar visão axial do retropé e corrigibilidade.", figureId: "ruptura-tendao-tibial-posterior:classificacao-pcfd", figureVariant: "A" },
        { code: "B", label: "Abdução do mediopé/antepé", description: "Descobertura talonavicular e sinal de muitos dedos.", figureId: "ruptura-tendao-tibial-posterior:classificacao-pcfd", figureVariant: "B" },
        { code: "C", label: "Instabilidade da coluna medial", description: "Supinação do antepé, elevação do primeiro raio ou instabilidade tarsometatarsal.", figureId: "ruptura-tendao-tibial-posterior:classificacao-pcfd", figureVariant: "C" },
        { code: "D", label: "Subluxação peritalar", description: "Deslocamento do tálus em relação ao complexo calcâneo-navicular.", figureId: "ruptura-tendao-tibial-posterior:classificacao-pcfd", figureVariant: "D" },
        { code: "E", label: "Instabilidade do tornozelo", description: "Insuficiência deltoide e inclinação talar em valgo.", figureId: "ruptura-tendao-tibial-posterior:classificacao-pcfd", figureVariant: "E" },
      ],
    },
  ],
  indications: {
    operative: [
      "Dor e limitação persistentes após programa adequado de órtese, calçado e reabilitação.",
      "Deformidade flexível progressiva com desalinhamento sintomático e articulações preservadas.",
      "Deformidade rígida ou artrósica que impede um pé plantígrado.",
      "Instabilidade da coluna medial ou do deltoide que não pode ser controlada por órtese.",
    ],
    nonOperative: [
      "Tendinopatia dolorosa inicial sem deformidade fixa.",
      "Deformidade flexível controlável com palmilha ou órtese tornozelo-pé.",
      "Paciente de baixa demanda ou alto risco cirúrgico com dor aceitável.",
      "Período de imobilização curta para crise inflamatória, seguido de reabilitação.",
    ],
    decisionNotes:
      "A indicação começa pela flexibilidade, não pela RM. No pé flexível, combinar procedimentos que tratem os componentes realmente presentes: alongamento gastrocnêmio para equino, osteotomia de medialização do calcâneo para valgo, alongamento da coluna lateral para abdução importante e osteotomia de Cotton ou artrodese tarsometatarsal para supinação/instabilidade medial. Transferência do flexor longo dos dedos reforça a inversão, mas não substitui correção óssea. No pé rígido, artrodese subtalar, talonavicular e/ou calcaneocuboide conforme dor e artrose. Inclinação talar exige avaliação do deltoide e do tornozelo.",
  },
  approaches: [
    { id: "medial", name: "Via medial retromaleolar e navicular", indication: "Tenossinovectomia, inspeção do tibial posterior, reparo do ligamento plantar e transferência do flexor longo dos dedos.", interval: "Incisão ao longo do tibial posterior até o navicular, protegendo veia safena e ramo plantar medial.", atRisk: ["Veia e nervo safenos", "Ramo plantar medial", "Artéria plantar medial"], figureId: "ruptura-tendao-tibial-posterior:via-medial" },
    { id: "calcaneo", name: "Via lateral do calcâneo", indication: "Osteotomia de medialização ou alongamento da coluna lateral.", interval: "Incisão oblíqua lateral sobre o calcâneo, com proteção do nervo sural e tendões fibulares.", atRisk: ["Nervo sural", "Tendões fibulares", "Feixe plantar medial na translação"], figureId: "ruptura-tendao-tibial-posterior:step-mdco" },
  ],
  technique: [
    { n: 1, title: "Mapear a deformidade em carga", detail: "Registrar flexibilidade, elevação monopodal, Silfverskiöld, muitos dedos, supinação do antepé após corrigir o retropé e dor articular. Medir alinhamento em radiografias bilaterais com carga.", figureId: "ruptura-tendao-tibial-posterior:imagem-carga", tips: ["Corrigir manualmente o retropé antes de julgar o antepé"], pitfalls: ["Planejar pela RM sem estudar alinhamento e flexibilidade"] },
    { n: 2, title: "Corrigir o equino", detail: "Realizar recessão gastrocnêmia quando Silfverskiöld é positivo ou alongamento do Aquiles quando a limitação persiste com joelho fletido, evitando enfraquecimento excessivo.", figureId: "ruptura-tendao-tibial-posterior:deformidade-pcfd", tips: ["Repetir dorsiflexão após o procedimento"], pitfalls: ["Alongar Aquiles indiscriminadamente e produzir calcaneísmo"] },
    { n: 3, title: "Recentrar o calcâneo", detail: "Executar osteotomia de medialização e transladar a tuberosidade até que o eixo de carga passe próximo ao centro do retropé. Fixar com parafusos e conferir visão axial.", figureId: "ruptura-tendao-tibial-posterior:step-mdco", tips: ["Proteger o nervo sural e o feixe plantar"], pitfalls: ["Medializar sem corrigir abdução relevante"] },
    { n: 4, title: "Restaurar tecidos mediais", detail: "Desbridar o tibial posterior inviável, transferir o flexor longo dos dedos ao navicular quando indicado e reparar ou reconstruir o ligamento calcaneonavicular plantar.", figureId: "ruptura-tendao-tibial-posterior:step-fdl", tips: ["Tensionar com retropé corrigido e pé plantígrado"], pitfalls: ["Usar transferência isolada como correção estrutural"] },
    { n: 5, title: "Tratar abdução e coluna medial", detail: "Adicionar alongamento da coluna lateral se persistir descoberta talonavicular importante. Com o retropé corrigido, tratar supinação residual com Cotton; usar artrodese do primeiro tarsometatarsal quando houver instabilidade ou artrose.", figureId: "ruptura-tendao-tibial-posterior:deformidade-pcfd", tips: ["Corrigir somente o componente residual demonstrado"], pitfalls: ["Alongar demais a coluna lateral e sobrecarregar calcaneocuboide"] },
    { n: 6, title: "Converter rigidez em estabilidade", detail: "Na deformidade rígida ou artrósica, realizar artrodese seletiva ou dupla/tríplice conforme as articulações comprometidas. Corrigir valgo do tornozelo e deltoide quando a deformidade se estende proximalmente.", figureId: "ruptura-tendao-tibial-posterior:step-artrodese", figureVariant: "tripla", tips: ["Buscar pé plantígrado, não apenas fusão radiográfica"], pitfalls: ["Preservar articulação dolorosa e rígida por princípio"] },
  ],
  postop: {
    immobilization: "Tala inicial e depois bota/órtese; duração depende de osteotomias, transferências e artrodeses associadas.",
    weightBearing: "Sem carga por aproximadamente 6 semanas após reconstrução com osteotomia; artrodese pode exigir 8 a 12 semanas conforme consolidação.",
    rehab: [
      { window: "0-6 semanas", weightBearing: "Sem carga", focus: "Ferida, edema, proteção de osteotomias e transferência." },
      { window: "6-10 semanas", weightBearing: "Progressão em bota", focus: "Consolidação, amplitude e ativação sem estresse em valgo." },
      { window: "10-16 semanas", weightBearing: "Carga plena progressiva", focus: "Força, controle do arco e marcha." },
      { window: "4-9 meses", weightBearing: "Funcional", focus: "Resistência, equilíbrio e retorno gradual; benefício pode evoluir por um ano." },
    ],
    followup: "Radiografias em carga após consolidação para conferir alinhamento e união. Persistência de dor lateral sugere sobrecorreção ou sobrecarga calcaneocuboide; colapso recorrente exige revisar componentes não tratados.",
  },
  complications: [
    { name: "Subcorreção ou recorrência", detail: "Componente tridimensional não tratado mantém o colapso.", prevention: "Planejamento em carga e correção por componentes." },
    { name: "Sobrecorreção lateral", detail: "Alongamento excessivo causa dor calcaneocuboide e adução.", prevention: "Dosear correção pela cobertura talonavicular e exame intraoperatório." },
    { name: "Não união", detail: "Pode ocorrer em osteotomias, coluna lateral ou artrodeses.", prevention: "Preparação, compressão, estabilidade e controle de fatores do hospedeiro." },
    { name: "Lesão neural", detail: "Nervo sural e ramos plantares podem ser lesionados.", prevention: "Dissecção anatômica e controle da translação do calcâneo." },
    { name: "Rigidez", detail: "Maior após fusões e imobilização prolongada.", prevention: "Preservar articulações viáveis e mobilizar quando a consolidação permitir." },
  ],
  evidence: [
    { id: "pcfd-consenso-2020", claim: "Consenso internacional substituiu a nomenclatura centrada no tibial posterior por deformidade progressiva do pé colapsado e propôs classes anatômicas flexíveis ou rígidas.", takeaway: "Classificar a deformidade tridimensional, não apenas o tendão.", level: "V", studyType: "Consenso internacional", era: "atual", citation: { authors: "Myerson MS, Thordarson DB, Johnson JE, et al.", title: "Classification and Nomenclature: Progressive Collapsing Foot Deformity", journal: "Foot & Ankle International", year: 2020, pmid: "32856474", doi: "10.1177/1071100720950722" } },
    { id: "kulig-2009", claim: "Em estágios iniciais, órtese e alongamento melhoraram dor e função; exercício resistido progressivo acrescentou benefício no ensaio de Kulig.", takeaway: "Tratamento conservador estruturado é primeira linha na deformidade flexível inicial.", level: "I", studyType: "Ensaio clínico randomizado", era: "atual", citation: { authors: "Kulig K, Reischl SF, Pomrantz AB, et al.", title: "Nonsurgical management of posterior tibial tendon dysfunction with orthoses and resistive exercise: a randomized controlled trial", journal: "Physical Therapy", year: 2009, pmid: "19022863", doi: "10.2522/ptj.20070242" } },
    { id: "myerson-2004", claim: "Osteotomia de medialização do calcâneo associada à transferência do flexor longo dos dedos produziu alívio da dor em 97% e melhora funcional em 94% numa coorte de estágio II flexível.", takeaway: "Reconstrução combinada pode restaurar alinhamento e função quando a deformidade permanece flexível.", level: "IV", studyType: "Coorte retrospectiva", era: "classico", citation: { authors: "Myerson MS, Badekas A, Schon LC", title: "Treatment of stage II posterior tibial tendon deficiency with flexor digitorum longus tendon transfer and calcaneal osteotomy", journal: "Foot & Ankle International", year: 2004, pmid: "15319100", doi: "10.1177/107110070402500701" } },
    { id: "chadwick-2015", claim: "Seguimento médio de 15 anos mostrou manutenção do alívio da dor e função satisfatória após transferência do flexor longo dos dedos e osteotomia do calcâneo.", takeaway: "A reconstrução flexível bem indicada pode manter resultado no longo prazo.", level: "IV", studyType: "Série de casos de longo prazo", era: "atual", citation: { authors: "Chadwick C, Whitehouse SL, Saxby TS", title: "Long-term follow-up of flexor digitorum longus transfer and calcaneal osteotomy for stage II posterior tibial tendon dysfunction", journal: "The Bone & Joint Journal", year: 2015, pmid: "25737518", doi: "10.1302/0301-620X.97B3.34386" } },
  ],
  pearls: [
    "O pé deve ser examinado e radiografado em carga.",
    "Elevação monopodal avalia força e capacidade de inversão do retropé.",
    "Corrija primeiro o retropé; só então meça a supinação residual do antepé.",
    "Transferência tendínea reforça, mas osteotomias corrigem a mecânica.",
    "Preservar movimento é secundário a obter pé plantígrado e estável.",
  ],
  pitfalls: [
    "Chamar toda deformidade de ruptura isolada do tibial posterior.",
    "Indicar cirurgia por RM sem falha clínica e radiografias em carga.",
    "Fazer transferência do flexor longo dos dedos sem corrigir valgo.",
    "Ignorar abdução, coluna medial, equino ou deltoide.",
    "Tentar reconstrução preservadora em deformidade rígida e artrósica.",
  ],
  figures: [
    { id: "ruptura-tendao-tibial-posterior:anatomia", caption: "Tibial posterior, ligamento calcaneonavicular plantar e estabilizadores do arco medial.", alt: "Vista medial do pé mostrando o tendão tibial posterior e o suporte ligamentar da cabeça do tálus.", kind: "diagram" },
    { id: "ruptura-tendao-tibial-posterior:deformidade-pcfd", caption: "Colapso tridimensional: valgo, abdução e supinação compensatória.", alt: "Componentes do pé colapsado com valgo do calcâneo, abdução do mediopé e supinação da coluna medial.", kind: "diagram" },
    { id: "ruptura-tendao-tibial-posterior:too-many-toes", caption: "Sinal de muitos dedos na avaliação posterior em carga.", alt: "Comparação posterior entre alinhamento normal e abdução do antepé.", kind: "diagram" },
    { id: "ruptura-tendao-tibial-posterior:single-heel-rise", caption: "Elevação monopodal do calcanhar e inversão do retropé.", alt: "Teste funcional de elevação monopodal do calcanhar.", kind: "diagram" },
    { id: "ruptura-tendao-tibial-posterior:classificacao-pcfd", caption: "Classes A a E da deformidade progressiva do pé colapsado.", alt: "Mapa dos componentes anatômicos da classificação atual do pé colapsado.", kind: "diagram" },
    { id: "ruptura-tendao-tibial-posterior:imagem-carga", caption: "Radiografias em carga e medidas que orientam a correção.", alt: "Esquemas de radiografias em carga com cobertura talonavicular, eixo tálus-primeiro metatarso e alinhamento do retropé.", kind: "diagram" },
    { id: "ruptura-tendao-tibial-posterior:step-mdco", caption: "Osteotomia de medialização do calcâneo para correção do valgo.", alt: "Etapas da osteotomia medializante do calcâneo.", kind: "diagram" },
    { id: "ruptura-tendao-tibial-posterior:step-fdl", caption: "Transferência do flexor longo dos dedos associada à correção óssea.", alt: "Transferência do flexor longo dos dedos para o navicular.", kind: "diagram" },
    { id: "ruptura-tendao-tibial-posterior:step-artrodese", caption: "Artrodese seletiva para deformidade rígida ou artrósica.", alt: "Artrodese do retropé nas articulações comprometidas.", kind: "diagram" },
  ],
  meta: {
    lastReviewed: "2026-07-14",
    sources: ["Myerson et al., FAI 2020", "Kulig et al., PTJ 2009", "Myerson et al., FAI 2004", "Chadwick et al., Bone Joint J 2015"],
    attribution: "Conteúdo original em português brasileiro; evidências verificadas no PubMed e diagramas próprios.",
    figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), seção de deformidade adquirida do pé plano no adulto.",
  },
});
