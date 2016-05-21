var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Listeing on Port 3000");
})
