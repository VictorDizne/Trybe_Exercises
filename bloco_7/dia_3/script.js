const assert = require('assert');

// // function sum(a, b) {
// //   if (typeof a !== 'number' || typeof b !== 'number') {
// //     throw new Error('parameters must be numbers');
// //   }

// //   return a + b;
// // }

// // // implemente seus testes aqui
// // assert.strictEqual(sum(4 , 5), 9);
// // assert.strictEqual(sum(0 , 0), 0);
// // assert.throws(()=> { sum('5', '4'); }, /^Error: parameters must be numbers$/);

// // function myRemove(arr, item) {
// //   let newArr = [];
// //   for (let index = 0; index < arr.length; index += 1) {
// //     if (item !== arr[index]) {
// //       newArr.push(arr[index]);
// //     }
// //   }
// //   return newArr;
// // }

// // // implemente seus testes aqui
// // assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// // assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// // assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// // function myRemoveWithoutCopy(arr, item) {
// //   for (let index = 0, len = arr.length; index < len; index += 1) {
// //     if (arr[index] === item) {
// //       arr.splice(index, 1);
// //       index -= 1;
// //       len -= 1;
// //     }
// //   }

// //   return arr;
// // }

// // // implemente seus testes aqui

// // // const array = [1, 2, 3, 4];

// // assert.deepStrictEqual(myRemoveWithoutCopy(array, 3), array);
// // assert.deepStrictEqual(myRemoveWithoutCopy(array, 3), [1, 2, 4]);
// // assert.notDeepStrictEqual(myRemoveWithoutCopy(array, 3), [1, 2, 3, 4]);
// // assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// // function myFizzBuzz(num) {
// //   if (typeof num !== 'number') return false;
// //   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
// //   if (num % 3 === 0) return 'fizz';
// //   if (num % 5 === 0) return 'buzz';
// //   return num;
// // }

// // // implemente seus testes aqui
// // assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// // assert.strictEqual(myFizzBuzz(9), 'fizz');
// // assert.strictEqual(myFizzBuzz(25), 'buzz');
// // assert.strictEqual(myFizzBuzz(4), 4);
// // assert.strictEqual(myFizzBuzz('renatin'), false);

// // // const obj1 = {
// // //   title: 'My Title',
// // //   description: 'My Description',
// // // };

// // // const obj2 = {
// // //   description: 'My Description',
// // //   title: 'My Title',
// // // };

// // // const obj3 = {
// // //   title: 'My Different Title',
// // //   description: 'My Description',
// // // };

// // // implemente seus testes aqui
// // assert.deepStrictEqual(obj1, obj2, 'Objeto 1 e objeto 2 não são iguais');

// // // escreva a função addOne aqui
// // function addOne (arr) {
// //   let newArray = [];
// //   for (i = 0; i < arr.length; i += 1){
// //     newArray.push(arr[i] + 1);
// //   }
// //   return newArray;
// // }

// // // const myArray = [31, 57, 12, 5];
// // // const unchanged = [31, 57, 12, 5];
// // // const expected = [32, 58, 13, 6];
// // // const output = addOne(myArray);

// // assert.strictEqual(typeof addOne, 'function');
// // assert.deepStrictEqual(output, expected);
// // assert.deepStrictEqual(myArray, unchanged);

// // // escreva a função wordLengths aqui
// // function wordLengths (arr) {
// //   let result = [];
// //   for (i = 0; i < arr.length; i += 1) {
// //     result.push (arr[i].length);
// //   }
// //   return result;
// // }

// // // const words = ['sun', 'potato', 'roundabout', 'pizza'];
// // // const expected = [3, 6, 10, 5];

// // assert.strictEqual(typeof wordLengths, 'function');
// // // const output = wordLengths(words);
// // assert.deepStrictEqual(output, expected);

// // escreva a função sumAllNumbers aqui

// const sumAllNumbers = (numArr) => {
//   let result = 0;
//   for (i = 0; i < numArr.length; i += 1) {
//     result += numArr[i];
//   }
//   return result;
// }

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);

// const assert = require('assert');
// // escreva a função findTheNeedle aqui
// const findTheNeedle = (wordsArr, wordToFind) => {
//   let result = -1;
//   for (i = 0; i < wordsArr.length; i += 1) {
//     if (wordsArr[i] === wordToFind) {
//       result = i
//     }
//   }
//   return result;
// }

// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let greets = [];

  for (let i in people) {
    greets.push (`${greeting}${people[i]}`)
  }
  return greets;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
assert.deepStrictEqual(greetPeople(parameter), result);