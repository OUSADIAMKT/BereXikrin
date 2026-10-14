import type { Metadata } from "next";
import "./globals.css";
import { unbounded, vietnam } from "@/lib/fontes";

/**
 * 404 para qualquer endereço sem rota. Com dois layouts raiz (português e
 * inglês) não há um layout único para montar a página de erro, por isso ela é
 * bilíngue e independente (experimental.globalNotFound no next.config.ts).
 */
export const metadata: Metadata = {
  title: "Página não encontrada · Page not found | Associação Indígena Berê Xikrin",
};

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={`${unbounded.variable} ${vietnam.variable}`}>
      <body>
        <main className="secao" style={{ minHeight: "100dvh", display: "grid", alignItems: "center" }}>
          <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
            <img src="/marca/bere-xikrin-horizontal-600.webp" alt="Associação Indígena Berê Xikrin" width={300} height={138} style={{ width: 220, height: "auto" }} />
            <div className="duas-colunas" style={{ alignItems: "start" }}>
              <div className="prosa">
                <span className="eyebrow">Erro 404</span>
                <h1 className="titulo-md">Página não encontrada</h1>
                <p className="lead">Este endereço não existe ou mudou de lugar com o novo site.</p>
                <p className="acoes">
                  <a className="btn btn--marca" href="/">
                    Voltar ao início
                  </a>
                  <a className="btn btn--contorno" href="/projetos/">
                    Ver projetos
                  </a>
                </p>
              </div>
              <div className="prosa" lang="en">
                <span className="eyebrow">Error 404</span>
                <h2 className="titulo-md">Page not found</h2>
                <p className="lead">This address does not exist or has moved with the new website.</p>
                <p className="acoes">
                  <a className="btn btn--marca" href="/en/">
                    Go to the home page
                  </a>
                  <a className="btn btn--contorno" href="/en/projects/">
                    See projects
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
