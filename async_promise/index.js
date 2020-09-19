// Wykonaj zdarzenie wyświetlania liczby sekund co 1 sekundę od uruchomienia

var http = require('http');
var PORT = 8080;

var server =
http.createServer(async function(request, response)
{
    myIntervalt2=setInterval(wypisywanieLiczbySekund2,1000);

    var liczba_sekund = 0;
    var lsString = liczba_sekund.toString();
   
    async function wypisywanieLiczbySekund2()
    {
    await response.write(lsString);
    await response.write("\n");
    }
  
   await wypisywanieLiczbySekund();
   await wypisywanieLiczbySekund2();

   await response.end('Your first HTTP server written in Node.js');
});

server.listen(PORT, function() {
console.log("Server listening on:http://localhost:%s", PORT);
});


myIntervalt=setInterval(wypisywanieLiczbySekund,1000);


var liczba_sekund = 0;

function uaktualinijLiczbeSekund()
{
    liczba_sekund++;
}

async function wypisywanieLiczbySekund()
{
await uaktualinijLiczbeSekund();
await console.log(liczba_sekund);
}



