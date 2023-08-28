import { secretNumber } from './getRandomNumber.js';

export function validates(tryNumber){
    const container = document.getElementById("info")

    if(!validateAsNumber(tryNumber)){
        container.innerHTML = `
            <p class="information">Somente números!</p>
        `
    }

    if(tryNumber == secretNumber){
        container.innerHTML = `
            <p class="information">Você venceu!</p>
            <input type="button" value="Jogue novamente" class="button-guess again" id="play-again">
        `;
        playAgain();

    }else if(tryNumber > secretNumber){
        container.innerHTML = `
        <p class="information">O número sorteado é menor.</p>
    `;
    }else {
        container.innerHTML = `
            <p class="information">O número sorteado é maior.</p>
        `;
    }
}

function validateAsNumber(tryNumber){
    return Number.isNaN(tryNumber);
}

function playAgain(){
    const playAgainButton = document.getElementById('play-again')
    playAgainButton.addEventListener('click', function(){
        window.location.reload();
    })
}