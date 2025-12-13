const { userModel } = require("../model/user.model.js");
const { createSessionId, deleteSession } = require("../services/authSessionService.js");
const { isStateLessValidation } = require("../services/common.js");
const { createJwtTokenForUser } = require("../services/jwtTokenService.js");


const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const response = await userModel.create({
      name, email, password
    });

    return res.status(200).json({ "responseText": "User Created....!" })
  }
  catch (err) {
    console.log("err", err)
    return res.status(400).json({ "responseText": "Bad request....!" })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await userModel.findOne({
      email, password
    })
    if (!response) return res.status(200).json({ "responseText": "Invalid User....!" });

    const token = isStateLessValidation() ? createJwtTokenForUser(response) : createSessionId(response);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    });
    return res.status(200).json(response)
  }
  catch (err) {
    console.log("err", err)
    return res.status(400).json({ "responseText": "Bad request....!" })
  }
}

const logout = (req, res) => {
  try {
    const { uuid } = req.cookies;
    deleteSession(uuid);
    return res.status(200).json({ "responseText": "User logged out....!" });
  }
  catch (err) {
    console.log("err", err)
    return res.status(500).json({ "responseText": "Internal server error!" })
  }
}

module.exports = {
  login,
  logout,
  signUp
}