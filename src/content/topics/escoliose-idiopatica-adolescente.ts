import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "col-deformidade-eia",
  slug: "escoliose-idiopatica-adolescente",
  kind: "condicao",
  regionId: "coluna",
  bone: "Coluna",
  injury: "Escoliose idiopática do adolescente",
  title: "Escoliose idiopática do adolescente",
  subtitle:
    "Medir Cobb, estimar crescimento por Sanders/Risser, classificar curvas estruturais por Lenke e tratar o risco de progressão com observação, colete ou artrodese seletiva.",
  laterality: null,
  status: "complete",
  overview:
    "Escoliose idiopática do adolescente (EIA) é uma deformidade tridimensional da coluna que surge após os 10 anos, sem causa neuromuscular, congênita ou sindrômica identificável. Define-se radiograficamente por ângulo de Cobb de pelo menos 10 graus, mas a rotação vertebral e a alteração sagital fazem parte da doença. A assimetria no teste de Adams é o sinal clínico mais sensível; dor intensa, déficit neurológico, curva torácica esquerda ou progressão muito rápida são atípicos e exigem investigação adicional.\n\nA decisão não depende apenas do Cobb atual. O risco de progressão resulta da combinação entre magnitude, padrão da curva e crescimento remanescente. Uma curva de 25 graus em paciente Sanders 2 tem risco muito diferente da mesma curva em Risser 5. O estágio de Sanders, baseado na mão, acompanha melhor o pico de velocidade de crescimento; Risser e cartilagem trirradiada continuam úteis, porém são menos precisos no período de aceleração.\n\nCurvas leves são observadas. Curvas de aproximadamente 20 a 40 graus em paciente ainda em crescimento e com risco de progressão recebem colete toracolombossacro; o BrAIST demonstrou relação dose-resposta entre horas de uso e sucesso. Cirurgia é considerada em curvas progressivas próximas de 45 a 50 graus ou maiores, sobretudo com crescimento remanescente, desequilíbrio ou deformidade que seguirá progredindo na vida adulta. A classificação de Lenke organiza quais curvas são estruturais e, portanto, quais devem entrar na artrodese, evitando tanto deixar uma curva estrutural fora quanto fundir segmentos móveis sem necessidade.",
  keyFacts: [
    { label: "Definição", value: "Cobb ≥ 10° com rotação vertebral, após os 10 anos, sem causa secundária identificável" },
    { label: "Rastreamento", value: "Teste de Adams + escoliômetro; radiografia confirma e mede" },
    { label: "Progressão", value: "Maior com crescimento remanescente, Cobb maior e curva torácica" },
    { label: "Maturidade", value: "Sanders é mais sensível ao pico de crescimento; Risser complementa" },
    { label: "Observação", value: "Em geral < 20-25°, conforme maturidade e tendência" },
    { label: "Colete", value: "Em geral 20-40° com crescimento remanescente e risco de progressão" },
    { label: "Cirurgia", value: "Curva progressiva próxima de 45-50° ou maior; individualizar padrão e equilíbrio" },
    { label: "Classificação", value: "Lenke: tipo de curva 1-6 + modificador lombar A-C + modificador sagital -, N ou +" },
  ],
  anatomy: {
    text:
      "A EIA combina desvio coronal, rotação axial e alteração do perfil sagital. Na curva torácica direita, os corpos vertebrais rodam para a convexidade e os processos espinhosos para a concavidade; as costelas acompanham a rotação, formando giba posterior na convexidade. O ápice é a vértebra mais desviada e rodada; as vértebras terminais são as mais inclinadas e definem as linhas do Cobb.\n\nO equilíbrio global é avaliado pela relação entre a linha vertical de C7, o sacro e a pelve nos planos coronal e sagital. A vértebra neutra tem menor rotação; a vértebra estável é a mais centralizada sobre o sacro e ajuda a escolher o limite distal da artrodese. Curvas de compensação flexíveis podem corrigir espontaneamente quando a curva estrutural é tratada; curvas estruturais permanecem rígidas nas radiografias de inclinação e precisam ser incluídas no planejamento.",
    figureIds: ["escoliose-idiopatica-adolescente:anatomia", "escoliose-idiopatica-adolescente:adams", "escoliose-idiopatica-adolescente:cobb"],
  },
  classification: [
    {
      id: "lenke",
      name: "Classificação de Lenke",
      basis: "Define curvas estruturais nas regiões torácica proximal, torácica principal e toracolombar/lombar; soma modificadores lombar e sagital.",
      note: "Curva é estrutural se permanece ≥ 25° nas inclinações ou apresenta critério sagital regional. A classificação serve ao planejamento da artrodese, não à indicação operatória isolada.",
      types: [
        { code: "1", label: "Tipo 1 - torácica principal", description: "Somente a curva torácica principal é estrutural; torácica proximal e lombar são compensatórias.", figureId: "escoliose-idiopatica-adolescente:lenke", figureVariant: "1" },
        { code: "2", label: "Tipo 2 - torácica dupla", description: "Curvas torácica proximal e torácica principal são estruturais.", figureId: "escoliose-idiopatica-adolescente:lenke", figureVariant: "2" },
        { code: "3", label: "Tipo 3 - dupla principal", description: "Curvas torácica principal e toracolombar/lombar são estruturais; torácica é maior.", figureId: "escoliose-idiopatica-adolescente:lenke", figureVariant: "3" },
        { code: "4", label: "Tipo 4 - tripla principal", description: "As três regiões são estruturais.", figureId: "escoliose-idiopatica-adolescente:lenke", figureVariant: "4" },
        { code: "5", label: "Tipo 5 - toracolombar/lombar", description: "Somente a curva toracolombar/lombar é estrutural.", figureId: "escoliose-idiopatica-adolescente:lenke", figureVariant: "5" },
        { code: "6", label: "Tipo 6 - toracolombar/lombar principal", description: "Curvas lombar e torácica são estruturais, com lombar maior.", figureId: "escoliose-idiopatica-adolescente:lenke", figureVariant: "6" },
      ],
    },
    {
      id: "modificadores",
      name: "Modificadores de Lenke",
      basis: "Relação da linha vertical sacral central com a curva lombar e cifose T5-T12.",
      types: [
        { code: "A", label: "Lombar A", description: "Linha vertical sacral central passa entre os pedículos da vértebra apical lombar.", figureId: "escoliose-idiopatica-adolescente:modificadores", figureVariant: "A" },
        { code: "B", label: "Lombar B", description: "Linha toca o corpo da vértebra apical, sem passar entre os pedículos.", figureId: "escoliose-idiopatica-adolescente:modificadores", figureVariant: "B" },
        { code: "C", label: "Lombar C", description: "Linha não toca o corpo apical; curva lombar está completamente transladada.", figureId: "escoliose-idiopatica-adolescente:modificadores", figureVariant: "C" },
        { code: "-, N, +", label: "Sagital torácico", description: "Cifose T5-T12: - abaixo de 10°, N entre 10° e 40°, + acima de 40°.", figureId: "escoliose-idiopatica-adolescente:modificadores", figureVariant: "sagital" },
      ],
    },
  ],
  indications: {
    operative: [
      "Curva progressiva próxima de 45 a 50° ou maior em paciente com crescimento remanescente.",
      "Curva acima de 50° após maturidade com progressão documentada, desequilíbrio ou impacto clínico relevante.",
      "Falha do colete em impedir progressão até limiar cirúrgico, após confirmar adesão e ajuste.",
      "Deformidade grave com desequilíbrio coronal/sagital ou comprometimento pulmonar em curvas muito grandes.",
    ],
    nonOperative: [
      "Observação periódica para curvas leves, ajustando intervalo ao crescimento remanescente.",
      "Colete toracolombossacro para curvas moderadas em paciente ainda em crescimento e com risco de progressão.",
      "Exercícios específicos podem complementar função, postura e adesão, mas não substituem colete quando este está indicado.",
    ],
    decisionNotes:
      "Os limiares são faixas, não interruptores. Cobb tem variabilidade de medição de cerca de 5 graus; progressão deve ser confirmada em exames comparáveis. O colete funciona por dose: o BrAIST mostrou sucesso de 72% com colete contra 48% com observação na análise combinada, com benefício crescente conforme horas de uso. A cirurgia não deve ser indicada por estética isolada nem adiada até que uma curva progressiva se torne rígida e maior. Planejamento inclui radiografias panorâmicas em pé, perfil, inclinações laterais, maturidade, equilíbrio e classificação de Lenke.",
  },
  approaches: [
    { id: "posterior", name: "Artrodese posterior instrumentada", indication: "Principal abordagem para curvas cirúrgicas da EIA, permitindo correção tridimensional e artrodese seletiva conforme Lenke.", interval: "Incisão mediana; exposição subperiosteal dos níveis planejados; parafusos pediculares, manobras de correção e enxertia sobre leito decorticado.", atRisk: ["Medula e raízes", "Parafuso pedicular medial", "Vasos segmentares e pleura", "Equilíbrio dos ombros e perfil sagital"], figureId: "escoliose-idiopatica-adolescente:artrodese" },
    { id: "anterior-seletiva", name: "Abordagem anterior seletiva", indication: "Situações específicas de curva toracolombar/lombar ou necessidade de liberação, hoje menos frequente.", interval: "Acesso torácico ou retroperitoneal conforme níveis, com discectomias e instrumentação segmentar.", atRisk: ["Pulmão e pleura", "Grandes vasos", "Plexo simpático", "Músculo psoas e raízes lombares"], figureId: "escoliose-idiopatica-adolescente:artrodese" },
  ],
  technique: [
    { n: 1, title: "Confirmar EIA e procurar sinais atípicos", detail: "Examinar pele, equilíbrio, discrepância de membros, marcha, força, reflexos e sinais longos. Dor noturna, déficit, curva torácica esquerda ou progressão acelerada indicam RM e investigação etiológica.", figureId: "escoliose-idiopatica-adolescente:adams", tips: ["O teste de Adams evidencia rotação, não mede sozinho o Cobb"], pitfalls: ["Chamar toda assimetria de idiopática sem excluir causa secundária"] },
    { n: 2, title: "Medir Cobb de forma reproduzível", detail: "Usar radiografia panorâmica em pé, escolher vértebras terminais mais inclinadas e traçar perpendiculares às placas terminais. Comparar exames com a mesma técnica e os mesmos níveis.", figureId: "escoliose-idiopatica-adolescente:cobb", tips: ["Registrar quais vértebras terminais foram usadas"], pitfalls: ["Interpretar variação menor que 5° como progressão certa"] },
    { n: 3, title: "Estimar crescimento remanescente", detail: "Integrar idade, menarca, cartilagem trirradiada, Risser e estágio de Sanders. Sanders 2-3 corresponde ao período de maior risco de progressão.", figureId: "escoliose-idiopatica-adolescente:maturidade", tips: ["Sanders reduz o erro de depender apenas do Risser"], pitfalls: ["Considerar Risser 0 uma categoria homogênea"] },
    { n: 4, title: "Observar ou prescrever colete", detail: "Observar curvas leves com radiografias seriadas; indicar colete em curva moderada e paciente em crescimento. Ajustar órtese, monitorar correção dentro do colete e usar decisão compartilhada para adesão diária.", figureId: "escoliose-idiopatica-adolescente:conduta", tips: ["Horas de uso têm relação dose-resposta com sucesso"], pitfalls: ["Prescrever colete sem ajuste, acompanhamento ou meta de uso"] },
    { n: 5, title: "Classificar curvas estruturais", detail: "Obter inclinações laterais e perfil; identificar regiões estruturais, tipo Lenke e modificadores lombar e sagital. Definir vértebras neutra, estável e tocada pela linha vertical sacral.", figureId: "escoliose-idiopatica-adolescente:lenke", tips: ["Classificação guia extensão da artrodese, não a necessidade de operar"], pitfalls: ["Deixar curva estrutural fora da fusão"] },
    { n: 6, title: "Planejar correção tridimensional", detail: "Escolher níveis proximal e distal para equilibrar ombros, tronco e perfil sagital; planejar densidade e corredores dos parafusos por anatomia pedicular.", figureId: "escoliose-idiopatica-adolescente:modificadores", tips: ["Preservar segmentos lombares móveis quando seguro"], pitfalls: ["Buscar radiografia reta à custa de desequilíbrio sagital ou artrodese longa"] },
    { n: 7, title: "Instrumentar, corrigir e obter artrodese", detail: "Inserir parafusos com controle anatômico, realizar manobras graduais de rotação/translação, monitorar função neural e decorticar o leito antes da enxertia. Confirmar equilíbrio antes do fechamento.", figureId: "escoliose-idiopatica-adolescente:artrodese", tips: ["Correção segura vale mais que correção máxima"], pitfalls: ["Forçar correção em curva rígida sem estratégia de liberação"] },
  ],
  postop: {
    immobilization: "Sem colete de rotina após instrumentação moderna estável; individualizar em osso ruim ou construção especial.",
    weightBearing: "Deambulação precoce, geralmente no primeiro dia, conforme estabilidade clínica.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Marcha assistida", focus: "Dor, função pulmonar, equilíbrio, ferida e exame neurológico." },
      { window: "2-12 semanas", weightBearing: "Atividades leves", focus: "Marcha, mobilidade dos membros e retorno escolar progressivo." },
      { window: "3-12 meses", weightBearing: "Progressiva conforme consolidação", focus: "Condicionamento e retorno gradual ao esporte, evitando impacto precoce." },
    ],
    followup: "Radiografias panorâmicas acompanham equilíbrio, implantes e artrodese. Avaliar ombros, tronco, dor, função e sinais de infecção ou déficit tardio.",
  },
  complications: [
    { name: "Lesão neurológica", detail: "Rara, potencialmente devastadora durante correção ou posicionamento de parafusos.", prevention: "Planejamento, técnica pedicular, correção gradual e neuromonitorização multimodal quando disponível." },
    { name: "Infecção", detail: "Pode ser precoce ou tardia associada a implantes.", prevention: "Profilaxia, preparo adequado, hemostasia e manejo de partes moles." },
    { name: "Desequilíbrio de ombros ou tronco", detail: "Seleção inadequada de níveis ou correção desproporcional.", prevention: "Classificação correta, inclinações e análise global pré-operatória." },
    { name: "Cifose juncional e falha de implante", detail: "Relacionadas a transição rígida, perfil inadequado e artrodese incompleta.", prevention: "Escolha cuidadosa do nível final, preservação ligamentar e alinhamento sagital fisiológico." },
    { name: "Fenômeno de manivela", detail: "Progressão rotacional em paciente muito imaturo após artrodese posterior isolada.", prevention: "Reconhecer crescimento remanescente extremo e obter controle segmentar adequado." },
  ],
  evidence: [
    { id: "lenke-2001", claim: "A classificação de Lenke organiza seis tipos de curva e dois modificadores para padronizar a extensão da artrodese.", takeaway: "Separar curvas estruturais de compensatórias evita fusão insuficiente e preserva segmentos móveis quando possível.", level: "III", studyType: "Desenvolvimento e validação de classificação", era: "classico", citation: { authors: "Lenke LG et al.", title: "Adolescent idiopathic scoliosis: a new classification to determine extent of spinal arthrodesis", journal: "J Bone Joint Surg Am", year: 2001, pmid: "11507125" } },
    { id: "weinstein-natural-history", claim: "No seguimento de 50 anos, EIA não tratada não implicou inevitavelmente incapacidade grave ou maior mortalidade.", takeaway: "Aconselhamento deve ser proporcional à magnitude e ao risco real, sem catastrofizar curvas leves.", level: "II", studyType: "Coorte de história natural, 50 anos", era: "classico", citation: { authors: "Weinstein SL et al.", title: "Health and function of patients with untreated idiopathic scoliosis", journal: "JAMA", year: 2003, pmid: "12578488", doi: "10.1001/jama.289.5.559" } },
    { id: "braist-2013", claim: "Colete reduziu progressão até 50° e mostrou relação dose-resposta com horas de uso.", takeaway: "A prescrição precisa incluir adesão mensurável, ajuste e acompanhamento; entregar a órtese não basta.", level: "I", studyType: "Ensaio randomizado e coorte de preferência", era: "atual", citation: { authors: "Weinstein SL et al.", title: "Effects of bracing in adolescents with idiopathic scoliosis", journal: "N Engl J Med", year: 2013, pmid: "24047455", doi: "10.1056/NEJMoa1307337" } },
    { id: "braist-prognosis", claim: "Maturidade esquelética, Cobb e tipo de curva predizem progressão melhor que idade isolada.", takeaway: "Estimativa individual de risco é mais útil que um limiar fixo para todos os adolescentes.", level: "II", studyType: "Modelo prognóstico com validação externa", era: "atual", citation: { authors: "Dolan LA et al.", title: "BrAIST: Development and Validation of a Prognostic Model in Untreated Adolescent Idiopathic Scoliosis", journal: "Spine Deform", year: 2019, pmid: "31731999" } },
  ],
  pearls: [
    "EIA é tridimensional: Cobb mede o plano coronal, não toda a deformidade.",
    "Sanders 2-3 concentra o maior risco de progressão durante o pico de crescimento.",
    "Colete funciona por horas de uso; conversar sobre adesão é parte do tratamento.",
    "Lenke decide quais curvas são estruturais e ajuda a escolher níveis, não indica cirurgia sozinho.",
  ],
  pitfalls: [
    "Ignorar dor intensa, déficit ou curva torácica esquerda e perder etiologia secundária.",
    "Comparar Cobb medido com vértebras terminais diferentes e chamar a variação de progressão.",
    "Usar apenas Risser para estimar crescimento no período de aceleração.",
    "Prescrever colete sem monitorar ajuste e adesão.",
    "Estender artrodese à lombar sem necessidade e sacrificar segmentos móveis.",
  ],
  figures: [
    { id: "escoliose-idiopatica-adolescente:anatomia", caption: "Deformidade tridimensional com desvio coronal, rotação e giba costal.", alt: "Coluna escoliótica em vistas frontal, axial e sagital.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "escoliose-idiopatica-adolescente:adams", caption: "Teste de Adams e medida da rotação do tronco com escoliômetro.", alt: "Adolescente inclinada à frente com giba costal e escoliômetro.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Barros Filho & Lech, Exame Físico em Ortopedia" } },
    { id: "escoliose-idiopatica-adolescente:cobb", caption: "Ângulo de Cobb entre as vértebras terminais da curva.", alt: "Radiografia esquemática com linhas do ângulo de Cobb.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Cobb method" } },
    { id: "escoliose-idiopatica-adolescente:maturidade", caption: "Maturidade por Sanders, Risser e cartilagem trirradiada.", alt: "Linha do tempo do crescimento esquelético na adolescência.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Sanders skeletal maturity staging" } },
    { id: "escoliose-idiopatica-adolescente:lenke", caption: "Seis tipos de curva da classificação de Lenke.", alt: "Painéis com os padrões Lenke 1 a 6.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Lenke et al., PMID 11507125" } },
    { id: "escoliose-idiopatica-adolescente:modificadores", caption: "Modificadores lombar A-C e sagital torácico.", alt: "Relação da curva lombar com a linha sacral e medidas de cifose.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Lenke et al., PMID 11507125" } },
    { id: "escoliose-idiopatica-adolescente:conduta", caption: "Conduta por Cobb e crescimento remanescente.", alt: "Matriz de observação, colete e cirurgia.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "BrAIST e síntese editorial" } },
    { id: "escoliose-idiopatica-adolescente:artrodese", caption: "Planejamento da artrodese posterior seletiva e correção tridimensional.", alt: "Coluna escoliótica com parafusos, hastes e níveis de artrodese.", kind: "diagram", source: { label: "Diagrama original - Revisortopedia", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
  ],
  meta: {
    lastReviewed: "2026-07-14",
    sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert & Lech, 6a ed. (2025)", "Lenke et al. - PMID 11507125", "BrAIST - PMID 24047455"],
    attribution: "Conteúdo original em português brasileiro; evidências verificadas no PubMed e diagramas próprios.",
    figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021)",
  },
});
