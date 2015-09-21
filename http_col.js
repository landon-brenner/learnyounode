// Solution 1
/*
var http = require('http');

var url = process.argv[2];

http.get(url, function(request) {
  var result = "";
  request.setEncoding("utf8");
  request.on("data", function(data) {
    result += data;
  });
  request.on("end", function() {
    console.log(result.length);
    console.log(result);
  });
});
*/

// Solution 2 (using bl module)
var http = require('http');
var bl = require('bl');
    
http.get(process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
		if (err) {
			return console.error(err)
		} else {
			data = data.toString()
			console.log(data.length)
			console.log(data)
		}
	}));  
})
