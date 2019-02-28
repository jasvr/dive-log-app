const express = require("express");
const router = express.Router();
const authenticatedUser = require("../utils/authenticatedUser");

//Create a way to view the homepage
router.get("/", (req,res) => {
  res.render("index");
});

router.use("/divesite", require("./divesite.js"));
router.use("/user", require("./user.js"));

module.exports = router;