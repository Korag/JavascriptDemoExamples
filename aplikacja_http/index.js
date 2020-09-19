var express = require('express');
var url = require('url');
var fs = require('fs');
//var JSON = require('json');

var app = express();
var str = 'button';

var button = [100];
for(var i=0; i<100; i++)
{
    button[i] = {
        id: i,
        disabled: '',
        value: '?'
    }
}

app.all('/', function (req, res) {

    res.setHeader("Content-Type","text-html");
 	res.writeHead(200);
 	res.write('<html><head><title>Gra</title></head>');
    res.write('<body>');
    var z = 0; 
    for(var i=0; i<10; i++)
    {
        for(var j=0; j<10; j++)
        {
        res.write(`<input type="button" id="${button[z].id}" value="${button[z].value}" onclick="clicked(${z})"  ${button[z].disabled}></input>`);
        z++;
        }
        res.write('<br>');
    }
    res.end();
});


function clicked(z)
{
    button[z].value = 'excellent';
    button[z].disabled = 'disabled';
}

app.listen(8081);