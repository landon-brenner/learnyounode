var http = require('http');
var fs = require('fs');

// Receive a text file request, respond with same file
// Filename provided by 2nd command argument
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });

  fs.createReadStream(process.argv[3]).pipe(res);
});

// Listen on port provided by argument 1
server.listen(Number(process.argv[2]));