var http = require('http');
http.createServer(function(req,res){
	var jsData = '';
	req.on('data',function(chunk){
		jsData+=chunk;
	});
	req.on('end',function(){
	var ob=JSON.parse(jsData);
	var ob={
	message:  "Witaj:"+ob.name
	}
	res.writeHead(200);
	res.end(JSON.stringify(ob));
	});
}).listen(8080);


var options = {
	hostname: 'localhost',
	path: '/',
	port: '8080',
	method: 'POST' 
	};
function handleResponse(response){
var str='';
response.on('data',function (chunk) {
	str+=chunk;
});
response.on('end',function(){
	jsData= JSON.parse(str);
	console.log(jsData.message);
});
};

var req = http.request(options, handleResponse);
req.write('{"name":"jestem alk"}');
req.end();
