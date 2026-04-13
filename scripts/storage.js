export function saveSettings() {
  const nameInput = document.getElementById("playerName");
  const difficultyInput = document.getElementById("difficulty");

  if (nameInput) {
    localStorage.setItem("playerName", nameInput.value);
  }

  if (difficultyInput) {
    localStorage.setItem("difficulty", difficultyInput.value);
  }
}

// ✅ SAVE BEST SCORE (REQUIRED FOR RUBRIC)
export function saveBestScore(score) {
  const currentBest = Number(localStorage.getItem("bestScore")) || 0;

  if (score > currentBest) {
    localStorage.setItem("bestScore", score);
  }
}

// ✅ LOAD BEST SCORE ON PAGE LOAD
export function loadBestScore() {
  const bestElement = document.getElementById("best");
  const best = localStorage.getItem("bestScore") || 0;

  if (bestElement) {
    bestElement.textContent = best;
  }
}

// ✅ LOAD PLAYER NAME (optional but good UX)
export function loadPlayer() {
  const name = localStorage.getItem("playerName");
  const nameInput = document.getElementById("playerName");

  if (name && nameInput) {
    nameInput.value = name;
  }
}

// ✅ LOAD DIFFICULTY
export function loadDifficulty() {
  const difficulty = localStorage.getItem("difficulty");
  const difficultyInput = document.getElementById("difficulty");

  if (difficulty && difficultyInput) {
    difficultyInput.value = difficulty;
  }
}
