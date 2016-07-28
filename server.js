var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

var app = express();
let indexPage = path.join(__dirname, 'dist/index.html');
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/*', function() {
    res.sendFile(indexPage);
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),function() {
  console.log("Listeing on Port " + app.get('port'));
});
