const { expect } = require('chai');
const fs = require('fs')
const sinon = require('sinon')

const readFile = require('./readFile');

const FILE_CONTENT = 'eita bixo kkkk';

describe('Read File', () => {
  describe('When the file exists', () => {

    before(() => {
      sinon.stub(fs, 'readFileSync').returns(FILE_CONTENT);
    });

    after(() => {
      fs.readFileSync.restore();
    })

    describe('The answer', () => {
      const answer = readFile('file.txt');

      it('is a string', () => {
        expect(answer).to.be.a('string');
      });

      it('is the same as the file content', () => {
        expect(answer).to.be.equals(FILE_CONTENT);
      });
    });
  });
  describe('When the file does not exist', () => {

    before(() => {
      sinon.stub(fs, 'readFileSync').throws(new Error('File not found'));
    });

    after(() => {
      fs.readFileSync.restore();
    })
  
    it('it is equal to NULL', () => {
      const answer = readFile('fileThatDoesNotExists.txt');

      expect(answer).to.be.equal(null);
    });
  });
});