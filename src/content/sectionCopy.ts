import type { SectionKey, TopicKind } from "../types/topic";

/* ============================================================================
   Cópia das seções por TIPO de tópico.

   O schema é o mesmo para todos — o que muda é como cada seção se chama. Uma
   fratura tem "Redução e fixação, passo a passo"; um exame físico tem
   "Manobras, passo a passo"; um princípio tem "Aplicação, passo a passo". Sem
   isso, o conteúdo teria que ser deformado para caber no molde de fratura.

   Seções sem conteúdo já são escondidas pelo TopicView (hasContent), então um
   tópico de propedêutica simplesmente não declara `approaches` e a seção some.
   ========================================================================== */

export interface SectionCopy {
  eyebrow: string;
  title: string;
  short: string;
}

const BASE: Record<SectionKey, SectionCopy> = {
  overview: { eyebrow: "Visão geral", title: "Panorama da lesão", short: "Geral" },
  anatomy: { eyebrow: "Anatomia", title: "Anatomia cirúrgica", short: "Anatomia" },
  classification: { eyebrow: "Classificação", title: "Sistemas de classificação", short: "Classif." },
  indications: { eyebrow: "Indicações", title: "Operar ou não operar", short: "Indic." },
  approaches: { eyebrow: "Vias de acesso", title: "Abordagens cirúrgicas", short: "Vias" },
  technique: { eyebrow: "Técnica", title: "Redução e fixação, passo a passo", short: "Técnica" },
  postop: { eyebrow: "Pós-op", title: "Pós-operatório e reabilitação", short: "Pós-op" },
  complications: { eyebrow: "Complicações", title: "Complicações e prevenção", short: "Compl." },
  evidence: { eyebrow: "Evidência", title: "Base de evidências", short: "Evidência" },
  pearls: { eyebrow: "Pérolas", title: "Pérolas e armadilhas", short: "Pérolas" },
};

type Overrides = Partial<Record<SectionKey, Partial<SectionCopy>>>;

const BY_KIND: Partial<Record<TopicKind, Overrides>> = {
  condicao: {
    overview: { title: "Panorama da condição" },
    anatomy: { eyebrow: "Anatomia", title: "Anatomia e fisiopatologia" },
    classification: { title: "Classificação e estadiamento" },
    indications: { eyebrow: "Conduta", title: "Quando intervir" },
    approaches: { eyebrow: "Métodos", title: "Métodos, órteses e vias" },
    technique: { eyebrow: "Conduta", title: "Conduta, passo a passo", short: "Conduta" },
    postop: { eyebrow: "Seguimento", title: "Seguimento e reabilitação", short: "Seguim." },
  },
  procedimento: {
    overview: { title: "Panorama do procedimento" },
    classification: { eyebrow: "Implantes", title: "Tipos, implantes e conceitos" },
    indications: { title: "Indicações e contraindicações" },
    technique: { title: "Técnica, passo a passo" },
  },
  fundamento: {
    overview: { eyebrow: "Visão geral", title: "Panorama do princípio" },
    anatomy: { eyebrow: "Base", title: "Base biológica e mecânica", short: "Base" },
    classification: { eyebrow: "Conceitos", title: "Conceitos e tipos", short: "Conceitos" },
    indications: { eyebrow: "Aplicação", title: "Quando aplicar cada princípio", short: "Quando" },
    approaches: { eyebrow: "Recursos", title: "Recursos e implantes", short: "Recursos" },
    technique: { eyebrow: "Aplicação", title: "Aplicação, passo a passo", short: "Aplicação" },
    postop: { eyebrow: "Acompanhamento", title: "Acompanhamento e desfechos", short: "Segue" },
    complications: { eyebrow: "Falhas", title: "Modos de falha e prevenção", short: "Falhas" },
  },
  propedeutica: {
    overview: { eyebrow: "Visão geral", title: "Panorama do exame" },
    anatomy: { eyebrow: "Anatomia", title: "Anatomia de superfície e referências", short: "Anatomia" },
    classification: { eyebrow: "Achados", title: "Achados e interpretação", short: "Achados" },
    indications: { eyebrow: "Quando", title: "Quando indicar imagem ou exames", short: "Quando" },
    approaches: { eyebrow: "Sequência", title: "Sequência do exame", short: "Sequência" },
    technique: { eyebrow: "Manobras", title: "Manobras, passo a passo", short: "Manobras" },
    postop: { eyebrow: "Documentação", title: "Documentação e reavaliação", short: "Registro" },
    complications: { eyebrow: "Armadilhas", title: "Erros e falsos resultados", short: "Erros" },
  },
};

/** Cópia de uma seção para o tipo do tópico (com fallback para fratura). */
export function sectionCopy(kind: TopicKind, key: SectionKey): SectionCopy {
  return { ...BASE[key], ...(BY_KIND[kind]?.[key] ?? {}) };
}
