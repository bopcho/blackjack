let player = {
  name: "Bob",
  chips: 155
}
let cards = [];
let sum = 0;
let age = 21;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

// Card suits and ranks
const suits = ['♠', '♥', '♦', '♣'];
const suitNames = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const rankValues = {
  'A': 11,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 10,
  'Q': 10,
  'K': 10
};

let deck = [];

// Create a full deck of cards
function createDeck() {
  deck = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push({
        rank: rank,
        suit: suit,
        value: rankValues[rank]
      });
    }
  }
  return deck;
}

// Shuffle the deck
function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Draw a card from the deck
function getRandomCard() {
  if (deck.length === 0) {
    createDeck();
    shuffleDeck();
  }
  return deck.pop();
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;

    // Create and shuffle a new deck
    createDeck();
    shuffleDeck();

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard.value + secondCard.value;
    renderGame();
}
// game logic
function renderGame() {
  cardsEl.innerHTML = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const cardColor = (card.suit === '♥' || card.suit === '♦') ? 'red' : 'black';
    cardsEl.innerHTML += `<span class="card" style="color: ${cardColor};">[${card.rank}${card.suit}]</span> `;
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "Game over!";
    isAlive = false;
  }
messageEl.textContent = message;
}


// get a new card
function hitMe() {
  if (isAlive === true && hasBlackJack === false) {
  let card = getRandomCard();
  sum += card.value;
  cards.push(card);
  renderGame();
  }
}

// age
if (age < 21) {
  console.log("You can not enter!");
} else {
  console.log("Welcome!");
}

console.log(age);


// new game
function newGame() {
  player.chips = 155;
  playerEl.textContent = player.name + ": $" + player.chips;
  cards = [];
  sum = 0;
  hasBlackJack = false;
  isAlive = true;
  message = "Do you want to play?";
  messageEl.textContent = message;
  cardsEl.innerHTML = "Cards:";
  sumEl.textContent = "Sum:";
}


// buttons functionality needs revision
