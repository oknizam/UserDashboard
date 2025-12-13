const { userModel } = require("../model/user.model.js");

const getUsers = async (req, res) => {
  try {
    const response = await userModel.find({});
    return res.status(200).json({ count: response.length, users: response })
  }
  catch (err) {
    return res.status(500).json({ responseText: "Error in server try again" })
  }
}

module.exports = {
  getUsers,
}