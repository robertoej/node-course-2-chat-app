const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const app = express();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.on('disconnect', () => {
        console.log('Client disconnected.');
    });
});

app.use(express.static(publicPath));

server.listen(PORT, () => console.log(`Server started on port ${PORT}.`));