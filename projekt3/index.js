var cen = require("cenzura");
var http = require('http');
// We define port to listen to
var PORT = 8080;
// Create a server and pass callback is calledsomeone send an request
var server =
http.createServer(function(request, response)
{
// Send response to client and print an message 

var opis = "Jest milo gdyby nie smutny, pochmurny, niedobry i szalony 1 dzien";
var opis2 = opis;
response.write(opis);
response.write("\n");
var tmp = cen.cenzura(opis);
response.write(tmp);
response.write("\n");


cen.addCWord("ponury");

response.write(opis2);
tmp = cen.cenzura(opis2);
response.write(tmp);
response.write("\n");

var a = 3^2;
var b = -4;
var c = 2;

let MZ = require("miejsca_zerowe");
var miejsca_zerowe = MZ.oblicz(a,b,c);

response.end(miejsca_zerowe + '\n');

});

// Listen connections on port defined as PORT
server.listen(PORT, function() {
// Callback called when server is listening
console.log("Server listening on:http://localhost:%s", PORT);
});