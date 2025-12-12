const express = require("express");
const { getUsers } = require("../controllers/user.controller");
const { Router } = express;

const usersRouter = Router();

usersRouter.get("/", getUsers)

module.exports = usersRouter;