import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "tum-primario-osteossarcoma",
  slug: "osteossarcoma",
  kind: "condicao",
  regionId: "tumores-e-metastases",
  bone: "Osso",
  injury: "Sarcoma ósseo produtor de osteoide",
  title: "Osteossarcoma",
  subtitle: "Biopsiar no trajeto definitivo, estadiar antes de tratar e combinar quimioterapia MAP com ressecção de margem oncológica.",
  laterality: null,
  status: "complete",
  overview: "O osteossarcoma convencional é o sarcoma ósseo primário de alto grau mais comum em adolescentes e adultos jovens. Surge principalmente na metáfise de ossos longos, sobretudo fêmur distal, tíbia proximal e úmero proximal. O diagnóstico histológico exige produção de osteoide por células malignas; padrão radiográfico agressivo isolado não basta. Dor progressiva, aumento de volume, massa e fratura patológica são apresentações típicas.\n\nRadiografias mostram lesão mista lítica-esclerótica, destruição cortical, reação periosteal e matriz osteoide. A RM deve abranger todo o osso e a articulação adjacente para delimitar extensão medular, partes moles, feixe neurovascular e metástases descontínuas. Estadiamento inclui TC de tórax e avaliação esquelética metabólica. A biópsia é planejada com a equipe que fará a ressecção; trajeto, hematoma e dreno devem ser removíveis em bloco.\n\nNo osteossarcoma convencional de alto grau localizado, o padrão é quimioterapia multiagente pré-operatória, ressecção ampla e quimioterapia pós-operatória. O regime MAP combina metotrexato em alta dose, doxorrubicina e cisplatina em pacientes adequados. Preservação do membro é preferível quando permite margem negativa e reconstrução funcional; amputação continua indicada quando controle oncológico e membro útil não são conciliáveis. Necrose tumoral após quimioterapia tem valor prognóstico, mas intensificar com ifosfamida e etoposídeo em maus respondedores não melhorou sobrevida livre de eventos no EURAMOS-1.",
  keyFacts: [
    { label: "Definição", value: "Osteoide produzido por células malignas" },
    { label: "Perfil", value: "Adolescente · metáfise ao redor do joelho" },
    { label: "Imagem local", value: "Radiografia + RM de todo o osso e articulações adjacentes" },
    { label: "Estadiamento", value: "TC de tórax + pesquisa esquelética + histologia" },
    { label: "Padrão terapêutico", value: "MAP neoadjuvante → ressecção ampla → MAP adjuvante" },
    { label: "Prognóstico", value: "Metástase, margem, resposta histológica, sítio e tamanho" },
  ],
  anatomy: {
    text: "O tumor cresce pela cavidade medular, rompe o córtex e eleva o periósteo, formando triângulo de Codman e reação espiculada em alguns casos. Esses sinais indicam agressividade, não são exclusivos de osteossarcoma. A matriz osteoide aparece como mineralização densa e irregular, frequentemente em nuvem.\n\nA RM define o nível seguro de osteotomia, preservação articular, relação com vasos e nervos e extensão do componente de partes moles. A biópsia deve seguir plano longitudinal direto, evitar compartimentos não envolvidos e não cruzar articulação ou feixe neurovascular.\n\nPulmão é o principal sítio metastático. Metástases descontínuas no mesmo osso ou em osso adjacente mudam estágio e planejamento. Linfonodos são incomuns. A peça cirúrgica precisa ser orientada para avaliação de margens e porcentagem de necrose.",
    figureIds: ["framework-completion:osteossarcoma-fluxo", "framework-completion:osteossarcoma-margem"],
  },
  classification: [
    { id: "enneking-osteossarcoma", name: "Enneking para sarcoma ósseo", basis: "Grau, extensão compartimental e metástases.", types: [
      { code: "IIA", label: "Alto grau intracompartimental", description: "Tumor de alto grau ainda contido no compartimento ósseo.", figureId: "framework-completion:osteossarcoma-margem", figureVariant: "IIA" },
      { code: "IIB", label: "Alto grau extracompartimental", description: "Forma frequente: extensão além do córtex, sem metástase demonstrada.", figureId: "framework-completion:osteossarcoma-margem", figureVariant: "IIB" },
      { code: "III", label: "Metastático", description: "Metástase pulmonar, óssea descontínua ou em outro sítio.", figureId: "framework-completion:osteossarcoma-margem", figureVariant: "III" },
    ] },
  ],
  indications: {
    operative: ["Todo osteossarcoma ressecável como parte de tratamento multimodal.", "Preservação do membro quando margem ampla e função útil são possíveis.", "Amputação quando estruturas críticas estão contaminadas ou reconstrução funcional segura não é viável.", "Metastasectomia pulmonar em doença ressecável selecionada, integrada ao protocolo oncológico."],
    nonOperative: ["Não realizar curetagem intralesional de osteossarcoma convencional de alto grau.", "Doença irressecável ou condição clínica incompatível: tratamento sistêmico e paliativo individualizado.", "Evitar fixação de fratura antes de diagnóstico e estadiamento; pode contaminar todo o membro."],
    decisionNotes: "A fratura patológica não obriga amputação, mas amplia contaminação e dificulta margens. Imobilizar sem atravessar o tumor, concluir estadiamento e planejar com oncologia ortopédica. Subtipos parosteal de baixo grau, periosteal, telangiectásico e secundário têm protocolos específicos.",
  },
  approaches: [
    { id: "ressection", name: "Ressecção ampla com preservação do membro", indication: "Margem oncológica possível e reconstrução com função previsível.", interval: "Dissecção fora da zona reativa, incluindo trajeto de biópsia, com controle vascular e reconstrução planejada.", atRisk: ["Feixe neurovascular", "Articulação", "Placa de crescimento", "Cobertura de partes moles"], figureId: "framework-completion:osteossarcoma-margem" },
    { id: "amputacao", name: "Amputação oncológica", indication: "Margem negativa e membro funcional não podem ser obtidos com preservação.", interval: "Nível definido por extensão tumoral e viabilidade de cobertura, incluindo toda contaminação.", atRisk: ["Margem proximal", "Retalhos", "Nervos e vasos", "Comprimento funcional"], figureId: "framework-completion:osteossarcoma-margem" },
  ],
  technique: [
    { n: 1, title: "Suspeitar antes de tocar", detail: "Obter radiografias em dois planos e reconhecer padrão agressivo. Não infiltrar, curetar ou fixar uma lesão indeterminada.", figureId: "framework-completion:osteossarcoma-fluxo", tips: ["Dor progressiva e imagem agressiva exigem encaminhamento"], pitfalls: ["Confundir reação periosteal com diagnóstico histológico"] },
    { n: 2, title: "Completar imagem e estadiamento", detail: "Realizar RM de todo o osso e articulações adjacentes, TC de tórax e pesquisa sistêmica conforme protocolo antes da biópsia definitiva.", tips: ["Marcar cicatrizes e planejar o trajeto na RM"], pitfalls: ["RM limitada apenas ao centro do tumor"] },
    { n: 3, title: "Biopsiar no trajeto definitivo", detail: "Coletar tecido viável por agulha grossa ou incisão longitudinal mínima, em acordo com o cirurgião oncológico e patologista.", figureId: "framework-completion:osteossarcoma-fluxo", tips: ["Enviar material adequado e avisar suspeita de sarcoma"], pitfalls: ["Cruzar compartimentos, articulação ou feixe"] },
    { n: 4, title: "Tratar sistemicamente", detail: "Confirmado alto grau, iniciar quimioterapia neoadjuvante conforme protocolo e reavaliar local e pulmões antes da cirurgia.", figureId: "framework-completion:osteossarcoma-fluxo", tips: ["Registrar tamanho e extensão basais"], pitfalls: ["Interpretar aumento de mineralização como progressão isolada"] },
    { n: 5, title: "Ressecar em bloco", detail: "Remover tumor, zona contaminada e trajeto de biópsia com margem planejada. Orientar peça e margens críticas para patologia.", figureId: "framework-completion:osteossarcoma-margem", tips: ["Coordenação com reconstrução e cobertura reduz improviso"], pitfalls: ["Romper a peça ou expor pseudocápsula"] },
    { n: 6, title: "Reconstruir e completar protocolo", detail: "Escolher endoprótese, aloenxerto, reconstrução biológica ou amputação conforme local, idade e prognóstico. Retomar quimioterapia após recuperação da ferida.", tips: ["A reconstrução deve permitir vigilância e revisão"], pitfalls: ["Atrasar terapia sistêmica por cobertura precária"] },
  ],
  postop: {
    immobilization: "Depende da reconstrução; proteger retalhos, reparos musculares e interfaces biológicas.",
    weightBearing: "Individualizada: frequentemente precoce em endoprótese estável e restrita em reconstrução biológica até integração.",
    rehab: [{ window: "0-6 semanas", weightBearing: "Conforme reconstrução", focus: "Ferida, mobilidade segura, força e continuidade da quimioterapia." }, { window: "6 semanas-6 meses", weightBearing: "Progressiva", focus: "Função do membro, integração óssea e manejo dos efeitos sistêmicos." }, { window: "Longo prazo", weightBearing: "Conforme consolidação", focus: "Vigilância, função, prótese e saúde cardiopulmonar/renal." }],
    followup: "Vigilância local e pulmonar conforme protocolo oncológico, mais intensa nos primeiros anos. Avaliar também complicações da reconstrução e efeitos tardios da quimioterapia.",
  },
  complications: [
    { name: "Recorrência local", detail: "Associada a margem inadequada, contaminação e biologia agressiva.", prevention: "Biópsia planejada, ressecção em bloco e auditoria de margens." },
    { name: "Metástase pulmonar", detail: "Principal forma de disseminação e causa de falha oncológica.", prevention: "Estadiamento e vigilância; discutir ressecção em doença selecionada." },
    { name: "Infecção e falha da reconstrução", detail: "Endopróteses e grandes ressecções têm risco prolongado de infecção, soltura e fratura.", prevention: "Cobertura robusta, técnica, reabilitação e vigilância." },
    { name: "Toxicidade sistêmica", detail: "Cardíaca, renal, auditiva, hematológica e outras conforme quimioterapia.", prevention: "Monitorização multidisciplinar e ajuste de protocolo." },
  ],
  evidence: [
    { id: "rosen-1982", claim: "O uso de quimioterapia pré-operatória permitiu avaliar necrose tumoral e consolidou a estratégia multimodal moderna.", takeaway: "Quimioterapia e cirurgia são partes inseparáveis no osteossarcoma convencional de alto grau.", level: "III", studyType: "Série clínica fundadora", era: "classico", citation: { authors: "Rosen G, Caparros B, Huvos AG, et al.", title: "Preoperative chemotherapy for osteogenic sarcoma", journal: "Cancer", year: 1982, pmid: "6174200" } },
    { id: "picci-1994", claim: "Resposta histológica à quimioterapia e margem cirúrgica se associaram ao risco de recorrência local.", takeaway: "A cirurgia precisa obter margem negativa mesmo quando a resposta sistêmica é boa.", level: "III", studyType: "Coorte prognóstica", era: "classico", citation: { authors: "Picci P, Sangiorgi L, Rougraff BT, et al.", title: "Relationship of chemotherapy-induced necrosis and surgical margins to local recurrence in osteosarcoma", journal: "Journal of Clinical Oncology", year: 1994, pmid: "7989947", doi: "10.1200/JCO.1994.12.12.2699" } },
    { id: "euramos-2016", claim: "Adicionar ifosfamida e etoposídeo ao MAP em maus respondedores aumentou toxicidade sem melhorar sobrevida livre de eventos.", takeaway: "Não intensificar empiricamente fora de protocolo com base apenas na necrose ruim.", level: "I", studyType: "Ensaio clínico internacional randomizado", era: "atual", citation: { authors: "Marina NM, Smeland S, Bielack SS, et al.", title: "Comparison of MAPIE versus MAP in patients with a poor response to preoperative chemotherapy for high-grade osteosarcoma", journal: "The Lancet Oncology", year: 2016, pmid: "27569442", doi: "10.1016/S1470-2045(16)30214-5" } },
  ],
  pearls: ["Osteoide maligno define o diagnóstico.", "A biópsia faz parte da ressecção definitiva.", "RM deve incluir todo o osso.", "Preservar membro só é sucesso com margem e função.", "Necrose pós-quimioterapia é prognóstica, não licença para margem estreita."],
  pitfalls: ["Fixar fratura antes de biopsiar.", "Drenar hematoma tumoral como abscesso.", "Fazer biópsia transversal ou contaminar feixe.", "Confundir matriz mineralizada com resposta completa.", "Escolher reconstrução sem considerar terapia sistêmica e cobertura."],
  figures: [
    { id: "framework-completion:osteossarcoma-fluxo", caption: "Sequência segura: imagem, estadiamento, biópsia, MAP, ressecção e avaliação histológica.", alt: "Fluxo multidisciplinar do tratamento do osteossarcoma de alto grau.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's Operative Orthopaedics, 14a ed.; EURAMOS-1." } },
    { id: "framework-completion:osteossarcoma-margem", caption: "Extensão tumoral, trajeto de biópsia e margem ampla planejada.", alt: "Esquema de ressecção em bloco de osteossarcoma incluindo o trajeto da biópsia.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's, 14a ed.; Enneking; Picci et al." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, 6a ed. (2025)", "Rosen et al., Cancer 1982", "Picci et al., JCO 1994", "EURAMOS-1, Lancet Oncol 2016"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), tumores ósseos malignos." },
});
