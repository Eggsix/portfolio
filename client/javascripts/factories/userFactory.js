myApp.factory('userFactory', function ($http) {
	var errors = [];
	return {
		addUser: function (newUser, callback) {
			$http.post('/new_user', newUser).then(function (data) {
				console.log(data);
			})
		}
	}
})