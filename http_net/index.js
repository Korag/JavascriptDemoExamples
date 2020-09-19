//  Dodaj funkcję HTTPS dla utworzonych już stron
// /stara i /nowa

// var fs = require('fs');
// var http = require('http');
// https = require('https'); 
// var url = require('url');
// var root_dir1 = "stara/";
// var root_dir2 = "nowa/";

// var options = {
// key: fs.readFileSync('cert/key.pem'),
// cert: fs.readFileSync('cert/cert.pem'),
// };
// https.createServer(options,function(req,res){

//     var urlOBJ = url.parse(req.url,true,false);
    
// 		if(urlOBJ.pathname == '/index_old.html')
// 		{
// 	    fs.readFile(root_dir1+urlOBJ.pathname,function(err,data){
// 			if(err){
// 				res.writeHead(404);
// 				res.end(JSON.stringify(err));
// 				return 0;
// 			}
// 			res.writeHead(200);
// 			res.end(data);
// 		});
// 		}
// 		else
// 		{
// 	    fs.readFile(root_dir2+urlOBJ.pathname,function(err,data){
// 			if(err){
// 				res.writeHead(404);
// 				res.end(JSON.stringify(err));
// 				return;
// 			}
// 			res.writeHead(200);
// 			res.end(data);
// 	    });
// 		}
// }).listen(443);

// Dodaj funkcjonalność dynamicznego generowania
// tablicy na stronie (na podstawie parametrów: znak,
// x, y)

var http = require('http');
var PORT = 8080;

var server = http.createServer(function(request, response) {
	
	var znak = '@';
	var x = 20;
	var y = 20;

	response.setHeader("Content-Type","text-html");
	response.writeHead(200);
	response.write('<html><head><title>Dynamiczna tablica</title></head>');
	response.write('<body>');

	response.write('<table>')
	for(var i=0; i<x; i++)
	{
		response.write('<tr>')
		for(var j=0; j<y; j++)
		{
		response.write('<td>' + znak + '</td>');
		}
		response.write('</tr>')
	}
	response.write('</table>')
	response.end('</body></html>');
});

server.listen(PORT, function() {
console.log("Server listening on: http://localhost:%s", PORT);
});



// Za pomocą gniazda TCP prześlij plik pomiędzy
// klientem i serwerem

// var net = require('net');
// var fs = require('fs');
// var server = net.createServer(function(client){
// 	console.log('Nawiązano połączenie');
// 	client.on('data', function(data){
// 		var r = server.listenerCount;
// 		var data = fs.readFileSync('./tekst.txt');
// 		console.log('Klient wysłał:'+ data.toString());	
// 	});
// 	client.on('end',function(){
// 		console.log('Klient rozłączony');
//     });
    
// client.write('SERV: Witaj kliencie');
// });
// server.listen(8107, function(){
// 	console.log('Serwer nasłuchuje na połączenie');
// });

// var client = net.connect({port:8107,host:'localhost'}, function(){
// console.log("nawiązanie poł. z klientem");
// client.write("dane");
// });
// client.on('data',function(data){
// 	console.log(data.toString());
// 	client.end();
// });
// client.on('end',function(data){
// console.log("klient został rozłączony");	
// });

// * zaimplementuj możliwość jednoczesnego wysyłania
// pliku do 5 osób

// var net = require('net');
// var fs = require('fs');

// var r = 0;

// var server = net.createServer(function(client){
// 	console.log('Nawiązano połączenie');
// 	client.on('data', function(data){
// 		async function sendData()
// 		{
// 			var data = fs.readFileSync('./tekst.txt');
// 			while(true)
// 			{
// 				if(r==5)
// 				{
// 					await console.log('Klient wysłał:'+ data.toString());	
// 					break;
// 				}
// 			}
// 		}

// 		sendData();
// 	});
// 	client.on('end',function(){
// 		console.log('Klient rozłączony');
//     });
    
// client.write('SERV: Witaj kliencie');
// });
// server.listen(8107, function(){
// 	console.log('Serwer nasłuchuje na połączenie');
// });

// var client = net.connect({port:8107,host:'localhost'}, function(){
// console.log("nawiązanie poł. z klientem");
// client.write("dane");
// r++;
// });
// client.on('data',function(data){
// 	console.log(data.toString());
// 	client.end();
// });
// client.on('end',function(data){
// r--;
// console.log("klient został rozłączony");	
// });
// var client2 = net.connect({port:8107,host:'localhost'}, function(){
// 	console.log("nawiązanie poł. z klientem");
// 	client2.write("dane");
// 	r++;
// 	});
// 	client2.on('data',function(data){
// 		console.log(data.toString());
// 		client2.end();
// 	});
// 	client2.on('end',function(data){
//     r--;
// 	console.log("klient został rozłączony");	
// 	});
	
// 	var client3 = net.connect({port:8107,host:'localhost'}, function(){
// 		console.log("nawiązanie poł. z klientem");
// 		client3.write("dane");
// 		r++;
// 		});
// 		client3.on('data',function(data){
// 			console.log(data.toString());
// 			client3.end();
// 		});
// 		client3.on('end',function(data){
// 		r--;
// 		console.log("klient został rozłączony");	
// 		});

// 		var client4 = net.connect({port:8107,host:'localhost'}, function(){
// 			console.log("nawiązanie poł. z klientem");
// 			client4.write("dane");
// 			r++;
// 			});
// 			client4.on('data',function(data){
// 				console.log(data.toString());
// 				client4.end();
// 			});
// 			client4.on('end',function(data){
// 			r--;
// 			console.log("klient został rozłączony");	
// 			});

// 			var client5 = net.connect({port:8107,host:'localhost'}, function(){
// 				console.log("nawiązanie poł. z klientem");
// 				client5.write("dane");
// 				r++;
// 				});
// 				client5.on('data',function(data){
// 					console.log(data.toString());
// 					client5.end();
// 				});
// 				client5.on('end',function(data){
// 				r--;
// 				console.log("klient został rozłączony");	
// 				});