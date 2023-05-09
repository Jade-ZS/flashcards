const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  

  describe('turn', function() {
    it('should be a function', function() {
      expect(evaluateGuess).to.be.a('function');
    });

    it('should return if a guess to a flashcard question is correct or incorrect', function() {
      const card = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'); 
      expect(evaluateGuess('pug', 'sea otter')).to.equal('incorrect');
      expect(evaluateGuess('sea otter', 'sea otter')).to.equal('correct');
    });
  });
});