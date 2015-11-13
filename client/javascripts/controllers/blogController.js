myApp.controller('blogController', function(blogFactory) {
	var that = this;
	this.addPost = function (userData) {
		if(userData.admin) {
			blogFactory.newPost(that.newPost, function (data) {
				console.log(data)
			})
		} else {
			return false
		}
	}
})