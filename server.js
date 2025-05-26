const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join-room", (roomCode) => {
    socket.join(roomCode);
    console.log(`User joined room: ${roomCode}`);
  });

  socket.on("message", (data) => {
    const { roomCode, message } = data;
    io.to(roomCode).emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
