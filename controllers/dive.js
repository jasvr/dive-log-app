const { Dive } = require("../models/index");
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
      owner: req.user._id
    }).then(newDive => {
      res.redirect(`/user/${req.user._id}`);
    });
  }
};
