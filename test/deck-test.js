const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/card');

describe('deck', function() {
  let expectedDeck;
  let card1;
  let card2;
  let card3;

  beforeEach(function() {
    card1 = {
      id: 1, 
      question: 'What is Robbie\'s favorite animal', 
      answers: ['sea otter', 'pug', 'capybara'], 
      correctAnswer: 'sea otter'
    };

    card2 = {
      id: 14, 
      question: 'What organ is Khalid missing?', 
      answers: ['spleen', 'appendix', 'gallbladder'], 
      correctAnswer: 'gallbladder'
    };

    card3 = {
      id: 12, 
      question: 'What is Travis\'s middle name?', 
      answers: ['Lex', 'William', 'Fitzgerald'], 
      correctAnswer: 'Fitzgerald'
    };

    expectedDeck = [card1, card2, card3];
  });

  it('should be created with an array of card objects', function() {
    const deck = createDeck([card1, card2, card3]);
    expect(Array.isArray(deck)).to.equal(true);
    expect(deck[0]).to.deep.equal(expectedDeck[0]);
    expect(deck[1]).to.deep.equal(expectedDeck[1]);
    expect(deck[2]).to.deep.equal(expectedDeck[2]);
  });

  it('should know how many cards are in the deck.', function() {
    const cardCount = countCards(expectedDeck);
    expect(cardCount).to.equal(3);
  });
});