const fs = require('fs')
const { promisify } = require('util')
const readFilePromise = promisify(fs.readFile)
const writeFilePromise = promisify(fs.writeFile)

function outraFuncaoAssincrona (parametro) {
  return new Promise((resolve, reject) => {
    resolve(parametro.split(','))
  })
}

function maisUmaFuncaoAssincrona (parametro) {
  return new Promise((resolve, reject) => {
    // continua
  })
}

readFilePromise('./arq.html')
  .then((err, dados) => {
    writeFilePromise('./outroarquivo.html', dados)
    return dados
  })
  .then(outraFuncaoAssincrona)
  .then(maisUmaFuncaoAssincrona)
  .catch(console.error)