# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários através da entrevista com proprietário, atendente e cliente. Os detalhes levantados nesse processo estão consolidados na forma de personas e histórias de usuários e, as mudanças que possam ocorrer ao longo do caminho e do projeto devem adaptar-se de maneira organizada e segura para os envolvidos, acrescentando e retirando funcionalidades da lista, atribuindo novas prioridades e adicionando detalhes de acordo com o fornecimento dos feedbacks.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nas Figuras que se seguem.

##  Flávia (cliente) 
 
Fonte: depositphotos (2013)

**Idade** : 32 

**Ocupação**: Secretária durante os dias úteis e aos fins de semana realiza os serviços domésticos de sua casa.	

**Aplicativos**
-	Instagram 
-	Facebook 
-	WhatsApp 
-	Apps bancários 
 
**Motivações**
-	Gostaria de ter mais praticidade durante sua rotina atarefada, para que possa passar mais tempo ao lado dos filhos. 
-	Diversificação de Meios de pagamento. 
-	Praticidade na visualização dos produtos. 

**Frustrações**
-	Atualmente gostaria de organizar uma festa, entretanto, os preparativos demandam muito tempo. 
-	Não gosta de doce com fruta. 
-	Falta de informações de fácil acesso sobre o produto. 	

**Hobbies, História**
-	Tem 2 filhos. 
-	Costuma usar as redes sociais com frequência. 

##  Ana Diniz (Proprietária) 
 
Fonte: Acervo Pessoal

**Idade**: 43 

**Ocupação**: Administrada de empresas (Comércio Exterior); professora de inglês; proprietária de uma pequena doceria na região metropolitana de Minas Gerais que atua em proporcionar experiências a seus usuários. 

**Aplicativos**
-	Instagram 
-	Facebook 
-	WhatsApp 
-	Aplicativo de banco 
-	Canva 

**Motivações**
-	Aumentar a clientela.
-	Organizar e mitigar as entregas. 
-	Emissão de relatórios pra gerenciamento do negócio.

**Frustrações** 
-	Não conseguir atender seu cliente em único meio on-line. 
-	Não ter visibilidade da parte gerencial do projeto. 

**Hobbies, História**
-	Tem personalidade forte, empreendedora. Gosta de dar aula e lidar com os jovens. 

## Alexandra (Atendente) 
 
Fonte: depositphotos (2015)	

**Idade**: 22 anos

**Ocupação**: Atendente 

**Aplicativos**
- Facebook 
- WhatsApp 
- Instagram  
- Tik Tok 
- You Tube 

**Motivações**
- Atender os pedidos de forma mais ágil. 
- Confiabilidade na empresa.
- Assertividade nos pedidos.
- Clareza nas informações.

**Frustrações**
- Quantidade elevada de pedidos.
- Dificuldade em separar os pedidos. 
- Ordem dos Pedidos. 
	
**Hobbies, História**
•	Aventureiro, gosta de curtir a vida, pessoa ágil e bem resolvida. 

## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Flávia (Cliente)  |Visualizar, selecionar, comprar e pedir entrega em domicílio, doces para uma festa  | Para que possa poupar tempo e priorizar outras tarefas               |
|Flávia (Cliente)  | Realizar uma alteração no prato/pedido | Para que atenda às suas preferências |
|Flávia (Cliente)  | Desejo um cardápio claro, um site esclarecedor e simples| Não posso perder tempo, pois minha rotina é muito corrida|
|Flávia (Cliente)  | Ter formas de pagamento variadas| Para que possa escolher a melhor opção|
|Ana Diniz (Proprietário)  | Conseguir atender mais de um cliente em um único meio on-line| Potencializar as vendas, atendendo mais de um cliente em único meio on-line|
|Ana Diniz (Proprietário)  | Ter visibilidade de dados centralizados de vendas realizadas na plataforma| Para que a partir de dados, poder fazer um cálculo preciso de estoque de itens mais pedidos e direcionar melhor as campanhas de marketing|
|Ana Diniz (Proprietário)  | Site permita interação com o cliente| Para permitir fidelização e melhorias|
|Ana Diniz (Proprietário)  | Site permita mostrar ao cliente a quantidade de disponibilidade de determinados produtos| Para que o cliente visualize a disponibilidade do produtos|
|Alexandra (Atendente)  | Gerenciar quantidade elevadas de pedidos| Para organizar recursos e tempo ao separar os pedidos com mais agilizados|
|Alexandra (Atendente)  | Conseguir separar os pedidos com mais agilidade| Para diminuir o tempo gasto com logística entre o momento do pedido ao destino do produto|
|Alexandra (Atendente)  | Ter ordenação de pedidos por prioridade, ordem de chegada, local de entrega| Para as prioridades de pedidos serem respeitados na hora de preparar/organizar pedidos|

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar na página principal menu dos produtos, novidades, promoções e valores, além de itens destaques do dia, informações gerais de Entrega, Sobre nós | ALTA | 
|RF-002| O site deve permitir que os pedidos sejam ordenados por ordem de chegada, local de entrega e prioridade   | ALTA |
|RF-003| O site deve permitir a chegada de uma notificação a cada pedido efetuado    | ALTA |
|RF-004| O site deve oferecer destaque para informações e produtos das datas comemorativas   | ALTA |
|RF-005| O site deve permitir que o cliente insira endereço de entrega, nome, telefone de contato   | ALTA |
|RF-006| O site deve permitir diversas formas de pagamento como Pic Pay, Pix, cartão de débito e crédito   | ALTA |
|RF-007| O site deve permitir a visualização da disponibilidade de produtos   | MÉDOA |
|RF-008| O site deve permitir a descrição dos produtos   | MÉDIA |
|RF-009| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário delimitar o produto e ingredientes   | BAIXA |
|RF-010| O site deve permitir salvar os pedidos para fins gerenciais como relatórios de pedido do usuário, entrega – dashboard   | BAIXA |
|RF-011| O site deve permitir que os usuários façam comentários e avaliações   | BAIXA |
|RF-012| O site deve permitir que usuários possam alterar ingredientes pedidos   | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku)  | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada  | ALTA | 
|RNF-003| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge, Safari) |  ALTA | 
|RNF-004| O site deve ter bom nível de contraste entre os elementos da tela em conformidade e utilizar a paleta de cores da marca |  MÉDIA | 
|RNF-005| O site deve permitir salvar as informações dos clientes respeitando a LGPD |  MÉDIA | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-001| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 07/12/2021|
|RE-002| O aplicativo deve se restringir às tecnologias básicas da Web no Front-end
|RE-003| A equipe não pode subcontratar o desenvolvimento do trabalho|
