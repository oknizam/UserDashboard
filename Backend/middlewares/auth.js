const { isStateLessValidation } = require("../services/common");
const { getSession } = require("../services/authSessionService");
const { verifyToken } = require("../services/jwtTokenService");

const validateUserInSession = (req, res, next) => {
  const cookies = req.cookies;
  const token = isStateLessValidation() ? cookies.token : cookies.uuid;
  if (!token) return res.status(401).json({ responseText: "Invalid Token" });
  req.user = isStateLessValidation() ? verifyToken(token) : getSession(token);
  next();
}

module.exports = validateUserInSession;