let correctGuesses = 0;
let currentAnswer = '';
let currentRound = 0;
const loseAudio = document.querySelector('.loseAudio');
const winAudio = document.querySelector('.winAudio');
const changingAnswer = document.querySelector('.changingText')
const correctNumber = document.querySelector('.guessesCorrect')
const squareButton = document.querySelector('.square');
const circleButton = document.querySelector('.circle');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function getRandomShape() {
    let randomNumber = getRandomNumber(1, 2)
    if (randomNumber === 1) {
        currentAnswer = 'square';
        return currentAnswer
    } else {
        currentAnswer = 'circle';
        return currentAnswer
    }
}
function getNextRound(currentRound) {
    if (currentRound === 0) {
        changingAnswer.innerText = 'Red Or Blue?'
    }else if (currentRound === 1) {
        changingAnswer.innerText = 'One Down!';
    }else if (currentRound === 2) {
        changingAnswer.innerText = 'Splendid :)';
    }else if (currentRound === 3) {
        changingAnswer.innerText = "You're getting warmer...";
    }else if (currentRound === 4) {
        changingAnswer.innerText = "Ok slow down now...";
    }else if (currentRound === 5) {
        changingAnswer.innerText = "I am starting to get sus";
    }else if (currentRound === 6) {
        changingAnswer.innerText = "Are you cheating?";
    }else if (currentRound === 7) {
        changingAnswer.innerText = "This is kinda getting crazy...";
    }else if (currentRound === 8) {
        changingAnswer.innerText = "It's getting too hot in here!";
    }else if (currentRound === 9) {
        changingAnswer.innerText = "Just wow";
    }else if (currentRound === 10) {
        changingAnswer.innerText = "Are you usually this lucky?";
    }else if (currentRound === 11) {
        changingAnswer.innerText = "If only this was the lottery :(";
    }else if (currentRound === 12) {
        changingAnswer.innerText = "Seriously... No more!";
    }else if (currentRound === 13) {
        changingAnswer.innerText = "Zoo-Wee-Mama!";
    }else if (currentRound === 14) {
        changingAnswer.innerText = "i'm out... You win...";
    }
}
getRandomShape()


correctNumber.innerText = correctGuesses;



circleButton.addEventListener("click", function() {
    if (currentAnswer === 'circle') {
        winAudio.play();
        randomNumber = getRandomNumber(1, 2)
        correctGuesses++;
        correctNumber.innerText = correctGuesses;
        getRandomShape();
        currentRound++;
        getNextRound(currentRound);
    } else {
        loseAudio.play();
        correctNumber.innerText = 0
        getRandomShape()
        correctGuesses = 0;
        currentRound = 0;
        getNextRound(currentRound);
    }
})

squareButton.addEventListener("click", function() {
    if (currentAnswer === 'square') {
        winAudio.play();
        randomNumber = getRandomNumber(1, 2)
        correctGuesses++;
        correctNumber.innerText = correctGuesses;
        getRandomShape()
        currentRound++;
        getNextRound(currentRound);
    } else {
        loseAudio.play();
        correctNumber.innerText = 0;
        getRandomShape()
        correctGuesses = 0;
        currentRound = 0;
        getNextRound(currentRound);
    }

})