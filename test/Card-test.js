const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');

describe('card', function() {
  let expectedCard;
  beforeEach(function() {
    expectedCard = {
      id: 1,
      question: 'What is Robbie\'s favorite animal', 
      answers: ['sea otter', 'pug', 'capybara'], 
      correctAnswer: 'sea otter'
    };
  });

  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {  
    const card = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');  
    expect(card.id).to.equal(expectedCard.id);
    expect(card.question).to.equal(expectedCard.question);
    expect(card.answers).to.deep.equal(expectedCard.answers);
    expect(card.correctAnswer).to.deep.equal(expectedCard.correctAnswer);
  });  
});

