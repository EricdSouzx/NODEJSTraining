const prompt = require('prompt-sync')();
const rect = require('./solucao-1');

function solveRect(l, b) {
  console.log("Solução para o retângulo com l = " + l + " e b = " + b);

  if (l <= 0 || b <= 0) {
    console.log("As dimensões do retângulo devem ser maiores que zero: l = " + l + ", b = " + b);
  } else {
    console.log("A área do retângulo com comprimento = " + l + " e largura = " + b + " é " + rect.area(l, b));
    console.log("O perímetro do retângulo com comprimento = " + l + " e largura = " + b + " é " + rect.perimeter(l, b));
  }
}

const comprimento = parseFloat(prompt("Digite o comprimento do retângulo: "));
const largura = parseFloat(prompt("Digite a largura do retângulo: "));

solveRect(comprimento, largura);
