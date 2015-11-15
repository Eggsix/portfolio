var myApp = angular.module("myApp", ['ngRoute']);
	myApp.config(function ($routeProvider, $locationProvider) {
		$routeProvider
		.when("/preston_phan", {
			templateUrl: '../partials/preston_phan.html'
		})
		.when("/experience", {
			templateUrl: '../partials/experience.html'
		})
		.when("/contact", {
			templateUrl: '../partials/contact.html'
		})
		.when("/blog", {
			templateUrl: '../partials/blog.html'
		})
		.when("/login", {
			templateUrl: '../partials/login.html'
		})
		.when("/sign_up", {
			templateUrl: '../partials/signup.html'
		})
		.when("/post", {
			templateUrl: '../partials/show_post.html'
		})
		.otherwise({
			redirectTo: "/preston_phan"
		});
		$locationProvider.html5Mode(true);
	});
