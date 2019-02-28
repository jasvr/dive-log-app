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
  }
  // createNewUser: function(req, res) {
  //   const { name, email, password, certification, certificationDate } = req.body;
    
    
  // }
}