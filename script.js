// initialize game variables
const gameBoard = document.querySelectorAll(".board");
const restartBtn = document.querySelector(".restartBtn");

const menu = document.querySelector(".start-menu");
const title = document.querySelector(".title");

const message = document.querySelector(".winning-message");

const playerChoice = document.querySelector(".playerChoice");
const computer = document.querySelector(".vsComputer");
const player = document.querySelector(".vsPlayer");

const modalChoice = document.querySelector(".choiceModal");
const main = document.querySelector(".main");
// const newGame = document.querySelector(".newGame");
const xScoreBox = document.querySelector(".Xscore-card");
const oScoreBox = document.querySelector("Oscore-card");
let gameWinner = "";

let playerX = "X";
let playerO = "O";
let gamesPlayed = 0;
let compDifficulty = "easy";

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
    computer.style.transform = "scale(1)";
    computer.style.transition = "3s";
    player.style.transform = "scale(1)";
    player.style.transition = "3s";
}

player.addEventListener("click", againstPlayer);



function againstPlayer() {
    menu.style.display = "none";
    modalChoice.style.display = "block"
    main.style.display = "none";
}



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
        // game stop after 5 wins
        gamesPlayed++;
        if (gamesPlayed >= 5) {
            stopGame();
        } else {
            restart();
        }
    } else if (moves === 9) {
        gameOver = true;
        message.textContent = "It's A Tie!";
        restart();
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
    restartBtn.style.display = "none";
};

function stopGame() {
    gameBoard.forEach((square) => {
        square.removeEventListener("click", handleClick);
    });
    message.textContent = "Game Over! ";

    //MODAL FOR GAMEWINNER
    let modal = document.querySelector('.modal');

    let modalContent = document.querySelector('#modal-content');

    let close = document.querySelector('.close-modal');

    close.addEventListener("click", () => {
        modal.style.display = "none";
    });

    if (teamX >= 5) {
        gameWinner = `<ul>${playerX} Wins!</ul><ul>Congratulations</ul>`;
        modal.style.display = "block";
        modalContent.insertAdjacentHTML("beforeend", `${gameWinner}`);
    } else {
        if (teamO >= 5) {
            gameWinner = `<ul>${playerO} Wins</ul><ul>You Lose!</ul>`;
            modal.style.display = "block";
            modalContent.insertAdjacentHTML("beforeend", `${gameWinner}`);
        }
    }
    restartBtn.style.display = "block";
}

// restart game //
function refreshPage() {
    window.location.reload(true);
}
// newGame.addEventListener('click', refreshPage);

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
    }, 600);
}

restartBtn.addEventListener("click", refreshPage);


//PLAYER CHOICE SET BACKGROUND COLOR
// function updateScoreboard() {
//     playerX.textContent = teamX;
//     playerO.textContent = teamO;

//     // Highlight the score box for the current player
//     if (currentPlayer === playerX) {
//         xScoreBox.classList.add('score-box-highlight');
//         oScoreBox.classList.remove('score-box-highlight');
//     } else {
//         oScoreBox.classList.add('score-box-highlight');
//         xScoreBox.classList.remove('score-box-highlight');
//     }
// }
// updateScoreboard();
//FUNCTION TO SET DIFFICULTY

function getMove() {
    if (compDifficulty === "easy") {
        // Choose a random empty cell
        const emptyCells = getEmptyCells()
    }
}
//ADD PLAYER INPUT NAME

//ADD AI CHOICE