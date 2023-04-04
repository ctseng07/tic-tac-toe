const playerX = "X"
const playerO = "O"
const boardElements = document.querySelectorAll('.board');
let oTurn

let currentPlayer = playerX

boardElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
});

function handleClick(e) {
    const id = e.target.id

    if (!boardElements[id]) {
        boardElements[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        currentPlayer = currentPlayer == playerX ? playerO : playerX;
    }
    // const currentClass = oTurn ? o_class : x_class;
    // placeTurn(cell, currentClass);
    // Check for win
    // check for draw
    //switch turn
}
// handleClick()

// function placeTurn(cell, currentClass) {
//     cell.classList.add(currentClass)
// }

/* RESTART BUTTON */

let restart = document.querySelector(".gameRestart");

function restartBtn() {
    window.location.reload(true);
}

restart.addEventListener("click", restartBtn);
