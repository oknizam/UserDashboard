const mongoose = require("mongoose")

const connectMongo = (url) => {
  try {
    return mongoose.connect(url)
  }
  catch (err) {
    console.log("error", err)
  }
}

module.exports = connectMongo;
