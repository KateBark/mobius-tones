const router = require("express").Router();
const tonesController = require("../controllers/tones-controller");

router.route("/:id").get(tonesController.index);

module.exports = router;