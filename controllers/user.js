const passport = require("passport");
const { User } = require("../models/index");
const { Dive } = require("../models/index");
const { Divesite} = require("../models/index");

module.exports = {
  show: function(req, res) {
    User.findById(req.params.id).then(user => {
      Dive.find({owner: req.params.id}).then(usersDives => {
        console.log(usersDives);
        res.render("user/showUser", { user, usersDives });
      })
    });
  },
  newUser: function(req, res) {
    res.render("user/userSignUp.hbs");
  },
  createNewUser: function(req, res) {
    const {
      name,
      username,
      password,
      certification,
      certificationDate
    } = req.body;
    User.register(new User({ username }), password)
      .then(user => {
        const authenticate = passport.authenticate("local");
        user.name = name;
        user.certification = certification;
        user.certificationDate = certificationDate;
        user.save();
        console.log("Got here."); 

        authenticate(req, res, function() {
          req.flash("success", "Welcome aboard!");
          res.redirect("/");
        });
      })
      .catch(err => {
        req.flash("error", err.message);
        res.redirect("/user/sign-up");
        console.log(err.message);
      });
  },
  showLogin: function(req, res) {
    res.render("user/login.hbs");
  },
  processLogin: function(req, res, next) {
    console.log("Processing login.");
    const authenticate = passport.authenticate("local", function(
      err,
      user,
      info
    ) {
      if (err || !user) {
        console.log("Error: " + info.message);
        req.flash("error", info.message);
        res.redirect("user/login");
      }

      req.logIn(user, function(err) {
        if (err) {
          req.flash("error", err.message);
          console.log(err.message);
          return res.redirect("user/login");
        }

        req.flash("success", "You logged in.");
        console.log(`Successful login by ${user.username}.`);
        return res.redirect("/");
      });
    });
    authenticate(req, res, next);
  },
  processLogout: function(req, res) {
    req.logout();
    res.redirect("/");
  }
};
