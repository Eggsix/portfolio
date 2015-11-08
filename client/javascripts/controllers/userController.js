myApp.controller('userController', function (userFactory) {
	var that = this;
	this.addUser = function () {
		if(that.newUser.password != that.newUser.confirm) {
			that.confirm = {error: "passwords do not match"}
		} else {
			that.confirm = {}
			userFactory.addUser(that.newUser, function(data) {
				console.log(data);
			})
		}
	this.newUser = null
	}
})