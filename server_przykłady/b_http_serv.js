var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req,res){
	var urlOBJ = url.parse(req.url,true,false);
	let data = "Welcome "+urlOBJ.query.imie+" "+urlOBJ.query.nazwisko;
	res.writeHead(200);
	res.write("Full:"+urlOBJ.href+"</br>");
	res.write("Hash:"+urlOBJ.hash+"</br>");
	res.write("hostname:"+urlOBJ.host+"</br>");
	res.write("path:"+urlOBJ.path+"</br>");
	//string
	urlOBJ = url.parse('http://localhost:8080/path/id?imie=ala&nazwisko=makota#id7',true,false);
	res.write("Full:"+urlOBJ.href+"</br>");
	res.write("Hash:"+urlOBJ.hash+"</br>");
	res.write("hostname:"+urlOBJ.host+"</br>");
	res.write("path:"+urlOBJ.path+"</br>");

	var path=url.resolve(urlOBJ.href,"/nowy");
	res.write("Full:"+path+"</br>");


	res.end(data);

}).listen(8080);

// http://localhost:8080/path/id?imie=ala&nazwisko=makota#id7