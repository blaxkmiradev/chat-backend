const db = require("../config/db");

exports.saveMessage = (username, message, room) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO messages (username, message, room)
      VALUES (?, ?, ?)
    `;

    db.run(sql, [username, message, room], function (err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  });
};

exports.getMessagesByRoom = (room) => {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT * FROM messages
      WHERE room = ?
      ORDER BY created_at ASC
    `;

    db.all(sql, [room], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};
