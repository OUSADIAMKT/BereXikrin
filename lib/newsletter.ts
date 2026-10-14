import { NEWSLETTER_ENDPOINT } from "@/lib/site";

export type Inscricao = { nome: string; email: string; consentimento: boolean };

/**
 * Envia a inscrição para o Apps Script, no mesmo modelo do site da Ousadia.
 * O Apps Script não devolve cabeçalho CORS, então a resposta é sempre opaca:
 * o navegador só sabe que a requisição saiu. A confirmação real fica na
 * planilha (e no e-mail de aviso, se ligado). `sendBeacon` não segura a tela
 * e sobrevive se a pessoa fechar a aba; `fetch` sem CORS cobre o resto.
 */
export function inscreverNewsletter(dados: Inscricao): boolean {
  if (!NEWSLETTER_ENDPOINT) return false;
  const corpo = JSON.stringify({ ...dados, origem: "rodape-site" });

  try {
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      const blob = new Blob([corpo], { type: "text/plain;charset=utf-8" });
      if (navigator.sendBeacon(NEWSLETTER_ENDPOINT, blob)) return true;
    }
  } catch {
    // cai no fetch abaixo
  }

  try {
    void fetch(NEWSLETTER_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: corpo,
    }).catch(() => {});
    return true;
  } catch {
    return false;
  }
}
