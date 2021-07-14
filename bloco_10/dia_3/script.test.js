const { expect, test, afterEach, afterAll, beforeEach, beforeAll } = require('@jest/globals');
const script = require('./script.js');
jest.mock('./script.js')

describe('Testa o funcionamento da função generateRandomNumber', () => {
  afterAll(() => {
    script.generateRandomNumber.mockReset();
  })

  test('Testa se ao passar a função, o retorno é 0', () => {
    script.generateRandomNumber = jest.fn().mockReturnValue(10);
    expect(script.generateRandomNumber()).toBe(10);
  });

  test('Testa se a função foi chamada', () => {
    expect(script.generateRandomNumber).toHaveBeenCalled();
  });

  test('Testa se a função foi chamada exatamente uma vez', () => {
    expect(script.generateRandomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('Testa uma nova função que divide um valor pelo outro', () => {
  beforeAll(() =>{
    script.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  });
  
  test('Testa se ao passar 10 e 2 na função, retorna 5', () => {
    expect(script.generateRandomNumber(10, 2)).toBe(5);
  });

  test('Testa se a função foi chamada exatamente uma vez', () => {
    expect(script.generateRandomNumber).toBeCalledTimes(1);
  })
});