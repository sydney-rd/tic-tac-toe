const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// win functions uses winningCombintations array
const p1Array = [];
const p2Array = [];

function checkWin(playerArray) {
    for (let i = 0; i < winningCombinations.length; i++) {
      let matchCount = 0;
      for (let j = 0; j < winningCombinations[i].length; j++) {
        if (playerArray.includes(winningCombinations[i][j])) {
          matchCount++;
        }
      }
      if (matchCount === 3) {
        return true; // player has won
      }
    }
    return false; // player has not won yet
  }
  
  // Example usage:
  if (checkWin(p1Array)) {
    console.log("Player 1 has won!");
  }
  


//restart button
const restartBtn = document.getElementById("restartBtn");
let boxes = document.querySelectorAll(".boxes"); // this gives back an array
let player1Turn = true; // allows us to keep track of whose turn is who

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        if (player1Turn) {
            e.target.classList.add("player1");
            p1Array.push(box) // only get the num from the box
            console.log(e.target.id); // removr
            player1Turn = false;
        } else {
            e.target.classList.add("player2");
            player1Turn = true;
            p2Array.push(box);
            console.log(e.target.id); // remove

        }
    });
});