var http = require('http');
// We define port to listen to
var PORT = 8080;
// Create a server and pass callback is called someone send an request
var server = http.createServer(function(request, response) {
// Send response to client and print an message
response.end('Your first HTTP server written in Node.js');
});
// Listen connections on port defined as PORT
server.listen(PORT, function() {
// Callback called when server is listening
console.log("Server listening on: http://localhost:%s", PORT);
});
