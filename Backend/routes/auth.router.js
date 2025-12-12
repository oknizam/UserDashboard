const express = require("express");
const { signUp, login, logout } = require("../controllers/auth.controller");
const { Router } = express;

const authRouter = Router();


authRouter.post("/signUp", signUp)
authRouter.post("/login", login)
authRouter.post("/logout", logout)

module.exports = authRouter;
