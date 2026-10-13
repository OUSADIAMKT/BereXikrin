import Link from "next/link";
import type { ReactNode } from "react";

/** Aviso nas páginas cujo conteúdo ainda depende da Associação. */
export function EmConstrucao({ children }: { children: ReactNode }) {
  return (
    <div className="aviso">
      <p>
        <strong>Página em construção.</strong> {children}
      </p>
      <p style={{ marginTop: "0.5rem" }}>
        Enquanto isso, fale com a gente pelo <Link href="/contato/">contato</Link>.
      </p>
    </div>
  );
}
