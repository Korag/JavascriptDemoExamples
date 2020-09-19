// var fs = require('fs');
// var http = require('http');
// var url = require('url');

// // Dokonaj podziału 3 adresów URL wybranych z sieci i rozpoznaj:
// // ich typ (pl, edu, com),
// // parametry query, 
// // scieżkę oraz hash.

// http.createServer(function(req,res){
//     var url1 = url.parse("http://korpoipsum.pl/?fbclid=IwAR3J5rS3zL4v-6UnBirz9W1UMDnSeMSgyZn-WBBW-81dqi3kGwVBKWRDDqU,true,false)",true,false);
//     var query1 = url1.query;

//     var url2 = url.parse("https://www.google.com/intl/pl_ALL/drive/",true,false);
//     var query2 = url2.query;

//     var url3 = url.parse("http://ikot.edu.pl/artykuly,kurs,d1_style_css,108.html",true,false);
//     var query3 = url3.query;

//     res.writeHead(200);
//     let data = "Welcome";

//     // Query info

//     res.write("Info: " + query1.info ); res.write('\n');
//     res.write("Info: " + query2.info ); res.write('\n');
//     res.write("Info: " + query3.info ); res.write('\n');

//     // Typy
//     res.write("Type: " +(url1.hostname.toString()).split(".")[1]); res.write('\n');
//     res.write("Type: " +(url2.hostname.toString()).split(".")[2]); res.write('\n');
//     res.write("Type: " +(url3.hostname.toString()).split(".")[1]); res.write('\n');

//     // Pathname i hash

//     res.write("Hash:"+url1.hash); res.write('\n');
//     res.write("path:"+url1.path); res.write('\n');

//     res.write("Hash:"+url2.hash); res.write('\n');
//     res.write("path:"+url2.path); res.write('\n');

//     res.write("Hash:"+url3.hash); res.write('\n');
//     res.write("path:"+url3.path); res.write('\n');
    
// 	res.end(data);

// }).listen(8080);


 //za pomocą klienta http połącz się z dowolną stroną i wyświetl w konsoli wynik

// var http = require('http');
// var options = {
// 	hostname: '213.180.141.140',
// 	path: '/',
// 	port: '80',
// 	method: 'GET' };
// var req = http.request(options,function(response){
// var str='';
// response.on('data',function (chunk) {
// 	str+=chunk;
// });
// response.on('end',function(){
// 	console.log(str);
// });
// });
// req.end();

// Zaimplementuj serwer http obsługujący statycznie 2 strony z
// katalogów /nowa i /stara (treści dowolne) (wykorzystaj
// strumienie)

// var fs = require('fs');
// var http = require('http');
// var url = require('url');
// var root_dir1 = "stara/";
// var root_dir2 = "nowa/";
// http.createServer(function(req,res){
// 	var urlOBJ = url.parse(req.url,true,false);
	
// 	if(urlOBJ.pathname == '/index_old.html')
// 	{
//     fs.readFile(root_dir1+urlOBJ.pathname,function(err,data){
// 		if(err){
// 			res.writeHead(404);
// 			res.end(JSON.stringify(err));
// 			return 0;
// 		}
// 		res.writeHead(200);
// 		res.end(data);
// 	});
// 	}
// 	else
// 	{
//     fs.readFile(root_dir2+urlOBJ.pathname,function(err,data){
// 		if(err){
// 			res.writeHead(404);
// 			res.end(JSON.stringify(err));
// 			return;
// 		}
// 		res.writeHead(200);
// 		res.end(data);
//     });
// 	}

// }).listen(8080);


// * zainicjuj komunikację pomiędzy klientem a serwerem w 
// ramach jednej aplikacji: co 1 sekundę klient wysyła zapytanie 
// o datę a serwer zwraca dane w  pliku json


// var http = require('http');
// http.createServer(function(req,res){
// 	var jsData = '';
// 	req.on('data',function(chunk){
// 		jsData+=chunk;
// 	});
// 	req.on('end',function(){
// 	var ob = JSON.parse(jsData);
// 	var dateObject = new Date();

// 	var ob ={
// 	message:  dateObject.getDate() + ':' + (dateObject.getMonth()+1) + ':' + dateObject.getFullYear()
// 	};
// 	res.end(JSON.stringify(ob));
// 	});
// }).listen(8080);


// var options = {
// 	hostname: 'localhost',
// 	path: '/',
// 	port: '8080',
// 	method: 'POST' 
// 	};
// function handleResponse(response){
// var str='';
// response.on('data',function (chunk) {
// 	str+=chunk;
// });
// response.on('end',function(){
// 	jsData= JSON.parse(str);
// 	console.log(jsData.message);
// });
// };

// myIntervalt=setInterval(prompt, 1000);

// function prompt()
// {
// var req = http.request(options, handleResponse);
// req.write('{"name":"User"}');
// req.end();
// }

//* pobierz dane o pogodzie co 5 minut i udostępnij na stronie.

var http = require('http');

	http.createServer(function(req,res){
	var danepogodowe;
	
	function parseWeather(weatherResponse){
    var weatherData='';
    weatherResponse.on('data',function(chunk){
    weatherData+=chunk;
    });
    weatherResponse.on('end',function(){
	console.log(weatherData);
	danepogodowe = weatherData;
	danepogodowe = danepogodowe.toString();
	res.write(danepogodowe);
	res.write('\n');
	res.write('\n');
	res.write('\n');

    });
    }
    
    function getWeather(city){
    http.request('http://openweathermap.org/data/2.5/weather?q='+city+'&appid=b6907d289e10d714a6e88b30761fae22',function(weatherResponse){
	parseWeather(weatherResponse);
    }).end();
	}

   
	myIntervalt=setInterval(Display, 1000);

	Display();
	
	function Display()
	{
		getWeather("London");
	}

	}).listen(8080);
	


