export function saveSettings() {
  const name = document.getElementById("playerName").value;
  const difficulty = document.getElementById("difficulty").value;

  localStorage.setItem("player", name);
  localStorage.setItem("difficulty", difficulty);
}

export function updateBest(score) {
  let best = localStorage.getItem("best");

  if (!best || score > best) {
    localStorage.setItem("best", score);
    document.getElementById("best").textContent = score;
  }
}

export function loadBest() {
  const best = localStorage.getItem("best");
  if (best) document.getElementById("best").textContent = best;
}
