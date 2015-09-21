// Require filesystem module - https://nodejs.org/api/fs.html
var fs = require('fs');

// Read filename from input at 2nd position
var input = process.argv[2];

// Read file into buffer and convert to string
// Node.js Buffer reference - https://nodejs.org/api/buffer.html
contents = fs.readFileSync(input).toString();

// Count newlines using split() and sent to console
console.log(contents.split('\n').length - 1);