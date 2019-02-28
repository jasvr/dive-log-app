const { Divesite } = require("../models/index");
const { Dive } = require("../models/index");

Divesite.deleteMany({}).then(function() {
  Divesite.create({
    id: 1,
    name: "AR-315",
    coordinates: "34.666829,-76.749655",
    type: "Artificial Reef",
    description:
      "This is one of those dives that can either be complete bust or a delightful surprise. The wreck is essentially a very large hull with holes cut into the sides. When sunk as artificial reefs, most, if not all of the liberty ships were cut down to at least to the upper deck level, thus removing all of the superstructure and other 'interesting' parts. Others were cut down to only 15 feet above the keel! The Parker is no exception. Inside the cargo hol ds is were the interesting structures remain, but not much fish life. There are a lot of easy exit and entry points, so it is relatively safe. Don't be fooled by the fact that this is a shallow dive on an artificial reef---this is a large ship and it take s a while to swim around it. Also, in bad viz and if anchored in the middle of the deck, it can sometimes be tricky to find your anchor line. Hint: Lookup! You can usually see the shadow of your dive boat in the shallow water. The hull is surrounded by a large and seemingly endless field of old automobile tires. It is a maze out there and all piles of tires look the same after awhile. I have been lost out there several times. There are also several other structures sunk around this site including: surplus military aircraft (added 1992),. two 60 foot barges (added 1989), concrete rubble (1990 and 1992) and steel framing (1989). DATA FROM NC-WRECKDIVING.com"
  });

  Divesite.create({
    id: 2,
    name: "Indra",
    coordinates: "34.557000, -76.851000",
    type: "Artificial Reef",
    description:
      "This is one of those dives that can be a pleasant surprise for the off-shore NC deep diver — one can actually take a leisurely stroll around the wreck without having to worry about decompression time or checking your pressure gauge every couple of minutes! Just don't come here too often— and don't come here expecting offshore conditions. It is pretty rare for the viz or temp to approach Gulf Stream conditions, but it can happen! The wreck is so close to the surface though that any bright sun will make the viz appear better than it would be on deeper wreck. The Indra hull is completely intact so navigation is easy. And unlike the Theodore Parker, there are still some deck levels and structure which make the dive more interesting for you and the fish. According to the site map for AR-330, there are supposed to be some aircraft wreckage (F-4 and C-130s) a couple of hundred yards to the west of the Indra and some boxcars a couple of hundred yards to the southwest. I have never been on them. DATA FROM NC-WRECKDIVING.com"
  });

  Divesite.create({
    id: 3,
    name: "U-352",
    coordinates: "34.228033, -76.565117",
    type: "Wreck",
    description:
      "This is the wreck that most of the people first come to North Carolina to dive. The wreck is small and intact and can be circumnavigated a couple of times during a normal dive. It is sitting on its keel, with a strong (45 degree?) list to the starboard side. Most of what you see on the bottom is the remains of the pressure hull. The U-boat's outer casing has, for the most part, rusted away. For experienced NC divers, the biggest challenge of the U-352 is waiting for the boat captain to hook the wreck. It's small size and rounded edges make it the one the captains love to hate. New NC divers, however, beware. For some reason, over the years, the U-352 has claimed more that its fair share of diving accidents and fatalities. I recently returned to the U-352 after not diving it....at least in the daylight...for nearly a decade. Did two dives on it and had a unexpectedly good time each dive. The wreck has some classic 'Kodak moments' and has an abundance of small to mid-size marine life. The starboard propeller has uncovered...something I certainly don't remember from 10 years ago and the bow seems to have collapsed and twisted a bit more. A fun dive, but still gets a bit crowded for my tastes if you are diving more than a '6 pack' or another boat beats you to the site. DATA FROM NC-WRECKDIVING.com"
  });

  Divesite.create({
    id: 4,
    name: "Caribsea",
    coordinates: "34.606900, -76.314100",
    type: "Wreck",
    description:
      "Because it is relatively small and the wreckage is contiguous from bow-to-stern, the Caribsea is an easy wreck to navigate on-- even in the worst visibility! The boilers, engine and bow are the highest and most notable sites on the wreck. This wreck is one of the best for marine life. It is often covered up with bait which attracts sharks, amberjacks and other large predators. Visit the bow while you still can, because it won't remain standing for long. The beams supporting the upper deck have given way and the deck, with its heavy anchor windlass, has been dropping and twisting to star board ever since 1993. The storms of late 1994 caused more significant damage. The upper decking is now almost completely gone. The windlass has twisted and dropped even further and has dragged the port anchor on to what used to be the upper deck. Much of the fish concentration and feeding dynamics occur above the high point of the bow. Just hanging above the bow for the entire dive can prove entertaining as your are engulfed in schools of bait, groups of sandtigers sharks and marrauding bands of amberjacks. In the fall, the viz can often be reduced to less than one foot by the dense schools of bait. Update 2006: The Caribsea is getting more and more fragile — particularly in the bow section. The weight of the windlass has collapsed the decks and all the surface metal is thin and rotten. The two anchors, once sitting proudly in the hawse pipes are now gone. The starbard anchor has fallen to the sand and the port anchor has been covered in the collapsing debris. Even the anchor windlass has started to collapse. The engine and boilers remain as solid as ever and fish life still abounds, with groups of sentinel sandtigers sharks sitting above the bow and stern. DATA FROM NC-WRECKDIVING.com"
  });

  Divesite.create({
    id: 5,
    name: "Dibba Rock",
    coordinates: "25.602242, 56.350164",
    type: "Reef",
    description:
      "This small rocky island has long sloping sides that are covered by a reef formed by a variety of soft and boulder corals. The side nearest the shore is only 3-4m deep,so it should be dived at high tide. The seaward side has a long sloping rocky reef with many green and purple whip corals that make it a very attractive dive site. There are two mooring buoys on the site, one located to the north-west end of the site with colourful corals, where you're virtually guaranteed a sighting of a turtle. The buoys are perfectly situated to allow you to dive the seaward side of the site. Just make sure you choose the correct buoy depending on the current. DATA FROM SCUBASHADE.com"
  });

  Divesite.create({
    id: 6,
    name: "Fujeirah Artificial Reef",
    coordinates: "25.603560, 56.346097",
    type: "Reef",
    description:
      "An artificial reef near Dibba Rock. Great second dive after Dibba Rock."
  });
});

Dive.deleteMany({}).then(() => {

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

  // Divesite.findOne({ name: "Dibba Rock" }, "_id").then(diveID => {
  //   console.log("Dive id selected: " + diveID);
  //   Dive.create({
  //     number: 2,
  //     site: diveID._id,
  //     visitbility: 40,
  //     airTemp: 88,
  //     waterTemp: 81,
  //     weightUsed: 7,
  //     airUsed: 3200,
  //     bottomTime: 42,
  //     notes: "Took lots of great photos."
  //   });
  // });

});
