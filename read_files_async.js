var fs = require("fs");
console.log("Starting to read file");
fs.readFile("./test.txt", function(error, data){ console.log("File Contents: " + data); });
console.log("End of reading file");