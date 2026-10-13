# Design system — Berê Xikrin

| Arquivo | O que é |
|---|---|
| `index.html` | **Versão aprovada para seguir (v2):** prévia da home + guia de cores, tipografia, grafismos e componentes |
| `tokens.css` | Cores, fontes, tamanhos, espaços e grafismos em variáveis CSS. Vai para o `globals.css` do Next.js |
| `componentes.css` | Botões, etiquetas, cards, números, listas, divisores e citação |
| `grafismos/` | 6 SVGs derivados do logo (faixa, zigue-zague, quadrados, listras, marcador, seta) |
| `img/` | Fotos reais do drone em WebP (as `v1-*` são as imagens de IA do rascunho, só para comparação) |
| `critica.md` | Autocrítica v1 → v2 e checagem para público internacional |
| `v1/` | Primeiro rascunho, mantido para comparação. **Não usar.** |
| `../scripts/publica-design-system.py` | Gera a cópia autocontida usada na página publicada (claude.ai/artifact/Xwgb2XpYZ9nL2VFJQQUCbx) |
| `capturas/` | Capturas de tela do v1 e do v2 (computador e celular) e `teste-celular.html` (abre a página num quadro de 390 px) |

Para ver localmente: na pasta `D:\CLAUDE\bere`, rode `python -m http.server 8766` e abra `http://127.0.0.1:8766/design-system/`. Abrir o HTML direto pelo arquivo não funciona, porque o navegador bloqueia as máscaras de grafismo fora de um servidor.

## Regras rápidas
- **Marca:** urucum `#C8201A`, jenipapo `#15110E`, palha `#F7EFE3`. **Acentos, um por seção:** pequi `#F6B800`, arara `#1F3A93`, floresta `#0B6E3F`.
- Pequi só sobre fundo escuro (ou como fundo com texto jenipapo). Nunca pequi sobre branco ou palha.
- O urucum vivo `#E3141B` é só para grafismo.
- **Títulos** em Unbounded, **texto** em Be Vietnam Pro. Qualquer fonte nova precisa ter o "ẽ" (subconjunto vietnamita).
- **Grafismo** é divisor e marcador, nunca fundo cheio atrás de texto. Como textura, no máximo 6% de opacidade.
- **Foto** sempre real, com `alt` e crédito. Nada de imagem gerada por IA representando pessoas, cultura ou artesanato.
