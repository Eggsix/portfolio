myApp.controller('weatherController', function (weatherFactory) {
	var that = this;
	var getWeather = function () {
		weatherFactory.getWeather(function(data) {
			var temp = data.data.main.temp
			that.weatherData = data.data
			that.city = data.data.name
			that.condition = data.data.weather[0].description
			that.fehrenheit = Math.floor(temp * 9/5 - 459.67)
			// console.log(that.weatherData); for weather data
		})
	}
	getWeather();
})