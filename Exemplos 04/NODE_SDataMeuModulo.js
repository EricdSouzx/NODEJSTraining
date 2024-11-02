var http = require('http');
var dt = require('./MeuModulo');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("A data e hora corrente é: " + dt.myDateTime());
  res.end();
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');