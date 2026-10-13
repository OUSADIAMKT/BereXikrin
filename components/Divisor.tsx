/**
 * Divisor padrão entre seções: Opção 1 do design system, a "Fita do R"
 * (faixa vermelha com o zigue-zague do "R" de Berê vazado em palha).
 * Para trocar o padrão do site inteiro, mude só aqui.
 */
export function Divisor() {
  return (
    <div className="divisor-secao divisor-secao--fita" aria-hidden="true">
      <span />
    </div>
  );
}
