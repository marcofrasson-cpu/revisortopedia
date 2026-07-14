import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "tum-primario-celulas-gigantes",
  slug: "tumor-celulas-gigantes",
  kind: "condicao",
  regionId: "tumores-e-metastases",
  bone: "Osso subcondral",
  injury: "Tumor de células gigantes do osso",
  title: "Tumor de células gigantes",
  subtitle: "Lesão epifisária localmente agressiva: confirmar histologia, preservar a articulação quando seguro e vigiar recorrência e pulmões.",
  laterality: null,
  status: "complete",
  overview: "O tumor de células gigantes (TCG) é neoplasia óssea intermediária, localmente agressiva e raramente metastática. Acomete principalmente adultos jovens após fechamento da fise, na epífise e metáfise, chegando ao osso subcondral. Fêmur distal, tíbia proximal e rádio distal são locais clássicos. Dor, aumento de volume e limitação articular predominam; fratura patológica pode ser a apresentação.\n\nNa radiografia, é lesão lítica excêntrica, geralmente sem matriz mineralizada e com zona de transição estreita, mas pouca esclerose. A RM define extensão e partes moles, embora edema não represente tumor. O diagnóstico histológico mostra células gigantes osteoclastárias distribuídas entre células mononucleares neoplásicas; tumor marrom, cisto ósseo aneurismático, condroblastoma e sarcoma rico em células gigantes entram no diferencial. Dosar cálcio, fósforo, fosfatase alcalina e PTH quando pertinente evita confundir hiperparatireoidismo.\n\nO tratamento padrão de lesões ressecáveis ao redor de articulações é curetagem ampliada: janela suficiente, curetagem, broca de alta rotação, adjuvante local conforme experiência e preenchimento com cimento e/ou enxerto. Ressecção em bloco é indicada quando a articulação é inviável, há destruição maciça, recidiva não controlável ou local com alta recorrência e reconstrução aceitável. Denosumabe é útil em doença irressecável ou quando a cirurgia causaria morbidade extrema, porém pode formar uma casca óssea que aprisiona tumor e dificultar curetagem; uso neoadjuvante rotineiro deve ser cauteloso.",
  keyFacts: [
    { label: "Perfil", value: "Adulto jovem com fise fechada" },
    { label: "Local", value: "Epífise-metáfise até osso subcondral" },
    { label: "Radiografia", value: "Lítica, excêntrica, sem matriz, pouca borda esclerótica" },
    { label: "Campanacci", value: "I contido · II córtex fino · III rompimento/partes moles" },
    { label: "Tratamento", value: "Curetagem ampliada quando articulação é preservável" },
    { label: "Vigilância", value: "Recorrência local precoce + metástase pulmonar rara" },
  ],
  anatomy: {
    text: "O TCG tende a tocar a superfície subcondral e expandir o osso, tornando o córtex fino. A proximidade articular determina o desafio: remover doença microscópica sem destruir cartilagem, ligamentos ou suprimento ósseo. No rádio distal, comportamento e recorrência podem ser mais agressivos e a ressecção é discutida com maior frequência.\n\nO componente de partes moles frequentemente permanece contido por pseudocápsula, mas não deve ser violado. Cimento de polimetilmetacrilato oferece suporte imediato, facilita radiografias de seguimento e produz efeito térmico limitado; enxerto preserva substrato biológico, mas pode dificultar reconhecer recorrência.\n\nMetástase pulmonar histologicamente benigna ocorre em pequena parcela, sobretudo após recorrências. Radiografia ou TC de tórax integra estadiamento e vigilância conforme risco.",
    figureIds: ["framework-completion:tcg-campanacci", "framework-completion:tcg-curetagem"],
  },
  classification: [
    { id: "campanacci", name: "Campanacci", basis: "Aparência radiográfica da margem e integridade cortical.", types: [
      { code: "I", label: "Latente", description: "Lesão bem delimitada com halo esclerótico e córtex preservado; incomum no TCG sintomático.", figureId: "framework-completion:tcg-campanacci", figureVariant: "I" },
      { code: "II", label: "Ativa", description: "Margem definida sem halo, córtex expandido e fino, porém contínuo.", figureId: "framework-completion:tcg-campanacci", figureVariant: "II" },
      { code: "III", label: "Agressiva", description: "Borda mal definida, ruptura cortical e componente de partes moles.", figureId: "framework-completion:tcg-campanacci", figureVariant: "III" },
    ] },
  ],
  indications: {
    operative: ["Curetagem ampliada em lesão ressecável com articulação preservável.", "Ressecção em bloco quando osso/articulação não podem ser reconstruídos após curetagem, em recidiva extensa ou local de alto risco.", "Estabilização/reconstrução de fratura patológica conforme extensão e potencial de preservação."],
    nonOperative: ["Denosumabe em doença irressecável, sacral/pélvica selecionada ou cirurgia de morbidade inaceitável.", "Embolização seriada em lesões sacrais selecionadas.", "Observação não é padrão para TCG confirmado e ativo; exceções exigem centro especializado."],
    decisionNotes: "Campanacci ajuda a descrever extensão, mas não decide sozinho. Fratura patológica não impõe ressecção: curetagem ampliada pode preservar articulação em casos selecionados. Denosumabe deve ter objetivo e duração definidos; seu uso antes de curetagem pode elevar recorrência local.",
  },
  approaches: [
    { id: "curetagem", name: "Janela para curetagem ampliada", indication: "Lesão periarticular com superfície articular e estoque reconstruíveis.", interval: "Janela cortical ampla, acessando todos os recessos sem contaminar articulação ou feixe.", atRisk: ["Cartilagem subcondral", "Ligamentos", "Feixe neurovascular", "Pseudocápsula de partes moles"], figureId: "framework-completion:tcg-curetagem" },
    { id: "ressection", name: "Ressecção em bloco", indication: "Destruição não reconstruível, recidiva extensa ou controle local inadequado por curetagem.", interval: "Plano extralesional incluindo componente extraósseo e trajeto de biópsia.", atRisk: ["Articulação", "Feixe neurovascular", "Cobertura", "Função do segmento"], figureId: "framework-completion:tcg-curetagem" },
  ],
  technique: [
    { n: 1, title: "Confirmar diagnóstico", detail: "Completar radiografia, RM e tórax; realizar biópsia planejada. Correlacionar histologia e dosar PTH quando tumor marrom for possível.", figureId: "framework-completion:tcg-campanacci", tips: ["A fise fechada e a extensão epifisária são pistas fortes"], pitfalls: ["Tratar cisto aneurismático secundário como diagnóstico final"] },
    { n: 2, title: "Expor toda a cavidade", detail: "Criar janela cortical suficientemente ampla para visão e acesso a recessos, preservando estruturas articulares e contendo partes moles.", figureId: "framework-completion:tcg-curetagem", tips: ["Janela pequena favorece doença residual"], pitfalls: ["Romper pseudocápsula e contaminar tecidos"] },
    { n: 3, title: "Realizar curetagem ampliada", detail: "Remover tumor macroscopicamente, usar broca de alta rotação nos limites e irrigar. Aplicar adjuvante local com proteção dos tecidos, conforme protocolo.", figureId: "framework-completion:tcg-curetagem", tips: ["Inspeção com espelho ou ótica ajuda em recessos"], pitfalls: ["Confiar no adjuvante para compensar curetagem incompleta"] },
    { n: 4, title: "Reconstruir o defeito", detail: "Proteger osso subcondral com enxerto quando necessário e preencher com cimento, enxerto ou combinação. Adicionar fixação se houver risco mecânico.", tips: ["A construção deve suportar carga sem colapsar a superfície"], pitfalls: ["Cimento diretamente sob cartilagem muito fina sem proteção"] },
    { n: 5, title: "Programar vigilância", detail: "Obter radiografia basal e acompanhar cavidade, margem cimento-osso, recidiva e pulmões conforme risco.", figureId: "framework-completion:tcg-campanacci", tips: ["Recorrência costuma aparecer nos primeiros anos"], pitfalls: ["Encerrar seguimento após consolidação"] },
  ],
  postop: {
    immobilization: "Conforme local, fratura e reconstrução; mobilidade articular precoce é desejável quando estável.",
    weightBearing: "Cimento permite carga mais precoce; enxerto e grande defeito subcondral exigem proteção até integração.",
    rehab: [{ window: "0-6 semanas", weightBearing: "Conforme estabilidade", focus: "Ferida, arco de movimento e proteção da superfície articular." }, { window: "6 semanas-3 meses", weightBearing: "Progressiva", focus: "Força e retorno à marcha/uso funcional." }, { window: "Após 3 meses", weightBearing: "Conforme imagem", focus: "Função e vigilância oncológica." }],
    followup: "Radiografias locais frequentes nos primeiros dois a três anos e depois espaçadas; tórax conforme protocolo e risco. Dor nova ou lise na margem exige RM/TC e reestadiamento.",
  },
  complications: [
    { name: "Recorrência local", detail: "Maior após curetagem insuficiente e em doença agressiva; pode ocorrer dentro ou ao redor do cimento.", prevention: "Janela ampla, curetagem meticulosa, broca e vigilância." },
    { name: "Degeneração articular", detail: "Defeito subcondral, calor do cimento e deformidade podem acelerar artrose.", prevention: "Proteger cartilagem, reconstruir suporte e evitar colapso." },
    { name: "Fratura pós-operatória", detail: "Defeito grande ou cortical fina falha sob carga.", prevention: "Preenchimento, fixação seletiva e progressão de carga." },
    { name: "Metástase pulmonar", detail: "Rara, por vezes após múltiplas recorrências, com histologia semelhante ao tumor primário.", prevention: "Controle local e vigilância torácica orientada por risco." },
    { name: "Transformação maligna", detail: "Rara, espontânea ou relacionada a radioterapia prévia.", prevention: "Evitar radioterapia convencional quando alternativas existem e biopsiar mudança agressiva." },
  ],
  evidence: [
    { id: "tcg-cement-1994", claim: "Curetagem associada a preenchimento com cimento permitiu preservar articulação, mas recorrência permaneceu relacionada à qualidade do controle intralesional.", takeaway: "Cimento é ferramenta mecânica e de seguimento; não substitui curetagem ampliada.", level: "III", studyType: "Coorte retrospectiva", era: "classico", citation: { authors: "O'Donnell RJ, Springfield DS, Motwani HK, et al.", title: "Recurrence of giant-cell tumors of the long bones after curettage and packing with cement", journal: "The Journal of Bone and Joint Surgery. American Volume", year: 1994, pmid: "7989388" } },
    { id: "tcg-denosumab-2018", claim: "Denosumabe pré-operatório foi associado a maior recorrência após curetagem em coorte comparativa.", takeaway: "Não usar neoadjuvância rotineira antes de curetagem sem objetivo específico.", level: "III", studyType: "Coorte retrospectiva comparativa", era: "atual", citation: { authors: "Errani C, Tsukamoto S, Leone G, et al.", title: "Denosumab May Increase the Risk of Local Recurrence in Patients with Giant-Cell Tumor of Bone Treated with Curettage", journal: "The Journal of Bone and Joint Surgery. American Volume", year: 2018, pmid: "29557866", doi: "10.2106/JBJS.17.00057" } },
    { id: "tcg-cohort-2023", claim: "Grande coorte contemporânea reforçou a importância do tipo de cirurgia, localização e recorrência no controle de longo prazo.", takeaway: "Estratégia deve equilibrar preservação articular e risco local individual.", level: "III", studyType: "Coorte multicêntrica", era: "atual", citation: { authors: "Aoude A, Campbell K, Lavoie-Gagne O, et al.", title: "Giant cell tumour of bone", journal: "The Bone & Joint Journal", year: 2023, pmid: "37121582", doi: "10.1302/0301-620X.105B5.BJJ-2022-1231.R1" } },
  ],
  pearls: ["TCG clássico cruza a epífise após fechamento da fise.", "PTH evita operar tumor marrom por engano.", "A janela deve permitir ver todos os recessos.", "Campanacci descreve imagem, não substitui histologia.", "Denosumabe pode facilitar ressecção e dificultar curetagem."],
  pitfalls: ["Biopsiar sem estadiar.", "Fazer janela pequena.", "Confiar apenas em fenol, argônio ou cimento.", "Indicar ressecção automática por fratura.", "Não vigiar pulmões e recorrência local."],
  figures: [
    { id: "framework-completion:tcg-campanacci", caption: "Campanacci I a III: margem, expansão cortical e componente extraósseo.", alt: "Três padrões radiográficos esquemáticos do tumor de células gigantes.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's Operative Orthopaedics, 14a ed.; Campanacci." } },
    { id: "framework-completion:tcg-curetagem", caption: "Curetagem ampliada: janela, retirada, broca, adjuvante e reconstrução.", alt: "Sequência técnica da curetagem ampliada de tumor de células gigantes.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's, 14a ed.; O'Donnell et al., JBJS 1994." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, 6a ed. (2025)", "O'Donnell et al., JBJS 1994", "Errani et al., JBJS 2018", "Aoude et al., Bone Joint J 2023"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), tumores ósseos benignos agressivos." },
});
