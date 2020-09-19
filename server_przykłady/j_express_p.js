var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var url =require('url');
var app = express();
var options = {
	key: fs.readFileSync('cert/key.pem'),
	cert: fs.readFileSync('cert/cert.pem')
};
http.createServer(app).listen(80);
https.createServer(options,app).listen(443);
app.get('/query', function(req,res){
    //res.send('Witaj w komponencie Express');
    res.send('info:'+req.query.info);
});
app.get(/^\/(api|rest)\/(\w+):(\w+)?$/, function(req,res){
    //res.send('Witaj w komponencie Express');
    res.send('info2:'+req.params[1]+':'+req.params[2]);
});

app.get('/info/:id1/:id2', function(req,res){
    //res.send('Witaj w komponencie Express');
    res.send('info3:'+req.param("id1")+ ' '+req.param("id2") );
});



// http://localhost/query?info=to_jest_wiadomosc
// http://localhost/api/10:83
// http://localhost/info/10/20

