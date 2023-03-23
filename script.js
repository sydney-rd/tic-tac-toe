const restartBtn = document.querySelector(".restartBtn");
let boxes = document.querySelectorAll(".boxes"); // this gives back an array
let player1Turn = true; // allows us to keep track of whose turn is who

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
    
// reset game function
function resetGame() {
    boxes.forEach(box => {
        console.log(box)
        box.classList.value = "boxes"; // resets value of box to boxes (to re-set colors)
        console.log(box)
        p1Array.length = 0;
        p2Array.length = 0;
        player1Turn = true;
    });
}

restartBtn.addEventListener("click", () => {
    resetGame();
})


// function game() {

//     // run for loop to compare array and winning combo 
//     // compare during players turn
        
//     }

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