var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    socket.emit('createMessage', {
        from: 'jessica@gmail.com',
        text: 'Hey, this is Roberto.'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function (data) {
    console.log('New message:', data);
});