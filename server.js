const express = require("express");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Task Manager API",
    endpoints: {
      getAllTasks: "GET /api/tasks",
      getTaskById: "GET /api/tasks/:id",
      createTask: "POST /api/tasks",
      updateTask: "PUT /api/tasks/:id",
      deleteTask: "DELETE /api/tasks/:id",
      updateStatus: "PATCH /api/tasks/:id/status",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});