// Require the filtering module ls_lib.js
var lslib = require('./ls_lib');

// dir name at postion 2, ext at 3
var dir = process.argv[2];
var ext = process.argv[3];


lslib(dir, ext, function(err, list) {
	if(err) {
		return console.error('There was an error:', err);
	}
	else {
		list.forEach(function(file) {
			console.log(file);
		});
	}
});