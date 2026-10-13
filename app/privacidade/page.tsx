import type { Metadata } from "next";
import { PaginaHero } from "@/components/PaginaHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Como o site da Associação Indígena Berê Xikrin trata dados pessoais.",
};

export default function Privacidade() {
  return (
    <>
      <PaginaHero rotulo="Privacidade" titulo="Política de privacidade" trilha={[{ rotulo: "Privacidade", href: "/privacidade/" }]} />
      <section className="secao">
        <div className="container prosa">
          <p>
            Este site não usa cookies, não tem ferramentas de rastreamento ou publicidade e, por enquanto, não tem
            formulários que coletem dados pessoais. As fontes são servidas pelo próprio site.
          </p>
          <p>
            Se você nos escrever por e-mail, usaremos seu endereço e sua mensagem apenas para responder. Para pedir
            acesso, correção ou exclusão dos seus dados, escreva para{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
          <p>
            Quando o site passar a ter doação online, newsletter ou loja, esta política será atualizada antes, de acordo
            com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
          </p>
        </div>
      </section>
    </>
  );
}
