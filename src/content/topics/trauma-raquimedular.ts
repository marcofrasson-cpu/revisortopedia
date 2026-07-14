import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "col-medular-trauma-raquimedular",
  slug: "trauma-raquimedular",
  kind: "condicao",
  regionId: "coluna",
  bone: "Medula espinal e coluna",
  injury: "Lesão medular traumática",
  title: "Trauma raquimedular",
  subtitle: "Evitar lesão secundária desde o resgate, classificar com ISNCSCI e descomprimir cedo quando há compressão ou instabilidade.",
  laterality: null,
  status: "complete",
  overview: "Trauma raquimedular é lesão traumática da medula ou cauda equina, com ou sem fratura evidente. A lesão primária ocorre no impacto; hipóxia, hipotensão, edema, hemorragia e inflamação ampliam a perda neurológica nas horas seguintes. O atendimento deve preservar oxigenação, perfusão e alinhamento enquanto identifica lesões associadas potencialmente fatais.\n\nO exame neurológico padronizado ISNCSCI define nível sensitivo, nível motor, nível neurológico e completude pela escala AIS. Sensibilidade ou contração anal voluntária abaixo da lesão demonstra preservação sacral e diferencia lesão incompleta. Choque medular é arreflexia flácida transitória abaixo da lesão; choque neurogênico é hipotensão com perda de tônus simpático, frequentemente acompanhada de bradicardia.\n\nTC é o exame inicial para osso e alinhamento. RM avalia medula, disco, hematoma e ligamentos quando há déficit, discordância clínico-tomográfica ou planejamento cirúrgico. Descompressão precoce, idealmente nas primeiras 24 horas quando factível, é favorecida na presença de compressão e instabilidade. Metilprednisolona em alta dose não é tratamento rotineiro: benefício é incerto e complicações são relevantes.",
  keyFacts: [
    { label: "Prioridade", value: "Oxigenação + perfusão + alinhamento + tratamento de lesões associadas" },
    { label: "Exame", value: "ISNCSCI/AIS após estabilização e em avaliações seriadas" },
    { label: "Completude", value: "Preservação sacral define lesão incompleta" },
    { label: "Imagem", value: "TC para osso; RM para medula, disco e ligamentos" },
    { label: "Cirurgia", value: "Descompressão e estabilização precoces quando indicadas" },
    { label: "Perfusão", value: "Evitar hipotensão; alvo de PAM individualizado em terapia intensiva" },
    { label: "Corticoide", value: "Não usar rotineiramente; decisão excepcional e controversa" },
  ],
  anatomy: {
    text: "A medula termina habitualmente em L1-L2; abaixo, raízes da cauda equina têm potencial de recuperação diferente. Tratos corticoespinais carregam função motora, colunas posteriores conduzem propriocepção e tratos espinotalâmicos, dor e temperatura. A vascularização depende da artéria espinal anterior, duas posteriores e reforços radiculomedulares.\n\nSíndrome centromedular causa maior déficit em membros superiores, geralmente após hiperextensão em canal cervical estreito. Síndrome anterior compromete força, dor e temperatura com preservação relativa de propriocepção. Brown-Séquard combina déficit motor e proprioceptivo ipsilateral com perda contralateral de dor e temperatura. Cone medular mistura sinais centrais e periféricos; cauda equina produz padrão radicular flácido.\n\nDermátomos sacrais S4-S5, pressão anal profunda e contração anal voluntária são essenciais para classificar completude. O reflexo bulbocavernoso auxilia a reconhecer o fim do choque medular, mas seu retorno não define sozinho prognóstico.",
    figureIds: ["framework-completion:trauma-medular-avaliacao", "framework-completion:trauma-medular-perfusao"],
  },
  classification: [
    { id: "ais", name: "ASIA Impairment Scale (AIS)", basis: "ISNCSCI: preservação sensitiva e motora, incluindo segmentos sacrais.", types: [
      { code: "A", label: "Completa", description: "Sem função sensitiva ou motora em S4-S5.", figureId: "framework-completion:trauma-medular-avaliacao", figureVariant: "A" },
      { code: "B", label: "Sensitiva incompleta", description: "Sensibilidade sacral presente, sem função motora preservada mais de três níveis abaixo do nível motor.", figureId: "framework-completion:trauma-medular-avaliacao", figureVariant: "B" },
      { code: "C", label: "Motora incompleta", description: "Preservação motora abaixo da lesão; menos da metade dos músculos-chave abaixo do nível tem força 3 ou mais.", figureId: "framework-completion:trauma-medular-avaliacao", figureVariant: "C" },
      { code: "D", label: "Motora incompleta funcional", description: "Pelo menos metade dos músculos-chave abaixo do nível tem força 3 ou mais.", figureId: "framework-completion:trauma-medular-avaliacao", figureVariant: "D" },
      { code: "E", label: "Normal", description: "Sensibilidade e força normais após déficit prévio documentado.", figureId: "framework-completion:trauma-medular-avaliacao", figureVariant: "E" },
    ] },
  ],
  indications: {
    operative: ["Compressão neural persistente com déficit neurológico.", "Instabilidade mecânica ou deformidade progressiva.", "Deterioração neurológica atribuível a lesão tratável.", "Necessidade de estabilização para mobilização, ventilação e reabilitação."],
    nonOperative: ["Lesão estável, sem compressão tratável e alinhamento aceitável.", "Déficit por concussão medular sem instabilidade, sob observação especializada.", "Situação clínica em que risco imediato supera benefício, com reavaliação contínua."],
    decisionNotes: "O relógio cirúrgico começa depois de ressuscitação e diagnóstico, mas atrasos evitáveis devem ser eliminados. A via depende do local da compressão e da lesão estrutural. Pressão arterial deve ser mantida sem hipotensão; diretriz de 2024 sugere faixa de PAM aproximadamente 75-80 a 90-95 mmHg por 3-7 dias, com recomendação fraca e individualização.",
  },
  approaches: [
    { id: "anterior", name: "Descompressão anterior", indication: "Disco, corpo vertebral ou hematoma ventral com reconstrução necessária.", interval: "Acesso regional conforme nível cervical ou toracolombar.", atRisk: ["Vasos", "Vísceras", "Raízes", "Dura-máter"], figureId: "framework-completion:trauma-medular-avaliacao" },
    { id: "posterior", name: "Descompressão e estabilização posterior", indication: "Lesão posterior, instabilidade multicolunar ou necessidade de instrumentação longa.", interval: "Exposição subperiosteal com cuidado para não agravar instabilidade.", atRisk: ["Medula", "Raízes", "Dura-máter", "Vasos segmentares"], figureId: "framework-completion:trauma-medular-avaliacao" },
  ],
  technique: [
    { n: 1, title: "Ressuscitar sem agravar", detail: "Aplicar princípios do trauma, garantir oxigenação, corrigir hemorragia e hipotensão e manter restrição de movimento seletiva. Girar em bloco quando necessário, sem atrasar medidas vitais.", figureId: "framework-completion:trauma-medular-perfusao", tips: ["Hipotensão tem causas múltiplas; excluir sangramento antes de atribuir a choque neurogênico"], pitfalls: ["Priorizar coluna e perder lesão torácica ou abdominal"] },
    { n: 2, title: "Documentar ISNCSCI", detail: "Examinar pontos sensitivos, músculos-chave, S4-S5, pressão anal profunda e contração anal voluntária. Registrar AIS e repetir após estabilização.", figureId: "framework-completion:trauma-medular-avaliacao", tips: ["Anotar fatores que limitam o exame"], pitfalls: ["Chamar lesão de completa sem exame sacral"] },
    { n: 3, title: "Definir morfologia", detail: "Realizar TC da região suspeita e rastrear segmentos adicionais conforme mecanismo. Solicitar RM com prioridade quando déficit, compressão discal/ligamentar ou discordância persistem.", tips: ["Imobilização não deve impedir acesso rápido à imagem e ao tratamento"], pitfalls: ["Excluir lesão porque a radiografia é normal"] },
    { n: 4, title: "Proteger perfusão", detail: "Evitar hipóxia e hipotensão; monitorar PAM em ambiente intensivo e usar fluidos e vasopressores de forma individualizada, evitando sobrecarga.", figureId: "framework-completion:trauma-medular-perfusao", tips: ["Avaliar perfusão, coração e sangramento em conjunto"], pitfalls: ["Perseguir alvo pressórico sem considerar efeitos adversos"] },
    { n: 5, title: "Descomprimir e estabilizar", detail: "Quando indicado, executar cirurgia assim que clínica e logística permitirem, preferencialmente até 24 horas. Remover compressão, restaurar alinhamento seguro e obter estabilidade para reabilitação.", figureId: "framework-completion:trauma-medular-avaliacao", tips: ["A estratégia deve tratar a morfologia da lesão"], pitfalls: ["Descompressão sem estabilidade adequada"] },
    { n: 6, title: "Prevenir complicações secundárias", detail: "Iniciar profilaxia de tromboembolismo quando segura, cuidados de pele e bexiga, fisioterapia respiratória, nutrição e reabilitação interdisciplinar precoce.", tips: ["Planejar reabilitação desde a terapia intensiva"], pitfalls: ["Esperar alta neurológica para iniciar prevenção"] },
  ],
  postop: {
    immobilization: "Imobilização externa depende da estabilidade obtida; retirar precocemente quando possível para reduzir complicações respiratórias e cutâneas.",
    weightBearing: "Verticalização e mobilização conforme estabilidade hemodinâmica, ortopédica e neurológica.",
    rehab: [
      { window: "Primeiras 72 horas", weightBearing: "Conforme estabilidade", focus: "Perfusão, ventilação, exame seriado, pele, bexiga e prevenção tromboembólica." },
      { window: "Primeiras semanas", weightBearing: "Verticalização progressiva", focus: "Reabilitação motora, autonomia, controle de espasticidade e função intestinal/vesical." },
      { window: "Meses", weightBearing: "Individualizada", focus: "Tecnologia assistiva, prevenção de úlceras, dor neuropática, sexualidade e reintegração." },
    ],
    followup: "Reavaliar AIS e nível neurológico, alinhamento, consolidação, função respiratória, pele, trombose, espasticidade, dor, ossificação heterotópica e saúde mental.",
  },
  complications: [
    { name: "Piora neurológica secundária", detail: "Pode decorrer de hipotensão, compressão, hematoma ou perda de alinhamento.", prevention: "Perfusão, exame seriado e correção rápida da causa." },
    { name: "Insuficiência respiratória", detail: "Especialmente em lesões cervicais altas, com tosse ineficaz e atelectasia.", prevention: "Monitorização, fisioterapia e suporte ventilatório precoce." },
    { name: "Tromboembolismo venoso", detail: "Risco elevado pela paralisia e inflamação.", prevention: "Profilaxia mecânica e farmacológica quando segura." },
    { name: "Úlcera por pressão", detail: "Lesão cutânea por insensibilidade e imobilidade.", prevention: "Mudança de posição, inspeção diária e superfícies adequadas." },
    { name: "Disreflexia autonômica", detail: "Crises hipertensivas em lesões acima de T6, geralmente por estímulo visceral.", prevention: "Educação, esvaziamento vesical/intestinal e tratamento imediato do gatilho." },
  ],
  evidence: [
    { id: "nascis-ii-1990", claim: "NASCIS II originou o uso de metilprednisolona em janela estreita por análise de subgrupo, mas não estabeleceu benefício global robusto e trouxe risco de complicações.", takeaway: "Corticoide em alta dose não é rotina nem substitui ressuscitação e descompressão.", level: "I", studyType: "Ensaio clínico randomizado", era: "classico", citation: { authors: "Bracken MB, Shepard MJ, Collins WF, et al.", title: "A randomized, controlled trial of methylprednisolone or naloxone in the treatment of acute spinal-cord injury", journal: "The New England Journal of Medicine", year: 1990, pmid: "2278545", doi: "10.1056/NEJM199005173222001" } },
    { id: "stascis-2012", claim: "No STASCIS, descompressão cervical antes de 24 horas foi associada a maior chance de melhora de pelo menos dois graus AIS sem aumento significativo de complicações.", takeaway: "Após ressuscitação, remover atrasos evitáveis para descompressão indicada.", level: "II", studyType: "Coorte prospectiva multicêntrica", era: "classico", citation: { authors: "Fehlings MG, Vaccaro A, Wilson JR, et al.", title: "Early versus delayed decompression for traumatic cervical spinal cord injury: results of STASCIS", journal: "PLoS ONE", year: 2012, pmid: "22384132", doi: "10.1371/journal.pone.0032037" } },
    { id: "sci-hemodynamic-2024", claim: "Diretriz atual propõe evitar PAM abaixo de 75-80 mmHg e não aumentá-la ativamente além de 90-95 mmHg por 3-7 dias, reconhecendo evidência muito baixa.", takeaway: "Proteja perfusão e individualize vasopressores; o alvo não é uma regra absoluta.", level: "II", studyType: "Diretriz clínica baseada em revisão sistemática", era: "atual", citation: { authors: "Kwon BK, Tetreault LA, Martin AR, et al.", title: "A Clinical Practice Guideline for the Management of Patients With Acute Spinal Cord Injury: Recommendations on Hemodynamic Management", journal: "Global Spine Journal", year: 2024, pmid: "38526923", doi: "10.1177/21925682231202348" } },
  ],
  pearls: ["Exame sacral é obrigatório antes de chamar lesão de completa.", "Choque neurogênico não deve ocultar hemorragia.", "TC normal não encerra investigação de déficit neurológico.", "Evitar hipotensão é intervenção neuroprotetora imediata.", "Reabilitação e prevenção começam no primeiro dia."],
  pitfalls: ["Dar corticoide como reflexo automático.", "Adiar cirurgia indicada por etapas administrativas evitáveis.", "Confundir choque medular com choque neurogênico.", "Não repetir o exame neurológico.", "Focar apenas na coluna e negligenciar pulmão, pele, trombose e bexiga."],
  figures: [
    { id: "framework-completion:trauma-medular-avaliacao", caption: "Sequência entre exame ISNCSCI, imagem, classificação e decisão de descompressão.", alt: "Fluxograma de avaliação do trauma raquimedular e escala AIS.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Rockwood and Green's Fractures in Adults, 10a ed.; Campbell's, 14a ed." } },
    { id: "framework-completion:trauma-medular-perfusao", caption: "Prevenção da lesão secundária: oxigenação, perfusão e vigilância intensiva.", alt: "Faixa de pressão arterial média e medidas para proteger a medula lesionada.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Kwon et al., Global Spine Journal, 2024." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Rockwood and Green's Fractures in Adults, 10a ed. (2024)", "Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, 6a ed. (2025)", "STASCIS", "Kwon et al., Global Spine J 2024"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Rockwood and Green's Fractures in Adults, 10a ed. (2024), trauma da coluna e lesão medular." },
});
