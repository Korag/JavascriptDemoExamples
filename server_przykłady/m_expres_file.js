var express = require('express');
var url = require('url');
var app = express();
app.listen(80);
app.get('/image',function(req,res){
	res.sendfile('plik.jpg',{maxAge: 1},function(err){
	if(err) console.log('nie udalo sie');
	else console.log('ok');
	});
});
