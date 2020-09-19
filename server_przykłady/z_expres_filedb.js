var express = require('express');
var url = require('url');
var fs = require('fs');
//var JSON = require('json');
var app = express();


const users = [];

app.get('/users', function (req, res) {
    // retrieve user posted data from the body
fs.appendFile('users.txt', JSON.stringify({ name: req.query.name, age: req.query.age }), (err) => { 
if (err) res.send('error'); 
else
    res.sendfile('users.txt');
}); 

});

app.all('/', function (req, res) {
    // retrieve user posted data from the body
    res.send('<form method="get" action="/users"> \
  First name:<br> \
  <input type="text" name="name" value="Mickey"> \
  <br> \
  age:<br> \
  <input type="text" name="age" value="Mouse"> \
  <br><br> \
  <input type="submit" value="Submit"> \
</form> ');
});

app.listen(80);