var mongoose = require('mongoose')
module.exports = (function() {
	return {
		add: function (req, res) {
			var post = new Post(req.body);
				post.save(function (err, result) {
					if(err) {
						res.json(err)
					} else {
						res.json(result)
					}
				})
		},
		show: function (req, res) {
			Post.find({}, function (err, result) {
				if (err) {
					res.json(err)
				} else {
					res.json(result)
				}
			})
		},
		delete: function (req, res) {
			Post.remove({_id: req.params.id}, function (err, result) {
				if (err) {
					console.log(err)
				} else {
					res.json(result)
				}
			})
		}
	}
})();