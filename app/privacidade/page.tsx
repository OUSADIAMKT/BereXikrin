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
          <h2 className="titulo-sm">Navegação</h2>
          <p>
            Este site não usa cookies nem ferramentas de rastreamento ou publicidade. As fontes e as imagens são servidas
            pelo próprio site.
          </p>

          <h2 className="titulo-sm">Newsletter</h2>
          <p>
            Para receber as notícias da Associação, pedimos seu <strong>nome</strong> e seu <strong>e-mail</strong>, além
            da sua concordância em receber comunicações. Guardamos esses dados, junto com a data do cadastro, numa
            planilha de acesso restrito da Associação Indígena Berê Xikrin.
          </p>
          <p>
            Usamos esses dados só para enviar notícias da Berê. Não vendemos nem compartilhamos com terceiros. Você pode
            sair da lista quando quiser, respondendo a qualquer e-mail nosso ou escrevendo para{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2 className="titulo-sm">E-mail</h2>
          <p>Se você nos escrever por e-mail, usaremos seu endereço e sua mensagem apenas para responder.</p>

          <h2 className="titulo-sm">Seus direitos</h2>
          <p>
            Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode pedir acesso, correção ou exclusão dos seus
            dados a qualquer momento, pelo e-mail <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
          <p>
            Quando o site passar a ter doação online ou loja, esta política será atualizada antes. Última atualização:
            14 de outubro de 2026.
          </p>
        </div>
      </section>
    </>
  );
}
