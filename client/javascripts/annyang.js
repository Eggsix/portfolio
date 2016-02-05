if (annyang) {
	var commands = {
		'open chat': function() {
			open_chat();		
		},
		'close chat': function() {
			close_chat();
		},
		'hello': function() {
			alert('hello');
		},
		'home': function() {
			$('#home').click();
		},
		'about': function() {
			$('#about').click();
		},
		'lab': function() {
			$('#lab').click();
		},
		'articles': function() {
			$('#articles').click();
		}
	};
	annyang.addCommands(commands);

	annyang.start();
}