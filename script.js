// initialize game variables
const gameBoard = document.querySelectorAll(".board");
const restartBtn = document.querySelector(".restartBtn");
const startBtn = document.querySelector(".startBtn");
const compStart = document.querySelector(".compStart");
const menu = document.querySelector(".start-menu");
const title = document.querySelector(".title");

const message = document.querySelector(".winning-message");

const computer = document.querySelector(".vsComputer");
const player = document.querySelector(".vsPlayer");

const player1NameElem = document.querySelector(".player");
const player2NameElem = document.querySelector(".computer");

const vsPlayer = document.querySelector(".choosePlayer");
const vsComputer = document.querySelector(".chooseComputer");
const main = document.querySelector(".main");

let player1 = document.querySelector("#player1-name-input");
let comp1 = document.querySelector("#comp-name-input");
let player2 = document.querySelector("#player2-name-input");

let gameWinner = "";


let playerX = {
    symbol: "X",
    name: ""
}
let playerO = {
    symbol: "O",
    name: ""

}

let gamesPlayed = 0;
let compDifficulty = "easy";

let moves = 0;
let gameOver = false;
let teamX = 0;
let teamO = 0;

let currentPlayer = playerX

// let currentPlayer = playerX;

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

computer.addEventListener("click", againstComputer);


function againstPlayer() {
    menu.style.display = "none";
    vsComputer.style.display = "none";
    main.style.display = "none";
    vsPlayer.style.display = "block";
}

function againstComputer() {
    menu.style.display = "none";
    vsPlayer.style.display = "none";
    main.style.display = "none";
    vsComputer.style.display = "block";
}



startBtn.addEventListener("click", nameInput);
compStart.addEventListener("click", nameInputComp);
startBtn.addEventListener('click', startGame);
compStart.addEventListener('click', startGame);

//ADD PLAYER INPUT NAME
function nameInput() {
    playerX.name = player1.value === "" ? "Team X" : player1.value;
    playerO.name = player2.value === "" ? "Team O" : player2.value;
    player1NameElem.textContent = player1.value === "" ? "Team X" : player1.value;
    player2NameElem.textContent = player2.value === "" ? "Team O" : player2.value;
}
function nameInputComp() {
    playerX.name = comp1.value === "" ? "Team X" : comp1.value;
    playerO.name = player2.value === "" ? "Team O" : player2.value;
    player1NameElem.textContent = comp1.value === "" ? "Team X" : comp1.value;
    console.log("click");
}


// function to handle player moves
function handleClick(e) {
    if (gameOver) return;
    if (e.target.textContent !== "") return;

    e.target.textContent = currentPlayer.symbol;
    moves++;

    if (checkForWinner()) {
        gameOver = true;
        message.textContent = `${currentPlayer.name} Wins!`;
        console.log(message);
        updateScore();
        // game stop after 5 wins
        gamesPlayed++;
        if (gamesPlayed >= 2) {
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
            return gameBoard[index].textContent === currentPlayer.symbol;
        });
    });
}

// add event listeners to each cell
function startGame() {
    menu.style.display = "none";
    vsPlayer.style.display = "none";
    vsComputer.style.display = "none";
    startBtn.style.display = "none";
    compStart.style.display = "none";
    gameBoard.forEach((square) => {
        square.addEventListener("click", handleClick);
    });
    main.style.display = "block";
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

    if (teamX >= 2) {
        gameWinner = `<ul>${player1.value} Wins!</ul><ul>Congratulations</ul>`;
        modal.style.display = "block";
        modalContent.insertAdjacentHTML("beforeend", `${gameWinner}`);
    } else {
        if (teamO >= 2) {
            gameWinner = `<ul>${player2.value} Wins</ul><ul>You Lose!</ul>`;
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

restartBtn.addEventListener("click", refreshPage);

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
    }, 800);
}

//FUNCTION TO SET DIFFICULTY

function getMove() {
    if (compDifficulty === "easy") {
        // Choose a random empty cell
        const emptyCells = getEmptyCells()
    }
}

//ADD AI CHOICE