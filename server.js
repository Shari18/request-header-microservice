// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

//to get actual ip
app.enable('trust proxy')

app.use(function(req,res){
  var ip = req.ip;
  var language = req.headers["accept-language"].split(',')[0];
  var regex = /\(([^)]+)\)/;
  var software = regex.exec(req.headers["user-agent"])[1];
  res.send({ip,language,software});
});

app.listen(3000);
