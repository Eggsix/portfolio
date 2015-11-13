var myApp = angular.module("myApp", ['ngRoute']);
	myApp.config(function ($routeProvider, $locationProvider) {
		$routeProvider
		.when("/preston_phan", {
			// controller: /* partial controller */,
			// controllerAs: /* controller name */,
			templateUrl: '../partials/preston_phan.html'
		})
		.when("/experience", {
			// controller: /* partial controller */,
			// controllerAs: /* controller name */,
			templateUrl: '../partials/experience.html'
		})
		.when("/contact", {
			// controller: /* partial controller */,
			// controllerAs: /* controller name */,
			templateUrl: '../partials/contact.html'
		})
		.when("/blog", {
			// controller: /* partial controller */,
			// controllerAs: /* controller name */,
			templateUrl: '../partials/blog.html'
		})
		.when("/login", {
			// controller: /* partial controller */,
			// controllerAs: /* controller name */,
			templateUrl: '../partials/login.html'
		})
		.when("/sign_up", {
			// controller: /* partial controller */,
			// controllerAs: /* controller name */,
			templateUrl: '../partials/signup.html'
		})
		.otherwise({
			redirectTo: "/preston_phan"
		});
		$locationProvider.html5Mode(true);
	});
