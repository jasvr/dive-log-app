const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiveSchema = new Schema({
  diveNumber: Number,
  diveDate: { type: Date, default: Date.now() },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location"
  },
  visibility: Number,
  airTemp: Number,
  waterTemp: Number,
  weightUsed: Number,
  airUsed: Number,
  bottomTime: Number,
  comments: String
});

module.exports = DiveSchema;
