myApp.controller('userController', function (userFactory, $location) {

	var that = this;

	this.addUser = function () {
		if(that.newUser.password != that.newUser.confirm) {
			that.confirm = {error: "passwords do not match"}
		} else {
			that.confirm = {}
			userFactory.addUser(that.newUser, function(data) {
				var data = data.data;
				if (data.errors) {
					that.unique = {error: data.errors.email.message}
				} else if(data._id) {
					that.success = {success: "Success! Please log in!"}
					$location.path('/login')
					that.unique = {}
				}
			})
		}
	this.newUser = ""
	}

	this.logOff = function () {
		that.currentUser = {}
		that.success = {}
	}

 	this.login = function () {
		userFactory.findUser(that.logUser.email, function(data) {
			if(data.length == 1) {
				that.currentUser = data[0]
				that.success = {success: "Welcome! " + data[0].username}
				that.errors = {}
				$location.path("/blog")
			} else if(data.length < 1){
				that.success = {}
				that.errors = {error: "User not found"}
			}
		})
	this.logUser = ""
	}
	
})