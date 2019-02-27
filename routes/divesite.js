const express = require("express");
const router = express.Router();
const divesiteController = require("../controllers/divesite");

router.get("/all", divesiteController.showAllDivesites);

module.exports = router;