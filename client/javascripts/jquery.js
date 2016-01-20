$(document).ready(function() {
	$.get("https://api.forecast.io/forecast/313c7749b3c1c818025f4832af02f021/47.6097,-122.3331", function(res) {
		console.log(res);
		// var temp = res.main.temp,
		// 	weather_city = res.name,
		// 	weather_condition = res.weather[0].description,
		// 	ferhenheit = Math.floor(temp * 9/5 - 459.67);
		// 	document.getElementById("weather_city").innerHTML = weather_city;
		// 	document.getElementById("weather_condition").innerHTML = weather_condition;
		// 	document.getElementById("ferhenheit").innerHTML = ferhenheit;
	});
	//slider
	var width = 600;
	var animationSpeed = 1000;
	var pause = 5000;
	var currentSlide = 1;
	var interval;
	function startSlider(){
		interval = setInterval(function () {
			var slider = $('#slider');
			var slideContainer = slider.find('.slides');
			var slides = slideContainer.find('.slide');

			slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function() {
				currentSlide++;
				if(currentSlide === slides.length) {
					currentSlide = 1;
					slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function pauseSlider(){
		clearInterval(interval);
	}

	startSlider();

	//materialize side nav
	$(".button-collapse").sideNav();
});
