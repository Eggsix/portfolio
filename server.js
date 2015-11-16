var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 8000));
// if using body-parser
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

// if mongoose, require mongoose
require('./server/config/mongoose.js');

//routes
require('./server/config/routes.js')(app);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});