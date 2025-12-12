const { getSession } = require("../services/authSessionService");

const validateUserInSession = (req, res, next) => {
  const { uuid } = req.cookie;
  if (!uuid) return res.status(401).json({ responseText: "Invalid Token" });
  req.user = getSession(uuid);
  next();
}

module.exports = validateUserInSession;