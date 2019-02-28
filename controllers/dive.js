const { Dive } = require("../models/dive");
const { Divesite } = require("../models/index");

module.exports = {
  newDive: function(req, res) {
    Divesite.find({}).then(divesites => {
      res.render("dive/newDive", { divesites });
    });
  },
  createNewDive: function(req, res) {
    const {
      number,
      date,
      site,
      visibility,
      airTemp,
      waterTemp,
      weightUsed,
      airUsed,
      bottomTime,
      notes
    } = req.body;
    const owner = req.user;
    console.log("Owner: " + owner);
    Dive.create({
      number,
      date,
      site,
      visibility,
      airTemp,
      waterTemp,
      weightUsed,
      airUsed,
      bottomTime,
      notes,
      owner
    }).then(newDive => {
      res.redirect(`/user/${owner}`);
    });
  }
};
