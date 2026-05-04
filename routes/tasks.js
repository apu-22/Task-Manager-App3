const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { validateTask, validateStatus } = require("../middleware/validate");

// creates array as a memory storeage
let tasks = [
  {
    id: uuidv4(),
    title: "To-Do Task",
    description: "This is a sample task using CRUD operations.",
    status: "To Do",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
   {
    id: uuidv4(),
    title: "Sample Task 1",
    description: "This is a sample task 1",
    status: "To Do List",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];


const findTask = (id) => tasks.find((t) => t.id === id);

// ─── GET /api/tasks 
router.get("/", (req, res) => {
  let result = [...tasks];
  const { status, search, sort } = req.query;

  // Filter by status
  if (status) {
    result = result.filter(
      (t) => t.status.toLowerCase() === status.toLowerCase()
    );
  }

  // Search by title or description
  if (search) {
    const keyword = search.toLowerCase();
    result = result.filter(
      (t) =>
        t.title.toLowerCase().includes(keyword) ||
        (t.description && t.description.toLowerCase().includes(keyword))
    );
  }

  // Sort by createdAt
  if (sort === "asc") {
    result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  } else if (sort === "desc") {
    result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  //ressponce with filtered tasks
  res.json({
    success: true,
    count: result.length,
    data: result,
  });
});


// ─── GET /api/tasks/:id 
router.get("/:id", (req, res) => {
  const task = findTask(req.params.id);
  if (!task) {
    return res.status(404).json({ success: false, message: "Task not found" });
  }
  res.json({ success: true, data: task });
});

