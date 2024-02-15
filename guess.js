let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations!";
        gameResult.style.backgroundColor = "green";
    } else if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too high try again";
        gameResult.style.backgroundColor = "blue";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too low try again";
        gameResult.style.backgroundColor = "blue";
    } else {
        gameResult.textContent = "Invalid input";
        gameResult.style.backgroundColor = "red";
    }
}