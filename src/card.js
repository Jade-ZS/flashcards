function createCard(id, question, answers, correctAnswer) {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card;
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return 'correct';
  } else {
    return 'incorrect';
  }
}

function createDeck(cards) {
  return cards;
}

function countCards(cards) {
  let cardCount = cards.length;
  return cardCount;
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  // createRound,
  // takeTurn,
  // calculatePercentCorrect,
  // endRound
}