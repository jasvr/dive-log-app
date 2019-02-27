const { Divesite } = require("../models/index");

module.exports = {
  showAllDivesites: function(req, res) {
    Divesite.find({}).then(divesite => {
      res.render("divesite/allDiveSites", {divesite});
    });
  },
  showDivesite: function(req, res) {
    Divesite.findById(req.params.id).then(divesite => {
      console.log(divesite);
      res.render("divesite/showDivesite.hbs", {divesite});
    });
  }
};