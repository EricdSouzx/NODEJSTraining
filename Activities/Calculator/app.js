const express = require('express');
const prompt = require('prompt-sync')();
const somar = require('./somar');
const subtrair = require('./subtrair');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

const app = express();
const port = 3000;

app.get('/somar', (req, res) => {
    const a = Number(prompt('Digite o primeiro número: '));
    const b = Number(prompt('Digite o segundo número: '));
    const resultado = somar(a, b);
    res.send(`Resultado da soma: ${resultado}`);
});

app.get('/subtrair', (req, res) => {
    const a = Number(prompt('Digite o primeiro número: '));
    const b = Number(prompt('Digite o segundo número: '));
    const resultado = subtrair(a, b);
    res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicar', (req, res) => {
    const a = Number(prompt('Digite o primeiro número: '));
    const b = Number(prompt('Digite o segundo número: '));
    const resultado = multiplicar(a, b);
    res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get('/dividir', (req, res) => {
    const a = Number(prompt('Digite o primeiro número: '));
    const b = Number(prompt('Digite o segundo número: '));
    const resultado = dividir(a, b);
    res.send(`Resultado da divisão: ${resultado}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
