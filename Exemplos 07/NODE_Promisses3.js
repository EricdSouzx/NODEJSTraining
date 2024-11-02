const innerPromise = (val) => Promise.resolve(console.log(val + 1))
                                    .then(() => console.log(val + 2))
                                    .then(() => {
                                        console.log(5)
                                        return 5
                                    })

const chain = Promise.resolve(console.log(0))
.then(() => console.log(1))
.then(() => console.log(2) || 2)
.then(innerPromise)
.then((five) => console.log(five + 1))
