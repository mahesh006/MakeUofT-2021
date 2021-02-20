var express = require('express');
const path = require('path');

//Set APP
var app = express();

//Static Files
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/morse', function(req, res){
	res.sendFile(__dirname + '/public/morse.html');
});

app.get('/demo', function(req, res){
	res.sendFile(__dirname + '/public/demo.html');
});

app.get('/morse', function(req, res){
	res.sendFile(__dirname + '/public/morse.html');
});


var server = app.listen(process.env.PORT || 4000, function(){
  console.log('Listening to requests on port 4000');
});
