const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");

router.route("/").get(homeController.index).post(homeController.store);

module.exports = router;
