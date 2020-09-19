var express = require('express');
var url = require('url');
var fs = require('fs');
//var JSON = require('json');
var cookieParser = require('cookie-parser')
var app = express();

app.use(cookieParser());

const cars = [];

// w pliku
// app.get('/addcar', function (req, res) {
// fs.appendFile('cars.txt', JSON.stringify({ make: req.query.make, model: req.query.model }), (err) => { 
// if (err) res.send('error'); 
// else
//     res.send('Pojazd został dodany do bazy danych');
// }); 

// });

// app.get('/cars', function (req, res) {
//     res.sendFile('cars.txt', { "root": __dirname});
// }); 

// app.get('/deletecars', function (req, res) {
//     fs.readFile('cars.txt', 'utf8', function (err, data) 
//     {
//         if (err) throw err; 

//         var string = '';
//         var prot = `{"make":"${req.query.make}","model":"${req.query.model}"}`;
//         string = data.replace(prot ,'')
         
//          fs.writeFile('cars.txt', string , function (err) {
//             if (err) throw err;
//           });

//           res.send('Pojazd został usunięty z bazy danych');
//     });
//     });


    // w pamięci
    app.get('/addcar', function (req, res) {
        var prot = `{"make":"${req.query.make}","model":"${req.query.model}"}`;
        cars.push(prot);
        res.send('Pojazd został dodany do bazy danych');
    }); 
    
    
    app.get('/cars', function (req, res) {
        var wynik = '';
        for(val of cars)
        {
            wynik += val;
        }
        res.send(wynik);
    }); 
    
    
    app.get('/deletecars', function (req, res) {
       
        var prot = `{"make":"${req.query.make}","model":"${req.query.model}"}`;
        for(val of cars)
        {
            if(val == prot)
            {
                cars.splice(val);
            }
        }
        res.send('Pojazd został usunięty z bazy danych');
        });




app.all('/', function (req, res) {

    console.log("Cookies: ", req.cookies);
    info = "Poznaje to miejsce";

    if (!req.cookies.hasVisited)
    {
        res.cookie('hasVisited', '1', {maxAge: 60*60*1000, httpOnly: true, path: '/'});
        info = "Nie poznaje tego miejsca...";
    }
    res.send(info + '<form method="get" action="/addcar"> \
  Make:<br> \
  <input type="text" name="make" value=""> \
  <br> \
  Model:<br> \
  <input type="text" name="model" value=""> \
  <br><br> \
  <input type="submit" value="Add car to database"> \
</form>  \
<form method="get" action="/cars"> \
  <input type="submit" value="Show cars in database"> \
</form>  \
<form method="get" action="/deletecars"> \
  Make:<br> \
  <input type="text" name="make" value=""> \
  <br> \
  Model:<br> \
  <input type="text" name="model" value=""> \
  <br><br> \
  <input type="submit" value="Delete car"> \
</form> ');
});

app.listen(8081);

// MONGO

// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');
// var express = require('express');
// var url = require('url');

// var app = express();

// var cloud = true;

// var monngodbHost = '127.0.0.1';
// var mongodbPort = '27017';

// var authenticate = '';

// if (cloud) 
// {
//     mongodbHost = 'ds129914.mlab.com';
//     mongodbPort = '29914';
//     authenticate = 'Test:testowe1@'
// }

// var mongodbDatabase = 'cars';

// var url = 'mongodb://' + authenticate + mongodbHost + ':' + mongodbPort + '/' + mongodbDatabase;

//     // mongodb
//     app.get('/addcar', function (req, res) {
//         MongoClient.connect(url, function(err, db)
//          {
//             if (err) throw err;
//             const CarsDB= db.db('cars')
//             var car = { make: req.query.make , model: req.query.model };
//             CarsDB.collection("Cars").insertOne(car, function(err,  res) {
//             if (err) throw err;
//             db.close();
//             });
//             });
//             res.send('Pojazd został dodany do bazy danych');
//     }); 
    
    
//     app.get('/deletecars', function (req, res) {
//         MongoClient.connect(url, function(err, db)
//         {
//            if (err) throw err;
//            const CarsDB= db.db('cars')
//            var car = { make: req.query.make , model: req.query.model };
//            CarsDB.collection("Cars").remove(car, function(err,obj)
//            {
//                if (err) throw err;
//                db.close();
//            });
//            });
//            res.send('Pojazd został usunięty z bazy danych');
//     }); 
    
    
//     app.get('/cars', function (req, res) {
//         MongoClient.connect(url, function(err, db)
//         {
//            if (err) throw err;

//            const CarsDB = db.db('cars')
//            Result = CarsDB.collection("Cars").find({}).toArray(function(err,result){
//                if (err) throw err;
//                res.send(result);
//            });
//            db.close();
//            });
//         });

// app.all('/', function (req, res) {

//     res.send('<form method="get" action="/addcar"> \
//   Make:<br> \
//   <input type="text" name="make" value=""> \
//   <br> \
//   Model:<br> \
//   <input type="text" name="model" value=""> \
//   <br><br> \
//   <input type="submit" value="Add car to database"> \
// </form>  \
// <form method="get" action="/cars"> \
//   <input type="submit" value="Show cars in database"> \
// </form>  \
// <form method="get" action="/deletecars"> \
//   Make:<br> \
//   <input type="text" name="make" value=""> \
//   <br> \
//   Model:<br> \
//   <input type="text" name="model" value=""> \
//   <br><br> \
//   <input type="submit" value="Delete car"> \
// </form> ');
// });

// app.listen(8081);