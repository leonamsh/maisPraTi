<!-- markdownlint-disable MD013 -->
<!-- markdownlint-disable MD004 -->
<!-- markdownlint-disable MD013 -->

# Aula React

## introdução

- single page aplication.
  - site onde todo o conteúdo é sempre feito com apenas um html, ou seja, só é atualizado o html mas o arquivo é sempre um.

- componentes
  - ex: cabeçalho, dificilmente ele muda. Então é um componente que a idéia não é que você precisa "reescrever" o header, você usa ele como uma cópia em todas as páginas

- design atomico
  - um atomo = botão
  - molécula = conjunto de botão + card
  - organismo = grid de imagens

- então é uma estrutura hierarquica que monta um organismo pela parte menor até formar um organismo complexo e com várias características

## comando para iniciar o sistema (sem vite por enquanto)

1. npm init -y
2. npm i react react-dom
3. npm i -D webpack webpack-cli webpack-dev-server
