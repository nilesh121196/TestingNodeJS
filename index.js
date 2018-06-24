// var http = require('http');

// // http.createServer(function (req, res) {
// //     res.writeHead(200, {'Content-Type': 'text/plain'});
// //     res.end('Hello World!');
// // }).listen(8080);
// http.createServer(function(req, res){
// 	res.writeHead(200);
// 	res.end("you are .....");
// }).listen(8080);

var express = require('express');
var app = express();

app.set('port',(process.env.PORT | 5000));


app.get('/', function(req, res){
	console.log("Hello the world of nodejs");
	res.send("Hello");
})
app.listen(app.get('port'), function(){
	console.log('App is run on port', app.get('port'));
});

