import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "tum-metastase-fratura-iminente",
  slug: "fratura-patologica-iminente",
  kind: "propedeutica",
  regionId: "tumores-e-metastases",
  bone: "Ossos longos",
  injury: "Risco de fratura patológica",
  title: "Fratura patológica iminente (Mirels)",
  subtitle: "Usar Mirels como triagem estruturada, reconhecer suas limitações e indicar estabilização pelo risco mecânico real.",
  laterality: null,
  status: "complete",
  overview: "Fratura patológica iminente é a lesão neoplásica que perdeu resistência suficiente para fraturar sob carga fisiológica. Estabilizar antes da fratura reduz dor, internação e morbidade, mas operar toda lesão lítica expõe pacientes a cirurgia desnecessária. Mirels organiza a triagem em quatro domínios de 1 a 3 pontos: sítio, dor, padrão radiográfico e tamanho relativo ao diâmetro do osso.\n\nA interpretação tradicional é: até 7 pontos, tratamento não operatório e vigilância; 8, julgamento clínico; 9 ou mais, considerar fortemente fixação profilática. A dor funcional, provocada por carga ou uso do membro, é o componente clínico mais importante. Lesão lítica, região pertrocantérica e comprometimento maior que dois terços do diâmetro elevam a pontuação.\n\nMirels tem alta sensibilidade, mas especificidade limitada, foi derivado em população pequena e não incorpora histologia, sobrevida, extensão cortical axial, terapia responsiva nem diferenças entre fêmur e úmero. Portanto, é ponto de partida, não autorização automática. TC e métodos de análise estrutural podem refinar casos limítrofes. Antes de qualquer fixação, confirmar que a lesão é metástase e não sarcoma primário.",
  keyFacts: [
    { label: "Domínios", value: "Sítio + dor + padrão + tamanho" },
    { label: "Pontuação", value: "Cada domínio recebe 1, 2 ou 3" },
    { label: "Leitura usual", value: "≤7 observar · 8 individualizar · ≥9 considerar fixação" },
    { label: "Dor", value: "Dor funcional pesa mais que dor leve em repouso" },
    { label: "Limitação", value: "Boa triagem, baixa especificidade; não prevê sobrevida" },
    { label: "Antes de fixar", value: "Diagnóstico, estadiamento e plano oncológico" },
  ],
  anatomy: { text: "A resistência óssea depende de geometria, continuidade cortical, localização e qualidade do tecido remanescente. Pequena lesão na face de tensão do colo femoral pode ser mais perigosa que lesão maior em segmento de baixa demanda. Comprometimento circunferencial e extensão longitudinal do córtex são mais informativos que diâmetro em uma única radiografia.\n\nNo Mirels, membro superior recebe 1, membro inferior 2 e região pertrocantérica 3. Dor leve recebe 1, moderada 2 e funcional 3. Lesão esclerótica recebe 1, mista 2 e lítica 3. Tamanho menor que um terço do diâmetro recebe 1, entre um e dois terços 2 e maior que dois terços 3.\n\nA pontuação não foi criada para tumores ósseos primários nem para coluna. No úmero, limiar e comportamento mecânico diferem; no fêmur proximal, imagem tridimensional e anatomia articular podem indicar artroplastia em vez de haste.", figureIds: ["framework-completion:mirels-score", "framework-completion:mirels-decisao"] },
  classification: [
    { id: "mirels", name: "Mirels", basis: "Quatro domínios clínico-radiográficos, cada um de 1 a 3 pontos.", types: [
      { code: "≤7", label: "Baixo risco pela escala", description: "Radioterapia/terapia sistêmica e vigilância, se diagnóstico e mecânica concordarem.", figureId: "framework-completion:mirels-decisao", figureVariant: "baixo" },
      { code: "8", label: "Zona de decisão", description: "Reavaliar dor funcional, córtex, local, prognóstico e imagem se necessário.", figureId: "framework-completion:mirels-decisao", figureVariant: "intermediario" },
      { code: "≥9", label: "Alto risco pela escala", description: "Considerar fortemente estabilização profilática após confirmar diagnóstico e benefício clínico.", figureId: "framework-completion:mirels-decisao", figureVariant: "alto" },
    ] },
  ],
  indications: {
    operative: ["Mirels 9 ou mais com expectativa e condição compatíveis com benefício.", "Dor funcional progressiva associada a destruição cortical relevante.", "Progressão apesar de radioterapia ou terapia sistêmica.", "Análise estrutural ou julgamento especializado indicando risco alto mesmo com escore menor."],
    nonOperative: ["Escore até 7, sem dor funcional nem perda cortical crítica.", "Lesão altamente responsiva a tratamento e mecanicamente estável, sob vigilância próxima.", "Risco cirúrgico ou expectativa de vida que tornam o procedimento desproporcional."],
    decisionNotes: "Pontuar não encerra a decisão. Pergunte: o diagnóstico está confirmado? a lesão realmente fraturará durante a vida do paciente? a cirurgia permitirá função melhor que radioterapia e analgesia? qual construção sobreviverá ao paciente? Casos de 8 pontos se beneficiam de TC e revisão multidisciplinar.",
  },
  approaches: [],
  technique: [
    { n: 1, title: "Confirmar diagnóstico e contexto", detail: "Revisar tumor primário, estadiamento, resposta esperada e biópsia. Lesão solitária desconhecida deve ser investigada antes de qualquer implante.", figureId: "framework-completion:mirels-decisao", tips: ["Não confunda história de câncer com prova etiológica"], pitfalls: ["Aplicar Mirels a sarcoma primário"] },
    { n: 2, title: "Pontuar os quatro domínios", detail: "Registrar sítio, intensidade funcional da dor, padrão lítico/misto/esclerótico e proporção do diâmetro comprometido.", figureId: "framework-completion:mirels-score", tips: ["Descrever cada componente torna o escore auditável"], pitfalls: ["Pontuar tamanho em incidência inadequada"] },
    { n: 3, title: "Examinar a mecânica real", detail: "Avaliar comprometimento cortical longitudinal e circunferencial, localização na face de tensão, progressão e extensão periarticular. Solicitar TC em caso limítrofe.", figureId: "framework-completion:mirels-decisao", tips: ["Dor ao apoio ou uso é sinal de instabilidade"], pitfalls: ["Usar total sem olhar a radiografia"] },
    { n: 4, title: "Integrar prognóstico e objetivo", detail: "Estimar sobrevida, riscos e tempo até benefício. Discutir radioterapia, terapia sistêmica e estabilização com o paciente e equipe.", tips: ["Profilaxia só é melhor se o paciente aproveitar a função"], pitfalls: ["Operar escore e não pessoa"] },
    { n: 5, title: "Escolher solução definitiva", detail: "Se operar, usar construção que permita carga imediata e trate toda a zona vulnerável; optar por endoprótese quando estoque articular é insuficiente.", figureId: "framework-completion:mirels-decisao", tips: ["Planejar adjuvância antes da cirurgia"], pitfalls: ["Fixação insuficiente ou curta"] },
  ],
  postop: { immobilization: "Mínima após estabilização estável.", weightBearing: "Carga ou uso precoce conforme construção é o objetivo.", rehab: [{ window: "Imediato", weightBearing: "Conforme tolerância", focus: "Dor, marcha/uso e prevenção tromboembólica." }, { window: "2-6 semanas", weightBearing: "Funcional", focus: "Autonomia e radioterapia pós-operatória quando indicada." }], followup: "Lesão não operada requer reavaliação clínica e radiográfica após terapia e diante de qualquer aumento da dor. Lesão operada é acompanhada quanto a ferida, implante e progressão." },
  complications: [
    { name: "Falso positivo", detail: "Cirurgia em lesão que não fraturaria expõe a complicações sem benefício.", prevention: "Integrar escore, mecânica, prognóstico e resposta ao tratamento." },
    { name: "Falso negativo", detail: "Fratura ocorre apesar de escore abaixo de 9.", prevention: "Valorizar dor funcional, córtex e progressão; usar TC em casos limítrofes." },
    { name: "Erro diagnóstico", detail: "Fixar tumor primário contamina o membro.", prevention: "Estadiar e biopsiar lesão solitária/atípica." },
    { name: "Falha do implante", detail: "Construção não suporta progressão ou sobrevida.", prevention: "Planejar durabilidade e adjuvância." },
  ],
  evidence: [
    { id: "mirels-1989", claim: "O sistema original combinou sítio, dor, padrão e tamanho para identificar risco de fratura em metástases de ossos longos.", takeaway: "Use os quatro domínios de forma explícita, lembrando a limitação da coorte derivadora.", level: "III", studyType: "Coorte derivadora de escore", era: "classico", citation: { authors: "Mirels H", title: "Metastatic disease in long bones. A proposed scoring system for diagnosing impending pathologic fractures", journal: "Clinical Orthopaedics and Related Research", year: 1989, pmid: "2684463" } },
    { id: "prophylactic-survival-2020", claim: "Em grande banco de veteranos, estabilização profilática foi associada a sobrevida diferente da cirurgia após fratura, embora confusão por seleção permaneça possível.", takeaway: "Prevenir a fratura pode reduzir morbidade, mas estudos observacionais não substituem seleção clínica.", level: "III", studyType: "Coorte retrospectiva nacional", era: "atual", citation: { authors: "Philipp TC, Mikula JD, Doung YC, et al.", title: "Is There an Association Between Prophylactic Femur Stabilization and Survival in Patients with Metastatic Bone Disease?", journal: "Clinical Orthopaedics and Related Research", year: 2020, pmid: "32168065", doi: "10.1097/CORR.0000000000000803" } },
    { id: "impending-complete-2022", claim: "Tratamento de lesões iminentes antes da fratura completa apresentou resultados clínicos mais favoráveis em coorte contemporânea.", takeaway: "Reconhecer risco verdadeiro cedo permite cirurgia planejada e reabilitação mais rápida.", level: "III", studyType: "Coorte comparativa", era: "atual", citation: { authors: "Groot OQ, Lans A, Twining PK, et al.", title: "Clinical Outcome Differences in the Treatment of Impending Versus Completed Pathological Long-Bone Fractures", journal: "The Journal of Bone and Joint Surgery. American Volume", year: 2022, pmid: "34851323", doi: "10.2106/JBJS.21.00711" } },
  ],
  pearls: ["Escreva os quatro componentes, não apenas o total.", "Dor funcional é um marcador mecânico.", "Oito pontos exigem decisão, não reflexo.", "Mirels não serve para coluna ou sarcoma primário.", "A melhor profilaxia inclui diagnóstico correto e construção durável."],
  pitfalls: ["Usar 9 como lei absoluta.", "Aplicar a qualquer lesão óssea.", "Ignorar comprometimento cortical axial.", "Não considerar sobrevida e resposta ao tratamento.", "Fixar antes de confirmar etiologia."],
  figures: [
    { id: "framework-completion:mirels-score", caption: "Quatro domínios de Mirels com pontuação de 1 a 3.", alt: "Tabela visual de sítio, dor, padrão radiográfico e tamanho no escore de Mirels.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Mirels, Clinical Orthopaedics and Related Research, 1989." } },
    { id: "framework-completion:mirels-decisao", caption: "Escore como triagem integrado a diagnóstico, mecânica e prognóstico.", alt: "Fluxo de decisão para observar, aprofundar avaliação ou estabilizar lesão iminente.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Mirels 1989; Groot et al., JBJS 2022." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, 6a ed. (2025)", "Mirels, CORR 1989", "Philipp et al., CORR 2020", "Groot et al., JBJS 2022"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), doença óssea metastática e fratura iminente." },
});
