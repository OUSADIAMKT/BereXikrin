"""Gera uma cópia autocontida de design-system/index.html para publicar como página.

Embute tokens.css e componentes.css, troca os grafismos por data URIs e
ajusta os caminhos do logo. Uso: python -I scripts/publica-design-system.py <pasta-saida>
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
os.makedirs(os.path.join(saida, "logo"), exist_ok=True)


def ler(*p):
    with open(os.path.join(*p), encoding="utf-8") as f:
        return f.read()


def data_uri(m):
    svg = ler(DS, "grafismos", m.group(1)).strip()
    return 'url("data:image/svg+xml,' + urllib.parse.quote(svg, safe=" =:/,'") + '")'


css = ler(DS, "tokens.css") + "\n" + ler(DS, "componentes.css")
css = re.sub(r'url\("grafismos/([\w-]+\.svg)"\)', data_uri, css)

h = ler(DS, "index.html")
h = re.sub(r'<link rel="stylesheet" href="(tokens|componentes)\.css">\n', "", h)
h = re.sub(r"<!doctype html>\s*<html[^>]*>\s*<head>\s*", "", h)
h = re.sub(r'<meta (charset|name="viewport"|name="description")[^>]*>\n', "", h)
h = h.replace("<title>Berê Xikrin — Design System</title>", "<title>Berê Xikrin Design System</title>")
h = h.replace("<style>\n", "<style>\n" + css + "\n:root{color-scheme:light}\n", 1)
h = re.sub(r"</head>\s*<body>\s*", "", h)
h = re.sub(r"\s*</body>\s*</html>\s*$", "\n", h)
h = h.replace("position: sticky; top: 0;", "position: sticky; top: env(safe-area-inset-top, 0px);")
h = h.replace("min-height: min(88vh, 760px);", "min-height: clamp(520px, 72vh, 700px);")

for src in sorted(set(re.findall(r'src="(img/[\w-]+\.webp)"', h))):
    shutil.copy(os.path.join(DS, src), os.path.join(saida, src))
for nome in sorted(set(re.findall(r'src="\.\./Logo/leves/([\w-]+\.webp)"', h))):
    shutil.copy(os.path.join(RAIZ, "Logo", "leves", nome), os.path.join(saida, "logo", nome))
h = h.replace("../Logo/leves/", "logo/")

with open(os.path.join(saida, "berexikrin-design-system.html"), "w", encoding="utf-8") as f:
    f.write(h)
print("ok:", len(h), "caracteres,", h.count("data:image/svg+xml"), "grafismos embutidos")
