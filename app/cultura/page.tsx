import type { Metadata } from "next";
import Link from "next/link";
import { PaginaHero } from "@/components/PaginaHero";
import { FONTES_CULTURA, TEMAS_CULTURA } from "@/lib/cultura";

export const metadata: Metadata = {
  title: "Cultura",
  description: "Kukradjà, o modo de viver Mẽbêngôkre-Xikrin: a Ngàb, os rituais, as pinturas, o artesanato, a língua, a caça e a pesca, os anciões e a comida.",
};

export default function Cultura() {
  const emRevisao = TEMAS_CULTURA.some((t) => !t.revisado);

  return (
    <>
      <PaginaHero
        rotulo="Cultura"
        titulo={<>Kukradjà, nosso <span className="destaque">modo de viver</span></>}
        lead="Viver com a floresta, junto à floresta e para a floresta."
        foto="/img/capas/pintura-corporal.webp"
        trilha={[{ rotulo: "Cultura", href: "/cultura/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "3rem" }}>
          <p className="lead prosa">
            O Kukradjà aparece nos jeitos de caçar, pescar, fazer artesanato, ornamentos e pinturas do corpo. Esses
            saberes passam dos Kubengêt, os anciões, para as crianças desde cedo, para que cresçam fortes e bonitas.
          </p>
          <div className="temas">
            {TEMAS_CULTURA.map((t) => (
              <article key={t.nome} className="tema">
                {t.foto ? (
                  <img src={t.foto.src} alt={t.foto.alt} loading="lazy" width={1200} height={800} />
                ) : (
                  <div className="tema__grafismo graf graf--listras" aria-hidden="true" />
                )}
                <div className="tema__corpo">
                  <h2 className="titulo-sm">{t.nome}</h2>
                  <p>{t.texto}</p>
                  {t.link && (
                    <Link className="card__link" href={t.link.href}>
                      {t.link.rotulo}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
          {emRevisao && (
            <div className="aviso">
              <p>
                <strong>Textos em revisão pela Associação.</strong> Parte desta página foi escrita a partir de estudos
                publicados sobre os Mẽbêngôkre e está sendo revisada pela Berê e pelos Kubengêt.
              </p>
              <p style={{ marginTop: "0.5rem", fontSize: "var(--texto-sm)" }}>
                Fontes:{" "}
                {FONTES_CULTURA.map((f, i) => (
                  <span key={f.url}>
                    {i > 0 && " · "}
                    <a href={f.url} target="_blank" rel="noopener">
                      {f.titulo}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
