var fs = require("fs");
console.log("Starting to read file");
var data = fs.readFileSync("./test.txt");
console.log("File Contents: " + data);
console.log("End of reading file");