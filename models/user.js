const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true, trim: true },
  password: String,
  certification: String,
  certificationDate: String,
  dives: [Dive]
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = UserSchema;
