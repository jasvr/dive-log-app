const express = require("express");
const router = express.Router();
const divesiteController = require("../controllers/divesite");

router.get("/new-dive-site", divesiteController.newDivesite);
router.post("/new-dive-site", divesiteController.createDivesite);
router.get("/all", divesiteController.showAllDivesites);
router.get("/:id", divesiteController.showDivesite);
router.delete("/:id", divesiteController.deleteDivesite);
router.get("/:id/update", divesiteController.showDiveSiteUpdate);
router.put("/:id/update", divesiteController.updateDiveSite);


module.exports = router;