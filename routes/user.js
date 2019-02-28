const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");


router.get("/sign-up", userController.newUser);
router.post("/sign-up", userController.createNewUser);
router.get("/login", userController.showLogin);
router.post("/login", userController.processLogin);
router.get("/:id", userController.show);

module.exports = router;