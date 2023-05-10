const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const deck = require('./Card-test').deck;
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

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
    expect(round.incorrectGuesses).to.deep.equal([deck[1].id]);
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
