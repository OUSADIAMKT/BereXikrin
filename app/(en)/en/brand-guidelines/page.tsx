import { ManualMarca } from "@/components/ManualMarca";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { SITE } from "@/lib/site";

export const metadata = metaPagina({
  titulo: "Brand guidelines",
  descricao: "Rules for using the logo, colors, type, graphic patterns and images of the Berê Xikrin Indigenous Association, with links to the logos and the full guide.",
  caminho: "/en/brand-guidelines/",
  foto: "/img/aldeia-circular-vista-de-cima.webp",
});

export default function BrandGuidelines() {
  return (
    <>
      <PaginaHero
        lang="en"
        rotulo="Brand guidelines"
        titulo={<>How to use the <span className="destaque">Berê Xikrin</span> brand</>}
        lead="Logo, colors, type, graphic patterns and images: the rules for speaking on the Association’s behalf the right way."
        foto="/img/aldeia-circular-vista-de-cima.webp"
        trilha={[{ rotulo: "Brand guidelines", href: "/en/brand-guidelines/" }]}
      />
      <ManualMarca lang="en" email={SITE.email} />
    </>
  );
}
