const intervalBtn = document.querySelector(".start-interval");
const animatedBox = document.querySelector(".animated-box");
const gameBtn = document.querySelector(".start-game");
const gameBox = document.querySelector(".game-box");
const countScore = document.querySelector(".score");
const timerBtn = document.querySelector(".start-timer");
const timeInput = document.querySelector(".time-input");

intervalBtn.addEventListener("click", function () {
  let count = 0;
  let interval = setInterval(() => {
    count++;
    console.log(`Повідомлення ${count}`);
    if (count >= 5) clearInterval(interval);
  }, 1000);
});

const changeBox = setInterval(() => {
  animatedBox.classList.toggle("change");
}, 300);

let score = 0;
gameBtn.addEventListener("click", (e) => {
  score = 0;
  countScore.innerHTML = score;
  let interval = setInterval(() => {
    let setX = (Math.random() - 0.5) * 50;
    let setY = (Math.random() - 0.5) * 50;
    gameBox.style.transform = `translate(${setX}px, ${setY}px)`;
  }, 500);
  setTimeout(() => clearInterval(interval), 10000);
});

gameBox.addEventListener("click", function () {
  score++;
  countScore.innerHTML = score;
});

timerBtn.addEventListener("click", function () {
  let seconds = parseInt(timeInput.value);
  if (seconds > 0) {
    setTimeout(() => {
      console.log("Час закінчився");
    }, seconds * 1000);
  }
});
