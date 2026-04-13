# 🏃 Stick Jump Runner (Game_Project)

A small single-page browser game where a stickman jumps over obstacles. The goal is to survive as long as possible and achieve the highest score.

---

## 📅 Project Info
- **Project Name:** Stick Jump Runner  
- **Course:** Web Development Project  
- **Type:** HTML/CSS/JavaScript Game  
- **Date:** April 2026  

---

## 🎯 Objective
The player controls a stickman character that must jump over incoming obstacles. The game tracks score over time and saves the best score using local storage.

---

## 🎮 Game Rules
- Press **SPACE** or click to jump  
- Avoid red obstacles  
- Score increases the longer you survive  
- Collision ends the game  
- Best score is saved automatically  

---

## 🚀 Features
✔ Continuous game loop (animation-based movement)  
✔ Jump mechanic (keyboard + click support)  
✔ Random obstacle movement  
✔ Live score tracking  
✔ High score saved (localStorage)  
✔ Reset button  
✔ Settings form (player name + difficulty)  
✔ Bootstrap Navbar + Modal support  
✔ Accessible design (keyboard + aria-live updates)  
✔ Easter egg (console command unlock)

---

## 🛠 Tech Stack
- HTML5 (semantic layout)
- CSS3 (custom styles + Bootstrap 5)
- JavaScript (ES Modules)
- Bootstrap 5
- localStorage API

---

## 📁 Project Structure

This collision detection checks if the player overlaps the obstacle using bounding box math.

---

## 🌐 Live Links
- 🎮 Play Game: https://sclary2001.github.io/Game_Project/  
- 💻 Source Code: https://github.com/sclary2001/Game_Project  

---

## 🧠 Code Explanation (Collision Detection)

```js
if (
  pRect.right > oRect.left &&
  pRect.left < oRect.right &&
  pRect.bottom > oRect.top
)
