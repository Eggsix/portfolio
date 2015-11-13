var mongoose = require('mongoose')
module.exports = (function() {
	return {
		add: function (req, res) {
			var user = new User(req.body); 
				user.save(function(err, result) {
					if(err) {
						res.json(err)
					} else {
						res.json(result)
					}
				})
		},
		find: function (req, res) {
			User.find( {email: req.params.email} , function (err, result) {
				if(err) {
					res.json(err)
				} else {
					res.json(result)
				}
			})
		}
	}
})();