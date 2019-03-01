const express = require("express");
const router = express.Router();
const diveController = require("../controllers/dive");

router.get("/new-dive", diveController.newDive);
router.post("/new-dive", diveController.createNewDive);
router.get("/:id", diveController.showDive);
router.get("/:id/update", diveController.showDiveUpdate);
router.put("/:id/update", diveController.diveUpdate);
router.delete("/:id", diveController.deleteDive);


module.exports = router;

