import { EmConstrucao } from "@/components/EmConstrucao";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { REDES } from "@/lib/site";
import { NOTICIAS_EN } from "@/lib/site-en";

export const metadata = metaPagina({
  titulo: "News",
  descricao: "News, videos and publications from the Berê Xikrin Indigenous Association and the Restaura Amazônia project.",
  caminho: "/en/news/",
  foto: "/img/capas/danca.webp",
});

export default function NewsEn() {
  return (
    <>
      <PaginaHero
        lang="en"
        rotulo="News"
        titulo={<>News and <span className="destaque">stories</span></>}
        lead="What is happening in the villages and in the Association’s projects."
        foto="/img/capas/danca.webp"
        trilha={[{ rotulo: "News", href: "/en/news/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="grade">
            {NOTICIAS_EN.map((n) => (
              <article className="noticia" key={n.titulo}>
                <span>
                  <span className="tag tag--jenipapo">{n.categoria}</span>
                </span>
                <time dateTime={n.data}>{n.dataTexto}</time>
                <h2 className="titulo-sm">{n.titulo}</h2>
                <p>{n.resumo}</p>
              </article>
            ))}
          </div>
          <EmConstrucao lang="en">
            Full stories, videos and publications are coming soon. You can also follow Berê on{" "}
            <a href={REDES[2].url} target="_blank" rel="noopener">
              YouTube
            </a>{" "}
            and{" "}
            <a href={REDES[0].url} target="_blank" rel="noopener">
              Instagram
            </a>{" "}
            (in Portuguese).
          </EmConstrucao>
        </div>
      </section>
    </>
  );
}
