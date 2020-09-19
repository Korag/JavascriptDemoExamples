var express = require('express');
var url = require('url');
var app = express();
app.listen(80);
app.get('/json',function(req,res){
	app.set('json spaces',4);
	res.json({name:"Marcin",wiek:"xx",pasje:['ksiazka','film']});
});
app.get('/error',function(req,res){
	res.json(500,{status:false, message:"awaria!!!"});
});
app.get('/jsonp',function(req,res){
	app.set('jsonp callback name','cb');
	res.jsonp({name:"Marcin",wiek:"xx",pasje:['ksiazka','film']});
});