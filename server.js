var express = require('express');
var bodyParser = require('body-parser');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

// if mongoose, require mongoose
require('./server/config/mongoose.js');

//routes
require('./server/config/routes.js')(app);

var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log('Node app is running on port ' + port + "...");
});