let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let age = 21;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

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
  renderGame();
}

function renderGame() {
  // game logic
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
messageEl.textContent = message;
}

function hitMe(){
  console.log("Drawing new card from the deck!");
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  startGame();
}

// age
if (age < 21) {
  console.log("You can not enter the club!");
} else {
  console.log("Welcome!");
}

// birthday card
if (age < 100) {
  console.log("Not eligible");
}
else if (age === 100) {
  console.log("Here is your birthday card from the King!");
}
else {
  console.log("Not eligible");
}


console.log(isAlive);
