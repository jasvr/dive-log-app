const express = require("express");
const router = express.Router();
const authenticatedUser = require("../utils/authenticatedUser");

//Create a way to view the homepage
router.get("/", (req,res) => {
  res.render("index", {user});
});

router.use("/divesite", require("./divesite.js"));
router.use("/user", require("./user.js"));
router.use("/dive", require("./dive.js"));


router.get('*', function(req, res){
  // res.send(404);
  res.render("404");
});

module.exports = router;