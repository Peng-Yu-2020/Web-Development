var fs = require("fs");

fs.writeFile("mynewfile3.txt", "Hello Word! I'm practicing my node.js skill", function(err){
  if (err) throw err;
  console.log("Saved!");
})
