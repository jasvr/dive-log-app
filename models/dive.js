const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiveSchema = new Schema({
  number: Number,
  date: { type: Date, default: Date.now() },
  site: {
    type: Schema.Types.ObjectId,
    ref: "Divesite"
  },
  visibility: Number,
  airTemp: Number,
  waterTemp: Number,
  weightUsed: Number,
  airUsed: Number,
  bottomTime: Number,
  notes: String
});

module.exports = DiveSchema;
