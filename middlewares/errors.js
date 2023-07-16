module.exports = function (err, req, res, next) {
  if (err) {
    console.log(
      `Error: ${req.method} request from ${req.ip} on route ${req.path}`.red
    );
    res.status(err.status || 500).json({
      error: true,
      message: err.message,
      data: null,
    });
  }
};
