var mongoose = require('mongoose');
var fs = require('fs');

// mongoose.connect('mongodb://localhost/portfolio');

mongoose.connect('mongodb://Eggsix:Eggs6767@ds053954.mongolab.com:53954/eggsix');



var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') >= 0) {
		require(models_path + '/' + file);
	}
})