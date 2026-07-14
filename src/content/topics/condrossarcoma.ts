import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "tum-primario-condrossarcoma",
  slug: "condrossarcoma",
  kind: "condicao",
  regionId: "tumores-e-metastases",
  bone: "Osso",
  injury: "Sarcoma produtor de matriz cartilaginosa",
  title: "Condrossarcoma",
  subtitle: "Separar tumor cartilaginoso atípico de condrossarcoma agressivo e obter controle local com a margem adequada ao grau e ao sítio.",
  laterality: null,
  status: "complete",
  overview: "Condrossarcoma é neoplasia maligna produtora de matriz cartilaginosa, mais frequente após a quarta década. Pelve, fêmur proximal, úmero proximal, escápula e costelas são locais típicos. Pode ser primário central ou periférico e também surgir por transformação de encondroma, osteocondroma ou síndromes de múltiplas lesões. Dor progressiva, crescimento após maturidade e massa são sinais de alerta.\n\nA radiografia mostra calcificações em anéis e arcos, escavação endosteal, expansão, destruição cortical e massa de partes moles conforme agressividade. RM define extensão; TC mostra melhor a matriz e o córtex. Diferenciar encondroma de tumor cartilaginoso atípico/condrossarcoma grau 1 exige integração clínica, imagem e histologia, pois a biópsia pode subestimar heterogeneidade. Em extremidades, grau 1 é denominado tumor cartilaginoso atípico; no esqueleto axial conserva comportamento mais agressivo e é tratado como condrossarcoma.\n\nO condrossarcoma convencional responde pouco à quimioterapia e radioterapia; cirurgia é o pilar. Tumor cartilaginoso atípico apendicular selecionado pode ser tratado com curetagem ampliada. Lesões axiais, grau 2 ou 3, desdiferenciadas ou com ruptura cortical exigem ressecção ampla quando possível. Subtipos mesenquimal e de células claras têm comportamento e sensibilidade distintos e devem ser conduzidos em centro especializado.",
  keyFacts: [
    { label: "Perfil", value: "Adulto · pelve e segmentos proximais" },
    { label: "Matriz", value: "Calcificações em anéis e arcos" },
    { label: "Agressividade", value: "Dor, crescimento, escavação profunda, córtex rompido e massa" },
    { label: "ACT", value: "Grau 1 apendicular: curetagem ampliada em casos selecionados" },
    { label: "Alto grau/axial", value: "Ressecção ampla; margem é determinante" },
    { label: "Terapia sistêmica", value: "Benefício limitado no convencional; depende do subtipo" },
  ],
  anatomy: {
    text: "A cartilagem tumoral forma lóbulos separados por septos e calcifica de maneira variável. Crescimento central causa escavação endosteal; extensão além de dois terços da espessura cortical, comprimento de escavação importante, reação periosteal e massa favorecem agressividade. Em osteocondroma, capa cartilaginosa espessa ou crescente no adulto levanta suspeita de transformação periférica.\n\nNa pelve, grande volume pode permanecer oculto e a anatomia visceral e neurovascular dificulta margens. A RM deve mapear os lóbulos, edema, partes moles e feixes. A TC de tórax integra estadiamento dos tumores de maior grau.\n\nA peça precisa de amostragem extensa porque áreas de graus diferentes coexistem. Condrossarcoma desdiferenciado contém componente cartilaginoso junto a sarcoma de alto grau abruptamente distinto e tem prognóstico muito pior.",
    figureIds: ["framework-completion:condrossarcoma-risco", "framework-completion:condrossarcoma-conduta"],
  },
  classification: [
    { id: "grau-condrossarcoma", name: "Grau histológico convencional", basis: "Celularidade, atipia, mitoses e matriz, correlacionados com imagem.", types: [
      { code: "1 / ACT", label: "Baixo grau", description: "Baixa celularidade e atipia; em extremidade recebe o termo tumor cartilaginoso atípico.", figureId: "framework-completion:condrossarcoma-conduta", figureVariant: "baixo" },
      { code: "2", label: "Intermediário", description: "Maior celularidade e atipia, com risco metastático; requer margem ampla.", figureId: "framework-completion:condrossarcoma-conduta", figureVariant: "intermediario" },
      { code: "3", label: "Alto grau", description: "Agressivo, maior risco de metástase e morte; ressecção oncológica ampla.", figureId: "framework-completion:condrossarcoma-conduta", figureVariant: "alto" },
      { code: "DD", label: "Desdiferenciado", description: "Componente de alto grau não cartilaginoso adjacente; prognóstico muito desfavorável.", figureId: "framework-completion:condrossarcoma-conduta", figureVariant: "desdiferenciado" },
    ] },
  ],
  indications: {
    operative: ["Curetagem ampliada para ACT apendicular sem sinais de alto grau, após correlação especializada.", "Ressecção ampla para grau 2/3, lesão axial e extensão extraóssea.", "Ressecção em bloco de transformação periférica, incluindo a capa e base contaminada.", "Reconstrução ou amputação conforme margem possível e função esperada."],
    nonOperative: ["Vigilância de encondroma assintomático e estável, sem sinais agressivos.", "Paliação em doença irressecável ou metastática conforme sintomas e subtipo.", "Radioterapia de alta precisão em sítios irressecáveis selecionados, não como substituto automático de margem."],
    decisionNotes: "Dor atribuível à lesão e sinais de agressividade pesam mais que uma calcificação isolada. Na pelve, grau 1 também costuma exigir ressecção ampla pelo comportamento e dificuldade de controle intralesional. Toda decisão deve revisar imagem e histologia em equipe musculoesquelética.",
  },
  approaches: [
    { id: "curetagem-act", name: "Curetagem ampliada", indication: "ACT de osso longo, contido e sem sinais radiológicos de alto grau.", interval: "Janela cortical, curetagem, broca e preenchimento, mantendo opção de ampliação se histologia final divergir.", atRisk: ["Córtex", "Superfície articular", "Contaminação de partes moles"], figureId: "framework-completion:condrossarcoma-conduta" },
    { id: "ressection-wide", name: "Ressecção ampla", indication: "Lesão axial, alto grau, massa de partes moles ou subtipo agressivo.", interval: "Plano fora da pseudocápsula e zona reativa, incluindo biópsia e estruturas contaminadas.", atRisk: ["Feixes neurovasculares", "Vísceras pélvicas", "Articulação", "Cobertura"], figureId: "framework-completion:condrossarcoma-conduta" },
  ],
  technique: [
    { n: 1, title: "Definir se é lesão cartilaginosa agressiva", detail: "Relacionar dor, crescimento e imagem. Obter radiografia e RM; usar TC para matriz e córtex. Não classificar por um único sinal.", figureId: "framework-completion:condrossarcoma-risco", tips: ["Comparar exames anteriores é extremamente valioso"], pitfalls: ["Confundir dor degenerativa adjacente com dor tumoral"] },
    { n: 2, title: "Estadiar e biopsiar", detail: "Em lesão suspeita, completar estadiamento e planejar biópsia longitudinal em área representativa, evitando necrose e contaminação.", tips: ["Direcionar a amostra para o componente mais agressivo na imagem"], pitfalls: ["Aceitar baixo grau em pequena amostra discordante da RM"] },
    { n: 3, title: "Revisar concordância", detail: "Equipe integra clínica, radiologia e patologia. Discordância exige nova amostragem ou estratégia que não comprometa margem definitiva.", figureId: "framework-completion:condrossarcoma-risco", tips: ["Heterogeneidade é regra em tumores grandes"], pitfalls: ["Tratar laudo isoladamente"] },
    { n: 4, title: "Executar controle local", detail: "Realizar curetagem ampliada apenas em ACT apendicular adequado; ressecar em bloco tumores axiais ou de maior grau.", figureId: "framework-completion:condrossarcoma-conduta", tips: ["Orientar a peça e marcar margens críticas"], pitfalls: ["Romper lóbulos ou contaminar plano profundo"] },
    { n: 5, title: "Planejar vigilância pelo risco", detail: "Acompanhar local e tórax com intensidade proporcional ao grau, margem, subtipo e sítio.", tips: ["Desdiferenciado requer abordagem sistêmica e vigilância intensiva"], pitfalls: ["Dar alta precoce a tumor de crescimento lento"] },
  ],
  postop: { immobilization: "Conforme ressecção e reconstrução; proteger interfaces e cobertura.", weightBearing: "Progressiva de acordo com estabilidade mecânica e integração biológica.", rehab: [{ window: "0-6 semanas", weightBearing: "Conforme reconstrução", focus: "Ferida, mobilidade e prevenção de complicações." }, { window: "6 semanas-6 meses", weightBearing: "Progressiva", focus: "Função, consolidação e adaptação à reconstrução." }, { window: "Longo prazo", weightBearing: "Conforme consolidação", focus: "Vigilância oncológica e durabilidade reconstrutiva." }], followup: "Exame e imagem local mais tórax conforme grau. Condrossarcoma pode recorrer tardiamente; seguimento prolongado é necessário." },
  complications: [
    { name: "Recorrência local", detail: "Relacionada a margem inadequada e sítio axial; pode ocorrer tardiamente.", prevention: "Planejamento especializado e margem adequada ao grau." },
    { name: "Subgraduação", detail: "Biópsia pequena perde foco de maior grau.", prevention: "Amostragem dirigida e correlação tripla." },
    { name: "Metástase", detail: "Risco aumenta com grau, tamanho e subtipo; pulmão é sítio frequente.", prevention: "Estadiamento e vigilância apropriados." },
    { name: "Falha reconstrutiva", detail: "Grandes ressecções pélvicas e periarticulares têm alta morbidade.", prevention: "Planejar cobertura, estabilidade e expectativa funcional." },
  ],
  evidence: [
    { id: "evans-1977", claim: "A classificação histológica de Evans demonstrou forte relação entre grau e prognóstico no condrossarcoma convencional.", takeaway: "Grau histológico continua central, mas deve ser correlacionado com imagem e amostragem.", level: "III", studyType: "Coorte clinicopatológica", era: "classico", citation: { authors: "Evans HL, Ayala AG, Romsdahl MM", title: "Prognostic factors in chondrosarcoma of bone: a clinicopathologic analysis with emphasis on histologic grading", journal: "Cancer", year: 1977, pmid: "890662" } },
    { id: "pelvis-2018", claim: "Em 162 condrossarcomas pélvicos, grau, subtipo e qualidade da margem influenciaram controle e sobrevida.", takeaway: "Na pelve, controle local exige planejamento de margem ampla e não se comporta como ACT apendicular.", level: "III", studyType: "Coorte multicêntrica", era: "atual", citation: { authors: "Bus MPA, Campanacci DA, Albergo JI, et al.", title: "Conventional Primary Central Chondrosarcoma of the Pelvis: Prognostic Factors and Outcome of Surgical Treatment in 162 Patients", journal: "The Journal of Bone and Joint Surgery. American Volume", year: 2018, pmid: "29462035", doi: "10.2106/JBJS.17.00105" } },
    { id: "act-2026", claim: "Coorte de dez anos avaliou controle e segurança da curetagem em tumores cartilaginosos atípicos de extremidades.", takeaway: "Curetagem é uma estratégia de preservação para ACT apendicular bem selecionado, não para lesão axial ou alto grau.", level: "III", studyType: "Coorte retrospectiva de longo prazo", era: "atual", citation: { authors: "Breden S, Stephan M, Hinterwimmer F, et al.", title: "Ten Years of Atypical Cartilaginous Tumors-Is Curettage Really Enough?", journal: "Journal of Clinical Medicine", year: 2026, pmid: "41598394", doi: "10.3390/jcm15020457" } },
  ],
  pearls: ["Anéis e arcos indicam matriz cartilaginosa, não benignidade.", "A dor precisa ser atribuída à lesão.", "A amostra pode subestimar o grau.", "ACT é termo de extremidade.", "Condrossarcoma convencional é doença de controle cirúrgico."],
  pitfalls: ["Curetar lesão pélvica como se fosse encondroma.", "Biopsiar antes de mapear toda a extensão.", "Ignorar crescimento de osteocondroma após maturidade.", "Usar quimioterapia como substituto da margem no convencional.", "Encerrar vigilância cedo demais."],
  figures: [
    { id: "framework-completion:condrossarcoma-risco", caption: "Sinais clínicos e de imagem que elevam a suspeita de agressividade cartilaginosa.", alt: "Matriz em anéis e arcos, escavação cortical e extensão de partes moles em progressão.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's Operative Orthopaedics, 14a ed." } },
    { id: "framework-completion:condrossarcoma-conduta", caption: "Conduta por sítio e grau: vigilância, curetagem ampliada ou ressecção ampla.", alt: "Fluxograma do tratamento do tumor cartilaginoso atípico e condrossarcoma.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Evans et al.; Bus et al.; Campbell's, 14a ed." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, 6a ed. (2025)", "Evans et al., Cancer 1977", "Bus et al., JBJS 2018", "Breden et al., J Clin Med 2026"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), tumores cartilaginosos." },
});
