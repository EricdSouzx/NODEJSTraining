var rect = require('./NODE_PromisessoPares.js')

rect.soAceitaPares(3)
    .then(result => console.log("Promise resolved: " + result))
    .catch(error => console.log("Promises rejected: " + error));

console.log("teste");