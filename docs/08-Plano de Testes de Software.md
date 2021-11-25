# Plano de Testes de Software

Teste de software é qualquer procedimento que teste/ajuda a determinar se o que foi criado/programado atinge as expectativas para o que foi criado, mostrando a vulnerabilidade e falta de qualidade do sistema criado.

O Plano de testes é uma forma de diálogo entre projeto e cliente, é um documento com um conjunto de informações que permite que as atividades de testes de um projeto sejam coordenadas e monitoradas. Seguem Alguns exemplos de testes: testes de desempenho, testes funcionais da história de usuário x, teste de responsividade, teste de campos de formulários, testes de navegabilidade ou links e teste ponta a ponta.

Para o desenvolvimento da página decidiu-se adotar os testes abaixo explicitados.

1- Teste de unidade: teste de cada html, css, script e javascript desenvolvidos. Ao criar a página os testes foram sendo desenvolvidos, inicialmente, foram criados o Header, body e footer e sua estilização primária e todas as páginas seguem o mesmo padrão. Após isso, cada página desenvolvida foi incrementada e estilizada de acordo com os requisitos funcionais, não funcionais e restritos.

2 - Teste de integração: verifica a integração entre os módulos agrupando-os até formar o sistema. Estes testes foram realizados em conjunto, a integração do GitHub com o VScode facilita tal processo.

3 - Teste de Sistema: Simulação do ambiente de uso final e realização de testes com apontamento das falhas.

4 - Teste de Aceitação informal: a empresa realizará os testes e dará o feedback apontando melhorias e vulnerabilidades. Ou Teste Beta: não impossibilidade da testagem pela aceitação informal, utilizar-se-a o teste Beta como teste de aceitação.

Os requisitos para realização dos testes de software são:


● Site em pleno funcionamento na internet

● Navegador da Internet - Chrome, Firefox, Edge, Safari e mobile

● Funcionamento das APIs

● Conectividade de Internet para acesso às plataformas (APISs)

|  Caso de Teste | CT-01 - Acessar Página Principal  |
| ------------ | ------------ |
| Requisitos Associados  | RF-01 - O site deve apresentar na página principal menu dos produtos, novidades, promoções e valores, além de itens destaques do dia, informações gerais de Entrega, Sobre nós. RF-04 - O site deve oferecer destaque para informações e produtos das datas comemorativas |
| Objetivo do Teste   | Verificar se as imagens estão carregando corretamente, menu está em pleno funcionamento e os ícones estão sendos direcionados corretamente  |
| Passos  | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br> 3) Visualizar a página principal <br>4) Acessar itens abaixo do Carrossel   |
| Critérios de Êxito  | -  Deve haver um recurso do navegador <br></br->- As imagens do Carrossel devem ser exibidas corretamente no site, sendo necessárias pelo menos 3 imagens sendo apresentadas <br></br->- Os links das categorias do cardápio exibidos abaixo do Carrossel devem estar acessíveis  |

|  Caso de Teste | CT-02 - Visualizar Página Sobre|
| ------------ | ------------ |
| Requisitos Associados  | RF-01 - O site deve apresentar na página principal menu dos produtos, novidades, promoções e valores, além de itens destaques do dia, informações gerais de Entrega, Sobre nós.  |
| Objetivo do Teste   | Verificar se as informações da página Sobre estão corretas e fidedignas além da API Google Maps está em pleno funcionamento |
| Passos  | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br> 3) Visualizar a página principal <br>4) Clicar no menu Sobre   |
| Critérios de Êxito  | -  A página deve apresentar Informações sobre a loja, imagem da mesma, localização no google maps  |

|  Caso de Teste | CT-03 - Visualizar e Acessar e Testar Página Cardápio|
| ------------ | ------------ |
| Requisitos Associados  | RF-01 - O site deve apresentar na página principal menu dos produtos, novidades, promoções e valores, além de itens destaques do dia, informações gerais de Entrega, Sobre nós. RF-07 - O site deve permitir a visualização da disponibilidade de produtos.   RF-08 - O site deve permitir a descrição dos produtos.  RF-09 - O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário delimitar o produto e ingredientes. |
| Objetivo do Teste   | Verificar se as categorias da página cardápio estão funcionando, se as imagens foram carregadas e não estão desconfiguradas e, se a funcionalidade de adicionar está funcionando |
| Passos  | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br> 3) Visualizar a página principal <br>4) Clicar no menu Cardápio <br> 5) Testar Categorias <br> 6) Testar opção selecionar sabores <br> 7) Testar Botão Adicionar   |
| Critérios de Êxito  | -  A página deve estar separada por categoria de produtos, além de ter a descrição e valor dos mesmos, opção de sabores e de adicionar o produto no carrinho |

|  Caso de Teste | CT-04 - Visualizar e Acessar e Testar Página Promoções|
| ------------ | ------------ |
| Requisitos Associados  | RF-01 - O site deve apresentar na página principal menu dos produtos, novidades, promoções e valores, além de itens destaques do dia, informações gerais de Entrega, Sobre nós. RF-04 - O site deve oferecer destaque para informações e produtos das datas comemorativas. |
| Objetivo do Teste   |Verificar as imagens da Página Promoções está carregando e se ao selecionar uma promoção, há direcionamento para as mesmas |
| Passos  | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br> 3) Visualizar a página principal <br>4) Clicar no menu Promoção <br> 5) Visualizar imagens <br> 6) Clicar nas imagens   |
| Critérios de Êxito  | -  A página deve conter imagens com as datas comemorativas e direcionar para as promoções das mesmas |

