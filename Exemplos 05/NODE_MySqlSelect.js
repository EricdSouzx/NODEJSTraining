var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM aluno", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  con.end();
});
