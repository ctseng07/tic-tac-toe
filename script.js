const playerX = "X"
const playerO = "O"
let currentPlayer = playerX
const boardElements = document.querySelectorAll('.board');

const winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

function startGame() {
    boardElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    });

}

function handleClick(e) {
    const id = e.target.id

    if (!boardElements[id]) {
        boardElements[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        currentPlayer = currentPlayer == playerX ? playerO : playerX;
    }
    if (checkWin(currentPlayer)) {
        console.log("winner");
    }
    // const currentClass = oTurn ? o_class : x_class;
    // placeTurn(cell, currentClass);
    // Check for win
    // check for draw
    //switch turn
}

function checkWin(currentPlayer) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return boardElements[index].classList.contains(currentPlayer)
        })
    })
}

startGame();

// function placeTurn(cell, currentClass) {
//     cell.classList.add(currentClass)
// }

/* RESTART BUTTON */

let restart = document.querySelector(".gameRestart");

function restartBtn() {
    boardElements.fill(null)

    cell.forEach(cell => {
        cell.innerText = "";
    });

    currentPlayer = playerX;
}

restart.addEventListener("click", restartBtn);
