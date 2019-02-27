const express = require("express");
const router = express.Router();


//Create a way to view the homepage
router.get("/", (req,res) => {
  res.render("index");
});

router.use("/divesite", require("./divesite.js"));

module.exports = router;