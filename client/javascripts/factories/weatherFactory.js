myApp.factory('weatherFactory', function ($http) {
	return {
		getWeather: function (callback) {
			$http.get("http://api.openweathermap.org/data/2.5/weather?q=Seattle,us&appid=bea022332329a049f865b6522d01b133").then(function(data) {
				callback(data);
			})
		}
	}
})