const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createDeck, countCards } = require('./card');
const { createRound } = require('./round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function getCards(cards) {
  let cardAmount = Math.floor(Math.random() * prototypeQuestions.length);
  let card = prototypeQuestions[Math.floor(Math.random() * prototypeQuestions.length)];
  if(!cards.find(ele => JSON.stringify(card) === JSON.stringify(ele))) {
    cards.push(card);
  }

  if (cardAmount > 5 && cards.length >= cardAmount) {
    return cards;
  }

  return getCards(cards);
}

function start() {
    let cards = getCards([]);
    let deck = createDeck(cards);
    let round = createRound(deck);
    printMessage(deck);
    printQuestion(round);
}

module.exports = { start };
