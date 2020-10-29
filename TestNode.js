var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'html'});
  res.end('Hello World!');
}).listen(8080);

console.log("Open Server");

