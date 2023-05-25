let locationsData = [
  {
    number: 1,
    name: "Mists of Barovia",
    img: "https://i.imgur.com/bgfcLRA.png",
    imgCap: "Mists of Barovia",
    characters: ["Vistani"],
    quests: ["Death House"],
    notes: ["None"],
    quote: "A deadly fog surrounds Barovia and engulfs any creature that tries to leave. Even flying creatures are subject to the fog's effects.",
    main: `   The Mists are a supernatural phenomenon unique to Barovia. The mists create a border through which is seems outlanders are able to enter, but not leave the region. they have a choking, enervating and disorienting effect on those who try to pass through them. The Sunseekers, upon arrival in Barovia, were harried by the motile Mists toward the Village of Barovia and Durst House. 

    The Vistani claim to be able to travel through the Mists at will, but other than selling some fake potions which they claim will allow safe passage, they offer no details on how they do so or what is on the other side.

    Madame Eva claims that Strahd controls the Mists, but that they also imprison him in Barovia.
    `
  },
  {
    number: 2,
    name: "Old Svalich Road",
    img: "https://i.imgur.com/B7TIY5w.png",
    imgCap: "Old Svalich Road",
    characters: ["Strahd", "Vistani"],
    quests: ["None"],
    notes: ["None"],
    quote: "Black pools of water stand like dark mirrors in and around the muddy roadway. Giant trees loom on both sides of the road, their branches clawing at the mist.",
    main: `   The Old Svalich Road snakes all the way throught the valley of Barovia.  The Sunseekers first arrived in Barovia on the road followed through the Village of Barovia, the Old Mill, and Vallaki.`
  },
  {
    number: 3,
    name: "Svalich Woods",
    img: "https://i.imgur.com/aN6jACG.png",
    imgCap: "Svalich Woods",
    characters: ["Vistani", "Wolf Hunters"],
    quests: ["None"],
    notes: ["None"],
    quote: "Towering trees, whose tops are lost in the heavy gray mist, block out all but a death-gray light. The tree trunks are unnaturally close to one another, and the woods have the silence of a forgotten grave, yet exude the feeling of an unvoiced scream.",
    main: `   The Svalich Woods is a name for all the wilds surrounding the various villages and outposts in the valley of Barovia. They are dark and full of terrors, home to wolves, undead, and other monstrous creatures of the night. Most of the creatures in the Svalich Woods are in some way controlled by Strahd von Zarovich, and act as his eyes, ears and fangs against any who are foolish enough to wander there alone.`
  },
  {
    number: 4, 
    name: "River Ivlis",
    img: "https://i.imgur.com/K0dBpvZ.png",
    imgCap: "River Ivlis",
    characters: ["Vistani"],
    quests: ["None"],
    notes: ["None"],
    quote: "This river flows as clear as a blue winter sky through the valley.",
    main: `   The Ivlis River runs Eastward through the Eastern half of Barovia. Along it length lie the Tser Falls and Tser Pool.`
  },
  {
    number: 5,
    name: "Village of Barovia",
    img: "https://i.imgur.com/VP9HxsY.png",
    imgCap: "Castle Ravenloft overlooking the Village of Barovia",
    characters: ["Village of Barovia"],
    quests: ["Death House", "Village Plague", "Missing Villagers", "Find Gertruda", "Protect Ireena", "Replacement Priest"],
    notes: ["Ireena's Diary"],
    quote: "Tall shapes loom out of the dense fog that surrounds everything. The muddy ground underfoot gives way to slick, wet cobblestones. The tall shapes become recognizable as village dwellings. The windows of each house stare out from pools of Blackness. No sound cuts the silence except for mournful sobbing that echoes through the streets from a distance.",
    main: `   The lorem ipsum thingy`,
  },
  {
    number: 6,
    name: "Tser Pool Encampment",
    img: "https://i.imgur.com/4ESFX6g.png",
    imgCap: "Tser Pool Encampment",
    characters: ["Vistani"],
    quests: ["Madame Eva's Tarroka Reading"],
    notes: ["None"],
    quote: `    The road gradually disappears and is replaced by a twisted, muddy path through the trees. Deep ruts in the earth are evidence of the comings and goings of wagons.
    
    The canopy of mist and branches suddenly gives way to black clouds boiling far above. There is a clearing here, next to a river that widens to form a small lake several hundred feet across. Five colorful round tents, each ten feet in diameter, are pitched outside a ring of four barrel-topped wagons. A much larger tent stands near the shore of the lake, its saggin form lit from within. Near this tent, eight unbridled horses drink from the river.
    
    The mournful strains of an accordian clash with the singing of several brightly clad figures around a bonfire. A footpath continues beyond this encampment, meandering north between the river and the forest's edge.`,
    main: ""
  },
  {
    number: 7,
    name: "Black Carriage",
    img: "https://i.imgur.com/BgyFPCi.png"
  },
  {
    number: 8,
    name: "Castle Ravenloft",
    img: "https://i.imgur.com/1xI9Lua.png"
  },
  {
    number: 9,
    name: "Old Mill",
    img: "https://i.imgur.com/OVBsusR.png"
  },
  {
    number: 10,
    name: "Vallaki",
    img: "https://i.imgur.com/coz37xw.png"
  },
  {
    number: 11,
    name: "Vallaki Vistani Camp",
    img: "https://i.imgur.com/BhKS1uC.png"
  },
  {
    number: 12,
    name: "Lake Zarovich",
    img: "https://i.imgur.com/g5gBgCy.png"
  },
  {
    number: 13,
    name: "Mount Baratok",
    img: "https://i.imgur.com/YeJikRd.png"
  },
  {
    number: 14,
    name: "Argonvostholt",
    img: "https://i.imgur.com/a7MDVuA.png"
  },
  {
    number: 15,
    name: "Village of Krezk",
    img: "https://i.imgur.com/KZksRvW.png"
  },
  {
    number: 16,
    name: "Mount Ghakis",
    img: "https://i.imgur.com/UOUFifH.png"
  },
  {
    number: 17,
    name: "Tsolenka Pass",
    img: "https://i.imgur.com/djjBndz.png"
  },
  {
    number: 18,
    name: "Ruins of Berez",
    img: "https://i.imgur.com/ucyJimG.png"
  },
  {
    number: 19,
    name: "Van Richten's Tower",
    img: "https://i.imgur.com/Bl3DflE.png"
  },
  {
    number: 20,
    name: "Wizard of Wines",
    img: "https://i.imgur.com/GlOt2XL.png"
  },
  {
    number: 21,
    name: "Amber Temple",
    img: "https://i.imgur.com/BGevuw0.png"
  },
  {
    number: 22,
    name: "Yester Hill",
    img: "https://i.imgur.com/vulmMJ0.png"
  },
  // {
  //   number: 23,
  //   name: "Werewolf Den",
  //   img: ""
  // }
]

export default locationsData;