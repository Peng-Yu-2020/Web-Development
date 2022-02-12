var fs = require("fs");

fs.open("mynewfile2.html", 'w', function(err, file){
  if (err) throw err;
  console.log("Saved!");
})
