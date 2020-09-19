fs=require('fs');
https = require('https'); 
var options = {
key: fs.readFileSync('cert/key.pem'),
cert: fs.readFileSync('cert/cert.pem'),
};
https.createServer(options,function(req,res){
//kod odpowiedzi i obsługi
res.writeHead(200);
res.end("polaczenie ok");
}).listen(443);
/*
var options = {
    hostname: '127.0.0.1',
    port: 443,
    path: '/',
    method: 'GET',
    key: fs.readFileSync('cert/key.pem'),
    cert: fs.readFileSync('cert/cert.pem'),
    agent: false
    };
    var req = https.request(options, function(res){
        var str='';
        response.on('data',function (chunk) {
            str+=chunk;
        });
        response.on('end',function(){
            console.log(str);
        });
    });
    */