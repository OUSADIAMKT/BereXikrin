import { GOVERNANCA, iniciais } from "@/lib/diretoria";
import type { Idioma } from "@/lib/rotas";

/** Diretoria Executiva, Conselho Fiscal e Coordenação das Menires, nos dois idiomas. */
export function Diretoria({ lang = "pt" }: { lang?: Idioma }) {
  const aldeia = lang === "en" ? "village" : "aldeia";
  return (
    <div className="governanca">
      {GOVERNANCA.map((g) => (
        <div key={g.titulo.pt}>
          <h3 className="titulo-sm">{g.titulo[lang]}</h3>
          <ul className="diretoria diretoria--fotos">
            {g.membros.map((m) => (
              <li key={m.nome}>
                {m.foto ? (
                  <img
                    src={`/img/diretoria/${m.foto}.webp`}
                    alt={lang === "en" ? `Portrait of ${m.nome}` : `Retrato de ${m.nome}`}
                    width={480}
                    height={520}
                    loading="lazy"
                  />
                ) : (
                  <div className="sem-foto" aria-hidden="true">
                    {iniciais(m.nome)}
                  </div>
                )}
                <div className="nome">
                  <strong>{m.nome}</strong>
                  <span>{m.cargo[lang]}</span>
                  {m.aldeia && (
                    <span className="nome__aldeia">
                      {lang === "en" ? `${m.aldeia} ${aldeia}` : `${aldeia} ${m.aldeia}`}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
