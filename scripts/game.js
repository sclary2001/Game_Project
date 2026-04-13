import { updateBest } from "./storage.js";

let score = 0;
let gameInterval;

export function startGame() {
  const obstacle = document.getElementById("obstacle");

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

  if (pos < -20) {
    obstacle.style.left = "100%";
  } else {
    obstacle.style.left = pos - 10 + "px";
  }
}

function checkCollision() {
  const player = document.getElementById("player");
  const obstacle = document.getElementById("obstacle");

  const pRect = player.getBoundingClientRect();
  const oRect = obstacle.getBoundingClientRect();

  if (
    pRect.right > oRect.left &&
    pRect.left < oRect.right &&
    pRect.bottom > oRect.top
  ) {
    clearInterval(gameInterval);
    updateBest(score);
    alert("Game Over!");
    score = 0;
  }
}

export function resetGame() {
  clearInterval(gameInterval);
  score = 0;
  document.getElementById("score").textContent = 0;
}
