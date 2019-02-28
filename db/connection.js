const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/diveLog", { useNewUrlParser: true });
mongoose.Promise = Promise;

module.exports = mongoose;
