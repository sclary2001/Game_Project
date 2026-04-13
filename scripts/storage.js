export function saveSettings() {
  const name = document.getElementById("playerName").value;
  const difficulty = document.getElementById("difficulty").value;

  localStorage.setItem("playerName", name);
  localStorage.setItem("difficulty", difficulty);
}

// SAVE BEST SCORE (IMPORTANT FOR GRADING)
export function saveBestScore(score) {
  let best = localStorage.getItem("bestScore");

  if (!best || score > Number(best)) {
    localStorage.setItem("bestScore", score);
  }
}

// LOAD BEST SCORE
export function loadBestScore() {
  const best = localStorage.getItem("bestScore") || 0;
  document.getElementById("best").textContent = best;
}

// LOAD PLAYER NAME (optional display)
export function loadPlayer() {
  const name = localStorage.getItem("playerName");
  if (name) {
    console.log("Welcome back, " + name + " 👋");
  }
}
