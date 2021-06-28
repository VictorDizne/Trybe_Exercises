// const assert = require('assert');

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   return arrays.reduce((tudo, atual) => tudo.concat(atual), []);
// }

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

const assert = require('assert');
const { start } = require('repl');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames() {
//   const teste = books.reduce((names, book, index, books) => {
//     if (index === books.length - 1) return `${names} ${book.author.name}.`;
//     return `${names} ${book.author.name},`;
//   }, '');
//   return teste.trim();
// }

// assert.strictEqual(reduceNames(), expectedResult);



// const expectedResult = 43;

// function averageAge() {
//   let allAges = books.reduce((result, current) => {
//     result += current.releaseYear - current.author.birthYear;
//     return result;
//   }, 0);
//   allAges = allAges / books.length;
//   return allAges;
// }

// assert.strictEqual(averageAge(), expectedResult);



// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

// function longestNamedBook() {
//   const getBiggerName = books.reduce((bigger, current) => {
//     if (current.name.length > bigger.name.length) bigger = current;
//     return bigger;
//   });
//   return getBiggerName;
// }

// assert.deepStrictEqual(longestNamedBook(), expectedResult);



// const assert = require('assert');

// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// function containsA() {
//   return names.reduce ((result, current) => 
//     result + current.split('').reduce((acc, curr) => {
//       if (curr === 'a' || curr === 'A') return acc + 1
//       return acc;
//     }, 0), 0);
// }
// containsA()

// assert.deepStrictEqual(containsA(), 20);



// const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
function gradesAverage(arrOfGrades) {
  let medium = arrOfGrades.reduce((result, curr) => result += curr);
  return medium / arrOfGrades.length;
}

function studentAverage() {
  let studantsNameAndGrade = students.reduce((starter, current, index) => {
    const returnedObject = 
    {
      name: current,
      average: gradesAverage(grades[index]),
    }
    starter.push(returnedObject);
    return starter;
  }, [])
  return studantsNameAndGrade;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);