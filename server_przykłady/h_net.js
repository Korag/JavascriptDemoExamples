
var net = require('net');
var server = net.createServer(function(client){
	console.log('Nawiązano połączenie');
	client.on('data', function(data){
		console.log('Klient wysłał:'+data.toString());
	});
	client.on('end',function(){
		console.log('Klient rozłączony');
	});
client.write('Witaj');
});
server.listen(8107, function(){
	console.log('Serwer nasłuchuje na połączenie');
});


var client = net.connect({port:8107,host:'localhost'}, function(){
console.log("nawiązanie poł. z klientem");
client.write("dane");
});
client.on('data',function(data){
	console.log(data.toString());
	client.end();
});
client.on('end',function(data){
console.log("klient został rozłączony");	
});

