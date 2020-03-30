---
title: React Boilerplate com Redux e TypeScript
date: "2020-03-28T09:25:00.284Z"
description: "Um boilerplate de React com as principais funcionalidades que você precisa para fazer o seu projeto com Redux e TypeScript de forma esvalável."
# description: "Why draft in this post? Sometimes I don't have time to write, so I start to commit some ideas with the (draft) inside the post."
---

Fala Dev! Com certeza você já teve que iniciar vários projetos em React e teve um trabalho um tanto quanto chato e repetitivo de configurar o seu projeto em React com <strong>Redux + TypeScript</strong> né? Agora você não terá mais esse problema! Vou apresentar a vocês o meu React Boilerplate.

## React Boilerplate

Depois de muito estudo e vários projetos realizados eu mais alguns amigos chegamos a uma estrutura de pastas para trabalhar com Redux e TypeScript no React e agora eu venho aqui trazer esta MARAVILHA de estrutura para vocês. Sabe o que é melhor? É só clonar e começar a programar. O projeto já vem até com uma lógica de rotas autenticadas para você implementar o seu próprio sistema de autenticação. Aqui vai uma lista das vantagens que você tem em utilzar esse esqueleto:

- TSLint e Prettier configurados
- Estrutura de pastas escalável
- Redux com redux persist
- Projeto todo em TypeScript
- Rotas com autenticação
- Estado de conexão do usuário
- Modal de atualização para PWAs

<i>Obs: Em breve farei um post sobre cada uma das features acima, explicando como elas funcionam e também como implementá-las em seus próprios projetos.</i>

## Passo a passo

Clone o repositório [React Boilerplate](https://github.com/oprogramadormoderno/react-boilerplate):

```
git clone https://github.com/oprogramadormoderno/react-boilerplate.git
```

Entre dentro do repositório, execute o comando yarn e inicie o server:

```
cd react-boilerplate && yarn && yarn start
```

## Estrutura das pastas

Todo o nosso código se encontra dentro da pasta <i>src</i>.

<b>src/assets</b>: Aqui ficam todos os assets do nosso projeto, tais como imagens, ícones, scss, svgs, etc.

<b>src/components</b> Aqui ficam todos os nossos componentes globais, ou seja, aquele que usaremos 2 ou mais vezes em diferentes lugares da nossa aplicação.

<b>src/interfaces</b> Aqui ficam todos os nossos arquivos de tipagem. Basicamente são nossas <i>interfaces</i>, <i>enums</i> e <i>types</i> que serão usados em todo o projeto.

<b>src/screens</b> Aqui ficam todas das telas da nossa aplicação.

<b>src/store</b> Aqui fica toda a lógica do nosso redux, já com um exemplo autenticação e de estado de conexão do usuário funcionando.

<b>src/utils</b> Aqui ficam nossas utilidades, funções que usaremos no projeto entre outras coisas.

## Estrutura dos componentes

Segue um exemplo de estrutura dos nossos componentes: (lembrando que não precisamos ter todos esses arquivos criados, só os que iremos usar no componente)

- <i>example.component.tsx</i> o arquivo do nosso componente
- <i>example.style.ts</i> todos os estilos referente ao componente
- <i>example.type.ts</i> tipagem do nosso componente
- <i>example.utils.ts</i> utilidades usadas no componente

Em breve farei um post sobre estrutura de pastas do React para melhor explicar o método que utilizamos aqui. Por enquanto é isso, sinta-se à vontade para mandar suas dúvidas pelo direct do instagram ou twitter, vai ser um prazer ajudá-los. Caso tenha alguma contribuição para qualquer um dos projetos Open Source que posto aqui, pode ir lá no nosso repositório e contibruir ou abrir suas issues.
