const findUserById = require('./script.js');

describe('Testa o funcionamento da função findUserById', () => {
  it('Testa se ao passar um id existente, retorna o usúario correto.', () => {
    const correctUser = { name: 'Mark' }
    return expect(findUserById(4)).resolves.toEqual(correctUser);
  })
  it('Testa se ao passar um id não existente, retorna um erro', () => {
    const id = 1
    const errorMessage = 'User with ' + id + ' not found.'
    return expect(findUserById(id)).rejects.toEqual(errorMessage);
  })
})