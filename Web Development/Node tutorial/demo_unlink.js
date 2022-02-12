var  fs = require("fs");

fs.unlink("mynewfile2.html", function(err){
  if (err) throw err;
  console.log("File Deleted");
})
