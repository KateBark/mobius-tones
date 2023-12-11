// const fs = require("fs");
const router = require("express").Router();
const videosController = require("../controllers/videos-controller");
const { v4: uuid4 } = require("uuid");

router.route("/").get(videosController.index);

// set up dynamic route for user-specific uploaded videos

module.exports = router;