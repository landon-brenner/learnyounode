// Both solutions require the http module
var http = require('http');

// Solution 1
/*
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
// /*

// Buffer List module: https://github.com/rvagg/bl
var bl = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    };
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));  
});

// */