'use strict';

///// ------------  CODING CHALLENGE 1 ---------------------- ////////////////

// لازم تعرقي ال let w const جوة ال فنكشن نفسهاااا

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let questionMark = (document.querySelector('.number').textContent =
  secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  let input = Number(document.querySelector('.guess').value);
  console.log(input);

  if (!input) {
    document.querySelector('.message').textContent = 'No Answer 🚫';
  } else if (input === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Answer';
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (input > secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too High';
      document.querySelector('.score').textContent = score;
      score--;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (input < secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too Low';
      document.querySelector('.score').textContent = score;
      score--;
    }
  } else {
    displayMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start A New Guessing';
  document.querySelector('.score').textContent = 20;
  document.body.style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
});
