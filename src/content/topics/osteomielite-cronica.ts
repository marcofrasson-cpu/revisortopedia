import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "inf-osso-osteomielite-cronica",
  slug: "osteomielite-cronica",
  kind: "condicao",
  regionId: "infeccao-musculoesqueletica",
  bone: "Osso e partes moles",
  injury: "Infecção óssea crônica",
  title: "Osteomielite crônica",
  subtitle: "Remover sequestro e biofilme, preencher o espaço morto, estabilizar e obter cobertura vascularizada.",
  laterality: null,
  status: "complete",
  overview: "Osteomielite crônica é infecção óssea persistente caracterizada por osso necrótico, biofilme, vascularização deficiente e recorrência. Sequestro é o fragmento desvitalizado; invólucro é o osso reacional que o circunda; cloaca é a abertura de drenagem. Fístula pode fechar temporariamente sem erradicação. Antibiótico isolado raramente cura quando há sequestro e espaço morto.\n\nO diagnóstico integra história, fístula, ferida, cirurgias, estabilidade, imagem e microbiologia. Radiografias mostram esclerose, lise, deformidade e implantes. TC define sequestro e cortical; RM mapeia medula e partes moles, mas cirurgia prévia reduz especificidade. Cinco ou mais amostras profundas separadas, obtidas com instrumentos distintos, aumentam rendimento; swab de fístula não substitui cultura profunda. Histologia ajuda, especialmente quando antibiótico prévio reduz cultura.\n\nCierny-Mader combina anatomia (I medular, II superficial, III localizada, IV difusa) e condição do hospedeiro (A, B local/sistêmico ou C). Tratamento curativo reúne desbridamento até tecido viável, manejo do espaço morto, antibiótico local e sistêmico dirigido, estabilidade e cobertura vascularizada. Pode ser feito em um ou múltiplos tempos. Em hospedeiro C ou doença sem solução reconstrutiva proporcional, supressão, amputação ou cuidado paliativo podem ser mais apropriados.",
  keyFacts: [
    { label: "Tríade", value: "Sequestro + biofilme + perfusão deficiente" },
    { label: "Diagnóstico", value: "Imagem + múltiplas culturas profundas + histologia" },
    { label: "Cierny-Mader", value: "I medular · II superficial · III localizada · IV difusa" },
    { label: "Hospedeiro", value: "A saudável · B comprometido · C tratamento pior que doença" },
    { label: "Tratamento", value: "Desbridar + espaço morto + estabilidade + cobertura + antibiótico" },
    { label: "Meta", value: "Remissão duradoura com membro funcional" },
  ],
  anatomy: {
    text: "Osso avascular não recebe concentração antimicrobiana eficaz e funciona como corpo estranho. Biofilme em implantes e sequestros reduz atividade metabólica bacteriana e tolera antibióticos. O desbridamento deve alcançar osso que sangre e tecidos com capacidade de cicatrização, sem criar instabilidade irrecuperável.\n\nEspaço morto após ressecção acumula líquido e precisa ser ocupado por tecido vascularizado, cimento/espaçador temporário ou substituto ósseo com antibiótico conforme plano. Defeitos segmentares podem exigir transporte ósseo, enxerto, membrana induzida ou reconstrução vascularizada.\n\nPartes moles são parte do tratamento. Cicatriz aderida, fístula e pele irradiada não oferecem barreira; retalho muscular ou fasciocutâneo leva perfusão e cobertura. Estabilidade reduz movimento, necrose e persistência do foco.",
    figureIds: ["framework-completion:om-cronica-cierny", "framework-completion:om-cronica-pilares"],
  },
  classification: [
    { id: "cierny-mader", name: "Cierny-Mader", basis: "Extensão anatômica e condição fisiológica do hospedeiro.", types: [
      { code: "I", label: "Medular", description: "Infecção confinada ao canal, frequentemente associada a haste ou foco hematogênico.", figureId: "framework-completion:om-cronica-cierny", figureVariant: "I" },
      { code: "II", label: "Superficial", description: "Compromete superfície cortical a partir de cobertura deficiente.", figureId: "framework-completion:om-cronica-cierny", figureVariant: "II" },
      { code: "III", label: "Localizada", description: "Compromete espessura cortical, mas ressecção completa preserva estabilidade.", figureId: "framework-completion:om-cronica-cierny", figureVariant: "III" },
      { code: "IV", label: "Difusa", description: "Envolve todo o segmento e desbridamento gera instabilidade.", figureId: "framework-completion:om-cronica-cierny", figureVariant: "IV" },
    ] },
  ],
  indications: {
    operative: ["Sequestro, abscesso, fístula, implante infectado ou recorrência sintomática.", "Instabilidade, deformidade, não união ou falha de cobertura.", "Necessidade de diagnóstico profundo ou suspeita de transformação maligna da fístula.", "Tratamento curativo viável em hospedeiro A/B."],
    nonOperative: ["Supressão antimicrobiana em hospedeiro C ou foco não ressecável, com objetivo explícito.", "Otimização de nutrição, glicemia, tabagismo, perfusão e pele antes da reconstrução.", "Observação excepcional de doença quiescente sem benefício provável de intervenção."],
    decisionNotes: "O plano deve ser definido antes de desbridar: como preencher o defeito, estabilizar e cobrir? Ressecção radical sem reconstrução preparada troca infecção por falha mecânica. Em implante estável necessário à consolidação, retenção temporária pode ser aceitável em infecção relacionada à fratura, mas osteomielite crônica madura frequentemente requer troca ou remoção.",
  },
  approaches: [
    { id: "desbridamento", name: "Acesso ao foco e sequestrectomia", indication: "Remoção de todo tecido sem viabilidade e coleta de amostras.", interval: "Incorporar cicatrizes/fístulas ressecáveis e criar exposição suficiente para visualizar limites.", atRisk: ["Feixe neurovascular", "Estabilidade segmentar", "Cobertura remanescente"], figureId: "framework-completion:om-cronica-pilares" },
    { id: "reconstrucao", name: "Reconstrução óssea e de partes moles", indication: "Defeito após desbridamento com necessidade de estabilidade e cobertura.", interval: "Planejamento combinado com cirurgia plástica e técnicas de reconstrução segmentar.", atRisk: ["Anastomoses", "Retalho", "Fixação", "Leito receptor"], figureId: "framework-completion:om-cronica-pilares" },
  ],
  technique: [
    { n: 1, title: "Estadiar foco e hospedeiro", detail: "Classificar Cierny-Mader, avaliar perfusão, cobertura, estabilidade, deformidade e fatores sistêmicos. Definir intenção curativa ou supressiva.", figureId: "framework-completion:om-cronica-cierny", tips: ["Hospedeiro é parte da classificação, não nota de rodapé"], pitfalls: ["Prometer cura sem corrigir perfusão ou nutrição"] },
    { n: 2, title: "Planejar reconstrução antes da ressecção", detail: "Antecipar defeito, fixação, espaço morto, antibiótico local, cobertura e número de tempos com equipe multidisciplinar.", figureId: "framework-completion:om-cronica-pilares", tips: ["Desbridamento suficiente pode exigir outra estratégia de estabilidade"], pitfalls: ["Improvisar cobertura após grande ressecção"] },
    { n: 3, title: "Coletar amostras profundas", detail: "Antes do antibiótico intraoperatório, colher pelo menos cinco amostras separadas de tecidos representativos com instrumentos distintos e enviar histologia.", tips: ["Suspender antibiótico previamente quando clinicamente seguro e acordado"], pitfalls: ["Usar swab ou amostra única"] },
    { n: 4, title: "Desbridar até viabilidade", detail: "Ressecar fístula, pus, membranas, implantes desnecessários, sequestros e osso sem sangramento. Irrigar após remoção mecânica.", figureId: "framework-completion:om-cronica-pilares", tips: ["Trocar luvas e instrumentos antes da reconstrução limpa"], pitfalls: ["Deixar sequestro para preservar comprimento"] },
    { n: 5, title: "Controlar espaço morto e estabilidade", detail: "Aplicar carreador local de antibiótico quando indicado, estabilizar e preencher/reconstruir defeito conforme estratégia de um ou mais tempos.", figureId: "framework-completion:om-cronica-pilares", tips: ["Dose local não substitui desbridamento"], pitfalls: ["Criar constructo instável em ambiente hostil"] },
    { n: 6, title: "Cobrir e tratar sistemicamente", detail: "Obter fechamento vascularizado precoce e ajustar antimicrobiano às culturas, interações, função orgânica e biodisponibilidade.", tips: ["Via oral pode ser adequada em pacientes selecionados"], pitfalls: ["Prolongar antibiótico sem controle do foco"] },
  ],
  postop: { immobilization: "Conforme estabilidade e retalho; evitar pressão sobre cobertura.", weightBearing: "Definida pela fixação e reconstrução óssea, frequentemente protegida até integração.", rehab: [{ window: "0-2 semanas", weightBearing: "Conforme construção", focus: "Retalho, ferida, culturas e ajuste antimicrobiano." }, { window: "2-12 semanas", weightBearing: "Progressiva quando segura", focus: "Integração, função e toxicidade medicamentosa." }, { window: "Meses", weightBearing: "Conforme consolidação", focus: "Reconstrução definitiva, remissão e retorno funcional." }], followup: "Seguimento prolongado porque recidiva pode ser tardia. Avaliar dor, fístula, PCR no contexto, consolidação, implantes e cobertura; suspeitar carcinoma epidermoide em fístula crônica que muda de aspecto." },
  complications: [
    { name: "Recidiva", detail: "Foco residual, biofilme ou cobertura inadequada reativam infecção.", prevention: "Desbridamento completo e reconstrução dos pilares." },
    { name: "Não união e falha do implante", detail: "Instabilidade e infecção se perpetuam.", prevention: "Estabilidade, biologia e controle do foco simultâneos." },
    { name: "Toxicidade antimicrobiana", detail: "Renal, hepática, hematológica e interações em cursos prolongados.", prevention: "Terapia dirigida e monitorização." },
    { name: "Falha de retalho", detail: "Expõe osso/implante e compromete erradicação.", prevention: "Planejamento plástico, perfusão e proteção." },
    { name: "Carcinoma em fístula", detail: "Transformação epidermoide rara após drenagem crônica.", prevention: "Biopsiar alteração, sangramento ou crescimento da fístula." },
  ],
  evidence: [
    { id: "cierny-1990", claim: "Cierny-Mader estruturou tratamento pela combinação de anatomia da doença e fisiologia do hospedeiro.", takeaway: "Extensão e capacidade de tolerar reconstrução devem ser descritas antes de operar.", level: "IV", studyType: "Série clínica e sistema de classificação", era: "classico", citation: { authors: "Cierny G 3rd", title: "Chronic osteomyelitis: results of treatment", journal: "Instructional Course Lectures", year: 1990, pmid: "2186142" } },
    { id: "oviva-2019-cronica", claim: "Terapia oral foi não inferior à intravenosa prolongada nas primeiras seis semanas em infecção óssea/articular adulta selecionada.", takeaway: "Escolha do fármaco e controle do foco são mais importantes que manter acesso venoso por rotina.", level: "I", studyType: "Ensaio clínico randomizado de não inferioridade", era: "atual", citation: { authors: "Li HK, Rombach I, Zambellas R, et al.", title: "Oral versus Intravenous Antibiotics for Bone and Joint Infection", journal: "The New England Journal of Medicine", year: 2019, pmid: "30699315", doi: "10.1056/NEJMoa1710926" } },
    { id: "mcnally-2022", claim: "Cirurgia em tempo único com desbridamento, reconstrução do espaço morto e cerâmica carregada com gentamicina apresentou controle sustentado em coorte especializada.", takeaway: "Um tempo pode funcionar quando todos os pilares são executados e o paciente é bem selecionado.", level: "III", studyType: "Coorte prospectiva de longo prazo", era: "atual", citation: { authors: "McNally MA, Ferguson JY, Scarborough M, et al.", title: "Mid- to long-term results of single-stage surgery for patients with chronic osteomyelitis using a bioabsorbable gentamicin-loaded ceramic carrier", journal: "The Bone & Joint Journal", year: 2022, pmid: "36047024", doi: "10.1302/0301-620X.104B9.BJJ-2022-0396.R1" } },
  ],
  pearls: ["Sequestro se comporta como corpo estranho.", "Swab de fístula não substitui amostra profunda.", "Desbridamento sem plano de cobertura é incompleto.", "Estabilidade é tratamento da infecção.", "Hospedeiro C pode se beneficiar mais de supressão que de reconstrução extrema."],
  pitfalls: ["Tratar radiografia com antibiótico indefinido.", "Coletar uma única cultura.", "Deixar osso morto para evitar defeito.", "Ignorar partes moles e perfusão.", "Chamar ausência temporária de drenagem de cura."],
  figures: [
    { id: "framework-completion:om-cronica-cierny", caption: "Cierny-Mader: extensão anatômica I-IV associada ao estado do hospedeiro.", alt: "Quatro padrões anatômicos de osteomielite crônica e classes de hospedeiro.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Cierny, Instructional Course Lectures, 1990; Campbell's, 14a ed." } },
    { id: "framework-completion:om-cronica-pilares", caption: "Cinco pilares: desbridamento, culturas, espaço morto, estabilidade e cobertura.", alt: "Fluxo cirúrgico integrado do tratamento da osteomielite crônica.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's, 14a ed.; McNally et al., Bone Joint J 2022." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, 6a ed. (2025)", "Cierny, ICL 1990", "OVIVA, NEJM 2019", "McNally et al., Bone Joint J 2022"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), osteomielite crônica." },
});
