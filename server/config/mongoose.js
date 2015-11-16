var mongoose = require('mongoose');
var fs = require('fs');
// var env = process.env.NODE_ENV  = process.env.NODE_ENV || 'development';
// if (env === 'development') {
// 	mongoose.connect('mongodb://localhost/portfolio');
// } else {
	mongoose.connect('mongodb://eggsix:Eggs6767@ds053794.mongolab.com:53794/heroku_37d17gls');
// }



var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') >= 0) {
		require(models_path + '/' + file);
	}
})