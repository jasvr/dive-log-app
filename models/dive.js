const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiveSchema = new Schema({
  diveDate: Date, 
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
})


module.exports = ItemSchema;
