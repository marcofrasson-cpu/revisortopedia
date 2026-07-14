import { defineTopic } from "../../types/topic";

export const topic = defineTopic({
  id: "col-cervical-mielopatia-degenerativa",
  slug: "mielopatia-cervical-espondilotica",
  kind: "condicao",
  regionId: "coluna",
  bone: "Coluna cervical",
  injury: "Mielopatia cervical degenerativa",
  title: "Mielopatia cervical espondilótica",
  subtitle: "Reconhecer disfunção medular progressiva, graduar com mJOA e descomprimir antes que o déficit se torne irreversível.",
  laterality: null,
  status: "complete",
  overview: "A mielopatia cervical degenerativa é a disfunção da medula causada por estreitamento cervical estático e dinâmico. Osteófitos, abaulamento discal, hipertrofia ou ossificação ligamentar e instabilidade reduzem o espaço disponível; flexão e extensão acrescentam deformação repetitiva e comprometimento vascular. O quadro típico combina perda de destreza manual, parestesias, marcha desequilibrada, hiperreflexia e sinais piramidais. Dor cervical pode faltar, e a ausência do sinal de Hoffman não exclui doença.\n\nO diagnóstico é clínico-radiológico. A RM confirma compressão, níveis e alteração de sinal, mas compressão assintomática é frequente e não deve ser tratada como mielopatia. Radiografias avaliam alinhamento e mobilidade; TC esclarece ossificação do ligamento longitudinal posterior. A gravidade deve ser registrada com a escala mJOA: leve 15-17, moderada 12-14 e grave até 11.\n\nA cirurgia interrompe a agressão mecânica e oferece recuperação funcional, sem prometer normalização. Mielopatia moderada, grave ou progressiva indica descompressão. Em doença leve estável, cirurgia ou reabilitação estruturada com vigilância estreita são aceitáveis. A escolha anterior, posterior ou combinada depende de número de níveis, local da compressão, alinhamento, instabilidade e qualidade óssea, não apenas da imagem mais exuberante.",
  keyFacts: [
    { label: "Síndrome", value: "Mãos desajeitadas + marcha alterada + sinais de neurônio motor superior" },
    { label: "Escala", value: "mJOA: leve 15-17 · moderada 12-14 · grave 0-11" },
    { label: "Imagem", value: "RM confirma compressão; radiografia define alinhamento; TC avalia ossificação" },
    { label: "Sinal de alerta", value: "Progressão clínica pesa mais que intensidade isolada do sinal na RM" },
    { label: "Cirurgia", value: "Indicada em doença moderada, grave ou em deterioração" },
    { label: "Objetivo", value: "Descomprimir e estabilizar quando necessário; recuperação é variável" },
  ],
  anatomy: {
    text: "A medula cervical ocupa um canal limitado anteriormente por corpos, discos e ligamento longitudinal posterior e posteriormente por lâminas e ligamento amarelo. A reserva liquórica diminui com espondilose. Compressão ventral focal favorece acesso anterior; compressão multissegmentar com lordose preservada pode permitir descompressão posterior.\n\nTratos corticoespinais explicam espasticidade, hiperreflexia e sinal de Babinski. Colunas posteriores contribuem para perda proprioceptiva e instabilidade no escuro. Comprometimento segmentar de cornos anteriores e raízes pode produzir atrofia, fraqueza e hiporreflexia no membro superior no mesmo paciente que apresenta hiperreflexia nos membros inferiores.\n\nCifose impede o deslocamento posterior da medula após laminectomia ou laminoplastia e muda a estratégia. Instabilidade, dor axial relevante e risco de progressão deformante favorecem fusão associada.",
    figureIds: ["framework-completion:mielopatia-vias", "framework-completion:mielopatia-decisao"],
  },
  classification: [
    {
      id: "mjoa",
      name: "Escala modificada da Japanese Orthopaedic Association (mJOA)",
      basis: "Função motora de membros superiores e inferiores, sensibilidade e controle esfincteriano; total de 18 pontos.",
      types: [
        { code: "15-17", label: "Leve", description: "Déficit funcional discreto; discutir cirurgia ou reabilitação estruturada com reavaliação objetiva.", figureId: "framework-completion:mielopatia-decisao", figureVariant: "leve" },
        { code: "12-14", label: "Moderada", description: "Comprometimento funcional estabelecido; descompressão cirúrgica é recomendada.", figureId: "framework-completion:mielopatia-decisao", figureVariant: "moderada" },
        { code: "0-11", label: "Grave", description: "Disfunção avançada; cirurgia é recomendada, com prognóstico condicionado por duração e gravidade.", figureId: "framework-completion:mielopatia-decisao", figureVariant: "grave" },
      ],
    },
  ],
  indications: {
    operative: [
      "Mielopatia moderada ou grave.",
      "Deterioração neurológica documentada, mesmo em doença inicialmente leve.",
      "Falha de reabilitação estruturada em mielopatia leve.",
      "Compressão associada a instabilidade, deformidade ou radiculopatia incapacitante.",
    ],
    nonOperative: [
      "Mielopatia leve, estável e sem incapacidade relevante, desde que haja seguimento próximo.",
      "Compressão medular assintomática sem radiculopatia: educação e vigilância, não cirurgia profilática rotineira.",
      "Risco clínico desproporcional ao benefício esperado, após decisão compartilhada.",
    ],
    decisionNotes: "Anterior é favorecida por compressão ventral em um a três níveis, cifose ou necessidade de reconstrução. Posterior é favorecida por doença multissegmentar com lordose preservada; laminoplastia mantém movimento em pacientes selecionados, enquanto laminectomia com fusão controla instabilidade ou risco de deformidade. Ossificação extensa do ligamento longitudinal posterior exige avaliar a razão de ocupação e a linha K.",
  },
  approaches: [
    { id: "anterior", name: "Descompressão cervical anterior", indication: "Compressão ventral focal, cifose, instabilidade discal ou reconstrução de poucos níveis.", interval: "Plano pré-vascular até a face anterior da coluna; discectomia ou corpectomia conforme extensão.", atRisk: ["Nervo laríngeo recorrente", "Esôfago", "Artéria vertebral", "Dura-máter em ossificação aderida"], figureId: "framework-completion:mielopatia-vias" },
    { id: "posterior", name: "Descompressão posterior", indication: "Estenose multissegmentar com lordose suficiente para migração posterior da medula.", interval: "Exposição subperiosteal de elementos posteriores; laminoplastia ou laminectomia com fusão.", atRisk: ["Raiz C5", "Artérias vertebrais lateralmente", "Musculatura extensora e cápsulas adjacentes"], figureId: "framework-completion:mielopatia-vias" },
  ],
  technique: [
    { n: 1, title: "Confirmar a síndrome", detail: "Documentar destreza, marcha, força, sensibilidade, reflexos, sinais piramidais, função esfincteriana e mJOA. Excluir neuropatia periférica, doença motoneuronal, deficiência de B12 e outras causas.", figureId: "framework-completion:mielopatia-decisao", tips: ["Registrar teste de marcha e mJOA cria uma linha de base objetiva"], pitfalls: ["Operar uma RM sem correlação clínica"] },
    { n: 2, title: "Mapear compressão e alinhamento", detail: "Combinar RM com radiografias AP, perfil e dinâmicas quando seguras. Usar TC para ossificação, anatomia óssea e planejamento de instrumentação.", figureId: "framework-completion:mielopatia-vias", tips: ["Avaliar todos os níveis e a junção cervicotorácica"], pitfalls: ["Ignorar cifose ou instabilidade"] },
    { n: 3, title: "Escolher a estratégia", detail: "Relacionar ventral versus dorsal, número de níveis, lordose, instabilidade, dor axial, qualidade óssea e comorbidades. Definir se a descompressão exige fusão.", figureId: "framework-completion:mielopatia-vias", tips: ["O objetivo é descompressão contínua, não tratar cada osteófito isoladamente"], pitfalls: ["Escolher acesso apenas pelo número de níveis"] },
    { n: 4, title: "Descomprimir com controle", detail: "Manter pressão arterial e posicionamento seguros, descomprimir sem manipular a medula e confirmar liberdade neural. Instrumentar quando indicado e verificar alinhamento.", tips: ["Neuromonitorização pode auxiliar em casos complexos"], pitfalls: ["Tração ou extensão excessiva em canal criticamente estreito"] },
    { n: 5, title: "Medir recuperação", detail: "Reavaliar déficit, deglutição, ferida e mJOA. A melhora costuma ocorrer nos primeiros meses e pode continuar por até um ano.", figureId: "framework-completion:mielopatia-decisao", tips: ["Estabilidade neurológica já representa sucesso em doença progressiva"], pitfalls: ["Interpretar sinal medular persistente como falha isolada"] },
  ],
  postop: {
    immobilization: "Colar é seletivo e depende da reconstrução, qualidade óssea e preferência da equipe; não substitui fixação estável.",
    weightBearing: "Deambulação precoce com prevenção de quedas; restrições de carga axial e esforço conforme a construção.",
    rehab: [
      { window: "0-2 semanas", weightBearing: "Marcha assistida conforme segurança", focus: "Exame neurológico, deglutição, equilíbrio e cuidado da ferida." },
      { window: "2-12 semanas", weightBearing: "Progressiva", focus: "Marcha, destreza, força funcional e proteção da artrodese." },
      { window: "3-12 meses", weightBearing: "Sem restrição após consolidação", focus: "Recuperação neurológica, retorno funcional e prevenção de quedas." },
    ],
    followup: "Radiografias conforme reconstrução; mJOA e marcha em consultas seriadas. Deterioração nova exige investigar hematoma, compressão residual, nível adjacente ou outra doença neurológica.",
  },
  complications: [
    { name: "Paralisia de C5", detail: "Fraqueza nova de deltoide e bíceps, mais comum após grande migração posterior da medula.", prevention: "Planejamento de descompressão e foraminal; reconhecer e investigar precocemente." },
    { name: "Disfagia ou disfonia", detail: "Complicação do acesso anterior, geralmente transitória.", prevention: "Dissecção delicada, tempo e pressão de afastamento controlados." },
    { name: "Hematoma cervical", detail: "Pode comprometer via aérea ou medula e requer avaliação emergencial.", prevention: "Hemostasia, vigilância e descompressão imediata quando sintomático." },
    { name: "Cifose ou instabilidade pós-laminectomia", detail: "Perda tardia do alinhamento e recorrência de compressão.", prevention: "Preservar estruturas e associar fusão quando o risco é relevante." },
    { name: "Déficit residual", detail: "Dano medular crônico pode não reverter apesar de descompressão adequada.", prevention: "Diagnóstico e tratamento antes de incapacidade avançada." },
  ],
  evidence: [
    { id: "dcm-guideline-2017", claim: "Diretriz recomenda cirurgia para mielopatia moderada ou grave e para deterioração ou falha de reabilitação na doença leve.", takeaway: "Gravidade e progressão clínica orientam a indicação.", level: "II", studyType: "Diretriz clínica baseada em revisão sistemática", era: "atual", citation: { authors: "Fehlings MG, Tetreault LA, Riew KD, et al.", title: "A Clinical Practice Guideline for the Management of Patients With Degenerative Cervical Myelopathy", journal: "Global Spine Journal", year: 2017, pmid: "29164035", doi: "10.1177/2192568217701914" } },
    { id: "aospine-na-2013", claim: "Descompressão cirúrgica foi associada a melhora clinicamente significativa de função, incapacidade e qualidade de vida em estudo prospectivo multicêntrico.", takeaway: "Cirurgia trata a síndrome funcional, não apenas o diâmetro do canal.", level: "II", studyType: "Coorte prospectiva multicêntrica", era: "classico", citation: { authors: "Fehlings MG, Wilson JR, Kopjar B, et al.", title: "Efficacy and safety of surgical decompression in patients with cervical spondylotic myelopathy", journal: "The Journal of Bone and Joint Surgery. American Volume", year: 2013, pmid: "24048552", doi: "10.2106/JBJS.L.00589" } },
    { id: "aospine-global-2015", claim: "A melhora após descompressão foi reproduzida em 479 pacientes de diferentes regiões e sistemas de saúde.", takeaway: "O benefício cirúrgico é consistente, embora a recuperação individual dependa de gravidade e tempo de doença.", level: "II", studyType: "Coorte prospectiva internacional", era: "atual", citation: { authors: "Fehlings MG, Ibrahim A, Tetreault L, et al.", title: "A global perspective on the outcomes of surgical decompression in patients with cervical spondylotic myelopathy", journal: "Spine", year: 2015, pmid: "26020847", doi: "10.1097/BRS.0000000000000988" } },
  ],
  pearls: ["Mãos desajeitadas e marcha alterada precedem fraqueza grosseira.", "Compressão na RM sem síndrome clínica não é mielopatia.", "Progressão pesa mais que um único sinal do exame.", "Lordose é pré-requisito para descompressão posterior indireta.", "Explique que a cirurgia busca deter progressão e permitir recuperação possível."],
  pitfalls: ["Atribuir desequilíbrio do idoso apenas à idade.", "Usar sinal de Hoffman isoladamente para confirmar ou excluir.", "Adiar doença progressiva para fisioterapia repetitiva.", "Realizar laminectomia isolada em coluna cifótica ou instável.", "Prometer normalização neurológica em mielopatia crônica grave."],
  figures: [
    { id: "framework-completion:mielopatia-vias", caption: "Compressão ventral e dorsal, alinhamento e lógica de escolha do acesso.", alt: "Esquema sagital da coluna cervical comparando descompressão anterior e posterior.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Campbell's Operative Orthopaedics, 14a ed.; Hebert e Lech, 6a ed." } },
    { id: "framework-completion:mielopatia-decisao", caption: "Gravidade pela mJOA e conduta inicial recomendada.", alt: "Fluxo da mielopatia leve, moderada e grave até observação ou cirurgia.", kind: "diagram", source: { label: "Diagrama editorial original", reference: "Fehlings et al., Global Spine Journal, 2017." } },
  ],
  meta: { lastReviewed: "2026-07-14", sources: ["Campbell's Operative Orthopaedics, 14a ed. (2021)", "Hebert e Lech, Ortopedia e Traumatologia, 6a ed. (2025)", "Fehlings et al., Global Spine J 2017", "AOSpine prospective studies"], attribution: "Conteúdo original em português brasileiro, revisado com bibliografia oficial do 55o TEOT e artigos PubMed.", figureReference: "Campbell's Operative Orthopaedics, 14a ed. (2021), coluna cervical degenerativa." },
});
