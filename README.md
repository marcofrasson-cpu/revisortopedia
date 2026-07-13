# Revisortopedia

Revisor pessoal de cirurgias ortopédicas — referência interativa, ilustrada e passo a passo, no estilo do AO Surgery Reference. **Offline-first (PWA)**, em português do Brasil.

O v1 entrega um **framework de ortopedia inteira** (árvore de navegação de 7 regiões) com **conteúdo completo e baseado em evidência para o tópico-semente: fratura maleolar do tornozelo** — anatomia, classificação (Danis-Weber, Lauge-Hansen, AO/OTA), indicações, vias de acesso, técnica passo a passo, pós-op/reabilitação, complicações, evidência citada e pérolas/armadilhas.

## Rodar

```bash
npm install
npm run dev          # http://localhost:5173  (desenvolvimento, hot reload)
```

Versão de produção (service worker + precache, instalável, funciona offline):

```bash
npm run build
npm run preview      # http://localhost:4173
```

Abra `http://localhost:5173` (ou `:4173`) no navegador. Para instalar como app: menu do navegador → "Instalar Revisortopedia". Depois de aberto uma vez, funciona sem internet.

## Verificação

```bash
npm run test         # Vitest — content-lint (schema zod), registry, busca, render
npm run typecheck    # tsc --noEmit
npm run build        # build de produção + geração do PWA
```

## Arquitetura

Conteúdo é **dado tipado, dirigido por schema** (`src/types/topic.ts`, validado com zod). A UI renderiza qualquer tópico genericamente — **um tópico novo é um arquivo de dados novo, sem código de layout novo.**

```
src/
  types/topic.ts            # schema zod + tipos (o contrato)
  content/
    registry.ts             # árvore de navegação, prev/next, fonte da busca
    regions.ts              # framework de ortopedia inteira (7 regiões)
    topics/                 # tópicos (dado). fratura-maleolar-tornozelo.ts = semente
    figures/                # figuras SVG esquemáticas ORIGINAIS (sem copyright)
  components/
    layout/                 # AppShell, NavTree, TopBar, CommandPalette, Breadcrumb, ThemeToggle
    topic/                  # TopicView + SectionRail + Stepper + FigurePanel + sections/
  pages/                    # Home, Region, Topic, NotFound
  search/                   # busca fuzzy client-side (Fuse.js)
  store/                    # tema + estado do usuário (IndexedDB: favoritos, notas, histórico)
  ui/                       # primitivas + ícones
```

Stack: Vite · React 19 · TypeScript · Tailwind CSS v4 · react-router-dom (HashRouter) · zustand · Fuse.js · idb-keyval · vite-plugin-pwa. Sem backend — tudo empacotado no build.

## Evidência

As citações da fratura de tornozelo foram recuperadas do **PubMed**; cada item traz nível de evidência, tipo de estudo e link DOI. Mistura clássicas (Lauge-Hansen, maléolo posterior) e atuais (RCTs de sindesmose, carga precoce, Cochrane 2024). Os esquemas SVG são originais e didáticos — **não substituem imagem radiográfica real nem julgamento clínico.**

## Design

Identidade "console de planejamento cirúrgico": tema claro *atlas* (bone-ivory) / escuro *light-box* (radiográfico). Teal = estrutura. Cortical-red = traços de fratura e perigo. Amber = medidas. Mono (IBM Plex Mono) para códigos de classificação. Serif (Newsreader) nos títulos, Hanken Grotesk no corpo.

---

Spec de design: [`docs/superpowers/specs/2026-07-12-orthopedic-surgery-reviewer-design.md`](docs/superpowers/specs/2026-07-12-orthopedic-surgery-reviewer-design.md)
