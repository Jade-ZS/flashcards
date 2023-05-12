const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/card');

describe('deck', function() {
  let deck;
  let card1;
  let card2;
  let card3;
  beforeEach(function() {
    card1 = {
      id: 1, 
      question: 'What is Robbie\'s favorite animal', 
      possibleAnswers: ['sea otter', 'pug', 'capybara'], 
      correctAnswer: 'sea otter'
    };

    card2 = {
      id: 14, 
      question: 'What organ is Khalid missing?', 
      possibleAnswers: ['spleen', 'appendix', 'gallbladder'], 
      correctAnswer: 'gallbladder'
    };

    card3 = {
      id: 12, 
      question: 'What is Travis\'s middle name?', 
      possibleAnswers: ['Lex', 'William', 'Fitzgerald'], 
      correctAnswer: 'Fitzgerald'
    };

    deck = createDeck([card1, card2, card3]);
  });

  it('should be created with an array of card objects', function() {
    expect(Array.isArray(deck)).to.equal(true);
  });

  it('should know how many cards are in the deck.', function() {
    const cardCount = countCards(deck);
    expect(cardCount).to.equal(3);
  });
});