const { Socket } = require("dgram");
const express = require ("express");
const { write } = require("fs");
const http = require ("http");
const {Server} = require ("socket.io");

const colors = require ("colors");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) =>{
    console.log("Front señal")

    socket.on("mensaje",(data)=>{
        console.log(data)
    })
})

server.listen(4000);


console.log("Conectado con el servidor exitosamente :3".bgCyan, 4000);