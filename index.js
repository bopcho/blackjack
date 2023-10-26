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

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [];
    renderGame();

}
// game logic
function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
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
  sum += card;
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
  message = "";
  renderGame();
}


// buttons functionality needs revision
