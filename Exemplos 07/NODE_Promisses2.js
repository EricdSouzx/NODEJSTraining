const p1 = Promise.race([
  new Promise(resolve => setTimeout(resolve, 4000)),
  new Promise((resolve, reject) => setTimeout(reject, 8000))
])

const p2 = Promise.race([
  p1,
  new Promise(resolve => setTimeout(resolve, 6000)),
  new Promise(resolve => setTimeout(resolve, 10000)),
  new Promise((resolve, reject) => setTimeout(reject, 2000))
])

p2.then(result => console.log(result)).catch(err => console.error(err))