const fs = require("fs");

const router = require("express").Router();
const channelController = require("../controllers/channel-controller");
const { v4: uuid4 } = require("uuid");

router.route("/channel").get(channelController.index);

module.exports = router;