const router = require("express").Router();
const videosController = require("../controllers/videos-controller");

router.route("/").get(videosController.index);

router.route("/:id").get(videosController.singleVideo);

module.exports = router;