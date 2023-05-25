import { BsWallet } from "react-icons/bs";
import { GiLouvrePyramid } from "react-icons/gi";

let locationsData = [
  {
    number: 1,
    name: "Mists of Barovia",
    img: "https://i.imgur.com/bgfcLRA.png",
    imgCap: "Mists of Barovia",
    characters: ["Vistani"],
    quests: ["Death House"],
    notes: ["None"],
    localLinks: {},
    quote: "A deadly fog surrounds Barovia and engulfs any creature that tries to leave. Even flying creatures are subject to the fog's effects.",
    main: `   The Mists are a supernatural phenomenon unique to Barovia. The mists create a border through which is seems outlanders are able to enter, but not leave the region. they have a choking, enervating and disorienting effect on those who try to pass through them. The Sunseekers, upon arrival in Barovia, were harried by the motile Mists toward the Village of Barovia and Durst House. 

    The Vistani claim to be able to travel through the Mists at will, but other than selling some fake potions which they claim will allow safe passage, they offer no details on how they do so or what is on the other side.

    Madame Eva claims that Strahd controls the Mists, but that they also imprison him in Barovia.
    `,
    gallery: [
      {
        cap: "Mists of Barovia",
        img: "https://i.imgur.com/bgfcLRA.png"
      }
    ]
  },
  {
    number: 2,
    name: "Old Svalich Road",
    img: "https://i.imgur.com/B7TIY5w.png",
    imgCap: "Old Svalich Road",
    characters: ["Strahd", "Vistani"],
    quests: ["None"],
    notes: ["None"],
    localLinks: {},
    quote: "Black pools of water stand like dark mirrors in and around the muddy roadway. Giant trees loom on both sides of the road, their branches clawing at the mist.",
    main: `   The Old Svalich Road winds and twists all the way throught the valley of Barovia.  The Sunseekers first arrived in Barovia on the road followed through the Village of Barovia, the Old Mill, and Vallaki.
    
    While the Old Svalich Road is known to be safer than the Svalich Woods that surround it, most travels refuse to follow the road without veteran wolf hunter escorts. Wolf hunters, such as Szoldar and Yevgeni, can be found in major settlements like Vallaki and Krezk. 
    
    It is not uncommon for undead or other horrors to cross the road without warning.`,
    gallery: [
      {
        cap: "Old Svalich",
        img: "https://i.imgur.com/B7TIY5w.png"
      }
    ],
    sections: [
      {
        name: "Wolf attacks",
        content: `      The wolves of the Svalich Woods often hunt for travelers along the Old Svalich Road. 
        
        The Sunseekers have been attacked by wolves several times on their travels. Even their Sunset wagon has done little to protect them from wandering wolf packs.
        
        One one occasion three large dire wolves nearly ripped the wagon apart while attacking the party.`
      },
      {
        name: "First Interaction with Strahd",
        content: "This one thing happened one time"
      }
    ]
  },
  {
    number: 3,
    name: "Svalich Woods",
    img: "https://i.imgur.com/aN6jACG.png",
    imgCap: "Svalich Woods",
    characters: ["Vistani", "Wolf Hunters"],
    quests: ["None"],
    notes: ["None"],
    localLinks: {},
    quote: "Towering trees, whose tops are lost in the heavy gray mist, block out all but a death-gray light. The tree trunks are unnaturally close to one another, and the woods have the silence of a forgotten grave, yet exude the feeling of an unvoiced scream.",
    main: `   The Svalich Woods is a name for all the wilds surrounding the various villages and outposts in the valley of Barovia. They are dark and full of terrors, home to wolves, undead, and other monstrous creatures of the night. Most of the creatures in the Svalich Woods are in some way controlled by Strahd von Zarovich, and act as his eyes, ears and fangs against any who are foolish enough to wander there alone.`,
    gallery: [
      {
        cap: "Svalich Woods",
        img: "https://i.imgur.com/aN6jACG.png"
      }
    ]
  },
  {
    number: 4,
    name: "Village of Barovia",
    img: "https://i.imgur.com/VP9HxsY.png",
    imgCap: "Castle Ravenloft overlooking the Village of Barovia",
    characters: ["Bildrath"],
    quests: ["Death House", "Village Plague", "Missing Villagers", "Find Gertruda", "Protect Ireena", "Replacement Priest"],
    notes: ["Ireena's Diary"],
    localLinks: {},
    quote: "Tall shapes loom out of the dense fog that surrounds everything. The muddy ground underfoot gives way to slick, wet cobblestones. The tall shapes become recognizable as village dwellings. The windows of each house stare out from pools of Blackness. No sound cuts the silence except for mournful sobbing that echoes through the streets from a distance.",
    main: `  `,
    gallery: [
      {
        cap: "View of Castle Ravenloft from the Village of Barovia",
        img: "https://i.imgur.com/yxCPjUN.png"
      },
      {
        cap: "Map of Village of Barovia",
        img: "https://i.imgur.com/zxl3W65.png"
      },
      {
        cap: "Map of Church in Village of Barovia",
        img: "https://i.imgur.com/fxgQqfY.jpg"
      },
      {
        cap: "Blood on the Vine Tavern sign",
        img: "https://i.imgur.com/HU0bX4P.jpg"
      },
      {
        cap: "Blood on the Vine Tavern exterior",
        img: "https://i.imgur.com/fZlkLtN.png"
      },
      {
        cap: "Downtown Village of Barovia",
        img: "https://i.imgur.com/n5ktd93.png"
      },
      {
        cap: "Zombies in the Village Well",
        img: "https://i.imgur.com/V6fdcx7.png"
      },
      {
        cap: "Durst Manor",
        img: "https://i.imgur.com/ZzFQKI3.png"
      },
      {
        cap: "Priests of Osybus",
        img: "https://i.imgur.com/v0UJOI8.png"
      },
      {
        cap: "Map of Durst Manor",
        img: "https://i.imgur.com/hiFFkUj.png"
      }
    ],
    sections: [
      {
        name: "Bildrath's Mercantile",
        content: ""
      },
      {
        name: "Blood on the Vine",
        content: "Vistani owned tavern"
      },
      {
        name: "Mad Mary's Townhouse",
        content: ""
      },
      {
        name: "Burgomaster's Mansion",
        content: ""
      },
      {
        name: "Church",
        content: ""
      },
      {
        name: "Cemetary",
        content: ""
      },
      {
        name: "Durst Manor",
        content: "Who are the Dursts, Adventure in Death House"
      },
    ]
  },
  {
    number: 5,
    name: "Tser Pool Encampment",
    img: "https://i.imgur.com/4ESFX6g.png",
    imgCap: "Tser Pool Encampment",
    characters: ["Vistani"],
    quests: ["Madame Eva's Tarroka Reading"],
    notes: ["None"],
    localLinks: {},
    quote: `    The road gradually disappears and is replaced by a twisted, muddy path through the trees. Deep ruts in the earth are evidence of the comings and goings of wagons.
    
    The canopy of mist and branches suddenly gives way to black clouds boiling far above. There is a clearing here, next to a river that widens to form a small lake several hundred feet across. Five colorful round tents, each ten feet in diameter, are pitched outside a ring of four barrel-topped wagons. A much larger tent stands near the shore of the lake, its saggin form lit from within. Near this tent, eight unbridled horses drink from the river.
    
    The mournful strains of an accordian clash with the singing of several brightly clad figures around a bonfire. A footpath continues beyond this encampment, meandering north between the river and the forest's edge.`,
    main: "",
    gallery: [
      {
        cap: "Tser Pool Encampment",
        img: "https://i.imgur.com/4ESFX6g.png"
      },
      {
        cap: "Map of Tser Pool Encampment",
        img: "https://i.imgur.com/90YbfjU.png"
      },
      {
        cap: "Dancing Vistani",
        img: "https://i.imgur.com/THM9GkI.png"
      },
      {
        cap: "Madame Eva",
        img: "https://i.imgur.com/4TAGQ2R.jpg"
      },
      {
        cap: "Madame Eva's Table",
        img: "https://i.imgur.com/Ene9b1B.jpg"
      }
    ],
    sections: [
      {
        name: "Madame Eva",
        content: ""
      }
    ]
  },
  {
    number: 6,
    name: "Black Carriage",
    img: "https://i.imgur.com/BgyFPCi.png",
    imgCap: "Black Carraige",
    characters: ["Strahd"],
    quests: ["None"],
    notes: ["None"],
    localLinks: {},
    quote: `Even here, in the mountains, the forest and the fog are inescapable. Ahead, the dirt road splits in two, widening toward the east. There you see patches of cobblestone, suggesting that the eastern branch was once an important thoroughfare. 
    
    Parked at the fork in the road, pointed east, is a large black carriage drawn by two black horses. The horses snort puffs of steamy breath into the chill mountain air. The side door of the carriage swings open silently.`,
    main: "",
    gallery: [
      {
        cap: "Black Carriage",
        img: "https://i.imgur.com/BgyFPCi.png"
      }
    ]
  },
  {
    number: 7,
    name: "Castle Ravenloft",
    img: "https://i.imgur.com/1xI9Lua.png",
    imgCap: "Castle Ravenloft",
    characters: ["Castle Ravenloft"],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    quote: `At the center of the far west wall, between floor-to-ceiling mirrors, stands a massive organ. Its pipes blare out a thunderous melody that speaks in its tone of greatness and despair. Seated at the organ facing away from you, Strahd pounds the keys in raptured ecstasy. The music softens as he turns gently and smiles to acknoweldge you.`,
    main: "",
    gallery: [
      {
        cap: "Strahd's organ",
        img: "https://i.imgur.com/4iLw0nC.png"
      },
      {
        cap: "Ravenloft chapel",
        img: "https://i.imgur.com/evHCMah.png"
      },
      {
        cap: "Ba'al Verzi dagger",
        img: "https://i.imgur.com/nngoYtw.png"
      },
      {
        cap: "Strahd's study",
        img: "https://i.imgur.com/RztDbSi.png"
      },
      {
        cap: "Strahd portrait",
        img: "https://i.imgur.com/udpvjxn.png"
      },
      {
        cap: "Von Zarovich family crest",
        img: "https://i.imgur.com/6SASbnM.png"
      },
      {
        cap: "Heart of Sorrow",
        img: "https://i.imgur.com/qIbqsK8.png"
      },
      {
        cap: "Volenta", 
        img: "https://i.imgur.com/2tsTehi.png"
      },
      {
        cap: "Bucephalus",
        img: "https://i.imgur.com/ncyiGNK.png"
      },
      {
        cap: "Tome of Strahd",
        img: "https://i.imgur.com/zciYECT.png"
      },
      {
        cap: "Brazier Room",
        img: "https://i.imgur.com/Bev2dep.png"
      }
    ],
    section: [
      {
        name: "Rats in Ravenloft",
        content: ""
      },
      {
        name: "Umnos in Ravenloft",
        content: ""
      }
    ]
  },
  {
    number: 8,
    name: "Old Mill",
    img: "https://i.imgur.com/OVBsusR.png",
    imgCap: "",
    imgCap: "Old Mill",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    quote: `The Old Svalich Road transitions here from being a winding path through the Balinok Mountains to a lazy trail that hugs the mountainside as it descends into a fog-filled valley. In the heart of the valley you see a walled town near the shores of a great mountain lake, its waters dark and still. A branch in the raod leads west to a promontory, atop which is perched a dilapidated stone windmill, its warped wooden vanes stripped here.`,
    main: "The Old Mill was once owned and operated by the Durst family from the Village of Barovia.",
    gallery: [
      {
        cap: "Old Mill",
        img: "https://i.imgur.com/OVBsusR.png"
      },
      {
        cap: "Bella's Bakery",
        img: "https://i.imgur.com/Z3CS9zj.png"
      },
      {
        cap: "Dream Pastries",
        img: "https://i.imgur.com/eLxD2MB.png"
      },
      {
        cap: "Morgantha's Pastry Cart",
        img: "https://i.imgur.com/p7NId0c.png"
      },
      {
        cap: "Mill Witches",
        img: "https://i.imgur.com/RXoVXmW.png"
      }
    ],
    section: [
      {
        name: "Megaliths",
        content: ""
      },
      {
        name: "Dream pastries",
        content: ""
      },
      {
        name: "Old Mill Burned Down",
        content: ""
      }
    ]
  },
  {
    number: 9,
    name: "Vallaki",
    img: "https://i.imgur.com/coz37xw.png",
    imgCap: "Vallaki Town Square",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    quote: `The Old Svalich Road meanders into a valley watched over by dark, brooding mountains to the north and south. The woods recede, revealing a sullen mountain burg surrounded by a wooden palisade. Thick fog presses up against this wall, as though looking for a way inside, hoping to catch the town aslumber. 
    
    The dirt road ends at a set of sturdy iron gates with a pair of shadowy figures standing behind them. Planted in the ground and flanking the road outside the gates are a half-dozen pikes with wolves' heads impaled on them.`,
    main: "",
    gallery: [
      {
        cap: "Sunseekers enter Vallaki",
        img: "https://i.imgur.com/fgPPAfM.png"
      },
      {
        cap: "Vallaki from a distance",
        img: "https://i.imgur.com/AWH6Imb.png"
      },
      {
        cap: "Map of Vallaki",
        img: "https://i.imgur.com/LOLy8XV.png"
      },
      {
        cap: "Map of Church of St. Andral",
        img: "https://i.imgur.com/Oia2nrv.jpg"
      },
      {
        cap: "Rictavio's Wagon",
        img: "https://i.imgur.com/9hhPNLe.png"
      },
      {
        cap: "Downtown Vallaki",
        img: "https://i.imgur.com/coz37xw.png"
      },
      {
        cap: "Blue Water Inn interior",
        img: "https://i.imgur.com/t3qHoMg.png"
      },
      {
        cap: "Wachterhaus exterior",
        img: "https://i.imgur.com/mfeP7a9.png"
      },
      {
        cap: "Festival of the Blazing Sun flyer",
        img: "https://i.imgur.com/G2pd6iZ.jpg"
      }
    ],
    sections: [
      {
        name: "St. Andral's Church",
        content: "include orphange"
      },
      {
        name: "Blue Water Inn",
        content: ""
      },
      {
        name: "Burgomaster's Mansion",
        content: ""
      },
      {
        name: "Wachterhaus",
        content: ""
      },
      {
        name: "Arasek Stockyards",
        content: ""
      },
      {
        name: "Coffine Maker's Shop",
        content: ""
      },
      {
        name: "Blinsky's Toys",
        content: ""
      },
      {
        name: "Town Square",
        content: "include vallaki market"
      },
      {
        name: "Vistani Camp",
        content: ""
      }
    ]
  },
  {
    number: 10,
    name: "Vallaki Vistani Camp",
    img: "https://i.imgur.com/BhKS1uC.png",
    imgCap: "Vallaki Vistani Camp",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    quote: `The woods part to reveal an expansive clearing: a small, grass-covered hill with low houses built into its sides. Fog obscures the details, but you can see that these buildings feature elegantly carved woodwork and have decorative lanterns hanging from their scultped eaves. 
    
    Atop the hill, above the fog, is a ring of barrel-topped wagons that surround a large tent with a column of smoke pouring out through a hole in the top. The tent is brightly lit from within. Even at this distance, you can smell the odors of wine and horses that emanate from this central area.`,
    main: "",
    gallery: [
      {
        cap: "Vallaki Vistani Camp",
        img: "https://i.imgur.com/BhKS1uC.png"
      },
      {
        cap: "Map of Vallaki Vistani Camp",
        img: "https://i.imgur.com/HflDsfo.png"
      }
    ],
    sections: [
      {
        name: "Rescue Arabelle",
        img: "",
        content: ""
      }
    ]
  },
  {
    number: 11,
    name: "Lake Zarovich",
    img: "https://i.imgur.com/g5gBgCy.png",
    imgCap: "Lake Zarovich",
    characters: ["Bluto", "Arabelle"],
    quests: ["Rescue Arabelle"],
    notes: ["..."],
    localLinks: {},
    quote: "At the foot of the mountain, nestled in the misty forest, is a large lake. The water is perfectly still and dark, reflecting the black clouds overhead like amonstrous mirror.",
    main: "",
    gallery: [
      {
        cap: "Lake Zarovich",
        img: "https://i.imgur.com/g5gBgCy.png",
        content: ""
      }
    ],
    sections: [
      {
        name: "Bluto",
        img: "",
        content: ""
      }
    ]
  },
  {
    number: 12,
    name: "Mount Baratok",
    img: "https://i.imgur.com/YeJikRd.png",
    imgCap: "Mount Baratok",
    characters: ["Mad Mage"],
    quests: ["Mad Mage in the Mountains"],
    notes: ["..."],
    localLinks: {},
    quote: `    North of the mountain lake, the trees begin their steady climb up the slopes of Mount Baratok, its monolithic presence oppressive at this distance. The ground here is rocky, uneven, and tiring to navigate. Even the wolves avoid this neck of the woods. Soon, you climb above the blanket of fog that englulfs the valley. Dark thunderclouds roll overhead.
    
    You see an elk standing on a rocky spur about sicty feet away. Suddenly, it assumes the form of a man in tattered robes. His hair and beard are long, black, and streaked with gray, and his eyes crackle with eldritch power.`,
    main: "",
    gallery: [
      {
        cap: "Mount Baratok",
        img: "https://i.imgur.com/YeJikRd.png"
      }
    ],
    sections: [
      {
        name: "Mad Mage in the Mountains",
        img: "",
        content: ""
      }
    ]
  },
  {
    number: 13,
    name: "Argonvostholt",
    img: "https://i.imgur.com/a7MDVuA.png",
    imgCap: "Argonvostholt",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    quote: "Perched atop a ten-foot-wide, ten-foot-high cube of granite is a moss-covered statue of a dragon, its wings tucked close to its body. The statue looks east, toward the mansion.",
    main: "",
    gallery: [
      {
        cap: "Argonvostholt",
        img: "https://i.imgur.com/a7MDVuA.png"
      },
      {
        cap: "Argonvost statue",
        img: "https://i.imgur.com/udW0ilM.png"
      },
      {
        cap: "Argonvost portrait",
        img: "https://i.imgur.com/gMBEsmH.png"
      },
      {
        cap: "Argonvost",
        img: "https://i.imgur.com/Phx9MiB.png"
      }
    ],
    sections: [
      {
        name: "Order of the Silver Dragon",
        img: "",
        content: ""
      },
      {
        name: "Godfrey's Knights",
        img: "",
        content: ""
      }
    ]
  },
  {
    number: 14,
    name: "Village of Krezk",
    img: "https://i.imgur.com/KZksRvW.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    // quote: `The air grow colder as you approach the walled settlement. Two square towers with peaked roofs flank a stone archway into which is a set pair of twelve-foot tall, ironbound wooden doors. Carved into the arch above the dors is a name: Krezk.
    
    // The walls that extend from the gatehouse are twenty feet high. Atop the parapet you see four figures wearing fur hats and clutching spears. They watch you nervously.`,
    quote: "UNDISCOVERED",
    main: "",
    // gallery: [
    //   {
    //     cap: "",
    //     img: "https://i.imgur.com/UOUFifH.png"
    //   }
    // ]
  },
  {
    number: 15,
    name: "Mount Ghakis",
    img: "https://i.imgur.com/UOUFifH.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    quote: "Legend says Mount Baratok is home to the mysterious Amber Temple.",
    main: `   Mount Ghakis defines the Southern border of the valley of Barovia. It is mirrored by Mount Baratok in the North.

    Barovia's coldest and harshest temperatures can be found around Mount Ghakis. Traversing this region is difficult and dangerous. 

    It was once patrolled by the Order of the Silver Dragon along the road leading up to Tsolenka Pass. It is believed that when Strahd and his forces extinguished the Order, he was able to march right into the Amber Temple and whatever he found there changed him forever, turning him into a vampire and separating Barovia from the material plane.
    `,
    gallery: [
      {
        cap: "Mount Ghakis",
        img: "https://i.imgur.com/UOUFifH.png"
      }
    ]
  },
  {
    number: 16,
    name: "Tsolenka Pass",
    img: "https://i.imgur.com/djjBndz.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    quote: `The shelf of rock on which the mountain road clings grows narrow. To your left, the icy cliffs rise sharply toward dark, rolling clouds. To your right, the ground fallas away into a sea of fog. Ahead, through the wind and snow, you see a high wall of black stone lined with spikes and topped by statues of crouching stone gargoyles with snarling mouths. Set in the center of the wall is a closed iron portcullis, behind which burns a curtain of green flame. 
    
    On the other side of the dark BsWallet, gripping the mountain's edge, is a guard's tower of white stone topped by golden statues of mighty warriors.`,
    main: "",
    gallery: [
      {
        cap: "Tsolenka Pass",
        img: "https://i.imgur.com/G32pbKr.png"
      },
      {
        cap: "Wolfie",
        img: "https://i.imgur.com/U80ipYz.png"
      }
    ],
    sections: [
      {
        name: "Ludmilla's Lab",
        img: "",
        content: ""
      }
    ]
  },
  {
    number: 17,
    name: "Ruins of Berez",
    img: "https://i.imgur.com/ucyJimG.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    // quote: `    Someone has built a ramshackle wooden hut on the stump of what was once an enormous tree. The rotting roots of the stump thrust up from the mire like the legs of a gigantic spider.
    
    // An open doorway is visible on one side of the hut, beneath which floats the upside-down, hollowed out skull of a dragon. Flanking the hut's doorway are two iron cages that dangle like hideous ornaments from the eaves. Scores of ravens are trapped in each one. They squawk and flutter their wings excitedly as you approach.`,
    quote: "UNDISCOVERED",
    main: ""
  },
  {
    number: 18,
    name: "Van Richten's Tower",
    img: "https://i.imgur.com/Bl3DflE.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    // quote: "The tower is old and decrepit, with collapsing scaffolds clinging to one side where a large gash has split the wall. Timeworn griffon statues, their wings and flanks covered with moss",
    quote: "UNDISCOVERED",
    main: ""
  },
  {
    number: 19,
    name: "Wizard of Wines",
    img: "https://i.imgur.com/GlOt2XL.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    // quote: `After a half mile, the road becomes a muddy trail that meanders through the woods, descending gradually until the trees part, revealing a mist-shrouded meadow. The trail splits. One branch heads west into the valley, and the other leads south into dark woods. A wooden signpost at the intersection points west and reads 'Vineyard.'`,
    quote: "UNDISCOVERED",
    main: ""
  },
  {
    number: 20,
    name: "Amber Temple",
    img: "https://i.imgur.com/BGevuw0.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    // quote: "Black marble starcases at each end of the balcony descend thirty feet to the temple floor. The vaulted ceilings are covered in an amber glaze, lending the gloom a golden sheen.",
    quote: "UNDISCOVERED",
    main: ""
  },
  {
    number: 21,
    name: "Yester Hill",
    img: "https://i.imgur.com/vulmMJ0.png",
    imgCap: "...",
    characters: ["..."],
    quests: ["..."],
    notes: ["..."],
    localLinks: {},
    // quote: "In the circle of stones stands a twisted effigy of wood and vines, resembling Strahd Von Zarovich. Embedded where its heart would be is a spear of black iron, continuously dripping with blood, grasped by foul roots twisting up the statue. The echo of a furious battle cry seem to linger in the air - raging to break free.",
    quote: "UNDISCOVERED",
    main: ""
  },
  // {
  //   number: 23,
  //   name: "Werewolf Den",
  //   img: ""
  // }
]

export default locationsData;