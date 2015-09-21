// Require filesystem module
var fs = require('fs');

// Read filename from input
var filename = process.argv[2];

// Use asychronous fs.readFile instead of fs.readFileSync
// Use 'utf8' argument instead of .toString()
file = fs.readFile(filename, 'utf8', function(err, data) {
  console.log(data.split('\n').length - 1);
});