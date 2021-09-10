const guessField = document.querySelector(".guessField");
const feedbackField = document.querySelector(".feedback")

const randomNumber = Math.round(Math.random() * 100);


console.log(`random Number = ${randomNumber}`);


const keyFilter = (key) => {
    if (isNaN(key)) {
        functionalKeyHandler(key);
    } else {
        numberHandler(key);
    }
};


const numberHandler = (number) => {
    let fieldValue = guessField.value;

    if (!isNaN(fieldValue)) {
        fieldValue = parseInt(fieldValue);

        if (fieldValue > 100 || fieldValue < 0) {
            feedbackField.innerText = 'Your value is out of bounce'
            feedbackField.classList.add('error');

        } else if (randomNumber > fieldValue) {
            feedbackField.innerText = 'The number is too low'
            feedbackField.classList.add('error');

        } else if (randomNumber < fieldValue) {
            feedbackField.innerText = 'The number is too high'
            feedbackField.classList.add('error');

        } else if (randomNumber === fieldValue) {
            feedbackField.innerText = 'You have won, congrats'
            feedbackField.classList.add('succsess');
            document.body.style.backgroundImage = "url('pictures/confetti.gif')";
        }

    }
    guess();
};

const functionalKeyHandler = (key) => {
    switch (key) {
        case 'Enter':
            console.log(`${key} should be enter`);
           // guess();
            break;
        case 'Backspace':
            console.log(`${key} should be backspace`);
            break;
        default:
            document.location.reload();
            break;
    }
};

const guess = () => {
    const guessValue = guessField.value;
    console.log("guessValue = " + guessValue);
}

guessField.addEventListener('keyup', (event) => {
    const keyPressed = event.key;
    keyFilter(keyPressed);
});

