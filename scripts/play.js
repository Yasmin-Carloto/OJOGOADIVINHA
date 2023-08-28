import { mutatingNumbers, secretNumber } from './getRandomNumber.js';
import { validates } from './validations.js';

mutatingNumbers();
const buttonGuess = document.querySelector("#button-guess")
const numberGuessed = document.querySelector("#input-guessed-number")

function handleClick() {
    const guess = parseInt(numberGuessed.value, 10);
    validates(guess);
    numberGuessed.value = "";
    buttonGuess.removeEventListener("click", handleClick);
    buttonGuess.addEventListener("click", handleClick);
}

buttonGuess.addEventListener("click", () => {
    handleClick();
})