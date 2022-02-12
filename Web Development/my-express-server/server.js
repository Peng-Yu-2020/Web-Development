const  express = require("express");
const app = express();
app.get("/", function(request, response){
  // console.log(request);
  response.send("Hello World!");
});

app.get("/contact", function(req, res){
  res.send("<h1>Peng_Yu@14.com</h1>");
});

app.get('/about', function(req, res){
  res.send("This is Peng Yu, and I want to learn more coding");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>code</li><li>hiking</li><li>beer</li></ul>");
});

app.get("/page", function(req, res){
  res.send("this is the test page, and this is the ending page");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
