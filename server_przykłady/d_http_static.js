var fs = require('fs');
var http = require('http');
var url = require('url');
var root_dir = "html/";
http.createServer(function(req,res){
	var urlOBJ = url.parse(req.url,true,false);
	fs.readFile(root_dir+urlOBJ.pathname,function(err,data){
		if(err){
			res.writeHead(404);
			res.end(JSON.stringify(err));
			return;
		}
		res.writeHead(200);
		res.end(data);
	});
}).listen(8080);

// http://localhost:8080/index_brak.html
// http://localhost:8080/index.html