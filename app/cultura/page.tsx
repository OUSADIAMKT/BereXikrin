import type { Metadata } from "next";
import Link from "next/link";
import { EmConstrucao } from "@/components/EmConstrucao";
import { PaginaHero } from "@/components/PaginaHero";

export const metadata: Metadata = {
  title: "Cultura",
  description: "Kukradjà, o modo de viver Mẽbêngôkre-Xikrin: a Ngàb, as pinturas, o artesanato das menire, a língua e os rituais.",
};

const TEMAS: { nome: string; texto?: string; link?: string }[] = [
  {
    nome: "Ngàb, a Casa do Guerreiro",
    texto: "No centro da aldeia, onde decidimos, fazemos festas e rituais e aprendemos com os anciões.",
    link: "/projetos/casa-do-guerreiro/",
  },
  {
    nome: "Rituais e calendário",
    texto: "O ano Xikrin se divide em tempos de caça e pesca coletivas, produção de artefatos, ritos e rituais.",
    link: "/projetos/rituais-tradicionais/",
  },
  { nome: "Pinturas corporais" },
  { nome: "Artesanato das menire" },
  { nome: "Língua Mẽbêngôkre" },
  { nome: "Caça e pesca coletivas" },
  { nome: "Kubengêt e as histórias" },
  { nome: "Culinária" },
];

export default function Cultura() {
  return (
    <>
      <PaginaHero
        rotulo="Cultura"
        titulo={<>Kukradjà, nosso <span className="destaque">modo de viver</span></>}
        lead="Viver com a floresta, junto à floresta e para a floresta."
        foto="/img/ngab-comunidade.webp"
        trilha={[{ rotulo: "Cultura", href: "/cultura/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <div className="prosa">
            <p className="lead">
              O Kukradjà aparece nos jeitos de caçar, pescar, fazer artesanato, ornamentos e pinturas do corpo. Esses
              saberes passam dos Kubengêt, os anciões, para as crianças desde cedo.
            </p>
          </div>
          <div className="grade">
            {TEMAS.map((t) => (
              <article key={t.nome} className="noticia">
                <h2 className="titulo-sm">{t.nome}</h2>
                <p>{t.texto ?? "Texto a ser escrito com a comunidade."}</p>
                {t.link && (
                  <Link className="card__link" href={t.link}>
                    Saiba mais<span className="visualmente-oculto"> sobre {t.nome}</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
          <EmConstrucao>
            Os textos sobre pinturas, artesanato, língua, caça e pesca, anciões e culinária serão escritos com a
            Associação e os Kubengêt.
          </EmConstrucao>
        </div>
      </section>
    </>
  );
}
