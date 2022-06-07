"use strict";

//define secret number, defines a random integer from 1 to 20
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//display message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//chage score
const changeScore = function (score) {
  document.querySelector(".score").textContent = score;
};
//chage highscore
const changeHighscore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};
//event on click
document.querySelector(".btn-check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  let message = document.querySelector(".message").textContent;
  // if not a number
  if (!guess) {
    displayMessage("Not a number!");
  }
  //if winner
  else if (guess === secretNumber) {
    displayMessage("Winner!");
    changeHighscore(score);
    document.querySelector(".number").style.backgroundColor =
      "rgba(255, 255, 255, 1)";
    document.querySelector(".number").style.color = "#c6426e";

    document.querySelector(".secretNumber").textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
    }
  }
  //if wrong
  else if (guess < secretNumber) {
    displayMessage("Too low, try again!");
    if (score > 1) {
      score = score - 1;
      changeScore(score);
    } else {
      score = 0;
      displayMessage("You lost the game!");
      changeScore(score);
    }
  } else if (guess > secretNumber) {
    displayMessage("Too high, try again!");
    if (score > 1) {
      score = score - 1;
      changeScore(score);
    } else {
      score = 0;
      displayMessage("You lost the game!");
      changeScore(score);
    }
  }
});
//reset all
document.querySelector(".btn-reset").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  changeScore(score);
  document.querySelector(".secretNumber").textContent = "?";
  document.querySelector(".number").style.backgroundColor =
    "rgba(255, 255, 255, 0.2)";
  document.querySelector(".number").style.color = "#fff";
});
//delete highscore
document.querySelector(".btn-delete").addEventListener("click", function () {
  let confirmDelete = confirm("Are you sure you want do delete highscore?");
  if (confirmDelete) {
    highscore = 0;
    changeHighscore(highscore);
  }
});
