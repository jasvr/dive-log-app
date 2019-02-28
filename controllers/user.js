const passport = require("passport");
const { User } = require("../models/index");

module.exports = {
  show: function(req, res) {
    User.findById(req.params.id).then(user => {
      console.log(user);
      res.render("user/showUser.hbs", {user});
    });
  },
  newUser: function(req, res) {
    res.render("user/userSignUp.hbs");
  },
  createNewUser: function(req, res) {
    const { name, username, password, certification, certificationDate } = req.body;
    User.register(new User({ username }), password).then(user => {
      const authenticate = passport.authenticate("local");
      authenticiate(req, res, function() {
        req.flash(req, res, function() {
          req.flash("success", "You created an account!");
          res.direct("/");
        });
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
  }
  // createNewUser: function(req, res) {
  //   const { name, email, password, certification, certificationDate } = req.body;
    
    
  // }
}