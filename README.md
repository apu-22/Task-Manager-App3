# 📌 Basic Task Manager CRUD API

## 📝 Description

This is a simple Task Manager REST API built using Node.js and Express.js.
It allows users to create, read, update, and delete tasks without using any database (in-memory storage is used).

---

## 🚀 Features

* Create a new task
* Get all tasks
* Get a single task by ID
* Update task details
* Delete a task
* Update task status
* Filter tasks by status
* Search tasks by title or description
* Sort tasks by creation time
* Input validation and error handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* UUID (for unique task IDs)

---

## 📂 API Endpoints

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| GET    | /api/tasks            | Get all tasks      |
| GET    | /api/tasks/:id        | Get task by ID     |
| POST   | /api/tasks            | Create new task    |
| PUT    | /api/tasks/:id        | Update task        |
| PATCH  | /api/tasks/:id/status | Update task status |
| DELETE | /api/tasks/:id        | Delete task        |

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-link>
```

2. Go to project folder:

```bash
cd task-manager
```

3. Install dependencies:

```bash
npm install
```

4. Run the server:

```bash
node server.js
```

Server will run at:

```
http://localhost:3000
```

---

## 📌 Example Request (Create Task)

POST /api/tasks

```json
{
  "title": "Learn Node.js",
  "description": "Practice CRUD operations",
  "status": "To Do"
}
```

---

## ⚠️ Note

* This project uses in-memory storage, so all data will be lost when the server restarts.

---

## 👨‍💻 Author

Apu Rayhan
