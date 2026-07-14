/* ============================================================================
   Marca Revisortopedia — o marcador de chumbo.

   Toda radiografia do mundo sai com uma plaquinha de chumbo no canto marcando o
   lado: um "R" ou um "L". O chumbo barra o raio-X, então o marcador é a coisa
   mais opaca do filme — e é a primeira que o ortopedista procura, antes mesmo da
   fratura. É o vernáculo mais universal da especialidade, e o manual se chama
   Revisortopedia. A marca é esse marcador.

   Três decisões que a fazem ser desta casa e não de outra:

   1. O R é o glifo real do Newsreader 600, a mesma face do wordmark, extraído do
      arquivo variável da fonte. Não é <text>: o favicon é um arquivo solto, sem
      webfont, e cairia num serif do sistema. Monograma que sai do wordmark é como
      identidade de verdade se constrói — e as serifas tiram a marca do balde de
      "R geométrico em quadrado arredondado", que é todo app do mundo.

   2. Placa em var(--teal), letra em var(--surface): a marca INVERTE com o tema,
      como um negatoscópio. Placa escura com R claro no atlas de osso; placa clara
      com R escuro na caixa de luz. Fixar a placa na cor do filme foi testado e
      falhou — no tema escuro ela dissolve no fundo e sobra um R flutuando,
      virando um objeto diferente em cada tema.

   3. A inclinação de 5°. O marcador é jogado sobre o chassi, nunca sai reto — em
      nenhum filme, nunca. É o detalhe que prova que a coisa é real, e é a única
      liberdade que a marca se dá. A 7° já lê como acidente.

   Geometria única (viewBox 48) compartilhada com public/favicon.svg, icon.svg e
   icon-maskable.svg. Mexeu aqui, mexa lá.
   ========================================================================== */

/** Glifo "R" do Newsreader 600, altura 26, centrado em (24, 24) da caixa de 48. */
export const R_GLYPH =
  "M23.52 22.7Q25.7 22.7 27.06 21.54Q28.41 20.38 28.41 18.09Q28.41 16.61 27.82 15.58Q27.23 14.55 25.89 14.01Q24.55 13.47 22.3 13.47H15.7L16.29 11.0H24.7Q27.93 11.0 29.9 11.86Q31.87 12.72 32.76 14.19Q33.66 15.66 33.66 17.49Q33.66 19.22 32.87 20.59Q32.08 21.96 30.53 22.84Q28.98 23.72 26.65 23.99V23.89Q28.39 23.97 29.38 24.41Q30.38 24.85 30.96 25.72Q31.53 26.59 31.97 27.99L33.43 32.59Q33.82 33.84 34.21 34.4Q34.59 34.97 35.14 35.11Q35.69 35.25 36.54 35.25V36.87Q34.13 37.04 32.64 36.98Q31.14 36.92 30.28 36.54Q29.41 36.16 28.93 35.38Q28.46 34.6 28.12 33.35L26.79 28.68Q26.39 27.25 25.98 26.47Q25.57 25.69 24.92 25.38Q24.27 25.06 23.11 25.06H16.19L15.59 22.7ZM19.65 11.0V34.75L22.6 35.8V36.84H11.46V35.8L14.44 34.75V13.09L11.46 12.04V11.0Z";

/** Inclinação do marcador sobre o chassi. */
export const MARKER_TILT = -5;

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Revisortopedia">
      <g transform={`rotate(${MARKER_TILT} 24 24)`}>
        <rect x="3" y="3" width="42" height="42" rx="10" fill="var(--teal)" />
        <path d={R_GLYPH} fill="var(--surface)" />
      </g>
    </svg>
  );
}
