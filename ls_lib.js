// Require fs and path modules
var fs = require('fs');
var path = require('path');


module.exports = function(dir, ext, callback) {
  var extension = "." + ext;
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    }
    else {
      list = list.filter(function (file) {
        return path.extname(file) === '.' + ext
      });
    }
    
    callback(null, list);
  });
}