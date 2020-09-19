// Stworzyć bazę danych (3 osoby) w zmiennej opartej o strukturę JSON. (zmienna tekstowa)
// Zamienić plik na strukturę
// Wyświetlić osoby w pętli
// Dodać osobę
// Zamienić na ciąg znaków.

var fs = require('fs');

fs.readFile('./db.json', 'utf8', function (err, data) 
{
    if (err) throw err; 
    obj = JSON.parse(data.toString());


    for(var i in obj.users)
    {
        console.log(obj.users[i]);
    }

obj.users[obj.users.length]  
 = {  
        id: 3,
        firstName: "Janus",
        lastName: "Third"
     };
     
     
     var data = JSON.stringify(obj);  
     
     fs.writeFile('./db.json', data , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
     
});







