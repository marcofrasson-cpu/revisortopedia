/* Espera de rota. Abrir um tópico busca ~3,9 MB de dados e figuras, o que numa
   rede de celular são segundos — antes disso a página ficava em branco.

   O desenho é contido de propósito: o cabeçalho e a árvore de navegação seguem
   visíveis atrás, então aqui basta ocupar o lugar do texto que vem. Sem spinner,
   sem "Carregando…": as barras já dizem que é um tópico chegando, e a animação
   respeita prefers-reduced-motion pela regra global de src/index.css. */
export default function RouteFallback() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      {/* O aria-hidden fica só nas barras: são forma, não conteúdo. Envolver o
          bloco inteiro esconderia o aviso abaixo junto, e a espera ficaria muda
          para quem usa leitor de tela. */}
      <div className="animate-pulse" aria-hidden="true">
        <div className="h-2.5 w-28 rounded bg-surface-2" />
        <div className="mt-5 h-9 w-2/3 rounded bg-surface-2 sm:h-11" />
        <div className="mt-4 h-4 w-1/2 rounded bg-surface-2" />
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="h-[4.5rem] bg-surface" />
          ))}
        </div>
      </div>
      <span className="sr-only" role="status">
        Carregando o conteúdo
      </span>
    </div>
  );
}
