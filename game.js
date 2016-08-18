(function () {

    var guessesLeft, randomNumber, guessInput, submitButton, answerDisplay, maxGuesses;

    maxGuesses = 5;
    guessInput = document.getElementById("guess");
    submitButton = document.getElementById("submitAnswer");
    answerDisplay = document.getElementById("answer");

    answerDisplay.innerHTML = "Silahkan menebak!";

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
            answerDisplay.innerHTML = "Anda menang! " + randomNumber + " angka yang tepat " +", "+
                "silahkan coba lagi keberuntungan anda";
            initGame();
            return;
        }
        else if (guessInput.value > randomNumber) {
            answerDisplay.innerHTML = "Too high!bro,coba lagi";
        }
        else {
            answerDisplay.innerHTML = "Too low!coba lagi";
        }

        guessesLeft -= 1;

        if (guessesLeft === 0) {
            answerDisplay.innerHTML = " kesempatan anda habis!silahkan coba lagi";
            initGame();
        }
    }

}());
