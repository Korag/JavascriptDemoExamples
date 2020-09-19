// Zbuduj serwer http, który reaguje na 2 z 4 sposobów
// konfigurowania trasy, 
// * zastosuj wszystkie sposoby konfigurowania tras

// var express = require('express');
// var url = require('url');
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true }));
// app.listen(8080);

// console.log('listen at 80');

// app.get('/query', function(req,res){
//     //res.send('Witaj w komponencie Express');
//     res.send('info:'+ req.query.info);
// });

// // Wyrażenie regularne
// app.get(/^\/(api)\/(\w+):(\w+)?$/, function(req,res){
//     //res.send('Witaj w komponencie Express');
//     res.send('info2:'+ req.params[1]+':'+req.params[2]);
// });

// // Zdefiniowane parametry
// app.get('/info/:id1/:id2', function(req,res){
//     //res.send('Witaj w komponencie Express');
//     res.send('info3:'+ req.param("id1")+ ' '+req.param("id2") );
// });

// // Parametry POST
// app.post('/rest', function(req, res) {
//     var id = req.body.id;
//     var fname = req.body.fname;
//     var lname = req.body.lname;

//     res.send(id + ' ' + fname + ' ' + lname);
// });

// // Łańcuchy zapytania
// app.get('/rest2', function(req,res){
//     var id = req.param('id');
// 	var fname = req.param('fname');
// 	var lname = req.param('lname');  

//     res.send('info5:'+ id + fname + lname);
// });


// Udostępnij stronę /nowa i /stara za pomocą serwera
// Express

// var express = require('express');
// var fs = require('fs');
// var app = express();
// app.listen(8080);

// console.log('listen at 80');

// app.get('/index',function(req,res){
// 	fs.readFile('./nowa/index.html', 'utf8', function(err, text){
//         res.send(text);
// }); 
// });

// app.get('/index_old',function(req,res){
// 	fs.readFile('./stara/index_old.html', 'utf8', function(err, text){
//         res.send(text);
// }); 
// });

// wysylanie pliku

// var express = require('express');
// var url = require('url');
// var app = express();
// app.listen(8080);
// app.get('/index',function(req,res){
// res.sendfile('./nowa/index.html',{maxAge: 
// 1},function(err){
// if(err) console.log('nie udalo sie');
// else console.log('ok');
// });
// });
// app.get('/index_old',function(req,res){
// res.sendfile('./stara/index_old.html',{maxAge: 
// 1},function(err){
// if(err) console.log('nie udalo sie');
// else console.log('ok');
// });
// });


// Skorzystaj z szablonów do wygenerowania strony 

var express = require('express');
	jade = require('jade');
	ejs = require('ejs');
var app = express();
app.set('views','./views');
app.set('view engine','jade');
app.engine('jade',jade.__express);
app.engine('html',ejs.renderFile);
app.listen(8080);
console.log('listen at 80');
app.locals={uprzedmiot: 'PZwJS',udzien: 'wtorek', ugodzina: '15:00'};

app.get('/jade',function(req,res){
	res.render('user_jade');
}); 


app.get('/ejs', function(req, res){
	app.render('user_ejs.html',function(err,renderedData){
		res.send(renderedData);
	});
});
