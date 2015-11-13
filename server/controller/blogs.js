var mongoose = require('mongoose')
module.exports = (function() {
	return {
		add: function (req, res) {
			var post = new Post(req.body);
				post.save(function (err, result) {
					if(err) {
						console.log(err)
					} else {
						console.log(result)
					}
				})
		}
	}
})();