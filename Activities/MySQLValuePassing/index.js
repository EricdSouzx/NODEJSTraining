const express = require('express');
const db = require('./db');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

app.post('/register', (req, res) => {
  const { nome, telefone, email, novidades, mensagem } = req.body;

  const query = `INSERT INTO registration (nome, telefone, email, novidades, mensagem) VALUES (?, ?, ?, ?, ?)`;
  const values = [nome, telefone, email, novidades, mensagem];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).send('Erro ao cadastrar o usuário');
    } else {
      res.send('Usuário cadastrado com sucesso!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});