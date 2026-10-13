"""Exporta textos das páginas e a biblioteca de mídia do WordPress atual da Berê.

Uso: python -I exporta_wp.py <pasta-destino>
"""
import html
import json
import os
import re
import sys
import urllib.request

SITE = "https://berexikrin.org.br"
dest = sys.argv[1]
textos = os.path.join(dest, "textos")
imagens = os.path.join(dest, "imagens")
os.makedirs(textos, exist_ok=True)
os.makedirs(imagens, exist_ok=True)
sys.stdout.reconfigure(encoding="utf-8")

UA = {"User-Agent": "Mozilla/5.0 (export Berê)"}


def get_json(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA)) as r:
        return json.load(r)


RODAPE = re.compile(r"\n*Contato\s*\n+Fale conosco[\s\S]*$")


def html_para_md(h):
    h = re.sub(r"<(script|style)[\s\S]*?</\1>", "", h)
    imgs = re.findall(r'<img[^>]+src="([^"]+)"', h)
    h = re.sub(r"<h([1-6])[^>]*>", lambda m: "\n\n" + "#" * (int(m.group(1)) + 1) + " ", h)
    h = re.sub(r"</h[1-6]>", "\n\n", h)
    h = re.sub(r"<li[^>]*>", "\n- ", h)
    h = re.sub(r"<(br|/p|/div|/li|/ul|/blockquote)[^>]*>", "\n", h)
    h = re.sub(r"<[^>]+>", " ", h)
    h = html.unescape(h)
    linhas = [re.sub(r"[ \t ]+", " ", l).strip() for l in h.split("\n")]
    md = re.sub(r"\n{3,}", "\n\n", "\n".join(linhas)).strip()
    md = re.sub(r"^(#+) *\n+", r"\1 ", md, flags=re.M)
    return RODAPE.sub("", md).strip(), list(dict.fromkeys(imgs))


paginas = get_json(f"{SITE}/wp-json/wp/v2/pages?per_page=100&_fields=slug,title,link,modified,content")
indice = []
for p in paginas:
    corpo, imgs = html_para_md(p["content"]["rendered"])
    titulo = html.unescape(p["title"]["rendered"])
    with open(os.path.join(textos, f"{p['slug']}.md"), "w", encoding="utf-8") as f:
        f.write(f"# {titulo}\n\n")
        f.write(f"> Copiado de {p['link']} (última edição no WP: {p['modified'][:10]}).\n")
        f.write("> Texto extraído automaticamente do Elementor; revisar antes de reaproveitar.\n\n")
        f.write(corpo or "_(página sem texto)_")
        if imgs:
            f.write("\n\n## Imagens usadas na página\n\n")
            f.writelines(f"- {u}\n" for u in imgs)
    indice.append((p["slug"], titulo, len(corpo), len(imgs)))
    print("texto:", p["slug"])

midia = []
pagina = 1
while True:
    lote = get_json(f"{SITE}/wp-json/wp/v2/media?per_page=100&page={pagina}&_fields=source_url,alt_text,mime_type,date")
    midia += lote
    if len(lote) < 100:
        break
    pagina += 1

baixadas = 0
with open(os.path.join(imagens, "_lista.tsv"), "w", encoding="utf-8") as lista:
    lista.write("arquivo\tdata_upload\ttipo\ttexto_alt\turl_original\n")
    for m in midia:
        url = m["source_url"]
        partes = url.split("/wp-content/uploads/")[-1].split("/")
        nome = "_".join(partes[:2]) + "_" + partes[-1] if len(partes) >= 3 else partes[-1]
        caminho = os.path.join(imagens, nome)
        if not os.path.exists(caminho):
            try:
                with urllib.request.urlopen(urllib.request.Request(url, headers=UA)) as r, open(caminho, "wb") as f:
                    f.write(r.read())
                baixadas += 1
            except Exception as e:
                print("falhou:", url, e)
                continue
        alt = (m.get("alt_text") or "").replace("\t", " ")
        lista.write(f"{nome}\t{m['date'][:10]}\t{m['mime_type']}\t{alt}\t{url}\n")

print(f"\n{len(indice)} páginas, {len(midia)} itens de mídia, {baixadas} baixados agora")
