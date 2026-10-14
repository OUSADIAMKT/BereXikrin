import Link from "next/link";
import { EmConstrucao } from "@/components/EmConstrucao";
import { Foto } from "@/components/Foto";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";

export const metadata = metaPagina({
  titulo: "Culture",
  descricao: "Kukradjà, the Mẽbêngôkre-Xikrin way of being and living: the Ngàb, rituals, the menire and their graphic patterns, the Kubengêt.",
  caminho: "/en/culture/",
  foto: "/img/capas/pintura-corporal.webp",
});

/** Only the themes approved in Portuguese (lib/cultura.ts, revisado: true). */
const TEMAS = [
  {
    nome: "Ngàb, the Warriors’ House",
    texto:
      "At the center of the village stands the Ngàb, the warriors’ house: the political space where each village makes its decisions. Meetings, celebrations and rituals happen there, and it is where the young learn from the Kubengêt about customs, stories, music, dance and body painting.",
    foto: { src: "/img/capas/ngab.webp", alt: "The Ngàb, a large open house roofed with thatch at the center of the village" },
    link: { href: "/en/projects/warriors-house/", rotulo: "Warriors’ House project" },
  },
  {
    nome: "Rituals and the calendar",
    texto:
      "The Xikrin year has its seasons: times for collective hunting and fishing, for making artifacts, for rites and rituals. Rituals bring the villages together and ensure knowledge passes from one generation to the next.",
    foto: { src: "/img/projetos/rituais-1.webp", alt: "Women and children gathered while preparing for a ritual" },
    link: { href: "/en/projects/traditional-rituals/", rotulo: "Traditional Rituals project" },
  },
  {
    nome: "The menire and their graphic patterns",
    texto:
      "The menire, Xikrin women, learn graphic patterns from meprire, early childhood: they practice on clay dolls and, as teenagers, paint one another. The patterns are ancient; painting on fabric is more recent. Around 69 artisans make bio-jewelry, painted canvases and pieces with seeds and fibers from the territory. The Menire Xikrin Free School is certified by Brazil’s Ministry of Culture.",
    foto: { src: "/img/menire/menire-6.webp", alt: "Three Xikrin artisans show bags with graphic patterns" },
    link: { href: "/en/products/", rotulo: "Menire handicrafts" },
  },
  {
    nome: "The Kubengêt and their stories",
    texto:
      "The Kubengêt are the elders, “those who truly know”. The council of elders and chiefs is the highest collective decision-making body. In a young population, where elders are less than 3% of the people in the Association’s villages, Berê recognizes them as Living Heritage.",
    foto: { src: "/img/cultura/kubenget.webp", alt: "Xikrin elder wearing a feather headdress" },
  },
];

export default function CultureEn() {
  return (
    <>
      <PaginaHero
        lang="en"
        rotulo="Culture"
        titulo={<><span lang="txu">Kukradjà</span>, the Xikrin <span className="destaque">way of life</span></>}
        lead="Living with the forest, together with the forest and for the forest."
        foto="/img/capas/pintura-corporal.webp"
        trilha={[{ rotulo: "Culture", href: "/en/culture/" }]}
      />
      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "3rem" }}>
          <p className="lead prosa">
            <span lang="txu">Kukradjà</span> is the Xikrin way of being and living. In the words of the people’s PGTA: “our
            ideas about the world, our actions, our society, our political organization, our health, everything is part of
            kukradjà, and the forest is part of all of it too”.
          </p>
          <div className="temas">
            {TEMAS.map((t) => (
              <article key={t.nome} className="tema">
                <Foto sizes="(max-width: 700px) 100vw, 33vw" src={t.foto.src} alt={t.foto.alt} loading="lazy" width={1200} height={800} />
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
          <EmConstrucao lang="en">Coming soon: body painting, the Mẽbêngôkre language, hunting, fishing and gathering, food and gardens.</EmConstrucao>
        </div>
      </section>
    </>
  );
}
