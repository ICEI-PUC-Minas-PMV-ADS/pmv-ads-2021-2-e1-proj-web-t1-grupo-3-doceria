# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Os testes foram satisfatórios e eficazes na identificação das próximas implementações a serem aplicadas, apesar de não terem sido encontrados grandes problemas que interferissem no objetivo final que é converter o clique em prospecção.<br>
A grande vantagem do projeto foi ter uma boa definição nos passos anteriores quanto as disposições dos elementos, a simplicidade e eficácia para divulgação e ampliação do raio de atuação da loja. <br>Houve uma grande concentração da equipe de desenvolvimento para que o ambiente da loja virtual seja totalmente responsivo e proporcione ao usuário final a mesma sensação de estar no ambiente da loja física, e passe confiabilidade para que aquela venda seja concretizada independentemente do dispositivo que esteja utilizando.


Abaixo temos os casos de testes especificado por seção, bem como os pontos que apresentaram alguma necessidade de melhoria. 


CT-01-Acessar Página Principal

Ao realizar os testes e requisitos deste item foi certificado que ele se encontra em pleno funcionamento, com bom tempo de resposta, os icones estão apontando corretamente.


CT-02-Visualizar Página Sobre

Ao realizar os testes, o cliente relatou que foram encontrados alguns erros de digitação.


CT-03-Visualizar e Acessar e Testar Página Cardápio

Foi verificado para realizar uma pequena correção, ele adiciona o pedido corretamente, mas está exibindo 4 faixas avisando que algo foi adicionado ao carrinho.
Outro detalhe encontrado dentro do cardápio é que quando você clica em sabores de algum item, está aba não fecha, a unica opção seria retornar ao menu principal.


CT-04-Visualizar e Acessar e Testar Página Promoções

Nesta aba o cliente relatou um erro na promoção do dia dos avós, pois foi o unico item que não abriram mais imagens.


CT-05-Visualizar e Acessar a Página meu Pedido

O cliente relatou que não está conseguindo esvaziar o carrinho de compras, sempre fica um pedido parado, sendo necessário a remoção de um item de cada vez, o que gera certa impaciência, caso o carrinho tenha uma quantidade alta de produtos pré-selecionados.
O cliente também relatou que alguns itens aleatórios não estão sendo adicionados ao carrinho de compras.
Itens identificados: Tortinha de frango, mousse kinder bueno, copão brownie/óreo, coxinha morango/nutella, mousse de maracujá.


CT-06-  Visualizar e Acessar tela de Finalizar Pedido

Cliente relatou uma observação que ao tentar salvar o pedido o sistema informava que havia um erro de digitação no campo telefone, impossibilitando de concluir o pedido.
Na próxima iteração este ponto de validação de dados será o foco principal para que não ocorra nenhum tipo de problema no armazenamento dos dados dos pedidos e impacte os relatórios de vendas e prospecções futuras que o a administração da loja deseja fazer. 


CT-07-Visualizar Acessibilidade no Heroku

Cliente relatou que concluiu com exito este item.


CT-08-Responsividade da Página e Compatibilidade

O site está responsivo para diversos tamanhos de tela, testamos e documentamos via print as duas versões mais utilizadas, os prints serão anexados a esta documentação. 


CT-09-Cores e Contraste

Cliente deu o feedback que o site está de acordo com o 04-Projeto de Interface.md seguindo e respeitando a identidade visual que a loja já possuia com grande engajamento nas mídias sociais e na cidade de origem.

<br>

### Nesta seção teremos os prints do fluxo intuitivo da página:

#### Home
![image](https://user-images.githubusercontent.com/90658683/143687983-02783d8e-1597-4819-ba07-dc9922bfe601.png)

![image](https://user-images.githubusercontent.com/90658683/143688050-31f9a6e2-387a-4ee3-80d0-05d09cce6e58.png)

![image](https://user-images.githubusercontent.com/90658683/143688060-10f87a3a-7d25-4331-967d-3e9a92a622a0.png)

#### Sobre
![image](https://user-images.githubusercontent.com/90658683/143688118-1ebf7125-0f1a-4d4a-b320-f319a979c251.png)

![image](https://user-images.githubusercontent.com/90658683/143688161-d06a06bd-7921-4427-8347-848ac3b0f06e.png)

#### Cardápio e Submenu
![image](https://user-images.githubusercontent.com/90658683/143688454-c2d53394-027b-4ec8-aab8-b194b78d0245.png)

![image](https://user-images.githubusercontent.com/90658683/143688466-ee8ebc05-b943-453b-a31a-ea28ccdd05d7.png)

#### Promoções
![image](https://user-images.githubusercontent.com/90658683/143688521-9cde9429-91f4-4a6f-82e2-3a2c2024ba34.png)

![image](https://user-images.githubusercontent.com/90658683/143688548-ea5f95d0-e07a-4960-af9a-dd341f4f9870.png)

#### Meus pedidos
![image](https://user-images.githubusercontent.com/90658683/143688587-7219cbff-0e9c-4a90-a0e6-127bf26a5203.png)

![image](https://user-images.githubusercontent.com/90658683/143688600-6c4d50fc-2153-4905-9e97-46aaabc16037.png)

<br>

### Sabores e Adicionando ao carrinho

![image](https://user-images.githubusercontent.com/90658683/143688668-677991b6-d3f5-4fb9-a0e6-f17e80906fa1.png)

![image](https://user-images.githubusercontent.com/90658683/143688698-e3096ebc-92d1-48cd-bb2d-fec47b1bbd93.png)

![image](https://user-images.githubusercontent.com/90658683/143688753-76af6634-e35e-4448-8299-02188f79192f.png)

![image](https://user-images.githubusercontent.com/90658683/143688771-bc10a5ce-e936-4a61-8998-f2fe1b23c6d2.png)


