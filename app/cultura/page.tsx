import Link from "next/link";
import { EmConstrucao } from "@/components/EmConstrucao";
import { PaginaHero } from "@/components/PaginaHero";
import { TEMAS_CULTURA } from "@/lib/cultura";
import { Foto } from "@/components/Foto";
import { metaPagina } from "@/lib/meta";

export const metadata = metaPagina({
  titulo: "Cultura",
  descricao: "Kukradjà, o modo de ser e de viver Mẽbêngôkre-Xikrin: a Ngàb, os rituais, as menire e o grafismo, os Kubengêt.",
  caminho: "/cultura/",
  foto: "/img/capas/pintura-corporal.webp",
});

export default function Cultura() {
  // Só vai ao ar o que a Associação já aprovou (decisão do cliente em 13/10/2026).
  const publicados = TEMAS_CULTURA.filter((t) => t.revisado);
  const emRevisao = publicados.length < TEMAS_CULTURA.length;

  return (
    <>
      <PaginaHero
        rotulo="Cultura"
        titulo={<>Kukradjà, o <span className="destaque">modo de viver</span> Xikrin</>}
        lead="Viver com a floresta, junto à floresta e para a floresta."
        foto="/img/capas/pintura-corporal.webp"
        trilha={[{ rotulo: "Cultura", href: "/cultura/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "3rem" }}>
          <p className="lead prosa">
            O kukradjà é o modo de ser e de viver Xikrin. Nas palavras do PGTA do povo: “nossas ideias sobre o mundo,
            nossos atos, nossa sociedade, nossa organização política, nossa saúde, tudo faz parte do kukradjà e a floresta
            faz parte disso tudo também”.
          </p>
          <div className="temas">
            {publicados.map((t) => (
              <article key={t.nome} className="tema">
                {t.foto ? (
                  <Foto sizes="(max-width: 700px) 100vw, 33vw" src={t.foto.src} alt={t.foto.alt} loading="lazy" width={1200} height={800} />
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
            <EmConstrucao>
              Em breve, mais sobre {TEMAS_CULTURA.filter((t) => !t.revisado).map((t) => t.nome.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " e $1")}.
            </EmConstrucao>
          )}
        </div>
      </section>
    </>
  );
}
