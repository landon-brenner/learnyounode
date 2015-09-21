// Require filesystem module
var fs = require('fs');
// Require path module - https://nodejs.org/api/path.html
var path = require('path');

// Directory to be listed at position 2
// File extension to be filtered at position 3
fs.readdir(process.argv[2], function (err, list) {
	list.forEach(function (file) {
		if (path.extname(file) === '.' + process.argv[3]) {
			console.log(file);
		}
    });
});
