"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { textos } from "@/lib/i18n";
import { inscreverNewsletter } from "@/lib/newsletter";
import type { Idioma } from "@/lib/rotas";
import { NEWSLETTER_ENDPOINT, SITE } from "@/lib/site";

type Estado = "inicio" | "enviado" | "desligada";

export function Newsletter({ lang = "pt" }: { lang?: Idioma }) {
  const t = textos(lang).nl;
  const [estado, setEstado] = useState<Estado>("inicio");

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // Campo escondido: pessoas não veem, robôs preenchem. Se veio cheio, ignora em silêncio.
    if (form.get("site")) {
      setEstado("enviado");
      return;
    }
    if (!NEWSLETTER_ENDPOINT) {
      setEstado("desligada");
      return;
    }
    const ok = inscreverNewsletter({
      nome: String(form.get("nome") || "").trim(),
      email: String(form.get("email") || "").trim(),
      consentimento: form.get("consentimento") === "sim",
    });
    setEstado(ok ? "enviado" : "desligada");
  }

  return (
    <section className="newsletter" aria-labelledby="t-newsletter">
      <h2 id="t-newsletter">{t.titulo}</h2>

      {estado === "enviado" ? (
        <p className="newsletter__retorno" role="status">
          {t.ok}
        </p>
      ) : (
        <form onSubmit={enviar} className="newsletter__form">
          <label className="visualmente-oculto" htmlFor="nl-nome">{t.nome}</label>
          <input id="nl-nome" name="nome" type="text" placeholder={`${t.nome} *`} required maxLength={80} autoComplete="name" />
          <label className="visualmente-oculto" htmlFor="nl-email">{t.email}</label>
          <input id="nl-email" name="email" type="email" placeholder={`${t.email} *`} required maxLength={120} autoComplete="email" />
          <input className="newsletter__isca" name="site" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label className="newsletter__aceite" htmlFor="nl-aceite">
            <input id="nl-aceite" name="consentimento" type="checkbox" value="sim" required />
            <span>{t.aceite}</span>
          </label>
          <p className="newsletter__lgpd">
            {t.lgpd[0]} <Link href={t.lgpd[2]}>{t.lgpd[1]}</Link>.
          </p>
          <button type="submit" className="btn newsletter__botao">
            {t.botao}
          </button>
          {estado === "desligada" && (
            <p className="newsletter__retorno" role="status">
              {t.desligada} <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          )}
        </form>
      )}
    </section>
  );
}
