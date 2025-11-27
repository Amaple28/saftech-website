SAFTECH - Website Institucional
===============================

Este pacote contém todos os arquivos necessários para publicar o site da SAFTECH.
O site foi desenvolvido em HTML5, CSS3 e JavaScript puro, compatível com qualquer hospedagem Linux/PHP (como a Hostinger).

ESTRUTURA DE ARQUIVOS:
----------------------
/index.html          -> Página inicial
/css/style.css       -> Estilos visuais do site
/js/main.js          -> Funcionalidades (menu, filtros)
/img/                -> Imagens e logo
/pages/              -> Páginas internas (Produtos, Contato)

COMO PUBLICAR NA HOSTINGER (ou qualquer hospedagem cPanel):
-----------------------------------------------------------

1. Acesse o painel de controle da sua hospedagem (hPanel ou cPanel).
2. Vá para o "Gerenciador de Arquivos" (File Manager).
3. Navegue até a pasta "public_html".
4. Se houver arquivos padrão lá (como default.php), você pode deletá-los.
5. Clique no botão "Upload" (Enviar).
6. Selecione o arquivo "saftech-website.zip" que você baixou.
7. Após o upload, clique com o botão direito no arquivo zip e escolha "Extract" (Extrair).
8. Certifique-se de que os arquivos extraídos (index.html, pastas css, js, img, pages) estejam diretamente dentro da pasta "public_html".
   - Se eles forem extraídos para uma subpasta (ex: public_html/saftech-static), entre nessa pasta, selecione tudo, e mova para "public_html".

TESTANDO O SITE:
----------------
Acesse seu domínio (ex: www.saftech.com.br) e verifique se a página inicial carrega corretamente.
Teste o formulário de contato e os botões de WhatsApp para garantir que estão redirecionando para o número correto.

SUPORTE:
--------
Caso precise alterar o número do WhatsApp, edite o arquivo:
/pages/contact.html (linha ~145)
/js/main.js (não é necessário editar, pois o link é gerado dinamicamente no HTML)

Para adicionar novos produtos, basta copiar e colar o bloco de código de um produto existente no arquivo /pages/products.html e alterar as informações.
