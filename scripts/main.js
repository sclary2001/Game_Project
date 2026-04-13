import { startGame, jump, resetGame } from "./game.js";
import { saveSettings, loadBestScore, loadPlayer } from "./storage.js";

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("resetBtn").addEventListener("click", resetGame);

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") jump();
});

document.getElementById("gameArea").addEventListener("click", jump);

document.getElementById("settingsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  saveSettings();
});

// LOAD SAVED DATA ON START
loadBestScore();
loadPlayer();

// Easter egg (required rubric feature)
console.log("👀 Try typing: godMode()");

window.godMode = () => {
  document.body.style.background = "#111";
  alert("God Mode Activated 😎");
};
