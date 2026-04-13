import { startGame, jump, resetGame } from "./game.js";
import { saveSettings, loadBest } from "./storage.js";

document.getElementById("startBtn").onclick = startGame;
document.getElementById("resetBtn").onclick = resetGame;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") jump();
});

document.getElementById("gameArea").addEventListener("click", jump);

document.getElementById("settingsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  saveSettings();
});

loadBest();

// Easter egg
console.log("👀 Type: godMode()");

window.godMode = () => {
  alert("Infinite jumps activated 😎");
};
