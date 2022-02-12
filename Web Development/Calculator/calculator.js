const express=require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(request, response){
  // response.send("Hellow World!")
  response.sendFile(__dirname+"/index.html")
});

app.post("/", function(request, response){
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var result = num1+num2;
  response.send("The calculation result is" + result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html")
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight*height;
  res.send("Your BMI is " + result);
});

app.listen(3000, function(){
  console.log("Server is running on 3000, and");
});
