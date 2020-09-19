var express      = require('express') 
var cookieParser = require('cookie-parser') 
 
var app = express() 
app.use(cookieParser()) 
 
app.get('/', function(req, res) { 
  console.log("Cookies: ", req.cookies);
  info ="już tu byłem";
  if (!req.cookies.hasVisited){
    res.cookie('hasVisited','1',{maxAge: 60*60*1000,httpOnly: true, path:'/'});
    info = "mój pierwszy raz";    
  }
      res.send(info);
}) 
 
app.listen(8081);
console.log('port 8081');