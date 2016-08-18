(function () {

    var guessesLeft, randomNumber, guessInput, submitButton, answerDisplay, maxGuesses;
    maxGuesses = 5;
    guessInput = document.getElementById("guess");
    submitButton = document.getElementById("submitAnswer");
    answerDisplay = document.getElementById("answer");
    answerDisplay.innerHTML = "Please make a guess!";
    submitButton.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        checkAnswer();
    });

    initGame();

    function initGame () {
        guessesLeft = maxGuesses;
        randomNumber = Math.floor(Math.random() * 10 + 1);
        guessInput.value = "";
    }

    function checkAnswer () {

        if (guessInput.value == randomNumber) {
            answerDisplay.innerHTML = "You win! " + randomNumber + " is correct. " +
                "Please input your next guess to start again.";
            initGame();
            return;
        }
        else if (guessInput.value > randomNumber) {
            answerDisplay.innerHTML = "Too high!";
        }
        else {
            answerDisplay.innerHTML = "Too low!";
        }

        guessesLeft -= 1;

        if (guessesLeft === 0) {
            answerDisplay.innerHTML += " No guesses left - you lost!";
            initGame();
        }
    }

}());
