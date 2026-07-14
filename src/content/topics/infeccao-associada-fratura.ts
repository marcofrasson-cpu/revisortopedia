import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "inf-fratura-fri",
  slug: "infeccao-associada-fratura",
  kind: "condicao",
  regionId: "infeccao-musculoesqueletica",
  bone: "Fratura e implante de síntese",
  injury: "Infecção relacionada à fratura",
  title: "Infecção associada à fratura",
  subtitle: "Tratar simultaneamente infecção e consolidação: amostras profundas, desbridamento, estabilidade, espaço morto e cobertura.",
  laterality: null,
  status: "complete",
  overview: "Infecção relacionada à fratura (FRI) é infecção na presença de fratura, com ou sem implante, e difere da infecção periprotética porque a consolidação ainda é um objetivo central. O consenso internacional divide critérios em confirmatórios e sugestivos. Fístula ou deiscência comunicando com osso/implante, pus, mesmo microrganismo em pelo menos duas amostras profundas e microrganismos demonstrados em histologia confirmam infecção. Dor, eritema, febre, drenagem, PCR elevada, imagem e cultura única são sugestivos e exigem investigação.\n\nA pergunta mecânica é inseparável da microbiologia: a fratura está estável, alinhada e com chance de consolidar? Implante estável pode ser retido em apresentação aguda com desbridamento adequado e agente tratável; implante solto, redução inaceitável, não união estabelecida ou biofilme maduro favorecem troca ou remoção. Em casos selecionados, supressão antimicrobiana até a consolidação permite remover o implante depois.\n\nO tratamento se apoia em desbridamento, múltiplas culturas profundas, estabilidade, manejo do espaço morto, antibiótico dirigido e cobertura vascularizada. Não basta remover metal nem prolongar antibiótico. A estratégia pode buscar erradicação imediata, supressão até união ou salvamento/amputação, conforme hospedeiro, osso, tecidos, agente e objetivo funcional.",
  keyFacts: [
    { label: "Confirmatório", value: "Fístula, pus, ≥2 culturas iguais ou microrganismo na histologia" },
    { label: "Amostras", value: "Preferir 5 profundas, separadas, antes do antibiótico se seguro" },
    { label: "Duas metas", value: "Controle da infecção + consolidação" },
    { label: "Reter", value: "Implante estável, redução boa, quadro precoce e agente tratável" },
    { label: "Trocar/remover", value: "Soltura, instabilidade, deformidade, biofilme maduro ou não união" },
    { label: "Pilares", value: "Desbridar + estabilidade + espaço morto + cobertura + antibiótico" },
  ],
  anatomy: { text: "A fratura cria hematoma, osso devascularizado e tecidos traumatizados. Implantes oferecem superfície para biofilme, mas estabilidade também é necessária para revascularização e consolidação. Remover síntese sem restaurar estabilidade agrava a biologia e não trata a doença.\n\nNo desbridamento, remover tecido sem viabilidade, fragmentos ósseos avasculares sem contribuição mecânica, pus e membranas. Fragmentos grandes com inserções e vascularização podem ser preservados conforme julgamento. O espaço morto deve receber carreador local de antibiótico e/ou tecido vascularizado.\n\nCobertura precoce de osso e implante, especialmente na tíbia, reduz exposição e reinoculação. Fixação externa, interna em novo plano ou troca de haste são opções; não existe proibição universal de metal no foco infectado quando a estabilidade é indispensável e o desbridamento foi adequado.", figureIds: ["framework-completion:fri-diagnostico", "framework-completion:fri-estrategia"] },
  classification: [
    { id: "fri-criterios", name: "Consenso FRI", basis: "Critérios confirmatórios versus sugestivos.", types: [
      { code: "C", label: "Confirmatória", description: "Fístula/deiscência comunicante, pus, duas culturas concordantes ou microrganismo histológico.", figureId: "framework-completion:fri-diagnostico", figureVariant: "confirmatoria" },
      { code: "S", label: "Sugestiva", description: "Sinais clínicos, imagem, marcadores, drenagem ou cultura única; requer investigação adicional.", figureId: "framework-completion:fri-diagnostico", figureVariant: "sugestiva" },
    ] },
  ],
  indications: {
    operative: ["Critério confirmatório com foco tratável.", "Abscesso, pus, necrose, instabilidade ou falha de cobertura.", "Não união infectada, redução inadequada ou implante solto.", "Necessidade de amostra diagnóstica profunda em alta suspeita."],
    nonOperative: ["Supressão até consolidação em implante estável e situação selecionada.", "Supressão definitiva quando cirurgia curativa é desproporcional.", "Observação apenas quando critérios sugestivos foram investigados e infecção não se confirmou."],
    decisionNotes: "Retenção depende de estabilidade e chance de união, não só de semanas desde a cirurgia. Quadro precoce e biofilme imaturo favorecem DAIR da fratura; duração longa, agente difícil, osso necrótico e cobertura ruim reduzem sucesso. Se consolidada, remover implante simplifica erradicação. Se não consolidada, toda remoção exige nova estabilidade.",
  },
  approaches: [
    { id: "dair-fri", name: "Desbridamento com retenção", indication: "Implante estável, alinhamento adequado, tecidos recuperáveis e apresentação favorável.", interval: "Acesso amplo ao foco, remoção de tecido necrótico e componentes dispensáveis, preservando estabilidade.", atRisk: ["Vascularização óssea", "Feixe neurovascular", "Cobertura", "Estabilidade"], figureId: "framework-completion:fri-estrategia" },
    { id: "troca-fri", name: "Troca ou remoção da fixação", indication: "Implante solto, instabilidade, não união, deformidade ou biofilme maduro.", interval: "Remoção completa, desbridamento e nova estabilização em um ou mais tempos.", atRisk: ["Defeito ósseo", "Perda de redução", "Partes moles", "Novos trajetos de fixação"], figureId: "framework-completion:fri-estrategia" },
  ],
  technique: [
    { n: 1, title: "Confirmar ou aprofundar", detail: "Identificar critérios confirmatórios. Se apenas sugestivos, planejar imagem e amostras. Radiografias avaliam união, alinhamento e implantes; TC ajuda na união/sequestro.", figureId: "framework-completion:fri-diagnostico", tips: ["PCR normal não exclui FRI crônica"], pitfalls: ["Chamar drenagem persistente de reação ao ponto"] },
    { n: 2, title: "Definir estratégia mecânica", detail: "Avaliar estabilidade, redução, progressão de consolidação, defeito e cobertura. Escolher retenção, troca, supressão até união ou amputação.", figureId: "framework-completion:fri-estrategia", tips: ["Escrever o plano de estabilidade antes de remover parafusos"], pitfalls: ["Retirar implante e deixar foco móvel"] },
    { n: 3, title: "Coletar cinco amostras", detail: "Usar instrumentos separados em sítios profundos representativos antes do antibiótico intraoperatório, salvo sepse; enviar histologia.", figureId: "framework-completion:fri-diagnostico", tips: ["Não tocar pele/fístula e depois o foco com o mesmo instrumento"], pitfalls: ["Basear terapia em swab"] },
    { n: 4, title: "Desbridar e irrigar", detail: "Remover pus, tecido necrótico, sequestros e biofilme acessível; preservar tecidos viáveis. Irrigar após desbridamento e trocar equipe/campos para reconstrução.", tips: ["Sangramento pontilhado ajuda a reconhecer osso viável"], pitfalls: ["Irrigação volumosa sem excisão mecânica"] },
    { n: 5, title: "Reconstruir pilares", detail: "Restabelecer estabilidade, manejar espaço morto com antibiótico local quando indicado e obter cobertura vascularizada precoce.", figureId: "framework-completion:fri-estrategia", tips: ["Coordenar ortopedia, plástica e infectologia"], pitfalls: ["Fechar sob tensão ou sobre cavidade"] },
    { n: 6, title: "Direcionar e acompanhar", detail: "Ajustar terapia sistêmica às culturas e estratégia; monitorar união, toxicidade e recorrência. Remover implante após consolidação quando parte do plano supressivo.", tips: ["Objetivo e data de reavaliação precisam estar explícitos"], pitfalls: ["Supressão indefinida sem plano"] },
  ],
  postop: { immobilization: "Conforme nova estabilidade e cobertura; evitar pressão sobre retalho.", weightBearing: "Definida pela construção e biologia da fratura, com progressão guiada por consolidação.", rehab: [{ window: "0-2 semanas", weightBearing: "Conforme fixação", focus: "Retalho, culturas, antimicrobiano e mobilidade segura." }, { window: "2-12 semanas", weightBearing: "Progressiva se união", focus: "Função, estabilidade e monitorização de toxicidade." }, { window: "Até união", weightBearing: "Guiada por imagem", focus: "Consolidação e decisão sobre retirada de implante/supressão." }], followup: "Acompanhar ferida, dor, drenagem, radiografias de consolidação, estabilidade e efeitos adversos. Recorrência pode ocorrer após suspensão; união não prova erradicação." },
  complications: [
    { name: "Não união infectada", detail: "Instabilidade e infecção se perpetuam.", prevention: "Controle simultâneo do foco e mecânica." },
    { name: "Recidiva", detail: "Biofilme, sequestro ou cobertura deficiente mantêm doença.", prevention: "Amostras, desbridamento e pilares completos." },
    { name: "Falha de implante", detail: "Construção quebra antes da união.", prevention: "Estabilidade adequada, carga protegida e biologia." },
    { name: "Defeito ósseo/tecidual", detail: "Desbridamento necessário pode criar grande perda.", prevention: "Planejar reconstrução e retalho antes da cirurgia." },
    { name: "Amputação", detail: "Pode ser necessária após falhas, isquemia, perda extensa ou risco sistêmico.", prevention: "Reconhecimento precoce, estratégia realista e decisão compartilhada." },
  ],
  evidence: [
    { id: "fri-definition-2018", claim: "Consenso internacional definiu critérios confirmatórios e sugestivos específicos para infecção relacionada à fratura.", takeaway: "Use a linguagem FRI; não transplante critérios de prótese sem adaptação.", level: "V", studyType: "Consenso internacional", era: "atual", citation: { authors: "Metsemakers WJ, Morgenstern M, McNally MA, et al.", title: "Fracture-related infection: A consensus on definition from an international expert group", journal: "Injury", year: 2018, pmid: "28867644", doi: "10.1016/j.injury.2017.08.040" } },
    { id: "fri-diagnosis-2020", claim: "Recomendações diagnósticas reforçam múltiplas amostras profundas, histologia e interpretação cautelosa de marcadores e imagem.", takeaway: "Critério sugestivo deve levar a investigação, não a antibiótico cego.", level: "V", studyType: "Recomendação de consenso baseada em revisão", era: "atual", citation: { authors: "Govaert GAM, Kuehl R, Atkins BL, et al.", title: "Diagnosing Fracture-Related Infection: Current Concepts and Recommendations", journal: "Journal of Orthopaedic Trauma", year: 2020, pmid: "31855973", doi: "10.1097/BOT.0000000000001614" } },
    { id: "fri-treatment-2020", claim: "Grupo internacional estruturou tratamento em desbridamento, estabilidade, espaço morto, cobertura e antimicrobianos com estratégia adaptada à união.", takeaway: "A decisão de reter ou trocar implante existe dentro de um plano mecânico e biológico completo.", level: "V", studyType: "Recomendação internacional", era: "atual", citation: { authors: "Metsemakers WJ, Morgenstern M, Senneville E, et al.", title: "General treatment principles for fracture-related infection: recommendations from an international expert group", journal: "Archives of Orthopaedic and Trauma Surgery", year: 2020, pmid: "31659475", doi: "10.1007/s00402-019-03287-4" } },
  ],
  pearls: ["FRI tem critérios próprios.", "Amostra profunda separada vale mais que swab.", "Implante pode ser necessário para tratar a infecção por garantir estabilidade.", "Consolidação e erradicação são metas relacionadas, mas diferentes.", "Cobertura vascularizada é parte do controle do foco."],
  pitfalls: ["Remover implante sem plano mecânico.", "Reter implante solto.", "Chamar cultura única de confirmação automática.", "Usar antibiótico no lugar de desbridamento.", "Ignorar espaço morto e partes moles."],
  figures: [
    { id: "framework-completion:fri-diagnostico", caption: "Critérios confirmatórios e sugestivos do consenso FRI.", alt: "Quadro diagnóstico da infecção relacionada à fratura.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Metsemakers et al., Injury, 2018; Govaert et al., J Orthop Trauma, 2020." } },
    { id: "framework-completion:fri-estrategia", caption: "Retenção, troca ou supressão segundo estabilidade, união, biofilme e hospedeiro.", alt: "Fluxo de tratamento da infecção associada à fratura.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Metsemakers et al., Arch Orthop Trauma Surg, 2020." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Rockwood and Green's Fractures in Adults, 10a ed. (2024)", "Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, 6a ed. (2025)", "FRI Consensus 2018-2020"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024), infecção relacionada à fratura." },
});
