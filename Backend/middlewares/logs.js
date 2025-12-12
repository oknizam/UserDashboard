
const logMiddleWare = (req, res, next) => {
  console.log("loggin middle ware",);
  next();
}

module.exports = {
  logMiddleWare
}