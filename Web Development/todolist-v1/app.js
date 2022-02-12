const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.set("view engine", "ejs");
app.get("/", function(request, response) {
  // response.send("Hello World!");
  var today = new Date();
  var currentday = today.getDay();
  var day = ""
  switch (currentday) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
  }
  response.render("list", {
    kindofday:day
  });
  // response.send("Hi")
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
