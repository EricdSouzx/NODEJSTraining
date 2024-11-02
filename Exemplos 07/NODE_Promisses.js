const p = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve('yay')
  reject('no')
})

p
.then(function acao1 (res) { console.log(`${res} da ação 1`); return res; })
.then(function acao2 (res) { console.log(`${res} da ação 2`); return res; })
.then(function acao3 (res) { console.log(`${res} da ação 3`); return res; })
.catch(function erro (rej) { console.error(rej) })