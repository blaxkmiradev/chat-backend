const express = require("express");
const router = express.Router();
const controller = require("../controllers/messageController");

router.get("/:room", controller.getMessages);

module.exports = router;
