const emoji = document.getElementById("emoji");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const highscoreDisplay = document.getElementById("highscore");
const restartBtn = document.getElementById("restartBtn");
const levelSelect = document.getElementById("level");
const clickSound = document.getElementById("click-sound");
const gameOverSound = document.getElementById("game-over-sound");
const countdownDisplay = document.getElementById("countdown");

let score = 0;
let timeLeft = 30;
let intervalSpeed = +levelSelect.value;
let gameInterval, timerInterval, countdownInterval;

let highscore = localStorage.getItem("highscore") || 0;
highscoreDisplay.textContent = highscore;

const emojis = ["🎈", "🎉", "😄", "🐱", "🍕", "🚀", "💎", "🌟", "🔥", "🍀"];

function getRandomPosition() {
  const container = document.querySelector(".game-container");
  const emojiSize = 50;
  const maxX = container.clientWidth - emojiSize;
  const maxY = container.clientHeight - emojiSize;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  return { x, y };
}

function moveEmoji() {
  const pos = getRandomPosition();
  emoji.style.left = `${pos.x}px`;
  emoji.style.top = `${pos.y}px`;
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    clearInterval(gameInterval);
    emoji.style.display = "none";

    if (score > highscore) {
      highscore = score;
      localStorage.setItem("highscore", highscore);
    }
    highscoreDisplay.textContent = highscore;
    gameOverSound.play();
    alert(`⏰ Time's up! Your score: ${score}`);
  }
}

function startCountdown(startGameFn) {
  let count = 3;
  countdownDisplay.style.display = "block";
  countdownDisplay.textContent = count;

  countdownInterval = setInterval(() => {
    count--;
    if (count === 0) {
      clearInterval(countdownInterval);
      countdownDisplay.style.display = "none";
      startGameFn();
    } else {
      countdownDisplay.textContent = count;
    }
  }, 1000);
}

function startGame() {
  score = 0;
  timeLeft = 30;
  intervalSpeed = +levelSelect.value;
  scoreDisplay.textContent = score;
  timerDisplay.textContent = timeLeft;
  emoji.style.display = "block";
  moveEmoji();

  clearInterval(timerInterval);
  clearInterval(gameInterval);

  timerInterval = setInterval(updateTimer, 1000);
  gameInterval = setInterval(moveEmoji, intervalSpeed);
}

emoji.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  clickSound.play();
  moveEmoji();
});

restartBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  clearInterval(gameInterval);
  startCountdown(startGame);
});

levelSelect.addEventListener("change", () => {
  intervalSpeed = +levelSelect.value;
  clearInterval(timerInterval);
  clearInterval(gameInterval);
  startCountdown(startGame);
});

// Start with countdown
startCountdown(startGame);
