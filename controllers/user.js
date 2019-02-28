const { User } = require("../models/index");

module.exports = {
  show: function(req, res) {
    User.findById(req.params.id).then(user => {
      console.log(user);
      res.render("user/showUser.hbs", {user});
    });
  }
}