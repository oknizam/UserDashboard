const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const usersRouter = require("./routes/users.router");
const { logMiddleWare } = require("./middlewares/logs");
const postRouter = require("./routes/posts.router");
const connectMongo = require("./mongoDbConnect");
const validateUserInSession = require("./middlewares/auth");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.router");

const app = express();

const PORT = process.env.PORT;

connectMongo(process.env.MONGODB_URL)

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logMiddleWare);

app.use("/auth", authRouter)
app.use("/users", validateUserInSession, usersRouter)
app.use("/posts", validateUserInSession, postRouter) //inline middleware


app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})