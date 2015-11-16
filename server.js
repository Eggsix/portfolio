var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

// if mongoose, require mongoose
require('./server/config/mongoose.js');

//routes
require('./server/config/routes.js')(app);


app.listen(8000, function() {
  console.log('Node app is running on port 8000');
});