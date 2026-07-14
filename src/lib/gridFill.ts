/* A grade de fatos-chave desenha seus fios deixando o fundo do container (bg-line)
   aparecer através de um gap de 1px. Quando os fatos não completam a última linha,
   a área restante também é fundo — e vira um bloco cinza sólido no lugar de uma
   célula. Acontece em 42 dos 98 tópicos com 3 colunas e em 21 com 2 colunas.

   A correção são células vazias que completam a linha. Como a contagem de colunas
   muda com o breakpoint, cada célula precisa saber em quais deles ela existe. */

export interface Filler {
  /** Visível na grade de 2 colunas (< sm). */
  narrow: boolean;
  /** Visível na grade de 3 colunas (>= sm). */
  wide: boolean;
}

function missing(count: number, columns: number): number {
  return (columns - (count % columns)) % columns;
}

/** Células vazias necessárias para fechar a última linha em ambos os breakpoints. */
export function fillers(count: number, narrowColumns = 2, wideColumns = 3): Filler[] {
  if (count === 0) return [];
  const narrow = missing(count, narrowColumns);
  const wide = missing(count, wideColumns);
  return Array.from({ length: Math.max(narrow, wide) }, (_, index) => ({
    narrow: index < narrow,
    wide: index < wide,
  }));
}
