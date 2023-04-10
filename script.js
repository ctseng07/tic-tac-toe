//initialize game variables
const squares = document.querySelectorAll(".board");
let player = "X";
let moves = 0;
let gameOver = false;

// function to handle player moves
function handleClick(e) {
    if (gameOver) return;
    if (e.target.textContent !== "") return;

    e.target.textContent = player;
    moves++;

    if (checkForWinner()) {
        gameOver = true;
        document.getElementById('winningMessage').innerText = player + ' wins!';
    } else if (moves === 9) {
        gameOver = true;
        document.getElementById('winningMessage').innerText = "It's A Tie!";
    } else {
        player = player === "X" ? "O" : "X";
    }

    console.log("clicked");
}

// function to check for a win
function checkForWinner() {
    //defining winning combinations
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    return winningCombos.some((combo) => {
        return combo.every((index) => {
            return squares[index].textContent === player;
        });
    });
}

// add event listeners to each cell
function startGame() {
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    });
};

startGame();

// const playerX = "X"
// const playerO = "O"
// let currentPlayer = playerX
// // const boardElements = document.querySelectorAll('.board');

// //defining winning combinations

// const winningCombinations = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
//     [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
//     [0, 4, 8], [2, 4, 6] // diagonals
// ];

// function startGame() {
//     boardElements.forEach(cell => {
//         cell.addEventListener('click', boxClicked, { once: true })
//     });
// };
// // switch turn
// function boxClicked(e) {
//     const id = e.target.id

//     if (!boardElements[id]) {
//         boardElements[id] = currentPlayer;
//         e.target.innerText = currentPlayer;

//         currentPlayer = currentPlayer == playerX ? playerO : playerX;
//     }
//     // Check for win
//     if (checkWin(currentPlayer)) {
//     }

// }

// function checkWin(currentPlayer) {
//     return winningCombinations.some(combination => {
//         return combination.every(index => {
//             return boardElements[index].classList.contains(currentPlayer)
//         })
//     })
// }


// function endGame(draw) {
//     if (draw) {
//         winningMessageTextElement.innerText = 'Draw!'
//     } else {
//         winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
//     }
//     winningMessageElement.classList.add('show')
// }
// // console.log(checkWin("currentPlayer"));
// // checkWin(currentPlayer);
// // check for draw
// // add home page
// //2 options pvp / pvc
// // give function to enter name of player
// startGame();

// /* RESTART BUTTON */

// let restart = document.querySelector(".gameRestart");

// function restartBtn(cell) {
//     boardElements.fill(null)

//     cell.forEach(cell => {
//         cell.innerText = "";
//     });

//     currentPlayer = playerX;
// }

// restart.addEventListener("click", restartBtn);

//initialize game variables
// let currentPlayer = 'X';
// let gameOver = false;
// let board = ['', '', '', '', '', '', '', '', ''];

// // function to check for a win
// function checkForWin() {
//     for (let i = 0; i < winningCombinations.length; i++) {
//         const [a, b, c] = winningCombinations[i];
//         if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//             return true;
//         }
//     }
//     return false
// }

// // function to handle player moves
// function handlePlayerMove(cell) {
//     if (gameOver || board[cell]) {
//         return;
//     }
//     board[cell] = currentPlayer;
//     document.querySelectorAll('box').innerText = currentPlayer;
//     if (checkForWin()) {
//         document.getElementById('winningMessage').innerText = currentPlayer + 'wins!';
//         gameOver = true;
//     } else {
//         currentPlayer = currentPlayer === playerX ? playerO : playerX;
//     }
//     console.log(currentPlayer);
// }

// function startGame() {
//     cells.forEach(cell => {
//         cell.addEventListener('click', boxClicked, { once: true })
//     });
// };

// function boxClicked(e) {
//     const id = e.target.id

//     if (!cells[id]) {
//         cells[id] = currentPlayer;
//         e.target.innerText = currentPlayer;

//         currentPlayer = currentPlayer == playerX ? playerO : playerX;
//     }
// }

// // add event listeners to each cell

// const cells = document.querySelectorAll('.board');
// for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('click', function () {
//         handlePlayerMove(i);
//     });
// }

// startGame();
