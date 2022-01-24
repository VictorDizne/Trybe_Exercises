const readline = require('readline-sync');

const peso = readline.question('Qual seu peso? ');
const altura = readline.question('Qual sua altura? (Em centimetros) ');

const alturaEmMetros = altura / 100;

const IMC = (peso / Math.pow(alturaEmMetros, 2)).toFixed(2)

console.log(`Seu IMC é ${IMC}`)