const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/card');

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return if a guess to a flashcard question is correct or incorrect', function() {
    expect(evaluateGuess('pug', 'sea otter')).to.equal('incorrect');
    expect(evaluateGuess('sea otter', 'sea otter')).to.equal('correct');
  });
});