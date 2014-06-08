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

function sendTime(){
  io.sockets.emit('time', { time: new Date().toJSON() });
}

setInterval(sendTime, 10000);

io.sockets.on('connection', function(socket){
  socket.emit('welcome', {message : 'Welcome!'});

  socket.on('i am client', console.log);
});

server.listen(3000);
