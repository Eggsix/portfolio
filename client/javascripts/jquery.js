$(document).ready(function() {
	//Chat
	$('.chat_form input').keypress(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			$('.chat_form').submit();
		}
	})
	var elem = document.getElementById('chatlog');
	var socket = io.connect();
	var userName = '';
	$('#chat_box').hide();
	$('#chat_box').draggable();
	open_chat = function () {
		while(userName.length <= 0 || userName == null) {
					userName = prompt("what is your name?");	
		} 
		if(userName.length > 0) {
			socket.emit('got_new_user', {name: userName});	
		}

		$('#chat_box').effect('slide', 500, function() {
			$(this).fadeIn();

		$('#chat_button').attr("onclick", "close_chat()");

		elem.scrollTop = elem.scrollHeight;

		});
	}

	$('#chat_form').submit(function (event) {
		event.preventDefault();
		$message = $('#message').val();
		socket.emit('user_message', $message);
		$('#message').val('');
	})

	socket.on('show_messages', function (data) {
		$('#chatlog').append('<p>' + data[data.length-1] + '</p>');
		elem.scrollTop = elem.scrollHeight;
	})

	socket.on('show_all_messages', function (data) {
		for(messages in data) {
			$('#chatlog').append('<p>' + data[messages] + '</p>')
		}
	})

	socket.on('show_all_users', function (data) {
		console.log(data);
		for(user in data) {
			$('#userlist').append('<p>' + data[user] + '</p>');
		}
	})
	socket.on('remove_user', function () {
		$('#userlist').empty();
	})
	close_chat = function () {
		$('#chat_box').fadeOut(500);
		$('#chat_button').attr("onclick", "open_chat()");
	}
	//Slider
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
	//End Slider

	//materialize side nav
	$(".button-collapse").sideNav();
});
