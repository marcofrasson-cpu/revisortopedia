import { defineQuestions } from "../../types/question";

/* Banco ORIGINAL de questões estilo TEOT — membro inferior. Redigidas a partir
   do conteúdo baseado em evidência do app. Gabarito comentado + referência. */

export const membroInferiorQuestions = defineQuestions([
  // ── Tornozelo ────────────────────────────────────────────────────────────
  {
    id: "q-tornozelo-1",
    topicSlug: "fratura-maleolar-tornozelo",
    regionId: "membro-inferior",
    difficulty: "intermediária",
    tags: ["tornozelo", "sindesmose"],
    stem: "Homem de 32 anos com fratura Weber C e instabilidade sindesmótica confirmada no intraoperatório. Sobre a fixação da sindesmose, a melhor evidência atual indica:",
    options: [
      { key: "A", text: "Parafuso sindesmótico tricortical é superior por manter a redução a longo prazo" },
      { key: "B", text: "Dispositivo de botão-sutura (suture button) associa-se a melhor escore funcional e menor taxa de má-redução" },
      { key: "C", text: "A sindesmose não deve ser fixada em fraturas Weber C" },
      { key: "D", text: "A imobilização gessada isolada é suficiente" },
    ],
    correct: "B",
    explanation:
      "Meta-análise de RCTs mostrou que o suture button resultou em melhor AOFAS e menores taxas de má-redução (0,8% vs 11,5%) e de quebra/retirada de implante em comparação ao parafuso. A longo prazo (RCT com ~7 anos) a manutenção da redução se equipara, mas o botão-sutura tem vantagem funcional precoce e menos reoperações.",
    reference: "Shimozono Y et al. Am J Sports Med. 2018 — DOI 10.1177/0363546518804804",
  },
  {
    id: "q-tornozelo-2",
    topicSlug: "fratura-maleolar-tornozelo",
    regionId: "membro-inferior",
    difficulty: "avançada",
    tags: ["tornozelo", "idoso"],
    stem: "Mulher de 79 anos, frágil, com fratura instável do tornozelo e pele de risco. Com base no melhor nível de evidência para essa população, uma alternativa válida à fixação cirúrgica imediata é:",
    options: [
      { key: "A", text: "Casting de contato próximo (close contact casting), com desfecho funcional equivalente e menos infecção de ferida" },
      { key: "B", text: "Artrodese tibiotalar primária" },
      { key: "C", text: "Fixação externa definitiva por 12 semanas" },
      { key: "D", text: "Tração esquelética transcalcânea" },
    ],
    correct: "A",
    explanation:
      "O RCT AIM (Willett) mostrou, em >60 anos com fratura instável, função equivalente (OMAS aos 6 meses) entre casting de contato próximo e cirurgia, com menos infecção/deiscência (1% vs 10%), porém mais má-união radiográfica (15% vs 3%). É opção razoável no idoso frágil com envelope de partes moles ruim.",
    reference: "Willett K et al. JAMA. 2016 — DOI 10.1001/jama.2016.14719",
  },
  {
    id: "q-tornozelo-3",
    topicSlug: "fratura-maleolar-tornozelo",
    regionId: "membro-inferior",
    difficulty: "básica",
    tags: ["tornozelo", "estabilidade"],
    stem: "Qual achado radiográfico sugere lesão do ligamento deltoide e instabilidade em uma fratura isolada do maléolo lateral, indicando tratamento cirúrgico?",
    options: [
      { key: "A", text: "Ângulo de Böhler reduzido" },
      { key: "B", text: "Alargamento do espaço claro medial (> 4 mm ou maior que o lado contralateral)" },
      { key: "C", text: "Sinal do fleck na base do 2º metatarso" },
      { key: "D", text: "Linha de Shenton interrompida" },
    ],
    correct: "B",
    explanation:
      "O espaço claro medial alargado (>4 mm ou assimétrico ao contralateral, melhor avaliado em estresse/gravidade) indica insuficiência do deltoide e desvio talar — marcador de instabilidade que converte uma fratura aparentemente isolada do maléolo lateral em lesão instável, com indicação cirúrgica.",
    reference: "Conteúdo: fratura maleolar do tornozelo — indicações de instabilidade",
  },

  // ── Colo femoral ───────────────────────────────────────────────────────────
  {
    id: "q-colo-1",
    topicSlug: "fratura-colo-femoral",
    regionId: "membro-inferior",
    difficulty: "básica",
    tags: ["quadril", "jovem"],
    stem: "Homem de 28 anos, politraumatizado, com fratura desviada do colo femoral (Garden III). A conduta de escolha é:",
    options: [
      { key: "A", text: "Artroplastia total do quadril" },
      { key: "B", text: "Redução anatômica urgente e fixação interna para preservar a cabeça femoral" },
      { key: "C", text: "Tratamento conservador com carga protegida" },
      { key: "D", text: "Hemiartroplastia" },
    ],
    correct: "B",
    explanation:
      "No jovem, a preservação da cabeça é prioritária. A fratura desviada do colo é uma urgência de redução anatômica (aberta se necessário) e fixação estável, aceitando o risco de necrose avascular/pseudartrose. Artroplastia é reservada ao idoso ou à falha.",
    reference: "Conteúdo: fratura do colo femoral — indicações no jovem",
  },
  {
    id: "q-colo-2",
    topicSlug: "fratura-colo-femoral",
    regionId: "membro-inferior",
    difficulty: "avançada",
    tags: ["quadril", "artroplastia", "idoso"],
    stem: "Idoso ativo e independente de 72 anos com fratura desviada do colo femoral. Comparando artroplastia total (ATQ) e hemiartroplastia, o RCT HEALTH demonstrou:",
    options: [
      { key: "A", text: "Redução significativa da mortalidade com ATQ" },
      { key: "B", text: "Ausência de diferença clinicamente importante na reoperação em 24 meses, com tendência a melhor função com ATQ em pacientes ativos" },
      { key: "C", text: "Maior taxa de infecção com hemiartroplastia" },
      { key: "D", text: "Superioridade da fixação interna sobre ambas" },
    ],
    correct: "B",
    explanation:
      "O HEALTH não mostrou diferença clinicamente importante em reoperação entre ATQ e hemiartroplastia em ~24 meses; a ATQ tendeu a oferecer função e qualidade de vida modestamente melhores, sendo preferida no idoso ativo e independente.",
    reference: "HEALTH Investigators. N Engl J Med. 2019 — DOI 10.1056/NEJMoa1906190",
  },
  {
    id: "q-colo-3",
    topicSlug: "fratura-colo-femoral",
    regionId: "membro-inferior",
    difficulty: "intermediária",
    tags: ["quadril", "fixação"],
    stem: "Sobre a fixação interna da fratura do colo femoral, o RCT FAITH comparou parafusos canulados múltiplos ao parafuso deslizante (DHS). Qual afirmação é correta?",
    options: [
      { key: "A", text: "O DHS eliminou a necrose avascular" },
      { key: "B", text: "Não houve diferença global na reoperação em 24 meses; subgrupos (fumantes, fratura basocervical, desviada) podem se beneficiar do DHS" },
      { key: "C", text: "Parafusos canulados dobraram a mortalidade" },
      { key: "D", text: "O estudo favoreceu artroplastia sobre fixação em todos" },
    ],
    correct: "B",
    explanation:
      "O FAITH não encontrou diferença global na reoperação entre parafusos canulados e DHS em 24 meses; análises de subgrupo sugerem vantagem do DHS em fumantes, fraturas basocervicais e algumas desviadas. A escolha considera fatores do paciente e da fratura.",
    reference: "FAITH Investigators. Lancet. 2017 — DOI 10.1016/S0140-6736(17)30066-1",
  },

  // ── Transtrocantérica ───────────────────────────────────────────────────────
  {
    id: "q-transtro-1",
    topicSlug: "fratura-transtrocanteriana",
    regionId: "membro-inferior",
    difficulty: "intermediária",
    tags: ["quadril", "implante"],
    stem: "Fratura transtrocantérica instável com fragmentação e parede lateral incompetente. O implante mais apropriado é:",
    options: [
      { key: "A", text: "Parafuso deslizante do quadril (DHS) isolado" },
      { key: "B", text: "Haste cefalomedular" },
      { key: "C", text: "Placa de compressão dinâmica reta" },
      { key: "D", text: "Fixador externo" },
    ],
    correct: "B",
    explanation:
      "A integridade da parede lateral é determinante: em fraturas instáveis com parede lateral incompetente (ou traço reverso/subtrocantérico), a haste cefalomedular é preferível ao DHS, que depende da parede lateral e pode levar a medialização e falha.",
    reference: "Conteúdo: fratura transtrocantérica — parede lateral / escolha de implante",
  },
  {
    id: "q-transtro-2",
    topicSlug: "fratura-transtrocanteriana",
    regionId: "membro-inferior",
    difficulty: "básica",
    tags: ["quadril"],
    stem: "Fratura transtrocantérica estável (AO/OTA 31A1) com parede lateral íntegra. Uma opção adequada e custo-efetiva é:",
    options: [
      { key: "A", text: "DHS (parafuso deslizante do quadril)" },
      { key: "B", text: "Artroplastia total" },
      { key: "C", text: "Tração por 6 semanas" },
      { key: "D", text: "Placa bloqueada de fêmur distal" },
    ],
    correct: "A",
    explanation:
      "Em padrões estáveis com parede lateral íntegra, o DHS permite compressão dinâmica controlada e é opção eficaz e econômica. Hastes cefalomedulares brilham nos padrões instáveis.",
    reference: "Conteúdo: fratura transtrocantérica — padrões estáveis",
  },

  // ── Diáfise femoral ─────────────────────────────────────────────────────────
  {
    id: "q-diafise-femur-1",
    topicSlug: "fratura-diafise-femoral",
    regionId: "membro-inferior",
    difficulty: "básica",
    tags: ["fêmur"],
    stem: "Adulto jovem com fratura fechada da diáfise femoral isolada. O tratamento padrão-ouro é:",
    options: [
      { key: "A", text: "Placa em ponte anterolateral" },
      { key: "B", text: "Haste intramedular fresada, bloqueada" },
      { key: "C", text: "Fixador externo definitivo" },
      { key: "D", text: "Tração esquelética até consolidação" },
    ],
    correct: "B",
    explanation:
      "A haste intramedular fresada e bloqueada é o padrão-ouro para fraturas diafisárias do fêmur, com altas taxas de consolidação e retorno funcional. Fixador externo costuma ser temporário (controle de danos).",
    reference: "Conteúdo: fratura da diáfise femoral — princípios",
  },
  {
    id: "q-diafise-femur-2",
    topicSlug: "fratura-diafise-femoral",
    regionId: "membro-inferior",
    difficulty: "avançada",
    tags: ["fêmur", "damage control"],
    stem: "Politraumatizado instável (borderline) com fratura de fêmur. A estratégia inicial mais segura costuma ser:",
    options: [
      { key: "A", text: "Haste intramedular definitiva imediata em todos os casos" },
      { key: "B", text: "Controle de danos ortopédico (fixador externo temporário) e conversão para haste após estabilização fisiológica" },
      { key: "C", text: "Aguardar 3 semanas em tração antes de qualquer fixação" },
      { key: "D", text: "Amputação precoce" },
    ],
    correct: "B",
    explanation:
      "No paciente instável/borderline, o controle de danos ortopédico (fixação externa temporária) reduz o segundo insulto (hit) e a resposta inflamatória; a conversão para haste definitiva ocorre após a estabilização fisiológica. A fixação precoce definitiva é apropriada no paciente estável/ressuscitado.",
    reference: "Conteúdo: fratura da diáfise femoral — timing / controle de danos",
  },

  // ── Diáfise tibial ──────────────────────────────────────────────────────────
  {
    id: "q-tibia-1",
    topicSlug: "fratura-diafise-tibial",
    regionId: "membro-inferior",
    difficulty: "intermediária",
    tags: ["tíbia", "exposta"],
    stem: "Fratura exposta da diáfise tibial. Qual medida tem maior impacto na redução do risco de infecção?",
    options: [
      { key: "A", text: "Fechamento primário imediato da ferida em qualquer grau" },
      { key: "B", text: "Administração precoce de antibiótico (idealmente na 1ª hora) e desbridamento adequado" },
      { key: "C", text: "Uso rotineiro de fixador externo definitivo" },
      { key: "D", text: "Iniciar antibiótico apenas após a cultura" },
    ],
    correct: "B",
    explanation:
      "O tempo até a primeira dose de antibiótico é dos fatores mais fortemente associados à redução de infecção na fratura exposta; associa-se a desbridamento adequado e cobertura de partes moles oportuna. O tipo/tempo de fixação é individualizado.",
    reference: "Conteúdo: fratura da diáfise tibial — fratura exposta (Gustilo)",
  },
  {
    id: "q-tibia-2",
    topicSlug: "fratura-diafise-tibial",
    regionId: "membro-inferior",
    difficulty: "básica",
    tags: ["tíbia", "compartimental"],
    stem: "Paciente com fratura de tíbia queixa-se de dor progressiva e desproporcional, agravada ao estiramento passivo dos dedos. A hipótese e conduta corretas são:",
    options: [
      { key: "A", text: "Trombose venosa profunda — anticoagular" },
      { key: "B", text: "Síndrome compartimental — fasciotomia de urgência" },
      { key: "C", text: "Consolidação viciosa — observar" },
      { key: "D", text: "Neuropraxia — reavaliar em 48 h" },
    ],
    correct: "B",
    explanation:
      "Dor desproporcional e dor ao estiramento passivo são os sinais mais precoces e sensíveis de síndrome compartimental. A ausência de pulso é tardia. O tratamento é fasciotomia de urgência; a espera por pressão elevada não deve atrasar a descompressão clínica.",
    reference: "Conteúdo: fratura da diáfise tibial — síndrome compartimental",
  },

  // ── Calcâneo ────────────────────────────────────────────────────────────────
  {
    id: "q-calcaneo-1",
    topicSlug: "fratura-calcaneo",
    regionId: "membro-inferior",
    difficulty: "intermediária",
    tags: ["pé", "calcâneo"],
    stem: "Sobre a fratura intra-articular do calcâneo, assinale a associação correta:",
    options: [
      { key: "A", text: "Classificação de Sanders baseada em radiografia simples em perfil" },
      { key: "B", text: "Classificação de Sanders baseada na TC coronal (número de fragmentos da faceta posterior); ângulo de Böhler reduzido indica afundamento articular" },
      { key: "C", text: "Ângulo de Gissane aumentado é patognomônico de fratura extra-articular" },
      { key: "D", text: "O tratamento cirúrgico está sempre indicado independentemente das partes moles" },
    ],
    correct: "B",
    explanation:
      "A classificação de Sanders usa a TC coronal (nº de fragmentos articulares da faceta posterior). O ângulo de Böhler reduzido reflete afundamento/perda de altura. A decisão cirúrgica depende criticamente do envelope de partes moles (flictenas).",
    reference: "Conteúdo: fratura do calcâneo — Sanders / Böhler",
  },
  {
    id: "q-calcaneo-2",
    topicSlug: "fratura-calcaneo",
    regionId: "membro-inferior",
    difficulty: "avançada",
    tags: ["pé", "calcâneo", "via"],
    stem: "Ao optar por fixação de fratura do calcâneo, qual via se associa a menor taxa de complicação de ferida em comparação à extensível lateral?",
    options: [
      { key: "A", text: "Via extensível lateral ampliada" },
      { key: "B", text: "Via do seio do tarso (minimamente invasiva)" },
      { key: "C", text: "Via medial de McReynolds isolada" },
      { key: "D", text: "Via posterior" },
    ],
    correct: "B",
    explanation:
      "A via do seio do tarso, menos invasiva, reduz as complicações de ferida (deiscência/necrose de borda) frequentes na abordagem extensível lateral, mantendo redução articular satisfatória em muitos padrões — especialmente relevante em pacientes de risco (tabagistas, diabéticos).",
    reference: "Conteúdo: fratura do calcâneo — vias de acesso",
  },

  // ── Tálus ───────────────────────────────────────────────────────────────────
  {
    id: "q-talus-1",
    topicSlug: "fratura-talus",
    regionId: "membro-inferior",
    difficulty: "intermediária",
    tags: ["pé", "tálus", "necrose"],
    stem: "Seis a oito semanas após fixação de fratura do colo do tálus, observa-se lucência subcondral na cúpula talar à radiografia (sinal de Hawkins). Isso indica:",
    options: [
      { key: "A", text: "Necrose avascular estabelecida — indicar artrodese" },
      { key: "B", text: "Reabsorção óssea subcondral por hiperemia — sugere vascularização preservada e menor risco de necrose" },
      { key: "C", text: "Consolidação viciosa" },
      { key: "D", text: "Infecção profunda" },
    ],
    correct: "B",
    explanation:
      "O sinal de Hawkins (lucência subcondral por reabsorção secundária à hiperemia do osso viável) é sinal de bom prognóstico: sua presença sugere vascularização preservada e menor risco de necrose avascular. Sua ausência aumenta a suspeita de NAV.",
    reference: "Conteúdo: fratura do tálus — sinal de Hawkins",
  },
  {
    id: "q-talus-2",
    topicSlug: "fratura-talus",
    regionId: "membro-inferior",
    difficulty: "básica",
    tags: ["pé", "tálus"],
    stem: "Fratura desviada do colo do tálus (Hawkins III). Princípio de tratamento:",
    options: [
      { key: "A", text: "Redução anatômica e fixação, de forma oportuna, para restaurar o alinhamento e minimizar necrose/artrose" },
      { key: "B", text: "Imobilização gessada por 12 semanas" },
      { key: "C", text: "Talectomia primária" },
      { key: "D", text: "Carga total imediata" },
    ],
    correct: "A",
    explanation:
      "Fraturas desviadas do colo do tálus exigem redução anatômica e fixação estável (frequentemente por dupla via anteromedial + anterolateral) para restaurar o alinhamento e a congruência, reduzindo o risco de necrose avascular e artrose pós-traumática.",
    reference: "Conteúdo: fratura do tálus — Hawkins / conduta",
  },

  // ── Luxação do joelho ──────────────────────────────────────────────────────
  {
    id: "q-luxjoelho-1",
    topicSlug: "luxacao-joelho",
    regionId: "membro-inferior",
    difficulty: "avançada",
    tags: ["joelho", "vascular", "emergência"],
    stem: "Paciente com luxação do joelho reduzida, pulsos pedioso e tibial posterior palpáveis. A conduta vascular mais apropriada é:",
    options: [
      { key: "A", text: "Alta, pois pulsos presentes excluem lesão vascular" },
      { key: "B", text: "Medir o índice tornozelo-braquial (ITB/ABI); se < 0,9, prosseguir com angiotomografia/avaliação vascular" },
      { key: "C", text: "Arteriografia invasiva em todos os casos" },
      { key: "D", text: "Fasciotomia profilática imediata" },
    ],
    correct: "B",
    explanation:
      "A luxação do joelho é emergência pelo risco de lesão da artéria poplítea, que pode ocorrer mesmo com pulsos presentes (lesão intimal). O protocolo baseado no ITB (ABI): se < 0,9, imagem vascular (angioTC). Exame vascular seriado é mandatório.",
    reference: "Conteúdo: luxação do joelho — protocolo vascular (ABI)",
  },
  {
    id: "q-luxjoelho-2",
    topicSlug: "luxacao-joelho",
    regionId: "membro-inferior",
    difficulty: "intermediária",
    tags: ["joelho", "nervo"],
    stem: "Além da lesão vascular, qual estrutura neurológica é mais comumente lesada na luxação do joelho, sobretudo nas lesões posterolaterais?",
    options: [
      { key: "A", text: "Nervo tibial" },
      { key: "B", text: "Nervo fibular comum" },
      { key: "C", text: "Nervo safeno" },
      { key: "D", text: "Nervo femoral" },
    ],
    correct: "B",
    explanation:
      "O nervo fibular comum é o mais frequentemente lesado na luxação do joelho, particularmente nas lesões do canto posterolateral, cursando com pé caído. Deve ser documentado no exame inicial.",
    reference: "Conteúdo: luxação do joelho — lesões associadas",
  },

  // ── Ruptura do tendão de Aquiles ───────────────────────────────────────────
  {
    id: "q-aquiles-1",
    topicSlug: "ruptura-tendao-aquiles",
    regionId: "membro-inferior",
    difficulty: "básica",
    tags: ["tendão", "aquiles", "exame"],
    stem: "Qual manobra semiológica é usada para diagnosticar a ruptura completa aguda do tendão de Aquiles?",
    options: [
      { key: "A", text: "Teste de Lachman" },
      { key: "B", text: "Teste de Thompson (compressão da panturrilha) — ausência de flexão plantar indica ruptura" },
      { key: "C", text: "Teste de McMurray" },
      { key: "D", text: "Sinal de Tinel" },
    ],
    correct: "B",
    explanation:
      "No teste de Thompson (Simmonds), a compressão da panturrilha com o paciente em decúbito ventral normalmente produz flexão plantar; sua ausência indica descontinuidade do tendão de Aquiles. Associa-se a gap palpável e queda de força de flexão plantar.",
    reference: "Conteúdo: ruptura do tendão de Aquiles — exame",
  },
  {
    id: "q-aquiles-2",
    topicSlug: "ruptura-tendao-aquiles",
    regionId: "membro-inferior",
    difficulty: "avançada",
    tags: ["tendão", "aquiles", "conduta"],
    stem: "Sobre o tratamento da ruptura aguda do tendão de Aquiles, o RCT multicêntrico (Myhrvold, NEJM 2022) comparando não-operatório, reparo aberto e cirurgia minimamente invasiva mostrou:",
    options: [
      { key: "A", text: "Cirurgia aberta claramente superior em função aos 12 meses" },
      { key: "B", text: "Ausência de diferença no escore funcional (ATRS) aos 12 meses entre os grupos; rerruptura maior no não-operatório (6,2% vs 0,6%)" },
      { key: "C", text: "Não-operatório com o dobro da função da cirurgia" },
      { key: "D", text: "Cirurgia minimamente invasiva sem risco de lesão nervosa" },
    ],
    correct: "B",
    explanation:
      "O estudo não mostrou diferença no ATRS aos 12 meses entre não-operatório, reparo aberto e MIS. A rerruptura foi maior no não-operatório (6,2% vs 0,6%), enquanto lesão nervosa foi mais comum na MIS. A decisão é compartilhada, considerando reabilitação funcional precoce.",
    reference: "Myhrvold SB et al. N Engl J Med. 2022 — DOI 10.1056/NEJMoa2108447",
  },
  {
    id: "q-aquiles-3",
    topicSlug: "ruptura-tendao-aquiles",
    regionId: "membro-inferior",
    difficulty: "intermediária",
    tags: ["tendão", "aquiles", "reabilitação"],
    stem: "O manejo não-operatório moderno da ruptura do Aquiles tornou-se competitivo com a cirurgia principalmente devido a:",
    options: [
      { key: "A", text: "Imobilização gessada rígida prolongada em equino por 12 semanas" },
      { key: "B", text: "Protocolos de reabilitação funcional acelerada (carga precoce e mobilização), que reduzem a diferença de rerruptura em relação à cirurgia" },
      { key: "C", text: "Uso rotineiro de fatores de crescimento" },
      { key: "D", text: "Tenotomia percutânea" },
    ],
    correct: "B",
    explanation:
      "RCTs (Willits) e meta-análises (Ochen) mostram que, quando se usa reabilitação funcional acelerada com carga e mobilização precoces, a diferença de rerruptura entre não-operatório e cirurgia se estreita e as complicações cirúrgicas (infecção) são evitadas.",
    reference: "Willits K et al. J Bone Joint Surg Am. 2010 — DOI 10.2106/JBJS.I.01401",
  },

  // ── Anel pélvico ────────────────────────────────────────────────────────────
  {
    id: "q-pelve-1",
    topicSlug: "fratura-anel-pelvico",
    regionId: "membro-inferior",
    difficulty: "intermediária",
    tags: ["pelve", "hemorragia"],
    stem: "Paciente com fratura do anel pélvico tipo livro-aberto (APC) e instabilidade hemodinâmica. A medida inicial de reanimação/ortopédica mais apropriada é:",
    options: [
      { key: "A", text: "Fixação interna definitiva imediata das colunas" },
      { key: "B", text: "Cinta/binder pélvico (ou fixador externo) para fechar o volume pélvico, dentro de protocolo de controle de hemorragia" },
      { key: "C", text: "Tração cutânea bilateral" },
      { key: "D", text: "Observação com repouso" },
    ],
    correct: "B",
    explanation:
      "Na lesão em livro-aberto com instabilidade hemodinâmica, fechar o volume pélvico com binder/fixador externo é a medida inicial para reduzir sangramento venoso/ósseo, integrada ao protocolo de hemorragia (transfusão maciça, angioembolização ou packing pré-peritoneal conforme o serviço).",
    reference: "Conteúdo: fratura do anel pélvico — controle de hemorragia",
  },

  // ── Acetábulo ───────────────────────────────────────────────────────────────
  {
    id: "q-acetabulo-1",
    topicSlug: "fratura-acetabulo",
    regionId: "membro-inferior",
    difficulty: "intermediária",
    tags: ["acetábulo", "via"],
    stem: "Fratura isolada da parede posterior do acetábulo com fragmento articular deslocado. A via de acesso classicamente indicada é:",
    options: [
      { key: "A", text: "Ilioinguinal" },
      { key: "B", text: "Kocher-Langenbeck (posterior)" },
      { key: "C", text: "Stoppa modificada (intrapélvica anterior)" },
      { key: "D", text: "Smith-Petersen" },
    ],
    correct: "B",
    explanation:
      "A via Kocher-Langenbeck dá acesso à coluna e parede posteriores, sendo a escolha para fraturas da parede posterior. Vias anteriores (ilioinguinal, Stoppa) são para lesões da coluna/parede anterior; a classificação de Judet-Letournel orienta a via.",
    reference: "Conteúdo: fratura do acetábulo — Judet-Letournel / vias",
  },
]);
