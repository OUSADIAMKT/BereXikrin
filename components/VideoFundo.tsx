"use client";

import { useEffect, useState } from "react";

/**
 * Vídeo do YouTube como fundo do hero (mudo, em loop, sem controles). A foto do
 * hero aparece primeiro; o vídeo só é carregado depois da primeira pintura e
 * não é carregado com "reduzir movimento" ou "economia de dados" ligados.
 */
export function VideoFundo({ id }: { id: string }) {
  const [ligado, setLigado] = useState(false);

  useEffect(() => {
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conexao = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduz || conexao?.saveData) return;
    const t = setTimeout(() => setLigado(true), 600);
    return () => clearTimeout(t);
  }, []);

  if (!ligado) return null;
  const params = new URLSearchParams({
    autoplay: "1", mute: "1", loop: "1", playlist: id, controls: "0", modestbranding: "1",
    rel: "0", playsinline: "1", disablekb: "1", iv_load_policy: "3",
  });
  return (
    <div className="video-fundo" aria-hidden="true">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?${params}`}
        title=""
        tabIndex={-1}
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
