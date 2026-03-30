# 💬 Real-Time Chat Backend API

A simple and scalable real-time chat backend built with **Express.js**, **Socket.IO**, and **SQLite**.

---

## 🚀 Features

* ⚡ Real-time messaging using Socket.IO
* 👥 Room-based chat system
* 💾 SQLite database for message storage
* 🌐 REST API for chat history
* 📦 Clean MVC project structure
* 🔌 Easy to integrate with any frontend (React, Vue, mobile)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Socket.IO
* SQLite

---

## 📁 Project Structure

```
chat-backend/
│
├── package.json
├── server.js
│
├── config/
│   └── db.js
│
├── models/
│   └── messageModel.js
│
├── controllers/
│   └── messageController.js
│
├── routes/
│   └── messageRoutes.js
│
├── sockets/
│   └── chatSocket.js
│
└── database/
    └── chat.db
```

---

## ⚙️ Installation

```bash
git clone https://github.com/blaxkmiradev/chat-backend.git
cd chat-backend
npm install
```

---

## ▶️ Run Server

```bash
npm start
```

Server will run at:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### Get Messages by Room

```
GET /api/messages/:room
```

### Example

```
GET /api/messages/general
```

---

## 🔌 Socket.IO Events

### Join Room

```js
socket.emit("join_room", "general");
```

### Send Message

```js
socket.emit("send_message", {
  username: "John",
  message: "Hello!",
  room: "general"
});
```

### Receive Message

```js
socket.on("receive_message", (data) => {
  console.log(data);
});
```

---

## 🧪 Test with Simple Client

```html
<script src="http://localhost:5000/socket.io/socket.io.js"></script>
<script>
  const socket = io("http://localhost:5000");

  socket.emit("join_room", "general");

  socket.emit("send_message", {
    username: "John",
    message: "Hello from client!"
  });

  socket.on("receive_message", (data) => {
    console.log(data);
  });
</script>
```

---

## 🗄️ Database

* SQLite database file:

```
/database/chat.db
```

* Table: `messages`

| Field      | Type     |
| ---------- | -------- |
| id         | INTEGER  |
| username   | TEXT     |
| message    | TEXT     |
| room       | TEXT     |
| created_at | DATETIME |

---

## 🔥 Future Improvements

* 🔐 JWT Authentication
* 🟢 Online/offline user status
* ⌨️ Typing indicators
* 📁 File/image upload
* 🌍 Deployment (Docker, VPS)
* 📱 Mobile app integration

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Rikixz
GitHub: https://github.com/blaxkmiradev
