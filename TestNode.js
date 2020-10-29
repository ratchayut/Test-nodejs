var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);

console.log("Open Server");

setInterval(function(){
console.log("every 1 second")

},1000);

setInterval(function(){
console.log("every 1 second")

},1000);