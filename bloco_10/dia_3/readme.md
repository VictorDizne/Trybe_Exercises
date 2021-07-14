Anotando aqui o uso que finalmente entendi dos exports e imports

usando module.exports = {}, posso colocar todas as funções do meu arquivo que 
desejo exportar


Imaginando que esse module.exports está em um arquivo chamado script.js

module.exports = {
  soma,
  subtração,
}


Agora no meu arquivo de testes devo puxar as funções da seguinte forma

const funcoes = require('./script.js');


Caso eu queira, tambem posso puxar as funcoes utilizando object desestructuring
const { soma, subtração } = require('./script.js');


Imaginando aqui que o script.js está na mesma pasta que o meu arquivo de testes,
e o nome da minha constante pode ser qualquer um.


Agora para acessar uma função é tão simples quanto escrever um

const somaUmMaisDois = funcoes.soma(1, 2);


Como notas finais, acho legal resaltar tambem que eu consigo fazer o export de apenas
uma função caso eu queira, se mantendo no exemplo de cima ficaria algo como

module.exports = soma();


Assim no arquivo de testes consigo acessar a função declarando ela diretamente.

const soma = require('./script.js');

const somaUmMaisDois = soma(1, 2);


Nota que se eu tiver que exportar mais de uma função sempre terei que usar o 
arquivo.nomedafuncao pra acessar ela.