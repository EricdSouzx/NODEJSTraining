function dividir(a, b) {
    if (b === 0) {
        return 'Erro: Divisão por zero';
    }
    return a / b;
}

module.exports = dividir;