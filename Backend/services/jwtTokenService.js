const jwt = require("jsonwebtoken");
const TOKEN_SECRETE = "NIZAM@$*123*321$()";

const createJwtTokenForUser = (user) => {
  user = { _id: user._id.toString(), ...user }
  return jwt.sign(user, TOKEN_SECRETE);
}

const verifyToken = (token) => {
  try {
    if (!token) return null;
    return jwt.verify(token, TOKEN_SECRETE)
  }
  catch (err) {
    console.log("JWT token verify fail", err)
  }
}

module.exports = {
  createJwtTokenForUser,
  verifyToken
}