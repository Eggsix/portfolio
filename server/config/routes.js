var user = require('../controller/users.js'),
    post = require('../controller/blogs.js'),
	comment = require('../controller/comments.js');
module.exports = function (app) {
	app
	// new Users
	.post('/new_user', function (req, res) { user.add(req, res) })
	// login
	.get('/log_in/:email', function (req, res) { user.find(req, res) })
	// new blog post
	.post('/new_post', function (req, res) { post.add(req, res) })
	// show all blog posts
	.get('/show_posts', function (req, res) { post.show(req, res) })
	//show post
	.delete('/delete_post/:id', function (req, res) { post.delete(req, res) })
	//add comment
	.post('/new_comment/:id', function (req, res) { comment.add(req, res) })
	//show post comments
	.get('/post/:id', function (req, res) { comment.show(req,res) })
	//delete comment
	.delete('/remove_comment/:id/:comment_id', function(req, res) { comment.delete(req, res) })


}