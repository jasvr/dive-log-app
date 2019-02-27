const mongoose = require("../db/connection");

module.exports = {
  Dive: mongoose.model("Dive", require("./dive")),
  User: mongoose.model("User", require("./user")),
  Location: mongoose.model("Location", require("./location"))
};