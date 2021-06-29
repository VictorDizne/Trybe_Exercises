//Exercicio 1

const saveEmployee = (name) => {
  let email = name.toLowerCase().split(' ').join('_');
  email = `${email}@hotmail.com`
  const employeeObject = {
    name: name,
    email: email,
  }
  return employeeObject;
}
const newEmployess = () => {
  const employees = {
    id1: saveEmployee('Pedro Guerra'),
    id2: saveEmployee('Luiza Drumond'),
    id3: saveEmployee('Carla Paiva'),
  }
  return employees;
}

//Exercicio 2

const sortNumber = () => {
  let generated = Math.random(5);
  generated = Math.round(generated);
  return generated;
}

const checkWin = (chosenNumber) => {
  const winnerNumber = sortNumber();
  if (chosenNumber <= 0 || chosenNumber > 5) {
    return 'Numero Inválido, escolha de 1 a 5.'
  } else if (chosenNumber === winnerNumber) {
    return 'Parabéns você ganhou!!'
  } else {
    return 'Não foi dessa vez, tente novamente!'
  }
}

//Exercicio 3

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkCorrect = (certas, escolhidas) => {
  let points = 0;
  for (let i = 0; i < certas.length; i += 1) {
    if (escolhidas[i] === 'N.A') {
      points = points;
    } else if (escolhidas[i] === certas[i]) {
      points += 1;
    } else {
      points -= 0.5;
    }
  }
  return points;
}

const showPoints = (gabarito, estudante, checkCorrect) => {
  const pontos = checkCorrect(gabarito, estudante);
  console.log(pontos);
}
showPoints(rightAnswers, studentAnswers, checkCorrect);