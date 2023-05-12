const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('round', function() {
  let expectedRound;
  let deck;
  beforeEach(function() {
    deck = [
      {
        id: 1, 
        question: 'What is Robbie\'s favorite animal', 
        possibleAnswers: ['sea otter', 'pug', 'capybara'], 
        correctAnswer: 'sea otter'
      },

      {
        id: 14, 
        question: 'What organ is Khalid missing?', 
        possibleAnswers: ['spleen', 'appendix', 'gallbladder'], 
        correctAnswer: 'gallbladder'
      },

      {
        id: 12, 
        question: 'What is Travis\'s middle name?', 
        possibleAnswers: ['Lex', 'William', 'Fitzgerald'], 
        correctAnswer: 'Fitzgerald'
      }
    ];

    expectedRound = {
      deck: deck,
      currentCard: {
          id: 1, 
          question: 'What is Robbie\'s favorite animal', 
          possibleAnswers: ['sea otter', 'pug', 'capybara'], 
          correctAnswer: 'sea otter'
      },
      turns: 0,
      incorrectGuesses: []
    }
  });
  

  it('should be the object that organizes guesses and records if they are correct or incorrect.', function() {
    const round = createRound(deck);
    // expect(round.deck).to.equal(deck);
    // expect(round.currentCard).to.equal(deck[0]);
    // expect(round.turns).to.equal(0);
    // expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round).to.deep.equal(expectedRound);
  });

  it('takeTurn should update the turns count, evaluate guesses, give feedback, and store ids of incorrect guesses', function() {
    const output1 = takeTurn('sea otter', expectedRound);
    expect(expectedRound.currentCard).to.deep.equal(deck[1]);
    expect(expectedRound.turns).to.equal(1);
    expect(expectedRound.incorrectGuesses).to.deep.equal([]);
    expect(output1).to.equal('correct');

    const output2 = takeTurn('spleen', expectedRound);
    expect(expectedRound.currentCard).to.deep.equal(deck[2]);
    expect(expectedRound.turns).to.equal(2);
    expect(expectedRound.incorrectGuesses).to.deep.equal([deck[1].id]);
    expect(output2).to.equal('incorrect');
  });

  it('calculatePercentCorrect should calculate and return the percentage of correct guesses', function() {
    takeTurn('sea otter', expectedRound);
    takeTurn('spleen', expectedRound);
    const correctRate = calculatePercentCorrect(expectedRound);
    expect(correctRate).to.equal(50);
  });

  it('endRound should print certain message to the console', function() {
    takeTurn('sea otter', expectedRound);
    takeTurn('spleen', expectedRound);

    global.console = [];
    chai.spy.on(console, ['log']);

    endRound(expectedRound);
    expect(console.log).to.have.been.called(1);
    expect(console.log).to.have.been.called.with(`** Round over! ** You answered <50>% of the questions correctly!`);
  });
})
