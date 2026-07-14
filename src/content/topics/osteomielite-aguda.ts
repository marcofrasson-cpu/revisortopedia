import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "inf-osso-osteomielite-aguda",
  slug: "osteomielite-aguda",
  kind: "condicao",
  regionId: "infeccao-musculoesqueletica",
  bone: "Osso",
  injury: "Infecção óssea aguda",
  title: "Osteomielite aguda",
  subtitle: "Reconhecer cedo, obter culturas sem atrasar o paciente séptico e drenar abscesso ou foco não responsivo.",
  laterality: null,
  status: "complete",
  overview: "Osteomielite aguda é infecção óssea de início recente, geralmente hematogênica em crianças e por inoculação direta ou contiguidade em adultos. Staphylococcus aureus é o agente mais comum; idade, imunidade, anemia falciforme, ferida, cirurgia, uso de drogas injetáveis e epidemiologia modificam o espectro. Em crianças, a metáfise de ossos longos é típica; lactentes podem atravessar a fise e contaminar a articulação.\n\nFebre, dor focal, recusa de apoio e limitação podem ser discretas. Hemograma normal não exclui. PCR é útil para tendência, VHS responde mais lentamente e hemoculturas devem ser coletadas antes do antibiótico quando isso não causa atraso perigoso. Radiografia inicial serve como linha de base e exclui diagnósticos, mas pode estar normal. RM com contraste é o exame mais sensível para edema, abscesso, extensão e articulação adjacente.\n\nPaciente séptico recebe antibiótico imediatamente após culturas possíveis. Paciente estável permite aspirar ou biopsiar antes da primeira dose, sobretudo em apresentação atípica. Tratamento clínico é adequado quando não há abscesso drenável, necrose, instabilidade nem falha. Cirurgia é indicada para abscesso subperiosteal/intraósseo relevante, artrite associada, sepse persistente, tecido necrótico, material contaminado ou ausência de resposta. A duração e a via são individualizadas por idade, agente, controle do foco e resposta; transição oral precoce é segura em pacientes selecionados com opção de alta biodisponibilidade.",
  keyFacts: [
    { label: "Agente principal", value: "Staphylococcus aureus" },
    { label: "Criança", value: "Hematogênica · metáfise · recusa de apoio" },
    { label: "Culturas", value: "Hemocultura + foco profundo antes do antibiótico se estável" },
    { label: "Imagem", value: "Radiografia basal; RM para extensão e abscesso" },
    { label: "Cirurgia", value: "Abscesso, necrose, articulação, sepse ou falha clínica" },
    { label: "Monitorização", value: "Clínica e PCR seriada, não imagem isolada" },
  ],
  anatomy: {
    text: "Na criança, alças capilares metafisárias de fluxo lento favorecem deposição bacteriana. A fise costuma limitar disseminação epifisária após 18 meses, mas vasos trans-fisários no lactente permitem extensão à epífise e articulação. Quadril, ombro, cotovelo e tornozelo têm metáfise parcialmente intracapsular e maior risco de artrite séptica associada.\n\nPus eleva pressão intramedular, compromete perfusão e pode dissecar sob o periósteo. Sem controle, necrose gera sequestro e transforma quadro agudo em crônico. Em adulto, pé diabético, ferida e cirurgia introduzem infecção contígua e frequentemente polimicrobiana.\n\nA RM distingue edema medular de coleções, mas edema persistente após melhora não significa falha. Amostras profundas de osso ou pus orientam terapia; swab superficial representa colonização e não deve guiar sozinho.",
    figureIds: ["framework-completion:om-aguda-fluxo", "framework-completion:om-aguda-anatomia"],
  },
  classification: [
    { id: "waldvogel-aguda", name: "Via de aquisição", basis: "Mecanismo de inoculação e contexto clínico.", types: [
      { code: "H", label: "Hematogênica", description: "Mais comum em crianças; foco metafisário após bacteremia.", figureId: "framework-completion:om-aguda-anatomia", figureVariant: "hematogenica" },
      { code: "C", label: "Contígua", description: "Extensão de ferida, úlcera ou infecção de partes moles; comum no adulto.", figureId: "framework-completion:om-aguda-anatomia", figureVariant: "contigua" },
      { code: "D", label: "Inoculação direta", description: "Fratura exposta, cirurgia, punção ou trauma penetrante.", figureId: "framework-completion:om-aguda-anatomia", figureVariant: "direta" },
    ] },
  ],
  indications: {
    operative: ["Abscesso subperiosteal, intraósseo ou de partes moles drenável.", "Artrite séptica contígua.", "Sepse persistente ou deterioração apesar de antibiótico adequado.", "Osso/tecido necrótico, implante contaminado ou necessidade diagnóstica de amostra.", "Compressão neural ou localização com risco estrutural."],
    nonOperative: ["Osteomielite hematogênica sem coleção, necrose ou instabilidade e com resposta clínica rápida.", "Tratamento antimicrobiano dirigido após culturas, com transição oral em paciente selecionado.", "Vigilância estreita de clínica e PCR até resposta consistente."],
    decisionNotes: "Tamanho isolado de coleção não substitui contexto. Em criança estável com pequeno abscesso e melhora rápida, antibiótico pode bastar; dor, febre e PCR persistentes exigem nova avaliação. Escolha antimicrobiana deve considerar resistência local, idade, função renal, foco e culturas, idealmente com infectologia.",
  },
  approaches: [
    { id: "metafisario", name: "Drenagem metafisária dirigida", indication: "Abscesso intraósseo/subperiosteal localizado na RM.", interval: "Incisão que permita acesso ao foco sem lesar fise, articulação ou feixe neurovascular.", atRisk: ["Fise", "Articulação adjacente", "Periósteo", "Feixe neurovascular"], figureId: "framework-completion:om-aguda-anatomia" },
    { id: "articular", name: "Drenagem articular associada", indication: "Derrame purulento ou artrite séptica contígua.", interval: "Artroscopia ou artrotomia conforme articulação, estágio e experiência.", atRisk: ["Cartilagem", "Fise", "Nervos regionais"], figureId: "framework-completion:om-aguda-anatomia" },
  ],
  technique: [
    { n: 1, title: "Reconhecer gravidade", detail: "Avaliar sepse, perfusão, dor, apoio, pele e articulação. Coletar hemograma, PCR, VHS, hemoculturas e exames dirigidos.", figureId: "framework-completion:om-aguda-fluxo", tips: ["PCR seriada é mais útil que valor isolado"], pitfalls: ["Excluir infecção por ausência de febre"] },
    { n: 2, title: "Obter imagem apropriada", detail: "Radiografar para linha de base. Solicitar RM quando diagnóstico, extensão ou coleção não estão claros; ultrassom detecta derrame articular.", figureId: "framework-completion:om-aguda-anatomia", tips: ["Incluir articulação adjacente em metáfise intracapsular"], pitfalls: ["Esperar alteração radiográfica tardia"] },
    { n: 3, title: "Cultivar sem atrasar ressuscitação", detail: "Coletar hemoculturas e aspirado/tecido profundo antes do antibiótico se estável. Na sepse, coletar rapidamente e tratar imediatamente.", figureId: "framework-completion:om-aguda-fluxo", tips: ["Comunicar antibiótico prévio ao laboratório"], pitfalls: ["Aguardar RM em paciente instável"] },
    { n: 4, title: "Controlar o foco", detail: "Drenar pus, remover tecido sem viabilidade e irrigar. Colher múltiplas amostras separadas antes de antibiótico intraoperatório quando seguro.", tips: ["Evitar agressão desnecessária à fise"], pitfalls: ["Fazer pequena perfuração sem alcançar loculações"] },
    { n: 5, title: "Direcionar e monitorar", detail: "Ajustar antibiótico ao agente e susceptibilidade; considerar via oral quando há melhora, absorção e fármaco adequado. Reavaliar se PCR e clínica não caem.", figureId: "framework-completion:om-aguda-fluxo", tips: ["A duração depende de foco, idade, controle e complicação"], pitfalls: ["Manter terapia empírica ampla apesar de cultura"] },
  ],
  postop: {
    immobilization: "Apenas para dor, proteção de fise/articulação ou estabilidade; retirar cedo conforme melhora.",
    weightBearing: "Conforme dor e integridade estrutural; restrição maior quando há lesão cortical, cirurgia ou articulação envolvida.",
    rehab: [{ window: "Fase aguda", weightBearing: "Conforme dor/estabilidade", focus: "Controle de sepse, mobilidade protegida e função articular." }, { window: "Após resposta", weightBearing: "Progressiva", focus: "Amplitude, força e retorno ao apoio." }, { window: "Após término", weightBearing: "Livre se estrutura íntegra", focus: "Recorrência, crescimento e sequela articular." }],
    followup: "Acompanhar sintomas e PCR; radiografia em crianças com lesão próxima à fise ou destruição. RM de controle não é rotina se evolução clínica é boa.",
  },
  complications: [
    { name: "Cronificação", detail: "Necrose e sequestro mantêm biofilme e recorrência.", prevention: "Diagnóstico, drenagem quando indicada e terapia dirigida." },
    { name: "Artrite séptica", detail: "Extensão para articulação, especialmente em lactentes e metáfises intracapsulares.", prevention: "Avaliar derrame e drenar precocemente." },
    { name: "Distúrbio fisário", detail: "Infecção ou desbridamento lesa crescimento.", prevention: "Controle precoce e abordagem respeitando a fise." },
    { name: "Sepse", detail: "Bacteremia e resposta sistêmica podem evoluir rapidamente.", prevention: "Reconhecimento, culturas e antibiótico sem atraso." },
    { name: "Fratura patológica", detail: "Destruição cortical fragiliza o osso.", prevention: "Proteção de carga e estabilização seletiva." },
  ],
  evidence: [
    { id: "peltola-2010", claim: "Em crianças selecionadas com osteomielite hematogênica não complicada e resposta favorável, curso antimicrobiano mais curto foi eficaz.", takeaway: "Duração deve responder ao controle do foco e à evolução, não a dogma universal.", level: "I", studyType: "Ensaio clínico randomizado", era: "classico", citation: { authors: "Peltola H, Pääkkönen M, Kallio P, Kallio MJT", title: "Short- versus long-term antimicrobial treatment for acute hematogenous osteomyelitis of childhood", journal: "Pediatric Infectious Disease Journal", year: 2010, pmid: "20842069", doi: "10.1097/INF.0b013e3181f55a89" } },
    { id: "oviva-2019-aguda", claim: "Em adultos com infecções ósseas e articulares selecionadas, terapia oral nas primeiras seis semanas foi não inferior à intravenosa prolongada.", takeaway: "Via oral é válida quando há fármaco adequado, absorção, adesão e controle do foco.", level: "I", studyType: "Ensaio clínico randomizado de não inferioridade", era: "atual", citation: { authors: "Li HK, Rombach I, Zambellas R, et al.", title: "Oral versus Intravenous Antibiotics for Bone and Joint Infection", journal: "The New England Journal of Medicine", year: 2019, pmid: "30699315", doi: "10.1056/NEJMoa1710926" } },
  ],
  pearls: ["Radiografia normal não exclui fase inicial.", "PCR serve para tendência.", "Metáfise intracapsular exige olhar a articulação.", "Cultura profunda vale mais que swab.", "Via intravenosa longa não é obrigatória para todo paciente."],
  pitfalls: ["Atrasar antibiótico no séptico.", "Dar antibiótico antes de cultivar paciente estável e atípico.", "Ignorar abscesso na RM.", "Usar edema persistente na RM como falha isolada.", "Não ajustar terapia ao agente."],
  figures: [
    { id: "framework-completion:om-aguda-fluxo", caption: "Fluxo entre gravidade, culturas, antibiótico, RM e controle do foco.", alt: "Algoritmo de avaliação e tratamento da osteomielite aguda.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's Operative Orthopaedics, 14a ed.; Peltola et al.; OVIVA." } },
    { id: "framework-completion:om-aguda-anatomia", caption: "Vias hematogênica, contígua e direta e relação entre metáfise e articulação.", alt: "Esquema anatômico das vias de osteomielite aguda.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Hebert e Lech, 6a ed.; Campbell's, 14a ed." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, 6a ed. (2025)", "Peltola et al., PIDJ 2010", "OVIVA, NEJM 2019"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), infecções ósseas." },
});
