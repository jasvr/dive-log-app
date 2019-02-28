const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  name: String,
  email: { type: String, required: true, trim: true },
  password: String,
  certification: String,
  certificationDate: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = UserSchema;
