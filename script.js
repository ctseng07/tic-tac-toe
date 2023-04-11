// initialize game variables
const gameBoard = document.querySelectorAll(".board");
const restartBtn = document.querySelector(".gameRestart");
let message = document.querySelector(".winning-message");
let playerX = "X";
let playerO = "O";
let gamesPlayed = 0;

let currentPlayer = playerX;
let moves = 0;
let gameOver = false;
let teamX = 0;
let teamO = 0;
let backgroundColor = "aaa";

// function to handle player moves
function handleClick(e) {
    if (gameOver) return;
    if (e.target.textContent !== "") return;

    e.target.textContent = currentPlayer;
    e.target.backgroundColor = backgroundColor;
    moves++;

    if (checkForWinner()) {
        gameOver = true;
        message.textContent = 'Team ' + currentPlayer + ' Wins!';
        updateScore();
        restart();
    } else if (moves === 9) {
        gameOver = true;
        message.textContent = "It's A Tie!";
        restart();
    } else {
        currentPlayer = currentPlayer === playerX ? playerO : playerX;
        backgroundColor = backgroundColor === "#282727" ? "#8b0000" : "#282727";
    }
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
            return gameBoard[index].textContent === currentPlayer;
        });
    });
}

// add event listeners to each cell
function startGame() {
    gameBoard.forEach((square) => {
        square.addEventListener("click", handleClick);
    });
    // playerX.style.backgroundColor = "#282727"
};

startGame();

// function to display score
function updateScore() {
    if (currentPlayer === playerX) {
        teamX++;
        document.getElementById('player').innerText = teamX;
    } else {
        teamO++;
        document.getElementById('computer').innerText = teamO;
    }
};

// function to restart game after win
function restart() {
    setTimeout(() => {
        gameBoard.forEach((square) => {
            square.textContent = "";
        });
        currentPlayer = playerX;
        moves = 0;
        gameOver = false;
        message.textContent = "";
    }, 1100);
}

restartBtn.addEventListener("click", restart);


// player turn
function playerTurn(playerX, playerO) {
    const playerTurn = document.querySelector(".userSelect");
    if (playerX) {
        playerTurn.backgroundColor = "#aaa";
    } else {
        playerTurn.backgroundColor = "#bbb";
    }
}
