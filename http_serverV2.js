var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
  console.log("Received request: " + req.url);
  fs.readFile("./public" + req.url, function(err, data){
    if(err){
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.end("Sorry. The requested resource was not found");
    }
    else{
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data);
    }
  });
});
server.listen(8000, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8000/");