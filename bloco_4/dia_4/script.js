// let medalhista = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 34,
//   bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
//   medals: {
//     golden: 2,
//     silver: 3,
//   }
  
// }
// console.log ("A jogadora " + medalhista.name + " " + medalhista.lastName + " foi eleita a melhor do mundo por " + medalhista.bestInTheWorld.length + " vezes.");
// console.log ("A jogadora " + medalhista.name + " " + medalhista.lastName + " possui " + medalhista.medals.golden + " medalhas de ouro e " + medalhista.medals.silver + " medalhas de prata.");

// let names = {
//   person1: "João",
//   person2: "Maria",
//   person3: "Jorge"
// }
// for (let key in names){
//   console.log ("Olá " + names[key]);
// }

// let car = {
//   model: "A3 Sedan",
//   manufacturer: "Audi",
//   year: 2020
// }
// for (let key in car){
//   console.log (key, car[key]);
// }

// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
//   recorrente: "Sim"
// };

// let info2 = {
//   personagem: "Tio Patinhas",
//   origem: "Christimas on BeDonaldar Mountain",
//   nota: "O último MacPatinhas",
//   recorrente: "Sim"
// };

// for (let key in info){
//   if(info[key] == info2[key] && info[key] === "Sim"){
//     console.log("Ambos recorrentes.");
//   }else{
//     console.log(info[key] + " e " + info2[key]);
//   }
// }

// function verificaPalindromo(palavra){
//   let palavraCortada =  palavra.split("");
//   let palavraInvetida = palavraCortada.reverse();
//   palavraInvetida = palavraInvetida.join("");
  
//   if(palavra == palavraInvetida){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(verificaPalindromo("arara"));

//  function bigNumber (numbers){
//    let indexOfBigger = 0;
//    for(let index=0; index < numbers.length; index += 1){
//      if(numbers[index] > numbers[indexOfBigger]){
//        indexOfBigger = index;
//      }
//    }
//    return indexOfBigger;
//  }
//  console.log(bigNumber([2, 3, 6, 7, 10, 1]));

//  function smallNumber (numbers){
//    let indexOfSmaller = 0;
//    for(let index=0; index < numbers.length; index += 1){
//      if(numbers[index] < numbers[indexOfSmaller]){
//        indexOfSmaller = index;
//      }
//    }
//    return indexOfSmaller;
//  }
//  console.log(smallNumber([2, 4, 6, 7, 10, 0, -3]));

function verificaFimDaPalavra (word, ending){
  word = word.split("");
  ending = ending.split("");
  resultado = true;
  for(let index = 0; index < ending.length; index += 1){
    if (word[word.length - ending.length + index] != ending[index]){
      resultado = false;
    }
  }
  return resultado;
}
console.log(verificaFimDaPalavra("joao","pp"));

