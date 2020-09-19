// Napisać program, który generuje event w przypadku żądania www do serwera

// var events = require('events');
// var http = require('http');

// var PORT = 8080;
// var eventEmitter = new events.EventEmitter();

// var myEventHandler = function () {
//         console.log("Event wywołany");
// }
// eventEmitter.on('ServerResponse', myEventHandler);

// var server =
// http.createServer(function(request, response)
// {
// response.end('Your first HTTP server written in Node.js');
// eventEmitter.emit('ServerResponse');
// });

// server.listen(PORT, function() {
//         // Callback called when server is listening
//         console.log("Server listening on:http://localhost:%s", PORT);
//         });

// Stworzyć własny obiekt użytkownik i zaimplementować w nim zdarzenie przy zmianie imienia, przywitaj które wyświetla informacje o osobie (*)

var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
        console.log(user);
}
eventEmitter.on('Przywitaj', myEventHandler);

var user = {
        firstName:"Janus",
        lastName:"Kowalski",
        age: 30,
        changeName: function(newName)
        {
              this.firstName = newName;
              eventEmitter.emit('Przywitaj');
        }
    };

console.log(user);
user.changeName("Janusz");

