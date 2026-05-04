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
