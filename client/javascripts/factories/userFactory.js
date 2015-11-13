myApp.factory('userFactory', function ($http) {
	var errors = [];
	return {
		addUser: function (newUser, callback) {
			$http.post('/new_user', newUser).then(function (data) {
				callback(data);
			})
		},
		findUser: function (logUser, callback) {
			$http.get('/log_in/' + logUser).then(function (data) {
				callback(data.data);
			})
		}
	}
})