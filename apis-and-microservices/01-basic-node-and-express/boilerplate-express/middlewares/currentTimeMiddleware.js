module.exports = (req, res, next) => {
  req.time = new Date().toString();
  next();
};