const restartBtn = document.querySelector(".restartBtn");
const gameStatus = document.querySelector(".game-status")
let boxes = document.querySelectorAll(".boxes"); // this gives back an array
let player1Turn = true; // allows us to keep track of whose turn is who
let gameOver = false
// game state

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

function game() {

    let roundWon = false

    winningCombinations.forEach((winningCombination)=>{
        // winningCombination = [3, 4, 5]
        let a = winningCombination[0]
        let b = winningCombination[1]
        let c = winningCombination[2]

        if (p1Array.includes(a) && p1Array.includes(b) && p1Array.includes(c)) {
            roundWon = true
        }

        if (p2Array.includes(a) && p2Array.includes(b) && p2Array.includes(c)) {
            roundWon = true
        }
    })

    if (roundWon){
        gameOver = true
        gameStatus.innerText = player1Turn ? "Player 1 won this round!" : "Player 2 won this round"
    }
}

// allows clicked boxes to change colors back and forth
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {

        if (e.target.classList.contains("player1") || e.target.classList.contains("player2") || gameOver) {
            return
        }

        if (player1Turn) {
            e.target.classList.add("player1");
            p1Array.push(parseInt(box.id)) // only get the num from the box
            game()
            player1Turn = false;
        } else {
            e.target.classList.add("player2");
            p2Array.push(parseInt(box.id));
            game()
            player1Turn = true;
        }
    });
});

// reset game function
function resetGame() {
    boxes.forEach(box => {
        box.classList.value = "boxes"; // resets value of box to boxes (to re-set colors)
        p1Array.length = 0;
        p2Array.length = 0;
        player1Turn = true;
        gameStatus.innerText = ""
        gameOver = false
    });
}

// event listener to call resetGame function
restartBtn.addEventListener("click", () => {
    resetGame();
})

