'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let playing = true;

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
// utiliser un toggle pour chaque

//associer dice-1 avec math random =>1

btnNew.addEventListener('click', () => {
  //score reset
  score0.textContent = 0;
  score1.textContent = 0;
  score = [0, 0];
  //current-score reset
  currentScore = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  //dice hidden
  dice.classList.add('hidden');
  playing = true;
  console.log(playing);
  console.log(score);

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});

btnRoll.addEventListener('click', () => {
  if (playing) {
    console.log(score);
    let des = Math.trunc(Math.random() * 6 + 1);

    dice.classList.remove('hidden');
    dice.src = `dice-${des}.png`;

    if (des !== 1) {
      currentScore += des;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  score[activePlayer] =
    currentScore +
    Number(document.querySelector(`#score--${activePlayer}`).textContent);
  document.querySelector(`#score--${activePlayer}`).textContent =
    score[activePlayer];

  if (score[activePlayer] >= 20) {
    playing = false;
    dice.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    console.log(document.querySelector(`.player--${activePlayer}`));
  } else {
    switchPlayer();
  }
});
