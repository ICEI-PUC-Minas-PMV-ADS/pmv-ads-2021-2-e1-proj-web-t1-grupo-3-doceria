
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Para controle do projeto, das pessoas e das tarefas, utilizaremos poucos ambientes de trabalho, afim de reduzir/anular as possibilidades de redundância ou ausência de informações em determinados ambientes, focando sempre nos nossos requisitos funcionais.  

Nossa ferramenta principal para gerir os tópicos citados acima, será o GitHub, que utilizaremos na sua forma típica de repositório, armazenando toda manutenção dos códigos. Paralelo a esta modalidade de repositório, faremos uso do GitHub para os gerenciamentos de backlog do produto, bem como, das sprints individualizadas, este gerenciamento será feito através da aba “Project”.  

Para arquivos visuais e sonoros, bem como, formulários de pesquisas,  análises de requisitos, casos de uso, utilizaremos o Google Drive com acesso restrito para a equipe envolvida no desenvolvimento da aplicação, seja através da forma técnica ou gerencial.  

O Projeto de interface e wireframes foi desenvolvido através dos sites Canva e Flowmapp, criado de forma que qualquer eventual alteração ou incrementação seja feita de forma pratica e elegante.

## Gestão de código fonte / Controle de Versão

A gestão de código fonte ou controle de versões diz respeito ao monitoramento e gerenciamento das alterações no código, de preferência com histórico de execuções de desenvolvimento e, também, auxilia na resolução de conflitos e reverte versões anteriores de um projeto, quando necessário. Esse componente é essencial para o processo de desenvolvimento do software. 

Com isso, para gestão do código fonte utilizaremos o Git Flow, um modelo de organização de branches, o qual dita que tipos de ramificações configurar e como fazer merge. Desta forma, todas as manutenções no código são realizadas em branches separados, identificados como Main, Hotfix, Release, Develop e Feature, ou seja, um modelo de ramificação de manutenção que permite corrigir com rapidez lançamentos de produção mantendo uma linha de desenvolvimento dedicada para atualização de segurança, permitindo que a equipe trabalhe com problemas sem interromper o fluxo do trabalho ou esperar o próximo ciclo de lançamento. Segue figura 1: 

 

 

Figura 1 - Fluxo de controle do código fonte no repositório github 

# Main: branch principal, somente versão de produção; 

Hotfix:  branch de correção: responsável pela realização de alguma correção crítica encontrada em produção; 

Release: branch de lançamento: utilizada como ambiente de homologação e é removida após realizar os testes e do merge com a Main. Caso haja alguma alteração, ela também deve ser sincronizada com a Develop; 

Develop: branch criada a partir da branch main, contém código em nível preparatório para o próximo deploy/versão. Ou seja, quando features são terminadas, elas são juntadas com a branch develop, testadas e somente depois as atualizações da branch develop passam por mais um processo para então ser juntadas com a branch main; 

Feature: branch de melhorias: utiliza-se para o desenvolvimento de uma funcionalidade específica/nova, inicia-se com a palavra feature e são criadas sempre a partir da branch develop. Exemplo: feature/cadastro. 

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

## Gerenciamento de Projeto

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento.

### Divisão de Papéis

A equipe está organizada da seguinte maneira: 

- Scrum Master: Pedro Daniel Jardim

- Product Owner: Renata Diniz Guimarães de Oliveira  

- Equipe de Desenvolvimento 

  - Cristiano Garcia Ridolfi 

  - Luis Galdino de Almeida da Silva 

  - Michelle Leal Rodrigues 

  - Pedro Daniel Jardim 

  - Renata Diniz Guimarães de Oliveira 

  - Willian de Jesus Silva 

- Equipe de Design 

  - Michelle Leal Rodrigues  

### Processo

Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
 
> **Links Úteis**:
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o
sistema de versão. As ferramentas de comunicação utilizadas possuem
integração semelhante e por isso foram selecionadas. Por fim, para criar
diagramas utilizamos essa ferramenta por melhor captar as
necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
