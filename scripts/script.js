import { changeToInstructionPage, changeToPlayPage, changeToLandingPage } from './changePages.js';

const instructionsButton = document.querySelector("#instructions");
const playButon = document.querySelectorAll("#play");
const logo = document.querySelector("#logo")

instructionsButton.addEventListener("click", () => {
    changeToInstructionPage();
});

playButon.forEach((buttonPlay) => {
    buttonPlay.addEventListener("click", () => {
        changeToPlayPage();
    })
})

logo.addEventListener("click", () => {
    changeToLandingPage();
});