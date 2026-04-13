# Game_Project
Mini jumping game

🚀 Features-
✔ Continuous game loop (animation)
✔ Jump mechanic (keyboard + click/tap)
✔ Obstacles spawn randomly
✔ Score increases live
✔ High score saved (localStorage)
✔ Reset button
✔ Settings form (difficulty, player name)
✔ Bootstrap Navbar + Modal
✔ Accessible (keyboard, aria-live)
✔ Easter egg (console unlock mode)

📁 Project Structure
/root
  index.html
  /scripts
    main.js
    game.js
    storage.js
  /styles
    game.css
  /images
    wireframe.png
    screenshot.png
  README.md

  ## Code Example

```js
if (
  pRect.right > oRect.left &&
  pRect.left < oRect.right &&
  pRect.bottom > oRect.top
)
```

This collision detection checks if the player overlaps the obstacle using bounding box math.
