var fs = require('fs');
var express = require('express');
var app = express();

// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var jsonData = {count: 12, message: 'hey'};

app.get('/', function (req, res) {
  // var index = fs.readFileSync('index.html', { encoding: 'utf8'});
  // res.send(index);
  res.sendFile(__dirname + '/index.html', { encoding: 'utf8' }, function (error) {
    if (error) {
      console.error(error);
    } else {
      console.log('Responded to GET request for / by sending index.html');
    }
  });
});

app.get('/data', function (req, res) {
  res.send(jsonData);
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});
