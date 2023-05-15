// imports
const express = require('express');
const app = express();
const cors = require('cors');
// allowing cross origin
app.use(cors());
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// when a user/client connects to the socket
io.on('connection', (socket) => {
    console.log('a user connected');

    // when a user/client disconnects
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // when a message is sent from the client
    socket.on('message', (msg) => {
        console.log(`A user sent a new message: ${msg}`)
        io.emit('message', msg);
      });
});

// server up
server.listen(3000, () => {
    console.log('listening on *:3000');
});