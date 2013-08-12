var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

fs.readFile('index.html','utf8','r', function (err, data) {
  if (err) throw err;
 // console.log(data);
 app.get('/', function(request, response) {
  response.send(data);
 });

});

/*
app.get('/', function(request, response) {
  response.send('Hello World!');
});
*/

//var port = process.env.PORT || 5000;
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
