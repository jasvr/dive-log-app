const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DivesiteSchema = new Schema({
  name: String,
  coordinates: String,
  type: String,
  description: String
});

module.exports = DivesiteSchema;
