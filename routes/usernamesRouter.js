const { Router } = require("express");
const usernamesRouter = Router();
const usernamesController = require("../controllers/usernamesController");

usernamesRouter.get("/", usernamesController.usernamesGet);
usernamesRouter.get("/new", usernamesController.usernamesNewGet);
usernamesRouter.post("/new", usernamesController.usernamesNewPost);
usernamesRouter.get("/delete", usernamesController.usernamesDeleteGet);

module.exports = usernamesRouter;
