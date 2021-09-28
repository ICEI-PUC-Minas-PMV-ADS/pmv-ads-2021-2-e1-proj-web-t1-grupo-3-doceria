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
**Figura 2 - Arquitetura da Solução**</center>

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
(Tela 1) onde ele é confrontado com as opões de editar seu perfil ou
então visualizar sua galeria.

Caso ele opte por seguir pelo primeiro caminho (Editar Perfil), ele é
redirecionado para a tela de edição de perfil (Tela 2), onde pode
atualizar seus dados cadastrais. Nessa tela, o usuário também pode
escolher para editar sua foto de perfil. Ao selecionar essa opção, ele é
redirecionado para a Tela 3, onde ele a imagem expandida do perfil do
usuário é mostrado. Ao selecionar a opção para atualizar a imagem, uma
nova janela abre pedindo para o usuário fazer o upload da nova foto.
Assim que o processo termina um pop-up exibe o status para o usuário
(Tela 4) e o usuário é redirecionado para a Tela 2.

Caso o usuário opte seguir pelo segundo caminho (Visualizar Galeria) ele
é redirecionado para a Tela 5 com todas as fotos que o usuário possui. O
usuário pode clicar em um post qualquer para visualizar os detalhes do
post (Tela 6). Nessa tela, ele pode então escolher editar o post, sendo
redirecionado para a Tela 7. Ao editar as informações, o usuário pode
escolher salvar ou deletar o post. Em ambos os casos o status é
notificado para o usuário (Tela 8) e em seguida ele é redirecionado
para a Tela 2.

![Exemplo de UserFlow](img/userflow.jpg)


## Tecnologias Utilizadas

Todos os dias usamos diferentes aplicativos, ferramentas e sistemas online, seja no desktop ou smartphones. O que muitos não sabem é que por trás de um aplicativo há uma grande estrutura desenvolvida pela arquitetura de solução.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