|  Caso de Teste | CT-05 - Visualizar e Acessar Página Meu Pedido|
| ------------ | ------------ |
| Requisitos Associados  | RF-01 - O site deve apresentar na página principal menu dos produtos, novidades, promoções e valores, além de itens destaques do dia, informações gerais de Entrega, Sobre nós. RF-02 - O site deve permitir que os pedidos sejam ordenados por ordem de chegada, local de entrega e prioridade , <br></brRF-03>RF-03 - O site deve permitir a chegada de uma notificação a cada pedido efetuado,  <br></brRF-05>RF-05 - 	O site deve permitir que o cliente insira endereço de entrega, nome, telefone de contato,   <br></brRF-06>RF-06 - O site deve permitir diversas formas de pagamento como Pic Pay, Pix, cartão de débito e crédito , <br></brRF10>RF10 - O site deve permitir salvar os pedidos para fins gerenciais como relatórios de pedido do usuário, entrega – dashboard , <br></brRF-11>RF-11 - O site deve permitir que os usuários façam comentários e avaliações  |
| Objetivo do Teste   |Verificar se os itens adicionados ao carrinho estão presentes na lista de compras do Meu Pedido |
| Passos  | 1) Acessar o Navegador <br>2) Informar o endereço do Site <br> 3) Visualizar a página principal <br>4) Clicar no ícone Meu Pedido <br> 5) Visualizar Itens do Carrinho <br> 6) Remover Produto <br> 7) Finalizar Pedido  |
| Critérios de Êxito  | -   A página deve conter os itens selescionados em cardápio e permitir editar e remover produto. Ao clicar em Finalizar Pedido deve abrir uma tela para preenchimento de dados |


|  Caso de Teste | CT-06 - Visualizar e Acessar Tela de Finalizar Pedido|
| ------------ | ------------ |
| Requisitos Associados  | RF-01 - O site deve apresentar na página principal menu dos produtos, novidades, promoções e valores, além de itens destaques do dia, informações gerais de Entrega, Sobre nós. RF-02 - O site deve permitir que os pedidos sejam ordenados por ordem de chegada, local de entrega e prioridade , <br></brRF-03>RF-03 - O site deve permitir a chegada de uma notificação a cada pedido efetuado,  <br></brRF-05>RF-05 - 	O site deve permitir que o cliente insira endereço de entrega, nome, telefone de contato,   <br></brRF-06>RF-06 - O site deve permitir diversas formas de pagamento como Pic Pay, Pix, cartão de débito e crédito , <br></brRF10>RF10 - O site deve permitir salvar os pedidos para fins gerenciais como relatórios de pedido do usuário, entrega – dashboard , <br></brRF-11>RF-11 - O site deve permitir que os usuários façam comentários e avaliações <br> RNF - 05 - O site deve permitir salvar as informações dos clientes respeitando a LGPD  |
| Objetivo do Teste   |Verificar se ao Finalizar Pedido, o cliente é direcionado para uma tela pra preenchimento de Dados Pessoais, Dados de Entrega, Forma de pagamento e Mensagem, Botão de Limpar, Salvar e Envio do pedido e Continuar comprando |
| Passos  | 1) Continuar No processo de compra em Finalizar Pedido <br>2) Verificar se os produtos do carrinho foram carregados juntamente com quantidade e valor para o formulário <br> 3) Inserir Dados Pessoais <br>4) Inserir Dados de Entrega e verificar se a API CEP está funcionando <br> 5) Selecionar Taxa de Entrega <br> 6) Selecionar forma de pagamento <br> 7) Preencher campo de Mensagem <br></br8)>8) Testar se o botao Limpar, Limpa os dados do formulário <br> 9) Testar se o botao Salvar, Salva os dados do formulário <br></br10)>10) Testar se o botao Continuar comprando, voltar para a página principal <br> 11) Testar se o botao Envio de Pedido, Envia os dados do formulário para o whatsapp da doceria  |
| Critérios de Êxito  | -   A página trazer os produtos, quantidade, valor unitario e total do carrinho e todos os dados preenchidos devem ser enviados para o whatsApp da Doceria |

|  Caso de Teste | CT-07 - Verificar acessibilidade no Heroku|
| ------------ | ------------ |
| Requisitos Associados  | RNF - 01 - O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) |
| Objetivo do Teste   |Verificar se a página está acessível/publicada na internet |
| Passos  | 1) Entrar na página Heroku <br> 2) Pesquisar por Ana Diniz Doceria 3) Acessar página <br> 4) Entrar em todo o menu e testá-los
| Critérios de Êxito  | -   Página funcionando no endereço do site

|  Caso de Teste | CT-08- Responsividade da página e compatibilidade
| ------------ | ------------ |
| Requisitos Associados  | RNF - 02 - O site deverá ser responsivo permitindo a visualização em um celular de forma adequada, <br> RNF -02 - O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge, Safari)
| Objetivo do Teste   |Verificar se a página está responsiva e compativel em diversos navegadores e suportes
| Passos  | 1) Entrar na página Heroku em cada navegador e dispositivo <br> 2) Verificar responsividade e compatibilidade da página das funcionalidades  
| Critérios de Êxito  | -   Página funcionando responsivamente nos navegadores especificados no requisito 

|  Caso de Teste | CT-09- Cores e contraste
| ------------ | ------------ |
| Requisitos Associados  | RNF - 03 - O site deve ter bom nível de contraste entre os elementos da tela em conformidade e utilizar a paleta de cores da marca
| Objetivo do Teste   |Verificar se a página tem nível de contraste e elementos de acordo com o passado pelo cliente
| Passos  | 1) Entrar na página do Instagram do cliente <br> 2) Verificar cores, letras e contrastes
| Critérios de Êxito  | -   Imagem visual agradavel e compatível com o que foi passado pelo cliente










 
