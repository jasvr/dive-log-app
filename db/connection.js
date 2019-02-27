const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/diveLog");
mongoose.Promise = Promise;

module.exports = mongoose;
