import type { Foto } from "@/lib/site";

/**
 * Grade de fotos com legenda de crédito. Cada foto abre em tamanho cheio
 * numa aba nova: sem script, funciona na exportação estática.
 */
export function Galeria({ fotos, credito }: { fotos: Foto[]; credito: string }) {
  return (
    <figure className="galeria">
      <ul>
        {fotos.map((f) => (
          <li key={f.src}>
            <a href={f.src} target="_blank" rel="noopener">
              <img src={f.src} alt={f.alt} loading="lazy" width={1200} height={800} />
            </a>
          </li>
        ))}
      </ul>
      <figcaption>{credito}</figcaption>
    </figure>
  );
}
