

const SECRET_CODE = 'emma';

let yourGuess = prompt("Enter the secret code").toLowerCase();

while(yourGuess !== SECRET_CODE){
    yourGuess = prompt("Enter your secret code").toLowerCase();
}

alert("CONGRATS YOU GUESSED THE SECRET")
