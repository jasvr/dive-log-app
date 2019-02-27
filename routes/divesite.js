const express = require("express");
const router = express.Router();
const divesiteController = require("../controllers/divesite");

router.get("/all", divesiteController.showAllDivesites);
router.get("/:id", divesiteController.showDivesite);

module.exports = router;