$(document).ready(function() {
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
