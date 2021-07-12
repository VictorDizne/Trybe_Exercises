function hydrate (string) {
  let result = 0;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < string.length; i += 1) {
    number = Number(string[i]);
    if (numbers.includes(number)) {
      result += number;
    }
  }
  if (result === 1) return `${result} copo de água`;
  return `${result} copos de água`;
}
hydrate('1 cerveja, 2 shots e 1 catuaba');

module.exports = hydrate;