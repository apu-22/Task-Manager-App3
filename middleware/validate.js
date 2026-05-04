const VALID_STATUSES = ["To Do", "In Progress", "Completed"];

// Validate task body (for POST and PUT)
const validateTask = (req, res, next) => {
  const { title, status } = req.body;

  // Title is required
  if (!title || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  }

  // Title max length
  if (title.trim().length > 100) {
    return res.status(400).json({
      success: false,
      message: "Title must be 100 characters or less",
    });
  }

  // Status validation (if provided)
  if (status && !VALID_STATUSES.includes(status)) {
    return res.status(400).json({
      success: false,
      message: `Status must be one of: ${VALID_STATUSES.join(", ")}`,
    });
  }

  next();
};

module.exports = { validateTask, validateStatus };