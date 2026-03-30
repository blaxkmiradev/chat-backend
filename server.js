const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const messageRoutes = require("./routes/messageRoutes");
const chatSocket = require("./sockets/chatSocket");

// init database
require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// REST API
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Chat backend running...");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// socket
chatSocket(io);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
