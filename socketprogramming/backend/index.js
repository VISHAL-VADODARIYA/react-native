const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000;

io.on('connection',socket=>{
    console.log('a user connected :D');
    socket.on("chat message", (msg) => io.emit("chat message", msg));
})

server.listen(port, ()=>console.log('sever is running on port '+port));