var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM aluno ORDER BY nome", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
