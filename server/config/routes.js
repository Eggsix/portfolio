var user = require('../controller/users.js');
var post = require('../controller/blogs.js');
module.exports = function (app) {
	app
	// new Users
	.post('/new_user', function (req, res) { user.add(req, res) })
	// login
	.get('/log_in/:email', function (req, res) { user.find(req, res) })
	// new blog post
	.post('/new_post', function (req, res) { post.add(req, res) })
}