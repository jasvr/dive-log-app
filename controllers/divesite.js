const { Divesite } = require("../models/index");

module.exports = {
  showAllDivesites: function(req, res) {
    Divesite.find({}).then(divesite => {
      res.render("divesite/allDiveSites", { divesite });
    });
  },
  showDivesite: function(req, res) {
    Divesite.findById(req.params.id).then(divesite => {
      console.log(divesite);
      res.render("divesite/showDivesite.hbs", { divesite });
    });
  },
  newDivesite: function(req, res) {
    res.render("divesite/newDivesite");
  },
  createDivesite: function(req, res) {
    const { name, coordinates, type, description } = req.body;
    Divesite.create({
      name,
      coordinates,
      type,
      description
    }).then(newDivesite => {
      res.redirect(`/divesite/${newDivesite._id}`);
    });
  },
  deleteDivesite: function(req, res) {
    Divesite.deleteOne({ _id: req.params.id }).then(divesite => {
      res.redirect("/");
    });
  },
  showDiveSiteUpdate: function(req, res) {
    Divesite.findById(req.params.id).then(divesite => {
      res.render("divesite/updateDivesite", { divesite });
    });
  },
  updateDiveSite: function(req, res) {
    const { name, coordinates, type, description } = req.body;
    Divesite.findOneAndUpdate(req.params.id,
      {
        name,
        coordinates,
        type,
        description
      })
      .then(divesite => {
        res.redirect(`/divesite/${divesite._id}`);
      })
      .catch(err => {
        req.flash("error", err.message);
        res.redirect("/");
      });
  }
};
