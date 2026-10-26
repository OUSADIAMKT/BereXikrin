import { ManualMarca } from "@/components/ManualMarca";
import { PaginaHero } from "@/components/PaginaHero";
import { metaPagina } from "@/lib/meta";
import { SITE } from "@/lib/site";

export const metadata = metaPagina({
  titulo: "Manual de uso da marca",
  descricao: "Regras para usar o logo, as cores, as letras, os grafismos e as imagens da Associação Indígena Berê Xikrin, com links para os logos e o manual completo.",
  caminho: "/manual-da-marca/",
  foto: "/img/aldeia-circular-vista-de-cima.webp",
});

export default function ManualDaMarca() {
  return (
    <>
      <PaginaHero
        rotulo="Manual da marca"
        titulo={<>Como usar a marca <span className="destaque">Berê Xikrin</span></>}
        lead="Logo, cores, letras, grafismos e imagens: as regras para falar em nome da Associação do jeito certo."
        foto="/img/aldeia-circular-vista-de-cima.webp"
        trilha={[{ rotulo: "Sobre", href: "/sobre/" }, { rotulo: "Manual da marca", href: "/manual-da-marca/" }]}
      />
      <ManualMarca email={SITE.email} />
    </>
  );
}
