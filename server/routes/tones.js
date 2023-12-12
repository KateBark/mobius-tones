// const fs = require("fs");

const router = require("express").Router();
const tonesController = require("../controllers/tones-controller");
const { v4: uuid4 } = require("uuid");

// set up dynamic route for user-specific uploaded videos
// router.route("/:mytones").get(tonesController.index);
router.route("/mytones").get(tonesController.index);

module.exports = router;