var fs = require("fs");

fs.appendFile('mynewfile1.txt', "Hello World", function(err){
  if (err) throw err;
  console.log("Saved!");
});
