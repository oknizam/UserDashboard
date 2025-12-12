const { getPosts } = require("../controllers/posts.controller");

const Router = require("express").Router;

const postRouter = Router();

postRouter.get("/", getPosts);

module.exports = postRouter;