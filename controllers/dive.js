const { Dive } = require("../models/dive");

module.exports = {
  newDive: function(req, res) {
    res.render("dive/newDive");
  }
}