"""Gera uma cópia autocontida de design-system/index.html para publicar como página.

Embute tokens.css, componentes.css e app/globals.css (o mesmo CSS do site),
troca os grafismos por data URIs e copia as imagens usadas para img/.
Uso: python -I scripts/publica-design-system.py <pasta-saida>
"""
import os
import re
import shutil
import sys
import urllib.parse

RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
DS = os.path.join(RAIZ, "design-system")
saida = sys.argv[1]
os.makedirs(os.path.join(saida, "img"), exist_ok=True)


def ler(*p):
    with open(os.path.join(*p), encoding="utf-8") as f:
        return f.read()


def data_uri(m):
    svg = ler(DS, "grafismos", m.group(1)).strip()
    return 'url("data:image/svg+xml,' + urllib.parse.quote(svg, safe=" =:/,'") + '")'


globais = re.sub(r'@import "[^"]+";\n', "", ler(RAIZ, "app", "globals.css"))
css = ler(DS, "tokens.css") + "\n" + ler(DS, "componentes.css") + "\n" + globais
css = re.sub(r'url\("grafismos/([\w-]+\.svg)"\)', data_uri, css)

h = ler(DS, "index.html")
h = re.sub(r'<link rel="stylesheet" href="[^"]+\.css">\n', "", h)
h = re.sub(r"<!--[^>]*-->\n", "", h, count=1)
h = re.sub(r"<!doctype html>\s*<html[^>]*>\s*<head>\s*", "", h)
h = re.sub(r'<meta (charset|name="viewport"|name="description")[^>]*>\n', "", h)
h = h.replace("<style>\n", "<style>\n" + css + "\n", 1)
h = re.sub(r"</head>\s*<body>\s*", "", h)
h = re.sub(r"\s*</body>\s*</html>\s*$", "\n", h)
h = h.replace("position: sticky; top: 0; z-index: 40;", "position: sticky; top: env(safe-area-inset-top, 0px); z-index: 40;")

# Imagens: ../public/img/x/y.webp e ../Logo/leves/z.webp viram img/x-y.webp e img/z.webp
copiadas = 0
for ref in sorted(set(re.findall(r"\.\./(?:public/img|Logo/leves)/[\w./-]+\.webp", h))):
    origem = os.path.join(RAIZ, ref[3:])
    nome = ref.split("/img/", 1)[-1] if "/img/" in ref else ref.rsplit("/", 1)[-1]
    nome = nome.replace("/", "-")
    shutil.copy(origem, os.path.join(saida, "img", nome))
    h = h.replace(ref, f"img/{nome}")
    copiadas += 1

with open(os.path.join(saida, "berexikrin-design-system.html"), "w", encoding="utf-8") as f:
    f.write(h)
print(f"ok: {len(h)} caracteres, {h.count('data:image/svg+xml')} grafismos, {copiadas} imagens")
