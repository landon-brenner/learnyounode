// Require http module - https://nodejs.org/api/http.html
var http = require('http');

/*
Send data from input to console.log using HTTP server.
Send errors to console.error
*/
http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');
	response.on('data', console.log);
	response.on('error', console.error);
})
