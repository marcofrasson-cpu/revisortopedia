import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "inf-implante-periprotetica",
  slug: "infeccao-periprotetica",
  kind: "condicao",
  regionId: "infeccao-musculoesqueletica",
  bone: "Artroplastia de quadril e joelho",
  injury: "Infecção articular periprotética",
  title: "Infecção periprotética",
  subtitle: "Diagnosticar por critérios combinados, colher amostras profundas e escolher retenção ou revisão conforme biofilme, estabilidade e tecidos.",
  laterality: null,
  status: "complete",
  overview: "Infecção articular periprotética (IAP) é presença de microrganismos na interface de uma artroplastia com resposta inflamatória e biofilme. Pode apresentar-se de forma aguda, com dor, drenagem e febre, ou indolente, com dor e soltura sem sinais sistêmicos. Fístula comunicando com a prótese ou duas culturas profundas com o mesmo agente são critérios maiores. Na ausência deles, diagnóstico combina PCR/VHS, líquido sinovial, cultura, alfa-defensina, achados intraoperatórios e histologia.\n\nPunção deve preceder antibiótico no paciente estável. Contagem celular e porcentagem de neutrófilos variam com tempo após cirurgia, articulação e comorbidades; sangue na amostra e metalose alteram interpretação. Múltiplas amostras profundas são colhidas na cirurgia. Swab superficial e cultura isolada de baixa virulência não devem ser interpretados sem contexto.\n\nDesbridamento, antibiótico e retenção do implante (DAIR) é opção para infecção pós-operatória precoce ou hematogênica com poucos dias de sintomas, componentes bem fixos, tecidos favoráveis e agente tratável. Deve incluir sinovectomia ampla, desbridamento e troca dos componentes modulares. Infecção crônica, fístula, soltura, biofilme maduro ou agente difícil favorecem revisão em um ou dois tempos. A duração antimicrobiana depende da estratégia; ensaio recente não demonstrou não inferioridade de seis frente a doze semanas no conjunto de IAP tratadas cirurgicamente.",
  keyFacts: [
    { label: "Critério maior", value: "Fístula à prótese OU 2 culturas profundas com mesmo agente" },
    { label: "Diagnóstico", value: "Escore combinado sérico, sinovial, microbiológico e histológico" },
    { label: "DAIR", value: "Aguda + componentes fixos + bom tecido + agente tratável" },
    { label: "DAIR técnico", value: "Desbridamento amplo + troca de componentes modulares" },
    { label: "Revisão", value: "Crônica, solta, fístula, tecido ruim ou organismo difícil" },
    { label: "Culturas", value: "Múltiplas amostras profundas antes do antibiótico intraoperatório" },
  ],
  anatomy: { text: "Biofilme adere ao metal, polietileno, cimento e osso. Na fase madura, bactérias de baixo metabolismo resistem à imunidade e a concentrações antimicrobianas usuais; por isso a idade dos sintomas e a estabilidade dos componentes mudam a estratégia.\n\nNo quadril, abscessos podem seguir iliopsoas e planos fasciais. No joelho, sinovite extensa ocupa recessos e a cobertura anterior pode ser frágil. Radiografia pesquisa migração, osteólise e fratura, mas normalidade não exclui. Ultrassom auxilia punção do quadril; imagem avançada é seletiva.\n\nSonicação de componentes removidos pode aumentar rendimento em casos selecionados. Histologia de membrana periprotética agrega evidência. O diagnóstico deve ser estabelecido antes da revisão sempre que possível para planejar implantes, espaçador e antimicrobianos.", figureIds: ["framework-completion:iap-diagnostico", "framework-completion:iap-estrategia"] },
  classification: [
    { id: "tempo-iap", name: "Apresentação clínica e biofilme", basis: "Relação com cirurgia, duração dos sintomas e estabilidade.", types: [
      { code: "AP", label: "Aguda pós-operatória", description: "Início precoce após artroplastia; DAIR pode ser considerado se componentes e tecidos forem favoráveis.", figureId: "framework-completion:iap-estrategia", figureVariant: "aguda" },
      { code: "AH", label: "Aguda hematogênica", description: "Prótese previamente assintomática com início abrupto; investigar foco bacterêmico.", figureId: "framework-completion:iap-estrategia", figureVariant: "aguda" },
      { code: "C", label: "Crônica", description: "Sintomas prolongados, fístula, soltura ou biofilme maduro; revisão é usual.", figureId: "framework-completion:iap-estrategia", figureVariant: "cronica" },
    ] },
  ],
  indications: {
    operative: ["DAIR em infecção aguda com implantes estáveis, tecidos adequados e possibilidade de trocar módulos.", "Revisão em um tempo quando agente conhecido, tecidos bons e reconstrução segura em protocolo experiente.", "Revisão em dois tempos em infecção crônica complexa, agente difícil, perda óssea/tecidual ou diagnóstico incerto.", "Ressecção, artrodese ou amputação em salvamento selecionado."],
    nonOperative: ["Supressão antimicrobiana quando cirurgia curativa não é possível ou aceita.", "Não tratar cultura isolada sem critérios de infecção e correlação clínica.", "Otimização e investigação antes de revisão eletiva em paciente estável."],
    decisionNotes: "DAIR não é lavagem superficial. A chance cai com maior duração de sintomas, componente solto, fístula, tecido ruim e organismos de difícil tratamento. Revisão em um tempo exige seleção e equipe experiente. Dois tempos não garante cura e tem grande custo funcional; decisão é individual.",
  },
  approaches: [
    { id: "dair", name: "DAIR com troca modular", indication: "Infecção aguda, componentes fixos e tecidos viáveis.", interval: "Reutiliza acesso da artroplastia, com sinovectomia completa, desbridamento e troca de cabeça/liner ou inserto.", atRisk: ["Feixe neurovascular", "Mecanismo extensor", "Estabilidade da prótese", "Cobertura"], figureId: "framework-completion:iap-estrategia" },
    { id: "revisao", name: "Revisão em um ou dois tempos", indication: "Biofilme crônico, soltura ou falha de retenção.", interval: "Remoção completa de componentes e cimento, desbridamento, reconstrução imediata ou espaçador seguido de reimplante.", atRisk: ["Estoque ósseo", "Fratura", "Nervos", "Partes moles"], figureId: "framework-completion:iap-estrategia" },
  ],
  technique: [
    { n: 1, title: "Aplicar critérios diagnósticos", detail: "Avaliar fístula, PCR/VHS e radiografia; puncionar para contagem, diferencial e culturas. Integrar os critérios, sem depender de um teste.", figureId: "framework-completion:iap-diagnostico", tips: ["Repetir punção se resultado discordante e paciente estável"], pitfalls: ["Tratar PCR elevada isoladamente"] },
    { n: 2, title: "Definir idade do biofilme", detail: "Registrar data da artroplastia, início dos sintomas, drenagem, estabilidade, agente e qualidade das partes moles.", figureId: "framework-completion:iap-estrategia", tips: ["Duração dos sintomas é mais útil que rótulo precoce/tardio isolado"], pitfalls: ["Indicar DAIR em componente solto"] },
    { n: 3, title: "Coletar amostras", detail: "Na cirurgia, obter múltiplas amostras profundas com instrumentos separados antes do antibiótico, salvo sepse. Considerar histologia e sonicação.", figureId: "framework-completion:iap-diagnostico", tips: ["Identificar cada sítio separadamente"], pitfalls: ["Basear-se em swab de fístula"] },
    { n: 4, title: "Executar estratégia sem atalhos", detail: "No DAIR, remover tecido necrótico, irrigar e trocar todos os módulos possíveis. Na revisão, remover componentes, cimento e membranas, preservando estoque viável.", figureId: "framework-completion:iap-estrategia", tips: ["Trocar luvas, campos e instrumentos antes da reconstrução"], pitfalls: ["Reter liner ou inserto contaminado"] },
    { n: 5, title: "Integrar antimicrobianos", detail: "Direcionar terapia ao agente, estratégia e biofilme com infectologia; monitorar interações e toxicidade. Planejar supressão quando erradicação não é realista.", tips: ["Rifampicina nunca deve ser usada isoladamente"], pitfalls: ["Usar antibiótico para compensar desbridamento inadequado"] },
  ],
  postop: { immobilization: "Conforme estabilidade, retalho e revisão; minimizar quando seguro.", weightBearing: "Segundo reconstrução e risco de fratura; DAIR geralmente permite carga precoce.", rehab: [{ window: "0-2 semanas", weightBearing: "Conforme construção", focus: "Ferida, culturas, mobilidade e ajuste antimicrobiano." }, { window: "2-12 semanas", weightBearing: "Progressiva", focus: "Função, toxicidade e sinais de persistência." }, { window: "Após tratamento", weightBearing: "Individualizada", focus: "Remissão, durabilidade da revisão e qualidade de vida." }], followup: "Seguimento clínico prolongado. Não existe teste único de cura; observar dor, drenagem, função, tendência laboratorial e implantes. Antes de reimplante em dois tempos, integrar toda a evolução em vez de exigir um marcador perfeito." },
  complications: [
    { name: "Persistência ou recidiva", detail: "Biofilme residual, agente difícil ou tecidos ruins mantêm infecção.", prevention: "Seleção correta da estratégia e execução completa." },
    { name: "Fratura e perda óssea", detail: "Remoção de implante/cimento pode causar grande defeito.", prevention: "Planejamento de extração e opções reconstrutivas." },
    { name: "Luxação ou instabilidade", detail: "Partes moles e componentes revisados alteram estabilidade.", prevention: "Restaurar tensão, posição e mecanismos estabilizadores." },
    { name: "Toxicidade antimicrobiana", detail: "Cursos longos e combinações causam eventos adversos.", prevention: "Terapia dirigida e monitorização laboratorial." },
    { name: "Falha de cobertura", detail: "Drenagem persistente expõe prótese e inviabiliza retenção.", prevention: "Intervenção precoce e cobertura robusta." },
  ],
  evidence: [
    { id: "pji-definition-2018", claim: "A definição de 2018 validou critérios maiores e um escore ponderado com testes séricos, sinoviais e intraoperatórios.", takeaway: "Diagnóstico de IAP é probabilístico e combinado, exceto quando há critério maior.", level: "II", studyType: "Estudo diagnóstico multicêntrico e definição validada", era: "atual", citation: { authors: "Parvizi J, Tan TL, Goswami K, et al.", title: "The 2018 Definition of Periprosthetic Hip and Knee Infection: An Evidence-Based and Validated Criteria", journal: "The Journal of Arthroplasty", year: 2018, pmid: "29551303", doi: "10.1016/j.arth.2018.02.078" } },
    { id: "dair-modular-2020", claim: "Em 575 quadris, troca de componentes modulares durante DAIR foi associada a maior sucesso.", takeaway: "DAIR deve trocar cabeça/liner ou módulos acessíveis; lavagem com tudo retido é inferior.", level: "III", studyType: "Coorte observacional", era: "atual", citation: { authors: "Svensson K, Rolfson O, Kärrholm J, et al.", title: "Exchange of Modular Components Improves Success of Debridement, Antibiotics, and Implant Retention", journal: "JBJS Open Access", year: 2020, pmid: "33376927", doi: "10.2106/JBJS.OA.20.00110" } },
    { id: "pji-6-vs-12-2021", claim: "Seis semanas de antibiótico não demonstraram não inferioridade frente a doze semanas em IAP tratada cirurgicamente.", takeaway: "Não encurtar por rotina; duração depende da estratégia e do risco de falha.", level: "I", studyType: "Ensaio clínico randomizado de não inferioridade", era: "atual", citation: { authors: "Bernard L, Arvieux C, Brunschweiler B, et al.", title: "Antibiotic Therapy for 6 or 12 Weeks for Prosthetic Joint Infection", journal: "The New England Journal of Medicine", year: 2021, pmid: "34042388", doi: "10.1056/NEJMoa2020198" } },
  ],
  pearls: ["Fístula à prótese é infecção até prova.", "Punção vem antes do antibiótico no estável.", "DAIR exige componente fixo e troca modular.", "Duração dos sintomas reflete maturidade do biofilme.", "Não existe exame único que prove cura."],
  pitfalls: ["Tratar swab superficial.", "Usar um ponto de corte fora do contexto pós-operatório.", "Fazer DAIR em prótese solta.", "Reter componentes modulares.", "Prolongar antibiótico sem estratégia de foco."],
  figures: [
    { id: "framework-completion:iap-diagnostico", caption: "Critérios maiores e integração dos testes pré e intraoperatórios.", alt: "Fluxo diagnóstico da infecção articular periprotética.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Parvizi et al., Journal of Arthroplasty, 2018." } },
    { id: "framework-completion:iap-estrategia", caption: "Escolha entre DAIR, revisão em um tempo, dois tempos ou supressão.", alt: "Algoritmo de estratégia cirúrgica para infecção periprotética aguda e crônica.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's Operative Orthopaedics, 14a ed.; Svensson et al., 2020." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, 6a ed. (2025)", "Parvizi et al., J Arthroplasty 2018", "Svensson et al., JBJS OA 2020", "Bernard et al., NEJM 2021"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), infecção articular periprotética." },
});
