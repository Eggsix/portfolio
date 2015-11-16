var myApp = angular.module("myApp", ['ngRoute']);
	myApp.config(function ($routeProvider, $locationProvider) {
		$routeProvider
		.when("/preston_phan", {
			templateUrl: '../partials/preston_phan.html'
		})
		.when("/experience", {
			templateUrl: '../partials/experience.html'
		})
		.when("/blog", {
			templateUrl: '../partials/blog/blog.html'
		})
		.when("/login", {
			templateUrl: '../partials/login/login.html'
		})
		.when("/sign_up", {
			templateUrl: '../partials/login/signup.html'
		})
		.when("/post", {
			templateUrl: '../partials/blog/show_post.html'
		})
		.otherwise({
			redirectTo: "/preston_phan"
		});
		$locationProvider.html5Mode(true);
	});
