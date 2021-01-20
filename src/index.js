import userInputValidator from './user_input_validator.js';
import CountInput from './count_input.js';

const userInput = document.querySelector('#car-names-input');
const userSubmitBtn = document.querySelector('#car-names-submit');

export default function RacingCarGame() {
    userSubmitBtn.addEventListener('click', () => {
        const cars = String(userInput.value).split(',');
        const errorMessage = userInputValidator(userInput.value);

        if (errorMessage !== '') {
            alert(errorMessage);
            reload(userInput);
        } else {
            new CountInput(cars);
        }
    });
};

function reload(userInput) {
    userInput.value = '';
    userInput.focus();
};

new RacingCarGame();