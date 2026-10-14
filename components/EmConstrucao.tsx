import Link from "next/link";
import type { ReactNode } from "react";
import { textos } from "@/lib/i18n";
import type { Idioma } from "@/lib/rotas";

/** Aviso nas páginas cujo conteúdo ainda depende da Associação. */
export function EmConstrucao({ children, lang = "pt" }: { children: ReactNode; lang?: Idioma }) {
  const t = textos(lang);
  return (
    <div className="aviso">
      <p>
        <strong>{t.emConstrucao}</strong> {children}
      </p>
      <p style={{ marginTop: "0.5rem" }}>
        {t.enquantoIsso} <Link href={lang === "en" ? "/en/contact/" : "/contato/"}>{t.contatoLink}</Link>.
      </p>
    </div>
  );
}
