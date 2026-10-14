import { EmConstrucao } from "@/components/EmConstrucao";
import { PaginaHero } from "@/components/PaginaHero";
import { NOTICIAS, REDES } from "@/lib/site";
import { metaPagina } from "@/lib/meta";

export const metadata = metaPagina({
  titulo: "Notícias e conteúdos",
  descricao: "Notícias, vídeos e publicações da Associação Indígena Berê Xikrin e do projeto Restaura Amazônia.",
  caminho: "/conteudos/",
  foto: "/img/capas/danca.webp",
});

export default function Conteudos() {
  return (
    <>
      <PaginaHero
        rotulo="Conteúdos"
        titulo={<>Notícias e <span className="destaque">histórias</span></>}
        lead="O que acontece nas aldeias e nos projetos da Associação."
        foto="/img/capas/danca.webp"
        trilha={[{ rotulo: "Conteúdos", href: "/conteudos/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="grade">
            {NOTICIAS.map((n) => (
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
          <EmConstrucao>
            Notícias completas, vídeos e publicações chegam em breve. Acompanhe também no{" "}
            <a href={REDES[2].url} target="_blank" rel="noopener">
              YouTube
            </a>{" "}
            e no{" "}
            <a href={REDES[0].url} target="_blank" rel="noopener">
              Instagram
            </a>
            .
          </EmConstrucao>
        </div>
      </section>
    </>
  );
}
