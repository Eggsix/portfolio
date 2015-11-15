myApp.controller('blogController', function(blogFactory, $location) {
	var that = this;

	//used to update comments in current post
	showPostData = function (data) {
		blogFactory.showPost(data, function(data) {
			that.currentPost = data
		})
	}

	//retrieve all posts from database
	getAllPosts = function () {
		blogFactory.getAllPosts(function (data) {
			var data = data.reverse()
				dataArr = [];
				for( var i = 0; i < data.length; i + 5) {
					dataArr.push(data.splice(i, i + 5))
				}
			that.allPosts = dataArr
		})
	}
	getAllPosts()

	//show one post
	this.showPost = function (data) {
		showPostData(data)
	}

	//delete post
	this.deletePost = function (id) {
		blogFactory.deletePost(id, function (data) {
			// console.log(data) may allow success code later
		})
		getAllPosts()
		$location.path('/blog')
	}

	//Add new post from admin only
	this.addPost = function (userData) {
		if(userData.admin) {
			blogFactory.newPost(that.newPost, function (data) {
				//Allow Success messages here 
			})
		} else {
			return false
		}
		getAllPosts()
		that.newPost = ""
	}

	//Add comments to post
	this.addComment = function (userData, post_id) {
		var commentData = { user_id: userData._id,
							username: userData.username,
							comment: that.newComment.comment}
		blogFactory.addComment(commentData, post_id, function(data) {
			//asycronously updates comments in current post
			showPostData(post_id)
		})	
	}
})