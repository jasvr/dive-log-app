const { Divesite } = require("../models/index");

module.exports = {
  showAllDivesites: function(req, res) {
    Divesite.find({}).then(divesite => {
      res.render("divesite/allDiveSites", {divesite});
    });
  }
};