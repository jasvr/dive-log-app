const { Divesite } = require("../models/index");
const { Dive } = require("../models/index");

Dive.deleteMany({}).then(function() {

  Divesite.findOne({ name: "Dibba Rock" }, "_id").then(diveID => {
    console.log("Dive id selected: " + diveID);
    Dive.create({
      number: 1,
      site: diveID._id,
      visitbility: 50,
      airTemp: 82,
      waterTemp: 75,
      weightUsed: 8,
      airUsed: 3000,
      bottomTime: 39,
      notes: "Really great dive. Saw lots of fish."
    });
  });

});