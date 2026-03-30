const Message = require("../models/messageModel");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // join room
    socket.on("join_room", (room) => {
      socket.join(room);
      console.log(`User joined room: ${room}`);
    });

    // send message
    socket.on("send_message", async (data) => {
      try {
        const { username, message, room } = data;

        // save to DB
        await Message.saveMessage(username, message, room);

        // send to room
        io.to(room).emit("receive_message", {
          username,
          message,
          room,
          time: new Date()
        });
      } catch (err) {
        console.error(err);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
