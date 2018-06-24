var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);
http.createServer(function(req, res){
	res.writeHead(200);
	res.end("you are .....");
}).listen(3000);