// initialize game variables
const gameBoard = document.querySelectorAll(".board");
const restartBtn = document.querySelector(".restartBtn");
const title = document.querySelector("h1");
const startBtn = document.querySelector(".game-start");
const menu = document.querySelector(".start-menu");
const message = document.querySelector(".winning-message");

let playerX = "X";
let playerO = "O";
let gamesPlayed = 0;

let currentPlayer = playerX;
let moves = 0;
let gameOver = false;
let teamX = 0;
let teamO = 0;

appear();
// homepage function
// title and start button become visible when page loads
function appear() {
    title.style.opacity = "1";
    title.style.transition = "5s";
    startBtn.style.transform = "scale(1)";
    startBtn.style.transition = "3s";
}

//shift menu up
// function shiftUp() {
//     menu.style.position = "absolute";
//     menu.style.animation = "menu 1s";
//     menu.style.top = "5%";
//     startBtn.style.display = "none";
// }

startBtn.addEventListener('click', startGame);

// function to handle player moves
function handleClick(e) {
    if (gameOver) return;
    if (e.target.textContent !== "") return;

    e.target.textContent = currentPlayer;
    moves++;

    if (checkForWinner()) {
        gameOver = true;
        message.textContent = 'Team ' + currentPlayer + ' Wins!';
        updateScore();
        gamesPlayed++;
        if (gamesPlayed >= 5) {
            stopGame();
        } else {
            restartGame();
        }
    } else if (moves === 9) {
        gameOver = true;
        message.textContent = "It's A Tie!";
    } else {
        currentPlayer = currentPlayer === playerX ? playerO : playerX;
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
    menu.style.display = "none";
    gameBoard.forEach((square) => {
        square.addEventListener("click", handleClick);
    });
};

function stopGame() {
    gameBoard.forEach((square) => {
        square.removeEventListener("click", handleClick);
    });
    message.textContent = "Game Over! " + (teamX > teamO ? "X" : "O") + " Wins!";
}

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

// game stop after 5 wins

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
    }, 100);
}

restartBtn.addEventListener("click", restart);


//PLAYER CHOICE SET BACKGROUND COLOR
//FUNCTION TO SET DIFFICULTY
//SET GAME ROUND TO 5


//MODAL FOR GAMEWINNER
//ADD PLAYER INPUT NAME
//ADD AI CHOICE