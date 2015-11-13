var mongoose = require('mongoose'),
	validator = require('validator'),
	uniqueValidator = require('mongoose-unique-validator'),	
	UserSchema = mongoose.Schema({
		email: { 
			type: String,
			unique: true,
			required: true,
	        validate: [ validator.isEmail, 'invalid email' ]
    	},
    	username: {
    		type: String,
    		required: true
    	},
    	password: {
    		type: String,
    		required: true,
    		validate: [
				function (v) {
					return(v.length >= 8);
				}, 'Your complaint must be atleast 10 characters long'
			]
    	}
	})
	UserSchema.plugin(uniqueValidator, {message: 'Error, expected {PATH} to be unique'});
	User = mongoose.model('User', UserSchema)