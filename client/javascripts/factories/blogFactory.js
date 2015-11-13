myApp.factory('blogFactory', function($http) {
	return {
		newPost: function (newPost, callback) {
			$http.post('/new_post', newPost).then(function(data) {
				callback(data.data)
			})
		}
	}
})