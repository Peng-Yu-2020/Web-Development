const express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req, res){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Burlington&appid=5d3a13d03b4816c324590d639cbc54c9&units=metric";
  https.get(url, function(response){
    console.log(response.statusCode);
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      console.log(temp);
      console.log(description);
    });
  });
  res.send("Server is up and running");
});

app.listen(3000, function(){
  console.log("Servie is running on port 3000.");
});
