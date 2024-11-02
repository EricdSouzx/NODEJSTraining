const prompt = require('prompt-sync')({sigint: true});

// Numero aleatorio entre 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
// Flag do input
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
  // input do usuario
  let guess = prompt('Chute um numero de 1 até 10: ');
  // converte para number
  guess = Number(guess);

  // Compare o chute com o numero secreto.
  if (guess === numberToGuess) {
    console.log('Congratulações você acertou!');
    foundCorrectNumber = true;
  } else {
    console.log('Desculpe, tente novemente!');
  }
}