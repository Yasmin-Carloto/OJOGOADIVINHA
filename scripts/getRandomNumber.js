export const biggerValue = 100;
export const minorValue = 1;
export const secretNumber = getRandomNumber();

function getRandomNumber(){
    const randomNumber = parseInt(Math.random() * (biggerValue + 1));
    return randomNumber;
}

export function mutatingNumbers(){
    const elementBiggerValue = document.getElementById('bigger-value');
    elementBiggerValue.innerHTML

    const elementMinorValue = document.getElementById('minor-value');
    elementMinorValue.innerHTML = minorValue;
}

