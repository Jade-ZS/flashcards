function createRound(deck) {
  let round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  };
  return round;
}

function takeTurn(guess, round) {
  let message; 
  if (guess === round.currentCard.correctAnswer) {
    message = 'correct';
  } else {
    round.incorrectGuesses.push(round.currentCard.id);
    message = 'incorrect';
  }
 
  round.turns += 1;
  let index = round.turns;
  round.currentCard = round.deck[index];
  
  return message;
}

function calculatePercentCorrect(round) {
  let wrongGuesses = round.incorrectGuesses.length;
  let percentage = parseFloat(((round.turns - wrongGuesses) / round.turns * 100).toFixed(2));
  return percentage;
}

function endRound(round) {
  let percentage = calculatePercentCorrect(round);
  console.log(`** Round over! ** You answered <${percentage}>% of the questions correctly!`);
}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
}