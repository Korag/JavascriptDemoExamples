
var http = require('http');

function parseWeather(weatherResponse){
    var weatherData='';
    weatherResponse.on('data',function(chunk){
    weatherData+=chunk;
    });
    weatherResponse.on('end',function(){
    console.log(weatherData);
    });
    }
    
    function getWeather(city){
    var options = {
    host: 'api.openweathermap.org',
    path: 'data/2.5/weather?q=' + city 
    };
    http.request(options,function(weatherResponse){
    parseWeather(weatherResponse);
    }).end();
    }

    getWeather("Sidney");
    