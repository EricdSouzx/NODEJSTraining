exports.dividePelaMetade = function(numero){
    if(numero % 2 !== 0)
        return Promise.reject(new Error("Não posso dividir um número ímpar!"));
    else
        return Promise.resolve(numero / 2);
}