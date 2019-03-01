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
    Divesite.findById(site, "name").then(retrievedSiteName => {
      Dive.create({
        number,
        date,
        site,
        siteName: retrievedSiteName.name,
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
    });
  },
  showDive: function(req, res) {
    Dive.findById(req.params.id).then(dive => {
      console.log("Dive: " + dive.site);
      Divesite.findById(dive.site).then(divesite => {
        console.log(divesite.name);
        let prettyDate = moment(dive.date);
        prettyDate = prettyDate.format("MMM Do, YYYY");
        res.render("dive/showDive", { dive, divesite, prettyDate });
      });
    });
  },
  showDiveUpdate: function(req, res) {
    Dive.findById(req.params.id).then(dive => {
      Divesite.findById(dive.site).then(originalDivesite => {
        Divesite.find({}).then(allDivesites => {
          res.render("dive/diveUpdate", { dive, originalDivesite, allDivesites });
        });
      });
    });
  },
  diveUpdate: function(req, res) {
    const {number, date, site, visibility, airTemp, waterTemp,weightUsed,airUsed,bottomTime,notes,owner} = req.body;
    Divesite.findById(site, "name").then(retrievedSiteName => {
      Dive.findOneAndUpdate(req.params.id,
        {
          number,
          date,
          site,
          siteName: retrievedSiteName.name,
          visibility,
          airTemp,
          waterTemp,
          weightUsed,
          airUsed,
          bottomTime,
          notes,
          owner: req.user.id
        }).then(dive => {
          res.redirect(`/dive/${dive._id}`);
        })
        .catch(err => {
          req.flash("error", err.message);
          console.log(err.message);
          res.redirect("/");
        });
    });
  },
  deleteDive: function(req, res) {
    Dive.deleteOne({ _id: req.params.id }).then(dive => {
      res.redirect("/");
    });
  }
};
