var net = require("net");
var clients = [];
var server = net.createServer(function (socket) {
  socket.write("Echo server\r\n");
  clients.push(socket);
  clients.forEach(function(client){
    client.write(socket.remoteAddress + " joined\n");
  });
});
server.listen(8000, "127.0.0.1");
console.log("TCP Server started at 127.0.0.1:8000");