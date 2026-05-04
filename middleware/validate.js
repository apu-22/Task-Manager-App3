const VALID_STATUSES = ["To Do", "In Progress", "Completed"];

// Validate task body (for POST and PUT)
const validateTask = (req, res, next) => {
  const { title, status } = req.body;

  //title checks
  if (!title || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  }

  // Title length checks
  if (title.trim().length > 100) {
    return res.status(400).json({
      success: false,
      message: "Title must be 100 characters or less",
    });
  }

  // Status validation 
  if (status && !VALID_STATUSES.includes(status)) {
    return res.status(400).json({
      success: false,
      message: `Status must be one of: ${VALID_STATUSES.join(", ")}`,
    });
  }

  next();
};


// Validate status only (for PATCH)
const validateStatus = (req, res, next) => {
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({
      success: false,
      message: "Status is required",
    });
  }

  if (!VALID_STATUSES.includes(status)) {
    return res.status(400).json({
      success: false,
      message: `Status must be one of: ${VALID_STATUSES.join(", ")}`,
    });
  }

  next();
};


module.exports = { validateTask, validateStatus };