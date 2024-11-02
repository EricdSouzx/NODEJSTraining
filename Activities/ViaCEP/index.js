const express = require('express');
const axios = require('axios');
const db = require('./db');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/consulta/:cep', async (req, res) => {
    const { cep } = req.params;

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const cepData = response.data;

        if (cepData.erro) {
            return res.status(404).json({ message: 'CEP não encontrado!' });
        }

        const query = `
            INSERT INTO ceps (cep, logradouro, bairro, localidade, uf, estado, regiao, ibge, gia, ddd, siafi) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE 
                logradouro = VALUES(logradouro), bairro = VALUES(bairro),
                localidade = VALUES(localidade), uf = VALUES(uf),
                estado = VALUES(estado), regiao = VALUES(regiao),
                ibge = VALUES(ibge), gia = VALUES(gia),
                ddd = VALUES(ddd), siafi = VALUES(siafi)
        `;

        db.query(query, [
            cepData.cep, cepData.logradouro, cepData.bairro, 
            cepData.localidade, cepData.uf, cepData.estado, cepData.regiao, 
            cepData.ibge, cepData.gia, cepData.ddd, cepData.siafi
        ], (err) => {
            if (err) {
                console.error('Erro ao inserir no banco:', err);
                return res.status(500).json({ message: 'Erro ao salvar no banco de dados!' });
            }
            res.json({ message: 'CEP salvo no banco de dados!', data: cepData });
        });
    } catch (error) {
        console.error('Erro ao consultar o CEP:', error);
        res.status(500).json({ message: 'Erro ao consultar o CEP!' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
