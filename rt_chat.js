var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  fs.readFile('./public'+req.url, function(error, data){
    if(error){
      res.writeHead(404, {'Content-Type' : 'text/plain'});
      res.end('The requested resource could not be found.');
    }
    else{
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(data);			
    }
  });
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  socket.emit('welcome', {message : 'Welcome to Realtime Chat!'});

  socket.on('send', function(data){
    io.sockets.emit('message', data.message);
  });
});

server.listen(3000);
