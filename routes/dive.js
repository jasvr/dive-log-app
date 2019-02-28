const express = require("express");
const router = express.Router();
const diveController = require("../controllers/dive");

router.get("/new-dive", diveController.newDive);
// router.post("/new-dive", diveController.createNewDive);
// router.get("/:id", diveController.showDive);


module.exports = router;

