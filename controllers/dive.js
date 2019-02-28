const { Dive } = require("../models/index");
const { Divesite } = require("../models/index");
const moment = require("moment");

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
  },
  showDive: function(req, res) {
    Dive.findById(req.params.id).then(dive => {
      Divesite.findById(dive.site).then(divesite => {
        let prettyDate = moment(dive.date);
        prettyDate = prettyDate.format("MMM Do, YYYY");
        res.render("dive/showDive", {dive, divesite, prettyDate});
      });
    });
  }
};
