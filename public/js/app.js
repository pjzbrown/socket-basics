var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

var socket = io();

console.log(name + ' joined the ' + room + ' room');

$(".room-title").text(room);

socket.on('connect', function() {
	console.log('Connected to socket-io server!');

	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});

socket.on('message', function (message) {
	
	var momentTimestamp = moment.utc(message.timestamp);
	var $message = $(".messages");

	console.log('New Message...');
	console.log(message.text);

	$message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a')  + '</p>');
	$message.append(message.text);
})

// handles submitting of new message
var $form = $("#message-form");

$form.on('submit', function(event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		name: name,
		text: $message.val()
	});

	$message.val("");
});