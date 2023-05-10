const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/card');

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

describe('round', function() {
  const round = createRound(deck);

  it('should be the object that organizes guesses and records if they are correct or incorrect.', function() {
    expect(round.deck).to.equal(deck);
    expect(round.currentCard).to.equal(deck[0]);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('takeTurn should update the turns count, evaluate guesses, give feedback, and store ids of incorrect guesses', function() {
    const output1 = takeTurn('sea otter', round);
    expect(round.currentCard).to.deep.equal(deck[1]);
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(output1).to.equal('correct');

    const output2 = takeTurn('spleen', round);
    expect(round.currentCard).to.deep.equal(deck[2]);
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([card2.id]);
    expect(output2).to.equal('incorrect');
  });

  it('calculatePercentCorrect should calculate and return the percentage of correct guesses', function() {
    const correctRate = calculatePercentCorrect(round);
    expect(correctRate).to.equal(50);
  });

  it('endRound should print certain message to the console', function() {
    global.console = [];
    chai.spy.on(console, ['log']);

    endRound(round);
    expect(console.log).to.have.been.called(1);
    expect(console.log).to.have.been.called.with(`** Round over! ** You answered <50>% of the questions correctly!`);
  });
})
