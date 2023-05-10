const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
    let cards = getCards([]);
    let deck = createDeck(cards);
    let round = createRound(deck);
    printMessage(deck);
    printQuestion(round);
}

function getCards(cards) {
  cards.push(data[Math.floor(Math.random() * data.length)]);
  if (cards.length > 4) {
    console.log(cards)
    return cards;
  }
  return getCards(cards);
}

start();

module.exports = { printMessage, printQuestion };
