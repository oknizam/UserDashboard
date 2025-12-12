const express = require("express");
const usersRouter = require("./routes/users.router");
const { logMiddleWare } = require("./middlewares/logs");
const postRouter = require("./routes/posts.router");
const connectMongo = require("./mongoDbConnect");
const validateUserInSession = require("./middlewares/auth");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.router");

const app = express();

connectMongo("mongodb://localhost:27017/Learning")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logMiddleWare);

app.use("/auth", authRouter)
app.use("/users", validateUserInSession, usersRouter)
app.use("/posts", validateUserInSession, postRouter) //inline middleware


app.listen(3000, () => {
  console.log("listening to port 3000")
})