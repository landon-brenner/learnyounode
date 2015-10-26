var net = require('net');

// Pad leading zero to single digit numbers
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
};

// Return formatted date and time
function now() {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
};

// Create the server and run the now() function at end   
var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
});

// Server listens at port supplied in CL argument
server.listen(process.argv[2]);
