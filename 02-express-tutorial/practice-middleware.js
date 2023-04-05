function consoleLog(req, res, next) {
  console.log('Middleware function invoked');
  next();
}

module.exports = consoleLog;
