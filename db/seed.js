const {Location} = require("../models/index");

Location.remove({}).then(function() {
  Location.create({
    id: 1,
    name: "AR-315",
    coordinates: "34.666829,-76.749655",
    type: "Artificial Reef",
    description: "This is one of those dives that can either be complete bust or a delightful surprise. The wreck is essentially a very large hull with holes cut into the sides. When sunk as artificial reefs, most, if not all of the liberty ships were cut down to at least to the upper deck level, thus removing all of the superstructure and other 'interesting' parts. Others were cut down to only 15 feet above the keel! The Parker is no exception. Inside the cargo hol ds is were the interesting structures remain, but not much fish life. There are a lot of easy exit and entry points, so it is relatively safe. Don't be fooled by the fact that this is a shallow dive on an artificial reef---this is a large ship and it take s a while to swim around it. Also, in bad viz and if anchored in the middle of the deck, it can sometimes be tricky to find your anchor line. Hint: Lookup! You can usually see the shadow of your dive boat in the shallow water. The hull is surrounded by a large and seemingly endless field of old automobile tires. It is a maze out there and all piles of tires look the same after awhile. I have been lost out there several times. There are also several other structures sunk around this site including: surplus military aircraft (added 1992),. two 60 foot barges (added 1989), concrete rubble (1990 and 1992) and steel framing (1989). DATA FROM NC-WRECKDIVING.com"
  });
});
