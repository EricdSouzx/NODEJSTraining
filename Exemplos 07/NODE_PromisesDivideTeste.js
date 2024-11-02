var rect = require('./NODE_PromisessoPares.js')
var div = require('./NODE_Promisesdivide.js')

const numero = 2;
rect.soAceitaPares(2)
    .then(result => div.dividePelaMetade(numero))
    .then(result2 => console.log("A metade de " + numero + " é " + result2))
    .catch(error => console.log("Promises rejected: " + error));
 
console.log("teste");