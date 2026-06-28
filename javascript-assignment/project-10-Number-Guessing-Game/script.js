const guessInput = document.querySelector("#guessInput");
const guessBtn = document.querySelector("#guessBtn");
const message = document.querySelector("#message");
const randomNumber = Math.floor(Math.random() * 100) + 1;
guessBtn.addEventListener("click", function () {
    const userGuess = Number(guessInput.value);
    if (!userGuess) {
        message.textContent = "Please enter a number.";
        return;
    }
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }
    if (userGuess > randomNumber) {
        message.textContent = "Too High!";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too Low!";
    } else {
        message.textContent = "Correct Answer!";
    }
});