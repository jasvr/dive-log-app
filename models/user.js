const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  username: String,
  password: String,
  certification: String,
  certificationDate: String,
  dives: {
    type: Schema.Types.ObjectId,
    ref: "Dive"
  }
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = UserSchema;