myApp.factory('weatherFactory', function ($http) {
	return {
		getWeather: function (callback) {
			$http.get("//api.openweathermap.org/data/2.5/weather?q=Seattle,us&appid=717fbf698bb2dd90997c882680d12571").then(function(data) {
				callback(data);
			})
		}
	}
})