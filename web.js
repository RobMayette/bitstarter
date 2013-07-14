var express = require('express');

var app = express.createServer(express.logger());

var FileContents = new Buffer(fs.readFileSync('index.html'));
var FileContString = FileContents.ToString();

app.get('/', function(request, response) {
  response.send(FileContString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
