var express = require('express');

var app = express.createServer(express.logger());

var FileContents = new Buffer(fs.readFileSync('index.html'));
var FileContString = FileContents.ToString();

// Read the file and print its contents.
var fs = require('fs')
  , filename = 'index.html';
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  FileContentsString = data;
});


app.get('/', function(request, response) {
  response.send(FileContentsString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
