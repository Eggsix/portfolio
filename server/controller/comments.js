var mongoose = require('mongoose')
module.exports = (function() {
	return {
		add: function (req, res) {
			//return post to manipulate in funciton params
			Post.findOne({_id: req.params.id}, function(err, post) {
				var comment = new Comment(req.body)
					comment._post = post._id;
					post.comments.push(comment);
					comment.save(function (err) {
						post.save(function(err) {
							if (err) {
								res.json(err)
							} else {
								res.json(post)
							}
							})
					})
			})
		},
		show: function (req, res) {
			Post.findOne({_id: req.params.id})
				.populate('comments')
				.exec(function(err, post) {
					res.json(post)
				})
		},
		delete: function (req, res) {
			Post.findOne({_id: req.params.id}, function (err, post) {
				post.comments.splice(post.comments.indexOf(req.params.comment_id), 1)
				Comment.remove({_id: req.params.comment_id}, function(err) {
					post.save(function (err) {
						if (err) {
							console.log(err)
						} else {
							console.log(post)
						}
					})	
				})	
			})
		}
	}
})()