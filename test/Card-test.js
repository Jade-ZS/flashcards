const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards } = require('../src/card');

const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
const deck = createDeck([card1, card2, card3]);

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {    
    expect(card1.id).to.equal(1);
    expect(card1.question).to.equal('What is Robbie\'s favorite animal');
    expect(card1.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
    expect(card1.correctAnswer).to.equal('sea otter');
  });  
});

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return if a guess to a flashcard question is correct or incorrect', function() {
    expect(evaluateGuess('pug', 'sea otter')).to.equal('incorrect');
    expect(evaluateGuess('sea otter', 'sea otter')).to.equal('correct');
  });
});

describe('deck', function() {
  it('should be created with an array of card objects', function() {
    expect(Array.isArray(deck)).to.equal(true);
  });

  it('should know how many cards are in the deck.', function() {
    const cardCount = countCards(deck);
    expect(cardCount).to.equal(3);
  });
});

module.exports = {deck};