var express = require('express'); 
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'root',
     database: 'mydb'
});

connection.connect(function(err){
	if(!err) {
		console.log("mydb esta conectado ... nn");    
	} else {
		console.log("Error ao conectar no mydb ... nn");    
	}
});

app.post('/api/book', function(req, res, next){
   var cope = req.body;
   var query = connection.query('insert into cope set ?', cope, function(err, result){
     if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
	 }
   });
});
app.listen(3000);