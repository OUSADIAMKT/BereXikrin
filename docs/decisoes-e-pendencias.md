# Decisões e pendências

## Decidido

| Data | Decisão |
|---|---|
| 13/10/2026 | Site novo em **Next.js**, publicado como site estático (mesmo modelo do site da Ousadia na Hostinger). O WordPress atual serve só como fonte de conteúdo. |
| 13/10/2026 | Estrutura inspirada no **pykore.org.br**. |
| 13/10/2026 | Mapa do site aprovado (`mapa-do-site.md`). **Belo Monte vai dentro do menu Projetos.** |
| 13/10/2026 | **Produtos e Loja** entram no site. No lançamento, catálogo com "em breve"; a venda abre logo depois. |
| 13/10/2026 | Números da home confirmados: 16 aldeias · 387 pessoas · 111 famílias. |
| 13/10/2026 | Versão em **inglês** fica para a 2ª fase. |
| 13/10/2026 | Redes no site: Instagram, TikTok, YouTube e LinkedIn (links em `organizacao.md`). |
| 13/10/2026 | **Design system v2** em `design-system/`: paleta urucum/jenipapo/palha + acentos pequi/arara/floresta, Unbounded + Be Vietnam Pro, grafismos derivados do logo. Autocrítica em `design-system/critica.md`. |
| 13/10/2026 | A prancha de grafismos recebida (Ajuawuiaki, Kumana, Jawarajuryna…) **não é usada**: os nomes são tupi, provavelmente Asurini do Xingu, não Mẽbêngôkre. Imagens geradas por IA (onça, arara, rio, folhagens, cestaria) também ficaram de fora. |

## Aguardando o cliente

- [ ] Nome, localização e fotos das **16 aldeias**
- [x] **Logo:** 3 versões SVG recebidas em 13/10/2026 (exportação do Canva, pesadas). Versões leves geradas em `Logo/leves/` (PNG 2000 px, WebP, ícones e avatar). Se existir o vetorial original do designer, ainda vale guardar
- [ ] **Fotos** fortes do território, das aldeias, das pessoas e dos rituais (o material de drone está em `D:\BKP DRONE`)
- [ ] Cores ou grafismos que a Berê já usa, ou que quer evitar
- [ ] Textos de Cultura: pinturas, artesanato, língua, caça e pesca, anciões, culinária
- [ ] Documentos da Transparência: prestações de contas, estatuto, CNPJ, atas
- [ ] Dados para o **Apoie**: chave PIX e conta bancária da associação
- [ ] PDF do **Plano de Vida**, se já puder ser publicado
- [ ] Logos dos parceiros
- [ ] Confirmar a grafia: Kukradjà ou Kukradjá
- [ ] **Validar os grafismos do design system** (derivados do logo) com a Associação e os anciões: têm nome e significado? Podem ser usados como divisor? Se houver grafismos Xikrin próprios (pintura com jenipapo), enviar com nome e significado
- [ ] **Autorização coletiva por escrito de uso de imagem** (fotos de drone com pessoas e crianças)
- [ ] Crédito das fotos de drone: Ousadia Marketing ou nome do piloto?
- [ ] **Escolher o divisor entre seções** (5 opções no design system: Fita do R, Quadrados do selo, Pontas de flecha, Listras em V, Triângulos alternados)
- [ ] Selo do logo em versão negativa (contorno branco) com o designer

## A decidir depois

- **Como a loja vai vender.** O site é estático, então a venda passa por um serviço de fora:
  1. pedido pelo WhatsApp: o mais simples, sem custo;
  2. link de pagamento do Mercado Pago ou PagSeguro em cada produto;
  3. Shopify embutido no site: o mais completo, com mensalidade.
- **Onde fica a hospedagem** do site novo. Hoje o WordPress está num servidor próprio ligado pelo Jetpack; falta confirmar se é Hostinger.

## Próximo passo

Design system v2 pronto. Próximo: criar o projeto Next.js e construir a home com ele.

## Observações sobre o site atual

- A página Transparência está vazia, e o texto de exemplo do tema, em inglês, ficou na Política de Privacidade.
- A biblioteca de mídia tem imagens de demonstração de um tema antigo ("megagym"). Elas foram separadas em `legado/site-wordpress/imagens/_demo-de-tema-nao-e-da-bere/`.
- **Acesso:** a senha de login do usuário `xikrinbere` foi compartilhada no chat em 13/10/2026. Recomendado trocá-la. Para a API do WordPress é preciso uma senha de aplicativo; o conector WordPress.com exige Jetpack AI ou Complete (pago).
