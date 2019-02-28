const { User } = require("../models/index");

User.deleteMany({}).then(function() {
  User.create({
    name: "Paul Blake",
    username: "pnblake@gmail.com",
    password: null,
    certification: "SSI - Junior Open Water Diver",
    certificationDate: "2014-03-20"
  });
});
