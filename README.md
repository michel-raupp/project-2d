# Introdução

Olá tudo bom? Esse projetinho é uma prova de conceito de como poderia ser um site com a navegação similar a um RPG top-down, como os Final Fantasy antigos. Sim, isso é um site, não um jogo.

A ideia foi não utilizar um canvas, openGl ou Unity para renderizar o "jogo", somente o "core" de um site convencional.

## Sobre o projeto

O projeto utiliza Next.Js, React.js, Javascript e Tailwind. Além disso, foram utilizados assets do RPG Maker VX Ace, como imagens, músicas e sfx.

[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)

RPG Maker VX Ace: [Acessar](https://www.rpgmakerweb.com/products/rpg-maker-vx-ace)

Assets: [Acessar](https://www.spriters-resource.com/pc_computer/rpgmakervxace/)

Músicas/Sons: [Acessar](https://www.youtube.com/watch?v=hqxPIYGE2ek&list=PL8BA02112C44720A1)

## Como funciona a navegação?

Bom, quebrei um pouco a cabeça tentando pensar em como poderia fazer com que o site acompanhasse o personagem conforme ele se movia.

A conclusão que cheguei foi a seguinte: Ao invés de tentar mover a tela junto do personagem, eu deixei a tela travada e centralizada no personagem. Desse modo, basta fazer com que o mapa do jogo se mova na direção inversa do personagem, fazendo a animação da navegação se anular e dar a impressão de que o personagem está se movendo.

## Como foi feito os mapas?

Os mapas são basicamente um arrays de objetos, no qual cada objeto contém um "piso". Cada piso possui suas propriedades, como a imagem, se é colisível, etc. Desse modo, cada objeto dentro do array é a coordenada Y, e cada piso dentro de um objeto é a coordenada X.

Exemplo: 
```
mapa = [
  {
    y: 1,
    tiles: [
      { x: 1, type: tronco, collidable: true },
      { x: 2, type: grama },
      { x: 3, type: grama_alta },
    ]
  },
  {
    y: 2,
    tiles: [
      { x: 1, type: grama },
      { x: 2, type: grama_alta },
      { x: 3, type: terra },
    ]
  }
]
```

No exemplo acima, a coordenada x1 y1 é um tronco de árvore que tem colisão. Por outro lado, a coordenada x3 y2 é um piso de terra, que pode ser "caminhável", isto é, não há um colisor nesse piso. A partir disso, é realizado um [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) para gerar o mapa com várias imagens, sendo cada imagem a representação visual o piso da sua respectiva coordenada.

Representação visual do objeto disposto no exemplo:

<img src="https://github.com/user-attachments/assets/4d64b9d3-6138-4653-933f-58f89f534d33" width="400">

## E quanto as colisões?

Bom, agora que o problema da navegação foi encerrado e sabemos como é feito o mapa, fica a dúvida de funciona a colisão entre o personagem e uma parede (por exemplo). Bom, sempre que o personagem se move nas posições X e Y, eu comparo o destino da movimentação com o piso daquela respectiva coordenada, verificando se é colisível ou não. Caso aquele piso tem a propriedade de colisão, então o movimento é cancelado.

## Como iniciar o projeto?

Bom, basta seguir a documentação do Next.js com Vite. Em resumo:
- Clone o repositório;
- Abra-o projeto no VsCode (ou outra [IDE](https://www.redhat.com/pt-br/topics/middleware/what-is-ide#:~:text=A%20sigla%20IDE%20significa%20(Integrated,de%20usu%C3%A1rio%20gr%C3%A1fica%20(GUI).));
- Rode o comando ```npm i``` para instalar as dependências do projeto;
- Rode localmente o projeto utilizando o comando ```npm run dev```;
- Acessar o ```http://localhost:3000/``` para testar o projeto local;

Documentação Next.js: [Acessar](https://nextjs.org/docs/app/getting-started/installation)

## Desafios encontrados

Como nem tudo são flores, encontrei problemas durante o desenvolvimento desse projeto. Problemas encontrados:
- O projeto não tem acessibilidade envolvida;
- A movimentação em celulares IOS é ruim, pois ao pressionar os botões de navegação, o IOS entende como se o usuário estivesse querendo selecionar um texto/imagem no fundo do site.
- O projeto não é escalável, acredito que uma solução melhor a aplicada é utilizar uma imagem ```png``` gigante para ser o mapa, e deixar a parte de colisões, inimigos, npc, itens e afins em um ambiente separado. Desse modo, todo o mapa é acessível a menos que seja explicitamente descrito que tal coordenada tem uma colisão, por exemplo.
- A implementação de um som de batida/impacto ao não poder movimentar (quando estiver tentando atravessar uma parede por exemplo), é um pouco problemática de implementar, então optei por retirar.

## Considerações finais

Sinta-se livre para clonar, copiar, melhorar, editar o projeto. Caso tenha algum feedback, pode mandar um email em [michelraupp@outlook.com](mailto:michelraupp@outlook.com) ou entrar em contato comigo via [LinkedIn](https://www.linkedin.com/in/michelraupp/).
