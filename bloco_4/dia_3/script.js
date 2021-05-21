let numero = 27;
let divisores = 1;

for (let index = 2; index < numero; index += 1){
  if (numero % index == 0){
    divisores += 1;
  }
}
if (divisores == 1){
  console.log ("Esse é um número primo");
} else {
  console.log ("Esse número não é primo");
}