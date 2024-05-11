// middleware/errorHandler.js

module.exports = function errorHandler(err, req, res, next) {
  console.error(err.stack); // Log error stack trace to the console
  res.status(500).json({ error: "Something went wrong" }); // Send a 500 response with a JSON error message
};
