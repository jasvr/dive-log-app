const {Location} = require("../models/index");

Location.remove({}).then(function() {
  Location.create({
    id: 1,
    name: "AR-315",
    coordinates: "34.666829,-76.749655",
    type: "Artificial Reef",
    description: "This is one of those dives that can either be complete bust or a delightful surprise. The wreck is essentially a very large hull with holes cut into the sides. When sunk as artificial reefs, most, if not all of the liberty ships were cut down to at least to the upper deck level, thus removing all of the superstructure and other 'interesting' parts. Others were cut down to only 15 feet above the keel! The Parker is no exception. Inside the cargo hol ds is were the interesting structures remain, but not much fish life. There are a lot of easy exit and entry points, so it is relatively safe. Don't be fooled by the fact that this is a shallow dive on an artificial reef---this is a large ship and it take s a while to swim around it. Also, in bad viz and if anchored in the middle of the deck, it can sometimes be tricky to find your anchor line. Hint: Lookup! You can usually see the shadow of your dive boat in the shallow water. The hull is surrounded by a large and seemingly endless field of old automobile tires. It is a maze out there and all piles of tires look the same after awhile. I have been lost out there several times. There are also several other structures sunk around this site including: surplus military aircraft (added 1992),. two 60 foot barges (added 1989), concrete rubble (1990 and 1992) and steel framing (1989). DATA FROM NC-WRECKDIVING.com"
  });

  Location.create({
    id: 2,
    name: "Indra",
    coordinates: "34.557000, -76.851000",
    type: "Artificial Reef",
    description: "This is one of those dives that can be a pleasant surprise for the off-shore NC deep diver — one can actually take a leisurely stroll around the wreck without having to worry about decompression time or checking your pressure gauge every couple of minutes! Just don't come here too often— and don't come here expecting offshore conditions. It is pretty rare for the viz or temp to approach Gulf Stream conditions, but it can happen! The wreck is so close to the surface though that any bright sun will make the viz appear better than it would be on deeper wreck. The Indra hull is completely intact so navigation is easy. And unlike the Theodore Parker, there are still some deck levels and structure which make the dive more interesting for you and the fish. According to the site map for AR-330, there are supposed to be some aircraft wreckage (F-4 and C-130s) a couple of hundred yards to the west of the Indra and some boxcars a couple of hundred yards to the southwest. I have never been on them. DATA FROM NC-WRECKDIVING.com"
  });

  Location.create({
    id: 3,
    name: "U-352",
    coordinates: "34.228033, -76.565117",
    type: "Wreck",
    description: "This is the wreck that most of the people first come to North Carolina to dive. The wreck is small and intact and can be circumnavigated a couple of times during a normal dive. It is sitting on its keel, with a strong (45 degree?) list to the starboard side. Most of what you see on the bottom is the remains of the pressure hull. The U-boat's outer casing has, for the most part, rusted away. For experienced NC divers, the biggest challenge of the U-352 is waiting for the boat captain to hook the wreck. It's small size and rounded edges make it the one the captains love to hate. New NC divers, however, beware. For some reason, over the years, the U-352 has claimed more that its fair share of diving accidents and fatalities. I recently returned to the U-352 after not diving it....at least in the daylight...for nearly a decade. Did two dives on it and had a unexpectedly good time each dive. The wreck has some classic 'Kodak moments' and has an abundance of small to mid-size marine life. The starboard propeller has uncovered...something I certainly don't remember from 10 years ago and the bow seems to have collapsed and twisted a bit more. A fun dive, but still gets a bit crowded for my tastes if you are diving more than a '6 pack' or another boat beats you to the site."
  });
});
