myApp.factory('blogFactory', function($http) {
	return {
		newPost: function (newPost, callback) {
			$http.post('/new_post', newPost).then(function(data) {
				callback(data.data)
			})
		},
		showPost: function (post_id, callback) {
			$http.get('/post/' + post_id).then(function(data) {
				callback(data.data)
			})
		},
		getAllPosts: function (callback) {
			$http.get('/show_posts').then(function (data) {
				callback(data.data)
			})
		},
		deletePost: function (id, callback) {
			$http.delete('/delete_post/' + id).then(function (data) {
				console.log(data.data)
			})
		},
		addComment: function (comment, post_id, callback) {
			$http.post('/new_comment/' + post_id, comment).then(function (data) {
				callback(data.data)
			})
		}
	}
})