# Plano de Testes de Software

Teste de software é qualquer procedimento que teste/ajuda a determinar se o que foi criado/programado atinge as expectativas para o que foi criado, mostrando a vulnerabilidade e falta de qualidade do sistema criado.

O Plano de testes é uma forma de diálogo entre projeto e cliente, é um documento com a indicação de diversos casos de testes, é um conjunto destes testes como: testes de desempenho, testes funcionais da história de usuário x, teste de responsividade, teste de campos de formulários, testes de navegabilidade ou links e teste ponta a ponta.

Para o desenvolvimento da página decidiu-se adotar os testes abaixo explicitados.

1- Teste de unidade: teste de cada html, css, script e javascript desenvolvidos. Ao criar a página os testes foram sendo desenvolvidos, inicialmente, foram criados o Header, body e footer e sua estilização primária e todas as páginas seguem o mesmo padrão. Após isso, cada página desenvolvida foi incrementada e estilizada de acordo com os requisitos funcionais, não funcionais e restritos.

2 - Teste de integração: verifica a integração entre os módulos agrupando-os até formar o sistema. Estes testes foram realizados em conjunto, a integração do GitHub com o VScode facilita tal processo.

3 - Teste de Sistema: Simulação do ambiente de uso final e realização de testes com apontamento das falhas.

4 - Teste de Aceitação informal: a empresa realizará os testes e dará o feedback apontando melhorias e vulnerabilidades. Ou Teste Beta: não impossibilidade da testagem pela aceitação informal, utilizar-se-a o teste Beta como teste de aceitação.

Os requisitos para realização dos testes de software são:

● Site em pleno funcionamento na internet

● Site em pleno funcionamento na internet

● Navegador da Internet - Chrome, Firefox, Edge, Safari e mobile

● Funcionamento das APIs

● Conectividade de Internet para acesso às plataformas (APISs)

|   Caso de Teste  |  CT-01 - Acessar Página Principal |
| Requisitos 
Associados    |    RF-01 - O site deve apresentar na página principal notícias 
dinâmicas obtidas por meio de canais de notícias da Internet (API)
RF-02 - O site deve apresentar, para cada notícia, uma imagem 
correspondente ao assunto apresentado (thumbnail)|
| Objetivo do 
Teste | Verificar se as imagens estão carregando corretamente, menu está em pleno funcionamento e os ícones estão sendos direcionados corretamente  |
| Passos   | 1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4) Acessar itens abaixo do Carrossel  |
| Critérios de 
Êxito  | - Deve haver um recurso do navegador
- As imagens do Carrossel devem ser exibidas corretamente no site, sendo 
necessárias pelo menos 3 imagens sendo apresentadas
- Os links das categorias do cardápio exibidos abaixo do Carrossel devem estar acessíveis
|

CT - 02 - Visualizar Página Sobre
Requisitos 
Associados  - RF - 
Objetivo do 
Teste - Verificar se as informações da página Sobre estão corretas e fidedignas além da API Google Maps está em pleno funcionamento
Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página Principal
4) Clicar menu Sobre
Critérios de 
Êxito - A página deve apresentar Informações sobre a loja, imagem da mesma, localização no google maps.

CT - 03 - Visualizar e Acessar e Testar Página Cardápio
Requisitos 
Associados  - RF - 
Objetivo do 
Teste - Verificar se as categorias da página cardápio estão funcionando, se as imagens foram carregadas e não estão desconfiguradas e, se a funcionalidade de adicionar está funcionando.
Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página Principal
4) Clicar menu Cardápio
5) Testar categorias
6) Testar botão Adicionar
Critérios de 
Êxito - A página deve estar separada por categoria de produtos, além de ter a descrição e valor dos mesmos, opção de sabores e de adicionar o produto no carrinho

CT - 04 - Visualizar e Acessar Página Promoções
Requisitos 
Associados  - RF - 
Objetivo do 
Teste - Verificar as imagens da Página Promoções está carregando e se ao selecionar uma promoção, há direcionamento para as mesmas.
Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página Principal
4) Clicar menu Promoção
5) Visualizar imagens
6) Clicar nas imagens
Critérios de 
Êxito - A página deve conter imagens com as datas comemorativas e direcionar para as promoções das mesmas

CT - 05 - Visualizar e Acessar Página Meu Pedido
Requisitos 
Associados  - RF - 
Objetivo do 
Teste - Verificar se os itens adicionados ao carrinho estão presentes na lista de compras do Meu Pedido
Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página Principal
4) Clicar menu Meu Pedido
5) Visualizar Itens do Carrinho
6) Editar quantidade
7) Remover Produto
8) Finalizar Pedido
Critérios de 
Êxito - A página deve conter os itens selescionados em cardápio e permitir editar e remover produto. Ao clicar em Finalizar Pedido deve abrir uma tela para preenchimento de dados.


CT - 06 - Visualizar e Acessar Tela de Finalizar Pedido
Requisitos 
Associados  - RF - 
Objetivo do 
Teste - Verificar se ao Finalizar Pedido, o cliente é direcionado para uma tela pra preenchimento de Dados Pessoais, Dados de Entrega, Forma de pagamento e Mensagem, Botão de Limpar, Salvar e Envio do pedido e Continuar comprando
Passos:
1) Continuar No processo de compra em Finalizar Pedido
2) Verificar se os produtos do carrinho foram carregados juntamente com quantidade e valor para o formulario
3) Inserir Dados Pessoais
4) Inserir Dados de Entrega e verificar se a API CEP está funcionando
5) Selecionar Taxa de Entrega
6) Selecionar forma de pagamento
7) Preencher campo de Mensagem 
8) Testar se o botao Limpar, Limpa os dados do formulário
9) Testar se o botao Salvar, Salva os dados do formulário
10) Testar se o botao Continuar comprando, voltar para a página principal
11) Testar se o botao Envio de Pedido, Envia os dados do formulário para o whatsapp da doceria
Critérios de 
Êxito - A página trazer os produtos, quantidade, valor unitario e total do carrinho e todos os dados preenchidos devem ser enviados para o whatsApp da Doceria









 
