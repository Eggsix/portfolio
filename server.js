var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
// if mongoose, require mongoose
require('./server/config/mongoose.js');

//routes
require('./server/config/routes.js')(app);

var port = process.env.PORT || 8000;
var server = app.listen(port, function() {
  console.log('Node app is running on port ' + port + "...");
});

var user = {};
var messages = []; 
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
	
	//show all messages
	socket.emit('show_all_messages', messages);
	socket.emit('show_all_users', user);

	//adds new user
	socket.on('got_new_user', function (data) {	
		user[socket.id] =  data.name;
		messages.push({name: user[socket.id], message: ' has entered the chatroom!'});
		io.emit('show_messages', messages);
		io.emit('remove_user');		
		io.emit('show_all_users', user);
	})

	//show user message
	socket.on('user_message', function (data) {
		messages.push( {name: user[socket.id], message: data});
		io.emit('show_messages', messages);
	})

	//user has left the chatroom
	socket.on('disconnect', function() {
		if (user[socket.id]) {
			messages.push({name: user[socket.id], message: ' has left the chatroom!'});
			delete user[socket.id];
			io.emit('show_messages', messages);
			io.emit('remove_user');
			io.emit('show_all_users', user);
		}
	})
})