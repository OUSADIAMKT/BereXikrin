# Autocrítica do design system: v1 → v2

13/10/2026. O **v1** (`v1/index.html`) foi montado com o material recebido do jeito que veio. O **v2** (`index.html`, `tokens.css`, `componentes.css`) é a versão corrigida. As capturas de tela estão em `capturas/`.

## Pergunta: seria aprovado para apresentar e vender no exterior?

"Exterior" aqui inclui três públicos: financiadores internacionais (fundos climáticos e filantropia para povos indígenas), compradores dos produtos da loja e parceiros institucionais. Os três checam as mesmas coisas: autoria indígena, consentimento, ausência de estereótipo, acessibilidade e transparência.

**v1: não seria aprovado.** Um problema reprova sozinho (o 1 da tabela abaixo) e três outros pesam muito (2, 3 e 4).
**v2: aprovável, desde que a Associação valide os pontos da seção "O que ainda depende da Berê".**

## Os problemas do v1, por gravidade

| # | Problema | Por que reprova lá fora | Correção no v2 |
|---|---|---|---|
| 1 | **Os grafismos da prancha não são Mẽbêngôkre.** Os nomes (*jawara* = onça, *awati* = milho, *kumana* = feijão, *eira* = mel) são palavras tupi. O Mẽbêngôkre é uma língua de outro tronco, o jê. A prancha muito provavelmente é dos **Asurini do Xingu**, povo tupi vizinho do Médio Xingu. | Uma associação indígena usando o grafismo de outro povo como identidade é apropriação cultural. Para um financiador que apoia autonomia indígena, é o erro mais sério possível, e ainda expõe a Berê diante dos Asurini. | Prancha removida. Os grafismos do v2 foram **redesenhados a partir do próprio logo da Berê**: o zigue-zague do "R", os quadrados concêntricos e as listras em V do selo. |
| 2 | **Imagens geradas por IA**: o rio com chuva no pôr do sol, a colagem de folhagens, a cestaria com contas vermelhas, a onça e a arara. | Fundos e marcas internacionais estão rejeitando imagem gerada por IA para representar povos indígenas: ela inventa uma cultura que não é a do povo e soa como falta de autenticidade. A cestaria "indígena" gerada é especialmente arriscada, porque imita um artesanato que não é Xikrin. | Todas trocadas por **fotos reais de drone da TI** (`D:\BKP DRONE\2026\2026-09-13 Xikrin`), com legenda e crédito. |
| 3 | **Onça e arara no hero.** | É o clichê da "Amazônia exótica", aquele olhar de fora que os próprios povos indígenas criticam. Também disputa atenção com o título e esconde a aldeia, que é a mensagem. | Hero com a aldeia circular ao pôr do sol: o território real, com a Ngàb no centro. |
| 4 | **Contraste de cor reprovado** (WCAG 2.1 AA): branco sobre laranja 2,9:1, branco sobre verde 3,3:1, amarelo sobre vermelho 3,0:1 e amarelo sobre branco 1,6:1. | Acessibilidade é exigência em editais e em boa parte dos países que compram e financiam. Uma auditoria automática reprova o site na hora. | Paleta recalibrada: **todos os pares de texto acima de 4,5:1**, com a tabela documentada em `tokens.css`. |
| 5 | **Logo deformado.** No cabeçalho escuro, um filtro de inversão transformou o vermelho do logo em azul-ciano. A imagem `logotipo-nome.png` recebida também é um redesenho sem o grafismo do "R". | Marca alterada passa amadorismo e confunde quem compara com o material oficial. | Logo original em fundo claro. Para fundo escuro, foi gerada uma **versão negativa** com o nome branco e o vermelho preservado (`Logo/leves/*-negativo`). |
| 6 | **8 cores saturadas com o mesmo peso**: vermelho, laranja, verde, azul e amarelo competindo. | Parece festa ou parque temático, não uma instituição. Diminui a confiança de quem vai doar. | Hierarquia: **urucum, jenipapo e palha** carregam a marca; **pequi, arara e floresta** entram um por vez. Laranja eliminado. A paleta conta uma história verdadeira: os pigmentos da pintura corporal e as penas do próprio logo. |
| 7 | **Não funcionava no celular**: grade de 8 colunas, números que quebravam ("300 / ha") e menu sem versão móvel. | A maioria dos acessos vem do celular, inclusive de quem está nas aldeias. | Grades fluidas, tamanhos com `clamp()`, botão de menu e "300 ha" sem quebra. Testado a 390 px sem vazamento horizontal. |
| 8 | **Bug nos grafismos**: os cards de amostra apareciam vazios, porque um seletor CSS pintava o grafismo de branco. Os grafismos em bitmap ainda tinham bordas serrilhadas. | — | Grafismos em **SVG vetorial** (menos de 1 KB cada), tingidos por máscara CSS, a mesma técnica do site da Ousadia. |
| 9 | **Sem foco de teclado, sem textos alternativos, sem crédito de foto.** | Acessibilidade e direitos de imagem são checados por financiadores. | Foco visível em azul-arara, `alt` descritivo em todas as fotos e crédito no hero. |

## O que deu certo no v1 e ficou

- **Unbounded + Be Vietnam Pro.** As duas fontes têm o subconjunto vietnamita, que traz o **"ẽ" de Mẽbêngôkre**. Conferi na base do Google Fonts: Archivo Black, Bebas Neue, Syne, Sora e DM Sans **não têm** esse glifo e quebrariam o nome do povo.
- O vermelho e o preto do logo como base.
- A estrutura herdada do site da Ousadia: rótulo acima do título, faixas de grafismo como divisores e tokens em CSS.

## O que ainda depende da Berê (para o "aprovado" valer)

> **Atualização 13/10/2026:** os itens 1 (grafismos) e 2 (autorização de imagem) foram confirmados pelo cliente. Com isso o veredito do v2 passa a **aprovado**, restando a versão em inglês (2ª fase) e os ajustes menores.

1. **Validar os grafismos com a Associação e os anciões.** Os do v2 vêm do logo, mas falta confirmar se os padrões têm nome e significado, e se podem ser usados como divisor decorativo. Se a Berê tiver grafismos próprios de pintura com jenipapo, eles devem substituir ou complementar estes, com nome e significado escritos pela própria comunidade.
2. **Autorização de uso de imagem.** As fotos de drone mostram pessoas, inclusive crianças. Para uso público e internacional, a Associação precisa autorizar por escrito, de forma coletiva, e o ideal é registrar isso na página de Transparência.
3. **Crédito das fotos.** Confirmar se fica "Ousadia Marketing para a Associação Berê Xikrin" ou o nome de quem pilotou o drone.
4. **Versão em inglês** (já prevista para a 2ª fase). Para financiador de fora, ela pesa tanto quanto o visual.
5. **Selo negativo.** No fundo escuro, o anel preto do selo some. O ideal é o designer do logo fazer uma versão com contorno branco.
6. **Confirmar a grafia "Kukradjà".**

## Referências usadas
- Site da Ousadia (`D:\CLAUDE\ousadiamarketing.com.br`): tokens, grafismo por máscara CSS, rótulo acima do título.
- pykore.org.br: estrutura institucional, hero com foto de território, números, cards de projeto.
- Site atual da Berê: textos, diretoria e logo.
- Contraste calculado pela fórmula do WCAG 2.1; suporte a glifos conferido em fonts.google.com/metadata/fonts.
