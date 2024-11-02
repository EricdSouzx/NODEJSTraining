const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',   
  user: 'root', 
  password: '123456789', 
  database: 'users' 
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados bem-sucedida!');
  }
});

module.exports = db;
