/* RESTART BUTTON */

let restart = document.querySelector(".gameRestart");

function restartBtn() {
    window.location.reload(true);
}

restart.addEventListener("click", restartBtn);
