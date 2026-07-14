import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "inf-articulacao-artrite-septica",
  slug: "artrite-septica",
  kind: "condicao",
  regionId: "infeccao-musculoesqueletica",
  bone: "Articulação nativa",
  injury: "Artrite séptica bacteriana",
  title: "Artrite séptica",
  subtitle: "Puncionar antes do antibiótico quando o paciente permite, drenar cedo e repetir o controle do foco se a resposta falhar.",
  laterality: null,
  status: "complete",
  overview: "Artrite séptica de articulação nativa é emergência porque bactérias, proteases e pressão intra-articular podem destruir cartilagem rapidamente. Joelho é o local mais comum no adulto; quadril e ombro também são importantes. Staphylococcus aureus predomina, mas idade, imunossupressão, exposição sexual, drogas injetáveis, mordida e epidemiologia modificam os agentes.\n\nDor intensa, derrame e restrição passiva sugerem o diagnóstico, mas febre pode faltar. Antes do antibiótico, paciente estável deve ter hemoculturas e artrocentese para contagem e diferencial de leucócitos, Gram, culturas aeróbia/anaeróbia e cristais. Nenhum ponto de corte de leucócitos confirma ou exclui isoladamente, e cristais não afastam infecção concomitante. Paciente séptico recebe culturas rápidas e antibiótico sem atraso.\n\nControle do foco por aspiração seriada, artroscopia ou artrotomia depende da articulação, estágio, duração e resposta. Artroscopia é adequada para a maioria dos grandes derrames iniciais; artrotomia é favorecida em quadril complexo, aderências, necrose, abscesso ou falha. O antibiótico é ajustado às culturas e o tempo depende de agente, articulação, drenagem e osteomielite associada. Falha clínica ou PCR persistente exige nova imagem, nova punção ou repetição da lavagem.",
  keyFacts: [
    { label: "Emergência", value: "Cartilagem pode sofrer dano rápido" },
    { label: "Diagnóstico", value: "Artrocentese + cultura, não um único corte de leucócitos" },
    { label: "Cristais", value: "Não excluem infecção concomitante" },
    { label: "Tratamento", value: "Drenagem + antibiótico dirigido" },
    { label: "Falha", value: "Dor, febre ou PCR persistentes → reavaliar foco" },
    { label: "Criança", value: "Quadril requer drenagem urgente e avaliação de osteomielite" },
  ],
  anatomy: {
    text: "A cartilagem articular é avascular e depende do líquido sinovial. Inflamação purulenta eleva pressão, compromete perfusão epifisária e libera enzimas degradativas. No quadril infantil, pressão pode comprometer a cabeça femoral; metáfise intracapsular facilita osteomielite associada.\n\nRecessos suprapatelar, posterior do joelho, axilar do ombro e compartimentos do quadril podem reter pus. Ultrassom identifica derrame e orienta punção; radiografia é basal; RM avalia osteomielite, abscesso e articulações profundas quando a evolução é atípica.\n\nGächter descreve progressão artroscópica de sinovite turva até aderências e destruição. Quanto mais avançado o estágio, menor a chance de uma lavagem simples ser suficiente.",
    figureIds: ["framework-completion:artrite-septica-diagnostico", "framework-completion:artrite-septica-gachter"],
  },
  classification: [
    { id: "gachter", name: "Gächter artroscópica", basis: "Aspecto sinovial, aderências e dano articular.", types: [
      { code: "I", label: "Sinovite inicial", description: "Líquido turvo, hiperemia e petéquias, sem alteração radiográfica.", figureId: "framework-completion:artrite-septica-gachter", figureVariant: "I" },
      { code: "II", label: "Depósitos e fibrina", description: "Sinovite intensa, pus e fibrina, sem aderências organizadas.", figureId: "framework-completion:artrite-septica-gachter", figureVariant: "II" },
      { code: "III", label: "Aderências", description: "Compartimentalização e espessamento sinovial limitam lavagem.", figureId: "framework-completion:artrite-septica-gachter", figureVariant: "III" },
      { code: "IV", label: "Destruição", description: "Infiltração subcondral, erosão e dano articular estabelecido.", figureId: "framework-completion:artrite-septica-gachter", figureVariant: "IV" },
    ] },
  ],
  indications: {
    operative: ["Artrite séptica confirmada ou altamente provável em grande articulação.", "Quadril, ombro profundo ou coleção que não pode ser aspirada adequadamente.", "Loculações, aderências, tecido necrótico ou estágio avançado.", "Falha após aspiração/lavagem inicial.", "Osteomielite ou abscesso periarticular associado."],
    nonOperative: ["Aspiração seriada pode ser opção em articulação acessível, fase inicial e paciente com resposta rápida, sob vigilância especializada.", "Antibiótico isolado sem drenagem é excepcional e exige ausência de coleção relevante.", "Tratamento empírico após coleta de culturas, ajustado assim que possível."],
    decisionNotes: "A prioridade é obter líquido e controlar o foco. Não atrasar drenagem aguardando cultura final. Em infecção gonocócica sem derrame persistente, tratamento clínico pode bastar; em articulação purulenta, drenar. Considerar tuberculose, fungos e micobactérias em curso indolente.",
  },
  approaches: [
    { id: "artroscopia", name: "Lavagem artroscópica", indication: "Grandes articulações em estágios iniciais ou intermediários.", interval: "Portais padrão com inspeção de recessos, coleta, lavagem e sinovectomia seletiva.", atRisk: ["Cartilagem", "Feixe neurovascular", "Portais contaminados"], figureId: "framework-completion:artrite-septica-gachter" },
    { id: "artrotomia", name: "Artrotomia", indication: "Quadril selecionado, estágio avançado, aderências, abscesso ou falha artroscópica.", interval: "Acesso anatômico da articulação com drenagem, desbridamento e irrigação.", atRisk: ["Vascularização epifisária", "Nervos", "Músculos e cápsula"], figureId: "framework-completion:artrite-septica-gachter" },
  ],
  technique: [
    { n: 1, title: "Reconhecer e puncionar", detail: "Coletar hemoculturas e líquido sinovial para contagem, Gram, culturas e cristais. Usar ultrassom em articulação profunda.", figureId: "framework-completion:artrite-septica-diagnostico", tips: ["Volume para cultura é mais importante que distribuir em muitos tubos"], pitfalls: ["Descartar infecção por cristais"] },
    { n: 2, title: "Iniciar terapia no tempo correto", detail: "Se estável, colher antes de antibiótico. Se séptico, colher rapidamente e iniciar cobertura empírica baseada em Gram, risco e epidemiologia.", tips: ["Revisar alergias e função renal"], pitfalls: ["Atrasar antibiótico na instabilidade"] },
    { n: 3, title: "Drenar todos os recessos", detail: "Coletar amostras, remover pus e fibrina, romper loculações e irrigar. Fazer sinovectomia conforme estágio, preservando cartilagem.", figureId: "framework-completion:artrite-septica-gachter", tips: ["Inspecionar recessos posterior e subescapular conforme articulação"], pitfalls: ["Lavagem de portal único sem visualização"] },
    { n: 4, title: "Direcionar antibiótico", detail: "Ajustar ao agente e sítio; considerar transição oral com boa resposta e opção biodisponível. Investigar endocardite ou foco primário quando indicado.", figureId: "framework-completion:artrite-septica-diagnostico", tips: ["Culturas negativas exigem rever antibiótico prévio e diagnósticos"], pitfalls: ["Manter cobertura excessiva sem revisão"] },
    { n: 5, title: "Auditar resposta", detail: "Reavaliar dor, amplitude, febre e PCR. Persistência ou piora justifica nova punção, RM e repetição do controle do foco.", tips: ["Não espere destruição radiográfica para reoperar"], pitfalls: ["Interpretar uma PCR isolada sem tendência"] },
  ],
  postop: { immobilization: "Curta, apenas por dor; mobilização precoce protege cartilagem e reduz rigidez.", weightBearing: "Conforme dor e integridade óssea; geralmente progressiva após controle do foco.", rehab: [{ window: "Primeiros dias", weightBearing: "Conforme tolerância", focus: "Drenagem, dor, amplitude passiva e resposta sistêmica." }, { window: "1-6 semanas", weightBearing: "Progressiva", focus: "Arco completo, força e adesão antimicrobiana." }, { window: "Após controle", weightBearing: "Livre", focus: "Função e sequela condral." }], followup: "Seguir clínica e PCR até resolução; avaliar dano articular e osteomielite associada. Crianças precisam vigilância de crescimento e necrose epifisária conforme articulação." },
  complications: [
    { name: "Destruição condral", detail: "Inflamação prolongada leva a artrose e dor.", prevention: "Drenagem e antibiótico precoces." },
    { name: "Rigidez", detail: "Sinovite, aderências e imobilização limitam movimento.", prevention: "Controle do foco e mobilização precoce." },
    { name: "Osteomielite", detail: "Extensão ao osso altera duração e cirurgia.", prevention: "RM e desbridamento quando evolução é atípica." },
    { name: "Sepse e endocardite", detail: "Bacteremia pode produzir instabilidade e focos secundários.", prevention: "Hemoculturas, terapia rápida e investigação dirigida." },
    { name: "Necrose da cabeça femoral", detail: "Risco em quadril infantil por pressão e dano vascular.", prevention: "Descompressão urgente e seguimento." },
  ],
  evidence: [
    { id: "sanjo-2023", claim: "A diretriz SANJO enfatiza aspiração antes de antibiótico no paciente estável, cultura adequada e controle do foco adaptado à articulação e ao estágio.", takeaway: "Diagnóstico microbiológico e drenagem não devem competir; organize ambos rapidamente.", level: "II", studyType: "Diretriz internacional baseada em revisão", era: "atual", citation: { authors: "Ravn C, Neyt J, Benito N, et al.", title: "Guideline for management of septic arthritis in native joints (SANJO)", journal: "Journal of Bone and Joint Infection", year: 2023, pmid: "36756304", doi: "10.5194/jbji-8-29-2023" } },
    { id: "gjika-2019", claim: "Após drenagem cirúrgica, duas semanas de antibiótico foram não inferiores a quatro em população predominantemente de mão e punho.", takeaway: "Cursos mais curtos podem bastar em casos selecionados, mas não extrapole automaticamente para quadril, joelho ou osteomielite.", level: "I", studyType: "Ensaio clínico randomizado de não inferioridade", era: "atual", citation: { authors: "Gjika E, Beaulieu JY, Vakalopoulos K, et al.", title: "Two weeks versus four weeks of antibiotic therapy after surgical drainage for native joint bacterial arthritis", journal: "Annals of the Rheumatic Diseases", year: 2019, pmid: "30992295", doi: "10.1136/annrheumdis-2019-215116" } },
  ],
  pearls: ["Puncione antes do antibiótico se o paciente estável permitir.", "Cristais não excluem bactéria.", "Contagem sinovial não é um teste binário.", "Quadril infantil não tolera atraso.", "Falha de resposta significa procurar foco residual."],
  pitfalls: ["Esperar cultura para drenar.", "Tratar apenas pela PCR.", "Aceitar swab de ferida como cultura articular.", "Imobilizar por semanas.", "Extrapolar duração curta para toda articulação."],
  figures: [
    { id: "framework-completion:artrite-septica-diagnostico", caption: "Punção, culturas, antibiótico e auditoria da resposta.", alt: "Fluxograma diagnóstico e terapêutico da artrite séptica nativa.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "SANJO, Journal of Bone and Joint Infection, 2023." } },
    { id: "framework-completion:artrite-septica-gachter", caption: "Progressão de Gächter de sinovite inicial a destruição articular.", alt: "Quatro estágios artroscópicos de artrite séptica segundo Gächter.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's Operative Orthopaedics, 14a ed.; classificação de Gächter." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, 6a ed. (2025)", "SANJO 2023", "Gjika et al., Ann Rheum Dis 2019"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), artrite séptica." },
});
