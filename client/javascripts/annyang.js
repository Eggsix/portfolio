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
		}
	};
	annyang.addCommands(commands);

	annyang.start();
}