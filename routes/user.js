const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");


router.get("/sign-up", userController.newUser);
router.get("/:id", userController.show);

module.exports = router;