const img = document.querySelector("img");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const player1 = document.querySelector(".player-0");
const player2 = document.querySelector(".player-1");
let current = 0;
let scores = [0, 0];
let playing = true;
let activePlayer = 0;
const switchPlayer = () => {
  document.querySelector(`.current-${activePlayer}`).textContent = 0;
  current = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  player1.classList.toggle("active");
  player2.classList.toggle("active");
};
roll.addEventListener("click", function () {
  if (playing) {
    const random = Math.floor(Math.random() * 6) + 1;
    img.src = `img/${random}.png`;

    if (random !== 1) {
      current = current + random;
      document.querySelector(`.current-${activePlayer}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
});
hold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += current;
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] > 100) {
      document.querySelector(`.player-${activePlayer}`).classList.add("winner");
      playing = false;
    } else {
      switchPlayer();
    }
  }
});
