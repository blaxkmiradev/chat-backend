const Message = require("../models/messageModel");

exports.getMessages = async (req, res) => {
  try {
    const room = req.params.room;
    const messages = await Message.getMessagesByRoom(room);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
