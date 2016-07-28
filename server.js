var express = require('express'),
    bodyParser = require('body-parser'),
    router = require('./express/routes/main'),
    path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve('build')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', router);

app.set('port', process.env.NODE_PORT || 3000);

app.listen(app.get('port'),function() {
  console.log("Listeing on Port " + app.get('port'));
});
