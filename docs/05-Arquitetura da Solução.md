# Arquitetura da Solução

A arquitetura de soluções constrói soluções com base nas necessidades da empresa, é responsável por desenhar e implementar recursos e ferramentas de TI para atender as necessidades do cliente, ou seja, definir de forma estruturada quais são so componentes, propriedades e documentações necessárias para que um sistema seja desenvolvido, além de seu relacionamento com outros sistemas.

A arquitetura para a solução em questão será basicamente a hospedagem da página web (HTML, CSS e JS) e integração da mesma com APIs públicas, a fim de agilizar o processo de contato entre cliente x loja, proporcionando maior possibilidade de negócios.  

Toda codificação é armazenada no Github, o versionamento é controlado via Git Flow, para que todo o processo seja acompanhado e revertido, se preciso for. 

 Como a página tem finalidade de exposição, para o projeto matriz não teremos integração com banco de dados, pois, não teremos a necessidade de armazenamento dos dados pessoais dos clientes. 

 A hospedagem da página será feita no Heroku, a página contará com basicamente duas APIs, sendo, WhatsApp (https://wa.me/seunumero)  e Google Maps para exibir o endereço da loja fisica. 

 A aplicação terá basicamente uma tela inicial, uma aba com link de produtos, uma aba “Quem somos”, uma aba fale conosco. 

## Diagrama de componentes

Diagrama de componentes mostra o relacionamento entre os componentes de um sistema, identificando-os, estruturando-os e enfatizando o comportamento do serviço quanto à interface, além de dar uma visão geral do sistema.

Os componentes que fazem parte da solução são apresentados na Figura abaixo.

![Diagrama de Componentes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-grupo-3-doceria/blob/main/docs/img/Hospedagem%20-%20Heroku%20(2).png)
**Figura 28 - Arquitetura da Solução**</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Produtos** - cardápio com produtos.
     - **Comentários** - registro de opiniões dos usuários sobre pedidos, produtos, serviço.
     - **Cadastro** - lista os clientes e seu cadastro - acesso restrito ao proprietário
 - **API** - Integração do site com aplicativos como: WhatsApp, Instagram, Canva, sistema de pagamento.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador (Heroku). 


Inclua um diagrama da solução e descreva os módulos e as tecnologias que fazem parte da solução. Discorra sobre o diagrama.

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opções Promoções, cardápio, Sobre nós

Caso ele não saiba o que quer, pode optar pelo caminho de explorar as promoções, o cardápio, sendo assim, ele escolhe a opção deseja e é direcionado para cardápio (Tela 2) ou Promoções (Tela 3) onde pode
atualizar escolher o produto e solicitar seu pedido.  Ao selecionar seu produto e colocado o mesmo no carrinho de compra (Tela 4), o usuário tem a opção de continuar comprando ou finalizar a compra. Se o mesmo não estiver pronto para finalizar a compra 3 opções são apresentadas para ele: Gostaria de saber mais sobre a loja (Tela 5); Gostaria de saver sobre as políticas da loja (Tela 6); Gostaria de entrar em contato via WhahsApp pos possui dúvidas (Tela 7). Agora se o cliente optar em finalizar o pedido é solicitado o preenchimento de um formulário com dados pessoais e forma de entrega (Tela7), Selecionar a forma de pagamento (tela 8) e finalizar o pedido (tela 9). Ao finalizar se o pedido se der um erro a Tela 10 é apresentada para entrar em contato e, se a compra forma confirmada (tela 11) o cliente é direcionado para a opção de Avaliar o pedido (Tela 12). 

## Tecnologias Utilizadas

Serão utilizadas tecnologias como ferramentas e sistemas on-line, seja no desktop ou smartphones com compatibilidade com os principais navegadores do mercado como Google Chrome, Microsoft Edge, Safari e Firefox além da integração com aplicativos como WhatsApp, Instagram, Canva. 


## Hospedagem

O site utiliza a plataforma do Heroku como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL:  

 https://link_exemplo.herokuapp.com  

A publicação do site no Heroku é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço:  

https://git.heroku.com/link_exemplo.git 
