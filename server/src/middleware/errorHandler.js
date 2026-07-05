function errorHandler(error, req, res, next) {
  console.error("Error:", error.message);

  res.status(error.status || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
}

export default errorHandler;
