import { saveBestScore } from "./storage.js";

let score = 0;
let gameRunning = false;
let gameInterval;

export function startGame() {
  if (gameRunning) return;

  gameRunning = true;
  score = 0;

  document.getElementById("score").textContent = score;

  gameInterval = setInterval(() => {
    score++;
    document.getElementById("score").textContent = score;

    moveObstacle();
    checkCollision();
  }, 100);
}

export function jump() {
  const player = document.getElementById("player");

  if (!player.classList.contains("jump")) {
    player.classList.add("jump");
    setTimeout(() => player.classList.remove("jump"), 500);
  }
}

function moveObstacle() {
  const obstacle = document.getElementById("obstacle");
  let pos = obstacle.offsetLeft;

  obstacle.style.left = (pos < -20 ? 1000 : pos - 10) + "px";
}

function checkCollision() {
  const player = document.getElementById("player");
  const obstacle = document.getElementById("obstacle");

  const p = player.getBoundingClientRect();
  const o = obstacle.getBoundingClientRect();

  if (
    p.right > o.left &&
    p.left < o.right &&
    p.bottom > o.top
  ) {
    gameOver();
  }
}

function gameOver() {
  clearInterval(gameInterval);
  gameRunning = false;

  saveBestScore(score); // ✅ SAVE SCORE HERE

  alert("Game Over! Score: " + score);

  document.getElementById("best").textContent =
    localStorage.getItem("bestScore");
}

export function resetGame() {
  clearInterval(gameInterval);
  gameRunning = false;

  score = 0;
  document.getElementById("score").textContent = 0;
}
