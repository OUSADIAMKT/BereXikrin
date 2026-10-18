"use client";

import { useState } from "react";

/** Botão que copia a chave PIX; sem permissão de área de transferência, a chave segue visível na página. */
export function CopiarPix({ chave, rotulo, copiado }: { chave: string; rotulo: string; copiado: string }) {
  const [ok, setOk] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(chave);
      setOk(true);
      setTimeout(() => setOk(false), 2500);
    } catch {
      /* a chave continua visível para copiar à mão */
    }
  }

  return (
    <button type="button" className="btn btn--marca" onClick={copiar} aria-live="polite">
      {ok ? copiado : rotulo}
    </button>
  );
}
