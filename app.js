const http = require('http');

http.createServer(function (req, res) {
  res.write('Watching now');
  res.end();
}).listen(8080, '0.0.0.0');