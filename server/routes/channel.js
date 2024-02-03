const router = require("express").Router();
const channelController = require("../controllers/channel-controller");

router.route("/").post(channelController.index);

module.exports = router;