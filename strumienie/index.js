// Wczytaj 2 pliki synchronicznie i asynchronicznie – wyświetl wyniki na ekranie
var fs = require("fs"); 

fs.readFile('test1.txt', function (err, data) { 
if (err) 
{ 
return console.error(err); 
} 
console.log("Asynchroniczne: " + data.toString()); 
}); 

var data = fs.readFileSync('test2.txt'); 
console.log("Synchroniczne: " + data.toString()); 

// Za pomocą strumieni wczytaj plik

var data = ''; 
var readerStream = fs.createReadStream('test3.txt'); 
readerStream.setEncoding('UTF8'); 

readerStream.on('data', function(chunk) { 
data += chunk; 
}); 

readerStream.on('end',function(){ 
console.log("Strumień: " + data); 

// W strumieniu usuń wszystkie znaki nie będące literami i spacjami

var Regex = data.replace(/[&\/\\#,+()$~%.'":*?<>{}@!0-9]/g,'');
console.log("REGEX: " + Regex);

// Dla liter zastosuj szyfr cezara

var CharArray = Regex.split('').map(function(itm){
    return itm.charCodeAt(0);
});

for(var i=0; i<CharArray.length; i++)
{
    if(CharArray[i]!=32)
    {
    CharArray[i] = CharArray[i]+3;
    }
}

var Cipher = String.fromCharCode.apply(null, CharArray)

console.log("Zaszyfrowane: " + Cipher);

// Zapisz wynik do drugiego pliku (strumieniowo)

var writerStream = fs.createWriteStream('test4.txt'); 

writerStream.write(Cipher,'UTF8'); 
writerStream.end(); 


writerStream.on('finish', function() { 
console.log("Zapisano"); 
}); 

writerStream.on('error', function(err){ 
console.log(err.stack); 
}); 
}); 

readerStream.on('error', function(err){ 
console.log(err.stack); 
}); 






