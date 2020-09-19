var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var app = express();
var options = {
	key: fs.readFileSync('cert/key.pem'),
	cert: fs.readFileSync('cert/cert.pem')
};
http.createServer(app).listen(80);
https.createServer(options,app).listen(443);
app.get('/', function(req,res){
	res.send('Witaj w komponencie Express');
});

//> openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365

// openssl rsa -in keytmp.pem -out key.pem