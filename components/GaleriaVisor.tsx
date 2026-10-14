"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type FotoVisor = { src: string; alt: string; srcSet?: string };

/**
 * Visualizador em tela cheia com <dialog>: Esc fecha, setas do teclado e
 * botões passam as fotos, o foco volta para a miniatura ao fechar.
 */
export function GaleriaVisor({ fotos, credito }: { fotos: FotoVisor[]; credito: string }) {
  const [atual, setAtual] = useState<number | null>(null);
  const dialogo = useRef<HTMLDialogElement>(null);
  const origem = useRef<HTMLButtonElement | null>(null);

  const abrir = (i: number, botao: HTMLButtonElement) => {
    origem.current = botao;
    setAtual(i);
    dialogo.current?.showModal();
  };
  const fechar = useCallback(() => {
    dialogo.current?.close();
  }, []);
  const passar = useCallback(
    (d: number) => setAtual((i) => (i === null ? i : (i + d + fotos.length) % fotos.length)),
    [fotos.length],
  );

  useEffect(() => {
    const el = dialogo.current;
    if (!el) return;
    const aoFechar = () => {
      setAtual(null);
      origem.current?.focus();
    };
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") passar(1);
      if (e.key === "ArrowLeft") passar(-1);
    };
    el.addEventListener("close", aoFechar);
    el.addEventListener("keydown", tecla);
    return () => {
      el.removeEventListener("close", aoFechar);
      el.removeEventListener("keydown", tecla);
    };
  }, [passar]);

  const foto = atual === null ? null : fotos[atual];

  return (
    <figure className="galeria">
      <ul>
        {fotos.map((f, i) => (
          <li key={f.src}>
            <button type="button" onClick={(e) => abrir(i, e.currentTarget)} aria-label={`Ampliar: ${f.alt}`}>
              <img
                src={f.src}
                srcSet={f.srcSet}
                sizes="(max-width: 700px) 100vw, 25vw"
                alt={f.alt}
                loading="lazy"
                width={1200}
                height={800}
              />
            </button>
          </li>
        ))}
      </ul>
      <figcaption>{credito}</figcaption>

      <dialog
        ref={dialogo}
        className="visor"
        aria-label="Foto ampliada"
        onClick={(e) => {
          if (e.target === e.currentTarget) fechar();
        }}
      >
        {foto && (
          <div className="visor__conteudo">
            <img src={foto.src} alt={foto.alt} />
            <p className="visor__legenda">
              {foto.alt}
              <span>
                {credito} · {atual! + 1} de {fotos.length}
              </span>
            </p>
            {fotos.length > 1 && (
              <>
                <button type="button" className="visor__seta visor__seta--ant" onClick={() => passar(-1)} aria-label="Foto anterior">
                  ‹
                </button>
                <button type="button" className="visor__seta visor__seta--prox" onClick={() => passar(1)} aria-label="Próxima foto">
                  ›
                </button>
              </>
            )}
            <button type="button" className="visor__fechar" onClick={fechar} aria-label="Fechar">
              ×
            </button>
          </div>
        )}
      </dialog>
    </figure>
  );
}
