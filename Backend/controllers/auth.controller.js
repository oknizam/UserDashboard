const { userModel } = require("../model/user.model.js");
const { v4 } = require("uuid");
const { setSession, deleteSession } = require("../services/authSessionService.js");


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
    const sessionId = v4();
    setSession(sessionId, response);
    res.cookie("uid", sessionId);
    return res.status(200).json(response)
  }
  catch (err) {
    console.log("err", err)
    return res.status(400).json({ "responseText": "Bad request....!" })
  }
}

const logout = (req, res) => {
  try {
    const { sessionId } = req.body;
    deleteSession(sessionId);
    return res.status(200).json({ "responseText": "User logged out....!" });
  }
  catch (err) {
    console.log("err", err)
    return res.status(400).json({ "responseText": "Bad request....!" })
  }
}

module.exports = {
  login,
  logout,
  signUp
}