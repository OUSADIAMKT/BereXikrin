import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CardProjeto } from "@/components/CardProjeto";
import { Galeria } from "@/components/Galeria";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { SLUGS_PROJETOS } from "@/lib/rotas";
import { PROJETOS } from "@/lib/site";
import { CREDITO_ACERVO_EN, TEXTOS_PROJETOS_EN, projetosEn, statusEn, temaEn } from "@/lib/site-en";

/** Static export: only these pages exist. */
export const dynamicParams = false;

const slugPt = (en: string) => Object.entries(SLUGS_PROJETOS).find(([, e]) => e === en)?.[0];

export function generateStaticParams() {
  return Object.values(SLUGS_PROJETOS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/en/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projetosEn(PROJETOS).find((x) => x.slug === slug);
  return p ? metaPagina({ titulo: p.nome, descricao: p.resumo, caminho: `/en/projects/${p.slug}/`, foto: p.foto }) : {};
}

export default async function ProjectEn({ params }: PageProps<"/en/projects/[slug]">) {
  const { slug } = await params;
  const projetos = projetosEn(PROJETOS);
  const projeto = projetos.find((p) => p.slug === slug);
  const pt = slugPt(slug);
  if (!projeto || !pt) notFound();

  const texto = TEXTOS_PROJETOS_EN[pt] ?? [projeto.resumo];
  const outros = projetos
    .filter((p) => p.slug !== slug && p.tema === projeto.tema)
    .concat(projetos.filter((p) => p.slug !== slug && p.tema !== projeto.tema))
    .slice(0, 3);

  return (
    <>
      <PaginaHero
        lang="en"
        rotulo={`Project · ${temaEn(projeto.tema)}`}
        titulo={projeto.nome}
        lead={projeto.resumo}
        foto={projeto.foto}
        trilha={[
          { rotulo: "Projects", href: "/en/projects/" },
          { rotulo: projeto.nome, href: `/en/projects/${projeto.slug}/` },
        ]}
      />

      <section className="secao">
        <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
          <dl className="ficha">
            <div>
              <dt>Status</dt>
              <dd>{statusEn(projeto.status)}</dd>
            </div>
            {projeto.periodo && (
              <div>
                <dt>Period</dt>
                <dd>{projeto.periodo}</dd>
              </div>
            )}
            {projeto.parceiros && (
              <div>
                <dt>Partners</dt>
                <dd>{projeto.parceiros}</dd>
              </div>
            )}
            <div>
              <dt>Led by</dt>
              <dd>Berê Xikrin Indigenous Association</dd>
            </div>
          </dl>
          <div className="prosa">
            {texto.map((par) => (
              <p key={par.slice(0, 40)}>{par}</p>
            ))}
          </div>
          {projeto.galeria && <Galeria lang="en" fotos={projeto.galeria} credito={CREDITO_ACERVO_EN} />}
          <p>
            <Link className="btn btn--marca" href="/en/support/">
              Support this work
            </Link>
          </p>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} aria-labelledby="t-outros">
        <div className="container">
          <span className="eyebrow">Other projects</span>
          <h2 id="t-outros" className="visualmente-oculto">Other projects</h2>
          <div className="grade" style={{ marginTop: "1.5rem" }}>
            {outros.map((p) => (
              <CardProjeto key={p.slug} projeto={p} lang="en" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
