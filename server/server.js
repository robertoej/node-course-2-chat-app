const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const app = express();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIO(server);

const {generateMessage, generateLocationMessage} = require('./utils/message');

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined!'));

    socket.on('createMessage', (message, callback) => { 
        console.log('createMessage:', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server.');
    });

    socket.on('createLocationMessage', coords => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected.');
    });
});

app.use(express.static(publicPath));

server.listen(PORT, () => console.log(`Server started on port ${PORT}.`));